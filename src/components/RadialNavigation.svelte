<script>
  import { onMount, tick } from "svelte";
  import { getUISprite, radialNavService } from "../tools";
  import { goto } from "@sapper/app";
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  import radialNavData from "../data/radialNav";
  import NavMenuItem from "./NavMenuItem";

  export let _style = "";

  const TAU = 2 * Math.PI;
  let canvas,
    w,
    h,
    px = Infinity,
    py = Infinity,
    ctx,
    assets,
    state,
    canActivate = true;
  const menuSize = tweened(0, {
    duration: 300,
    easing: cubicInOut
  });

  $: centerR = 0.07 * w;
  $: isMouseOverCenter = px ** 2 + py ** 2 <= centerR ** 2;
  $: isMouseOverMenu = px ** 2 + py ** 2 <= w ** 2 / 4;
  $: isStart = !state || state.value == "closed";
  $: cursorPointer = isStart ? isMouseOverCenter : isMouseOverMenu;

  function onHover(e) {
    px = e.layerX - w / 2;
    py = e.layerY - h / 2;
    if (isMouseOverCenter) {
      if (canActivate && isStart) {
        radialNavService.send("ACTIVATE");
        canActivate = false;
      }
    } else canActivate = true;
  }

  async function onClick(e) {
    e.stopPropagation();
    px = e.layerX - w / 2;
    py = e.layerY - h / 2;
    await tick();
    if (isMouseOverCenter) {
      if (isStart) radialNavService.send("ACTIVATE");
      else if (state.context.history.length == 1) {
        radialNavService.send("CLOSE");
        canActivate = false;
      } else radialNavService.send("BACK");
    } else if (isMouseOverMenu) {
      const {
        value,
        context: { history }
      } = state;
      const curMenu = history[0];
      let sigma = Math.PI - Math.atan2(px, py),
        TAU = 2 * Math.PI,
        step = TAU / curMenu.children.length;
      let i = Math.floor(sigma / step);
      radialNavService.send({ type: "NAVIGATE", value: i });
    } else radialNavService.send("CLOSE");
  }

  function exteriorClick(e) {
    radialNavService.send("CLOSE");
  }

  onMount(async () => {
    ctx = canvas.getContext("2d");
    assets = await Promise.all(
      ["img/cursor.svg", "img/close.svg", "img/touch.svg"].map(getUISprite)
    );
    radialNavService.start("closed");
    radialNavService.subscribe(async newState => {
      let newMenu = newState.context.history[0];
      if (newMenu.children) {
        switch (newState.value) {
          case "opening":
            state = newState;
            await menuSize.set(1);
            radialNavService.send("ANIMATION_DONE");
            break;
          case "navigating":
            await menuSize.set(0);
            state = newState;
            await menuSize.set(1);
            radialNavService.send("ANIMATION_DONE");
            break;
          case "closing":
            await menuSize.set(0);
            radialNavService.send("ANIMATION_DONE");
            break;
          default:
            state = newState;
            break;
        }
      } else goto(newMenu.page);
    });
    requestAnimationFrame(render);
  });

  function render() {
    const {
      value,
      context: { history }
    } = state || { value: "closed", context: { history: [] } };
    const [cursor, close, touch] = assets;
    const curMenu = history[0];

    ctx.save();
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.translate(w / 2, h / 2);

    switch (value) {
      case "closed":
        ctx.fillStyle = "black";
        ctx.strokeStyle = "white";
        ctx.ellipse(0, 0, centerR, centerR, 0, 0, TAU);
        ctx.fill();
        ctx.stroke();
        ctx.drawImage(
          innerWidth <= 768 ? touch : cursor,
          -0.7 * centerR,
          -0.7 * centerR,
          1.4 * centerR,
          1.4 * centerR
        );
        break;
      default:
        // menu
        ctx.scale($menuSize, $menuSize);
        ctx.fillStyle = "#333333";
        ctx.strokeStyle = "white";
        ctx.ellipse(0, 0, w / 2 - 4, w / 2 - 4, 0, 0, TAU); // almost to the edge
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `${Math.ceil(0.5 * centerR)}px sans-serif`;
        let step = TAU / curMenu.children.length,
          sigma = -Math.PI / 2;
        for (const child of curMenu.children) {
          ctx.moveTo(0, 0);
          ctx.lineTo(
            Math.cos(sigma) * (w / 2 - 4), // almost to the edge
            Math.sin(sigma) * (w / 2 - 4)
          );
          ctx.fillText(
            child.label,
            (Math.cos(sigma + step / 2) * w) / 4,
            (Math.sin(sigma + step / 2) * w) / 4
          );
          sigma += step;
        }
        ctx.stroke();
        // center dot
        ctx.setTransform(1, 0, 0, 1, w / 2, h / 2); // reset scale transorm
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.strokeStyle = "white";
        ctx.ellipse(0, 0, centerR, centerR, 0, 0, TAU);
        ctx.fill();
        ctx.stroke();
        ctx.globalAlpha = $menuSize;
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        ctx.font = `${Math.ceil(0.4 * centerR)}px sans-serif`;
        let quarterCenter = 0.25 * centerR;
        ctx.fillText(history.length > 1 ? "Back" : "Close", 0, 0);
        ctx.drawImage(
          close,
          -quarterCenter / 2,
          quarterCenter,
          quarterCenter,
          quarterCenter
        );
        break;
    }
    ctx.restore();
    requestAnimationFrame(render);
  }
</script>

<style>
  canvas {
    -webkit-tap-highlight-color: transparent;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
</style>

<svelte:window on:click={exteriorClick} />

<nav
  style={_style}
  bind:clientWidth={w}
  bind:clientHeight={h}
  on:mousemove={onHover}
  on:click={onClick}
  class:cursor-pointer={cursorPointer}
  class="radial-menu text-white">
  <canvas bind:this={canvas} width={w} height={h}>
    <NavMenuItem data={radialNavData} />
  </canvas>
</nav>

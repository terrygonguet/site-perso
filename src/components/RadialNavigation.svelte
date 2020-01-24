<script>
  import { onMount, tick } from "svelte";
  import { getUISprite, radialNavMachine, range } from "../tools";
  import { goto } from "@sapper/app";
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  import radialNavData, { icons } from "../data/radialNav";
  import NavMenuItem from "./NavMenuItem";
  import { interpret } from "@xstate/fsm";

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
    canActivate = true,
    radialNavService;
  const menuSize = tweened(0, {
    duration: 300,
    easing: cubicInOut
  });

  $: centerR = 0.07 * w;
  $: isMouseOverCenter = px ** 2 + py ** 2 <= centerR ** 2;
  $: isMouseOverMenu = px ** 2 + py ** 2 <= w ** 2 / 4;
  $: isStart = !state || state.value == "closed";
  $: cursorPointer = isStart ? isMouseOverCenter : isMouseOverMenu;

  function getMouseOverIndex() {
    if (isStart) return -1;
    const {
      value,
      context: { history }
    } = state;
    const curMenu = history[0];
    let sigma = Math.PI - Math.atan2(px, py),
      TAU = 2 * Math.PI,
      step = TAU / curMenu.children.length;
    return Math.floor(sigma / step);
  }

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
      radialNavService.send({ type: "NAVIGATE", value: getMouseOverIndex() });
    } else radialNavService.send("CLOSE");
  }

  function exteriorClick(e) {
    radialNavService.send("CLOSE");
  }

  onMount(async () => {
    ctx = canvas.getContext("2d");
    assets = new Map();
    await Promise.all(
      ["touch", "close", "cursor", ...icons].map(i =>
        getUISprite(`img/${i}.svg`).then(img => assets.set(i, img))
      )
    );

    radialNavService = interpret(radialNavMachine).start();
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
    const curMenu = history[0];

    ctx.save();
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.translate(w / 2, h / 2);

    switch (value) {
      case "closed":
        ctx.fillStyle = "black";
        ctx.strokeStyle = "#777777";
        ctx.ellipse(0, 0, centerR, centerR, 0, 0, TAU);
        ctx.fill();
        ctx.stroke();
        ctx.drawImage(
          innerWidth <= 768 ? assets.get("touch") : assets.get("cursor"),
          -0.7 * centerR,
          -0.7 * centerR,
          1.4 * centerR,
          1.4 * centerR
        );
        break;
      default:
        // menu
        ctx.scale($menuSize, $menuSize);
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        let step = TAU / curMenu.children.length,
          sigma = -Math.PI / 2,
          mouseOverIndex = getMouseOverIndex();
        for (const [submenu, i] of range(curMenu.children)) {
          let isHighlight =
            !isMouseOverCenter && isMouseOverMenu && i == mouseOverIndex;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, w / 2 - 4, sigma, sigma + step);
          ctx.fillStyle = isHighlight ? "#555555" : "#333333";
          ctx.strokeStyle = "#777777";
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = "white";
          let fontSize = (isHighlight ? 0.6 : 0.5) * centerR;
          ctx.font = `${Math.ceil(fontSize)}px sans-serif`;
          let x = (Math.cos(sigma + step / 2) * w) / 4,
            y = (Math.sin(sigma + step / 2) * w) / 4,
            iconSize = isHighlight ? 1.1 * centerR : centerR;
          ctx.fillText(submenu.label, x, y);
          ctx.drawImage(
            assets.get(submenu.icon),
            x - iconSize / 2,
            y,
            iconSize,
            iconSize
          );
          sigma += step;
        }
        // center dot
        ctx.setTransform(1, 0, 0, 1, w / 2, h / 2); // reset scale transorm
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.strokeStyle = "#777777";
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
          assets.get("close"),
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
  canvas,
  canvas:focus,
  canvas:active {
    /* trying to remove that fucking Chrome blue glow */
    outline: none;
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
  class="radial-menu">
  <canvas bind:this={canvas} width={w} height={h}>
    <NavMenuItem data={radialNavData} />
  </canvas>
</nav>

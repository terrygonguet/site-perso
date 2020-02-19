<script>
  import { onMount, tick } from "svelte";
  import { getUISprite, radialNavMachine, range } from "../tools";
  import { goto, prefetch } from "@sapper/app";
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  import { menus as radialNavData, icons } from "../data/data";
  import NavMenuItem from "./NavMenuItem";
  import { interpret } from "@xstate/fsm";

  export let _style = "";

  let bgLight = "#555555",
    bgDark = "#333333",
    colorOutline = "#777777",
    colorAccent = "#e55b3c",
    colorCenter = "black";

  const TAU = 2 * Math.PI;
  let canvas,
    w,
    h,
    sw,
    px = Infinity,
    py = Infinity,
    ctx,
    assets,
    state,
    canActivate = true,
    isTicking = true,
    radialNavService;

  const menuSize = tweened(0, {
    duration: 300,
    easing: cubicInOut
  });

  $: isSmall = sw < 768;
  $: rw = isSmall ? 2 * w : w;
  $: rh = isSmall ? 2 * w : w;
  $: centerR = (isSmall ? 0.12 : 0.07) * rw;
  $: isMouseOverMenu = px ** 2 + py ** 2 <= rw ** 2 / 4;
  $: isMouseOverCenter = px ** 2 + py ** 2 <= centerR ** 2;
  $: cursorPointer = isStart ? isMouseOverCenter : isMouseOverMenu;
  $: isStart = !state || state.value == "closed";

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
    px = (isSmall ? 2 : 1) * e.offsetX - rw / 2;
    py = (isSmall ? 2 : 1) * e.offsetY - rh / 2;
    if (isMouseOverCenter) {
      if (canActivate && isStart) {
        radialNavService.send("ACTIVATE");
        canActivate = false;
      }
    } else canActivate = true;
  }

  async function onClick(e) {
    e.stopPropagation();
    px = (isSmall ? 2 : 1) * e.offsetX - rw / 2;
    py = (isSmall ? 2 : 1) * e.offsetY - rh / 2;
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

  async function handleStateChange(newState) {
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
          px = py = 0;
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
  }

  function onUnmount() {
    isTicking = false;
  }

  onMount(() => {
    if (ctx) {
      isTicking = true;
      return onUnmount;
    }

    ctx = canvas.getContext("2d");
    assets = new Map();
    Promise.all(
      ["touch", "close", "cursor", ...icons].map(i =>
        getUISprite(`svg/${i}.svg`).then(img => assets.set(i, img))
      )
    ).then(() => {
      radialNavService = interpret(radialNavMachine).start();
      radialNavService.subscribe(handleStateChange);
      requestAnimationFrame(render);
    });

    return onUnmount;
  });

  function render() {
    const {
      value,
      context: { history }
    } = state || { value: "closed", context: { history: [] } };
    const curMenu = history[0];
    let compstyles = getComputedStyle(document.documentElement);
    bgLight = compstyles.getPropertyValue("--radial-bg-light");
    bgDark = compstyles.getPropertyValue("--radial-bg-dark");
    colorOutline = compstyles.getPropertyValue("--radial-outline");
    colorAccent = compstyles.getPropertyValue("--radial-accent");
    colorCenter = compstyles.getPropertyValue("--radial-center");

    ctx.save();
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, rw, rh);
    ctx.beginPath();
    ctx.translate(rw / 2, rh / 2);

    switch (value) {
      case "closed":
        ctx.fillStyle = colorCenter;
        ctx.strokeStyle = colorAccent;
        ctx.ellipse(0, 0, centerR, centerR, 0, 0, TAU);
        ctx.fill();
        ctx.stroke();
        ctx.drawImage(
          innerWidth <= 768 ? assets.get("touch") : assets.get("cursor"),
          -0.6 * centerR,
          -0.6 * centerR,
          1.2 * centerR,
          1.2 * centerR
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
          ctx.arc(0, 0, rw / 2 - 4, sigma, sigma + step);
          ctx.fillStyle = isHighlight ? bgLight : bgDark;
          ctx.strokeStyle = colorOutline;
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = colorAccent;
          let fontSize = (isHighlight ? 0.6 : 0.5) * centerR;
          ctx.font = `${Math.ceil(fontSize)}px sans-serif`;
          let x = (Math.cos(sigma + step / 2) * rw) / 3.4,
            y = (Math.sin(sigma + step / 2) * rw) / 3.4,
            iconSize = isHighlight ? 1.1 * centerR : centerR;
          ctx.fillText(submenu.label, x, y, rw / 2.5);
          try {
            ctx.drawImage(
              assets.get(submenu.icon),
              x - iconSize / 2,
              y,
              iconSize,
              iconSize
            );
          } catch (error) {}
          sigma += step;
        }
        // highlight selected submenu
        if (!isMouseOverCenter && isMouseOverMenu) {
          ctx.beginPath();
          sigma = -Math.PI / 2 + mouseOverIndex * step;
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, rw / 2 - 4, sigma, sigma + step);
          ctx.lineWidth = 2;
          ctx.strokeStyle = colorAccent;
          ctx.closePath();
          ctx.stroke();
          ctx.lineWidth = 1;
          // prefetch the page
          let selectedMenu = curMenu.children[mouseOverIndex];
          if (selectedMenu.page) prefetch(selectedMenu.page);
        }
        // center dot
        ctx.setTransform(1, 0, 0, 1, rw / 2, rh / 2); // reset scale transorm
        ctx.beginPath();
        ctx.fillStyle = colorCenter;
        ctx.strokeStyle = colorOutline;
        ctx.ellipse(0, 0, centerR, centerR, 0, 0, TAU);
        ctx.fill();
        ctx.stroke();
        ctx.globalAlpha = $menuSize;
        ctx.fillStyle = colorAccent;
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        ctx.font = "1rem sans-serif";
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
    if (isTicking) requestAnimationFrame(render);
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

<svelte:window on:click={exteriorClick} bind:innerWidth={sw} />

<nav
  style={_style}
  bind:clientWidth={w}
  bind:clientHeight={h}
  on:mousemove={onHover}
  on:click={onClick}
  class:cursor-pointer={cursorPointer}>
  <canvas bind:this={canvas} width={rw} height={rh} class="w-full h-full">
    <div class="h-full flex flex-col justify-center md:pl-24">
      <NavMenuItem data={radialNavData} />
    </div>
  </canvas>
</nav>

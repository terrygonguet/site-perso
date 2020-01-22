<script>
  import { onMount } from "svelte";
  import { getUISprite } from "../tools";

  export let _style = "";

  let canvas, w, h;

  onMount(async () => {
    let ctx = canvas.getContext("2d");
    let [cursor] = await Promise.all(["img/cursor.svg"].map(getUISprite));
    ctx.drawImage(cursor, w / 2 - 25, h / 2 - 25, 50, 50);
  });
</script>

<nav
  style={_style}
  bind:clientWidth={w}
  bind:clientHeight={h}
  class="border border-white">
  <canvas bind:this={canvas} width={w} height={h} />
</nav>

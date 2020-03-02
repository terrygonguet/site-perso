<script>
  import { onMount } from "svelte";

  let canvas, ctx,
      phase = 0,
      colors = [255,0,0],
      w, h,
      lastPos = [0, 0],
      lastMdown = false

  function handleMousemove(e) {
    let { x, y } = e
    let mdown = e.buttons != 0

    // if we just pressed/released mouse we jump to current
    if (mdown != lastMdown) lastPos = [x, y]

    if (!mdown) ctx.moveTo(x, y)
    else {
      colors[phase % 3]--
      colors[(phase + 1) % 3]++
      if (colors[phase % 3] <= 0) phase++
      ctx.strokeStyle = `rgb(${colors})`
      ctx.beginPath()
      ctx.lineWidth = 5
      ctx.moveTo(...lastPos)
      ctx.lineTo(x, y)
      ctx.stroke()
    }
    lastPos = [x, y]
    lastMdown = mdown
  }

  onMount(() => {
    ctx = canvas.getContext("2d")
  })
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />

<h1
  class="text-6xl fixed top-0 pointer-events-none left-0 w-screen block p-16 text-center font-bold"
  style="color:rgb({colors})"
>
  Draw something!
</h1>
<canvas
  class="fixed top-0 left-0 w-screen h-screen cursor-pointer"
  on:mousemove={handleMousemove}
  bind:this={canvas}
  width={w} height={h}
>
  pranked
</canvas>
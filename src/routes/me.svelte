<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import Back from "../components/Back";
</script>

<svelte:head>
  <title>Terry Gonguet - Me</title>
</svelte:head>

<main
  class="overflow-auto flex-center"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <section class="text-justify m-4 max-w-1k max-h-full">
    <p class="my-4">Hey!</p>
    <p class="my-4">
      I'm Terry, a web focused developper born in
      <a href="https://goo.gl/maps/fcsMFHbRMq1cSYta9" target="_blank" class="a">the French Alps</a>
      trying to make my way into the world. At around 12 years old I discovered
      <a href="https://www.youtube.com/watch?v=SbO0tqH8f5I" target="_blank" class="a">Minecraft's Redstone</a> and the
      <a href="https://rkvalley.files.wordpress.com/2010/04/kernighan_ritchie_language_c.pdf" target="_blank" class="a">C programming language</a>
      (pretty harsh introduction, I know) and got hooked instantly. Ever since
      then I spend an <s>un</s>reasonnable amount of time every day trying to
      make magic thinking rocks do my bidding or learn more about the discipline.
    </p>
    <p class="my-4">
      I'm a fervent proponent of the <a href="https://ipfs.io/" target="_blank" class="a">open</a> and
      <a href="https://www.datprotocol.com/" target="_blank" class="a">decentralized</a>
      web because it lets everybody and anybody learn about what they want and publish what they have to say.
    </p>
    <p class="my-4">
      Most of the code I write these days is for the web because I find many of its properties
      powerful (like linkability, backward compatibility etc). I am especially interested in making games explicitely
      designed for the web now that almost all browsers can display 2D and 3D graphics and
      <a href="https://caniuse.com/#feat=gamepad" target="_blank" class="a">use gamepads</a>
      (among other <a href="https://developer.mozilla.org/docs/WebAssembly/Concepts" class="a" target="_blank">amazing features</a>).
    </p>
    <p class="my-4">
      One day I hope to be able to live from making interesting and fun games but in the meantime I'm excited to
      make the internet slightly more awesome, one website at a time!
    </p>
    <Back />
  </section>
</main>

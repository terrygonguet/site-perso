<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import Back from "../components/Back";
  import BlogLink from "../components/BlogLink";
  import { cv } from "../data/data";

  const { experiences, studies } = cv
</script>

<svelte:head>
  <title>Terry Gonguet - CV</title>
</svelte:head>

<main
  class="overflow-auto flex-center"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <div class="m-4 max-w-1k max-h-full text-justify">
    <h1 class="text-3xl font-semibold text-center my-4">CV</h1>
    <p class="my-4">
      This is the page where all the information only relevant to you hiring me are.
      If what you're looking for isn't here it might be somewhere else on this site,
      you can look for it using my <a href="." class="a">amazing main menu</a>! If you can't do that
      you can always <a href="contact" class="a">ask me directly</a>, I respond pretty quickly.
    </p>
    <p class="my-4">
      I currently live in <a href="https://goo.gl/maps/2zJpbBUmVaWYa5xT9" class="a" target="_blank">Lyon</a>
      have a driving license but no car at hand. French<span class="md:hidden">🇫🇷</span> is my native tongue but I
      also am fluent in English<span class="md:hidden">🇬🇧</span>.
    </p>
    <p class="my-4">
      All the items in the following lists link to blog posts that detail what I did and thought about during these events.
      Most of my personal experience can be found here, sorted into <a href="projects/alive" rel="prefetch" class="a">"alive"</a>
      and <a href="projects/abandonned" rel="prefetch" class="a">abandonned</a> projects.
    </p>
    <h2 class="text-2xl mt-4">Skills</h2>
    <p class="mb-4 mt-2">
      I am a full stack web developer and even though I know some things about
      "traditional" languages and technologies like Haskell (💜), PHP (🤢), .NET, Java etc, I am much more proficient
      with the web technologies (HTML/CSS/JS). I can (and do) develop both the front and back end of NodeJS applications.
    </p>
    <p class="my-4">
      On the server, I have experience using <a href="https://expressjs.com/" target="_blank" class="a">Express</a>,
      <a href="https://www.mongodb.com/" target="_blank" class="a">MongoDB</a>,
      <a href="https://www.keystonejs.com/" target="_blank" class="a">Keystone</a> (v4) and
      <a href="https://graphql.github.io/" target="_blank" class="a">GraphQL</a>. On the client I have experimented with many tools and love
      <a href="https://sapper.svelte.dev/" target="_blank" class="a">Sapper</a>,
      <a href="https://www.typescriptlang.org/" target="_blank" class="a">Typescript</a>,
      <a href="https://vuejs.org/" target="_blank" class="a">VueJS</a>
      and <a href="https://www.pixijs.com/" target="_blank" class="a">PIXI.js</a>
      for all of my applications and games. I played with too many interesting tools
      and technologies to all list here but these are the main ones.
    </p>
    <p class="my-4">
      I take good pride in my technical skills and spend a good amount of time keeping them sharp but I think my
      best skill is learning. I <strong class="underline">love</strong> to learn new things all the time, especially if they can help
      me to do my job better or more efficiently.
    </p>
    <h2 class="text-2xl mt-4">Professional experience</h2>
    {#each experiences as blog}
      <BlogLink {...blog} />
    {/each}
    <h2 class="text-2xl mt-4">Studies</h2>
    {#each studies as blog}
      <BlogLink {...blog} />
    {/each}
    <Back />
  </div>
</main>

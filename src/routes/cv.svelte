<script>
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import Back from "../components/Back"
  import BlogLink from "../components/BlogLink"
</script>

<main
  class="overflow-auto flex-center"
  in:fade={{ easing: cubicInOut, duration: 200, delay: 200 }}
  out:fade={{ easing: cubicInOut, duration: 200 }}>
  <div class="m-4 md:w-2/3 max-h-full text-justify">
    <h1 class="text-3xl font-semibold text-center my-4">CV</h1>
    <p class="my-4">
      This is the page where all the information only relevant to you hiring me are.
      If what you're looking for isn't here it might be somewhere else on this site,
      you can look for it using my <a href="." class="a">amazing main menu</a>! If you can't do that
      you can always <a href="contact" class="a">ask me directly</a>, I respond pretty fast.
    </p>
    <p class="my-4">
      I currently live in <a href="https://goo.gl/maps/2zJpbBUmVaWYa5xT9" class="a" target="_blank">Lyon</a>
      have a driving license but no car at hand. French<span class="md:hidden">🇫🇷</span> is my native tongue but I
      also am fluent in English<span class="md:hidden">🇬🇧</span> (as you can see).
    </p>
    <p class="my-4">
      All the items in the following lists link to blog posts that detail what I did and thought about during these events.
      Most of my personal experience can be found <a href="projects" class="a">here</a>.
    </p>
    <h2 class="text-2xl mt-4">Professional experience</h2>
    <BlogLink title="Let's be an entrepreneur" slug="lets-be-entrepreneur" date="September 2019" formatDate={false} />
    <BlogLink title="I like teaching kids" slug="i-like-teaching-kids" date="September 2019 to August 2020" formatDate={false} />
    <BlogLink title="Telligo and summer camps" slug="colos-telligo" date="April and July 2019" formatDate={false} />
    <BlogLink title="Internship at Alpes Contrôles" slug="stage-alpes-controles" date="April 2016" formatDate={false} />
    <h2 class="text-2xl mt-4">Studies</h2>
    <BlogLink title="Diplôme Étudiant Entrepreneur - Lyon 3" slug="d2e" date="2019-2020" formatDate={false} />
    <BlogLink title="Bachelor in Computing - IT Tallaght" slug="2-years-in-ireland" date="2016-2018" formatDate={false} />
    <BlogLink title="DUT Informatique - Université Savoie Mt. Blanc" slug="dut-info" date="2014-2016" formatDate={false} />
    <BlogLink title="BAC S - St Julien en Genevois" slug="bac-s" date="2014" formatDate={false} />
    <h2 class="text-2xl mt-4">Skills</h2>
    <p class="mb-4 mt-2">
      As staded multiple time through this website, I am a web developer and even though I know some things about
      "traditional" languages and technologies like Haskell (💜), PHP (🤢), .NET, Java etc, I am much more proficient
      with the web technologies (HTML/CSS/JS). I can (and do) develop both the front and back end of NodeJS applications.
    </p>
    <p class="my-4">
      On the server, I have experience using <a href="https://expressjs.com/" target="_blank" class="a">Express</a>,
      <a href="https://www.mongodb.com/" target="_blank" class="a">MongoDB</a>,
      <a href="https://www.keystonejs.com/" target="_blank" class="a">Keystone</a> and
      <a href="https://graphql.github.io/" target="_blank" class="a">GraphQL</a>. On the client I have experimented with many tools and love
      <a href="https://sapper.svelte.dev/" target="_blank" class="a">Sapper</a>,
      <a href="https://vuejs.org/" target="_blank" class="a">VueJS</a>
      and <a href="https://www.pixijs.com/" target="_blank" class="a">PIXI.js</a>
      for all of my applications and games. Over ther years I played with too many interesting tools
      and technologies to all list here but these are the main ones.
    </p>
    <Back />
  </div>
</main>

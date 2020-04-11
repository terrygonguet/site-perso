<script>
	export let translations = {}

	$: nbTranslations = Object.keys(translations).length
	$: languages = Object.keys(translations)
	$: firstBlog = nbTranslations ? translations[languages[0]] : ""
</script>

{#if !nbTranslations}
	<p class="text-base">There are no translations.</p>
{:else if nbTranslations == 1}
	<p class="text-base">This blog is also available in <a href="blog/{firstBlog}" class="a">{languages[0]}</a>.</p>
{:else}
	<div class="text-base">
		<span>This blog is also available in these languages: </span>
		<ul class="inline-flex">
			{#each languages as lang}
				<li class="mx-1"><a href="blog/{translations[lang]}" class="a">{lang}</a></li>
			{/each}
		</ul>
	</div>
{/if}
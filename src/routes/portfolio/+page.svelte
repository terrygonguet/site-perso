<script lang="ts">
	import { LL } from "$i18n"
	import Footer from "$lib/comp/Footer.svelte"
	import { fade } from "svelte/transition"
</script>

<svelte:head>
	<title>{$LL.title.base($LL.title.portfolio())}</title>
</svelte:head>

<main class="grid grid-rows-[1fr_auto] gap-6 p-4" transition:fade={{ duration: 200 }}>
	<div class="max-w-prose m-auto grid gap-8 text-lg text-justify">
		<h2>Professional experience</h2>

		<section>
			<LightBox
				class="w-1/3 float-left mt-2 mr-4"
				images={[{ src: "/placeholder.png", alt: "Placeholder" }]}
			/>
			<p>
				Quis Lorem incididunt non pariatur magna culpa dolore non voluptate amet aliquip
				eiusmod irure eiusmod. Id magna deserunt magna exercitation anim veniam do excepteur
				irure dolore cillum. Nostrud commodo ipsum cillum adipisicing. Dolore pariatur
				incididunt voluptate aliquip ex aute. Minim amet Lorem ea aute. Amet qui quis
				voluptate sunt deserunt pariatur aliqua.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-right mt-2 ml-4"
				images={[
					{ src: "/placeholder.png", alt: "Placeholder" },
					{ src: "/placeholder2.png", alt: "Placeholder" },
					{ src: "/placeholder3.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<p>
				Minim veniam consectetur nisi aute adipisicing anim. Dolor consectetur adipisicing
				consectetur labore irure commodo laborum aliquip duis. Aliqua veniam proident non
				ullamco incididunt ullamco id ipsum veniam fugiat in elit laboris. Aliqua elit ex
				nulla Lorem elit irure Lorem excepteur duis deserunt eu. Ea nostrud duis in ea.
			</p>
		</section>

		<h2>Volonteering</h2>

		<section>
			<LightBox
				class="w-1/3 float-left mt-2 mr-4"
				images={[{ src: "/placeholder.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<p>
				Id deserunt labore culpa laborum consectetur elit ut ad Lorem non duis non qui.
				Minim ad duis eiusmod Lorem est veniam consectetur ex anim veniam cupidatat sit. Do
				consequat ea qui exercitation aliquip esse proident ad veniam quis in. Et eu laborum
				voluptate commodo voluptate velit veniam amet qui veniam. Proident proident in velit
				mollit cupidatat quis occaecat. Est exercitation veniam do cillum.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-right mt-2 ml-4"
				images={[{ src: "/placeholder.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<p>
				Minim veniam consectetur nisi aute adipisicing anim. Dolor consectetur adipisicing
				consectetur labore irure commodo laborum aliquip duis. Aliqua veniam proident non
				ullamco incididunt ullamco id ipsum veniam fugiat in elit laboris. Aliqua elit ex
				nulla Lorem elit irure Lorem excepteur duis deserunt eu. Ea nostrud duis in ea.
			</p>
		</section>

		<h2>Experiments</h2>

		<section>
			<LightBox
				class="w-1/3 float-left mt-2 mr-4"
				images={[{ src: "/placeholder.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<p>
				Id deserunt labore culpa laborum consectetur elit ut ad Lorem non duis non qui.
				Minim ad duis eiusmod Lorem est veniam consectetur ex anim veniam cupidatat sit. Do
				consequat ea qui exercitation aliquip esse proident ad veniam quis in. Et eu laborum
				voluptate commodo voluptate velit veniam amet qui veniam. Proident proident in velit
				mollit cupidatat quis occaecat. Est exercitation veniam do cillum.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-right mt-2 ml-4"
				images={[{ src: "/placeholder.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<p>
				Minim veniam consectetur nisi aute adipisicing anim. Dolor consectetur adipisicing
				consectetur labore irure commodo laborum aliquip duis. Aliqua veniam proident non
				ullamco incididunt ullamco id ipsum veniam fugiat in elit laboris. Aliqua elit ex
				nulla Lorem elit irure Lorem excepteur duis deserunt eu. Ea nostrud duis in ea.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-left mt-2 mr-4"
				images={[{ src: "/placeholder.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<p>
				Id deserunt labore culpa laborum consectetur elit ut ad Lorem non duis non qui.
				Minim ad duis eiusmod Lorem est veniam consectetur ex anim veniam cupidatat sit. Do
				consequat ea qui exercitation aliquip esse proident ad veniam quis in. Et eu laborum
				voluptate commodo voluptate velit veniam amet qui veniam. Proident proident in velit
				mollit cupidatat quis occaecat. Est exercitation veniam do cillum.
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-right mt-2 ml-4"
				images={[{ src: "/placeholder.png", alt: "Placeholder" }]}
				alt="placeholder"
			/>
			<p>
				Minim veniam consectetur nisi aute adipisicing anim. Dolor consectetur adipisicing
				consectetur labore irure commodo laborum aliquip duis. Aliqua veniam proident non
				ullamco incididunt ullamco id ipsum veniam fugiat in elit laboris. Aliqua elit ex
				nulla Lorem elit irure Lorem excepteur duis deserunt eu. Ea nostrud duis in ea.
			</p>
		</section>

		<!-- <p>Pro</p>
		<ul>
			<li>Gapsmoov</li>
			<li>Get Munch</li>
		</ul>

		<p>Bénévolat</p>
		<ul>
			<li>Repair Café Frangy</li>
			<li>Web exts</li>
		</ul>

		<p>Experiments</p>
		<ul>
			<li>Solitaire</li>
			<li>Vitruvius</li>
			<li>Calibron</li>
			<li>Naga</li>
		</ul> -->
	</div>
	<Footer />
</main>

<style lang="postcss">
	h2 {
		@apply text-5xl text-center mt-8 border-b border-current p-3 w-4/5 mx-auto;
	}
</style>

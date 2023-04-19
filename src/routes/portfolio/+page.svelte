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
				images={[
					{ src: "/gapsmoov-explore.png", alt: "Placeholder" },
					{ src: "/gapsmoov-compare.png", alt: "Placeholder" },
					{ src: "/gapsmoov-evaluate.png", alt: "Placeholder" },
				]}
			/>
			<h3>Gapsmoov (2020 - now)</h3>
			<p>
				In summer of 2020, with the help of two of my friends, I was contracted by two long
				time consultants turned entrepreneurs to build an e-learning app from scratch. They
				came from the world of business-focused cultural training and identified (correctly)
				that the existing solutions were old and painful to use so together we built
				Gapsmoov.
			</p>
			<p>
				They contracted the original design from someone else but I build the entire app
				solo with Sapper and KeystoneJS. I would be lying if I said that the code turned out
				perfect but we haven't felt the need to increase the team even though we're still
				adding features regularly!
			</p>
		</section>

		<section>
			<LightBox
				class="w-1/3 float-right mt-2 ml-4"
				images={[
					{ src: "/munch-home.png", alt: "Placeholder" },
					{ src: "/munch-menu.png", alt: "Placeholder" },
					{ src: "/munch-checkout.png", alt: "Placeholder" },
				]}
				alt="placeholder"
			/>
			<h3>Get Munch (2019)</h3>
			<p>
				Two Irish friends and I started a late night snack delivery business in the suburbs
				of Dublin before it was cool (I swear we had the idea much before those apps became
				ubiquitous). I built the entire app out of Vue, Stripe & MongoDB and my friends
				handled the marketing like champs. Sadly we didn't manage to stay alive on account
				of us being young, poor and bad at business.
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

	h3 {
		@apply text-xl font-bold;
	}

	p {
		@apply my-3;
	}
</style>

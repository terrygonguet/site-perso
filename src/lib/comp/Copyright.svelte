<script lang="ts">
	const date = new Date()
	const curYear = date.getFullYear()
</script>

<p {...$$props} class="text-stone-400 {$$props.class}">
	&copy; 2023 {curYear != 2023 ? "- " + curYear : ""} Terry Gonguet
</p>

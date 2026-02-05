<script lang="ts">
	import './layout.css';
	import favicon16 from '$lib/assets/favicon16.ico';
	import favicon32 from '$lib/assets/favicon32.ico';
	import favicon180 from '$lib/assets/favicon180.ico';

	import "@fontsource/kalam";
	import "@fontsource/roboto";
	import "@fontsource-variable/inter"

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href={favicon180}
	/>

	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href={favicon32}
	/>

	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href={favicon16}
	/>
</svelte:head>

{@render children()}

<style>
	:global(body) {
		overflow-x: hidden;
	}
</style>



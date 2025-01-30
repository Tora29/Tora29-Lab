<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import DisplayHeader from '$lib/components/navigation/NavHeader.svelte';
	import '../lib/styles/global.css';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
		rel="stylesheet"
	/>
</svelte:head>

<!-- <DisplayHeader {headerItems} /> -->
<DisplayHeader />
{@render children()}

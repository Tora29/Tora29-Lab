<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import NavHeader from '$lib/components/navigation/NavHeader.svelte';
	import DisplayMainLogo from '$lib/components/display/DisplayMainLogo.svelte';
	import '../lib/styles/global.css';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
		rel="stylesheet"
	/>
</svelte:head>

<NavHeader />
<DisplayMainLogo />

{@render children()}

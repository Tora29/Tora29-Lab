<script lang="ts">
	import '$shared/styles/app.css';
	import '$shared/styles/global.css';

	import Header from '$widgets/header/ui/Header.svelte';
	import MainLogo from '$shared/components/MainLogo.svelte';


	let { children } = $props();
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
		rel="stylesheet"
	/>
</svelte:head>

<Header />
<MainLogo />

{@render children()}

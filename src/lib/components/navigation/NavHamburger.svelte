<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div class="container">
	<button class="btn-menu material-symbols-outlined" on:click={toggle}> menu </button>
	{#if isOpen}
		<div
			class="overlay"
			role="button"
			tabindex="0"
			in:fade
			out:fade
			on:click={() => (isOpen = false)}
			on:keydown={(e) => e.key === 'Enter' && (isOpen = false)}
		></div>
		<nav class="nav-menu" in:fly={{ x: 200, duration: 300 }} out:fly={{ x: 200, duration: 300 }}>
			<ul class="nav-menu-list">
				<button class="btn-close material-symbols-outlined" on:click={toggle}> close </button>
				<li><a href="#aboutme">ABOUT ME</a></li>
				<li><a href="#work">WORK</a></li>
				<li><a href="#history">HISTORY</a></li>
				<li><a href="#blog">BLOG</a></li>
				<li><a href="#contact">CONTACT</a></li>
				<li><a href="https://github.com/Tora29">GitHub</a></li>
			</ul>
		</nav>
	{/if}
</div>

<style>
	.container {
		display: flex;
		justify-content: end;
	}

	.btn-menu {
		margin-right: 2rem;
		color: var(--color-natural);
	}

	.nav-menu {
		position: fixed;
		top: 0;
		right: 0;
		width: 200px;
		height: 100vh;
		background-color: var(--color-background);
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
		padding: 1rem;
		z-index: 3;
	}

	.nav-menu-list {
		display: flex;
		flex-direction: column;
		color: var(--color-natural);
	}

	.btn-close {
		margin-left: auto;
	}

	.nav-menu li {
		font-size: 20px;
		text-align: center;
		margin-bottom: 1rem;
		border-bottom: var(--color-natural) solid 1px;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.4);
		z-index: 2;
	}
</style>

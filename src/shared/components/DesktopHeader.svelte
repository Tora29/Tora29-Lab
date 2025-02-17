<script module lang="ts">
	export interface HeaderNavItem {
		label: string;
		icon: string;
		link: string;
	}
</script>

<script lang="ts">
	const { items = [] } = $props<{ items?: HeaderNavItem[] }>();
</script>

<nav class="nav-desktop">
	<ul class="nav-menu">
		{#each items as item}
			<li class="nav-menu-item">
				<a
					href={item.link}
					target={item.label === 'GitHub' ? '_blank' : undefined}
					rel={item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
				>
					<span class="material-symbols-outlined">{item.icon}</span>
					<p>{item.label}</p>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav-menu {
		display: flex;
	}

	.nav-menu-item {
		margin-right: 24px;
		color: var(--color-natural);
	}

	.nav-menu-item a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 6rem;
		height: 4rem;
		border-radius: 15px;
		transition: 0.2s;
	}

	.nav-menu-item a:hover {
		background-color: var(--color-natural);
		color: var(--color-background);
	}
</style>

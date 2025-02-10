<script lang="ts">
	import { boolBreakpoint } from '../../stores/StoreBreakpoint';
	import NavHamburger from '$lib/components/navigation/NavHamburger.svelte';

	// ヘッダーメニュー用
	const headerItems = [
		{ label: 'ABOUT ME', icon: 'person', link: '#' },
		{ label: 'WORK', icon: 'business_center', link: '#' },
		{ label: 'HISTORY', icon: 'history', link: '#' },
		{ label: 'BLOG', icon: 'article', link: '#' },
		{ label: 'CONTACT', icon: 'contacts', link: '#' },
		{ label: 'GitHub', icon: 'terminal', link: 'https://github.com/Tora29' }
	];
</script>

<header class="header">
	<h1 class="logo-title">
		<p class="logo-left">Tora</p>
		<p class="logo-right">29</p>
	</h1>
	<!-- 1024px 未満なら「ハンバーガー」 / 1024px 以上なら「通常ナビ」 -->
	{#if $boolBreakpoint.isMedium || $boolBreakpoint.isSmall || $boolBreakpoint.isXSmall}
		<!-- ハンバーガーメニュー -->
		<NavHamburger />
	{:else}
		<!-- 通常ナビ (1024px以上) -->
		<nav class="nav">
			<ul class="nav-menu">
				{#each headerItems as item}
					<li class="nav-menu-item">
						<a href={item.link}>
							<span class="material-symbols-outlined">{item.icon}</span>
							<p>{item.label}</p>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	.header {
		background-color: var(--color-background);
		display: flex;
		width: 100%;
		height: 100px;
		align-items: center;
		justify-content: space-between;
	}

	.logo-title {
		display: flex;
		font-size: 2rem;
		padding-left: 20px;
	}

	.logo-left {
		color: var(--color-natural);
	}

	.logo-right {
		color: var(--color-accent);
	}

	.nav-menu {
		display: flex;
	}

	.nav-menu-item {
		color: var(--color-natural);
	}

	.nav-menu-item a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-right: 24px;
		width: 6rem;
		height: 4rem;
		border-radius: 15px;
		transition: 0.2s;
	}

	.nav-menu-item a:hover {
		background-color: var(--color-natural);
		color: var(--color-background);
		transition: 0.2s;
	}
</style>

<script lang="ts">
	import { boolBreakpoint, strBreakpoint } from '$shared/stores/breakpointStore';

	import DesktopHeader from '$shared/components/DesktopHeader.svelte';
	import Hamburger from '$shared/components/Hamburger.svelte';

	// ヘッダーに表示するメニュー項目
	const headerItems = [
		{ label: 'ABOUT ME', icon: 'person', link: '#' },
		{ label: 'WORK', icon: 'business_center', link: '#' },
		{ label: 'HISTORY', icon: 'history', link: '#' },
		{ label: 'BLOG', icon: 'article', link: '#' },
		{ label: 'CONTACT', icon: 'contacts', link: '#' },
		{ label: 'GitHub', icon: 'terminal', link: 'https://github.com/Tora29/Tora29-Lab' }
	];

	// ブレークポイントに基づいて、SPかPCかを判断
	let isMobile = $derived(
		$boolBreakpoint.isMedium || $boolBreakpoint.isSmall || $boolBreakpoint.isXSmall
	);
</script>

<header class="header {$strBreakpoint}">
	<div class="logo {$strBreakpoint}">
		<span class="logo-left">Tora</span>
		<span class="logo-right">29</span>
	</div>
	{#if isMobile}
		<!-- SP時はハンバーガーメニュー -->
		<Hamburger />
	{:else}
		<!-- PC時は通常のナビゲーション -->
		<DesktopHeader items={headerItems} />
	{/if}
</header>

<style>
	.header {
		background-color: var(--color-background);
		display: flex;
		width: 100%;
		height: 90px;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;

		&.isMedium,
		&.isSmall,
		&.isXSmall {
			height: 80px;
		}
	}

	.logo {
		display: flex;
		font-size: 2.5rem;
		font-weight:bold;

		&.isMedium,
		&.isSmall,
		&.isXSmall {
			font-size: 2rem;
		}
	}

	.logo-left {
		color: var(--color-natural);
	}

	.logo-right {
		color: var(--color-accent);
	}
</style>

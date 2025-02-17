<script lang="ts">
	import { strBreakpoint } from '$shared/stores/breakpointStore';
</script>

<div class="main-logo {$strBreakpoint}">
	<div class="main-logo-text">
		<h1>Tora29's Lab</h1>
		<p>WEB ENGINEER</p>
	</div>
</div>

<style lang="postcss">
	.main-logo {
		position: relative;
		display: flex;
		justify-content: end;
		align-items: center;
		width: 100%;
		height: 500px;
		background-image: url('/img/main-logo.webp');
		background-size: cover;
		background-position: center;

		&::before {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 0;
			background-color: rgba(0, 0, 0, 0.8);
			content: ' ';
		}

		.main-logo-text {
			position: relative;
			z-index: 1;
			margin-right: 4rem;
			text-align: right;
			font-family:
				Keania One,
				sans-serif;
			color: var(--color-natural);
			h1 {
				line-height: 1;
			}
		}

		&.isXLarge {
			.main-logo-text {
				h1 {
					font-size: 6rem;
				}
				p {
					font-size: 2.6rem;
				}
			}
		}

		&.isLarge {
			.main-logo-text {
				h1 {
					font-size: 5rem;
				}
				p {
					font-size: 2.3rem;
				}
			}
		}

		&.isMedium {
			height: 400px;
			justify-content: center;
			.main-logo-text {
				margin-right: 0;
				h1 {
					font-size: 5rem;
				}
				p {
					font-size: 2.3rem;
				}
			}
		}

		&.isSmall {
			height: 300px;
			justify-content: center;
			.main-logo-text {
				margin-right: 0;
				h1 {
					font-size: 4rem;
				}
				p {
					font-size: 1.8rem;
				}
			}
		}
		
		&.isXSmall {
			height: 200px;
			justify-content: center;
			.main-logo-text {
				margin-right: 0;
				h1 {
					font-size: 2.5rem;
				}
				p {
					font-size: 1.3rem;
				}
			}
		}
	}
</style>

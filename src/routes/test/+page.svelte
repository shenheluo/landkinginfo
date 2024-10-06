<script>
	import { onMount } from 'svelte';
	import createGlobe from 'cobe';

	let size = 600;
	/**
	 * @type {HTMLCanvasElement}
	 */
	let canvas;
	let phi = 0;

	onMount(() => {
		const globe = createGlobe(canvas, {
			devicePixelRatio: 2,
			width: size * 2,
			height: size * 2,
			phi: 2.0,
			theta: 0.18,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [0.1, 0.8, 1],
			glowColor: [1, 1, 1],
			markers: [
				{ location: [35.3929, 139.4428], size: 0.05 },
        { location: [39.7128, 117.006], size: 0.05 },
				{ location: [40.7128, -74.006], size: 0.05 }
			],
			onRender: (state) => {
				state.phi = phi;
				phi += 0.01;
			}
		});
	});
</script>

<main class="App">
	<!-- <h1>COBE</h1>
	<p>
		A lightweight (5kB) WebGL globe lib:
		<a href="https://github.com/shuding/cobe" target="_blank"> GitHub </a>
	</p> -->
	<div
		style="width:100%;font-weight:700;top:50%;transform:translateY(-50%);z-index:1;text-align:center;color:#fff;pointer-events:none;user-select:none;position:absolute;mix-blend-mode:difference"
	>
		<h1 style="font-size:min(9vw,3.2em);letter-spacing:.3em;text-indent:.3em;margin:auto">COBE</h1>
		<span style="font-size:1.2em">5kB WebGL Globe</span>
	</div>
	<canvas bind:this={canvas} style="width: {size}px; height: {size}px" />
</main>

<style>
	:global(body) {
		background: #000;
		color: #fff;
	}

	.App {
		display: grid;
		place-items: center;
		place-content: center;
		height: 100vh;
	}

</style>

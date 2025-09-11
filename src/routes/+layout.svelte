<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="overlay" class="fixed">
	<div class="min-h-[8rem] w-screen bg-gradient-to-b from-red-600 to-[#1110]">
		Fixed header layout.svelte
	</div>
</div>

<div class="flex w-screen flex-col items-center gap-10 pt-[8rem]">
	{@render children?.()}
</div>

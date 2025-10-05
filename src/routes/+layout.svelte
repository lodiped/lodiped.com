<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { getUserLanguage, lang } from '$lib/lang.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	onMount(() => {
		getUserLanguage();
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="overlay" class="fixed">
	<div class="min-h-[8rem] w-screen bg-gradient-to-b from-red-600 to-[#1110]">
		<button
			class="cursor-pointer rounded-xl border p-3 text-sm opacity-50 transition-opacity hover:opacity-100 active:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
			onclick={() => {
				if (lang.val.substring(0, 2) === 'pt') {
					lang.val = 'en';
				} else {
					lang.val = 'pt';
				}
			}}
		>
			{#if lang.val.substring(0, 2) === 'pt'}
				English
			{:else}
				Português
			{/if}
		</button>
	</div>
</div>

<div class="flex w-screen flex-col items-center gap-10 pt-[8rem]">
	{@render children?.()}
</div>

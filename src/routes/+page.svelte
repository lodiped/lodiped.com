<script lang="ts">
	import { getUserLanguage, lang } from '$lib/lang.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		getUserLanguage();
	});
</script>

{#if lang.val.substring(0, 2) === 'pt'}
	<h1 class="text-xl">Bem-vindo a Lodiped.com</h1>
{:else}
	<h1 class="text-xl">Welcome to Lodiped.com</h1>
{/if}

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

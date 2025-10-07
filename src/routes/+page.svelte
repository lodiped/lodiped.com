<script lang="ts">
	import { lang } from '$lib/lang.svelte';
	import { getLastfm, lastfm } from '$lib/lastfm.svelte';
	import { onMount } from 'svelte';

	let loadedAlbum = $state(false);
	onMount(async () => {
		await getLastfm();
		loadedAlbum = true;
	});
</script>

{#if lang.val.substring(0, 2) === 'pt'}
	<h1 class="text-6xl">Bem-vindo a Lodiped.com</h1>
{:else}
	<h1 class="text-6xl">Welcome to Lodiped.com</h1>
{/if}

<div>Front-end web development</div>
<div>Graphic Design</div>
<div>Video production & editing</div>
<div>Photography</div>

<div class="flex flex-col gap-2">
	{#if loadedAlbum}
		{#each lastfm.val.topalbums.album as albuma, i}
			<div class="flex gap-2">
				<div class="min-h-5">
					<img src={albuma.image[1]['#text']} alt="" />
				</div>
				<div>
					<div class="text-bold text-lg">{albuma.name}</div>
					<div class="opacity-50">
						{albuma.artist.name}
					</div>
				</div>
			</div>
		{/each}
	{/if}
</div>

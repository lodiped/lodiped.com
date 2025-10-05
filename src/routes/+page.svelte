<script lang="ts">
	import { lang } from '$lib/lang.svelte';
	import { getLastfm, lastfm } from '$lib/lastfm.svelte';
	import { onMount } from 'svelte';

	let loadedAlbum = $state(false);
	onMount(async () => {
		await getLastfm();
		loadedAlbum = true;
		console.log(lastfm.val.topalbums.album);
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

<div>
	{#if loadedAlbum}
		{#each lastfm.val.topalbums.album as albuma, i}
			<div>{albuma.artist.name}, {albuma.name}</div>
		{/each}
	{/if}
</div>

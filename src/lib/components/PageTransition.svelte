<script>
	import { fade } from 'svelte/transition';
	export let url = '';
	const pageTransitionDuration = 200;
</script>

{#key url}
	<div in:fade={{ duration: pageTransitionDuration, delay: -200}}>
		<slot />
	</div>
{/key}

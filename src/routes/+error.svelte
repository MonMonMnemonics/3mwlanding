<script lang="ts">
	import { page } from '$app/state';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    onMount(() => {
        if (page.status === 404) {
            setTimeout(() => {
                goto('/', { replaceState: true });
            }, 3000);            
        }
    });
</script>

{#if page.status === 404}
    <p>Page not found. Redirecting to the homepage...</p>
{:else}
    <p>Whoops, something went terribly wrong, let me know so I can fix it ASAP.</p>
{/if}


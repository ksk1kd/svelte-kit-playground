<script lang="ts">
import type { PageProps } from './$types'

let { data }: PageProps = $props()
</script>

<h1>{data.post.title}</h1>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>
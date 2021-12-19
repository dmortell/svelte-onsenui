<script>
	import { Page, Toolbar, List, ListItem } from '$svelte-onsenui';
	import * as components from './examples/';
	import Forms from './examples/Forms.svelte';
	export let navigator

	const examples = getExamples()

	let test = 1

	function goto(example) {
		console.log('clicked', example.title)
		navigator?.pushPage({
			component: example.component,
			props: { key: example.title }
		});
	}

  function getExamples() {
    return Object.keys(components).sort().map(key => ({ title: key, component: components[key] }));
  }
</script>

{#if test}
	<Forms/>
{:else}

<Page style={{background: 'green'}}>
	<Toolbar slot=toolbar><div class='center'>Svelte OnsenUI Examples</div></Toolbar>
	<List modifier='inset'>
		<ListItem slot='header' lockOnDrag style='background: #cddfe4' tappable tap-background-color='lightblue'> Examples </ListItem>
		{#each examples as example}
			<ListItem on:click={()=>goto(example)}>{example.title}</ListItem>
		{/each}
	</List>
</Page>

{/if}

<style>
/* :global(body) {
	--f7-page-master-width: 33%;
	--f7-button-text-transform: none;
} */
:global(.page__content) {
	background-color: #f6f6f6;
}
:global(.dialog) {
	height: 300px !important;
}
</style>

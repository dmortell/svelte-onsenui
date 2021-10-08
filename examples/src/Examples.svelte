<script>
	import { Page, Toolbar, List, ListItem } from '$svelte-onsenui';
	import * as components from './examples/';
	export let navigator
	const examples = getExamples()

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

<Page style={{background: 'green'}}>
	<Toolbar slot=toolbar><div class='center'>Svelte OnsenUI Examples</div></Toolbar>
	<List modifier='inset'>
		<ListItem slot='header' lockOnDrag style='background: #cddfe4' tappable tap-background-color='lightblue'> HEADER </ListItem>
		{#each examples as example}
			<ListItem on:click={()=>goto(example)}>{example.title}</ListItem>
		{/each}
	</List>
</Page>

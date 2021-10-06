<script>
	// import {onMount} from 'svelte'
	import { Page, Navigator, Toolbar, List, ListItem } from '$svelte-onsenui';
	import * as components from './components/';
	export let navigator

	var state = {'class': 'test'};

	function goto(example) {
		console.log('clicked', example.title)
		// console.log('clicked', example.title, example.component, navigator)
		navigator?.pushPage({
			component: example.component,
			props: { key: example.title }
		});
	}

  function getExamples() {
    return Object.keys(components).sort().map(key => ({ title: key, component: components[key] }));
  }

	const examples = getExamples()

</script>

<Page style={{background: 'green'}}>
	<Toolbar slot=toolbar> <div class='center'> Up Toolbar </div> </Toolbar>
	<List modifier='inset'>
		<ListItem slot='header' lockOnDrag style='background: lightblue' tappable tap-background-color='cyan'> HEADER </ListItem>
		{#each examples as example}
			<ListItem key={example.title} on:click={goto.bind(this, example)}>{example.title}</ListItem>
		{/each}
	</List>
</Page>

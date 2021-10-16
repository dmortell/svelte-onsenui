<script>
	import 'onsenui/css/onsenui.min.css';									// classes for Onsen components (ons-input)
	import 'onsenui/css/onsen-css-components.min.css';		// classes used by Onsen components (.notification)

	import ons from 'onsenui';
	// import { Page, Navigator, Button, Icon, Card, Toolbar, List, ListItem } from '$svelte-onsenui';
	import Page from '$svelte-onsenui/Page.svelte';
	import Button from '$svelte-onsenui/Button.svelte';
	import BackButton from '$svelte-onsenui/BackButton.svelte';
	import Toolbar from '$svelte-onsenui/Toolbar.svelte';
	import Icon from '$svelte-onsenui/Icon.svelte';
	import Card from '$svelte-onsenui/Card.svelte';
	import Navigator from '$svelte-onsenui/Navigator.svelte';

	import Examples from './Examples.svelte';
	let navigator

	if (!ons.isReady()){
		ons.mockStatusBar();		// display a mock smartphone statusbar
	}
</script>


<!-- <Page>
	<Toolbar slot='toolbar'>
		<div class='center'>Onsen UI</div>
	</Toolbar>

	<Card>
			<div style="text-align: center">
				<p>This is Onsen UI with Svelte</p>
				<Button><Icon icon="thumbs-up"></Icon></Button>
				<Button><Icon icon="share"></Icon></Button>
				<Button on:click={()=>{
					console.log('clicked')
					ons.notification.toast('Hello world!', { timeout: 2000 });
				}}>Say hello</Button>
			</div>
	</Card>

</Page> -->

<Navigator swipeable bind:navigator initialRoute={{component:Examples, props:{}}}>
</Navigator>

<!-- <Navigator swipeable let:navigator>
	<Examples/>
</Navigator> -->

<!-- <Navigator
	swipeable={true}
	renderPage={this.renderPage}
	onPrePush={e => console.log('prepush', e)}
	onPostPush={e => console.log('postpush', e)}
	onPrePop={e => console.log('prepop', e)}
	onPostPop={e => console.log('postpop', e)}
	initialRoute={{
		component: Examples,
		props: {
			key: 'examples'
		}
	}}
/> -->

<script>
	import ons from 'onsenui';
	import {onMount} from 'svelte'
	import { Page, Navigator, Button, Toolbar, List, ListItem } from '$svelte-onsenui';
	import { Icon } from '$lib';
	// import {Toolbar, BackButton} from '$svelte-onsenui';
	import * as examples from './components/';
	import Examples from './Examples.svelte';

//   renderPage(route, navigator) {
//     const props = route.props || {};
//     props.navigator = navigator;
//     return React.createElement(route.component, route.props);

	if (!ons.isReady()){
		ons.mockStatusBar();		// display a mock smartphone statusbar

		document.addEventListener('init', function(event) {
			var page = event.target;
			if (page.id === 'page1') {
				page.querySelector('#push-button').onclick = function() {
					console.log('click1')
					document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
				};
			} else if (page.id === 'page2') {
				page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
			}
		});

	}

	onMount(() => {})
	let props
	let navigator
	let pages = []
	let routes = []

	function goPage(){
		console.log('click')
		document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
	}

  function pushPage(route, options = {}) {
    if (isRunning()) {
      return Promise.reject('Navigator is already running animation.');
    }

    return new Promise((resolve) => {
      const update = () => {
        return new Promise((resolve) => {
          pages.push(this.props.renderPage(route, this));
          // this.forceUpdate(resolve);
        });
      };

      routes.push(route);
      // this._navi
      navigator.navi
        ._pushPage( options, update )
        .then(resolve)
        .catch((error) => {
          routes.pop();
          pages.pop();
          throw error;
        });
    });
  }

  function isRunning() {
    return navigator.navi._isRunning;
  }
</script>


<!-- <Navigator swipeable renderPage={this.renderPage} initialRoute={{ component: Examples, props: { key: 'examples' } }} > -->
<!-- <Navigator swipeable  initialRoute={{ component: Examples, props: { key: 'examples' } }} > -->
	<!-- <svelte:component this={cmp} {...props} /> -->

{#if 0}
	<ons-navigator swipeable id="myNavigator" page="page1.html">

		<template id="page1.html">
			<ons-page id="page1">
				<ons-toolbar>
					<div class="center">Page 1</div>
				</ons-toolbar>

				<p>This is the first page.</p>

				<ons-button id="push-button" >Push page</ons-button>
				<ons-button id="push-button" on:click={goPage}>Push page1</ons-button>
			</ons-page>
		</template>

		<template id="page2.html">
			<ons-page id="page2">
				<ons-toolbar>
					<div class="left"><ons-back-button>Page 1</ons-back-button></div>
					<div class="center"></div>
				</ons-toolbar>

				<p>This is the second page.</p>
				<ons-button id="push-button" >Push page</ons-button>
			</ons-page>
		</template>

		<template id="page3.html">
			<ons-page id="page3">
				<ons-toolbar>
					<div class="left"><ons-back-button>Page 2</ons-back-button></div>
					<div class="center"></div>
				</ons-toolbar>

				<p>This is the third page.</p>
				<!-- <ons-button id="push-button" >Push page</ons-button> -->
			</ons-page>
		</template>

</ons-navigator>
{:else}


<!-- <Navigator swipeable bind:navigator page="page1.html"  id="myNavigator"> -->
	 <Navigator swipeable bind:navigator initialRoute={{component:Examples, props:{}}}>

	</Navigator>

	<!-- <Button id="push-button" on:click={goPage}>Push</Button> -->
{/if}

<!--
document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
    };
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
}); -->

<!-- <Navigator swipeable bind:navigator>
	<Examples {navigator} />
</Navigator> -->


<!-- {#each components as component}
    <div><svelte:component this={component.component} { ...component.props }/></div>
{/each} -->

<!-- <svelte:component this={cmp} foo="bar" baz="bop">
  content
</svelte:component> -->

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

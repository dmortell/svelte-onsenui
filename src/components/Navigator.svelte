<script context="module">
	let next_id = 0;
</script>

<script>
	/**
 * @original ons-navigator
 * @category navigation
 * @tutorial react/Reference/navigator
 * @description
 * [en] This component is responsible for page transitioning and managing the pages of your OnsenUI application. In order to manage to display the pages, the  navigator needs to define the `renderPage` method, that takes an route and a navigator and  converts it to an page.  [/en]
 * [ja][/ja]
 * @example
  <Navigator
    renderPage={(route, navigator) =>
     <MyPage
       title={route.title}
       onPop={() => navigator.popPage()}
       />
    }
    initialRoute={{
        title: 'First Page'
    }} />
   }
 }
 */

import {onMount} from 'svelte'
import {getEventsAction} from './Utils.js';
const events = getEventsAction();
let navi

export let navigator = {
	pushPage: (page) => {
		console.log('pushed', page.props)
		routes.push(page)
		routes = routes
		// navi.pushPage('page2.htm')
	}
}

export let initialRoute, initialRouteStack

let pages = [];
let routes = [];
let state = {}
// const pages = this.routes ? this.routes.map((route) => this.props.renderPage(route, this)) : null;

	onMount(() => {
		next_id++;
		navigator.navi = navi
    // const node = this._navi;
    // node.popPage = this.popPage.bind(this);

    // node.addEventListener('prepush', this._prePush);
    // node.addEventListener('postpush', this._postPush);
    // node.addEventListener('prepop', this._prePop);
    // node.addEventListener('postpop', this._postPop);

    // node.swipeMax = this.props.swipePop;
    // node.onDeviceBackButton = this.props.onDeviceBackButton || this._onDeviceBackButton.bind(this);

    // if (this.props.initialRoute && this.props.initialRouteStack) {
    //   throw new Error('In Navigator either initalRoute or initalRoutes can be set');
    // }

    if (initialRoute) {
      routes = [initialRoute];
    } else if (initialRouteStack) {
      routes = props.initialRouteStack;
    } else {
      routes = [];
    }

    // pages = routes.map(
    //   (route) => this.props.renderPage(route, this)
    // );
    // this.forceUpdate();


		return () => {
			// node.removeEventListener('prepush', this.props.onPrePush);
			// node.removeEventListener('postpush', this.props.onPostPush);
			// node.removeEventListener('prepop', this.props.onPrePop);
			// node.removeEventListener('postpop', this.props.onPostPop);
		}
	})

	$: console.log(navi?._isRunning)


</script>

<ons-navigator {...$$restProps} bind:this={navi} use:events>
	{#each routes as page, id}
		<svelte:component this={page.component} {...page.props} {navigator} />
	{/each}
</ons-navigator>

<!-- {#each pages as page, id}
	<template id={'nav_'+next_id+'_'+id}>
		<svelte:component this={page.component} {...page.props}/>
	</template>
{/each} -->

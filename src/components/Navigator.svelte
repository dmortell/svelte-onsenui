<script context="module">
	let next_id = 0;
</script>

<script>
	import {onMount, tick} from 'svelte'
	import {noop} from 'svelte/internal'
	import {getEventsAction} from './Utils.js';
	const events = getEventsAction();

	export let onPostPush = noop, onPrePush = noop, onPrePop = noop, onPostPop = noop;
	export let onDeviceBackButton
	export let initialRoute, initialRouteStack

	let _navi
	let navigator = {pushPage, popPage}
	let pages = [];
	let routes = [];
	let state = {}

	$: if (_navi && onDeviceBackButton) _navi.onDeviceBackButton = onDeviceBackButton;

  function isRunning() { return _navi._isRunning; }

	// todo test onDeviceBackButton()
	// todo test resetPage() and resetPageStack()
  function resetPage(route, options = {}) { return resetPageStack([route], options); }

  async function resetPageStack(routes, options = {}) {
    if (isRunning()) return Promise.reject('Navigator is already running animation.');

		const hidePages = () => {
			const pageElements = _navi.pages;
      for (let i = pageElements.length - 2; i >= 0; i--) {
				pageElements[i].style.display = 'none';
      }
    };

		///////////
    if (options.pop) {
      routesBeforePop = routes.slice();
      routesAfterPop = routes;
      routes = routes.concat([routes[routes.length - 1]]);

			await tick();
      return _navi._popPage(options, update)
        .then(() => hidePages());
    }
		///////////

    const lastRoute = routes[routes.length - 1];
    routes.push(lastRoute);
		routes = routes
		await tick();
    return _navi._pushPage(options, update)
			.then(() => hidePages());
  }

  async function pushPage(route, options = {}) {
    if (isRunning()) return Promise.reject('Navigator is already running animation.');
		routes.push(route);
		routes=routes;
		await tick();
		_navi._pushPage( options )
  }

	let routesBeforePop
  let routesAfterPop


	async function replacePage(route, options = {}) {
    if (isRunning()) return Promise.reject('Navigator is already running animation.');
    return pushPage(route, options).then(() => {
      const pos = pages.length - 2;
      routes.splice(pos, 1);
      _navi.topPage.updateBackButton(pages.length > 1);
			_navi._isRunning = false;
      forceUpdate();
    });
  }

  async function popPage(options = {}) {
    if (isRunning()) return Promise.reject('Navigator is already running animation.');
    routesBeforePop = routes.slice();
    routesAfterPop = routesBeforePop.slice(0, routesBeforePop.length - 1);

    const update = () => {
      return new Promise((resolve) => {
				_navi._isRunning = false;
        routes.pop();
				routes = routes;
      });
    };

    return _navi._popPage(options, update);
  }

	function forceUpdate(resolve){
		routes = routes;
		return resolve;
	}

  // function _onDeviceBackButton(event) {
  //   if (pages.length > 1) popPage();
  //   else event.callParentHandler();
  // }
  function _prePop(event) {
		console.log({routesBeforePop})
    // event.routes = { poppingRoute: routesBeforePop[routesBeforePop.length - 1], routes: routesBeforePop };
    onPrePop(event);
  }
  function _postPop(event) {
    // event.routes = { poppedRoute: routesBeforePop[routesBeforePop.length - 1], routes: routesAfterPop };
    onPostPop(event);
  }
  function _prePush(event) {
    event.routes = { pushingRoute: routes[routes.length - 1], routes: routes.slice(0, routes.length - 1) };
    onPrePush(event);
  }
  function _postPush(event) {
    event.routes = { pushedRoute: routes[routes.length - 1], routes: routes };
    onPostPush(event);
  }

  onMount(() => {
    // node.onDeviceBackButton = onDeviceBackButton ?? _onDeviceBackButton;
    // node.swipeMax = props.swipePop;
    if (initialRoute && initialRouteStack) throw new Error('In Navigator either initalRoute or initalRoutes can be set');
    if (initialRoute)						routes = [initialRoute];
    else if (initialRouteStack)	routes = initialRouteStack;
    else												routes = [];
  })

	function getKey(idx){
		return 'page-'+next_id+'-'+idx
	}
</script>

<ons-navigator {...$$restProps} bind:this={_navi} use:events
	on:prepush|self={_prePush}
	on:postpush|self={_postPush}
	on:prepop|self={_prePop}
	on:postpop|self={_postPop}
>
	{#each routes as page, id}
		<svelte:component this={page.component} {...page.props} {navigator} id={getKey(id)}/>
	{/each}
</ons-navigator>

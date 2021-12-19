[![npm version](https://badge.fury.io/js/svelte-onsenui.svg)](https://badge.fury.io/js/svelte-onsenui)

# Svelte Components for Onsen UI

[Onsen UI](https://onsen.io/) is a UI component library for hybrid mobile apps. It provides components for navigation, forms, tabs, Material Design, infinite lists and much more.

It can be used to build hybrid apps with [Cordova](https://cordova.apache.org/) and [PhoneGap](http://phonegap.com/) but can also run in the browser.

Visit the Discord [channel](https://discord.com/invite/WANew4d) for questions and updates on OnsenUI.

## Work in progress

Note that the Svelte component package is still a work in progress and not all components are yet available or documented. See the Contribution section below if you would like to help work on completing the Svelte components.

## Using Svelte components with Onsen UI

The easiest way to use these components is by installing them through npm and using Vite.

# Installation

To create a new Svelte app with Onsen UI components.

```
npm init vite@latest app-dir
cd app-dir
npm install
```

To add onsenui and svelte-onsenui to a svelte app:
```
npm i onsenui svelte-onsenui
npm run dev
```

Import the Svelte components and OnsenUI library and css files.

```jsx
// src/App.svelte
<script>
	import ons from 'onsenui/js/onsenui.min.js';					// import the OnsenUI library
	import 'onsenui/css/onsenui.min.css';									// css for Onsen components (ons-input)
	import 'onsenui/css/onsen-css-components.min.css';		// css for Osnen classes    (.notification)

	// import { Page, Card, Button, Toolbar } from 'svelte-onsenui';
	import Card from 'svelte-onsenui/src/components/Card.svelte';
	import Page from 'svelte-onsenui/src/components/Page.svelte';
	import Button from 'svelte-onsenui/src/components/Button.svelte';
	import Toolbar from 'svelte-onsenui/src/components/Toolbar.svelte';
</script>

<Page>
	<Toolbar slot='toolbar'>
		<div class='center'>Onsen UI</div>
	</Toolbar>
	<Card>
			<div style="text-align: center">
				<p>This is Onsen UI with Svelte</p>
				<Button id="push-button" on:click={()=>{
					ons.notification.toast('Hello world!', { timeout: 2000 });
				}}>Say hello</Button>
			</div>
	</Card>
</Page>
```

# Contributing

Contributions to the development of this package are welcome. If you would like to help with development, please open an issue or do a pull request.

```bash
mkdir svelte-onsenui
cd svelte-onsenui
git clone https://github.com/dmortell/svelte-onsenui.git
npm install
```

Test your changes and view the demo examples by running the following commands and opening a browser at http://localhost:3100/.
```
cd examples
npm run dev
```
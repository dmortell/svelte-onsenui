[![npm version](https://badge.fury.io/js/svelte-onsenui.svg)](https://badge.fury.io/js/svelte-onsenui)

# Onsen UI - Svelte Components for Cordova/PhoneGap hybrid apps

**Make beautiful high performance hybrid mobile apps using HTML5, CSS and JavaScript. Includes Material Design for Android and flat design for iOS.**

[Onsen UI](https://onsen.io/2/) is a UI component library for hybrid mobile apps. It provides components for navigation, forms, tabs, Material Design, infinite lists and much more.

It can be used to build hybrid apps with [Cordova](https://cordova.apache.org/) and [PhoneGap](http://phonegap.com/) but can also run in the browser.

We also have a highly engaged [community](https://community.onsen.io/) that will be available to answer your questions. Visit our Discord [channel](https://discord.com/channels/415288814475542540/415288814911619084).

## Work in progress

Note that the Svelte component package is still a work in progress and not all components are yet available or documented. See the Contribution section below if you would like to help work on completing the Svelte components.

## Using Onsen UI with Svelte

The easiest way to use these components is by installing them through npm and using Vite.

### Installation for development

Copy `font_awesome`, `ionicons` and `material-design-iconic-font` folders into `public/css`.

Recommended to use pnpm instead of npm to save your disk space with duplicate node_modules from multiple projects.

```
pnpm install
npm run dev
```

You need to install `svelte`, `onsenui` and `svelte-onsenui`.

Now you can import the necessary libraries in your code:

```jsx
// main.js
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import App from './src/App.svelte';
// require('onsenui'); // This needs to be imported to bootstrap the components.
// var Ons = require('svelte-onsenui');

const app = new App({
  target: document.getElementById('app')
});

export default app;
```
---
```jsx
// src/App.svelte
<script>
	import ons from 'onsenui';
	import { Page, Button, Toolbar } from 'svelte-onsenui';
</script>

<Page renderToolbar={this.renderToolbar}>
	<Toolbar slot='toolbar'>
		<div className='center'>Onsen UI</div>
	</Toolbar>
	<p>This is Onsen UI!</p>
	<Button id="push-button" on:click={()=>{
		ons.notification.toast('Hello world!', { timeout: 2000 });
	}}>Push</Button>
</Page>
```

Take a look at the Svelte examples for more complex code.

## Bugs

The title attribute on ActionSheet causes a title to be displayed wherever the mouse is.

# Contributing

We always welcome contributions by either opening an issue or doing a pull request.

To test this repo in the current state of master, one needs to first clone this repo recursively (it binds onsenui in a specific version) and run `npm install` in both the main folder and OnsenUI folder and finally build OnsenUI.

```bash
$ git clone https://github.com/dmortell/svelte-onsenui.git
$ npm install
```

After these changes one can run our demo examples with `npm run dev` and open a brower at port 3100.

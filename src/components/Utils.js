/* eslint camelcase: "off", no-prototype-builtins: "off" */
import {bubble, listen, get_current_component} from 'svelte/internal';

export function getEventsAction(comp) {
	const component = comp ?? get_current_component();
	return node => {
		const events = Object.keys(component.$$.callbacks);
		const listeners = [];
		events.forEach( event => listeners.push( listen(node, event, e =>  bubble(component, e)) ) );
		return {
			destroy: () => {
					listeners.forEach( listener => listener() );
			}
		};
	};
}

const normalize = key => {
  if (/^is[A-Z]/.test(key)) { key = key.slice(2); }
  return key.replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase();
};

function eventToHandler(string) {
	return 'on' + string.charAt(0).toUpperCase() + string.slice(1);
}


// animation-options={{ duration: 0.6, delay: 0.1, timing: 'ease-in' }}
// getAttrs(el, props = el.props, nameMap = {}) {
export function getAttribs(props, nameMap={}){
	const jsProperties = {};
	const validProps = {};							// el.constructor.propTypes || {};
	const ignoredProps = ['isOpen'];

	Object.keys(props).forEach(reactName => {
		const reactValue = props[reactName];

		// onClick and anything that isn't a valid React prop get added immediately
		if (!validProps.hasOwnProperty(reactName) || reactName === 'onClick') {
			jsProperties[reactName] = reactValue;

		// don't add any props we specifically want to ignore
		} else if (ignoredProps.indexOf(reactName) === -1) {
			const jsName = nameMap[reactName] || normalize(reactName);
			const type = typeof reactValue;

			if (type === 'boolean' && reactValue) {
				jsProperties[jsName] = '';
			} else if (type === 'string') {
				if (reactName === 'animationOptions') {
					jsProperties[jsName] = JSON.stringify(reactValue);
				} else {
					jsProperties[jsName] = reactValue;
				}
			} else if (type === 'number') {
				if (/(height|width)/i.test(reactName)) {
					jsProperties[jsName] = reactValue + 'px';
				} else {
					jsProperties[jsName] = reactValue;
				}
			}
		}
	});

	return jsProperties;
}

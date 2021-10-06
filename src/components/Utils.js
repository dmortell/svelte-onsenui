// #![allow(non_camel_case_types)]
/*eslint camelcase: ["error", {properties: "never"}]*/
/*eslint camelcase: ["error", {ignoreDestructuring: true}]*/
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
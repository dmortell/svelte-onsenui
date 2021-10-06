<script>
/**
 * @original ons-icon
 * @category visual
 * @tutorial react/Reference/icon
 * @description
 * [en]
 * Displays an icon. The following icon suites are available:
 *   *  [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
 *   *  [Ionicons](http://ionicons.com/)
 *   *  [Material Design Iconic Font](http://zavoloklom.github.io/material-design-iconic-font/)
 * [/en]
 * [ja][/ja]
 * @example
  <Icon
    size={{default: 32, material: 40}}
    icon={{default: 'ion-navicon', material: 'md-menu'}}
  />
*/

	// import SimpleWrapper from './SimpleWrapper.jsx';
	// import Util from './Util.js';

	/**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the icon.[/en]
   *  [ja][/ja]
   */
  export var modifier = ''		// PropTypes.string,

  /**
   * @name icon
   * @type 'object or string'
   * @description
   *  [en] can be either a string or an object. If it is an string, it is set to an specific icon like 'ions-navicon'. If it is an object, it represents a dictionary of the icons depending on the modifier e.g.   `{{default: 'ion-navicon', material: 'md-menu'}}` [/en]
   *  [ja][/ja]
   */
  export var icon;		// PropTypes.oneOfType([ PropTypes.string, PropTypes.objectOf(PropTypes.string) ])

  /**
   * @name size
   * @type 'object or number'
   * @description
   *  [en] can be either a number or an object. If it is an number, it  specifies the icon size with a number in pixels. If it is an object, it represents a dictionary of the icon sizes depending on the modifier e.g.   `{{default: 20, material: 18}}` [/en]
   *  [ja][/ja]
   */
  export var size = 24;		// PropTypes.oneOfType([ PropTypes.number, PropTypes.objectOf(PropTypes.number) ])

  /**
   * @name rotate
   * @type number
   * @description
   *  [en] Number of degrees to rotate the icon. Valid values are 90, 180 and 270. [/en]
   *  [ja][/ja]
   */
	export var rotate = 0;		// PropTypes.oneOf([0, 90, 180, 270]),

  /**
   * @name fixedWidth
   * @type bool
   * @description
   * [en] When used in a list, you want the icons to have the same width so that they align vertically by defining this attribute. [/en]
   *  [ja][/ja]
   */
	 export var fixedWidth = false;		// PropTypes.bool,

  /**
   * @name spin
   * @type bool
   * @description
   * [en] Specify whether the icon should be spinning. [/en]
   *  [ja][/ja]
   */
  export var spin = false;		// PropTypes.bool

	// const attrs = Util.getAttrs(this, others);
	const attrs = {modifier, rotate, fixedWidth, spin};

	if (icon && (typeof icon) !== 'string') {
		const keys = Object.keys(icon).filter((a) => a !== 'default');
		const innerString = keys.map((key) => key + ':' + icon[key] + '');
		icon = icon.default + ', ' + innerString.join(',');
	}

	if (size) {
		console.log(typeof size)
		if ((typeof size) === 'number') {
			size = `${size}px`;
		} else {
			const keys = Object.keys(size).filter((a) => a !== 'default');
			const innerString = keys.map((key) => key + ':' + size[key] + 'px');
			size = size.default + 'px, ' + innerString.join(',');
		}
	}

</script>

<ons-icon {size} {icon}><slot/></ons-icon>

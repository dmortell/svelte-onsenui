/* react-onsenui v1.11.2 - 2018-12-28 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('react-dom'), require('onsenui')) :
		typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'react-dom', 'onsenui'], factory) :
			(factory((global.Ons = {}), global.React, global.PropTypes, global.ReactDOM, global.ons));
}(this, (function (exports, React, PropTypes, ReactDOM, ons) {
	'use strict';

	React = React && React.hasOwnProperty('default') ? React['default'] : React;
	PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
	var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
	ons = ons && ons.hasOwnProperty('default') ? ons['default'] : ons;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
		return typeof obj;
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};











	var classCallCheck = function (instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	};

	var createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();







	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];

			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		return target;
	};

	var get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;
		var desc = Object.getOwnPropertyDescriptor(object, property);

		if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);

			if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;

			if (getter === undefined) {
				return undefined;
			}

			return getter.call(receiver);
		}
	};

	var inherits = function (subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};









	var objectWithoutProperties = function (obj, keys) {
		var target = {};

		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}

		return target;
	};

	var possibleConstructorReturn = function (self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};



















	var toConsumableArray = function (arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

			return arr2;
		} else {
			return Array.from(arr);
		}
	};

	var normalize = function normalize(key) {
		if (/^is[A-Z]/.test(key)) {
			key = key.slice(2);
		}
		return key.replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase();
	};

	var Util = {
		eventToHandler: function eventToHandler(string) {
			return 'on' + string.charAt(0).toUpperCase() + string.slice(1);
		},


		/**
		 * Turns an object of React props into an object of vanilla JS properties for a given component.
		 *
		 * @param {Object} el
		 *   The component whose props should be converted
		 * @param {Object} props
		 *   The props that should be converted (default: all props)
		 * @param {Object} nameMap
		 *   Map of 'react prop name' -> 'vanilla JS property name'. Overrides default renaming scheme.
		 */
		getAttrs: function getAttrs(el) {
			var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : el.props;
			var nameMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

			var jsProperties = {};
			var validProps = el.constructor.propTypes || {};
			var ignoredProps = ['isOpen'];

			Object.keys(props).forEach(function (reactName) {
				var reactValue = props[reactName];

				// onClick and anything that isn't a valid React prop get added immediately
				if (!validProps.hasOwnProperty(reactName) || reactName === 'onClick') {
					jsProperties[reactName] = reactValue;

					// don't add any props we specifically want to ignore
				} else if (ignoredProps.indexOf(reactName) === -1) {
					var jsName = nameMap[reactName] || normalize(reactName);
					var type = typeof reactValue === 'undefined' ? 'undefined' : _typeof(reactValue);

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
	};

	var BaseDialog = function (_React$Component) {
		inherits(BaseDialog, _React$Component);

		function BaseDialog() {
			var _ref;

			classCallCheck(this, BaseDialog);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = BaseDialog.__proto__ || Object.getPrototypeOf(BaseDialog)).call.apply(_ref, [this].concat(args)));

			var callback = function callback(name, event) {
				if (_this.props[name]) {
					return _this.props[name](event);
				}
			};
			_this.onCancel = callback.bind(_this, 'onCancel');
			_this.onPreShow = callback.bind(_this, 'onPreShow');
			_this.onPostShow = callback.bind(_this, 'onPostShow');
			_this.onPreHide = callback.bind(_this, 'onPreHide');
			_this.onPostHide = callback.bind(_this, 'onPostHide');
			return _this;
		}

		createClass(BaseDialog, [{
			key: 'show',
			value: function show() {
				this.node.firstChild.show();
			}
		}, {
			key: 'updateClasses',
			value: function updateClasses() {
				var node = this.node.firstChild;

				if (this.props.className) {
					if (this.lastClass) {
						node.className = node.className.replace(this.lastClass, '');
					}

					this.lastClass = ' ' + this.props.className;
					node.className += this.lastClass;
				}
			}
		}, {
			key: 'hide',
			value: function hide() {
				this.node.firstChild.hide();
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.node = document.createElement('div');
				document.body.appendChild(this.node);

				this.node.addEventListener('dialog-cancel', this.onCancel);
				this.node.addEventListener('preshow', this.onPreShow);
				this.node.addEventListener('postshow', this.onPostShow);
				this.node.addEventListener('prehide', this.onPreHide);
				this.node.addEventListener('posthide', this.onPostHide);

				this.renderPortal(this.props, false, this.props.onDeviceBackButton);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {
				this.renderPortal(newProps, this.props.isOpen);
				if (newProps.onDeviceBackButton !== undefined) {
					this.node.firstChild.onDeviceBackButton = newProps.onDeviceBackButton;
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var _this2 = this;

				this.node.removeEventListener('dialog-cancel', this.onCancel);
				this.node.removeEventListener('preshow', this.onPreShow);
				this.node.removeEventListener('postshow', this.onPostShow);
				this.node.removeEventListener('prehide', this.onPreHide);
				this.node.removeEventListener('posthide', this.onPostHide);

				var unmount = function unmount() {
					ReactDOM__default.unmountComponentAtNode(_this2.node);
					document.body.removeChild(_this2.node);
				};

				if (this.node.firstChild.visible === true) {
					this.node.firstChild.hide().then(unmount);
				} else {
					unmount();
				}
			}
		}, {
			key: '_update',
			value: function _update(isShown, onDeviceBackButton) {
				if (this.props.isOpen) {
					if (!isShown) {
						this.show();
					}
				} else {
					this.hide();
				}

				this.updateClasses();

				if (onDeviceBackButton instanceof Function) {
					this.node.firstChild.onDeviceBackButton = onDeviceBackButton;
				}
			}
		}, {
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				throw new Error('_getDomNodeName is not implemented');
			}
		}, {
			key: 'renderPortal',
			value: function renderPortal(props, isShown) {
				var onDeviceBackButton = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var isOpen = props.isOpen,
					others = objectWithoutProperties(props, ['isOpen']);

				var attrs = Util.getAttrs(this, others);
				var DomNodeName = this._getDomNodeName();

				ReactDOM__default.unstable_renderSubtreeIntoContainer(this, React.createElement(DomNodeName, _extends({}, attrs, { children: props.children })), this.node, this._update.bind(this, isShown, onDeviceBackButton));
			}
		}, {
			key: 'render',
			value: function render() {
				return null;
			}
		}]);
		return BaseDialog;
	}(React.Component);

	BaseDialog.propTypes = {
		onCancel: PropTypes.func,
		isOpen: PropTypes.bool.isRequired,
		isCancelable: PropTypes.bool,
		isDisabled: PropTypes.bool,
		animation: PropTypes.string,
		maskColor: PropTypes.string,
		animationOptions: PropTypes.object,
		onPreShow: PropTypes.func,
		onPostShow: PropTypes.func,
		onPreHide: PropTypes.func,
		onPostHide: PropTypes.func,
		onDeviceBackButton: PropTypes.func
	};

	BaseDialog.defaultProps = {
		isCancelable: true,
		isDisabled: false
	};

	/**
	 * @original ons-action-sheet
	 * @category dialog
	 * @tutorial react/Reference/action-sheet
	 * @description
	 * [en]
	 *  Action/bottom sheet that is displayed on top of current screen.
	 *  The action sheet is useful for displaying a list of options and asking the user to make a decision. An ActionSheetButton component is provided for this purpose, although it can contain any type of content.
	 *  It will automatically be displayed as Material Design (bottom sheet) when running on an Android device.
	 * [/en]
	 * [ja][/ja]
	 */

	var ActionSheet = function (_BaseDialog) {
		inherits(ActionSheet, _BaseDialog);

		function ActionSheet() {
			classCallCheck(this, ActionSheet);
			return possibleConstructorReturn(this, (ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).apply(this, arguments));
		}

		createClass(ActionSheet, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-action-sheet';
			}
		}]);
		return ActionSheet;
	}(BaseDialog);

	ActionSheet.propTypes = {
		/**
		 * @name onCancel
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onCancel: PropTypes.func,

		/**
		 * @name isOpen
		 * @type bool
		 * @required true
		 * @description
		 *  [en]
		 *  Indicates whether the dialog is open and shown.
		 *  [/en]
		 *  [ja][/ja]
		 */
		isOpen: PropTypes.bool.isRequired,

		/**
		 * @name isCancelable
		 * @type bool
		 * @required false
		 * @description
		 *  [en]
		 *  Specifies whether the dialog is cancelable or not.
		 *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
		 *  [/en]
		 *  [ja][/ja]
		 */
		isCancelable: PropTypes.bool,

		/**
		 * @name isDisabled
		 * @type bool
		 * @required false
		 * @description
		 *  [en]
		 *  Specifies whether the dialog is disabled.
		 *  [/en]
		 *  [ja][/ja]
		 */
		isDisabled: PropTypes.bool,

		/**
		 * @name animation
		 * @type string
		 * @required false
		 * @description
		 *  [en]
		 *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
		 *  [/en]
		 *  [ja][/ja]
		 */
		animation: PropTypes.string,

		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the dialog.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name maskColor
		 * @type string
		 * @required false
		 * @description
		 *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
		 *  [ja][/ja]
		 */
		maskColor: PropTypes.string,

		/**
		 * @name animationOptions
		 * @type object
		 * @required false
		 * @description
		 *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
		 *  [ja][/ja]
		 */
		animationOptions: PropTypes.object,

		/**
		 * @name onPreShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just before the action sheet is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPreShow: PropTypes.func,

		/**
		 * @name onPostShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just after the action sheet is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPostShow: PropTypes.func,

		/**
		 * @name onPreHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just before the action sheet is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPreHide: PropTypes.func,

		/**
		 * @name onPostHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just after the action sheet is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPostHide: PropTypes.func,

		/**
		 * @name onDeviceBackButton
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Custom handler for device back button.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onDeviceBackButton: PropTypes.func
	};

	var BasicComponent = function (_React$Component) {
		inherits(BasicComponent, _React$Component);

		function BasicComponent() {
			var _ref;

			classCallCheck(this, BasicComponent);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = BasicComponent.__proto__ || Object.getPrototypeOf(BasicComponent)).call.apply(_ref, [this].concat(args)));

			_this.updateClasses = _this.updateClasses.bind(_this);
			return _this;
		}

		createClass(BasicComponent, [{
			key: 'updateClasses',
			value: function updateClasses() {
				var node = ReactDOM__default.findDOMNode(this);

				if (!node) {
					return;
				}

				if (typeof this.props.className !== 'undefined') {
					if (this.lastClass) {
						node.className = node.className.replace(this.lastClass, ' ');
					}

					this.lastClass = this.props.className.trim();

					node.className = node.className.trim() + ' ' + this.lastClass;
				}

				if (!ons) {
					throw new Error("react-onsenui requires `onsenui`, make sure you are loading it with `import onsenui` or `require('onsenui')` before using the components");
				}

				ons._autoStyle.prepare(node);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.updateClasses();
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				this.updateClasses();
			}
		}]);
		return BasicComponent;
	}(React.Component);

	var SimpleWrapper = function (_BasicComponent) {
		inherits(SimpleWrapper, _BasicComponent);

		function SimpleWrapper() {
			classCallCheck(this, SimpleWrapper);
			return possibleConstructorReturn(this, (SimpleWrapper.__proto__ || Object.getPrototypeOf(SimpleWrapper)).apply(this, arguments));
		}

		createClass(SimpleWrapper, [{
			key: 'render',
			value: function render() {
				return React.createElement(this._getDomNodeName(), Util.getAttrs(this), this.props.children);
			}
		}]);
		return SimpleWrapper;
	}(BasicComponent);

	/**
	 * @original ons-action-sheet-button
	 * @category dialog
	 * @tutorial react/Reference/action-sheet
	 * @description
	 * [en]Component that represent each button of the action sheet.[/en]
	 * [ja][/ja]
	 */

	var ActionSheetButton = function (_SimpleWrapper) {
		inherits(ActionSheetButton, _SimpleWrapper);

		function ActionSheetButton() {
			classCallCheck(this, ActionSheetButton);
			return possibleConstructorReturn(this, (ActionSheetButton.__proto__ || Object.getPrototypeOf(ActionSheetButton)).apply(this, arguments));
		}

		createClass(ActionSheetButton, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-action-sheet-button';
			}
		}]);
		return ActionSheetButton;
	}(SimpleWrapper);

	ActionSheetButton.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the action sheet button.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name icon
		 * @type string
		 * @description
		 *  [en]Creates an `Icon` component with this string. Only visible on Android.[/en]
		 *  [ja][/ja]
		 */
		icon: PropTypes.string,

		/**
		 * @name onClick
		 * @type function
		 * @description
		 *  [en]This function will be called when the button is clicked.[/en]
		 *  [ja][/ja]
		 */
		onClick: PropTypes.func
	};

	/**
	 * @original ons-alert-dialog
	 * @category dialog
	 * @tutorial react/Reference/alert-dialog
	 * @description
	 * [en]
	 *   Alert dialog that is displayed on top of the current screen. Useful for displaying questions, warnings or error messages to the user. The title, content and buttons can be easily customized and it will automatically switch style based on the platform.
	 * [/en]
	 * [ja][/ja]
	 * @example
	   <AlertDialog isOpen={this.state.isOpen} onCancel={this.handleCancel.bind(this)} cancelable>
		 <div className="alert-dialog-title">Warning!</div>
		 <div className="alert-dialog-content">
		   An error has occurred!
		 </div>
		 <div className="alert-dialog-footer">
		   <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
			 Cancel
		   </Button>
		   <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
			 Ok
		   </Button>
		 </div>
	   </AlertDialog>
	 */

	var AlertDialog = function (_BaseDialog) {
		inherits(AlertDialog, _BaseDialog);

		function AlertDialog() {
			classCallCheck(this, AlertDialog);
			return possibleConstructorReturn(this, (AlertDialog.__proto__ || Object.getPrototypeOf(AlertDialog)).apply(this, arguments));
		}

		createClass(AlertDialog, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-alert-dialog';
			}
		}]);
		return AlertDialog;
	}(BaseDialog);

	AlertDialog.propTypes = {
		/**
		 * @name onCancel
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onCancel: PropTypes.func,

		/**
		 * @name isOpen
		 * @type bool
		 * @required true
		 * @description
		 *  [en]
		 *  Indicates whether the dialog is open and shown.
		 *  [/en]
		 *  [ja][/ja]
		 */
		isOpen: PropTypes.bool.isRequired,

		/**
		 * @name isCancelable
		 * @type bool
		 * @required false
		 * @description
		 *  [en]
		 *  Specifies whether the dialog is cancelable or not.
		 *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
		 *  [/en]
		 *  [ja][/ja]
		 */
		isCancelable: PropTypes.bool,

		/**
		 * @name isDisabled
		 * @type bool
		 * @required false
		 * @description
		 *  [en]
		 *  Specifies whether the dialog is disabled.
		 *  [/en]
		 *  [ja][/ja]
		 */
		isDisabled: PropTypes.bool,

		/**
		 * @name animation
		 * @type string
		 * @required false
		 * @description
		 *  [en]
		 *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
		 *  [/en]
		 *  [ja][/ja]
		 */
		animation: PropTypes.string,

		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the dialog.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name maskColor
		 * @type string
		 * @required false
		 * @description
		 *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
		 *  [ja][/ja]
		 */
		maskColor: PropTypes.string,

		/**
		 * @name animationOptions
		 * @type object
		 * @required false
		 * @description
		 *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
		 *  [ja][/ja]
		 */
		animationOptions: PropTypes.object,

		/**
		 * @name onPreShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just before the alert dialog is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPreShow: PropTypes.func,

		/**
		 * @name onPostShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just after the alert dialog is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPostShow: PropTypes.func,

		/**
		 * @name onPreHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just before the alert dialog is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPreHide: PropTypes.func,

		/**
		 * @name onPostHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just after the alert dialog is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPostHide: PropTypes.func,

		/**
		 * @name onDeviceBackButton
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Custom handler for device back button.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onDeviceBackButton: PropTypes.func
	};

	/**
	 * @original ons-alert-dialog-button
	 * @category dialog
	 * @tutorial react/Reference/dialog
	 * @description
	 * [en]Component that represent each button of the alert dialog.[/en]
	 * [ja][/ja]
	 */

	var AlertDialogButton = function (_SimpleWrapper) {
		inherits(AlertDialogButton, _SimpleWrapper);

		function AlertDialogButton() {
			classCallCheck(this, AlertDialogButton);
			return possibleConstructorReturn(this, (AlertDialogButton.__proto__ || Object.getPrototypeOf(AlertDialogButton)).apply(this, arguments));
		}

		createClass(AlertDialogButton, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-alert-dialog-button';
			}
		}]);
		return AlertDialogButton;
	}(SimpleWrapper);

	AlertDialogButton.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the alert dialog button.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en]
		 *  Specifies whether the button is disabled.
		 *  [/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool,

		/**
		 * @name onClick
		 * @type function
		 * @description
		 *  [en]This function will be called when the button is clicked.[/en]
		 *  [ja][/ja]
		 */
		onClick: PropTypes.func
	};

	/**
	 * @original ons-back-button
	 * @category navigation
	 * @tutorial react/Reference/back-button
	 * @description
	 * [en]
	 *   Back button component for Toolbar. It enables to automatically to pop the top page of the navigator. When only presented with one page, the button is hidden automatically.
	 *
	 *   The default behavior can be overridden using the `onClick` prop.
	 * [/en]
	 * [ja][/ja]
	 * @example
	 * <Toolbar modifier={this.props.modifier} >
		  <div className="left"><BackButton modifier={this.props.modifier}>Back</BackButton></div>
		  <div className="center">{this.props.title}</div>
	   </Toolbar>
	 */

	var BackButton = function (_SimpleWrapper) {
		inherits(BackButton, _SimpleWrapper);

		function BackButton() {
			classCallCheck(this, BackButton);
			return possibleConstructorReturn(this, (BackButton.__proto__ || Object.getPrototypeOf(BackButton)).apply(this, arguments));
		}

		createClass(BackButton, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-back-button';
			}
		}, {
			key: '_updateOnClick',
			value: function _updateOnClick(props) {
				var node = ReactDOM__default.findDOMNode(this);

				if (props.onClick) {
					node.onClick = function () {
						return null;
					};
				} else {
					delete node.onClick;
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this._updateOnClick(this.props);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(props) {
				this._updateOnClick(props);
			}
		}]);
		return BackButton;
	}(SimpleWrapper);

	BackButton.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the back button.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name onClick
		 * @type function
		 * @description
		 *  [en]This function will be called ones the button is clicked. It overrides the default behavior of the back button.[/en]
		 *  [ja][/ja]
		 */
		onClick: PropTypes.func
	};

	/**
	 * @original ons-bottom-toolbar
	 * @category page
	 * @description
	 * [en]Toolbar component that is positioned at the bottom of the page.[/en]
	 * [ja][/ja]
	 * @example
	 * <BottomToolbar modifier="material"> Content </BottomToolbar>
	 */

	var BottomToolbar = function (_SimpleWrapper) {
		inherits(BottomToolbar, _SimpleWrapper);

		function BottomToolbar() {
			classCallCheck(this, BottomToolbar);
			return possibleConstructorReturn(this, (BottomToolbar.__proto__ || Object.getPrototypeOf(BottomToolbar)).apply(this, arguments));
		}

		createClass(BottomToolbar, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-bottom-toolbar';
			}
		}]);
		return BottomToolbar;
	}(SimpleWrapper);

	BottomToolbar.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @description
		 *  [en]Specify modifier name to specify custom styles. Optional.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string
	};

	/**
	 * @original ons-button
	 * @category form
	 * @tutorial react/Reference/button
	 * @description
	 * [en] Button component. If you want to place a button in a toolbar, use `ToolbarButton` or `BackButton` instead. Will automatically display as a Material Design button with a ripple effect on Android.
	 [/en]
	 * [ja][/ja]
	 * @example
	 * <Button modifier="large--cta">
	 *   Tap Me
	 * </Button>
	 */

	var Button = function (_SimpleWrapper) {
		inherits(Button, _SimpleWrapper);

		function Button() {
			classCallCheck(this, Button);
			return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
		}

		createClass(Button, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-button';
			}
		}]);
		return Button;
	}(SimpleWrapper);

	Button.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the button.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en]
		 *  Specifies whether the button is disabled.
		 *  [/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool,

		/**
		 * @name ripple
		 * @type bool
		 * @description
		 *  [en]
		 *  Specifies whether the button has a ripple effect.
		 *  [/en]
		 *  [ja][/ja]
		 */
		ripple: PropTypes.bool,

		/**
		 * @name onClick
		 * @type function
		 * @description
		 *  [en] This function will be called when the button is clicked. [/en]
		 *  [ja][/ja]
		 */
		onClick: PropTypes.func
	};

	/**
	 * @original ons-card
	 * @category visual
	 * @tutorial react/Reference/visual
	 * @description
	 * [en]Card component that can be used to display content.[/en]
	 * [ja][/ja]
	 * @example
	 *
	<Card>
	  <p>Some content</p>
	</Card>
	 */

	var Card = function (_SimpleWrapper) {
		inherits(Card, _SimpleWrapper);

		function Card() {
			classCallCheck(this, Card);
			return possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
		}

		createClass(Card, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-card';
			}
		}]);
		return Card;
	}(SimpleWrapper);

	Card.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @description
		 *  [en]
		 *  Specify modifier name to specify custom styles. Optional.
		 *  [/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string
	};

	/**
	 * @original ons-carousel
	 * @category carousel
	 * @tutorial react/Reference/carousel
	 * @description
	 * [en] Carousel component. A carousel can be used to display several items in the same space.
	 *     The component supports displaying content both horizontally and vertically. The user can scroll through the items by dragging and it can also be controller programmatically.
	 [/en]
	 * [ja][/ja]
	 * @example
	 *    <Carousel
			  onPostChange={() => console.log('onPostChange')}
			  onOverscroll={() => console.log('onOverscroll')}
			  onRefresh={() => console.log('onRefresh')}
			  ref={(carousel) => { this.carousel = carousel; }}
			  swipeable
			  overscrollable
			  autoScroll
			  fullscreen
			  autoScrollRatio={0.2}
		  >
			  <CarouselItem style={{backgroundColor: 'gray'}}>
				<div className='item-label'>GRAY</div>
			  </CarouselItem>
			  <CarouselItem style={{backgroundColor: '#085078'}}>
				<div className='item-label'>BLUE</div>
			  </CarouselItem>
			</Carousel>

	 */

	var Carousel = function (_SimpleWrapper) {
		inherits(Carousel, _SimpleWrapper);

		function Carousel() {
			var _ref;

			classCallCheck(this, Carousel);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call.apply(_ref, [this].concat(args)));

			var callback = function callback(name, event) {
				if (_this.props[name]) {
					return _this.props[name](event);
				}
			};
			_this.onChange = callback.bind(_this, 'onPostChange');
			_this.onRefresh = callback.bind(_this, 'onRefresh');
			_this.onOverscroll = callback.bind(_this, 'onOverscroll');
			return _this;
		}

		createClass(Carousel, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-carousel';
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				get(Carousel.prototype.__proto__ || Object.getPrototypeOf(Carousel.prototype), 'componentDidMount', this).call(this);
				var node = ReactDOM.findDOMNode(this);
				node.addEventListener('postchange', this.onChange);
				node.addEventListener('refresh', this.onRefresh);
				node.addEventListener('overscroll', this.onOverscroll);
				node.onSwipe = this.props.onSwipe || null;
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var node = ReactDOM.findDOMNode(this);
				node.removeEventListener('postchange', this.onPostChange);
				node.removeEventListener('refresh', this.onRefresh);
				node.removeEventListener('overscroll', this.onOverscroll);
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(props) {
				var node = ReactDOM.findDOMNode(this);

				if (this.props.index !== node.getActiveIndex()) {
					node.setActiveIndex(this.props.index, props.animationOptions);
				}

				if (this.props.children.length !== props.children.length) {
					node.refresh();
				}

				if (this.props.onSwipe !== props.onSwipe) {
					node.onSwipe = this.props.onSwipe;
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var attrs = Util.getAttrs(this, this.props, { index: 'initial-index' });

				return React.createElement(
					'ons-carousel',
					attrs,
					React.createElement(
						'div',
						null,
						this.props.children
					),
					React.createElement('div', null)
				);
			}
		}]);
		return Carousel;
	}(SimpleWrapper);

	Carousel.propTypes = {

		/**
		 * @name direction
		 * @type string
		 * @required false
		 * @description
		 *  [en]The direction of the carousel. Can be either "horizontal" or "vertical". Default is "horizontal".[/en]
		 *  [ja][/ja]
		 */
		direction: PropTypes.oneOf(['horizontal', 'vertical']),

		/**
		 * @name fullscreen
		 * @type bool
		 * @description
		 *  [en]If true, the carousel will cover the whole screen.[/en]
		 *  [ja][/ja]
		 */
		fullscreen: PropTypes.bool,

		/**
		 * @name overscrollable
		 * @type bool
		 * @description
		 *  [en]If true, the carousel will be scrollable over the edge. It will bounce back when released.[/en]
		 *  [ja][/ja]
		 */
		overscrollable: PropTypes.bool,

		/**
		 * @name centered
		 * @type bool
		 * @description
		 *  [en]If true, the carousel then the selected item will be in the center of the carousel instead of the beginning. Useful only when the items are smaller than the carousel.[/en]
		 *  [ja][/ja]
		 */
		centered: PropTypes.bool,

		/**
		 * @name itemWidth
		 * @type number
		 * @description
		 *  [en]ons-carousel-item's width. Only works when the direction is set to "horizontal".[/en]
		 *  [ja][/ja]
		 */
		itemWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

		/**
		 * @name itemHeight
		 * @type number
		 * @description
		 *  [en]ons-carousel-item's height. Only works when the direction is set to "vertical".[/en]
		 *  [ja][/ja]
		 */
		itemHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

		/**
		 * @name autoScroll
		 * @type bool
		 * @description
		 *  [en]If true, the carousel will be automatically scrolled to the closest item border when released.[/en]
		 *  [ja][/ja]
		 */
		autoScroll: PropTypes.bool,

		/**
		 * @name autoScrollRatio
		 * @type number
		 * @description
		 *  [en]A number between 0.0 and 1.0 that specifies how much the user must drag the carousel in order for it to auto scroll to the next item.[/en]
		 *  [ja][/ja]
		 */
		autoScrollRatio: PropTypes.number,

		/**
		 * @name swipeable
		 * @type bool
		 * @description
		 *  [en]If true, the carousel can be scrolled by drag or swipe.[/en]
		 *  [ja][/ja]
		 */
		swipeable: PropTypes.bool,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en]If true, the carousel will be disabled.[/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool,

		/**
		 * @name index
		 * @type number
		 * @description
		 *  [en]Specify the index of the ons-carousel-item to show. Default is 0.[/en]
		 *  [ja][/ja]
		 */
		index: PropTypes.number,

		/**
		 * @name autoRefresh
		 * @type bool
		 * @description
		 *  [en]When this attribute is set the carousel will automatically refresh when the number of child nodes change.[/en]
		 *  [ja][/ja]
		 */
		autoRefresh: PropTypes.bool,

		/**
		 * @name onPostChange
		 * @type function
		 * @description
		 *  [en]Called just after the current carousel item has changed.  [/en]
		 *  [ja][/ja]
		 */
		onPostChange: PropTypes.func,

		/**
		 * @name onRefresh
		 * @type function
		 * @description
		 *  [en]Called when the carousel has been refreshed. [/en]
		 *  [ja][/ja]
		 */
		onRefresh: PropTypes.func,

		/**
		 * @name onOverscroll
		 * @type function
		 * @description
		 *  [en]Called when the carousel has been overscrolled. [/en]
		 *  [ja][/ja]
		 */
		onOverscroll: PropTypes.func,

		/**
		 * @name animationOptions
		 * @type object
		 * @required false
		 * @description
		 *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
		 *  [ja][/ja]
		 */
		animationOptions: PropTypes.object,

		/**
		 * @name onSwipe
		 * @type function
		 * @description
		 *  [en]Hook called whenever the user slides the carousel. It gets a decimal index and an animationOptions object as arguments.[/en]
		 *  [ja][/ja]
		 */
		onSwipe: PropTypes.func
	};

	/**
	 * @original ons-carousel-item
	 * @category carousel
	 * @tutorial react/Reference/carousel
	 * @description
	 * [en] Carousel item component. Used as a child of the `<ons-carousel>` element.
	 [/en]
	 * [ja][/ja]
	 * @example
	*  <Carousel swipeable overscrollable autoScroll fullscreen >
		 <CarouselItem style={{backgroundColor: 'gray'}}>
		   <div className='item-label'>GRAY</div>
		 </CarouselItem>
		 <CarouselItem style={{backgroundColor: '#085078'}}>
		   <div className='item-label'>BLUE</div>
		 </CarouselItem>
	   </Carousel>
	 */

	var CarouselItem = function (_SimpleWrapper) {
		inherits(CarouselItem, _SimpleWrapper);

		function CarouselItem() {
			classCallCheck(this, CarouselItem);
			return possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).apply(this, arguments));
		}

		createClass(CarouselItem, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-carousel-item';
			}
		}]);
		return CarouselItem;
	}(SimpleWrapper);

	CarouselItem.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @description
		 *  [en]
		 *  Specify modifier name to specify custom styles. Optional.
		 *  [/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string
	};

	var BaseInput = function (_BasicComponent) {
		inherits(BaseInput, _BasicComponent);

		function BaseInput() {
			var _ref;

			classCallCheck(this, BaseInput);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = BaseInput.__proto__ || Object.getPrototypeOf(BaseInput)).call.apply(_ref, [this].concat(args)));

			_this.onChange = function (event) {
				if (_this.props.onChange) {
					return _this.props.onChange(event);
				}
			};
			return _this;
		}

		createClass(BaseInput, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				get(BaseInput.prototype.__proto__ || Object.getPrototypeOf(BaseInput.prototype), 'componentDidMount', this).call(this);
				var node = ReactDOM__default.findDOMNode(this);

				if (this.props.defaultValue !== undefined) {
					node.value = this.props.defaultValue;
				}
				if (typeof this.props.checked !== 'undefined') {
					node.checked = this.props.checked;
				} else if (this.props.defaultChecked !== undefined) {
					node.checked = this.props.defaultChecked;
				}
				if (this.props.value !== undefined) {
					node.value = this.props.value;
				}

				this.EVENT_TYPES.forEach(function (eventType) {
					return node.addEventListener(eventType, _this2.onChange);
				});
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var _this3 = this;

				var node = ReactDOM__default.findDOMNode(this);
				this.EVENT_TYPES.forEach(function (eventType) {
					return node.removeEventListener(eventType, _this3.onChange);
				});
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				get(BaseInput.prototype.__proto__ || Object.getPrototypeOf(BaseInput.prototype), 'componentDidUpdate', this).call(this);

				var node = ReactDOM__default.findDOMNode(this);

				if (typeof this.props.value !== 'undefined' && node.value !== this.props.value) {
					node.value = this.props.value;
				}

				if (typeof this.props.checked !== 'undefined') {
					node.checked = this.props.checked;
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props,
					onChange = _props.onChange,
					props = objectWithoutProperties(_props, ['onChange']);

				return React.createElement(this._getDomNodeName(), Util.getAttrs(this, props));
			}
		}, {
			key: 'EVENT_TYPES',
			get: function get$$1() {
				return ['change', 'input'];
			}
		}]);
		return BaseInput;
	}(BasicComponent);

	BaseInput.propTypes = {
		modifier: PropTypes.string,
		disabled: PropTypes.bool,
		onChange: PropTypes.func,
		defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
		defaultChecked: PropTypes.bool,
		checked: PropTypes.bool,
		placeholder: PropTypes.string,
		type: PropTypes.string,
		inputId: PropTypes.string,
		float: PropTypes.bool
	};

	/**
	 * @original ons-checkbox
	 * @category form
	 * @tutorial react/Reference/checkbox
	 * @description
	 * [en]
	 *  A checkbox element. The component will automatically render as a Material Design checkbox on Android devices.
	 *
	 *  Most attributes that can be used for a normal `<input type="checkbox">` element can also be used on the `<Checkbox>` component.
	 * [/en]
	 * [ja][/ja]
	 * @example
	 * <Checkbox
	 *   onChange={event => { this.setState({checked: event.target.checked})} }
	 *   modifier='material' />
	 */

	var Checkbox = function (_BaseInput) {
		inherits(Checkbox, _BaseInput);

		function Checkbox() {
			classCallCheck(this, Checkbox);
			return possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
		}

		createClass(Checkbox, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-checkbox';
			}
		}, {
			key: 'EVENT_TYPES',
			get: function get$$1() {
				return ['change'];
			}
		}]);
		return Checkbox;
	}(BaseInput);

	Checkbox.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the checkbox.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en]
		 *  Specifies whether the checkbox is disabled.
		 *  [/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool,

		/**
		 * @name onChange
		 * @type function
		 * @description
		 *  [en] Called when the checkbox state changes.[/en]
		 *  [ja][/ja]
		 */
		onChange: PropTypes.func,

		/**
		 * @name value
		 * @type string
		 * @description
		 *  [en] Value of the checkbox.[/en]
		 *  [ja][/ja]
		 */
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

		/**
		 * @name checked
		 * @type boolean
		 * @description
		 *  [en]Controls the state of the checkbox (controlled).[/en]
		 *  [ja][/ja]
		 */
		checked: PropTypes.bool,

		/**
		 * @name checked
		 * @type boolean
		 * @description
		 *  [en]Defined the state of the radio button at first render for uncontrolled inputs.[/en]
		 *  [ja][/ja]
		 */
		defaultChecked: PropTypes.bool,

		/**
		 * @name inputId
		 * @type string
		 * @description
		 *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements.[/en]
		 *  [ja][/ja]
		 */
		inputId: PropTypes.string
	};

	/**
	 * @original ons-col
	 * @category grid
	 * @description
	 * [en]
	 * Represents a column in the grid system. Use with `<ons-row>` to layout components.
	 * [/en]
	 * [ja][/ja]
	 * <Row>
	 *   <Col width={50}>
	  *   <ons-icon icon="fa-twitter"></ons-icon>
	 *   </Col>
	 *   <Col>Text</Col>
	 * </Row>
	 */

	var Col = function (_SimpleWrapper) {
		inherits(Col, _SimpleWrapper);

		function Col() {
			classCallCheck(this, Col);
			return possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
		}

		createClass(Col, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-col';
			}
		}]);
		return Col;
	}(SimpleWrapper);

	Col.propTypes = {

		/**
		* @name verticalAlign
		* @type {String}
		* @description
		*   [en]Short hand attribute for aligning vertically. Valid values are top, bottom, and center.[/en]
		*   [ja][/ja]
		*/
		verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center']),

		/**
		* @name width
		* @type {String}
		* @description
		*   [en]The width of the column. Valid values are css width values ("10%", 50).[/en]
		*   [ja][/ja]
		*/
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
	};

	/**
	 * @original ons-dialog
	 * @category dialog
	 * @tutorial react/Reference/dialog
	 * @description
	 * [en]  Dialog that is displayed on top of current screen. As opposed to the AlertDialog element, this component can contain any kind of content.  The dialog is useful for displaying menus, additional information or to ask the user to make a decision.  It will automatically be displayed as Material Design when running on an Android device.
	 [/en]
	 * [ja][/ja]
	 * @example
	   <Dialog onCancel={this.onCancel}
		 isOpen={this.props.isOpen}
		 style={{height: 250}}  cancelable>
		 <Page>
		   Page Content
		 </Page>
		</Dialog>

	 */

	var Dialog = function (_BaseDialog) {
		inherits(Dialog, _BaseDialog);

		function Dialog() {
			classCallCheck(this, Dialog);
			return possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
		}

		createClass(Dialog, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-dialog';
			}
		}]);
		return Dialog;
	}(BaseDialog);

	Dialog.propTypes = {
		/**
		 * @name onCancel
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onCancel: PropTypes.func,

		/**
		 * @name isOpen
		 * @type bool
		 * @required true
		 * @description
		 *  [en]
		 *  Indicates whether the dialog is open and shown.
		 *  [/en]
		 *  [ja][/ja]
		 */
		isOpen: PropTypes.bool.isRequired,

		/**
		 * @name isCancelable
		 * @type bool
		 * @required false
		 * @description
		 *  [en]
		 *  Specifies whether the dialog is cancelable or not.
		 *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
		 *  [/en]
		 *  [ja][/ja]
		 */
		isCancelable: PropTypes.bool,

		/**
		 * @name isDisabled
		 * @type bool
		 * @required false
		 * @description
		 *  [en]
		 *  Specifies whether the dialog is disabled.
		 *  [/en]
		 *  [ja][/ja]
		 */
		isDisabled: PropTypes.bool,

		/**
		 * @name animation
		 * @type string
		 * @required false
		 * @description
		 *  [en]
		 *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
		 *  [/en]
		 *  [ja][/ja]
		 */
		animation: PropTypes.string,

		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the dialog.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name maskColor
		 * @type string
		 * @required false
		 * @description
		 *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
		 *  [ja][/ja]
		 */
		maskColor: PropTypes.string,

		/**
		 * @name animationOptions
		 * @type object
		 * @required false
		 * @description
		 *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
		 *  [ja][/ja]
		 */
		animationOptions: PropTypes.object,

		/**
		 * @name onPreShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just before the alert dialog is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPreShow: PropTypes.func,

		/**
		 * @name onPostShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just after the alert dialog is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPostShow: PropTypes.func,

		/**
		 * @name onPreHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just before the alert dialog is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPreHide: PropTypes.func,

		/**
		 * @name onPostHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just after the alert dialog is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPostHide: PropTypes.func,

		/**
		 * @name onDeviceBackButton
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Custom handler for device back button.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onDeviceBackButton: PropTypes.func
	};

	/**
	 * @original ons-fab
	 * @category form
	 * @tutorial react/Reference/fab
	 * @description
	 * [en] The Floating action button is a circular button defined in the [Material Design specification](https://www.google.com/design/spec/components/buttons-floating-action-button.html). They are often used to promote the primary action of the app.
	 *     It can be displayed either as an inline element or in one of the corners. Normally it will be positioned in the lower right corner of the screen.
	 [/en]
	 * [ja][/ja]
	 * @example
	 * <SpeedDial disabled={false} direction='right' onClick={() => console.log('test1')} position='left bottom'>
		 <Fab>
		   <Icon icon='fa-twitter' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
		 </Fab>
		 <SpeedDialItem onClick={() => console.log('speed A')}> A </SpeedDialItem>
		 <SpeedDialItem onClick={() => console.log('speed B')}> B </SpeedDialItem>
		 <SpeedDialItem onClick={() => console.log('speed C')}> C </SpeedDialItem>
		 <SpeedDialItem onClick={() => console.log('speed D')}> D </SpeedDialItem>
	   </SpeedDial>
	  */

	var Fab = function (_SimpleWrapper) {
		inherits(Fab, _SimpleWrapper);

		function Fab() {
			classCallCheck(this, Fab);
			return possibleConstructorReturn(this, (Fab.__proto__ || Object.getPrototypeOf(Fab)).apply(this, arguments));
		}

		createClass(Fab, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-fab';
			}
		}]);
		return Fab;
	}(SimpleWrapper);

	Fab.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the button.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name ripple
		 * @type bool
		 * @description
		 *  [en]If true,  the button will have a ripple effect when tapped.[/en]
		 *  [ja][/ja]
		 */
		ripple: PropTypes.bool,

		/**
		 * @name position
		 * @type string
		 * @required false
		 * @description
		 *  [en]The position of the button. Should be a string like `"bottom right"` or `"top left"`. If this attribute is not defined it will be displayed as an inline element.[/en]
		 *  [ja][/ja]
		 */
		position: PropTypes.string,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en] If true, the button will be disabled. [/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool,

		/**
		 * @name onClick
		 * @type function
		 * @description
		 *  [en] This function will be called ones the button is clicked. [/en]
		 *  [ja][/ja]
		 */
		onClick: PropTypes.func
	};

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

	var Icon = function (_SimpleWrapper) {
		inherits(Icon, _SimpleWrapper);

		function Icon() {
			classCallCheck(this, Icon);
			return possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
		}

		createClass(Icon, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-icon';
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props,
					icon = _props.icon,
					size = _props.size,
					others = objectWithoutProperties(_props, ['icon', 'size']);

				var attrs = Util.getAttrs(this, others);

				if (icon) {
					if (typeof icon === 'string') {
						attrs.icon = icon;
					} else {
						var keys = Object.keys(icon).filter(function (a) {
							return a !== 'default';
						});
						var innerString = keys.map(function (key) {
							return key + ':' + icon[key] + '';
						});
						attrs.icon = icon.default + ', ' + innerString.join(',');
					}
				}

				if (size) {
					if (typeof size === 'number') {
						attrs.size = size + 'px';
					} else {
						var _keys = Object.keys(size).filter(function (a) {
							return a !== 'default';
						});
						var _innerString = _keys.map(function (key) {
							return key + ':' + size[key] + 'px';
						});
						attrs.size = size.default + 'px, ' + _innerString.join(',');
					}
				}

				return React.createElement(this._getDomNodeName(), attrs, this.props.children);
			}
		}]);
		return Icon;
	}(SimpleWrapper);

	Icon.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the icon.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name icon
		 * @type 'object or string'
		 * @description
		 *  [en] can be either a string or an object. If it is an string, it is set to an specific icon like 'ions-navicon'. If it is an object, it represents a dictionary of the icons depending on the modifier e.g.   `{{default: 'ion-navicon', material: 'md-menu'}}` [/en]
		 *  [ja][/ja]
		 */
		icon: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.string)]),

		/**
		 * @name size
		 * @type 'object or number'
		 * @description
		 *  [en] can be either a number or an object. If it is an number, it  specifies the icon size with a number in pixels. If it is an object, it represents a dictionary of the icon sizes depending on the modifier e.g.   `{{default: 20, material: 18}}` [/en]
		 *  [ja][/ja]
		 */
		size: PropTypes.oneOfType([PropTypes.number, PropTypes.objectOf(PropTypes.number)]),

		/**
		 * @name rotate
		 * @type number
		 * @description
		 *  [en] Number of degrees to rotate the icon. Valid values are 90, 180 and 270. [/en]
		 *  [ja][/ja]
		 */
		rotate: PropTypes.oneOf([0, 90, 180, 270]),

		/**
		 * @name fixedWidth
		 * @type bool
		 * @description
		 * [en] When used in a list, you want the icons to have the same width so that they align vertically by defining this attribute. [/en]
		 *  [ja][/ja]
		 */
		fixedWidth: PropTypes.bool,

		/**
		 * @name spin
		 * @type bool
		 * @description
		 * [en] Specify whether the icon should be spinning. [/en]
		 *  [ja][/ja]
		 */
		spin: PropTypes.bool

	};

	/**
	 * @original ons-input
	 * @category form
	 * @tutorial react/Reference/input
	 * @description
	 * [en]
	 * An input element. The `type` attribute can be used to change the input type. All text input types as well as `checkbox` and `radio` are supported. The component will automatically render as a Material Design input on Android devices. Most attributes that can be used for a normal `<input>` element can also be used on the `<ons-input>` element..
	 [/en]
	 * [ja][/ja]
	 * @example
	 * <Input
	 *   value={this.state.text} float
	 *   onChange={(event) => { this.setState({text: event.target.value})} }
	 *   modifier='material'
	 *   placeholder='Username' />
	 */

	var Input = function (_BaseInput) {
		inherits(Input, _BaseInput);

		function Input() {
			classCallCheck(this, Input);
			return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
		}

		createClass(Input, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-input';
			}
		}]);
		return Input;
	}(BaseInput);

	Input.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the input.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en]Specifies whether the input is disabled.[/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool,

		/**
		 * @name readOnly
		 * @type bool
		 * @description
		 *  [en]Specifies whether the input is read-only.[/en]
		 *  [ja][/ja]
		 */
		readOnly: PropTypes.bool,

		/**
		 * @name onChange
		 * @type function
		 * @description
		 *  [en]Called when the text of the input changes.[/en]
		 *  [ja][/ja]
		 */
		onChange: PropTypes.func,

		/**
		 * @name value
		 * @type string
		 * @description
		 *  [en]Content of the input (controlled).[/en]
		 *  [ja][/ja]
		 */
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

		/**
		 * @name defaultValue
		 * @type string
		 * @description
		 *  [en]Content of the input at first render (uncontrolled).[/en]
		 *  [ja][/ja]
		 */
		defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

		/**
		 * @name placehoder
		 * @type string
		 * @description
		 *  [en] Placeholder text. In Material Design this placeholder will be a floating label. [/en]
		 *  [ja][/ja]
		 */
		placeholder: PropTypes.string,

		/**
		 * @name type
		 * @type string
		 * @description
		 *  [en]
		 *    Specify the input type. This is the same as the "type" attribute for normal inputs. It expects strict text types such as `text`, `password`, etc. For checkbox, radio button, select or range, please have a look at the corresponding components.
		 *
		 *    Please take a look at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) for an exhaustive list of possible values. Depending on the platform and browser version some of these might not work.
		 *  [/en]
		 *  [ja][/ja]
		 */
		type: PropTypes.string,

		/**
		 * @name inputId
		 * @type string
		 * @description
		 *  [en]  Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements [/en]
		 *  [ja][/ja]
		 */
		inputId: PropTypes.string,

		/**
		 * @name float
		 * @type bool
		 * @description
		 *  [en]  If this attribute is present, the placeholder will be animated in Material Design.  [/en]
		 *  [ja][/ja]
		 */
		float: PropTypes.bool
	};

	/**
	 * @original ons-lazy-repeat
	 * @category list
	 * @tutorial react/Reference/lazy-list
	 * @description
	 * [en] Using this component a list with millions of items can be rendered without a drop in performance.
	 *     It does that by "lazily" loading elements into the DOM when they come into view and
	 *     removing items from the DOM when they are not visible.
	 [/en]
	 * [ja][/ja]
	 * @example
	 *
	  renderRow(index) {
		return (
		  <ListItem key={index}>
			{'Item ' + (index + 1)}
		  </ListItem>
		);
	  }

	  render() {
		return (
		  <Page renderToolbar={() => <MyToolbar title='LazyList' />} >
			<div style={{height: 100}}>
			  <LazyList
				length={1000}
				renderRow={() =>
				  <ListItem key={index}>
					{'Item ' + (index + 1)}
				  </ListItem>
				}
				calculateItemHeight={() => 44}
			  />
			</div>
		  </Page>
		);
	  }
	}
	 */

	var LazyList = function (_BasicComponent) {
		inherits(LazyList, _BasicComponent);

		function LazyList() {
			var _ref;

			classCallCheck(this, LazyList);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = LazyList.__proto__ || Object.getPrototypeOf(LazyList)).call.apply(_ref, [this].concat(args)));

			_this.state = { children: [] };
			_this.update = _this.update.bind(_this);
			return _this;
		}

		createClass(LazyList, [{
			key: 'update',
			value: function update(props) {
				var self = this;

				this._lazyRepeat.delegate = {
					calculateItemHeight: function calculateItemHeight(index) {
						return props.calculateItemHeight(index);
					},
					// _render: function(items, newHeight) {
					_render: function _render(start, limit, updateTop) {
						var createElement = function createElement(index) {
							return props.renderRow(index);
						};

						var el = [];
						for (var i = start; i < limit; i++) {
							el.push(createElement(i));
						}

						self.setState({ children: el }, updateTop);
					},
					countItems: function countItems() {
						return props.length;
					}
				};
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {
				var helpProps = _extends({}, this.props, newProps);
				this.update(helpProps);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				get(LazyList.prototype.__proto__ || Object.getPrototypeOf(LazyList.prototype), 'componentDidMount', this).call(this);
				this.update(this.props);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				return React.createElement(
					'ons-list',
					_extends({}, this.props, {
						ref: function ref(list) {
							_this2._list = list;
						},
						'class': 'list', style: { position: 'relative', height: this.state.height }
					}),
					React.createElement('ons-lazy-repeat', {
						ref: function ref(lazyRepeat) {
							_this2._lazyRepeat = lazyRepeat;
						}
					}),
					this.state.children
				);
			}
		}]);
		return LazyList;
	}(BasicComponent);

	LazyList.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the lazy list.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name length
		 * @type number
		 * @description
		 *  [en]The length of the list.[/en]
		 *  [ja][/ja]
		 */
		length: PropTypes.number.isRequired,

		/**
		 * @name renderRow
		 * @type function
		 * @description
		 *  [en] A function given the index of the to display row, renders it.[/en]
		 *  [ja][/ja]
		 */
		renderRow: PropTypes.func.isRequired,

		/**
		 * @name calculateItemHeight
		 * @type function
		 * @description
		 *  [en] A function given the index of the to row, returns the height of it.[/en]
		 *  [ja][/ja]
		 */
		calculateItemHeight: PropTypes.func.isRequired
	};

	/**
	 * @original ons-list
	 * @category list
	 * @tutorial react/Reference/list
	 * @description
	 *   [en]
	 *     Component for representing a list. It takes an array called datasource and calls renderRow(row, index) for every row.  Furthermore, the header and the footer can be specified with `renderRow` and `renderHeader` respectively. [/en]
	 * [ja][/ja]
	 * @example
	  <List
		dataSource={['Row 1', 'Row 2']}
		renderHeader={this.renderHeader}
		renderRow={(row, idx) => (
		  <ListItem modifier={idx === this.state.data.length - 1 ? 'longdivider' : null}>
		  {row}
	  <Button modifier="quiet" onClick={this.remove.bind(this, idx)}>Remove</Button>
	  </ListItem>
	  )}
	  renderFooter={this.renderFooter}
	  />
	 */

	var List = function (_BasicComponent) {
		inherits(List, _BasicComponent);

		function List() {
			classCallCheck(this, List);
			return possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
		}

		createClass(List, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				var attrs = Util.getAttrs(this);
				var pages = this.props.dataSource.map(function (data, idx) {
					return _this2.props.renderRow(data, idx);
				});

				return React.createElement(
					'ons-list',
					_extends({}, attrs, {
						ref: function ref(list) {
							_this2._list = list;
						}
					}),
					this.props.renderHeader(),
					pages,
					this.props.children,
					this.props.renderFooter()
				);
			}
		}]);
		return List;
	}(BasicComponent);

	List.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @description
		 *  [en]
		 *  Specify modifier name to specify custom styles.
		 *  [/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name dataSource
		 * @type string
		 * @description
		 *  [en]
		 *    Source of the list data. Should be an array.
		 *  [/en]
		 *  [ja][/ja]
		 */
		dataSource: PropTypes.array,

		/**
		 * @name renderRow
		 * @type function
		 * @description
		 *  [en]
		 *  Function to specify the rendering function for every element in
		 *  in the dataSource.
		 *  [/en]
		 *  [ja][/ja]
		 */
		renderRow: PropTypes.func,

		/**
		 * @name renderHeader
		 * @type function
		 * @description
		 *  [en]
		 *  Function to specify the rendering function for the header
		 *  [/en]
		 *  [ja][/ja]
		 */
		renderHeader: PropTypes.func,

		/**
		 * @name renderFooter
		 * @type function
		 * @description
		 *  [en]
		 *  Function to specify the rendering function for the footer
		 *  [/en]
		 *  [ja][/ja]
		 */
		renderFooter: PropTypes.func
	};

	List.defaultProps = {
		dataSource: [],
		renderRow: function renderRow() {
			return null;
		},
		renderHeader: function renderHeader() {
			return null;
		},
		renderFooter: function renderFooter() {
			return null;
		}
	};

	/**
	 * @original ons-list-header
	 * @category list
	 * @tutorial react/Reference/list
	 * @description
	 * [en] Header element for list items. Must be put inside ons-list component.
	 [/en]
	 * [ja][/ja]
	 * @example
	   <List
		 dataSource={this.state.data}
		 renderHeader={() =>
			<ListHeader style={{fontSize: 15}} className="testClass"> Header Text </ListHeader> }
		renderRow={(row, idx) => (
		  <ListItem > {row} </ListItem>
		)}
	  />
	 */

	var ListHeader = function (_SimpleWrapper) {
		inherits(ListHeader, _SimpleWrapper);

		function ListHeader() {
			classCallCheck(this, ListHeader);
			return possibleConstructorReturn(this, (ListHeader.__proto__ || Object.getPrototypeOf(ListHeader)).apply(this, arguments));
		}

		createClass(ListHeader, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-list-header';
			}
		}]);
		return ListHeader;
	}(SimpleWrapper);

	ListHeader.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @description
		 *  [en]
		 *  Specify modifier name to specify custom styles. Optional.
		 *  [/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string
	};

	/**
	 * @original ons-list-item
	 * @category list
	 * @tutorial react/Reference/list
	 * @description
	 *   [en]
	 *   Component that represents each item in the list. Must be put inside the `List` component. The list item is composed of four parts that are represented with the `left`, `center`, `right` and `expandable-content` classes. These classes can be used to ensure that the content of the list items is properly aligned.
	 *   [/en]
	 * [ja][/ja]
	 * @example
	   <ListItem>
	 *   <div className="left">Left</div>
	 *   <div className="center">Center</div>
	 *   <div className="right">Right</div>
	 *   <div className="expandable-content">Expandable content</div>
	 * </ListItem>
	 */

	var ListItem = function (_SimpleWrapper) {
		inherits(ListItem, _SimpleWrapper);

		function ListItem() {
			classCallCheck(this, ListItem);
			return possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
		}

		createClass(ListItem, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-list-item';
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'componentDidMount', this).call(this);
				this.node = ReactDOM__default.findDOMNode(this);
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'componentDidUpdate', this).call(this);

				if (this.props.expanded !== this.node.expanded) {
					var action = this.props.expanded ? 'show' : 'hide';
					this.node[action + 'Expansion']();
				}
			}
		}]);
		return ListItem;
	}(SimpleWrapper);

	ListItem.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en] The appearance of the list item.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name tappable
		 * @type bool
		 * @description
		 *  [en]
		 *  Specifies whether the list item is tappable.
		 *  [/en]
		 *  [ja][/ja]
		 */
		tappable: PropTypes.bool,

		/**
		 * @name tapBackgroundColor
		 * @type string
		 * @description
		 *  [en]
		 *  Changes the background color when tapped. For this to work, the attribute "tappable" needs to be set. The default color is "#d9d9d9". It will display as a ripple effect on Android.
		 *  [/en]
		 *  [ja][/ja]
		 */
		tapBackgroundColor: PropTypes.string,

		/**
		 * @name lockOnDrag
		 * @type bool
		 * @description
		 *  [en] Prevent vertical scrolling when the user drags horizontally. [/en]
		 *  [ja][/ja]
		 */
		lockOnDrag: PropTypes.bool,

		/**
		 * @name expandable
		 * @type bool
		 * @description
		 *  [en]Specifies whether list item can be expanded to reveal hidden content. Expanded content must be defined in `div.expandable-content`.[/en]
		 *  [ja][/ja]
		 */
		expandable: PropTypes.bool,

		/**
		 * @name expanded
		 * @type bool
		 * @description
		 *  [en]For expandable list items, specifies whether item is expanded[/en]
		 *  [ja][/ja]
		 */
		expanded: PropTypes.bool
	};

	/**
	 * @original ons-list-title
	 * @category list
	 * @tutorial react/Reference/list
	 * @description
	 * [en] Title element for lists. Usually comes before ons-list component.
	 [/en]
	 * [ja][/ja]
	 * @example
	 * <ListTitle>List Title</ListTitle>
	   <List
		 dataSource={this.state.data}
		 renderHeader={() =>
			<ListHeader style={{fontSize: 15}} className="testClass"> Header Text </ListHeader> }
		renderRow={(row, idx) => (
		  <ListItem > {row} </ListItem>
		)}
	  />
	 */

	var ListTitle = function (_SimpleWrapper) {
		inherits(ListTitle, _SimpleWrapper);

		function ListTitle() {
			classCallCheck(this, ListTitle);
			return possibleConstructorReturn(this, (ListTitle.__proto__ || Object.getPrototypeOf(ListTitle)).apply(this, arguments));
		}

		createClass(ListTitle, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-list-title';
			}
		}]);
		return ListTitle;
	}(SimpleWrapper);

	ListTitle.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @description
		 *  [en]
		 *  Specify modifier name to specify custom styles. Optional.
		 *  [/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string
	};

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

	var Navigator = function (_BasicComponent) {
		inherits(Navigator, _BasicComponent);

		function Navigator() {
			var _ref;

			classCallCheck(this, Navigator);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = Navigator.__proto__ || Object.getPrototypeOf(Navigator)).call.apply(_ref, [this].concat(args)));

			_this.pages = [];
			_this.state = {};
			_this._prePush = _this._prePush.bind(_this);
			_this._postPush = _this._postPush.bind(_this);
			_this._prePop = _this._prePop.bind(_this);
			_this._postPop = _this._postPop.bind(_this);
			return _this;
		}

		createClass(Navigator, [{
			key: 'update',
			value: function update(pages, obj) {
				var _this2 = this;

				this.pages = pages || [];
				return new Promise(function (resolve) {
					_this2.forceUpdate(resolve);
				});
			}

			/**
			 * @method resetPage
			 * @signature resetPage(route, options = {})
			 * @param {Object} route
			 *   [en] The route that the page should be reset to.[/en]
			 *   [ja][/ja]
			 * @return {Promise}
			 *   [en]Promise which resolves to the revealed page.[/en]
			 *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
			 * @description
			 *   [en]Resets the current page[/en]
			 *   [ja][/ja]
			 */

		}, {
			key: 'resetPage',
			value: function resetPage(route) {
				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				return this.resetPageStack([route], options);
			}

			/**
			 * @method resetPageStack
			 * @signature resetPageStack(route, options = {})
			 * @param {Array} routes
			 *   [en] The routes that the navigator should be reset to.[/en]
			 *   [ja][/ja]
			 * @return {Promise}
			 *   [en]Promise which resolves to the revealed page.[/en]
			 *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
			 * @description
			 *   [en] Resets the navigator to the current page stack[/en]
			 *   [ja][/ja]
			 */

		}, {
			key: 'resetPageStack',
			value: function resetPageStack(routes) {
				var _this3 = this;

				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				if (this.isRunning()) {
					return Promise.reject('Navigator is already running animation.');
				}

				var hidePages = function hidePages() {
					var pageElements = _this3._navi.pages;
					for (var i = pageElements.length - 2; i >= 0; i--) {
						pageElements[i].style.display = 'none';
					}
				};

				if (options.pop) {
					this.routesBeforePop = this.routes.slice();
					this.routesAfterPop = routes;
					this.routes = routes.concat([this.routes[this.routes.length - 1]]);

					var _update = function _update() {
						_this3.pages.pop();
						_this3.routes = routes;
						return new Promise(function (resolve) {
							return _this3.forceUpdate(resolve);
						});
					};

					return this.update(this.pages).then(function () {
						return _this3._navi._popPage(options, _update);
					}).then(function () {
						return hidePages();
					});
				}

				var lastRoute = routes[routes.length - 1];
				var newPage = this.props.renderPage(lastRoute, this);
				this.routes.push(lastRoute);

				var update = function update() {
					_this3.pages.push(newPage);
					return new Promise(function (resolve) {
						return _this3.forceUpdate(resolve);
					});
				};

				return this._navi._pushPage(options, update).then(function () {
					_this3.routes = routes;
					_this3.pages = routes.map(function (route) {
						return _this3.props.renderPage(route, _this3);
					});
					return _this3.update(_this3.pages).then(function () {
						return hidePages();
					});
				});
			}

			/**
			 * @method pushPage
			 * @signature pushPage(route, options = {})
			 * @param {Object} route
			 *   [en] The route that the navigator should push to.[/en]
			 *   [ja][/ja]
			 * @return {Promise}
			 *   [en] Promise which resolves to the revealed page.[/en]
			 *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
			 * @description
			 *   [en] Pushes a page to the page stack[/en]
			 *   [ja][/ja]
			 */

		}, {
			key: 'pushPage',
			value: function pushPage(route) {
				var _this4 = this;

				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				if (this.isRunning()) {
					return Promise.reject('Navigator is already running animation.');
				}

				return new Promise(function (resolve) {
					var update = function update() {
						return new Promise(function (resolve) {
							_this4.pages.push(_this4.props.renderPage(route, _this4));
							_this4.forceUpdate(resolve);
						});
					};

					_this4.routes.push(route);
					_this4._navi._pushPage(options, update).then(resolve).catch(function (error) {
						_this4.routes.pop();
						_this4.pages.pop();
						throw error;
					});
				});
			}
		}, {
			key: 'isRunning',
			value: function isRunning() {
				return this._navi._isRunning;
			}

			/*
			 * @method replacePage
			 * @signature replacePage(route, [options])
			 * @param {Object} route
			 *   [en] The route that the navigator should replace the top page with.[/en]
			 *   [ja][/ja]
			 * @return {Promise}
			 *   [en]Promise which resolves to the new page.[/en]
			 *   [ja]新しいページを解決するPromiseを返します。[/ja]
			 * @description
			 *   [en]Replaces the current top page with the specified one. Extends `pushPage()` parameters.[/en]
			 *   [ja]現在表示中のページをを指定したページに置き換えます。[/ja]
			 */

		}, {
			key: 'replacePage',
			value: function replacePage(route) {
				var _this5 = this;

				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				if (this.isRunning()) {
					return Promise.reject('Navigator is already running animation.');
				}

				return this.pushPage(route, options).then(function () {
					var pos = _this5.pages.length - 2;
					_this5.pages.splice(pos, 1);
					_this5.routes.splice(pos, 1);
					_this5._navi.topPage.updateBackButton(_this5.pages.length > 1);
					_this5.forceUpdate();
				});
			}

			/**
			 * @method popPage
			 * @signature popPage(options = {})
			 * @return {Promise}
			 *   [en] Promise which resolves to the revealed page.[/en]
			 *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
			 * @description
			 *   [en] Pops a page out of the page stack[/en]
			 *   [ja][/ja]
			 */

		}, {
			key: 'popPage',
			value: function popPage() {
				var _this6 = this;

				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				if (this.isRunning()) {
					return Promise.reject('Navigator is already running animation.');
				}

				this.routesBeforePop = this.routes.slice();
				this.routesAfterPop = this.routesBeforePop.slice(0, this.routesBeforePop.length - 1);

				var update = function update() {
					return new Promise(function (resolve) {
						_this6.pages.pop();
						_this6.routes.pop();

						_this6.forceUpdate(resolve);
					});
				};

				return this._navi._popPage(options, update);
			}
		}, {
			key: '_onDeviceBackButton',
			value: function _onDeviceBackButton(event) {
				if (this.pages.length > 1) {
					this.popPage();
				} else {
					event.callParentHandler();
				}
			}
		}, {
			key: '_prePop',
			value: function _prePop(event) {
				if (event.target !== this._navi) {
					return;
				}

				event.routes = {
					poppingRoute: this.routesBeforePop[this.routesBeforePop.length - 1],
					routes: this.routesBeforePop
				};

				this.props.onPrePop(event);
			}
		}, {
			key: '_postPop',
			value: function _postPop(event) {
				if (event.target !== this._navi) {
					return;
				}

				event.routes = {
					poppedRoute: this.routesBeforePop[this.routesBeforePop.length - 1],
					routes: this.routesAfterPop
				};

				this.props.onPostPop(event);
			}
		}, {
			key: '_prePush',
			value: function _prePush(event) {
				if (event.target !== this._navi) {
					return;
				}

				event.routes = {
					pushingRoute: this.routes[this.routes.length - 1],
					routes: this.routes.slice(0, this.routes.length - 1)
				};

				this.props.onPrePush(event);
			}
		}, {
			key: '_postPush',
			value: function _postPush(event) {
				if (event.target !== this._navi) {
					return;
				}

				event.routes = {
					pushedRoute: this.routes[this.routes.length - 1],
					routes: this.routes
				};

				this.props.onPostPush(event);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this7 = this;

				var node = this._navi;
				node.popPage = this.popPage.bind(this);

				node.addEventListener('prepush', this._prePush);
				node.addEventListener('postpush', this._postPush);
				node.addEventListener('prepop', this._prePop);
				node.addEventListener('postpop', this._postPop);

				node.swipeMax = this.props.swipePop;
				node.onDeviceBackButton = this.props.onDeviceBackButton || this._onDeviceBackButton.bind(this);

				if (this.props.initialRoute && this.props.initialRouteStack) {
					throw new Error('In Navigator either initalRoute or initalRoutes can be set');
				}

				if (this.props.initialRoute) {
					this.routes = [this.props.initialRoute];
				} else if (this.props.initialRouteStack) {
					this.routes = this.props.initialRouteStack;
				} else {
					this.routes = [];
				}

				this.pages = this.routes.map(function (route) {
					return _this7.props.renderPage(route, _this7);
				});
				this.forceUpdate();
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {
				if (newProps.onDeviceBackButton !== undefined) {
					this._navi.onDeviceBackButton = newProps.onDeviceBackButton;
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var node = this._navi;
				node.removeEventListener('prepush', this.props.onPrePush);
				node.removeEventListener('postpush', this.props.onPostPush);
				node.removeEventListener('prepop', this.props.onPrePop);
				node.removeEventListener('postpop', this.props.onPostPop);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this8 = this;

				var attrs = Util.getAttrs(this);
				var pages = this.routes ? this.routes.map(function (route) {
					return _this8.props.renderPage(route, _this8);
				}) : null;

				return React.createElement(
					'ons-navigator',
					_extends({}, attrs, {
						ref: function ref(navi) {
							_this8._navi = navi;
						}
					}),
					pages
				);
			}
		}]);
		return Navigator;
	}(BasicComponent);

	Navigator.propTypes = {
		/**
		 * @name renderPage
		 * @type function
		 * @required true
		 * @defaultValue null
		 * @description
		 *  [en] This function takes the current route object as a parameter and returns a React component.[/en]
		 *  [ja][/ja]
		 */
		renderPage: PropTypes.func.isRequired,
		/**
		 * @name initialRouteStack
		 * @type array
		 * @required false
		 * @defaultValue null
		 * @description
		 *  [en] This array contains the initial routes from the Navigator,
		 *  which will be used to render the initial pages in the `renderPage` method.
		 *  [/en]
		 *  [ja][/ja]
		 */
		initialRouteStack: PropTypes.array,

		/**
		 * @name initialRoute
		 * @type object
		 * @required false
		 * @defaultValue null
		 * @description
		 *  [en] This array contains the initial route of the navigator,
		 *  which will be used to render the initial pages in the
		 *  renderPage method.
		 *  [/en]
		 *  [ja][/ja]
		 */
		initialRoute: PropTypes.object,

		/**
		 * @name onPrePush
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just before a page is pushed. It gets an event object with route information.[/en]
		 *  [ja][/ja]
		 */
		onPrePush: PropTypes.func,

		/**
		 * @name onPostPush
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just after a page is pushed. It gets an event object with route information.[/en]
		 *  [ja][/ja]
		 */
		onPostPush: PropTypes.func,

		/**
		 * @name onPrePop
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just before a page is popped. It gets an event object with route information.[/en]
		 */
		onPrePop: PropTypes.func,

		/**
		 * @name onPostPop
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just after a page is popped. It gets an event object with route information.[/en]
		 *  [ja][/ja]
		 */
		onPostPop: PropTypes.func,

		/**
		 * @name animation
		 * @type {String}
		 * @description
		 *   [en]
		 *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
		 *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
		 *   [/en]
		 *   [ja][/ja]
		 */
		animation: PropTypes.string,

		/**
		 * @name animationOptions
		 * @type object
		 * @description
		 *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
		 *  [ja][/ja]
		 */
		animationOptions: PropTypes.object,

		/**
		 * @name swipeable
		 * @type bool|string
		 * @required false
		 * @description
		 *  [en]Enables swipe-to-pop functionality for iOS.[/en]
		 *  [ja][/ja]
		 */
		swipeable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

		/**
		 * @name swipePop
		 * @type function
		 * @required false
		 * @description
		 *  [en]Optional function called on swipe-to-pop. If provided, must perform a popPage with the given options object.[/en]
		 *  [ja][/ja]
		 */
		swipePop: PropTypes.func,
		/**
		 * @name onDeviceBackButton
		 * @type function
		 * @required false
		 * @description
		 *  [en]Custom handler for device back button.[/en]
		 *  [ja][/ja]
		 */
		onDeviceBackButton: PropTypes.func
	};

	var NOOP = function NOOP() {
		return null;
	};

	Navigator.defaultProps = {
		onPostPush: NOOP,
		onPrePush: NOOP,
		onPrePop: NOOP,
		onPostPop: NOOP
	};

	/**
	 * @original ons-modal
	 * @category dialog
	 * @tutorial react/Reference/modal
	 * @description
	 * [en]
	 *   A modal component covers the entire screen. Underlying components are not
	 *   subject to any events while the modal component is shown.
	 *
	 *   This component can be used to block user input while some operation is
	 *   running or to show some information to the user.
	 * [/en]
	 * [ja]
	 *   画面全体をマスクするモーダル用コンポーネントです。下側にあるコンポーネントは、
	 *   モーダルが表示されている間はイベント通知が行われません
	 * [/ja]
	 * @example
	  <Page>
		<div> Page content </div>

		<Modal isOpen={this.state.isLoading}>
		  Loading ...
		</Modal>
	  </Page>
	 */

	var Modal = function (_BaseDialog) {
		inherits(Modal, _BaseDialog);

		function Modal() {
			classCallCheck(this, Modal);
			return possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
		}

		createClass(Modal, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-modal';
			}
		}]);
		return Modal;
	}(BaseDialog);

	Modal.propTypes = {
		/**
		 * @name animation
		 * @type {String}
		 * @description
		 *   [en]
		 *     Animation name. Available animations are `"fade"`, `"lift"` and `"none"`.
		 *   [/en]
		 */
		animation: PropTypes.oneOf(['none', 'fade', 'lift']),

		/**
		 * @name animationOptions
		 * @type object
		 * @description
		 *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
		 */
		animationOptions: PropTypes.object,

		/**
		 * @name onPreShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just before the modal is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPreShow: PropTypes.func,

		/**
		 * @name onPostShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just after the modal is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPostShow: PropTypes.func,

		/**
		 * @name onPreHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just before the modal is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPreHide: PropTypes.func,

		/**
		 * @name onPostHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just after the modal is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPostHide: PropTypes.func,

		/**
		 * @name isOpen
		 * @type boolean
		 * @description
		 *  [en]When `true` the modal will show itself.[/en]
		 */
		isOpen: PropTypes.bool,

		/**
		 * @name onDeviceBackButton
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Custom handler for device back button.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onDeviceBackButton: PropTypes.func
	};

	Modal.defaultProps = {
		isOpen: false,
		animation: 'none'
	};

	/**
	 * @original ons-page
	 * @category page
	 * @tutorial react/Reference/page
	 * @description
	 * [en]
	 *   This component is handling the entire page. The content can be scrolled.
	 *
	 *   To add fixed content that doesn't scroll with the page the `renderFixed` prop is used.
	 *
	 *   A page toolbar can be added with the `renderToolbar` prop.
	 * [/en]
	 * [ja][/ja]
	 * @example
	  <Page
		renderFixed={() => <Fab></Fab>}
		renderToolbar={() => <Toolbar>...</Toolbar>}
		contentStyle={{padding: 40}}>
		<div> Page content </div>
	  </Page>
	 */

	var Page = function (_BasicComponent) {
		inherits(Page, _BasicComponent);

		function Page() {
			var _ref;

			classCallCheck(this, Page);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = Page.__proto__ || Object.getPrototypeOf(Page)).call.apply(_ref, [this].concat(args)));

			var callback = function callback(name, event) {
				if (_this.props[name]) {
					return _this.props[name](event);
				}
			};
			_this.onInit = callback.bind(_this, 'onInit');
			_this.onShow = callback.bind(_this, 'onShow');
			_this.onHide = callback.bind(_this, 'onHide');
			return _this;
		}

		createClass(Page, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				get(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), 'componentDidMount', this).call(this);
				var node = ReactDOM__default.findDOMNode(this);
				node.addEventListener('init', this.onInit);
				node.addEventListener('show', this.onShow);
				node.addEventListener('hide', this.onHide);

				if (this.props.onDeviceBackButton instanceof Function) {
					node.onDeviceBackButton = this.props.onDeviceBackButton;
				}
				if (this.props.onInfiniteScroll instanceof Function) {
					node.onInfiniteScroll = this.props.onInfiniteScroll;
				}
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {
				if (newProps.onDeviceBackButton !== undefined) {
					ReactDOM__default.findDOMNode(this).onDeviceBackButton = newProps.onDeviceBackButton;
				}
				if (newProps.onInfiniteScroll !== undefined) {
					ReactDOM__default.findDOMNode(this).onInfiniteScroll = newProps.onInfiniteScroll;
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var node = ReactDOM__default.findDOMNode(this);
				node.removeEventListener('init', this.onInit);
				node.removeEventListener('show', this.onShow);
				node.removeEventListener('hide', this.onHide);
			}
		}, {
			key: 'render',
			value: function render() {
				var toolbar = this.props.renderToolbar(this);
				var bottomToolbar = this.props.renderBottomToolbar(this);
				var modal = this.props.renderModal(this);
				var fixed = this.props.renderFixed(this);

				var _props = this.props,
					contentStyle = _props.contentStyle,
					other = objectWithoutProperties(_props, ['contentStyle']);

				var attrs = Util.getAttrs(this, other);

				return React.createElement(
					'ons-page',
					attrs,
					toolbar,
					React.createElement(
						'div',
						{ className: 'page__background' },
						' '
					),
					React.createElement(
						'div',
						{ className: 'page__content', style: contentStyle },
						this.props.children
					),
					React.createElement(
						'div',
						{ className: 'page__extra', style: { zIndex: 10001 } },
						modal
					),
					fixed,
					bottomToolbar
				);
			}
		}]);
		return Page;
	}(BasicComponent);

	Page.propTypes = {

		/**
		 * @name contentStyle
		 * @type Object
		 * @description
		 *  [en]
		 *  Specify the style of the page content. Optional.
		 *  [/en]
		 */
		contentStyle: PropTypes.object,

		/**
		 * @name modifier
		 * @type string
		 * @description
		 *  [en]
		 *  Specify modifier name to specify custom styles. Optional.
		 *  [/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name renderModal
		 * @type function
		 * @required false
		 * @defaultValue null
		 * @description
		 *  [en] This function renders a modal that masks current screen.[/en]
		 */
		renderModal: PropTypes.func,

		/**
		 * @name renderToolbar
		 * @type function
		 * @required false
		 * @defaultValue null
		 * @description
		 *  [en] This function renders the toolbar of the page.[/en]
		 *  [ja][/ja]
		 */
		renderToolbar: PropTypes.func,

		/**
		 * @name renderBottomToolbar
		 * @type function
		 * @defaultValue null
		 * @description
		 *  [en] This function renders the bottom toolbar of the page.[/en]
		 *  [ja][/ja]
		 */
		renderBottomToolbar: PropTypes.func,

		/**
		 * @name renderFixed
		 * @type function
		 * @defaultValue null
		 * @description
		 *  [en] This function renders fixed content of the page. Can be used to render `Fab` or `SpeedDial` components as well as other components that don't scroll with the page.[/en]
		 *  [ja][/ja]
		 */
		renderFixed: PropTypes.func,

		/**
		 * @name onInit
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  	Fired right after the page is attached.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onInit: PropTypes.func,

		/**
		 * @name onShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called Fired right after the page is shown.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onShow: PropTypes.func,

		/**
		 * @name onHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called after the page is hidden.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onHide: PropTypes.func,

		/**
		 * @name onInfiniteScroll
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called when scrolling to the bottom of the page. It gets a 'done' callback (first argument) that must be called when it's finished.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onInfiniteScroll: PropTypes.func,

		/**
		 * @name onDeviceBackButton
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Custom handler for device back button.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onDeviceBackButton: PropTypes.func
	};

	var NOOP$1 = function NOOP() {
		return null;
	};

	Page.defaultProps = {
		renderToolbar: NOOP$1,
		renderBottomToolbar: NOOP$1,
		renderModal: NOOP$1,
		renderFixed: NOOP$1
	};

	/**
	 * @original ons-popover
	 * @category dialog
	 * @tutorial react/Reference/popover
	 * @description
	 *   [en]
	 *     A component that displays a popover next to an element. The popover can be used to display extra information about a component or a tooltip.
	 *    Another common way to use the popover is to display a menu when a button on the screen is tapped.
	 *   [/en]
	 * [ja][/ja]
	 * @example
	 * <Page>
	 *  <Button
	 *    ref={(btn) => { this.btn = btn; }}
	 *    onClick={() =>
	 *      this.setState({target: this.btn, isOpen: true})
	 *    }
	 *  />
		<Popover
		  isOpen={this.state.isOpen}
		  onCancel={() => this.setState({isOpen: false})}
		  getTarget={() => this.state.target}
		>
		  <div style={{textAlign: 'center', opacity: 0.5}}>
			<p>This is a popover!</p>
			  <p><small>Click the background to remove the popover.</small></p>
			</div>
			</Popover>
	 * </Page>
	 */

	var Popover = function (_BaseDialog) {
		inherits(Popover, _BaseDialog);

		function Popover() {
			classCallCheck(this, Popover);
			return possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
		}

		createClass(Popover, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-popover';
			}
		}, {
			key: 'show',
			value: function show() {
				var target = this.props.getTarget();
				target = ReactDOM__default.findDOMNode(target);
				return this.node.firstChild.show(target);
			}
		}]);
		return Popover;
	}(BaseDialog);

	Popover.propTypes = {
		/**
		 * @name getTarget
		 * @type function
		 * @required true
		 * @description
		 *  [en]
		 *  This function should return react component or a domnode that the popover is showing on.
		 *  [/en]
		 *  [ja][/ja]
		 */
		getTarget: PropTypes.func.isRequired,
		/**
		 * @name onCancel
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onCancel: PropTypes.func,

		/**
		 * @name isOpen
		 * @type bool
		 * @required true
		 * @description
		 *  [en]
		 *  Indicates whether the dialog is open and shown.
		 *  [/en]
		 *  [ja][/ja]
		 */
		isOpen: PropTypes.bool.isRequired,

		/**
		 * @name isCancelable
		 * @type bool
		 * @required false
		 * @description
		 *  [en]
		 *  Specifies whether the dialog is cancelable or not.
		 *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
		 *  [/en]
		 *  [ja][/ja]
		 */
		isCancelable: PropTypes.bool,

		/**
		 * @name isDisabled
		 * @type bool
		 * @required false
		 * @description
		 *  [en]
		 *  Specifies whether the dialog is disabled.
		 *  [/en]
		 *  [ja][/ja]
		 */
		isDisabled: PropTypes.bool,

		/**
		 * @name animation
		 * @type string
		 * @required false
		 * @description
		 *  [en]
		 *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
		 *  [/en]
		 *  [ja][/ja]
		 */
		animation: PropTypes.string,

		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the dialog.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name maskColor
		 * @type string
		 * @required false
		 * @description
		 *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
		 *  [ja][/ja]
		 */
		maskColor: PropTypes.string,

		/**
		 * @name animationOptions
		 * @type object
		 * @required false
		 * @description
		 *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
		 *  [ja][/ja]
		 */
		animationOptions: PropTypes.object,

		/**
		 * @name onPreShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just before the alert dialog is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPreShow: PropTypes.func,

		/**
		 * @name onPostShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just after the alert dialog is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPostShow: PropTypes.func,

		/**
		 * @name onPreHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just before the alert dialog is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPreHide: PropTypes.func,

		/**
		 * @name onPostHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just after the alert dialog is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPostHide: PropTypes.func,

		/**
		 * @name onDeviceBackButton
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Custom handler for device back button.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onDeviceBackButton: PropTypes.func
	};

	/**
	 * @original ons-progress-bar
	 * @category visual
	 * @tutorial react/Reference/progress
	 * @description
	 * [en] The component is used to display a linear progress bar. It can either display a progress bar that shows the user how much of a task has been completed. In the case where the percentage is not known it can be used to display an animated progress bar so the user can see that an operation is in progress.  [/en]
	 * [ja][/ja]
	 * @example
	 *<ProgressBar value={55} secondaryValue={87} />
	 *<ProgressBar indeterminate />
	 */

	var ProgressBar = function (_SimpleWrapper) {
		inherits(ProgressBar, _SimpleWrapper);

		function ProgressBar() {
			classCallCheck(this, ProgressBar);
			return possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
		}

		createClass(ProgressBar, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-progress-bar';
			}
		}]);
		return ProgressBar;
	}(SimpleWrapper);

	ProgressBar.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the progress indicator.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name value
		 * @type number
		 * @description
		 *  [en]
		 *  Current progress. Should be a value between 0 and 100.
		 *  [/en]
		 *  [ja][/ja]
		 */
		value: PropTypes.number,

		/**
		 * @name secondaryValue
		 * @type bool
		 * @description
		 *  [en]
		 *  Current secondary progress. Should be a value between 0 and 100.
		 *  [/en]
		 *  [ja][/ja]
		 */
		secondaryValue: PropTypes.number,

		/**
		 * @name indeterminate
		 * @type bool
		 * @description
		 *  [en] If this property is set, an infinite looping animation will be shown. [/en]
		 *  [ja][/ja]
		 */
		indeterminate: PropTypes.bool
	};

	/**
	 * @original ons-progress-circular
	 * @category visual
	 * @tutorial react/Reference/progress-circular
	 * @description
	 * [en] This component displays a circular progress indicator. It can either be used to show how much of a task has been completed or to show a looping animation to indicate that an operation is currently running.
	 * [/en]
	 * [ja][/ja]
	 * @example
	 *<ProgressCircular value={55} secondaryValue={87} />
	 *<ProgressCircular indeterminate />
	 */

	var ProgressCircular = function (_SimpleWrapper) {
		inherits(ProgressCircular, _SimpleWrapper);

		function ProgressCircular() {
			classCallCheck(this, ProgressCircular);
			return possibleConstructorReturn(this, (ProgressCircular.__proto__ || Object.getPrototypeOf(ProgressCircular)).apply(this, arguments));
		}

		createClass(ProgressCircular, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-progress-circular';
			}
		}]);
		return ProgressCircular;
	}(SimpleWrapper);

	ProgressCircular.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the progress indicator.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name value
		 * @type number
		 * @description
		 *  [en]
		 *  Current progress. Should be a value between 0 and 100.
		 *  [/en]
		 *  [ja][/ja]
		 */
		value: PropTypes.number,

		/**
		 * @name secondaryValue
		 * @type bool
		 * @description
		 *  [en]
		 *  Current secondary progress. Should be a value between 0 and 100.
		 *  [/en]
		 *  [ja][/ja]
		 */
		secondaryValue: PropTypes.number,

		/**
		 * @name indeterminate
		 * @type bool
		 * @description
		 *  [en] If this property is set, an infinite looping animation will be shown. [/en]
		 *  [ja][/ja]
		 */
		indeterminate: PropTypes.bool
	};

	/**
	 * @original ons-pull-hook
	 * @category control
	 * @tutorial react/Reference/pull-hook
	 * @description
	 * [en]  Component that adds **Pull to refresh** functionality to an `<ons-page>` element.
	 *     It can be used to perform a task when the user pulls down at the top of the page. A common usage is to refresh the data displayed in a page.
	 [/en]
	 * [ja][/ja]
	 * @example

		return (
		  <PullHook onChange={this.onChange} onLoad={this.onLoad}>
		  {
		   (this.state.pullHookState === 'initial') ?
			<span >
			  <Icon size={35} spin={false} icon='ion-arrow-down-a' />
			  Pull down to refresh
			</span> :
			(this.state.pullHookState === 'preaction') ?
			 <span>
			   <Icon size={35} spin={false} icon='ion-arrow-up-a' />
			   Release to refresh
			</span>
			:
			<span><Icon size={35} spin={true} icon='ion-load-d'></Icon> Loading data...</span>
		}
		  </PullHook>
		);
	 */

	var PullHook = function (_BasicComponent) {
		inherits(PullHook, _BasicComponent);

		function PullHook() {
			var _ref;

			classCallCheck(this, PullHook);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = PullHook.__proto__ || Object.getPrototypeOf(PullHook)).call.apply(_ref, [this].concat(args)));

			_this.onChange = function (event) {
				if (_this.props.onChange) {
					return _this.props.onChange(event);
				}
			};
			return _this;
		}

		createClass(PullHook, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				get(PullHook.prototype.__proto__ || Object.getPrototypeOf(PullHook.prototype), 'componentDidMount', this).call(this);
				var node = ReactDOM__default.findDOMNode(this);
				node.addEventListener('changestate', this.onChange);
				this._pullHook.onAction = this.props.onLoad || null;
				this._pullHook.onPull = this.props.onPull || null;
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var node = ReactDOM__default.findDOMNode(this);
				node.removeEventListener('changestate', this.onChange);
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps) {
				if (this.props.onLoad !== prevProps.onLoad) {
					this._pullHook.onAction = this.props.onLoad;
				}
				if (this.props.onPull !== prevProps.onPull) {
					this._pullHook.onPull = this.props.onPull;
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var attrs = Util.getAttrs(this);
				return React.createElement('ons-pull-hook', _extends({}, attrs, {
					ref: function ref(pullHook) {
						_this2._pullHook = pullHook;
					}
				}));
			}
		}]);
		return PullHook;
	}(BasicComponent);

	PullHook.propTypes = {
		/**
		 * @name onChange
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called when the pull hook inner state is changed. The state can be either "initial", "preaction" or "action"[/en]
		 *  [ja][/ja]
		 */
		onChange: PropTypes.func,

		/**
		 * @name onLoad
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called when the pull hook is in the `action` state[/en]
		 *  [ja][/ja]
		 */
		onLoad: PropTypes.func,

		/**
		 * @name onPull
		 * @type function
		 * @required false
		 * @description
		 *  [en]Hook called whenever the user pulls the element. It gets the pulled distance ratio (scroll / height) and an animationOptions object as arguments.[/en]
		 *  [ja][/ja]
		 */
		onPull: PropTypes.func,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en] When set to true, the pull hook will be disabled.[/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool,

		/**
		 * @name height
		 * @type number
		 * @description
		 *  [en] The height of the pull hook in pixels. The default value is 64.[/en]
		 *  [ja][/ja]
		 */
		height: PropTypes.number,

		/**
		 * @name thresholdHeight
		 * @type number
		 * @description
		 *  [en] The threshold height of the pull hook in pixels. The default value is 96.[/en]
		 *  [ja][/ja]
		 */
		thresholdHeight: PropTypes.number,

		/**
		 * @name fixedContent
		 * @type number
		 * @description
		 *  [en] If set to true, the content of the page will not move when pulling.[/en]
		 *  [ja][/ja]
		 */
		fixedContent: PropTypes.bool
	};

	/**
	 * @original ons-radio
	 * @category form
	 * @tutorial react/Reference/radio
	 * @description
	 * [en]
	 *  A radio button element. The component will automatically render as a Material Design radio button on Android devices.
	 *
	 *  Most attributes that can be used for a normal `<input type="radio">` element can also be used on the `<Radio>` component.
	 * [/en]
	 * [ja][/ja]
	 * @example
	 * <Radio
	 *   onChange={event => { this.setState({checked: event.target.checked})} }
	 *   modifier='material' />
	 */

	var Radio = function (_BaseInput) {
		inherits(Radio, _BaseInput);

		function Radio() {
			classCallCheck(this, Radio);
			return possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
		}

		createClass(Radio, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-radio';
			}
		}, {
			key: 'EVENT_TYPES',
			get: function get$$1() {
				return ['change'];
			}
		}]);
		return Radio;
	}(BaseInput);

	Radio.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the radio button.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en]
		 *  Specifies whether the radio button is disabled.
		 *  [/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool,

		/**
		 * @name onChange
		 * @type function
		 * @description
		 *  [en] Called when the radio button state changes.[/en]
		 *  [ja][/ja]
		 */
		onChange: PropTypes.func,

		/**
		 * @name value
		 * @type string
		 * @description
		 *  [en] Value of the radio button.[/en]
		 *  [ja][/ja]
		 */
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

		/**
		 * @name checked
		 * @type boolean
		 * @description
		 *  [en]Controls the state of the radio button (controlled).[/en]
		 *  [ja][/ja]
		 */
		checked: PropTypes.bool,

		/**
		 * @name defaultChecked
		 * @type boolean
		 * @description
		 *  [en]Defined the state of the radio button at first render for uncontrolled inputs.[/en]
		 *  [ja][/ja]
		 */
		defaultChecked: PropTypes.bool,

		/**
		 * @name inputId
		 * @type string
		 * @description
		 *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements.[/en]
		 *  [ja][/ja]
		 */
		inputId: PropTypes.string
	};

	/**
	 * @original ons-range
	 * @category form
	 * @tutorial react/Reference/range
	 * @description
	 * [en]
	 *   Range input component.
	 * [/en]
	 * [ja][/ja]
	 * @example
	 * <Range modifier="material"
	 *   value={this.state.value}
	 *   onChange={(event) => this.setState({value: parseInt(event.target.value)})}
	 *   />
	 */

	var Range = function (_BaseInput) {
		inherits(Range, _BaseInput);

		function Range() {
			classCallCheck(this, Range);
			return possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
		}

		createClass(Range, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-range';
			}
		}]);
		return Range;
	}(BaseInput);

	Range.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the progress indicator.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name onChange
		 * @type function
		 * @description
		 *  [en] Called when the value of the input changes.[/en]
		 *  [ja][/ja]
		 */
		onChange: PropTypes.func,

		/**
		 * @name value
		 * @type number
		 * @description
		 *  [en]
		 *  Current value of the element.
		 *  [/en]
		 *  [ja][/ja]
		 */
		value: PropTypes.number,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en] If true, the element is disabled. [/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool
	};

	/**
	 * @original ons-ripple
	 * @category visual
	 * @tutorial react/Reference/ripple
	 * @description
	 * [en]
	 *   Adds a Material Design "ripple" effect to an element.
	 * [/en]
	 * [ja][/ja]
	 * @example
	   <div className='myList'>
		 <Ripple color='red' />
	   </div>
	 */

	var Ripple = function (_SimpleWrapper) {
		inherits(Ripple, _SimpleWrapper);

		function Ripple() {
			classCallCheck(this, Ripple);
			return possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).apply(this, arguments));
		}

		createClass(Ripple, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-ripple';
			}
		}]);
		return Ripple;
	}(SimpleWrapper);

	Ripple.propTypes = {
		/**
		 * @name color
		 * @type string
		 * @required false
		 * @description
		 *  [en]Color of the ripple effect.[/en]
		 *  [ja][/ja]
		 */
		color: PropTypes.string,

		/**
		 * @name background
		 * @type string
		 * @required false
		 * @description
		 *  [en]Color of the background.[/en]
		 *  [ja][/ja]
		 */
		background: PropTypes.string,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en]
		 *  Specifies whether the button is disabled.
		 *  [/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool
	};

	/**
	 * @original ons-navigator
	 * @category navigation
	 * @tutorial react/Reference/navigator
	 * @description
	 * [en] This component is a variant of the Navigator with a declarative API. In order to manage to display the pages, the  navigator needs to define the `renderPage` method, that takes an route and a navigator and  converts it to an page.[/en]
	 * [ja][/ja]
	 */

	var RouterNavigator = function (_BasicComponent) {
		inherits(RouterNavigator, _BasicComponent);

		function RouterNavigator() {
			var _ref;

			classCallCheck(this, RouterNavigator);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = RouterNavigator.__proto__ || Object.getPrototypeOf(RouterNavigator)).call.apply(_ref, [this].concat(args)));

			_this.cancelUpdate = false;
			_this.page = null;

			var callback = function callback(name, event) {
				if (_this.props[name]) {
					return _this.props[name](event);
				}
			};
			_this.onPrePush = callback.bind(_this, 'onPrePush');
			_this.onPostPush = callback.bind(_this, 'onPostPush');
			_this.onPrePop = callback.bind(_this, 'onPrePop');
			_this.onPostPop = callback.bind(_this, 'onPostPop');
			return _this;
		}

		createClass(RouterNavigator, [{
			key: 'update',
			value: function update(cb) {
				if (!this.cancelUpdate) {
					this.setState({}, cb);
				}
			}

			/**
			 * @method resetPageStack
			 * @signature resetPageStack(route, options = {})
			 * @param {Array} [routes]
			 *   [en] The routes that the navigator should be reset to.[/en]
			 *   [ja][/ja]
			 * @return {Promise}
			 *   [en]Promise which resolves to the revealed page.[/en]
			 *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
			 * @description
			 *   [en] Resets the navigator to the current page stack[/en]
			 *   [ja][/ja]
			 */

		}, {
			key: 'resetPageStack',
			value: function resetPageStack(routes) {
				var _this2 = this;

				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				if (this.isRunning()) {
					return;
				}

				var update = function update() {
					return new Promise(function (resolve) {
						_this2.pages.push(_this2.props.renderPage(routes[routes.length - 1]));
						_this2.update(resolve);
					});
				};

				return this._navi._pushPage(options, update).then(function () {
					_this2.pages = routes.map(function (route) {
						return _this2.props.renderPage(route);
					});
					_this2.update();
				});
			}

			/**
			 * @method pushPage
			 * @signature pushPage(route, options = {})
			 * @param {Array} [routes]
			 *   [en] The routes that the navigator should push to.[/en]
			 *   [ja][/ja]
			 * @return {Promise}
			 *   [en] Promise which resolves to the revealed page.[/en]
			 *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
			 * @description
			 *   [en] Pushes a page to the page stack[/en]
			 *   [ja][/ja]
			 */

		}, {
			key: 'pushPage',
			value: function pushPage(route) {
				var _this3 = this;

				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				if (this.isRunning()) {
					return;
				}

				var update = function update() {
					return new Promise(function (resolve) {
						_this3.page = _this3.props.renderPage(route);
						_this3.update(resolve);
					});
				};

				return this._navi._pushPage(options, update).then(function () {
					_this3.page = null;
					_this3.update();
				});
			}
		}, {
			key: 'isRunning',
			value: function isRunning() {
				return this._navi._isRunning;
			}

			/*
			 * @method replacePage
			 * @signature replacePage(page, [options])
			 * @return {Promise}
			 *   [en]Promise which resolves to the new page.[/en]
			 *   [ja]新しいページを解決するPromiseを返します。[/ja]
			 * @description
			 *   [en]Replaces the current top page with the specified one. Extends `pushPage()` parameters.[/en]
			 *   [ja]現在表示中のページをを指定したページに置き換えます。[/ja]
			 */

		}, {
			key: 'replacePage',
			value: function replacePage(route) {
				var _this4 = this;

				var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				if (this.isRunning()) {
					return;
				}

				var update = function update() {
					return new Promise(function (resolve) {
						_this4.pages.push(_this4.props.renderPage(route));
						_this4.update(resolve);
					});
				};

				return this._navi._pushPage(options, update).then(function () {
					_this4.pages.splice(_this4.pages.length - 2, 1);
					_this4.update();
				});
			}

			/**
			 * @method popPage
			 * @signature popPage(route, options = {})
			 * @return {Promise}
			 *   [en] Promise which resolves to the revealed page.[/en]
			 *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
			 * @description
			 *   [en] Pops a page out of the page stack[/en]
			 *   [ja][/ja]
			 */

		}, {
			key: 'popPage',
			value: function popPage() {
				var _this5 = this;

				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				if (this.isRunning()) {
					return;
				}

				var update = function update() {
					return new Promise(function (resolve) {
						_this5.pages.pop();
						_this5.update(resolve);
					});
				};

				return this._navi._popPage(options, update);
			}
		}, {
			key: '_onDeviceBackButton',
			value: function _onDeviceBackButton(event) {
				if (this.props.routeConfig.routeStack.length > 1) {
					this.popPage();
				} else {
					event.callParentHandler();
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this6 = this;

				var node = this._navi;

				this.cancelUpdate = false;

				node.addEventListener('prepush', this.onPrePush);
				node.addEventListener('postpush', this.onPostPush);
				node.addEventListener('prepop', this.onPrePop);
				node.addEventListener('postpop', this.onPostPop);

				if (!this.props.routeConfig) {
					throw new Error('In RouterNavigator the property routeConfig needs to be set');
				}

				this.routeConfig = this.props.routeConfig;

				this.pages = this.routeConfig.routeStack.map(function (route) {
					return _this6.props.renderPage(route, _this6);
				});

				node.swipeMax = this.props.swipePop;
				node.onDeviceBackButton = this.props.onDeviceBackButton || this._onDeviceBackButton.bind(this);

				this.update();
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {
				var processStack = [].concat(toConsumableArray(newProps.routeConfig.processStack));

				if (newProps.onDeviceBackButton !== undefined) {
					this._navi.onDeviceBackButton = newProps.onDeviceBackButton;
				}

				/**
				 * Fix for Redux Timetravel.
				 */
				if (this.props.routeConfig.processStack.length < newProps.routeConfig.processStack.length && this.props.routeConfig.routeStack.length > newProps.routeConfig.routeStack.length) {
					return;
				}

				if (processStack.length > 0) {
					var _processStack$ = processStack[0],
						type = _processStack$.type,
						route = _processStack$.route,
						options = _processStack$.options;


					switch (type) {
						case 'push':
							this.pushPage(route, options);
							break;
						case 'pop':
							this.popPage(options);
							break;
						case 'reset':
							if (Array.isArray(route)) {
								this.resetPageStack(route, options);
							} else {
								this.resetPageStack([route], options);
							}
							break;
						case 'replace':
							this.replacePage(route, options);
							break;
						default:
							throw new Error('Unknown type ' + type + ' in processStack');
					}
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var node = this._navi;
				node.removeEventListener('prepush', this.onPrePush);
				node.removeEventListener('postpush', this.onPostPush);
				node.removeEventListener('prepop', this.onPrePop);
				node.removeEventListener('postpop', this.onPostPop);
				this.cancelUpdate = true;
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				/* When the component updates we now have the page we're pushing in our routeConfig, so we no longer need to render it specially */
				this.page = null;
			}
		}, {
			key: 'render',
			value: function render() {
				var _this7 = this;

				var attrs = Util.getAttrs(this);

				/* Gather pages to render and the animating page in one array so React reuses components. */
				var pagesToRender = this.props.routeConfig.routeStack.map(function (route) {
					return _this7.props.renderPage(route);
				});
				pagesToRender.push(this.page);

				return React.createElement(
					'ons-navigator',
					_extends({}, attrs, {
						ref: function ref(navi) {
							_this7._navi = navi;
						}
					}),
					pagesToRender
				);
			}
		}]);
		return RouterNavigator;
	}(BasicComponent);

	RouterNavigator.propTypes = {
		/**
		 * @name renderPage
		 * @type function
		 * @required true
		 * @defaultValue null
		 * @description
		 *  [en] This function takes the current route object as a parameter and returns a react componen.[/en]
		 *  [ja][/ja]
		 */
		renderPage: PropTypes.func.isRequired,
		/**
		 * @name routeConfig
		 * @type object
		 * @required true
		 * @defaultValue null
		 * @description
		 *  [en] This object must contain two properties:
		 *  `routeStack`: An array of route objects,
		 *  `processStack`: An array of process objects `{ type: push | pop | reset, route: userRoute }` that
		 *  describe the transition from the current state to the next state.
		 *  Make sure that the route stack is not emptied before the animations for the `processStack` have completed.
		 *  It is recommended to update the `routeStack` and empty the `processStack` in the 'onPostPop' callback.
		 *  [/en]
		 *  [ja][/ja]
		 */
		routeConfig: PropTypes.shape({
			routeStack: PropTypes.arrayOf(PropTypes.object),
			processStack: PropTypes.arrayOf(PropTypes.object)
		}),

		/**
		 * @name onPrePush
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just before a page is pushed.[/en]
		 */
		onPrePush: PropTypes.func,

		/**
		 * @name onPostPush
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just after a page is pushed.[/en]
		 */
		onPostPush: PropTypes.func,

		/**
		 * @name onPrePop
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just before a page is popped.[/en]
		 */
		onPrePop: PropTypes.func,

		/**
		 * @name onPostPop
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just after a page is popped.[/en]
		 */
		onPostPop: PropTypes.func,

		/**
		 * @property animation
		 * @type {String}
		 * @description
		 *   [en]
		 *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
		 *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
		 *   [/en]
		 */
		animation: PropTypes.string,

		/**
		 * @name animationOptions
		 * @type object
		 * @description
		 *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
		 *  [ja][/ja]
		 */
		animationOptions: PropTypes.object,

		/**
		 * @name swipeable
		 * @type bool|string
		 * @required false
		 * @description
		 *  [en]
		 *  Enables swipe-to-pop functionality for iOS.
		 *  [/en]
		 *  [ja][/ja]
		 */
		swipeable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

		/**
		 * @name swipePop
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Function called on swipe-to-pop. Must perform a popPage with the given options object.
		 *  [/en]
		 *  [ja][/ja]
		 */
		swipePop: PropTypes.func,

		/**
		 * @name onDeviceBackButton
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Custom handler for device back button.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onDeviceBackButton: PropTypes.func
	};

	/**
	 * @original ons-row
	 * @category grid
	 * @description
	 * [en]
	 * Represents a row in the grid system. Use with `Col` to layout components.
	 * [/en]
	 * [ja][/ja]
	 * <Row>
	 *   <Col width={50}>
	  *   <ons-icon icon="fa-twitter"></ons-icon>
	 *   </Col>
	 *   <Col>Text</Col>
	 * </Row>
	 */

	var Row = function (_SimpleWrapper) {
		inherits(Row, _SimpleWrapper);

		function Row() {
			classCallCheck(this, Row);
			return possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
		}

		createClass(Row, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-row';
			}
		}]);
		return Row;
	}(SimpleWrapper);

	Row.propTypes = {

		/**
		* @name verticalAlign
		* @type {String}
		* @description
		*   [en]Short hand attribute for aligning vertically. Valid values are top, bottom, and center.[/en]
		*   [ja][/ja]
		*/
		verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center'])

	};

	/**
	 * @original ons-search-input
	 * @category form
	 * @tutorial react/Reference/search-input
	 * @description
	 * [en]
	 *  A search input component. The component will automatically render as a Material Design search input on Android devices.
	 *
	 *  Most attributes that can be used for a normal `<input>` element can also be used on the `<SearchInput>` component.
	 * [/en]
	 * [ja][/ja]
	 * @example
	 * <SearchInput
	 *   value={this.state.text}
	 *   onChange={(event) => { this.setState({text: event.target.value})} }
	 *   modifier='material'
	 *   placeholder='Username' />
	 */

	var SearchInput = function (_BaseInput) {
		inherits(SearchInput, _BaseInput);

		function SearchInput() {
			classCallCheck(this, SearchInput);
			return possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).apply(this, arguments));
		}

		createClass(SearchInput, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-search-input';
			}
		}]);
		return SearchInput;
	}(BaseInput);

	SearchInput.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the input.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en]Specifies whether the input is disabled.[/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool,

		/**
		 * @name onChange
		 * @type function
		 * @description
		 *  [en]Called when the text of the input changes.[/en]
		 *  [ja][/ja]
		 */
		onChange: PropTypes.func,

		/**
		 * @name value
		 * @type string
		 * @description
		 *  [en]Content of the input.[/en]
		 *  [ja][/ja]
		 */
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

		/**
		 * @name inputId
		 * @type string
		 * @description
		 *  [en]  Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements [/en]
		 *  [ja][/ja]
		 */
		inputId: PropTypes.string
	};

	/**
	 * @original ons-segment
	 * @category control
	 * @tutorial react/Reference/segment
	 * @description
	 * [en]
	 *   Segment component.
	 * [/en]
	 * [ja][/ja]
	 * @example
	 * <Segment modifier="material">
	 *  <button>Label 1</button>
	 *  <button>Label 2</button>
	 *  <button>Label 3</button>
	 * </Segment>
	 */

	var Segment = function (_BasicComponent) {
		inherits(Segment, _BasicComponent);

		function Segment() {
			var _ref;

			classCallCheck(this, Segment);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = Segment.__proto__ || Object.getPrototypeOf(Segment)).call.apply(_ref, [this].concat(args)));

			_this.onPostChange = function (event) {
				if (_this.props.onPostChange) {
					return _this.props.onPostChange(event);
				}
			};
			return _this;
		}

		createClass(Segment, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-segment';
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				get(Segment.prototype.__proto__ || Object.getPrototypeOf(Segment.prototype), 'componentDidMount', this).call(this);
				var node = ReactDOM.findDOMNode(this);

				node.addEventListener('postchange', this.onPostChange);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var node = ReactDOM.findDOMNode(this);

				node.removeEventListener('postchange', this.onPostChange);
			}
		}, {
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate() {
				return false;
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(props) {
				var node = ReactDOM.findDOMNode(this);

				if (this.props.index !== props.index && props.index !== node.getActiveButtonIndex()) {
					node.setActiveButton(props.index, { reject: false });
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var attrs = Util.getAttrs(this, this.props, { index: 'active-index' });
				return React.createElement(this._getDomNodeName(), attrs, this.props.children);
			}
		}]);
		return Segment;
	}(BasicComponent);

	Segment.propTypes = {
		/**
		 * @name index
		 * @type number
		 * @required
		 * @description
		 *  [en] The index of the button to highlight.[/en]
		 *  [ja][/ja]
		 */
		index: PropTypes.number,

		/**
		 * @name tabbarId
		 * @type string
		 * @description
		 *  [en] ID of the `<Tabbar>` to "connect" to the segment. [/en]
		 *  [ja][/ja]
		 */
		tabbarId: PropTypes.string,

		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the segment.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name onChange
		 * @type function
		 * @description
		 *  [en] Called when the active button changes.[/en]
		 *  [ja][/ja]
		 */
		onPostChange: PropTypes.func
	};

	/**
	 * @original ons-select
	 * @category form
	 * @tutorial react/Reference/select
	 * @description
	 * [en]
	 *   Select input component.
	 * [/en]
	 * [ja][/ja]
	 * @example
	 * <Select modifier="material"
	 *   value={this.state.value}
	 *   onChange={(event) => this.setState({value: event.target.value})}
	 *   <option value="1">1</option>
	 *   <option value="2">2nd</option>
	 *   <option value="3">3rd option</option>
	 * </Select>
	 */

	var Select = function (_BaseInput) {
		inherits(Select, _BaseInput);

		function Select() {
			classCallCheck(this, Select);
			return possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
		}

		createClass(Select, [{
			key: 'render',
			value: function render() {
				var _props = this.props,
					value = _props.value,
					onChange = _props.onChange,
					props = objectWithoutProperties(_props, ['value', 'onChange']);

				var attrs = Util.getAttrs(this, props);

				return React.createElement(
					'ons-select',
					attrs,
					React.createElement(
						'select',
						null,
						this.props.children
					)
				);
			}
		}, {
			key: 'EVENT_TYPES',
			get: function get$$1() {
				return ['change'];
			}
		}]);
		return Select;
	}(BaseInput);

	Select.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @description
		 *  [en]The appearance of the select box.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en]Specifies whether the select is disabled.[/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool,

		/**
		 * @name onChange
		 * @type function
		 * @description
		 *  [en]Called when the value of the select changes.[/en]
		 *  [ja][/ja]
		 */
		onChange: PropTypes.func,

		/**
		 * @name value
		 * @type string
		 * @description
		 *  [en]Use this prop to set the selected option value.[/en]
		 *  [ja][/ja]
		 */
		value: PropTypes.string,

		/**
		 * @name multiple
		 * @type boolean
		 * @description
		 *  [en]If this attribute is defined, multiple options can be selected at once.[/en]
		 *  [ja][/ja]
		 */
		multiple: PropTypes.bool,

		/**
		 * @name autofocus
		 * @type boolean
		 * @description
		 *  [en]Element automatically gains focus on page load.[/en]
		 *  [ja][/ja]
		 */
		autofocus: PropTypes.bool,

		/**
		 * @name required
		 * @type boolean
		 * @description
		 *  [en]Make the select input required for submitting the form it is part of.[/en]
		 *  [ja][/ja]
		 */
		required: PropTypes.bool,

		/**
		 * @name form
		 * @type string
		 * @description
		 *  [en]Associate a select element to an existing form on the page, even if not nested.[/en]
		 *  [ja][/ja]
		 */
		form: PropTypes.string,

		/**
		 * @name size
		 * @type string
		 * @description
		 *  [en]How many options are displayed; if there are more than the size then a scroll appears to navigate them[/en]
		 *  [ja][/ja]
		 */
		size: PropTypes.string
	};

	/**
	 * @original ons-speed-dial
	 * @category control
	 * @tutorial react/Reference/speed-dial
	 * @description
	 * [en] Element that displays a Material Design Speed Dialog component. It is useful when there are more than one primary action that can be performed in a page.
	 *  The Speed dial looks like a `Fab` element but will expand a menu when tapped.
	 [/en]
	 * [ja][/ja]
	 * @example
	 * <SpeedDial disabled={false} direction='right' onClick={() => console.log('test1')} position='left bottom'>
		 <Fab>
		   <Icon icon='fa-twitter' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
		 </Fab>
		 <SpeedDialItem onClick={() => console.log('speed A')}> A </SpeedDialItem>
		 <SpeedDialItem onClick={() => console.log('speed B')}> B </SpeedDialItem>
		 <SpeedDialItem onClick={() => console.log('speed C')}> C </SpeedDialItem>
		 <SpeedDialItem onClick={() => console.log('speed D')}> D </SpeedDialItem>
	   </SpeedDial>
	 */

	var SpeedDial = function (_SimpleWrapper) {
		inherits(SpeedDial, _SimpleWrapper);

		function SpeedDial() {
			classCallCheck(this, SpeedDial);
			return possibleConstructorReturn(this, (SpeedDial.__proto__ || Object.getPrototypeOf(SpeedDial)).apply(this, arguments));
		}

		createClass(SpeedDial, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-speed-dial';
			}
		}]);
		return SpeedDial;
	}(SimpleWrapper);

	SpeedDial.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the speed dial.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name position
		 * @type string
		 * @description
		 *  [en]Specify the vertical and horizontal position of the component.
		 *     I.e. to display it in the top right corner specify "right top".
		 *     Choose from "right", "left", "top" and "bottom".
		[/en]
		 *  [ja][/ja]
		 */
		position: PropTypes.string,

		/**
		 * @name direction
		 * @type string
		 * @description
		 *  [en]Specify the direction the items are displayed. Possible values are "up", "down", "left" and "right".[/en]
		 *  [ja][/ja]
		 */
		direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),

		/**
		 * @name disabled
		 * @type string
		 * @description
		 *  [en]Specify if button should be disabled.[/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool
	};

	/**
	 * @original ons-speed-dial-item
	 * @category control
	 * @tutorial react/Reference/speed-dial
	 * @description
	 * [en] This component displays the child elements of the Material Design Speed dial component. [/en]
	 * [ja][/ja]
	 * @example
	 * <SpeedDial disabled={false} direction='right' onClick={() => console.log('test1')} position='left bottom'>
		 <Fab>
		   <Icon icon='fa-twitter' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
		 </Fab>
		 <SpeedDialItem onClick={() => console.log('speed A')}> A </SpeedDialItem>
		 <SpeedDialItem onClick={() => console.log('speed B')}> B </SpeedDialItem>
		 <SpeedDialItem onClick={() => console.log('speed C')}> C </SpeedDialItem>
		 <SpeedDialItem onClick={() => console.log('speed D')}> D </SpeedDialItem>
	   </SpeedDial>
	 */

	var SpeedDialItem = function (_SimpleWrapper) {
		inherits(SpeedDialItem, _SimpleWrapper);

		function SpeedDialItem() {
			var _ref;

			classCallCheck(this, SpeedDialItem);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = SpeedDialItem.__proto__ || Object.getPrototypeOf(SpeedDialItem)).call.apply(_ref, [this].concat(args)));

			_this.onClick = function (event) {
				if (_this.props.onClick) {
					return _this.props.onClick(event);
				}
			};
			return _this;
		}

		createClass(SpeedDialItem, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-speed-dial-item';
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				get(SpeedDialItem.prototype.__proto__ || Object.getPrototypeOf(SpeedDialItem.prototype), 'componentDidMount', this).call(this);
				var node = ReactDOM__default.findDOMNode(this);
				node.addEventListener('click', this.onClick);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var node = ReactDOM__default.findDOMNode(this);
				node.removeEventListener('click', this.onClick);
			}
		}]);
		return SpeedDialItem;
	}(SimpleWrapper);

	SpeedDialItem.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the button.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name onClick
		 * @type function
		 * @description
		 *  [en] This function will be called ones the button is clicked. [/en]
		 *  [ja][/ja]
		 */
		onClick: PropTypes.func
	};

	/**
	 * @original ons-splitter
	 * @category menu
	 * @tutorial react/Reference/splitter
	 * @description
	 * [en]  A component that enables responsive layout by implementing both a two-column layout and a sliding menu layout.
	 *
	 *    It can be configured to automatically expand into a column layout on large screens and collapse the menu on smaller screens. When the menu is collapsed the user can open it by swiping.
	 [/en]
	 * [ja][/ja]
	 * @example
	  <Splitter>
		<SplitterSide
		  side="left"
		  width={200}
		  isSwipeable={true}>
		  <Page> Page Left </Page>
		</SplitterSide>
		<SplitterContent>
		  <Page> Page Content </Page>
		</SplitterContent>
		<SplitterSide
		  side="right"
		  width={300}
		  collapse={!this.state.showRight}
		  isOpen={this.state.openRight}
		  onClose={this.handleRightClose.bind(this)}
		  onOpen={this.handleRightOpen.bind(this)}
		  isSwipeable={true}>
		  <Page> Page Right </Page>
		</SplitterSide>
	  </Splitter>
	 */

	var Splitter = function (_SimpleWrapper) {
		inherits(Splitter, _SimpleWrapper);

		function Splitter() {
			classCallCheck(this, Splitter);
			return possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).apply(this, arguments));
		}

		createClass(Splitter, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-splitter';
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				get(Splitter.prototype.__proto__ || Object.getPrototypeOf(Splitter.prototype), 'componentDidMount', this).call(this);
				var node = ReactDOM__default.findDOMNode(this);

				if (this.props.onDeviceBackButton instanceof Function) {
					node.onDeviceBackButton = this.props.onDeviceBackButton;
				}
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {
				if (newProps.onDeviceBackButton !== undefined) {
					ReactDOM__default.findDOMNode(this).onDeviceBackButton = newProps.onDeviceBackButton;
				}
			}
		}]);
		return Splitter;
	}(SimpleWrapper);

	Splitter.propTypes = {
		/**
		 * @name onDeviceBackButton
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Custom handler for device back button.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onDeviceBackButton: PropTypes.func
	};

	/**
	 * @original ons-splitter-content
	 * @category menu
	 * @tutorial react/Reference/splitter
	 * @description
	 * [en]  The SplitterContent  element is used as a child element of Splitter.
	 *    It contains the main content of the page while SplitterSide contains the list.
	 [/en]
	 * [ja][/ja]
	 * @example
	  <Splitter>
		<SplitterSide
		  side="left"
		  width={200}
		  isSwipeable={true}>
		  <Page> Page Left </Page>
		</SplitterSide>
		<SplitterContent>
		  <Page> Page Content </Page>
		</SplitterContent>
		<SplitterSide
		  side="right"
		  width={300}
		  collapse={!this.state.showRight}
		  isOpen={this.state.openRight}
		  onClose={this.handleRightClose.bind(this)}
		  onOpen={this.handleRightOpen.bind(this)}
		  isSwipeable={true}>
		  <Page> Page Right </Page>
		</SplitterSide>
	  </Splitter>
	 */

	var SplitterContent = function (_SimpleWrapper) {
		inherits(SplitterContent, _SimpleWrapper);

		function SplitterContent() {
			classCallCheck(this, SplitterContent);
			return possibleConstructorReturn(this, (SplitterContent.__proto__ || Object.getPrototypeOf(SplitterContent)).apply(this, arguments));
		}

		createClass(SplitterContent, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-splitter-content';
			}
		}]);
		return SplitterContent;
	}(SimpleWrapper);

	/**
	 * @original ons-splitter-side
	 * @category menu
	 * @tutorial react/Reference/splitter
	 * @description
	 * [en]  The SplitterContent  element is used as a child element of Splitter.
	 *    It contains the main content of the page while SplitterSide contains the list.
	 [/en]
	 * [ja][/ja]
	 * @example
	  <Splitter>
		<SplitterSide
		  side="left"
		  width={200}
		  swipeable={true}>
		  <Page> Page Left </Page>
		</SplitterSide>
		<SplitterContent>
		  <Page> Page Content </Page>
		</SplitterContent>
		<SplitterSide
		  side="right"
		  width={300}
		  collapse={!this.state.showRight}
		  isOpen={this.state.openRight}
		  onClose={this.handleRightClose.bind(this)}
		  onOpen={this.handleRightOpen.bind(this)}
		  swipeable={true}>
		  <Page> Page Right </Page>
		</SplitterSide>
	  </Splitter>
	 */

	var SplitterSide = function (_BasicComponent) {
		inherits(SplitterSide, _BasicComponent);

		function SplitterSide() {
			var _ref;

			classCallCheck(this, SplitterSide);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = SplitterSide.__proto__ || Object.getPrototypeOf(SplitterSide)).call.apply(_ref, [this].concat(args)));

			var callback = function callback(name, event) {
				if (_this.props[name]) {
					return _this.props[name](event);
				}
			};
			_this.onOpen = callback.bind(_this, 'onOpen');
			_this.onClose = callback.bind(_this, 'onClose');
			_this.onPreOpen = callback.bind(_this, 'onPreOpen');
			_this.onPreClose = callback.bind(_this, 'onPreClose');
			_this.onModeChange = callback.bind(_this, 'onModeChange');
			return _this;
		}

		createClass(SplitterSide, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				get(SplitterSide.prototype.__proto__ || Object.getPrototypeOf(SplitterSide.prototype), 'componentDidMount', this).call(this);
				this.node = ReactDOM__default.findDOMNode(this);
				this.componentWillReceiveProps(this.props);

				this.node.addEventListener('postopen', this.onOpen);
				this.node.addEventListener('postclose', this.onClose);
				this.node.addEventListener('preopen', this.onPreOpen);
				this.node.addEventListener('preclose', this.onPreClose);
				this.node.addEventListener('modechange', this.onModeChange);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.node.removeEventListener('postopen', this.onOpen);
				this.node.removeEventListener('postclose', this.onClose);
				this.node.removeEventListener('preopen', this.onPreOpen);
				this.node.removeEventListener('preclose', this.onPreClose);
				this.node.removeEventListener('modechange', this.onModeChange);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {
				if (newProps.isOpen) {
					this.node.open();
				} else {
					this.node.close();
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				['isCollapsed', 'isSwipeable'].forEach(function (p) {
					return _this2.props.hasOwnProperty(p) && console.error('The property \'' + p + '\' is deprecated, please use \'' + p.toLowerCase().slice(2) + '\', see https://onsen.io/v2/docs/react/SplitterSide.html.');
				});

				var _props = this.props,
					isOpen = _props.isOpen,
					props = objectWithoutProperties(_props, ['isOpen']);

				var attrs = Util.getAttrs(this, props);

				return React.createElement(
					'ons-splitter-side',
					attrs,
					this.props.children
				);
			}
		}]);
		return SplitterSide;
	}(BasicComponent);

	SplitterSide.propTypes = {
		/**
		 * @name collapse
		 * @type string
		 * @description
		 *  [en] Specify the collapse behavior. Valid values are `"portrait"`, `"landscape"` or a media query.
		 *     The strings `"portrait"` and `"landscape"` means the view will collapse when device is in landscape or portrait orientation.
		 *     If the value is not defined, the view always be in `"collapse"` mode.
		[/en]
		 *  [ja][/ja]
		 */
		collapse: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

		/**
		 * @name swipeable
		 * @type bool
		 * @description
		 *  [en]Ennable swipe interaction on collapse mode.[/en]
		 *  [ja][/ja]
		 */
		swipeable: PropTypes.bool,

		/**
		 * @name isOpen
		 * @type bool
		 * @description
		 *  [en]Specifies whether the menu is open.[/en]
		 *  [ja][/ja]
		 */
		isOpen: PropTypes.bool,

		/**
		 * @name onOpen
		 * @type function
		 * @description
		 *  [en]Called after the menu is opened.[/en]
		 *  [ja][/ja]
		 */
		onOpen: PropTypes.func,

		/**
		 * @name onClose
		 * @type function
		 * @description
		 *  [en]Called after the menu is closed.[/en]
		 *  [ja][/ja]
		 */
		onClose: PropTypes.func,

		/**
		 * @name side
		 * @type string
		 * @description
		 *  [en]Specify which side of the screen the SplitterSide element is located. Possible values are `"left"` and `"right"`.[/en]
		 *  [ja][/ja]
		 */
		side: PropTypes.oneOf(['left', 'right']),

		/**
		 * @name swipeTargetWidth
		 * @type number
		 * @description
		 *  [en]Specifies the width of the menu with a number (for pixels) or a string (e.g. "20%" for percentage).[/en]
		 *  [ja][/ja]
		 */
		swipeTargetWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

		/**
		 * @name width
		 * @type  number
		 * @description
		 *  [en]Specifies the width of the menu with a number (for pixels) or a string (e.g. "20%" for percentage).[/en]
		 *  [ja][/ja]
		 */
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

		/**
		 * @name animation
		 * @type string
		 * @required false
		 * @description
		 *  [en]Specify the animation. Use one of `overlay`, `push`, `reveal`, or `default`.[/en]
		 *  [ja][/ja]
		 */
		animation: PropTypes.string,

		/**
		 * @name animationOptions
		 * @type object
		 * @required false
		 * @description
		 *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
		 *  [ja][/ja]
		 */
		animationOptions: PropTypes.object,

		/**
		 * @name openThreshold
		 * @type object
		 * @required false
		 * @description
		 *  [en] Specify how much the menu needs to be swiped before opening. A value between `0` and `1`.  [/en]
		 *  [ja][/ja]
		 */
		openThreshold: PropTypes.number,

		/**
		 * @name mode
		 * @type string
		 * @required false
		 * @description
		 *  [en] Current mode. Possible values are `"collapse"` or `"split"`. This attribute is read only.  [/en]
		 *  [ja][/ja]
		 */
		mode: PropTypes.oneOf(['collapse', 'split']),

		/**
		 * @name onPreOpen
		 * @type string
		 * @description
		 *  [en] Called before the menu opens.  [/en]
		 *  [ja][/ja]
		 */
		onPreOpen: PropTypes.func,

		/**
		 * @name onPreClose
		 * @type string
		 * @description
		 *  [en] Called before the menu closes.  [/en]
		 *  [ja][/ja]
		 */
		onPreClose: PropTypes.func,

		/**
		 * @name onModeChange
		 * @type string
		 * @description
		 *  [en] Called after the component's mode changes. [/en]
		 *  [ja][/ja]
		 */
		onModeChange: PropTypes.func
	};

	/**
	 * @original ons-switch
	 * @category form
	 * @tutorial react/Reference/switch
	 * @description
	 * [en]   Switch component. The switch can be toggled both by dragging and tapping.
	 *     Will automatically displays a Material Design switch on Android devices.
	 [/en]
	 * [ja][/ja]
	 * @example
	 * <Switch checked={this.state.checked} onChange={this.onChange} />
	 */

	var Switch = function (_BaseInput) {
		inherits(Switch, _BaseInput);

		function Switch() {
			classCallCheck(this, Switch);
			return possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
		}

		createClass(Switch, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-switch';
			}
		}, {
			key: 'EVENT_TYPES',
			get: function get$$1() {
				return ['change'];
			}
		}]);
		return Switch;
	}(BaseInput);

	Switch.propTypes = {
		/**
		 * @name onChange
		 * @type function
		 * @description
		 *  [en] Called when the value of the switch changes (checked/unchecked) [/en]
		 *  [ja][/ja]
		 */
		onChange: PropTypes.func,

		/**
		 * @name checked
		 * @type bool
		 * @description
		 *  [en] Whether the switch is checked.[/en]
		 *  [ja][/ja]
		 */
		checked: PropTypes.bool,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en] If set, the switch is disabled.[/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool,

		/**
		 * @name inputId
		 * @type string
		 * @description
		 *  [en] Specify the `id` attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
		 *  [ja][/ja]
		 */
		inputId: PropTypes.string
	};

	/**
	 * @original ons-tab
	 * @category tabbar
	 * @tutorial react/Reference/tabbar
	 * @description
	 * [en] Represents a tab inside tab bar.
	 [/en]
	 * [ja][/ja]
	 * @example
	 * <Tap>
	 *   Home
	 * </Tap>
	 */

	var Tab = function (_SimpleWrapper) {
		inherits(Tab, _SimpleWrapper);

		function Tab() {
			classCallCheck(this, Tab);
			return possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
		}

		createClass(Tab, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-tab';
			}
		}]);
		return Tab;
	}(SimpleWrapper);

	/**
	 * @original ons-tabbar
	 * @category tabbar
	 * @tutorial react/Reference/tabbar
	 * @description
	 * [en] Component to display a tabbar on either the top or the bottom of a page.
	 * To define the tabs and the content the property renderTabs need to be implemented, that returns an array of tabs and their content. See the example for specifics. [/en]* [ja][/ja]
	 * @example

	  <Page>
		<Tabbar
		  onPreChange={({index}) => this.setState(index)}
		  onPostChange={() => console.log('postChange')}
		  onReactive={() => console.log('postChange')}
		  position='bottom'
		  index={this.state.index}
		  renderTabs={(activeIndex, tabbar) => [
			{
			  content: <TabPage title="Home" active={activeIndex === 0} tabbar={tabbar} />,
			  tab: <Tab label="Home" icon="md-home" />
			},
			{
			  content: <TabPage title="Settings" active={activeIndex === 1} tabbar={tabbar} />,
			  tab: <Tab label="Settings" icon="md-settings" />
			}]
		  }
		/>
	  </Page>
	 */

	var Tabbar = function (_BasicComponent) {
		inherits(Tabbar, _BasicComponent);

		function Tabbar() {
			var _ref;

			classCallCheck(this, Tabbar);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = possibleConstructorReturn(this, (_ref = Tabbar.__proto__ || Object.getPrototypeOf(Tabbar)).call.apply(_ref, [this].concat(args)));

			var callback = function callback(name, event) {
				if (_this.props[name]) {
					return _this.props[name](event);
				}
			};
			_this.onPreChange = callback.bind(_this, 'onPreChange');
			_this.onPostChange = callback.bind(_this, 'onPostChange');
			_this.onReactive = callback.bind(_this, 'onReactive');
			return _this;
		}

		createClass(Tabbar, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				get(Tabbar.prototype.__proto__ || Object.getPrototypeOf(Tabbar.prototype), 'componentDidMount', this).call(this);
				var node = this._tabbar;
				node.addEventListener('prechange', this.onPreChange);
				node.addEventListener('postchange', this.onPostChange);
				node.addEventListener('reactive', this.onReactive);
				node.onSwipe = this.props.onSwipe || null;
				if (this.props.visible !== undefined) {
					node.setTabbarVisibility(this.props.visible);
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				var node = this._tabbar;
				node.removeEventListener('prechange', this.onPreChange);
				node.removeEventListener('postchange', this.onPostChange);
				node.removeEventListener('reactive', this.onReactive);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				var node = this._tabbar;
				if (nextProps.index !== this.props.index && nextProps.index !== node.getActiveTabIndex()) {
					node.setActiveTab(nextProps.index, { reject: false });
				}
				if (this.props.onSwipe !== nextProps.onSwipe) {
					node.onSwipe = nextProps.onSwipe;
				}
				if (this.props.visible !== nextProps.visible) {
					node.setTabbarVisibility(nextProps.visible);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var attrs = Util.getAttrs(this, this.props, { index: 'activeIndex' });
				var tabs = this.props.renderTabs(this.props.index, this);

				if (!this.tabPages) {
					this.tabPages = tabs.map(function (tab) {
						return tab.content;
					});
				} else {
					this.tabPages[this.props.index] = tabs[this.props.index].content;
				}

				return React.createElement(
					'ons-tabbar',
					_extends({}, attrs, {
						ref: function ref(tabbar) {
							_this2._tabbar = tabbar;
						}
					}),
					React.createElement(
						'div',
						{ className: 'tabbar__content' },
						React.createElement(
							'div',
							null,
							this.tabPages
						),
						React.createElement('div', null)
					),
					React.createElement(
						'div',
						{ className: 'tabbar' },
						tabs.map(function (tab) {
							return tab.tab;
						}),
						React.createElement('div', { className: 'tabbar__border' })
					)
				);
			}
		}]);
		return Tabbar;
	}(BasicComponent);

	Tabbar.propTypes = {
		/**
		 * @name index
		 * @type number
		 * @required
		 * @description
		 *  [en] The index of the tab to highlight.[/en]
		 *  [ja][/ja]
		 */
		index: PropTypes.number.isRequired,

		/**
		 * @name renderTabs
		 * @type function
		 * @description
		 *  [en] Function that returns an array of objects with the keys `content` and `tab`.[/en]
		 *  [ja][/ja]
		 */
		renderTabs: PropTypes.func.isRequired,

		/**
		 * @name position
		 * @type string
		 * @description
		 *  [en] Tabbar's position. Available values are `"bottom"` and `"top"`. Use `"auto"` to choose position depending on platform (iOS bottom, Android top). [/en]
		 *  [ja][/ja]
		 */
		position: PropTypes.string,

		/**
		 * @name swipeable
		 * @type bool
		 * @description
		 *  [en]Ennable swipe interaction.[/en]
		 *  [ja][/ja]
		 */
		swipeable: PropTypes.bool,

		/**
		 * @name ignoreEdgeWidth
		 * @type number
		 * @description
		 *  [en]Distance in pixels from both edges. Swiping on these areas will prioritize parent components such as `Splitter` or `Navigator`.[/en]
		 *  [ja][/ja]
		 */
		ignoreEdgeWidth: PropTypes.bool,

		/**
		 * @name animation
		 * @type string
		 * @description
		 *  [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
		 *  [ja][/ja]
		 */
		animation: PropTypes.oneOf(['none', 'slide']),

		/**
		 * @name animationOptions
		 * @type object
		 * @required false
		 * @description
		 *  [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
		 *  [ja][/ja]
		 */
		animationOptions: PropTypes.object,

		/**
		 * @name tabBorder
		 * @type bool
		 * @description
		 *  [en]If true, the tabs show a dynamic bottom border. Only works for iOS since the border is always visible in Material Design.[/en]
		 *  [ja][/ja]
		 */
		tabBorder: PropTypes.bool,

		/**
		 * @name onPreChange
		 * @type function
		 * @description
		 *  [en]Called just before the tab is changed.[/en]
		 *  [ja][/ja]
		 */
		onPreChange: PropTypes.func,

		/**
		 * @name onPostChange
		 * @type function
		 * @description
		 *  [en]Called just after the tab is changed.[/en]
		 *  [ja][/ja]
		 */
		onPostChange: PropTypes.func,

		/**
		 * @name onReactive
		 * @type function
		 * @description
		 *  [en]Called if the already open tab is tapped again.[/en]
		 *  [ja][/ja]
		 */
		onReactive: PropTypes.func,

		/**
		 * @name onSwipe
		 * @type function
		 * @description
		 *  [en]Hook called whenever the user slides the tabbar. It gets a decimal index and an animationOptions object as arguments.[/en]
		 *  [ja][/ja]
		 */
		onSwipe: PropTypes.func,

		/**
		 * @name visible
		 * @type bool
		 * @description
		 *  [en]If true, the tabbar is shown on the screen. Otherwise, the tabbar is not shown.[/en]
		 *  [ja][/ja]
		 */
		visible: PropTypes.bool
	};

	Tabbar.defaultProps = {
		index: 0
	};

	/**
	 * @original ons-toast
	 * @category dialog
	 * @tutorial react/Reference/toast
	 * @description
	 * [en]
	 *  The Toast or Snackbar component is useful for displaying dismissable information or simple actions at (normally) the bottom of the page.
	 *
	 *  This component does not block user input, allowing the app to continue its flow. Furthermore, it can be automatically hidden after a timeout.
	 * [/en]
	 * [ja][/ja]
	 */

	var Toast = function (_BaseDialog) {
		inherits(Toast, _BaseDialog);

		function Toast() {
			classCallCheck(this, Toast);
			return possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
		}

		createClass(Toast, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-toast';
			}
		}]);
		return Toast;
	}(BaseDialog);

	Toast.propTypes = {
		/**
		 * @name isOpen
		 * @type bool
		 * @required true
		 * @description
		 *  [en]
		 *  Indicates whether the toast open and shown.
		 *  [/en]
		 *  [ja][/ja]
		 */
		isOpen: PropTypes.bool.isRequired,

		/**
		 * @name animation
		 * @type string
		 * @required false
		 * @description
		 *  [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
		 *  [ja][/ja]
		 */
		animation: PropTypes.string,

		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the toast.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name animationOptions
		 * @type object
		 * @required false
		 * @description
		 *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
		 *  [ja][/ja]
		 */
		animationOptions: PropTypes.object,

		/**
		 * @name onPreShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just before the toast is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPreShow: PropTypes.func,

		/**
		 * @name onPostShow
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Called just after the toast is displayed.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onPostShow: PropTypes.func,

		/**
		 * @name onPreHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just before the toast is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPreHide: PropTypes.func,

		/**
		 * @name onPostHide
		 * @type function
		 * @required false
		 * @description
		 *  [en]Called just after the toast is hidden.[/en]
		 *  [ja][/ja]
		 */
		onPostHide: PropTypes.func,

		/**
		 * @name onDeviceBackButton
		 * @type function
		 * @required false
		 * @description
		 *  [en]
		 *  Custom handler for device back button.
		 *  [/en]
		 *  [ja][/ja]
		 */
		onDeviceBackButton: PropTypes.func
	};

	/**
	 * @original ons-toolbar
	 * @category page
	 * @tutorial react/Reference/toolbar
	 * @description
	 * [en]Toolbar component that can be used with navigation. Left, center and right container can be specified by class names. This component will automatically displays as a Material Design toolbar when running on Android devices.[/en]
	 * [ja][/ja]
	 * @example
	 *
	<Page renderToolbar={() =>
	  <Toolbar>
		<div className="left">
		  <BackButton>
			  Back
		  </BackButton>
		</div>
		<div className="center">
		  Title
		</div>
		<div className="right">
		  <ToolbarButton>
			<Icon icon="md-menu" />
		  </ToolbarButton>
		</div>
	  </Toolbar> }
	/>
	 */

	var Toolbar = function (_SimpleWrapper) {
		inherits(Toolbar, _SimpleWrapper);

		function Toolbar() {
			classCallCheck(this, Toolbar);
			return possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
		}

		createClass(Toolbar, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-toolbar';
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				get(Toolbar.prototype.__proto__ || Object.getPrototypeOf(Toolbar.prototype), 'componentDidMount', this).call(this);

				if (this.props.visible !== undefined) {
					ReactDOM__default.findDOMNode(this).setVisibility(this.props.visible);
				}
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				if (this.props.visible !== nextProps.visible) {
					ReactDOM__default.findDOMNode(this).setVisibility(nextProps.visible);
				}
			}
		}]);
		return Toolbar;
	}(SimpleWrapper);

	Toolbar.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @description
		 *  [en]
		 *  Specify modifier name to specify custom styles. Optional.
		 *  [/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name visible
		 * @type bool
		 * @description
		 *  [en]If true, the toolbar is shown on the screen. Otherwise, the toolbar is not shown.[/en]
		 *  [ja][/ja]
		 */
		visible: PropTypes.bool
	};

	/**
	 * @original ons-toolbar-button
	 * @category page
	 * @tutorial react/Reference/page
	 * @description
	 *   [en]
	 *   Button component for the Toolbar. Using this component gives a nice default style.
	 *
	 *
	 *   [/en]
	 * [ja][/ja]
	 * @example
	 * <Page
		 renderToolbar = { () =>
		  <Toolbar>
			<div className='left'><BackButton>Back</BackButton></div>
			<div className='center'>Input</div>
			<div className='right'>
			  <ToolbarButton onClick={this.add} >Add</ToolbarButton>
			</div>
		  </Toolbar>
		 }>
		  Page Content
		</Page>
	 */

	var ToolbarButton = function (_SimpleWrapper) {
		inherits(ToolbarButton, _SimpleWrapper);

		function ToolbarButton() {
			classCallCheck(this, ToolbarButton);
			return possibleConstructorReturn(this, (ToolbarButton.__proto__ || Object.getPrototypeOf(ToolbarButton)).apply(this, arguments));
		}

		createClass(ToolbarButton, [{
			key: '_getDomNodeName',
			value: function _getDomNodeName() {
				return 'ons-toolbar-button';
			}
		}]);
		return ToolbarButton;
	}(SimpleWrapper);

	ToolbarButton.propTypes = {
		/**
		 * @name modifier
		 * @type string
		 * @required false
		 * @description
		 *  [en]The appearance of the button.[/en]
		 *  [ja][/ja]
		 */
		modifier: PropTypes.string,

		/**
		 * @name disabled
		 * @type bool
		 * @description
		 *  [en]
		 *  Indicates whether the button is disabled.
		 *  [/en]
		 *  [ja][/ja]
		 */
		disabled: PropTypes.bool
	};

	/*
	 * routeStack : [userRoute, userRoute2, ...]
	 * processStack: [
	 * { type: push | pop | reset, route: userRoute },
	 * { type: push | pop | reset, route: userRoute2 },
	 * ...
	 * ]
	 */

	var RouterUtil = {
		init: function init(routes) {
			return {
				routeStack: [].concat(toConsumableArray(routes)),
				processStack: []
			};
		},

		replace: function replace(_ref) {
			var routeConfig = _ref.routeConfig,
				route = _ref.route,
				options = _ref.options,
				key = _ref.key;

			var config = _extends({}, routeConfig);
			var routeStack = [].concat(toConsumableArray(config.routeStack));
			var processStack = [].concat(toConsumableArray(config.processStack));

			if (key == null || processStack.filter(function (el) {
				return el.key === key;
			}).length === 0) {
				var process = {
					type: 'replace',
					route: route,
					options: options,
					key: key
				};
				processStack = [].concat(toConsumableArray(processStack), [process]);
			}

			return {
				routeStack: routeStack,
				processStack: processStack
			};
		},

		reset: function reset(_ref2) {
			var routeConfig = _ref2.routeConfig,
				route = _ref2.route,
				options = _ref2.options,
				key = _ref2.key;

			var config = _extends({}, routeConfig);
			var routeStack = [].concat(toConsumableArray(config.routeStack));
			var processStack = [].concat(toConsumableArray(config.processStack));

			if (key == null || processStack.filter(function (el) {
				return el.key === key;
			}).length === 0) {
				var process = {
					type: 'reset',
					route: route,
					options: options,
					key: key
				};

				processStack = [].concat(toConsumableArray(processStack), [process]);
			}

			return {
				routeStack: routeStack,
				processStack: processStack
			};
		},

		push: function push(_ref3) {
			var routeConfig = _ref3.routeConfig,
				route = _ref3.route,
				options = _ref3.options,
				key = _ref3.key;

			var config = _extends({}, routeConfig);
			var routeStack = [].concat(toConsumableArray(config.routeStack));
			var processStack = [].concat(toConsumableArray(config.processStack));

			if (key == null || config.processStack.filter(function (el) {
				return el.key === key;
			}).length === 0) {
				var process = {
					type: 'push',
					route: route,
					options: options,
					key: key
				};

				processStack = [].concat(toConsumableArray(processStack), [process]);
			}

			return {
				routeStack: routeStack,
				processStack: processStack
			};
		},

		pop: function pop(_ref4) {
			var routeConfig = _ref4.routeConfig,
				options = _ref4.options,
				key = _ref4.key;

			var config = _extends({}, routeConfig);
			var routeStack = [].concat(toConsumableArray(config.routeStack));
			var processStack = [].concat(toConsumableArray(config.processStack));

			/**
			 * Safegaurd to ensure that not
			 * too many pages are popped from
			 * the stack.
			 */
			var pops = processStack.filter(function (x) {
				return x.type === 'pop';
			}).length;

			if (pops + 1 >= routeStack.length) {
				console.warn('Page stack is already empty');
				return config;
			}

			var process = {
				type: 'pop',
				key: key,
				options: options
			};

			processStack = [].concat(toConsumableArray(processStack), [process]);

			return {
				routeStack: routeStack,
				processStack: processStack
			};
		},

		postPush: function postPush(routeConfig) {
			var config = _extends({}, routeConfig);
			var routeStack = [].concat(toConsumableArray(config.routeStack));
			var processStack = [].concat(toConsumableArray(config.processStack));

			var next = processStack.shift();
			var type = next.type;
			var route = next.route;

			if (type === 'push') {
				if (route !== null) {
					routeStack = [].concat(toConsumableArray(routeStack), [route]);
				}
			} else if (type === 'reset') {
				if (!Array.isArray(route)) route = [route];
				routeStack = route;
			} else if (type === 'replace') {
				routeStack.pop();
				routeStack.push(route);
			}

			return {
				routeStack: routeStack,
				processStack: processStack
			};
		},

		postPop: function postPop(routeConfig) {
			var config = _extends({}, routeConfig);
			var routeStack = [].concat(toConsumableArray(config.routeStack));
			var processStack = [].concat(toConsumableArray(config.processStack));
			routeStack = routeStack.slice(0, routeStack.length - 1);
			processStack = processStack.slice(1);

			return {
				routeStack: routeStack,
				processStack: processStack
			};
		}
	};

	exports.ActionSheet = ActionSheet;
	exports.ActionSheetButton = ActionSheetButton;
	exports.AlertDialog = AlertDialog;
	exports.AlertDialogButton = AlertDialogButton;
	exports.BackButton = BackButton;
	exports.BottomToolbar = BottomToolbar;
	exports.Button = Button;
	exports.Card = Card;
	exports.Carousel = Carousel;
	exports.CarouselItem = CarouselItem;
	exports.Checkbox = Checkbox;
	exports.Col = Col;
	exports.Dialog = Dialog;
	exports.Fab = Fab;
	exports.Icon = Icon;
	exports.Input = Input;
	exports.LazyList = LazyList;
	exports.List = List;
	exports.ListHeader = ListHeader;
	exports.ListItem = ListItem;
	exports.ListTitle = ListTitle;
	exports.Navigator = Navigator;
	exports.Modal = Modal;
	exports.Page = Page;
	exports.Popover = Popover;
	exports.ProgressBar = ProgressBar;
	exports.ProgressCircular = ProgressCircular;
	exports.PullHook = PullHook;
	exports.Radio = Radio;
	exports.Range = Range;
	exports.Ripple = Ripple;
	exports.RouterNavigator = RouterNavigator;
	exports.RouterUtil = RouterUtil;
	exports.Row = Row;
	exports.SearchInput = SearchInput;
	exports.Segment = Segment;
	exports.Select = Select;
	exports.SpeedDial = SpeedDial;
	exports.SpeedDialItem = SpeedDialItem;
	exports.Splitter = Splitter;
	exports.SplitterContent = SplitterContent;
	exports.SplitterSide = SplitterSide;
	exports.Switch = Switch;
	exports.Tab = Tab;
	exports.Tabbar = Tabbar;
	exports.Toast = Toast;
	exports.Toolbar = Toolbar;
	exports.ToolbarButton = ToolbarButton;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtb25zZW51aS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbXBvbmVudHMvVXRpbC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL0Jhc2VEaWFsb2cuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQWN0aW9uU2hlZXQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQmFzaWNDb21wb25lbnQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU2ltcGxlV3JhcHBlci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9BY3Rpb25TaGVldEJ1dHRvbi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9BbGVydERpYWxvZy5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9BbGVydERpYWxvZ0J1dHRvbi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9CYWNrQnV0dG9uLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0JvdHRvbVRvb2xiYXIuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Jhc2VJbnB1dC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9DaGVja2JveC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Db2wuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRGlhbG9nLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0ZhYi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29uLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0lucHV0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xhenlMaXN0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xpc3QuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9MaXN0SXRlbS5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9MaXN0VGl0bGUuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdG9yLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL01vZGFsLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1BhZ2UuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvUG9wb3Zlci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0NpcmN1bGFyLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1B1bGxIb29rLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1JhZGlvLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1JhbmdlLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1JpcHBsZS5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Sb3V0ZXJOYXZpZ2F0b3IuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvUm93LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NlYXJjaElucHV0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU2VsZWN0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NwZWVkRGlhbC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9TcGVlZERpYWxJdGVtLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NwbGl0dGVyLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NwbGl0dGVyQ29udGVudC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9TcGxpdHRlclNpZGUuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU3dpdGNoLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1RhYi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9UYWJiYXIuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvVG9hc3QuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvVG9vbGJhci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Ub29sYmFyQnV0dG9uLmpzeCIsIi4uL3NyYy9Sb3V0ZXJVdGlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vcm1hbGl6ZSA9IGtleSA9PiB7XG4gIGlmICgvXmlzW0EtWl0vLnRlc3Qoa2V5KSkge1xuICAgIGtleSA9IGtleS5zbGljZSgyKTtcbiAgfVxuICByZXR1cm4ga2V5LnJlcGxhY2UoLyhbYS16QS1aXSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGV2ZW50VG9IYW5kbGVyKHN0cmluZykge1xuICAgIHJldHVybiAnb24nICsgc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUdXJucyBhbiBvYmplY3Qgb2YgUmVhY3QgcHJvcHMgaW50byBhbiBvYmplY3Qgb2YgdmFuaWxsYSBKUyBwcm9wZXJ0aWVzIGZvciBhIGdpdmVuIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsXG4gICAqICAgVGhlIGNvbXBvbmVudCB3aG9zZSBwcm9wcyBzaG91bGQgYmUgY29udmVydGVkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiAgIFRoZSBwcm9wcyB0aGF0IHNob3VsZCBiZSBjb252ZXJ0ZWQgKGRlZmF1bHQ6IGFsbCBwcm9wcylcbiAgICogQHBhcmFtIHtPYmplY3R9IG5hbWVNYXBcbiAgICogICBNYXAgb2YgJ3JlYWN0IHByb3AgbmFtZScgLT4gJ3ZhbmlsbGEgSlMgcHJvcGVydHkgbmFtZScuIE92ZXJyaWRlcyBkZWZhdWx0IHJlbmFtaW5nIHNjaGVtZS5cbiAgICovXG4gIGdldEF0dHJzKGVsLCBwcm9wcyA9IGVsLnByb3BzLCBuYW1lTWFwID0ge30pIHtcbiAgICBjb25zdCBqc1Byb3BlcnRpZXMgPSB7fTtcbiAgICBjb25zdCB2YWxpZFByb3BzID0gZWwuY29uc3RydWN0b3IucHJvcFR5cGVzIHx8IHt9O1xuICAgIGNvbnN0IGlnbm9yZWRQcm9wcyA9IFsnaXNPcGVuJ107XG5cbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChyZWFjdE5hbWUgPT4ge1xuICAgICAgY29uc3QgcmVhY3RWYWx1ZSA9IHByb3BzW3JlYWN0TmFtZV07XG5cbiAgICAgIC8vIG9uQ2xpY2sgYW5kIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSB2YWxpZCBSZWFjdCBwcm9wIGdldCBhZGRlZCBpbW1lZGlhdGVseVxuICAgICAgaWYgKCF2YWxpZFByb3BzLmhhc093blByb3BlcnR5KHJlYWN0TmFtZSkgfHwgcmVhY3ROYW1lID09PSAnb25DbGljaycpIHtcbiAgICAgICAganNQcm9wZXJ0aWVzW3JlYWN0TmFtZV0gPSByZWFjdFZhbHVlO1xuXG4gICAgICAvLyBkb24ndCBhZGQgYW55IHByb3BzIHdlIHNwZWNpZmljYWxseSB3YW50IHRvIGlnbm9yZVxuICAgICAgfSBlbHNlIGlmIChpZ25vcmVkUHJvcHMuaW5kZXhPZihyZWFjdE5hbWUpID09PSAtMSkge1xuICAgICAgICBjb25zdCBqc05hbWUgPSBuYW1lTWFwW3JlYWN0TmFtZV0gfHwgbm9ybWFsaXplKHJlYWN0TmFtZSk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgcmVhY3RWYWx1ZTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHJlYWN0VmFsdWUpIHtcbiAgICAgICAgICBqc1Byb3BlcnRpZXNbanNOYW1lXSA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHJlYWN0TmFtZSA9PT0gJ2FuaW1hdGlvbk9wdGlvbnMnKSB7XG4gICAgICAgICAgICBqc1Byb3BlcnRpZXNbanNOYW1lXSA9IEpTT04uc3RyaW5naWZ5KHJlYWN0VmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqc1Byb3BlcnRpZXNbanNOYW1lXSA9IHJlYWN0VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgaWYgKC8oaGVpZ2h0fHdpZHRoKS9pLnRlc3QocmVhY3ROYW1lKSkge1xuICAgICAgICAgICAganNQcm9wZXJ0aWVzW2pzTmFtZV0gPSByZWFjdFZhbHVlICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAganNQcm9wZXJ0aWVzW2pzTmFtZV0gPSByZWFjdFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzUHJvcGVydGllcztcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwuanMnO1xuXG5jbGFzcyBCYXNlRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAobmFtZSwgZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzW25hbWVdKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25DYW5jZWwgPSBjYWxsYmFjay5iaW5kKHRoaXMsICdvbkNhbmNlbCcpO1xuICAgIHRoaXMub25QcmVTaG93ID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVTaG93Jyk7XG4gICAgdGhpcy5vblBvc3RTaG93ID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Qb3N0U2hvdycpO1xuICAgIHRoaXMub25QcmVIaWRlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVIaWRlJyk7XG4gICAgdGhpcy5vblBvc3RIaWRlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Qb3N0SGlkZScpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLm5vZGUuZmlyc3RDaGlsZC5zaG93KCk7XG4gIH1cblxuICB1cGRhdGVDbGFzc2VzKCkge1xuICAgIHZhciBub2RlID0gdGhpcy5ub2RlLmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgIGlmICh0aGlzLmxhc3RDbGFzcykge1xuICAgICAgICBub2RlLmNsYXNzTmFtZSA9IG5vZGUuY2xhc3NOYW1lLnJlcGxhY2UodGhpcy5sYXN0Q2xhc3MsICcnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0Q2xhc3MgPSAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgIG5vZGUuY2xhc3NOYW1lICs9IHRoaXMubGFzdENsYXNzO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5ub2RlLmZpcnN0Q2hpbGQuaGlkZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuXG4gICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RpYWxvZy1jYW5jZWwnLCB0aGlzLm9uQ2FuY2VsKTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlc2hvdycsIHRoaXMub25QcmVTaG93KTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdHNob3cnLCB0aGlzLm9uUG9zdFNob3cpO1xuICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdwcmVoaWRlJywgdGhpcy5vblByZUhpZGUpO1xuICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0aGlkZScsIHRoaXMub25Qb3N0SGlkZSk7XG5cbiAgICB0aGlzLnJlbmRlclBvcnRhbCh0aGlzLnByb3BzLCBmYWxzZSwgdGhpcy5wcm9wcy5vbkRldmljZUJhY2tCdXR0b24pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgIHRoaXMucmVuZGVyUG9ydGFsKG5ld1Byb3BzLCB0aGlzLnByb3BzLmlzT3Blbik7XG4gICAgaWYgKG5ld1Byb3BzLm9uRGV2aWNlQmFja0J1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5vZGUuZmlyc3RDaGlsZC5vbkRldmljZUJhY2tCdXR0b24gPSBuZXdQcm9wcy5vbkRldmljZUJhY2tCdXR0b247XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RpYWxvZy1jYW5jZWwnLCB0aGlzLm9uQ2FuY2VsKTtcbiAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJlc2hvdycsIHRoaXMub25QcmVTaG93KTtcbiAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9zdHNob3cnLCB0aGlzLm9uUG9zdFNob3cpO1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVoaWRlJywgdGhpcy5vblByZUhpZGUpO1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0aGlkZScsIHRoaXMub25Qb3N0SGlkZSk7XG5cbiAgICBjb25zdCB1bm1vdW50ID0gKCkgPT4ge1xuICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5ub2RlLmZpcnN0Q2hpbGQudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5ub2RlLmZpcnN0Q2hpbGQuaGlkZSgpLnRoZW4odW5tb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVubW91bnQoKTtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlKGlzU2hvd24sIG9uRGV2aWNlQmFja0J1dHRvbikge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgaWYgKCFpc1Nob3duKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcblxuICAgIGlmIChvbkRldmljZUJhY2tCdXR0b24gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgdGhpcy5ub2RlLmZpcnN0Q2hpbGQub25EZXZpY2VCYWNrQnV0dG9uID0gb25EZXZpY2VCYWNrQnV0dG9uO1xuICAgIH1cbiAgfVxuXG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ19nZXREb21Ob2RlTmFtZSBpcyBub3QgaW1wbGVtZW50ZWQnKTtcbiAgfVxuXG4gIHJlbmRlclBvcnRhbChwcm9wcywgaXNTaG93biwgb25EZXZpY2VCYWNrQnV0dG9uID0gbnVsbCkge1xuICAgIGNvbnN0IHsgaXNPcGVuLCAuLi5vdGhlcnMgfSA9IHByb3BzO1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzLCBvdGhlcnMpO1xuICAgIGNvbnN0IERvbU5vZGVOYW1lID0gdGhpcy5fZ2V0RG9tTm9kZU5hbWUoKTtcblxuICAgIFJlYWN0RE9NLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKFxuICAgICAgdGhpcyxcbiAgICAgIDxEb21Ob2RlTmFtZSB7IC4uLmF0dHJzIH0gY2hpbGRyZW49eyBwcm9wcy5jaGlsZHJlbiB9IC8+LFxuICAgICAgdGhpcy5ub2RlLFxuICAgICAgdGhpcy5fdXBkYXRlLmJpbmQodGhpcywgaXNTaG93biwgb25EZXZpY2VCYWNrQnV0dG9uKVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuQmFzZURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpc0NhbmNlbGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBpc0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXNrQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIG9uUHJlU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUG9zdFNob3c6IFByb3BUeXBlcy5mdW5jLFxuICBvblByZUhpZGU6IFByb3BUeXBlcy5mdW5jLFxuICBvblBvc3RIaWRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuQmFzZURpYWxvZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzQ2FuY2VsYWJsZTogdHJ1ZSxcbiAgaXNEaXNhYmxlZDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VEaWFsb2c7XG4iLCJpbXBvcnQgQmFzZURpYWxvZyBmcm9tICcuL0Jhc2VEaWFsb2cuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1hY3Rpb24tc2hlZXRcbiAqIEBjYXRlZ29yeSBkaWFsb2dcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvYWN0aW9uLXNoZWV0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICBBY3Rpb24vYm90dG9tIHNoZWV0IHRoYXQgaXMgZGlzcGxheWVkIG9uIHRvcCBvZiBjdXJyZW50IHNjcmVlbi5cbiAqICBUaGUgYWN0aW9uIHNoZWV0IGlzIHVzZWZ1bCBmb3IgZGlzcGxheWluZyBhIGxpc3Qgb2Ygb3B0aW9ucyBhbmQgYXNraW5nIHRoZSB1c2VyIHRvIG1ha2UgYSBkZWNpc2lvbi4gQW4gQWN0aW9uU2hlZXRCdXR0b24gY29tcG9uZW50IGlzIHByb3ZpZGVkIGZvciB0aGlzIHB1cnBvc2UsIGFsdGhvdWdoIGl0IGNhbiBjb250YWluIGFueSB0eXBlIG9mIGNvbnRlbnQuXG4gKiAgSXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGRpc3BsYXllZCBhcyBNYXRlcmlhbCBEZXNpZ24gKGJvdHRvbSBzaGVldCkgd2hlbiBydW5uaW5nIG9uIGFuIEFuZHJvaWQgZGV2aWNlLlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICovXG5jbGFzcyBBY3Rpb25TaGVldCBleHRlbmRzIEJhc2VEaWFsb2cge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtYWN0aW9uLXNoZWV0JztcbiAgfVxufVxuXG5BY3Rpb25TaGVldC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBvbkNhbmNlbFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQgb25seSBpZiBpc0NhbmNlbGFibGUgaXMgdHJ1ZS4gSXQgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGFwcGluZyB0aGUgYmFja2dyb3VuZCBvciBieSBwcmVzc2luZyB0aGUgYmFjayBidXR0b24gb24gQW5kcm9pZCBkZXZpY2VzLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc09wZW5cbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgdHJ1ZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgb3BlbiBhbmQgc2hvd24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzQ2FuY2VsYWJsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY2FuY2VsYWJsZSBvciBub3QuXG4gICAqICBBIGNhbmNlbGFibGUgZGlhbG9nIHdpbGwgY2FsbCBvbkNhbmNlbCAgd2hlbiB0YXBwaW5nIHRoZSBiYWNrZ3JvdW5kIG9yIG9yICBwcmVzc2luZyB0aGUgYmFjayBidXR0b24gb24gQW5kcm9pZCBkZXZpY2VzXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc0NhbmNlbGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0Rpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBkaXNhYmxlZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFRoZSBhbmltYXRpb24gdXNlZCB3aGVuIHNob3dpbmcgYW5kIGhpZGluZyB0aGUgZGlhbG9nLiBDYW4gYmUgZWl0aGVyIGBcIm5vbmVcImAgb3IgYFwiZGVmYXVsdFwiYC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgZGlhbG9nLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtYXNrQ29sb3JcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Db2xvciBvZiB0aGUgYmFja2dyb3VuZCBtYXNrLiBEZWZhdWx0IGlzIFwicmdiYSgwLCAwLCAwLCAwLjIpXCJbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtYXNrQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlU2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBiZWZvcmUgdGhlIGFjdGlvbiBzaGVldCBpcyBkaXNwbGF5ZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZVNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RTaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBhY3Rpb24gc2hlZXQgaXMgZGlzcGxheWVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0U2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlSGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSBhY3Rpb24gc2hlZXQgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdEhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIHRoZSBhY3Rpb24gc2hlZXQgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdEhpZGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRldmljZUJhY2tCdXR0b25cbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VzdG9tIGhhbmRsZXIgZm9yIGRldmljZSBiYWNrIGJ1dHRvbi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uRGV2aWNlQmFja0J1dHRvbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvblNoZWV0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgb25zIGZyb20gJ29uc2VudWknO1xuXG5jbGFzcyBCYXNpY0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXMgPSB0aGlzLnVwZGF0ZUNsYXNzZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0aGlzLmxhc3RDbGFzcykge1xuICAgICAgICBub2RlLmNsYXNzTmFtZSA9IG5vZGUuY2xhc3NOYW1lLnJlcGxhY2UodGhpcy5sYXN0Q2xhc3MsICcgJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGFzdENsYXNzID0gdGhpcy5wcm9wcy5jbGFzc05hbWUudHJpbSgpO1xuXG4gICAgICBub2RlLmNsYXNzTmFtZSA9IG5vZGUuY2xhc3NOYW1lLnRyaW0oKSArICcgJyArIHRoaXMubGFzdENsYXNzO1xuICAgIH1cblxuICAgIGlmICghb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZWFjdC1vbnNlbnVpIHJlcXVpcmVzIGBvbnNlbnVpYCwgbWFrZSBzdXJlIHlvdSBhcmUgbG9hZGluZyBpdCB3aXRoIGBpbXBvcnQgb25zZW51aWAgb3IgYHJlcXVpcmUoJ29uc2VudWknKWAgYmVmb3JlIHVzaW5nIHRoZSBjb21wb25lbnRzXCIpO1xuICAgIH1cblxuICAgIG9ucy5fYXV0b1N0eWxlLnByZXBhcmUobm9kZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNpY0NvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuY2xhc3MgU2ltcGxlV3JhcHBlciBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMuX2dldERvbU5vZGVOYW1lKCksIFV0aWwuZ2V0QXR0cnModGhpcyksIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVdyYXBwZXI7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1hY3Rpb24tc2hlZXQtYnV0dG9uXG4gKiBAY2F0ZWdvcnkgZGlhbG9nXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2FjdGlvbi1zaGVldFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dQ29tcG9uZW50IHRoYXQgcmVwcmVzZW50IGVhY2ggYnV0dG9uIG9mIHRoZSBhY3Rpb24gc2hlZXQuWy9lbl1cbiAqIFtqYV1bL2phXVxuICovXG5jbGFzcyBBY3Rpb25TaGVldEJ1dHRvbiBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtYWN0aW9uLXNoZWV0LWJ1dHRvbic7XG4gIH1cbn1cblxuQWN0aW9uU2hlZXRCdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgYWN0aW9uIHNoZWV0IGJ1dHRvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgaWNvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ3JlYXRlcyBhbiBgSWNvbmAgY29tcG9uZW50IHdpdGggdGhpcyBzdHJpbmcuIE9ubHkgdmlzaWJsZSBvbiBBbmRyb2lkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2xpY2tcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uU2hlZXRCdXR0b247XG4iLCJpbXBvcnQgQmFzZURpYWxvZyBmcm9tICcuL0Jhc2VEaWFsb2cuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1hbGVydC1kaWFsb2dcbiAqIEBjYXRlZ29yeSBkaWFsb2dcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvYWxlcnQtZGlhbG9nXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICAgQWxlcnQgZGlhbG9nIHRoYXQgaXMgZGlzcGxheWVkIG9uIHRvcCBvZiB0aGUgY3VycmVudCBzY3JlZW4uIFVzZWZ1bCBmb3IgZGlzcGxheWluZyBxdWVzdGlvbnMsIHdhcm5pbmdzIG9yIGVycm9yIG1lc3NhZ2VzIHRvIHRoZSB1c2VyLiBUaGUgdGl0bGUsIGNvbnRlbnQgYW5kIGJ1dHRvbnMgY2FuIGJlIGVhc2lseSBjdXN0b21pemVkIGFuZCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgc3dpdGNoIHN0eWxlIGJhc2VkIG9uIHRoZSBwbGF0Zm9ybS5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gICA8QWxlcnREaWFsb2cgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0gb25DYW5jZWw9e3RoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcyl9IGNhbmNlbGFibGU+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtZGlhbG9nLXRpdGxlXCI+V2FybmluZyE8L2Rpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1kaWFsb2ctY29udGVudFwiPlxuICAgICAgIEFuIGVycm9yIGhhcyBvY2N1cnJlZCFcbiAgICAgPC9kaXY+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtZGlhbG9nLWZvb3RlclwiPlxuICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiYWxlcnQtZGlhbG9nLWJ1dHRvblwiPlxuICAgICAgICAgQ2FuY2VsXG4gICAgICAgPC9CdXR0b24+XG4gICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJhbGVydC1kaWFsb2ctYnV0dG9uXCI+XG4gICAgICAgICBPa1xuICAgICAgIDwvQnV0dG9uPlxuICAgICA8L2Rpdj5cbiAgIDwvQWxlcnREaWFsb2c+XG4gKi9cbmNsYXNzIEFsZXJ0RGlhbG9nIGV4dGVuZHMgQmFzZURpYWxvZyB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1hbGVydC1kaWFsb2cnO1xuICB9XG59XG5cbkFsZXJ0RGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2FuY2VsXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBvbmx5IGlmIGlzQ2FuY2VsYWJsZSBpcyB0cnVlLiBJdCB3aWxsIGJlIGNhbGxlZCBhZnRlciB0YXBwaW5nIHRoZSBiYWNrZ3JvdW5kIG9yIGJ5IHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbiBvbiBBbmRyb2lkIGRldmljZXMuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzT3BlblxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCB0cnVlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBvcGVuIGFuZCBzaG93bi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQG5hbWUgaXNDYW5jZWxhYmxlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjYW5jZWxhYmxlIG9yIG5vdC5cbiAgICogIEEgY2FuY2VsYWJsZSBkaWFsb2cgd2lsbCBjYWxsIG9uQ2FuY2VsICB3aGVuIHRhcHBpbmcgdGhlIGJhY2tncm91bmQgb3Igb3IgIHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbiBvbiBBbmRyb2lkIGRldmljZXNcbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzQ2FuY2VsYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzRGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgVGhlIGFuaW1hdGlvbiB1c2VkIHdoZW4gc2hvd2luZyBhbmQgaGlkaW5nIHRoZSBkaWFsb2cuIENhbiBiZSBlaXRoZXIgYFwibm9uZVwiYCBvciBgXCJkZWZhdWx0XCJgLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBkaWFsb2cuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1hc2tDb2xvclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNvbG9yIG9mIHRoZSBiYWNrZ3JvdW5kIG1hc2suIERlZmF1bHQgaXMgXCJyZ2JhKDAsIDAsIDAsIDAuMilcIlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1hc2tDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuICBge2R1cmF0aW9uOiAwLjIsIGRlbGF5OiAwLjQsIHRpbWluZzogJ2Vhc2UtaW4nfWAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVTaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBqdXN0IGJlZm9yZSB0aGUgYWxlcnQgZGlhbG9nIGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGFsZXJ0IGRpYWxvZyBpcyBkaXNwbGF5ZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RTaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVIaWRlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBiZWZvcmUgdGhlIGFsZXJ0IGRpYWxvZyBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVIaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0SGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGFsZXJ0IGRpYWxvZyBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0SGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRGV2aWNlQmFja0J1dHRvblxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXN0b20gaGFuZGxlciBmb3IgZGV2aWNlIGJhY2sgYnV0dG9uLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnREaWFsb2c7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1hbGVydC1kaWFsb2ctYnV0dG9uXG4gKiBAY2F0ZWdvcnkgZGlhbG9nXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2RpYWxvZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dQ29tcG9uZW50IHRoYXQgcmVwcmVzZW50IGVhY2ggYnV0dG9uIG9mIHRoZSBhbGVydCBkaWFsb2cuWy9lbl1cbiAqIFtqYV1bL2phXVxuICovXG5jbGFzcyBBbGVydERpYWxvZ0J1dHRvbiBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtYWxlcnQtZGlhbG9nLWJ1dHRvbic7XG4gIH1cbn1cblxuQWxlcnREaWFsb2dCdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgYWxlcnQgZGlhbG9nIGJ1dHRvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2xpY2tcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnREaWFsb2dCdXR0b247XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWJhY2stYnV0dG9uXG4gKiBAY2F0ZWdvcnkgbmF2aWdhdGlvblxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9iYWNrLWJ1dHRvblxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiAgIEJhY2sgYnV0dG9uIGNvbXBvbmVudCBmb3IgVG9vbGJhci4gSXQgZW5hYmxlcyB0byBhdXRvbWF0aWNhbGx5IHRvIHBvcCB0aGUgdG9wIHBhZ2Ugb2YgdGhlIG5hdmlnYXRvci4gV2hlbiBvbmx5IHByZXNlbnRlZCB3aXRoIG9uZSBwYWdlLCB0aGUgYnV0dG9uIGlzIGhpZGRlbiBhdXRvbWF0aWNhbGx5LlxuICpcbiAqICAgVGhlIGRlZmF1bHQgYmVoYXZpb3IgY2FuIGJlIG92ZXJyaWRkZW4gdXNpbmcgdGhlIGBvbkNsaWNrYCBwcm9wLlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxUb29sYmFyIG1vZGlmaWVyPXt0aGlzLnByb3BzLm1vZGlmaWVyfSA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj48QmFja0J1dHRvbiBtb2RpZmllcj17dGhpcy5wcm9wcy5tb2RpZmllcn0+QmFjazwvQmFja0J1dHRvbj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XG4gICA8L1Rvb2xiYXI+XG4gKi9cbmNsYXNzIEJhY2tCdXR0b24gZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWJhY2stYnV0dG9uJztcbiAgfVxuXG4gIF91cGRhdGVPbkNsaWNrKHByb3BzKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgaWYgKHByb3BzLm9uQ2xpY2spIHtcbiAgICAgIG5vZGUub25DbGljayA9ICgpID0+IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBub2RlLm9uQ2xpY2s7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fdXBkYXRlT25DbGljayh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLl91cGRhdGVPbkNsaWNrKHByb3BzKTtcbiAgfVxufVxuXG5CYWNrQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGJhY2sgYnV0dG9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNsaWNrXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgb25lcyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIEl0IG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgYmFjayBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tCdXR0b247XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1ib3R0b20tdG9vbGJhclxuICogQGNhdGVnb3J5IHBhZ2VcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVRvb2xiYXIgY29tcG9uZW50IHRoYXQgaXMgcG9zaXRpb25lZCBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlLlsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8Qm90dG9tVG9vbGJhciBtb2RpZmllcj1cIm1hdGVyaWFsXCI+IENvbnRlbnQgPC9Cb3R0b21Ub29sYmFyPlxuICovXG5jbGFzcyBCb3R0b21Ub29sYmFyIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1ib3R0b20tdG9vbGJhcic7XG4gIH1cbn1cblxuQm90dG9tVG9vbGJhci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSBtb2RpZmllciBuYW1lIHRvIHNwZWNpZnkgY3VzdG9tIHN0eWxlcy4gT3B0aW9uYWwuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvdHRvbVRvb2xiYXI7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1idXR0b25cbiAqIEBjYXRlZ29yeSBmb3JtXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2J1dHRvblxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIEJ1dHRvbiBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIHBsYWNlIGEgYnV0dG9uIGluIGEgdG9vbGJhciwgdXNlIGBUb29sYmFyQnV0dG9uYCBvciBgQmFja0J1dHRvbmAgaW5zdGVhZC4gV2lsbCBhdXRvbWF0aWNhbGx5IGRpc3BsYXkgYXMgYSBNYXRlcmlhbCBEZXNpZ24gYnV0dG9uIHdpdGggYSByaXBwbGUgZWZmZWN0IG9uIEFuZHJvaWQuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxCdXR0b24gbW9kaWZpZXI9XCJsYXJnZS0tY3RhXCI+XG4gKiAgIFRhcCBNZVxuICogPC9CdXR0b24+XG4gKi9cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtYnV0dG9uJztcbiAgfVxufVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgcmlwcGxlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgYnV0dG9uIGhhcyBhIHJpcHBsZSBlZmZlY3QuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNsaWNrXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtY2FyZFxuICogQGNhdGVnb3J5IHZpc3VhbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS92aXN1YWxcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXUNhcmQgY29tcG9uZW50IHRoYXQgY2FuIGJlIHVzZWQgdG8gZGlzcGxheSBjb250ZW50LlsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKlxuPENhcmQ+XG4gIDxwPlNvbWUgY29udGVudDwvcD5cbjwvQ2FyZD5cbiAqL1xuY2xhc3MgQ2FyZCBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtY2FyZCc7XG4gIH1cbn1cblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZ5IG1vZGlmaWVyIG5hbWUgdG8gc3BlY2lmeSBjdXN0b20gc3R5bGVzLiBPcHRpb25hbC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7ZmluZERPTU5vZGV9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwuanMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtY2Fyb3VzZWxcbiAqIEBjYXRlZ29yeSBjYXJvdXNlbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9jYXJvdXNlbFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIENhcm91c2VsIGNvbXBvbmVudC4gQSBjYXJvdXNlbCBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IHNldmVyYWwgaXRlbXMgaW4gdGhlIHNhbWUgc3BhY2UuXG4gKiAgICAgVGhlIGNvbXBvbmVudCBzdXBwb3J0cyBkaXNwbGF5aW5nIGNvbnRlbnQgYm90aCBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkuIFRoZSB1c2VyIGNhbiBzY3JvbGwgdGhyb3VnaCB0aGUgaXRlbXMgYnkgZHJhZ2dpbmcgYW5kIGl0IGNhbiBhbHNvIGJlIGNvbnRyb2xsZXIgcHJvZ3JhbW1hdGljYWxseS5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogICAgPENhcm91c2VsXG4gICAgICAgICAgb25Qb3N0Q2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygnb25Qb3N0Q2hhbmdlJyl9XG4gICAgICAgICAgb25PdmVyc2Nyb2xsPXsoKSA9PiBjb25zb2xlLmxvZygnb25PdmVyc2Nyb2xsJyl9XG4gICAgICAgICAgb25SZWZyZXNoPXsoKSA9PiBjb25zb2xlLmxvZygnb25SZWZyZXNoJyl9XG4gICAgICAgICAgcmVmPXsoY2Fyb3VzZWwpID0+IHsgdGhpcy5jYXJvdXNlbCA9IGNhcm91c2VsOyB9fVxuICAgICAgICAgIHN3aXBlYWJsZVxuICAgICAgICAgIG92ZXJzY3JvbGxhYmxlXG4gICAgICAgICAgYXV0b1Njcm9sbFxuICAgICAgICAgIGZ1bGxzY3JlZW5cbiAgICAgICAgICBhdXRvU2Nyb2xsUmF0aW89ezAuMn1cbiAgICAgID5cbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnZ3JheSd9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtLWxhYmVsJz5HUkFZPC9kaXY+XG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgPENhcm91c2VsSXRlbSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMwODUwNzgnfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbS1sYWJlbCc+QkxVRTwvZGl2PlxuICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICA8L0Nhcm91c2VsPlxuXG4gKi9cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKG5hbWUsIGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wc1tuYW1lXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tuYW1lXShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Qb3N0Q2hhbmdlJyk7XG4gICAgdGhpcy5vblJlZnJlc2ggPSBjYWxsYmFjay5iaW5kKHRoaXMsICdvblJlZnJlc2gnKTtcbiAgICB0aGlzLm9uT3ZlcnNjcm9sbCA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uT3ZlcnNjcm9sbCcpO1xuICB9XG5cbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWNhcm91c2VsJztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdGNoYW5nZScsIHRoaXMub25DaGFuZ2UpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncmVmcmVzaCcsIHRoaXMub25SZWZyZXNoKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ292ZXJzY3JvbGwnLCB0aGlzLm9uT3ZlcnNjcm9sbCk7XG4gICAgbm9kZS5vblN3aXBlID0gdGhpcy5wcm9wcy5vblN3aXBlIHx8IG51bGw7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCBub2RlID0gZmluZERPTU5vZGUodGhpcyk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0Y2hhbmdlJywgdGhpcy5vblBvc3RDaGFuZ2UpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVmcmVzaCcsIHRoaXMub25SZWZyZXNoKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ292ZXJzY3JvbGwnLCB0aGlzLm9uT3ZlcnNjcm9sbCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJvcHMpIHtcbiAgICBjb25zdCBub2RlID0gZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pbmRleCAhPT0gbm9kZS5nZXRBY3RpdmVJbmRleCgpKSB7XG4gICAgICBub2RlLnNldEFjdGl2ZUluZGV4KHRoaXMucHJvcHMuaW5kZXgsIHByb3BzLmFuaW1hdGlvbk9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNoaWxkcmVuLmxlbmd0aCAhPT0gcHJvcHMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICBub2RlLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblN3aXBlICE9PSBwcm9wcy5vblN3aXBlKSB7XG4gICAgICBub2RlLm9uU3dpcGUgPSB0aGlzLnByb3BzLm9uU3dpcGU7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzLCB0aGlzLnByb3BzLCB7IGluZGV4OiAnaW5pdGlhbC1pbmRleCcgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG9ucy1jYXJvdXNlbCB7Li4uYXR0cnN9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvb25zLWNhcm91c2VsPlxuICAgICk7XG4gIH1cbn1cblxuQ2Fyb3VzZWwucHJvcFR5cGVzID0ge1xuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXJlY3Rpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgZGlyZWN0aW9uIG9mIHRoZSBjYXJvdXNlbC4gQ2FuIGJlIGVpdGhlciBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIuIERlZmF1bHQgaXMgXCJob3Jpem9udGFsXCIuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBmdWxsc2NyZWVuXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSWYgdHJ1ZSwgdGhlIGNhcm91c2VsIHdpbGwgY292ZXIgdGhlIHdob2xlIHNjcmVlbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBmdWxsc2NyZWVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb3ZlcnNjcm9sbGFibGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0cnVlLCB0aGUgY2Fyb3VzZWwgd2lsbCBiZSBzY3JvbGxhYmxlIG92ZXIgdGhlIGVkZ2UuIEl0IHdpbGwgYm91bmNlIGJhY2sgd2hlbiByZWxlYXNlZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvdmVyc2Nyb2xsYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGNlbnRlcmVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSWYgdHJ1ZSwgdGhlIGNhcm91c2VsIHRoZW4gdGhlIHNlbGVjdGVkIGl0ZW0gd2lsbCBiZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYXJvdXNlbCBpbnN0ZWFkIG9mIHRoZSBiZWdpbm5pbmcuIFVzZWZ1bCBvbmx5IHdoZW4gdGhlIGl0ZW1zIGFyZSBzbWFsbGVyIHRoYW4gdGhlIGNhcm91c2VsLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGNlbnRlcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaXRlbVdpZHRoXG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1vbnMtY2Fyb3VzZWwtaXRlbSdzIHdpZHRoLiBPbmx5IHdvcmtzIHdoZW4gdGhlIGRpcmVjdGlvbiBpcyBzZXQgdG8gXCJob3Jpem9udGFsXCIuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXRlbVdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIGl0ZW1IZWlnaHRcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXW9ucy1jYXJvdXNlbC1pdGVtJ3MgaGVpZ2h0LiBPbmx5IHdvcmtzIHdoZW4gdGhlIGRpcmVjdGlvbiBpcyBzZXQgdG8gXCJ2ZXJ0aWNhbFwiLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogQG5hbWUgYXV0b1Njcm9sbFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRydWUsIHRoZSBjYXJvdXNlbCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgc2Nyb2xsZWQgdG8gdGhlIGNsb3Nlc3QgaXRlbSBib3JkZXIgd2hlbiByZWxlYXNlZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhdXRvU2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgYXV0b1Njcm9sbFJhdGlvXG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1BIG51bWJlciBiZXR3ZWVuIDAuMCBhbmQgMS4wIHRoYXQgc3BlY2lmaWVzIGhvdyBtdWNoIHRoZSB1c2VyIG11c3QgZHJhZyB0aGUgY2Fyb3VzZWwgaW4gb3JkZXIgZm9yIGl0IHRvIGF1dG8gc2Nyb2xsIHRvIHRoZSBuZXh0IGl0ZW0uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYXV0b1Njcm9sbFJhdGlvOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZWFibGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0cnVlLCB0aGUgY2Fyb3VzZWwgY2FuIGJlIHNjcm9sbGVkIGJ5IGRyYWcgb3Igc3dpcGUuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3dpcGVhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0cnVlLCB0aGUgY2Fyb3VzZWwgd2lsbCBiZSBkaXNhYmxlZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGluZGV4XG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBpbmRleCBvZiB0aGUgb25zLWNhcm91c2VsLWl0ZW0gdG8gc2hvdy4gRGVmYXVsdCBpcyAwLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhdXRvUmVmcmVzaFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVdoZW4gdGhpcyBhdHRyaWJ1dGUgaXMgc2V0IHRoZSBjYXJvdXNlbCB3aWxsIGF1dG9tYXRpY2FsbHkgcmVmcmVzaCB3aGVuIHRoZSBudW1iZXIgb2YgY2hpbGQgbm9kZXMgY2hhbmdlLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGF1dG9SZWZyZXNoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0Q2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIHRoZSBjdXJyZW50IGNhcm91c2VsIGl0ZW0gaGFzIGNoYW5nZWQuICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblJlZnJlc2hcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIHdoZW4gdGhlIGNhcm91c2VsIGhhcyBiZWVuIHJlZnJlc2hlZC4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25SZWZyZXNoOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25PdmVyc2Nyb2xsXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCB3aGVuIHRoZSBjYXJvdXNlbCBoYXMgYmVlbiBvdmVyc2Nyb2xsZWQuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uT3ZlcnNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uU3dpcGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSG9vayBjYWxsZWQgd2hlbmV2ZXIgdGhlIHVzZXIgc2xpZGVzIHRoZSBjYXJvdXNlbC4gSXQgZ2V0cyBhIGRlY2ltYWwgaW5kZXggYW5kIGFuIGFuaW1hdGlvbk9wdGlvbnMgb2JqZWN0IGFzIGFyZ3VtZW50cy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblN3aXBlOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWNhcm91c2VsLWl0ZW1cbiAqIEBjYXRlZ29yeSBjYXJvdXNlbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9jYXJvdXNlbFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIENhcm91c2VsIGl0ZW0gY29tcG9uZW50LiBVc2VkIGFzIGEgY2hpbGQgb2YgdGhlIGA8b25zLWNhcm91c2VsPmAgZWxlbWVudC5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuKiAgPENhcm91c2VsIHN3aXBlYWJsZSBvdmVyc2Nyb2xsYWJsZSBhdXRvU2Nyb2xsIGZ1bGxzY3JlZW4gPlxuICAgICA8Q2Fyb3VzZWxJdGVtIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnZ3JheSd9fT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbS1sYWJlbCc+R1JBWTwvZGl2PlxuICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgPENhcm91c2VsSXRlbSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMwODUwNzgnfX0+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0tbGFiZWwnPkJMVUU8L2Rpdj5cbiAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICA8L0Nhcm91c2VsPlxuICovXG5jbGFzcyBDYXJvdXNlbEl0ZW0gZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWNhcm91c2VsLWl0ZW0nO1xuICB9XG59XG5cbkNhcm91c2VsSXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZ5IG1vZGlmaWVyIG5hbWUgdG8gc3BlY2lmeSBjdXN0b20gc3R5bGVzLiBPcHRpb25hbC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbEl0ZW07XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbmNsYXNzIEJhc2VJbnB1dCBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBnZXQgRVZFTlRfVFlQRVMoKSB7XG4gICAgcmV0dXJuIFsnY2hhbmdlJywgJ2lucHV0J107XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlLnZhbHVlID0gdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jaGVja2VkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbm9kZS5jaGVja2VkID0gdGhpcy5wcm9wcy5jaGVja2VkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5kZWZhdWx0Q2hlY2tlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlLmNoZWNrZWQgPSB0aGlzLnByb3BzLmRlZmF1bHRDaGVja2VkO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLkVWRU5UX1RZUEVTLmZvckVhY2goZXZlbnRUeXBlID0+IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHRoaXMub25DaGFuZ2UpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB0aGlzLkVWRU5UX1RZUEVTLmZvckVhY2goZXZlbnRUeXBlID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHRoaXMub25DaGFuZ2UpKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRVcGRhdGUoKTtcblxuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbm9kZS52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgbm9kZS52YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNoZWNrZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBub2RlLmNoZWNrZWQgPSB0aGlzLnByb3BzLmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMuX2dldERvbU5vZGVOYW1lKCksIFV0aWwuZ2V0QXR0cnModGhpcywgcHJvcHMpKTtcbiAgfVxufVxuXG5CYXNlSW5wdXQucHJvcFR5cGVzID0ge1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKVxuICBdKSxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSlcbiAgXSksXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmbG9hdDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VJbnB1dDtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUlucHV0IGZyb20gJy4vQmFzZUlucHV0LmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1jaGVja2JveFxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvY2hlY2tib3hcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogIEEgY2hlY2tib3ggZWxlbWVudC4gVGhlIGNvbXBvbmVudCB3aWxsIGF1dG9tYXRpY2FsbHkgcmVuZGVyIGFzIGEgTWF0ZXJpYWwgRGVzaWduIGNoZWNrYm94IG9uIEFuZHJvaWQgZGV2aWNlcy5cbiAqXG4gKiAgTW9zdCBhdHRyaWJ1dGVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGEgbm9ybWFsIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+YCBlbGVtZW50IGNhbiBhbHNvIGJlIHVzZWQgb24gdGhlIGA8Q2hlY2tib3g+YCBjb21wb25lbnQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPENoZWNrYm94XG4gKiAgIG9uQ2hhbmdlPXtldmVudCA9PiB7IHRoaXMuc2V0U3RhdGUoe2NoZWNrZWQ6IGV2ZW50LnRhcmdldC5jaGVja2VkfSl9IH1cbiAqICAgbW9kaWZpZXI9J21hdGVyaWFsJyAvPlxuICovXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEJhc2VJbnB1dCB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1jaGVja2JveCc7XG4gIH1cblxuICBnZXQgRVZFTlRfVFlQRVMoKSB7XG4gICAgcmV0dXJuIFsnY2hhbmdlJ107XG4gIH1cbn1cblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgY2hlY2tib3guWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgY2hlY2tib3ggaXMgZGlzYWJsZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgd2hlbiB0aGUgY2hlY2tib3ggc3RhdGUgY2hhbmdlcy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZhbHVlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVmFsdWUgb2YgdGhlIGNoZWNrYm94LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBjaGVja2VkXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29udHJvbHMgdGhlIHN0YXRlIG9mIHRoZSBjaGVja2JveCAoY29udHJvbGxlZCkuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGNoZWNrZWRcbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1EZWZpbmVkIHRoZSBzdGF0ZSBvZiB0aGUgcmFkaW8gYnV0dG9uIGF0IGZpcnN0IHJlbmRlciBmb3IgdW5jb250cm9sbGVkIGlucHV0cy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlucHV0SWRcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIFwiaWRcIiBhdHRyaWJ1dGUgb2YgdGhlIGlubmVyIGA8aW5wdXQ+YCBlbGVtZW50LiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHVzaW5nIDxsYWJlbCBmb3I9XCIuLi5cIj4gZWxlbWVudHMuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5wdXRJZDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1jb2xcbiAqIEBjYXRlZ29yeSBncmlkXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqIFJlcHJlc2VudHMgYSBjb2x1bW4gaW4gdGhlIGdyaWQgc3lzdGVtLiBVc2Ugd2l0aCBgPG9ucy1yb3c+YCB0byBsYXlvdXQgY29tcG9uZW50cy5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIDxSb3c+XG4gKiAgIDxDb2wgd2lkdGg9ezUwfT5cbiAgKiAgIDxvbnMtaWNvbiBpY29uPVwiZmEtdHdpdHRlclwiPjwvb25zLWljb24+XG4gKiAgIDwvQ29sPlxuICogICA8Q29sPlRleHQ8L0NvbD5cbiAqIDwvUm93PlxuICovXG5jbGFzcyBDb2wgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWNvbCc7XG4gIH1cbn1cblxuQ29sLnByb3BUeXBlcyA9IHtcblxuICAvKipcbiAgKiBAbmFtZSB2ZXJ0aWNhbEFsaWduXG4gICogQHR5cGUge1N0cmluZ31cbiAgKiBAZGVzY3JpcHRpb25cbiAgKiAgIFtlbl1TaG9ydCBoYW5kIGF0dHJpYnV0ZSBmb3IgYWxpZ25pbmcgdmVydGljYWxseS4gVmFsaWQgdmFsdWVzIGFyZSB0b3AsIGJvdHRvbSwgYW5kIGNlbnRlci5bL2VuXVxuICAqICAgW2phXVsvamFdXG4gICovXG4gIHZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nLCAnY2VudGVyJ10pLFxuXG4gIC8qKlxuICAqIEBuYW1lIHdpZHRoXG4gICogQHR5cGUge1N0cmluZ31cbiAgKiBAZGVzY3JpcHRpb25cbiAgKiAgIFtlbl1UaGUgd2lkdGggb2YgdGhlIGNvbHVtbi4gVmFsaWQgdmFsdWVzIGFyZSBjc3Mgd2lkdGggdmFsdWVzIChcIjEwJVwiLCA1MCkuWy9lbl1cbiAgKiAgIFtqYV1bL2phXVxuICAqL1xuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2w7XG4iLCJpbXBvcnQgQmFzZURpYWxvZyBmcm9tICcuL0Jhc2VEaWFsb2cuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWRpYWxvZ1xuICogQGNhdGVnb3J5IGRpYWxvZ1xuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9kaWFsb2dcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSAgRGlhbG9nIHRoYXQgaXMgZGlzcGxheWVkIG9uIHRvcCBvZiBjdXJyZW50IHNjcmVlbi4gQXMgb3Bwb3NlZCB0byB0aGUgQWxlcnREaWFsb2cgZWxlbWVudCwgdGhpcyBjb21wb25lbnQgY2FuIGNvbnRhaW4gYW55IGtpbmQgb2YgY29udGVudC4gIFRoZSBkaWFsb2cgaXMgdXNlZnVsIGZvciBkaXNwbGF5aW5nIG1lbnVzLCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIG9yIHRvIGFzayB0aGUgdXNlciB0byBtYWtlIGEgZGVjaXNpb24uICBJdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgZGlzcGxheWVkIGFzIE1hdGVyaWFsIERlc2lnbiB3aGVuIHJ1bm5pbmcgb24gYW4gQW5kcm9pZCBkZXZpY2UuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgIDxEaWFsb2cgb25DYW5jZWw9e3RoaXMub25DYW5jZWx9XG4gICAgIGlzT3Blbj17dGhpcy5wcm9wcy5pc09wZW59XG4gICAgIHN0eWxlPXt7aGVpZ2h0OiAyNTB9fSAgY2FuY2VsYWJsZT5cbiAgICAgPFBhZ2U+XG4gICAgICAgUGFnZSBDb250ZW50XG4gICAgIDwvUGFnZT5cbiAgICA8L0RpYWxvZz5cblxuICovXG5jbGFzcyBEaWFsb2cgZXh0ZW5kcyBCYXNlRGlhbG9nIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWRpYWxvZyc7XG4gIH1cbn1cblxuRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2FuY2VsXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBvbmx5IGlmIGlzQ2FuY2VsYWJsZSBpcyB0cnVlLiBJdCB3aWxsIGJlIGNhbGxlZCBhZnRlciB0YXBwaW5nIHRoZSBiYWNrZ3JvdW5kIG9yIGJ5IHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbiBvbiBBbmRyb2lkIGRldmljZXMuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzT3BlblxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCB0cnVlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBvcGVuIGFuZCBzaG93bi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQG5hbWUgaXNDYW5jZWxhYmxlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjYW5jZWxhYmxlIG9yIG5vdC5cbiAgICogIEEgY2FuY2VsYWJsZSBkaWFsb2cgd2lsbCBjYWxsIG9uQ2FuY2VsICB3aGVuIHRhcHBpbmcgdGhlIGJhY2tncm91bmQgb3Igb3IgIHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbiBvbiBBbmRyb2lkIGRldmljZXNcbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzQ2FuY2VsYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzRGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgVGhlIGFuaW1hdGlvbiB1c2VkIHdoZW4gc2hvd2luZyBhbmQgaGlkaW5nIHRoZSBkaWFsb2cuIENhbiBiZSBlaXRoZXIgYFwibm9uZVwiYCBvciBgXCJkZWZhdWx0XCJgLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBkaWFsb2cuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1hc2tDb2xvclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNvbG9yIG9mIHRoZSBiYWNrZ3JvdW5kIG1hc2suIERlZmF1bHQgaXMgXCJyZ2JhKDAsIDAsIDAsIDAuMilcIlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1hc2tDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuICBge2R1cmF0aW9uOiAwLjIsIGRlbGF5OiAwLjQsIHRpbWluZzogJ2Vhc2UtaW4nfWAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVTaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBqdXN0IGJlZm9yZSB0aGUgYWxlcnQgZGlhbG9nIGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGFsZXJ0IGRpYWxvZyBpcyBkaXNwbGF5ZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RTaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVIaWRlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBiZWZvcmUgdGhlIGFsZXJ0IGRpYWxvZyBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVIaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0SGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGFsZXJ0IGRpYWxvZyBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0SGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRGV2aWNlQmFja0J1dHRvblxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXN0b20gaGFuZGxlciBmb3IgZGV2aWNlIGJhY2sgYnV0dG9uLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1mYWJcbiAqIEBjYXRlZ29yeSBmb3JtXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2ZhYlxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFRoZSBGbG9hdGluZyBhY3Rpb24gYnV0dG9uIGlzIGEgY2lyY3VsYXIgYnV0dG9uIGRlZmluZWQgaW4gdGhlIFtNYXRlcmlhbCBEZXNpZ24gc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2J1dHRvbnMtZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi5odG1sKS4gVGhleSBhcmUgb2Z0ZW4gdXNlZCB0byBwcm9tb3RlIHRoZSBwcmltYXJ5IGFjdGlvbiBvZiB0aGUgYXBwLlxuICogICAgIEl0IGNhbiBiZSBkaXNwbGF5ZWQgZWl0aGVyIGFzIGFuIGlubGluZSBlbGVtZW50IG9yIGluIG9uZSBvZiB0aGUgY29ybmVycy4gTm9ybWFsbHkgaXQgd2lsbCBiZSBwb3NpdGlvbmVkIGluIHRoZSBsb3dlciByaWdodCBjb3JuZXIgb2YgdGhlIHNjcmVlbi5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFNwZWVkRGlhbCBkaXNhYmxlZD17ZmFsc2V9IGRpcmVjdGlvbj0ncmlnaHQnIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCd0ZXN0MScpfSBwb3NpdGlvbj0nbGVmdCBib3R0b20nPlxuICAgICA8RmFiPlxuICAgICAgIDxJY29uIGljb249J2ZhLXR3aXR0ZXInIHNpemU9ezI2fSBmaXhlZFdpZHRoPXtmYWxzZX0gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319IC8+XG4gICAgIDwvRmFiPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgQScpfT4gQSA8L1NwZWVkRGlhbEl0ZW0+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBCJyl9PiBCIDwvU3BlZWREaWFsSXRlbT5cbiAgICAgPFNwZWVkRGlhbEl0ZW0gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3NwZWVkIEMnKX0+IEMgPC9TcGVlZERpYWxJdGVtPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgRCcpfT4gRCA8L1NwZWVkRGlhbEl0ZW0+XG4gICA8L1NwZWVkRGlhbD5cbiAgKi9cbmNsYXNzIEZhYiBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtZmFiJztcbiAgfVxufVxuXG5GYWIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSByaXBwbGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0cnVlLCAgdGhlIGJ1dHRvbiB3aWxsIGhhdmUgYSByaXBwbGUgZWZmZWN0IHdoZW4gdGFwcGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHBvc2l0aW9uXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIHBvc2l0aW9uIG9mIHRoZSBidXR0b24uIFNob3VsZCBiZSBhIHN0cmluZyBsaWtlIGBcImJvdHRvbSByaWdodFwiYCBvciBgXCJ0b3AgbGVmdFwiYC4gSWYgdGhpcyBhdHRyaWJ1dGUgaXMgbm90IGRlZmluZWQgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYXMgYW4gaW5saW5lIGVsZW1lbnQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNsaWNrXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIG9uZXMgdGhlIGJ1dHRvbiBpcyBjbGlja2VkLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFiO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1pY29uXG4gKiBAY2F0ZWdvcnkgdmlzdWFsXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2ljb25cbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogRGlzcGxheXMgYW4gaWNvbi4gVGhlIGZvbGxvd2luZyBpY29uIHN1aXRlcyBhcmUgYXZhaWxhYmxlOlxuICogICAqICBbRm9udCBBd2Vzb21lXShodHRwczovL2ZvcnRhd2Vzb21lLmdpdGh1Yi5pby9Gb250LUF3ZXNvbWUvKVxuICogICAqICBbSW9uaWNvbnNdKGh0dHA6Ly9pb25pY29ucy5jb20vKVxuICogICAqICBbTWF0ZXJpYWwgRGVzaWduIEljb25pYyBGb250XShodHRwOi8vemF2b2xva2xvbS5naXRodWIuaW8vbWF0ZXJpYWwtZGVzaWduLWljb25pYy1mb250LylcbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gIDxJY29uXG4gICAgc2l6ZT17e2RlZmF1bHQ6IDMyLCBtYXRlcmlhbDogNDB9fVxuICAgIGljb249e3tkZWZhdWx0OiAnaW9uLW5hdmljb24nLCBtYXRlcmlhbDogJ21kLW1lbnUnfX1cbiAgLz5cbiovXG5jbGFzcyBJY29uIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1pY29uJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGljb24sIHNpemUsIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhdHRycyA9IFV0aWwuZ2V0QXR0cnModGhpcywgb3RoZXJzKTtcblxuICAgIGlmIChpY29uKSB7XG4gICAgICBpZiAoKHR5cGVvZiBpY29uKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYXR0cnMuaWNvbiA9IGljb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoaWNvbikuZmlsdGVyKChhKSA9PiBhICE9PSAnZGVmYXVsdCcpO1xuICAgICAgICBjb25zdCBpbm5lclN0cmluZyA9IGtleXMubWFwKChrZXkpID0+IGtleSArICc6JyArIGljb25ba2V5XSArICcnKTtcbiAgICAgICAgYXR0cnMuaWNvbiA9IGljb24uZGVmYXVsdCArICcsICcgKyBpbm5lclN0cmluZy5qb2luKCcsJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpemUpIHtcbiAgICAgIGlmICgodHlwZW9mIHNpemUpID09PSAnbnVtYmVyJykge1xuICAgICAgICBhdHRycy5zaXplID0gYCR7c2l6ZX1weGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc2l6ZSkuZmlsdGVyKChhKSA9PiBhICE9PSAnZGVmYXVsdCcpO1xuICAgICAgICBjb25zdCBpbm5lclN0cmluZyA9IGtleXMubWFwKChrZXkpID0+IGtleSArICc6JyArIHNpemVba2V5XSArICdweCcpO1xuICAgICAgICBhdHRycy5zaXplID0gc2l6ZS5kZWZhdWx0ICsgJ3B4LCAnICsgaW5uZXJTdHJpbmcuam9pbignLCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMuX2dldERvbU5vZGVOYW1lKCksIGF0dHJzLCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufVxuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGljb24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGljb25cbiAgICogQHR5cGUgJ29iamVjdCBvciBzdHJpbmcnXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGFuIG9iamVjdC4gSWYgaXQgaXMgYW4gc3RyaW5nLCBpdCBpcyBzZXQgdG8gYW4gc3BlY2lmaWMgaWNvbiBsaWtlICdpb25zLW5hdmljb24nLiBJZiBpdCBpcyBhbiBvYmplY3QsIGl0IHJlcHJlc2VudHMgYSBkaWN0aW9uYXJ5IG9mIHRoZSBpY29ucyBkZXBlbmRpbmcgb24gdGhlIG1vZGlmaWVyIGUuZy4gICBge3tkZWZhdWx0OiAnaW9uLW5hdmljb24nLCBtYXRlcmlhbDogJ21kLW1lbnUnfX1gIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5zdHJpbmcpXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzaXplXG4gICAqIEB0eXBlICdvYmplY3Qgb3IgbnVtYmVyJ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gY2FuIGJlIGVpdGhlciBhIG51bWJlciBvciBhbiBvYmplY3QuIElmIGl0IGlzIGFuIG51bWJlciwgaXQgIHNwZWNpZmllcyB0aGUgaWNvbiBzaXplIHdpdGggYSBudW1iZXIgaW4gcGl4ZWxzLiBJZiBpdCBpcyBhbiBvYmplY3QsIGl0IHJlcHJlc2VudHMgYSBkaWN0aW9uYXJ5IG9mIHRoZSBpY29uIHNpemVzIGRlcGVuZGluZyBvbiB0aGUgbW9kaWZpZXIgZS5nLiAgIGB7e2RlZmF1bHQ6IDIwLCBtYXRlcmlhbDogMTh9fWAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLm51bWJlcilcbiAgXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJvdGF0ZVxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIE51bWJlciBvZiBkZWdyZWVzIHRvIHJvdGF0ZSB0aGUgaWNvbi4gVmFsaWQgdmFsdWVzIGFyZSA5MCwgMTgwIGFuZCAyNzAuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJvdGF0ZTogUHJvcFR5cGVzLm9uZU9mKFswLCA5MCwgMTgwLCAyNzBdKSxcblxuICAvKipcbiAgICogQG5hbWUgZml4ZWRXaWR0aFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBbZW5dIFdoZW4gdXNlZCBpbiBhIGxpc3QsIHlvdSB3YW50IHRoZSBpY29ucyB0byBoYXZlIHRoZSBzYW1lIHdpZHRoIHNvIHRoYXQgdGhleSBhbGlnbiB2ZXJ0aWNhbGx5IGJ5IGRlZmluaW5nIHRoaXMgYXR0cmlidXRlLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBmaXhlZFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgc3BpblxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBbZW5dIFNwZWNpZnkgd2hldGhlciB0aGUgaWNvbiBzaG91bGQgYmUgc3Bpbm5pbmcuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHNwaW46IFByb3BUeXBlcy5ib29sXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VJbnB1dCBmcm9tICcuL0Jhc2VJbnB1dC5qc3gnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtaW5wdXRcbiAqIEBjYXRlZ29yeSBmb3JtXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2lucHV0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqIEFuIGlucHV0IGVsZW1lbnQuIFRoZSBgdHlwZWAgYXR0cmlidXRlIGNhbiBiZSB1c2VkIHRvIGNoYW5nZSB0aGUgaW5wdXQgdHlwZS4gQWxsIHRleHQgaW5wdXQgdHlwZXMgYXMgd2VsbCBhcyBgY2hlY2tib3hgIGFuZCBgcmFkaW9gIGFyZSBzdXBwb3J0ZWQuIFRoZSBjb21wb25lbnQgd2lsbCBhdXRvbWF0aWNhbGx5IHJlbmRlciBhcyBhIE1hdGVyaWFsIERlc2lnbiBpbnB1dCBvbiBBbmRyb2lkIGRldmljZXMuIE1vc3QgYXR0cmlidXRlcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBhIG5vcm1hbCBgPGlucHV0PmAgZWxlbWVudCBjYW4gYWxzbyBiZSB1c2VkIG9uIHRoZSBgPG9ucy1pbnB1dD5gIGVsZW1lbnQuLlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8SW5wdXRcbiAqICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH0gZmxvYXRcbiAqICAgb25DaGFuZ2U9eyhldmVudCkgPT4geyB0aGlzLnNldFN0YXRlKHt0ZXh0OiBldmVudC50YXJnZXQudmFsdWV9KX0gfVxuICogICBtb2RpZmllcj0nbWF0ZXJpYWwnXG4gKiAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgLz5cbiAqL1xuY2xhc3MgSW5wdXQgZXh0ZW5kcyBCYXNlSW5wdXQge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtaW5wdXQnO1xuICB9XG59XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGlucHV0LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZmllcyB3aGV0aGVyIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlYWRPbmx5XG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIHJlYWQtb25seS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCB3aGVuIHRoZSB0ZXh0IG9mIHRoZSBpbnB1dCBjaGFuZ2VzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgdmFsdWVcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNvbnRlbnQgb2YgdGhlIGlucHV0IChjb250cm9sbGVkKS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKVxuICBdKSxcblxuICAvKipcbiAgICogQG5hbWUgZGVmYXVsdFZhbHVlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Db250ZW50IG9mIHRoZSBpbnB1dCBhdCBmaXJzdCByZW5kZXIgKHVuY29udHJvbGxlZCkuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBwbGFjZWhvZGVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gUGxhY2Vob2xkZXIgdGV4dC4gSW4gTWF0ZXJpYWwgRGVzaWduIHRoaXMgcGxhY2Vob2xkZXIgd2lsbCBiZSBhIGZsb2F0aW5nIGxhYmVsLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgdHlwZVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICAgIFNwZWNpZnkgdGhlIGlucHV0IHR5cGUuIFRoaXMgaXMgdGhlIHNhbWUgYXMgdGhlIFwidHlwZVwiIGF0dHJpYnV0ZSBmb3Igbm9ybWFsIGlucHV0cy4gSXQgZXhwZWN0cyBzdHJpY3QgdGV4dCB0eXBlcyBzdWNoIGFzIGB0ZXh0YCwgYHBhc3N3b3JkYCwgZXRjLiBGb3IgY2hlY2tib3gsIHJhZGlvIGJ1dHRvbiwgc2VsZWN0IG9yIHJhbmdlLCBwbGVhc2UgaGF2ZSBhIGxvb2sgYXQgdGhlIGNvcnJlc3BvbmRpbmcgY29tcG9uZW50cy5cbiAgICpcbiAgICogICAgUGxlYXNlIHRha2UgYSBsb29rIGF0IFtNRE5dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNhdHRyLXR5cGUpIGZvciBhbiBleGhhdXN0aXZlIGxpc3Qgb2YgcG9zc2libGUgdmFsdWVzLiBEZXBlbmRpbmcgb24gdGhlIHBsYXRmb3JtIGFuZCBicm93c2VyIHZlcnNpb24gc29tZSBvZiB0aGVzZSBtaWdodCBub3Qgd29yay5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlucHV0SWRcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSAgU3BlY2lmeSB0aGUgXCJpZFwiIGF0dHJpYnV0ZSBvZiB0aGUgaW5uZXIgYDxpbnB1dD5gIGVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIHdoZW4gdXNpbmcgPGxhYmVsIGZvcj1cIi4uLlwiPiBlbGVtZW50cyBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbnB1dElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBmbG9hdFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSAgSWYgdGhpcyBhdHRyaWJ1dGUgaXMgcHJlc2VudCwgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgYW5pbWF0ZWQgaW4gTWF0ZXJpYWwgRGVzaWduLiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZmxvYXQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWxhenktcmVwZWF0XG4gKiBAY2F0ZWdvcnkgbGlzdFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9sYXp5LWxpc3RcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSBVc2luZyB0aGlzIGNvbXBvbmVudCBhIGxpc3Qgd2l0aCBtaWxsaW9ucyBvZiBpdGVtcyBjYW4gYmUgcmVuZGVyZWQgd2l0aG91dCBhIGRyb3AgaW4gcGVyZm9ybWFuY2UuXG4gKiAgICAgSXQgZG9lcyB0aGF0IGJ5IFwibGF6aWx5XCIgbG9hZGluZyBlbGVtZW50cyBpbnRvIHRoZSBET00gd2hlbiB0aGV5IGNvbWUgaW50byB2aWV3IGFuZFxuICogICAgIHJlbW92aW5nIGl0ZW1zIGZyb20gdGhlIERPTSB3aGVuIHRoZXkgYXJlIG5vdCB2aXNpYmxlLlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKlxuICByZW5kZXJSb3coaW5kZXgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RJdGVtIGtleT17aW5kZXh9PlxuICAgICAgICB7J0l0ZW0gJyArIChpbmRleCArIDEpfVxuICAgICAgPC9MaXN0SXRlbT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSByZW5kZXJUb29sYmFyPXsoKSA9PiA8TXlUb29sYmFyIHRpdGxlPSdMYXp5TGlzdCcgLz59ID5cbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogMTAwfX0+XG4gICAgICAgICAgPExhenlMaXN0XG4gICAgICAgICAgICBsZW5ndGg9ezEwMDB9XG4gICAgICAgICAgICByZW5kZXJSb3c9eygpID0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICB7J0l0ZW0gJyArIChpbmRleCArIDEpfVxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsY3VsYXRlSXRlbUhlaWdodD17KCkgPT4gNDR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuICovXG5jbGFzcyBMYXp5TGlzdCBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuc3RhdGUgPSB7Y2hpbGRyZW46IFtdfTtcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGUocHJvcHMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLl9sYXp5UmVwZWF0LmRlbGVnYXRlID0ge1xuICAgICAgY2FsY3VsYXRlSXRlbUhlaWdodDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLmNhbGN1bGF0ZUl0ZW1IZWlnaHQoaW5kZXgpO1xuICAgICAgfSxcbiAgICAgIC8vIF9yZW5kZXI6IGZ1bmN0aW9uKGl0ZW1zLCBuZXdIZWlnaHQpIHtcbiAgICAgIF9yZW5kZXI6IGZ1bmN0aW9uKHN0YXJ0LCBsaW1pdCwgdXBkYXRlVG9wKSB7XG4gICAgICAgIHZhciBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHMucmVuZGVyUm93KGluZGV4KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBlbCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsaW1pdDsgaSsrKSB7XG4gICAgICAgICAgZWwucHVzaChjcmVhdGVFbGVtZW50KGkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe2NoaWxkcmVuOiBlbH0sIHVwZGF0ZVRvcCk7XG4gICAgICB9LFxuICAgICAgY291bnRJdGVtczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICB2YXIgaGVscFByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLm5ld1Byb3BzXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZShoZWxwUHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG9ucy1saXN0IHsuLi50aGlzLnByb3BzfSByZWY9eyhsaXN0KSA9PiB7IHRoaXMuX2xpc3QgPSBsaXN0OyB9fVxuICAgICAgICBjbGFzcz0nbGlzdCcgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodH19XG4gICAgICA+XG4gICAgICAgIDxvbnMtbGF6eS1yZXBlYXQgcmVmPXsobGF6eVJlcGVhdCkgPT4geyB0aGlzLl9sYXp5UmVwZWF0ID0gbGF6eVJlcGVhdDsgfX0gLz5cbiAgICAgICAge3RoaXMuc3RhdGUuY2hpbGRyZW59XG4gICAgICA8L29ucy1saXN0PlxuICAgICk7XG4gIH1cbn1cblxuTGF6eUxpc3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgbGF6eSBsaXN0LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBsZW5ndGhcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBsZW5ndGggb2YgdGhlIGxpc3QuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlclJvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gQSBmdW5jdGlvbiBnaXZlbiB0aGUgaW5kZXggb2YgdGhlIHRvIGRpc3BsYXkgcm93LCByZW5kZXJzIGl0LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlclJvdzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQG5hbWUgY2FsY3VsYXRlSXRlbUhlaWdodFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gQSBmdW5jdGlvbiBnaXZlbiB0aGUgaW5kZXggb2YgdGhlIHRvIHJvdywgcmV0dXJucyB0aGUgaGVpZ2h0IG9mIGl0LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGNhbGN1bGF0ZUl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhenlMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWxpc3RcbiAqIEBjYXRlZ29yeSBsaXN0XG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2xpc3RcbiAqIEBkZXNjcmlwdGlvblxuICogICBbZW5dXG4gKiAgICAgQ29tcG9uZW50IGZvciByZXByZXNlbnRpbmcgYSBsaXN0LiBJdCB0YWtlcyBhbiBhcnJheSBjYWxsZWQgZGF0YXNvdXJjZSBhbmQgY2FsbHMgcmVuZGVyUm93KHJvdywgaW5kZXgpIGZvciBldmVyeSByb3cuICBGdXJ0aGVybW9yZSwgdGhlIGhlYWRlciBhbmQgdGhlIGZvb3RlciBjYW4gYmUgc3BlY2lmaWVkIHdpdGggYHJlbmRlclJvd2AgYW5kIGByZW5kZXJIZWFkZXJgIHJlc3BlY3RpdmVseS4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgPExpc3RcbiAgICBkYXRhU291cmNlPXtbJ1JvdyAxJywgJ1JvdyAyJ119XG4gICAgcmVuZGVySGVhZGVyPXt0aGlzLnJlbmRlckhlYWRlcn1cbiAgICByZW5kZXJSb3c9eyhyb3csIGlkeCkgPT4gKFxuICAgICAgPExpc3RJdGVtIG1vZGlmaWVyPXtpZHggPT09IHRoaXMuc3RhdGUuZGF0YS5sZW5ndGggLSAxID8gJ2xvbmdkaXZpZGVyJyA6IG51bGx9PlxuICAgICAge3Jvd31cbiAgPEJ1dHRvbiBtb2RpZmllcj1cInF1aWV0XCIgb25DbGljaz17dGhpcy5yZW1vdmUuYmluZCh0aGlzLCBpZHgpfT5SZW1vdmU8L0J1dHRvbj5cbiAgPC9MaXN0SXRlbT5cbiAgKX1cbiAgcmVuZGVyRm9vdGVyPXt0aGlzLnJlbmRlckZvb3Rlcn1cbiAgLz5cbiAqL1xuY2xhc3MgTGlzdCBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzKTtcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZS5tYXAoKGRhdGEsIGlkeCkgPT4gdGhpcy5wcm9wcy5yZW5kZXJSb3coZGF0YSwgaWR4KSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG9ucy1saXN0IHsgLi4uYXR0cnMgfSByZWY9eyhsaXN0KSA9PiB7IHRoaXMuX2xpc3QgPSBsaXN0OyB9fT5cbiAgICAgICAge3RoaXMucHJvcHMucmVuZGVySGVhZGVyKCl9XG4gICAgICAgIHtwYWdlc31cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIHt0aGlzLnByb3BzLnJlbmRlckZvb3RlcigpfVxuICAgICAgPC9vbnMtbGlzdD5cbiAgICApO1xuICB9XG59XG5cbkxpc3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmeSBtb2RpZmllciBuYW1lIHRvIHNwZWNpZnkgY3VzdG9tIHN0eWxlcy5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkYXRhU291cmNlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogICAgU291cmNlIG9mIHRoZSBsaXN0IGRhdGEuIFNob3VsZCBiZSBhbiBhcnJheS5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRhdGFTb3VyY2U6IFByb3BUeXBlcy5hcnJheSxcblxuICAvKipcbiAgICogQG5hbWUgcmVuZGVyUm93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgRnVuY3Rpb24gdG8gc3BlY2lmeSB0aGUgcmVuZGVyaW5nIGZ1bmN0aW9uIGZvciBldmVyeSBlbGVtZW50IGluXG4gICAqICBpbiB0aGUgZGF0YVNvdXJjZS5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlclJvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlckhlYWRlclxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEZ1bmN0aW9uIHRvIHNwZWNpZnkgdGhlIHJlbmRlcmluZyBmdW5jdGlvbiBmb3IgdGhlIGhlYWRlclxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmVuZGVySGVhZGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgcmVuZGVyRm9vdGVyXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgRnVuY3Rpb24gdG8gc3BlY2lmeSB0aGUgcmVuZGVyaW5nIGZ1bmN0aW9uIGZvciB0aGUgZm9vdGVyXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByZW5kZXJGb290ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YVNvdXJjZTogW10sXG4gIHJlbmRlclJvdzogKCkgPT4gbnVsbCxcbiAgcmVuZGVySGVhZGVyOiAoKSA9PiBudWxsLFxuICByZW5kZXJGb290ZXI6ICgpID0+IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWxpc3QtaGVhZGVyXG4gKiBAY2F0ZWdvcnkgbGlzdFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9saXN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gSGVhZGVyIGVsZW1lbnQgZm9yIGxpc3QgaXRlbXMuIE11c3QgYmUgcHV0IGluc2lkZSBvbnMtbGlzdCBjb21wb25lbnQuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgIDxMaXN0XG4gICAgIGRhdGFTb3VyY2U9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgcmVuZGVySGVhZGVyPXsoKSA9PlxuICAgICAgICA8TGlzdEhlYWRlciBzdHlsZT17e2ZvbnRTaXplOiAxNX19IGNsYXNzTmFtZT1cInRlc3RDbGFzc1wiPiBIZWFkZXIgVGV4dCA8L0xpc3RIZWFkZXI+IH1cbiAgICByZW5kZXJSb3c9eyhyb3csIGlkeCkgPT4gKFxuICAgICAgPExpc3RJdGVtID4ge3Jvd30gPC9MaXN0SXRlbT5cbiAgICApfVxuICAvPlxuICovXG5jbGFzcyBMaXN0SGVhZGVyIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1saXN0LWhlYWRlcic7XG4gIH1cbn1cblxuTGlzdEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZ5IG1vZGlmaWVyIG5hbWUgdG8gc3BlY2lmeSBjdXN0b20gc3R5bGVzLiBPcHRpb25hbC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0SGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1saXN0LWl0ZW1cbiAqIEBjYXRlZ29yeSBsaXN0XG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2xpc3RcbiAqIEBkZXNjcmlwdGlvblxuICogICBbZW5dXG4gKiAgIENvbXBvbmVudCB0aGF0IHJlcHJlc2VudHMgZWFjaCBpdGVtIGluIHRoZSBsaXN0LiBNdXN0IGJlIHB1dCBpbnNpZGUgdGhlIGBMaXN0YCBjb21wb25lbnQuIFRoZSBsaXN0IGl0ZW0gaXMgY29tcG9zZWQgb2YgZm91ciBwYXJ0cyB0aGF0IGFyZSByZXByZXNlbnRlZCB3aXRoIHRoZSBgbGVmdGAsIGBjZW50ZXJgLCBgcmlnaHRgIGFuZCBgZXhwYW5kYWJsZS1jb250ZW50YCBjbGFzc2VzLiBUaGVzZSBjbGFzc2VzIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSB0aGF0IHRoZSBjb250ZW50IG9mIHRoZSBsaXN0IGl0ZW1zIGlzIHByb3Blcmx5IGFsaWduZWQuXG4gKiAgIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gICA8TGlzdEl0ZW0+XG4gKiAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPkxlZnQ8L2Rpdj5cbiAqICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5DZW50ZXI8L2Rpdj5cbiAqICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlJpZ2h0PC9kaXY+XG4gKiAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwYW5kYWJsZS1jb250ZW50XCI+RXhwYW5kYWJsZSBjb250ZW50PC9kaXY+XG4gKiA8L0xpc3RJdGVtPlxuICovXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtbGlzdC1pdGVtJztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgdGhpcy5ub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5leHBhbmRlZCAhPT0gdGhpcy5ub2RlLmV4cGFuZGVkKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLnByb3BzLmV4cGFuZGVkID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgICAgdGhpcy5ub2RlW2FjdGlvbiArICdFeHBhbnNpb24nXSgpO1xuICAgIH1cbiAgfVxufVxuXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgbGlzdCBpdGVtLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB0YXBwYWJsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGxpc3QgaXRlbSBpcyB0YXBwYWJsZS5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHRhcHBhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgdGFwQmFja2dyb3VuZENvbG9yXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3Igd2hlbiB0YXBwZWQuIEZvciB0aGlzIHRvIHdvcmssIHRoZSBhdHRyaWJ1dGUgXCJ0YXBwYWJsZVwiIG5lZWRzIHRvIGJlIHNldC4gVGhlIGRlZmF1bHQgY29sb3IgaXMgXCIjZDlkOWQ5XCIuIEl0IHdpbGwgZGlzcGxheSBhcyBhIHJpcHBsZSBlZmZlY3Qgb24gQW5kcm9pZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHRhcEJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbG9ja09uRHJhZ1xuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBQcmV2ZW50IHZlcnRpY2FsIHNjcm9sbGluZyB3aGVuIHRoZSB1c2VyIGRyYWdzIGhvcml6b250YWxseS4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbG9ja09uRHJhZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGV4cGFuZGFibGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgd2hldGhlciBsaXN0IGl0ZW0gY2FuIGJlIGV4cGFuZGVkIHRvIHJldmVhbCBoaWRkZW4gY29udGVudC4gRXhwYW5kZWQgY29udGVudCBtdXN0IGJlIGRlZmluZWQgaW4gYGRpdi5leHBhbmRhYmxlLWNvbnRlbnRgLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGV4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBleHBhbmRlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUZvciBleHBhbmRhYmxlIGxpc3QgaXRlbXMsIHNwZWNpZmllcyB3aGV0aGVyIGl0ZW0gaXMgZXhwYW5kZWRbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1saXN0LXRpdGxlXG4gKiBAY2F0ZWdvcnkgbGlzdFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9saXN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gVGl0bGUgZWxlbWVudCBmb3IgbGlzdHMuIFVzdWFsbHkgY29tZXMgYmVmb3JlIG9ucy1saXN0IGNvbXBvbmVudC5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPExpc3RUaXRsZT5MaXN0IFRpdGxlPC9MaXN0VGl0bGU+XG4gICA8TGlzdFxuICAgICBkYXRhU291cmNlPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgIHJlbmRlckhlYWRlcj17KCkgPT5cbiAgICAgICAgPExpc3RIZWFkZXIgc3R5bGU9e3tmb250U2l6ZTogMTV9fSBjbGFzc05hbWU9XCJ0ZXN0Q2xhc3NcIj4gSGVhZGVyIFRleHQgPC9MaXN0SGVhZGVyPiB9XG4gICAgcmVuZGVyUm93PXsocm93LCBpZHgpID0+IChcbiAgICAgIDxMaXN0SXRlbSA+IHtyb3d9IDwvTGlzdEl0ZW0+XG4gICAgKX1cbiAgLz5cbiAqL1xuY2xhc3MgTGlzdFRpdGxlIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1saXN0LXRpdGxlJztcbiAgfVxufVxuXG5MaXN0VGl0bGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmeSBtb2RpZmllciBuYW1lIHRvIHNwZWNpZnkgY3VzdG9tIHN0eWxlcy4gT3B0aW9uYWwuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdFRpdGxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLW5hdmlnYXRvclxuICogQGNhdGVnb3J5IG5hdmlnYXRpb25cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvbmF2aWdhdG9yXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gVGhpcyBjb21wb25lbnQgaXMgcmVzcG9uc2libGUgZm9yIHBhZ2UgdHJhbnNpdGlvbmluZyBhbmQgbWFuYWdpbmcgdGhlIHBhZ2VzIG9mIHlvdXIgT25zZW5VSSBhcHBsaWNhdGlvbi4gSW4gb3JkZXIgdG8gbWFuYWdlIHRvIGRpc3BsYXkgdGhlIHBhZ2VzLCB0aGUgIG5hdmlnYXRvciBuZWVkcyB0byBkZWZpbmUgdGhlIGByZW5kZXJQYWdlYCBtZXRob2QsIHRoYXQgdGFrZXMgYW4gcm91dGUgYW5kIGEgbmF2aWdhdG9yIGFuZCAgY29udmVydHMgaXQgdG8gYW4gcGFnZS4gIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gIDxOYXZpZ2F0b3JcbiAgICByZW5kZXJQYWdlPXsocm91dGUsIG5hdmlnYXRvcikgPT5cbiAgICAgPE15UGFnZVxuICAgICAgIHRpdGxlPXtyb3V0ZS50aXRsZX1cbiAgICAgICBvblBvcD17KCkgPT4gbmF2aWdhdG9yLnBvcFBhZ2UoKX1cbiAgICAgICAvPlxuICAgIH1cbiAgICBpbml0aWFsUm91dGU9e3tcbiAgICAgICAgdGl0bGU6ICdGaXJzdCBQYWdlJ1xuICAgIH19IC8+XG4gICB9XG4gfVxuICovXG5jbGFzcyBOYXZpZ2F0b3IgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLnBhZ2VzID0gW107XG4gICAgdGhpcy5zdGF0ZSA9IHsgfTtcbiAgICB0aGlzLl9wcmVQdXNoID0gdGhpcy5fcHJlUHVzaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3Bvc3RQdXNoID0gdGhpcy5fcG9zdFB1c2guYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wcmVQb3AgPSB0aGlzLl9wcmVQb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wb3N0UG9wID0gdGhpcy5fcG9zdFBvcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlKHBhZ2VzLCBvYmopIHtcbiAgICB0aGlzLnBhZ2VzID0gcGFnZXMgfHwgW107XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVzZXRQYWdlXG4gICAqIEBzaWduYXR1cmUgcmVzZXRQYWdlKHJvdXRlLCBvcHRpb25zID0ge30pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByb3V0ZVxuICAgKiAgIFtlbl0gVGhlIHJvdXRlIHRoYXQgdGhlIHBhZ2Ugc2hvdWxkIGJlIHJlc2V0IHRvLlsvZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqICAgW2VuXVByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIHJldmVhbGVkIHBhZ2UuWy9lbl1cbiAgICogICBbamFd5piO44KJ44GL44Gr44GX44Gf44Oa44O844K444KS6Kej5rG644GZ44KLUHJvbWlzZeOCkui/lOOBl+OBvuOBmeOAglsvamFdXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgIFtlbl1SZXNldHMgdGhlIGN1cnJlbnQgcGFnZVsvZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqL1xuICByZXNldFBhZ2Uocm91dGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJlc2V0UGFnZVN0YWNrKFtyb3V0ZV0sIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVzZXRQYWdlU3RhY2tcbiAgICogQHNpZ25hdHVyZSByZXNldFBhZ2VTdGFjayhyb3V0ZSwgb3B0aW9ucyA9IHt9KVxuICAgKiBAcGFyYW0ge0FycmF5fSByb3V0ZXNcbiAgICogICBbZW5dIFRoZSByb3V0ZXMgdGhhdCB0aGUgbmF2aWdhdG9yIHNob3VsZCBiZSByZXNldCB0by5bL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl1Qcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSByZXZlYWxlZCBwYWdlLlsvZW5dXG4gICAqICAgW2phXeaYjuOCieOBi+OBq+OBl+OBn+ODmuODvOOCuOOCkuino+axuuOBmeOCi1Byb21pc2XjgpLov5TjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dIFJlc2V0cyB0aGUgbmF2aWdhdG9yIHRvIHRoZSBjdXJyZW50IHBhZ2Ugc3RhY2tbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgcmVzZXRQYWdlU3RhY2socm91dGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdOYXZpZ2F0b3IgaXMgYWxyZWFkeSBydW5uaW5nIGFuaW1hdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlUGFnZXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdlRWxlbWVudHMgPSB0aGlzLl9uYXZpLnBhZ2VzO1xuICAgICAgZm9yIChsZXQgaSA9IHBhZ2VFbGVtZW50cy5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xuICAgICAgICBwYWdlRWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMucG9wKSB7XG4gICAgICB0aGlzLnJvdXRlc0JlZm9yZVBvcCA9IHRoaXMucm91dGVzLnNsaWNlKCk7XG4gICAgICB0aGlzLnJvdXRlc0FmdGVyUG9wID0gcm91dGVzO1xuICAgICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXMuY29uY2F0KFt0aGlzLnJvdXRlc1t0aGlzLnJvdXRlcy5sZW5ndGggLSAxXV0pO1xuXG4gICAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucGFnZXMucG9wKCk7XG4gICAgICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHRoaXMuZm9yY2VVcGRhdGUocmVzb2x2ZSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKHRoaXMucGFnZXMpXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuX25hdmkuX3BvcFBhZ2Uob3B0aW9ucywgdXBkYXRlKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gaGlkZVBhZ2VzKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGxhc3RSb3V0ZSA9IHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV3UGFnZSA9IHRoaXMucHJvcHMucmVuZGVyUGFnZShsYXN0Um91dGUsIHRoaXMpO1xuICAgIHRoaXMucm91dGVzLnB1c2gobGFzdFJvdXRlKTtcblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucGFnZXMucHVzaChuZXdQYWdlKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gdGhpcy5mb3JjZVVwZGF0ZShyZXNvbHZlKSk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLl9uYXZpLl9wdXNoUGFnZShvcHRpb25zLCB1cGRhdGUpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG4gICAgICB0aGlzLnBhZ2VzID0gcm91dGVzLm1hcChyb3V0ZSA9PiB0aGlzLnByb3BzLnJlbmRlclBhZ2Uocm91dGUsIHRoaXMpKTtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSh0aGlzLnBhZ2VzKS50aGVuKCgpID0+IGhpZGVQYWdlcygpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHB1c2hQYWdlXG4gICAqIEBzaWduYXR1cmUgcHVzaFBhZ2Uocm91dGUsIG9wdGlvbnMgPSB7fSlcbiAgICogQHBhcmFtIHtPYmplY3R9IHJvdXRlXG4gICAqICAgW2VuXSBUaGUgcm91dGUgdGhhdCB0aGUgbmF2aWdhdG9yIHNob3VsZCBwdXNoIHRvLlsvZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqICAgW2VuXSBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSByZXZlYWxlZCBwYWdlLlsvZW5dXG4gICAqICAgW2phXeaYjuOCieOBi+OBq+OBl+OBn+ODmuODvOOCuOOCkuino+axuuOBmeOCi1Byb21pc2XjgpLov5TjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dIFB1c2hlcyBhIHBhZ2UgdG8gdGhlIHBhZ2Ugc3RhY2tbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgcHVzaFBhZ2Uocm91dGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLmlzUnVubmluZygpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05hdmlnYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmcgYW5pbWF0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICB0aGlzLnBhZ2VzLnB1c2godGhpcy5wcm9wcy5yZW5kZXJQYWdlKHJvdXRlLCB0aGlzKSk7XG4gICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZShyZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgICAgIHRoaXMuX25hdmlcbiAgICAgICAgLl9wdXNoUGFnZShcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIHVwZGF0ZVxuICAgICAgICApXG4gICAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlcy5wb3AoKTtcbiAgICAgICAgICB0aGlzLnBhZ2VzLnBvcCgpO1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzUnVubmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF2aS5faXNSdW5uaW5nO1xuICB9XG5cbiAgLypcbiAgICogQG1ldGhvZCByZXBsYWNlUGFnZVxuICAgKiBAc2lnbmF0dXJlIHJlcGxhY2VQYWdlKHJvdXRlLCBbb3B0aW9uc10pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByb3V0ZVxuICAgKiAgIFtlbl0gVGhlIHJvdXRlIHRoYXQgdGhlIG5hdmlnYXRvciBzaG91bGQgcmVwbGFjZSB0aGUgdG9wIHBhZ2Ugd2l0aC5bL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl1Qcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBuZXcgcGFnZS5bL2VuXVxuICAgKiAgIFtqYV3mlrDjgZfjgYTjg5rjg7zjgrjjgpLop6PmsbrjgZnjgotQcm9taXNl44KS6L+U44GX44G+44GZ44CCWy9qYV1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXVJlcGxhY2VzIHRoZSBjdXJyZW50IHRvcCBwYWdlIHdpdGggdGhlIHNwZWNpZmllZCBvbmUuIEV4dGVuZHMgYHB1c2hQYWdlKClgIHBhcmFtZXRlcnMuWy9lbl1cbiAgICogICBbamFd54++5Zyo6KGo56S65Lit44Gu44Oa44O844K444KS44KS5oyH5a6a44GX44Gf44Oa44O844K444Gr572u44GN5o+b44GI44G+44GZ44CCWy9qYV1cbiAgICovXG4gIHJlcGxhY2VQYWdlKHJvdXRlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdOYXZpZ2F0b3IgaXMgYWxyZWFkeSBydW5uaW5nIGFuaW1hdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wdXNoUGFnZShyb3V0ZSwgb3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBwb3MgPSB0aGlzLnBhZ2VzLmxlbmd0aCAtIDI7XG4gICAgICB0aGlzLnBhZ2VzLnNwbGljZShwb3MsIDEpO1xuICAgICAgdGhpcy5yb3V0ZXMuc3BsaWNlKHBvcywgMSk7XG4gICAgICB0aGlzLl9uYXZpLnRvcFBhZ2UudXBkYXRlQmFja0J1dHRvbih0aGlzLnBhZ2VzLmxlbmd0aCA+IDEpO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcG9wUGFnZVxuICAgKiBAc2lnbmF0dXJlIHBvcFBhZ2Uob3B0aW9ucyA9IHt9KVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl0gUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgcmV2ZWFsZWQgcGFnZS5bL2VuXVxuICAgKiAgIFtqYV3mmI7jgonjgYvjgavjgZfjgZ/jg5rjg7zjgrjjgpLop6PmsbrjgZnjgotQcm9taXNl44KS6L+U44GX44G+44GZ44CCWy9qYV1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXSBQb3BzIGEgcGFnZSBvdXQgb2YgdGhlIHBhZ2Ugc3RhY2tbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgcG9wUGFnZShvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdOYXZpZ2F0b3IgaXMgYWxyZWFkeSBydW5uaW5nIGFuaW1hdGlvbi4nKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvdXRlc0JlZm9yZVBvcCA9IHRoaXMucm91dGVzLnNsaWNlKCk7XG4gICAgdGhpcy5yb3V0ZXNBZnRlclBvcCA9IHRoaXMucm91dGVzQmVmb3JlUG9wLnNsaWNlKDAsIHRoaXMucm91dGVzQmVmb3JlUG9wLmxlbmd0aCAtIDEpO1xuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMucGFnZXMucG9wKCk7XG4gICAgICAgIHRoaXMucm91dGVzLnBvcCgpO1xuXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUocmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX25hdmkuX3BvcFBhZ2Uob3B0aW9ucywgdXBkYXRlKTtcbiAgfVxuXG4gIF9vbkRldmljZUJhY2tCdXR0b24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wYWdlcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLnBvcFBhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQuY2FsbFBhcmVudEhhbmRsZXIoKTtcbiAgICB9XG4gIH1cblxuICBfcHJlUG9wKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5fbmF2aSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnJvdXRlcyA9IHtcbiAgICAgIHBvcHBpbmdSb3V0ZTogdGhpcy5yb3V0ZXNCZWZvcmVQb3BbdGhpcy5yb3V0ZXNCZWZvcmVQb3AubGVuZ3RoIC0gMV0sXG4gICAgICByb3V0ZXM6IHRoaXMucm91dGVzQmVmb3JlUG9wXG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMub25QcmVQb3AoZXZlbnQpO1xuICB9XG5cbiAgX3Bvc3RQb3AoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9uYXZpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucm91dGVzID0ge1xuICAgICAgcG9wcGVkUm91dGU6IHRoaXMucm91dGVzQmVmb3JlUG9wW3RoaXMucm91dGVzQmVmb3JlUG9wLmxlbmd0aCAtIDFdLFxuICAgICAgcm91dGVzOiB0aGlzLnJvdXRlc0FmdGVyUG9wXG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMub25Qb3N0UG9wKGV2ZW50KTtcbiAgfVxuXG4gIF9wcmVQdXNoKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5fbmF2aSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnJvdXRlcyA9IHtcbiAgICAgIHB1c2hpbmdSb3V0ZTogdGhpcy5yb3V0ZXNbdGhpcy5yb3V0ZXMubGVuZ3RoIC0gMV0sXG4gICAgICByb3V0ZXM6IHRoaXMucm91dGVzLnNsaWNlKDAsIHRoaXMucm91dGVzLmxlbmd0aCAtIDEpXG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMub25QcmVQdXNoKGV2ZW50KTtcbiAgfVxuXG4gIF9wb3N0UHVzaChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IHRoaXMuX25hdmkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5yb3V0ZXMgPSB7XG4gICAgICBwdXNoZWRSb3V0ZTogdGhpcy5yb3V0ZXNbdGhpcy5yb3V0ZXMubGVuZ3RoIC0gMV0sXG4gICAgICByb3V0ZXM6IHRoaXMucm91dGVzXG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMub25Qb3N0UHVzaChldmVudCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5fbmF2aTtcbiAgICBub2RlLnBvcFBhZ2UgPSB0aGlzLnBvcFBhZ2UuYmluZCh0aGlzKTtcblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlcHVzaCcsIHRoaXMuX3ByZVB1c2gpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdHB1c2gnLCB0aGlzLl9wb3N0UHVzaCk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwcmVwb3AnLCB0aGlzLl9wcmVQb3ApO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdHBvcCcsIHRoaXMuX3Bvc3RQb3ApO1xuXG4gICAgbm9kZS5zd2lwZU1heCA9IHRoaXMucHJvcHMuc3dpcGVQb3A7XG4gICAgbm9kZS5vbkRldmljZUJhY2tCdXR0b24gPSB0aGlzLnByb3BzLm9uRGV2aWNlQmFja0J1dHRvbiB8fCB0aGlzLl9vbkRldmljZUJhY2tCdXR0b24uYmluZCh0aGlzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmluaXRpYWxSb3V0ZSAmJiB0aGlzLnByb3BzLmluaXRpYWxSb3V0ZVN0YWNrKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luIE5hdmlnYXRvciBlaXRoZXIgaW5pdGFsUm91dGUgb3IgaW5pdGFsUm91dGVzIGNhbiBiZSBzZXQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsUm91dGUpIHtcbiAgICAgIHRoaXMucm91dGVzID0gW3RoaXMucHJvcHMuaW5pdGlhbFJvdXRlXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaW5pdGlhbFJvdXRlU3RhY2spIHtcbiAgICAgIHRoaXMucm91dGVzID0gdGhpcy5wcm9wcy5pbml0aWFsUm91dGVTdGFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5yb3V0ZXMubWFwKFxuICAgICAgKHJvdXRlKSA9PiB0aGlzLnByb3BzLnJlbmRlclBhZ2Uocm91dGUsIHRoaXMpXG4gICAgKTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgaWYgKG5ld1Byb3BzLm9uRGV2aWNlQmFja0J1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9uYXZpLm9uRGV2aWNlQmFja0J1dHRvbiA9IG5ld1Byb3BzLm9uRGV2aWNlQmFja0J1dHRvbjtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5fbmF2aTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ByZXB1c2gnLCB0aGlzLnByb3BzLm9uUHJlUHVzaCk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0cHVzaCcsIHRoaXMucHJvcHMub25Qb3N0UHVzaCk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVwb3AnLCB0aGlzLnByb3BzLm9uUHJlUG9wKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bvc3Rwb3AnLCB0aGlzLnByb3BzLm9uUG9zdFBvcCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMpO1xuICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5yb3V0ZXMgPyB0aGlzLnJvdXRlcy5tYXAoKHJvdXRlKSA9PiB0aGlzLnByb3BzLnJlbmRlclBhZ2Uocm91dGUsIHRoaXMpKSA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG9ucy1uYXZpZ2F0b3IgeyAuLi5hdHRycyB9IHJlZj17KG5hdmkpID0+IHsgdGhpcy5fbmF2aSA9IG5hdmk7IH19PlxuICAgICAgICB7cGFnZXN9XG4gICAgICA8L29ucy1uYXZpZ2F0b3I+XG4gICAgKTtcbiAgfVxufVxuXG5OYXZpZ2F0b3IucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgcmVuZGVyUGFnZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgdHJ1ZVxuICAgKiBAZGVmYXVsdFZhbHVlIG51bGxcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgZnVuY3Rpb24gdGFrZXMgdGhlIGN1cnJlbnQgcm91dGUgb2JqZWN0IGFzIGEgcGFyYW1ldGVyIGFuZCByZXR1cm5zIGEgUmVhY3QgY29tcG9uZW50LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlclBhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAbmFtZSBpbml0aWFsUm91dGVTdGFja1xuICAgKiBAdHlwZSBhcnJheVxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGFycmF5IGNvbnRhaW5zIHRoZSBpbml0aWFsIHJvdXRlcyBmcm9tIHRoZSBOYXZpZ2F0b3IsXG4gICAqICB3aGljaCB3aWxsIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSBpbml0aWFsIHBhZ2VzIGluIHRoZSBgcmVuZGVyUGFnZWAgbWV0aG9kLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5pdGlhbFJvdXRlU3RhY2s6IFByb3BUeXBlcy5hcnJheSxcblxuICAvKipcbiAgICogQG5hbWUgaW5pdGlhbFJvdXRlXG4gICAqIEB0eXBlIG9iamVjdFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGFycmF5IGNvbnRhaW5zIHRoZSBpbml0aWFsIHJvdXRlIG9mIHRoZSBuYXZpZ2F0b3IsXG4gICAqICB3aGljaCB3aWxsIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSBpbml0aWFsIHBhZ2VzIGluIHRoZVxuICAgKiAgcmVuZGVyUGFnZSBtZXRob2QuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbml0aWFsUm91dGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlUHVzaFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYmVmb3JlIGEgcGFnZSBpcyBwdXNoZWQuIEl0IGdldHMgYW4gZXZlbnQgb2JqZWN0IHdpdGggcm91dGUgaW5mb3JtYXRpb24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVQdXNoOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0UHVzaFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgYSBwYWdlIGlzIHB1c2hlZC4gSXQgZ2V0cyBhbiBldmVudCBvYmplY3Qgd2l0aCByb3V0ZSBpbmZvcm1hdGlvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RQdXNoOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVQb3BcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSBhIHBhZ2UgaXMgcG9wcGVkLiBJdCBnZXRzIGFuIGV2ZW50IG9iamVjdCB3aXRoIHJvdXRlIGluZm9ybWF0aW9uLlsvZW5dXG4gICAqL1xuICBvblByZVBvcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFBvcFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgYSBwYWdlIGlzIHBvcHBlZC4gSXQgZ2V0cyBhbiBldmVudCBvYmplY3Qgd2l0aCByb3V0ZSBpbmZvcm1hdGlvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RQb3A6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25cbiAgICogQHR5cGUge1N0cmluZ31cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXVxuICAgKiAgICAgQW5pbWF0aW9uIG5hbWUuIEF2YWlsYWJsZSBhbmltYXRpb25zIGFyZSBgXCJzbGlkZVwiYCwgYFwibGlmdFwiYCwgYFwiZmFkZVwiYCBhbmQgYFwibm9uZVwiYC5cbiAgICogICAgIFRoZXNlIGFyZSBwbGF0Zm9ybSBiYXNlZCBhbmltYXRpb25zLiBGb3IgZml4ZWQgYW5pbWF0aW9ucywgYWRkIGBcIi1pb3NcImAgb3IgYFwiLW1kXCJgIHN1ZmZpeCB0byB0aGUgYW5pbWF0aW9uIG5hbWUuIEUuZy4gYFwibGlmdC1pb3NcImAsIGBcImxpZnQtbWRcImAuIERlZmF1bHRzIHZhbHVlcyBhcmUgYFwic2xpZGUtaW9zXCJgIGFuZCBgXCJmYWRlLW1kXCJgLlxuICAgKiAgIFsvZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuICBge2R1cmF0aW9uOiAwLjIsIGRlbGF5OiAwLjQsIHRpbWluZzogJ2Vhc2UtaW4nfWAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgc3dpcGVhYmxlXG4gICAqIEB0eXBlIGJvb2x8c3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1FbmFibGVzIHN3aXBlLXRvLXBvcCBmdW5jdGlvbmFsaXR5IGZvciBpT1MuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3dpcGVhYmxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZVBvcFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dT3B0aW9uYWwgZnVuY3Rpb24gY2FsbGVkIG9uIHN3aXBlLXRvLXBvcC4gSWYgcHJvdmlkZWQsIG11c3QgcGVyZm9ybSBhIHBvcFBhZ2Ugd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucyBvYmplY3QuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3dpcGVQb3A6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQG5hbWUgb25EZXZpY2VCYWNrQnV0dG9uXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DdXN0b20gaGFuZGxlciBmb3IgZGV2aWNlIGJhY2sgYnV0dG9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uRGV2aWNlQmFja0J1dHRvbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmNvbnN0IE5PT1AgPSAoKSA9PiBudWxsO1xuXG5OYXZpZ2F0b3IuZGVmYXVsdFByb3BzID0ge1xuICBvblBvc3RQdXNoOiBOT09QLFxuICBvblByZVB1c2g6IE5PT1AsXG4gIG9uUHJlUG9wOiBOT09QLFxuICBvblBvc3RQb3A6IE5PT1Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRvcjtcbiIsImltcG9ydCBCYXNlRGlhbG9nIGZyb20gJy4vQmFzZURpYWxvZy5qc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLW1vZGFsXG4gKiBAY2F0ZWdvcnkgZGlhbG9nXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL21vZGFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICAgQSBtb2RhbCBjb21wb25lbnQgY292ZXJzIHRoZSBlbnRpcmUgc2NyZWVuLiBVbmRlcmx5aW5nIGNvbXBvbmVudHMgYXJlIG5vdFxuICogICBzdWJqZWN0IHRvIGFueSBldmVudHMgd2hpbGUgdGhlIG1vZGFsIGNvbXBvbmVudCBpcyBzaG93bi5cbiAqXG4gKiAgIFRoaXMgY29tcG9uZW50IGNhbiBiZSB1c2VkIHRvIGJsb2NrIHVzZXIgaW5wdXQgd2hpbGUgc29tZSBvcGVyYXRpb24gaXNcbiAqICAgcnVubmluZyBvciB0byBzaG93IHNvbWUgaW5mb3JtYXRpb24gdG8gdGhlIHVzZXIuXG4gKiBbL2VuXVxuICogW2phXVxuICogICDnlLvpnaLlhajkvZPjgpLjg57jgrnjgq/jgZnjgovjg6Ljg7zjg4Djg6vnlKjjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgafjgZnjgILkuIvlgbTjgavjgYLjgovjgrPjg7Pjg53jg7zjg43jg7Pjg4jjga/jgIFcbiAqICAg44Oi44O844OA44Or44GM6KGo56S644GV44KM44Gm44GE44KL6ZaT44Gv44Kk44OZ44Oz44OI6YCa55+l44GM6KGM44KP44KM44G+44Gb44KTXG4gKiBbL2phXVxuICogQGV4YW1wbGVcbiAgPFBhZ2U+XG4gICAgPGRpdj4gUGFnZSBjb250ZW50IDwvZGl2PlxuXG4gICAgPE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5pc0xvYWRpbmd9PlxuICAgICAgTG9hZGluZyAuLi5cbiAgICA8L01vZGFsPlxuICA8L1BhZ2U+XG4gKi9cbmNsYXNzIE1vZGFsIGV4dGVuZHMgQmFzZURpYWxvZyB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1tb2RhbCc7XG4gIH1cbn1cblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgIFtlbl1cbiAgICogICAgIEFuaW1hdGlvbiBuYW1lLiBBdmFpbGFibGUgYW5pbWF0aW9ucyBhcmUgYFwiZmFkZVwiYCwgYFwibGlmdFwiYCBhbmQgYFwibm9uZVwiYC5cbiAgICogICBbL2VuXVxuICAgKi9cbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ2ZhZGUnLCAnbGlmdCddKSxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgYW5pbWF0aW9uJ3MgZHVyYXRpb24sIGRlbGF5IGFuZCB0aW1pbmcuIEUuZy4gIGB7ZHVyYXRpb246IDAuMiwgZGVsYXk6IDAuNCwgdGltaW5nOiAnZWFzZS1pbid9YC5bL2VuXVxuICAgKi9cbiAgYW5pbWF0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVTaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBqdXN0IGJlZm9yZSB0aGUgbW9kYWwgaXMgZGlzcGxheWVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVTaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0U2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBhZnRlciB0aGUgbW9kYWwgaXMgZGlzcGxheWVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0U2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlSGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSBtb2RhbCBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVIaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0SGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIG1vZGFsIGlzIGhpZGRlbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RIaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgaXNPcGVuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dV2hlbiBgdHJ1ZWAgdGhlIG1vZGFsIHdpbGwgc2hvdyBpdHNlbGYuWy9lbl1cbiAgICovXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRGV2aWNlQmFja0J1dHRvblxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXN0b20gaGFuZGxlciBmb3IgZGV2aWNlIGJhY2sgYnV0dG9uLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBpc09wZW46IGZhbHNlLFxuICBhbmltYXRpb246ICdub25lJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1wYWdlXG4gKiBAY2F0ZWdvcnkgcGFnZVxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9wYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICAgVGhpcyBjb21wb25lbnQgaXMgaGFuZGxpbmcgdGhlIGVudGlyZSBwYWdlLiBUaGUgY29udGVudCBjYW4gYmUgc2Nyb2xsZWQuXG4gKlxuICogICBUbyBhZGQgZml4ZWQgY29udGVudCB0aGF0IGRvZXNuJ3Qgc2Nyb2xsIHdpdGggdGhlIHBhZ2UgdGhlIGByZW5kZXJGaXhlZGAgcHJvcCBpcyB1c2VkLlxuICpcbiAqICAgQSBwYWdlIHRvb2xiYXIgY2FuIGJlIGFkZGVkIHdpdGggdGhlIGByZW5kZXJUb29sYmFyYCBwcm9wLlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgPFBhZ2VcbiAgICByZW5kZXJGaXhlZD17KCkgPT4gPEZhYj48L0ZhYj59XG4gICAgcmVuZGVyVG9vbGJhcj17KCkgPT4gPFRvb2xiYXI+Li4uPC9Ub29sYmFyPn1cbiAgICBjb250ZW50U3R5bGU9e3twYWRkaW5nOiA0MH19PlxuICAgIDxkaXY+IFBhZ2UgY29udGVudCA8L2Rpdj5cbiAgPC9QYWdlPlxuICovXG5jbGFzcyBQYWdlIGV4dGVuZHMgQmFzaWNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBjb25zdCBjYWxsYmFjayA9IChuYW1lLCBldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHNbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHNbbmFtZV0oZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vbkluaXQgPSBjYWxsYmFjay5iaW5kKHRoaXMsICdvbkluaXQnKTtcbiAgICB0aGlzLm9uU2hvdyA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uU2hvdycpO1xuICAgIHRoaXMub25IaWRlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25IaWRlJyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2luaXQnLCB0aGlzLm9uSW5pdCk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdzaG93JywgdGhpcy5vblNob3cpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsIHRoaXMub25IaWRlKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRGV2aWNlQmFja0J1dHRvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBub2RlLm9uRGV2aWNlQmFja0J1dHRvbiA9IHRoaXMucHJvcHMub25EZXZpY2VCYWNrQnV0dG9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkluZmluaXRlU2Nyb2xsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIG5vZGUub25JbmZpbml0ZVNjcm9sbCA9IHRoaXMucHJvcHMub25JbmZpbml0ZVNjcm9sbDtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgaWYgKG5ld1Byb3BzLm9uRGV2aWNlQmFja0J1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5vbkRldmljZUJhY2tCdXR0b24gPSBuZXdQcm9wcy5vbkRldmljZUJhY2tCdXR0b247XG4gICAgfVxuICAgIGlmIChuZXdQcm9wcy5vbkluZmluaXRlU2Nyb2xsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLm9uSW5maW5pdGVTY3JvbGwgPSBuZXdQcm9wcy5vbkluZmluaXRlU2Nyb2xsO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2luaXQnLCB0aGlzLm9uSW5pdCk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdzaG93JywgdGhpcy5vblNob3cpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGlkZScsIHRoaXMub25IaWRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b29sYmFyID0gdGhpcy5wcm9wcy5yZW5kZXJUb29sYmFyKHRoaXMpO1xuICAgIGNvbnN0IGJvdHRvbVRvb2xiYXIgPSB0aGlzLnByb3BzLnJlbmRlckJvdHRvbVRvb2xiYXIodGhpcyk7XG4gICAgY29uc3QgbW9kYWwgPSB0aGlzLnByb3BzLnJlbmRlck1vZGFsKHRoaXMpO1xuICAgIGNvbnN0IGZpeGVkID0gdGhpcy5wcm9wcy5yZW5kZXJGaXhlZCh0aGlzKTtcblxuICAgIGNvbnN0IHtjb250ZW50U3R5bGUsIC4uLm90aGVyfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMsIG90aGVyKTtcblxuICAgIHJldHVybiA8b25zLXBhZ2Ugey4uLmF0dHJzfSA+XG4gICAgICB7dG9vbGJhcn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlX19iYWNrZ3JvdW5kJz4gPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fY29udGVudCcgc3R5bGU9e2NvbnRlbnRTdHlsZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZV9fZXh0cmEnIHN0eWxlPXt7ekluZGV4OiAxMDAwMX19PlxuICAgICAgICB7bW9kYWx9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtmaXhlZH1cbiAgICAgIHtib3R0b21Ub29sYmFyfVxuICAgIDwvb25zLXBhZ2U+O1xuICB9XG59XG5cblBhZ2UucHJvcFR5cGVzID0ge1xuXG4gIC8qKlxuICAgKiBAbmFtZSBjb250ZW50U3R5bGVcbiAgICogQHR5cGUgT2JqZWN0XG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmeSB0aGUgc3R5bGUgb2YgdGhlIHBhZ2UgY29udGVudC4gT3B0aW9uYWwuXG4gICAqICBbL2VuXVxuICAgKi9cbiAgY29udGVudFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZ5IG1vZGlmaWVyIG5hbWUgdG8gc3BlY2lmeSBjdXN0b20gc3R5bGVzLiBPcHRpb25hbC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSByZW5kZXJNb2RhbFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgYSBtb2RhbCB0aGF0IG1hc2tzIGN1cnJlbnQgc2NyZWVuLlsvZW5dXG4gICAqL1xuICByZW5kZXJNb2RhbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlclRvb2xiYXJcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVGhpcyBmdW5jdGlvbiByZW5kZXJzIHRoZSB0b29sYmFyIG9mIHRoZSBwYWdlLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlclRvb2xiYXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSByZW5kZXJCb3R0b21Ub29sYmFyXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVGhpcyBmdW5jdGlvbiByZW5kZXJzIHRoZSBib3R0b20gdG9vbGJhciBvZiB0aGUgcGFnZS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByZW5kZXJCb3R0b21Ub29sYmFyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgcmVuZGVyRml4ZWRcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgZml4ZWQgY29udGVudCBvZiB0aGUgcGFnZS4gQ2FuIGJlIHVzZWQgdG8gcmVuZGVyIGBGYWJgIG9yIGBTcGVlZERpYWxgIGNvbXBvbmVudHMgYXMgd2VsbCBhcyBvdGhlciBjb21wb25lbnRzIHRoYXQgZG9uJ3Qgc2Nyb2xsIHdpdGggdGhlIHBhZ2UuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmVuZGVyRml4ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkluaXRcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgXHRGaXJlZCByaWdodCBhZnRlciB0aGUgcGFnZSBpcyBhdHRhY2hlZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uSW5pdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uU2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQgRmlyZWQgcmlnaHQgYWZ0ZXIgdGhlIHBhZ2UgaXMgc2hvd24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGFmdGVyIHRoZSBwYWdlIGlzIGhpZGRlbi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uSW5maW5pdGVTY3JvbGxcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIHdoZW4gc2Nyb2xsaW5nIHRvIHRoZSBib3R0b20gb2YgdGhlIHBhZ2UuIEl0IGdldHMgYSAnZG9uZScgY2FsbGJhY2sgKGZpcnN0IGFyZ3VtZW50KSB0aGF0IG11c3QgYmUgY2FsbGVkIHdoZW4gaXQncyBmaW5pc2hlZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uSW5maW5pdGVTY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRldmljZUJhY2tCdXR0b25cbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VzdG9tIGhhbmRsZXIgZm9yIGRldmljZSBiYWNrIGJ1dHRvbi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uRGV2aWNlQmFja0J1dHRvbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmNvbnN0IE5PT1AgPSAoKSA9PiBudWxsO1xuXG5QYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVuZGVyVG9vbGJhcjogTk9PUCxcbiAgcmVuZGVyQm90dG9tVG9vbGJhcjogTk9PUCxcbiAgcmVuZGVyTW9kYWw6IE5PT1AsXG4gIHJlbmRlckZpeGVkOiBOT09QXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwiaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSAnLi9CYXNlRGlhbG9nLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1wb3BvdmVyXG4gKiBAY2F0ZWdvcnkgZGlhbG9nXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3BvcG92ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogICBbZW5dXG4gKiAgICAgQSBjb21wb25lbnQgdGhhdCBkaXNwbGF5cyBhIHBvcG92ZXIgbmV4dCB0byBhbiBlbGVtZW50LiBUaGUgcG9wb3ZlciBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IGV4dHJhIGluZm9ybWF0aW9uIGFib3V0IGEgY29tcG9uZW50IG9yIGEgdG9vbHRpcC5cbiAqICAgIEFub3RoZXIgY29tbW9uIHdheSB0byB1c2UgdGhlIHBvcG92ZXIgaXMgdG8gZGlzcGxheSBhIG1lbnUgd2hlbiBhIGJ1dHRvbiBvbiB0aGUgc2NyZWVuIGlzIHRhcHBlZC5cbiAqICAgWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxQYWdlPlxuICogIDxCdXR0b25cbiAqICAgIHJlZj17KGJ0bikgPT4geyB0aGlzLmJ0biA9IGJ0bjsgfX1cbiAqICAgIG9uQ2xpY2s9eygpID0+XG4gKiAgICAgIHRoaXMuc2V0U3RhdGUoe3RhcmdldDogdGhpcy5idG4sIGlzT3BlbjogdHJ1ZX0pXG4gKiAgICB9XG4gKiAgLz5cbiAgICA8UG9wb3ZlclxuICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtpc09wZW46IGZhbHNlfSl9XG4gICAgICBnZXRUYXJnZXQ9eygpID0+IHRoaXMuc3RhdGUudGFyZ2V0fVxuICAgID5cbiAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBvcGFjaXR5OiAwLjV9fT5cbiAgICAgICAgPHA+VGhpcyBpcyBhIHBvcG92ZXIhPC9wPlxuICAgICAgICAgIDxwPjxzbWFsbD5DbGljayB0aGUgYmFja2dyb3VuZCB0byByZW1vdmUgdGhlIHBvcG92ZXIuPC9zbWFsbD48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BvcG92ZXI+XG4gKiA8L1BhZ2U+XG4gKi9cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBCYXNlRGlhbG9nIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXBvcG92ZXInO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5wcm9wcy5nZXRUYXJnZXQoKTtcbiAgICB0YXJnZXQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLm5vZGUuZmlyc3RDaGlsZC5zaG93KHRhcmdldCk7XG4gIH1cbn1cblxuUG9wb3Zlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBnZXRUYXJnZXRcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBUaGlzIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gcmVhY3QgY29tcG9uZW50IG9yIGEgZG9tbm9kZSB0aGF0IHRoZSBwb3BvdmVyIGlzIHNob3dpbmcgb24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBnZXRUYXJnZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNhbmNlbFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQgb25seSBpZiBpc0NhbmNlbGFibGUgaXMgdHJ1ZS4gSXQgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGFwcGluZyB0aGUgYmFja2dyb3VuZCBvciBieSBwcmVzc2luZyB0aGUgYmFjayBidXR0b24gb24gQW5kcm9pZCBkZXZpY2VzLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc09wZW5cbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgdHJ1ZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgb3BlbiBhbmQgc2hvd24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzQ2FuY2VsYWJsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY2FuY2VsYWJsZSBvciBub3QuXG4gICAqICBBIGNhbmNlbGFibGUgZGlhbG9nIHdpbGwgY2FsbCBvbkNhbmNlbCAgd2hlbiB0YXBwaW5nIHRoZSBiYWNrZ3JvdW5kIG9yIG9yICBwcmVzc2luZyB0aGUgYmFjayBidXR0b24gb24gQW5kcm9pZCBkZXZpY2VzXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc0NhbmNlbGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0Rpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBkaXNhYmxlZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFRoZSBhbmltYXRpb24gdXNlZCB3aGVuIHNob3dpbmcgYW5kIGhpZGluZyB0aGUgZGlhbG9nLiBDYW4gYmUgZWl0aGVyIGBcIm5vbmVcImAgb3IgYFwiZGVmYXVsdFwiYC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgZGlhbG9nLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtYXNrQ29sb3JcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Db2xvciBvZiB0aGUgYmFja2dyb3VuZCBtYXNrLiBEZWZhdWx0IGlzIFwicmdiYSgwLCAwLCAwLCAwLjIpXCJbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtYXNrQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlU2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBiZWZvcmUgdGhlIGFsZXJ0IGRpYWxvZyBpcyBkaXNwbGF5ZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZVNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RTaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBhbGVydCBkaWFsb2cgaXMgZGlzcGxheWVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0U2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlSGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSBhbGVydCBkaWFsb2cgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdEhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIHRoZSBhbGVydCBkaWFsb2cgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdEhpZGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRldmljZUJhY2tCdXR0b25cbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VzdG9tIGhhbmRsZXIgZm9yIGRldmljZSBiYWNrIGJ1dHRvbi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uRGV2aWNlQmFja0J1dHRvbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXI7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1wcm9ncmVzcy1iYXJcbiAqIEBjYXRlZ29yeSB2aXN1YWxcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvcHJvZ3Jlc3NcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSBUaGUgY29tcG9uZW50IGlzIHVzZWQgdG8gZGlzcGxheSBhIGxpbmVhciBwcm9ncmVzcyBiYXIuIEl0IGNhbiBlaXRoZXIgZGlzcGxheSBhIHByb2dyZXNzIGJhciB0aGF0IHNob3dzIHRoZSB1c2VyIGhvdyBtdWNoIG9mIGEgdGFzayBoYXMgYmVlbiBjb21wbGV0ZWQuIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBwZXJjZW50YWdlIGlzIG5vdCBrbm93biBpdCBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IGFuIGFuaW1hdGVkIHByb2dyZXNzIGJhciBzbyB0aGUgdXNlciBjYW4gc2VlIHRoYXQgYW4gb3BlcmF0aW9uIGlzIGluIHByb2dyZXNzLiAgWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqPFByb2dyZXNzQmFyIHZhbHVlPXs1NX0gc2Vjb25kYXJ5VmFsdWU9ezg3fSAvPlxuICo8UHJvZ3Jlc3NCYXIgaW5kZXRlcm1pbmF0ZSAvPlxuICovXG5jbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtcHJvZ3Jlc3MtYmFyJztcbiAgfVxufVxuXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZhbHVlXG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1cnJlbnQgcHJvZ3Jlc3MuIFNob3VsZCBiZSBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMTAwLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlY29uZGFyeVZhbHVlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXJyZW50IHNlY29uZGFyeSBwcm9ncmVzcy4gU2hvdWxkIGJlIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxMDAuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBzZWNvbmRhcnlWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQG5hbWUgaW5kZXRlcm1pbmF0ZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBJZiB0aGlzIHByb3BlcnR5IGlzIHNldCwgYW4gaW5maW5pdGUgbG9vcGluZyBhbmltYXRpb24gd2lsbCBiZSBzaG93bi4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtcHJvZ3Jlc3MtY2lyY3VsYXJcbiAqIEBjYXRlZ29yeSB2aXN1YWxcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvcHJvZ3Jlc3MtY2lyY3VsYXJcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSBUaGlzIGNvbXBvbmVudCBkaXNwbGF5cyBhIGNpcmN1bGFyIHByb2dyZXNzIGluZGljYXRvci4gSXQgY2FuIGVpdGhlciBiZSB1c2VkIHRvIHNob3cgaG93IG11Y2ggb2YgYSB0YXNrIGhhcyBiZWVuIGNvbXBsZXRlZCBvciB0byBzaG93IGEgbG9vcGluZyBhbmltYXRpb24gdG8gaW5kaWNhdGUgdGhhdCBhbiBvcGVyYXRpb24gaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICo8UHJvZ3Jlc3NDaXJjdWxhciB2YWx1ZT17NTV9IHNlY29uZGFyeVZhbHVlPXs4N30gLz5cbiAqPFByb2dyZXNzQ2lyY3VsYXIgaW5kZXRlcm1pbmF0ZSAvPlxuICovXG5jbGFzcyBQcm9ncmVzc0NpcmN1bGFyIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1wcm9ncmVzcy1jaXJjdWxhcic7XG4gIH1cbn1cblxuUHJvZ3Jlc3NDaXJjdWxhci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZhbHVlXG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1cnJlbnQgcHJvZ3Jlc3MuIFNob3VsZCBiZSBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMTAwLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlY29uZGFyeVZhbHVlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXJyZW50IHNlY29uZGFyeSBwcm9ncmVzcy4gU2hvdWxkIGJlIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxMDAuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBzZWNvbmRhcnlWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQG5hbWUgaW5kZXRlcm1pbmF0ZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBJZiB0aGlzIHByb3BlcnR5IGlzIHNldCwgYW4gaW5maW5pdGUgbG9vcGluZyBhbmltYXRpb24gd2lsbCBiZSBzaG93bi4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQ2lyY3VsYXI7XG4iLCJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCYXNpY0NvbXBvbmVudCBmcm9tICcuL0Jhc2ljQ29tcG9uZW50LmpzeCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1wdWxsLWhvb2tcbiAqIEBjYXRlZ29yeSBjb250cm9sXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3B1bGwtaG9va1xuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dICBDb21wb25lbnQgdGhhdCBhZGRzICoqUHVsbCB0byByZWZyZXNoKiogZnVuY3Rpb25hbGl0eSB0byBhbiBgPG9ucy1wYWdlPmAgZWxlbWVudC5cbiAqICAgICBJdCBjYW4gYmUgdXNlZCB0byBwZXJmb3JtIGEgdGFzayB3aGVuIHRoZSB1c2VyIHB1bGxzIGRvd24gYXQgdGhlIHRvcCBvZiB0aGUgcGFnZS4gQSBjb21tb24gdXNhZ2UgaXMgdG8gcmVmcmVzaCB0aGUgZGF0YSBkaXNwbGF5ZWQgaW4gYSBwYWdlLlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFB1bGxIb29rIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBvbkxvYWQ9e3RoaXMub25Mb2FkfT5cbiAgICAgIHtcbiAgICAgICAodGhpcy5zdGF0ZS5wdWxsSG9va1N0YXRlID09PSAnaW5pdGlhbCcpID9cbiAgICAgICAgPHNwYW4gPlxuICAgICAgICAgIDxJY29uIHNpemU9ezM1fSBzcGluPXtmYWxzZX0gaWNvbj0naW9uLWFycm93LWRvd24tYScgLz5cbiAgICAgICAgICBQdWxsIGRvd24gdG8gcmVmcmVzaFxuICAgICAgICA8L3NwYW4+IDpcbiAgICAgICAgKHRoaXMuc3RhdGUucHVsbEhvb2tTdGF0ZSA9PT0gJ3ByZWFjdGlvbicpID9cbiAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICA8SWNvbiBzaXplPXszNX0gc3Bpbj17ZmFsc2V9IGljb249J2lvbi1hcnJvdy11cC1hJyAvPlxuICAgICAgICAgICBSZWxlYXNlIHRvIHJlZnJlc2hcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA6XG4gICAgICAgIDxzcGFuPjxJY29uIHNpemU9ezM1fSBzcGluPXt0cnVlfSBpY29uPSdpb24tbG9hZC1kJz48L0ljb24+IExvYWRpbmcgZGF0YS4uLjwvc3Bhbj5cbiAgICB9XG4gICAgICA8L1B1bGxIb29rPlxuICAgICk7XG4gKi9cbmNsYXNzIFB1bGxIb29rIGV4dGVuZHMgQmFzaWNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlc3RhdGUnLCB0aGlzLm9uQ2hhbmdlKTtcbiAgICB0aGlzLl9wdWxsSG9vay5vbkFjdGlvbiA9IHRoaXMucHJvcHMub25Mb2FkIHx8IG51bGw7XG4gICAgdGhpcy5fcHVsbEhvb2sub25QdWxsID0gdGhpcy5wcm9wcy5vblB1bGwgfHwgbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZXN0YXRlJywgdGhpcy5vbkNoYW5nZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Mb2FkICE9PSBwcmV2UHJvcHMub25Mb2FkKSB7XG4gICAgICB0aGlzLl9wdWxsSG9vay5vbkFjdGlvbiA9IHRoaXMucHJvcHMub25Mb2FkO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vblB1bGwgIT09IHByZXZQcm9wcy5vblB1bGwpIHtcbiAgICAgIHRoaXMuX3B1bGxIb29rLm9uUHVsbCA9IHRoaXMucHJvcHMub25QdWxsO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhdHRycyA9IFV0aWwuZ2V0QXR0cnModGhpcyk7XG4gICAgcmV0dXJuIDxvbnMtcHVsbC1ob29rIHsgLi4uYXR0cnMgfSByZWY9eyhwdWxsSG9vaykgPT4geyB0aGlzLl9wdWxsSG9vayA9IHB1bGxIb29rOyB9fSAvPjtcbiAgfVxufVxuXG5QdWxsSG9vay5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBvbkNoYW5nZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIHdoZW4gdGhlIHB1bGwgaG9vayBpbm5lciBzdGF0ZSBpcyBjaGFuZ2VkLiBUaGUgc3RhdGUgY2FuIGJlIGVpdGhlciBcImluaXRpYWxcIiwgXCJwcmVhY3Rpb25cIiBvciBcImFjdGlvblwiWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkxvYWRcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCB3aGVuIHRoZSBwdWxsIGhvb2sgaXMgaW4gdGhlIGBhY3Rpb25gIHN0YXRlWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Mb2FkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25QdWxsXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Ib29rIGNhbGxlZCB3aGVuZXZlciB0aGUgdXNlciBwdWxscyB0aGUgZWxlbWVudC4gSXQgZ2V0cyB0aGUgcHVsbGVkIGRpc3RhbmNlIHJhdGlvIChzY3JvbGwgLyBoZWlnaHQpIGFuZCBhbiBhbmltYXRpb25PcHRpb25zIG9iamVjdCBhcyBhcmd1bWVudHMuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QdWxsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gV2hlbiBzZXQgdG8gdHJ1ZSwgdGhlIHB1bGwgaG9vayB3aWxsIGJlIGRpc2FibGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaGVpZ2h0XG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVGhlIGhlaWdodCBvZiB0aGUgcHVsbCBob29rIGluIHBpeGVscy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgNjQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB0aHJlc2hvbGRIZWlnaHRcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGUgdGhyZXNob2xkIGhlaWdodCBvZiB0aGUgcHVsbCBob29rIGluIHBpeGVscy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgOTYuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdGhyZXNob2xkSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBmaXhlZENvbnRlbnRcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBJZiBzZXQgdG8gdHJ1ZSwgdGhlIGNvbnRlbnQgb2YgdGhlIHBhZ2Ugd2lsbCBub3QgbW92ZSB3aGVuIHB1bGxpbmcuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZml4ZWRDb250ZW50OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHVsbEhvb2s7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VJbnB1dCBmcm9tICcuL0Jhc2VJbnB1dC5qc3gnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtcmFkaW9cbiAqIEBjYXRlZ29yeSBmb3JtXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3JhZGlvXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICBBIHJhZGlvIGJ1dHRvbiBlbGVtZW50LiBUaGUgY29tcG9uZW50IHdpbGwgYXV0b21hdGljYWxseSByZW5kZXIgYXMgYSBNYXRlcmlhbCBEZXNpZ24gcmFkaW8gYnV0dG9uIG9uIEFuZHJvaWQgZGV2aWNlcy5cbiAqXG4gKiAgTW9zdCBhdHRyaWJ1dGVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGEgbm9ybWFsIGA8aW5wdXQgdHlwZT1cInJhZGlvXCI+YCBlbGVtZW50IGNhbiBhbHNvIGJlIHVzZWQgb24gdGhlIGA8UmFkaW8+YCBjb21wb25lbnQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFJhZGlvXG4gKiAgIG9uQ2hhbmdlPXtldmVudCA9PiB7IHRoaXMuc2V0U3RhdGUoe2NoZWNrZWQ6IGV2ZW50LnRhcmdldC5jaGVja2VkfSl9IH1cbiAqICAgbW9kaWZpZXI9J21hdGVyaWFsJyAvPlxuICovXG5jbGFzcyBSYWRpbyBleHRlbmRzIEJhc2VJbnB1dCB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1yYWRpbyc7XG4gIH1cblxuICBnZXQgRVZFTlRfVFlQRVMoKSB7XG4gICAgcmV0dXJuIFsnY2hhbmdlJ107XG4gIH1cbn1cblxuUmFkaW8ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgcmFkaW8gYnV0dG9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIHJhZGlvIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25DaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIENhbGxlZCB3aGVuIHRoZSByYWRpbyBidXR0b24gc3RhdGUgY2hhbmdlcy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZhbHVlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVmFsdWUgb2YgdGhlIHJhZGlvIGJ1dHRvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKVxuICBdKSxcblxuICAvKipcbiAgICogQG5hbWUgY2hlY2tlZFxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNvbnRyb2xzIHRoZSBzdGF0ZSBvZiB0aGUgcmFkaW8gYnV0dG9uIChjb250cm9sbGVkKS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgZGVmYXVsdENoZWNrZWRcbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1EZWZpbmVkIHRoZSBzdGF0ZSBvZiB0aGUgcmFkaW8gYnV0dG9uIGF0IGZpcnN0IHJlbmRlciBmb3IgdW5jb250cm9sbGVkIGlucHV0cy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlucHV0SWRcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIFwiaWRcIiBhdHRyaWJ1dGUgb2YgdGhlIGlubmVyIGA8aW5wdXQ+YCBlbGVtZW50LiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHVzaW5nIDxsYWJlbCBmb3I9XCIuLi5cIj4gZWxlbWVudHMuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5wdXRJZDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW87XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VJbnB1dCBmcm9tICcuL0Jhc2VJbnB1dC5qc3gnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtcmFuZ2VcbiAqIEBjYXRlZ29yeSBmb3JtXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3JhbmdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICAgUmFuZ2UgaW5wdXQgY29tcG9uZW50LlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxSYW5nZSBtb2RpZmllcj1cIm1hdGVyaWFsXCJcbiAqICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gKiAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpfSl9XG4gKiAgIC8+XG4gKi9cbmNsYXNzIFJhbmdlIGV4dGVuZHMgQmFzZUlucHV0IHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXJhbmdlJztcbiAgfVxufVxuXG5SYW5nZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGNoYW5nZXMuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB2YWx1ZVxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXJyZW50IHZhbHVlIG9mIHRoZSBlbGVtZW50LlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIElmIHRydWUsIHRoZSBlbGVtZW50IGlzIGRpc2FibGVkLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1yaXBwbGVcbiAqIEBjYXRlZ29yeSB2aXN1YWxcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvcmlwcGxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICAgQWRkcyBhIE1hdGVyaWFsIERlc2lnbiBcInJpcHBsZVwiIGVmZmVjdCB0byBhbiBlbGVtZW50LlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgIDxkaXYgY2xhc3NOYW1lPSdteUxpc3QnPlxuICAgICA8UmlwcGxlIGNvbG9yPSdyZWQnIC8+XG4gICA8L2Rpdj5cbiAqL1xuY2xhc3MgUmlwcGxlIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1yaXBwbGUnO1xuICB9XG59XG5cblJpcHBsZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBjb2xvclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNvbG9yIG9mIHRoZSByaXBwbGUgZWZmZWN0LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBiYWNrZ3JvdW5kXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29sb3Igb2YgdGhlIGJhY2tncm91bmQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYmFja2dyb3VuZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJpcHBsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1uYXZpZ2F0b3JcbiAqIEBjYXRlZ29yeSBuYXZpZ2F0aW9uXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL25hdmlnYXRvclxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFRoaXMgY29tcG9uZW50IGlzIGEgdmFyaWFudCBvZiB0aGUgTmF2aWdhdG9yIHdpdGggYSBkZWNsYXJhdGl2ZSBBUEkuIEluIG9yZGVyIHRvIG1hbmFnZSB0byBkaXNwbGF5IHRoZSBwYWdlcywgdGhlICBuYXZpZ2F0b3IgbmVlZHMgdG8gZGVmaW5lIHRoZSBgcmVuZGVyUGFnZWAgbWV0aG9kLCB0aGF0IHRha2VzIGFuIHJvdXRlIGFuZCBhIG5hdmlnYXRvciBhbmQgIGNvbnZlcnRzIGl0IHRvIGFuIHBhZ2UuWy9lbl1cbiAqIFtqYV1bL2phXVxuICovXG5jbGFzcyBSb3V0ZXJOYXZpZ2F0b3IgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuY2FuY2VsVXBkYXRlID0gZmFsc2U7XG4gICAgdGhpcy5wYWdlID0gbnVsbDtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKG5hbWUsIGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wc1tuYW1lXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tuYW1lXShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uUHJlUHVzaCA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUHJlUHVzaCcpO1xuICAgIHRoaXMub25Qb3N0UHVzaCA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUG9zdFB1c2gnKTtcbiAgICB0aGlzLm9uUHJlUG9wID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVQb3AnKTtcbiAgICB0aGlzLm9uUG9zdFBvcCA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUG9zdFBvcCcpO1xuICB9XG5cbiAgdXBkYXRlKGNiKSB7XG4gICAgaWYgKCF0aGlzLmNhbmNlbFVwZGF0ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7fSwgY2IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlc2V0UGFnZVN0YWNrXG4gICAqIEBzaWduYXR1cmUgcmVzZXRQYWdlU3RhY2socm91dGUsIG9wdGlvbnMgPSB7fSlcbiAgICogQHBhcmFtIHtBcnJheX0gW3JvdXRlc11cbiAgICogICBbZW5dIFRoZSByb3V0ZXMgdGhhdCB0aGUgbmF2aWdhdG9yIHNob3VsZCBiZSByZXNldCB0by5bL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl1Qcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSByZXZlYWxlZCBwYWdlLlsvZW5dXG4gICAqICAgW2phXeaYjuOCieOBi+OBq+OBl+OBn+ODmuODvOOCuOOCkuino+axuuOBmeOCi1Byb21pc2XjgpLov5TjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dIFJlc2V0cyB0aGUgbmF2aWdhdG9yIHRvIHRoZSBjdXJyZW50IHBhZ2Ugc3RhY2tbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgcmVzZXRQYWdlU3RhY2socm91dGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHRoaXMucHJvcHMucmVuZGVyUGFnZShyb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDFdKSk7XG4gICAgICAgIHRoaXMudXBkYXRlKHJlc29sdmUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLl9uYXZpLl9wdXNoUGFnZShvcHRpb25zLCB1cGRhdGUpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucGFnZXMgPSByb3V0ZXMubWFwKHJvdXRlID0+IHRoaXMucHJvcHMucmVuZGVyUGFnZShyb3V0ZSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBwdXNoUGFnZVxuICAgKiBAc2lnbmF0dXJlIHB1c2hQYWdlKHJvdXRlLCBvcHRpb25zID0ge30pXG4gICAqIEBwYXJhbSB7QXJyYXl9IFtyb3V0ZXNdXG4gICAqICAgW2VuXSBUaGUgcm91dGVzIHRoYXQgdGhlIG5hdmlnYXRvciBzaG91bGQgcHVzaCB0by5bL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl0gUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgcmV2ZWFsZWQgcGFnZS5bL2VuXVxuICAgKiAgIFtqYV3mmI7jgonjgYvjgavjgZfjgZ/jg5rjg7zjgrjjgpLop6PmsbrjgZnjgotQcm9taXNl44KS6L+U44GX44G+44GZ44CCWy9qYV1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXSBQdXNoZXMgYSBwYWdlIHRvIHRoZSBwYWdlIHN0YWNrWy9lbl1cbiAgICogICBbamFdWy9qYV1cbiAgICovXG4gIHB1c2hQYWdlKHJvdXRlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5wcm9wcy5yZW5kZXJQYWdlKHJvdXRlKTtcbiAgICAgICAgdGhpcy51cGRhdGUocmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX25hdmkuX3B1c2hQYWdlKG9wdGlvbnMsIHVwZGF0ZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wYWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9uYXZpLl9pc1J1bm5pbmc7XG4gIH1cblxuICAvKlxuICAgKiBAbWV0aG9kIHJlcGxhY2VQYWdlXG4gICAqIEBzaWduYXR1cmUgcmVwbGFjZVBhZ2UocGFnZSwgW29wdGlvbnNdKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl1Qcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBuZXcgcGFnZS5bL2VuXVxuICAgKiAgIFtqYV3mlrDjgZfjgYTjg5rjg7zjgrjjgpLop6PmsbrjgZnjgotQcm9taXNl44KS6L+U44GX44G+44GZ44CCWy9qYV1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXVJlcGxhY2VzIHRoZSBjdXJyZW50IHRvcCBwYWdlIHdpdGggdGhlIHNwZWNpZmllZCBvbmUuIEV4dGVuZHMgYHB1c2hQYWdlKClgIHBhcmFtZXRlcnMuWy9lbl1cbiAgICogICBbamFd54++5Zyo6KGo56S65Lit44Gu44Oa44O844K444KS44KS5oyH5a6a44GX44Gf44Oa44O844K444Gr572u44GN5o+b44GI44G+44GZ44CCWy9qYV1cbiAgICovXG4gIHJlcGxhY2VQYWdlKHJvdXRlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHRoaXMucHJvcHMucmVuZGVyUGFnZShyb3V0ZSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZShyZXNvbHZlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fbmF2aS5fcHVzaFBhZ2Uob3B0aW9ucywgdXBkYXRlKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnBhZ2VzLnNwbGljZSh0aGlzLnBhZ2VzLmxlbmd0aCAtIDIsIDEpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBwb3BQYWdlXG4gICAqIEBzaWduYXR1cmUgcG9wUGFnZShyb3V0ZSwgb3B0aW9ucyA9IHt9KVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl0gUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgcmV2ZWFsZWQgcGFnZS5bL2VuXVxuICAgKiAgIFtqYV3mmI7jgonjgYvjgavjgZfjgZ/jg5rjg7zjgrjjgpLop6PmsbrjgZnjgotQcm9taXNl44KS6L+U44GX44G+44GZ44CCWy9qYV1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXSBQb3BzIGEgcGFnZSBvdXQgb2YgdGhlIHBhZ2Ugc3RhY2tbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgcG9wUGFnZShvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5wYWdlcy5wb3AoKTtcbiAgICAgICAgdGhpcy51cGRhdGUocmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX25hdmkuX3BvcFBhZ2Uob3B0aW9ucywgdXBkYXRlKTtcbiAgfVxuXG4gIF9vbkRldmljZUJhY2tCdXR0b24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZUNvbmZpZy5yb3V0ZVN0YWNrLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMucG9wUGFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5jYWxsUGFyZW50SGFuZGxlcigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9uYXZpO1xuXG4gICAgdGhpcy5jYW5jZWxVcGRhdGUgPSBmYWxzZTtcblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlcHVzaCcsIHRoaXMub25QcmVQdXNoKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3Bvc3RwdXNoJywgdGhpcy5vblBvc3RQdXNoKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3ByZXBvcCcsIHRoaXMub25QcmVQb3ApO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdHBvcCcsIHRoaXMub25Qb3N0UG9wKTtcblxuICAgIGlmICghdGhpcy5wcm9wcy5yb3V0ZUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbiBSb3V0ZXJOYXZpZ2F0b3IgdGhlIHByb3BlcnR5IHJvdXRlQ29uZmlnIG5lZWRzIHRvIGJlIHNldCcpO1xuICAgIH1cblxuICAgIHRoaXMucm91dGVDb25maWcgPSB0aGlzLnByb3BzLnJvdXRlQ29uZmlnO1xuXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMucm91dGVDb25maWcucm91dGVTdGFjay5tYXAoXG4gICAgICAocm91dGUpID0+IHRoaXMucHJvcHMucmVuZGVyUGFnZShyb3V0ZSwgdGhpcylcbiAgICApO1xuXG4gICAgbm9kZS5zd2lwZU1heCA9IHRoaXMucHJvcHMuc3dpcGVQb3A7XG4gICAgbm9kZS5vbkRldmljZUJhY2tCdXR0b24gPSB0aGlzLnByb3BzLm9uRGV2aWNlQmFja0J1dHRvbiB8fCB0aGlzLl9vbkRldmljZUJhY2tCdXR0b24uYmluZCh0aGlzKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgY29uc3QgcHJvY2Vzc1N0YWNrID0gWy4uLm5ld1Byb3BzLnJvdXRlQ29uZmlnLnByb2Nlc3NTdGFja107XG5cbiAgICBpZiAobmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX25hdmkub25EZXZpY2VCYWNrQnV0dG9uID0gbmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpeCBmb3IgUmVkdXggVGltZXRyYXZlbC5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZUNvbmZpZy5wcm9jZXNzU3RhY2subGVuZ3RoIDwgbmV3UHJvcHMucm91dGVDb25maWcucHJvY2Vzc1N0YWNrLmxlbmd0aCAmJlxuICAgICAgdGhpcy5wcm9wcy5yb3V0ZUNvbmZpZy5yb3V0ZVN0YWNrLmxlbmd0aCA+IG5ld1Byb3BzLnJvdXRlQ29uZmlnLnJvdXRlU3RhY2subGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3NTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB7dHlwZSwgcm91dGUsIG9wdGlvbnN9ID0gcHJvY2Vzc1N0YWNrWzBdO1xuXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgdGhpcy5wdXNoUGFnZShyb3V0ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BvcCc6XG4gICAgICAgICAgdGhpcy5wb3BQYWdlKG9wdGlvbnMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm91dGUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UGFnZVN0YWNrKHJvdXRlLCBvcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNldFBhZ2VTdGFjayhbcm91dGVdLCBvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgIHRoaXMucmVwbGFjZVBhZ2Uocm91dGUsIG9wdGlvbnMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0eXBlICR7dHlwZX0gaW4gcHJvY2Vzc1N0YWNrYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX25hdmk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVwdXNoJywgdGhpcy5vblByZVB1c2gpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9zdHB1c2gnLCB0aGlzLm9uUG9zdFB1c2gpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJlcG9wJywgdGhpcy5vblByZVBvcCk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0cG9wJywgdGhpcy5vblBvc3RQb3ApO1xuICAgIHRoaXMuY2FuY2VsVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvKiBXaGVuIHRoZSBjb21wb25lbnQgdXBkYXRlcyB3ZSBub3cgaGF2ZSB0aGUgcGFnZSB3ZSdyZSBwdXNoaW5nIGluIG91ciByb3V0ZUNvbmZpZywgc28gd2Ugbm8gbG9uZ2VyIG5lZWQgdG8gcmVuZGVyIGl0IHNwZWNpYWxseSAqL1xuICAgIHRoaXMucGFnZSA9IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMpO1xuXG4gICAgLyogR2F0aGVyIHBhZ2VzIHRvIHJlbmRlciBhbmQgdGhlIGFuaW1hdGluZyBwYWdlIGluIG9uZSBhcnJheSBzbyBSZWFjdCByZXVzZXMgY29tcG9uZW50cy4gKi9cbiAgICBjb25zdCBwYWdlc1RvUmVuZGVyID0gdGhpcy5wcm9wcy5yb3V0ZUNvbmZpZy5yb3V0ZVN0YWNrLm1hcChyb3V0ZSA9PiB0aGlzLnByb3BzLnJlbmRlclBhZ2Uocm91dGUpKTtcbiAgICBwYWdlc1RvUmVuZGVyLnB1c2godGhpcy5wYWdlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8b25zLW5hdmlnYXRvciB7IC4uLmF0dHJzIH0gcmVmPXsobmF2aSkgPT4geyB0aGlzLl9uYXZpID0gbmF2aTsgfX0+XG4gICAgICAgIHtwYWdlc1RvUmVuZGVyfVxuICAgICAgPC9vbnMtbmF2aWdhdG9yPlxuICAgICk7XG4gIH1cbn1cblxuUm91dGVyTmF2aWdhdG9yLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlclBhZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGZ1bmN0aW9uIHRha2VzIHRoZSBjdXJyZW50IHJvdXRlIG9iamVjdCBhcyBhIHBhcmFtZXRlciBhbmQgcmV0dXJucyBhIHJlYWN0IGNvbXBvbmVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlclBhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAbmFtZSByb3V0ZUNvbmZpZ1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIG9iamVjdCBtdXN0IGNvbnRhaW4gdHdvIHByb3BlcnRpZXM6XG4gICAqICBgcm91dGVTdGFja2A6IEFuIGFycmF5IG9mIHJvdXRlIG9iamVjdHMsXG4gICAqICBgcHJvY2Vzc1N0YWNrYDogQW4gYXJyYXkgb2YgcHJvY2VzcyBvYmplY3RzIGB7IHR5cGU6IHB1c2ggfCBwb3AgfCByZXNldCwgcm91dGU6IHVzZXJSb3V0ZSB9YCB0aGF0XG4gICAqICBkZXNjcmliZSB0aGUgdHJhbnNpdGlvbiBmcm9tIHRoZSBjdXJyZW50IHN0YXRlIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgKiAgTWFrZSBzdXJlIHRoYXQgdGhlIHJvdXRlIHN0YWNrIGlzIG5vdCBlbXB0aWVkIGJlZm9yZSB0aGUgYW5pbWF0aW9ucyBmb3IgdGhlIGBwcm9jZXNzU3RhY2tgIGhhdmUgY29tcGxldGVkLlxuICAgKiAgSXQgaXMgcmVjb21tZW5kZWQgdG8gdXBkYXRlIHRoZSBgcm91dGVTdGFja2AgYW5kIGVtcHR5IHRoZSBgcHJvY2Vzc1N0YWNrYCBpbiB0aGUgJ29uUG9zdFBvcCcgY2FsbGJhY2suXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByb3V0ZUNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICByb3V0ZVN0YWNrOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBwcm9jZXNzU3RhY2s6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZVB1c2hcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSBhIHBhZ2UgaXMgcHVzaGVkLlsvZW5dXG4gICAqL1xuICBvblByZVB1c2g6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RQdXNoXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBhZnRlciBhIHBhZ2UgaXMgcHVzaGVkLlsvZW5dXG4gICAqL1xuICBvblBvc3RQdXNoOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVQb3BcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSBhIHBhZ2UgaXMgcG9wcGVkLlsvZW5dXG4gICAqL1xuICBvblByZVBvcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFBvcFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgYSBwYWdlIGlzIHBvcHBlZC5bL2VuXVxuICAgKi9cbiAgb25Qb3N0UG9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQHByb3BlcnR5IGFuaW1hdGlvblxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dXG4gICAqICAgICBBbmltYXRpb24gbmFtZS4gQXZhaWxhYmxlIGFuaW1hdGlvbnMgYXJlIGBcInNsaWRlXCJgLCBgXCJsaWZ0XCJgLCBgXCJmYWRlXCJgIGFuZCBgXCJub25lXCJgLlxuICAgKiAgICAgVGhlc2UgYXJlIHBsYXRmb3JtIGJhc2VkIGFuaW1hdGlvbnMuIEZvciBmaXhlZCBhbmltYXRpb25zLCBhZGQgYFwiLWlvc1wiYCBvciBgXCItbWRcImAgc3VmZml4IHRvIHRoZSBhbmltYXRpb24gbmFtZS4gRS5nLiBgXCJsaWZ0LWlvc1wiYCwgYFwibGlmdC1tZFwiYC4gRGVmYXVsdHMgdmFsdWVzIGFyZSBgXCJzbGlkZS1pb3NcImAgYW5kIGBcImZhZGUtbWRcImAuXG4gICAqICAgWy9lbl1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgYW5pbWF0aW9uJ3MgZHVyYXRpb24sIGRlbGF5IGFuZCB0aW1pbmcuIEUuZy4gIGB7ZHVyYXRpb246IDAuMiwgZGVsYXk6IDAuNCwgdGltaW5nOiAnZWFzZS1pbid9YC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZWFibGVcbiAgICogQHR5cGUgYm9vbHxzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgRW5hYmxlcyBzd2lwZS10by1wb3AgZnVuY3Rpb25hbGl0eSBmb3IgaU9TLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3dpcGVhYmxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZVBvcFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBGdW5jdGlvbiBjYWxsZWQgb24gc3dpcGUtdG8tcG9wLiBNdXN0IHBlcmZvcm0gYSBwb3BQYWdlIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMgb2JqZWN0LlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3dpcGVQb3A6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRldmljZUJhY2tCdXR0b25cbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VzdG9tIGhhbmRsZXIgZm9yIGRldmljZSBiYWNrIGJ1dHRvbi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uRGV2aWNlQmFja0J1dHRvbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlck5hdmlnYXRvcjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXJvd1xuICogQGNhdGVnb3J5IGdyaWRcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogUmVwcmVzZW50cyBhIHJvdyBpbiB0aGUgZ3JpZCBzeXN0ZW0uIFVzZSB3aXRoIGBDb2xgIHRvIGxheW91dCBjb21wb25lbnRzLlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogPFJvdz5cbiAqICAgPENvbCB3aWR0aD17NTB9PlxuICAqICAgPG9ucy1pY29uIGljb249XCJmYS10d2l0dGVyXCI+PC9vbnMtaWNvbj5cbiAqICAgPC9Db2w+XG4gKiAgIDxDb2w+VGV4dDwvQ29sPlxuICogPC9Sb3c+XG4gKi9cbmNsYXNzIFJvdyBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtcm93JztcbiAgfVxufVxuXG5Sb3cucHJvcFR5cGVzID0ge1xuXG4gIC8qKlxuICAqIEBuYW1lIHZlcnRpY2FsQWxpZ25cbiAgKiBAdHlwZSB7U3RyaW5nfVxuICAqIEBkZXNjcmlwdGlvblxuICAqICAgW2VuXVNob3J0IGhhbmQgYXR0cmlidXRlIGZvciBhbGlnbmluZyB2ZXJ0aWNhbGx5LiBWYWxpZCB2YWx1ZXMgYXJlIHRvcCwgYm90dG9tLCBhbmQgY2VudGVyLlsvZW5dXG4gICogICBbamFdWy9qYV1cbiAgKi9cbiAgdmVydGljYWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbScsICdjZW50ZXInXSlcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm93O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlSW5wdXQgZnJvbSAnLi9CYXNlSW5wdXQuanN4JztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXNlYXJjaC1pbnB1dFxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2Uvc2VhcmNoLWlucHV0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICBBIHNlYXJjaCBpbnB1dCBjb21wb25lbnQuIFRoZSBjb21wb25lbnQgd2lsbCBhdXRvbWF0aWNhbGx5IHJlbmRlciBhcyBhIE1hdGVyaWFsIERlc2lnbiBzZWFyY2ggaW5wdXQgb24gQW5kcm9pZCBkZXZpY2VzLlxuICpcbiAqICBNb3N0IGF0dHJpYnV0ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYSBub3JtYWwgYDxpbnB1dD5gIGVsZW1lbnQgY2FuIGFsc28gYmUgdXNlZCBvbiB0aGUgYDxTZWFyY2hJbnB1dD5gIGNvbXBvbmVudC5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8U2VhcmNoSW5wdXRcbiAqICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH1cbiAqICAgb25DaGFuZ2U9eyhldmVudCkgPT4geyB0aGlzLnNldFN0YXRlKHt0ZXh0OiBldmVudC50YXJnZXQudmFsdWV9KX0gfVxuICogICBtb2RpZmllcj0nbWF0ZXJpYWwnXG4gKiAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgLz5cbiAqL1xuY2xhc3MgU2VhcmNoSW5wdXQgZXh0ZW5kcyBCYXNlSW5wdXQge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtc2VhcmNoLWlucHV0JztcbiAgfVxufVxuXG5TZWFyY2hJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBpbnB1dC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgd2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNoYW5nZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgd2hlbiB0aGUgdGV4dCBvZiB0aGUgaW5wdXQgY2hhbmdlcy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZhbHVlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Db250ZW50IG9mIHRoZSBpbnB1dC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKVxuICBdKSxcblxuICAvKipcbiAgICogQG5hbWUgaW5wdXRJZFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dICBTcGVjaWZ5IHRoZSBcImlkXCIgYXR0cmlidXRlIG9mIHRoZSBpbm5lciBgPGlucHV0PmAgZWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgd2hlbiB1c2luZyA8bGFiZWwgZm9yPVwiLi4uXCI+IGVsZW1lbnRzIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlucHV0SWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaElucHV0O1xuIiwiaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtmaW5kRE9NTm9kZX0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1zZWdtZW50XG4gKiBAY2F0ZWdvcnkgY29udHJvbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9zZWdtZW50XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICAgU2VnbWVudCBjb21wb25lbnQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFNlZ21lbnQgbW9kaWZpZXI9XCJtYXRlcmlhbFwiPlxuICogIDxidXR0b24+TGFiZWwgMTwvYnV0dG9uPlxuICogIDxidXR0b24+TGFiZWwgMjwvYnV0dG9uPlxuICogIDxidXR0b24+TGFiZWwgMzwvYnV0dG9uPlxuICogPC9TZWdtZW50PlxuICovXG5jbGFzcyBTZWdtZW50IGV4dGVuZHMgQmFzaWNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLm9uUG9zdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Qb3N0Q2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uUG9zdENoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1zZWdtZW50JztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0Y2hhbmdlJywgdGhpcy5vblBvc3RDaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0Y2hhbmdlJywgdGhpcy5vblBvc3RDaGFuZ2UpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCBub2RlID0gZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pbmRleCAhPT0gcHJvcHMuaW5kZXggJiYgcHJvcHMuaW5kZXggIT09IG5vZGUuZ2V0QWN0aXZlQnV0dG9uSW5kZXgoKSkge1xuICAgICAgbm9kZS5zZXRBY3RpdmVCdXR0b24ocHJvcHMuaW5kZXgsIHsgcmVqZWN0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMsIHRoaXMucHJvcHMsIHsgaW5kZXg6ICdhY3RpdmUtaW5kZXgnIH0pO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMuX2dldERvbU5vZGVOYW1lKCksIGF0dHJzLCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufVxuXG5TZWdtZW50LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIGluZGV4XG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAcmVxdWlyZWRcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoZSBpbmRleCBvZiB0aGUgYnV0dG9uIHRvIGhpZ2hsaWdodC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbmRleDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQG5hbWUgdGFiYmFySWRcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBJRCBvZiB0aGUgYDxUYWJiYXI+YCB0byBcImNvbm5lY3RcIiB0byB0aGUgc2VnbWVudC4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdGFiYmFySWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHNlZ21lbnQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgd2hlbiB0aGUgYWN0aXZlIGJ1dHRvbiBjaGFuZ2VzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdENoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlZ21lbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlSW5wdXQgZnJvbSAnLi9CYXNlSW5wdXQuanN4JztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1zZWxlY3RcbiAqIEBjYXRlZ29yeSBmb3JtXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3NlbGVjdFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiAgIFNlbGVjdCBpbnB1dCBjb21wb25lbnQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFNlbGVjdCBtb2RpZmllcj1cIm1hdGVyaWFsXCJcbiAqICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gKiAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KX1cbiAqICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XG4gKiAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mm5kPC9vcHRpb24+XG4gKiAgIDxvcHRpb24gdmFsdWU9XCIzXCI+M3JkIG9wdGlvbjwvb3B0aW9uPlxuICogPC9TZWxlY3Q+XG4gKi9cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEJhc2VJbnB1dCB7XG4gIGdldCBFVkVOVF9UWVBFUygpIHtcbiAgICByZXR1cm4gWydjaGFuZ2UnXTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMsIHByb3BzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8b25zLXNlbGVjdCB7IC4uLmF0dHJzIH0+XG4gICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9vbnMtc2VsZWN0PlxuICAgICk7XG4gIH1cbn1cblxuU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgc2VsZWN0IGJveC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgd2hldGhlciB0aGUgc2VsZWN0IGlzIGRpc2FibGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25DaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QgY2hhbmdlcy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZhbHVlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Vc2UgdGhpcyBwcm9wIHRvIHNldCB0aGUgc2VsZWN0ZWQgb3B0aW9uIHZhbHVlLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtdWx0aXBsZVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRoaXMgYXR0cmlidXRlIGlzIGRlZmluZWQsIG11bHRpcGxlIG9wdGlvbnMgY2FuIGJlIHNlbGVjdGVkIGF0IG9uY2UuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhdXRvZm9jdXNcbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1FbGVtZW50IGF1dG9tYXRpY2FsbHkgZ2FpbnMgZm9jdXMgb24gcGFnZSBsb2FkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlcXVpcmVkXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dTWFrZSB0aGUgc2VsZWN0IGlucHV0IHJlcXVpcmVkIGZvciBzdWJtaXR0aW5nIHRoZSBmb3JtIGl0IGlzIHBhcnQgb2YuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBmb3JtXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Bc3NvY2lhdGUgYSBzZWxlY3QgZWxlbWVudCB0byBhbiBleGlzdGluZyBmb3JtIG9uIHRoZSBwYWdlLCBldmVuIGlmIG5vdCBuZXN0ZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZm9ybTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgc2l6ZVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSG93IG1hbnkgb3B0aW9ucyBhcmUgZGlzcGxheWVkOyBpZiB0aGVyZSBhcmUgbW9yZSB0aGFuIHRoZSBzaXplIHRoZW4gYSBzY3JvbGwgYXBwZWFycyB0byBuYXZpZ2F0ZSB0aGVtWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1zcGVlZC1kaWFsXG4gKiBAY2F0ZWdvcnkgY29udHJvbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9zcGVlZC1kaWFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gRWxlbWVudCB0aGF0IGRpc3BsYXlzIGEgTWF0ZXJpYWwgRGVzaWduIFNwZWVkIERpYWxvZyBjb21wb25lbnQuIEl0IGlzIHVzZWZ1bCB3aGVuIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIHByaW1hcnkgYWN0aW9uIHRoYXQgY2FuIGJlIHBlcmZvcm1lZCBpbiBhIHBhZ2UuXG4gKiAgVGhlIFNwZWVkIGRpYWwgbG9va3MgbGlrZSBhIGBGYWJgIGVsZW1lbnQgYnV0IHdpbGwgZXhwYW5kIGEgbWVudSB3aGVuIHRhcHBlZC5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFNwZWVkRGlhbCBkaXNhYmxlZD17ZmFsc2V9IGRpcmVjdGlvbj0ncmlnaHQnIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCd0ZXN0MScpfSBwb3NpdGlvbj0nbGVmdCBib3R0b20nPlxuICAgICA8RmFiPlxuICAgICAgIDxJY29uIGljb249J2ZhLXR3aXR0ZXInIHNpemU9ezI2fSBmaXhlZFdpZHRoPXtmYWxzZX0gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319IC8+XG4gICAgIDwvRmFiPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgQScpfT4gQSA8L1NwZWVkRGlhbEl0ZW0+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBCJyl9PiBCIDwvU3BlZWREaWFsSXRlbT5cbiAgICAgPFNwZWVkRGlhbEl0ZW0gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3NwZWVkIEMnKX0+IEMgPC9TcGVlZERpYWxJdGVtPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgRCcpfT4gRCA8L1NwZWVkRGlhbEl0ZW0+XG4gICA8L1NwZWVkRGlhbD5cbiAqL1xuY2xhc3MgU3BlZWREaWFsIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1zcGVlZC1kaWFsJztcbiAgfVxufVxuXG5TcGVlZERpYWwucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgc3BlZWQgZGlhbC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgcG9zaXRpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsIHBvc2l0aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gICAqICAgICBJLmUuIHRvIGRpc3BsYXkgaXQgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIgc3BlY2lmeSBcInJpZ2h0IHRvcFwiLlxuICAgKiAgICAgQ2hvb3NlIGZyb20gXCJyaWdodFwiLCBcImxlZnRcIiwgXCJ0b3BcIiBhbmQgXCJib3R0b21cIi5cblsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXJlY3Rpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGRpcmVjdGlvbiB0aGUgaXRlbXMgYXJlIGRpc3BsYXllZC4gUG9zc2libGUgdmFsdWVzIGFyZSBcInVwXCIsIFwiZG93blwiLCBcImxlZnRcIiBhbmQgXCJyaWdodFwiLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndXAnLCAnZG93bicsICdsZWZ0JywgJ3JpZ2h0J10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSBpZiBidXR0b24gc2hvdWxkIGJlIGRpc2FibGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlZWREaWFsO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXNwZWVkLWRpYWwtaXRlbVxuICogQGNhdGVnb3J5IGNvbnRyb2xcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2Uvc3BlZWQtZGlhbFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFRoaXMgY29tcG9uZW50IGRpc3BsYXlzIHRoZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIFNwZWVkIGRpYWwgY29tcG9uZW50LiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFNwZWVkRGlhbCBkaXNhYmxlZD17ZmFsc2V9IGRpcmVjdGlvbj0ncmlnaHQnIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCd0ZXN0MScpfSBwb3NpdGlvbj0nbGVmdCBib3R0b20nPlxuICAgICA8RmFiPlxuICAgICAgIDxJY29uIGljb249J2ZhLXR3aXR0ZXInIHNpemU9ezI2fSBmaXhlZFdpZHRoPXtmYWxzZX0gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319IC8+XG4gICAgIDwvRmFiPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgQScpfT4gQSA8L1NwZWVkRGlhbEl0ZW0+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBCJyl9PiBCIDwvU3BlZWREaWFsSXRlbT5cbiAgICAgPFNwZWVkRGlhbEl0ZW0gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3NwZWVkIEMnKX0+IEMgPC9TcGVlZERpYWxJdGVtPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgRCcpfT4gRCA8L1NwZWVkRGlhbEl0ZW0+XG4gICA8L1NwZWVkRGlhbD5cbiAqL1xuY2xhc3MgU3BlZWREaWFsSXRlbSBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLm9uQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtc3BlZWQtZGlhbC1pdGVtJztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgdmFyIG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHZhciBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gIH1cbn1cblxuU3BlZWREaWFsSXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2xpY2tcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgb25lcyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVlZERpYWxJdGVtO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1zcGxpdHRlclxuICogQGNhdGVnb3J5IG1lbnVcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2Uvc3BsaXR0ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSAgQSBjb21wb25lbnQgdGhhdCBlbmFibGVzIHJlc3BvbnNpdmUgbGF5b3V0IGJ5IGltcGxlbWVudGluZyBib3RoIGEgdHdvLWNvbHVtbiBsYXlvdXQgYW5kIGEgc2xpZGluZyBtZW51IGxheW91dC5cbiAqXG4gKiAgICBJdCBjYW4gYmUgY29uZmlndXJlZCB0byBhdXRvbWF0aWNhbGx5IGV4cGFuZCBpbnRvIGEgY29sdW1uIGxheW91dCBvbiBsYXJnZSBzY3JlZW5zIGFuZCBjb2xsYXBzZSB0aGUgbWVudSBvbiBzbWFsbGVyIHNjcmVlbnMuIFdoZW4gdGhlIG1lbnUgaXMgY29sbGFwc2VkIHRoZSB1c2VyIGNhbiBvcGVuIGl0IGJ5IHN3aXBpbmcuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgPFNwbGl0dGVyPlxuICAgIDxTcGxpdHRlclNpZGVcbiAgICAgIHNpZGU9XCJsZWZ0XCJcbiAgICAgIHdpZHRoPXsyMDB9XG4gICAgICBpc1N3aXBlYWJsZT17dHJ1ZX0+XG4gICAgICA8UGFnZT4gUGFnZSBMZWZ0IDwvUGFnZT5cbiAgICA8L1NwbGl0dGVyU2lkZT5cbiAgICA8U3BsaXR0ZXJDb250ZW50PlxuICAgICAgPFBhZ2U+IFBhZ2UgQ29udGVudCA8L1BhZ2U+XG4gICAgPC9TcGxpdHRlckNvbnRlbnQ+XG4gICAgPFNwbGl0dGVyU2lkZVxuICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgIHdpZHRoPXszMDB9XG4gICAgICBjb2xsYXBzZT17IXRoaXMuc3RhdGUuc2hvd1JpZ2h0fVxuICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW5SaWdodH1cbiAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlUmlnaHRDbG9zZS5iaW5kKHRoaXMpfVxuICAgICAgb25PcGVuPXt0aGlzLmhhbmRsZVJpZ2h0T3Blbi5iaW5kKHRoaXMpfVxuICAgICAgaXNTd2lwZWFibGU9e3RydWV9PlxuICAgICAgPFBhZ2U+IFBhZ2UgUmlnaHQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICA8L1NwbGl0dGVyPlxuICovXG5cbmNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1zcGxpdHRlcic7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRGV2aWNlQmFja0J1dHRvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBub2RlLm9uRGV2aWNlQmFja0J1dHRvbiA9IHRoaXMucHJvcHMub25EZXZpY2VCYWNrQnV0dG9uO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICBpZiAobmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLm9uRGV2aWNlQmFja0J1dHRvbiA9IG5ld1Byb3BzLm9uRGV2aWNlQmFja0J1dHRvbjtcbiAgICB9XG4gIH1cbn1cblxuU3BsaXR0ZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgb25EZXZpY2VCYWNrQnV0dG9uXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1c3RvbSBoYW5kbGVyIGZvciBkZXZpY2UgYmFjayBidXR0b24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkRldmljZUJhY2tCdXR0b246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdHRlcjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXNwbGl0dGVyLWNvbnRlbnRcbiAqIEBjYXRlZ29yeSBtZW51XG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3NwbGl0dGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gIFRoZSBTcGxpdHRlckNvbnRlbnQgIGVsZW1lbnQgaXMgdXNlZCBhcyBhIGNoaWxkIGVsZW1lbnQgb2YgU3BsaXR0ZXIuXG4gKiAgICBJdCBjb250YWlucyB0aGUgbWFpbiBjb250ZW50IG9mIHRoZSBwYWdlIHdoaWxlIFNwbGl0dGVyU2lkZSBjb250YWlucyB0aGUgbGlzdC5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICA8U3BsaXR0ZXI+XG4gICAgPFNwbGl0dGVyU2lkZVxuICAgICAgc2lkZT1cImxlZnRcIlxuICAgICAgd2lkdGg9ezIwMH1cbiAgICAgIGlzU3dpcGVhYmxlPXt0cnVlfT5cbiAgICAgIDxQYWdlPiBQYWdlIExlZnQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICAgIDxTcGxpdHRlckNvbnRlbnQ+XG4gICAgICA8UGFnZT4gUGFnZSBDb250ZW50IDwvUGFnZT5cbiAgICA8L1NwbGl0dGVyQ29udGVudD5cbiAgICA8U3BsaXR0ZXJTaWRlXG4gICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgd2lkdGg9ezMwMH1cbiAgICAgIGNvbGxhcHNlPXshdGhpcy5zdGF0ZS5zaG93UmlnaHR9XG4gICAgICBpc09wZW49e3RoaXMuc3RhdGUub3BlblJpZ2h0fVxuICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVSaWdodENsb3NlLmJpbmQodGhpcyl9XG4gICAgICBvbk9wZW49e3RoaXMuaGFuZGxlUmlnaHRPcGVuLmJpbmQodGhpcyl9XG4gICAgICBpc1N3aXBlYWJsZT17dHJ1ZX0+XG4gICAgICA8UGFnZT4gUGFnZSBSaWdodCA8L1BhZ2U+XG4gICAgPC9TcGxpdHRlclNpZGU+XG4gIDwvU3BsaXR0ZXI+XG4gKi9cbmNsYXNzIFNwbGl0dGVyQ29udGVudCBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtc3BsaXR0ZXItY29udGVudCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsaXR0ZXJDb250ZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCYXNpY0NvbXBvbmVudCBmcm9tICcuL0Jhc2ljQ29tcG9uZW50LmpzeCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwuanMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtc3BsaXR0ZXItc2lkZVxuICogQGNhdGVnb3J5IG1lbnVcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2Uvc3BsaXR0ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSAgVGhlIFNwbGl0dGVyQ29udGVudCAgZWxlbWVudCBpcyB1c2VkIGFzIGEgY2hpbGQgZWxlbWVudCBvZiBTcGxpdHRlci5cbiAqICAgIEl0IGNvbnRhaW5zIHRoZSBtYWluIGNvbnRlbnQgb2YgdGhlIHBhZ2Ugd2hpbGUgU3BsaXR0ZXJTaWRlIGNvbnRhaW5zIHRoZSBsaXN0LlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gIDxTcGxpdHRlcj5cbiAgICA8U3BsaXR0ZXJTaWRlXG4gICAgICBzaWRlPVwibGVmdFwiXG4gICAgICB3aWR0aD17MjAwfVxuICAgICAgc3dpcGVhYmxlPXt0cnVlfT5cbiAgICAgIDxQYWdlPiBQYWdlIExlZnQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICAgIDxTcGxpdHRlckNvbnRlbnQ+XG4gICAgICA8UGFnZT4gUGFnZSBDb250ZW50IDwvUGFnZT5cbiAgICA8L1NwbGl0dGVyQ29udGVudD5cbiAgICA8U3BsaXR0ZXJTaWRlXG4gICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgd2lkdGg9ezMwMH1cbiAgICAgIGNvbGxhcHNlPXshdGhpcy5zdGF0ZS5zaG93UmlnaHR9XG4gICAgICBpc09wZW49e3RoaXMuc3RhdGUub3BlblJpZ2h0fVxuICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVSaWdodENsb3NlLmJpbmQodGhpcyl9XG4gICAgICBvbk9wZW49e3RoaXMuaGFuZGxlUmlnaHRPcGVuLmJpbmQodGhpcyl9XG4gICAgICBzd2lwZWFibGU9e3RydWV9PlxuICAgICAgPFBhZ2U+IFBhZ2UgUmlnaHQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICA8L1NwbGl0dGVyPlxuICovXG5cbmNsYXNzIFNwbGl0dGVyU2lkZSBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAobmFtZSwgZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzW25hbWVdKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25PcGVuID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25PcGVuJyk7XG4gICAgdGhpcy5vbkNsb3NlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25DbG9zZScpO1xuICAgIHRoaXMub25QcmVPcGVuID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVPcGVuJyk7XG4gICAgdGhpcy5vblByZUNsb3NlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVDbG9zZScpO1xuICAgIHRoaXMub25Nb2RlQ2hhbmdlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Nb2RlQ2hhbmdlJyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIHRoaXMubm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyh0aGlzLnByb3BzKTtcblxuICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0b3BlbicsIHRoaXMub25PcGVuKTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdGNsb3NlJywgdGhpcy5vbkNsb3NlKTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlb3BlbicsIHRoaXMub25QcmVPcGVuKTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlY2xvc2UnLCB0aGlzLm9uUHJlQ2xvc2UpO1xuICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb2RlY2hhbmdlJywgdGhpcy5vbk1vZGVDaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bvc3RvcGVuJywgdGhpcy5vbk9wZW4pO1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0Y2xvc2UnLCB0aGlzLm9uQ2xvc2UpO1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVvcGVuJywgdGhpcy5vblByZU9wZW4pO1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVjbG9zZScsIHRoaXMub25QcmVDbG9zZSk7XG4gICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vZGVjaGFuZ2UnLCB0aGlzLm9uTW9kZUNoYW5nZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgaWYgKG5ld1Byb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5ub2RlLm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIFsnaXNDb2xsYXBzZWQnLCAnaXNTd2lwZWFibGUnXS5mb3JFYWNoKHAgPT4gdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShwKSAmJiBjb25zb2xlLmVycm9yKFxuICAgICAgYFRoZSBwcm9wZXJ0eSAnJHtwfScgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSAnJHtwLnRvTG93ZXJDYXNlKCkuc2xpY2UoMil9Jywgc2VlIGh0dHBzOi8vb25zZW4uaW8vdjIvZG9jcy9yZWFjdC9TcGxpdHRlclNpZGUuaHRtbC5gXG4gICAgKSk7XG5cbiAgICBjb25zdCB7IGlzT3BlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMsIHByb3BzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8b25zLXNwbGl0dGVyLXNpZGUgeyAuLi5hdHRycyB9ID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L29ucy1zcGxpdHRlci1zaWRlPlxuICAgICk7XG4gIH1cbn1cblxuU3BsaXR0ZXJTaWRlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIGNvbGxhcHNlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gU3BlY2lmeSB0aGUgY29sbGFwc2UgYmVoYXZpb3IuIFZhbGlkIHZhbHVlcyBhcmUgYFwicG9ydHJhaXRcImAsIGBcImxhbmRzY2FwZVwiYCBvciBhIG1lZGlhIHF1ZXJ5LlxuICAgKiAgICAgVGhlIHN0cmluZ3MgYFwicG9ydHJhaXRcImAgYW5kIGBcImxhbmRzY2FwZVwiYCBtZWFucyB0aGUgdmlldyB3aWxsIGNvbGxhcHNlIHdoZW4gZGV2aWNlIGlzIGluIGxhbmRzY2FwZSBvciBwb3J0cmFpdCBvcmllbnRhdGlvbi5cbiAgICogICAgIElmIHRoZSB2YWx1ZSBpcyBub3QgZGVmaW5lZCwgdGhlIHZpZXcgYWx3YXlzIGJlIGluIGBcImNvbGxhcHNlXCJgIG1vZGUuXG5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBjb2xsYXBzZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQG5hbWUgc3dpcGVhYmxlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dRW5uYWJsZSBzd2lwZSBpbnRlcmFjdGlvbiBvbiBjb2xsYXBzZSBtb2RlLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHN3aXBlYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzT3BlblxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZmllcyB3aGV0aGVyIHRoZSBtZW51IGlzIG9wZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25PcGVuXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBhZnRlciB0aGUgbWVudSBpcyBvcGVuZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25DbG9zZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgYWZ0ZXIgdGhlIG1lbnUgaXMgY2xvc2VkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzaWRlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHdoaWNoIHNpZGUgb2YgdGhlIHNjcmVlbiB0aGUgU3BsaXR0ZXJTaWRlIGVsZW1lbnQgaXMgbG9jYXRlZC4gUG9zc2libGUgdmFsdWVzIGFyZSBgXCJsZWZ0XCJgIGFuZCBgXCJyaWdodFwiYC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBzaWRlOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZVRhcmdldFdpZHRoXG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgdGhlIHdpZHRoIG9mIHRoZSBtZW51IHdpdGggYSBudW1iZXIgKGZvciBwaXhlbHMpIG9yIGEgc3RyaW5nIChlLmcuIFwiMjAlXCIgZm9yIHBlcmNlbnRhZ2UpLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHN3aXBlVGFyZ2V0V2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQG5hbWUgd2lkdGhcbiAgICogQHR5cGUgIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgdGhlIHdpZHRoIG9mIHRoZSBtZW51IHdpdGggYSBudW1iZXIgKGZvciBwaXhlbHMpIG9yIGEgc3RyaW5nIChlLmcuIFwiMjAlXCIgZm9yIHBlcmNlbnRhZ2UpLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbi4gVXNlIG9uZSBvZiBgb3ZlcmxheWAsIGBwdXNoYCwgYHJldmVhbGAsIG9yIGBkZWZhdWx0YC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9wZW5UaHJlc2hvbGRcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gU3BlY2lmeSBob3cgbXVjaCB0aGUgbWVudSBuZWVkcyB0byBiZSBzd2lwZWQgYmVmb3JlIG9wZW5pbmcuIEEgdmFsdWUgYmV0d2VlbiBgMGAgYW5kIGAxYC4gIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9wZW5UaHJlc2hvbGQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1vZGVcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gQ3VycmVudCBtb2RlLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBcImNvbGxhcHNlXCJgIG9yIGBcInNwbGl0XCJgLiBUaGlzIGF0dHJpYnV0ZSBpcyByZWFkIG9ubHkuICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RlOiBQcm9wVHlwZXMub25lT2YoWydjb2xsYXBzZScsICdzcGxpdCddKSxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVPcGVuXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gQ2FsbGVkIGJlZm9yZSB0aGUgbWVudSBvcGVucy4gIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlQ2xvc2VcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgYmVmb3JlIHRoZSBtZW51IGNsb3Nlcy4gIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbk1vZGVDaGFuZ2VcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCdzIG1vZGUgY2hhbmdlcy4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Nb2RlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BsaXR0ZXJTaWRlO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlSW5wdXQgZnJvbSAnLi9CYXNlSW5wdXQuanN4JztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXN3aXRjaFxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2Uvc3dpdGNoXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gICBTd2l0Y2ggY29tcG9uZW50LiBUaGUgc3dpdGNoIGNhbiBiZSB0b2dnbGVkIGJvdGggYnkgZHJhZ2dpbmcgYW5kIHRhcHBpbmcuXG4gKiAgICAgV2lsbCBhdXRvbWF0aWNhbGx5IGRpc3BsYXlzIGEgTWF0ZXJpYWwgRGVzaWduIHN3aXRjaCBvbiBBbmRyb2lkIGRldmljZXMuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxTd2l0Y2ggY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gLz5cbiAqL1xuY2xhc3MgU3dpdGNoIGV4dGVuZHMgQmFzZUlucHV0IHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXN3aXRjaCc7XG4gIH1cblxuICBnZXQgRVZFTlRfVFlQRVMoKSB7XG4gICAgcmV0dXJuIFsnY2hhbmdlJ107XG4gIH1cbn1cblxuU3dpdGNoLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIHN3aXRjaCBjaGFuZ2VzIChjaGVja2VkL3VuY2hlY2tlZCkgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBjaGVja2VkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFdoZXRoZXIgdGhlIHN3aXRjaCBpcyBjaGVja2VkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBJZiBzZXQsIHRoZSBzd2l0Y2ggaXMgZGlzYWJsZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpbnB1dElkXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gU3BlY2lmeSB0aGUgYGlkYCBhdHRyaWJ1dGUgb2YgdGhlIGlubmVyIGA8aW5wdXQ+YCBlbGVtZW50LiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHVzaW5nIGA8bGFiZWwgZm9yPVwiLi4uXCI+YCBlbGVtZW50cy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbnB1dElkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXRhYlxuICogQGNhdGVnb3J5IHRhYmJhclxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS90YWJiYXJcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSBSZXByZXNlbnRzIGEgdGFiIGluc2lkZSB0YWIgYmFyLlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8VGFwPlxuICogICBIb21lXG4gKiA8L1RhcD5cbiAqL1xuY2xhc3MgVGFiIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy10YWInO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy10YWJiYXJcbiAqIEBjYXRlZ29yeSB0YWJiYXJcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvdGFiYmFyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gQ29tcG9uZW50IHRvIGRpc3BsYXkgYSB0YWJiYXIgb24gZWl0aGVyIHRoZSB0b3Agb3IgdGhlIGJvdHRvbSBvZiBhIHBhZ2UuXG4gKiBUbyBkZWZpbmUgdGhlIHRhYnMgYW5kIHRoZSBjb250ZW50IHRoZSBwcm9wZXJ0eSByZW5kZXJUYWJzIG5lZWQgdG8gYmUgaW1wbGVtZW50ZWQsIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiB0YWJzIGFuZCB0aGVpciBjb250ZW50LiBTZWUgdGhlIGV4YW1wbGUgZm9yIHNwZWNpZmljcy4gWy9lbl0qIFtqYV1bL2phXVxuICogQGV4YW1wbGVcblxuICA8UGFnZT5cbiAgICA8VGFiYmFyXG4gICAgICBvblByZUNoYW5nZT17KHtpbmRleH0pID0+IHRoaXMuc2V0U3RhdGUoaW5kZXgpfVxuICAgICAgb25Qb3N0Q2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZygncG9zdENoYW5nZScpfVxuICAgICAgb25SZWFjdGl2ZT17KCkgPT4gY29uc29sZS5sb2coJ3Bvc3RDaGFuZ2UnKX1cbiAgICAgIHBvc2l0aW9uPSdib3R0b20nXG4gICAgICBpbmRleD17dGhpcy5zdGF0ZS5pbmRleH1cbiAgICAgIHJlbmRlclRhYnM9eyhhY3RpdmVJbmRleCwgdGFiYmFyKSA9PiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiA8VGFiUGFnZSB0aXRsZT1cIkhvbWVcIiBhY3RpdmU9e2FjdGl2ZUluZGV4ID09PSAwfSB0YWJiYXI9e3RhYmJhcn0gLz4sXG4gICAgICAgICAgdGFiOiA8VGFiIGxhYmVsPVwiSG9tZVwiIGljb249XCJtZC1ob21lXCIgLz5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6IDxUYWJQYWdlIHRpdGxlPVwiU2V0dGluZ3NcIiBhY3RpdmU9e2FjdGl2ZUluZGV4ID09PSAxfSB0YWJiYXI9e3RhYmJhcn0gLz4sXG4gICAgICAgICAgdGFiOiA8VGFiIGxhYmVsPVwiU2V0dGluZ3NcIiBpY29uPVwibWQtc2V0dGluZ3NcIiAvPlxuICAgICAgICB9XVxuICAgICAgfVxuICAgIC8+XG4gIDwvUGFnZT5cbiAqL1xuXG5jbGFzcyBUYWJiYXIgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKG5hbWUsIGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wc1tuYW1lXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1tuYW1lXShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uUHJlQ2hhbmdlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVDaGFuZ2UnKTtcbiAgICB0aGlzLm9uUG9zdENoYW5nZSA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUG9zdENoYW5nZScpO1xuICAgIHRoaXMub25SZWFjdGl2ZSA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUmVhY3RpdmUnKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX3RhYmJhcjtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3ByZWNoYW5nZScsIHRoaXMub25QcmVDaGFuZ2UpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdGNoYW5nZScsIHRoaXMub25Qb3N0Q2hhbmdlKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWN0aXZlJywgdGhpcy5vblJlYWN0aXZlKTtcbiAgICBub2RlLm9uU3dpcGUgPSB0aGlzLnByb3BzLm9uU3dpcGUgfHwgbnVsbDtcbiAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5vZGUuc2V0VGFiYmFyVmlzaWJpbGl0eSh0aGlzLnByb3BzLnZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl90YWJiYXI7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVjaGFuZ2UnLCB0aGlzLm9uUHJlQ2hhbmdlKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bvc3RjaGFuZ2UnLCB0aGlzLm9uUG9zdENoYW5nZSk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWFjdGl2ZScsIHRoaXMub25SZWFjdGl2ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl90YWJiYXI7XG4gICAgaWYgKG5leHRQcm9wcy5pbmRleCAhPT0gdGhpcy5wcm9wcy5pbmRleCAmJiBuZXh0UHJvcHMuaW5kZXggIT09IG5vZGUuZ2V0QWN0aXZlVGFiSW5kZXgoKSkge1xuICAgICAgbm9kZS5zZXRBY3RpdmVUYWIobmV4dFByb3BzLmluZGV4LCB7IHJlamVjdDogZmFsc2UgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uU3dpcGUgIT09IG5leHRQcm9wcy5vblN3aXBlKSB7XG4gICAgICBub2RlLm9uU3dpcGUgPSBuZXh0UHJvcHMub25Td2lwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSAhPT0gbmV4dFByb3BzLnZpc2libGUpIHtcbiAgICAgIG5vZGUuc2V0VGFiYmFyVmlzaWJpbGl0eShuZXh0UHJvcHMudmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzLCB0aGlzLnByb3BzLCB7IGluZGV4OiAnYWN0aXZlSW5kZXgnIH0pO1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnByb3BzLnJlbmRlclRhYnModGhpcy5wcm9wcy5pbmRleCwgdGhpcyk7XG5cbiAgICBpZiAoIXRoaXMudGFiUGFnZXMpIHtcbiAgICAgIHRoaXMudGFiUGFnZXMgPSB0YWJzLm1hcCgodGFiKSA9PiB0YWIuY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFiUGFnZXNbdGhpcy5wcm9wcy5pbmRleF0gPSB0YWJzW3RoaXMucHJvcHMuaW5kZXhdLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxvbnMtdGFiYmFyIHsuLi5hdHRyc30gcmVmPXsodGFiYmFyKSA9PiB7IHRoaXMuX3RhYmJhciA9IHRhYmJhcjsgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndGFiYmFyX19jb250ZW50J30+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnRhYlBhZ2VzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3RhYmJhcid9PlxuICAgICAgICAgIHt0YWJzLm1hcCgodGFiKSA9PiB0YWIudGFiKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFiYmFyX19ib3JkZXInPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvb25zLXRhYmJhcj5cbiAgICApO1xuICB9XG59XG5cblRhYmJhci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBpbmRleFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQHJlcXVpcmVkXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBoaWdobGlnaHQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQG5hbWUgcmVuZGVyVGFic1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gRnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUga2V5cyBgY29udGVudGAgYW5kIGB0YWJgLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlclRhYnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHBvc2l0aW9uXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVGFiYmFyJ3MgcG9zaXRpb24uIEF2YWlsYWJsZSB2YWx1ZXMgYXJlIGBcImJvdHRvbVwiYCBhbmQgYFwidG9wXCJgLiBVc2UgYFwiYXV0b1wiYCB0byBjaG9vc2UgcG9zaXRpb24gZGVwZW5kaW5nIG9uIHBsYXRmb3JtIChpT1MgYm90dG9tLCBBbmRyb2lkIHRvcCkuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZWFibGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Fbm5hYmxlIHN3aXBlIGludGVyYWN0aW9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHN3aXBlYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlnbm9yZUVkZ2VXaWR0aFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dRGlzdGFuY2UgaW4gcGl4ZWxzIGZyb20gYm90aCBlZGdlcy4gU3dpcGluZyBvbiB0aGVzZSBhcmVhcyB3aWxsIHByaW9yaXRpemUgcGFyZW50IGNvbXBvbmVudHMgc3VjaCBhcyBgU3BsaXR0ZXJgIG9yIGBOYXZpZ2F0b3JgLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlnbm9yZUVkZ2VXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSWYgdGhpcyBhdHRyaWJ1dGUgaXMgc2V0IHRvIGBcIm5vbmVcImAgdGhlIHRyYW5zaXRpb25zIHdpbGwgbm90IGJlIGFuaW1hdGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzbGlkZSddKSxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuIGB7ZHVyYXRpb246IDAuMiwgZGVsYXk6IDAuNCwgdGltaW5nOiAnZWFzZS1pbid9YC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSB0YWJCb3JkZXJcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0cnVlLCB0aGUgdGFicyBzaG93IGEgZHluYW1pYyBib3R0b20gYm9yZGVyLiBPbmx5IHdvcmtzIGZvciBpT1Mgc2luY2UgdGhlIGJvcmRlciBpcyBhbHdheXMgdmlzaWJsZSBpbiBNYXRlcmlhbCBEZXNpZ24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdGFiQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVDaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSB0YWIgaXMgY2hhbmdlZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdENoYW5nZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBhZnRlciB0aGUgdGFiIGlzIGNoYW5nZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25SZWFjdGl2ZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgaWYgdGhlIGFscmVhZHkgb3BlbiB0YWIgaXMgdGFwcGVkIGFnYWluLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUmVhY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblN3aXBlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUhvb2sgY2FsbGVkIHdoZW5ldmVyIHRoZSB1c2VyIHNsaWRlcyB0aGUgdGFiYmFyLiBJdCBnZXRzIGEgZGVjaW1hbCBpbmRleCBhbmQgYW4gYW5pbWF0aW9uT3B0aW9ucyBvYmplY3QgYXMgYXJndW1lbnRzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uU3dpcGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB2aXNpYmxlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSWYgdHJ1ZSwgdGhlIHRhYmJhciBpcyBzaG93biBvbiB0aGUgc2NyZWVuLiBPdGhlcndpc2UsIHRoZSB0YWJiYXIgaXMgbm90IHNob3duLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sXG59O1xuXG5UYWJiYXIuZGVmYXVsdFByb3BzID0ge1xuICBpbmRleDogMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFiYmFyO1xuIiwiaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSAnLi9CYXNlRGlhbG9nLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtdG9hc3RcbiAqIEBjYXRlZ29yeSBkaWFsb2dcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvdG9hc3RcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogIFRoZSBUb2FzdCBvciBTbmFja2JhciBjb21wb25lbnQgaXMgdXNlZnVsIGZvciBkaXNwbGF5aW5nIGRpc21pc3NhYmxlIGluZm9ybWF0aW9uIG9yIHNpbXBsZSBhY3Rpb25zIGF0IChub3JtYWxseSkgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS5cbiAqXG4gKiAgVGhpcyBjb21wb25lbnQgZG9lcyBub3QgYmxvY2sgdXNlciBpbnB1dCwgYWxsb3dpbmcgdGhlIGFwcCB0byBjb250aW51ZSBpdHMgZmxvdy4gRnVydGhlcm1vcmUsIGl0IGNhbiBiZSBhdXRvbWF0aWNhbGx5IGhpZGRlbiBhZnRlciBhIHRpbWVvdXQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKi9cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZURpYWxvZyB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy10b2FzdCc7XG4gIH1cbn1cblxuVG9hc3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgaXNPcGVuXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdG9hc3Qgb3BlbiBhbmQgc2hvd24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUFuaW1hdGlvbiBuYW1lLiBBdmFpbGFibGUgYW5pbWF0aW9ucyBhcmUgYFwiZGVmYXVsdFwiYCwgYFwiYXNjZW5kXCJgIChBbmRyb2lkKSwgYFwibGlmdFwiYCAoaU9TKSwgYFwiZmFsbFwiYCwgYFwiZmFkZVwiYCBvciBgXCJub25lXCJgLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgdG9hc3QuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlU2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBiZWZvcmUgdGhlIHRvYXN0IGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIHRvYXN0IGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdFNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZUhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSB0aGUgdG9hc3QgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdEhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIHRoZSB0b2FzdCBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0SGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRGV2aWNlQmFja0J1dHRvblxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXN0b20gaGFuZGxlciBmb3IgZGV2aWNlIGJhY2sgYnV0dG9uLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtdG9vbGJhclxuICogQGNhdGVnb3J5IHBhZ2VcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvdG9vbGJhclxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dVG9vbGJhciBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCB3aXRoIG5hdmlnYXRpb24uIExlZnQsIGNlbnRlciBhbmQgcmlnaHQgY29udGFpbmVyIGNhbiBiZSBzcGVjaWZpZWQgYnkgY2xhc3MgbmFtZXMuIFRoaXMgY29tcG9uZW50IHdpbGwgYXV0b21hdGljYWxseSBkaXNwbGF5cyBhcyBhIE1hdGVyaWFsIERlc2lnbiB0b29sYmFyIHdoZW4gcnVubmluZyBvbiBBbmRyb2lkIGRldmljZXMuWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqXG48UGFnZSByZW5kZXJUb29sYmFyPXsoKSA9PlxuICA8VG9vbGJhcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgIDxCYWNrQnV0dG9uPlxuICAgICAgICAgIEJhY2tcbiAgICAgIDwvQmFja0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgVGl0bGVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICA8VG9vbGJhckJ1dHRvbj5cbiAgICAgICAgPEljb24gaWNvbj1cIm1kLW1lbnVcIiAvPlxuICAgICAgPC9Ub29sYmFyQnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L1Rvb2xiYXI+IH1cbi8+XG4gKi9cbmNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXRvb2xiYXInO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuc2V0VmlzaWJpbGl0eSh0aGlzLnByb3BzLnZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSAhPT0gbmV4dFByb3BzLnZpc2libGUpIHtcbiAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnNldFZpc2liaWxpdHkobmV4dFByb3BzLnZpc2libGUpO1xuICAgIH1cbiAgfVxufVxuXG5Ub29sYmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZnkgbW9kaWZpZXIgbmFtZSB0byBzcGVjaWZ5IGN1c3RvbSBzdHlsZXMuIE9wdGlvbmFsLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZpc2libGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0cnVlLCB0aGUgdG9vbGJhciBpcyBzaG93biBvbiB0aGUgc2NyZWVuLiBPdGhlcndpc2UsIHRoZSB0b29sYmFyIGlzIG5vdCBzaG93bi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbGJhcjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtdG9vbGJhci1idXR0b25cbiAqIEBjYXRlZ29yeSBwYWdlXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3BhZ2VcbiAqIEBkZXNjcmlwdGlvblxuICogICBbZW5dXG4gKiAgIEJ1dHRvbiBjb21wb25lbnQgZm9yIHRoZSBUb29sYmFyLiBVc2luZyB0aGlzIGNvbXBvbmVudCBnaXZlcyBhIG5pY2UgZGVmYXVsdCBzdHlsZS5cbiAqXG4gKlxuICogICBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFBhZ2VcbiAgICAgcmVuZGVyVG9vbGJhciA9IHsgKCkgPT5cbiAgICAgIDxUb29sYmFyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVmdCc+PEJhY2tCdXR0b24+QmFjazwvQmFja0J1dHRvbj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlcic+SW5wdXQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0Jz5cbiAgICAgICAgICA8VG9vbGJhckJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZH0gPkFkZDwvVG9vbGJhckJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgIH0+XG4gICAgICBQYWdlIENvbnRlbnRcbiAgICA8L1BhZ2U+XG4gKi9cbmNsYXNzIFRvb2xiYXJCdXR0b24gZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXRvb2xiYXItYnV0dG9uJztcbiAgfVxufVxuXG5Ub29sYmFyQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGJ1dHRvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEluZGljYXRlcyB3aGV0aGVyIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXJCdXR0b247XG4iLCIvKlxuICogcm91dGVTdGFjayA6IFt1c2VyUm91dGUsIHVzZXJSb3V0ZTIsIC4uLl1cbiAqIHByb2Nlc3NTdGFjazogW1xuICogeyB0eXBlOiBwdXNoIHwgcG9wIHwgcmVzZXQsIHJvdXRlOiB1c2VyUm91dGUgfSxcbiAqIHsgdHlwZTogcHVzaCB8IHBvcCB8IHJlc2V0LCByb3V0ZTogdXNlclJvdXRlMiB9LFxuICogLi4uXG4gKiBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiAocm91dGVzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlU3RhY2s6IFsuLi5yb3V0ZXNdLFxuICAgICAgcHJvY2Vzc1N0YWNrOiBbXVxuICAgIH07XG4gIH0sXG5cbiAgcmVwbGFjZTogKHtyb3V0ZUNvbmZpZywgcm91dGUsIG9wdGlvbnMsIGtleX0pID0+IHtcbiAgICBjb25zdCBjb25maWcgPSB7Li4ucm91dGVDb25maWd9O1xuICAgIGNvbnN0IHJvdXRlU3RhY2sgPSBbLi4uY29uZmlnLnJvdXRlU3RhY2tdO1xuICAgIGxldCBwcm9jZXNzU3RhY2sgPSBbLi4uY29uZmlnLnByb2Nlc3NTdGFja107XG5cbiAgICBpZiAoa2V5ID09IG51bGwgfHwgcHJvY2Vzc1N0YWNrLmZpbHRlcigoZWwpID0+IGVsLmtleSA9PT0ga2V5KS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHByb2Nlc3MgPSB7XG4gICAgICAgIHR5cGU6ICdyZXBsYWNlJyxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIGtleVxuICAgICAgfTtcbiAgICAgIHByb2Nlc3NTdGFjayA9IFtcbiAgICAgICAgLi4ucHJvY2Vzc1N0YWNrLFxuICAgICAgICBwcm9jZXNzXG4gICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByb3V0ZVN0YWNrLFxuICAgICAgcHJvY2Vzc1N0YWNrXG4gICAgfTtcbiAgfSxcblxuICByZXNldDogKHtyb3V0ZUNvbmZpZywgcm91dGUsIG9wdGlvbnMsIGtleX0pID0+IHtcbiAgICBjb25zdCBjb25maWcgPSB7Li4ucm91dGVDb25maWd9O1xuICAgIGNvbnN0IHJvdXRlU3RhY2sgPSBbLi4uY29uZmlnLnJvdXRlU3RhY2tdO1xuICAgIGxldCBwcm9jZXNzU3RhY2sgPSBbLi4uY29uZmlnLnByb2Nlc3NTdGFja107XG5cbiAgICBpZiAoa2V5ID09IG51bGwgfHwgcHJvY2Vzc1N0YWNrLmZpbHRlcigoZWwpID0+IGVsLmtleSA9PT0ga2V5KS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHByb2Nlc3MgPSB7XG4gICAgICAgIHR5cGU6ICdyZXNldCcsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBrZXlcbiAgICAgIH07XG5cbiAgICAgIHByb2Nlc3NTdGFjayA9IFtcbiAgICAgICAgLi4ucHJvY2Vzc1N0YWNrLFxuICAgICAgICBwcm9jZXNzXG4gICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByb3V0ZVN0YWNrLFxuICAgICAgcHJvY2Vzc1N0YWNrXG4gICAgfTtcbiAgfSxcblxuICBwdXNoOiAoe3JvdXRlQ29uZmlnLCByb3V0ZSwgb3B0aW9ucywga2V5fSkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHsuLi5yb3V0ZUNvbmZpZ307XG4gICAgY29uc3Qgcm91dGVTdGFjayA9IFsuLi5jb25maWcucm91dGVTdGFja107XG4gICAgbGV0IHByb2Nlc3NTdGFjayA9IFsuLi5jb25maWcucHJvY2Vzc1N0YWNrXTtcblxuICAgIGlmIChrZXkgPT0gbnVsbCB8fCBjb25maWcucHJvY2Vzc1N0YWNrLmZpbHRlcigoZWwpID0+IGVsLmtleSA9PT0ga2V5KS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHByb2Nlc3MgPSB7XG4gICAgICAgIHR5cGU6ICdwdXNoJyxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIGtleVxuICAgICAgfTtcblxuICAgICAgcHJvY2Vzc1N0YWNrID0gW1xuICAgICAgICAuLi5wcm9jZXNzU3RhY2ssXG4gICAgICAgIHByb2Nlc3NcbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlU3RhY2ssXG4gICAgICBwcm9jZXNzU3RhY2tcbiAgICB9O1xuICB9LFxuXG4gIHBvcDogKHtyb3V0ZUNvbmZpZywgb3B0aW9ucywga2V5fSkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHsuLi5yb3V0ZUNvbmZpZ307XG4gICAgY29uc3Qgcm91dGVTdGFjayA9IFsuLi5jb25maWcucm91dGVTdGFja107XG4gICAgbGV0IHByb2Nlc3NTdGFjayA9IFsuLi5jb25maWcucHJvY2Vzc1N0YWNrXTtcblxuICAgIC8qKlxuICAgICAqIFNhZmVnYXVyZCB0byBlbnN1cmUgdGhhdCBub3RcbiAgICAgKiB0b28gbWFueSBwYWdlcyBhcmUgcG9wcGVkIGZyb21cbiAgICAgKiB0aGUgc3RhY2suXG4gICAgICovXG4gICAgY29uc3QgcG9wcyA9IHByb2Nlc3NTdGFja1xuICAgICAgLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ3BvcCcpXG4gICAgICAubGVuZ3RoO1xuXG4gICAgaWYgKHBvcHMgKyAxID49IHJvdXRlU3RhY2subGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1BhZ2Ugc3RhY2sgaXMgYWxyZWFkeSBlbXB0eScpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBjb25zdCBwcm9jZXNzID0ge1xuICAgICAgdHlwZTogJ3BvcCcsXG4gICAgICBrZXksXG4gICAgICBvcHRpb25zXG4gICAgfTtcblxuICAgIHByb2Nlc3NTdGFjayA9IFtcbiAgICAgIC4uLnByb2Nlc3NTdGFjayxcbiAgICAgIHByb2Nlc3NcbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlU3RhY2ssXG4gICAgICBwcm9jZXNzU3RhY2tcbiAgICB9O1xuICB9LFxuXG4gIHBvc3RQdXNoOiAocm91dGVDb25maWcpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSB7Li4ucm91dGVDb25maWd9O1xuICAgIGxldCByb3V0ZVN0YWNrID0gWy4uLmNvbmZpZy5yb3V0ZVN0YWNrXTtcbiAgICBjb25zdCBwcm9jZXNzU3RhY2sgPSBbLi4uY29uZmlnLnByb2Nlc3NTdGFja107XG5cbiAgICBjb25zdCBuZXh0ID0gcHJvY2Vzc1N0YWNrLnNoaWZ0KCk7XG4gICAgY29uc3QgdHlwZSA9IG5leHQudHlwZTtcbiAgICBsZXQgcm91dGUgPSBuZXh0LnJvdXRlO1xuXG4gICAgaWYgKHR5cGUgPT09ICdwdXNoJykge1xuICAgICAgaWYgKHJvdXRlICE9PSBudWxsKSB7XG4gICAgICAgIHJvdXRlU3RhY2sgPSBbXG4gICAgICAgICAgLi4ucm91dGVTdGFjayxcbiAgICAgICAgICByb3V0ZVxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvdXRlKSkgcm91dGUgPSBbcm91dGVdO1xuICAgICAgcm91dGVTdGFjayA9IHJvdXRlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JlcGxhY2UnKSB7XG4gICAgICByb3V0ZVN0YWNrLnBvcCgpO1xuICAgICAgcm91dGVTdGFjay5wdXNoKHJvdXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVTdGFjayxcbiAgICAgIHByb2Nlc3NTdGFja1xuICAgIH07XG4gIH0sXG5cbiAgcG9zdFBvcDogKHJvdXRlQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gey4uLnJvdXRlQ29uZmlnfTtcbiAgICBsZXQgcm91dGVTdGFjayA9IFsuLi5jb25maWcucm91dGVTdGFja107XG4gICAgbGV0IHByb2Nlc3NTdGFjayA9IFsuLi5jb25maWcucHJvY2Vzc1N0YWNrXTtcbiAgICByb3V0ZVN0YWNrID0gcm91dGVTdGFjay5zbGljZSgwLCByb3V0ZVN0YWNrLmxlbmd0aCAtIDEpO1xuICAgIHByb2Nlc3NTdGFjayA9IHByb2Nlc3NTdGFjay5zbGljZSgxKTtcblxuICAgIHJldHVybiB7XG4gICAgICByb3V0ZVN0YWNrLFxuICAgICAgcHJvY2Vzc1N0YWNrXG4gICAgfTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJub3JtYWxpemUiLCJ0ZXN0Iiwia2V5Iiwic2xpY2UiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsImVsIiwicHJvcHMiLCJuYW1lTWFwIiwianNQcm9wZXJ0aWVzIiwidmFsaWRQcm9wcyIsImNvbnN0cnVjdG9yIiwicHJvcFR5cGVzIiwiaWdub3JlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJyZWFjdFZhbHVlIiwicmVhY3ROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJpbmRleE9mIiwianNOYW1lIiwidHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJCYXNlRGlhbG9nIiwiYXJncyIsImNhbGxiYWNrIiwibmFtZSIsImV2ZW50Iiwib25DYW5jZWwiLCJiaW5kIiwib25QcmVTaG93Iiwib25Qb3N0U2hvdyIsIm9uUHJlSGlkZSIsIm9uUG9zdEhpZGUiLCJub2RlIiwiZmlyc3RDaGlsZCIsInNob3ciLCJjbGFzc05hbWUiLCJsYXN0Q2xhc3MiLCJoaWRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlclBvcnRhbCIsIm9uRGV2aWNlQmFja0J1dHRvbiIsIm5ld1Byb3BzIiwiaXNPcGVuIiwidW5kZWZpbmVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVubW91bnQiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ2aXNpYmxlIiwidGhlbiIsImlzU2hvd24iLCJ1cGRhdGVDbGFzc2VzIiwiRnVuY3Rpb24iLCJFcnJvciIsIm90aGVycyIsImF0dHJzIiwiVXRpbCIsImdldEF0dHJzIiwiRG9tTm9kZU5hbWUiLCJfZ2V0RG9tTm9kZU5hbWUiLCJ1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lciIsImNoaWxkcmVuIiwiX3VwZGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyIsImJvb2wiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiQWN0aW9uU2hlZXQiLCJCYXNpY0NvbXBvbmVudCIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJ0cmltIiwib25zIiwiX2F1dG9TdHlsZSIsInByZXBhcmUiLCJTaW1wbGVXcmFwcGVyIiwiQWN0aW9uU2hlZXRCdXR0b24iLCJBbGVydERpYWxvZyIsIkFsZXJ0RGlhbG9nQnV0dG9uIiwiQmFja0J1dHRvbiIsIm9uQ2xpY2siLCJfdXBkYXRlT25DbGljayIsIkJvdHRvbVRvb2xiYXIiLCJCdXR0b24iLCJDYXJkIiwiQ2Fyb3VzZWwiLCJvbkNoYW5nZSIsIm9uUmVmcmVzaCIsIm9uT3ZlcnNjcm9sbCIsIm9uU3dpcGUiLCJvblBvc3RDaGFuZ2UiLCJpbmRleCIsImdldEFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpb25PcHRpb25zIiwibGVuZ3RoIiwicmVmcmVzaCIsIm9uZU9mIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiQ2Fyb3VzZWxJdGVtIiwiQmFzZUlucHV0IiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJjaGVja2VkIiwiZGVmYXVsdENoZWNrZWQiLCJFVkVOVF9UWVBFUyIsImV2ZW50VHlwZSIsImluc3RhbmNlT2YiLCJEYXRlIiwiQ2hlY2tib3giLCJDb2wiLCJEaWFsb2ciLCJGYWIiLCJJY29uIiwiaWNvbiIsInNpemUiLCJPYmplY3QiLCJmaWx0ZXIiLCJhIiwiaW5uZXJTdHJpbmciLCJtYXAiLCJkZWZhdWx0Iiwiam9pbiIsIm9iamVjdE9mIiwiSW5wdXQiLCJMYXp5TGlzdCIsInN0YXRlIiwidXBkYXRlIiwic2VsZiIsIl9sYXp5UmVwZWF0IiwiZGVsZWdhdGUiLCJjYWxjdWxhdGVJdGVtSGVpZ2h0Iiwic3RhcnQiLCJsaW1pdCIsInVwZGF0ZVRvcCIsInJlbmRlclJvdyIsImkiLCJwdXNoIiwic2V0U3RhdGUiLCJoZWxwUHJvcHMiLCJsaXN0IiwiX2xpc3QiLCJwb3NpdGlvbiIsImhlaWdodCIsImxhenlSZXBlYXQiLCJMaXN0IiwicGFnZXMiLCJkYXRhU291cmNlIiwiZGF0YSIsImlkeCIsInJlbmRlckhlYWRlciIsInJlbmRlckZvb3RlciIsImFycmF5IiwiTGlzdEhlYWRlciIsIkxpc3RJdGVtIiwiZXhwYW5kZWQiLCJhY3Rpb24iLCJMaXN0VGl0bGUiLCJOYXZpZ2F0b3IiLCJfcHJlUHVzaCIsIl9wb3N0UHVzaCIsIl9wcmVQb3AiLCJfcG9zdFBvcCIsIm9iaiIsIlByb21pc2UiLCJyZXNvbHZlIiwiZm9yY2VVcGRhdGUiLCJyb3V0ZSIsIm9wdGlvbnMiLCJyZXNldFBhZ2VTdGFjayIsInJvdXRlcyIsImlzUnVubmluZyIsInJlamVjdCIsImhpZGVQYWdlcyIsInBhZ2VFbGVtZW50cyIsIl9uYXZpIiwic3R5bGUiLCJkaXNwbGF5IiwicG9wIiwicm91dGVzQmVmb3JlUG9wIiwicm91dGVzQWZ0ZXJQb3AiLCJjb25jYXQiLCJfcG9wUGFnZSIsImxhc3RSb3V0ZSIsIm5ld1BhZ2UiLCJyZW5kZXJQYWdlIiwiX3B1c2hQYWdlIiwiY2F0Y2giLCJlcnJvciIsIl9pc1J1bm5pbmciLCJwdXNoUGFnZSIsInBvcyIsInNwbGljZSIsInRvcFBhZ2UiLCJ1cGRhdGVCYWNrQnV0dG9uIiwicG9wUGFnZSIsImNhbGxQYXJlbnRIYW5kbGVyIiwidGFyZ2V0Iiwib25QcmVQb3AiLCJvblBvc3RQb3AiLCJvblByZVB1c2giLCJvblBvc3RQdXNoIiwic3dpcGVNYXgiLCJzd2lwZVBvcCIsIl9vbkRldmljZUJhY2tCdXR0b24iLCJpbml0aWFsUm91dGUiLCJpbml0aWFsUm91dGVTdGFjayIsIm5hdmkiLCJOT09QIiwiTW9kYWwiLCJQYWdlIiwib25Jbml0Iiwib25TaG93Iiwib25IaWRlIiwib25JbmZpbml0ZVNjcm9sbCIsInRvb2xiYXIiLCJyZW5kZXJUb29sYmFyIiwiYm90dG9tVG9vbGJhciIsInJlbmRlckJvdHRvbVRvb2xiYXIiLCJtb2RhbCIsInJlbmRlck1vZGFsIiwiZml4ZWQiLCJyZW5kZXJGaXhlZCIsImNvbnRlbnRTdHlsZSIsIm90aGVyIiwiekluZGV4IiwiUG9wb3ZlciIsImdldFRhcmdldCIsIlByb2dyZXNzQmFyIiwiUHJvZ3Jlc3NDaXJjdWxhciIsIlB1bGxIb29rIiwiX3B1bGxIb29rIiwib25BY3Rpb24iLCJvbkxvYWQiLCJvblB1bGwiLCJwcmV2UHJvcHMiLCJwdWxsSG9vayIsIlJhZGlvIiwiUmFuZ2UiLCJSaXBwbGUiLCJSb3V0ZXJOYXZpZ2F0b3IiLCJjYW5jZWxVcGRhdGUiLCJwYWdlIiwiY2IiLCJyb3V0ZUNvbmZpZyIsInJvdXRlU3RhY2siLCJwcm9jZXNzU3RhY2siLCJBcnJheSIsImlzQXJyYXkiLCJyZXBsYWNlUGFnZSIsInBhZ2VzVG9SZW5kZXIiLCJzaGFwZSIsImFycmF5T2YiLCJSb3ciLCJTZWFyY2hJbnB1dCIsIlNlZ21lbnQiLCJnZXRBY3RpdmVCdXR0b25JbmRleCIsInNldEFjdGl2ZUJ1dHRvbiIsIlNlbGVjdCIsIlNwZWVkRGlhbCIsIlNwZWVkRGlhbEl0ZW0iLCJTcGxpdHRlciIsIlNwbGl0dGVyQ29udGVudCIsIlNwbGl0dGVyU2lkZSIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJvblByZU9wZW4iLCJvblByZUNsb3NlIiwib25Nb2RlQ2hhbmdlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm9wZW4iLCJjbG9zZSIsInAiLCJjb25zb2xlIiwiU3dpdGNoIiwiVGFiIiwiVGFiYmFyIiwib25QcmVDaGFuZ2UiLCJvblJlYWN0aXZlIiwiX3RhYmJhciIsInNldFRhYmJhclZpc2liaWxpdHkiLCJuZXh0UHJvcHMiLCJnZXRBY3RpdmVUYWJJbmRleCIsInNldEFjdGl2ZVRhYiIsInRhYnMiLCJyZW5kZXJUYWJzIiwidGFiUGFnZXMiLCJ0YWIiLCJjb250ZW50IiwidGFiYmFyIiwiVG9hc3QiLCJUb29sYmFyIiwic2V0VmlzaWJpbGl0eSIsIlRvb2xiYXJCdXR0b24iLCJjb25maWciLCJwcm9jZXNzIiwicG9wcyIsIngiLCJ3YXJuIiwibmV4dCIsInNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxNQUFPO01BQ25CLFdBQVdDLElBQVgsQ0FBZ0JDLEdBQWhCLENBQUosRUFBMEI7VUFDbEJBLElBQUlDLEtBQUosQ0FBVSxDQUFWLENBQU47O1NBRUtELElBQUlFLE9BQUosQ0FBWSxvQkFBWixFQUFrQyxPQUFsQyxFQUEyQ0MsV0FBM0MsRUFBUDtDQUpGOztBQU9BLFdBQWU7Z0JBQUEsMEJBQ0VDLE1BREYsRUFDVTtXQUNk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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _menuItem = require('./menu-item');

var _menuItem2 = _interopRequireDefault(_menuItem);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (0, _reactRouterDom.withRouter)(_class = function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isToggle: true
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                location = _props.location,
                data = _props.data,
                onClick = _props.onClick,
                nowId = _props.nowId,
                match = _props.match;
            var isToggle = this.state.isToggle;

            var _h = data.children.length * 41;

            return _react2.default.createElement(
                'li',
                { className: 'treeview ' + (this.state.isToggle ? 'menu-open' : '') },
                _react2.default.createElement(
                    'div',
                    { className: 'tree-header', onClick: function onClick() {
                            _this2.setState({ isToggle: !isToggle });
                        } },
                    data.icon ? _react2.default.createElement(_icon2.default, { className: 'child-icon', type: data.icon }) : null,
                    _react2.default.createElement(
                        'span',
                        null,
                        ' ',
                        data.name
                    ),
                    _react2.default.createElement(_icon2.default, { className: 'header-icon pull-right', type: 'angle-right' })
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'treeview-menu', style: { height: (this.state.isToggle ? _h : 0) + 'px' } },
                    data.children.map(function (item, index) {
                        return _react2.default.createElement(_menuItem2.default, { key: item.id, parent: data, data: item, icon: 'circle-o', onClick: function onClick(data) {
                                _this2.props.onClick(data);
                            } });
                    })
                )
            );
        }
    }]);

    return _default;
}(_react2.default.Component)) || _class;

exports.default = _default;
module.exports = exports['default'];
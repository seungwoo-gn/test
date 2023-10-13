import * as React from 'react';
import React__default, { forwardRef, useContext, useState, useRef, useEffect, createElement, Component, createRef, useCallback } from 'react';
import * as ReactDOM from 'react-dom';
import ReactDOM__default, { findDOMNode } from 'react-dom';

var Breadcrumbs = function Breadcrumbs(_a) {
  var list = _a.list,
    current = _a.current,
    _b = _a.separator,
    separator = _b === void 0 ? /*#__PURE__*/React__default.createElement(Typography, {
      size: 24,
      color: "#B8B9BA"
    }, "-") : _b;
  return /*#__PURE__*/React__default.createElement(Spacing, {
    gap: 8,
    align: "center"
  }, list.map(function (object, index) {
    if (typeof object === "string") {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
        key: index
      }, /*#__PURE__*/React__default.createElement(Typography, {
        size: 24,
        color: object === current ? "fff" : "#B8B9BA",
        key: index
      }, object), /*#__PURE__*/React__default.createElement("div", {
        key: index
      }, list.length - 1 !== index && separator));
    } else {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, {
        key: index
      }, /*#__PURE__*/React__default.createElement("div", {
        key: index
      }, object), /*#__PURE__*/React__default.createElement("div", {
        key: index
      }, list.length - 1 !== index && separator));
    }
  }));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends.apply(this, arguments);
}

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (process.env.NODE_ENV !== 'production') {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production' && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (process.env.NODE_ENV !== 'production') {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign$1 = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash$2 (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match$2 (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign$1(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse$1('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse$1 (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

						if (character === 123)
							if (offset === 0)
								parse$1(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse$1(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse$1(characters, reference, reference, reference, [''], children, 0, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';
	var length = sizeof(children);

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: element.value = element.props.join(',');
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses) {
      var isNested = !!element.parent; // in nested rules comments become children of the "auto-inserted" rule and that's always the `element.parent`
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? element.parent.children : // global rule at the root level
      children;

      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];

        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version


        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }

          break;
        }
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (hash$2(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order

    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return WEBKIT + value + MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);

    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match$2(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return serialize([copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var isBrowser$5 = typeof document !== 'undefined';
var getServerStylisCache = isBrowser$5 ? undefined : weakMemoize(function () {
  return memoize(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (process.env.NODE_ENV !== 'production' && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if (isBrowser$5 && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  if (isBrowser$5) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (process.env.NODE_ENV !== 'production') {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  if (isBrowser$5) {
    var currentSheet;
    var finalizingPlugins = [stringify, process.env.NODE_ENV !== 'production' ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];

    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return serialize(compile(styles), _serializer);
    }; // $FlowFixMe


    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        process.env.NODE_ENV === 'development' && serialized.map !== undefined) {
          return rules + serialized.map;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = requireReactIs_production_min();
} else {
  reactIs$1.exports = requireReactIs_development();
}

var reactIsExports = reactIs$1.exports;

var reactIs = reactIsExports;
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

var isBrowser$4 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$4 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$4 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$4 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error(noComponentSelectorMessage);
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var isBrowser$3 = typeof document !== 'undefined';

var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$3 ? syncFallback : useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || React.useLayoutEffect;

var isBrowser$2 = typeof document !== 'undefined';
var hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */React.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

if (process.env.NODE_ENV !== 'production') {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser$2) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = useContext(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/React.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext = /* #__PURE__ */React.createContext({});

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'EmotionThemeContext';
}

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';

var Insertion$2 = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  if (!isBrowser$2 && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/React.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, React.useContext(ThemeContext));

  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Insertion$2, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/React.createElement(WrappedComponent, newProps));
});

if (process.env.NODE_ENV !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
}

var pkg = {
	name: "@emotion/react",
	version: "11.11.1",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	exports: {
		".": {
			module: {
				worker: "./dist/emotion-react.worker.esm.js",
				browser: "./dist/emotion-react.browser.esm.js",
				"default": "./dist/emotion-react.esm.js"
			},
			"import": "./dist/emotion-react.cjs.mjs",
			"default": "./dist/emotion-react.cjs.js"
		},
		"./jsx-runtime": {
			module: {
				worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
				browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
			},
			"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
			"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
		},
		"./_isolated-hnrs": {
			module: {
				worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
				browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
			},
			"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
			"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
		},
		"./jsx-dev-runtime": {
			module: {
				worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
				browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
			},
			"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
			"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
		},
		"./package.json": "./package.json",
		"./types/css-prop": "./types/css-prop.d.ts",
		"./macro": {
			types: {
				"import": "./macro.d.mts",
				"default": "./macro.d.ts"
			},
			"default": "./macro.js"
		}
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.*"
	],
	sideEffects: false,
	author: "Emotion Contributors",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.18.3",
		"@emotion/babel-plugin": "^11.11.0",
		"@emotion/cache": "^11.11.0",
		"@emotion/serialize": "^1.1.2",
		"@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
		"@emotion/utils": "^1.2.1",
		"@emotion/weak-memoize": "^0.3.1",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@definitelytyped/dtslint": "0.0.112",
		"@emotion/css": "11.11.0",
		"@emotion/css-prettifier": "1.1.3",
		"@emotion/server": "11.11.0",
		"@emotion/styled": "11.11.0",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1",
		typescript: "^4.5.5"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact",
		exports: {
			envConditions: [
				"browser",
				"worker"
			],
			extra: {
				"./types/css-prop": "./types/css-prop.d.ts",
				"./macro": {
					types: {
						"import": "./macro.d.mts",
						"default": "./macro.d.ts"
					},
					"default": "./macro.js"
				}
			}
		}
	}
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {
  if (process.env.NODE_ENV !== 'production' && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = serializeStyles([styles], undefined, React.useContext(ThemeContext));

  if (!isBrowser$2) {
    var _ref;

    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }

    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);

    if (shouldCache) {
      return null;
    }

    return /*#__PURE__*/React.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = React.useRef();
  useInsertionEffectWithLayoutFallback(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (process.env.NODE_ENV !== 'production') {
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var classnames$1 = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (process.env.NODE_ENV !== 'production' && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion$1 = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    var rules = '';

    for (var i = 0; i < serializedArr.length; i++) {
      var res = insertStyles(cache, serializedArr[i], false);

      if (!isBrowser$2 && res !== undefined) {
        rules += res;
      }
    }

    if (!isBrowser$2) {
      return rules;
    }
  });

  if (!isBrowser$2 && rules.length !== 0) {
    var _ref2;

    return /*#__PURE__*/React.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function (serialized) {
      return serialized.name;
    }).join(' '), _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var ClassNames = /* #__PURE__ */withEmotionCache(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && process.env.NODE_ENV !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && process.env.NODE_ENV !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames$1(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: React.useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Insertion$1, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});

if (process.env.NODE_ENV !== 'production') {
  ClassNames.displayName = 'EmotionClassNames';
}

if (process.env.NODE_ENV !== 'production') {
  var isBrowser$1 = typeof document !== 'undefined'; // #1727, #2905 for some reason Jest and Vitest evaluate modules twice if some consuming module gets mocked

  var isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined';

  if (isBrowser$1 && !isTestEnv) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = // $FlowIgnore
    typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
    : isBrowser$1 ? window : global;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser = typeof document !== 'undefined';

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  if (!isBrowser && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/React.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var createStyled = function createStyled(tag, options) {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (process.env.NODE_ENV !== 'production' && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (process.env.NODE_ENV !== 'production' && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = withEmotionCache(function (props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = React.useContext(ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof FinalTag === 'string'
      }), /*#__PURE__*/React.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && process.env.NODE_ENV !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = createStyled.bind();
tags.forEach(function (tagName) {
  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
  newStyled[tagName] = newStyled(tagName);
});

var Typography = function Typography(_a) {
  var weight = _a.weight,
    size = _a.size,
    color = _a.color,
    height = _a.height,
    children = _a.children,
    _b = _a.align,
    align = _b === void 0 ? "start" : _b,
    _c = _a.whiteSpace,
    whiteSpace = _c === void 0 ? "normal" : _c,
    _d = _a.inline,
    inline = _d === void 0 ? false : _d,
    _e = _a.cur,
    cur = _e === void 0 ? false : _e;
  return /*#__PURE__*/React__default.createElement(Text$1, {
    color: color,
    size: size,
    height: height,
    weight: weight,
    align: align,
    inline: inline,
    whiteSpace: whiteSpace,
    cur: cur
  }, children);
};
var Text$1 = newStyled.div(templateObject_3$l || (templateObject_3$l = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  text-align: ", ";\n  white-space: ", ";\n  ", "\n\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  text-align: ", ";\n  white-space: ", ";\n  ", "\n\n  ", "\n"])), function (props) {
  return props.color && props.color;
}, function (props) {
  return props.size && "".concat(props.size, "px");
}, function (props) {
  return props.height && "".concat(props.height, "px");
}, function (props) {
  return props.weight && props.weight;
}, function (props) {
  return props.align && props.align;
}, function (props) {
  return props.whiteSpace;
}, function (props) {
  return props.inline && css(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n      display: inline;\n    "], ["\n      display: inline;\n    "])));
}, function (props) {
  return props.cur && css(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n      cursor: pointer;\n    "], ["\n      cursor: pointer;\n    "])));
});
var templateObject_1$u, templateObject_2$o, templateObject_3$l;

var StyledButton = newStyled.button(templateObject_15$1 || (templateObject_15$1 = __makeTemplateObject(["\n  font-weight: 700;\n  border: 0;\n  border-radius: 5px;\n  display: inline-block;\n  ", ";\n  white-space: nowrap;\n\n  ", "\n\n  ", ";\n"], ["\n  font-weight: 700;\n  border: 0;\n  border-radius: 5px;\n  display: inline-block;\n  ", ";\n  white-space: nowrap;\n\n  ", "\n\n  ", ";\n"])), function (props) {
  return props.disabled ? css(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n          cursor: default;\n        "], ["\n          cursor: default;\n        "]))) : css(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n          cursor: pointer;\n        "], ["\n          cursor: pointer;\n        "])));
}, function (_a) {
  var custom = _a.custom;
  return css(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: ", ";\n      font-weight: ", ";\n      padding: ", ";\n\n      ", ";\n\n      ", ";\n\n      ", ";\n\n      border-radius: ", "px;\n      ", ";\n\n      ", ";\n\n      ", ";\n    "], ["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: ", ";\n      font-weight: ", ";\n      padding: ", ";\n\n      ", ";\n\n      ", ";\n\n      ", ";\n\n      border-radius: ", "px;\n      ", ";\n\n      ", ";\n\n      ", ";\n    "])), custom === null || custom === void 0 ? void 0 : custom.fontSize, custom === null || custom === void 0 ? void 0 : custom.fontWeight, custom === null || custom === void 0 ? void 0 : custom.padding, (custom === null || custom === void 0 ? void 0 : custom.background) && css(templateObject_3$k || (templateObject_3$k = __makeTemplateObject(["\n        background: ", ";\n      "], ["\n        background: ", ";\n      "])), custom.background), (custom === null || custom === void 0 ? void 0 : custom.fontColor) && css(templateObject_4$d || (templateObject_4$d = __makeTemplateObject(["\n        color: ", ";\n      "], ["\n        color: ", ";\n      "])), custom.fontColor), (custom === null || custom === void 0 ? void 0 : custom.border) && css(templateObject_5$d || (templateObject_5$d = __makeTemplateObject(["\n        border: ", ";\n      "], ["\n        border: ", ";\n      "])), custom.border), (custom === null || custom === void 0 ? void 0 : custom.borderRadius) ? custom.borderRadius : 5, (custom === null || custom === void 0 ? void 0 : custom.width) ? css(templateObject_6$d || (templateObject_6$d = __makeTemplateObject(["\n            width: fit-content;\n          "], ["\n            width: fit-content;\n          "]))) : css(templateObject_7$a || (templateObject_7$a = __makeTemplateObject(["\n            width: 100%;\n          "], ["\n            width: 100%;\n          "]))), (custom === null || custom === void 0 ? void 0 : custom.height) && css(templateObject_8$4 || (templateObject_8$4 = __makeTemplateObject(["\n        height: ", "px;\n      "], ["\n        height: ", "px;\n      "])), custom.height), (custom === null || custom === void 0 ? void 0 : custom.filter) && css(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n        filter: ", ";\n      "], ["\n        filter: ", ";\n      "])), custom.filter));
}, function (_a) {
  var size = _a.size;
  switch (size) {
    case "large":
      return css(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n          width: 100%;\n          height: 53px;\n          font-size: 17px;\n        "], ["\n          width: 100%;\n          height: 53px;\n          font-size: 17px;\n        "])));
    case "medium":
      return css(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n          width: 100%;\n          height: 36px;\n          font-size: 14px;\n          padding: 9.5px 21px;\n          white-space: nowrap;\n        "], ["\n          width: 100%;\n          height: 36px;\n          font-size: 14px;\n          padding: 9.5px 21px;\n          white-space: nowrap;\n        "])));
    case "small":
      return css(templateObject_13$1 || (templateObject_13$1 = __makeTemplateObject(["\n          width: 100%;\n          display: flex;\n          justify-content: center;\n          height: 30px;\n          font-size: 14px;\n          padding: 8px 12px;\n          align-items: center;\n          border-radius: 4px;\n        "], ["\n          width: 100%;\n          display: flex;\n          justify-content: center;\n          height: 30px;\n          font-size: 14px;\n          padding: 8px 12px;\n          align-items: center;\n          border-radius: 4px;\n        "])));
    case "header":
      return css(templateObject_14$1 || (templateObject_14$1 = __makeTemplateObject(["\n          font-weight: 600;\n          font-size: 13px;\n          padding: 6px 12.5px;\n          line-height: 19px;\n          border-radius: 4px;\n        "], ["\n          font-weight: 600;\n          font-size: 13px;\n          padding: 6px 12.5px;\n          line-height: 19px;\n          border-radius: 4px;\n        "])));
    default:
      return "";
  }
});
var Button = function Button(props) {
  var children = props.children,
    onClick = props.onClick,
    disabled = props.disabled,
    rest = __rest(props, ["children", "onClick", "disabled"]);
  return /*#__PURE__*/React__default.createElement(StyledButton, __assign({}, rest, {
    onClick: disabled ? function () {} : onClick,
    disabled: disabled
  }), children);
};
var templateObject_1$t, templateObject_2$n, templateObject_3$k, templateObject_4$d, templateObject_5$d, templateObject_6$d, templateObject_7$a, templateObject_8$4, templateObject_9$2, templateObject_10$1, templateObject_11$1, templateObject_12$1, templateObject_13$1, templateObject_14$1, templateObject_15$1;

var DimdLayer = function DimdLayer(_a) {
  var onClick = _a.onClick;
  return /*#__PURE__*/React__default.createElement(Dimd, {
    onClick: onClick
  });
};
var Dimd = newStyled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 80;\n  transition: opacity 0.2s cubic-bezier(0.5, 0, 0.4, 1);\n"], ["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 80;\n  transition: opacity 0.2s cubic-bezier(0.5, 0, 0.4, 1);\n"])));
var templateObject_1$s;

var mediaQuery = {
  footerWidth: "@media (max-width: 980px)",
  mobileWidth: "@media (max-width: 499px)",
  tabletWidth: "@media (max-width: 999px)",
  pcWidth: "@media (min-width: 1000px)"
};

var Spacing = function Spacing(_a) {
  var _b = _a.gap,
    gap = _b === void 0 ? 0 : _b,
    _c = _a.column,
    column = _c === void 0 ? false : _c,
    _d = _a.align,
    align = _d === void 0 ? "stretch" : _d,
    justify = _a.justify,
    cursor = _a.cursor,
    children = _a.children,
    onClick = _a.onClick,
    _e = _a.alignSelf,
    alignSelf = _e === void 0 ? "auto" : _e,
    _f = _a.flexGrow,
    flexGrow = _f === void 0 ? 0 : _f,
    _g = _a.flexBasis,
    flexBasis = _g === void 0 ? "auto" : _g;
  return /*#__PURE__*/React__default.createElement(GapContainer, {
    onClick: onClick,
    gap: gap,
    column: column,
    align: align,
    justify: justify,
    cursor: cursor,
    alignSelf: alignSelf,
    flexGrow: flexGrow,
    flexBasis: flexBasis
  }, children);
};
var GapContainer = newStyled.div(templateObject_7$9 || (templateObject_7$9 = __makeTemplateObject(["\n  display: flex;\n\n  gap: ", "px;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", "\n"], ["\n  display: flex;\n\n  gap: ", "px;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", "\n"])), function (props) {
  return props.gap;
}, function (props) {
  return props.column && css(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n      flex-direction: column;\n    "], ["\n      flex-direction: column;\n    "])));
}, function (props) {
  return props.flexBasis && css(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n      flex-basis: ", ";\n    "], ["\n      flex-basis: ", ";\n    "])), props.flexBasis);
}, function (props) {
  return props.alignSelf && css(templateObject_3$j || (templateObject_3$j = __makeTemplateObject(["\n      align-self: ", ";\n    "], ["\n      align-self: ", ";\n    "])), props.alignSelf);
}, function (props) {
  return props.align && css(templateObject_4$c || (templateObject_4$c = __makeTemplateObject(["\n      align-items: ", ";\n    "], ["\n      align-items: ", ";\n    "])), props.align);
}, function (props) {
  return props.justify && css(templateObject_5$c || (templateObject_5$c = __makeTemplateObject(["\n      justify-content: ", ";\n    "], ["\n      justify-content: ", ";\n    "])), props.justify);
}, function (props) {
  return props.cursor && css(templateObject_6$c || (templateObject_6$c = __makeTemplateObject(["\n      cursor: pointer;\n    "], ["\n      cursor: pointer;\n    "])));
});
var templateObject_1$r, templateObject_2$m, templateObject_3$j, templateObject_4$c, templateObject_5$c, templateObject_6$c, templateObject_7$9;

var Close = function Close(_a) {
  var width = _a.width,
    height = _a.height,
    fill = _a.fill;
  return /*#__PURE__*/React__default.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    clipPath: "url(#clip0_2165_4327)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM14.53 13.47L15.71 14.65C16 14.94 16 15.42 15.71 15.71C15.56 15.86 15.37 15.93 15.18 15.93C14.99 15.93 14.8 15.86 14.65 15.71L13.47 14.53L12 13.06L10.53 14.53L9.35 15.71C9.2 15.86 9.01 15.93 8.82 15.93C8.63 15.93 8.44 15.86 8.29 15.71C8 15.42 8 14.94 8.29 14.65L9.47 13.47L10.94 12L9.47 10.53L8.29 9.35C8 9.06 8 8.58 8.29 8.29C8.58 8 9.06 8 9.35 8.29L10.53 9.47L12 10.94L13.47 9.47L14.65 8.29C14.94 8 15.42 8 15.71 8.29C16 8.58 16 9.06 15.71 9.35L14.53 10.53L13.06 12L14.53 13.47Z",
    fill: fill
  })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip0_2165_4327"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }))));
};

var DirectionDown = function DirectionDown(_a) {
  var width = _a.width,
    height = _a.height,
    fill = _a.fill,
    rotated = _a.rotated;
  return /*#__PURE__*/React__default.createElement(Container$8, null, /*#__PURE__*/React__default.createElement(Wrapper$4, {
    rotated: rotated || false,
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    fill: fill,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    clipPath: "url(#clip0_2_768)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M16.4699 8.97L11.9999 13.44L7.52994 8.97C7.23994 8.68 6.75994 8.68 6.46994 8.97C6.17994 9.26 6.17994 9.74 6.46994 10.03L11.4699 15.03C11.6199 15.18 11.8099 15.25 11.9999 15.25C12.1899 15.25 12.3799 15.18 12.5299 15.03L17.5299 10.03C17.8199 9.74 17.8199 9.26 17.5299 8.97C17.2399 8.68 16.7599 8.68 16.4699 8.97Z",
    fill: "#616161"
  })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip0_2_768"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  })))));
};
var Container$8 = newStyled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  position: relative;\n  width: 12px;\n"], ["\n  position: relative;\n  width: 12px;\n"])));
var Wrapper$4 = newStyled.svg(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%)\n    rotate(", ");\n  transition: transform 200ms ease-in-out;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%)\n    rotate(", ");\n  transition: transform 200ms ease-in-out;\n"])), function (props) {
  return props.rotated ? "180deg" : "0deg";
});
var templateObject_1$q, templateObject_2$l;

var DirectionUp = function DirectionUp(_a) {
  var width = _a.width,
    height = _a.height,
    fill = _a.fill,
    rotated = _a.rotated;
  return /*#__PURE__*/React__default.createElement(Container$7, null, /*#__PURE__*/React__default.createElement(Wrapper$3, {
    rotated: rotated || false,
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    fill: fill,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Ico/chevron_up"
  }, /*#__PURE__*/React__default.createElement("path", {
    id: "Path",
    d: "M4 15L12 9L20 15",
    stroke: "fff",
    strokeWidth: "2",
    strokeLinejoin: "bevel"
  }))));
};
var Container$7 = newStyled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: relative;\n  width: 12px;\n"], ["\n  position: relative;\n  width: 12px;\n"])));
var Wrapper$3 = newStyled.svg(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%)\n    rotate(", ");\n  transition: transform 200ms ease-in-out;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%)\n    rotate(", ");\n  transition: transform 200ms ease-in-out;\n"])), function (props) {
  return props.rotated ? "180deg" : "0deg";
});
var templateObject_1$p, templateObject_2$k;

var DirectionLeft = function DirectionLeft(_a) {
  var width = _a.width,
    height = _a.height,
    fill = _a.fill;
  return /*#__PURE__*/React__default.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    clipPath: "url(#clip0_2242_7413)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M13.9999 18.7499C13.8099 18.7499 13.6199 18.6799 13.4699 18.5299L7.46994 12.5299C7.17994 12.2399 7.17994 11.7599 7.46994 11.4699L13.4699 5.46994C13.7599 5.17994 14.2399 5.17994 14.5299 5.46994C14.8199 5.75994 14.8199 6.23994 14.5299 6.52994L9.05994 11.9999L14.5299 17.4699C14.8199 17.7599 14.8199 18.2399 14.5299 18.5299C14.3799 18.6799 14.1899 18.7499 13.9999 18.7499Z",
    fill: fill
  })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip0_2242_7413"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }))));
};

var DirectionRight = function DirectionRight(_a) {
  var width = _a.width,
    height = _a.height,
    fill = _a.fill;
  return /*#__PURE__*/React__default.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    clipPath: "url(#clip0_2242_7414)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M8.99994 18.7499C9.18994 18.7499 9.37994 18.6799 9.52994 18.5299L15.5299 12.5299C15.8199 12.2399 15.8199 11.7599 15.5299 11.4699L9.52994 5.46994C9.23994 5.17994 8.75994 5.17994 8.46994 5.46994C8.17994 5.75994 8.17994 6.23994 8.46994 6.52994L13.9399 11.9999L8.46994 17.4699C8.17994 17.7599 8.17994 18.2399 8.46994 18.5299C8.61994 18.6799 8.80994 18.7499 8.99994 18.7499Z",
    fill: fill
  })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip0_2242_7414"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }))));
};

var EyeOn = function EyeOn(_a) {
  var width = _a.width,
    height = _a.height;
  return /*#__PURE__*/React__default.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    clipPath: "url(#clip0_2165_1205)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M12 18.75C6.62 18.75 2.25 15.72 2.25 12C2.25 8.28 6.62 5.25 12 5.25C17.38 5.25 21.75 8.28 21.75 12C21.75 15.72 17.38 18.75 12 18.75ZM12 6.75C7.45 6.75 3.75 9.1 3.75 12C3.75 14.9 7.45 17.25 12 17.25C16.55 17.25 20.25 14.9 20.25 12C20.25 9.1 16.55 6.75 12 6.75Z",
    fill: "#9E9E9E"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M12.1699 7.16992C9.40992 7.16992 7.16992 9.40992 7.16992 12.1699C7.16992 14.9299 9.40992 17.1699 12.1699 17.1699C14.9299 17.1699 17.1699 14.9299 17.1699 12.1699C17.1699 9.40992 14.9299 7.16992 12.1699 7.16992ZM12.1699 13.6699C11.3399 13.6699 10.6699 12.9999 10.6699 12.1699C10.6699 11.3399 11.3399 10.6699 12.1699 10.6699C12.9999 10.6699 13.6699 11.3399 13.6699 12.1699C13.6699 12.9999 12.9999 13.6699 12.1699 13.6699Z",
    fill: "#9E9E9E"
  })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip0_2165_1205"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }))));
};

var EyeOff = function EyeOff(_a) {
  var width = _a.width,
    height = _a.height;
  return /*#__PURE__*/React__default.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    clipPath: "url(#clip0_2165_2117)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M21.75 12C21.75 8.28 17.38 5.25 12 5.25C10.57 5.25 9.20998 5.47 7.97998 5.86L9.18998 7.07C10.07 6.87 11.01 6.75 12 6.75C16.55 6.75 20.25 9.1 20.25 12C20.25 13.45 19.32 14.76 17.83 15.71L18.89 16.77C20.66 15.55 21.75 13.86 21.75 12Z",
    fill: "#9E9E9E"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M12 17.25C7.45 17.25 3.75 14.9 3.75 12C3.75 10.55 4.68 9.23998 6.17 8.28998L5.11 7.22998C3.34 8.44998 2.25 10.14 2.25 12C2.25 15.72 6.62 18.75 12 18.75C13.43 18.75 14.79 18.53 16.02 18.14L14.81 16.93C13.93 17.13 12.99 17.25 12 17.25Z",
    fill: "#9E9E9E"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M13.06 10.94L16.42 14.3C16.78 13.61 17 12.84 17 12C17 9.24 14.76 7 12 7C11.17 7 10.39 7.22 9.69995 7.58L13.06 10.94Z",
    fill: "#9E9E9E"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M10.94 13.06L7.58 9.69995C7.22 10.39 7 11.16 7 12C7 14.76 9.24 17 12 17C12.83 17 13.61 16.78 14.3 16.42L10.94 13.06Z",
    fill: "#9E9E9E"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M20.5299 19.4699L18.2399 17.1799L17.1499 16.0899L16.0099 14.9499L13.4399 12.3799L11.6099 10.5499L9.03994 7.97994L8.34994 7.28994L7.18994 6.12994L4.52994 3.46994C4.23994 3.17994 3.75994 3.17994 3.46994 3.46994C3.17994 3.75994 3.17994 4.23994 3.46994 4.52994L5.75994 6.81994L6.84994 7.90994L7.98994 9.04994L10.5599 11.6199L12.3899 13.4499L14.9599 16.0199L15.6499 16.7099L16.8099 17.8699L19.4699 20.5299C19.6199 20.6799 19.8099 20.7499 19.9999 20.7499C20.1899 20.7499 20.3799 20.6799 20.5299 20.5299C20.8199 20.2399 20.8199 19.7599 20.5299 19.4699Z",
    fill: "#9E9E9E"
  })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip0_2165_2117"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }))));
};

var Calendar = function Calendar(_a) {
  var width = _a.width,
    height = _a.height;
  return /*#__PURE__*/React__default.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    clipPath: "url(#clip0_2352_1420)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M20 6.25H16.75V4C16.75 3.59 16.41 3.25 16 3.25C15.59 3.25 15.25 3.59 15.25 4V6.25H9V4C9 3.59 8.66 3.25 8.25 3.25C7.84 3.25 7.5 3.59 7.5 4V6.25H4C3.59 6.25 3.25 6.59 3.25 7V20C3.25 20.41 3.59 20.75 4 20.75H20C20.41 20.75 20.75 20.41 20.75 20V7C20.75 6.59 20.41 6.25 20 6.25ZM4.75 7.75H19.25V10.25H4.75V7.75ZM4.75 19.25V11.75H19.25V19.25H4.75Z",
    fill: "#212121"
  })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip0_2352_1420"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }))));
};

var Refresh = function Refresh(_a) {
  var width = _a.width,
    height = _a.height,
    fill = _a.fill;
  return /*#__PURE__*/React__default.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    clipPath: "url(#clip0_2242_7411)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M18.9 14.53C18.53 14.34 18.08 14.5 17.89 14.87C17.59 15.47 17.2 16.01 16.73 16.48C15.57 17.64 14.03 18.28 12.39 18.28C9 18.28 6.25 15.53 6.25 12.14C6.25 8.75 9 6 12.39 6C13.75 6 15.03 6.44 16.09 7.25H15C14.59 7.25 14.25 7.59 14.25 8C14.25 8.41 14.59 8.75 15 8.75H18C18.41 8.75 18.75 8.41 18.75 8V5C18.75 4.59 18.41 4.25 18 4.25C17.59 4.25 17.25 4.59 17.25 5V6.25C15.88 5.12 14.18 4.5 12.39 4.5C8.18 4.5 4.75 7.93 4.75 12.14C4.75 16.35 8.18 19.78 12.39 19.78C14.43 19.78 16.35 18.99 17.79 17.54C18.38 16.95 18.86 16.28 19.23 15.53C19.41 15.16 19.26 14.71 18.89 14.52L18.9 14.53Z",
    fill: fill
  })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip0_2242_7411"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }))));
};

var Cloud = function Cloud(_a) {
  var width = _a.width,
    height = _a.height,
    fill = _a.fill;
  return /*#__PURE__*/React__default.createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", {
    clipPath: "url(#clip0_3370_9657)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M27.8548 12.6C27.8548 12.6 27.8248 12.585 27.8248 12.57C26.7298 8.07 22.7098 4.875 17.9998 4.875C13.2898 4.875 9.28478 8.07 8.17478 12.57C8.17478 12.585 8.15978 12.6 8.14478 12.6C4.81478 13.455 2.60978 16.89 3.61478 20.52C4.39478 23.325 7.13978 25.125 10.0348 25.125H12.3598C12.9748 25.125 13.4848 24.615 13.4848 24C13.4848 23.385 12.9748 22.875 12.3598 22.875H9.97478C8.11478 22.875 6.32978 21.75 5.78978 19.965C5.02478 17.4 6.77978 14.97 9.23978 14.67L10.0798 14.565L10.1548 14.115C10.7848 10.23 14.0248 7.125 17.9548 7.125C21.8398 7.125 25.1248 9.9 25.7398 13.74L25.8748 14.58L26.5348 14.655C28.4248 14.88 30.0598 16.275 30.3148 18.165C30.6598 20.7 28.6948 22.875 26.2348 22.875H23.6098C22.9948 22.875 22.4848 23.385 22.4848 24C22.4848 24.615 22.9948 25.125 23.6098 25.125H25.9348C28.8448 25.125 31.5748 23.325 32.3548 20.52C33.3598 16.89 31.1548 13.455 27.8248 12.6H27.8548Z",
    fill: fill
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M21.7952 20.205L18.7952 17.205C18.3602 16.77 17.6402 16.77 17.2052 17.205L14.2052 20.205C13.7702 20.64 13.7702 21.36 14.2052 21.795C14.6402 22.23 15.3602 22.23 15.7952 21.795L16.8752 20.715V28.5C16.8752 29.115 17.3852 29.625 18.0002 29.625C18.6152 29.625 19.1252 29.115 19.1252 28.5V20.715L20.2052 21.795C20.4302 22.02 20.7152 22.125 21.0002 22.125C21.2852 22.125 21.5702 22.02 21.7952 21.795C22.2302 21.36 22.2302 20.64 21.7952 20.205Z",
    fill: fill
  })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip0_3370_9657"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "36",
    height: "36",
    fill: "white"
  }))));
};

var Icon = function Icon(_a) {
  var name = _a.name,
    _b = _a.width,
    width = _b === void 0 ? 16 : _b,
    _c = _a.height,
    height = _c === void 0 ? 16 : _c,
    _d = _a.fill,
    fill = _d === void 0 ? "#d337ac" : _d,
    rotated = _a.rotated,
    custom = _a.custom;
  switch (name) {
    case "Close":
      return /*#__PURE__*/React__default.createElement(Close, {
        width: width,
        height: height,
        fill: fill
      });
    case "DirectionDown":
      return /*#__PURE__*/React__default.createElement(DirectionDown, {
        rotated: rotated,
        width: width,
        height: height,
        fill: fill
      });
    case "DirectionUp":
      return /*#__PURE__*/React__default.createElement(DirectionUp, {
        width: width,
        height: height,
        fill: fill
      });
    case "DirectionLeft":
      return /*#__PURE__*/React__default.createElement(DirectionLeft, {
        width: width,
        height: height,
        fill: fill
      });
    case "DirectionRight":
      return /*#__PURE__*/React__default.createElement(DirectionRight, {
        width: width,
        height: height,
        fill: fill
      });
    case "EyeOn":
      return /*#__PURE__*/React__default.createElement(EyeOn, {
        width: width,
        height: height,
        fill: fill
      });
    case "EyeOff":
      return /*#__PURE__*/React__default.createElement(EyeOff, {
        width: width,
        height: height,
        fill: fill
      });
    case "Calendar":
      return /*#__PURE__*/React__default.createElement(Calendar, {
        width: width,
        height: height
      });
    case "Refresh":
      return /*#__PURE__*/React__default.createElement(Refresh, {
        width: width,
        height: height,
        fill: fill
      });
    case "Cloud":
      return /*#__PURE__*/React__default.createElement(Cloud, {
        width: width,
        height: height,
        fill: fill
      });
    case "Custom":
      return custom;
  }
};

var Modal = function Modal(_a) {
  var children = _a.children,
    width = _a.width,
    height = _a.height,
    borderRadius = _a.borderRadius,
    _b = _a.padding,
    padding = _b === void 0 ? "20px" : _b,
    _c = _a.backgroundColor,
    backgroundColor = _c === void 0 ? "#121217" : _c,
    _d = _a.buttonGap,
    buttonGap = _d === void 0 ? 5 : _d,
    okButton = _a.okButton,
    cancelButton = _a.cancelButton,
    _e = _a.isCloseButtonVisible,
    isCloseButtonVisible = _e === void 0 ? false : _e,
    onClose = _a.onClose;
  return /*#__PURE__*/React__default.createElement(ModalContainer, {
    backgroundColor: backgroundColor,
    width: width,
    height: height,
    padding: padding,
    borderRadius: borderRadius
  }, isCloseButtonVisible && /*#__PURE__*/React__default.createElement(IconWrapper, {
    onClick: onClose
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "Close",
    width: 30,
    height: 30,
    fill: "#000"
  })), /*#__PURE__*/React__default.createElement(Spacing, {
    gap: buttonGap,
    column: true,
    align: "center"
  }, children, /*#__PURE__*/React__default.createElement(ButtonWrapper$3, null, cancelButton && cancelButton, okButton && okButton)));
};
var ModalContainer = newStyled.div(templateObject_5$b || (templateObject_5$b = __makeTemplateObject(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 500;\n  background-color: ", ";\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", " {\n    max-width: 460px;\n    width: calc(100% - 40px);\n  }\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 500;\n  background-color: ", ";\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", " {\n    max-width: 460px;\n    width: calc(100% - 40px);\n  }\n"])), function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.padding && css(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n      padding: ", ";\n    "], ["\n      padding: ", ";\n    "])), props.padding);
}, function (props) {
  return props.width && css(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n      width: ", "px;\n    "], ["\n      width: ", "px;\n    "])), props.width);
}, function (props) {
  return props.height && css(templateObject_3$i || (templateObject_3$i = __makeTemplateObject(["\n      height: ", "px;\n    "], ["\n      height: ", "px;\n    "])), props.height);
}, function (props) {
  return props.borderRadius && css(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n      border-radius: ", "px;\n    "], ["\n      border-radius: ", "px;\n    "])), props.borderRadius);
}, mediaQuery.tabletWidth);
var ButtonWrapper$3 = newStyled.div(templateObject_6$b || (templateObject_6$b = __makeTemplateObject(["\n  display: flex;\n  align-self: stretch;\n  gap: 15px;\n"], ["\n  display: flex;\n  align-self: stretch;\n  gap: 15px;\n"])));
var IconWrapper = newStyled.div(templateObject_7$8 || (templateObject_7$8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: end;\n  cursor: pointer;\n"], ["\n  display: flex;\n  justify-content: end;\n  cursor: pointer;\n"])));
var templateObject_1$o, templateObject_2$j, templateObject_3$i, templateObject_4$b, templateObject_5$b, templateObject_6$b, templateObject_7$8;

var Skeleton = function Skeleton(_a) {
  var width = _a.width,
    height = _a.height,
    borderRadius = _a.borderRadius;
  return /*#__PURE__*/React__default.createElement(SkeletonContainer, {
    width: width,
    height: height,
    borderRadius: borderRadius
  }, /*#__PURE__*/React__default.createElement(SkeletonLine, null));
};
var SkeletonContainer = newStyled.div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  background-color: #ddd;\n  width: ", ";\n  height: ", ";\n  position: relative;\n  overflow: hidden;\n\n  ", ";\n"], ["\n  background-color: #ddd;\n  width: ", ";\n  height: ", ";\n  position: relative;\n  overflow: hidden;\n\n  ", ";\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.borderRadius && css(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n      border-radius: ", "px;\n    "], ["\n      border-radius: ", "px;\n    "])), props.borderRadius);
});
var SkeletonLine = newStyled.div(templateObject_3$h || (templateObject_3$h = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(90deg, transparent, #f7fcf8, transparent);\n\n  @keyframes loading {\n    0% {\n      transform: translateX(-100%);\n    }\n    100% {\n      transform: translateX(100%);\n    }\n  }\n\n  animation: loading 1.5s linear infinite;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(90deg, transparent, #f7fcf8, transparent);\n\n  @keyframes loading {\n    0% {\n      transform: translateX(-100%);\n    }\n    100% {\n      transform: translateX(100%);\n    }\n  }\n\n  animation: loading 1.5s linear infinite;\n"])));
var templateObject_1$n, templateObject_2$i, templateObject_3$h;

var UnCheckedSvg = encodeURIComponent("\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_233_1807)\">\n<path d=\"M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z\" fill=\"#E0E0E0\"/>\n<path d=\"M8.50003 13.7501C8.34003 13.7501 8.18003 13.7001 8.05003 13.6001L4.05003 10.6001C3.72003 10.3501 3.65003 9.88006 3.90003 9.55006C4.15003 9.22006 4.62003 9.15006 4.95003 9.40006L8.34003 11.9401L12.89 5.56006C13.13 5.22006 13.6 5.15006 13.94 5.39006C14.28 5.63006 14.36 6.10006 14.11 6.44006L9.11003 13.4401C8.99003 13.6001 8.81003 13.7101 8.61003 13.7501C8.57003 13.7501 8.53003 13.7501 8.50003 13.7501Z\" fill=\"white\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_233_1807\">\n<rect width=\"18\" height=\"18\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n");
var CheckedSvg = encodeURIComponent("\n<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_233_1806)\">\n<path d=\"M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z\" fill=\"#212121\"/>\n<path d=\"M8.50003 13.7501C8.34003 13.7501 8.18003 13.7001 8.05003 13.6001L4.05003 10.6001C3.72003 10.3501 3.65003 9.88006 3.90003 9.55006C4.15003 9.22006 4.62003 9.15006 4.95003 9.40006L8.34003 11.9401L12.89 5.56006C13.13 5.22006 13.6 5.15006 13.94 5.39006C14.28 5.63006 14.36 6.10006 14.11 6.44006L9.11003 13.4401C8.99003 13.6001 8.81003 13.7101 8.61003 13.7501C8.57003 13.7501 8.53003 13.7501 8.50003 13.7501Z\" fill=\"white\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_233_1806\">\n<rect width=\"18\" height=\"18\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>\n");

var Checkbox = function Checkbox(_a) {
  var label = _a.label,
    labelKey = _a.labelKey,
    value = _a.value,
    onChange = _a.onChange,
    width = _a.width,
    height = _a.height,
    _b = _a.gap,
    gap = _b === void 0 ? 8 : _b;
  return /*#__PURE__*/React__default.createElement(StyledLabel$1, {
    htmlFor: labelKey,
    gap: gap
  }, /*#__PURE__*/React__default.createElement(StyledCheckbox, {
    width: width,
    height: height,
    type: "checkbox",
    id: labelKey,
    checked: value,
    onChange: onChange
  }), label);
};
var StyledCheckbox = newStyled.input(templateObject_5$a || (templateObject_5$a = __makeTemplateObject(["\n  appearance: none; // IE11\uC740 \uC9C0\uC6D0 \uC548 \uB428..\n  margin: 0;\n\n  ", ";\n\n  ", ";\n  border: 1.5px solid gainsboro;\n  border-radius: 99px;\n  cursor: pointer;\n\n  & {\n    background-image: url(\"data:image/svg+xml;charset=utf8,", "\");\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n  }\n\n  &:checked {\n    background-image: url(\"data:image/svg+xml;charset=utf8,", "\");\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n  }\n"], ["\n  appearance: none; // IE11\uC740 \uC9C0\uC6D0 \uC548 \uB428..\n  margin: 0;\n\n  ", ";\n\n  ", ";\n  border: 1.5px solid gainsboro;\n  border-radius: 99px;\n  cursor: pointer;\n\n  & {\n    background-image: url(\"data:image/svg+xml;charset=utf8,", "\");\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n  }\n\n  &:checked {\n    background-image: url(\"data:image/svg+xml;charset=utf8,", "\");\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n  }\n"])), function (props) {
  return props.width ? css(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n          width: ", "px;\n        "], ["\n          width: ", "px;\n        "])), props.width) : css(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n          width: 24px;\n        "], ["\n          width: 24px;\n        "])));
}, function (props) {
  return props.height ? css(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["\n          height: ", "px;\n        "], ["\n          height: ", "px;\n        "])), props.height) : css(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n          height: 24px;\n        "], ["\n          height: 24px;\n        "])));
}, UnCheckedSvg, CheckedSvg);
var StyledLabel$1 = newStyled.label(templateObject_6$a || (templateObject_6$a = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  cursor: pointer;\n  gap: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  cursor: pointer;\n  gap: ", "px;\n"])), function (props) {
  return props.gap;
});
var templateObject_1$m, templateObject_2$h, templateObject_3$g, templateObject_4$a, templateObject_5$a, templateObject_6$a;

var DropDown = function DropDown(_a) {
  var main = _a.main,
    setMain = _a.setMain,
    setValue = _a.setValue,
    list = _a.list,
    _b = _a.width,
    width = _b === void 0 ? 320 : _b,
    _c = _a.height,
    height = _c === void 0 ? 24 : _c,
    _d = _a.background,
    background = _d === void 0 ? "#fff" : _d,
    onChange = _a.onChange;
  var _e = useState(false),
    rotated = _e[0],
    setRotated = _e[1];
  var _f = useState(false),
    isFold = _f[0],
    setIsFold = _f[1];
  var modalRef = useRef(null);
  useEffect(function () {
    var handleClick = function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setRotated(false);
        setIsFold(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return function () {
      return window.removeEventListener("mousedown", handleClick);
    };
  }, [modalRef]);
  var handleRotated = function handleRotated() {
    setRotated(!rotated);
  };
  var handleFold = function handleFold() {
    setIsFold(!isFold);
    handleRotated();
  };
  var handleChangeMain = function handleChangeMain(dropDownItem) {
    setMain(dropDownItem);
    setValue === null || setValue === void 0 ? void 0 : setValue(dropDownItem.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(dropDownItem.value);
    setRotated(!rotated);
    setIsFold(!isFold);
  };
  return /*#__PURE__*/React__default.createElement(Container$6, {
    ref: modalRef
  }, /*#__PURE__*/React__default.createElement(Main, {
    width: width,
    height: height,
    onClick: handleFold,
    background: background
  }, /*#__PURE__*/React__default.createElement(Spacing, {
    justify: "space-between",
    align: "center"
  }, main.item, /*#__PURE__*/React__default.createElement(Icon, {
    name: "DirectionDown",
    width: 24,
    height: 24,
    rotated: rotated
  }))), /*#__PURE__*/React__default.createElement(List, {
    width: width,
    isFold: isFold
  }, list.map(function (object, index) {
    return /*#__PURE__*/React__default.createElement(Other, {
      height: height,
      key: object.value,
      onClick: function onClick() {
        return handleChangeMain(object);
      },
      last: list.length - 1 === index
    }, object.item);
  })));
};
var Container$6 = newStyled.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  z-index: 2;\n"], ["\n  z-index: 2;\n"])));
var Main = newStyled.div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: flex;\n  width: ", "px;\n  height: ", "px;\n  flex-direction: column;\n  justify-content: center;\n  flex-shrink: 0;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 8px 0;\n  cursor: pointer;\n  background: ", ";\n"], ["\n  display: flex;\n  width: ", "px;\n  height: ", "px;\n  flex-direction: column;\n  justify-content: center;\n  flex-shrink: 0;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 8px 0;\n  cursor: pointer;\n  background: ", ";\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.height + 12;
}, function (props) {
  return props.background;
});
var Other = newStyled.div(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  display: flex;\n  height: ", "px;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 8px;\n  align-items: center;\n\n  ", "\n\n  padding: 12px;\n  cursor: pointer;\n  background: #fff;\n\n  &:hover {\n    background: #f5f5f5;\n    transition: background-color 0.4s ease;\n  }\n"], ["\n  display: flex;\n  height: ", "px;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 8px;\n  align-items: center;\n\n  ", "\n\n  padding: 12px;\n  cursor: pointer;\n  background: #fff;\n\n  &:hover {\n    background: #f5f5f5;\n    transition: background-color 0.4s ease;\n  }\n"])), function (props) {
  return props.height;
}, function (props) {
  return props.last && css(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n      border-bottom: none;\n      margin-bottom: 0;\n    "], ["\n      border-bottom: none;\n      margin-bottom: 0;\n    "])));
});
var List = newStyled.div(templateObject_7$7 || (templateObject_7$7 = __makeTemplateObject(["\n  overflow: auto;\n  width: ", "px;\n  max-height: 310px;\n  background: #fff;\n  padding: 10px;\n  overflow-x: hidden;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  & {\n    -ms-overflow-style: none; /* \uC778\uD130\uB137 \uC775\uC2A4\uD50C\uB85C\uB7EC */\n    scrollbar-width: none; /* \uD30C\uC774\uC5B4\uD3ED\uC2A4 */\n  }\n\n  box-shadow:\n    0 4px 4px 0 rgba(0, 0, 0, 0.04),\n    0 2px 8px 0 rgba(0, 0, 0, 0.1);\n\n  ", "\n"], ["\n  overflow: auto;\n  width: ", "px;\n  max-height: 310px;\n  background: #fff;\n  padding: 10px;\n  overflow-x: hidden;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  & {\n    -ms-overflow-style: none; /* \uC778\uD130\uB137 \uC775\uC2A4\uD50C\uB85C\uB7EC */\n    scrollbar-width: none; /* \uD30C\uC774\uC5B4\uD3ED\uC2A4 */\n  }\n\n  box-shadow:\n    0 4px 4px 0 rgba(0, 0, 0, 0.04),\n    0 2px 8px 0 rgba(0, 0, 0, 0.1);\n\n  ", "\n"])), function (props) {
  return props.width - 20;
}, function (props) {
  return props.isFold ? css(templateObject_5$9 || (templateObject_5$9 = __makeTemplateObject(["\n          animation-name: dropdown;\n          animation-duration: 500ms;\n          animation-direction: normal;\n          position: absolute;\n        "], ["\n          animation-name: dropdown;\n          animation-duration: 500ms;\n          animation-direction: normal;\n          position: absolute;\n        "]))) : css(templateObject_6$9 || (templateObject_6$9 = __makeTemplateObject(["\n          display: none;\n        "], ["\n          display: none;\n        "])));
});
var templateObject_1$l, templateObject_2$g, templateObject_3$f, templateObject_4$9, templateObject_5$9, templateObject_6$9, templateObject_7$7;

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
var r = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

var MILLISECONDS_IN_DAY$1 = 86400000;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY$1) + 1;
}

function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK$2 = 604800000;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
}

var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters$2 = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var formatters$3 = formatters$2;

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return formatters$3.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);

    // Padding
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return formatters$3.M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = getUTCWeek(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = getUTCISOWeek(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return formatters$3.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return formatters$3.h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return formatters$3.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return formatters$3.m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return formatters$3.s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return formatters$3.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters$1 = formatters;

var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters$1 = longFormatters;

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
var formatDistance$1 = formatDistance;

function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
var formatLong$1 = formatLong;

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative$1 = formatRelative;

function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
var localize$1 = localize;

function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
var match$1 = match;

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
var defaultLocale = locale;

// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'([^]*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = getDefaultOptions();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp$1).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp$1).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString$1(substring);
    }
    var formatter = formatters$1[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString$1(input) {
  var matched = input.match(escapedStringRegExp$1);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp$1, "'");
}

var MILLISECONDS_IN_MINUTE = 60000;

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

var MILLISECONDS_IN_HOUR = 3600000;

/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  var days = amount * 7;
  return addDays(dirtyDate, days);
}

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  var dayOfMonth = date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the quarters added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
function addQuarters(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  var months = amount * 3;
  return addMonths(dirtyDate, months);
}

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addDays(dirtyDate, -amount);
}

/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addWeeks(dirtyDate, -amount);
}

/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, -amount);
}

/**
 * @name subQuarters
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the quarters subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * const result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */
function subQuarters(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addQuarters(dirtyDate, -amount);
}

/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addYears(dirtyDate, -amount);
}

/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}

/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var day = date.getDay();
  return day;
}

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  return startOfWeek(dirtyDate, {
    weekStartsOn: 1
  });
}

/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = startOfISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000;

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  return month;
}

/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getFullYear();
}

/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
function getTime(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}

/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds(dirtyDate, dirtySeconds) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var seconds = toInteger(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes(dirtyDate, dirtyMinutes) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var minutes = toInteger(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours(dirtyDate, dirtyHours) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var hours = toInteger(dirtyHours);
  date.setHours(hours);
  return date;
}

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth(dirtyDate, dirtyMonth) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var month = toInteger(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
function setQuarter(dirtyDate, dirtyQuarter) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var quarter = toInteger(dirtyQuarter);
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
  var diff = quarter - oldQuarter;
  return setMonth(date, date.getMonth() + diff * 3);
}

/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear(dirtyDate, dirtyYear) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var year = toInteger(dirtyYear);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }
  date.setFullYear(year);
  return date;
}

/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} - the earliest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */
function min$1(dirtyDatesArray) {
  requiredArgs(1, arguments);
  var datesArray;
  // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray;
    // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (_typeof(dirtyDatesArray) === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }
  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = toDate(dirtyDate);
    if (result === undefined || result > currentDate || isNaN(currentDate.getDate())) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */
function max$1(dirtyDatesArray) {
  requiredArgs(1, arguments);
  var datesArray;
  // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray;

    // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (_typeof(dirtyDatesArray) === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }
  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = toDate(dirtyDate);
    if (result === undefined || result < currentDate || isNaN(Number(currentDate))) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

var MILLISECONDS_IN_DAY = 86400000;

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
function startOfQuarter(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3;
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var cleanDate = toDate(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual$1(dirtyLeftDate, dirtyRightDate) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyLeftDate);
  var dateRight = toDate(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  var dateRightStartOfDay = startOfDay(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */
function isSameYear(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear();
}

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same quarter (and year)?
 *
 * @description
 * Are the given dates in the same quarter (and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same quarter?
 * const result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft);
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight);
  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  requiredArgs(2, arguments);
  var time = toDate(dirtyDate).getTime();
  var startTime = toDate(interval.start).getTime();
  var endTime = toDate(interval.end).getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }
  return time >= startTime && time <= endTime;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      target[property] = object[property];
    }
  }
  return target;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf$1(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = /*#__PURE__*/function () {
  function Setter() {
    _classCallCheck(this, Setter);
    _defineProperty(this, "priority", void 0);
    _defineProperty(this, "subPriority", 0);
  }
  _createClass(Setter, [{
    key: "validate",
    value: function validate(_utcDate, _options) {
      return true;
    }
  }]);
  return Setter;
}();
var ValueSetter = /*#__PURE__*/function (_Setter) {
  _inherits(ValueSetter, _Setter);
  var _super = _createSuper(ValueSetter);
  function ValueSetter(value, validateValue, setValue, priority, subPriority) {
    var _this;
    _classCallCheck(this, ValueSetter);
    _this = _super.call(this);
    _this.value = value;
    _this.validateValue = validateValue;
    _this.setValue = setValue;
    _this.priority = priority;
    if (subPriority) {
      _this.subPriority = subPriority;
    }
    return _this;
  }
  _createClass(ValueSetter, [{
    key: "validate",
    value: function validate(utcDate, options) {
      return this.validateValue(utcDate, this.value, options);
    }
  }, {
    key: "set",
    value: function set(utcDate, flags, options) {
      return this.setValue(utcDate, flags, this.value, options);
    }
  }]);
  return ValueSetter;
}(Setter);
var DateToSystemTimezoneSetter = /*#__PURE__*/function (_Setter2) {
  _inherits(DateToSystemTimezoneSetter, _Setter2);
  var _super2 = _createSuper(DateToSystemTimezoneSetter);
  function DateToSystemTimezoneSetter() {
    var _this2;
    _classCallCheck(this, DateToSystemTimezoneSetter);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
    _defineProperty(_assertThisInitialized$1(_this2), "subPriority", -1);
    return _this2;
  }
  _createClass(DateToSystemTimezoneSetter, [{
    key: "set",
    value: function set(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }
      var convertedDate = new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }
  }]);
  return DateToSystemTimezoneSetter;
}(Setter);

var Parser = /*#__PURE__*/function () {
  function Parser() {
    _classCallCheck(this, Parser);
    _defineProperty(this, "incompatibleTokens", void 0);
    _defineProperty(this, "priority", void 0);
    _defineProperty(this, "subPriority", void 0);
  }
  _createClass(Parser, [{
    key: "run",
    value: function run(dateString, token, match, options) {
      var result = this.parse(dateString, token, match, options);
      if (!result) {
        return null;
      }
      return {
        setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
        rest: result.rest
      };
    }
  }, {
    key: "validate",
    value: function validate(_utcDate, _value, _options) {
      return true;
    }
  }]);
  return Parser;
}();

var EraParser = /*#__PURE__*/function (_Parser) {
  _inherits(EraParser, _Parser);
  var _super = _createSuper(EraParser);
  function EraParser() {
    var _this;
    _classCallCheck(this, EraParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 140);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['R', 'u', 't', 'T']);
    return _this;
  }
  _createClass(EraParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(dateString, {
            width: 'abbreviated'
          }) || match.era(dateString, {
            width: 'narrow'
          });
        // A, B
        case 'GGGGG':
          return match.era(dateString, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ
        case 'GGGG':
        default:
          return match.era(dateString, {
            width: 'wide'
          }) || match.era(dateString, {
            width: 'abbreviated'
          }) || match.era(dateString, {
            width: 'narrow'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return EraParser;
}(Parser);

/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59

  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};

var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }

  // Input is 'Z'
  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case 'morning':
      return 4;
    case 'evening':
      return 17;
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex$1(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
var YearParser = /*#__PURE__*/function (_Parser) {
  _inherits(YearParser, _Parser);
  var _super = _createSuper(YearParser);
  function YearParser() {
    var _this;
    _classCallCheck(this, YearParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 130);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  _createClass(YearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };
      switch (token) {
        case 'y':
          return mapValue(parseNDigits(4, dateString), valueCallback);
        case 'yo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'year'
          }), valueCallback);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      var currentYear = date.getUTCFullYear();
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }
      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return YearParser;
}(Parser);

// Local week-numbering year
var LocalWeekYearParser = /*#__PURE__*/function (_Parser) {
  _inherits(LocalWeekYearParser, _Parser);
  var _super = _createSuper(LocalWeekYearParser);
  function LocalWeekYearParser() {
    var _this;
    _classCallCheck(this, LocalWeekYearParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 130);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);
    return _this;
  }
  _createClass(LocalWeekYearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };
      switch (token) {
        case 'Y':
          return mapValue(parseNDigits(4, dateString), valueCallback);
        case 'Yo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'year'
          }), valueCallback);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set(date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }
      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    }
  }]);
  return LocalWeekYearParser;
}(Parser);

var ISOWeekYearParser = /*#__PURE__*/function (_Parser) {
  _inherits(ISOWeekYearParser, _Parser);
  var _super = _createSuper(ISOWeekYearParser);
  function ISOWeekYearParser() {
    var _this;
    _classCallCheck(this, ISOWeekYearParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 130);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);
    return _this;
  }
  _createClass(ISOWeekYearParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      if (token === 'R') {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    }
  }]);
  return ISOWeekYearParser;
}(Parser);

var ExtendedYearParser = /*#__PURE__*/function (_Parser) {
  _inherits(ExtendedYearParser, _Parser);
  var _super = _createSuper(ExtendedYearParser);
  function ExtendedYearParser() {
    var _this;
    _classCallCheck(this, ExtendedYearParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 130);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  _createClass(ExtendedYearParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      if (token === 'u') {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ExtendedYearParser;
}(Parser);

var QuarterParser = /*#__PURE__*/function (_Parser) {
  _inherits(QuarterParser, _Parser);
  var _super = _createSuper(QuarterParser);
  function QuarterParser() {
    var _this;
    _classCallCheck(this, QuarterParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 120);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  _createClass(QuarterParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, dateString);
        // 1st, 2nd, 3rd, 4th
        case 'Qo':
          return match.ordinalNumber(dateString, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4
        case 'QQQ':
          return match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'QQQQQ':
          return match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...
        case 'QQQQ':
        default:
          return match.quarter(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return QuarterParser;
}(Parser);

var StandAloneQuarterParser = /*#__PURE__*/function (_Parser) {
  _inherits(StandAloneQuarterParser, _Parser);
  var _super = _createSuper(StandAloneQuarterParser);
  function StandAloneQuarterParser() {
    var _this;
    _classCallCheck(this, StandAloneQuarterParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 120);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  _createClass(StandAloneQuarterParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, dateString);
        // 1st, 2nd, 3rd, 4th
        case 'qo':
          return match.ordinalNumber(dateString, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4
        case 'qqq':
          return match.quarter(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'qqqqq':
          return match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...
        case 'qqqq':
        default:
          return match.quarter(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneQuarterParser;
}(Parser);

var MonthParser = /*#__PURE__*/function (_Parser) {
  _inherits(MonthParser, _Parser);
  var _super = _createSuper(MonthParser);
  function MonthParser() {
    var _this;
    _classCallCheck(this, MonthParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
    _defineProperty(_assertThisInitialized$1(_this), "priority", 110);
    return _this;
  }
  _createClass(MonthParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };
      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
        // 01, 02, ..., 12
        case 'MM':
          return mapValue(parseNDigits(2, dateString), valueCallback);
        // 1st, 2nd, ..., 12th
        case 'Mo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'month'
          }), valueCallback);
        // Jan, Feb, ..., Dec
        case 'MMM':
          return match.month(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D
        case 'MMMMM':
          return match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December
        case 'MMMM':
        default:
          return match.month(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return MonthParser;
}(Parser);

var StandAloneMonthParser = /*#__PURE__*/function (_Parser) {
  _inherits(StandAloneMonthParser, _Parser);
  var _super = _createSuper(StandAloneMonthParser);
  function StandAloneMonthParser() {
    var _this;
    _classCallCheck(this, StandAloneMonthParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 110);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  _createClass(StandAloneMonthParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };
      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
        // 01, 02, ..., 12
        case 'LL':
          return mapValue(parseNDigits(2, dateString), valueCallback);
        // 1st, 2nd, ..., 12th
        case 'Lo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'month'
          }), valueCallback);
        // Jan, Feb, ..., Dec
        case 'LLL':
          return match.month(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D
        case 'LLLLL':
          return match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December
        case 'LLLL':
        default:
          return match.month(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneMonthParser;
}(Parser);

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

var LocalWeekParser = /*#__PURE__*/function (_Parser) {
  _inherits(LocalWeekParser, _Parser);
  var _super = _createSuper(LocalWeekParser);
  function LocalWeekParser() {
    var _this;
    _classCallCheck(this, LocalWeekParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 100);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);
    return _this;
  }
  _createClass(LocalWeekParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, dateString);
        case 'wo':
          return match.ordinalNumber(dateString, {
            unit: 'week'
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    }
  }]);
  return LocalWeekParser;
}(Parser);

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

var ISOWeekParser = /*#__PURE__*/function (_Parser) {
  _inherits(ISOWeekParser, _Parser);
  var _super = _createSuper(ISOWeekParser);
  function ISOWeekParser() {
    var _this;
    _classCallCheck(this, ISOWeekParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 100);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);
    return _this;
  }
  _createClass(ISOWeekParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, dateString);
        case 'Io':
          return match.ordinalNumber(dateString, {
            unit: 'week'
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value));
    }
  }]);
  return ISOWeekParser;
}(Parser);

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Day of the month
var DateParser = /*#__PURE__*/function (_Parser) {
  _inherits(DateParser, _Parser);
  var _super = _createSuper(DateParser);
  function DateParser() {
    var _this;
    _classCallCheck(this, DateParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 90);
    _defineProperty(_assertThisInitialized$1(_this), "subPriority", 1);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  _createClass(DateParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, dateString);
        case 'do':
          return match.ordinalNumber(dateString, {
            unit: 'date'
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      var month = date.getUTCMonth();
      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DateParser;
}(Parser);

var DayOfYearParser = /*#__PURE__*/function (_Parser) {
  _inherits(DayOfYearParser, _Parser);
  var _super = _createSuper(DayOfYearParser);
  function DayOfYearParser() {
    var _this;
    _classCallCheck(this, DayOfYearParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 90);
    _defineProperty(_assertThisInitialized$1(_this), "subpriority", 1);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  _createClass(DayOfYearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, dateString);
        case 'Do':
          return match.ordinalNumber(dateString, {
            unit: 'date'
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayOfYearParser;
}(Parser);

function setUTCDay(dirtyDate, dirtyDay, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(2, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

var DayParser = /*#__PURE__*/function (_Parser) {
  _inherits(DayParser, _Parser);
  var _super = _createSuper(DayParser);
  function DayParser() {
    var _this;
    _classCallCheck(this, DayParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 90);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['D', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  _createClass(DayParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // T
        case 'EEEEE':
          return match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu
        case 'EEEEEE':
          return match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday
        case 'EEEE':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayParser;
}(Parser);

var LocalDayParser = /*#__PURE__*/function (_Parser) {
  _inherits(LocalDayParser, _Parser);
  var _super = _createSuper(LocalDayParser);
  function LocalDayParser() {
    var _this;
    _classCallCheck(this, LocalDayParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 90);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']);
    return _this;
  }
  _createClass(LocalDayParser, [{
    key: "parse",
    value: function parse(dateString, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
        // 3rd
        case 'eo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'day'
          }), valueCallback);
        // Tue
        case 'eee':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // T
        case 'eeeee':
          return match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu
        case 'eeeeee':
          return match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday
        case 'eeee':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return LocalDayParser;
}(Parser);

var StandAloneLocalDayParser = /*#__PURE__*/function (_Parser) {
  _inherits(StandAloneLocalDayParser, _Parser);
  var _super = _createSuper(StandAloneLocalDayParser);
  function StandAloneLocalDayParser() {
    var _this;
    _classCallCheck(this, StandAloneLocalDayParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 90);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']);
    return _this;
  }
  _createClass(StandAloneLocalDayParser, [{
    key: "parse",
    value: function parse(dateString, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
        // 3rd
        case 'co':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'day'
          }), valueCallback);
        // Tue
        case 'ccc':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // T
        case 'ccccc':
          return match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu
        case 'cccccc':
          return match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday
        case 'cccc':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneLocalDayParser;
}(Parser);

function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);
  if (day % 7 === 0) {
    day = day - 7;
  }
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

var ISODayParser = /*#__PURE__*/function (_Parser) {
  _inherits(ISODayParser, _Parser);
  var _super = _createSuper(ISODayParser);
  function ISODayParser() {
    var _this;
    _classCallCheck(this, ISODayParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 90);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']);
    return _this;
  }
  _createClass(ISODayParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        if (value === 0) {
          return 7;
        }
        return value;
      };
      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, dateString);
        // 2nd
        case 'io':
          return match.ordinalNumber(dateString, {
            unit: 'day'
          });
        // Tue
        case 'iii':
          return mapValue(match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // T
        case 'iiiii':
          return mapValue(match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // Tu
        case 'iiiiii':
          return mapValue(match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // Tuesday
        case 'iiii':
        default:
          return mapValue(match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 7;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date = setUTCISODay(date, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ISODayParser;
}(Parser);

var AMPMParser = /*#__PURE__*/function (_Parser) {
  _inherits(AMPMParser, _Parser);
  var _super = _createSuper(AMPMParser);
  function AMPMParser() {
    var _this;
    _classCallCheck(this, AMPMParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 80);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['b', 'B', 'H', 'k', 't', 'T']);
    return _this;
  }
  _createClass(AMPMParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'aaaaa':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'aaaa':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMParser;
}(Parser);

var AMPMMidnightParser = /*#__PURE__*/function (_Parser) {
  _inherits(AMPMMidnightParser, _Parser);
  var _super = _createSuper(AMPMMidnightParser);
  function AMPMMidnightParser() {
    var _this;
    _classCallCheck(this, AMPMMidnightParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 80);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['a', 'B', 'H', 'k', 't', 'T']);
    return _this;
  }
  _createClass(AMPMMidnightParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'bbbbb':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'bbbb':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMMidnightParser;
}(Parser);

var DayPeriodParser = /*#__PURE__*/function (_Parser) {
  _inherits(DayPeriodParser, _Parser);
  var _super = _createSuper(DayPeriodParser);
  function DayPeriodParser() {
    var _this;
    _classCallCheck(this, DayPeriodParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 80);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['a', 'b', 't', 'T']);
    return _this;
  }
  _createClass(DayPeriodParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'BBBBB':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'BBBB':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return DayPeriodParser;
}(Parser);

var Hour1to12Parser = /*#__PURE__*/function (_Parser) {
  _inherits(Hour1to12Parser, _Parser);
  var _super = _createSuper(Hour1to12Parser);
  function Hour1to12Parser() {
    var _this;
    _classCallCheck(this, Hour1to12Parser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 70);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['H', 'K', 'k', 't', 'T']);
    return _this;
  }
  _createClass(Hour1to12Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, dateString);
        case 'ho':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 12;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour1to12Parser;
}(Parser);

var Hour0to23Parser = /*#__PURE__*/function (_Parser) {
  _inherits(Hour0to23Parser, _Parser);
  var _super = _createSuper(Hour0to23Parser);
  function Hour0to23Parser() {
    var _this;
    _classCallCheck(this, Hour0to23Parser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 70);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['a', 'b', 'h', 'K', 'k', 't', 'T']);
    return _this;
  }
  _createClass(Hour0to23Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, dateString);
        case 'Ho':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 23;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  }]);
  return Hour0to23Parser;
}(Parser);

var Hour0To11Parser = /*#__PURE__*/function (_Parser) {
  _inherits(Hour0To11Parser, _Parser);
  var _super = _createSuper(Hour0To11Parser);
  function Hour0To11Parser() {
    var _this;
    _classCallCheck(this, Hour0To11Parser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 70);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['h', 'H', 'k', 't', 'T']);
    return _this;
  }
  _createClass(Hour0To11Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, dateString);
        case 'Ko':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour0To11Parser;
}(Parser);

var Hour1To24Parser = /*#__PURE__*/function (_Parser) {
  _inherits(Hour1To24Parser, _Parser);
  var _super = _createSuper(Hour1To24Parser);
  function Hour1To24Parser() {
    var _this;
    _classCallCheck(this, Hour1To24Parser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 70);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['a', 'b', 'h', 'H', 'K', 't', 'T']);
    return _this;
  }
  _createClass(Hour1To24Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, dateString);
        case 'ko':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 24;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  }]);
  return Hour1To24Parser;
}(Parser);

var MinuteParser = /*#__PURE__*/function (_Parser) {
  _inherits(MinuteParser, _Parser);
  var _super = _createSuper(MinuteParser);
  function MinuteParser() {
    var _this;
    _classCallCheck(this, MinuteParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 60);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['t', 'T']);
    return _this;
  }
  _createClass(MinuteParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, dateString);
        case 'mo':
          return match.ordinalNumber(dateString, {
            unit: 'minute'
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  }]);
  return MinuteParser;
}(Parser);

var SecondParser = /*#__PURE__*/function (_Parser) {
  _inherits(SecondParser, _Parser);
  var _super = _createSuper(SecondParser);
  function SecondParser() {
    var _this;
    _classCallCheck(this, SecondParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 50);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['t', 'T']);
    return _this;
  }
  _createClass(SecondParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, dateString);
        case 'so':
          return match.ordinalNumber(dateString, {
            unit: 'second'
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  }]);
  return SecondParser;
}(Parser);

var FractionOfSecondParser = /*#__PURE__*/function (_Parser) {
  _inherits(FractionOfSecondParser, _Parser);
  var _super = _createSuper(FractionOfSecondParser);
  function FractionOfSecondParser() {
    var _this;
    _classCallCheck(this, FractionOfSecondParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 30);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['t', 'T']);
    return _this;
  }
  _createClass(FractionOfSecondParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      var valueCallback = function valueCallback(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };
      return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMilliseconds(value);
      return date;
    }
  }]);
  return FractionOfSecondParser;
}(Parser);

var ISOTimezoneWithZParser = /*#__PURE__*/function (_Parser) {
  _inherits(ISOTimezoneWithZParser, _Parser);
  var _super = _createSuper(ISOTimezoneWithZParser);
  function ISOTimezoneWithZParser() {
    var _this;
    _classCallCheck(this, ISOTimezoneWithZParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 10);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['t', 'T', 'x']);
    return _this;
  }
  _createClass(ISOTimezoneWithZParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneWithZParser;
}(Parser);

var ISOTimezoneParser = /*#__PURE__*/function (_Parser) {
  _inherits(ISOTimezoneParser, _Parser);
  var _super = _createSuper(ISOTimezoneParser);
  function ISOTimezoneParser() {
    var _this;
    _classCallCheck(this, ISOTimezoneParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 10);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", ['t', 'T', 'X']);
    return _this;
  }
  _createClass(ISOTimezoneParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneParser;
}(Parser);

var TimestampSecondsParser = /*#__PURE__*/function (_Parser) {
  _inherits(TimestampSecondsParser, _Parser);
  var _super = _createSuper(TimestampSecondsParser);
  function TimestampSecondsParser() {
    var _this;
    _classCallCheck(this, TimestampSecondsParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 40);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", '*');
    return _this;
  }
  _createClass(TimestampSecondsParser, [{
    key: "parse",
    value: function parse(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampSecondsParser;
}(Parser);

var TimestampMillisecondsParser = /*#__PURE__*/function (_Parser) {
  _inherits(TimestampMillisecondsParser, _Parser);
  var _super = _createSuper(TimestampMillisecondsParser);
  function TimestampMillisecondsParser() {
    var _this;
    _classCallCheck(this, TimestampMillisecondsParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized$1(_this), "priority", 20);
    _defineProperty(_assertThisInitialized$1(_this), "incompatibleTokens", '*');
    return _this;
  }
  _createClass(TimestampMillisecondsParser, [{
    key: "parse",
    value: function parse(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampMillisecondsParser;
}(Parser);

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};

// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var defaultOptions = getDefaultOptions();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
  if (!locale.match) {
    throw new RangeError('locale must contain match property');
  }
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }
  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale
  };

  // If timezone isn't specified, it will be set to the system timezone
  var setters = [new DateToSystemTimezoneSetter()];
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter in longFormatters$1) {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];
  var _iterator = _createForOfIteratorHelper(tokens),
    _step;
  try {
    var _loop = function _loop() {
      var token = _step.value;
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      var firstCharacter = token[0];
      var parser = parsers[firstCharacter];
      if (parser) {
        var incompatibleTokens = parser.incompatibleTokens;
        if (Array.isArray(incompatibleTokens)) {
          var incompatibleToken = usedTokens.find(function (usedToken) {
            return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
          });
          if (incompatibleToken) {
            throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
          }
        } else if (parser.incompatibleTokens === '*' && usedTokens.length > 0) {
          throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
        }
        usedTokens.push({
          token: firstCharacter,
          fullToken: token
        });
        var parseResult = parser.run(dateString, token, locale.match, subFnOptions);
        if (!parseResult) {
          return {
            v: new Date(NaN)
          };
        }
        setters.push(parseResult.setter);
        dateString = parseResult.rest;
      } else {
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        }

        // Replace two single quote characters with one single quote character
        if (token === "''") {
          token = "'";
        } else if (firstCharacter === "'") {
          token = cleanEscapedString(token);
        }

        // Cut token from string, or, if string doesn't match the token, return Invalid Date
        if (dateString.indexOf(token) === 0) {
          dateString = dateString.slice(token.length);
        } else {
          return {
            v: new Date(NaN)
          };
        }
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();
      if (_typeof(_ret) === "object") return _ret.v;
    }

    // Check if the remaining input contains something other than whitespace
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }
  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyReferenceDate);
  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};
  var _iterator2 = _createForOfIteratorHelper(uniquePrioritySetters),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var setter = _step2.value;
      if (!setter.validate(utcDate, subFnOptions)) {
        return new Date(NaN);
      }
      var result = setter.set(utcDate, flags, subFnOptions);
      // Result is tuple (date, flags)
      if (Array.isArray(result)) {
        utcDate = result[0];
        assign(flags, result[1]);
        // Result is date
      } else {
        utcDate = result;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return utcDate;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  requiredArgs(1, arguments);
  var additionalDigits = toInteger((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}/**
 * Check whether some DOM node is our Component's node.
 */
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */

function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.
  // Also cover shadowRoot node by checking current.host


  while (current.parentNode || current.host) {
    // Only check normal node without shadowRoot
    if (current.parentNode && isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode || current.host;
  }

  return current;
}
/**
 * Check if the browser scrollbar was clicked
 */

function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}// ideally will get replaced with external dep
// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
var testPassiveEventSupport = function testPassiveEventSupport() {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    return;
  }

  var passive = false;
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      passive = true;
    }
  });

  var noop = function noop() {};

  window.addEventListener('testPassiveEventSupport', noop, options);
  window.removeEventListener('testPassiveEventSupport', noop, options);
  return passive;
};function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}

var uid = autoInc();var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ['touchstart', 'touchmove'];
var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
/**
 * Options for addEventHandler and removeEventHandler
 */

function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = {};
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

  if (isTouchEvent && passiveEventSupport) {
    handlerOptions.passive = !instance.props.preventDefault;
  }

  return handlerOptions;
}
/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */


function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;

  var componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inheritsLoose(onClickOutside, _Component);

    function onClickOutside(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.__outsideClickHandler = function (event) {
        if (typeof _this.__clickOutsideHandlerProp === 'function') {
          _this.__clickOutsideHandlerProp(event);

          return;
        }

        var instance = _this.getInstance();

        if (typeof instance.props.handleClickOutside === 'function') {
          instance.props.handleClickOutside(event);
          return;
        }

        if (typeof instance.handleClickOutside === 'function') {
          instance.handleClickOutside(event);
          return;
        }

        throw new Error("WrappedComponent: " + componentName + " lacks a handleClickOutside(event) function for processing outside click events.");
      };

      _this.__getComponentNode = function () {
        var instance = _this.getInstance();

        if (config && typeof config.setClickOutsideRef === 'function') {
          return config.setClickOutsideRef()(instance);
        }

        if (typeof instance.setClickOutsideRef === 'function') {
          return instance.setClickOutsideRef();
        }

        return findDOMNode(instance);
      };

      _this.enableOnClickOutside = function () {
        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
          return;
        }

        if (typeof passiveEventSupport === 'undefined') {
          passiveEventSupport = testPassiveEventSupport();
        }

        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;

        if (!events.forEach) {
          events = [events];
        }

        handlersMap[_this._uid] = function (event) {
          if (_this.componentNode === null) return;

          if (_this.props.preventDefault) {
            event.preventDefault();
          }

          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }

          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
          var current = event.composed && event.composedPath && event.composedPath().shift() || event.target;

          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }

          _this.__outsideClickHandler(event);
        };

        events.forEach(function (eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_assertThisInitialized(_this), eventName));
        });
      };

      _this.disableOnClickOutside = function () {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];

        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          events.forEach(function (eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_assertThisInitialized(_this), eventName));
          });
          delete handlersMap[_this._uid];
        }
      };

      _this.getRef = function (ref) {
        return _this.instanceRef = ref;
      };

      _this._uid = uid();
      return _this;
    }
    /**
     * Access the WrappedComponent's instance.
     */


    var _proto = onClickOutside.prototype;

    _proto.getInstance = function getInstance() {
      if (WrappedComponent.prototype && !WrappedComponent.prototype.isReactComponent) {
        return this;
      }

      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };

    /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */
    _proto.componentDidMount = function componentDidMount() {
      // If we are in an environment without a DOM such
      // as shallow rendering or snapshots then we exit
      // early to prevent any unhandled errors being thrown.
      if (typeof document === 'undefined' || !document.createElement) {
        return;
      }

      var instance = this.getInstance();

      if (config && typeof config.handleClickOutside === 'function') {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

        if (typeof this.__clickOutsideHandlerProp !== 'function') {
          throw new Error("WrappedComponent: " + componentName + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
        }
      }

      this.componentNode = this.__getComponentNode(); // return early so we dont initiate onClickOutside

      if (this.props.disableOnClickOutside) return;
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = this.__getComponentNode();
    }
    /**
     * Remove all document's event listeners for this component
     */
    ;

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    }
    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */
    ;

    /**
     * Pass-through render
     */
    _proto.render = function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props;
          _this$props.excludeScrollbar;
          var props = _objectWithoutPropertiesLoose(_this$props, ["excludeScrollbar"]);

      if (WrappedComponent.prototype && WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }

      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return createElement(WrappedComponent, props);
    };

    return onClickOutside;
  }(Component), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}

var ManagerReferenceNodeContext = React.createContext();
var ManagerReferenceNodeSetterContext = React.createContext();
function Manager(_ref) {
  var children = _ref.children;

  var _React$useState = React.useState(null),
      referenceNode = _React$useState[0],
      setReferenceNode = _React$useState[1];

  var hasUnmounted = React.useRef(false);
  React.useEffect(function () {
    return function () {
      hasUnmounted.current = true;
    };
  }, []);
  var handleSetReferenceNode = React.useCallback(function (node) {
    if (!hasUnmounted.current) {
      setReferenceNode(node);
    }
  }, []);
  return /*#__PURE__*/React.createElement(ManagerReferenceNodeContext.Provider, {
    value: referenceNode
  }, /*#__PURE__*/React.createElement(ManagerReferenceNodeSetterContext.Provider, {
    value: handleSetReferenceNode
  }, children));
}

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === 'function') {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};
/**
 * Simple ponyfill for Object.fromEntries
 */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? React.useLayoutEffect : React.useEffect;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

var isEqual = /*@__PURE__*/getDefaultExportFromCjs(reactFastCompare);

var EMPTY_MODIFIERS$1 = [];
var usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = React.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS$1
  };

  var _React$useState = React.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var updateStateModifier = React.useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        ReactDOM.flushSync(function () {
          setState({
            styles: fromEntries(elements.map(function (element) {
              return [element, state.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function (element) {
              return [element, state.attributes[element]];
            }))
          });
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = React.useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false
      }])
    };

    if (isEqual(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = React.useRef();
  useIsomorphicLayoutEffect(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

var NOOP = function NOOP() {
  return void 0;
};

var NOOP_PROMISE = function NOOP_PROMISE() {
  return Promise.resolve(null);
};

var EMPTY_MODIFIERS = [];
function Popper(_ref) {
  var _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy,
      _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS : _ref$modifiers,
      referenceElement = _ref.referenceElement,
      onFirstUpdate = _ref.onFirstUpdate,
      innerRef = _ref.innerRef,
      children = _ref.children;
  var referenceNode = React.useContext(ManagerReferenceNodeContext);

  var _React$useState = React.useState(null),
      popperElement = _React$useState[0],
      setPopperElement = _React$useState[1];

  var _React$useState2 = React.useState(null),
      arrowElement = _React$useState2[0],
      setArrowElement = _React$useState2[1];

  React.useEffect(function () {
    setRef(innerRef, popperElement);
  }, [innerRef, popperElement]);
  var options = React.useMemo(function () {
    return {
      placement: placement,
      strategy: strategy,
      onFirstUpdate: onFirstUpdate,
      modifiers: [].concat(modifiers, [{
        name: 'arrow',
        enabled: arrowElement != null,
        options: {
          element: arrowElement
        }
      }])
    };
  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);

  var _usePopper = usePopper(referenceElement || referenceNode, popperElement, options),
      state = _usePopper.state,
      styles = _usePopper.styles,
      forceUpdate = _usePopper.forceUpdate,
      update = _usePopper.update;

  var childrenProps = React.useMemo(function () {
    return {
      ref: setPopperElement,
      style: styles.popper,
      placement: state ? state.placement : placement,
      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: styles.arrow,
        ref: setArrowElement
      },
      forceUpdate: forceUpdate || NOOP,
      update: update || NOOP_PROMISE
    };
  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
  return unwrapArray(children)(childrenProps);
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var warning$1 = /*@__PURE__*/getDefaultExportFromCjs(warning_1);

function Reference(_ref) {
  var children = _ref.children,
      innerRef = _ref.innerRef;
  var setReferenceNode = React.useContext(ManagerReferenceNodeSetterContext);
  var refHandler = React.useCallback(function (node) {
    setRef(innerRef, node);
    safeInvoke(setReferenceNode, node);
  }, [innerRef, setReferenceNode]); // ran on unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps

  React.useEffect(function () {
    return function () {
      return setRef(innerRef, null);
    };
  }, []);
  React.useEffect(function () {
    warning$1(Boolean(setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
  }, [setReferenceNode]);
  return unwrapArray(children)({
    ref: refHandler
  });
}

/**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Object} values - an object with options
 * @param {Number} [values.year] - the number of years to be set
 * @param {Number} [values.month] - the number of months to be set
 * @param {Number} [values.date] - the number of days to be set
 * @param {Number} [values.hours] - the number of hours to be set
 * @param {Number} [values.minutes] - the number of minutes to be set
 * @param {Number} [values.seconds] - the number of seconds to be set
 * @param {Number} [values.milliseconds] - the number of milliseconds to be set
 * @returns {Date} the new date with options set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `values` must be an object
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */
function set(dirtyDate, values) {
  requiredArgs(2, arguments);
  if (_typeof(values) !== 'object' || values === null) {
    throw new RangeError('values parameter must be an object');
  }
  var date = toDate(dirtyDate);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }
  if (values.year != null) {
    date.setFullYear(values.year);
  }
  if (values.month != null) {
    date = setMonth(date, values.month);
  }
  if (values.date != null) {
    date.setDate(toInteger(values.date));
  }
  if (values.hours != null) {
    date.setHours(toInteger(values.hours));
  }
  if (values.minutes != null) {
    date.setMinutes(toInteger(values.minutes));
  }
  if (values.seconds != null) {
    date.setSeconds(toInteger(values.seconds));
  }
  if (values.milliseconds != null) {
    date.setMilliseconds(toInteger(values.milliseconds));
  }
  return date;
}

function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n);}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){ye(e,t,r[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));}));}return e}function ue(e){return ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ue(e)}function he(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function me(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_e(n.key),n);}}function fe(e,t,r){return t&&me(e.prototype,t),r&&me(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function ye(e,t,r){return (t=_e(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},ve.apply(this,arguments)}function De(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&we(e,t);}function ge(e){return ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ge(e)}function we(e,t){return we=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},we(e,t)}function ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function be(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return !1}}();return function(){var r,n=ge(e);if(t){var o=ge(this).constructor;r=Reflect.construct(n,arguments,o);}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ke(e)}(this,r)}}function Se(e){return function(e){if(Array.isArray(e))return Ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Ce(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ce(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _e(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return ("string"===t?String:Number)(e)}(e,"string");return "symbol"==typeof t?t:String(t)}var Me=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},Ee=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},Pe={p:Ee,P:function(e,t){var r,n=e.match(/(P+)(p+)?/)||[],o=n[1],a=n[2];if(!a)return Me(e,t);switch(o){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;default:r=t.dateTime({width:"full"});}return r.replace("{{date}}",Me(o,t)).replace("{{time}}",Ee(a,t))}},Ne=12,xe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;function Ye(e){var t=e?"string"==typeof e||e instanceof String?parseISO(e):toDate(e):new Date;return Te(t)?t:null}function Te(e,t){return t=t||new Date("1/1/1000"),isValid(e)&&!isBefore(e,t)}function Ie(e,t,r){if("en"===r)return format(e,t,{awareOfUnicodeTokens:!0});var n=Ge(r);return r&&!n&&console.warn('A locale object was not found for the provided string ["'.concat(r,'"].')),!n&&$e()&&Ge($e())&&(n=Ge($e())),format(e,t,{locale:n||null,awareOfUnicodeTokens:!0})}function Oe(e,t){var r=t.dateFormat,n=t.locale;return e&&Ie(e,Array.isArray(r)?r[0]:r,n)||""}function Re(e,t){var r=t.hour,n=void 0===r?0:r,o=t.minute,a=void 0===o?0:o,s=t.second;return setHours(setMinutes(setSeconds(e,void 0===s?0:s),a),n)}function Le(e,t,r){var n=Ge(t||$e());return startOfWeek(e,{locale:n,weekStartsOn:r})}function Fe(e){return startOfMonth(e)}function Ae(e){return startOfYear(e)}function Ke(e){return startOfQuarter(e)}function Be(){return startOfDay(Ye())}function Qe(e,t){return e&&t?isSameYear(e,t):!e&&!t}function He(e,t){return e&&t?isSameMonth(e,t):!e&&!t}function je(e,t){return e&&t?isSameQuarter(e,t):!e&&!t}function We(e,t){return e&&t?isSameDay(e,t):!e&&!t}function Ve(e,t){return e&&t?isEqual$1(e,t):!e&&!t}function qe(e,t,r){var n,o=startOfDay(t),a=endOfDay(r);try{n=isWithinInterval(e,{start:o,end:a});}catch(e){n=!1;}return n}function $e(){return ("undefined"!=typeof window?window:globalThis).__localeId__}function Ge(e){if("string"==typeof e){var t="undefined"!=typeof window?window:globalThis;return t.__localeData__?t.__localeData__[e]:null}return e}function Je(e,t){return Ie(setMonth(Ye(),e),"LLLL",t)}function Xe(e,t){return Ie(setMonth(Ye(),e),"LLL",t)}function Ze(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate,o=t.excludeDates,a=t.excludeDateIntervals,s=t.includeDates,i=t.includeDateIntervals,p=t.filterDate;return it(e,{minDate:r,maxDate:n})||o&&o.some((function(t){return We(e,t)}))||a&&a.some((function(t){var r=t.start,n=t.end;return isWithinInterval(e,{start:r,end:n})}))||s&&!s.some((function(t){return We(e,t)}))||i&&!i.some((function(t){var r=t.start,n=t.end;return isWithinInterval(e,{start:r,end:n})}))||p&&!p(Ye(e))||!1}function et(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.excludeDates,n=t.excludeDateIntervals;return n&&n.length>0?n.some((function(t){var r=t.start,n=t.end;return isWithinInterval(e,{start:r,end:n})})):r&&r.some((function(t){return We(e,t)}))||!1}function tt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate,o=t.excludeDates,a=t.includeDates,s=t.filterDate;return it(e,{minDate:startOfMonth(r),maxDate:endOfMonth(n)})||o&&o.some((function(t){return He(e,t)}))||a&&!a.some((function(t){return He(e,t)}))||s&&!s(Ye(e))||!1}function rt(e,t,r,n){var o=getYear(e),a=getMonth(e),s=getYear(t),i=getMonth(t),p=getYear(n);return o===s&&o===p?a<=r&&r<=i:o<s?p===o&&a<=r||p===s&&i>=r||p<s&&p>o:void 0}function nt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate,o=t.excludeDates,a=t.includeDates,s=t.filterDate;return it(e,{minDate:r,maxDate:n})||o&&o.some((function(t){return je(e,t)}))||a&&!a.some((function(t){return je(e,t)}))||s&&!s(Ye(e))||!1}function ot(e,t,r){if(!isValid(t)||!isValid(r))return !1;var n=getYear(t),a=getYear(r);return n<=e&&a>=e}function at(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate,o=t.excludeDates,a=t.includeDates,s=t.filterDate,i=new Date(e,0,1);return it(i,{minDate:startOfYear(r),maxDate:endOfYear(n)})||o&&o.some((function(e){return Qe(i,e)}))||a&&!a.some((function(e){return Qe(i,e)}))||s&&!s(Ye(i))||!1}function st(e,t,r,n){var o=getYear(e),a=getQuarter(e),s=getYear(t),i=getQuarter(t),p=getYear(n);return o===s&&o===p?a<=r&&r<=i:o<s?p===o&&a<=r||p===s&&i>=r||p<s&&p>o:void 0}function it(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate;return r&&differenceInCalendarDays(e,r)<0||n&&differenceInCalendarDays(e,n)>0}function pt(e,t){return t.some((function(t){return getHours(t)===getHours(e)&&getMinutes(t)===getMinutes(e)}))}function ct(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.excludeTimes,n=t.includeTimes,o=t.filterTime;return r&&pt(e,r)||n&&!pt(e,n)||o&&!o(e)||!1}function lt(e,t){var r=t.minTime,n=t.maxTime;if(!r||!n)throw new Error("Both minTime and maxTime props required");var o,a=Ye(),s=setHours(setMinutes(a,getMinutes(e)),getHours(e)),i=setHours(setMinutes(a,getMinutes(r)),getHours(r)),p=setHours(setMinutes(a,getMinutes(n)),getHours(n));try{o=!isWithinInterval(s,{start:i,end:p});}catch(e){o=!1;}return o}function dt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.includeDates,o=subMonths(e,1);return r&&differenceInCalendarMonths(r,o)>0||n&&n.every((function(e){return differenceInCalendarMonths(e,o)>0}))||!1}function ut(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,n=t.includeDates,o=addMonths(e,1);return r&&differenceInCalendarMonths(o,r)>0||n&&n.every((function(e){return differenceInCalendarMonths(o,e)>0}))||!1}function ht(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.includeDates,o=subYears(e,1);return r&&differenceInCalendarYears(r,o)>0||n&&n.every((function(e){return differenceInCalendarYears(e,o)>0}))||!1}function mt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,n=t.includeDates,o=addYears(e,1);return r&&differenceInCalendarYears(o,r)>0||n&&n.every((function(e){return differenceInCalendarYears(o,e)>0}))||!1}function ft(e){var t=e.minDate,r=e.includeDates;if(r&&t){var n=r.filter((function(e){return differenceInCalendarDays(e,t)>=0}));return min$1(n)}return r?min$1(r):t}function yt(e){var t=e.maxDate,r=e.includeDates;if(r&&t){var n=r.filter((function(e){return differenceInCalendarDays(e,t)<=0}));return max$1(n)}return r?max$1(r):t}function vt(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"react-datepicker__day--highlighted",r=new Map,o=0,a=e.length;o<a;o++){var s=e[o];if(isDate(s)){var i=Ie(s,"MM.dd.yyyy"),p=r.get(i)||[];p.includes(t)||(p.push(t),r.set(i,p));}else if("object"===ue(s)){var c=Object.keys(s),l=c[0],d=s[c[0]];if("string"==typeof l&&d.constructor===Array)for(var u=0,h=d.length;u<h;u++){var m=Ie(d[u],"MM.dd.yyyy"),f=r.get(m)||[];f.includes(l)||(f.push(l),r.set(m,f));}}}return r}function Dt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"react-datepicker__day--holidays",r=new Map;return e.forEach((function(e){var o=e.date,a=e.holidayName;if(isDate(o)){var s=Ie(o,"MM.dd.yyyy"),i=r.get(s)||{};if(!("className"in i)||i.className!==t||(p=i.holidayNames,c=[a],p.length!==c.length||!p.every((function(e,t){return e===c[t]})))){var p,c;i.className=t;var l=i.holidayNames;i.holidayNames=l?[].concat(Se(l),[a]):[a],r.set(s,i);}}})),r}function gt(e,t,r,n,o){for(var a=o.length,p=[],c=0;c<a;c++){var l=addMinutes(addHours(e,getHours(o[c])),getMinutes(o[c])),d=addMinutes(e,(r+1)*n);isAfter(l,t)&&isBefore(l,d)&&p.push(o[c]);}return p}function wt(e){return e<10?"0".concat(e):"".concat(e)}function kt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ne,r=Math.ceil(getYear(e)/t)*t;return {startPeriod:r-(t-1),endPeriod:r}}function bt(e){var t=e.getSeconds(),r=e.getMilliseconds();return toDate(e.getTime()-1e3*t-r)}function St(e,t,r,n){for(var o=[],a=0;a<2*t+1;a++){var s=e+t-a,i=!0;r&&(i=getYear(r)<=s),n&&i&&(i=getYear(n)>=s),i&&o.push(s);}return o}var Ct=onClickOutsideHOC(function(n){De(a,React__default.Component);var o=be(a);function a(r){var n;he(this,a),ye(ke(n=o.call(this,r)),"renderOptions",(function(){var t=n.props.year,r=n.state.yearsList.map((function(r){return React__default.createElement("div",{className:t===r?"react-datepicker__year-option react-datepicker__year-option--selected_year":"react-datepicker__year-option",key:r,onClick:n.onChange.bind(ke(n),r),"aria-selected":t===r?"true":void 0},t===r?React__default.createElement("span",{className:"react-datepicker__year-option--selected"},"✓"):"",r)})),o=n.props.minDate?getYear(n.props.minDate):null,a=n.props.maxDate?getYear(n.props.maxDate):null;return a&&n.state.yearsList.find((function(e){return e===a}))||r.unshift(React__default.createElement("div",{className:"react-datepicker__year-option",key:"upcoming",onClick:n.incrementYears},React__default.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"}))),o&&n.state.yearsList.find((function(e){return e===o}))||r.push(React__default.createElement("div",{className:"react-datepicker__year-option",key:"previous",onClick:n.decrementYears},React__default.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"}))),r})),ye(ke(n),"onChange",(function(e){n.props.onChange(e);})),ye(ke(n),"handleClickOutside",(function(){n.props.onCancel();})),ye(ke(n),"shiftYears",(function(e){var t=n.state.yearsList.map((function(t){return t+e}));n.setState({yearsList:t});})),ye(ke(n),"incrementYears",(function(){return n.shiftYears(1)})),ye(ke(n),"decrementYears",(function(){return n.shiftYears(-1)}));var s=r.yearDropdownItemNumber,i=r.scrollableYearDropdown,p=s||(i?10:5);return n.state={yearsList:St(n.props.year,p,n.props.minDate,n.props.maxDate)},n.dropdownRef=createRef(),n}return fe(a,[{key:"componentDidMount",value:function(){var e=this.dropdownRef.current;if(e){var t=e.children?Array.from(e.children):null,r=t?t.find((function(e){return e.ariaSelected})):null;e.scrollTop=r?r.offsetTop+(r.clientHeight-e.clientHeight)/2:(e.scrollHeight-e.clientHeight)/2;}}},{key:"render",value:function(){var t=r({"react-datepicker__year-dropdown":!0,"react-datepicker__year-dropdown--scrollable":this.props.scrollableYearDropdown});return React__default.createElement("div",{className:t,ref:this.dropdownRef},this.renderOptions())}}]),a}()),_t=function(t){De(n,React__default.Component);var r=be(n);function n(){var t;he(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return ye(ke(t=r.call.apply(r,[this].concat(a))),"state",{dropdownVisible:!1}),ye(ke(t),"renderSelectOptions",(function(){for(var r=t.props.minDate?getYear(t.props.minDate):1900,n=t.props.maxDate?getYear(t.props.maxDate):2100,o=[],a=r;a<=n;a++)o.push(React__default.createElement("option",{key:a,value:a},a));return o})),ye(ke(t),"onSelectChange",(function(e){t.onChange(e.target.value);})),ye(ke(t),"renderSelectMode",(function(){return React__default.createElement("select",{value:t.props.year,className:"react-datepicker__year-select",onChange:t.onSelectChange},t.renderSelectOptions())})),ye(ke(t),"renderReadView",(function(r){return React__default.createElement("div",{key:"read",style:{visibility:r?"visible":"hidden"},className:"react-datepicker__year-read-view",onClick:function(e){return t.toggleDropdown(e)}},React__default.createElement("span",{className:"react-datepicker__year-read-view--down-arrow"}),React__default.createElement("span",{className:"react-datepicker__year-read-view--selected-year"},t.props.year))})),ye(ke(t),"renderDropdown",(function(){return React__default.createElement(Ct,{key:"dropdown",year:t.props.year,onChange:t.onChange,onCancel:t.toggleDropdown,minDate:t.props.minDate,maxDate:t.props.maxDate,scrollableYearDropdown:t.props.scrollableYearDropdown,yearDropdownItemNumber:t.props.yearDropdownItemNumber})})),ye(ke(t),"renderScrollMode",(function(){var e=t.state.dropdownVisible,r=[t.renderReadView(!e)];return e&&r.unshift(t.renderDropdown()),r})),ye(ke(t),"onChange",(function(e){t.toggleDropdown(),e!==t.props.year&&t.props.onChange(e);})),ye(ke(t),"toggleDropdown",(function(e){t.setState({dropdownVisible:!t.state.dropdownVisible},(function(){t.props.adjustDateOnChange&&t.handleYearChange(t.props.date,e);}));})),ye(ke(t),"handleYearChange",(function(e,r){t.onSelect(e,r),t.setOpen();})),ye(ke(t),"onSelect",(function(e,r){t.props.onSelect&&t.props.onSelect(e,r);})),ye(ke(t),"setOpen",(function(){t.props.setOpen&&t.props.setOpen(!0);})),t}return fe(n,[{key:"render",value:function(){var t;switch(this.props.dropdownMode){case"scroll":t=this.renderScrollMode();break;case"select":t=this.renderSelectMode();}return React__default.createElement("div",{className:"react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode)},t)}}]),n}(),Mt=onClickOutsideHOC(function(t){De(n,React__default.Component);var r=be(n);function n(){var t;he(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return ye(ke(t=r.call.apply(r,[this].concat(a))),"isSelectedMonth",(function(e){return t.props.month===e})),ye(ke(t),"renderOptions",(function(){return t.props.monthNames.map((function(r,n){return React__default.createElement("div",{className:t.isSelectedMonth(n)?"react-datepicker__month-option react-datepicker__month-option--selected_month":"react-datepicker__month-option",key:r,onClick:t.onChange.bind(ke(t),n),"aria-selected":t.isSelectedMonth(n)?"true":void 0},t.isSelectedMonth(n)?React__default.createElement("span",{className:"react-datepicker__month-option--selected"},"✓"):"",r)}))})),ye(ke(t),"onChange",(function(e){return t.props.onChange(e)})),ye(ke(t),"handleClickOutside",(function(){return t.props.onCancel()})),t}return fe(n,[{key:"render",value:function(){return React__default.createElement("div",{className:"react-datepicker__month-dropdown"},this.renderOptions())}}]),n}()),Et=function(t){De(n,React__default.Component);var r=be(n);function n(){var t;he(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return ye(ke(t=r.call.apply(r,[this].concat(a))),"state",{dropdownVisible:!1}),ye(ke(t),"renderSelectOptions",(function(t){return t.map((function(t,r){return React__default.createElement("option",{key:r,value:r},t)}))})),ye(ke(t),"renderSelectMode",(function(r){return React__default.createElement("select",{value:t.props.month,className:"react-datepicker__month-select",onChange:function(e){return t.onChange(e.target.value)}},t.renderSelectOptions(r))})),ye(ke(t),"renderReadView",(function(r,n){return React__default.createElement("div",{key:"read",style:{visibility:r?"visible":"hidden"},className:"react-datepicker__month-read-view",onClick:t.toggleDropdown},React__default.createElement("span",{className:"react-datepicker__month-read-view--down-arrow"}),React__default.createElement("span",{className:"react-datepicker__month-read-view--selected-month"},n[t.props.month]))})),ye(ke(t),"renderDropdown",(function(r){return React__default.createElement(Mt,{key:"dropdown",month:t.props.month,monthNames:r,onChange:t.onChange,onCancel:t.toggleDropdown})})),ye(ke(t),"renderScrollMode",(function(e){var r=t.state.dropdownVisible,n=[t.renderReadView(!r,e)];return r&&n.unshift(t.renderDropdown(e)),n})),ye(ke(t),"onChange",(function(e){t.toggleDropdown(),e!==t.props.month&&t.props.onChange(e);})),ye(ke(t),"toggleDropdown",(function(){return t.setState({dropdownVisible:!t.state.dropdownVisible})})),t}return fe(n,[{key:"render",value:function(){var t,r=this,n=[0,1,2,3,4,5,6,7,8,9,10,11].map(this.props.useShortMonthInDropdown?function(e){return Xe(e,r.props.locale)}:function(e){return Je(e,r.props.locale)});switch(this.props.dropdownMode){case"scroll":t=this.renderScrollMode(n);break;case"select":t=this.renderSelectMode(n);}return React__default.createElement("div",{className:"react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode)},t)}}]),n}();function Pt(e,t){for(var r=[],n=Fe(e),o=Fe(t);!isAfter(n,o);)r.push(Ye(n)),n=addMonths(n,1);return r}var Nt,xt=onClickOutsideHOC(function(t){De(o,React__default.Component);var n=be(o);function o(t){var r;return he(this,o),ye(ke(r=n.call(this,t)),"renderOptions",(function(){return r.state.monthYearsList.map((function(t){var n=getTime(t),o=Qe(r.props.date,t)&&He(r.props.date,t);return React__default.createElement("div",{className:o?"react-datepicker__month-year-option--selected_month-year":"react-datepicker__month-year-option",key:n,onClick:r.onChange.bind(ke(r),n),"aria-selected":o?"true":void 0},o?React__default.createElement("span",{className:"react-datepicker__month-year-option--selected"},"✓"):"",Ie(t,r.props.dateFormat,r.props.locale))}))})),ye(ke(r),"onChange",(function(e){return r.props.onChange(e)})),ye(ke(r),"handleClickOutside",(function(){r.props.onCancel();})),r.state={monthYearsList:Pt(r.props.minDate,r.props.maxDate)},r}return fe(o,[{key:"render",value:function(){var t=r({"react-datepicker__month-year-dropdown":!0,"react-datepicker__month-year-dropdown--scrollable":this.props.scrollableMonthYearDropdown});return React__default.createElement("div",{className:t},this.renderOptions())}}]),o}()),Yt=function(t){De(n,React__default.Component);var r=be(n);function n(){var t;he(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return ye(ke(t=r.call.apply(r,[this].concat(a))),"state",{dropdownVisible:!1}),ye(ke(t),"renderSelectOptions",(function(){for(var r=Fe(t.props.minDate),n=Fe(t.props.maxDate),o=[];!isAfter(r,n);){var a=getTime(r);o.push(React__default.createElement("option",{key:a,value:a},Ie(r,t.props.dateFormat,t.props.locale))),r=addMonths(r,1);}return o})),ye(ke(t),"onSelectChange",(function(e){t.onChange(e.target.value);})),ye(ke(t),"renderSelectMode",(function(){return React__default.createElement("select",{value:getTime(Fe(t.props.date)),className:"react-datepicker__month-year-select",onChange:t.onSelectChange},t.renderSelectOptions())})),ye(ke(t),"renderReadView",(function(r){var n=Ie(t.props.date,t.props.dateFormat,t.props.locale);return React__default.createElement("div",{key:"read",style:{visibility:r?"visible":"hidden"},className:"react-datepicker__month-year-read-view",onClick:function(e){return t.toggleDropdown(e)}},React__default.createElement("span",{className:"react-datepicker__month-year-read-view--down-arrow"}),React__default.createElement("span",{className:"react-datepicker__month-year-read-view--selected-month-year"},n))})),ye(ke(t),"renderDropdown",(function(){return React__default.createElement(xt,{key:"dropdown",date:t.props.date,dateFormat:t.props.dateFormat,onChange:t.onChange,onCancel:t.toggleDropdown,minDate:t.props.minDate,maxDate:t.props.maxDate,scrollableMonthYearDropdown:t.props.scrollableMonthYearDropdown,locale:t.props.locale})})),ye(ke(t),"renderScrollMode",(function(){var e=t.state.dropdownVisible,r=[t.renderReadView(!e)];return e&&r.unshift(t.renderDropdown()),r})),ye(ke(t),"onChange",(function(e){t.toggleDropdown();var r=Ye(parseInt(e));Qe(t.props.date,r)&&He(t.props.date,r)||t.props.onChange(r);})),ye(ke(t),"toggleDropdown",(function(){return t.setState({dropdownVisible:!t.state.dropdownVisible})})),t}return fe(n,[{key:"render",value:function(){var t;switch(this.props.dropdownMode){case"scroll":t=this.renderScrollMode();break;case"select":t=this.renderSelectMode();}return React__default.createElement("div",{className:"react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode)},t)}}]),n}(),Tt=function(t){De(o,React__default.Component);var n=be(o);function o(){var t;he(this,o);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return ye(ke(t=n.call.apply(n,[this].concat(s))),"dayEl",React__default.createRef()),ye(ke(t),"handleClick",(function(e){!t.isDisabled()&&t.props.onClick&&t.props.onClick(e);})),ye(ke(t),"handleMouseEnter",(function(e){!t.isDisabled()&&t.props.onMouseEnter&&t.props.onMouseEnter(e);})),ye(ke(t),"handleOnKeyDown",(function(e){" "===e.key&&(e.preventDefault(),e.key="Enter"),t.props.handleOnKeyDown(e);})),ye(ke(t),"isSameDay",(function(e){return We(t.props.day,e)})),ye(ke(t),"isKeyboardSelected",(function(){return !t.props.disabledKeyboardNavigation&&!t.isSameDay(t.props.selected)&&t.isSameDay(t.props.preSelection)})),ye(ke(t),"isDisabled",(function(){return Ze(t.props.day,t.props)})),ye(ke(t),"isExcluded",(function(){return et(t.props.day,t.props)})),ye(ke(t),"getHighLightedClass",(function(){var e=t.props,r=e.day,n=e.highlightDates;if(!n)return !1;var o=Ie(r,"MM.dd.yyyy");return n.get(o)})),ye(ke(t),"getHolidaysClass",(function(){var e=t.props,r=e.day,n=e.holidays;if(!n)return !1;var o=Ie(r,"MM.dd.yyyy");return n.has(o)?[n.get(o).className]:void 0})),ye(ke(t),"isInRange",(function(){var e=t.props,r=e.day,n=e.startDate,o=e.endDate;return !(!n||!o)&&qe(r,n,o)})),ye(ke(t),"isInSelectingRange",(function(){var e,r=t.props,n=r.day,o=r.selectsStart,a=r.selectsEnd,s=r.selectsRange,i=r.selectsDisabledDaysInRange,p=r.startDate,c=r.endDate,l=null!==(e=t.props.selectingDate)&&void 0!==e?e:t.props.preSelection;return !(!(o||a||s)||!l||!i&&t.isDisabled())&&(o&&c&&(isBefore(l,c)||Ve(l,c))?qe(n,l,c):(a&&p&&(isAfter(l,p)||Ve(l,p))||!(!s||!p||c||!isAfter(l,p)&&!Ve(l,p)))&&qe(n,p,l))})),ye(ke(t),"isSelectingRangeStart",(function(){var e;if(!t.isInSelectingRange())return !1;var r=t.props,n=r.day,o=r.startDate,a=r.selectsStart,s=null!==(e=t.props.selectingDate)&&void 0!==e?e:t.props.preSelection;return We(n,a?s:o)})),ye(ke(t),"isSelectingRangeEnd",(function(){var e;if(!t.isInSelectingRange())return !1;var r=t.props,n=r.day,o=r.endDate,a=r.selectsEnd,s=r.selectsRange,i=null!==(e=t.props.selectingDate)&&void 0!==e?e:t.props.preSelection;return We(n,a||s?i:o)})),ye(ke(t),"isRangeStart",(function(){var e=t.props,r=e.day,n=e.startDate,o=e.endDate;return !(!n||!o)&&We(n,r)})),ye(ke(t),"isRangeEnd",(function(){var e=t.props,r=e.day,n=e.startDate,o=e.endDate;return !(!n||!o)&&We(o,r)})),ye(ke(t),"isWeekend",(function(){var e=getDay(t.props.day);return 0===e||6===e})),ye(ke(t),"isAfterMonth",(function(){return void 0!==t.props.month&&(t.props.month+1)%12===getMonth(t.props.day)})),ye(ke(t),"isBeforeMonth",(function(){return void 0!==t.props.month&&(getMonth(t.props.day)+1)%12===t.props.month})),ye(ke(t),"isCurrentDay",(function(){return t.isSameDay(Ye())})),ye(ke(t),"isSelected",(function(){return t.isSameDay(t.props.selected)})),ye(ke(t),"getClassNames",(function(e){var n,o=t.props.dayClassName?t.props.dayClassName(e):void 0;return r("react-datepicker__day",o,"react-datepicker__day--"+Ie(t.props.day,"ddd",n),{"react-datepicker__day--disabled":t.isDisabled(),"react-datepicker__day--excluded":t.isExcluded(),"react-datepicker__day--selected":t.isSelected(),"react-datepicker__day--keyboard-selected":t.isKeyboardSelected(),"react-datepicker__day--range-start":t.isRangeStart(),"react-datepicker__day--range-end":t.isRangeEnd(),"react-datepicker__day--in-range":t.isInRange(),"react-datepicker__day--in-selecting-range":t.isInSelectingRange(),"react-datepicker__day--selecting-range-start":t.isSelectingRangeStart(),"react-datepicker__day--selecting-range-end":t.isSelectingRangeEnd(),"react-datepicker__day--today":t.isCurrentDay(),"react-datepicker__day--weekend":t.isWeekend(),"react-datepicker__day--outside-month":t.isAfterMonth()||t.isBeforeMonth()},t.getHighLightedClass("react-datepicker__day--highlighted"),t.getHolidaysClass())})),ye(ke(t),"getAriaLabel",(function(){var e=t.props,r=e.day,n=e.ariaLabelPrefixWhenEnabled,o=void 0===n?"Choose":n,a=e.ariaLabelPrefixWhenDisabled,s=void 0===a?"Not available":a,i=t.isDisabled()||t.isExcluded()?s:o;return "".concat(i," ").concat(Ie(r,"PPPP",t.props.locale))})),ye(ke(t),"getTitle",(function(){var e=t.props,r=e.day,n=e.holidays,o=void 0===n?new Map:n,a=Ie(r,"MM.dd.yyyy");return o.has(a)&&o.get(a).holidayNames.length>0?o.get(a).holidayNames.join(", "):""})),ye(ke(t),"getTabIndex",(function(e,r){var n=e||t.props.selected,o=r||t.props.preSelection;return t.isKeyboardSelected()||t.isSameDay(n)&&We(o,n)?0:-1})),ye(ke(t),"handleFocusDay",(function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=!1;0===t.getTabIndex()&&!r.isInputFocused&&t.isSameDay(t.props.preSelection)&&(document.activeElement&&document.activeElement!==document.body||(n=!0),t.props.inline&&!t.props.shouldFocusDayInline&&(n=!1),t.props.containerRef&&t.props.containerRef.current&&t.props.containerRef.current.contains(document.activeElement)&&document.activeElement.classList.contains("react-datepicker__day")&&(n=!0),t.props.monthShowsDuplicateDaysEnd&&t.isAfterMonth()&&(n=!1),t.props.monthShowsDuplicateDaysStart&&t.isBeforeMonth()&&(n=!1)),n&&(null===(e=t.dayEl.current)||void 0===e||e.focus({preventScroll:!0}));})),ye(ke(t),"renderDayContents",(function(){return t.props.monthShowsDuplicateDaysEnd&&t.isAfterMonth()||t.props.monthShowsDuplicateDaysStart&&t.isBeforeMonth()?null:t.props.renderDayContents?t.props.renderDayContents(getDate(t.props.day),t.props.day):getDate(t.props.day)})),ye(ke(t),"render",(function(){return React__default.createElement("div",{ref:t.dayEl,className:t.getClassNames(t.props.day),onKeyDown:t.handleOnKeyDown,onClick:t.handleClick,onMouseEnter:t.handleMouseEnter,tabIndex:t.getTabIndex(),"aria-label":t.getAriaLabel(),role:"option",title:t.getTitle(),"aria-disabled":t.isDisabled(),"aria-current":t.isCurrentDay()?"date":void 0,"aria-selected":t.isSelected()||t.isInRange()},t.renderDayContents(),""!==t.getTitle()&&React__default.createElement("span",{className:"holiday-overlay"},t.getTitle()))})),t}return fe(o,[{key:"componentDidMount",value:function(){this.handleFocusDay();}},{key:"componentDidUpdate",value:function(e){this.handleFocusDay(e);}}]),o}(),It=function(t){De(o,React__default.Component);var n=be(o);function o(){var e;he(this,o);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return ye(ke(e=n.call.apply(n,[this].concat(r))),"handleClick",(function(t){e.props.onClick&&e.props.onClick(t);})),e}return fe(o,[{key:"render",value:function(){var t=this.props,n=t.weekNumber,o=t.ariaLabelPrefix,a=void 0===o?"week ":o,s={"react-datepicker__week-number":!0,"react-datepicker__week-number--clickable":!!t.onClick};return React__default.createElement("div",{className:r(s),"aria-label":"".concat(a," ").concat(this.props.weekNumber),onClick:this.handleClick},n)}}],[{key:"defaultProps",get:function(){return {ariaLabelPrefix:"week "}}}]),o}(),Ot=function(t){De(n,React__default.Component);var r=be(n);function n(){var t;he(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return ye(ke(t=r.call.apply(r,[this].concat(a))),"handleDayClick",(function(e,r){t.props.onDayClick&&t.props.onDayClick(e,r);})),ye(ke(t),"handleDayMouseEnter",(function(e){t.props.onDayMouseEnter&&t.props.onDayMouseEnter(e);})),ye(ke(t),"handleWeekClick",(function(e,r,n){"function"==typeof t.props.onWeekSelect&&t.props.onWeekSelect(e,r,n),t.props.shouldCloseOnSelect&&t.props.setOpen(!1);})),ye(ke(t),"formatWeekNumber",(function(e){return t.props.formatWeekNumber?t.props.formatWeekNumber(e):function(e,t){var r=t&&Ge(t)||$e()&&Ge($e());return getISOWeek(e,r?{locale:r}:null)}(e)})),ye(ke(t),"renderDays",(function(){var r=Le(t.props.day,t.props.locale,t.props.calendarStartDay),n=[],o=t.formatWeekNumber(r);if(t.props.showWeekNumber){var a=t.props.onWeekSelect?t.handleWeekClick.bind(ke(t),r,o):void 0;n.push(React__default.createElement(It,{key:"W",weekNumber:o,onClick:a,ariaLabelPrefix:t.props.ariaLabelPrefix}));}return n.concat([0,1,2,3,4,5,6].map((function(n){var o=addDays(r,n);return React__default.createElement(Tt,{ariaLabelPrefixWhenEnabled:t.props.chooseDayAriaLabelPrefix,ariaLabelPrefixWhenDisabled:t.props.disabledDayAriaLabelPrefix,key:o.valueOf(),day:o,month:t.props.month,onClick:t.handleDayClick.bind(ke(t),o),onMouseEnter:t.handleDayMouseEnter.bind(ke(t),o),minDate:t.props.minDate,maxDate:t.props.maxDate,excludeDates:t.props.excludeDates,excludeDateIntervals:t.props.excludeDateIntervals,includeDates:t.props.includeDates,includeDateIntervals:t.props.includeDateIntervals,highlightDates:t.props.highlightDates,holidays:t.props.holidays,selectingDate:t.props.selectingDate,filterDate:t.props.filterDate,preSelection:t.props.preSelection,selected:t.props.selected,selectsStart:t.props.selectsStart,selectsEnd:t.props.selectsEnd,selectsRange:t.props.selectsRange,selectsDisabledDaysInRange:t.props.selectsDisabledDaysInRange,startDate:t.props.startDate,endDate:t.props.endDate,dayClassName:t.props.dayClassName,renderDayContents:t.props.renderDayContents,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef,inline:t.props.inline,shouldFocusDayInline:t.props.shouldFocusDayInline,monthShowsDuplicateDaysEnd:t.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:t.props.monthShowsDuplicateDaysStart,locale:t.props.locale})})))})),t}return fe(n,[{key:"render",value:function(){return React__default.createElement("div",{className:"react-datepicker__week"},this.renderDays())}}],[{key:"defaultProps",get:function(){return {shouldCloseOnSelect:!0}}}]),n}(),Rt="two_columns",Lt="three_columns",Ft="four_columns",At=(ye(Nt={},Rt,{grid:[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]],verticalNavigationOffset:2}),ye(Nt,Lt,{grid:[[0,1,2],[3,4,5],[6,7,8],[9,10,11]],verticalNavigationOffset:3}),ye(Nt,Ft,{grid:[[0,1,2,3],[4,5,6,7],[8,9,10,11]],verticalNavigationOffset:4}),Nt);function Kt(e,t){return e?Ft:t?Rt:Lt}var Bt=function(t){De(o,React__default.Component);var n=be(o);function o(){var t;he(this,o);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return ye(ke(t=n.call.apply(n,[this].concat(s))),"MONTH_REFS",Se(Array(12)).map((function(){return React__default.createRef()}))),ye(ke(t),"QUARTER_REFS",Se(Array(4)).map((function(){return React__default.createRef()}))),ye(ke(t),"isDisabled",(function(e){return Ze(e,t.props)})),ye(ke(t),"isExcluded",(function(e){return et(e,t.props)})),ye(ke(t),"handleDayClick",(function(e,r){t.props.onDayClick&&t.props.onDayClick(e,r,t.props.orderInDisplay);})),ye(ke(t),"handleDayMouseEnter",(function(e){t.props.onDayMouseEnter&&t.props.onDayMouseEnter(e);})),ye(ke(t),"handleMouseLeave",(function(){t.props.onMouseLeave&&t.props.onMouseLeave();})),ye(ke(t),"isRangeStartMonth",(function(e){var r=t.props,n=r.day,o=r.startDate,a=r.endDate;return !(!o||!a)&&He(setMonth(n,e),o)})),ye(ke(t),"isRangeStartQuarter",(function(e){var r=t.props,n=r.day,o=r.startDate,a=r.endDate;return !(!o||!a)&&je(setQuarter(n,e),o)})),ye(ke(t),"isRangeEndMonth",(function(e){var r=t.props,n=r.day,o=r.startDate,a=r.endDate;return !(!o||!a)&&He(setMonth(n,e),a)})),ye(ke(t),"isRangeEndQuarter",(function(e){var r=t.props,n=r.day,o=r.startDate,a=r.endDate;return !(!o||!a)&&je(setQuarter(n,e),a)})),ye(ke(t),"isInSelectingRangeMonth",(function(e){var r,n=t.props,o=n.day,a=n.selectsStart,s=n.selectsEnd,i=n.selectsRange,p=n.startDate,c=n.endDate,l=null!==(r=t.props.selectingDate)&&void 0!==r?r:t.props.preSelection;return !(!(a||s||i)||!l)&&(a&&c?rt(l,c,e,o):(s&&p||!(!i||!p||c))&&rt(p,l,e,o))})),ye(ke(t),"isSelectingMonthRangeStart",(function(e){var r;if(!t.isInSelectingRangeMonth(e))return !1;var n=t.props,o=n.day,a=n.startDate,s=n.selectsStart,i=setMonth(o,e),p=null!==(r=t.props.selectingDate)&&void 0!==r?r:t.props.preSelection;return He(i,s?p:a)})),ye(ke(t),"isSelectingMonthRangeEnd",(function(e){var r;if(!t.isInSelectingRangeMonth(e))return !1;var n=t.props,o=n.day,a=n.endDate,s=n.selectsEnd,i=n.selectsRange,p=setMonth(o,e),c=null!==(r=t.props.selectingDate)&&void 0!==r?r:t.props.preSelection;return He(p,s||i?c:a)})),ye(ke(t),"isInSelectingRangeQuarter",(function(e){var r,n=t.props,o=n.day,a=n.selectsStart,s=n.selectsEnd,i=n.selectsRange,p=n.startDate,c=n.endDate,l=null!==(r=t.props.selectingDate)&&void 0!==r?r:t.props.preSelection;return !(!(a||s||i)||!l)&&(a&&c?st(l,c,e,o):(s&&p||!(!i||!p||c))&&st(p,l,e,o))})),ye(ke(t),"isWeekInMonth",(function(e){var r=t.props.day,n=addDays(e,6);return He(e,r)||He(n,r)})),ye(ke(t),"isCurrentMonth",(function(e,t){return getYear(e)===getYear(Ye())&&t===getMonth(Ye())})),ye(ke(t),"isCurrentQuarter",(function(e,t){return getYear(e)===getYear(Ye())&&t===getQuarter(Ye())})),ye(ke(t),"isSelectedMonth",(function(e,t,r){return getMonth(r)===t&&getYear(e)===getYear(r)})),ye(ke(t),"isSelectedQuarter",(function(e,t,r){return getQuarter(e)===t&&getYear(e)===getYear(r)})),ye(ke(t),"renderWeeks",(function(){for(var r=[],n=t.props.fixedHeight,o=0,a=!1,s=Le(Fe(t.props.day),t.props.locale,t.props.calendarStartDay);r.push(React__default.createElement(Ot,{ariaLabelPrefix:t.props.weekAriaLabelPrefix,chooseDayAriaLabelPrefix:t.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:t.props.disabledDayAriaLabelPrefix,key:o,day:s,month:getMonth(t.props.day),onDayClick:t.handleDayClick,onDayMouseEnter:t.handleDayMouseEnter,onWeekSelect:t.props.onWeekSelect,formatWeekNumber:t.props.formatWeekNumber,locale:t.props.locale,minDate:t.props.minDate,maxDate:t.props.maxDate,excludeDates:t.props.excludeDates,excludeDateIntervals:t.props.excludeDateIntervals,includeDates:t.props.includeDates,includeDateIntervals:t.props.includeDateIntervals,inline:t.props.inline,shouldFocusDayInline:t.props.shouldFocusDayInline,highlightDates:t.props.highlightDates,holidays:t.props.holidays,selectingDate:t.props.selectingDate,filterDate:t.props.filterDate,preSelection:t.props.preSelection,selected:t.props.selected,selectsStart:t.props.selectsStart,selectsEnd:t.props.selectsEnd,selectsRange:t.props.selectsRange,selectsDisabledDaysInRange:t.props.selectsDisabledDaysInRange,showWeekNumber:t.props.showWeekNumbers,startDate:t.props.startDate,endDate:t.props.endDate,dayClassName:t.props.dayClassName,setOpen:t.props.setOpen,shouldCloseOnSelect:t.props.shouldCloseOnSelect,disabledKeyboardNavigation:t.props.disabledKeyboardNavigation,renderDayContents:t.props.renderDayContents,handleOnKeyDown:t.props.handleOnKeyDown,isInputFocused:t.props.isInputFocused,containerRef:t.props.containerRef,calendarStartDay:t.props.calendarStartDay,monthShowsDuplicateDaysEnd:t.props.monthShowsDuplicateDaysEnd,monthShowsDuplicateDaysStart:t.props.monthShowsDuplicateDaysStart})),!a;){o++,s=addWeeks(s,1);var i=n&&o>=6,p=!n&&!t.isWeekInMonth(s);if(i||p){if(!t.props.peekNextMonth)break;a=!0;}}return r})),ye(ke(t),"onMonthClick",(function(e,r){t.handleDayClick(Fe(setMonth(t.props.day,r)),e);})),ye(ke(t),"onMonthMouseEnter",(function(e){t.handleDayMouseEnter(Fe(setMonth(t.props.day,e)));})),ye(ke(t),"handleMonthNavigation",(function(e,r){t.isDisabled(r)||t.isExcluded(r)||(t.props.setPreSelection(r),t.MONTH_REFS[e].current&&t.MONTH_REFS[e].current.focus());})),ye(ke(t),"onMonthKeyDown",(function(e,r){var n=t.props,o=n.selected,a=n.preSelection,s=n.disabledKeyboardNavigation,i=n.showTwoColumnMonthYearPicker,p=n.showFourColumnMonthYearPicker,c=n.setPreSelection,d=e.key;if("Tab"!==d&&e.preventDefault(),!s){var u=Kt(p,i),h=At[u].verticalNavigationOffset,m=At[u].grid;switch(d){case"Enter":t.onMonthClick(e,r),c(o);break;case"ArrowRight":t.handleMonthNavigation(11===r?0:r+1,addMonths(a,1));break;case"ArrowLeft":t.handleMonthNavigation(0===r?11:r-1,subMonths(a,1));break;case"ArrowUp":t.handleMonthNavigation(m[0].includes(r)?r+12-h:r-h,subMonths(a,h));break;case"ArrowDown":t.handleMonthNavigation(m[m.length-1].includes(r)?r-12+h:r+h,addMonths(a,h));}}})),ye(ke(t),"onQuarterClick",(function(e,r){t.handleDayClick(Ke(setQuarter(t.props.day,r)),e);})),ye(ke(t),"onQuarterMouseEnter",(function(e){t.handleDayMouseEnter(Ke(setQuarter(t.props.day,e)));})),ye(ke(t),"handleQuarterNavigation",(function(e,r){t.isDisabled(r)||t.isExcluded(r)||(t.props.setPreSelection(r),t.QUARTER_REFS[e-1].current&&t.QUARTER_REFS[e-1].current.focus());})),ye(ke(t),"onQuarterKeyDown",(function(e,r){var n=e.key;if(!t.props.disabledKeyboardNavigation)switch(n){case"Enter":t.onQuarterClick(e,r),t.props.setPreSelection(t.props.selected);break;case"ArrowRight":t.handleQuarterNavigation(4===r?1:r+1,addQuarters(t.props.preSelection,1));break;case"ArrowLeft":t.handleQuarterNavigation(1===r?4:r-1,subQuarters(t.props.preSelection,1));}})),ye(ke(t),"getMonthClassNames",(function(e){var n=t.props,o=n.day,a=n.startDate,s=n.endDate,i=n.selected,p=n.minDate,c=n.maxDate,l=n.preSelection,d=n.monthClassName,u=n.excludeDates,h=n.includeDates,m=d?d(setMonth(o,e)):void 0,f=setMonth(o,e);return r("react-datepicker__month-text","react-datepicker__month-".concat(e),m,{"react-datepicker__month-text--disabled":(p||c||u||h)&&tt(f,t.props),"react-datepicker__month-text--selected":t.isSelectedMonth(o,e,i),"react-datepicker__month-text--keyboard-selected":!t.props.disabledKeyboardNavigation&&getMonth(l)===e,"react-datepicker__month-text--in-selecting-range":t.isInSelectingRangeMonth(e),"react-datepicker__month-text--in-range":rt(a,s,e,o),"react-datepicker__month-text--range-start":t.isRangeStartMonth(e),"react-datepicker__month-text--range-end":t.isRangeEndMonth(e),"react-datepicker__month-text--selecting-range-start":t.isSelectingMonthRangeStart(e),"react-datepicker__month-text--selecting-range-end":t.isSelectingMonthRangeEnd(e),"react-datepicker__month-text--today":t.isCurrentMonth(o,e)})})),ye(ke(t),"getTabIndex",(function(e){var r=getMonth(t.props.preSelection);return t.props.disabledKeyboardNavigation||e!==r?"-1":"0"})),ye(ke(t),"getQuarterTabIndex",(function(e){var r=getQuarter(t.props.preSelection);return t.props.disabledKeyboardNavigation||e!==r?"-1":"0"})),ye(ke(t),"getAriaLabel",(function(e){var r=t.props,n=r.chooseDayAriaLabelPrefix,o=void 0===n?"Choose":n,a=r.disabledDayAriaLabelPrefix,s=void 0===a?"Not available":a,i=r.day,p=setMonth(i,e),c=t.isDisabled(p)||t.isExcluded(p)?s:o;return "".concat(c," ").concat(Ie(p,"MMMM yyyy"))})),ye(ke(t),"getQuarterClassNames",(function(e){var n=t.props,o=n.day,a=n.startDate,s=n.endDate,i=n.selected,p=n.minDate,c=n.maxDate,l=n.preSelection;return r("react-datepicker__quarter-text","react-datepicker__quarter-".concat(e),{"react-datepicker__quarter-text--disabled":(p||c)&&nt(setQuarter(o,e),t.props),"react-datepicker__quarter-text--selected":t.isSelectedQuarter(o,e,i),"react-datepicker__quarter-text--keyboard-selected":getQuarter(l)===e,"react-datepicker__quarter-text--in-selecting-range":t.isInSelectingRangeQuarter(e),"react-datepicker__quarter-text--in-range":st(a,s,e,o),"react-datepicker__quarter-text--range-start":t.isRangeStartQuarter(e),"react-datepicker__quarter-text--range-end":t.isRangeEndQuarter(e)})})),ye(ke(t),"getMonthContent",(function(e){var r=t.props,n=r.showFullMonthYearPicker,o=r.renderMonthContent,a=r.locale,s=Xe(e,a),i=Je(e,a);return o?o(e,s,i):n?i:s})),ye(ke(t),"getQuarterContent",(function(e){var r=t.props,n=r.renderQuarterContent,o=function(e,t){return Ie(setQuarter(Ye(),e),"QQQ",t)}(e,r.locale);return n?n(e,o):o})),ye(ke(t),"renderMonths",(function(){var r=t.props,n=r.showTwoColumnMonthYearPicker,o=r.showFourColumnMonthYearPicker,a=r.day,s=r.selected;return At[Kt(o,n)].grid.map((function(r,n){return React__default.createElement("div",{className:"react-datepicker__month-wrapper",key:n},r.map((function(r,n){return React__default.createElement("div",{ref:t.MONTH_REFS[r],key:n,onClick:function(e){t.onMonthClick(e,r);},onKeyDown:function(e){t.onMonthKeyDown(e,r);},onMouseEnter:function(){return t.onMonthMouseEnter(r)},tabIndex:t.getTabIndex(r),className:t.getMonthClassNames(r),role:"option","aria-label":t.getAriaLabel(r),"aria-current":t.isCurrentMonth(a,r)?"date":void 0,"aria-selected":t.isSelectedMonth(a,r,s)},t.getMonthContent(r))})))}))})),ye(ke(t),"renderQuarters",(function(){var r=t.props,n=r.day,o=r.selected;return React__default.createElement("div",{className:"react-datepicker__quarter-wrapper"},[1,2,3,4].map((function(r,a){return React__default.createElement("div",{key:a,ref:t.QUARTER_REFS[a],role:"option",onClick:function(e){t.onQuarterClick(e,r);},onKeyDown:function(e){t.onQuarterKeyDown(e,r);},onMouseEnter:function(){return t.onQuarterMouseEnter(r)},className:t.getQuarterClassNames(r),"aria-selected":t.isSelectedQuarter(n,r,o),tabIndex:t.getQuarterTabIndex(r),"aria-current":t.isCurrentQuarter(n,r)?"date":void 0},t.getQuarterContent(r))})))})),ye(ke(t),"getClassNames",(function(){var e=t.props,n=e.selectingDate,o=e.selectsStart,a=e.selectsEnd,s=e.showMonthYearPicker,i=e.showQuarterYearPicker;return r("react-datepicker__month",{"react-datepicker__month--selecting-range":n&&(o||a)},{"react-datepicker__monthPicker":s},{"react-datepicker__quarterPicker":i})})),t}return fe(o,[{key:"render",value:function(){var t=this.props,r=t.showMonthYearPicker,n=t.showQuarterYearPicker,o=t.day,a=t.ariaLabelPrefix,s=void 0===a?"month ":a;return React__default.createElement("div",{className:this.getClassNames(),onMouseLeave:this.handleMouseLeave,"aria-label":"".concat(s," ").concat(Ie(o,"yyyy-MM")),role:"listbox"},r?this.renderMonths():n?this.renderQuarters():this.renderWeeks())}}]),o}(),Qt=function(t){De(n,React__default.Component);var r=be(n);function n(){var t;he(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return ye(ke(t=r.call.apply(r,[this].concat(a))),"state",{height:null}),ye(ke(t),"handleClick",(function(e){(t.props.minTime||t.props.maxTime)&&lt(e,t.props)||(t.props.excludeTimes||t.props.includeTimes||t.props.filterTime)&&ct(e,t.props)||t.props.onChange(e);})),ye(ke(t),"isSelectedTime",(function(e){return t.props.selected&&(r=t.props.selected,n=e,bt(r).getTime()===bt(n).getTime());var r,n;})),ye(ke(t),"liClasses",(function(e){var r=["react-datepicker__time-list-item",t.props.timeClassName?t.props.timeClassName(e):void 0];return t.isSelectedTime(e)&&r.push("react-datepicker__time-list-item--selected"),((t.props.minTime||t.props.maxTime)&&lt(e,t.props)||(t.props.excludeTimes||t.props.includeTimes||t.props.filterTime)&&ct(e,t.props))&&r.push("react-datepicker__time-list-item--disabled"),t.props.injectTimes&&(60*getHours(e)+getMinutes(e))%t.props.intervals!=0&&r.push("react-datepicker__time-list-item--injected"),r.join(" ")})),ye(ke(t),"handleOnKeyDown",(function(e,r){" "===e.key&&(e.preventDefault(),e.key="Enter"),"ArrowUp"!==e.key&&"ArrowLeft"!==e.key||!e.target.previousSibling||(e.preventDefault(),e.target.previousSibling.focus()),"ArrowDown"!==e.key&&"ArrowRight"!==e.key||!e.target.nextSibling||(e.preventDefault(),e.target.nextSibling.focus()),"Enter"===e.key&&t.handleClick(r),t.props.handleOnKeyDown(e);})),ye(ke(t),"renderTimes",(function(){for(var r=[],n=t.props.format?t.props.format:"p",o=t.props.intervals,a=t.props.selected||t.props.openToDate||Ye(),i=startOfDay(a),p=t.props.injectTimes&&t.props.injectTimes.sort((function(e,t){return e-t})),c=60*function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=new Date(e.getFullYear(),e.getMonth(),e.getDate(),24);return Math.round((+r-+t)/36e5)}(a),l=c/o,d=0;d<l;d++){var u=addMinutes(i,d*o);if(r.push(u),p){var h=gt(i,u,d,o,p);r=r.concat(h);}}var m=r.reduce((function(e,t){return t.getTime()<=a.getTime()?t:e}),r[0]);return r.map((function(r,o){return React__default.createElement("li",{key:o,onClick:t.handleClick.bind(ke(t),r),className:t.liClasses(r),ref:function(e){r===m&&(t.centerLi=e);},onKeyDown:function(e){t.handleOnKeyDown(e,r);},tabIndex:r===m?0:-1,role:"option","aria-selected":t.isSelectedTime(r)?"true":void 0},Ie(r,n,t.props.locale))}))})),t}return fe(n,[{key:"componentDidMount",value:function(){this.list.scrollTop=this.centerLi&&n.calcCenterPosition(this.props.monthRef?this.props.monthRef.clientHeight-this.header.clientHeight:this.list.clientHeight,this.centerLi),this.props.monthRef&&this.header&&this.setState({height:this.props.monthRef.clientHeight-this.header.clientHeight});}},{key:"render",value:function(){var t=this,r=this.state.height;return React__default.createElement("div",{className:"react-datepicker__time-container ".concat(this.props.todayButton?"react-datepicker__time-container--with-today-button":"")},React__default.createElement("div",{className:"react-datepicker__header react-datepicker__header--time ".concat(this.props.showTimeSelectOnly?"react-datepicker__header--time--only":""),ref:function(e){t.header=e;}},React__default.createElement("div",{className:"react-datepicker-time__header"},this.props.timeCaption)),React__default.createElement("div",{className:"react-datepicker__time"},React__default.createElement("div",{className:"react-datepicker__time-box"},React__default.createElement("ul",{className:"react-datepicker__time-list",ref:function(e){t.list=e;},style:r?{height:r}:{},role:"listbox","aria-label":this.props.timeCaption},this.renderTimes()))))}}],[{key:"defaultProps",get:function(){return {intervals:30,onTimeChange:function(){},todayButton:null,timeCaption:"Time"}}}]),n}();ye(Qt,"calcCenterPosition",(function(e,t){return t.offsetTop-(e/2-t.clientHeight/2)}));var Ht=function(t){De(o,React__default.Component);var n=be(o);function o(t){var a;return he(this,o),ye(ke(a=n.call(this,t)),"YEAR_REFS",Se(Array(a.props.yearItemNumber)).map((function(){return React__default.createRef()}))),ye(ke(a),"isDisabled",(function(e){return Ze(e,a.props)})),ye(ke(a),"isExcluded",(function(e){return et(e,a.props)})),ye(ke(a),"selectingDate",(function(){var e;return null!==(e=a.props.selectingDate)&&void 0!==e?e:a.props.preSelection})),ye(ke(a),"updateFocusOnPaginate",(function(e){var t=function(){this.YEAR_REFS[e].current.focus();}.bind(ke(a));window.requestAnimationFrame(t);})),ye(ke(a),"handleYearClick",(function(e,t){a.props.onDayClick&&a.props.onDayClick(e,t);})),ye(ke(a),"handleYearNavigation",(function(e,t){var r=a.props,n=r.date,o=r.yearItemNumber,s=kt(n,o).startPeriod;a.isDisabled(t)||a.isExcluded(t)||(a.props.setPreSelection(t),e-s==-1?a.updateFocusOnPaginate(o-1):e-s===o?a.updateFocusOnPaginate(0):a.YEAR_REFS[e-s].current.focus());})),ye(ke(a),"isSameDay",(function(e,t){return We(e,t)})),ye(ke(a),"isCurrentYear",(function(e){return e===getYear(Ye())})),ye(ke(a),"isRangeStart",(function(e){return a.props.startDate&&a.props.endDate&&Qe(setYear(Ye(),e),a.props.startDate)})),ye(ke(a),"isRangeEnd",(function(e){return a.props.startDate&&a.props.endDate&&Qe(setYear(Ye(),e),a.props.endDate)})),ye(ke(a),"isInRange",(function(e){return ot(e,a.props.startDate,a.props.endDate)})),ye(ke(a),"isInSelectingRange",(function(e){var t=a.props,r=t.selectsStart,n=t.selectsEnd,o=t.selectsRange,s=t.startDate,i=t.endDate;return !(!(r||n||o)||!a.selectingDate())&&(r&&i?ot(e,a.selectingDate(),i):(n&&s||!(!o||!s||i))&&ot(e,s,a.selectingDate()))})),ye(ke(a),"isSelectingRangeStart",(function(e){if(!a.isInSelectingRange(e))return !1;var t=a.props,r=t.startDate,n=t.selectsStart,o=setYear(Ye(),e);return Qe(o,n?a.selectingDate():r)})),ye(ke(a),"isSelectingRangeEnd",(function(e){if(!a.isInSelectingRange(e))return !1;var t=a.props,r=t.endDate,n=t.selectsEnd,o=t.selectsRange,s=setYear(Ye(),e);return Qe(s,n||o?a.selectingDate():r)})),ye(ke(a),"isKeyboardSelected",(function(e){var t=Ae(setYear(a.props.date,e));return !a.props.disabledKeyboardNavigation&&!a.props.inline&&!We(t,Ae(a.props.selected))&&We(t,Ae(a.props.preSelection))})),ye(ke(a),"onYearClick",(function(e,t){var r=a.props.date;a.handleYearClick(Ae(setYear(r,t)),e);})),ye(ke(a),"onYearKeyDown",(function(e,t){var r=e.key;if(!a.props.disabledKeyboardNavigation)switch(r){case"Enter":a.onYearClick(e,t),a.props.setPreSelection(a.props.selected);break;case"ArrowRight":a.handleYearNavigation(t+1,addYears(a.props.preSelection,1));break;case"ArrowLeft":a.handleYearNavigation(t-1,subYears(a.props.preSelection,1));}})),ye(ke(a),"getYearClassNames",(function(e){var t=a.props,n=t.minDate,o=t.maxDate,s=t.selected,i=t.excludeDates,p=t.includeDates,c=t.filterDate;return r("react-datepicker__year-text",{"react-datepicker__year-text--selected":e===getYear(s),"react-datepicker__year-text--disabled":(n||o||i||p||c)&&at(e,a.props),"react-datepicker__year-text--keyboard-selected":a.isKeyboardSelected(e),"react-datepicker__year-text--range-start":a.isRangeStart(e),"react-datepicker__year-text--range-end":a.isRangeEnd(e),"react-datepicker__year-text--in-range":a.isInRange(e),"react-datepicker__year-text--in-selecting-range":a.isInSelectingRange(e),"react-datepicker__year-text--selecting-range-start":a.isSelectingRangeStart(e),"react-datepicker__year-text--selecting-range-end":a.isSelectingRangeEnd(e),"react-datepicker__year-text--today":a.isCurrentYear(e)})})),ye(ke(a),"getYearTabIndex",(function(e){return a.props.disabledKeyboardNavigation?"-1":e===getYear(a.props.preSelection)?"0":"-1"})),ye(ke(a),"getYearContainerClassNames",(function(){var e=a.props,t=e.selectingDate,n=e.selectsStart,o=e.selectsEnd,s=e.selectsRange;return r("react-datepicker__year",{"react-datepicker__year--selecting-range":t&&(n||o||s)})})),ye(ke(a),"getYearContent",(function(e){return a.props.renderYearContent?a.props.renderYearContent(e):e})),a}return fe(o,[{key:"render",value:function(){for(var t=this,r=[],n=this.props,o=n.date,a=n.yearItemNumber,s=n.onYearMouseEnter,i=n.onYearMouseLeave,p=kt(o,a),c=p.startPeriod,l=p.endPeriod,d=function(n){r.push(React__default.createElement("div",{ref:t.YEAR_REFS[n-c],onClick:function(e){t.onYearClick(e,n);},onKeyDown:function(e){t.onYearKeyDown(e,n);},tabIndex:t.getYearTabIndex(n),className:t.getYearClassNames(n),onMouseEnter:function(e){return s(e,n)},onMouseLeave:function(e){return i(e,n)},key:n,"aria-current":t.isCurrentYear(n)?"date":void 0},t.getYearContent(n)));},u=c;u<=l;u++)d(u);return React__default.createElement("div",{className:this.getYearContainerClassNames()},React__default.createElement("div",{className:"react-datepicker__year-wrapper",onMouseLeave:this.props.clearSelectingDate},r))}}]),o}(),jt=function(t){De(n,React__default.Component);var r=be(n);function n(t){var o;return he(this,n),ye(ke(o=r.call(this,t)),"onTimeChange",(function(e){o.setState({time:e});var t=new Date;t.setHours(e.split(":")[0]),t.setMinutes(e.split(":")[1]),o.props.onChange(t);})),ye(ke(o),"renderTimeInput",(function(){var t=o.state.time,r=o.props,n=r.date,a=r.timeString,s=r.customTimeInput;return s?React__default.cloneElement(s,{date:n,value:t,onChange:o.onTimeChange}):React__default.createElement("input",{type:"time",className:"react-datepicker-time__input",placeholder:"Time",name:"time-input",required:!0,value:t,onChange:function(e){o.onTimeChange(e.target.value||a);}})})),o.state={time:o.props.timeString},o}return fe(n,[{key:"render",value:function(){return React__default.createElement("div",{className:"react-datepicker__input-time-container"},React__default.createElement("div",{className:"react-datepicker-time__caption"},this.props.timeInputLabel),React__default.createElement("div",{className:"react-datepicker-time__input-container"},React__default.createElement("div",{className:"react-datepicker-time__input"},this.renderTimeInput())))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.timeString!==t.time?{time:e.timeString}:null}}]),n}();function Wt(t){var r=t.className,n=t.children,o=t.showPopperArrow,a=t.arrowProps,s=void 0===a?{}:a;return React__default.createElement("div",{className:r},o&&React__default.createElement("div",ve({className:"react-datepicker__triangle"},s)),n)}var Vt=["react-datepicker__year-select","react-datepicker__month-select","react-datepicker__month-year-select"],qt=function(t){De(o,React__default.Component);var n=be(o);function o(t){var a;return he(this,o),ye(ke(a=n.call(this,t)),"handleClickOutside",(function(e){a.props.onClickOutside(e);})),ye(ke(a),"setClickOutsideRef",(function(){return a.containerRef.current})),ye(ke(a),"handleDropdownFocus",(function(e){(function(){var e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).className||"").split(/\s+/);return Vt.some((function(t){return e.indexOf(t)>=0}))})(e.target)&&a.props.onDropdownFocus();})),ye(ke(a),"getDateInView",(function(){var e=a.props,t=e.preSelection,r=e.selected,n=e.openToDate,o=ft(a.props),s=yt(a.props),i=Ye(),p=n||r||t;return p||(o&&isBefore(i,o)?o:s&&isAfter(i,s)?s:i)})),ye(ke(a),"increaseMonth",(function(){a.setState((function(e){var t=e.date;return {date:addMonths(t,1)}}),(function(){return a.handleMonthChange(a.state.date)}));})),ye(ke(a),"decreaseMonth",(function(){a.setState((function(e){var t=e.date;return {date:subMonths(t,1)}}),(function(){return a.handleMonthChange(a.state.date)}));})),ye(ke(a),"handleDayClick",(function(e,t,r){a.props.onSelect(e,t,r),a.props.setPreSelection&&a.props.setPreSelection(e);})),ye(ke(a),"handleDayMouseEnter",(function(e){a.setState({selectingDate:e}),a.props.onDayMouseEnter&&a.props.onDayMouseEnter(e);})),ye(ke(a),"handleMonthMouseLeave",(function(){a.setState({selectingDate:null}),a.props.onMonthMouseLeave&&a.props.onMonthMouseLeave();})),ye(ke(a),"handleYearMouseEnter",(function(e,t){a.setState({selectingDate:setYear(Ye(),t)}),a.props.onYearMouseEnter&&a.props.onYearMouseEnter(e,t);})),ye(ke(a),"handleYearMouseLeave",(function(e,t){a.props.onYearMouseLeave&&a.props.onYearMouseLeave(e,t);})),ye(ke(a),"handleYearChange",(function(e){a.props.onYearChange&&(a.props.onYearChange(e),a.setState({isRenderAriaLiveMessage:!0})),a.props.adjustDateOnChange&&(a.props.onSelect&&a.props.onSelect(e),a.props.setOpen&&a.props.setOpen(!0)),a.props.setPreSelection&&a.props.setPreSelection(e);})),ye(ke(a),"handleMonthChange",(function(e){a.handleCustomMonthChange(e),a.props.adjustDateOnChange&&(a.props.onSelect&&a.props.onSelect(e),a.props.setOpen&&a.props.setOpen(!0)),a.props.setPreSelection&&a.props.setPreSelection(e);})),ye(ke(a),"handleCustomMonthChange",(function(e){a.props.onMonthChange&&(a.props.onMonthChange(e),a.setState({isRenderAriaLiveMessage:!0}));})),ye(ke(a),"handleMonthYearChange",(function(e){a.handleYearChange(e),a.handleMonthChange(e);})),ye(ke(a),"changeYear",(function(e){a.setState((function(t){var r=t.date;return {date:setYear(r,e)}}),(function(){return a.handleYearChange(a.state.date)}));})),ye(ke(a),"changeMonth",(function(e){a.setState((function(t){var r=t.date;return {date:setMonth(r,e)}}),(function(){return a.handleMonthChange(a.state.date)}));})),ye(ke(a),"changeMonthYear",(function(e){a.setState((function(t){var r=t.date;return {date:setYear(setMonth(r,getMonth(e)),getYear(e))}}),(function(){return a.handleMonthYearChange(a.state.date)}));})),ye(ke(a),"header",(function(){var t=Le(arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.date,a.props.locale,a.props.calendarStartDay),n=[];return a.props.showWeekNumbers&&n.push(React__default.createElement("div",{key:"W",className:"react-datepicker__day-name"},a.props.weekLabel||"#")),n.concat([0,1,2,3,4,5,6].map((function(n){var o=addDays(t,n),s=a.formatWeekday(o,a.props.locale),i=a.props.weekDayClassName?a.props.weekDayClassName(o):void 0;return React__default.createElement("div",{key:n,className:r("react-datepicker__day-name",i)},s)})))})),ye(ke(a),"formatWeekday",(function(e,t){return a.props.formatWeekDay?function(e,t,r){return t(Ie(e,"EEEE",r))}(e,a.props.formatWeekDay,t):a.props.useWeekdaysShort?function(e,t){return Ie(e,"EEE",t)}(e,t):function(e,t){return Ie(e,"EEEEEE",t)}(e,t)})),ye(ke(a),"decreaseYear",(function(){a.setState((function(e){var t=e.date;return {date:subYears(t,a.props.showYearPicker?a.props.yearItemNumber:1)}}),(function(){return a.handleYearChange(a.state.date)}));})),ye(ke(a),"clearSelectingDate",(function(){a.setState({selectingDate:null});})),ye(ke(a),"renderPreviousButton",(function(){if(!a.props.renderCustomHeader){var t;switch(!0){case a.props.showMonthYearPicker:t=ht(a.state.date,a.props);break;case a.props.showYearPicker:t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.yearItemNumber,o=void 0===n?Ne:n,a=kt(Ae(subYears(e,o)),o).endPeriod,s=r&&getYear(r);return s&&s>a||!1}(a.state.date,a.props);break;default:t=dt(a.state.date,a.props);}if((a.props.forceShowMonthNavigation||a.props.showDisabledMonthNavigation||!t)&&!a.props.showTimeSelectOnly){var r=["react-datepicker__navigation","react-datepicker__navigation--previous"],n=a.decreaseMonth;(a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker)&&(n=a.decreaseYear),t&&a.props.showDisabledMonthNavigation&&(r.push("react-datepicker__navigation--previous--disabled"),n=null);var o=a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker,s=a.props,i=s.previousMonthButtonLabel,p=s.previousYearButtonLabel,c=a.props,l=c.previousMonthAriaLabel,d=void 0===l?"string"==typeof i?i:"Previous Month":l,u=c.previousYearAriaLabel,h=void 0===u?"string"==typeof p?p:"Previous Year":u;return React__default.createElement("button",{type:"button",className:r.join(" "),onClick:n,onKeyDown:a.props.handleOnKeyDown,"aria-label":o?h:d},React__default.createElement("span",{className:["react-datepicker__navigation-icon","react-datepicker__navigation-icon--previous"].join(" ")},o?a.props.previousYearButtonLabel:a.props.previousMonthButtonLabel))}}})),ye(ke(a),"increaseYear",(function(){a.setState((function(e){var t=e.date;return {date:addYears(t,a.props.showYearPicker?a.props.yearItemNumber:1)}}),(function(){return a.handleYearChange(a.state.date)}));})),ye(ke(a),"renderNextButton",(function(){if(!a.props.renderCustomHeader){var t;switch(!0){case a.props.showMonthYearPicker:t=mt(a.state.date,a.props);break;case a.props.showYearPicker:t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,n=t.yearItemNumber,o=void 0===n?Ne:n,a=kt(addYears(e,o),o).startPeriod,s=r&&getYear(r);return s&&s<a||!1}(a.state.date,a.props);break;default:t=ut(a.state.date,a.props);}if((a.props.forceShowMonthNavigation||a.props.showDisabledMonthNavigation||!t)&&!a.props.showTimeSelectOnly){var r=["react-datepicker__navigation","react-datepicker__navigation--next"];a.props.showTimeSelect&&r.push("react-datepicker__navigation--next--with-time"),a.props.todayButton&&r.push("react-datepicker__navigation--next--with-today-button");var n=a.increaseMonth;(a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker)&&(n=a.increaseYear),t&&a.props.showDisabledMonthNavigation&&(r.push("react-datepicker__navigation--next--disabled"),n=null);var o=a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker,s=a.props,i=s.nextMonthButtonLabel,p=s.nextYearButtonLabel,c=a.props,l=c.nextMonthAriaLabel,d=void 0===l?"string"==typeof i?i:"Next Month":l,h=c.nextYearAriaLabel,m=void 0===h?"string"==typeof p?p:"Next Year":h;return React__default.createElement("button",{type:"button",className:r.join(" "),onClick:n,onKeyDown:a.props.handleOnKeyDown,"aria-label":o?m:d},React__default.createElement("span",{className:["react-datepicker__navigation-icon","react-datepicker__navigation-icon--next"].join(" ")},o?a.props.nextYearButtonLabel:a.props.nextMonthButtonLabel))}}})),ye(ke(a),"renderCurrentMonth",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.date,r=["react-datepicker__current-month"];return a.props.showYearDropdown&&r.push("react-datepicker__current-month--hasYearDropdown"),a.props.showMonthDropdown&&r.push("react-datepicker__current-month--hasMonthDropdown"),a.props.showMonthYearDropdown&&r.push("react-datepicker__current-month--hasMonthYearDropdown"),React__default.createElement("div",{className:r.join(" ")},Ie(t,a.props.dateFormat,a.props.locale))})),ye(ke(a),"renderYearDropdown",(function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showYearDropdown&&!t)return React__default.createElement(_t,{adjustDateOnChange:a.props.adjustDateOnChange,date:a.state.date,onSelect:a.props.onSelect,setOpen:a.props.setOpen,dropdownMode:a.props.dropdownMode,onChange:a.changeYear,minDate:a.props.minDate,maxDate:a.props.maxDate,year:getYear(a.state.date),scrollableYearDropdown:a.props.scrollableYearDropdown,yearDropdownItemNumber:a.props.yearDropdownItemNumber})})),ye(ke(a),"renderMonthDropdown",(function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showMonthDropdown&&!t)return React__default.createElement(Et,{dropdownMode:a.props.dropdownMode,locale:a.props.locale,onChange:a.changeMonth,month:getMonth(a.state.date),useShortMonthInDropdown:a.props.useShortMonthInDropdown})})),ye(ke(a),"renderMonthYearDropdown",(function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(a.props.showMonthYearDropdown&&!t)return React__default.createElement(Yt,{dropdownMode:a.props.dropdownMode,locale:a.props.locale,dateFormat:a.props.dateFormat,onChange:a.changeMonthYear,minDate:a.props.minDate,maxDate:a.props.maxDate,date:a.state.date,scrollableMonthYearDropdown:a.props.scrollableMonthYearDropdown})})),ye(ke(a),"handleTodayButtonClick",(function(e){a.props.onSelect(Be(),e),a.props.setPreSelection&&a.props.setPreSelection(Be());})),ye(ke(a),"renderTodayButton",(function(){if(a.props.todayButton&&!a.props.showTimeSelectOnly)return React__default.createElement("div",{className:"react-datepicker__today-button",onClick:function(e){return a.handleTodayButtonClick(e)}},a.props.todayButton)})),ye(ke(a),"renderDefaultHeader",(function(t){var r=t.monthDate,n=t.i;return React__default.createElement("div",{className:"react-datepicker__header ".concat(a.props.showTimeSelect?"react-datepicker__header--has-time-select":"")},a.renderCurrentMonth(r),React__default.createElement("div",{className:"react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(a.props.dropdownMode),onFocus:a.handleDropdownFocus},a.renderMonthDropdown(0!==n),a.renderMonthYearDropdown(0!==n),a.renderYearDropdown(0!==n)),React__default.createElement("div",{className:"react-datepicker__day-names"},a.header(r)))})),ye(ke(a),"renderCustomHeader",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.monthDate,n=t.i;if(a.props.showTimeSelect&&!a.state.monthContainer||a.props.showTimeSelectOnly)return null;var o=dt(a.state.date,a.props),s=ut(a.state.date,a.props),i=ht(a.state.date,a.props),p=mt(a.state.date,a.props),c=!a.props.showMonthYearPicker&&!a.props.showQuarterYearPicker&&!a.props.showYearPicker;return React__default.createElement("div",{className:"react-datepicker__header react-datepicker__header--custom",onFocus:a.props.onDropdownFocus},a.props.renderCustomHeader(de(de({},a.state),{},{customHeaderCount:n,monthDate:r,changeMonth:a.changeMonth,changeYear:a.changeYear,decreaseMonth:a.decreaseMonth,increaseMonth:a.increaseMonth,decreaseYear:a.decreaseYear,increaseYear:a.increaseYear,prevMonthButtonDisabled:o,nextMonthButtonDisabled:s,prevYearButtonDisabled:i,nextYearButtonDisabled:p})),c&&React__default.createElement("div",{className:"react-datepicker__day-names"},a.header(r)))})),ye(ke(a),"renderYearHeader",(function(){var t=a.state.date,r=a.props,n=r.showYearPicker,o=kt(t,r.yearItemNumber),s=o.startPeriod,i=o.endPeriod;return React__default.createElement("div",{className:"react-datepicker__header react-datepicker-year-header"},n?"".concat(s," - ").concat(i):getYear(t))})),ye(ke(a),"renderHeader",(function(e){switch(!0){case void 0!==a.props.renderCustomHeader:return a.renderCustomHeader(e);case a.props.showMonthYearPicker||a.props.showQuarterYearPicker||a.props.showYearPicker:return a.renderYearHeader(e);default:return a.renderDefaultHeader(e)}})),ye(ke(a),"renderMonths",(function(){var t;if(!a.props.showTimeSelectOnly&&!a.props.showYearPicker){for(var r=[],n=a.props.showPreviousMonths?a.props.monthsShown-1:0,o=subMonths(a.state.date,n),s=null!==(t=a.props.monthSelectedIn)&&void 0!==t?t:n,i=0;i<a.props.monthsShown;++i){var p=addMonths(o,i-s+n),c="month-".concat(i),d=i<a.props.monthsShown-1,u=i>0;r.push(React__default.createElement("div",{key:c,ref:function(e){a.monthContainer=e;},className:"react-datepicker__month-container"},a.renderHeader({monthDate:p,i:i}),React__default.createElement(Bt,{chooseDayAriaLabelPrefix:a.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:a.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:a.props.weekAriaLabelPrefix,ariaLabelPrefix:a.props.monthAriaLabelPrefix,onChange:a.changeMonthYear,day:p,dayClassName:a.props.dayClassName,calendarStartDay:a.props.calendarStartDay,monthClassName:a.props.monthClassName,onDayClick:a.handleDayClick,handleOnKeyDown:a.props.handleOnDayKeyDown,onDayMouseEnter:a.handleDayMouseEnter,onMouseLeave:a.handleMonthMouseLeave,onWeekSelect:a.props.onWeekSelect,orderInDisplay:i,formatWeekNumber:a.props.formatWeekNumber,locale:a.props.locale,minDate:a.props.minDate,maxDate:a.props.maxDate,excludeDates:a.props.excludeDates,excludeDateIntervals:a.props.excludeDateIntervals,highlightDates:a.props.highlightDates,holidays:a.props.holidays,selectingDate:a.state.selectingDate,includeDates:a.props.includeDates,includeDateIntervals:a.props.includeDateIntervals,inline:a.props.inline,shouldFocusDayInline:a.props.shouldFocusDayInline,fixedHeight:a.props.fixedHeight,filterDate:a.props.filterDate,preSelection:a.props.preSelection,setPreSelection:a.props.setPreSelection,selected:a.props.selected,selectsStart:a.props.selectsStart,selectsEnd:a.props.selectsEnd,selectsRange:a.props.selectsRange,selectsDisabledDaysInRange:a.props.selectsDisabledDaysInRange,showWeekNumbers:a.props.showWeekNumbers,startDate:a.props.startDate,endDate:a.props.endDate,peekNextMonth:a.props.peekNextMonth,setOpen:a.props.setOpen,shouldCloseOnSelect:a.props.shouldCloseOnSelect,renderDayContents:a.props.renderDayContents,renderMonthContent:a.props.renderMonthContent,renderQuarterContent:a.props.renderQuarterContent,renderYearContent:a.props.renderYearContent,disabledKeyboardNavigation:a.props.disabledKeyboardNavigation,showMonthYearPicker:a.props.showMonthYearPicker,showFullMonthYearPicker:a.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:a.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:a.props.showFourColumnMonthYearPicker,showYearPicker:a.props.showYearPicker,showQuarterYearPicker:a.props.showQuarterYearPicker,isInputFocused:a.props.isInputFocused,containerRef:a.containerRef,monthShowsDuplicateDaysEnd:d,monthShowsDuplicateDaysStart:u})));}return r}})),ye(ke(a),"renderYears",(function(){if(!a.props.showTimeSelectOnly)return a.props.showYearPicker?React__default.createElement("div",{className:"react-datepicker__year--container"},a.renderHeader(),React__default.createElement(Ht,ve({onDayClick:a.handleDayClick,selectingDate:a.state.selectingDate,clearSelectingDate:a.clearSelectingDate,date:a.state.date},a.props,{onYearMouseEnter:a.handleYearMouseEnter,onYearMouseLeave:a.handleYearMouseLeave}))):void 0})),ye(ke(a),"renderTimeSection",(function(){if(a.props.showTimeSelect&&(a.state.monthContainer||a.props.showTimeSelectOnly))return React__default.createElement(Qt,{selected:a.props.selected,openToDate:a.props.openToDate,onChange:a.props.onTimeChange,timeClassName:a.props.timeClassName,format:a.props.timeFormat,includeTimes:a.props.includeTimes,intervals:a.props.timeIntervals,minTime:a.props.minTime,maxTime:a.props.maxTime,excludeTimes:a.props.excludeTimes,filterTime:a.props.filterTime,timeCaption:a.props.timeCaption,todayButton:a.props.todayButton,showMonthDropdown:a.props.showMonthDropdown,showMonthYearDropdown:a.props.showMonthYearDropdown,showYearDropdown:a.props.showYearDropdown,withPortal:a.props.withPortal,monthRef:a.state.monthContainer,injectTimes:a.props.injectTimes,locale:a.props.locale,handleOnKeyDown:a.props.handleOnKeyDown,showTimeSelectOnly:a.props.showTimeSelectOnly})})),ye(ke(a),"renderInputTimeSection",(function(){var t=new Date(a.props.selected),r=Te(t)&&Boolean(a.props.selected)?"".concat(wt(t.getHours()),":").concat(wt(t.getMinutes())):"";if(a.props.showTimeInput)return React__default.createElement(jt,{date:t,timeString:r,timeInputLabel:a.props.timeInputLabel,onChange:a.props.onTimeChange,customTimeInput:a.props.customTimeInput})})),ye(ke(a),"renderAriaLiveRegion",(function(){var t,r=kt(a.state.date,a.props.yearItemNumber),n=r.startPeriod,o=r.endPeriod;return t=a.props.showYearPicker?"".concat(n," - ").concat(o):a.props.showMonthYearPicker||a.props.showQuarterYearPicker?getYear(a.state.date):"".concat(Je(getMonth(a.state.date),a.props.locale)," ").concat(getYear(a.state.date)),React__default.createElement("span",{role:"alert","aria-live":"polite",className:"react-datepicker__aria-live"},a.state.isRenderAriaLiveMessage&&t)})),ye(ke(a),"renderChildren",(function(){if(a.props.children)return React__default.createElement("div",{className:"react-datepicker__children-container"},a.props.children)})),a.containerRef=React__default.createRef(),a.state={date:a.getDateInView(),selectingDate:null,monthContainer:null,isRenderAriaLiveMessage:!1},a}return fe(o,[{key:"componentDidMount",value:function(){var e=this;this.props.showTimeSelect&&(this.assignMonthContainer=void e.setState({monthContainer:e.monthContainer}));}},{key:"componentDidUpdate",value:function(e){var t=this;if(!this.props.preSelection||We(this.props.preSelection,e.preSelection)&&this.props.monthSelectedIn===e.monthSelectedIn)this.props.openToDate&&!We(this.props.openToDate,e.openToDate)&&this.setState({date:this.props.openToDate});else {var r=!He(this.state.date,this.props.preSelection);this.setState({date:this.props.preSelection},(function(){return r&&t.handleCustomMonthChange(t.state.date)}));}}},{key:"render",value:function(){var t=this.props.container||Wt;return React__default.createElement("div",{ref:this.containerRef},React__default.createElement(t,{className:r("react-datepicker",this.props.className,{"react-datepicker--time-only":this.props.showTimeSelectOnly}),showPopperArrow:this.props.showPopperArrow,arrowProps:this.props.arrowProps},this.renderAriaLiveRegion(),this.renderPreviousButton(),this.renderNextButton(),this.renderMonths(),this.renderYears(),this.renderTodayButton(),this.renderTimeSection(),this.renderInputTimeSection(),this.renderChildren()))}}],[{key:"defaultProps",get:function(){return {onDropdownFocus:function(){},monthsShown:1,forceShowMonthNavigation:!1,timeCaption:"Time",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month",customTimeInput:null,yearItemNumber:Ne}}}]),o}(),Ut=function(t){De(n,React__default.Component);var r=be(n);function n(e){var t;return he(this,n),(t=r.call(this,e)).el=document.createElement("div"),t}return fe(n,[{key:"componentDidMount",value:function(){this.portalRoot=(this.props.portalHost||document).getElementById(this.props.portalId),this.portalRoot||(this.portalRoot=document.createElement("div"),this.portalRoot.setAttribute("id",this.props.portalId),(this.props.portalHost||document.body).appendChild(this.portalRoot)),this.portalRoot.appendChild(this.el);}},{key:"componentWillUnmount",value:function(){this.portalRoot.removeChild(this.el);}},{key:"render",value:function(){return ReactDOM__default.createPortal(this.props.children,this.el)}}]),n}(),zt=function(e){return !e.disabled&&-1!==e.tabIndex},$t=function(t){De(n,React__default.Component);var r=be(n);function n(t){var o;return he(this,n),ye(ke(o=r.call(this,t)),"getTabChildren",(function(){return Array.prototype.slice.call(o.tabLoopRef.current.querySelectorAll("[tabindex], a, button, input, select, textarea"),1,-1).filter(zt)})),ye(ke(o),"handleFocusStart",(function(){var e=o.getTabChildren();e&&e.length>1&&e[e.length-1].focus();})),ye(ke(o),"handleFocusEnd",(function(){var e=o.getTabChildren();e&&e.length>1&&e[0].focus();})),o.tabLoopRef=React__default.createRef(),o}return fe(n,[{key:"render",value:function(){return this.props.enableTabLoop?React__default.createElement("div",{className:"react-datepicker__tab-loop",ref:this.tabLoopRef},React__default.createElement("div",{className:"react-datepicker__tab-loop__start",tabIndex:"0",onFocus:this.handleFocusStart}),this.props.children,React__default.createElement("div",{className:"react-datepicker__tab-loop__end",tabIndex:"0",onFocus:this.handleFocusEnd})):this.props.children}}],[{key:"defaultProps",get:function(){return {enableTabLoop:!0}}}]),n}(),Gt=function(t){De(o,React__default.Component);var n=be(o);function o(){return he(this,o),n.apply(this,arguments)}return fe(o,[{key:"render",value:function(){var t,n=this.props,o=n.className,a=n.wrapperClassName,s=n.hidePopper,i=n.popperComponent,p=n.popperModifiers,c=n.popperPlacement,l=n.popperProps,d=n.targetComponent,u=n.enableTabLoop,h=n.popperOnKeyDown,m=n.portalId,f=n.portalHost;if(!s){var y=r("react-datepicker-popper",o);t=React__default.createElement(Popper,ve({modifiers:p,placement:c},l),(function(t){var r=t.ref,n=t.style,o=t.placement,a=t.arrowProps;return React__default.createElement($t,{enableTabLoop:u},React__default.createElement("div",{ref:r,style:n,className:y,"data-placement":o,onKeyDown:h},React__default.cloneElement(i,{arrowProps:a})))}));}this.props.popperContainer&&(t=React__default.createElement(this.props.popperContainer,{},t)),m&&!s&&(t=React__default.createElement(Ut,{portalId:m,portalHost:f},t));var v=r("react-datepicker-wrapper",a);return React__default.createElement(Manager,{className:"react-datepicker-manager"},React__default.createElement(Reference,null,(function(t){var r=t.ref;return React__default.createElement("div",{ref:r,className:v},d)})),t)}}],[{key:"defaultProps",get:function(){return {hidePopper:!0,popperModifiers:[],popperProps:{},popperPlacement:"bottom-start"}}}]),o}(),Jt="react-datepicker-ignore-onclickoutside",Xt=onClickOutsideHOC(qt);var Zt="Date input not valid.",er=function(t){De(s,React__default.Component);var a=be(s);function s(t){var i;return he(this,s),ye(ke(i=a.call(this,t)),"getPreSelection",(function(){return i.props.openToDate?i.props.openToDate:i.props.selectsEnd&&i.props.startDate?i.props.startDate:i.props.selectsStart&&i.props.endDate?i.props.endDate:Ye()})),ye(ke(i),"calcInitialState",(function(){var e,t,r=null===(e=i.props.holidays)||void 0===e?void 0:e.reduce((function(e,t){var r=new Date(t.date);return isValid(r)?[].concat(Se(e),[de(de({},t),{},{date:r})]):e}),[]),n=i.getPreSelection(),a=ft(i.props),s=yt(i.props),p=a&&isBefore(n,startOfDay(a))?a:s&&isAfter(n,endOfDay(s))?s:n;return {open:i.props.startOpen||!1,preventFocus:!1,preSelection:null!==(t=i.props.selectsRange?i.props.startDate:i.props.selected)&&void 0!==t?t:p,highlightDates:vt(i.props.highlightDates),holidays:Dt(r),focused:!1,shouldFocusDayInline:!1,isRenderAriaLiveMessage:!1}})),ye(ke(i),"clearPreventFocusTimeout",(function(){i.preventFocusTimeout&&clearTimeout(i.preventFocusTimeout);})),ye(ke(i),"setFocus",(function(){i.input&&i.input.focus&&i.input.focus({preventScroll:!0});})),ye(ke(i),"setBlur",(function(){i.input&&i.input.blur&&i.input.blur(),i.cancelFocusInput();})),ye(ke(i),"setOpen",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i.setState({open:e,preSelection:e&&i.state.open?i.state.preSelection:i.calcInitialState().preSelection,lastPreSelectChange:rr},(function(){e||i.setState((function(e){return {focused:!!t&&e.focused}}),(function(){!t&&i.setBlur(),i.setState({inputValue:null});}));}));})),ye(ke(i),"inputOk",(function(){return isDate(i.state.preSelection)})),ye(ke(i),"isCalendarOpen",(function(){return void 0===i.props.open?i.state.open&&!i.props.disabled&&!i.props.readOnly:i.props.open})),ye(ke(i),"handleFocus",(function(e){i.state.preventFocus||(i.props.onFocus(e),i.props.preventOpenOnFocus||i.props.readOnly||i.setOpen(!0)),i.setState({focused:!0});})),ye(ke(i),"cancelFocusInput",(function(){clearTimeout(i.inputFocusTimeout),i.inputFocusTimeout=null;})),ye(ke(i),"deferFocusInput",(function(){i.cancelFocusInput(),i.inputFocusTimeout=setTimeout((function(){return i.setFocus()}),1);})),ye(ke(i),"handleDropdownFocus",(function(){i.cancelFocusInput();})),ye(ke(i),"handleBlur",(function(e){(!i.state.open||i.props.withPortal||i.props.showTimeInput)&&i.props.onBlur(e),i.setState({focused:!1});})),ye(ke(i),"handleCalendarClickOutside",(function(e){i.props.inline||i.setOpen(!1),i.props.onClickOutside(e),i.props.withPortal&&e.preventDefault();})),ye(ke(i),"handleChange",(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0];if(!i.props.onChangeRaw||(i.props.onChangeRaw.apply(ke(i),t),"function"==typeof n.isDefaultPrevented&&!n.isDefaultPrevented())){i.setState({inputValue:n.target.value,lastPreSelectChange:tr});var o,a,s,p,c,l,d,u,h=(o=n.target.value,a=i.props.dateFormat,s=i.props.locale,p=i.props.strictParsing,c=i.props.minDate,l=null,d=Ge(s)||Ge($e()),u=!0,Array.isArray(a)?(a.forEach((function(e){var t=parse(o,e,new Date,{locale:d});p&&(u=Te(t,c)&&o===Ie(t,e,s)),Te(t,c)&&u&&(l=t);})),l):(l=parse(o,a,new Date,{locale:d}),p?u=Te(l)&&o===Ie(l,a,s):Te(l)||(a=a.match(xe).map((function(e){var t=e[0];return "p"===t||"P"===t?d?(0, Pe[t])(e,d.formatLong):t:e})).join(""),o.length>0&&(l=parse(o,a.slice(0,o.length),new Date)),Te(l)||(l=new Date(o))),Te(l)&&u?l:null));i.props.showTimeSelectOnly&&i.props.selected&&!We(h,i.props.selected)&&(h=set(i.props.selected,null==h?{hours:getHours(i.props.selected),minutes:getMinutes(i.props.selected),seconds:getSeconds(i.props.selected)}:{hours:getHours(h),minutes:getMinutes(h),seconds:getSeconds(h)})),!h&&n.target.value||i.setSelected(h,n,!0);}})),ye(ke(i),"handleSelect",(function(e,t,r){if(i.setState({preventFocus:!0},(function(){return i.preventFocusTimeout=setTimeout((function(){return i.setState({preventFocus:!1})}),50),i.preventFocusTimeout})),i.props.onChangeRaw&&i.props.onChangeRaw(t),i.setSelected(e,t,!1,r),i.props.showDateSelect&&i.setState({isRenderAriaLiveMessage:!0}),!i.props.shouldCloseOnSelect||i.props.showTimeSelect)i.setPreSelection(e);else if(!i.props.inline){i.props.selectsRange||i.setOpen(!1);var n=i.props,o=n.startDate,a=n.endDate;!o||a||isBefore(e,o)||i.setOpen(!1);}})),ye(ke(i),"setSelected",(function(e,t,r,n){var o=e;if(i.props.showYearPicker){if(null!==o&&at(getYear(o),i.props))return}else if(i.props.showMonthYearPicker){if(null!==o&&tt(o,i.props))return}else if(null!==o&&Ze(o,i.props))return;var a=i.props,s=a.onChange,p=a.selectsRange,c=a.startDate,l=a.endDate;if(!Ve(i.props.selected,o)||i.props.allowSameDay||p)if(null!==o&&(!i.props.selected||r&&(i.props.showTimeSelect||i.props.showTimeSelectOnly||i.props.showTimeInput)||(o=Re(o,{hour:getHours(i.props.selected),minute:getMinutes(i.props.selected),second:getSeconds(i.props.selected)})),i.props.inline||i.setState({preSelection:o}),i.props.focusSelectedMonth||i.setState({monthSelectedIn:n})),p){var d=c&&!l,u=c&&l;!c&&!l?s([o,null],t):d&&(isBefore(o,c)?s([o,null],t):s([c,o],t)),u&&s([o,null],t);}else s(o,t);r||(i.props.onSelect(o,t),i.setState({inputValue:null}));})),ye(ke(i),"setPreSelection",(function(e){var t=void 0!==i.props.minDate,r=void 0!==i.props.maxDate,n=!0;if(e){var o=startOfDay(e);if(t&&r)n=qe(e,i.props.minDate,i.props.maxDate);else if(t){var a=startOfDay(i.props.minDate);n=isAfter(e,a)||Ve(o,a);}else if(r){var s=endOfDay(i.props.maxDate);n=isBefore(e,s)||Ve(o,s);}}n&&i.setState({preSelection:e});})),ye(ke(i),"handleTimeChange",(function(e){var t=i.props.selected?i.props.selected:i.getPreSelection(),r=i.props.selected?e:Re(t,{hour:getHours(e),minute:getMinutes(e)});i.setState({preSelection:r}),i.props.onChange(r),i.props.shouldCloseOnSelect&&i.setOpen(!1),i.props.showTimeInput&&i.setOpen(!0),(i.props.showTimeSelectOnly||i.props.showTimeSelect)&&i.setState({isRenderAriaLiveMessage:!0}),i.setState({inputValue:null});})),ye(ke(i),"onInputClick",(function(){i.props.disabled||i.props.readOnly||i.setOpen(!0),i.props.onInputClick();})),ye(ke(i),"onInputKeyDown",(function(e){i.props.onKeyDown(e);var t=e.key;if(i.state.open||i.props.inline||i.props.preventOpenOnFocus){if(i.state.open){if("ArrowDown"===t||"ArrowUp"===t){e.preventDefault();var r=i.calendar.componentNode&&i.calendar.componentNode.querySelector('.react-datepicker__day[tabindex="0"]');return void(r&&r.focus({preventScroll:!0}))}var n=Ye(i.state.preSelection);"Enter"===t?(e.preventDefault(),i.inputOk()&&i.state.lastPreSelectChange===rr?(i.handleSelect(n,e),!i.props.shouldCloseOnSelect&&i.setPreSelection(n)):i.setOpen(!1)):"Escape"===t?(e.preventDefault(),i.setOpen(!1)):"Tab"===t&&i.setOpen(!1),i.inputOk()||i.props.onInputError({code:1,msg:Zt});}}else "ArrowDown"!==t&&"ArrowUp"!==t&&"Enter"!==t||i.onInputClick();})),ye(ke(i),"onPortalKeyDown",(function(e){"Escape"===e.key&&(e.preventDefault(),i.setState({preventFocus:!0},(function(){i.setOpen(!1),setTimeout((function(){i.setFocus(),i.setState({preventFocus:!1});}));})));})),ye(ke(i),"onDayKeyDown",(function(e){i.props.onKeyDown(e);var t=e.key,r=Ye(i.state.preSelection);if("Enter"===t)e.preventDefault(),i.handleSelect(r,e),!i.props.shouldCloseOnSelect&&i.setPreSelection(r);else if("Escape"===t)e.preventDefault(),i.setOpen(!1),i.inputOk()||i.props.onInputError({code:1,msg:Zt});else if(!i.props.disabledKeyboardNavigation){var n;switch(t){case"ArrowLeft":n=subDays(r,1);break;case"ArrowRight":n=addDays(r,1);break;case"ArrowUp":n=subWeeks(r,1);break;case"ArrowDown":n=addWeeks(r,1);break;case"PageUp":n=subMonths(r,1);break;case"PageDown":n=addMonths(r,1);break;case"Home":n=subYears(r,1);break;case"End":n=addYears(r,1);}if(!n)return void(i.props.onInputError&&i.props.onInputError({code:1,msg:Zt}));if(e.preventDefault(),i.setState({lastPreSelectChange:rr}),i.props.adjustDateOnChange&&i.setSelected(n),i.setPreSelection(n),i.props.inline){var o=getMonth(r),a=getMonth(n),s=getYear(r),d=getYear(n);o!==a||s!==d?i.setState({shouldFocusDayInline:!0}):i.setState({shouldFocusDayInline:!1});}}})),ye(ke(i),"onPopperKeyDown",(function(e){"Escape"===e.key&&(e.preventDefault(),i.setState({preventFocus:!0},(function(){i.setOpen(!1),setTimeout((function(){i.setFocus(),i.setState({preventFocus:!1});}));})));})),ye(ke(i),"onClearClick",(function(e){e&&e.preventDefault&&e.preventDefault(),i.props.selectsRange?i.props.onChange([null,null],e):i.props.onChange(null,e),i.setState({inputValue:null});})),ye(ke(i),"clear",(function(){i.onClearClick();})),ye(ke(i),"onScroll",(function(e){"boolean"==typeof i.props.closeOnScroll&&i.props.closeOnScroll?e.target!==document&&e.target!==document.documentElement&&e.target!==document.body||i.setOpen(!1):"function"==typeof i.props.closeOnScroll&&i.props.closeOnScroll(e)&&i.setOpen(!1);})),ye(ke(i),"renderCalendar",(function(){return i.props.inline||i.isCalendarOpen()?React__default.createElement(Xt,{ref:function(e){i.calendar=e;},locale:i.props.locale,calendarStartDay:i.props.calendarStartDay,chooseDayAriaLabelPrefix:i.props.chooseDayAriaLabelPrefix,disabledDayAriaLabelPrefix:i.props.disabledDayAriaLabelPrefix,weekAriaLabelPrefix:i.props.weekAriaLabelPrefix,monthAriaLabelPrefix:i.props.monthAriaLabelPrefix,adjustDateOnChange:i.props.adjustDateOnChange,setOpen:i.setOpen,shouldCloseOnSelect:i.props.shouldCloseOnSelect,dateFormat:i.props.dateFormatCalendar,useWeekdaysShort:i.props.useWeekdaysShort,formatWeekDay:i.props.formatWeekDay,dropdownMode:i.props.dropdownMode,selected:i.props.selected,preSelection:i.state.preSelection,onSelect:i.handleSelect,onWeekSelect:i.props.onWeekSelect,openToDate:i.props.openToDate,minDate:i.props.minDate,maxDate:i.props.maxDate,selectsStart:i.props.selectsStart,selectsEnd:i.props.selectsEnd,selectsRange:i.props.selectsRange,startDate:i.props.startDate,endDate:i.props.endDate,excludeDates:i.props.excludeDates,excludeDateIntervals:i.props.excludeDateIntervals,filterDate:i.props.filterDate,onClickOutside:i.handleCalendarClickOutside,formatWeekNumber:i.props.formatWeekNumber,highlightDates:i.state.highlightDates,holidays:i.state.holidays,includeDates:i.props.includeDates,includeDateIntervals:i.props.includeDateIntervals,includeTimes:i.props.includeTimes,injectTimes:i.props.injectTimes,inline:i.props.inline,shouldFocusDayInline:i.state.shouldFocusDayInline,peekNextMonth:i.props.peekNextMonth,showMonthDropdown:i.props.showMonthDropdown,showPreviousMonths:i.props.showPreviousMonths,useShortMonthInDropdown:i.props.useShortMonthInDropdown,showMonthYearDropdown:i.props.showMonthYearDropdown,showWeekNumbers:i.props.showWeekNumbers,showYearDropdown:i.props.showYearDropdown,withPortal:i.props.withPortal,forceShowMonthNavigation:i.props.forceShowMonthNavigation,showDisabledMonthNavigation:i.props.showDisabledMonthNavigation,scrollableYearDropdown:i.props.scrollableYearDropdown,scrollableMonthYearDropdown:i.props.scrollableMonthYearDropdown,todayButton:i.props.todayButton,weekLabel:i.props.weekLabel,outsideClickIgnoreClass:Jt,fixedHeight:i.props.fixedHeight,monthsShown:i.props.monthsShown,monthSelectedIn:i.state.monthSelectedIn,onDropdownFocus:i.handleDropdownFocus,onMonthChange:i.props.onMonthChange,onYearChange:i.props.onYearChange,dayClassName:i.props.dayClassName,weekDayClassName:i.props.weekDayClassName,monthClassName:i.props.monthClassName,timeClassName:i.props.timeClassName,showDateSelect:i.props.showDateSelect,showTimeSelect:i.props.showTimeSelect,showTimeSelectOnly:i.props.showTimeSelectOnly,onTimeChange:i.handleTimeChange,timeFormat:i.props.timeFormat,timeIntervals:i.props.timeIntervals,minTime:i.props.minTime,maxTime:i.props.maxTime,excludeTimes:i.props.excludeTimes,filterTime:i.props.filterTime,timeCaption:i.props.timeCaption,className:i.props.calendarClassName,container:i.props.calendarContainer,yearItemNumber:i.props.yearItemNumber,yearDropdownItemNumber:i.props.yearDropdownItemNumber,previousMonthAriaLabel:i.props.previousMonthAriaLabel,previousMonthButtonLabel:i.props.previousMonthButtonLabel,nextMonthAriaLabel:i.props.nextMonthAriaLabel,nextMonthButtonLabel:i.props.nextMonthButtonLabel,previousYearAriaLabel:i.props.previousYearAriaLabel,previousYearButtonLabel:i.props.previousYearButtonLabel,nextYearAriaLabel:i.props.nextYearAriaLabel,nextYearButtonLabel:i.props.nextYearButtonLabel,timeInputLabel:i.props.timeInputLabel,disabledKeyboardNavigation:i.props.disabledKeyboardNavigation,renderCustomHeader:i.props.renderCustomHeader,popperProps:i.props.popperProps,renderDayContents:i.props.renderDayContents,renderMonthContent:i.props.renderMonthContent,renderQuarterContent:i.props.renderQuarterContent,renderYearContent:i.props.renderYearContent,onDayMouseEnter:i.props.onDayMouseEnter,onMonthMouseLeave:i.props.onMonthMouseLeave,onYearMouseEnter:i.props.onYearMouseEnter,onYearMouseLeave:i.props.onYearMouseLeave,selectsDisabledDaysInRange:i.props.selectsDisabledDaysInRange,showTimeInput:i.props.showTimeInput,showMonthYearPicker:i.props.showMonthYearPicker,showFullMonthYearPicker:i.props.showFullMonthYearPicker,showTwoColumnMonthYearPicker:i.props.showTwoColumnMonthYearPicker,showFourColumnMonthYearPicker:i.props.showFourColumnMonthYearPicker,showYearPicker:i.props.showYearPicker,showQuarterYearPicker:i.props.showQuarterYearPicker,showPopperArrow:i.props.showPopperArrow,excludeScrollbar:i.props.excludeScrollbar,handleOnKeyDown:i.props.onKeyDown,handleOnDayKeyDown:i.onDayKeyDown,isInputFocused:i.state.focused,customTimeInput:i.props.customTimeInput,setPreSelection:i.setPreSelection},i.props.children):null})),ye(ke(i),"renderAriaLiveRegion",(function(){var t,r=i.props,n=r.dateFormat,o=r.locale,a=i.props.showTimeInput||i.props.showTimeSelect?"PPPPp":"PPPP";return t=i.props.selectsRange?"Selected start date: ".concat(Oe(i.props.startDate,{dateFormat:a,locale:o}),". ").concat(i.props.endDate?"End date: "+Oe(i.props.endDate,{dateFormat:a,locale:o}):""):i.props.showTimeSelectOnly?"Selected time: ".concat(Oe(i.props.selected,{dateFormat:n,locale:o})):i.props.showYearPicker?"Selected year: ".concat(Oe(i.props.selected,{dateFormat:"yyyy",locale:o})):i.props.showMonthYearPicker?"Selected month: ".concat(Oe(i.props.selected,{dateFormat:"MMMM yyyy",locale:o})):i.props.showQuarterYearPicker?"Selected quarter: ".concat(Oe(i.props.selected,{dateFormat:"yyyy, QQQ",locale:o})):"Selected date: ".concat(Oe(i.props.selected,{dateFormat:a,locale:o})),React__default.createElement("span",{role:"alert","aria-live":"polite",className:"react-datepicker__aria-live"},t)})),ye(ke(i),"renderDateInput",(function(){var t,n=r(i.props.className,ye({},Jt,i.state.open)),o=i.props.customInput||React__default.createElement("input",{type:"text"}),a=i.props.customInputRef||"ref",s="string"==typeof i.props.value?i.props.value:"string"==typeof i.state.inputValue?i.state.inputValue:i.props.selectsRange?function(e,t,r){if(!e)return "";var n=Oe(e,r),o=t?Oe(t,r):"";return "".concat(n," - ").concat(o)}(i.props.startDate,i.props.endDate,i.props):Oe(i.props.selected,i.props);return React__default.cloneElement(o,(ye(t={},a,(function(e){i.input=e;})),ye(t,"value",s),ye(t,"onBlur",i.handleBlur),ye(t,"onChange",i.handleChange),ye(t,"onClick",i.onInputClick),ye(t,"onFocus",i.handleFocus),ye(t,"onKeyDown",i.onInputKeyDown),ye(t,"id",i.props.id),ye(t,"name",i.props.name),ye(t,"form",i.props.form),ye(t,"autoFocus",i.props.autoFocus),ye(t,"placeholder",i.props.placeholderText),ye(t,"disabled",i.props.disabled),ye(t,"autoComplete",i.props.autoComplete),ye(t,"className",r(o.props.className,n)),ye(t,"title",i.props.title),ye(t,"readOnly",i.props.readOnly),ye(t,"required",i.props.required),ye(t,"tabIndex",i.props.tabIndex),ye(t,"aria-describedby",i.props.ariaDescribedBy),ye(t,"aria-invalid",i.props.ariaInvalid),ye(t,"aria-labelledby",i.props.ariaLabelledBy),ye(t,"aria-required",i.props.ariaRequired),t))})),ye(ke(i),"renderClearButton",(function(){var t=i.props,r=t.isClearable,n=t.selected,o=t.startDate,a=t.endDate,s=t.clearButtonTitle,p=t.clearButtonClassName,c=void 0===p?"":p,l=t.ariaLabelClose,d=void 0===l?"Close":l;return !r||null==n&&null==o&&null==a?null:React__default.createElement("button",{type:"button",className:"react-datepicker__close-icon ".concat(c).trim(),"aria-label":d,onClick:i.onClearClick,title:s,tabIndex:-1})})),i.state=i.calcInitialState(),i}return fe(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!0);}},{key:"componentDidUpdate",value:function(e,t){var r,n;e.inline&&(r=e.selected,n=this.props.selected,r&&n?getMonth(r)!==getMonth(n)||getYear(r)!==getYear(n):r!==n)&&this.setPreSelection(this.props.selected),void 0!==this.state.monthSelectedIn&&e.monthsShown!==this.props.monthsShown&&this.setState({monthSelectedIn:0}),e.highlightDates!==this.props.highlightDates&&this.setState({highlightDates:vt(this.props.highlightDates)}),t.focused||Ve(e.selected,this.props.selected)||this.setState({inputValue:null}),t.open!==this.state.open&&(!1===t.open&&!0===this.state.open&&this.props.onCalendarOpen(),!0===t.open&&!1===this.state.open&&this.props.onCalendarClose());}},{key:"componentWillUnmount",value:function(){this.clearPreventFocusTimeout(),window.removeEventListener("scroll",this.onScroll,!0);}},{key:"renderInputContainer",value:function(){var t=this.props.showIcon;return React__default.createElement("div",{className:"react-datepicker__input-container".concat(t?" react-datepicker__view-calendar-icon":"")},t&&React__default.createElement("svg",{className:"react-datepicker__calendar-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},React__default.createElement("path",{d:"M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"})),this.state.isRenderAriaLiveMessage&&this.renderAriaLiveRegion(),this.renderDateInput(),this.renderClearButton())}},{key:"render",value:function(){var t=this.renderCalendar();if(this.props.inline)return t;if(this.props.withPortal){var r=this.state.open?React__default.createElement($t,{enableTabLoop:this.props.enableTabLoop},React__default.createElement("div",{className:"react-datepicker__portal",tabIndex:-1,onKeyDown:this.onPortalKeyDown},t)):null;return this.state.open&&this.props.portalId&&(r=React__default.createElement(Ut,{portalId:this.props.portalId,portalHost:this.props.portalHost},r)),React__default.createElement("div",null,this.renderInputContainer(),r)}return React__default.createElement(Gt,{className:this.props.popperClassName,wrapperClassName:this.props.wrapperClassName,hidePopper:!this.isCalendarOpen(),portalId:this.props.portalId,portalHost:this.props.portalHost,popperModifiers:this.props.popperModifiers,targetComponent:this.renderInputContainer(),popperContainer:this.props.popperContainer,popperComponent:t,popperPlacement:this.props.popperPlacement,popperProps:this.props.popperProps,popperOnKeyDown:this.onPopperKeyDown,enableTabLoop:this.props.enableTabLoop})}}],[{key:"defaultProps",get:function(){return {allowSameDay:!1,dateFormat:"MM/dd/yyyy",dateFormatCalendar:"LLLL yyyy",onChange:function(){},disabled:!1,disabledKeyboardNavigation:!1,dropdownMode:"scroll",onFocus:function(){},onBlur:function(){},onKeyDown:function(){},onInputClick:function(){},onSelect:function(){},onClickOutside:function(){},onMonthChange:function(){},onCalendarOpen:function(){},onCalendarClose:function(){},preventOpenOnFocus:!1,onYearChange:function(){},onInputError:function(){},monthsShown:1,readOnly:!1,withPortal:!1,selectsDisabledDaysInRange:!1,shouldCloseOnSelect:!0,showTimeSelect:!1,showTimeInput:!1,showPreviousMonths:!1,showMonthYearPicker:!1,showFullMonthYearPicker:!1,showTwoColumnMonthYearPicker:!1,showFourColumnMonthYearPicker:!1,showYearPicker:!1,showQuarterYearPicker:!1,strictParsing:!1,timeIntervals:30,timeCaption:"Time",previousMonthAriaLabel:"Previous Month",previousMonthButtonLabel:"Previous Month",nextMonthAriaLabel:"Next Month",nextMonthButtonLabel:"Next Month",previousYearAriaLabel:"Previous Year",previousYearButtonLabel:"Previous Year",nextYearAriaLabel:"Next Year",nextYearButtonLabel:"Next Year",timeInputLabel:"Time",enableTabLoop:!0,yearItemNumber:Ne,focusSelectedMonth:!1,showPopperArrow:!0,excludeScrollbar:!0,customTimeInput:null,calendarStartDay:void 0}}}]),s}(),tr="input",rr="navigate";

var CustomInput$1 = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  var onClick = props.onClick,
    width = props.width,
    value = props.value,
    onChange = props.onChange;
  return /*#__PURE__*/React__default.createElement(Container$5, {
    onClick: onClick,
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement(StyledInput, {
    width: width,
    type: "tex",
    value: value,
    onChange: onChange,
    ref: ref
  }), /*#__PURE__*/React__default.createElement(Right$1, null, /*#__PURE__*/React__default.createElement(Icon, {
    name: "Calendar",
    width: 24,
    height: 24
  })));
});
CustomInput$1.displayName = "CustomInput";
var Container$5 = newStyled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  z-index: 1;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0;\n  border-bottom: 1px solid #e0e0e0;\n  gap: 21px;\n\n  outline: none;\n\n  &:focus-within {\n    border-bottom: 1px solid #000;\n\n    input {\n      color: #212121;\n    }\n  }\n"], ["\n  z-index: 1;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0;\n  border-bottom: 1px solid #e0e0e0;\n  gap: 21px;\n\n  outline: none;\n\n  &:focus-within {\n    border-bottom: 1px solid #000;\n\n    input {\n      color: #212121;\n    }\n  }\n"])));
var StyledInput = newStyled.input(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  color: #9e9e9e;\n  flex-grow: 1;\n  border: none;\n  width: ", "px;\n\n  &:focus {\n    outline: none;\n  }\n"], ["\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  color: #9e9e9e;\n  flex-grow: 1;\n  border: none;\n  width: ", "px;\n\n  &:focus {\n    outline: none;\n  }\n"])), function (props) {
  return props.width;
});
var Right$1 = newStyled.div(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n  /* \uC544\uC774\uCF58 \uC2A4\uD0C0\uC77C \uC124\uC815 */\n  position: relative;\n  color: var(--gray-600, #62627d);\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n"], ["\n  /* \uC544\uC774\uCF58 \uC2A4\uD0C0\uC77C \uC124\uC815 */\n  position: relative;\n  color: var(--gray-600, #62627d);\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n"])));
var templateObject_1$k, templateObject_2$f, templateObject_3$e;

var convertToDate = function convertToDate(originDate, dateFormat) {
  if (dateFormat === void 0) {
    dateFormat = "yyyy-MM-dd";
  }
  return format(originDate, dateFormat);
};

var BasicDatePicker = function BasicDatePicker(props) {
  var _a = props.selected,
    selected = _a === void 0 ? new Date() : _a,
    onChangeSelected = props.onChangeSelected,
    _b = props.width,
    width = _b === void 0 ? 87 : _b,
    startDate = props.startDate,
    endDate = props.endDate,
    minDate = props.minDate,
    maxDate = props.maxDate,
    selectsStart = props.selectsStart,
    selectsEnd = props.selectsEnd,
    onOpenEnd = props.onOpenEnd,
    endRef = props.endRef;
  var datepickerRef = /*#__PURE__*/createRef();
  var openDatePicker = function openDatePicker() {
    if (datepickerRef.current) {
      datepickerRef.current.setOpen(true);
    }
  };
  var handleDateChange = function handleDateChange(date) {
    onChangeSelected(date);
    closeDatepicker();
    onOpenEnd === null || onOpenEnd === void 0 ? void 0 : onOpenEnd();
  };
  var closeDatepicker = function closeDatepicker() {
    if (endRef) {
      if (endRef.current) {
        endRef.current.setOpen(false);
      }
    }
    if (datepickerRef.current) {
      datepickerRef.current.setOpen(false);
    }
  };
  return /*#__PURE__*/React__default.createElement(StyledDatePickerBox, null, /*#__PURE__*/React__default.createElement(er, __assign({
    ref: endRef || datepickerRef,
    formatWeekDay: function formatWeekDay(nameOfDay) {
      return nameOfDay.substring(0, 3);
    },
    renderCustomHeader: function renderCustomHeader(_a) {
      var monthDate = _a.monthDate,
        decreaseMonth = _a.decreaseMonth,
        increaseMonth = _a.increaseMonth;
      return /*#__PURE__*/React__default.createElement(HeaderBox, null, /*#__PURE__*/React__default.createElement(ButtonWrapper$2, {
        onClick: decreaseMonth
      }, /*#__PURE__*/React__default.createElement(Icon, {
        name: "DirectionLeft",
        width: 24,
        height: 24,
        fill: "#9E9E9E"
      })), /*#__PURE__*/React__default.createElement(Typography, {
        color: "#212121",
        size: 16,
        weight: 700,
        height: 24,
        align: "center"
      }, monthDate.toLocaleString("ko-KR", {
        month: "long"
      })), /*#__PURE__*/React__default.createElement(ButtonWrapper$2, {
        onClick: increaseMonth
      }, /*#__PURE__*/React__default.createElement(Icon, {
        name: "DirectionRight",
        width: 24,
        height: 24,
        fill: "#9E9E9E"
      })));
    },
    dayClassName: function dayClassName(d) {
      return d.getDate() === selected.getDate() ? "custom-day selected-day" : "custom-day";
    },
    selected: selected,
    shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
    : true,
    onChange: handleDateChange,
    dateFormat: "yyyy-MM-dd",
    customInput: /*#__PURE__*/React__default.createElement(CustomInput$1, {
      width: width,
      value: convertToDate(selected),
      onClick: openDatePicker,
      onChange: function onChange() {}
    }),
    startDate: startDate,
    endDate: endDate
  }, minDate ? {
    minDate: minDate
  } : {}, maxDate ? {
    maxDate: maxDate
  } : {}, selectsStart ? {
    selectsStart: selectsStart
  } : {}, selectsEnd ? {
    selectsEnd: selectsEnd
  } : {})));
};
BasicDatePicker.displayName = "BasicDatePicker";
var StyledDatePickerBox = newStyled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject([""], [""])));
var HeaderBox = newStyled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  display: flex;\n  align-self: stretch;\n  justify-content: space-between;\n  background-color: #fff;\n  padding: 24px 24px 20px 24px;\n"], ["\n  display: flex;\n  align-self: stretch;\n  justify-content: space-between;\n  background-color: #fff;\n  padding: 24px 24px 20px 24px;\n"])));
var ButtonWrapper$2 = newStyled.div(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var templateObject_1$j, templateObject_2$e, templateObject_3$d;

var RangeDatePicker = function RangeDatePicker(_a) {
  var _b = _a.gap,
    gap = _b === void 0 ? 16 : _b,
    startDate = _a.startDate,
    setStartDate = _a.setStartDate,
    endDate = _a.endDate,
    setEndDate = _a.setEndDate;
  var endRef = useRef(null);
  var handleOpenEnd = function handleOpenEnd() {
    if (endRef.current) {
      endRef.current.setOpen(true);
    }
  };
  var handleChangeStartSelected = function handleChangeStartSelected(date) {
    setStartDate(date);
  };
  var handleChangeEndSelected = function handleChangeEndSelected(date) {
    setEndDate(date);
  };
  return /*#__PURE__*/React__default.createElement(DualDatePickerBox, {
    gap: gap
  }, /*#__PURE__*/React__default.createElement(BasicDatePicker, {
    selected: startDate,
    onChangeSelected: handleChangeStartSelected,
    selectsStart: true,
    startDate: startDate,
    endDate: endDate,
    maxDate: endDate,
    onOpenEnd: handleOpenEnd
  }), /*#__PURE__*/React__default.createElement(Typography, {
    color: "#000",
    size: 16,
    weight: 400,
    height: 24
  }, "~"), /*#__PURE__*/React__default.createElement(BasicDatePicker, {
    selected: endDate,
    onChangeSelected: handleChangeEndSelected,
    selectsEnd: true,
    startDate: startDate,
    endDate: endDate,
    minDate: startDate,
    endRef: endRef
  }));
};
var DualDatePickerBox = newStyled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  display: flex;\n  gap: ", "px;\n  align-items: center;\n"], ["\n  display: flex;\n  gap: ", "px;\n  align-items: center;\n"])), function (props) {
  return props.gap;
});
var templateObject_1$i;

var UnCheckedIcon = encodeURIComponent("\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"20\" height=\"20\" fill=\"white\"/>\n<circle cx=\"10\" cy=\"10\" r=\"9\" stroke=\"#E0E0E0\" stroke-width=\"2\"/>\n</svg>\n\n");
var CheckedIcon = encodeURIComponent("\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"10\" cy=\"10\" r=\"10\" fill=\"#212121\"/>\n<circle cx=\"10\" cy=\"10\" r=\"4\" fill=\"white\"/>\n</svg>\n");

var Radio = function Radio(_a) {
  var list = _a.list,
    value = _a.value,
    _onChange = _a.onChange,
    column = _a.column,
    width = _a.width,
    height = _a.height,
    _b = _a.gap,
    gap = _b === void 0 ? 8 : _b,
    _c = _a.contentGap,
    contentGap = _c === void 0 ? 8 : _c;
  return /*#__PURE__*/React__default.createElement(Spacing, {
    column: column,
    align: "center",
    gap: gap
  }, list.map(function (object, index) {
    return /*#__PURE__*/React__default.createElement(StyledLabel, {
      contentGap: contentGap,
      htmlFor: object.label,
      key: index
    }, /*#__PURE__*/React__default.createElement(StyledRadio, {
      width: width,
      height: height,
      type: "radio",
      value: object.value,
      checked: object.value === value,
      onChange: function onChange() {
        return _onChange(object.value);
      },
      id: object.label,
      disabled: object.disabled
    }), object.label);
  }));
};
var StyledRadio = newStyled.input(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n  appearance: none; // IE11\uC740 \uC9C0\uC6D0 \uC548 \uB428..\n  margin: 0;\n  cursor: pointer;\n\n  ", ";\n\n  ", ";\n  background-image: url(\"data:image/svg+xml;charset=utf8,", "\");\n\n  &:checked {\n    border-color: transparent;\n    background-image: url(\"data:image/svg+xml;charset=utf8,", "\");\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n  }\n\n  &:not(:checked) {\n    border-color: transparent;\n    background-image: url(\"data:image/svg+xml;charset=utf8,", "\");\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n  }\n"], ["\n  appearance: none; // IE11\uC740 \uC9C0\uC6D0 \uC548 \uB428..\n  margin: 0;\n  cursor: pointer;\n\n  ", ";\n\n  ", ";\n  background-image: url(\"data:image/svg+xml;charset=utf8,", "\");\n\n  &:checked {\n    border-color: transparent;\n    background-image: url(\"data:image/svg+xml;charset=utf8,", "\");\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n  }\n\n  &:not(:checked) {\n    border-color: transparent;\n    background-image: url(\"data:image/svg+xml;charset=utf8,", "\");\n    background-size: 100% 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n  }\n"])), function (props) {
  return props.width ? css(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n          width: ", "px;\n        "], ["\n          width: ", "px;\n        "])), props.width) : css(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n          width: 24px;\n        "], ["\n          width: 24px;\n        "])));
}, function (props) {
  return props.height ? css(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n          height: ", "px;\n        "], ["\n          height: ", "px;\n        "])), props.height) : css(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n          height: 24px;\n        "], ["\n          height: 24px;\n        "])));
}, UnCheckedIcon, CheckedIcon, UnCheckedIcon);
var StyledLabel = newStyled.label(templateObject_6$8 || (templateObject_6$8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  cursor: pointer;\n  gap: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  cursor: pointer;\n  gap: ", "px;\n"])), function (props) {
  return props.contentGap;
});
var templateObject_1$h, templateObject_2$d, templateObject_3$c, templateObject_4$8, templateObject_5$8, templateObject_6$8;

var options = [{
  label: "AM",
  value: "am"
}, {
  label: "PM",
  value: "pm"
}];
var hourList = [{
  value: "1",
  item: "01"
}, {
  value: "2",
  item: "02"
}, {
  value: "3",
  item: "03"
}, {
  value: "4",
  item: "04"
}, {
  value: "5",
  item: "05"
}, {
  value: "6",
  item: "06"
}, {
  value: "7",
  item: "07"
}, {
  value: "8",
  item: "08"
}, {
  value: "9",
  item: "09"
}, {
  value: "10",
  item: "10"
}, {
  value: "11",
  item: "11"
}, {
  value: "12",
  item: "12"
}];
var minuteList = [{
  value: "0",
  item: "00"
}, {
  value: "10",
  item: "10"
}, {
  value: "20",
  item: "20"
}, {
  value: "30",
  item: "30"
}, {
  value: "40",
  item: "40"
}, {
  value: "50",
  item: "50"
}];
var formatWithHour = function formatWithHour(value) {
  return value > 12 ? "".concat(value - 12) : value < 10 ? "0".concat(value) : value.toString();
};
var formatWithMinute = function formatWithMinute(value) {
  return value < 10 ? "00" : "".concat(value.toString()[0], "0");
};
var TimePicker = function TimePicker(_a) {
  var selected = _a.selected,
    setSelected = _a.setSelected,
    _b = _a.radioGap,
    radioGap = _b === void 0 ? 8 : _b,
    _c = _a.contentGap,
    contentGap = _c === void 0 ? 25 : _c,
    _d = _a.valueWidth,
    valueWidth = _d === void 0 ? 80 : _d,
    onChangeSelected = _a.onChangeSelected;
  var _e = useState(selected.getHours() > 12 ? "pm" : "am"),
    timeType = _e[0],
    setTimeType = _e[1];
  var _f = useState({
      value: formatWithHour(selected.getHours()),
      item: "".concat(formatWithHour(selected.getHours()))
    }),
    hour = _f[0],
    setHour = _f[1];
  var _g = useState({
      value: formatWithMinute(selected.getMinutes()),
      item: formatWithMinute(selected.getMinutes())
    }),
    minute = _g[0],
    setMinute = _g[1];
  var handleChangeTimeType = function handleChangeTimeType(value) {
    var newSelected = selected;
    setTimeType(value);
    if (value === "am" && selected.getHours() > 12) {
      newSelected.setHours(selected.getHours() - 12);
      onChangeSelected === null || onChangeSelected === void 0 ? void 0 : onChangeSelected(newSelected);
      setSelected === null || setSelected === void 0 ? void 0 : setSelected(newSelected);
    }
    if (value === "pm" && selected.getHours() < 12) {
      newSelected.setHours(selected.getHours() + 12);
      onChangeSelected === null || onChangeSelected === void 0 ? void 0 : onChangeSelected(newSelected);
      setSelected === null || setSelected === void 0 ? void 0 : setSelected(newSelected);
    }
  };
  var handleChangeHour = function handleChangeHour(value) {
    var newSelected = selected;
    newSelected.setHours(timeType === "am" ? Number(value) : Number(value) + 12);
    onChangeSelected === null || onChangeSelected === void 0 ? void 0 : onChangeSelected(newSelected);
    setSelected === null || setSelected === void 0 ? void 0 : setSelected(newSelected);
  };
  var handleChangeMinute = function handleChangeMinute(value) {
    var newSelected = selected;
    newSelected.setMinutes(Number(formatWithMinute(Number(value))));
    onChangeSelected === null || onChangeSelected === void 0 ? void 0 : onChangeSelected(newSelected);
    setSelected === null || setSelected === void 0 ? void 0 : setSelected(newSelected);
  };
  return /*#__PURE__*/React__default.createElement(TimePickerBox, {
    gap: contentGap
  }, /*#__PURE__*/React__default.createElement(Radio, {
    gap: radioGap,
    width: 20,
    height: 20,
    list: options,
    onChange: handleChangeTimeType,
    value: timeType
  }), /*#__PURE__*/React__default.createElement(Spacing, {
    gap: 8,
    align: "center"
  }, /*#__PURE__*/React__default.createElement(DropDown, {
    width: valueWidth,
    height: 20,
    main: hour,
    setMain: setHour,
    list: hourList,
    onChange: handleChangeHour
  }), /*#__PURE__*/React__default.createElement(Typography, {
    color: "#000",
    size: 20,
    weight: 700,
    height: 30
  }, ":"), /*#__PURE__*/React__default.createElement(DropDown, {
    width: valueWidth,
    height: 20,
    main: minute,
    setMain: setMinute,
    list: minuteList,
    onChange: handleChangeMinute
  })));
};
var TimePickerBox = newStyled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  display: flex;\n  gap: ", "px;\n"], ["\n  display: flex;\n  gap: ", "px;\n"])), function (props) {
  return props.gap;
});
var templateObject_1$g;

var Filter = function Filter(_a) {
  var content = _a.content;
  var _b = useState(false),
    rotated = _b[0],
    setRotated = _b[1];
  var handleRotated = function handleRotated() {
    setRotated(!rotated);
  };
  return /*#__PURE__*/React__default.createElement(Wrapper$2, null, /*#__PURE__*/React__default.createElement(Container$4, {
    onClick: handleRotated
  }, /*#__PURE__*/React__default.createElement(Text, null, content), /*#__PURE__*/React__default.createElement(Icon, {
    name: "DirectionDown",
    rotated: rotated,
    width: 12,
    height: 8
  })));
};
var Wrapper$2 = newStyled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  display: flex;\n  margin: 0 auto;\n  align-items: center;\n"], ["\n  display: flex;\n  margin: 0 auto;\n  align-items: center;\n"])));
var Container$4 = newStyled.div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n"])));
var Text = newStyled.span(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n"], ["\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n"])));
var templateObject_1$f, templateObject_2$c, templateObject_3$b;

var decimalNumberRegex = /^[0-9]*$/;

var FormItem = function FormItem(_a) {
  var title = _a.title,
    placeholder = _a.placeholder,
    value = _a.value,
    onChange = _a.onChange,
    required = _a.required,
    regex = _a.regex,
    type = _a.type;
  var handleOnChange = function handleOnChange(value) {
    if (regex) {
      switch (type) {
        case "number":
          if (decimalNumberRegex.test(value)) {
            onChange(value);
          } else {
            return;
          }
          return;
        default:
          onChange(value);
      }
    } else {
      onChange(value);
    }
  };
  return /*#__PURE__*/React__default.createElement(Spacing, {
    gap: 10,
    align: "center"
  }, /*#__PURE__*/React__default.createElement(TitleWrapper$1, null, title && title, required && /*#__PURE__*/React__default.createElement(Typography, {
    align: "center",
    size: 24,
    color: "#ff7f00"
  }, "*")), /*#__PURE__*/React__default.createElement(FormContainer$1, null, /*#__PURE__*/React__default.createElement(TextInput, {
    type: type || "text",
    placeholder: placeholder || "",
    value: value,
    onChange: handleOnChange
  })));
};
var FormContainer$1 = newStyled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 400px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 400px;\n"])));
var TitleWrapper$1 = newStyled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  display: flex;\n  gap: 5px;\n  width: 100px;\n  align-items: center;\n"], ["\n  display: flex;\n  gap: 5px;\n  width: 100px;\n  align-items: center;\n"])));
var templateObject_1$e, templateObject_2$b;

var Form = function Form(_a) {
  var gap = _a.gap,
    onClick = _a.onClick,
    button = _a.button,
    children = _a.children;
  return /*#__PURE__*/React__default.createElement(FormContainer, null, /*#__PURE__*/React__default.createElement(Spacing, {
    gap: gap,
    align: "center",
    column: true
  }, children), /*#__PURE__*/React__default.createElement(ButtonContainer, null, /*#__PURE__*/React__default.createElement(ButtonWrapper$1, null, button && React__default.Children.map(button, function (child) {
    if ( /*#__PURE__*/React__default.isValidElement(child)) {
      return /*#__PURE__*/React__default.cloneElement(child, [{
        onClick: onClick
      }]);
    }
    return child;
  }))));
};
var FormContainer = newStyled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n"])));
var ButtonContainer = newStyled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var ButtonWrapper$1 = newStyled.div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  width: 200px;\n"], ["\n  width: 200px;\n"])));
var templateObject_1$d, templateObject_2$a, templateObject_3$a;

var ProgressBar = function ProgressBar(_a) {
  var _b = _a.width,
    width = _b === void 0 ? 0 : _b,
    _c = _a.height,
    height = _c === void 0 ? 36 : _c,
    _d = _a.handleOnCancel,
    handleOnCancel = _d === void 0 ? function () {} : _d;
  return /*#__PURE__*/React__default.createElement(BarBox, {
    height: height
  }, /*#__PURE__*/React__default.createElement(Bar, {
    width: width,
    height: height
  }), /*#__PURE__*/React__default.createElement(StyledCloseIcon$1, {
    onClick: handleOnCancel
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "Close",
    width: 24,
    height: 24,
    fill: "#9e9e9e"
  })));
};
var BarBox = newStyled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: ", "px;\n  border: 1px solid #f5f5f5;\n  background: #fff;\n  z-index: 10;\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: ", "px;\n  border: 1px solid #f5f5f5;\n  background: #fff;\n  z-index: 10;\n"])), function (props) {
  return props.height;
});
var Bar = newStyled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  width: ", "%;\n  height: ", "px;\n  border: 1px solid #f5f5f5;\n  background-color: #f5f5f5;\n"], ["\n  width: ", "%;\n  height: ", "px;\n  border: 1px solid #f5f5f5;\n  background-color: #f5f5f5;\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});
var StyledCloseIcon$1 = newStyled.div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n"], ["\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n"])));
var templateObject_1$c, templateObject_2$9, templateObject_3$9;

var ImageUploader = function ImageUploader(_a) {
  var _b = _a.width,
    width = _b === void 0 ? 416 : _b,
    _c = _a.height,
    height = _c === void 0 ? 200 : _c,
    _d = _a.handleUpload,
    handleUpload = _d === void 0 ? function () {} : _d,
    body = _a.body,
    selectedImage = _a.selectedImage,
    setSelectedImage = _a.setSelectedImage,
    _e = _a.handleCancel,
    handleCancel = _e === void 0 ? function () {} : _e,
    isProgress = _a.isProgress,
    _f = _a.progressPercent,
    progressPercent = _f === void 0 ? 0 : _f;
  var inputRef = useRef(null);
  var _g = useState(null),
    previewImage = _g[0],
    setPreviewImage = _g[1];
  var handleImageChange = useCallback(function (e) {
    var _a;
    e.preventDefault();
    var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setSelectedImage(file);
    }
  }, [selectedImage, previewImage]);
  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setSelectedImage(file);
    }
  };
  var handleDragOver = useCallback(function (e) {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  var handleImageUploaderClick = function handleImageUploaderClick() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  useEffect(function () {
    if (!selectedImage) {
      setPreviewImage(null);
      if (inputRef.current) inputRef.current.value = "";
    }
    if (selectedImage) handleUpload();
  }, [selectedImage]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, body && /*#__PURE__*/React__default.createElement("div", {
    onDrop: handleDrop,
    onClick: handleImageUploaderClick,
    onDragOver: handleDragOver
  }, body), !body && /*#__PURE__*/React__default.createElement(DefaultUploadBox, {
    width: width,
    height: height,
    onDrop: handleDrop,
    onDragOver: handleDragOver
  }, previewImage ? /*#__PURE__*/React__default.createElement(CustomImage, {
    width: width - width / 1.77,
    height: height - height / 2.6,
    src: previewImage,
    alt: "Uploaded"
  }) : /*#__PURE__*/React__default.createElement(ImageWrapper, {
    isSelected: !!selectedImage
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "Cloud",
    width: 36,
    height: 36,
    fill: "#E0E0E0"
  }), /*#__PURE__*/React__default.createElement(Spacing, {
    gap: 14,
    column: true,
    align: "center"
  }, /*#__PURE__*/React__default.createElement(Typography, {
    whiteSpace: "pre-line",
    color: "#9e9e9e",
    size: 14,
    weight: 400,
    height: 21,
    align: "center"
  }, "여기로 이미지를 드래그하거나\n파일을 업로드 하세요."), /*#__PURE__*/React__default.createElement(Button, {
    onClick: handleImageUploaderClick,
    custom: {
      background: "#616161",
      padding: "10px 34px",
      borderRadius: 100,
      width: true,
      fontColor: "#fff",
      fontSize: "14px",
      fontWeight: 400
    }
  }, "\uC5C5\uB85C\uB4DC"))), isProgress && /*#__PURE__*/React__default.createElement(ProgressBarBox, null, /*#__PURE__*/React__default.createElement(ProgressBar, {
    width: progressPercent,
    handleOnCancel: handleCancel
  })), selectedImage && !isProgress && /*#__PURE__*/React__default.createElement(ImageNameBox, null, /*#__PURE__*/React__default.createElement(ImageNameWrapper, null, /*#__PURE__*/React__default.createElement(Typography, {
    color: "#616161",
    size: 14,
    weight: 400,
    height: 21
  }, selectedImage ? selectedImage.name : "")), /*#__PURE__*/React__default.createElement(StyledCloseIcon, {
    onClick: handleCancel
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "Close",
    width: 24,
    height: 24,
    fill: "#9e9e9e"
  })))), /*#__PURE__*/React__default.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: "image/*",
    onChange: handleImageChange,
    style: {
      display: "none"
    }
  }));
};
var DefaultUploadBox = newStyled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  border: 1px solid #e0e0e0e0;\n  display: flex;\n  padding: 8px 0;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n"], ["\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  border: 1px solid #e0e0e0e0;\n  display: flex;\n  padding: 8px 0;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});
var ProgressBarBox = newStyled.div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  width: 96%;\n  position: absolute;\n  bottom: 0;\n  padding: 0 8px 8px 8px;\n"], ["\n  width: 96%;\n  position: absolute;\n  bottom: 0;\n  padding: 0 8px 8px 8px;\n"])));
var ImageWrapper = newStyled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  position: absolute;\n  top: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  position: absolute;\n  top: ", "px;\n"])), function (props) {
  return props.isSelected ? 16 : 32;
});
var CustomImage = newStyled.img(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  position: absolute;\n  top: 16px;\n"], ["\n  position: absolute;\n  top: 16px;\n"])));
var ImageNameBox = newStyled.div(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  width: 96%;\n  height: 36px;\n  bottom: 8px;\n  border: 1px solid #f5f5f5;\n  background: #fff;\n"], ["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  width: 96%;\n  height: 36px;\n  bottom: 8px;\n  border: 1px solid #f5f5f5;\n  background: #fff;\n"])));
var ImageNameWrapper = newStyled.div(templateObject_6$7 || (templateObject_6$7 = __makeTemplateObject(["\n  width: 100%;\n  height: 36px;\n  border: 1px solid #f5f5f5;\n  background-color: #f5f5f5;\n  display: flex;\n  align-items: center;\n  padding: 0 0 0 8px;\n"], ["\n  width: 100%;\n  height: 36px;\n  border: 1px solid #f5f5f5;\n  background-color: #f5f5f5;\n  display: flex;\n  align-items: center;\n  padding: 0 0 0 8px;\n"])));
var StyledCloseIcon = newStyled.div(templateObject_7$6 || (templateObject_7$6 = __makeTemplateObject(["\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n"], ["\n  cursor: pointer;\n  position: absolute;\n  right: 5px;\n"])));
var templateObject_1$b, templateObject_2$8, templateObject_3$8, templateObject_4$7, templateObject_5$7, templateObject_6$7, templateObject_7$6;

var TextInput = function TextInput(_a) {
  var type = _a.type,
    _b = _a.placeholder,
    placeholder = _b === void 0 ? "" : _b,
    _c = _a.variant,
    variant = _c === void 0 ? "Outlined" : _c,
    _d = _a.value,
    value = _d === void 0 ? "" : _d,
    title = _a.title,
    _e = _a.disabled,
    disabled = _e === void 0 ? false : _e,
    _f = _a.error,
    error = _f === void 0 ? false : _f,
    _g = _a.errorMessage,
    errorMessage = _g === void 0 ? "error" : _g,
    _h = _a.onChange,
    onChange = _h === void 0 ? function () {} : _h,
    _j = _a.onKeyDown,
    onKeyDown = _j === void 0 ? function (e) {} : _j,
    _k = _a.width,
    width = _k === void 0 ? 300 : _k,
    _l = _a.isIconVisible,
    isIconVisible = _l === void 0 ? true : _l;
  var stringField = type === "text";
  var _m = useState(false),
    eye = _m[0],
    setEye = _m[1];
  var handleEyeChange = function handleEyeChange() {
    setEye(!eye);
  };
  var rightIcon = function rightIcon() {
    if (value.length === 0) return null;
    switch (type) {
      case "password":
        return /*#__PURE__*/React__default.createElement(ButtonWrapper, {
          type: "button",
          onClick: handleEyeChange
        }, eye ? /*#__PURE__*/React__default.createElement(Icon, {
          name: "EyeOff",
          width: 24,
          height: 24
        }) : /*#__PURE__*/React__default.createElement(Icon, {
          name: "EyeOn",
          width: 24,
          height: 24
        }));
      default:
        return /*#__PURE__*/React__default.createElement(ButtonWrapper, {
          type: "button",
          onClick: function onClick() {
            return onChange("");
          }
        }, /*#__PURE__*/React__default.createElement(Icon, {
          name: "Close",
          width: 24,
          height: 24,
          fill: "#9E9E9E"
        }));
    }
  };
  var handleKeyPress = function handleKeyPress(e) {
    if (e.key === "Enter") ;
  };
  var handleChange = function handleChange(e) {
    onChange(e.target.value);
  };
  return /*#__PURE__*/React__default.createElement(Wrapper$1, null, value.length > 0 && title && /*#__PURE__*/React__default.createElement(TitleWrapper, null, /*#__PURE__*/React__default.createElement(Typography, {
    size: 12,
    weight: 400,
    height: 18,
    color: "#9e9e9e"
  }, title)), /*#__PURE__*/React__default.createElement(Container$3, {
    type: type,
    variant: variant,
    disabled: disabled,
    error: error,
    width: width
  }, /*#__PURE__*/React__default.createElement(CustomInput, {
    onKeyDown: onKeyDown,
    width: width,
    variant: variant,
    type: eye ? "text" : type,
    stringField: stringField,
    disabled: disabled,
    error: error,
    placeholder: placeholder,
    onChange: handleChange,
    mode: type,
    value: value,
    onKeyUp: function onKeyUp(e) {
      return handleKeyPress(e);
    }
  }), isIconVisible && /*#__PURE__*/React__default.createElement(Right, null, rightIcon())), error && /*#__PURE__*/React__default.createElement(ErrorMessage, null, errorMessage));
};
var Wrapper$1 = newStyled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  gap: 6px;\n"], ["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  gap: 6px;\n"])));
var Container$3 = newStyled.div(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  height: 36px;\n  display: flex;\n  padding: 8px 0;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 6px;\n  width: ", "px;\n\n  gap: 10px;\n\n  ", "\n\n  ", "\n"], ["\n  height: 36px;\n  display: flex;\n  padding: 8px 0;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 6px;\n  width: ", "px;\n\n  gap: 10px;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.width;
}, function (_a) {
  var variant = _a.variant,
    error = _a.error;
  switch (variant) {
    case "Outlined":
      return error ? css(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n              border: 1px solid red;\n            "], ["\n              border: 1px solid red;\n            "]))) : css(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n              border: 1px solid #e0e0e0;\n\n              &:hover {\n                border: 1px solid #000;\n              }\n\n              &:focus-within {\n                border: 1px solid #000;\n              }\n            "], ["\n              border: 1px solid #e0e0e0;\n\n              &:hover {\n                border: 1px solid #000;\n              }\n\n              &:focus-within {\n                border: 1px solid #000;\n              }\n            "])));
    case "Filled":
      return error ? css(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n              border-radius: 0;\n              border-bottom: 1px solid red;\n            "], ["\n              border-radius: 0;\n              border-bottom: 1px solid red;\n            "]))) : css(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n              border-radius: 0;\n              border-bottom: 1px solid #e0e0e0;\n\n              &:hover {\n                border-bottom: 1px solid #000;\n              }\n\n              &:focus-within {\n                border-bottom: 1px solid #000;\n              }\n            "], ["\n              border-radius: 0;\n              border-bottom: 1px solid #e0e0e0;\n\n              &:hover {\n                border-bottom: 1px solid #000;\n              }\n\n              &:focus-within {\n                border-bottom: 1px solid #000;\n              }\n            "])));
    default:
      return error ? css(templateObject_6$6 || (templateObject_6$6 = __makeTemplateObject(["\n              border: 1px solid red;\n            "], ["\n              border: 1px solid red;\n            "]))) : css(templateObject_7$5 || (templateObject_7$5 = __makeTemplateObject(["\n              border: 1px solid #e0e0e0;\n\n              &:hover {\n                border: 1px solid #000;\n              }\n\n              &:focus-within {\n                border: 1px solid #000;\n              }\n            "], ["\n              border: 1px solid #e0e0e0;\n\n              &:hover {\n                border: 1px solid #000;\n              }\n\n              &:focus-within {\n                border: 1px solid #000;\n              }\n            "])));
  }
}, function (props) {
  return props.disabled && css(templateObject_8$3 || (templateObject_8$3 = __makeTemplateObject(["\n      border: 0;\n      background: #22222c;\n    "], ["\n      border: 0;\n      background: #22222c;\n    "])));
});
var CustomInput = newStyled.input(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", "\n\n  border: none;\n  background: rgba(0, 0, 0, 0);\n\n  &:focus {\n    outline: none;\n  }\n\n  position: relative;\n\n  outline: none;\n  width: ", "px;\n  height: 32px;\n  caret-color: ", ";\n  color: #000;\n  font-style: normal;\n  line-height: normal;\n\n  font-size: 16px;\n  font-weight: 500;\n\n  ", "\n  &::placeholder {\n    font-size: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n  }\n"], ["\n  ", "\n\n  border: none;\n  background: rgba(0, 0, 0, 0);\n\n  &:focus {\n    outline: none;\n  }\n\n  position: relative;\n\n  outline: none;\n  width: ", "px;\n  height: 32px;\n  caret-color: ", ";\n  color: #000;\n  font-style: normal;\n  line-height: normal;\n\n  font-size: 16px;\n  font-weight: 500;\n\n  ", "\n  &::placeholder {\n    font-size: 16px;\n    font-weight: 400;\n    color: #9e9e9e;\n  }\n"])), function (props) {
  return props.variant !== "Filled" && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      padding: 0 8px;\n    "], ["\n      padding: 0 8px;\n    "])));
}, function (props) {
  return props.width - 40;
}, function (props) {
  return props.error ? css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["#d33b55"], ["#d33b55"]))) : css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["#9233ee"], ["#9233ee"])));
}, function (props) {
  return props.disabled && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      background: #22222c;\n    "], ["\n      background: #22222c;\n    "])));
});
var Right = newStyled.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  /* \uC544\uC774\uCF58 \uC2A4\uD0C0\uC77C \uC124\uC815 */\n  position: relative;\n  right: 20px;\n  color: var(--gray-600, #62627d);\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n"], ["\n  /* \uC544\uC774\uCF58 \uC2A4\uD0C0\uC77C \uC124\uC815 */\n  position: relative;\n  right: 20px;\n  color: var(--gray-600, #62627d);\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n"])));
var ErrorMessage = newStyled.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  position: absolute;\n  bottom: -20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  align-self: stretch;\n  color: red;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n"], ["\n  position: absolute;\n  bottom: -20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  align-self: stretch;\n  color: red;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n"])));
var TitleWrapper = newStyled.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  position: absolute;\n  top: -8px;\n  left: 0;\n"], ["\n  position: absolute;\n  top: -8px;\n  left: 0;\n"])));
var ButtonWrapper = newStyled.button(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  background-color: transparent;\n  border: 0;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"], ["\n  background-color: transparent;\n  border: 0;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"])));
var templateObject_1$a, templateObject_2$7, templateObject_3$7, templateObject_4$6, templateObject_5$6, templateObject_6$6, templateObject_7$5, templateObject_8$3, templateObject_9$1, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;

var FullSizeLayout = function FullSizeLayout(_a) {
  var children = _a.children,
    headerTitle = _a.headerTitle,
    headerTab = _a.headerTab,
    previousPage = _a.previousPage,
    _b = _a.AdditionalTab,
    AdditionalTab = _b === void 0 ? 0 : _b;
  var handleClick = function handleClick() {
    console.log("Click!");
  };
  useEffect(function () {
    document.body.style.overflow = "hidden";
    return function () {
      document.body.style.overflow = "auto";
    };
  }, []);
  return /*#__PURE__*/React__default.createElement(Layout$1, null, /*#__PURE__*/React__default.createElement(Header$1, null, headerTab && headerTab, previousPage ? /*#__PURE__*/React__default.createElement(PreviousIconWrapper$1, {
    onClick: handleClick
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "DirectionLeft",
    width: 12,
    height: 20
  })) : /*#__PURE__*/React__default.createElement(CloseIconWrapper$1, {
    onClick: handleClick
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "Close",
    width: 20,
    height: 20
  })), /*#__PURE__*/React__default.createElement(Typography, {
    color: "#ffffff",
    size: 20,
    weight: 700,
    height: 24
  }, headerTitle)), /*#__PURE__*/React__default.createElement(MainContainer$1, {
    AdditionalTab: AdditionalTab
  }, children));
};
var Layout$1 = newStyled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #121217;\n  z-index: 999;\n"], ["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #121217;\n  z-index: 999;\n"])));
var Header$1 = newStyled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 62px;\n  color: #ffffff;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 62px;\n  color: #ffffff;\n"])));
var CloseIconWrapper$1 = newStyled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: absolute;\n  top: 21px;\n  right: 21px;\n"], ["\n  position: absolute;\n  top: 21px;\n  right: 21px;\n"])));
var PreviousIconWrapper$1 = newStyled.div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 21px;\n  left: 21px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  top: 21px;\n  left: 21px;\n  cursor: pointer;\n"])));
var MainContainer$1 = newStyled.main(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n  overflow-y: scroll;\n  color: #fff;\n\n  ", "\n"], ["\n  overflow-y: scroll;\n  color: #fff;\n\n  ", "\n"])), function (props) {
  return props.AdditionalTab ? css(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n          height: calc(100dvh - 62px - ", "px);\n        "], ["\n          height: calc(100dvh - 62px - ", "px);\n        "])), props.AdditionalTab) : css(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n          height: calc(100dvh - 62px);\n        "], ["\n          height: calc(100dvh - 62px);\n        "])));
});
var templateObject_1$9, templateObject_2$6, templateObject_3$6, templateObject_4$5, templateObject_5$5, templateObject_6$5, templateObject_7$4;

var FullSizeModalLayout = function FullSizeModalLayout(_a) {
  var children = _a.children,
    headerTitle = _a.headerTitle,
    isBottom = _a.isBottom,
    bottomButton = _a.bottomButton,
    _b = _a.previousPage,
    previousPage = _b === void 0 ? false : _b,
    onClose = _a.onClose;
  var handleClose = useCallback(function () {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  }, [onClose]);
  return /*#__PURE__*/React__default.createElement(Layout, null, /*#__PURE__*/React__default.createElement(Header, null, previousPage ? /*#__PURE__*/React__default.createElement(PreviousIconWrapper, {
    onClick: handleClose
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "DirectionLeft",
    width: 12,
    height: 20
  })) : /*#__PURE__*/React__default.createElement(CloseIconWrapper, {
    onClick: handleClose
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "CloseBig",
    width: 20,
    height: 20
  })), /*#__PURE__*/React__default.createElement(Typography, {
    color: "#ffffff",
    size: 20,
    weight: 700,
    height: 24
  }, headerTitle)), /*#__PURE__*/React__default.createElement(MainContainer, {
    isBottom: isBottom
  }, children), bottomButton && /*#__PURE__*/React__default.createElement(BottomButtonWrapper, null, bottomButton));
};
var Layout = newStyled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #121217;\n  z-index: 999;\n"], ["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #121217;\n  z-index: 999;\n"])));
var Header = newStyled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 62px;\n  color: #ffffff;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 62px;\n  color: #ffffff;\n"])));
var CloseIconWrapper = newStyled.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 21px;\n  right: 21px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  top: 21px;\n  right: 21px;\n  cursor: pointer;\n"])));
var PreviousIconWrapper = newStyled.div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 21px;\n  left: 21px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  top: 21px;\n  left: 21px;\n  cursor: pointer;\n"])));
var MainContainer = newStyled.main(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n  overflow-y: scroll;\n\n  ", " {\n    max-width: 460px;\n    margin: 0 auto;\n    width: 100%;\n  }\n\n  color: #fff;\n\n  ", "\n"], ["\n  overflow-y: scroll;\n\n  ", " {\n    max-width: 460px;\n    margin: 0 auto;\n    width: 100%;\n  }\n\n  color: #fff;\n\n  ", "\n"])), mediaQuery.tabletWidth, function (props) {
  return props.isBottom ? css(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n          height: calc(100dvh - 62px - ", "px);\n        "], ["\n          height: calc(100dvh - 62px - ", "px);\n        "])), props.isBottom) : css(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n          height: calc(100dvh - 62px);\n        "], ["\n          height: calc(100dvh - 62px);\n        "])));
});
var BottomButtonWrapper = newStyled.div(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n\n  ", " {\n    max-width: 460px;\n    margin: 0 auto;\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding: 20px;\n\n  ", " {\n    max-width: 460px;\n    margin: 0 auto;\n    width: 100%;\n  }\n"])), mediaQuery.tabletWidth);
var templateObject_1$8, templateObject_2$5, templateObject_3$5, templateObject_4$4, templateObject_5$4, templateObject_6$4, templateObject_7$3, templateObject_8$2;

var Pagination = function Pagination(_a) {
  var _b = _a.currentPage,
    currentPage = _b === void 0 ? 1 : _b,
    setCurrentPage = _a.setCurrentPage,
    _c = _a.list,
    list = _c === void 0 ? [] : _c,
    _d = _a.totalPage,
    totalPage = _d === void 0 ? 0 : _d,
    _e = _a.pageSize,
    pageSize = _e === void 0 ? 5 : _e,
    _f = _a.itemsPerPage,
    itemsPerPage = _f === void 0 ? 10 : _f,
    plusPage = _a.plusPage,
    minusPage = _a.minusPage;
  var _g = useState(0),
    pageValue = _g[0],
    setPageValue = _g[1];
  var totalPageValue = totalPage > 0 ? totalPage : Math.floor(list.length / itemsPerPage + (list.length % itemsPerPage > 0 ? 1 : 0));
  var handleChangePage = function handleChangePage(page) {
    setCurrentPage(page);
  };
  var handlePlusPage = function handlePlusPage() {
    setPageValue(function (prevPageValue) {
      return prevPageValue + 1;
    });
  };
  var handleNextPage = function handleNextPage() {
    setCurrentPage(function (prevCurrentPage) {
      return prevCurrentPage + 1;
    });
    if (currentPage === (pageValue + 1) * pageSize) {
      handlePlusPage();
    }
  };
  var handleMinusPage = function handleMinusPage() {
    setPageValue(function (prevPageValue) {
      return prevPageValue - 1;
    });
  };
  var handlePrevPage = function handlePrevPage() {
    setCurrentPage(function (prevCurrentPage) {
      return prevCurrentPage - 1;
    });
    if (currentPage - 1 === pageValue * pageSize) {
      handleMinusPage();
    }
  };
  var components = Array.from({
    length: totalPageValue
  });
  var pageComponents = components.slice(pageValue * pageSize, pageValue * pageSize + pageSize).map(function (_, index) {
    return /*#__PURE__*/React__default.createElement(CircleText, {
      key: index,
      onClick: function onClick() {
        return handleChangePage(pageValue * pageSize + index + 1);
      },
      current: currentPage === index + 1 + pageSize * pageValue
    }, index + 1 + pageValue * pageSize);
  });
  return /*#__PURE__*/React__default.createElement(Container$2, null, /*#__PURE__*/React__default.createElement(Spacing, {
    gap: 6
  }, minusPage && pageValue !== 0 && /*#__PURE__*/React__default.createElement(CircleText, {
    onClick: handleMinusPage,
    icon: true
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "DirectionLeft",
    width: 32,
    height: 32,
    fill: "#000"
  })), currentPage !== 1 && /*#__PURE__*/React__default.createElement(CircleText, {
    onClick: handlePrevPage,
    icon: true
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "DirectionLeft",
    width: 32,
    height: 32,
    fill: "#000"
  })), pageComponents, currentPage < totalPageValue && /*#__PURE__*/React__default.createElement(CircleText, {
    onClick: handleNextPage,
    icon: true
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "DirectionRight",
    width: 24,
    height: 24,
    fill: "#000"
  })), plusPage && !((pageValue + 1) * pageSize >= totalPageValue) && /*#__PURE__*/React__default.createElement(CircleText, {
    onClick: handlePlusPage,
    icon: true
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: "DirectionRight",
    width: 24,
    height: 24,
    fill: "#000"
  }))));
};
var Container$2 = newStyled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var CircleText = newStyled.div(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  display: flex;\n  ", ";\n  cursor: pointer;\n  height: ", "px;\n  width: ", "px;\n  align-items: center;\n  justify-content: center;\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  ", ";\n  cursor: pointer;\n  height: ", "px;\n  width: ", "px;\n  align-items: center;\n  justify-content: center;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.icon ? css(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n          padding: 4px 0;\n        "], ["\n          padding: 4px 0;\n        "]))) : css(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n          padding: 10px;\n        "], ["\n          padding: 10px;\n        "])));
}, function (props) {
  return props.icon ? 24 : 10;
}, function (props) {
  return props.icon ? 24 : 10;
}, function (props) {
  return props.icon ? css(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n          border: none;\n        "], ["\n          border: none;\n        "]))) : css(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n          border: 1px solid;\n          border-radius: 999px;\n        "], ["\n          border: 1px solid;\n          border-radius: 999px;\n        "])));
}, function (props) {
  return props.current ? css(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n          background: #000;\n          color: #fff;\n        "], ["\n          background: #000;\n          color: #fff;\n        "]))) : css(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n          border: none;\n\n          &:hover {\n            background: rgba(89, 136, 253, 0.2);\n            transition: background-color 0.4s ease;\n          }\n        "], ["\n          border: none;\n\n          &:hover {\n            background: rgba(89, 136, 253, 0.2);\n            transition: background-color 0.4s ease;\n          }\n        "])));
});
var templateObject_1$7, templateObject_2$4, templateObject_3$4, templateObject_4$3, templateObject_5$3, templateObject_6$3, templateObject_7$2, templateObject_8$1;

var TabItem = function TabItem(_a) {
  var tabIdx = _a.tabIdx,
    value = _a.value,
    children = _a.children;
  return /*#__PURE__*/React__default.createElement(TabItemContainer, {
    tabIdx: tabIdx,
    value: value
  }, children);
};
var TabItemContainer = newStyled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
  return props.tabIdx === props.value ? css(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n          display: block;\n        "], ["\n          display: block;\n        "]))) : css(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n          display: none;\n        "], ["\n          display: none;\n        "])));
});
var templateObject_1$6, templateObject_2$3, templateObject_3$3;

var CommonTab = function CommonTab(_a) {
  var tabNames = _a.tabNames,
    _b = _a.tabIdx,
    tabIdx = _b === void 0 ? 0 : _b,
    changeTabIdx = _a.changeTabIdx,
    _c = _a.backgroundColor,
    backgroundColor = _c === void 0 ? "#fff" : _c,
    children = _a.children,
    _d = _a.gap,
    gap = _d === void 0 ? 15 : _d,
    _e = _a.contentGap,
    contentGap = _e === void 0 ? 10 : _e;
  var handleChangeTab = function handleChangeTab(index) {
    changeTabIdx(index);
  };
  return /*#__PURE__*/React__default.createElement(Wrapper, {
    backgroundColor: backgroundColor
  }, /*#__PURE__*/React__default.createElement(ContentContainer, {
    contentGap: contentGap
  }, /*#__PURE__*/React__default.createElement(TabContainer, {
    gap: gap
  }, tabNames === null || tabNames === void 0 ? void 0 : tabNames.map(function (object, index) {
    if (typeof object === "string") {
      return /*#__PURE__*/React__default.createElement(TextTabWrapper, {
        key: index,
        onClick: function onClick() {
          return handleChangeTab(index);
        },
        current: index === tabIdx
      }, /*#__PURE__*/React__default.createElement(Typography, {
        size: 21,
        weight: index === tabIdx ? 700 : 500,
        color: index === tabIdx ? "#6c6a6a" : "#9c9a9a"
      }, object));
    } else {
      return /*#__PURE__*/React__default.createElement(TabWrapper, {
        key: index,
        onClick: function onClick() {
          return handleChangeTab(index);
        }
      }, object);
    }
  })), children));
};
var Wrapper = newStyled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 6px;\n"], ["\n  background-color: ", ";\n  border-radius: 6px;\n"])), function (props) {
  return props.backgroundColor;
});
var TabContainer = newStyled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 46px;\n  gap: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  height: 46px;\n  gap: ", "px;\n"])), function (props) {
  return props.gap;
});
var TextTabWrapper = newStyled.div(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  ", "\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  ", "\n"])), function (props) {
  return props.current ? css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n          border-bottom: 2px solid #000;\n        "], ["\n          border-bottom: 2px solid #000;\n        "]))) : css(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n          &:hover {\n            filter: brightness(1.2);\n          }\n        "], ["\n          &:hover {\n            filter: brightness(1.2);\n          }\n        "])));
});
var TabWrapper = newStyled.div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var ContentContainer = newStyled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", "px;\n"])), function (props) {
  return props.contentGap;
});
var templateObject_1$5, templateObject_2$2, templateObject_3$2, templateObject_4$2, templateObject_5$2, templateObject_6$2, templateObject_7$1;

var Table = function Table(_a) {
  var children = _a.children,
    _b = _a.spacing,
    spacing = _b === void 0 ? 0 : _b,
    pagination = _a.pagination;
  return /*#__PURE__*/React__default.createElement(Spacing, {
    column: true,
    align: "center",
    gap: (pagination === null || pagination === void 0 ? void 0 : pagination.gap) || 8
  }, /*#__PURE__*/React__default.createElement(Container$1, {
    spacing: spacing
  }, React__default.Children.map(children, function (child) {
    if (child && /*#__PURE__*/React__default.isValidElement(child)) {
      return /*#__PURE__*/React__default.cloneElement(child);
    }
  })), pagination && /*#__PURE__*/React__default.createElement(Pagination, {
    totalPage: pagination.totalPage || 0,
    list: pagination.list || [],
    currentPage: pagination.currentPage,
    setCurrentPage: pagination.setCurrentPage,
    pageSize: pagination.pageSize,
    itemsPerPage: pagination.itemsPerPage || 10
  }));
};
var Container$1 = newStyled.table(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  border-collapse: separate;\n  width: 100%;\n  border-spacing: ", "px;\n"], ["\n  border-collapse: separate;\n  width: 100%;\n  border-spacing: ", "px;\n"])), function (props) {
  return props.spacing;
});
var templateObject_1$4;

var TableBody = function TableBody(_a) {
  var children = _a.children,
    borderRight = _a.borderRight;
  return /*#__PURE__*/React__default.createElement(StyledTableBody, null, React__default.Children.map(children, function (child) {
    if ( /*#__PURE__*/React__default.isValidElement(child)) {
      var bodyProps = {
        borderRight: borderRight
      };
      return /*#__PURE__*/React__default.cloneElement(child, bodyProps);
    }
    return child;
  }));
};
var StyledTableBody = newStyled.tbody(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject([""], [""])));
var templateObject_1$3;

var TableCell = function TableCell(_a) {
  var width = _a.width,
    _b = _a.backgroundColor,
    backgroundColor = _b === void 0 ? "#fff" : _b,
    _c = _a.textAlign,
    textAlign = _c === void 0 ? "center" : _c,
    _d = _a.verticalAlign,
    verticalAlign = _d === void 0 ? "middle" : _d,
    isLast = _a.isLast,
    borderRight = _a.borderRight,
    height = _a.height,
    children = _a.children,
    onClick = _a.onClick,
    hover = _a.hover,
    _e = _a.cur,
    cur = _e === void 0 ? false : _e;
  return /*#__PURE__*/React__default.createElement(Pool, {
    width: width,
    backgroundColor: backgroundColor,
    textAlign: textAlign,
    verticalAlign: verticalAlign,
    isLast: isLast,
    borderRight: borderRight,
    height: height,
    onClick: onClick,
    hover: hover,
    cur: cur
  }, children);
};
var Pool = newStyled.td(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  padding: 0 10px;\n  vertical-align: ", ";\n  text-align: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  ", "\n"], ["\n  padding: 0 10px;\n  vertical-align: ", ";\n  text-align: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.verticalAlign;
}, function (props) {
  return props.textAlign;
}, function (props) {
  return props.width && css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n      width: ", ";\n    "], ["\n      width: ", ";\n    "])), props.width);
}, function (props) {
  return props.height ? css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n          height: ", ";\n        "], ["\n          height: ", ";\n        "])), props.height) : css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n          height: 60px;\n        "], ["\n          height: 60px;\n        "])));
}, function (props) {
  return props.borderRight && css(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n      border-right: ", ";\n    "], ["\n      border-right: ", ";\n    "])), props.borderRight);
}, function (props) {
  return props.isLast && css(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n      border-right: none;\n    "], ["\n      border-right: none;\n    "])));
}, function (props) {
  return props.backgroundColor && css(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), props.backgroundColor);
}, function (props) {
  return props.hover && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      &:hover {\n        ", "\n      }\n    "], ["\n      &:hover {\n        ", "\n      }\n    "])), props.hover);
}, function (props) {
  return props.cur && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      cursor: pointer;\n    "], ["\n      cursor: pointer;\n    "])));
});
var templateObject_1$2, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7, templateObject_8, templateObject_9;

var TableHead = function TableHead(_a) {
  var children = _a.children,
    bordered = _a.bordered;
  return /*#__PURE__*/React__default.createElement(StyledTableHeader, null, React__default.Children.map(children, function (child) {
    if ( /*#__PURE__*/React__default.isValidElement(child)) {
      return /*#__PURE__*/React__default.cloneElement(child, [{
        bordered: bordered
      }]);
    }
    return child;
  }));
};
var StyledTableHeader = newStyled.thead(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject([""], [""])));
var templateObject_1$1;

var TableRow = function TableRow(_a) {
  var children = _a.children,
    border = _a.border,
    borderRight = _a.borderRight,
    _b = _a.isHeader,
    isHeader = _b === void 0 ? false : _b,
    height = _a.height,
    hover = _a.hover,
    onClick = _a.onClick,
    _c = _a.cur,
    cur = _c === void 0 ? false : _c,
    _d = _a.padding,
    padding = _d === void 0 ? "0 10px" : _d;
  return /*#__PURE__*/React__default.createElement(Container, {
    isHeader: isHeader,
    border: border,
    onClick: onClick,
    hover: hover,
    cur: cur,
    padding: padding
  }, React__default.Children.map(children, function (cell, index) {
    if ( /*#__PURE__*/React__default.isValidElement(cell)) {
      var isLast = index === React__default.Children.count(children) - 1;
      var cellProps = {
        isLast: isLast,
        borderRight: borderRight,
        height: height,
        hover: hover
      };
      return /*#__PURE__*/React__default.cloneElement(cell, cellProps);
    }
  }));
};
var Container = newStyled.tr(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: ", ";\n  ", "\n  ", "\n  ", "\n  ", ";\n\n  background-color: blue;\n"], ["\n  padding: ", ";\n  ", "\n  ", "\n  ", "\n  ", ";\n\n  background-color: blue;\n"])), function (props) {
  return props.padding;
}, function (props) {
  return props.border ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          td {\n            border-bottom: ", ";\n          }\n        "], ["\n          td {\n            border-bottom: ", ";\n          }\n        "])), props.border) : css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          td {\n            border-bottom: 1px solid #1f1f27;\n          }\n        "], ["\n          td {\n            border-bottom: 1px solid #1f1f27;\n          }\n        "])));
}, function (props) {
  return props.isHeader && props.border && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ", "\n    "])), props.border);
}, function (props) {
  return props.hover && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      &:hover {\n        ", "\n      }\n\n      &:hover td {\n        ", "\n      }\n    "], ["\n      &:hover {\n        ", "\n      }\n\n      &:hover td {\n        ", "\n      }\n    "])), props.hover, props.hover);
}, function (props) {
  return props.cur && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      cursor: pointer;\n    "], ["\n      cursor: pointer;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var slicePaginationTable = function slicePaginationTable(list, currentPage, itemsPerPage) {
  if (itemsPerPage === void 0) {
    itemsPerPage = 10;
  }
  return list.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);
};

export { BasicDatePicker, Breadcrumbs, Button, Checkbox, CommonTab, DimdLayer, DropDown, Filter, Form, FormItem, FullSizeLayout, FullSizeModalLayout, Icon, ImageUploader, Modal, Pagination, ProgressBar, Radio, RangeDatePicker, Skeleton, Spacing, TabItem, Table, TableBody, TableCell, TableHead, TableRow, TextInput, TimePicker, Typography, slicePaginationTable };

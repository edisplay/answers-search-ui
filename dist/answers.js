var ANSWERS = (function () {
	'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.6.9' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var document$1 = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _library = false;

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode: 'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var _functionToString = _shared('native-function-to-string', Function.toString);

	var _redefine = createCommonjsModule(function (module) {
	var SRC = _uid('src');

	var TO_STRING = 'toString';
	var TPL = ('' + _functionToString).split(TO_STRING);

	_core.inspectSource = function (it) {
	  return _functionToString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === _global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    _hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    _hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || _functionToString.call(this);
	});
	});

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // extend global
	    if (target) _redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) _hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	_global.core = _core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var _meta = createCommonjsModule(function (module) {
	var META = _uid('meta');


	var setDesc = _objectDp.f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !_fails(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};
	});
	var _meta_1 = _meta.KEY;
	var _meta_2 = _meta.NEED;
	var _meta_3 = _meta.fastKey;
	var _meta_4 = _meta.getWeak;
	var _meta_5 = _meta.onFreeze;

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var f$1 = _wks;

	var _wksExt = {
		f: f$1
	};

	var defineProperty = _objectDp.f;
	var _wksDefine = function (name) {
	  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
	};

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var f$2 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$2
	};

	var f$3 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$3
	};

	// all enumerable object keys, includes symbols



	var _enumKeys = function (it) {
	  var result = _objectKeys(it);
	  var getSymbols = _objectGops.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = _objectPie.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof(arg) == 'Array';
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$2 = _global.document;
	var _html = document$2 && document$2.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$4
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

	var gOPN = _objectGopn.f;
	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
	};

	var _objectGopnExt = {
		f: f$5
	};

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$6
	};

	// ECMAScript 6 symbols shim





	var META = _meta.KEY;





















	var gOPD$1 = _objectGopd.f;
	var dP$1 = _objectDp.f;
	var gOPN$1 = _objectGopnExt.f;
	var $Symbol = _global.Symbol;
	var $JSON = _global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE$2 = 'prototype';
	var HIDDEN = _wks('_hidden');
	var TO_PRIMITIVE = _wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = _shared('symbol-registry');
	var AllSymbols = _shared('symbols');
	var OPSymbols = _shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE$2];
	var USE_NATIVE = typeof $Symbol == 'function' && !!_objectGops.f;
	var QObject = _global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = _descriptors && _fails(function () {
	  return _objectCreate(dP$1({}, 'a', {
	    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$1(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP$1(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
	} : dP$1;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  _anObject(it);
	  key = _toPrimitive(key, true);
	  _anObject(D);
	  if (_has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$1(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  _anObject(it);
	  var keys = _enumKeys(P = _toIobject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = _toPrimitive(key, true));
	  if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
	  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = _toIobject(it);
	  key = _toPrimitive(key, true);
	  if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
	  var D = gOPD$1(it, key);
	  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$1(_toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, _propertyDesc(1, value));
	    };
	    if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
	    return this._k;
	  });

	  _objectGopd.f = $getOwnPropertyDescriptor;
	  _objectDp.f = $defineProperty;
	  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
	  _objectPie.f = $propertyIsEnumerable;
	  _objectGops.f = $getOwnPropertySymbols;

	  if (_descriptors && !_library) {
	    _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  _wksExt.f = function (name) {
	    return wrap(_wks(name));
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

	for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

	_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return _has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FAILS_ON_PRIMITIVES = _fails(function () { _objectGops.f(1); });

	_export(_export.S + _export.F * FAILS_ON_PRIMITIVES, 'Object', {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return _objectGops.f(_toObject(it));
	  }
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!_isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	_setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	_setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	_setToStringTag(_global.JSON, 'JSON', true);

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	_export(_export.S, 'Object', { create: _objectCreate });

	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperties: _objectDps });

	// most Object methods by ES6 should accept primitives



	var _objectSap = function (KEY, exec) {
	  var fn = (_core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
	};

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

	var $getOwnPropertyDescriptor$1 = _objectGopd.f;

	_objectSap('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor$1(_toIobject(it), key);
	  };
	});

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = _sharedKey('IE_PROTO');
	var ObjectProto$1 = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto$1 : null;
	};

	// 19.1.2.9 Object.getPrototypeOf(O)



	_objectSap('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return _objectGpo(_toObject(it));
	  };
	});

	// 19.1.2.14 Object.keys(O)



	_objectSap('keys', function () {
	  return function keys(it) {
	    return _objectKeys(_toObject(it));
	  };
	});

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	_objectSap('getOwnPropertyNames', function () {
	  return _objectGopnExt.f;
	});

	// 19.1.2.5 Object.freeze(O)

	var meta = _meta.onFreeze;

	_objectSap('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

	// 19.1.2.17 Object.seal(O)

	var meta$1 = _meta.onFreeze;

	_objectSap('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && _isObject(it) ? $seal(meta$1(it)) : it;
	  };
	});

	// 19.1.2.15 Object.preventExtensions(O)

	var meta$2 = _meta.onFreeze;

	_objectSap('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && _isObject(it) ? $preventExtensions(meta$2(it)) : it;
	  };
	});

	// 19.1.2.12 Object.isFrozen(O)


	_objectSap('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return _isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

	// 19.1.2.13 Object.isSealed(O)


	_objectSap('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return _isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

	// 19.1.2.11 Object.isExtensible(O)


	_objectSap('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return _isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

	// 19.1.2.1 Object.assign(target, source, ...)






	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	var _objectAssign = !$assign || _fails(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = _toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = _objectGops.f;
	  var isEnum = _objectPie.f;
	  while (aLen > index) {
	    var S = _iobject(arguments[index++]);
	    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	// 19.1.3.1 Object.assign(target, source)


	_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

	// 7.2.9 SameValue(x, y)
	var _sameValue = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

	// 19.1.3.10 Object.is(value1, value2)

	_export(_export.S, 'Object', { is: _sameValue });

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check = function (O, proto) {
	  _anObject(O);
	  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

	// 19.1.3.19 Object.setPrototypeOf(O, proto)

	_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$1 = _wks('toStringTag');
	// ES3 wrong here
	var ARG = _cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? _cof(O)
	    // ES3 arguments fallback
	    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	// 19.1.3.6 Object.prototype.toString()

	var test = {};
	test[_wks('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  _redefine(Object.prototype, 'toString', function toString() {
	    return '[object ' + _classof(this) + ']';
	  }, true);
	}

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	var _invoke = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};

	var arraySlice = [].slice;
	var factories = {};

	var construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	var _bind = Function.bind || function bind(that /* , ...args */) {
	  var fn = _aFunction(this);
	  var partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
	  };
	  if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)


	_export(_export.P, 'Function', { bind: _bind });

	var dP$2 = _objectDp.f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';

	// 19.2.4.2 name
	NAME in FProto || _descriptors && dP$2(FProto, NAME, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});

	var HAS_INSTANCE = _wks('hasInstance');
	var FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) _objectDp.f(FunctionProto, HAS_INSTANCE, { value: function (O) {
	  if (typeof this != 'function' || !_isObject(O)) return false;
	  if (!_isObject(this.prototype)) return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while (O = _objectGpo(O)) if (this.prototype === O) return true;
	  return false;
	} });

	var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var space = '[' + _stringWs + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');

	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = _fails(function () {
	    return !!_stringWs[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  _export(_export.P + _export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(_defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};

	var _stringTrim = exporter;

	var $parseInt = _global.parseInt;
	var $trim = _stringTrim.trim;

	var hex = /^[-+]?0[xX]/;

	var _parseInt = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

	// 18.2.5 parseInt(string, radix)
	_export(_export.G + _export.F * (parseInt != _parseInt), { parseInt: _parseInt });

	var $parseFloat = _global.parseFloat;
	var $trim$1 = _stringTrim.trim;

	var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim$1(String(str), 3);
	  var result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

	// 18.2.4 parseFloat(string)
	_export(_export.G + _export.F * (parseFloat != _parseFloat), { parseFloat: _parseFloat });

	var setPrototypeOf = _setProto.set;
	var _inheritIfRequired = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};

	var gOPN$2 = _objectGopn.f;
	var gOPD$2 = _objectGopd.f;
	var dP$3 = _objectDp.f;
	var $trim$2 = _stringTrim.trim;
	var NUMBER = 'Number';
	var $Number = _global[NUMBER];
	var Base = $Number;
	var proto = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
	var TRIM = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = _toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim$2(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? _fails(function () { proto.valueOf.call(that); }) : _cof(that) != NUMBER)
	        ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = _descriptors ? gOPN$2(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j$1 = 0, key; keys.length > j$1; j$1++) {
	    if (_has(Base, key = keys[j$1]) && !_has($Number, key)) {
	      dP$3($Number, key, gOPD$2(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  _redefine(_global, NUMBER, $Number);
	}

	var _aNumberValue = function (it, msg) {
	  if (typeof it != 'number' && _cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};

	var _stringRepeat = function repeat(count) {
	  var str = String(_defined(this));
	  var res = '';
	  var n = _toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
	};

	var $toFixed = 1.0.toFixed;
	var floor$1 = Math.floor;
	var data = [0, 0, 0, 0, 0, 0];
	var ERROR = 'Number.toFixed: incorrect invocation!';
	var ZERO = '0';

	var multiply = function (n, c) {
	  var i = -1;
	  var c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor$1(c2 / 1e7);
	  }
	};
	var divide = function (n) {
	  var i = 6;
	  var c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor$1(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function () {
	  var i = 6;
	  var s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + _stringRepeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function (x) {
	  var n = 0;
	  var x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
	};

	_export(_export.P + _export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !_fails(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = _aNumberValue(this, ERROR);
	    var f = _toInteger(fractionDigits);
	    var s = '';
	    var m = ZERO;
	    var e, z, j, k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + _stringRepeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + _stringRepeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

	var $toPrecision = 1.0.toPrecision;

	_export(_export.P + _export.F * (_fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !_fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = _aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});

	// 20.1.2.1 Number.EPSILON


	_export(_export.S, 'Number', { EPSILON: Math.pow(2, -52) });

	// 20.1.2.2 Number.isFinite(number)

	var _isFinite = _global.isFinite;

	_export(_export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

	// 20.1.2.3 Number.isInteger(number)

	var floor$2 = Math.floor;
	var _isInteger = function isInteger(it) {
	  return !_isObject(it) && isFinite(it) && floor$2(it) === it;
	};

	// 20.1.2.3 Number.isInteger(number)


	_export(_export.S, 'Number', { isInteger: _isInteger });

	// 20.1.2.4 Number.isNaN(number)


	_export(_export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
	});

	// 20.1.2.5 Number.isSafeInteger(number)


	var abs = Math.abs;

	_export(_export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return _isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

	// 20.1.2.6 Number.MAX_SAFE_INTEGER


	_export(_export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

	// 20.1.2.10 Number.MIN_SAFE_INTEGER


	_export(_export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

	// 20.1.2.12 Number.parseFloat(string)
	_export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', { parseFloat: _parseFloat });

	// 20.1.2.13 Number.parseInt(string, radix)
	_export(_export.S + _export.F * (Number.parseInt != _parseInt), 'Number', { parseInt: _parseInt });

	// 20.2.2.20 Math.log1p(x)
	var _mathLog1p = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

	// 20.2.2.3 Math.acosh(x)


	var sqrt = Math.sqrt;
	var $acosh = Math.acosh;

	_export(_export.S + _export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : _mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

	// 20.2.2.5 Math.asinh(x)

	var $asinh = Math.asinh;

	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0
	_export(_export.S + _export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

	// 20.2.2.7 Math.atanh(x)

	var $atanh = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0
	_export(_export.S + _export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

	// 20.2.2.28 Math.sign(x)
	var _mathSign = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

	// 20.2.2.9 Math.cbrt(x)



	_export(_export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return _mathSign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

	// 20.2.2.11 Math.clz32(x)


	_export(_export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

	// 20.2.2.12 Math.cosh(x)

	var exp = Math.exp;

	_export(_export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	var _mathExpm1 = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

	// 20.2.2.14 Math.expm1(x)



	_export(_export.S + _export.F * (_mathExpm1 != Math.expm1), 'Math', { expm1: _mathExpm1 });

	// 20.2.2.16 Math.fround(x)

	var pow$1 = Math.pow;
	var EPSILON = pow$1(2, -52);
	var EPSILON32 = pow$1(2, -23);
	var MAX32 = pow$1(2, 127) * (2 - EPSILON32);
	var MIN32 = pow$1(2, -126);

	var roundTiesToEven = function (n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};

	var _mathFround = Math.fround || function fround(x) {
	  var $abs = Math.abs(x);
	  var $sign = _mathSign(x);
	  var a, result;
	  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	  a = (1 + EPSILON32 / EPSILON) * $abs;
	  result = a - (a - $abs);
	  // eslint-disable-next-line no-self-compare
	  if (result > MAX32 || result != result) return $sign * Infinity;
	  return $sign * result;
	};

	// 20.2.2.16 Math.fround(x)


	_export(_export.S, 'Math', { fround: _mathFround });

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])

	var abs$1 = Math.abs;

	_export(_export.S, 'Math', {
	  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	    var sum = 0;
	    var i = 0;
	    var aLen = arguments.length;
	    var larg = 0;
	    var arg, div;
	    while (i < aLen) {
	      arg = abs$1(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

	// 20.2.2.18 Math.imul(x, y)

	var $imul = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	_export(_export.S + _export.F * _fails(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff;
	    var xn = +x;
	    var yn = +y;
	    var xl = UINT16 & xn;
	    var yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

	// 20.2.2.21 Math.log10(x)


	_export(_export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) * Math.LOG10E;
	  }
	});

	// 20.2.2.20 Math.log1p(x)


	_export(_export.S, 'Math', { log1p: _mathLog1p });

	// 20.2.2.22 Math.log2(x)


	_export(_export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});

	// 20.2.2.28 Math.sign(x)


	_export(_export.S, 'Math', { sign: _mathSign });

	// 20.2.2.30 Math.sinh(x)


	var exp$1 = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	_export(_export.S + _export.F * _fails(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1
	      ? (_mathExpm1(x) - _mathExpm1(-x)) / 2
	      : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
	  }
	});

	// 20.2.2.33 Math.tanh(x)


	var exp$2 = Math.exp;

	_export(_export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = _mathExpm1(x = +x);
	    var b = _mathExpm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
	  }
	});

	// 20.2.2.34 Math.trunc(x)


	_export(_export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

	var fromCharCode = String.fromCharCode;
	var $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	_export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
	    var res = [];
	    var aLen = arguments.length;
	    var i = 0;
	    var code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (_toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

	_export(_export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = _toIobject(callSite.raw);
	    var len = _toLength(tpl.length);
	    var aLen = arguments.length;
	    var res = [];
	    var i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

	// 21.1.3.25 String.prototype.trim()
	_stringTrim('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var _iterators = {};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	var ITERATOR = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if (BUGGY || VALUES_BUG || !proto[ITERATOR]) {
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	var $at$1 = _stringAt(false);
	_export(_export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at$1(this, pos);
	  }
	});

	// 7.2.8 IsRegExp(argument)


	var MATCH = _wks('match');
	var _isRegexp = function (it) {
	  var isRegExp;
	  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
	};

	// helper for String#{startsWith, endsWith, includes}



	var _stringContext = function (that, searchString, NAME) {
	  if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(_defined(that));
	};

	var MATCH$1 = _wks('match');
	var _failsIsRegexp = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH$1] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
	};

	var ENDS_WITH = 'endsWith';
	var $endsWith = ''[ENDS_WITH];

	_export(_export.P + _export.F * _failsIsRegexp(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = _stringContext(this, searchString, ENDS_WITH);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = _toLength(that.length);
	    var end = endPosition === undefined ? len : Math.min(_toLength(endPosition), len);
	    var search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

	var INCLUDES = 'includes';

	_export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~_stringContext(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	_export(_export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: _stringRepeat
	});

	var STARTS_WITH = 'startsWith';
	var $startsWith = ''[STARTS_WITH];

	_export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = _stringContext(this, searchString, STARTS_WITH);
	    var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

	var quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function (string, tag, attribute, value) {
	  var S = String(_defined(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	var _stringHtml = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  _export(_export.P + _export.F * _fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

	// B.2.3.2 String.prototype.anchor(name)
	_stringHtml('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});

	// B.2.3.3 String.prototype.big()
	_stringHtml('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});

	// B.2.3.4 String.prototype.blink()
	_stringHtml('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});

	// B.2.3.5 String.prototype.bold()
	_stringHtml('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});

	// B.2.3.6 String.prototype.fixed()
	_stringHtml('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});

	// B.2.3.7 String.prototype.fontcolor(color)
	_stringHtml('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});

	// B.2.3.8 String.prototype.fontsize(size)
	_stringHtml('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});

	// B.2.3.9 String.prototype.italics()
	_stringHtml('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});

	// B.2.3.10 String.prototype.link(url)
	_stringHtml('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});

	// B.2.3.11 String.prototype.small()
	_stringHtml('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});

	// B.2.3.12 String.prototype.strike()
	_stringHtml('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});

	// B.2.3.13 String.prototype.sub()
	_stringHtml('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});

	// B.2.3.14 String.prototype.sup()
	_stringHtml('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});

	// 20.3.3.1 / 15.9.4.4 Date.now()


	_export(_export.S, 'Date', { now: function () { return new Date().getTime(); } });

	_export(_export.P + _export.F * _fails(function () {
	  return new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
	}), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    var O = _toObject(this);
	    var pv = _toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

	var getTime = Date.prototype.getTime;
	var $toISOString = Date.prototype.toISOString;

	var lz = function (num) {
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	var _dateToIsoString = (_fails(function () {
	  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
	}) || !_fails(function () {
	  $toISOString.call(new Date(NaN));
	})) ? function toISOString() {
	  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	  var d = this;
	  var y = d.getUTCFullYear();
	  var m = d.getUTCMilliseconds();
	  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	} : $toISOString;

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()



	// PhantomJS / old WebKit has a broken implementations
	_export(_export.P + _export.F * (Date.prototype.toISOString !== _dateToIsoString), 'Date', {
	  toISOString: _dateToIsoString
	});

	var DateProto = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING = 'toString';
	var $toString = DateProto[TO_STRING];
	var getTime$1 = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  _redefine(DateProto, TO_STRING, function toString() {
	    var value = getTime$1.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

	var NUMBER$1 = 'number';

	var _dateToPrimitive = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER$1 && hint !== 'default') throw TypeError('Incorrect hint');
	  return _toPrimitive(_anObject(this), hint != NUMBER$1);
	};

	var TO_PRIMITIVE$1 = _wks('toPrimitive');
	var proto$1 = Date.prototype;

	if (!(TO_PRIMITIVE$1 in proto$1)) _hide(proto$1, TO_PRIMITIVE$1, _dateToPrimitive);

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


	_export(_export.S, 'Array', { isArray: _isArray });

	// call something on iterator step with safe closing on error

	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) _anObject(ret.call(iterator));
	    throw e;
	  }
	};

	// check on default Array iterator

	var ITERATOR$1 = _wks('iterator');
	var ArrayProto = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
	};

	var _createProperty = function (object, index, value) {
	  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
	  else object[index] = value;
	};

	var ITERATOR$2 = _wks('iterator');

	var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$2]
	    || it['@@iterator']
	    || _iterators[_classof(it)];
	};

	var ITERATOR$3 = _wks('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR$3]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	} catch (e) { /* empty */ }

	var _iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR$3]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR$3] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};

	_export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = _toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = core_getIteratorMethod(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = _toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

	// WebKit Array.of isn't generic
	_export(_export.S + _export.F * _fails(function () {
	  function F() { /* empty */ }
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */) {
	    var index = 0;
	    var aLen = arguments.length;
	    var result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) _createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

	var _strictMethod = function (method, arg) {
	  return !!method && _fails(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
	  });
	};

	// 22.1.3.13 Array.prototype.join(separator)


	var arrayJoin = [].join;

	// fallback for not array-like strings
	_export(_export.P + _export.F * (_iobject != Object || !_strictMethod(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(_toIobject(this), separator === undefined ? ',' : separator);
	  }
	});

	var arraySlice$1 = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	_export(_export.P + _export.F * _fails(function () {
	  if (_html) arraySlice$1.call(_html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = _toLength(this.length);
	    var klass = _cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice$1.call(this, begin, end);
	    var start = _toAbsoluteIndex(begin, len);
	    var upTo = _toAbsoluteIndex(end, len);
	    var size = _toLength(upTo - start);
	    var cloned = new Array(size);
	    var i = 0;
	    for (; i < size; i++) cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

	var $sort = [].sort;
	var test$1 = [1, 2, 3];

	_export(_export.P + _export.F * (_fails(function () {
	  // IE8-
	  test$1.sort(undefined);
	}) || !_fails(function () {
	  // V8 bug
	  test$1.sort(null);
	  // Old WebKit
	}) || !_strictMethod($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? $sort.call(_toObject(this))
	      : $sort.call(_toObject(this), _aFunction(comparefn));
	  }
	});

	var SPECIES = _wks('species');

	var _arraySpeciesConstructor = function (original) {
	  var C;
	  if (_isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
	    if (_isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


	var _arraySpeciesCreate = function (original, length) {
	  return new (_arraySpeciesConstructor(original))(length);
	};

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex





	var _arrayMethods = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || _arraySpeciesCreate;
	  return function ($this, callbackfn, that) {
	    var O = _toObject($this);
	    var self = _iobject(O);
	    var f = _ctx(callbackfn, that, 3);
	    var length = _toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

	var $forEach = _arrayMethods(0);
	var STRICT = _strictMethod([].forEach, true);

	_export(_export.P + _export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

	var $map = _arrayMethods(1);

	_export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

	var $filter = _arrayMethods(2);

	_export(_export.P + _export.F * !_strictMethod([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

	var $some = _arrayMethods(3);

	_export(_export.P + _export.F * !_strictMethod([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

	var $every = _arrayMethods(4);

	_export(_export.P + _export.F * !_strictMethod([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

	var _arrayReduce = function (that, callbackfn, aLen, memo, isRight) {
	  _aFunction(callbackfn);
	  var O = _toObject(that);
	  var self = _iobject(O);
	  var length = _toLength(O.length);
	  var index = isRight ? length - 1 : 0;
	  var i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

	_export(_export.P + _export.F * !_strictMethod([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

	_export(_export.P + _export.F * !_strictMethod([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return _arrayReduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

	var $indexOf = _arrayIncludes(false);
	var $native = [].indexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	_export(_export.P + _export.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

	var $native$1 = [].lastIndexOf;
	var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

	_export(_export.P + _export.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO$1) return $native$1.apply(this, arguments) || 0;
	    var O = _toIobject(this);
	    var length = _toLength(O.length);
	    var index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, _toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
	    return -1;
	  }
	});

	var _arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  var O = _toObject(this);
	  var len = _toLength(O.length);
	  var to = _toAbsoluteIndex(target, len);
	  var from = _toAbsoluteIndex(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = Math.min((end === undefined ? len : _toAbsoluteIndex(end, len)) - from, len - to);
	  var inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];
	    else delete O[to];
	    to += inc;
	    from += inc;
	  } return O;
	};

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = _wks('unscopables');
	var ArrayProto$1 = Array.prototype;
	if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});
	var _addToUnscopables = function (key) {
	  ArrayProto$1[UNSCOPABLES][key] = true;
	};

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


	_export(_export.P, 'Array', { copyWithin: _arrayCopyWithin });

	_addToUnscopables('copyWithin');

	var _arrayFill = function fill(value /* , start = 0, end = @length */) {
	  var O = _toObject(this);
	  var length = _toLength(O.length);
	  var aLen = arguments.length;
	  var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
	  var end = aLen > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


	_export(_export.P, 'Array', { fill: _arrayFill });

	_addToUnscopables('fill');

	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

	var $find = _arrayMethods(5);
	var KEY = 'find';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	_export(_export.P + _export.F * forced, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY);

	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

	var $find$1 = _arrayMethods(6);
	var KEY$1 = 'findIndex';
	var forced$1 = true;
	// Shouldn't skip holes
	if (KEY$1 in []) Array(1)[KEY$1](function () { forced$1 = false; });
	_export(_export.P + _export.F * forced$1, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY$1);

	var SPECIES$1 = _wks('species');

	var _setSpecies = function (KEY) {
	  var C = _global[KEY];
	  if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};

	_setSpecies('Array');

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	_addToUnscopables('keys');
	_addToUnscopables('values');
	_addToUnscopables('entries');

	// 21.2.5.3 get RegExp.prototype.flags

	var _flags = function () {
	  var that = _anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var dP$4 = _objectDp.f;
	var gOPN$3 = _objectGopn.f;


	var $RegExp = _global.RegExp;
	var Base$1 = $RegExp;
	var proto$2 = $RegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g;
	// "new" creates a new object, old webkit buggy here
	var CORRECT_NEW = new $RegExp(re1) !== re1;

	if (_descriptors && (!CORRECT_NEW || _fails(function () {
	  re2[_wks('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp;
	    var piRE = _isRegexp(p);
	    var fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : _inheritIfRequired(CORRECT_NEW
	        ? new Base$1(piRE && !fiU ? p.source : p, f)
	        : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f)
	      , tiRE ? this : proto$2, $RegExp);
	  };
	  var proxy = function (key) {
	    key in $RegExp || dP$4($RegExp, key, {
	      configurable: true,
	      get: function () { return Base$1[key]; },
	      set: function (it) { Base$1[key] = it; }
	    });
	  };
	  for (var keys$1 = gOPN$3(Base$1), i = 0; keys$1.length > i;) proxy(keys$1[i++]);
	  proto$2.constructor = $RegExp;
	  $RegExp.prototype = proto$2;
	  _redefine(_global, 'RegExp', $RegExp);
	}

	_setSpecies('RegExp');

	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;

	var patchedExec = nativeExec;

	var LAST_INDEX = 'lastIndex';

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/,
	      re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
	})();

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

	    match = nativeExec.call(re, str);

	    if (UPDATES_LAST_INDEX_WRONG && match) {
	      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      // eslint-disable-next-line no-loop-func
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	var _regexpExec = patchedExec;

	_export({
	  target: 'RegExp',
	  proto: true,
	  forced: _regexpExec !== /./.exec
	}, {
	  exec: _regexpExec
	});

	// 21.2.5.3 get RegExp.prototype.flags()
	if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: _flags
	});

	var TO_STRING$1 = 'toString';
	var $toString$1 = /./[TO_STRING$1];

	var define = function (fn) {
	  _redefine(RegExp.prototype, TO_STRING$1, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if (_fails(function () { return $toString$1.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = _anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString$1.name != TO_STRING$1) {
	  define(function toString() {
	    return $toString$1.call(this);
	  });
	}

	var at = _stringAt(true);

	 // `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex
	var _advanceStringIndex = function (S, index, unicode) {
	  return index + (unicode ? at(S, index).length : 1);
	};

	var builtinExec = RegExp.prototype.exec;

	 // `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec
	var _regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw new TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }
	  if (_classof(R) !== 'RegExp') {
	    throw new TypeError('RegExp#exec called on incompatible receiver');
	  }
	  return builtinExec.call(R, S);
	};

	var SPECIES$2 = _wks('species');

	var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});

	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
	  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
	})();

	var _fixReWks = function (KEY, length, exec) {
	  var SYMBOL = _wks(KEY);

	  var DELEGATES_TO_SYMBOL = !_fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;
	    re.exec = function () { execCalled = true; return null; };
	    if (KEY === 'split') {
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES$2] = function () { return re; };
	    }
	    re[SYMBOL]('');
	    return !execCalled;
	  }) : undefined;

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var fns = exec(
	      _defined,
	      SYMBOL,
	      ''[KEY],
	      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
	        if (regexp.exec === _regexpExec) {
	          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	            // The native String method already delegates to @@method (this
	            // polyfilled function), leasing to infinite recursion.
	            // We avoid it by directly calling the native @@method method.
	            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	          }
	          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	        }
	        return { done: false };
	      }
	    );
	    var strfn = fns[0];
	    var rxfn = fns[1];

	    _redefine(String.prototype, KEY, strfn);
	    _hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return rxfn.call(string, this); }
	    );
	  }
	};

	// @@match logic
	_fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = defined(this);
	      var fn = regexp == undefined ? undefined : regexp[MATCH];
	      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
	    function (regexp) {
	      var res = maybeCallNative($match, regexp, this);
	      if (res.done) return res.value;
	      var rx = _anObject(regexp);
	      var S = String(this);
	      if (!rx.global) return _regexpExecAbstract(rx, S);
	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = _regexpExecAbstract(rx, S)) !== null) {
	        var matchStr = String(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});

	var max$1 = Math.max;
	var min$2 = Math.min;
	var floor$3 = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// @@replace logic
	_fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
	  return [
	    // `String.prototype.replace` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = defined(this);
	      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return fn !== undefined
	        ? fn.call(searchValue, O, replaceValue)
	        : $replace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      var res = maybeCallNative($replace, regexp, this, replaceValue);
	      if (res.done) return res.value;

	      var rx = _anObject(regexp);
	      var S = String(this);
	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);
	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = _regexpExecAbstract(rx, S);
	        if (result === null) break;
	        results.push(result);
	        if (!global) break;
	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
	      }
	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];
	        var matched = String(result[0]);
	        var position = max$1(min$2(_toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];

	    // https://tc39.github.io/ecma262/#sec-getsubstitution
	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	    if (namedCaptures !== undefined) {
	      namedCaptures = _toObject(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }
	    return $replace.call(replacement, symbols, function (match, ch) {
	      var capture;
	      switch (ch.charAt(0)) {
	        case '$': return '$';
	        case '&': return matched;
	        case '`': return str.slice(0, position);
	        case "'": return str.slice(tailPos);
	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;
	        default: // \d\d?
	          var n = +ch;
	          if (n === 0) return match;
	          if (n > m) {
	            var f = floor$3(n / 10);
	            if (f === 0) return match;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return match;
	          }
	          capture = captures[n - 1];
	      }
	      return capture === undefined ? '' : capture;
	    });
	  }
	});

	// @@search logic
	_fixReWks('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
	  return [
	    // `String.prototype.search` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.search
	    function search(regexp) {
	      var O = defined(this);
	      var fn = regexp == undefined ? undefined : regexp[SEARCH];
	      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	    },
	    // `RegExp.prototype[@@search]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
	    function (regexp) {
	      var res = maybeCallNative($search, regexp, this);
	      if (res.done) return res.value;
	      var rx = _anObject(regexp);
	      var S = String(this);
	      var previousLastIndex = rx.lastIndex;
	      if (!_sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
	      var result = _regexpExecAbstract(rx, S);
	      if (!_sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
	      return result === null ? -1 : result.index;
	    }
	  ];
	});

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)


	var SPECIES$3 = _wks('species');
	var _speciesConstructor = function (O, D) {
	  var C = _anObject(O).constructor;
	  var S;
	  return C === undefined || (S = _anObject(C)[SPECIES$3]) == undefined ? D : _aFunction(S);
	};

	var $min = Math.min;
	var $push = [].push;
	var $SPLIT = 'split';
	var LENGTH = 'length';
	var LAST_INDEX$1 = 'lastIndex';
	var MAX_UINT32 = 0xffffffff;

	// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
	var SUPPORTS_Y = !_fails(function () { });

	// @@split logic
	_fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!_isRegexp(separator)) return $split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = _regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy[LAST_INDEX$1];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
	    };
	  } else {
	    internalSplit = $split;
	  }

	  return [
	    // `String.prototype.split` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = defined(this);
	      var splitter = separator == undefined ? undefined : separator[SPLIT];
	      return splitter !== undefined
	        ? splitter.call(separator, O, limit)
	        : internalSplit.call(String(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (regexp, limit) {
	      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
	      if (res.done) return res.value;

	      var rx = _anObject(regexp);
	      var S = String(this);
	      var C = _speciesConstructor(rx, RegExp);

	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (SUPPORTS_Y ? 'y' : 'g');

	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = SUPPORTS_Y ? q : 0;
	        var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
	        var e;
	        if (
	          z === null ||
	          (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
	        ) {
	          q = _advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          A.push(S.slice(p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            A.push(z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      A.push(S.slice(p));
	      return A;
	    }
	  ];
	});

	var _anInstance = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

	var _forOf = createCommonjsModule(function (module) {
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
	  var f = _ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
	    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = _iterCall(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;
	});

	var process = _global.process;
	var setTask = _global.setImmediate;
	var clearTask = _global.clearImmediate;
	var MessageChannel = _global.MessageChannel;
	var Dispatch = _global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (_cof(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(_ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(_ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = _ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
	    defer = function (id) {
	      _global.postMessage(id + '', '*');
	    };
	    _global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
	    defer = function (id) {
	      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
	        _html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(_ctx(run, id, 1), 0);
	    };
	  }
	}
	var _task = {
	  set: setTask,
	  clear: clearTask
	};

	var macrotask = _task.set;
	var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
	var process$1 = _global.process;
	var Promise$1 = _global.Promise;
	var isNode = _cof(process$1) == 'process';

	var _microtask = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process$1.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process$1.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise$1.resolve(undefined);
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(_global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};

	// 25.4.1.5 NewPromiseCapability(C)


	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = _aFunction(resolve);
	  this.reject = _aFunction(reject);
	}

	var f$7 = function (C) {
	  return new PromiseCapability(C);
	};

	var _newPromiseCapability = {
		f: f$7
	};

	var _perform = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};

	var navigator$1 = _global.navigator;

	var _userAgent = navigator$1 && navigator$1.userAgent || '';

	var _promiseResolve = function (C, x) {
	  _anObject(C);
	  if (_isObject(x) && x.constructor === C) return x;
	  var promiseCapability = _newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var _redefineAll = function (target, src, safe) {
	  for (var key in src) _redefine(target, key, src[key], safe);
	  return target;
	};

	var task = _task.set;
	var microtask = _microtask();




	var PROMISE = 'Promise';
	var TypeError$1 = _global.TypeError;
	var process$2 = _global.process;
	var versions = process$2 && process$2.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = _global[PROMISE];
	var isNode$1 = _classof(process$2) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

	var USE_NATIVE$1 = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode$1 || typeof PromiseRejectionEvent == 'function')
	      && promise.then(empty) instanceof FakePromise
	      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	      // we can't detect it synchronously, so just check versions
	      && v8.indexOf('6.6') !== 0
	      && _userAgent.indexOf('Chrome/66') === -1;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(_global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = _perform(function () {
	        if (isNode$1) {
	          process$2.emit('unhandledRejection', value, promise);
	        } else if (handler = _global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = _global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(_global, function () {
	    var handler;
	    if (isNode$1) {
	      process$2.emit('rejectionHandled', promise);
	    } else if (handler = _global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE$1) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    _anInstance(this, $Promise, PROMISE, '_h');
	    _aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = _redefineAll($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode$1 ? process$2.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = _ctx($resolve, promise, 1);
	    this.reject = _ctx($reject, promise, 1);
	  };
	  _newPromiseCapability.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Promise: $Promise });
	_setToStringTag($Promise, PROMISE);
	_setSpecies(PROMISE);
	Wrapper = _core[PROMISE];

	// statics
	_export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	_export(_export.S + _export.F * (_library || !USE_NATIVE$1), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
	  }
	});
	_export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = _perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      _forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = _perform(function () {
	      _forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});

	var _validateCollection = function (it, TYPE) {
	  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};

	var dP$5 = _objectDp.f;









	var fastKey = _meta.fastKey;

	var SIZE = _descriptors ? '_s' : 'size';

	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};

	var _collectionStrong = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      _anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = _objectCreate(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    _redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = _validateCollection(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        _validateCollection(this, NAME);
	        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(_validateCollection(this, NAME), key);
	      }
	    });
	    if (_descriptors) dP$5(C.prototype, 'size', {
	      get: function () {
	        return _validateCollection(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    _iterDefine(C, NAME, function (iterated, kind) {
	      this._t = _validateCollection(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return _iterStep(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return _iterStep(0, entry.k);
	      if (kind == 'values') return _iterStep(0, entry.v);
	      return _iterStep(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    _setSpecies(NAME);
	  }
	};

	var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = _global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  var fixMethod = function (KEY) {
	    var fn = proto[KEY];
	    _redefine(proto, KEY,
	      KEY == 'delete' ? function (a) {
	        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    _redefineAll(C.prototype, methods);
	    _meta.NEED = true;
	  } else {
	    var instance = new C();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = _fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    var ACCEPT_ITERABLES = _iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && _fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        _anInstance(target, C, NAME);
	        var that = _inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }

	  _setToStringTag(C, NAME);

	  O[NAME] = C;
	  _export(_export.G + _export.W + _export.F * (C != Base), O);

	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

	var MAP = 'Map';

	// 23.1 Map Objects
	var es6_map = _collection(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, _collectionStrong, true);

	var SET = 'Set';

	// 23.2 Set Objects
	var es6_set = _collection(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, _collectionStrong);

	var getWeak = _meta.getWeak;







	var arrayFind = _arrayMethods(5);
	var arrayFindIndex = _arrayMethods(6);
	var id$1 = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function () {
	  this.a = [];
	};
	var findUncaughtFrozen = function (store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	var _collectionWeak = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      _anInstance(that, C, NAME, '_i');
	      that._t = NAME;      // collection type
	      that._i = id$1++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    _redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function (key) {
	        if (!_isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
	        return data && _has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!_isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
	        return data && _has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var data = getWeak(_anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

	var es6_weakMap = createCommonjsModule(function (module) {

	var each = _arrayMethods(0);






	var NATIVE_WEAK_MAP = _validateCollection;
	var IS_IE11 = !_global.ActiveXObject && 'ActiveXObject' in _global;
	var WEAK_MAP = 'WeakMap';
	var getWeak = _meta.getWeak;
	var isExtensible = Object.isExtensible;
	var uncaughtFrozenStore = _collectionWeak.ufstore;
	var InternalMap;

	var wrapper = function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (_isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);

	// IE11 WeakMap frozen keys fix
	if (NATIVE_WEAK_MAP && IS_IE11) {
	  InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
	  _objectAssign(InternalMap.prototype, methods);
	  _meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype;
	    var method = proto[key];
	    _redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (_isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}
	});

	var WEAK_SET = 'WeakSet';

	// 23.4 WeakSet Objects
	_collection(WEAK_SET, function (get) {
	  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return _collectionWeak.def(_validateCollection(this, WEAK_SET), value, true);
	  }
	}, _collectionWeak, false, true);

	var TYPED = _uid('typed_array');
	var VIEW = _uid('view');
	var ABV = !!(_global.ArrayBuffer && _global.DataView);
	var CONSTR = ABV;
	var i$1 = 0;
	var l = 9;
	var Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while (i$1 < l) {
	  if (Typed = _global[TypedArrayConstructors[i$1++]]) {
	    _hide(Typed.prototype, TYPED, true);
	    _hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	var _typed = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};

	// https://tc39.github.io/ecma262/#sec-toindex


	var _toIndex = function (it) {
	  if (it === undefined) return 0;
	  var number = _toInteger(it);
	  var length = _toLength(number);
	  if (number !== length) throw RangeError('Wrong length!');
	  return length;
	};

	var _typedBuffer = createCommonjsModule(function (module, exports) {











	var gOPN = _objectGopn.f;
	var dP = _objectDp.f;


	var ARRAY_BUFFER = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH = 'Wrong length!';
	var WRONG_INDEX = 'Wrong index!';
	var $ArrayBuffer = _global[ARRAY_BUFFER];
	var $DataView = _global[DATA_VIEW];
	var Math = _global.Math;
	var RangeError = _global.RangeError;
	// eslint-disable-next-line no-shadow-restricted-names
	var Infinity = _global.Infinity;
	var BaseBuffer = $ArrayBuffer;
	var abs = Math.abs;
	var pow = Math.pow;
	var floor = Math.floor;
	var log = Math.log;
	var LN2 = Math.LN2;
	var BUFFER = 'buffer';
	var BYTE_LENGTH = 'byteLength';
	var BYTE_OFFSET = 'byteOffset';
	var $BUFFER = _descriptors ? '_b' : BUFFER;
	var $LENGTH = _descriptors ? '_l' : BYTE_LENGTH;
	var $OFFSET = _descriptors ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	function packIEEE754(value, mLen, nBytes) {
	  var buffer = new Array(nBytes);
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
	  var i = 0;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	  var e, m, c;
	  value = abs(value);
	  // eslint-disable-next-line no-self-compare
	  if (value != value || value === Infinity) {
	    // eslint-disable-next-line no-self-compare
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	}
	function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = eLen - 7;
	  var i = nBytes - 1;
	  var s = buffer[i--];
	  var e = s & 127;
	  var m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	}

	function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	}
	function packI8(it) {
	  return [it & 0xff];
	}
	function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	}
	function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	}
	function packF64(it) {
	  return packIEEE754(it, 52, 8);
	}
	function packF32(it) {
	  return packIEEE754(it, 23, 4);
	}

	function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
	}

	function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = _toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	}
	function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = _toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	}

	if (!_typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    _anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
	    var byteLength = _toIndex(length);
	    this._b = _arrayFill.call(new Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    _anInstance(this, $DataView, DATA_VIEW);
	    _anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH];
	    var offset = _toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : _toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if (_descriptors) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  _redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!_fails(function () {
	    $ArrayBuffer(1);
	  }) || !_fails(function () {
	    new $ArrayBuffer(-1); // eslint-disable-line no-new
	  }) || _fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	    new $ArrayBuffer(1.5); // eslint-disable-line no-new
	    new $ArrayBuffer(NaN); // eslint-disable-line no-new
	    return $ArrayBuffer.name != ARRAY_BUFFER;
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      _anInstance(this, $ArrayBuffer);
	      return new BaseBuffer(_toIndex(length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) _hide($ArrayBuffer, key, BaseBuffer[key]);
	    }
	    ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2));
	  var $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) _redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	_setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	_setToStringTag($DataView, DATA_VIEW);
	_hide($DataView[PROTOTYPE], _typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;
	});

	var ArrayBuffer$1 = _global.ArrayBuffer;

	var $ArrayBuffer = _typedBuffer.ArrayBuffer;
	var $DataView = _typedBuffer.DataView;
	var $isView = _typed.ABV && ArrayBuffer$1.isView;
	var $slice = $ArrayBuffer.prototype.slice;
	var VIEW$1 = _typed.VIEW;
	var ARRAY_BUFFER = 'ArrayBuffer';

	_export(_export.G + _export.W + _export.F * (ArrayBuffer$1 !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

	_export(_export.S + _export.F * !_typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || _isObject(it) && VIEW$1 in it;
	  }
	});

	_export(_export.P + _export.U + _export.F * _fails(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(_anObject(this), start); // FF fix
	    var len = _anObject(this).byteLength;
	    var first = _toAbsoluteIndex(start, len);
	    var fin = _toAbsoluteIndex(end === undefined ? len : end, len);
	    var result = new (_speciesConstructor(this, $ArrayBuffer))(_toLength(fin - first));
	    var viewS = new $DataView(this);
	    var viewT = new $DataView(result);
	    var index = 0;
	    while (first < fin) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	_setSpecies(ARRAY_BUFFER);

	_export(_export.G + _export.W + _export.F * !_typed.ABV, {
	  DataView: _typedBuffer.DataView
	});

	var _typedArray = createCommonjsModule(function (module) {
	if (_descriptors) {
	  var LIBRARY = _library;
	  var global = _global;
	  var fails = _fails;
	  var $export = _export;
	  var $typed = _typed;
	  var $buffer = _typedBuffer;
	  var ctx = _ctx;
	  var anInstance = _anInstance;
	  var propertyDesc = _propertyDesc;
	  var hide = _hide;
	  var redefineAll = _redefineAll;
	  var toInteger = _toInteger;
	  var toLength = _toLength;
	  var toIndex = _toIndex;
	  var toAbsoluteIndex = _toAbsoluteIndex;
	  var toPrimitive = _toPrimitive;
	  var has = _has;
	  var classof = _classof;
	  var isObject = _isObject;
	  var toObject = _toObject;
	  var isArrayIter = _isArrayIter;
	  var create = _objectCreate;
	  var getPrototypeOf = _objectGpo;
	  var gOPN = _objectGopn.f;
	  var getIterFn = core_getIteratorMethod;
	  var uid = _uid;
	  var wks = _wks;
	  var createArrayMethod = _arrayMethods;
	  var createArrayIncludes = _arrayIncludes;
	  var speciesConstructor = _speciesConstructor;
	  var ArrayIterators = es6_array_iterator;
	  var Iterators = _iterators;
	  var $iterDetect = _iterDetect;
	  var setSpecies = _setSpecies;
	  var arrayFill = _arrayFill;
	  var arrayCopyWithin = _arrayCopyWithin;
	  var $DP = _objectDp;
	  var $GOPD = _objectGopd;
	  var dP = $DP.f;
	  var gOPD = $GOPD.f;
	  var RangeError = global.RangeError;
	  var TypeError = global.TypeError;
	  var Uint8Array = global.Uint8Array;
	  var ARRAY_BUFFER = 'ArrayBuffer';
	  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
	  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	  var PROTOTYPE = 'prototype';
	  var ArrayProto = Array[PROTOTYPE];
	  var $ArrayBuffer = $buffer.ArrayBuffer;
	  var $DataView = $buffer.DataView;
	  var arrayForEach = createArrayMethod(0);
	  var arrayFilter = createArrayMethod(2);
	  var arraySome = createArrayMethod(3);
	  var arrayEvery = createArrayMethod(4);
	  var arrayFind = createArrayMethod(5);
	  var arrayFindIndex = createArrayMethod(6);
	  var arrayIncludes = createArrayIncludes(true);
	  var arrayIndexOf = createArrayIncludes(false);
	  var arrayValues = ArrayIterators.values;
	  var arrayKeys = ArrayIterators.keys;
	  var arrayEntries = ArrayIterators.entries;
	  var arrayLastIndexOf = ArrayProto.lastIndexOf;
	  var arrayReduce = ArrayProto.reduce;
	  var arrayReduceRight = ArrayProto.reduceRight;
	  var arrayJoin = ArrayProto.join;
	  var arraySort = ArrayProto.sort;
	  var arraySlice = ArrayProto.slice;
	  var arrayToString = ArrayProto.toString;
	  var arrayToLocaleString = ArrayProto.toLocaleString;
	  var ITERATOR = wks('iterator');
	  var TAG = wks('toStringTag');
	  var TYPED_CONSTRUCTOR = uid('typed_constructor');
	  var DEF_CONSTRUCTOR = uid('def_constructor');
	  var ALL_CONSTRUCTORS = $typed.CONSTR;
	  var TYPED_ARRAY = $typed.TYPED;
	  var VIEW = $typed.VIEW;
	  var WRONG_LENGTH = 'Wrong length!';

	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function () {
	    // eslint-disable-next-line no-undef
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });

	  var toOffset = function (it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function (it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function (C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function (O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function (C, list) {
	    var index = 0;
	    var length = list.length;
	    var result = allocate(C, length);
	    while (length > index) result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function (it, key, internal) {
	    dP(it, key, { get: function () { return this._d[internal]; } });
	  };

	  var $from = function from(source /* , mapfn, thisArg */) {
	    var O = toObject(source);
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var iterFn = getIterFn(O);
	    var i, length, values, result, step, iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      } O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/* ...items */) {
	    var index = 0;
	    var length = arguments.length;
	    var result = allocate(this, length);
	    while (length > index) result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /* , end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /* , thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /* , thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /* , thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /* , thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /* , thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /* , fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /* , fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) { // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /* , thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this;
	      var length = validate(that).length;
	      var middle = Math.floor(length / 2);
	      var index = 0;
	      var value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      } return that;
	    },
	    some: function some(callbackfn /* , thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this);
	      var length = O.length;
	      var $begin = toAbsoluteIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /* , offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1);
	    var length = this.length;
	    var src = toObject(arrayLike);
	    var len = toLength(src.length);
	    var index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function (target, key) {
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ) {
	      target[key] = desc.value;
	      return target;
	    } return dP(target, key, desc);
	  };

	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });

	  if (fails(function () { arrayToString.call({}); })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function () { /* noop */ },
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function () { return this[TYPED_ARRAY]; }
	  });

	  // eslint-disable-next-line max-statements
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + KEY;
	    var SETTER = 'set' + KEY;
	    var TypedArray = global[NAME];
	    var Base = TypedArray || {};
	    var TAC = TypedArray && getPrototypeOf(TypedArray);
	    var FORCED = !TypedArray || !$typed.ABV;
	    var O = {};
	    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function (that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function (that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function (that, index) {
	      dP(that, index, {
	        get: function () {
	          return getter(this, index);
	        },
	        set: function (value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0;
	        var offset = 0;
	        var buffer, byteLength, length, klass;
	        if (!isObject(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!fails(function () {
	      TypedArray(1);
	    }) || !fails(function () {
	      new TypedArray(-1); // eslint-disable-line no-new
	    }) || !$iterDetect(function (iter) {
	      new TypedArray(); // eslint-disable-line no-new
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(1.5); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(toIndex(data));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR];
	    var CORRECT_ITER_NAME = !!$nativeIterator
	      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
	    var $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function () { return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES
	    });

	    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
	      from: $from,
	      of: $of
	    });

	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });

	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () { /* empty */ };
	});

	_typedArray('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArray('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArray('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);

	_typedArray('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArray('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArray('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArray('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArray('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	_typedArray('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)



	var rApply = (_global.Reflect || {}).apply;
	var fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	_export(_export.S + _export.F * !_fails(function () {
	  rApply(function () { /* empty */ });
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = _aFunction(target);
	    var L = _anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])







	var rConstruct = (_global.Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = _fails(function () {
	  function F() { /* empty */ }
	  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !_fails(function () {
	  rConstruct(function () { /* empty */ });
	});

	_export(_export.S + _export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    _aFunction(Target);
	    _anObject(args);
	    var newTarget = arguments.length < 3 ? Target : _aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (_bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = _objectCreate(_isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return _isObject(result) ? result : instance;
	  }
	});

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)





	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	_export(_export.S + _export.F * _fails(function () {
	  // eslint-disable-next-line no-undef
	  Reflect.defineProperty(_objectDp.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    _anObject(target);
	    propertyKey = _toPrimitive(propertyKey, true);
	    _anObject(attributes);
	    try {
	      _objectDp.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)

	var gOPD$3 = _objectGopd.f;


	_export(_export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD$3(_anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

	// 26.1.5 Reflect.enumerate(target)


	var Enumerate = function (iterated) {
	  this._t = _anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = [];      // keys
	  var key;
	  for (key in iterated) keys.push(key);
	};
	_iterCreate(Enumerate, 'Object', function () {
	  var that = this;
	  var keys = that._k;
	  var key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});

	_export(_export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])







	function get(target, propertyKey /* , receiver */) {
	  var receiver = arguments.length < 3 ? target : arguments[2];
	  var desc, proto;
	  if (_anObject(target) === receiver) return target[propertyKey];
	  if (desc = _objectGopd.f(target, propertyKey)) return _has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if (_isObject(proto = _objectGpo(target))) return get(proto, propertyKey, receiver);
	}

	_export(_export.S, 'Reflect', { get: get });

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)




	_export(_export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return _objectGopd.f(_anObject(target), propertyKey);
	  }
	});

	// 26.1.8 Reflect.getPrototypeOf(target)




	_export(_export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return _objectGpo(_anObject(target));
	  }
	});

	// 26.1.9 Reflect.has(target, propertyKey)


	_export(_export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});

	// 26.1.10 Reflect.isExtensible(target)


	var $isExtensible = Object.isExtensible;

	_export(_export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    _anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

	// all object keys, includes non-enumerable and symbols



	var Reflect$1 = _global.Reflect;
	var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
	  var keys = _objectGopn.f(_anObject(it));
	  var getSymbols = _objectGops.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

	// 26.1.11 Reflect.ownKeys(target)


	_export(_export.S, 'Reflect', { ownKeys: _ownKeys });

	// 26.1.12 Reflect.preventExtensions(target)


	var $preventExtensions = Object.preventExtensions;

	_export(_export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    _anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])









	function set(target, propertyKey, V /* , receiver */) {
	  var receiver = arguments.length < 4 ? target : arguments[3];
	  var ownDesc = _objectGopd.f(_anObject(target), propertyKey);
	  var existingDescriptor, proto;
	  if (!ownDesc) {
	    if (_isObject(proto = _objectGpo(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = _propertyDesc(0);
	  }
	  if (_has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !_isObject(receiver)) return false;
	    if (existingDescriptor = _objectGopd.f(receiver, propertyKey)) {
	      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
	      existingDescriptor.value = V;
	      _objectDp.f(receiver, propertyKey, existingDescriptor);
	    } else _objectDp.f(receiver, propertyKey, _propertyDesc(0, V));
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	_export(_export.S, 'Reflect', { set: set });

	// 26.1.14 Reflect.setPrototypeOf(target, proto)



	if (_setProto) _export(_export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    _setProto.check(target, proto);
	    try {
	      _setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

	// https://github.com/tc39/Array.prototype.includes

	var $includes = _arrayIncludes(true);

	_export(_export.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	_addToUnscopables('includes');

	var includes = _core.Array.includes;

	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray




	var IS_CONCAT_SPREADABLE = _wks('isConcatSpreadable');

	function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? _ctx(mapper, thisArg, 3) : false;
	  var element, spreadable;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      spreadable = false;
	      if (_isObject(element)) {
	        spreadable = element[IS_CONCAT_SPREADABLE];
	        spreadable = spreadable !== undefined ? !!spreadable : _isArray(element);
	      }

	      if (spreadable && depth > 0) {
	        targetIndex = flattenIntoArray(target, original, element, _toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	}

	var _flattenIntoArray = flattenIntoArray;

	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap







	_export(_export.P, 'Array', {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = _toObject(this);
	    var sourceLen, A;
	    _aFunction(callbackfn);
	    sourceLen = _toLength(O.length);
	    A = _arraySpeciesCreate(O, 0);
	    _flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
	    return A;
	  }
	});

	_addToUnscopables('flatMap');

	var flatMap = _core.Array.flatMap;

	// https://github.com/tc39/proposal-string-pad-start-end




	var _stringPad = function (that, maxLength, fillString, left) {
	  var S = String(_defined(that));
	  var stringLength = S.length;
	  var fillStr = fillString === undefined ? ' ' : String(fillString);
	  var intMaxLength = _toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength;
	  var stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

	// https://github.com/tc39/proposal-string-pad-start-end




	// https://github.com/zloirock/core-js/issues/280
	var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);

	_export(_export.P + _export.F * WEBKIT_BUG, 'String', {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

	var padStart = _core.String.padStart;

	// https://github.com/tc39/proposal-string-pad-start-end




	// https://github.com/zloirock/core-js/issues/280
	var WEBKIT_BUG$1 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);

	_export(_export.P + _export.F * WEBKIT_BUG$1, 'String', {
	  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
	    return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

	var padEnd = _core.String.padEnd;

	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	_stringTrim('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');

	var trimStart = _core.String.trimLeft;

	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	_stringTrim('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

	var trimEnd = _core.String.trimRight;

	_wksDefine('asyncIterator');

	var asyncIterator = _wksExt.f('asyncIterator');

	// https://github.com/tc39/proposal-object-getownpropertydescriptors






	_export(_export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = _toIobject(object);
	    var getDesc = _objectGopd.f;
	    var keys = _ownKeys(O);
	    var result = {};
	    var i = 0;
	    var key, desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) _createProperty(result, key, desc);
	    }
	    return result;
	  }
	});

	var getOwnPropertyDescriptors = _core.Object.getOwnPropertyDescriptors;

	var isEnum$1 = _objectPie.f;
	var _objectToArray = function (isEntries) {
	  return function (it) {
	    var O = _toIobject(it);
	    var keys = _objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!_descriptors || isEnum$1.call(O, key)) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	// https://github.com/tc39/proposal-object-values-entries

	var $values = _objectToArray(false);

	_export(_export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});

	var values = _core.Object.values;

	// https://github.com/tc39/proposal-object-values-entries

	var $entries = _objectToArray(true);

	_export(_export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});

	var entries = _core.Object.entries;

	_export(_export.P + _export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = _speciesConstructor(this, _core.Promise || _global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return _promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return _promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });

	var _finally = _core.Promise['finally'];

	// ie9- setTimeout & setInterval additional parameters fix



	var slice = [].slice;
	var MSIE = /MSIE .\./.test(_userAgent); // <- dirty ie9- check
	var wrap$1 = function (set) {
	  return function (fn, time /* , ...args */) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice.call(arguments, 2) : false;
	    return set(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
	    } : fn, time);
	  };
	};
	_export(_export.G + _export.B + _export.F * MSIE, {
	  setTimeout: wrap$1(_global.setTimeout),
	  setInterval: wrap$1(_global.setInterval)
	});

	_export(_export.G + _export.B, {
	  setImmediate: _task.set,
	  clearImmediate: _task.clear
	});

	var ITERATOR$4 = _wks('iterator');
	var TO_STRING_TAG = _wks('toStringTag');
	var ArrayValues = _iterators.Array;

	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};

	for (var collections = _objectKeys(DOMIterables), i$2 = 0; i$2 < collections.length; i$2++) {
	  var NAME$1 = collections[i$2];
	  var explicit = DOMIterables[NAME$1];
	  var Collection = _global[NAME$1];
	  var proto$3 = Collection && Collection.prototype;
	  var key$1;
	  if (proto$3) {
	    if (!proto$3[ITERATOR$4]) _hide(proto$3, ITERATOR$4, ArrayValues);
	    if (!proto$3[TO_STRING_TAG]) _hide(proto$3, TO_STRING_TAG, NAME$1);
	    _iterators[NAME$1] = ArrayValues;
	    if (explicit) for (key$1 in es6_array_iterator) if (!proto$3[key$1]) _redefine(proto$3, key$1, es6_array_iterator[key$1], true);
	  }
	}

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

	var support = {
	  searchParams: 'URLSearchParams' in self,
	  iterable: 'Symbol' in self && 'iterator' in Symbol,
	  blob:
	    'FileReader' in self &&
	    'Blob' in self &&
	    (function() {
	      try {
	        new Blob();
	        return true
	      } catch (e) {
	        return false
	      }
	    })(),
	  formData: 'FormData' in self,
	  arrayBuffer: 'ArrayBuffer' in self
	};

	function isDataView(obj) {
	  return obj && DataView.prototype.isPrototypeOf(obj)
	}

	if (support.arrayBuffer) {
	  var viewClasses = [
	    '[object Int8Array]',
	    '[object Uint8Array]',
	    '[object Uint8ClampedArray]',
	    '[object Int16Array]',
	    '[object Uint16Array]',
	    '[object Int32Array]',
	    '[object Uint32Array]',
	    '[object Float32Array]',
	    '[object Float64Array]'
	  ];

	  var isArrayBufferView =
	    ArrayBuffer.isView ||
	    function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    };
	}

	function normalizeName(name) {
	  if (typeof name !== 'string') {
	    name = String(name);
	  }
	  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
	    throw new TypeError('Invalid character in header field name')
	  }
	  return name.toLowerCase()
	}

	function normalizeValue(value) {
	  if (typeof value !== 'string') {
	    value = String(value);
	  }
	  return value
	}

	// Build a destructive iterator for the value list
	function iteratorFor(items) {
	  var iterator = {
	    next: function() {
	      var value = items.shift();
	      return {done: value === undefined, value: value}
	    }
	  };

	  if (support.iterable) {
	    iterator[Symbol.iterator] = function() {
	      return iterator
	    };
	  }

	  return iterator
	}

	function Headers(headers) {
	  this.map = {};

	  if (headers instanceof Headers) {
	    headers.forEach(function(value, name) {
	      this.append(name, value);
	    }, this);
	  } else if (Array.isArray(headers)) {
	    headers.forEach(function(header) {
	      this.append(header[0], header[1]);
	    }, this);
	  } else if (headers) {
	    Object.getOwnPropertyNames(headers).forEach(function(name) {
	      this.append(name, headers[name]);
	    }, this);
	  }
	}

	Headers.prototype.append = function(name, value) {
	  name = normalizeName(name);
	  value = normalizeValue(value);
	  var oldValue = this.map[name];
	  this.map[name] = oldValue ? oldValue + ', ' + value : value;
	};

	Headers.prototype['delete'] = function(name) {
	  delete this.map[normalizeName(name)];
	};

	Headers.prototype.get = function(name) {
	  name = normalizeName(name);
	  return this.has(name) ? this.map[name] : null
	};

	Headers.prototype.has = function(name) {
	  return this.map.hasOwnProperty(normalizeName(name))
	};

	Headers.prototype.set = function(name, value) {
	  this.map[normalizeName(name)] = normalizeValue(value);
	};

	Headers.prototype.forEach = function(callback, thisArg) {
	  for (var name in this.map) {
	    if (this.map.hasOwnProperty(name)) {
	      callback.call(thisArg, this.map[name], name, this);
	    }
	  }
	};

	Headers.prototype.keys = function() {
	  var items = [];
	  this.forEach(function(value, name) {
	    items.push(name);
	  });
	  return iteratorFor(items)
	};

	Headers.prototype.values = function() {
	  var items = [];
	  this.forEach(function(value) {
	    items.push(value);
	  });
	  return iteratorFor(items)
	};

	Headers.prototype.entries = function() {
	  var items = [];
	  this.forEach(function(value, name) {
	    items.push([name, value]);
	  });
	  return iteratorFor(items)
	};

	if (support.iterable) {
	  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	}

	function consumed(body) {
	  if (body.bodyUsed) {
	    return Promise.reject(new TypeError('Already read'))
	  }
	  body.bodyUsed = true;
	}

	function fileReaderReady(reader) {
	  return new Promise(function(resolve, reject) {
	    reader.onload = function() {
	      resolve(reader.result);
	    };
	    reader.onerror = function() {
	      reject(reader.error);
	    };
	  })
	}

	function readBlobAsArrayBuffer(blob) {
	  var reader = new FileReader();
	  var promise = fileReaderReady(reader);
	  reader.readAsArrayBuffer(blob);
	  return promise
	}

	function readBlobAsText(blob) {
	  var reader = new FileReader();
	  var promise = fileReaderReady(reader);
	  reader.readAsText(blob);
	  return promise
	}

	function readArrayBufferAsText(buf) {
	  var view = new Uint8Array(buf);
	  var chars = new Array(view.length);

	  for (var i = 0; i < view.length; i++) {
	    chars[i] = String.fromCharCode(view[i]);
	  }
	  return chars.join('')
	}

	function bufferClone(buf) {
	  if (buf.slice) {
	    return buf.slice(0)
	  } else {
	    var view = new Uint8Array(buf.byteLength);
	    view.set(new Uint8Array(buf));
	    return view.buffer
	  }
	}

	function Body() {
	  this.bodyUsed = false;

	  this._initBody = function(body) {
	    this._bodyInit = body;
	    if (!body) {
	      this._bodyText = '';
	    } else if (typeof body === 'string') {
	      this._bodyText = body;
	    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	      this._bodyBlob = body;
	    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	      this._bodyFormData = body;
	    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	      this._bodyText = body.toString();
	    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	      this._bodyArrayBuffer = bufferClone(body.buffer);
	      // IE 10-11 can't handle a DataView body.
	      this._bodyInit = new Blob([this._bodyArrayBuffer]);
	    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	      this._bodyArrayBuffer = bufferClone(body);
	    } else {
	      this._bodyText = body = Object.prototype.toString.call(body);
	    }

	    if (!this.headers.get('content-type')) {
	      if (typeof body === 'string') {
	        this.headers.set('content-type', 'text/plain;charset=UTF-8');
	      } else if (this._bodyBlob && this._bodyBlob.type) {
	        this.headers.set('content-type', this._bodyBlob.type);
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	      }
	    }
	  };

	  if (support.blob) {
	    this.blob = function() {
	      var rejected = consumed(this);
	      if (rejected) {
	        return rejected
	      }

	      if (this._bodyBlob) {
	        return Promise.resolve(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as blob')
	      } else {
	        return Promise.resolve(new Blob([this._bodyText]))
	      }
	    };

	    this.arrayBuffer = function() {
	      if (this._bodyArrayBuffer) {
	        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	      } else {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }
	    };
	  }

	  this.text = function() {
	    var rejected = consumed(this);
	    if (rejected) {
	      return rejected
	    }

	    if (this._bodyBlob) {
	      return readBlobAsText(this._bodyBlob)
	    } else if (this._bodyArrayBuffer) {
	      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	    } else if (this._bodyFormData) {
	      throw new Error('could not read FormData body as text')
	    } else {
	      return Promise.resolve(this._bodyText)
	    }
	  };

	  if (support.formData) {
	    this.formData = function() {
	      return this.text().then(decode)
	    };
	  }

	  this.json = function() {
	    return this.text().then(JSON.parse)
	  };

	  return this
	}

	// HTTP methods whose capitalization should be normalized
	var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	function normalizeMethod(method) {
	  var upcased = method.toUpperCase();
	  return methods.indexOf(upcased) > -1 ? upcased : method
	}

	function Request(input, options) {
	  options = options || {};
	  var body = options.body;

	  if (input instanceof Request) {
	    if (input.bodyUsed) {
	      throw new TypeError('Already read')
	    }
	    this.url = input.url;
	    this.credentials = input.credentials;
	    if (!options.headers) {
	      this.headers = new Headers(input.headers);
	    }
	    this.method = input.method;
	    this.mode = input.mode;
	    this.signal = input.signal;
	    if (!body && input._bodyInit != null) {
	      body = input._bodyInit;
	      input.bodyUsed = true;
	    }
	  } else {
	    this.url = String(input);
	  }

	  this.credentials = options.credentials || this.credentials || 'same-origin';
	  if (options.headers || !this.headers) {
	    this.headers = new Headers(options.headers);
	  }
	  this.method = normalizeMethod(options.method || this.method || 'GET');
	  this.mode = options.mode || this.mode || null;
	  this.signal = options.signal || this.signal;
	  this.referrer = null;

	  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	    throw new TypeError('Body not allowed for GET or HEAD requests')
	  }
	  this._initBody(body);
	}

	Request.prototype.clone = function() {
	  return new Request(this, {body: this._bodyInit})
	};

	function decode(body) {
	  var form = new FormData();
	  body
	    .trim()
	    .split('&')
	    .forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	  return form
	}

	function parseHeaders(rawHeaders) {
	  var headers = new Headers();
	  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	  // https://tools.ietf.org/html/rfc7230#section-3.2
	  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
	  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
	    var parts = line.split(':');
	    var key = parts.shift().trim();
	    if (key) {
	      var value = parts.join(':').trim();
	      headers.append(key, value);
	    }
	  });
	  return headers
	}

	Body.call(Request.prototype);

	function Response(bodyInit, options) {
	  if (!options) {
	    options = {};
	  }

	  this.type = 'default';
	  this.status = options.status === undefined ? 200 : options.status;
	  this.ok = this.status >= 200 && this.status < 300;
	  this.statusText = 'statusText' in options ? options.statusText : 'OK';
	  this.headers = new Headers(options.headers);
	  this.url = options.url || '';
	  this._initBody(bodyInit);
	}

	Body.call(Response.prototype);

	Response.prototype.clone = function() {
	  return new Response(this._bodyInit, {
	    status: this.status,
	    statusText: this.statusText,
	    headers: new Headers(this.headers),
	    url: this.url
	  })
	};

	Response.error = function() {
	  var response = new Response(null, {status: 0, statusText: ''});
	  response.type = 'error';
	  return response
	};

	var redirectStatuses = [301, 302, 303, 307, 308];

	Response.redirect = function(url, status) {
	  if (redirectStatuses.indexOf(status) === -1) {
	    throw new RangeError('Invalid status code')
	  }

	  return new Response(null, {status: status, headers: {location: url}})
	};

	var DOMException = self.DOMException;
	try {
	  new DOMException();
	} catch (err) {
	  DOMException = function(message, name) {
	    this.message = message;
	    this.name = name;
	    var error = Error(message);
	    this.stack = error.stack;
	  };
	  DOMException.prototype = Object.create(Error.prototype);
	  DOMException.prototype.constructor = DOMException;
	}

	function fetch$1(input, init) {
	  return new Promise(function(resolve, reject) {
	    var request = new Request(input, init);

	    if (request.signal && request.signal.aborted) {
	      return reject(new DOMException('Aborted', 'AbortError'))
	    }

	    var xhr = new XMLHttpRequest();

	    function abortXhr() {
	      xhr.abort();
	    }

	    xhr.onload = function() {
	      var options = {
	        status: xhr.status,
	        statusText: xhr.statusText,
	        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	      };
	      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	      var body = 'response' in xhr ? xhr.response : xhr.responseText;
	      resolve(new Response(body, options));
	    };

	    xhr.onerror = function() {
	      reject(new TypeError('Network request failed'));
	    };

	    xhr.ontimeout = function() {
	      reject(new TypeError('Network request failed'));
	    };

	    xhr.onabort = function() {
	      reject(new DOMException('Aborted', 'AbortError'));
	    };

	    xhr.open(request.method, request.url, true);

	    if (request.credentials === 'include') {
	      xhr.withCredentials = true;
	    } else if (request.credentials === 'omit') {
	      xhr.withCredentials = false;
	    }

	    if ('responseType' in xhr && support.blob) {
	      xhr.responseType = 'blob';
	    }

	    request.headers.forEach(function(value, name) {
	      xhr.setRequestHeader(name, value);
	    });

	    if (request.signal) {
	      request.signal.addEventListener('abort', abortXhr);

	      xhr.onreadystatechange = function() {
	        // DONE (success or failure)
	        if (xhr.readyState === 4) {
	          request.signal.removeEventListener('abort', abortXhr);
	        }
	      };
	    }

	    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	  })
	}

	fetch$1.polyfill = true;

	if (!self.fetch) {
	  self.fetch = fetch$1;
	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;
	}

	function _defineProperty(obj, key, value) {
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

	var defineProperty$1 = _defineProperty;

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      defineProperty$1(target, key, source[key]);
	    });
	  }

	  return target;
	}

	var objectSpread = _objectSpread;

	/** @module SearchStates */

	/**
	 * SearchStates is an ENUM for the various stages of searching,
	 * used to show different templates
	 * @enum {string}
	 */
	var SearchStates = {
	  PRE_SEARCH: 'pre-search',
	  SEARCH_LOADING: 'search-loading',
	  SEARCH_COMPLETE: 'search-complete'
	};

	/** @module Result */
	var Result = function Result(data) {
	  if (data === void 0) {
	    data = {};
	  }

	  /**
	   * The raw profile data
	   * @type {Object}
	   * @private
	   */
	  this._raw = data.raw || null;
	  /**
	   * The formatted profile data
	   * @type {Object}
	   * @private
	   */

	  this._formatted = data.formatted;
	  /**
	   * The index number of the result
	   * @type {Number}
	   */

	  this.ordinal = data.ordinal || null;
	  /**
	   * The title of the result card
	   * @type {string|null}
	   */

	  this.title = data.title || null;
	  /**
	   * The body of the details section of the result card, can contain HTML
	   * @type {string| null}
	   */

	  this.details = data.details || null;
	  /**
	   * The destination link for the title of the result card
	   * @type {string|null}
	   */

	  this.link = data.link || null;
	  /**
	   * The Entity ID, or other unique identifier, used for to power interactivity
	   * @type {string|null}
	   */

	  this.id = data.id || null;
	  /**
	   * The subtitle on the result card
	   * @type {string|null}
	   */

	  this.subtitle = data.subtitle || null;
	  /**
	   * The class modifier, usually derived from the vertical configuration ID
	   * Used to apply different styling to different result card types
	   * @type {string|null}
	   */

	  this.modifier = data.modifier || null;
	  /**
	   * A large date, of the format { month: 'Jan', day: '01' }
	   * @type {Object|null}
	   */

	  this.bigDate = data.bigDate || null;
	  /**
	   * An image profile object, expected to have a url property
	   * @type {Object|null}
	   */

	  this.image = data.image || null;
	  /**
	   * An array of calls to action, of the format:
	   * { icon: '', url: '', text: '', eventType: '', eventOptions: {}}
	   * @type {Array}
	   */

	  this.callsToAction = data.callsToAction || [];
	  /**
	   * Determines if an accordian result should be collapsed by default
	   * @type {boolean}
	   */

	  this.collapsed = data.collapsed || true;
	};

	/** @module ResultFactory */

	var ResultFactory =
	/*#__PURE__*/
	function () {
	  function ResultFactory() {}

	  /**
	   * Converts an API result object into a Result view model.
	   * Includes default mappings of GoogleCustomSearchEngine results to
	   * the fields exposed by the template.
	   * @param resultsData  {Array} expected format: { data: { ... }, highlightedFields: { ... }}
	   * @param {Object.<string, function>} formatters The formatters to apply to the result
	   * @param {string} verticalId The vertical of these results
	   * @param {string} source Backend source of these results
	   * @returns {Result[]}
	   */
	  ResultFactory.from = function from(resultsData, formatters, verticalId, source) {
	    var results = [];

	    var _loop = function _loop(i) {
	      // TODO use resultData.highlightedFields to
	      // transform resultData.data into html-friendly strings that highlight values.
	      // Check for new data format, otherwise fallback to legacy
	      var data = resultsData[i].data || resultsData[i];
	      var formattedData = {};

	      if (Object.keys(formatters).length > 0) {
	        Object.entries(data).forEach(function (_ref) {
	          var key = _ref[0],
	              val = _ref[1];

	          if (formatters[key]) {
	            formattedData[key] = formatters[key](val, data, verticalId, false);
	          }
	        });
	      }

	      switch (source) {
	        case 'GOOGLE_CSE':
	          results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
	          break;

	        case 'BING_CSE':
	          results.push(ResultFactory.fromBingCustomSearchEngine(data));
	          break;

	        case 'ZENDESK':
	          results.push(ResultFactory.fromZendeskSearchEngine(data));
	          break;

	        case 'ALGOLIA':
	          results.push(ResultFactory.fromAlgoliaSearchEngine(data));
	          break;

	        default:
	          results.push(ResultFactory.fromGeneric(data, formattedData, i));
	      }
	    };

	    for (var i = 0; i < resultsData.length; i++) {
	      _loop(i);
	    }

	    return results;
	  }
	  /**
	   * Converts an API result object into a generic result view model.
	   * @param data
	   * @param formattedData
	   * @param index
	   * @returns {Result}
	   */
	  ;

	  ResultFactory.fromGeneric = function fromGeneric(data, formattedData, index) {
	    return new Result({
	      raw: data,
	      formatted: formattedData,
	      title: formattedData.name || data.name,
	      details: formattedData.description || this.truncate(data.description),
	      link: data.website,
	      id: data.id,
	      ordinal: index + 1
	    });
	  }
	  /**
	   * Converts an API result object into a result view model.
	   * Maps view model fields based on the API data for a Google Custom Search Engine object.
	   * @param data
	   * @returns {Result}
	   */
	  ;

	  ResultFactory.fromGoogleCustomSearchEngine = function fromGoogleCustomSearchEngine(data) {
	    return new Result({
	      raw: data,
	      title: data.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
	      details: data.htmlSnippet,
	      link: data.link
	    });
	  }
	  /**
	   * Converts an API result object into a result view model.
	   * Maps view model fields based on the API data for a Bing Custom Search Engine object.
	   * @param data
	   * @returns {Result}
	   */
	  ;

	  ResultFactory.fromBingCustomSearchEngine = function fromBingCustomSearchEngine(data) {
	    return new Result({
	      raw: data,
	      title: data.name,
	      details: data.snippet,
	      link: data.url
	    });
	  }
	  /**
	   * Converts an API result object into a result view model.
	   * Maps view model fields based on the API data for a Zendesk Search Engine object.
	   * @param data
	   * @returns {Result}
	   */
	  ;

	  ResultFactory.fromZendeskSearchEngine = function fromZendeskSearchEngine(data) {
	    return new Result({
	      raw: data,
	      title: data.title,
	      details: data.snippet,
	      link: data.html_url
	    });
	  }
	  /**
	   * Converts an API result object into a result view model.
	   * Maps view model fields based on the API data for a Algolia Search Engine object.
	   * Details field is set to objectID since response has only one general field objectID.
	   * @param data
	   * @returns {Result}
	   */
	  ;

	  ResultFactory.fromAlgoliaSearchEngine = function fromAlgoliaSearchEngine(data) {
	    return new Result({
	      raw: data,
	      details: data.objectID,
	      id: data.objectID
	    });
	  }
	  /**
	   * Truncates strings to 250 characters, attempting to preserve whole words
	   * @param str {string} the string to truncate
	   * @param limit {Number} the maximum character length to return
	   * @param trailing {string} a trailing string to denote truncation, e.g. '...'
	   * @param sep {string} the word separator
	   * @returns {string}
	   */
	  ;

	  ResultFactory.truncate = function truncate(str, limit, trailing, sep) {
	    if (limit === void 0) {
	      limit = 250;
	    }

	    if (trailing === void 0) {
	      trailing = '...';
	    }

	    if (sep === void 0) {
	      sep = ' ';
	    }

	    if (!str || str.length <= limit) {
	      return str;
	    } // TODO (bmcginnis): split punctuation too so we don't end up with "foo,..."


	    var words = str.split(sep);
	    var max = limit - trailing.length;
	    var truncated = '';

	    for (var i = 0; i < words.length; i++) {
	      var word = words[i];

	      if (truncated.length + word.length > max || i !== 0 && truncated.length + word.length + sep.length > max) {
	        truncated += trailing;
	        break;
	      }

	      truncated += i === 0 ? word : sep + word;
	    }

	    return truncated;
	  };

	  return ResultFactory;
	}();

	/** @module Section */

	var Section =
	/*#__PURE__*/
	function () {
	  function Section(data, url, formatters) {
	    this.searchState = SearchStates.SEARCH_COMPLETE;
	    this.verticalConfigId = data.verticalConfigId || null;
	    this.resultsCount = data.resultsCount || 0;
	    this.encodedState = data.encodedState || '';
	    this.appliedQueryFilters = AppliedQueryFilter.from(data.appliedQueryFilters);
	    this.facets = data.facets || null;
	    this.results = ResultFactory.from(data.results, formatters, this.verticalConfigId, data.source);
	    this.map = Section.parseMap(data.results);
	    this.verticalURL = url || null;
	  }

	  Section.parseMap = function parseMap(results) {
	    var mapMarkers = [];
	    var centerCoordinates = {};

	    for (var j = 0; j < results.length; j++) {
	      // TODO(billy) Remove legacy fallback from all data format
	      var result = results[j].data || results[j];

	      if (result && result.yextDisplayCoordinate) {
	        if (!centerCoordinates.latitude) {
	          centerCoordinates = {
	            latitude: result.yextDisplayCoordinate.latitude,
	            longitude: result.yextDisplayCoordinate.longitude
	          };
	        }

	        mapMarkers.push({
	          item: result,
	          label: mapMarkers.length + 1,
	          latitude: result.yextDisplayCoordinate.latitude,
	          longitude: result.yextDisplayCoordinate.longitude
	        });
	      }
	    }

	    return {
	      'mapCenter': centerCoordinates,
	      'mapMarkers': mapMarkers
	    };
	  }
	  /**
	   * Create a section from the provided data
	   * @param {Object|Array} modules The result modules
	   * @param {Object} urls The tab urls
	   * @param {Object.<string, function>} formatters Field formatters for results
	   */
	  ;

	  Section.from = function from(modules, urls, formatters) {
	    var sections = [];

	    if (!modules) {
	      return sections;
	    }

	    if (!Array.isArray(modules)) {
	      return new Section(modules, null, formatters);
	    } // Our sections should contain a property of mapMarker objects


	    for (var i = 0; i < modules.length; i++) {
	      sections.push(new Section(modules[i], urls[modules[i].verticalConfigId], formatters));
	    }

	    return sections;
	  };

	  return Section;
	}();

	var AppliedQueryFilter =
	/*#__PURE__*/
	function () {
	  // Support legacy model and new model until fully migrated.
	  // TODO(billy) Remove the left expression during assignment when migrated.
	  function AppliedQueryFilter(appliedQueryFilter) {
	    this.key = appliedQueryFilter.key || appliedQueryFilter.displayKey;
	    this.value = appliedQueryFilter.value || appliedQueryFilter.displayValue;
	  }

	  AppliedQueryFilter.from = function from(appliedQueryFilters) {
	    var filters = [];

	    for (var i = 0; i < appliedQueryFilters.length; i++) {
	      filters.push(new AppliedQueryFilter(appliedQueryFilters[i]));
	    }

	    return filters;
	  };

	  return AppliedQueryFilter;
	}();

	/** @module UniversalResults */

	var UniversalResults =
	/*#__PURE__*/
	function () {
	  function UniversalResults(data) {
	    this.queryId = data.queryId || null;
	    this.sections = data.sections || [];
	    /**
	     * The current state of the search, used to render different templates before, during,
	     * and after loading
	     * @type {string}
	     */

	    this.searchState = data.searchState || SearchStates.SEARCH_COMPLETE;
	  }
	  /**
	   * Create universal results from server data
	   * @param {Object} response The server response
	   * @param {Object} urls The tab urls
	   * @param {Object.<string, function>} formatters The field formatters to use
	   */


	  UniversalResults.from = function from(response, urls, formatters) {
	    return new UniversalResults({
	      queryId: response.queryId,
	      sections: Section.from(response.modules, urls, formatters)
	    });
	  }
	  /**
	   * Construct a UnivervalResults object representing loading results
	   * @return {UniversalResults}
	   */
	  ;

	  UniversalResults.searchLoading = function searchLoading() {
	    return new UniversalResults({
	      searchState: SearchStates.SEARCH_LOADING
	    });
	  };

	  return UniversalResults;
	}();

	/** @module DirectAnswer */
	var DirectAnswer =
	/*#__PURE__*/
	function () {
	  function DirectAnswer(directAnswer) {
	    if (directAnswer === void 0) {
	      directAnswer = {};
	    }

	    Object.assign(this, directAnswer);
	    Object.freeze(this);
	  }
	  /**
	   * Create a DirectAnswer model from the given server data and formatters
	   * @param {Object} response The server direct answer
	   * @param {Object.<string, function>} formatters The formatters to apply to this direct answer
	   */


	  DirectAnswer.from = function from(response, formatters) {
	    var data = objectSpread({}, response);

	    var answer = data.answer,
	        relatedItem = data.relatedItem;

	    if (answer && formatters[answer.fieldApiName]) {
	      answer.value = formatters[answer.fieldApiName](answer.value, relatedItem.data.fieldValues, relatedItem.verticalConfigId, true);
	    }

	    return new DirectAnswer(data);
	  };

	  return DirectAnswer;
	}();

	/** @module Navigation */
	var Navigation =
	/*#__PURE__*/
	function () {
	  function Navigation(tabOrder) {
	    this.tabOrder = tabOrder || [];
	    Object.freeze(this);
	  }

	  Navigation.from = function from(modules) {
	    var nav = [];

	    if (!modules || !Array.isArray(modules)) {
	      return nav;
	    }

	    for (var i = 0; i < modules.length; i++) {
	      nav.push(modules[i].verticalConfigId);
	    }

	    return new Navigation(nav);
	  };

	  return Navigation;
	}();

	var VerticalResults =
	/*#__PURE__*/
	function () {
	  function VerticalResults(data) {
	    if (data === void 0) {
	      data = {};
	    }

	    Object.assign(this, {
	      searchState: SearchStates.SEARCH_COMPLETE
	    }, data);
	    Object.freeze(this);
	  }
	  /**
	   * Append the provided results to the current results
	   * @param {VerticalResults} results the results to append to the current results
	   */


	  var _proto = VerticalResults.prototype;

	  _proto.append = function append(results) {
	    var merged = objectSpread({}, this);

	    merged.results = this.results.concat(results.results);
	    merged.map.mapMarkers = this.map.mapMarkers.concat(results.map.mapMarkers);
	    return new VerticalResults(merged);
	  }
	  /**
	   * Create vertical results from server data
	   * @param {Object} response The server response
	   * @param {Object.<string, function>} formatters The field formatters to use
	   */
	  ;

	  VerticalResults.from = function from(response, formatters) {
	    return new VerticalResults(Section.from(response, null, formatters));
	  }
	  /**
	   * Construct a VerticalResults object representing loading results
	   * @return {VerticalResults}
	   */
	  ;

	  VerticalResults.searchLoading = function searchLoading() {
	    return new VerticalResults({
	      searchState: SearchStates.SEARCH_LOADING
	    });
	  };

	  VerticalResults.areDuplicateNamesAllowed = function areDuplicateNamesAllowed() {
	    return true;
	  };

	  return VerticalResults;
	}();

	/** @module HighlightedValue */

	/**
	 * Model representing a highlighted value.
	 */
	var HighlightedValue =
	/*#__PURE__*/
	function () {
	  function HighlightedValue(data) {
	    if (data === void 0) {
	      data = {};
	    }

	    this.value = data.value || data.shortValue || '';
	    this.matchedSubstrings = data.matchedSubstrings || [];
	  }
	  /**
	   * get highlighted value string
	   * @returns {string}
	   */


	  var _proto = HighlightedValue.prototype;

	  _proto.get = function get() {
	    this._sortMatchedSubstrings();

	    return this._buildHighlightedValue(this.value, this.matchedSubstrings);
	  }
	  /**
	   * get inverted highlighted value string
	   * @returns {string}
	   */
	  ;

	  _proto.getInverted = function getInverted() {
	    this._sortMatchedSubstrings();

	    var invertedSubstrings = this._getInvertedSubstrings(this.matchedSubstrings, this.value.length);

	    return this._buildHighlightedValue(this.value, invertedSubstrings);
	  };

	  _proto._sortMatchedSubstrings = function _sortMatchedSubstrings() {
	    this.matchedSubstrings.sort(function (a, b) {
	      if (a.offset < b.offset) {
	        return -1;
	      }

	      if (a.offset > b.offset) {
	        return 1;
	      }

	      return 0;
	    });
	  };

	  _proto._getInvertedSubstrings = function _getInvertedSubstrings(matchedSubstrings, valueLength) {
	    var invertedSubstrings = [];

	    for (var i = 0; i < matchedSubstrings.length; i++) {
	      var substring = matchedSubstrings[i];
	      var nextOffset = substring.offset + substring.length;

	      if (i === 0 && substring.offset !== 0) {
	        invertedSubstrings.push({
	          offset: 0,
	          length: substring.offset
	        });
	      }

	      if (valueLength > nextOffset) {
	        invertedSubstrings.push({
	          offset: nextOffset,
	          length: i < matchedSubstrings.length - 1 ? matchedSubstrings[i + 1].offset - nextOffset : valueLength - nextOffset
	        });
	      }
	    }

	    return invertedSubstrings;
	  };

	  _proto._buildHighlightedValue = function _buildHighlightedValue(val, highlightedSubstrings) {
	    var highlightedValue = '';
	    var nextStart = 0;

	    if (highlightedSubstrings.length === 0) {
	      return val;
	    }

	    for (var j = 0; j < highlightedSubstrings.length; j++) {
	      var start = Number(highlightedSubstrings[j].offset);
	      var end = start + highlightedSubstrings[j].length;
	      highlightedValue += [val.slice(nextStart, start), '<strong>', val.slice(start, end), '</strong>'].join('');

	      if (j === highlightedSubstrings.length - 1 && end < val.length) {
	        highlightedValue += val.slice(end);
	      }

	      nextStart = end;
	    }

	    return highlightedValue;
	  };

	  return HighlightedValue;
	}();

	/** @module SpellCheck */
	/**
	 * SpellCheck is the core state model
	 * to power the SpellCheck component
	 */

	var SpellCheck =
	/*#__PURE__*/
	function () {
	  function SpellCheck(data) {
	    /**
	     * The original query
	     * @type {string}
	     */
	    this.query = data.query || null;
	    /**
	     * The corrected query
	     * @type {string}
	     */

	    this.correctedQuery = data.correctedQuery || null;
	    /**
	     * The corrected query with highlighted tags
	     * @type {string}
	     */

	    this.correctedQueryDisplay = data.correctedQueryDisplay || null;
	    /**
	     * The spell check type
	     * @type {string}
	     */

	    this.type = data.type || null;
	    /**
	     * Should show spell check or not
	     * @type {boolean}
	     */

	    this.shouldShow = this.correctedQuery !== null;
	  }
	  /**
	   * Create a spell check model from the provided data
	   * @param {Object} response The spell check response
	   */


	  SpellCheck.from = function from(response) {
	    if (!response) {
	      return {};
	    }

	    return new SpellCheck({
	      query: response.originalQuery,
	      correctedQuery: response.correctedQuery,
	      correctedQueryDisplay: new HighlightedValue(response.correctedQuery).get(),
	      type: response.type
	    });
	  };

	  return SpellCheck;
	}();

	/** @module StorageKeys */

	/**
	 * StorageKeys is an ENUM are considered the root context
	 * for how data is stored and scoped in the storage.
	 *
	 * @enum {string}
	 */
	var StorageKeys = {
	  NAVIGATION: 'navigation',
	  UNIVERSAL_RESULTS: 'universal-results',
	  VERTICAL_RESULTS: 'vertical-results',
	  AUTOCOMPLETE: 'autocomplete',
	  DIRECT_ANSWER: 'direct-answer',
	  FILTER: 'filter',
	  QUERY: 'query',
	  QUERY_ID: 'query-id',
	  FACET_FILTER: 'facet-filter',
	  DYNAMIC_FILTERS: 'dynamic-filters',
	  PARAMS: 'params',
	  GEOLOCATION: 'geolocation',
	  INTENTS: 'intents',
	  QUESTION_SUBMISSION: 'question-submission',
	  SEARCH_CONFIG: 'search-config',
	  SEARCH_OFFSET: 'search-offset',
	  SPELL_CHECK: 'spell-check',
	  LOCATION_BIAS: 'location-bias',
	  SESSIONS_OPT_IN: 'sessions-opt-in'
	};

	/** @module DynamicFilters */

	/**
	 * Model representing a set of dynamic filters
	 */
	var DynamicFilters =
	/*#__PURE__*/
	function () {
	  function DynamicFilters(data) {
	    /**
	     * The list of filters this model holds
	     * @type {{label: string, fieldId: string, options: object[]}}
	     */
	    this.filters = data.filters || [];
	    Object.freeze(this);
	  }
	  /**
	   * Organize 'facets' from the api response into dynamic filters
	   * @param {Object} response dynamic filter response from the api
	   * @returns {DynamicFilters}
	   */


	  DynamicFilters.from = function from(response) {
	    var facets = response.facets;
	    var dynamicFilters = facets.map(function (f) {
	      return {
	        label: f['displayName'],
	        fieldId: f['fieldId'],
	        options: f.options.map(function (o) {
	          return {
	            label: o['displayName'],
	            countLabel: o['count'],
	            selected: o['selected'],
	            filter: o['filter']
	          };
	        })
	      };
	    });
	    return new DynamicFilters({
	      filters: dynamicFilters
	    });
	  };

	  return DynamicFilters;
	}();

	/** @module SearchIntents */
	var SearchIntents =
	/*#__PURE__*/
	function () {
	  function SearchIntents(intents) {
	    /**
	     * The intent to find results based on the user's location
	     * @type {boolean}
	     */
	    this.nearMe = intents.nearMe;
	    Object.freeze(this);
	  }
	  /**
	   * Create SearchIntents from server response
	   * @param {Object} response The server response intents
	   * @returns {SearchIntents}
	   */


	  SearchIntents.from = function from(response) {
	    var intents = response || [];
	    return new SearchIntents({
	      nearMe: intents.includes('NEAR_ME')
	    });
	  };

	  return SearchIntents;
	}();

	/** @module LocationBias */

	/**
	 * LocationBias is the core state model
	 * to power the LocationBias component
	 */
	var LocationBias =
	/*#__PURE__*/
	function () {
	  function LocationBias(data) {
	    /**
	     * The location bias accuracy which are IP, DEVICE and UNKNWON
	     * @type {string}
	     */
	    this.accuracy = data.accuracy || null;
	    /**
	     * The latitude used for location bias
	     * @type {number}
	     */

	    this.latitude = data.latitude || null;
	    /**
	     * The longitude used for location bias
	     * @type {number}
	     */

	    this.longitude = data.longitude || null;
	    /**
	     * The location display name
	     * @type {string}
	     */

	    this.locationDisplayName = data.locationDisplayName || null;
	  }
	  /**
	   * Create a location bias model from the provided data
	   * @param {Object} response The location bias response
	   */


	  LocationBias.from = function from(response) {
	    if (!response) {
	      return new LocationBias({
	        accuracy: 'UNKNOWN'
	      });
	    }

	    return new LocationBias({
	      accuracy: response.accuracy,
	      latitude: response.latitude,
	      longitude: response.longitude,
	      locationDisplayName: response.locationDisplayName
	    });
	  };

	  return LocationBias;
	}();

	/** @module SearchDataTransformer */
	/**
	 * A Data Transformer that takes the response object from a Search request
	 * And transforms in to a front-end oriented data structure that our
	 * component library and core storage understand.
	 */

	var SearchDataTransformer =
	/*#__PURE__*/
	function () {
	  function SearchDataTransformer() {}

	  SearchDataTransformer.transform = function transform(data, urls, formatters) {
	    var _ref;

	    if (urls === void 0) {
	      urls = {};
	    }

	    var response = data.response;
	    return _ref = {}, _ref[StorageKeys.QUERY_ID] = response.queryId, _ref[StorageKeys.NAVIGATION] = Navigation.from(response.modules), _ref[StorageKeys.DIRECT_ANSWER] = DirectAnswer.from(response.directAnswer, formatters), _ref[StorageKeys.UNIVERSAL_RESULTS] = UniversalResults.from(response, urls, formatters), _ref[StorageKeys.INTENTS] = SearchIntents.from(response.searchIntents), _ref[StorageKeys.SPELL_CHECK] = SpellCheck.from(response.spellCheck), _ref[StorageKeys.LOCATION_BIAS] = LocationBias.from(response.locationBias), _ref;
	  };

	  SearchDataTransformer.transformVertical = function transformVertical(data, formatters) {
	    var _ref2;

	    return _ref2 = {}, _ref2[StorageKeys.QUERY_ID] = data.response.queryId, _ref2[StorageKeys.NAVIGATION] = new Navigation(), _ref2[StorageKeys.VERTICAL_RESULTS] = VerticalResults.from(data.response, formatters), _ref2[StorageKeys.DYNAMIC_FILTERS] = DynamicFilters.from(data.response), _ref2[StorageKeys.INTENTS] = SearchIntents.from(data.response.searchIntents), _ref2[StorageKeys.SPELL_CHECK] = SpellCheck.from(data.response.spellCheck), _ref2[StorageKeys.LOCATION_BIAS] = LocationBias.from(data.response.locationBias), _ref2;
	  };

	  return SearchDataTransformer;
	}();

	/** @module QuestionSubmission */

	/**
	 * QuestionSubmission is the core state model
	 * to power the QuestionSubmission component
	 */
	var QuestionSubmission =
	/*#__PURE__*/
	function () {
	  function QuestionSubmission(question, errors) {
	    if (question === void 0) {
	      question = {};
	    }

	    /**
	     * The author of the question
	     * @type {string}
	     */
	    this.name = question.name || null;
	    /**
	     * The email address of the question
	     * @type {string}
	     */

	    this.email = question.email || null;
	    /**
	     * True if the privacy policy was approved
	     * @type {boolean}
	     */

	    this.privacyPolicy = question.privacyPolicy || null;
	    /**
	     * The question to be sent to the server
	     * @type {string}
	     */

	    this.questionText = question.questionText || null;
	    /**
	     * Alternative question meta information
	     * @type {string}
	     */

	    this.questionDescription = question.questionDescription || null;
	    /**
	     * Contains any errors about the question submission
	     * @type {object}
	     */

	    this.errors = errors || null;
	    Object.freeze(this);
	  }

	  QuestionSubmission.submitted = function submitted() {
	    return {
	      questionSubmitted: true
	    };
	  };

	  QuestionSubmission.errors = function errors(question, _errors) {
	    return QuestionSubmission(question, _errors);
	  };

	  return QuestionSubmission;
	}();

	/** @module Filter */

	/**
	 * Represents an api filter and provides static methods for easily constructing Filters.
	 * See https://developer.yext.com/docs/api-reference/#operation/listEntities for structure details
	 */
	var Filter =
	/*#__PURE__*/
	function () {
	  function Filter(data) {
	    if (data === void 0) {
	      data = {};
	    }

	    Object.assign(this, data);
	    Object.freeze(this);
	  }
	  /**
	   * Parse a JSON format filter returned from the server into a Filter
	   * @param {*} responseFilter A filter in JSON format returned from the backend
	   * @returns {Filter}
	   */


	  Filter.fromResponse = function fromResponse(responseFilter) {
	    return new Filter(JSON.parse(responseFilter));
	  }
	  /**
	   * Return a new Filter representing the OR of all provided filters
	   * @param  {...Filter} filters The filters to OR together
	   * @returns {Filter}
	   */
	  ;

	  Filter.or = function or() {
	    for (var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
	      filters[_key] = arguments[_key];
	    }

	    return new Filter({
	      '$or': filters
	    });
	  }
	  /**
	   * Return a new Filter representing the AND of all provided filters
	   * @param  {...Filter} filters The filters to AND together
	   * @returns {Filter}
	   */
	  ;

	  Filter.and = function and() {
	    for (var _len2 = arguments.length, filters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      filters[_key2] = arguments[_key2];
	    }

	    return new Filter({
	      '$and': filters
	    });
	  }
	  /**
	   * OR filters with the same keys, then AND the resulting groups
	   * @param  {...Filter} filters The filters to group
	   * @returns {Filter}
	   */
	  ;

	  Filter.group = function group() {
	    var groups = {};

	    for (var _len3 = arguments.length, filters = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      filters[_key3] = arguments[_key3];
	    }

	    for (var _i = 0, _filters = filters; _i < _filters.length; _i++) {
	      var filter = _filters[_i];
	      var key = Object.keys(filter)[0];

	      if (!groups[key]) {
	        groups[key] = [];
	      }

	      groups[key].push(filter);
	    }

	    var groupFilters = [];

	    for (var _i2 = 0, _Object$keys = Object.keys(groups); _i2 < _Object$keys.length; _i2++) {
	      var field = _Object$keys[_i2];
	      groupFilters.push(groups[field].length > 1 ? Filter.or.apply(Filter, groups[field]) : groups[field][0]);
	    }

	    return groupFilters.length > 1 ? Filter.and.apply(Filter, groupFilters) : groupFilters[0];
	  }
	  /**
	   * Create a new "equal to" filter for a field
	   * @param {string} field The subject field of the filter
	   * @param {*} value The value the field should be equal to
	   * @returns {Filter}
	   */
	  ;

	  Filter.equal = function equal(field, value) {
	    return Filter._fromMatcher(field, '$eq', value);
	  }
	  /**
	   * Create a new "less than" filter for a field
	   * @param {string} field The subject field of the filter
	   * @param {*} value The value the field should be less than
	   * @returns {Filter}
	   */
	  ;

	  Filter.lessThan = function lessThan(field, value) {
	    return Filter._fromMatcher(field, '$lt', value);
	  }
	  /**
	   * Create a new "less than or equal to" filter for a field
	   * @param {string} field The subject field of the filter
	   * @param {*} value The value the field should be less than or equal to
	   * @returns {Filter}
	   */
	  ;

	  Filter.lessThanEqual = function lessThanEqual(field, value) {
	    return Filter._fromMatcher(field, '$le', value);
	  }
	  /**
	   * Create a new "greater than" filter for a field
	   * @param {string} field The subject field of the filter
	   * @param {*} value The value the field should be greater than
	   * @returns {Filter}
	   */
	  ;

	  Filter.greaterThan = function greaterThan(field, value) {
	    return Filter._fromMatcher(field, '$gt', value);
	  }
	  /**
	   * Create a new "greater than or equal to" filter for a field
	   * @param {string} field The subject field of the filter
	   * @param {*} value The value the field should be greater than or equal to
	   * @returns {Filter}
	   */
	  ;

	  Filter.greaterThanEqual = function greaterThanEqual(field, value) {
	    return Filter._fromMatcher(field, '$ge', value);
	  }
	  /**
	   * Create a new inclusive range filter
	   * @param {string} field The subject field of the filter
	   * @param {*} min The minimum value
	   * @param {*} max The maximum value
	   * @returns {Filter}
	   */
	  ;

	  Filter.inclusiveRange = function inclusiveRange(field, min, max) {
	    var _ref;

	    return new Filter((_ref = {}, _ref[field] = {
	      '$ge': min,
	      '$le': max
	    }, _ref));
	  }
	  /**
	   * Create a new exclusive range filter
	   * @param {string} field The subject field of the filter
	   * @param {*} min The minimum value
	   * @param {*} max The maximum value
	   * @returns {Filter}
	   */
	  ;

	  Filter.exclusiveRange = function exclusiveRange(field, min, max) {
	    var _ref2;

	    return new Filter((_ref2 = {}, _ref2[field] = {
	      '$gt': min,
	      '$lt': max
	    }, _ref2));
	  }
	  /**
	   * Create a new position filter
	   * @param {number} lat The latitude of the position
	   * @param {number} lng The longitude of the position
	   * @param {number} radius The search radius (in meters)
	   */
	  ;

	  Filter.position = function position(lat, lng, radius) {
	    return Filter._fromMatcher('builtin.location', '$near', {
	      lat: lat,
	      lng: lng,
	      radius: radius
	    });
	  }
	  /**
	   * Create a new filter with the given matcher
	   * @private
	   * @param {string} field The subject field of the filter
	   * @param {string} matcher The matcher for the filer
	   * @param {*} value The value for the filter
	   * @returns {Filter}
	   */
	  ;

	  Filter._fromMatcher = function _fromMatcher(field, matcher, value) {
	    var _field, _ref3;

	    return new Filter((_ref3 = {}, _ref3[field] = (_field = {}, _field[matcher] = value, _field), _ref3));
	  };

	  return Filter;
	}();

	/** @typedef {import('./services/searchservice').default} SearchService */

	/** @typedef {import('./services/autocompleteservice').default} AutoCompleteService */

	/** @typedef {import('./services/questionanswerservice').default} QuestionAnswerService */

	/**
	 * Core is the main application container for all of the network and storage
	 * related behaviors of the application.
	 */

	var Core =
	/*#__PURE__*/
	function () {
	  function Core(config) {
	    if (config === void 0) {
	      config = {};
	    }

	    /**
	     * A reference to the client API Key used for all requests
	     * @type {string}
	     * @private
	     */
	    this._apiKey = config.apiKey;
	    /**
	     * A reference to the client Answers Key used for all requests
	     * @type {string}
	     * @private
	     */

	    this._experienceKey = config.experienceKey;
	    /**
	     * The answers config version to use for all requests
	     * @type {string}
	     * @private
	     */

	    this._experienceVersion = config.experienceVersion;
	    /**
	     * A reference to the client locale used for all requests. If not specified, defaults to "en" (for
	     * backwards compatibility).
	     * @type {string}
	     * @private
	     */

	    this._locale = config.locale;
	    /**
	     * A map of field formatters used to format results, if present
	     * @type {Object.<string, function>}
	     * @private
	     */

	    this._fieldFormatters = config.fieldFormatters || {};
	    /**
	     * A reference to the core data storage that powers the UI
	     * @type {GlobalStorage}
	     * @private
	     */

	    this.globalStorage = config.globalStorage;
	    /**
	     * A reference to the core persistent storage
	     * @type {PersistentStorage}
	     * @private
	     */

	    this.persistentStorage = config.persistentStorage;
	    /**
	     * An abstraction containing the integration with the RESTful search API
	     * For both vertical and universal search
	     * @type {SearchService}
	     * @private
	     */

	    this._searcher = config.searchService;
	    /**
	     * An abstraction containing the integration with the RESTful autocomplete API
	     * For filter search, vertical autocomplete, and universal autocomplete
	     * @type {AutoCompleteService}
	     * @private
	     */

	    this._autoComplete = config.autoCompleteService;
	    /**
	     * An abstraction for interacting with the Q&A rest interface
	     * @type {QuestionAnswerService}
	     * @private
	     */

	    this._questionAnswer = config.questionAnswerService;
	  }
	  /**
	   * Search in the context of a vertical
	   * @param {string} verticalKey vertical ID for the search
	   * @param {object} query The query details
	   * @param {string} query.input The input to search for
	   * @param {string} query.filter The filter to use in the search
	   * @param {string} query.facetFilter The facet filter to use in the search
	   * @param {number} query.limit The max number of results to include, max of 50
	   * @param {number} query.offset The results offset, for fetching more results of the same query
	   * @param {string} query.id The query ID to use. If paging within a query, the same ID should be used
	   * @param {boolean} query.append If true, adds the results of this query to the end of the current results, defaults false
	   */


	  var _proto = Core.prototype;

	  _proto.verticalSearch = function verticalSearch(verticalKey, query) {
	    var _this = this;

	    if (!query.append) {
	      this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
	      this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
	    }

	    return this._searcher.verticalSearch(verticalKey, objectSpread({
	      limit: this.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit,
	      geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION)
	    }, query, {
	      isDynamicFiltersEnabled: this._isDynamicFiltersEnabled,
	      skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
	      queryTrigger: this.globalStorage.getState('queryTrigger'),
	      sessionTrackingEnabled: this.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN)
	    })).then(function (response) {
	      return SearchDataTransformer.transformVertical(response, _this._fieldFormatters);
	    }).then(function (data) {
	      _this.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

	      _this.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

	      _this.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);

	      if (query.append) {
	        var mergedResults = _this.globalStorage.getState(StorageKeys.VERTICAL_RESULTS).append(data[StorageKeys.VERTICAL_RESULTS]);

	        _this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, mergedResults);
	      } else {
	        _this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
	      }

	      if (data[StorageKeys.DYNAMIC_FILTERS]) {
	        _this.globalStorage.set(StorageKeys.DYNAMIC_FILTERS, data[StorageKeys.DYNAMIC_FILTERS]);
	      }

	      if (data[StorageKeys.SPELL_CHECK]) {
	        _this.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);
	      }

	      if (data[StorageKeys.LOCATION_BIAS]) {
	        _this.globalStorage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);
	      }

	      _this.globalStorage["delete"]('skipSpellCheck');

	      _this.globalStorage["delete"]('queryTrigger');
	    });
	  }
	  /**
	   * Page within the results of the last query
	   * @param {string} verticalKey The vertical key to use in the search
	   * @param {number} offset The offset to use in the search
	   */
	  ;

	  _proto.verticalPage = function verticalPage(verticalKey, offset) {
	    var allFilters = this.globalStorage.getAll(StorageKeys.FILTER);
	    var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, allFilters) : allFilters[0];
	    var facetFilter = this.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
	    this.verticalSearch(verticalKey, {
	      input: this.globalStorage.getState(StorageKeys.QUERY),
	      id: this.globalStorage.getState(StorageKeys.QUERY_ID),
	      filter: JSON.stringify(totalFilter),
	      facetFilter: JSON.stringify(facetFilter),
	      offset: offset
	    });
	  };

	  _proto.search = function search(queryString, urls) {
	    var _this2 = this;

	    this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
	    this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
	    this.globalStorage.set(StorageKeys.LOCATION_BIAS, {});
	    return this._searcher.universalSearch(queryString, {
	      geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION),
	      skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
	      queryTrigger: this.globalStorage.getState('queryTrigger'),
	      sessionTrackingEnabled: this.globalStorage.getState(StorageKeys.SESSIONS_OPT_IN)
	    }).then(function (response) {
	      return SearchDataTransformer.transform(response, urls, _this2._fieldFormatters);
	    }).then(function (data) {
	      _this2.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

	      _this2.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

	      _this2.globalStorage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);

	      _this2.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, data[StorageKeys.UNIVERSAL_RESULTS], urls);

	      _this2.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);

	      _this2.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, new QuestionSubmission({
	        questionText: queryString
	      }));

	      _this2.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);

	      _this2.globalStorage.set(StorageKeys.LOCATION_BIAS, data[StorageKeys.LOCATION_BIAS]);

	      _this2.globalStorage["delete"]('skipSpellCheck');

	      _this2.globalStorage["delete"]('queryTrigger');
	    });
	  }
	  /**
	   * Given an input, query for a list of similar results and set into storage
	   *
	   * @param {string} input     the string to autocomplete
	   * @param {string} namespace the namespace to use for the storage key
	   */
	  ;

	  _proto.autoCompleteUniversal = function autoCompleteUniversal(input, namespace) {
	    var _this3 = this;

	    return this._autoComplete.queryUniversal(input).then(function (data) {
	      _this3.globalStorage.set(StorageKeys.AUTOCOMPLETE + "." + namespace, data);
	    });
	  }
	  /**
	   * Given an input, query for a list of similar results in the provided vertical
	   * and set into storage
	   *
	   * @param {string} input       the string to autocomplete
	   * @param {string} namespace the namespace to use for the storage key
	   * @param {string} verticalKey the vertical key for the experience
	   * @param {string} barKey      the bar key for the experience
	   */
	  ;

	  _proto.autoCompleteVertical = function autoCompleteVertical(input, namespace, verticalKey, barKey) {
	    var _this4 = this;

	    return this._autoComplete.queryVertical(input, verticalKey, barKey).then(function (data) {
	      _this4.globalStorage.set(StorageKeys.AUTOCOMPLETE + "." + namespace, data);
	    });
	  }
	  /**
	   * Given an input, provide a list of suitable filters for autocompletion
	   *
	   * @param {string} input  the string to search for filters with
	   * @param {object} config  the config to serach for filters with
	   * @param {string} config.namespace  the namespace to use for the storage key
	   * @param {string} config.verticalKey the vertical key for the config
	   * @param {string} config.barKey  the bar key for the config v1
	   * @param {object} config.searchParameters  the search parameters for the config v2
	   */
	  ;

	  _proto.autoCompleteFilter = function autoCompleteFilter(input, config) {
	    var _this5 = this;

	    return this._autoComplete.queryFilter(input, config).then(function (data) {
	      _this5.globalStorage.set(StorageKeys.AUTOCOMPLETE + "." + config.namespace, data);
	    });
	  }
	  /**
	   * Submits a question to the server and updates the underlying question model
	   * @param {object} question The question object to submit to the server
	   * @param {number} question.entityId The entity to associate with the question (required)
	   * @param {string} question.lanuage The language of the question
	   * @param {string} question.site The "publisher" of the (e.g. 'FIRST_PARTY')
	   * @param {string} question.name The name of the author
	   * @param {string} question.email The email address of the author
	   * @param {string} question.questionText The question
	   * @param {string} question.questionDescription Additional information about the question
	   */
	  ;

	  _proto.submitQuestion = function submitQuestion(question) {
	    var _this6 = this;

	    return this._questionAnswer.submitQuestion(question).then(function (data) {
	      _this6.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, QuestionSubmission.submitted());
	    });
	  }
	  /**
	   * Stores the given query into storage, to be used for the next search
	   * @param {string} query the query to store
	   */
	  ;

	  _proto.setQuery = function setQuery(query) {
	    this.globalStorage.set(StorageKeys.QUERY, query);
	  }
	  /**
	   * Stores the provided query ID, to be used in analytics
	   * @param {string} queryId The query id to store
	   */
	  ;

	  _proto.setQueryId = function setQueryId(queryId) {
	    this.globalStorage.set(StorageKeys.QUERY_ID, queryId);
	  }
	  /**
	   * Stores the given filter into storage, to be used for the next search
	   *
	   * @param {string} namespace the namespace to use for the storage key
	   * @param {Filter} filter    the filter to set
	   */
	  ;

	  _proto.setFilter = function setFilter(namespace, filter) {
	    this.globalStorage.set(StorageKeys.FILTER + "." + namespace, filter);
	  };

	  _proto.setFacetFilter = function setFacetFilter(namespace, filter) {
	    this.globalStorage.set(StorageKeys.FACET_FILTER + "." + namespace, filter);
	  };

	  _proto.enableDynamicFilters = function enableDynamicFilters() {
	    this._isDynamicFiltersEnabled = true;
	  };

	  _proto.on = function on(evt, moduleId, cb) {
	    return this.globalStorage.on(evt, moduleId, cb);
	  };

	  return Core;
	}();

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var inheritsLoose = _inheritsLoose;

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	});

	var setPrototypeOf$1 = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	});

	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	var isNativeFunction = _isNativeFunction;

	var construct$1 = createCommonjsModule(function (module) {
	function isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _construct(Parent, args, Class) {
	  if (isNativeReflectConstruct()) {
	    module.exports = _construct = Reflect.construct;
	  } else {
	    module.exports = _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) setPrototypeOf$1(instance, Class.prototype);
	      return instance;
	    };
	  }

	  return _construct.apply(null, arguments);
	}

	module.exports = _construct;
	});

	var wrapNativeSuper = createCommonjsModule(function (module) {
	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;

	  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !isNativeFunction(Class)) return Class;

	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);

	      _cache.set(Class, Wrapper);
	    }

	    function Wrapper() {
	      return construct$1(Class, arguments, getPrototypeOf(this).constructor);
	    }

	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return setPrototypeOf$1(Wrapper, Class);
	  };

	  return _wrapNativeSuper(Class);
	}

	module.exports = _wrapNativeSuper;
	});

	/** @module Errors */

	/**
	 * AnswersBaseError is an extension of the base Error object.
	 * This is the object that is used to when reporting to the server.
	 * @extends Error
	 *
	 * Error codes fall into one of four categories:
	 * 1XX errors: Basic errors
	 * 2XX errors: UI errors
	 * 3XX errors: Endpoint errors
	 * 4XX errors: Core errors
	 */
	var AnswersBaseError =
	/*#__PURE__*/
	function (_Error) {
	  inheritsLoose(AnswersBaseError, _Error);

	  function AnswersBaseError(errorCode, message, boundary, causedBy) {
	    var _this;

	    _this = _Error.call(this, message) || this;
	    _this.errorCode = errorCode;
	    _this.errorMessage = message;
	    _this.boundary = boundary;
	    _this.reported = false;

	    if (causedBy) {
	      _this.causedBy = causedBy instanceof AnswersBaseError ? causedBy : AnswersBaseError.from(causedBy);
	    }

	    return _this;
	  }

	  var _proto = AnswersBaseError.prototype;

	  _proto.toJson = function toJson() {
	    return JSON.stringify(this);
	  };

	  _proto.toString = function toString() {
	    var string = this.errorMessage + " (" + this.boundary + ")";

	    if (this.causedBy) {
	      string += "\n  Caused By: " + this.causedBy.toString();
	    }

	    return string;
	  };

	  AnswersBaseError.from = function from(builtinError, boundary) {
	    var error = new AnswersBasicError(builtinError.message, boundary);
	    error.stack = builtinError.stack;
	    return error;
	  };

	  return AnswersBaseError;
	}(wrapNativeSuper(Error));
	/**
	 * AnswersBasicError is a wrapper around all the built-in errors
	 * e.g. undefined variables, incorrect syntax, types, missing methods, etc.
	 * @extends AnswersBaseError
	 */

	var AnswersBasicError =
	/*#__PURE__*/
	function (_AnswersBaseError) {
	  inheritsLoose(AnswersBasicError, _AnswersBaseError);

	  function AnswersBasicError(message, boundary, causedBy) {
	    return _AnswersBaseError.call(this, 100, message, boundary, causedBy) || this;
	  }

	  return AnswersBasicError;
	}(AnswersBaseError);
	/**
	 * AnswersUiError used for things like DOM errors.
	 * @extends AnswersBaseError
	 */

	var AnswersConfigError =
	/*#__PURE__*/
	function (_AnswersBaseError2) {
	  inheritsLoose(AnswersConfigError, _AnswersBaseError2);

	  function AnswersConfigError(message, boundary, causedBy) {
	    return _AnswersBaseError2.call(this, 101, message, boundary, causedBy) || this;
	  }

	  return AnswersConfigError;
	}(AnswersBaseError);
	/**
	 * AnswersComponentError is used for Component oriented errors
	 * e.g. failure to render, or catching unknowns.
	 * @extends AnswersBaseError
	 */

	var AnswersComponentError =
	/*#__PURE__*/
	function (_AnswersBaseError4) {
	  inheritsLoose(AnswersComponentError, _AnswersBaseError4);

	  function AnswersComponentError(message, component, causedBy) {
	    return _AnswersBaseError4.call(this, 201, message, component, causedBy) || this;
	  }

	  return AnswersComponentError;
	}(AnswersBaseError);
	/**
	 * AnswersEndpointError represents all network related errors.
	 * @extends AnswersBaseError
	 */

	var AnswersEndpointError =
	/*#__PURE__*/
	function (_AnswersBaseError5) {
	  inheritsLoose(AnswersEndpointError, _AnswersBaseError5);

	  function AnswersEndpointError(message, boundary, causedBy) {
	    return _AnswersBaseError5.call(this, 300, message, boundary, causedBy) || this;
	  }

	  return AnswersEndpointError;
	}(AnswersBaseError);
	/**
	 * AnswersCoreError represents errors for precondition failures in the core library
	 * @extends AnswersBaseError
	 */

	var AnswersCoreError =
	/*#__PURE__*/
	function (_AnswersBaseError6) {
	  inheritsLoose(AnswersCoreError, _AnswersBaseError6);

	  function AnswersCoreError(message, boundary, causedBy) {
	    return _AnswersBaseError6.call(this, 400, message, boundary, causedBy) || this;
	  }

	  return AnswersCoreError;
	}(AnswersBaseError);
	/**
	 * AnswersStorageError represents storage related errors
	 * @extends AnswersBaseError
	 */

	var AnswersStorageError =
	/*#__PURE__*/
	function (_AnswersBaseError7) {
	  inheritsLoose(AnswersStorageError, _AnswersBaseError7);

	  function AnswersStorageError(message, storageKey, data, causedBy) {
	    var _this2;

	    _this2 = _AnswersBaseError7.call(this, 401, message, 'Storage', causedBy) || this;
	    _this2.storageKey = storageKey;
	    _this2.data = data;
	    return _this2;
	  }

	  return AnswersStorageError;
	}(AnswersBaseError);
	/**
	 * AnswersAnalyticsError is used for errors when reporting analytics
	 * @extends AnswersBaseError
	 */

	var AnswersAnalyticsError =
	/*#__PURE__*/
	function (_AnswersBaseError8) {
	  inheritsLoose(AnswersAnalyticsError, _AnswersBaseError8);

	  function AnswersAnalyticsError(message, event, causedBy) {
	    var _this3;

	    _this3 = _AnswersBaseError8.call(this, 402, message, 'Analytics', causedBy) || this;
	    _this3.event = event;
	    return _this3;
	  }

	  return AnswersAnalyticsError;
	}(AnswersBaseError);

	/** @module DOM */

	/* global HTMLElement, HTMLDocument, Window, Event */
	var document$3 = window.document;
	/**
	 * Static interface for interacting with the DOM API.
	 * @namespace
	 */

	var DOM =
	/*#__PURE__*/
	function () {
	  function DOM() {}

	  DOM.setup = function setup(d, p) {
	    document$3 = d;
	  }
	  /**
	   * create a HTMLElement from and HTML string
	   * @param {string} html The HTML to parse to a DOM node.
	   * @return {HTMLElement}
	   */
	  ;

	  DOM.create = function create(html) {
	    if ('createRange' in document$3) {
	      // prefer this implementation as it has wider browser support
	      // and it's better performing.
	      // see https://davidwalsh.name/convert-html-stings-dom-nodes
	      var container = document$3.createElement('div');
	      var frag = document$3.createRange().createContextualFragment(html);
	      container.appendChild(frag);
	      return container;
	    } // fallback to this because of a bug in jsdom that causes tests to fail
	    // see: https://github.com/jsdom/jsdom/issues/399


	    return new DOMParser().parseFromString(html, 'text/html').body;
	  }
	  /**
	   * query the DOM for a given css selector
	   * @param {HTMLElement} parent Optional context to use for a search. Defaults to document if not provided.
	   * @param {string} selector the CSS selector to query for
	   *
	   * @returns {HTMLElement} the FIRST node it finds, if any
	   */
	  ;

	  DOM.query = function query(parent, selector) {
	    // Facade, shifting the selector to the parent argument if only one
	    // argument is provided
	    if (selector === undefined) {
	      selector = parent;
	      parent = document$3;
	    }

	    if (selector instanceof HTMLElement || selector instanceof Window || selector instanceof HTMLDocument) {
	      return selector;
	    }

	    return parent.querySelector(selector);
	  }
	  /**
	   * query the DOM for a given css selector
	   * @param {HTMLElement} parent Optional context to use for a search. Defaults to document if not provided.
	   * @param {string} selector the CSS selector to query for
	   *
	   * @returns {Array} the FIRST node it finds, if any
	   */
	  ;

	  DOM.queryAll = function queryAll(parent, selector) {
	    // Facade, shifting the selector to the parent argument if only one
	    // argument is provided
	    if (selector === undefined) {
	      selector = parent;
	      parent = document$3;
	    } // handle the case where client code is using a pointer to a dom node and it's null, e.g. this._container


	    if (parent == null) {
	      parent = document$3;
	    }

	    if (selector instanceof HTMLElement || selector instanceof HTMLDocument || selector instanceof Window) {
	      return [selector];
	    }

	    return Array.from(parent.querySelectorAll(selector));
	  };

	  DOM.onReady = function onReady(cb) {
	    if (document$3.readyState === 'complete' || document$3.readyState === 'loaded' || document$3.readyState === 'interactive') {
	      cb();
	      return;
	    }

	    DOM.on(document$3, 'DOMContentLoaded', cb);
	  }
	  /**
	   * createEle will create a {HTMLElement} and apply the properties attributes through an object provided.
	   * @param {string} el The element `tag` name to construct
	   * @param {Object} opts_data Optional attributes to apply to the new HTMLElement
	   */
	  ;

	  DOM.createEl = function createEl(el, opts_data) {
	    if (opts_data === void 0) {
	      opts_data = {};
	    }

	    var node = document$3.createElement(el);
	    var props = Object.keys(opts_data);

	    for (var i = 0; i < props.length; i++) {
	      if (props[i] === 'class') {
	        DOM.addClass(node, opts_data[props[i]]);
	        continue;
	      }

	      node[props[i]] = opts_data[props[i]];
	    }

	    return node;
	  };

	  DOM.append = function append(parent, node) {
	    if (node === undefined) {
	      node = parent;
	      parent = document$3;
	    }

	    if (typeof parent === 'string') {
	      parent = DOM.query(parent);
	    } // Support HTML injection as well as HTMLElement appends


	    if (typeof node === 'string') {
	      parent.insertAdjacentHTML('afterBegin', node);
	    } else {
	      parent.appendChild(node);
	    }
	  };

	  DOM.addClass = function addClass(node, className) {
	    var classes = className.split(',');
	    var len = classes.length;

	    for (var i = 0; i < len; i++) {
	      node.classList.add(classes[i]);
	    }
	  };

	  DOM.empty = function empty(parent) {
	    parent.innerHTML = '';
	  };

	  DOM.css = function css(selector, styles) {
	    var node = DOM.query(selector);

	    for (var prop in styles) {
	      node.style[prop] = styles[prop];
	    }
	  };

	  DOM.attr = function attr(selector, _attr, val) {
	    DOM.query(selector).setAttribute(_attr, val);
	  };

	  DOM.attributes = function attributes(selector, attrs) {
	    var _this = this;

	    Object.entries(attrs).forEach(function (_ref) {
	      var attr = _ref[0],
	          val = _ref[1];
	      return _this.attr(selector, attr, val);
	    });
	  };

	  DOM.trigger = function trigger(selector, event, settings) {
	    var e = new Event(event, Object.assign({
	      'bubbles': true,
	      'cancelable': true
	    }, settings || {}));
	    DOM.query(selector).dispatchEvent(e);
	  };

	  DOM.on = function on(selector, evt, handler) {
	    DOM.query(selector).addEventListener(evt, handler);
	  };

	  DOM.once = function once(selector, evt, handler) {
	    DOM.query(selector).addEventListener(evt, handler, {
	      once: true
	    });
	  };

	  DOM.off = function off(selector, evt, handler) {
	    DOM.query(selector).removeEventListener(evt, handler);
	  };

	  DOM.delegate = function delegate(ctxt, selector, evt, handler) {
	    var el = DOM.query(ctxt);
	    el.addEventListener(evt, function (event) {
	      var target = event.target;

	      while (!target.isEqualNode(el)) {
	        if (target.matches(selector)) {
	          handler(event, target);
	          break;
	        }

	        target = target.parentNode;
	      }
	    });
	  };

	  return DOM;
	}();

	/**
	 * ComponentManager is a Singletone that contains both an internal registry of
	 * eligible components to be created, as well as keeps track of the current
	 * instantiated and active components.
	 *
	 * ALL components should be constructed using the {ComponentManager} via its `create` method.
	 */

	var ComponentManager =
	/*#__PURE__*/
	function () {
	  function ComponentManager() {
	    if (!ComponentManager.setInstance(this)) {
	      return ComponentManager.getInstance();
	    }
	    /**
	     * The component registry is an internal map, that contains
	     * all available component CLASSES used for creation or override.
	     * Each component class has a unique TYPE, which is used as the key for the registry
	     * @type {Object}
	     */


	    this._componentRegistry = {};
	    /**
	     * The active components is an internal container to keep track
	     * of all of the components that have been constructed
	     */

	    this._activeComponents = [];
	    /**
	     * A local reference to the core library dependency
	     *
	     * The Core contains both the storage AND services that are needed for performing operations
	     * like search and auto complete.
	     *
	     * The storage is the source of truth for the state of ALL components.
	     * Whenever the storage is updated, the state gets pushed down to the necessary components.
	     * @type {Core}
	     */

	    this._core = null;
	    /**
	     * The primary renderer to use for all components
	     * @type {HandlebarsRenderer}
	     */

	    this._renderer = null;
	    /**
	     * A local reference to the analytics reporter dependency
	     */

	    this._analyticsReporter = null;
	  }

	  ComponentManager.setInstance = function setInstance(instance) {
	    if (!this.instance) {
	      this.instance = instance;
	      return true;
	    }

	    return false;
	  };

	  ComponentManager.getInstance = function getInstance() {
	    return this.instance;
	  };

	  var _proto = ComponentManager.prototype;

	  _proto.setRenderer = function setRenderer(renderer) {
	    this._renderer = renderer;
	    return this;
	  };

	  _proto.setCore = function setCore(core) {
	    this._core = core;
	    return this;
	  };

	  _proto.setAnalyticsReporter = function setAnalyticsReporter(reporter) {
	    this._analyticsReporter = reporter;
	    return this;
	  }
	  /**
	   * registers a component to be eligible for creation and override.
	   * @param {Component} The Component Class to register
	   */
	  ;

	  _proto.register = function register(componentClazz) {
	    this._componentRegistry[componentClazz.type] = componentClazz;
	    return this;
	  }
	  /**
	   * create is the entry point for constructing any and all components.
	   * It will instantiate a new instance of the component, and both apply
	   * initial state from the storage and bind it to the storage for updates.
	   * @param {string} componentType The component type to create
	   * @param {Object} opts The options to pipe to the construction of the component
	   */
	  ;

	  _proto.create = function create(componentType, opts) {
	    // Every component needs local access to the component manager
	    // because sometimes components have subcomponents that need to be
	    // constructed during creation
	    var systemOpts = {
	      core: this._core,
	      renderer: this._renderer,
	      analyticsReporter: this._analyticsReporter,
	      componentManager: this
	    };
	    var componentClass = this._componentRegistry[componentType];

	    if (!componentClass.areDuplicateNamesAllowed() && this._activeComponents.some(function (c) {
	      return c.name === opts.name;
	    })) {
	      throw new AnswersComponentError("Another component with name " + opts.name + " already exists", componentType);
	    }

	    var config = objectSpread({
	      isTwin: this._activeComponents.some(function (component) {
	        return component.constructor.type === componentType;
	      })
	    }, opts); // Instantiate our new component and keep track of it


	    var component = new this._componentRegistry[componentType](config, systemOpts).init(config);

	    this._activeComponents.push(component); // If there is a global storage to power state, apply the state
	    // from the storage to the component, and then bind the component
	    // state to the storage via its updates


	    if (this._core && this._core.globalStorage !== null) {
	      if (component.moduleId === undefined || component.moduleId === null) {
	        return component;
	      }

	      this._core.globalStorage.on('update', component.moduleId, function (data) {
	        component.setState(data);
	      });
	    }

	    return component;
	  }
	  /**
	   * Remove the provided component from the list of active components and remove
	   * the associated storage event listener
	   * @param {Component} component The component to remove
	   */
	  ;

	  _proto.remove = function remove(component) {
	    this._core.globalStorage.off('update', component.moduleId);

	    var index = this._activeComponents.findIndex(function (c) {
	      return c.name === component.name;
	    });

	    this._activeComponents.splice(index, 1);
	  }
	  /**
	   * Remove the component with the given name
	   * @param {string} name The name of the compnent to remove
	   */
	  ;

	  _proto.removeByName = function removeByName(name) {
	    var component = this._activeComponents.find(function (c) {
	      return c.name === name;
	    });

	    component.remove();
	    DOM.empty(component._container);
	  };

	  _proto.getActiveComponent = function getActiveComponent(type) {
	    return this._activeComponents.find(function (c) {
	      return c.constructor.type === type;
	    });
	  };

	  return ComponentManager;
	}();

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass = _createClass;

	/** @module Renderer */

	/**
	 * Renderer is an abstract class that all Renderers should extend and implement
	 */
	var Renderer =
	/*#__PURE__*/
	function () {
	  function Renderer() {}

	  var _proto = Renderer.prototype;

	  /**
	   * render is a core method for all renderers.
	   * All implementations should override this class
	   * @param {string} template
	   * @param {object} data
	   */
	  _proto.render = function render(template, data) {
	    return template;
	  };

	  _proto.registerHelper = function registerHelper(name, cb) {};

	  _proto.compile = function compile(template) {};

	  return Renderer;
	}();

	/**
	 * HandlebarsRenderer is a wrapper around the nativate handlebars renderer.
	 * @extends Renderer
	 */

	var HandlebarsRenderer =
	/*#__PURE__*/
	function (_Renderer) {
	  inheritsLoose(HandlebarsRenderer, _Renderer);

	  function HandlebarsRenderer(templates, opts) {
	    var _this;

	    if (templates === void 0) {
	      templates = {};
	    }

	    if (opts === void 0) {
	      opts = {};
	    }

	    _this = _Renderer.call(this) || this;
	    /**
	     * A local reference to the handlebars compiler
	     * @type {Handlebars}
	     * @private
	     */

	    _this._handlebars = templates._hb || null;
	    /**
	     * A local reference to the pre-compiled handlebars templates
	     * @type {Handlebars}
	     * @private
	     */

	    _this._templates = templates || {};
	    return _this;
	  }

	  var _proto = HandlebarsRenderer.prototype;

	  _proto.init = function init(templates) {
	    // Assign the handlebars compiler and templates based on
	    // information provided from external dep (in default case, it comes from external server request)
	    this._handlebars = templates._hb;
	    this._templates = templates; // TODO(billy) Once we re-write templates using the new helpers library
	    // we probably don't need these custom helpers anymore

	    this._registerCustomHelpers();
	  }
	  /**
	   * registerHelper is a public interface for external dependencies to
	   * register their own custom helpers to our internal Handlebars Compiler
	   */
	  ;

	  _proto.registerHelper = function registerHelper(name, cb) {
	    this._handlebars.registerHelper(name, cb);
	  }
	  /**
	   * compile a handlebars template so that it can be rendered,
	   * using the {Handlebars} compiler
	   * @param {string} template The template string to compile
	   */
	  ;

	  _proto.compile = function compile(template) {
	    if (typeof template !== 'string') {
	      return '';
	    }

	    return this._handlebars.compile(template);
	  }
	  /**
	   * render will render a template with data
	   * @param {Object} config Provide either a templateName or a pre-compiled template
	   * @param {Object} data The data to provide to the template
	   */
	  ;

	  _proto.render = function render(config, data) {
	    // If a custom template is provided, use it,
	    // otherwise fall back to the template name
	    // TODO(billy) This interface should probably be less ugly
	    if (config.template !== null) {
	      return config.template(data);
	    }

	    try {
	      return this._templates[config.templateName](data);
	    } catch (e) {
	      throw new Error('Can not find/render template: ' + config.templateName, e);
	    }
	  };

	  _proto._registerCustomHelpers = function _registerCustomHelpers() {
	    this.registerHelper('ifeq', function (arg1, arg2, options) {
	      return arg1 === arg2 ? options.fn(this) : options.inverse(this);
	    });
	    this.registerHelper('ifnoteq', function (arg1, arg2, options) {
	      return arg1 !== arg2 ? options.fn(this) : options.inverse(this);
	    });
	    this.registerHelper('formatPhoneNumber', function (phoneNumberString) {
	      var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
	      var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

	      if (match) {
	        var intlCode = match[1] ? '+1 ' : '';
	        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
	      }

	      return null;
	    });
	    this.registerHelper('assign', function (name, value, options) {
	      var args = arguments;
	      options = args[args.length - 1];

	      if (!options.data.root) {
	        options.data.root = {};
	      }

	      var v = '';

	      for (var i = 1; i < args.length - 1; i++) {
	        v = v + args[i];
	      }

	      options.data.root[name] = v;
	    });
	    this.registerHelper('json', function (name, value, options) {
	      return name === undefined ? '' : JSON.stringify(name);
	    });
	  };

	  return HandlebarsRenderer;
	}(Renderer);

	/** @module */
	// E.g. Mustache, SOY, HandleBars, React, etc.

	var Renderers = {
	  SOY: Renderer,
	  Handlebars: HandlebarsRenderer
	};

	/** @module EventEmitter */

	/**
	 * EventEmitter is a base class for any object that wants to expose
	 * a pub/sub interface, for emitting messages and providing listeners.
	 */
	var EventEmitter =
	/*#__PURE__*/
	function () {
	  function EventEmitter() {
	    /**
	     * The subscribers of messages
	     * @type {object[]}
	     * @private
	     */
	    this._listeners = {};
	  }
	  /**
	   * on is the public interface for subscribing events that are emitted.
	   * @param {string} evt the event name to listen to
	   * @param {function} cb The callback to invoke when the {evt} is emitted
	   * @param {boolean} once Optional value which will only handle the message once
	   */


	  var _proto = EventEmitter.prototype;

	  _proto.on = function on(evt, cb, once) {
	    if (typeof cb !== 'function') {
	      throw new Error('callback handler should be of type {function}');
	    }

	    if (this._listeners[evt] === undefined) {
	      this._listeners[evt] = [];
	    }

	    this._listeners[evt].push({
	      event: evt,
	      cb: cb,
	      once: once || false
	    });

	    return this;
	  }
	  /**
	   * once is the public interface for subscribing events that are emitted.
	   * The handler will only be triggered once.
	   *
	   * @param {string} evt the event name to listen to
	   * @param {function} cb The callback to invoke when the {evt} is emitted
	   * @param {boolean} once Optional value which will only handle the message once
	   */
	  ;

	  _proto.once = function once(evt, cb) {
	    return this.on(evt, cb, true);
	  }
	  /**
	   * off is the public interface for unsubscribing from an event
	   * @param {string} evt the event name to unsubscribe from
	   */
	  ;

	  _proto.off = function off(evt) {
	    delete this._listeners[evt];
	    return this;
	  }
	  /**
	   * emit is the public interface for broadcasting messages/events
	   * @param {string} evt the event name to publish from
	   * @param {Object} data the data to send along to the subscribers
	   */
	  ;

	  _proto.emit = function emit(evt, data) {
	    var listeners = this._listeners[evt];

	    if (listeners === undefined) {
	      return;
	    } // Invoke each of all the listener handlers and remove the ones that should fire only once.


	    var keep = [];

	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i].cb(data);

	      if (listeners[i].once === true) {
	        continue;
	      } // Instead of having a 'dirty' array with deleted or 'undefined' entries,
	      // we just create a brand new array without the listeners that were removed


	      keep.push(listeners[i]);
	    } // Update our old list of listeners to the newly created array


	    this._listeners[evt] = keep;
	    return this;
	  };

	  return EventEmitter;
	}();

	/**
	 * State contains the data for the component
	 * and exposes an {EventEmitter} interface so that external
	 * dependencies can listen/hook subscribe to messages/updates.
	 * @extends EventEmitter
	 */

	var State =
	/*#__PURE__*/
	function (_EventEmitter) {
	  inheritsLoose(State, _EventEmitter);

	  function State(data) {
	    var _this;

	    _this = _EventEmitter.call(this) || this;
	    /**
	     * The initial state of the component
	     * @type {Object}
	     * @private
	     */

	    _this._state = data || {};
	    return _this;
	  }
	  /**
	   * Set the initial state of the component.
	   * NOTE(billy): Does not fire an update message
	   */


	  var _proto = State.prototype;

	  _proto.init = function init(prop, optVal) {
	    this._set(prop, optVal);
	  }
	  /**
	   * setter for the state
	   * @param prop {string|Object} The property to set
	   * @param optVal Optional, if prop is a {string}, it will assign the value to that property
	   */
	  ;

	  _proto.set = function set(prop, optVal) {
	    this._set(prop, optVal);

	    this.emit('update');
	  }
	  /**
	   * setter for the state enables you to update a single property, or complete state
	   * depending on the arguments provided.
	   * @param prop {string|Object} The property to set
	   * @param optVal If prop is a {string}, provide its value
	   * @private
	   */
	  ;

	  _proto._set = function _set(prop, optVal) {
	    if (optVal === undefined) {
	      this._state = prop;
	    } else {
	      this._state[prop] = optVal;
	    }
	  };

	  _proto.update = function update(data) {
	    this._state = data;
	    this.emit('update');
	  }
	  /**
	   * Retrieve a properties value from the state
	   * If no property provided, return the full state
	   * @param {string} optProp optional property to retrieve
	   */
	  ;

	  _proto.get = function get(optProp) {
	    if (optProp === undefined) {
	      return this._state;
	    }

	    return this._state[optProp];
	  };

	  _proto.has = function has(prop) {
	    return this._state[prop] !== undefined;
	  };

	  _proto.asJSON = function asJSON() {
	    return this._state;
	  };

	  return State;
	}(EventEmitter);

	/** @module HttpRequester */

	/* global fetch */

	/**
	 * Types of HTTP requests
	 */
	var Methods = {
	  GET: 'get',
	  POST: 'post',
	  PUT: 'put',
	  DELETE: 'delete'
	};
	/**
	 * HttpRequester is a wrapper around the native implementation of AJAX
	 * related matters. It's used to make all types of network requests
	 * and exposes a promise interface.
	 */

	var HttpRequester =
	/*#__PURE__*/
	function () {
	  function HttpRequester() {}

	  var _proto = HttpRequester.prototype;

	  /**
	   * Create a GET HTTP request
	   * @param {string} url The url to make a request to
	   * @param {Object} data The data to provide (gets encoded into the URL)
	   * @param {Object} opts Configuration options to use for the request
	   */
	  _proto.get = function get(url, data, opts) {
	    return this.request(Methods.GET, this.encodeParams(url, data), opts);
	  }
	  /**
	   * Create a POST HTTP request
	   * @param {string} url The url to make a request to
	   * @param {Object} urlParams The params to encode into the URL
	   * @param {Object} jsonBody The request body (json) to provide with the POST request
	   * @param {Object} requestConfig Configuration options to use for the request
	   */
	  ;

	  _proto.post = function post(url, urlParams, jsonBody, requestConfig) {
	    return this.request(Methods.POST, this.encodeParams(url, urlParams), Object.assign({}, {
	      body: JSON.stringify(jsonBody),
	      credentials: undefined
	    }, requestConfig));
	  };

	  _proto.request = function request(method, url, opts) {
	    var reqArgs = Object.assign({}, {
	      'method': method,
	      'credentials': 'include'
	    }, opts);
	    return fetch(url, reqArgs);
	  }
	  /**
	   * Send a beacon to the provided url which will send a non-blocking request
	   * to the server that is guaranteed to send before page load. No response is returned,
	   * so beacons are primarily used for analytics reporting.
	   * @param {string} url The url to send the beacon to
	   * @param {object} data The data payload to send in the beacon
	   * @return {boolean} true if the request is successfully queued
	   */
	  ;

	  _proto.beacon = function beacon(url, data) {
	    return navigator.sendBeacon(url, JSON.stringify(data));
	  };

	  _proto.encodeParams = function encodeParams(url, params) {
	    if (typeof params !== 'object') {
	      return;
	    }

	    var hasParam = url.indexOf('?') > -1;
	    var searchQuery = '';

	    for (var key in params) {
	      if (!hasParam) {
	        hasParam = true;
	        searchQuery += '?';
	      } else {
	        searchQuery += '&';
	      }

	      searchQuery += key + '=' + encodeURIComponent(params[key]);
	    }

	    return url + searchQuery;
	  };

	  return HttpRequester;
	}();

	/** @module */

	/** The current lib version, reported with errors and analytics */
	var LIB_VERSION = 'v0.9.4';
	/** The base url for the live api backend */

	var LIVE_API_BASE_URL = 'https://liveapi.yext.com';
	/** The base url for the knowledge api backend */

	var API_BASE_URL = 'https://api.yext.com';
	/** The default url for compiled component templates */

	var COMPILED_TEMPLATES_URL = "https://assets.sitescdn.net/answers/" + LIB_VERSION + "/answerstemplates.compiled.min.js";
	/** The base urls for the analytics backend  */

	var ANALYTICS_BASE_URL = 'https://realtimeanalytics.yext.com';
	var ANALYTICS_BASE_URL_NO_COOKIE = 'https://answers.yext-pixel.com';

	/** @module SearchParams */

	/* global window */

	/**
	 * SearchParams is a class to get the search params in a URL.
	 * It is a replacement for URL.searchParams and URLSearchParams for browsers like IE11
	 */
	var SearchParams =
	/*#__PURE__*/
	function () {
	  function SearchParams(url) {
	    /**
	     * Mapping of all query parameters in the given url, query param -> value
	     * Only used if URLSearchParams does not exist in the window
	     * @type {Object}
	     * @private
	     */
	    this._params = {};

	    if (window && window.URLSearchParams) {
	      return new URLSearchParams(url);
	    } else {
	      this._params = this.parse(url);
	    }
	  }
	  /**
	   * parse creates a mapping of all query params in a given url
	   * The query param values are decoded before being put in the map
	   * Three types of input are supported
	   *   (1) full URL e.g. http://www.yext.com/?q=hello
	   *   (2) params with ? e.g. ?q=hello
	   *   (1) params without ? e.g. q=hello
	   * @param {string} url The url
	   * @returns {Object} mapping from query param -> value where value is '' if no value is provided
	   */


	  var _proto = SearchParams.prototype;

	  _proto.parse = function parse(url) {
	    var params = {};
	    var search = url;

	    if (search === '') {
	      return params;
	    } // Normalize all url inputs to string of query params separated by &


	    if (url.indexOf('?') > -1) {
	      search = url.slice(url.indexOf('?') + 1);
	    }

	    var encodedParams = search.split('&');

	    for (var i = 0; i < encodedParams.length; i++) {
	      var keyVal = encodedParams[i].split('=');

	      if (keyVal.length > 1) {
	        params[keyVal[0]] = SearchParams.decode(keyVal[1]);
	      } else {
	        params[keyVal[0]] = '';
	      }
	    }

	    return params;
	  }
	  /**
	   * get returns the value of the given query param
	   * @param {string} query the query param key to get the value of
	   * @return {string} param value, null otherwise
	   */
	  ;

	  _proto.get = function get(query) {
	    if (typeof this._params[String(query)] === 'undefined') {
	      return null;
	    }

	    return this._params[query];
	  }
	  /**
	   * set changes the value of a given query param
	   * @param {string} name the query param key
	   * @param {string} value the value of the query param update with
	   */
	  ;

	  _proto.set = function set(name, value) {
	    this._params[String(name)] = String(value);
	  }
	  /**
	   * has checks to see if the given query param key exists in the params object
	   * @param {string} query the query param to check
	   * @return {boolean} true if the query param is in the params object, false o/w
	   */
	  ;

	  _proto.has = function has(query) {
	    return query in this._params;
	  }
	  /**
	   * toString returns a url with all the query params in the params object (without a ?)
	   * @return {string}
	   */
	  ;

	  _proto.toString = function toString() {
	    var string = [];

	    for (var key in this._params) {
	      string.push(key + "=" + SearchParams.encode(this._params[key]));
	    }

	    return string.join('&');
	  };

	  _proto.entries = function entries() {
	    var entries = [];

	    for (var key in this._params) {
	      entries.push([key, this._params[key]]);
	    }

	    return entries;
	  }
	  /**
	   * decode returns the decoded representation of the given string
	   * @param {string} string the string to decode
	   * @return {string}
	   */
	  ;

	  SearchParams.decode = function decode(string) {
	    return decodeURIComponent(string.replace(/[ +]/g, '%20'));
	  }
	  /**
	   * decode returns the encoded representation of the given string (e.g. + -> %2B)
	   * @param {string} string the string to encode
	   * @return {string}
	   */
	  ;

	  SearchParams.encode = function encode(string) {
	    var replace = {
	      '!': '%21',
	      "'": '%27',
	      '(': '%28',
	      ')': '%29',
	      '%20': '+'
	    };
	    return encodeURIComponent(string).replace(/[!'()]|%20/g, function (match) {
	      return replace[match];
	    });
	  };

	  return SearchParams;
	}();

	/** @module ApiRequest */

	/**
	 * ApiRequest is the base class for all API requests.
	 * It defines all of the core properties required to make a request
	 */

	var ApiRequest =
	/*#__PURE__*/
	function () {
	  function ApiRequest(opts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    /**
	     * An abstraction used for making network request and handling errors
	     * @type {HttpRequester}
	     * @private
	     */
	    this._requester = new HttpRequester();
	    /**
	     * The baseUrl to use for making a request
	     * @type {string}
	     * @private
	     */

	    this._baseUrl = opts.baseUrl || LIVE_API_BASE_URL;
	    /**
	     * The endpoint to use in the url (appended to the {baseUrl})
	     * @type {string}
	     * @private
	     */

	    this._endpoint = opts.endpoint || null;
	    /**
	     * The API Key to use for the request
	     * @type {string}
	     * @private
	     */

	    this._apiKey = opts.apiKey || null;
	    /**
	     * The version of the API to make a request to
	     * @type {string}
	     * @private
	     */

	    this._version = opts.version || 20190101;
	    /**
	     * Additional data params that are sent along with the request
	     * @type {string}
	     * @private
	     */

	    this._params = opts.params || {};
	  }
	  /**
	   * get creates a new `GET` request to the server using the configuration of the request class
	   * @returns {Promise<Response>}
	   */


	  var _proto = ApiRequest.prototype;

	  _proto.get = function get() {
	    return this._requester.get(this._baseUrl + this._endpoint, Object.assign({}, this.baseParams(), this.sanitizeParams(this._params)));
	  }
	  /**
	   * @param {Object} opts
	   * @returns {Promise<Response>}
	   */
	  ;

	  _proto.post = function post(opts) {
	    return this._requester.post(this._baseUrl + this._endpoint, this.baseParams()
	    /* urlParams */
	    , this.sanitizeParams(this._params)
	    /* jsonBody */
	    , opts
	    /* requestConfig */
	    );
	  }
	  /**
	   * @returns {Object}
	   * @private
	   */
	  ;

	  _proto.baseParams = function baseParams() {
	    var baseParams = {
	      'v': this._version,
	      'api_key': this._apiKey,
	      'jsLibVersion': LIB_VERSION
	    };
	    var urlParams = new SearchParams(window.location.search.substring(1));

	    if (urlParams.has('beta')) {
	      baseParams['beta'] = urlParams.get('beta');
	    }

	    return baseParams;
	  };

	  _proto.sanitizeParams = function sanitizeParams(params) {
	    if (params === void 0) {
	      params = {};
	    }

	    // Remove any paramaters whos value is `undefined`.
	    //
	    // NOTE(billy) Probably better to be explicit about how to handle this at the request building level,
	    // but I can't see any cases where we'd ever want to send 'undefined' as a value to the server.
	    // So it's probably fine to 'clean' the params object here
	    Object.keys(params).forEach(function (key) {
	      if (params[key] === undefined || params[key] === null) {
	        delete params[key];
	      }
	    });
	    return params;
	  };

	  return ApiRequest;
	}();

	/** @module SearchApi */
	/**
	 * SearchApi is the API for doing various types of search
	 * over the network (e.g. vertical or universal)
	 *
	 * @implements {SearchService}
	 */

	var SearchApi =
	/*#__PURE__*/
	function () {
	  function SearchApi(config) {
	    if (config === void 0) {
	      config = {};
	    }

	    /**
	     * A local reference to the API Key to use for the request
	     * @type {string}
	     * @private
	     */
	    if (!config.apiKey) {
	      throw new AnswersBasicError('Api Key is required', 'Search');
	    }

	    this._apiKey = config.apiKey;
	    /**
	     * A local reference to the Answers Key to use for the request
	     * @type {string}
	     * @private
	     */

	    if (!config.experienceKey) {
	      throw new AnswersBasicError('Answers Key is required', 'Search');
	    }

	    this._experienceKey = config.experienceKey;
	    /**
	     * The answers config version to use for all requests
	     * @type {string}
	     * @private
	     */

	    this._experienceVersion = config.experienceVersion;
	    /**
	     * The version of the API to make a request to
	     * @type {string}
	     * @private
	     */

	    this._version = config.version || 20190101 || 20190301;
	    /**
	     * A local reference to the locale to use for the request
	     * @type {string}
	     * @private
	     */

	    if (!config.locale) {
	      throw new AnswersBasicError('Locale is required', 'Search');
	    }

	    this._locale = config.locale;
	  }
	  /** @inheritdoc */


	  var _proto = SearchApi.prototype;

	  _proto.verticalSearch = function verticalSearch(verticalKey, _ref) {
	    var input = _ref.input,
	        filter = _ref.filter,
	        facetFilter = _ref.facetFilter,
	        limit = _ref.limit,
	        offset = _ref.offset,
	        id = _ref.id,
	        geolocation = _ref.geolocation,
	        isDynamicFiltersEnabled = _ref.isDynamicFiltersEnabled,
	        skipSpellCheck = _ref.skipSpellCheck,
	        queryTrigger = _ref.queryTrigger,
	        sessionTrackingEnabled = _ref.sessionTrackingEnabled;

	    if (limit > 50) {
	      throw new AnswersCoreError('Provided search limit unsupported', 'SearchApi');
	    }

	    var request = new ApiRequest({
	      endpoint: '/v2/accounts/me/answers/vertical/query',
	      apiKey: this._apiKey,
	      version: this._version,
	      params: {
	        'input': input,
	        'experienceKey': this._experienceKey,
	        'version': this._experienceVersion,
	        'filters': filter,
	        'facetFilters': facetFilter,
	        'verticalKey': verticalKey,
	        'limit': limit,
	        'offset': offset,
	        'location': geolocation ? geolocation.lat + "," + geolocation.lng : null,
	        'radius': geolocation ? geolocation.radius : null,
	        'queryId': id,
	        'retrieveFacets': isDynamicFiltersEnabled,
	        'locale': this._locale,
	        'skipSpellCheck': skipSpellCheck,
	        'queryTrigger': queryTrigger,
	        'sessionTrackingEnabled': sessionTrackingEnabled
	      }
	    });
	    return request.get().then(function (response) {
	      return response.json();
	    });
	  }
	  /** @inheritdoc */
	  ;

	  _proto.universalSearch = function universalSearch(queryString, params) {
	    var request = new ApiRequest({
	      endpoint: '/v2/accounts/me/answers/query',
	      apiKey: this._apiKey,
	      version: this._version,
	      params: {
	        'input': queryString,
	        'experienceKey': this._experienceKey,
	        'location': params.geolocation ? params.geolocation.lat + "," + params.geolocation.lng : null,
	        'radius': params.geolocation ? params.geolocation.radius : null,
	        'version': this._experienceVersion,
	        'locale': this._locale,
	        'skipSpellCheck': params.skipSpellCheck,
	        'queryTrigger': params.queryTrigger,
	        'sessionTrackingEnabled': params.sessionTrackingEnabled
	      }
	    });
	    return request.get().then(function (response) {
	      return response.json();
	    });
	  };

	  return SearchApi;
	}();

	/**
	 * Model for the analytics event type
	 */
	var AnalyticsEvent =
	/*#__PURE__*/
	function () {
	  function AnalyticsEvent(type, label) {
	    /**
	     * The type of event to report
	     * @type {string}
	     */
	    this.eventType = type.toUpperCase();
	    /**
	     * An optional label to be provided for the event
	     * @type {string}
	     */

	    if (label) {
	      this.label = label;
	    }
	  }
	  /**
	   * Adds the provided options to the event
	   * @param {object} options Additional options for the event
	   */


	  var _proto = AnalyticsEvent.prototype;

	  _proto.addOptions = function addOptions(options) {
	    Object.assign(this, options);
	    return this;
	  }
	  /**
	   * Return the event in the api format, typically for reporting to the api
	   */
	  ;

	  _proto.toApiEvent = function toApiEvent() {
	    return Object.assign({}, this);
	  };

	  return AnalyticsEvent;
	}();

	/** @module AnalyticsReporter */
	/** @typedef {import('../services/analyticsreporterservice').default} AnalyticsReporterService */

	/**
	 * Class for reporting analytics events to the server via HTTP
	 *
	 * @implements {AnalyticsReporterService}
	 */

	var AnalyticsReporter =
	/*#__PURE__*/
	function () {
	  function AnalyticsReporter(core, experienceKey, experienceVersion, businessId, globalOptions) {
	    var _this = this;

	    if (globalOptions === void 0) {
	      globalOptions = {};
	    }

	    /**
	     * The internal business identifier used for reporting
	     * @type {number}
	     */
	    this._businessId = businessId;
	    /**
	     * Options to include with every analytic event reported to the server
	     * @type {object}
	     * @private
	     */

	    this._globalOptions = Object.assign({}, globalOptions, {
	      experienceKey: experienceKey
	    });
	    /**
	     * Base URL for the analytics API
	     * @type {string}
	     * @private
	     */

	    this._baseUrl = ANALYTICS_BASE_URL_NO_COOKIE;

	    if (experienceVersion) {
	      this._globalOptions.experienceVersion = experienceVersion;
	    } // listen to query id updates


	    core.globalStorage.on('update', StorageKeys.QUERY_ID, function (id) {
	      return _this.setQueryId(id);
	    });
	  }

	  var _proto = AnalyticsReporter.prototype;

	  _proto.setQueryId = function setQueryId(queryId) {
	    this._globalOptions.queryId = queryId;
	  }
	  /** @inheritdoc */
	  ;

	  _proto.report = function report(event) {
	    if (!(event instanceof AnalyticsEvent)) {
	      throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
	    }

	    event.addOptions(this._globalOptions);
	    return new HttpRequester().beacon(this._baseUrl + "/realtimeanalytics/data/answers/" + this._businessId, {
	      'data': event.toApiEvent()
	    });
	  }
	  /** @inheritdoc */
	  ;

	  _proto.setConversionTrackingEnabled = function setConversionTrackingEnabled(isEnabled) {
	    this._baseUrl = isEnabled ? ANALYTICS_BASE_URL : ANALYTICS_BASE_URL_NO_COOKIE;
	  };

	  return AnalyticsReporter;
	}();

	/** @typedef {import('../services/analyticsreporterservice').default} AnalyticsReporterService */

	/**
	 * @implements {AnalyticsReporterService}
	 */
	var NoopAnalyticsReporter =
	/*#__PURE__*/
	function () {
	  function NoopAnalyticsReporter() {}

	  var _proto = NoopAnalyticsReporter.prototype;

	  /** @inheritdoc */
	  _proto.report = function report(event) {
	    return true;
	  }
	  /** @inheritdoc */
	  ;

	  _proto.setConversionTrackingEnabled = function setConversionTrackingEnabled(isEnabled) {};

	  return NoopAnalyticsReporter;
	}();

	/**
	 * ModuleData is used as a generic model for Storage.
	 * Typically an instance of ModuleData powers a single component.

	 * A data model that exposes an event emitter interface.
	 * @extends EventEmitter
	 */

	var ModuleData =
	/*#__PURE__*/
	function (_EventEmitter) {
	  inheritsLoose(ModuleData, _EventEmitter);

	  function ModuleData(id, data) {
	    var _this;

	    if (data === void 0) {
	      data = {};
	    }

	    _this = _EventEmitter.call(this) || this;
	    _this._id = id;
	    _this._history = [];
	    _this._data = data;

	    _this.set(data);

	    return _this;
	  }
	  /**
	   * replaces the currently held data with the given data
	   * @param {*} data the data to replace the current data
	   */


	  var _proto = ModuleData.prototype;

	  _proto.set = function set(data) {
	    this.capturePrevious();

	    if (typeof data !== 'object' || Array.isArray(data) || Object.keys(data).length !== Object.keys(this._data).length) {
	      this._data = data;
	      this.emit('update', this._data);
	      return;
	    } // check for shallow equality


	    for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
	      var key = _Object$keys[_i];

	      if (this._data[key] !== data[key]) {
	        this._data = data;
	        this.emit('update', this._data);
	        return;
	      }
	    }
	  };

	  _proto.capturePrevious = function capturePrevious() {
	    if (this._history === undefined) {
	      this._history = [];
	    }

	    if (this._history.length + 1 > 5) {
	      this._history.shift();
	    } // If data is ever undefined, we default to empty object


	    this._history.push(JSON.stringify(this._data || {}));
	  };

	  _proto.undo = function undo() {
	    var previous = {};

	    if (this._previous.length > 0) {
	      previous = JSON.parse(this._previous.pop());
	    }

	    this._data.set(previous);
	  };

	  _proto.raw = function raw() {
	    return this._data;
	  };

	  return ModuleData;
	}(EventEmitter);

	/** @module GlobalStorage */
	/**
	 * Storage is a container around application state.
	 * It exposes an interface for CRUD operations as well as listening
	 * for stateful changes.
	 */

	var GlobalStorage =
	/*#__PURE__*/
	function () {
	  function GlobalStorage() {
	    this._moduleDataContainer = {};
	    this._futureListeners = {};
	  }
	  /**
	   * Set the data in storage with the given key to the provided data,
	   * completely overwriting any existing data.
	   * @param {string} key the storage key to set
	   * @param {*} data the data to set
	   */


	  var _proto = GlobalStorage.prototype;

	  _proto.set = function set(key, data) {
	    this._initDataContainer(key, data);

	    this._moduleDataContainer[key].set(data);
	  }
	  /**
	   * Add all key/value pairs in the provided map to the storage
	   * @param {*} data The key/value pairs to set in the storage
	   */
	  ;

	  _proto.setAll = function setAll(data) {
	    for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
	      var _Object$entries$_i = _Object$entries[_i],
	          key = _Object$entries$_i[0],
	          val = _Object$entries$_i[1];

	      if (key === StorageKeys.QUERY) {
	        continue;
	      }

	      this.set(key, val);
	    } // Update query last since it triggers a search
	    // TODO: move listeners up so all of storage can be updated at the same time


	    if (data[StorageKeys.QUERY]) {
	      this.set(StorageKeys.QUERY, data[StorageKeys.QUERY]);
	    }
	  };

	  _proto._initDataContainer = function _initDataContainer(key, data) {
	    if (key === undefined || key === null || typeof key !== 'string') {
	      throw new AnswersStorageError('Invalid storage key provided', key, data);
	    }

	    if (data === undefined || data === null) {
	      throw new AnswersStorageError('No data provided', key, data);
	    }

	    if (this._moduleDataContainer[key] === undefined) {
	      this._moduleDataContainer[key] = new ModuleData(key);

	      this._applyFutureListeners(key);
	    }
	  };

	  _proto.getState = function getState(moduleId) {
	    if (this._moduleDataContainer[moduleId]) {
	      return this._moduleDataContainer[moduleId].raw();
	    }

	    return null;
	  };

	  _proto.getAll = function getAll(key) {
	    var data = [];

	    for (var _i2 = 0, _Object$keys = Object.keys(this._moduleDataContainer); _i2 < _Object$keys.length; _i2++) {
	      var dataKey = _Object$keys[_i2];

	      if (dataKey.startsWith(key) && this._moduleDataContainer[dataKey].raw() !== null) {
	        data.push(this._moduleDataContainer[dataKey].raw());
	      }
	    }

	    return data;
	  }
	  /**
	   * Remove the data in storage with the given key to the provided data,
	   * @param {string} key the storage key to delete
	   */
	  ;

	  _proto["delete"] = function _delete(key) {
	    // Note: Do we need to clean up listeners here?
	    delete this._moduleDataContainer[key];
	  };

	  _proto.on = function on(evt, moduleId, cb) {
	    var moduleData = this._moduleDataContainer[moduleId];

	    if (moduleData === undefined) {
	      if (this._futureListeners[moduleId] === undefined) {
	        this._futureListeners[moduleId] = [];
	      }

	      this._futureListeners[moduleId].push({
	        event: evt,
	        cb: cb
	      });

	      return;
	    }

	    this._moduleDataContainer[moduleId].on(evt, cb);

	    return this;
	  };

	  _proto.off = function off(evt, moduleId, cb) {
	    var moduleData = this._moduleDataContainer[moduleId];

	    if (moduleData === undefined) {
	      if (this._futureListeners[moduleId] !== undefined) {
	        this._futureListeners[moduleId].pop();
	      }

	      return this;
	    }

	    this._moduleDataContainer[moduleId].off(evt, cb);

	    return this;
	  };

	  _proto._applyFutureListeners = function _applyFutureListeners(moduleId) {
	    var futures = this._futureListeners[moduleId];

	    if (!futures) {
	      return;
	    }

	    for (var i = 0; i < futures.length; i++) {
	      var future = futures[i];
	      this.on(future.event, moduleId, future.cb);
	    }

	    delete this._futureListeners[moduleId];
	  };

	  return GlobalStorage;
	}();

	/** @module */

	/**
	 * Component is an abstraction that encapsulates state, behavior,
	 * and view for a particular chunk of functionality on the page.
	 *
	 * The API exposes event life cycle hooks for when things are rendered,
	 * mounted, created, etc.
	 */

	var Component =
	/*#__PURE__*/
	function () {
	  function Component(config, systemConfig) {
	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    this.moduleId = null;
	    /**
	     * Unique name of this component instance
	     * Used to distinguish between other components of the same type
	     * @type {String}
	     */

	    this.name = config.name || this.constructor.type;
	    /**
	     * Cache the options so that we can propogate properly to child components
	     * @type {Object}
	     */

	    this._config = config;
	    /**
	     * An identifier used to classify the type of component.
	     * The component manager uses this information in order to persist and organize components
	     * @type {string|ComponentType}
	     */

	    this._type = this.constructor.name;
	    /**
	     * A local reference to the parent component, if exists
	     * @type {Component}
	     */

	    this._parentContainer = config.parentContainer || null;
	    /**
	     * A container for all the child components
	     * @type {Component[]}
	     */

	    this._children = [];
	    /**
	     * The state (data) of the component to be provided to the template for rendering
	     * @type {object}
	     */

	    this._state = new State(config.state);
	    /**
	     * TODO(billy) This should be 'services'
	     */

	    this.core = systemConfig.core || null;
	    /**
	     * A local reference to the component manager, which contains all of the component classes
	     * eligible to be created
	     * @type {ComponentManager}
	     */

	    this.componentManager = systemConfig.componentManager || null;
	    /**
	     * A local reference to the analytics reporter, used to report events for this component
	     * @type {AnalyticsReporter}
	     */

	    this.analyticsReporter = systemConfig.analyticsReporter || null;
	    /**
	     * Options to include with all analytic events sent by this component
	     * @type {object}
	     * @private
	     */

	    this._analyticsOptions = config.analyticsOptions || {};
	    /**
	     * A reference to the DOM node that the component will be appended to when mounted/rendered.
	     * @type {HTMLElement}
	     */

	    if (this._parentContainer === null) {
	      if (typeof config.container !== 'string') {
	        throw new Error('Missing `container` option for component configuration. Must be of type `string`.');
	      }

	      this._container = DOM.query(config.container) || null;
	    } else {
	      this._container = DOM.query(this._parentContainer, config.container); // If we have a parent, and the container is missing from the DOM,
	      // we construct the container and append it to the parent

	      if (this._container === null) {
	        this._container = DOM.createEl('div', {
	          "class": config.container.substring(1, config.container.length)
	        });
	        DOM.append(this._parentContainer, this._container);
	      }
	    }

	    if (this._container === null) {
	      throw new Error('Cannot find container DOM node: ' + config.container);
	    }
	    /**
	     * A custom class to be applied to {this._container} node
	     * @type {string}
	     */


	    this._className = config["class"] || 'component';
	    /**
	     * A custom render function to be used instead of using the default renderer
	     * @type {Renderer}
	     */

	    this._render = config.render || null;
	    /**
	     * A local reference to the default {Renderer} that will be used for rendering the template
	     * @type {Renderer}
	     */

	    this._renderer = systemConfig.renderer || Renderers.Handlebars;
	    /**
	     * The template string to use for rendering the component
	     * If this is left empty, we lookup the template the base templates using the templateName
	     * @type {string}
	     */

	    this._template = config.template ? this._renderer.compile(config.template) : null;
	    /**
	     * The templateName to use for rendering the component.
	     * This is only used if _template is empty.
	     * @type {string}
	     */

	    this._templateName = config.templateName || this.constructor.defaultTemplateName(config);
	    /**
	     * An internal state indicating whether or not the component has been mounted to the DOM
	     * @type {boolean}
	     */

	    this._isMounted = false;
	    /**
	     * A local reference to the callback, thats used to transform the internal data
	     * models of the components, before it gets applied to the component state.
	     * By default, no transformation happens.
	     * @type {function}
	     */

	    this.transformData = config.transformData || this.transformData || function () {};
	    /**
	     * The a local reference to the callback that will be invoked when a component is created.
	     * @type {function}
	     */


	    this.onCreate = config.onCreateOverride || this.onCreate || function () {};

	    this.onCreate = this.onCreate.bind(this);
	    /**
	     * The a local reference to the callback that will be invoked when a component is Mounted.
	     * @type {function}
	     */

	    this.onMount = config.onMountOverride || this.onMount || function () {};

	    this.onMount = this.onMount.bind(this);
	    /**
	     * The a local reference to the callback that will be invoked when a components state is updated.
	     * @type {function}
	     */

	    this.onUpdate = config.onUpdateOverride || this.onUpdate || function () {};

	    this.onUpdate = this.onUpdate.bind(this);
	    /**
	     * A user provided onCreate callback
	     * @type {function}
	     */

	    this.userOnCreate = config.onCreate || function () {};
	    /**
	     * A user provided onMount callback
	     * @type {function}
	     */


	    this.userOnMount = config.onMount || function () {};
	    /**
	     * A user provided onUpdate callback
	     * @type {function}
	     */


	    this.userOnUpdate = config.onUpdate || function () {};
	  }
	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */


	  Component.defaultTemplateName = function defaultTemplateName(config) {
	    return 'default';
	  };

	  Component.areDuplicateNamesAllowed = function areDuplicateNamesAllowed() {
	    return false;
	  };

	  var _proto = Component.prototype;

	  _proto.init = function init(opts) {
	    var _this = this;

	    try {
	      this.setState(opts.data || opts.state || {});
	      this.onCreate();
	      this.userOnCreate();
	    } catch (e) {
	      throw new AnswersComponentError('Error initializing component', this.constructor.type, e);
	    }

	    this._state.on('update', function () {
	      try {
	        _this.onUpdate();

	        _this.userOnUpdate();

	        _this.unMount();

	        _this.mount();
	      } catch (e) {
	        console.log(e);
	        throw new AnswersComponentError('Error updating component', _this.constructor.type, e);
	      }
	    });

	    DOM.addClass(this._container, this._className);
	    return this;
	  };

	  _proto.setState = function setState(data) {
	    var newState = Object.assign({}, {
	      _config: this._config
	    }, data);

	    this._state.set(newState);

	    return this;
	  };

	  _proto.getState = function getState(prop) {
	    return this._state.get(prop);
	  };

	  _proto.hasState = function hasState(prop) {
	    return this._state.has(prop);
	  };

	  _proto.transformData = function transformData(data) {
	    return data;
	  };

	  _proto.addChild = function addChild(data, type, opts) {
	    var childComponent = this.componentManager.create(type, Object.assign({
	      name: data.name,
	      parentContainer: this._container,
	      data: data
	    }, opts || {}, {
	      _parentOpts: this._config
	    }));

	    this._children.push(childComponent);

	    return childComponent;
	  }
	  /**
	   * Unmount and remove this component and its children from the list
	   * of active components
	   */
	  ;

	  _proto.remove = function remove() {
	    this._children.forEach(function (c) {
	      return c.remove();
	    });

	    this.componentManager.remove(this);
	  }
	  /**
	   * Set the render method to be used for rendering the component
	   * @param {Function} render
	   * @return {string}
	   */
	  ;

	  _proto.setRender = function setRender(render) {
	    this._render = render;
	    return this;
	  }
	  /**
	   * Set the renderer for the component
	   * @param {RendererType} renderer
	   */
	  ;

	  _proto.setRenderer = function setRenderer(renderer) {
	    this._renderer = Renderers[renderer];
	    return this;
	  }
	  /**
	   * Sets the template for the component to use when rendering
	   * @param {string} template
	   */
	  ;

	  _proto.setTemplate = function setTemplate(template) {
	    this._template = this._renderer.compile(template);
	  };

	  _proto.unMount = function unMount() {
	    if (!this._container) {
	      return this;
	    }

	    this._children.forEach(function (child) {
	      child.unMount();
	    });

	    DOM.empty(this._container);

	    this._children.forEach(function (c) {
	      return c.remove();
	    });

	    this._children = [];
	    this.onUnMount();
	  };

	  _proto.mount = function mount() {
	    var _this2 = this;

	    if (!this._container) {
	      return this;
	    }

	    if (this.beforeMount() === false) {
	      return this;
	    }

	    DOM.append(this._container, this.render(this._state.asJSON())); // Process the DOM to determine if we should create
	    // in-memory sub-components for rendering

	    var domComponents = DOM.queryAll(this._container, '[data-component]:not([data-is-component-mounted])');
	    var data = this.transformData(JSON.parse(JSON.stringify(this._state.get())));
	    domComponents.forEach(function (c) {
	      return _this2._createSubcomponent(c, data);
	    });

	    this._children.forEach(function (child) {
	      child.mount();
	    }); // Attach analytics hooks as necessary


	    if (this.analyticsReporter) {
	      var domHooks = DOM.queryAll(this._container, '[data-eventtype]:not([data-is-analytics-attached])');
	      domHooks.forEach(this._createAnalyticsHook.bind(this));
	    }

	    this._isMounted = true;
	    this.onMount(this);
	    this.userOnMount(this);
	    return this;
	  }
	  /**
	   * render the template using the {Renderer} with the current state and template of the component
	   * @returns {string}
	   */
	  ;

	  _proto.render = function render(data) {
	    if (data === void 0) {
	      data = this._state.get();
	    }

	    this.beforeRender(); // Temporary fix for passing immutable data to transformData().

	    data = this.transformData(JSON.parse(JSON.stringify(data)));
	    var html = ''; // Use either the custom render function or the internal renderer
	    // dependant on the component configuration

	    if (typeof this._render === 'function') {
	      html = this._render(data);

	      if (typeof html !== 'string') {
	        throw new Error('Render method must return HTML as type {string}');
	      }
	    } else {
	      // Render the existing templates as a string
	      html = this._renderer.render({
	        template: this._template,
	        templateName: this._templateName
	      }, data);
	    } // We create an HTML Document fragment with the rendered string
	    // So that we can query it for processing of sub components


	    var el = DOM.create(html);
	    this.afterRender();
	    return el.innerHTML;
	  };

	  _proto._createSubcomponent = function _createSubcomponent(domComponent, data) {
	    var _this3 = this;

	    domComponent.dataset.isComponentMounted = true;
	    var dataset = domComponent.dataset;
	    var type = dataset.component;
	    var prop = dataset.prop;
	    var opts = dataset.opts ? JSON.parse(dataset.opts) : {};
	    var childData = data[prop] || {};
	    opts = objectSpread({}, opts, {
	      container: domComponent
	    }); // TODO(billy) Right now, if we provide an array as the data prop,
	    // the behavior is to create many components for each item in the array.
	    // THAT interface SHOULD change to use a different property that defines
	    // whether to array data should be used for a single component or
	    // to create many components for each item.
	    // Overloading and having this side effect is unintuitive and WRONG

	    if (!Array.isArray(childData)) {
	      // Rendering a sub component should be within the context,
	      // of the node that we processed it from
	      this.addChild(childData, type, opts);
	      return;
	    }

	    childData.reverse();
	    childData.forEach(function (data) {
	      _this3.addChild(data, type, opts);
	    });
	  };

	  _proto._createAnalyticsHook = function _createAnalyticsHook(domComponent) {
	    var _this4 = this;

	    domComponent.dataset.isAnalyticsAttached = true;
	    var dataset = domComponent.dataset;
	    var type = dataset.eventtype;
	    var label = dataset.eventlabel;
	    var options = dataset.eventoptions ? JSON.parse(dataset.eventoptions) : {};
	    DOM.on(domComponent, 'click', function (e) {
	      var event = new AnalyticsEvent(type, label);
	      event.addOptions(_this4._analyticsOptions);
	      event.addOptions(options);

	      _this4.analyticsReporter.report(event);
	    });
	  }
	  /**
	   * onCreate is triggered when the component is constructed
	   * @param {function} the callback to invoke upon emit
	   */
	  ;

	  _proto.onCreate = function onCreate(cb) {}
	  /**
	   * onUpdate is triggered when the state of the component changes
	   * @param {function} the callback to invoke upon emit
	   */
	  ;

	  _proto.onUpdate = function onUpdate(cb) {}
	  /**
	   * beforeRender event is triggered before the component is rendered
	   * @param {function} the callback to invoke upon emit
	   */
	  ;

	  _proto.beforeRender = function beforeRender(cb) {}
	  /**
	   * afterRender event is triggered after the component is rendered
	   * @param {function} the callback to invoke upon emit
	   */
	  ;

	  _proto.afterRender = function afterRender(cb) {}
	  /**
	   * onMount is triggered when the component is appended to the DOM
	   * @param {function} the callback to invoke upon emit
	   */
	  ;

	  _proto.onMount = function onMount(cb) {}
	  /**
	   * onUnMount is triggered when the component is removed from the DOM
	   * @param {function} the callback to invoke upon emit
	   */
	  ;

	  _proto.onUnMount = function onUnMount(cb) {}
	  /**
	   * beforeMount is triggered before the component is mounted to the DOM
	   * @param {function} the callback to invoke upon emit
	   */
	  ;

	  _proto.beforeMount = function beforeMount(cb) {}
	  /**
	   * onDestroy is triggered when the component is destroyed
	   * @param {function} the callback to invoke upon emit
	   */
	  ;

	  _proto.onDestroy = function onDestroy(cb) {};

	  createClass(Component, null, [{
	    key: "type",
	    get: function get() {
	      return 'Component';
	    }
	  }]);

	  return Component;
	}();

	/**
	 * The debounce duration for resize events
	 * @type {number}
	 */

	var RESIZE_DEBOUNCE = 100;
	/**
	 * The Tab is a model that is used to power the Navigation tabs in the view.
	 * It's initialized through the configuration provided to the component.
	 */

	var Tab =
	/*#__PURE__*/
	function () {
	  function Tab(config) {
	    /**
	     * The name of the tab that is exposed for the link
	     * @type {string}
	     */
	    this.label = config.label;

	    if (typeof this.label !== 'string') {
	      throw new AnswersComponentError('label is a required configuration option for tab.', 'NavigationComponent');
	    }
	    /**
	     * The complete URL, including the params
	     * @type {string}
	     */


	    this.url = config.url;

	    if (typeof this.url !== 'string') {
	      throw new AnswersComponentError('url is a required configuration option for tab.', 'NavigationComponent');
	    }
	    /**
	     * The serverside vertical config id that this is referenced to.
	     * By providing this, enables dynamic sorting based on results.
	     * @type {string}
	     */


	    this.configId = config.configId || null;
	    /**
	     * The base URL used for constructing the URL with params
	     * @type {string}
	     */

	    this.baseUrl = config.url;
	    /**
	     * Determines whether to show this tab first in the order
	     * @type {boolean}
	     */

	    this.isFirst = config.isFirst || false;
	    /**
	     * Determines whether or not to apply a special class to the
	     * markup to determine if it's an active tab
	     * @type {boolean}
	     */

	    this.isActive = config.isActive || false;
	  }
	  /**
	   * from will construct a map of configId to {Tab} from
	   * a configuration file
	   * @param {object} tabsConfig the configuration to use
	   */


	  Tab.from = function from(tabsConfig) {
	    var tabs = {}; // Parse the options and build out our tabs and

	    for (var i = 0; i < tabsConfig.length; i++) {
	      var tab = tabsConfig[i]; // For tabs without config ids, map their URL to the configID
	      // to avoid duplication of renders

	      if (tab.configId === undefined && tabs[tab.configId] === undefined) {
	        tab.configId = tab.url;
	      }

	      tabs[tab.configId] = new Tab(tab);
	    }

	    return tabs;
	  };

	  return Tab;
	}();
	/**
	 * NavigationComponent exposes an interface for building a dynamic
	 * navigation that is powered by universal search updates.
	 * @extends Component
	 */

	var NavigationComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(NavigationComponent, _Component);

	  function NavigationComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;
	    /**
	     * The label to show on the dropdown menu button
	     * @type {string}
	     */

	    _this.dropdownLabel = config.dropdownLabel || 'More';
	    /**
	     * The optional icon to show on the dropdown menu button
	     * @type {string}
	     */

	    _this.dropdownIcon = config.dropdownIcon || 'kabob';
	    /**
	     * If true, render a static navigation with no "more" menu
	     * @type {boolean}
	     */

	    _this["static"] = config["static"] || false;
	    /**
	     * The data storage key
	     * @type {string}
	     */

	    _this.moduleId = StorageKeys.NAVIGATION;
	    /**
	     * Unordered map of each tab, keyed by VS configId
	     * @type {Object.<String, Object>}
	     * @private
	     */

	    _this._tabs = Tab.from(config.tabs);
	    /**
	     * The order of the tabs, parsed from configuration or URL.
	     * This gets updated based on the server results
	     * @type {Array.<String>} The list of VS configIds
	     * @private
	     */

	    _this._tabOrder = _this.getDefaultTabOrder(config.tabs, _this.getUrlParams());
	    /**
	     * Breakpoints at which navigation items move to the "more" dropdown
	     * @type {number[]}
	     * @private
	     */

	    _this._navBreakpoints = [];
	    return _this;
	  }

	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  NavigationComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'navigation/navigation';
	  };

	  var _proto = NavigationComponent.prototype;

	  _proto.onCreate = function onCreate() {
	    var _this2 = this;

	    if (!this["static"]) {
	      DOM.on(window, 'resize', function () {
	        if (_this2._debounceTimer) {
	          clearTimeout(_this2._debounceTimer);
	        }

	        _this2._debounceTimer = setTimeout(_this2.refitNav.bind(_this2), RESIZE_DEBOUNCE);
	      });
	      DOM.on(window, 'click', this.checkOutsideClick.bind(this));
	    }
	  };

	  _proto.onMount = function onMount() {
	    if (!this["static"]) {
	      this.refitNav();
	      DOM.on(DOM.query(this._container, '.yxt-Nav-more'), 'click', this.toggleMoreDropdown.bind(this));
	    }
	  };

	  _proto.refitNav = function refitNav() {
	    var container = DOM.query(this._container, '.yxt-Nav-container');
	    var moreButton = DOM.query(this._container, '.yxt-Nav-more');
	    var mainLinks = DOM.query(this._container, '.yxt-Nav-expanded');
	    var collapsedLinks = DOM.query(this._container, '.yxt-Nav-modal');
	    var navWidth = moreButton.classList.contains('yxt-Nav-item--more') ? container.offsetWidth : container.offsetWidth - moreButton.offsetWidth;
	    var numBreakpoints = this._navBreakpoints.length; // sum child widths instead of using parent's width to avoid
	    // browser inconsistencies

	    var mainLinksWidth = 0;

	    for (var _iterator = mainLinks.children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var el = _ref;
	      mainLinksWidth += el.offsetWidth;
	    }

	    if (mainLinksWidth > navWidth) {
	      this._navBreakpoints.push(mainLinksWidth);

	      var lastLink = mainLinks.children.item(mainLinks.children.length - 1);

	      if (lastLink === null) {
	        return;
	      }

	      collapsedLinks.prepend(lastLink);

	      if (moreButton.classList.contains('yxt-Nav-item--more')) {
	        moreButton.classList.remove('yxt-Nav-item--more');
	      }
	    } else {
	      if (numBreakpoints && navWidth > this._navBreakpoints[numBreakpoints - 1]) {
	        var firstLink = collapsedLinks.children.item(0);

	        if (firstLink === null) {
	          return;
	        }

	        mainLinks.append(firstLink);

	        this._navBreakpoints.pop();

	        numBreakpoints--;
	      }

	      if (collapsedLinks.children.length === 0) {
	        moreButton.classList.add('yxt-Nav-item--more');
	      }
	    }

	    this.closeMoreDropdown();

	    if (mainLinksWidth > navWidth || numBreakpoints > 0 && navWidth > this._navBreakpoints[numBreakpoints - 1]) {
	      this.refitNav();
	    }
	  };

	  _proto.closeMoreDropdown = function closeMoreDropdown() {
	    var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
	    collapsed.classList.remove('is-active');
	    var moreButton = DOM.query(this._container, '.yxt-Nav-more');
	    moreButton.setAttribute('aria-expanded', false);
	  };

	  _proto.openMoreDropdown = function openMoreDropdown() {
	    var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
	    collapsed.classList.add('is-active');
	    var moreButton = DOM.query(this._container, '.yxt-Nav-more');
	    moreButton.setAttribute('aria-expanded', true);
	  };

	  _proto.toggleMoreDropdown = function toggleMoreDropdown() {
	    var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
	    collapsed.classList.toggle('is-active');
	    var moreButton = DOM.query(this._container, '.yxt-Nav-more');
	    moreButton.setAttribute('aria-expanded', collapsed.classList.contains('is-active'));
	  };

	  _proto.checkOutsideClick = function checkOutsideClick(e) {
	    if (e.target.closest('.yxt-Nav-container')) {
	      return;
	    }

	    this.closeMoreDropdown();
	  }
	  /**
	   * Since the server data only provides a list of
	   * VS configIds, we need to compute and transform
	   * the data into the proper format for rendering.
	   *
	   * @override
	   */
	  ;

	  _proto.setState = function setState(data) {
	    if (data.tabOrder !== undefined) {
	      this._tabOrder = this.mergeTabOrder(data.tabOrder, this._tabOrder);
	    } // Since the tab ordering can change based on the server data
	    // we need to update each tabs URL to include the order as part of their params.
	    // This helps with persisting state across verticals.


	    var tabs = [];

	    for (var i = 0; i < this._tabOrder.length; i++) {
	      var tab = this._tabs[this._tabOrder[i]];

	      if (tab !== undefined) {
	        tab.url = this.generateTabUrl(tab.baseUrl, this.getUrlParams());
	        tabs.push(tab);
	      }
	    }

	    return _Component.prototype.setState.call(this, {
	      tabs: tabs,
	      dropdownLabel: this.dropdownLabel,
	      dropdownIcon: this.dropdownIcon,
	      "static": this["static"]
	    });
	  };

	  _proto.getUrlParams = function getUrlParams() {
	    return new SearchParams(window.location.search.substring(1));
	  }
	  /**
	   * getDefaultTabOrder will compute the initial tab ordering based
	   * on a combination of the configuration provided directly to the component
	   * and the url params.
	   * @param {Object[]} tabsConfig
	   * @param {SearchParams}
	   */
	  ;

	  _proto.getDefaultTabOrder = function getDefaultTabOrder(tabsConfig, urlParams) {
	    var tabOrder = []; // Use the ordering from the URL as the primary configuration
	    // And then merge it with the local configuration, if provided.

	    if (urlParams && urlParams.has('tabOrder')) {
	      tabOrder = urlParams.get('tabOrder').split(',');
	    }

	    for (var i = 0; i < tabsConfig.length; i++) {
	      var tab = tabsConfig[i]; // Some tabs don't have configId, so we map it from URL

	      if (tab.configId === undefined) {
	        tab.configId = tab.url;
	      } // Avoid duplicates if config was provided from URL


	      if (tabOrder.includes(tab.configId)) {
	        continue;
	      } // isFirst should always be the first element in the list


	      if (tab.isFirst) {
	        tabOrder.unshift(tab.configId);
	      } else {
	        tabOrder.push(tab.configId);
	      }
	    }

	    return tabOrder;
	  }
	  /**
	   * mergeTabOrder merges two arrays into one
	   * by appending additional tabs to the end of the original array
	   * @param {string[]} tabOrder Tab order provided by the server
	   * @param {string[]} otherTabOrder Tab order provided by configuration
	   * @return {string[]}
	   */
	  ;

	  _proto.mergeTabOrder = function mergeTabOrder(tabOrder, otherTabOrder) {
	    for (var i = 0; i < otherTabOrder.length; i++) {
	      var tabConfig = otherTabOrder[i];

	      if (tabOrder.includes(tabConfig)) {
	        continue;
	      } // isFirst should be an override to dynamic tab ordering.


	      if (this._tabs[tabConfig] && this._tabs[tabConfig].isFirst) {
	        tabOrder.unshift(tabConfig);
	      } else {
	        tabOrder.push(tabConfig);
	      }
	    }

	    return tabOrder;
	  };

	  _proto.generateTabUrl = function generateTabUrl(baseUrl, params) {
	    if (params === void 0) {
	      params = new URLSearchParams();
	    }

	    // We want to persist the params from the existing URL to the new
	    // URLS we create.
	    params.set('tabOrder', this._tabOrder);
	    return baseUrl + '?' + params.toString();
	  };

	  createClass(NavigationComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'Navigation';
	    }
	  }]);

	  return NavigationComponent;
	}(Component);

	/**
	 * SearchComponent exposes an interface in order to create
	 * a UI Search experience for vertical and universal search.
	 *
	 * @extends Component
	 */

	var SearchComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(SearchComponent, _Component);

	  function SearchComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;
	    /**
	     * The optional input key for the vertical search configuration
	     * If not provided, auto-complete and search will be based on universal
	     * @type {string}
	     */

	    _this._barKey = config.barKey || null;
	    /**
	     * The optional vertical key for vertical search configuration
	     * If not provided, auto-complete and search will be based on universal
	     * @type {string}
	     */

	    _this._verticalKey = config.verticalKey || null;
	    /**
	     * Query submission is based on a form as context.
	     * Optionally provided, otherwise defaults to native form node within container
	     * @type {string} CSS selector
	     */

	    _this._formEl = config.formSelector || 'form';
	    /**
	     * The input element used for searching and wires up the keyboard interaction
	     * Optionally provided.
	     * @type {string} CSS selector
	     */

	    _this._inputEl = config.inputEl || '.js-yext-query';
	    /**
	     * The title used, provided to the template as a data point
	     * Optionally provided.
	     * @type {string}
	     */

	    _this.title = config.title || 'Answers Universal Search';
	    /**
	     * The label text is used for labeling the input box, also provided to template.
	     * Optionally provided
	     * @type {string}
	     */

	    _this.labelText = config.labelText || 'What are you interested in?';
	    /**
	     * The submit text is used for labeling the submit button, also provided to the template.
	     * @type {string}
	     */

	    _this.submitText = config.submitText || 'Submit';
	    /**
	     * The submit icon is an icon for the submit button, if provided it will be displayed and the
	     * submit text will be used for screen readers.
	     * @type {string|null}
	     */

	    _this.submitIcon = config.submitIcon || null;
	    /**
	     * The query text to show as the first item for auto complete.
	     * Optionally provided
	     * @type {string}
	     */

	    _this.promptHeader = config.promptHeader || null;
	    /**
	     * Auto focuses the input box if set to true.
	     * Optionally provided, defaults to false.
	     * @type {boolean}
	     */

	    _this.autoFocus = config.autoFocus === true;
	    /**
	     * If true, show an "x" that allows the user to clear the current
	     * query
	     * @type {boolean}
	     */

	    _this.clearButton = config.clearButton === undefined ? true : config.clearButton;
	    /**
	     * When autofocusing on load, optionally open the autocomplete
	     * (preset prompts)
	     * @type {boolean}
	     */

	    _this.autocompleteOnLoad = config.autocompleteOnLoad || false;
	    /**
	     * submitURL will force the search query submission to get
	     * redirected to the URL provided.
	     * Optional, defaults to null.
	     *
	     * If no redirectUrl provided, we keep the page as a single page app.
	     *
	     * @type {boolean}
	     */

	    _this.redirectUrl = config.redirectUrl || null;
	    /**
	     * true if there is another search bar present on the page.
	     * Twins only update the query, and do not search
	     */

	    _this._isTwin = config.isTwin;
	    /**
	     * The query string to use for the input box, provided to template for rendering.
	     * Optionally provided
	     * @type {string|null}
	     */

	    _this.query = config.query || _this.core.globalStorage.getState(StorageKeys.QUERY);

	    _this.core.globalStorage.on('update', StorageKeys.QUERY, function (q) {
	      _this.query = q;

	      _this.setState();

	      _this.search(q);
	    });
	    /**
	     * The minimum time allowed in milliseconds between searches to prevent
	     * many duplicate searches back-to-back
	     * @type {number}
	     * @private
	     */


	    _this._searchCooldown = config.searchCooldown || 300;
	    /**
	     * When true and "near me" intent is expressed, prompt the user for their geolocation
	     * @type {boolean}
	     * @private
	     */

	    _this._promptForLocation = config.promptForLocation === undefined ? true : Boolean(config.promptForLocation);
	    /**
	     * Controls showing and hiding the search clear button
	     */

	    _this._showClearButton = _this.clearButton && _this.query;
	    /**
	     * For vertical search bars, whether or not to allow empty searches.
	     * @type {boolean}
	     * @private
	     */

	    _this._allowEmptySearch = !!config.allowEmptySearch;
	    return _this;
	  }

	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  SearchComponent.defaultTemplateName = function defaultTemplateName() {
	    return 'search/search';
	  };

	  var _proto = SearchComponent.prototype;

	  _proto.onCreate = function onCreate() {
	    if (this.query != null && !this.redirectUrl) {
	      this.core.setQuery(this.query);
	    }

	    if (this._promptForLocation) {
	      this.initLocationPrompt();
	    }
	  };

	  _proto.onMount = function onMount() {
	    // NOTE(amullings): If autocompleteOnLoad is false, we focus the input
	    // element before loading the autocomplete component so that its focus
	    // handler won't be triggered
	    if (this.autoFocus === true && !this.query && !this.autocompleteOnLoad) {
	      DOM.query(this._container, this._inputEl).focus();
	    } // Wire up our search handling and auto complete


	    this.initSearch(this._formEl);
	    this.initAutoComplete(this._inputEl);

	    if (this.clearButton) {
	      this.initClearButton();
	    }

	    if (this.autoFocus === true && !this.query && this.autocompleteOnLoad) {
	      DOM.query(this._container, this._inputEl).focus();
	    }
	  };

	  _proto.remove = function remove() {
	    this._autocomplete.remove();

	    _Component.prototype.remove.call(this);
	  };

	  _proto.initClearButton = function initClearButton() {
	    var _this2 = this;

	    var button = DOM.query(this._container, '.js-yxt-SearchBar-clear');
	    this._showClearButton = this._showClearButton || this.query;
	    button.classList.toggle('yxt-SearchBar--hidden', !this._showClearButton);
	    DOM.on(button, 'click', function () {
	      _this2.query = '';
	      _this2._showClearButton = false;
	      button.classList.add('yxt-SearchBar--hidden');

	      _this2.setState({});

	      _this2.core.persistentStorage.set(StorageKeys.QUERY, _this2.query);

	      _this2.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);

	      _this2.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);

	      _this2.core.setQuery(_this2.query);
	    });
	    DOM.on(this._inputEl, 'input', function (e) {
	      var input = e.target.value;

	      if (!_this2._showClearButton && input.length > 0) {
	        _this2._showClearButton = true;
	        button.classList.remove('yxt-SearchBar--hidden');
	      } else if (_this2._showClearButton && input.length === 0) {
	        _this2._showClearButton = false;
	        button.classList.add('yxt-SearchBar--hidden');
	      }
	    });
	  };

	  _proto.initLocationPrompt = function initLocationPrompt() {
	    var _this3 = this;

	    this.core.globalStorage.on('update', StorageKeys.INTENTS, function (intent) {
	      if (!intent.nearMe || _this3.core.globalStorage.getState(StorageKeys.GEOLOCATION) !== null) {
	        return;
	      }

	      navigator.geolocation.getCurrentPosition(function (position) {
	        _this3.core.globalStorage.set(StorageKeys.GEOLOCATION, {
	          lat: position.coords.latitude,
	          lng: position.coords.longitude,
	          radius: position.coords.accuracy
	        });

	        _this3.search(_this3.query || '');
	      });
	    });
	  }
	  /**
	   * A helper method to use for wiring up searching on form submission
	   * @param {string} formSelector CSS selector to bind our submit handling to
	   */
	  ;

	  _proto.initSearch = function initSearch(formSelector) {
	    var _this4 = this;

	    this._formEl = formSelector;

	    this._container.classList.add('yxt-SearchBar-wrapper');

	    var form = DOM.query(this._container, formSelector);

	    if (!form) {
	      throw new Error('Could not initialize SearchBar; Can not find {HTMLElement} `', this._formEl, '`.');
	    }

	    DOM.on(form, 'submit', function (e) {
	      e.preventDefault();
	      var inputEl = form.querySelector(_this4._inputEl);
	      var query = inputEl.value;
	      var params = new SearchParams(window.location.search.substring(1));
	      params.set('query', query); // If we have a redirectUrl, we want the form to be
	      // serialized and submitted.

	      if (typeof _this4.redirectUrl === 'string') {
	        window.location.href = _this4.redirectUrl + '?' + params.toString();
	        return false;
	      }

	      inputEl.blur();

	      _this4.core.persistentStorage.set(StorageKeys.QUERY, query);

	      _this4.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);

	      _this4.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);

	      _this4.core.setQuery(query);

	      _this4.search(query);

	      return false;
	    });
	  }
	  /**
	   * A helper method to wire up our auto complete on an input selector
	   * @param {string} inputSelector CSS selector to bind our auto complete component to
	   */
	  ;

	  _proto.initAutoComplete = function initAutoComplete(inputSelector) {
	    var _this5 = this;

	    this._inputEl = inputSelector;

	    if (this._autocomplete) {
	      this._autocomplete.remove();
	    }

	    this._autocomplete = this.componentManager.create('AutoComplete', {
	      parentContainer: this._container,
	      name: this.name + ".autocomplete",
	      container: '.yxt-SearchBar-autocomplete',
	      barKey: this._barKey,
	      autoFocus: this.autoFocus && !this.autocompleteOnLoad,
	      verticalKey: this._verticalKey,
	      promptHeader: this.promptHeader,
	      originalQuery: this.query,
	      inputEl: inputSelector,
	      onSubmit: function onSubmit() {
	        DOM.trigger(DOM.query(_this5._container, _this5._formEl), 'submit');
	      }
	    });
	  }
	  /**
	   * @param {string} query
	   */
	  ;

	  _proto.search = function search(query) {
	    var _this6 = this;

	    // Don't search if we recently searched,
	    // if there's no query for universal search,
	    // or if this is a twin searchbar
	    if (this._throttled || !query && !this._verticalKey || !query && this._verticalKey && !this._allowEmptySearch || this._isTwin) {
	      return;
	    }

	    this._throttled = true;
	    setTimeout(function () {
	      _this6._throttled = false;
	    }, this._searchCooldown);

	    if (this._verticalKey) {
	      var allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
	      var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, allFilters) : allFilters[0];
	      var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
	      return this.core.verticalSearch(this._verticalKey, {
	        input: query,
	        filter: JSON.stringify(totalFilter),
	        offset: this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0,
	        facetFilter: JSON.stringify(facetFilter)
	      });
	    } else {
	      // NOTE(billy) Temporary hack for DEMO
	      // Remove me after the demo
	      var nav = this.componentManager.getActiveComponent('Navigation');

	      if (nav) {
	        var tabs = nav.getState('tabs');
	        var urls = {};

	        if (tabs && Array.isArray(tabs)) {
	          for (var i = 0; i < tabs.length; i++) {
	            var params = new SearchParams(tabs[i].url.split('?')[1]);
	            params.set('query', query);
	            var url = tabs[i].baseUrl;

	            if (params.toString().length > 0) {
	              url += '?' + params.toString();
	            }

	            urls[tabs[i].configId] = url;
	          }
	        }

	        return this.core.search(query, urls);
	      }

	      return this.core.search(query);
	    }
	  };

	  _proto.setState = function setState(data) {
	    return _Component.prototype.setState.call(this, Object.assign({
	      title: this.title,
	      labelText: this.labelText,
	      submitIcon: this.submitIcon,
	      submitText: this.submitText,
	      showClearButton: this._showClearButton,
	      query: this.query || ''
	    }, data));
	  };

	  createClass(SearchComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'SearchBar';
	    }
	  }]);

	  return SearchComponent;
	}(Component);

	/**
	 * FilterSearchComponent is used for autocomplete using the FilterSearch backend.
	 * It'll allow you to pick pre-set filters that are setup on the backend within
	 * a vertical search context.
	 *
	 * @extends Component
	 */

	var FilterSearchComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(FilterSearchComponent, _Component);

	  function FilterSearchComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;
	    /**
	     * The input key for the vertical search configuration
	     * @type {string}
	     */

	    _this._barKey = config.barKey || config.inputKey || null;
	    /**
	     * The vertical key for vertical search configuration
	     * @type {string}
	     */

	    _this._verticalKey = config.verticalKey || null;
	    /**
	     * If true, store the filter value but do not search on change
	     * @type {boolean}
	     * @private
	     */

	    _this._storeOnChange = config.storeOnChange || false;
	    /**
	     * Query submission is based on a form as context.
	     * Optionally provided, otherwise defaults to native form node within container
	     * @type {string} CSS selector
	     */

	    _this._formEl = config.formSelector || 'form';
	    /**
	     * The input element used for searching and wires up the keyboard interaction
	     * Optionally provided.
	     * @type {string} CSS selector
	     */

	    _this._inputEl = config.inputEl || '.js-yext-query';
	    /**
	     * The title used, provided to the template as a data point
	     * Optionally provided.
	     * @type {string}
	     */

	    _this.title = config.title;
	    /**
	     * The search text used for labeling the input box, also provided to template.
	     * Optionally provided
	     * @type {string}
	     */

	    _this.searchText = config.searchText || 'What are you interested in?';
	    /**
	     * The query text to show as the first item for auto complete.
	     * Optionally provided
	     * @type {string}
	     */

	    _this.promptHeader = config.promptHeader || null;
	    /**
	     * Auto focuses the input box if set to true.
	     * Optionally provided, defaults to false.
	     * @type {boolean}
	     */

	    _this.autoFocus = config.autoFocus === true;
	    /**
	     * submitURL will force the search query submission to get
	     * redirected to the URL provided.
	     * Optional, defaults to null.
	     *
	     * If no redirectUrl provided, we keep the page as a single page app.
	     *
	     * @type {boolean}
	     */

	    _this.redirectUrl = config.redirectUrl || null;
	    /**
	     * The query string to use for the input box, provided to template for rendering.
	     * Optionally provided
	     * @type {string}
	     */

	    _this.query = config.query || _this.core.globalStorage.getState(StorageKeys.QUERY + "." + _this.name) || '';

	    _this.core.globalStorage.on('update', StorageKeys.QUERY + "." + _this.name, function (q) {
	      _this.query = q;

	      _this.search();
	    });
	    /**
	     * The filter string to use for the provided query
	     * Optionally provided
	     * @type {string}
	     */


	    _this.filter = config.filter || _this.core.globalStorage.getState(StorageKeys.FILTER + "." + _this.name) || '';

	    if (typeof _this.filter === 'string') {
	      try {
	        _this.filter = JSON.parse(_this.filter);
	      } catch (e) {}
	    }

	    _this.searchParameters = _this._buildSearchParameters(config.searchParameters);

	    _this.core.globalStorage.on('update', StorageKeys.FILTER + "." + _this.name, function (f) {
	      _this.filter = f;
	    });

	    return _this;
	  }

	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  FilterSearchComponent.defaultTemplateName = function defaultTemplateName() {
	    return 'search/filtersearch';
	  };

	  var _proto = FilterSearchComponent.prototype;

	  _proto.onCreate = function onCreate() {
	    if (this.query && this.filter) {
	      this.search();
	    }
	  };

	  _proto.onMount = function onMount() {
	    // Wire up our search handling and auto complete
	    this.initAutoComplete(this._inputEl);

	    if (this.autoFocus === true && this.query.length === 0) {
	      DOM.query(this._container, this._inputEl).focus();
	    }
	  }
	  /**
	   * A helper method to wire up our auto complete on an input selector
	   * @param {string} inputSelector CSS selector to bind our auto complete component to
	   */
	  ;

	  _proto.initAutoComplete = function initAutoComplete(inputSelector) {
	    var _this2 = this;

	    this._inputEl = inputSelector;
	    this.componentManager.create('AutoComplete', {
	      parentContainer: this._container,
	      name: this.name + ".autocomplete",
	      isFilterSearch: true,
	      container: '.yxt-SearchBar-autocomplete',
	      promptHeader: this.promptHeader,
	      originalQuery: this.query,
	      originalFilter: this.filter,
	      inputEl: inputSelector,
	      verticalKey: this._verticalKey,
	      barKey: this._barKey,
	      searchParameters: this.searchParameters,
	      onSubmit: function onSubmit(query, filter) {
	        var params = new SearchParams(window.location.search.substring(1));
	        params.set(_this2.name + ".query", query);
	        params.set(_this2.name + ".filter", filter); // If we have a redirectUrl, we want the params to be
	        // serialized and submitted.

	        if (typeof _this2.redirectUrl === 'string') {
	          window.location.href = _this2.redirectUrl + '?' + params.toString();
	          return false;
	        } // save the filter to storage for the next search


	        _this2.query = query;
	        _this2.filter = Filter.fromResponse(filter);

	        _this2.core.persistentStorage.set(StorageKeys.QUERY + "." + _this2.name, _this2.query);

	        _this2.core.persistentStorage.set(StorageKeys.FILTER + "." + _this2.name, _this2.filter);

	        _this2.core.setFilter(_this2.name, _this2.filter);

	        _this2.search();
	      }
	    });
	  }
	  /**
	   * Perform the vertical search with all saved filters and query,
	   * optionally redirecting based on config
	   */
	  ;

	  _proto.search = function search() {
	    if (this._storeOnChange) {
	      return;
	    }

	    var filters = this.core.globalStorage.getAll(StorageKeys.FILTER);
	    var totalFilter = filters[0];

	    if (filters.length > 1) {
	      totalFilter = Filter.and.apply(Filter, filters);
	    }

	    var searchQuery = this.core.globalStorage.getState(StorageKeys.QUERY) || '';
	    var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
	    this.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);
	    this.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);
	    this.core.verticalSearch(this._verticalKey, {
	      input: searchQuery,
	      filter: JSON.stringify(totalFilter),
	      facetFilter: JSON.stringify(facetFilter)
	    });
	  };

	  _proto.setState = function setState(data) {
	    return _Component.prototype.setState.call(this, Object.assign({
	      title: this.title,
	      searchText: this.searchText,
	      query: this.query,
	      filter: this.filter
	    }, data));
	  };

	  _proto._buildSearchParameters = function _buildSearchParameters(searchParameterConfigs) {
	    var searchParameters = {
	      sectioned: false,
	      fields: []
	    };

	    if (searchParameterConfigs === undefined) {
	      return searchParameters;
	    }

	    if (searchParameterConfigs.sectioned) {
	      searchParameters.sectioned = searchParameterConfigs.sectioned;
	    }

	    searchParameters.fields = this._buildFields(searchParameterConfigs.fields);
	    return searchParameters;
	  };

	  _proto._buildFields = function _buildFields(fieldConfigs) {
	    if (fieldConfigs === undefined) {
	      return [];
	    }

	    return fieldConfigs.map(function (fc) {
	      return objectSpread({
	        fetchEntities: false
	      }, fc);
	    });
	  };

	  createClass(FilterSearchComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'FilterSearch';
	    }
	  }]);

	  return FilterSearchComponent;
	}(Component);

	var Keys = {
	  BACKSPACE: 8,
	  TAB: 9,
	  ENTER: 13,
	  SHIFT: 16,
	  CTRL: 17,
	  ALT: 18,
	  ESCAPE: 27,
	  LEFT: 37,
	  RIGHT: 39,
	  UP: 38,
	  DELETE: 46,
	  DOWN: 40,
	  LEFT_OS_KEY: 91,
	  RIGHT_OS_KEY: 92,
	  SELECT_KEY: 93
	};

	var AutoCompleteComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(AutoCompleteComponent, _Component);

	  function AutoCompleteComponent(opts, systemOpts) {
	    var _this;

	    if (opts === void 0) {
	      opts = {};
	    }

	    if (systemOpts === void 0) {
	      systemOpts = {};
	    }

	    _this = _Component.call(this, opts, systemOpts) || this;
	    /**
	     * Whether autocomplete is simple or filter
	     * @type {boolean}
	     */

	    _this.isFilterSearch = opts.isFilterSearch || false;
	    /**
	     * The `barKey` in the vertical search to use for auto-complete
	     * @type {string}
	     */

	    _this._barKey = opts.barKey || null;
	    /**
	     * The `verticalKey` of the vertical search to use for auto-complete
	     * @type {string}
	     */

	    _this._verticalKey = opts.verticalKey || null;
	    /**
	     * A reference to the input el selector for auto complete
	     * @type {string}
	     */

	    _this._inputEl = opts.inputEl || '.js-yext-query';
	    /**
	     * A selector for the autocomplete elementes
	     * @type {string}
	     */

	    _this._autocompleteEls = opts.autoCompleteEls || '.js-yext-autocomlete-option';
	    /**
	     * An internal reference for the data-storage to listen for updates from the server
	     * @type {string}
	     */

	    _this.moduleId = StorageKeys.AUTOCOMPLETE + "." + _this.name;
	    /**
	     * An internal reference to the input value when typing.
	     * We use this for resetting the state of the input value when other interactions (e.g. result navigation)
	     * change based on interactions. For instance, hitting escape should reset the value to the original typed query.
	     * @type {string}
	     */

	    _this._originalQuery = opts.originalQuery || '';
	    /**
	     * Used for keyboard navigation through results.
	     * An internal reference to the current section we're navigating in.
	     * @type {number}
	     */

	    _this._sectionIndex = 0;
	    /**
	     * Used for keyboard navigation through results.
	     * An internal reference to the current result index we're navigating on.
	     * @type {number}
	     */

	    _this._resultIndex = -1;
	    /**
	     * The query text to show as the first item for auto complete.
	     * Optionally provided
	     * @type {string}
	     */

	    _this.promptHeader = opts.promptHeader || null;
	    /**
	     * Whether the input is autocomatically focused or not
	     * @type {boolean}
	     */

	    _this._autoFocus = opts.autoFocus || false;
	    /**
	     * Callback invoked when the `Enter` key is pressed on auto complete.
	     */

	    _this._onSubmit = opts.onSubmit || function () {};

	    _this._searchParameters = opts.searchParameters || null;
	    return _this;
	  }
	  /**
	   * The aliased used by the component manager for creation.
	   */


	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  AutoCompleteComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'search/autocomplete';
	  }
	  /**
	   * setState is overridden so that we can provide additional meta data
	   * to the template (e.g. the sectionIndex and resultIndex), since
	   * those are client-interaction specific values and aren't returned from the server.
	   */
	  ;

	  var _proto = AutoCompleteComponent.prototype;

	  _proto.setState = function setState(data) {
	    _Component.prototype.setState.call(this, Object.assign({}, data, {
	      hasResults: this.hasResults(data),
	      sectionIndex: this._sectionIndex,
	      resultIndex: this._resultIndex,
	      promptHeader: this._originalQuery.length === 0 ? this.promptHeader : null
	    }));
	  }
	  /**
	   * updateState is a helper to apply the current state with new client-state.
	   */
	  ;

	  _proto.updateState = function updateState() {
	    this.setState(this._state.get());
	  }
	  /**
	   * onCreate is triggered when the component is constructed from the framework.
	   * Once we're initalized, we wire up all of our user interactions
	   */
	  ;

	  _proto.onCreate = function onCreate() {
	    var _this2 = this;

	    // Use the context of the parent component to find the input node.
	    var queryInput = DOM.query(this._parentContainer, this._inputEl);

	    if (!queryInput) {
	      throw new Error('Could not initialize AutoComplete. Can not find {HTMLElement} `', this._inputEl, '`.');
	    } // Disable the native autocomplete, autocorrect & spellcheck


	    DOM.attributes(queryInput, {
	      autocomplete: 'off',
	      autocorrect: 'off',
	      spellcheck: 'false'
	    }); // The user exits the input, so we want to reset the state and close
	    // the auto complete
	    // TODO(jdelerme): Close logic to be moved to parent

	    DOM.on(document, 'click', function (e) {
	      if (e.target.matches('.js-yxt-AutoComplete-wrapper *') || e.target.matches(_this2._inputEl)) {
	        return;
	      }

	      _this2.close();
	    }); // When a user focuses the input, we should populate the autocomplete based
	    // on the current value

	    DOM.on(queryInput, 'focus', function () {
	      _this2.reset();

	      _this2.autoComplete(queryInput.value);
	    }); // Allow the user to navigate between the results using the keyboard

	    DOM.on(queryInput, 'keydown', function (e) {
	      _this2.handleNavigateResults(e.keyCode, e);

	      _this2.handleSubmitResult(e.keyCode, queryInput.value, e);
	    });

	    if (this._autoFocus) {
	      DOM.once(queryInput, 'click', function () {
	        _this2.autoComplete(queryInput.value);
	      });
	    } // Allow the user to select a result with the mouse


	    DOM.delegate(this._container, '.js-yext-autocomplete-option', 'click', function (evt, target) {
	      var data = target.dataset;
	      var val = data["short"];

	      _this2.updateQuery(val);

	      _this2._onSubmit(val, data.filter);

	      _this2.close();
	    }); // When the user is typing in the input, process the auto complete.

	    DOM.on(queryInput, 'keyup', function (e) {
	      _this2.handleTyping(e.keyCode, queryInput.value, e);
	    });
	  }
	  /**
	   * close will hide the auto complete results and reset the state.
	   */
	  ;

	  _proto.close = function close() {
	    this.setState({});
	    this.reset();
	  }
	  /**
	   * resets the client state to their original values and triggers
	   * a template-rerender via updateState
	   */
	  ;

	  _proto.reset = function reset() {
	    this._sectionIndex = 0;
	    this._resultIndex = -1;
	    this.updateState();
	  }
	  /**
	   * Helper method to update the input text
	   * @param {string} optValue Option value provided.
	   * If no value provided, we'll try to find it based on the selection indexes.
	   */
	  ;

	  _proto.updateQuery = function updateQuery(optValue) {
	    // Only want to update the query string if theres a value.
	    // If one is provided, great.
	    // Otherwise, lets try to find it from the current selection in the results.
	    if (optValue === undefined) {
	      var sections = this._state.get('sections');

	      var results = sections[this._sectionIndex].results;
	      optValue = results[this._resultIndex].shortValue;
	    }

	    var queryEl = DOM.query(this._parentContainer, this._inputEl);
	    queryEl.value = optValue;
	  };

	  _proto.handleTyping = function handleTyping(key, value, e) {
	    var ignoredKeys = [Keys.DOWN, Keys.UP, Keys.CTRL, Keys.ALT, Keys.SHIFT, Keys.LEFT, Keys.RIGHT, Keys.LEFT_OS_KEY, Keys.RIGHT_OS_KEY, Keys.ENTER, Keys.TAB, Keys.SELECT_KEY];

	    if (ignoredKeys.indexOf(key) > -1) {
	      return;
	    } // User escapes out of auto complete, so we reset it to the original input


	    if (key === Keys.ESCAPE) {
	      this.updateQuery(this._originalQuery);
	      this.close();
	      return;
	    } // Update the original value based on the user input


	    this._originalQuery = value;
	    this.reset();
	    this.autoComplete(value);
	  };

	  _proto.autoComplete = function autoComplete(input) {
	    if (this.isFilterSearch) {
	      this.core.autoCompleteFilter(input, {
	        namespace: this.name,
	        verticalKey: this._verticalKey,
	        barKey: this._barKey,
	        searchParameters: this._searchParameters
	      });
	    } else if (this._verticalKey || this._barKey) {
	      this.core.autoCompleteVertical(input, this.name, this._verticalKey, this._barKey);
	    } else {
	      this.core.autoCompleteUniversal(input, this.name);
	    }
	  }
	  /**
	   * returns true if we have results in any section
	   * @returns boolean
	   */
	  ;

	  _proto.hasResults = function hasResults(data) {
	    if (!data) {
	      return false;
	    }

	    var sections = data['sections'];

	    if (!sections) {
	      return false;
	    }

	    for (var i = 0; i < sections.length; i++) {
	      var _data = sections[i];

	      if (!_data) {
	        continue;
	      }

	      var results = _data.results;

	      if (!results) {
	        continue;
	      }

	      if (results.length > 0) {
	        return true;
	      }
	    }

	    return false;
	  };

	  _proto.handleNavigateResults = function handleNavigateResults(key, e) {
	    var sections = this._state.get('sections');

	    if (sections === undefined || sections.length <= 0) {
	      return;
	    } // Tabbing out or enter should close the auto complete.


	    if (key === Keys.TAB) {
	      this.close();
	      return;
	    }

	    var results = sections[this._sectionIndex].results;

	    if (key === Keys.UP) {
	      e.preventDefault();

	      if (this._resultIndex <= 0) {
	        if (this._sectionIndex > 0) {
	          this._sectionIndex--;
	          this._resultIndex = sections[this._sectionIndex].results.length - 1;
	        } else {
	          this.updateQuery(this._originalQuery);
	          this.reset();
	          return;
	        }

	        this.updateQuery();
	        this.updateState();
	        return;
	      }

	      this._resultIndex--;
	      this.updateState();
	      this.updateQuery();
	      return;
	    }

	    if (key === Keys.DOWN) {
	      e.preventDefault();

	      if (this._resultIndex >= results.length - 1) {
	        if (this._sectionIndex < sections.length - 1) {
	          this._sectionIndex++;
	          this._resultIndex = 0;
	        }

	        this.updateQuery();
	        this.updateState();
	        return;
	      }

	      this._resultIndex++;
	      this.updateQuery();
	      this.updateState();
	    }
	  };

	  _proto.handleSubmitResult = function handleSubmitResult(key, value, e) {
	    var sections = this._state.get('sections');

	    if (sections === undefined || sections.length <= 0) {
	      if (this.isFilterSearch) {
	        this.autoComplete(value);
	      }

	      return;
	    } // submit the search on enter


	    if (key === Keys.ENTER) {
	      e.preventDefault();

	      if (this.isFilterSearch && this._resultIndex === -1) {
	        return;
	      }

	      var filter = '';

	      if (this._sectionIndex >= 0 && this._resultIndex >= 0) {
	        filter = JSON.stringify(sections[this._sectionIndex].results[this._resultIndex].filter);
	      }

	      this.updateQuery(value);
	      this._originalQuery = value;

	      this._onSubmit(value, filter);

	      this.close();
	    }
	  };

	  createClass(AutoCompleteComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'AutoComplete';
	    }
	  }]);

	  return AutoCompleteComponent;
	}(Component);

	/**
	 * SpellCheckComponent will support displaying suggestion, autocorrect and combined(maybe in the future)
	 * provided from spelling correction.
	 *
	 * @extends Component
	 */

	var SpellCheckComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(SpellCheckComponent, _Component);

	  function SpellCheckComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;
	    _this.moduleId = StorageKeys.SPELL_CHECK;
	    return _this;
	  }

	  SpellCheckComponent.defaultTemplateName = function defaultTemplateName() {
	    return 'search/spellcheck';
	  };

	  var _proto = SpellCheckComponent.prototype;

	  _proto.onCreate = function onCreate() {
	    this.core.persistentStorage["delete"]('skipSpellCheck');
	    this.core.persistentStorage["delete"]('queryTrigger');
	  };

	  _proto.setState = function setState(data, val) {
	    return _Component.prototype.setState.call(this, Object.assign({}, data, {
	      shouldShow: data.correctedQuery !== undefined,
	      correctedQueryUrl: this._buildRedirectQueryUrl(data.correctedQuery, data.type),
	      helpText: this._getHelpText(data.type)
	    }, val));
	  };

	  _proto._buildRedirectQueryUrl = function _buildRedirectQueryUrl(query, type) {
	    if (query === undefined) {
	      return '';
	    }

	    var params = new SearchParams(window.location.search.substring(1));
	    params.set('query', query.value);
	    params.set('skipSpellCheck', true);
	    params.set('queryTrigger', type.toLowerCase());
	    return '?' + params.toString();
	  };

	  _proto._getHelpText = function _getHelpText(type) {
	    switch (type) {
	      case 'SUGGEST':
	        return 'Did you mean:';

	      default:
	        return '';
	    }
	  };

	  createClass(SpellCheckComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'SpellCheck';
	    }
	  }]);

	  return SpellCheckComponent;
	}(Component);

	/**
	 * LocationBiasComponent will show the user where is used for location bias and allow user to
	 * improve accuracy with HTML5 geolocation.
	 *
	 * @extends Component
	 */

	var LocationBiasComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(LocationBiasComponent, _Component);

	  function LocationBiasComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;
	    /**
	     * Recieve updates from storage based on this index
	     * @type {StorageKey}
	     */

	    _this.moduleId = StorageKeys.LOCATION_BIAS;
	    /**
	     * The optional vertical key for vertical search configuration
	     * If not provided, when location updated,
	     * a universal search will be triggered.
	     * @type {string}
	     */

	    _this._verticalKey = config.verticalKey || null;
	    /**
	     * The element used for updating location
	     * Optionally provided.
	     * @type {string} CSS selector
	     */

	    _this._updateLocationEl = config.updateLocationEl || '.js-locationBias-update-location';
	    _this._locationDisplayName = '';
	    _this._accuracy = '';
	    _this._allowUpdate = true;
	    return _this;
	  }

	  LocationBiasComponent.defaultTemplateName = function defaultTemplateName() {
	    return 'search/locationbias';
	  };

	  var _proto = LocationBiasComponent.prototype;

	  _proto.onMount = function onMount() {
	    var _this2 = this;

	    if (!this._allowUpdate) {
	      return;
	    }

	    DOM.on(this._updateLocationEl, 'click', function (e) {
	      if ('geolocation' in navigator) {
	        navigator.geolocation.getCurrentPosition(function (position) {
	          _this2.core.globalStorage.set(StorageKeys.GEOLOCATION, {
	            lat: position.coords.latitude,
	            lng: position.coords.longitude,
	            radius: position.coords.accuracy
	          });

	          _this2._doSearch();
	        }, function (err) {
	          if (err.code === 1) {
	            _this2.core.globalStorage["delete"](StorageKeys.GEOLOCATION);

	            _this2._allowUpdate = false;

	            _this2.setState({
	              locationDisplayName: _this2._locationDisplayName,
	              accuracy: _this2._accuracy
	            });
	          }
	        });
	      } // TODO: Should we throw error or warning here if no geolocation?

	    });
	  };

	  _proto.setState = function setState(data, val) {
	    this._locationDisplayName = data.locationDisplayName;
	    this._accuracy = data.accuracy;
	    return _Component.prototype.setState.call(this, Object.assign({}, data, {
	      locationDisplayName: this._getLocationDisplayName(data),
	      accuracyText: this._getAccuracyHelpText(data.accuracy),
	      isPreciseLocation: data.accuracy === 'DEVICE' && this._allowUpdate,
	      isUnknownLocation: data.accuracy === 'UNKNOWN',
	      shouldShow: data.accuracy !== undefined,
	      allowUpdate: this._allowUpdate
	    }, val));
	  };

	  _proto._getLocationDisplayName = function _getLocationDisplayName(data) {
	    if (data.accuracy === 'UNKNOWN') {
	      return 'Unknown Location';
	    }

	    return data.locationDisplayName;
	  };

	  _proto._getAccuracyHelpText = function _getAccuracyHelpText(accuracy) {
	    switch (accuracy) {
	      case 'IP':
	        return 'based on your internet address';

	      case 'DEVICE':
	        return 'based on your device';

	      default:
	        return '';
	    }
	  };

	  _proto._doSearch = function _doSearch() {
	    var query = this.core.globalStorage.getState(StorageKeys.QUERY);

	    if (this._verticalKey) {
	      var allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
	      var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, allFilters) : allFilters[0];
	      var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
	      this.core.verticalSearch(this._verticalKey, {
	        input: query,
	        filter: JSON.stringify(totalFilter),
	        offset: this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0,
	        facetFilter: JSON.stringify(facetFilter)
	      });
	    } else {
	      this.core.search(query);
	    }
	  };

	  createClass(LocationBiasComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'LocationBias';
	    }
	  }]);

	  return LocationBiasComponent;
	}(Component);

	/** @module Facet */

	/**
	 * Model representing a facet filter with the format of
	 * {
	 *   "field_name": [ Filters... ],
	 *   ...
	 * }
	 *
	 * @see {@link Filter}
	 */
	var Facet =
	/*#__PURE__*/
	function () {
	  function Facet(data) {
	    if (data === void 0) {
	      data = {};
	    }

	    Object.assign(this, data);
	    Object.freeze(this);
	  }
	  /**
	   * Create a facet filter from a list of Filters
	   * @param  {...Filter} filters The filters to use in this facet
	   * @returns {Facet}
	   */


	  Facet.fromFilters = function fromFilters() {
	    var groups = {};

	    for (var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
	      filters[_key] = arguments[_key];
	    }

	    var flatFilters = filters.flatMap(function (f) {
	      return f.$or || f;
	    });
	    flatFilters.forEach(function (f) {
	      var key = Object.keys(f)[0];

	      if (!groups[key]) {
	        groups[key] = [];
	      }

	      groups[key].push(f);
	    });
	    return new Facet(groups);
	  };

	  return Facet;
	}();

	/**
	 * Renders a set of filters, and searches with them when applied.
	 * Multiple FilterBox components will AND together but will not share state.
	 * @extends Component
	 */

	var FilterBoxComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(FilterBoxComponent, _Component);

	  function FilterBoxComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;

	    if (!config.filters || !(config.filters instanceof Array)) {
	      throw new AnswersComponentError('FilterBox requires filters to be provided as an array', 'FilterBox');
	    }
	    /**
	     * The list of filters to display and control
	     * @type {object[]}
	     * @private
	     */


	    _this._filterConfigs = config.filters;
	    /**
	     * The vertical key for the search
	     * @type {string}
	     * @private
	     */

	    _this._verticalKey = config.verticalKey || null;
	    /**
	     * If true, trigger a search on each change to a filter
	     * @type {boolean}
	     * @private
	     */

	    _this._searchOnChange = config.searchOnChange || false;
	    /**
	     * The selector of the apply button
	     * @type {string}
	     * @private
	     */

	    _this._applyButtonSelector = config.applyButtonSelector || '.js-yext-filterbox-apply';
	    /**
	     * The components created for each filter config
	     * @type {Component[]}
	     * @private
	     */

	    _this._filterComponents = [];
	    /**
	     * The current state of the filter components in the box
	     * @type {Filter}
	     * @private
	     */

	    _this._filters = [];
	    /**
	     * Whether or not this filterbox contains dynamic filters. This affects the
	     * the way the filters are used in the search
	     * @type {boolean}
	     * @private
	     */

	    _this._isDynamic = config.isDynamic || false;
	    /**
	     * The template to render
	     * @type {string}
	     * @private
	     */

	    _this._templateName = "filters/filterbox";
	    return _this;
	  }

	  var _proto = FilterBoxComponent.prototype;

	  _proto.setState = function setState(data) {
	    _Component.prototype.setState.call(this, Object.assign(data, {
	      filterConfigs: this._filterConfigs,
	      showApplyButton: !this._searchOnChange
	    }));
	  };

	  _proto.onMount = function onMount() {
	    var _this2 = this;

	    if (this._filterComponents.length) {
	      this._filterComponents.forEach(function (c) {
	        return c.remove();
	      });

	      this._filterComponents = [];
	      this._filters = [];
	    } // Initialize filters from configs


	    var _loop = function _loop(i) {
	      var config = _this2._filterConfigs[i];

	      var component = _this2.componentManager.create(config.type, Object.assign({}, config, {
	        parentContainer: _this2._container,
	        name: _this2.name + ".filter" + i,
	        storeOnChange: false,
	        container: ".js-yext-filterbox-filter" + i,
	        onChange: function onChange(filter) {
	          _this2.onFilterChange(i, filter);
	        }
	      }));

	      component.mount();

	      _this2._filterComponents.push(component);

	      _this2._filters[i] = component.getFilter();

	      _this2._saveFiltersToStorage();
	    };

	    for (var i = 0; i < this._filterConfigs.length; i++) {
	      _loop(i);
	    } // Initialize apply button


	    if (!this._searchOnChange) {
	      var button = DOM.query(this._container, this._applyButtonSelector);

	      if (button) {
	        DOM.on(button, 'click', function () {
	          _this2._saveFiltersToStorage();

	          _this2._search();
	        });
	      }
	    }
	  }
	  /**
	   * Handle changes to child filter components
	   * @param {number} index The index of the changed filter
	   * @param {Filter} filter The new filter
	   */
	  ;

	  _proto.onFilterChange = function onFilterChange(index, filter) {
	    this._filters[index] = filter;

	    if (this._searchOnChange) {
	      this._saveFiltersToStorage();

	      this._search();
	    }
	  }
	  /**
	   * Remove all filter components along with this component
	   */
	  ;

	  _proto.remove = function remove() {
	    this._filterComponents.forEach(function (c) {
	      return c.remove();
	    });

	    _Component.prototype.remove.call(this);
	  }
	  /**
	   * Save current filters to storage to be used in the next search
	   * @private
	   */
	  ;

	  _proto._saveFiltersToStorage = function _saveFiltersToStorage() {
	    var validFilters = this._filters.filter(function (f) {
	      return f !== undefined && f !== null && Object.keys(f).length > 0;
	    });

	    if (this._isDynamic) {
	      var combinedFilter = Facet.fromFilters.apply(Facet, validFilters);
	      this.core.setFacetFilter(this.name, combinedFilter || {});
	    } else {
	      var _combinedFilter = validFilters.length > 1 ? Filter.and.apply(Filter, validFilters) : validFilters[0];

	      this.core.setFilter(this.name, _combinedFilter || {});
	    }
	  }
	  /**
	   * Trigger a search with all filters in storage
	   */
	  ;

	  _proto._search = function _search() {
	    var allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
	    var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, allFilters) : allFilters[0];
	    var query = this.core.globalStorage.getState(StorageKeys.QUERY);
	    var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
	    this.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);
	    this.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);
	    this.core.verticalSearch(this._verticalKey, {
	      input: query,
	      filter: JSON.stringify(totalFilter),
	      facetFilter: JSON.stringify(facetFilter)
	    });
	  };

	  createClass(FilterBoxComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'FilterBox';
	    }
	  }]);

	  return FilterBoxComponent;
	}(Component);

	/**
	 * The currently supported controls
	 * @type {string[]}
	 */

	var SUPPORTED_CONTROLS = ['singleoption', 'multioption'];
	/**
	 * Renders a set of options, each one representing a filter in a search.
	 */

	var FilterOptionsComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(FilterOptionsComponent, _Component);

	  function FilterOptionsComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;

	    if (!config.control || !SUPPORTED_CONTROLS.includes(config.control)) {
	      throw new AnswersComponentError('FilterOptions requires a valid "control" to be provided', 'FilterOptions');
	    }

	    if (!config.options) {
	      throw new AnswersComponentError('FilterOptions component requires options to be provided', 'FilterOptions');
	    }

	    var previousOptions = _this.core.globalStorage.getState(_this.name);

	    if (typeof previousOptions === 'string') {
	      try {
	        previousOptions = JSON.parse(previousOptions);
	      } catch (e) {}
	    }

	    var selectedOptions = previousOptions || [];
	    /**
	     * The list of filter options to display with checked status
	     * @type {object[]}
	     * @private
	     */

	    _this._options = config.options.map(function (o) {
	      return objectSpread({}, o, {
	        selected: selectedOptions.length ? selectedOptions.includes(o.label) : o.selected
	      });
	    });
	    /**
	     * The type of control to display
	     * @type {string}
	     * @private
	     */

	    _this._control = config.control;
	    /**
	     * The selector used for options in the template
	     * @type {string}
	     * @private
	     */

	    _this._optionSelector = config.optionSelector || '.js-yext-filter-option';
	    /**
	     * If true, stores the filter to storage on each change
	     * @type {boolean}
	     * @private
	     */

	    _this._storeOnChange = config.storeOnChange || false;
	    /**
	     * The callback function to call when changed
	     * @type {function}
	     * @private
	     */

	    _this._onChange = config.onChange || function () {};
	    /**
	     * The label to be used in the legend
	     * @type {string}
	     * @private
	     */


	    _this._label = config.label || 'Filters';
	    return _this;
	  }

	  /**
	   * The template to render, based on the control
	   * @returns {string}
	   * @override
	   */
	  FilterOptionsComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return "controls/" + config.control;
	  };

	  var _proto = FilterOptionsComponent.prototype;

	  _proto.setState = function setState(data) {
	    _Component.prototype.setState.call(this, Object.assign({}, data, {
	      name: this.name.toLowerCase(),
	      options: this._options,
	      label: this._label
	    }));
	  };

	  _proto.onMount = function onMount() {
	    var _this2 = this;

	    DOM.delegate(DOM.query(this._container, "." + this._control + "-fieldset"), this._optionSelector, 'click', function (event) {
	      _this2._updateOption(parseInt(event.target.dataset.index), event.target.checked);

	      var filter = _this2._buildFilter();

	      if (_this2._storeOnChange) {
	        _this2.core.setFilter(_this2.name, filter);
	      }

	      _this2._onChange(filter);
	    });
	  };

	  _proto._updateOption = function _updateOption(index, selected) {
	    if (this._control === 'singleoption') {
	      this._options = this._options.map(function (o) {
	        return Object.assign({}, o, {
	          selected: false
	        });
	      });
	    }

	    this._options[index] = Object.assign({}, this._options[index], {
	      selected: selected
	    });
	    this.setState();
	  };

	  _proto.getFilter = function getFilter() {
	    return this._buildFilter();
	  }
	  /**
	   * Clear all options
	   */
	  ;

	  _proto.clear = function clear() {
	    var elements = DOM.queryAll(this._container, this._optionSelector);
	    elements.forEach(function (e) {
	      return e.setAttribute('checked', 'false');
	    });

	    this._applyFilter();
	  }
	  /**
	   * Build and return the Filter that represents the current state
	   * @returns {Filter}
	   * @private
	   */
	  ;

	  _proto._buildFilter = function _buildFilter() {
	    var filters = this._options.filter(function (o) {
	      return o.selected;
	    }).map(function (o) {
	      return o.filter ? o.filter : Filter.equal(o.field, o.value);
	    });

	    this.core.persistentStorage.set(this.name, this._options.filter(function (o) {
	      return o.selected;
	    }).map(function (o) {
	      return o.label;
	    }));
	    return filters.length > 0 ? Filter.group.apply(Filter, filters) : {};
	  };

	  createClass(FilterOptionsComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'FilterOptions';
	    }
	  }]);

	  return FilterOptionsComponent;
	}(Component);

	var RangeFilterComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(RangeFilterComponent, _Component);

	  function RangeFilterComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;
	    /**
	     * The field to filter on
	     * @type {string}
	     * @private
	     */

	    _this._field = config.field;
	    /**
	     * The callback function to call when the filter value changes
	     * @type {function}
	     * @private
	     */

	    _this._onChange = config.onChange || function () {};
	    /**
	     * If true, stores the filter to storage on each change
	     * @type {boolean}
	     * @private
	     */


	    _this._storeOnChange = config.storeOnChange || false;

	    var minVal = _this.core.globalStorage.getState(_this.name + ".min");

	    if (typeof minVal === 'string') {
	      try {
	        minVal = Number.parseInt(minVal);
	      } catch (e) {}
	    }

	    var maxVal = _this.core.globalStorage.getState(_this.name + ".max");

	    if (typeof minVal === 'string') {
	      try {
	        maxVal = Number.parseInt(maxVal);
	      } catch (e) {}
	    }
	    /**
	     * The current range represented
	     * @type {object}
	     * @private
	     */


	    _this._range = {
	      min: minVal || config.initialMin || 0,
	      max: maxVal || config.initialMax || 10
	    };
	    /**
	     * The title to display for the range control
	     * @type {string}
	     * @private
	     */

	    _this._title = config.title;
	    /**
	     * The optional label to display for the min input
	     * @type {string}
	     * @private
	     */

	    _this._minLabel = config.minLabel || null;
	    /**
	     * The optional label to display for the max input
	     * @type {string}
	     * @private
	     */

	    _this._maxLabel = config.maxLabel || null;
	    /**
	     * The template to render
	     * @type {string}
	     * @private
	     */

	    _this._templateName = "controls/range";
	    return _this;
	  }

	  var _proto = RangeFilterComponent.prototype;

	  _proto.setState = function setState(data) {
	    _Component.prototype.setState.call(this, Object.assign({}, data, {
	      name: this.name,
	      title: this._title,
	      minLabel: this._minLabel,
	      maxLabel: this._maxLabel,
	      minValue: this._range.min,
	      maxValue: this._range.max
	    }));
	  };

	  _proto.onCreate = function onCreate() {
	    var _this2 = this;

	    DOM.delegate(this._container, '.js-yext-range', 'change', function (event) {
	      _this2._updateRange(event.target.dataset.key, Number.parseInt(event.target.value));
	    });
	  };

	  _proto.setMin = function setMin(value) {
	    this._updateRange('min', value);
	  };

	  _proto.setMax = function setMax(value) {
	    this._updateRange('max', value);
	  };

	  _proto.getFilter = function getFilter() {
	    return this._buildFilter();
	  }
	  /**
	   * Update the current range state
	   * @param {string} key The range key to update
	   * @param {number} value The new value for the key
	   */
	  ;

	  _proto._updateRange = function _updateRange(key, value) {
	    var _Object$assign;

	    this._range = Object.assign({}, this._range, (_Object$assign = {}, _Object$assign[key] = value, _Object$assign));
	    this.setState();

	    var filter = this._buildFilter();

	    if (this._storeOnChange) {
	      this.core.setFilter(this.name, filter);
	    }

	    this.core.persistentStorage.set(this.name + ".min", this._range.min);
	    this.core.persistentStorage.set(this.name + ".max", this._range.max);

	    this._onChange(filter);
	  }
	  /**
	   * Build the filter representation of the current state
	   * @returns {Filter}
	   */
	  ;

	  _proto._buildFilter = function _buildFilter() {
	    return Filter.inclusiveRange(this._field, this._range.min, this._range.max);
	  };

	  createClass(RangeFilterComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'RangeFilter';
	    }
	  }]);

	  return RangeFilterComponent;
	}(Component);

	/**
	 * A filter for a range of dates
	 */

	var DateRangeFilterComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(DateRangeFilterComponent, _Component);

	  function DateRangeFilterComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;
	    /**
	     * The api field this filter controls
	     * @type {string}
	     * @private
	     */

	    _this._field = config.field;
	    /**
	     * The title to display for the date range
	     * @type {string}
	     * @private
	     */

	    _this._title = config.title;
	    /**
	     * The optional label to show for the min date input
	     * @type {string}
	     * @private
	     */

	    _this._minLabel = config.minLabel || null;
	    /**
	     * The optional label to show for the max date input
	     * @type {string}
	     * @private
	     */

	    _this._maxLabel = config.maxLabel || null;
	    /**
	     * The callback used when a date is changed
	     * @type {function}
	     * @private
	     */

	    _this._onChange = config.onChange || function () {};
	    /**
	     * If true, stores the filter to storage on each change
	     * @type {boolean}
	     * @private
	     */


	    _this._storeOnChange = config.storeOnChange || false;
	    /**
	     * If true, this filter represents an exclusive range, rather than an inclusive one
	     * @type {boolean}
	     * @private
	     */

	    _this._isExclusive = config.isExclusive;
	    /**
	     * The template for this component
	     * @private
	     */

	    _this._templateName = "controls/date";
	    var today = new Date();
	    var todayString = today.getFullYear() + "-" + ("" + (today.getMonth() + 1)).padStart(2, '0') + "-" + ("" + today.getDate()).padStart(2, '0');

	    var minDate = _this.core.globalStorage.getState(_this.name + ".min");

	    var maxDate = _this.core.globalStorage.getState(_this.name + ".max");
	    /**
	     * The current date range
	     * @private
	     */


	    _this._date = {
	      min: minDate || config.initialMin || todayString,
	      max: maxDate || config.initialMax || todayString
	    };
	    return _this;
	  }

	  var _proto = DateRangeFilterComponent.prototype;

	  _proto.setState = function setState(data) {
	    _Component.prototype.setState.call(this, Object.assign({}, data, {
	      name: this.name,
	      title: this._title,
	      minLabel: this._minLabel,
	      maxLabel: this._maxLabel,
	      dateMin: this._date.min,
	      dateMax: this._date.max
	    }));
	  };

	  _proto.onCreate = function onCreate() {
	    var _this2 = this;

	    DOM.delegate(this._container, '.js-yext-date', 'change', function (event) {
	      _this2._updateRange(event.target.dataset.key, event.target.value);
	    });
	  }
	  /**
	   * Set the min date to the one provided
	   * @param {string} date Date to set in yyyy-mm-dd string format
	   */
	  ;

	  _proto.setMin = function setMin(date) {
	    this._updateRange('min', date);
	  }
	  /**
	   * Set the max date to the one provided
	   * @param {string} date Date to set in yyyy-mm-dd string format
	   */
	  ;

	  _proto.setMax = function setMax(date) {
	    this._updateRange('max', date);
	  };

	  _proto.getFilter = function getFilter() {
	    return this._buildFilter();
	  }
	  /**
	   * Updates the current state of the date range
	   * @param {string} key The key for the date value
	   * @param {string} value The string date value
	   * @private
	   */
	  ;

	  _proto._updateRange = function _updateRange(key, value) {
	    var _Object$assign;

	    this._date = Object.assign({}, this._date, (_Object$assign = {}, _Object$assign[key] = value, _Object$assign));
	    this.setState();

	    var filter = this._buildFilter();

	    if (this._storeOnChange) {
	      this.core.setFilter(this.name, filter);
	    }

	    this.core.persistentStorage.set(this.name + ".min", this._date.min);
	    this.core.persistentStorage.set(this.name + ".max", this._date.max);

	    this._onChange(filter);
	  }
	  /**
	   * Construct an api filter with the current date state
	   * @private
	   */
	  ;

	  _proto._buildFilter = function _buildFilter() {
	    if (this._date.min === '' || this._date.max === '') {
	      return {};
	    }

	    return this._isExclusive ? Filter.exclusiveRange(this._field, this._date.min, this._date.max) : Filter.inclusiveRange(this._field, this._date.min, this._date.max);
	  };

	  createClass(DateRangeFilterComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'DateRangeFilter';
	    }
	  }]);

	  return DateRangeFilterComponent;
	}(Component);

	/**
	 * Displays a set of dynamic filters returned from the backend
	 * @extends Component
	 */

	var DynamicFiltersComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(DynamicFiltersComponent, _Component);

	  function DynamicFiltersComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;
	    /**
	     * The vertical key for the search
	     * @type {string}
	     * @private
	     */

	    _this._verticalKey = config.verticalKey || null;
	    /**
	     * If true, trigger a search on each change to a filter
	     * @type {boolean}
	     * @private
	     */

	    _this._searchOnChange = config.searchOnChange || false;
	    /**
	     * The selector of the apply button
	     * @type {string}
	     * @private
	     */

	    _this._applyButtonSelector = config.applyButtonSelector || null;
	    /**
	     * The controls to use for each field. Each type of filter has a default
	     * $eq : multioption (checkbox)
	     * @type {Object}
	     */

	    _this._fieldControls = config.fieldControls || {};
	    /**
	     * The template to render
	     * @type {string}
	     * @private
	     */

	    _this._templateName = 'filters/dynamic';
	    /**
	     * An internal reference for the data storage to listen for updates from the server
	     * @type {string}
	     */

	    _this.moduleId = StorageKeys.DYNAMIC_FILTERS;
	    /**
	     * The filter box that displays the dynamic filters
	     * @type {FilterBoxComponent}
	     * @private
	     */

	    _this._filterbox = null;
	    return _this;
	  }

	  var _proto = DynamicFiltersComponent.prototype;

	  _proto.onMount = function onMount() {
	    var _this2 = this;

	    this.core.enableDynamicFilters();

	    if (this._filterbox) {
	      this._filterbox.remove();
	    }

	    var _this$_state$get = this._state.get(),
	        filters = _this$_state$get.filters;

	    if (!filters) {
	      return;
	    }

	    filters = filters.map(function (f) {
	      return Object.assign({}, f, {
	        type: 'FilterOptions',
	        control: _this2._fieldControls[f.fieldId] || 'multioption'
	      });
	    });
	    this._filterbox = this.componentManager.create('FilterBox', Object.assign({}, {
	      parentContainer: this._container,
	      name: this.name + ".filterbox",
	      container: '.js-yext-dynamic-filters',
	      searchOnChange: this._searchOnChange,
	      verticalKey: this._verticalKey,
	      isDynamic: true,
	      filters: filters
	    }));

	    this._filterbox.mount();
	  };

	  createClass(DynamicFiltersComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'DynamicFilters';
	    }
	  }]);

	  return DynamicFiltersComponent;
	}(Component);

	var METERS_PER_MILE = 1609.344;
	var DEFAULT_CONFIG = {
	  /**
	   * The radius, in miles, around the user's location to find results.
	   * If location accuracy is low, a larger radius may be used automatically
	   * @type {number}
	   */
	  radius: 50,

	  /**
	   * The vertical key to use
	   * @type {string}
	   */
	  verticalKey: null,

	  /**
	   * If true, submits a search when the value is changed
	   * @type {boolean}
	   */
	  searchOnChange: false,

	  /**
	   * The title to display
	   * @type {string}
	   */
	  title: 'Location',

	  /**
	   * The label to display
	   * @type {string}
	   */
	  label: 'Location',

	  /**
	   * The icon url to show in the geo button
	   * @type {string}
	   */
	  geoButtonIcon: '',

	  /**
	   * The text to show in the geo button
	   * @type {string}
	   */
	  geoButtonText: 'Use My Location',

	  /**
	   * The text to show when geolocation is enabled
	   * @type {string}
	   */
	  enabledText: 'Current Location',

	  /**
	   * The text to show when loading the user's location
	   * @type {string}
	   */
	  loadingText: 'Finding Your Location...',

	  /**
	   * The text to show if the user's location cannot be found
	   * @type {string}
	   */
	  errorText: 'Could Not Find Your Location',

	  /**
	   * The CSS selector of the toggle button
	   * @type {string}
	   */
	  buttonSelector: '.js-yxt-GeoLocationFilter-button',

	  /**
	   * The CSS selector of the query input
	   * @type {string}
	   */
	  inputSelector: '.js-yxt-GeoLocationFilter-input'
	};
	/**
	 * Renders a button that when clicked adds a static filter representing the user's location
	 * @extends Component
	 */

	var GeoLocationComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(GeoLocationComponent, _Component);

	  function GeoLocationComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, objectSpread({}, DEFAULT_CONFIG, {}, config), systemConfig) || this;
	    /**
	     * The query string to use for the input box, provided to template for rendering.
	     * @type {string}
	     */

	    _this.query = _this.core.globalStorage.getState(StorageKeys.QUERY + "." + _this.name) || '';

	    _this.core.globalStorage.on('update', StorageKeys.QUERY + "." + _this.name, function (q) {
	      _this.query = q;

	      _this.setState();
	    });
	    /**
	     * The filter to use for the current query
	     * @type {Filter}
	     */


	    _this.filter = _this.core.globalStorage.getState(StorageKeys.FILTER + "." + _this.name) || {};

	    if (typeof _this.filter === 'string') {
	      try {
	        _this.filter = JSON.parse(_this.filter);
	      } catch (e) {}
	    }

	    _this.core.globalStorage.on('update', StorageKeys.FILTER + "." + _this.name, function (f) {
	      _this.filter = f;
	    });

	    return _this;
	  }

	  GeoLocationComponent.defaultTemplateName = function defaultTemplateName() {
	    return 'controls/geolocation';
	  };

	  var _proto = GeoLocationComponent.prototype;

	  _proto.setState = function setState(data) {
	    var placeholder = '';

	    if (this._enabled) {
	      placeholder = this._config.enabledText;
	    }

	    if (data.geoLoading) {
	      placeholder = this._config.loadingText;
	    }

	    if (data.geoError) {
	      placeholder = this._config.errorText;
	    }

	    _Component.prototype.setState.call(this, objectSpread({}, data, {
	      title: this._config.title,
	      geoEnabled: this._enabled,
	      query: this.query,
	      labelText: this._config.label,
	      enabledText: this._config.enabledText,
	      loadingText: this._config.loadingText,
	      errorText: this._config.errorText,
	      geoButtonIcon: this._config.geoButtonIcon,
	      geoValue: this._enabled || data.geoLoading || data.geoError ? '' : this.query,
	      geoPlaceholder: placeholder,
	      geoButtonText: this._config.geoButtonText
	    }));
	  };

	  _proto.onMount = function onMount() {
	    var _this2 = this;

	    if (this._autocomplete) {
	      this._autocomplete.remove();
	    }

	    this._initAutoComplete(this._config.inputSelector);

	    DOM.on(this._config.buttonSelector, 'click', function () {
	      return _this2._toggleGeoFilter();
	    });
	  }
	  /**
	   * A helper method to wire up our auto complete on an input selector
	   * @param {string} inputSelector CSS selector to bind our auto complete component to
	   * @private
	   */
	  ;

	  _proto._initAutoComplete = function _initAutoComplete(inputSelector) {
	    var _this3 = this;

	    if (this._autocomplete) {
	      this._autocomplete.remove();
	    }

	    this._autocomplete = this.componentManager.create('AutoComplete', {
	      parentContainer: this._container,
	      name: this.name + ".autocomplete",
	      isFilterSearch: true,
	      container: '.js-yxt-GeoLocationFilter-autocomplete',
	      originalQuery: this.query,
	      originalFilter: this.filter,
	      inputEl: inputSelector,
	      verticalKey: this._verticalKey,
	      onSubmit: function onSubmit(query, filter) {
	        _this3.query = query;
	        _this3.filter = Filter.fromResponse(filter);

	        _this3._saveDataToStorage(query, _this3.filter);

	        _this3._enabled = false;
	      }
	    });
	  }
	  /**
	   * Toggles the static filter representing the user's location
	   * @private
	   */
	  ;

	  _proto._toggleGeoFilter = function _toggleGeoFilter() {
	    var _this4 = this;

	    if (!navigator.geolocation) {
	      this.setState({
	        geoError: true
	      });
	      return;
	    }

	    if (!this._enabled) {
	      this.setState({
	        geoLoading: true
	      });
	      navigator.geolocation.getCurrentPosition(function (position) {
	        var filter = _this4._buildFilter(position);

	        _this4._saveDataToStorage('', filter, position);

	        _this4._enabled = true;

	        _this4.setState({});

	        _this4.core.persistentStorage["delete"](StorageKeys.QUERY + "." + _this4.name);

	        _this4.core.persistentStorage["delete"](StorageKeys.FILTER + "." + _this4.name);
	      }, function () {
	        return _this4.setState({
	          geoError: true
	        });
	      });
	    }
	  }
	  /**
	   * Saves the provided filter under this component's name
	   * @param {string} query The query to save
	   * @param {Filter} filter The filter to save
	   * @param {Object} position The position to save
	   * @private
	   */
	  ;

	  _proto._saveDataToStorage = function _saveDataToStorage(query, filter, position) {
	    this.core.persistentStorage.set(StorageKeys.QUERY + "." + this.name, query);
	    this.core.persistentStorage.set(StorageKeys.FILTER + "." + this.name, filter);
	    this.core.setFilter(this.name, filter);

	    if (position) {
	      this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude,
	        radius: position.coords.accuracy
	      });
	    }

	    if (this._config.searchOnChange) {
	      var filters = this.core.globalStorage.getAll(StorageKeys.FILTER);
	      var totalFilter = filters[0];

	      if (filters.length > 1) {
	        totalFilter = Filter.and.apply(Filter, filters);
	      }

	      var searchQuery = this.core.globalStorage.getState(StorageKeys.QUERY) || '';
	      var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
	      this.core.persistentStorage["delete"](StorageKeys.SEARCH_OFFSET);
	      this.core.globalStorage["delete"](StorageKeys.SEARCH_OFFSET);
	      this.core.verticalSearch(this._config.verticalKey, {
	        input: searchQuery,
	        filter: JSON.stringify(totalFilter),
	        facetFilter: JSON.stringify(facetFilter)
	      });
	    }
	  }
	  /**
	   * Given a position, construct a Filter object
	   * @param {Postition} position The position
	   * @returns {Filter}
	   * @private
	   */
	  ;

	  _proto._buildFilter = function _buildFilter(position) {
	    var _position$coords = position.coords,
	        latitude = _position$coords.latitude,
	        longitude = _position$coords.longitude,
	        accuracy = _position$coords.accuracy;
	    var radius = Math.max(accuracy, this._config.radius * METERS_PER_MILE);
	    return Filter.position(latitude, longitude, radius);
	  };

	  createClass(GeoLocationComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'GeoLocationFilter';
	    }
	  }]);

	  return GeoLocationComponent;
	}(Component);

	/**
	 * EventTypes are explicit strings defined
	 * for what the server expects for analytics.
	 *
	 * @enum
	 */

	var EventTypes = {
	  THUMBS_UP: 'THUMBS_UP',
	  THUMBS_DOWN: 'THUMBS_DOWN'
	};

	var DirectAnswerComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(DirectAnswerComponent, _Component);

	  function DirectAnswerComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;
	    /**
	     * Recieve updates from storage based on this index
	     * @type {StorageKey}
	     */

	    _this.moduleId = StorageKeys.DIRECT_ANSWER;
	    /**
	     * The form used for submitting the feedback
	     * @type {string}
	     */

	    _this._formEl = config.formEl || '.js-directAnswer-feedback-form';
	    /**
	     * The `thumbs up` css selector to bind ui interaction to for reporting
	     * @type {string}
	     */

	    _this._thumbsUpSelector = config.thumbsUpSelector || '.js-directAnswer-thumbUp';
	    /**
	     * The `thumbs down` css selector to bind ui interaction to for reporting
	     * @type {string}
	     */

	    _this._thumbsDownSelector = config.thumbsDownSelector || '.js-directAnswer-thumbDown';
	    /**
	     * The display text for the View Details click to action link
	     * @type {string}
	     */

	    _this._viewDetailsText = config.viewDetailsText || 'View Details';
	    return _this;
	  }

	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  DirectAnswerComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'results/directanswer';
	  }
	  /**
	   * beforeMount, only display the direct answer component if it has data
	   */
	  ;

	  var _proto = DirectAnswerComponent.prototype;

	  _proto.beforeMount = function beforeMount() {
	    if (!this.hasState('answer')) {
	      return false;
	    }

	    return true;
	  }
	  /**
	   * When the DOM is constructed,
	   * we want to wire up the behavior for interacting with the quality feedback reporting (thumbsup/down)
	   */
	  ;

	  _proto.onMount = function onMount() {
	    var _this2 = this;

	    // Avoid bindings if the feedback has previously been submitted
	    if (this.getState('feedbackSubmitted') === true) {
	      return this;
	    } // For WCAG compliance, the feedback should be a submittable form


	    DOM.on(this._formEl, 'submit', function (e) {
	      var formEl = e.target;
	      var checkedValue = DOM.query(formEl, 'input:checked').value === 'true';

	      _this2.reportQuality(checkedValue);

	      _this2.updateState({
	        'feedbackSubmitted': true
	      });
	    }); // Is this actually necessary? I guess it's only necessary if the
	    // submit button is hidden.

	    DOM.on(this._thumbsUpSelector, 'click', function () {
	      DOM.trigger(_this2._formEl, 'submit');
	    });
	    DOM.on(this._thumbsDownSelector, 'click', function () {
	      DOM.trigger(_this2._formEl, 'submit');
	    });
	  }
	  /**
	   * updateState enables for partial updates (the delta between the old and new)
	   * @type {object} The new state to apply to the old
	   */
	  ;

	  _proto.updateState = function updateState(state) {
	    if (state === void 0) {
	      state = {};
	    }

	    var newState = Object.assign({}, this.getState(), state);
	    this.setState(newState);
	  };

	  _proto.setState = function setState(data) {
	    return _Component.prototype.setState.call(this, Object.assign({}, data, {
	      eventOptions: this.eventOptions(data),
	      viewDetailsText: this._viewDetailsText
	    }));
	  };

	  _proto.eventOptions = function eventOptions(data) {
	    if (!data || Object.keys(data).length === 0) {
	      return data;
	    }

	    return JSON.stringify({
	      verticalConfigId: data.relatedItem.verticalConfigId,
	      searcher: 'UNIVERSAL',
	      entityId: data.relatedItem.data.id,
	      ctaLabel: this._viewDetailsText.toUpperCase().replace(' ', '_')
	    });
	  }
	  /**
	   * reportQuality will send the quality feedback to analytics
	   * @param {boolean} isGood true if the answer is what you were looking for
	   */
	  ;

	  _proto.reportQuality = function reportQuality(isGood) {
	    var eventType = isGood === true ? EventTypes.THUMBS_UP : EventTypes.THUMBS_DOWN;
	    var event = new AnalyticsEvent(eventType).addOptions({
	      'directAnswer': true
	    });
	    this.analyticsReporter.report(event);
	  };

	  createClass(DirectAnswerComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'DirectAnswer';
	    }
	  }]);

	  return DirectAnswerComponent;
	}(Component);

	var ResultsItemComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(ResultsItemComponent, _Component);

	  function ResultsItemComponent(opts, systemConfig) {
	    var _this;

	    if (opts === void 0) {
	      opts = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, opts, systemConfig) || this;
	    /**
	     * verticalConfigId used for analytics and passed to children
	     * @type {string}
	     * @private
	     */

	    _this._verticalConfigId = opts.verticalConfigId;
	    /**
	     * isUniversal is used for analytics and passed to children and is set to
	     * true if this component is added by the UniversalResultsComponent
	     * @type {boolean}
	     * @private
	     */

	    _this._isUniversal = opts.isUniversal || false;
	    return _this;
	  }

	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  ResultsItemComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'results/resultsitem';
	  };

	  ResultsItemComponent.areDuplicateNamesAllowed = function areDuplicateNamesAllowed() {
	    return true;
	  }
	  /**
	   * helper to construct the eventOptions object for the title link
	   * @param entityId The ID of the result item, if present
	   * @param url The url of the result item, if present
	   * @returns {string}
	   */
	  ;

	  var _proto = ResultsItemComponent.prototype;

	  _proto.eventOptions = function eventOptions(entityId, url) {
	    var options = {
	      verticalConfigId: this._verticalConfigId,
	      searcher: this._isUniversal ? 'UNIVERSAL' : 'VERTICAL'
	    };

	    if (entityId) {
	      options.entityId = entityId;
	    } else {
	      options.url = url;
	    }

	    return JSON.stringify(options);
	  }
	  /**
	   * passes eventOptions to the viewModel
	   * @override
	   * @param data
	   * @returns {ResultsItemComponent}
	   */
	  ;

	  _proto.setState = function setState(data) {
	    return _Component.prototype.setState.call(this, Object.assign(data, {
	      eventOptions: this.eventOptions(data.id, data.link)
	    }));
	  };

	  createClass(ResultsItemComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'ResultsItemComponent';
	    }
	  }]);

	  return ResultsItemComponent;
	}(Component);

	var LocationResultsItemComponent =
	/*#__PURE__*/
	function (_ResultsItemComponent) {
	  inheritsLoose(LocationResultsItemComponent, _ResultsItemComponent);

	  function LocationResultsItemComponent(opts, systemConfig) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    return _ResultsItemComponent.call(this, opts, systemConfig) || this;
	  }

	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  LocationResultsItemComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'results/locationresultsitem';
	  };

	  LocationResultsItemComponent.areDuplicateNamesAllowed = function areDuplicateNamesAllowed() {
	    return true;
	  };

	  createClass(LocationResultsItemComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'LocationResultsItemComponent';
	    }
	  }]);

	  return LocationResultsItemComponent;
	}(ResultsItemComponent);

	var EventResultsItemComponent =
	/*#__PURE__*/
	function (_ResultsItemComponent) {
	  inheritsLoose(EventResultsItemComponent, _ResultsItemComponent);

	  function EventResultsItemComponent(opts, systemConfig) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    return _ResultsItemComponent.call(this, opts, systemConfig) || this;
	  }

	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  EventResultsItemComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'results/eventresultsitem';
	  };

	  EventResultsItemComponent.areDuplicateNamesAllowed = function areDuplicateNamesAllowed() {
	    return true;
	  };

	  createClass(EventResultsItemComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'EventResultsItemComponent';
	    }
	  }]);

	  return EventResultsItemComponent;
	}(ResultsItemComponent);

	var PeopleResultsItemComponent =
	/*#__PURE__*/
	function (_ResultsItemComponent) {
	  inheritsLoose(PeopleResultsItemComponent, _ResultsItemComponent);

	  function PeopleResultsItemComponent(opts, systemOpts) {
	    if (opts === void 0) {
	      opts = {};
	    }

	    if (systemOpts === void 0) {
	      systemOpts = {};
	    }

	    return _ResultsItemComponent.call(this, opts, systemOpts) || this;
	  }

	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  PeopleResultsItemComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'results/peopleresultsitem';
	  };

	  PeopleResultsItemComponent.areDuplicateNamesAllowed = function areDuplicateNamesAllowed() {
	    return true;
	  };

	  createClass(PeopleResultsItemComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'PeopleResultsItemComponent';
	    }
	  }]);

	  return PeopleResultsItemComponent;
	}(ResultsItemComponent);

	/** @module MapProvider */

	/**
	 * A MapProvider is an interface that represents that should be implemented
	 * in order to integrate with a Third Party Map provider for
	 * interactive maps. MapProviders are used by the MapComponent.
	 *
	 * Implementations should extend this interface.
	 */
	var MapProvider =
	/*#__PURE__*/
	function () {
	  function MapProvider(config) {
	    if (config === void 0) {
	      config = {};
	    }

	    /**
	     * The API Key used for interacting with the map provider
	     * @type {string}
	     */
	    this._apiKey = config.apiKey;
	    /**
	     * The zoom level of the map, defaults to 14
	     * @type {number}
	     */

	    this._zoom = config.zoom || 14;
	    /**
	     * The default coordinates to display if there are no results returned
	     * Only used if showEmptyMap is set to true
	     * @type {Object}
	     */

	    this._defaultPosition = config.defaultPosition || {
	      lat: 37.0902,
	      lng: -95.7129
	    };
	    /**
	     * Determines if an empty map should be shown when there are no results
	     * @type {boolean}
	     */

	    this._showEmptyMap = config.showEmptyMap || false;
	    /**
	     * A reference to the underlying map instance, created by the external lib.
	     * @type {number}
	     */

	    this._map = null;
	    /**
	     * Temporary boolean tracking whether or not the external JS library is loaded (see TODO below)
	     * @type {boolean}
	     */

	    this._isLoaded = false;
	    /**
	     * Callback to invoke when a pin is clicked. The clicked item(s) are passed to the callback
	     * @type {function}
	     */

	    this._onPinClick = config.onPinClick || null;
	    /**
	     * Callback to invoke once the Javascript is loaded
	     * @type {function}
	     */

	    this._onLoaded = config.onLoaded || function () {};
	    /**
	     * The custom configuration override to use for the map markers
	     * @type {Object|Function}
	     */


	    this._pinConfig = typeof config.pin === 'function' ? config.pin : Object.assign(MapProvider.DEFAULT_PIN_CONFIG, config.pin);
	    /**
	     * Determines whether or not to collapse pins at the same lat/lng
	     * @type {boolean}
	     */

	    this._collapsePins = config.collapsePins || false;
	  }
	  /**
	   * The default configuration to use for the map markers
	   * @type {Object}
	   * TODO(billy) Create a configuration model
	   */


	  var _proto = MapProvider.prototype;

	  _proto.onLoaded = function onLoaded(cb) {
	    if (typeof cb !== 'function') {
	      return;
	    }

	    this._onLoaded = cb;

	    if (this.isLoaded()) {
	      this._onLoaded();
	    }
	  };

	  _proto.isLoaded = function isLoaded() {
	    return this._isLoaded;
	  };

	  _proto.loadJS = function loadJS() {
	    throw new Error('Unimplemented Method: loadJS');
	  };

	  _proto.init = function init(mapData) {
	    // TODO(billy) This should be based off a promise that gets created from loadJS
	    throw new Error('Unimplemented Method: init');
	  }
	  /**
	   * Given a list of markers, combine markers with the same lat/lng into a single marker
	   * @param {object[]} markers The markers to collapse
	   */
	  ;

	  _proto._collapseMarkers = function _collapseMarkers(markers) {
	    var locationToItem = {};
	    markers.forEach(function (m) {
	      locationToItem["" + m.latitude + m.longitude] ? locationToItem["" + m.latitude + m.longitude].push(m) : locationToItem["" + m.latitude + m.longitude] = [m];
	    });
	    var collapsedMarkers = [];

	    for (var _i = 0, _Object$entries = Object.entries(locationToItem); _i < _Object$entries.length; _i++) {
	      var _Object$entries$_i = _Object$entries[_i],
	          _markers = _Object$entries$_i[1];

	      if (_markers.length > 1) {
	        var collapsedMarker = {
	          item: _markers.map(function (m) {
	            return m.item;
	          }),
	          label: _markers.length,
	          latitude: _markers[0].latitude,
	          longitude: _markers[0].longitude
	        };
	        collapsedMarkers.push(collapsedMarker);
	      } else {
	        collapsedMarkers.push(_markers[0]);
	      }
	    }

	    return collapsedMarkers;
	  };

	  createClass(MapProvider, null, [{
	    key: "DEFAULT_PIN_CONFIG",
	    get: function get() {
	      return {
	        icon: {
	          anchor: null,
	          // e.g. { x: 1, y: 1 }
	          svg: null,
	          url: null,
	          scaledSize: null // e.g. { w: 20, h: 20 }

	        },
	        labelType: 'numeric'
	      };
	    }
	  }]);

	  return MapProvider;
	}();

	/* global google */

	/**
	 * GoogleMapProvider is an implementation of a MapProvider
	 * that handles the integration with the third party API to expose maps.
	 * @extends MapProvider
	 */

	var GoogleMapProvider =
	/*#__PURE__*/
	function (_MapProvider) {
	  inheritsLoose(GoogleMapProvider, _MapProvider);

	  function GoogleMapProvider(opts) {
	    var _this;

	    _this = _MapProvider.call(this, opts) || this; // normalize because google's zoom is effectively 1 unit of difference away from mapbox zoom

	    _this._zoomOffset = 1;
	    _this._zoom += _this._zoomOffset;
	    _this._clientId = opts.clientId;
	    _this._signature = opts.signature;

	    if (!_this.hasValidClientCredentials() && !_this._apiKey) {
	      throw new Error('GoogleMapsProvider: Missing `apiKey` or {`clientId`, `signature`}');
	    }

	    return _this;
	  }

	  var _proto = GoogleMapProvider.prototype;

	  _proto.loadJS = function loadJS(onLoad) {
	    var _this2 = this;

	    if (DOM.query('#yext-map-js')) {
	      this._isLoaded = true;

	      if (typeof onLoad === 'function') {
	        onLoad();
	      }

	      return;
	    }

	    var script = DOM.createEl('script', {
	      id: 'yext-map-js',
	      onload: function onload() {
	        _this2._isLoaded = true;

	        _this2._onLoaded();
	      },
	      async: true,
	      src: "https://maps.googleapis.com/maps/api/js?" + this.generateCredentials()
	    });
	    DOM.append('body', script);
	  };

	  _proto.generateCredentials = function generateCredentials() {
	    if (this.hasValidClientCredentials()) {
	      return "client=" + this._clientId;
	    } else {
	      return "key=" + this._apiKey;
	    }
	  };

	  _proto.hasValidClientCredentials = function hasValidClientCredentials() {
	    return this._clientId;
	  };

	  _proto.init = function init(el, mapData) {
	    var _this3 = this;

	    if ((!mapData || mapData.mapMarkers.length <= 0) && !this._showEmptyMap) {
	      this._map = null;
	      return this;
	    } // NOTE(billy) This timeout is a hack for dealing with async nature.
	    // Only here for demo purposes, so we'll fix later.


	    setTimeout(function () {
	      var container = DOM.query(el);
	      _this3.map = new google.maps.Map(container, {
	        zoom: _this3._zoom,
	        center: _this3.getCenterMarker(mapData)
	      }); // Apply our search data to our GoogleMap

	      if (mapData && mapData.mapMarkers.length) {
	        (function () {
	          var collapsedMarkers = _this3._collapsePins ? _this3._collapseMarkers(mapData.mapMarkers) : mapData.mapMarkers;
	          var googleMapMarkerConfigs = GoogleMapMarkerConfig.from(collapsedMarkers, _this3._pinConfig, _this3.map);
	          var bounds = new google.maps.LatLngBounds();

	          var _loop = function _loop(i) {
	            var marker = new google.maps.Marker(googleMapMarkerConfigs[i]);

	            if (_this3._onPinClick) {
	              marker.addListener('click', function () {
	                return _this3._onPinClick(collapsedMarkers[i].item);
	              });
	            }

	            bounds.extend(marker.position);
	          };

	          for (var i = 0; i < googleMapMarkerConfigs.length; i++) {
	            _loop(i);
	          }

	          if (googleMapMarkerConfigs.length >= 2) {
	            _this3.map.fitBounds(bounds);
	          }
	        })();
	      }
	    }, 100);
	  };

	  _proto.getCenterMarker = function getCenterMarker(mapData) {
	    return mapData && mapData.mapCenter && mapData.mapCenter.longitude && mapData.mapCenter.latitude ? {
	      lng: mapData.mapCenter.longitude,
	      lat: mapData.mapCenter.latitude
	    } : {
	      lng: this._defaultPosition.lng,
	      lat: this._defaultPosition.lat
	    };
	  };

	  return GoogleMapProvider;
	}(MapProvider); // TODO(billy) Move to own class
	var GoogleMapMarkerConfig =
	/*#__PURE__*/
	function () {
	  function GoogleMapMarkerConfig(opts) {
	    /**
	     * A reference to the google map, that the marker is appended to
	     * @type {GoogleMap}
	     */
	    this.map = opts.map || undefined;
	    /**
	     * The coordinates of the marker (lat/lng)
	     * @type {Object}
	     */

	    this.position = opts.position || {
	      lat: undefined,
	      lng: undefined
	    };
	    /**
	     * The properties/settings of the icon used for the marker
	     * e.g. {
	     *        anchor: { x: 0, y: 0 }
	     *        url: 'path/to/url.jpg'
	     *        scaledSize: { w: 0, h: 0 }
	     *       }
	     *
	     * @type {object}
	     */

	    this.icon = opts.icon || undefined;
	    /**
	     * The label of the marker to use
	     * @type {string}
	     */

	    this.label = opts.label || undefined;
	  }
	  /**
	   * Serializes an array of marker configs
	   * @param {GoogleMapMarkerConfig[]} googleMapMarkerConfigs
	   * @returns {string[]}
	   */


	  GoogleMapMarkerConfig.serialize = function serialize(googleMapMarkerConfigs) {
	    var serializedMarkers = [];
	    googleMapMarkerConfigs.forEach(function (marker) {
	      serializedMarkers.push("markers=label:" + marker.label + "|" + marker.position.lat + "," + marker.position.lng);
	    });
	    return serializedMarkers.join('&');
	  }
	  /**
	   * Converts the storage data model of markers into GoogleAPIMarker
	   * @param {object[]} markers The data of the marker
	   * @param {(Object|function)} pinConfig The configuration to apply to the marker
	   * @param {GoogleMap} map reference to the google map to apply the marker to
	   * @returns {GoogleMapMarkerConfig[]}
	   */
	  ;

	  GoogleMapMarkerConfig.from = function from(markers, pinConfig, map) {
	    var googleMapMarkerConfigs = [];

	    if (!Array.isArray(markers)) {
	      markers = [markers];
	    }

	    markers.forEach(function (marker) {
	      // Support configuration as a function
	      var pinConfigObj = pinConfig;

	      if (typeof pinConfig === 'function') {
	        pinConfigObj = pinConfig(marker.item, MapProvider.DEFAULT_PIN_CONFIG, marker);
	      } // Transform our Configuration Object into the expected
	      // Google API format.


	      var icon = {};

	      if (pinConfigObj.anchor) {
	        icon.anchor = google.maps.Point(pinConfigObj.anchor.x, pinConfigObj.anchor.y);
	      }

	      if (pinConfigObj.scaledSize) {
	        icon.scaledSize = new google.maps.Size(pinConfigObj.scaledSize.w, pinConfigObj.scaledSize.h);
	      }

	      if (pinConfigObj.url) {
	        icon.url = pinConfigObj.url;
	      }

	      if (pinConfigObj.svg) {
	        icon.url = "data:image/svg+xml;charset=utf-8, " + encodeURIComponent(pinConfigObj.svg);
	      }

	      var label;

	      if (pinConfigObj.label) {
	        label = pinConfigObj.label;
	      } else {
	        label = marker.label.toString();
	      } // NOTE(billy) Google maps doesn't handle empty icon objects nicely
	      // Make google maps happy if no settings for icon are provided;


	      if (Object.keys(icon).length === 0) {
	        icon = undefined;
	      }

	      googleMapMarkerConfigs.push(new GoogleMapMarkerConfig({
	        map: map,
	        position: {
	          lat: marker.latitude,
	          lng: marker.longitude
	        },
	        icon: icon,
	        label: label
	      }));
	    });
	    return googleMapMarkerConfigs;
	  };

	  return GoogleMapMarkerConfig;
	}();

	/* global mapboxgl */

	/**
	 * MapBoxMapProvider is an implementation of a MapProvider
	 * that handles the integration with the third party API to expose maps.
	 * @extends MapProvider
	 */

	var MapBoxMapProvider =
	/*#__PURE__*/
	function (_MapProvider) {
	  inheritsLoose(MapBoxMapProvider, _MapProvider);

	  function MapBoxMapProvider() {
	    return _MapProvider.apply(this, arguments) || this;
	  }

	  var _proto = MapBoxMapProvider.prototype;

	  /**
	   * Load the external JS Library
	   * @param {function} onLoad An optional callback to invoke once the JS is loaded.
	   */
	  _proto.loadJS = function loadJS(onLoad) {
	    var _this = this;

	    var script = DOM.createEl('script', {
	      id: 'yext-map-js',
	      onload: function onload() {
	        _this._isLoaded = true;
	        mapboxgl.accessToken = _this._apiKey;

	        if (typeof onLoad === 'function') {
	          onLoad();
	        }

	        if (typeof _this._onLoaded === 'function') {
	          _this._onLoaded();
	        }
	      },
	      async: true,
	      src: 'https://api.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js'
	    });
	    var css = DOM.createEl('link', {
	      id: 'yext-map-css',
	      rel: 'stylesheet',
	      href: 'https://api.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css'
	    });
	    DOM.append('body', css);
	    DOM.append('body', script);
	  };

	  _proto.init = function init(el, mapData) {
	    var _this2 = this;

	    if ((!mapData || mapData.mapMarkers.length <= 0) && !this._showEmptyMap) {
	      this._map = null;
	      return this;
	    }

	    var container = DOM.query(el);
	    this._map = new mapboxgl.Map({
	      container: container,
	      zoom: this._zoom,
	      style: 'mapbox://styles/mapbox/streets-v9',
	      center: this.getCenterMarker(mapData)
	    });

	    if (mapData && mapData.mapMarkers.length) {
	      (function () {
	        var collapsedMarkers = _this2._collapsePins ? _this2._collapseMarkers(mapData.mapMarkers) : mapData.mapMarkers;
	        var mapboxMapMarkerConfigs = MapBoxMarkerConfig.from(collapsedMarkers, _this2._pinConfig, _this2._map);
	        var bounds = new mapboxgl.LngLatBounds();

	        var _loop = function _loop(i) {
	          var wrapper = mapboxMapMarkerConfigs[i].wrapper;
	          var coords = new mapboxgl.LngLat(mapboxMapMarkerConfigs[i].position.longitude, mapboxMapMarkerConfigs[i].position.latitude);
	          var marker = new mapboxgl.Marker(wrapper).setLngLat(coords);
	          bounds.extend(marker.getLngLat());
	          marker.addTo(_this2._map);

	          if (_this2._onPinClick) {
	            marker.getElement().addEventListener('click', function () {
	              return _this2._onPinClick(collapsedMarkers[i].item);
	            });
	          }
	        };

	        for (var i = 0; i < mapboxMapMarkerConfigs.length; i++) {
	          _loop(i);
	        }

	        if (mapboxMapMarkerConfigs.length >= 2) {
	          _this2._map.fitBounds(bounds, {
	            padding: 50
	          });
	        }
	      })();
	    }
	  };

	  _proto.getCenterMarker = function getCenterMarker(mapData) {
	    return mapData && mapData.mapCenter && mapData.mapCenter.longitude && mapData.mapCenter.latitude ? [mapData.mapCenter.longitude, mapData.mapCenter.latitude] : {
	      lng: this._defaultPosition.lng,
	      lat: this._defaultPosition.lat
	    };
	  };

	  return MapBoxMapProvider;
	}(MapProvider);
	var MapBoxMarkerConfig =
	/*#__PURE__*/
	function () {
	  function MapBoxMarkerConfig(opts) {
	    /**
	     * A reference to the mapbox map, that the marker is appended to
	     * @type {MapBox}
	     */
	    this.map = opts.map || undefined;
	    /**
	     * The coordinates of the marker (lat/lng)
	     * @type {Object}
	     */

	    this.position = opts.position || {
	      latitude: undefined,
	      longitude: undefined
	    };
	    /**
	     * The html element to be used as the map marker
	     * @type {object}
	     */

	    this.wrapper = opts.wrapper || undefined;
	    /**
	     * The label of the marker to use
	     * @type {string}
	     */

	    this.label = opts.label || undefined;
	    /**
	     * The url of the pin for the static map
	     * @type {string}
	     */

	    this.staticMapPin = opts.staticMapPin || undefined;
	  }
	  /**
	   * Serializes an array of marker configs
	   * @param {MapBoxMarkerConfig[]} mapboxMapMarkerConfigs
	   * @returns {string[]}
	   */


	  MapBoxMarkerConfig.serialize = function serialize(mapboxMapMarkerConfigs) {
	    var serializedMarkers = [];
	    mapboxMapMarkerConfigs.forEach(function (marker) {
	      if (marker.staticMapPin) {
	        serializedMarkers.push("url-" + marker.staticMapPin + "(" + marker.position.longitude + "," + marker.position.latitude + ")");
	      } else {
	        serializedMarkers.push("pin-s-" + marker.label + "(" + marker.position.longitude + "," + marker.position.latitude + ")");
	      }
	    });
	    return serializedMarkers.join(',');
	  }
	  /**
	   * Converts the storage data model of markers into MapBoxMarkerConfig
	   * @param {MapBox} A reference to the mapbox map to apply the marker to
	   * @param {object[]} markers The data of the marker
	   * @param {Object} pinConfig The configuration to apply to the marker
	   * @returns {MapBoxMarkerConfig[]}
	   */
	  ;

	  MapBoxMarkerConfig.from = function from(markers, pinConfig, map) {
	    var mapboxMapMarkerConfigs = [];

	    if (!Array.isArray(markers)) {
	      markers = [markers];
	    }

	    markers.forEach(function (marker) {
	      // Support configuration as a function
	      var pinConfigObj = pinConfig;

	      if (typeof pinConfig === 'function') {
	        pinConfigObj = pinConfig(marker.item, MapProvider.DEFAULT_PIN_CONFIG, marker);
	      }

	      var wrapper = pinConfigObj.wrapper ? pinConfigObj.wrapper : null;
	      var staticMapPin = pinConfigObj.staticMapPin ? pinConfigObj.staticMapPin : null;
	      mapboxMapMarkerConfigs.push(new MapBoxMarkerConfig({
	        map: map,
	        position: {
	          latitude: marker.latitude,
	          longitude: marker.longitude
	        },
	        wrapper: wrapper,
	        label: marker.label,
	        staticMapPin: staticMapPin
	      }));
	    });
	    return mapboxMapMarkerConfigs;
	  };

	  return MapBoxMarkerConfig;
	}();

	var ProviderTypes = {
	  'google': GoogleMapProvider,
	  'mapbox': MapBoxMapProvider
	};

	var MapComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(MapComponent, _Component);

	  function MapComponent(opts, systemOpts) {
	    var _this;

	    if (opts === void 0) {
	      opts = {};
	    }

	    if (systemOpts === void 0) {
	      systemOpts = {};
	    }

	    _this = _Component.call(this, opts, systemOpts) || this;
	    /**
	     * Bind this component to listen to the storage based on this key
	     */

	    _this.moduleId = StorageKeys.VERTICAL_RESULTS;
	    /**
	     * An aliased used to determine the type of map provider to use
	     * @type {string}
	     */

	    _this._mapProvider = opts.mapProvider;

	    if (!_this._mapProvider || !(_this._mapProvider.toLowerCase() in ProviderTypes)) {
	      throw new Error('MapComponent: Invalid Map Provider; must be `google` or `mapBox`');
	    }
	    /**
	     * A reference to an instance of the {MapProvider} that's constructed
	     * @type {MapProvider}
	     */


	    _this._map = null;
	    return _this;
	  }

	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  MapComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'results/map';
	  } // TODO(billy) Make ProviderTypes a factory class
	  ;

	  var _proto = MapComponent.prototype;

	  _proto.getProviderInstance = function getProviderInstance(type) {
	    return new ProviderTypes[type.toLowerCase()](this._config);
	  };

	  _proto.onCreate = function onCreate() {
	    this._map = this.getProviderInstance(this._mapProvider);

	    this._map.loadJS();
	  };

	  _proto.onMount = function onMount() {
	    var _this2 = this;

	    this._map.onLoaded(function () {
	      _this2._map.init(_this2._container, _this2.getState('map'));
	    });
	  };

	  _proto.setState = function setState(data, val) {
	    if (Object.keys(data).length === 0) {
	      return this;
	    }

	    return _Component.prototype.setState.call(this, data, val);
	  };

	  createClass(MapComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'Map';
	    }
	  }]);

	  return MapComponent;
	}(Component);

	var ResultType = {
	  EVENT: 'event',
	  LOCATION: 'location',
	  PEOPLE: 'people'
	};

	var ResultsComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(ResultsComponent, _Component);

	  function ResultsComponent(config, systemConfig) {
	    var _this$_itemConfig;

	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;
	    /**
	     * verticalConfigId used for analytics and passed to children
	     * @type {string}
	     * @private
	     */

	    _this._verticalConfigId = config.verticalConfigId;
	    /**
	     * isUniversal is set to true if this component is added by the UniversalResultsComponent
	     * @type {boolean}
	     * @private
	     */

	    _this._isUniversal = config.isUniversal || false;
	    _this.moduleId = StorageKeys.VERTICAL_RESULTS;
	    _this._itemConfig = (_this$_itemConfig = {
	      global: {
	        render: null,
	        template: null
	      }
	    }, _this$_itemConfig[EventResultsItemComponent.type] = {
	      render: null,
	      template: null
	    }, _this$_itemConfig[LocationResultsItemComponent.type] = {
	      render: null,
	      template: null
	    }, _this$_itemConfig[PeopleResultsItemComponent.type] = {
	      render: null,
	      template: null
	    }, _this$_itemConfig);

	    if (config.renderItem === undefined && config._parentOpts !== undefined) {
	      config.renderItem = config._parentOpts.renderItem;
	    }

	    if (config.itemTemplate === undefined && config._parentOpts !== undefined) {
	      config.itemTemplate = config._parentOpts.itemTemplate;
	    }

	    _this.configureItem({
	      render: config.renderItem,
	      template: config.itemTemplate
	    });
	    /**
	     * The url to the universal page for the no results page to link back to with current query
	     * @type {string|null}
	     */


	    _this._universalUrl = config.universalUrl;
	    return _this;
	  }

	  var _proto = ResultsComponent.prototype;

	  _proto.mount = function mount() {
	    if (Object.keys(this.getState()).length > 0) {
	      _Component.prototype.mount.call(this);
	    }

	    return this;
	  };

	  _proto.setState = function setState(data, val) {
	    var results = data.results || [];
	    var searchState = data.searchState || SearchStates.PRE_SEARCH;
	    return _Component.prototype.setState.call(this, Object.assign({
	      results: []
	    }, data, {
	      isPreSearch: searchState === SearchStates.PRE_SEARCH,
	      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
	      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
	      includeMap: this._config.includeMap,
	      mapConfig: this._config.mapConfig,
	      eventOptions: this.eventOptions(),
	      universalUrl: this._universalUrl ? this._universalUrl + window.location.search : '',
	      showNoResults: results.length === 0,
	      query: this.core.globalStorage.getState(StorageKeys.QUERY)
	    }), val);
	  }
	  /**
	   * helper to construct the eventOptions object for the view all link
	   * @returns {string}
	   */
	  ;

	  _proto.eventOptions = function eventOptions() {
	    return JSON.stringify({
	      verticalConfigId: this._verticalConfigId
	    });
	  };

	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  ResultsComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'results/results';
	  };

	  _proto.configureItem = function configureItem(config) {
	    if (typeof config.render === 'function') {
	      this._itemConfig.global.render = config.render;
	    } else {
	      for (var key in config.render) {
	        this.setItemRender(key, config.render[key]);
	      }
	    }

	    if (typeof config.template === 'string') {
	      this._itemConfig.global.template = config.template;
	    } else {
	      for (var _key in config.template) {
	        this.setItemTemplate(_key, config.template[_key]);
	      }
	    }
	  };

	  _proto.setItemTemplate = function setItemTemplate(type, template) {
	    var clazz = this.getItemComponent(type);
	    this._itemConfig[clazz.type].template = template;
	  };

	  _proto.setItemRender = function setItemRender(type, render) {
	    var clazz = this.getItemComponent(type);
	    this._itemConfig[clazz.type].render = render;
	  };

	  _proto.getItemComponent = function getItemComponent(type) {
	    var comp = ResultsItemComponent;

	    switch (type) {
	      case ResultType.EVENT:
	        comp = EventResultsItemComponent;
	        break;

	      case ResultType.LOCATION:
	        comp = LocationResultsItemComponent;
	        break;

	      case ResultType.PEOPLE:
	        comp = PeopleResultsItemComponent;
	        break;
	    }

	    return comp;
	  };

	  _proto.addChild = function addChild(data, type, opts) {
	    // TODO(billy) Refactor the way configuration and data flows
	    // through top level components to child components.
	    if (type === ResultsItemComponent.type) {
	      var clazz = this.getItemComponent(data.type);

	      if (clazz) {
	        type = clazz.type;
	      }
	    } else if (type === MapComponent.type) {
	      data = {
	        map: data
	      };
	      var newOpts = Object.assign({}, this._config.mapConfig, opts);
	      return _Component.prototype.addChild.call(this, data, type, newOpts);
	    } // Apply the proper item renders to the the components
	    // have just been constructed. Prioritize global over individual items.


	    var comp = _Component.prototype.addChild.call(this, data, type, Object.assign(opts, {
	      verticalConfigId: this._verticalConfigId,
	      isUniversal: this._isUniversal
	    }));

	    var globalConfig = this._itemConfig.global;
	    var itemConfig = this._itemConfig[comp.type];
	    var hasGlobalRender = typeof globalConfig.render === 'function';
	    var hasGlobalTemplate = typeof globalConfig.template === 'string';

	    if (hasGlobalRender) {
	      comp.setRender(globalConfig.render);
	    }

	    if (hasGlobalTemplate) {
	      comp.setTemplate(globalConfig.template);
	    }

	    if (!itemConfig) {
	      return comp;
	    }

	    if (!hasGlobalRender && itemConfig.render) {
	      comp.setRender(itemConfig.render);
	    } // Apply template specific situation


	    if (!hasGlobalTemplate && itemConfig.template) {
	      comp.setTemplate(itemConfig.template);
	    }

	    return comp;
	  };

	  createClass(ResultsComponent, null, [{
	    key: "duplicatesAllowed",
	    get: function get() {
	      return true;
	    }
	  }, {
	    key: "type",
	    get: function get() {
	      return 'VerticalResults';
	    }
	  }]);

	  return ResultsComponent;
	}(Component);

	var AccordionResultsComponent =
	/*#__PURE__*/
	function (_ResultsComponent) {
	  inheritsLoose(AccordionResultsComponent, _ResultsComponent);

	  function AccordionResultsComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _ResultsComponent.call(this, config, systemConfig) || this;
	    /**
	     * base selector to use when finding DOM targets
	     * @type {string}
	     */

	    _this._selectorBase = config.selectorBase || '.js-yxt-AccordionResult';
	    /**
	     * collapsed state class
	     * @type {string}
	     */

	    _this.collapsedClass = config.collapsedClass || 'is-collapsed';
	    /**
	     * vertical config id is required for analytics
	     * @type {string|null}
	     */

	    _this.verticalConfigId = config.verticalConfigId || config._parentOpts.verticalConfigId || null;
	    return _this;
	  }
	  /**
	   * the component type
	   * @returns {string}
	   * @override
	   */


	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  AccordionResultsComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'results/resultsaccordion';
	  }
	  /**
	   * overrides onMount to add bindings to change the height on click
	   * @returns {AccordionResultsComponent}
	   * @override
	   */
	  ;

	  var _proto = AccordionResultsComponent.prototype;

	  _proto.onMount = function onMount() {
	    var _this2 = this;

	    _ResultsComponent.prototype.onMount.call(this);

	    var accordionEls = DOM.queryAll(this._container, this._selectorBase);
	    accordionEls.forEach(function (accordionEl) {
	      var toggleEl = DOM.query(accordionEl, _this2.toggleSelector());
	      var contentEl = DOM.query(accordionEl, _this2.bodySelector());

	      _this2.changeHeight(contentEl, accordionEl);

	      toggleEl.addEventListener('click', function () {
	        _this2.handleClick(accordionEl, toggleEl, contentEl);
	      });
	    });
	    return this;
	  };

	  _proto.setState = function setState(data) {
	    return _ResultsComponent.prototype.setState.call(this, Object.assign({}, data, {
	      modifier: this.verticalConfigId
	    }));
	  }
	  /**
	   * click handler for the accordion toggle button
	   * @param wrapperEl {HTMLElement} the toggle container
	   * @param toggleEl {HTMLElement} the button
	   * @param contentEl {HTMLElement} the toggle target
	   */
	  ;

	  _proto.handleClick = function handleClick(wrapperEl, toggleEl, contentEl) {
	    var event = new AnalyticsEvent(this.isCollapsed(wrapperEl) ? 'ROW_EXPAND' : 'ROW_COLLAPSE').addOptions({
	      verticalConfigId: this.verticalConfigId,
	      entityId: toggleEl.dataset.entityId
	    });
	    wrapperEl.classList.toggle(this.collapsedClass);
	    this.changeHeight(contentEl, wrapperEl);
	    toggleEl.setAttribute('aria-expanded', this.isCollapsed(wrapperEl) ? 'false' : 'true');
	    this.analyticsReporter.report(event);
	  }
	  /**
	   * returns true if the element is currently collapsed
	   * @param wrapperEl {HTMLElement} the toggle container
	   * @returns {boolean}
	   */
	  ;

	  _proto.isCollapsed = function isCollapsed(wrapperEl) {
	    if (!wrapperEl) {
	      return false;
	    }

	    return wrapperEl.classList.contains(this.collapsedClass);
	  }
	  /**
	   * toggles the height between 0 and the content height for smooth animation
	   * @param targetEl {HTMLElement}
	   * @param wrapperEl {HTMLElement}
	   */
	  ;

	  _proto.changeHeight = function changeHeight(targetEl, wrapperEl) {
	    targetEl.style.height = (this.isCollapsed(wrapperEl) ? 0 : targetEl.scrollHeight) + "px";
	  }
	  /**
	   * helper for composing child element selectors
	   * @param child {string}
	   * @returns {string}
	   */
	  ;

	  _proto.buildSelector = function buildSelector(child) {
	    return "" + this._selectorBase + child;
	  }
	  /**
	   * helper for the toggle button selector
	   * @returns {string}
	   */
	  ;

	  _proto.toggleSelector = function toggleSelector() {
	    return this.buildSelector('-toggle');
	  }
	  /**
	   * helper for the content element selector
	   * @returns {string}
	   */
	  ;

	  _proto.bodySelector = function bodySelector() {
	    return this.buildSelector('-body');
	  };

	  createClass(AccordionResultsComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'AccordionResults';
	    }
	  }]);

	  return AccordionResultsComponent;
	}(ResultsComponent);

	var UniversalResultsComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(UniversalResultsComponent, _Component);

	  function UniversalResultsComponent(opts, systemOpts) {
	    var _this;

	    if (opts === void 0) {
	      opts = {};
	    }

	    if (systemOpts === void 0) {
	      systemOpts = {};
	    }

	    _this = _Component.call(this, opts, systemOpts) || this;
	    _this.moduleId = StorageKeys.UNIVERSAL_RESULTS;
	    _this._limit = opts.limit || 10;
	    return _this;
	  }

	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  UniversalResultsComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'results/universalresults';
	  };

	  UniversalResultsComponent.areDuplicateNamesAllowed = function areDuplicateNamesAllowed() {
	    return true;
	  };

	  var _proto = UniversalResultsComponent.prototype;

	  _proto.init = function init(opts) {
	    _Component.prototype.init.call(this, opts);

	    return this;
	  };

	  _proto.setState = function setState(data, val) {
	    var sections = data.sections || [];
	    var searchState = data.searchState || SearchStates.PRE_SEARCH;
	    return _Component.prototype.setState.call(this, Object.assign({
	      sections: []
	    }, data, {
	      isPreSearch: searchState === SearchStates.PRE_SEARCH,
	      isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
	      isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
	      showNoResults: sections.length === 0,
	      query: this.core.globalStorage.getState(StorageKeys.QUERY)
	    }), val);
	  };

	  _proto.addChild = function addChild(data, type, opts) {
	    if (data === void 0) {
	      data = {};
	    }

	    var childOpts = objectSpread({}, opts, {}, this.getChildConfig([data['verticalConfigId']]));

	    if (childOpts.useAccordion === true) {
	      return _Component.prototype.addChild.call(this, data, AccordionResultsComponent.type, childOpts);
	    }

	    return _Component.prototype.addChild.call(this, data, type, childOpts);
	  };

	  _proto.getChildConfig = function getChildConfig(configId) {
	    var defaultConfig = {
	      verticalConfigId: configId,
	      isUniversal: true
	    };
	    var config = this._config.config;

	    if (config === undefined) {
	      return defaultConfig;
	    }

	    return Object.assign(defaultConfig, this._config['config'][configId] || this._config['config']);
	  };

	  createClass(UniversalResultsComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'UniversalResults';
	    }
	  }]);

	  return UniversalResultsComponent;
	}(Component);

	var PaginationComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(PaginationComponent, _Component);

	  function PaginationComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, config, systemConfig) || this;
	    /**
	     * The vertical key to use for searches
	     * @type {string}
	     * @private
	     */

	    _this._verticalKey = _this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).verticalKey;

	    if (typeof _this._verticalKey !== 'string') {
	      throw new AnswersComponentError('verticalKey not provided, but necessary for pagination', 'PaginationComponent');
	    }
	    /**
	     * If true, displays the first page button
	     * @type {boolean}
	     * @private
	     */


	    _this._firstPageButtonEnabled = config.showFirst === undefined ? true : config.showFirst;
	    /**
	     * If true, displays the last page button
	     * @type {boolean}
	     * @private
	     */

	    _this._lastPageButtonEnabled = config.showLast === undefined ? true : config.showLast;
	    /**
	     * Options to include with all analytic events sent by this component
	     * @type {object}
	     * @private
	     */

	    _this._analyticsOptions = {
	      verticalKey: _this._verticalKey
	    };
	    var offset = _this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;

	    _this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, Number(offset));

	    _this.core.globalStorage.on('update', StorageKeys.SEARCH_OFFSET, function (offset) {
	      if (typeof offset === 'number') {
	        return;
	      }

	      _this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, Number(offset));
	    });

	    _this.core.globalStorage.on('update', StorageKeys.VERTICAL_RESULTS, function (results) {
	      if (results.searchState === SearchStates.SEARCH_COMPLETE) {
	        _this.setState();
	      }
	    });

	    return _this;
	  }

	  PaginationComponent.defaultTemplateName = function defaultTemplateName() {
	    return 'results/pagination';
	  };

	  var _proto = PaginationComponent.prototype;

	  _proto.onMount = function onMount() {
	    var _this2 = this;

	    var results = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};
	    var limit = this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit;
	    var showControls = results.searchState === 'search-complete' && results.resultsCount > limit;
	    var offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;

	    if (!showControls) {
	      return;
	    }

	    var previousPageButton = DOM.query(this._container, '.js-yxt-Pagination-previous');
	    var nextPageButton = DOM.query(this._container, '.js-yxt-Pagination-next');
	    var maxPage = Math.trunc((results.resultsCount - 1) / limit);
	    DOM.on(previousPageButton, 'click', function () {
	      return _this2.updatePage(offset - limit);
	    });
	    DOM.on(nextPageButton, 'click', function () {
	      return _this2.updatePage(offset + limit);
	    });

	    if (this._firstPageButtonEnabled) {
	      var firstPageButton = DOM.query(this._container, '.js-yxt-Pagination-first');
	      DOM.on(firstPageButton, 'click', function () {
	        return _this2.updatePage(0);
	      });
	    }

	    if (this._lastPageButtonEnabled) {
	      var lastPageButton = DOM.query(this._container, '.js-yxt-Pagination-last');
	      DOM.on(lastPageButton, 'click', function () {
	        return _this2.updatePage(maxPage * limit);
	      });
	    }
	  };

	  _proto.updatePage = function updatePage(offset) {
	    this.scrollToTop();
	    this.core.globalStorage.set(StorageKeys.SEARCH_OFFSET, offset);
	    this.core.persistentStorage.set(StorageKeys.SEARCH_OFFSET, offset);
	    this.core.verticalPage(this._verticalKey, offset);
	  };

	  _proto.scrollToTop = function scrollToTop() {
	    document.documentElement.scrollTop = 0; // Safari

	    document.body.scrollTop = 0;
	  };

	  _proto.setState = function setState(data) {
	    var results = this.core.globalStorage.getState(StorageKeys.VERTICAL_RESULTS) || {};
	    var offset = this.core.globalStorage.getState(StorageKeys.SEARCH_OFFSET) || 0;
	    var limit = this.core.globalStorage.getState(StorageKeys.SEARCH_CONFIG).limit;
	    var pageNumber = offset / limit;
	    var showControls = results.searchState === 'search-complete' && results.resultsCount > limit;
	    var isMoreResults = results.resultsCount > offset + limit;
	    var maxPage = Math.trunc((results.resultsCount - 1) / limit);
	    return _Component.prototype.setState.call(this, objectSpread({
	      showControls: showControls,
	      firstPageButtonEnabled: this._firstPageButtonEnabled,
	      lastPageButtonEnabled: this._lastPageButtonEnabled,
	      pageNumber: pageNumber + 1,
	      showFirstPageButton: pageNumber > 1,
	      showPreviousPageButton: pageNumber > 0,
	      showNextPageButton: isMoreResults,
	      showLastPageButton: pageNumber < maxPage - 1
	    }, data));
	  };

	  createClass(PaginationComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'Pagination';
	    }
	  }]);

	  return PaginationComponent;
	}(Component);

	/**
	 * Configurable options for the component
	 * @type {Object}
	 */

	var DEFAULT_CONFIG$1 = {
	  /**
	   * The entity identifier that the question is associated with.
	   * This is typically an organization object
	   * @type {number}
	   */
	  'entityId': null,

	  /**
	   * The default language of the question
	   * @type {string}
	   */
	  'language': 'EN',

	  /**
	   * The main CSS selector used to reference the form for the component.
	   * @type {string} CSS selector
	   */
	  'formSelector': 'form',

	  /**
	   * An optional label to use for the e-mail address input
	   * @type {string}
	   */
	  'emailLabel': 'Email Address:',

	  /**
	   * An optional label to use for the name input
	   * @type {string}
	   */
	  'nameLabel': 'Name:',

	  /**
	   * An optional label to use for the question
	   * @type {string}
	   */
	  'questionLabel': 'What is your question?',

	  /**
	   * An optional label to use for the Privacy Policy
	   * @type {string}
	   */
	  'privacyPolicyLabel': 'I agree to our Privacy Policy:',

	  /**
	   * The label to use for the Submit button
	   * @type {string}
	   */
	  'buttonLabel': 'Submit'
	};
	/**
	 * QuestionSubmissionComponent is a component that creates a form
	 * thats displayed whenever a query is run. It enables the user
	 * to submit questions that they cant find the answer for.
	 */

	var QuestionSubmissionComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(QuestionSubmissionComponent, _Component);

	  function QuestionSubmissionComponent(config, systemConfig) {
	    var _this;

	    if (config === void 0) {
	      config = {};
	    }

	    if (systemConfig === void 0) {
	      systemConfig = {};
	    }

	    _this = _Component.call(this, Object.assign({}, DEFAULT_CONFIG$1, config), systemConfig) || this;
	    /**
	     * Reference to the storage model
	     * @type {string}
	     */

	    _this.moduleId = StorageKeys.QUESTION_SUBMISSION;
	    /**
	     * NOTE(billy) if this is a pattern we want to follow for configuration
	     * we should bake it into the core class.
	     */

	    _this.validateConfig();

	    return _this;
	  }
	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */


	  QuestionSubmissionComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'questions/questionsubmission';
	  }
	  /**
	   * The public interface alias for the component
	   * @returns {string}
	   * @override
	   */
	  ;

	  var _proto = QuestionSubmissionComponent.prototype;

	  /**
	   * validationConfig contains a bunch of rules
	   * that are used to validate aginst configuration provided by the user
	   */
	  _proto.validateConfig = function validateConfig() {
	    if (this._config.entityId === null || this._config.entityId === undefined) {
	      throw new AnswersComponentError('`entityId` is a required configuration option for Question Submission', 'QuestionSubmission');
	    }
	  };

	  _proto.beforeMount = function beforeMount() {
	    // Avoid mounting the component if theres no data
	    // Note, 1 because `config` is always part of the state.
	    return Object.keys(this.getState()).length > 1;
	  };

	  _proto.onMount = function onMount() {
	    var formEl = DOM.query(this._container, this._config.formSelector);

	    if (formEl === null) {
	      return;
	    }

	    this.bindAnalytics(formEl);
	    this.bindFormSubmit(formEl);
	  }
	  /**
	   * bindAnalytics will wire up DOM event hooks to serverside reporting
	   * @param {HTMLElement} formEl
	   */
	  ;

	  _proto.bindAnalytics = function bindAnalytics(formEl) {
	    var _this2 = this;

	    if (this.analyticsReporter === null) {
	      return;
	    }

	    var questionTextEl = DOM.query(formEl, '.js-question-text');
	    DOM.on(questionTextEl, 'focus', function () {
	      _this2.analyticsReporter.report(new AnalyticsEvent('QUESTION_FOCUS'));
	    });
	  }
	  /**
	   * bindFormSubmit handles submitting the question to the server.
	   * @param {HTMLElement} formEl
	   */
	  ;

	  _proto.bindFormSubmit = function bindFormSubmit(formEl) {
	    var _this3 = this;

	    DOM.on(formEl, 'submit', function (e) {
	      e.preventDefault(); // TODO(billy) we probably want to disable the form from being submitted twice

	      var formData = _this3.parse(formEl);

	      var errors = _this3.validateRequired(formData);

	      if (errors) {
	        return _this3.setState(new QuestionSubmission(formData, errors));
	      }

	      _this3.core.submitQuestion({
	        'entityId': _this3._config.entityId,
	        'questionLanguage': _this3._config.language,
	        'site': 'FIRSTPARTY',
	        'name': formData.name,
	        'email': formData.email,
	        'questionText': formData.questionText,
	        'questionDescription': formData.questionDescription
	      })["catch"](function (error) {
	        _this3.setState(new QuestionSubmission(formData, {
	          'network': 'There was a problem submitting your question. Please try again.'
	        }));

	        throw error;
	      });
	    });
	  }
	  /**
	   * Takes the form, and builds a object that represents the input names
	   * and text fields.
	   * @param {HTMLElement} formEl
	   * @returns {object}
	   */
	  ;

	  _proto.parse = function parse(formEl) {
	    var inputFields = DOM.queryAll(formEl, '.js-question-field');

	    if (!inputFields || inputFields.length === 0) {
	      return {};
	    }

	    var obj = {};

	    for (var i = 0; i < inputFields.length; i++) {
	      var val = inputFields[i].value;

	      if (inputFields[i].type === 'checkbox' && val === 'true') {
	        val = true;
	      }

	      obj[inputFields[i].name] = val;
	    }

	    return obj;
	  }
	  /**
	   * Validates the required fields (or rules) for the form data
	   * @param {Object} formData
	   * @returns {Object|boolean} errors object if any errors found
	   */
	  ;

	  _proto.validateRequired = function validateRequired(formData) {
	    var errors = {};

	    if (!formData.email || typeof formData.email !== 'string') {
	      errors['email'] = 'Missing email address!';
	    }

	    if (!formData.privacyPolicy || formData.privacyPolicy !== true) {
	      errors['privacyPolicy'] = 'Approving our privacy policy terms is required!';
	    }

	    if (!formData.questionText || typeof formData.questionText !== 'string') {
	      errors['questionText'] = 'Question text is required!';
	    }

	    return Object.keys(errors).length > 0 ? errors : null;
	  };

	  createClass(QuestionSubmissionComponent, null, [{
	    key: "type",
	    get: function get() {
	      return 'QASubmission';
	    }
	  }]);

	  return QuestionSubmissionComponent;
	}(Component);

	var SVGIcon =
	/*#__PURE__*/
	function () {
	  /**
	   * @param config
	   * @param config.name
	   * @param config.path
	   * @param config.complexContents
	   * @param config.viewBox
	   * @constructor
	   */
	  function SVGIcon(config) {
	    /**
	     * the name of the icon
	     */
	    this.name = config.name;
	    /**
	     * an svg path definition
	     */

	    this.path = config.path;
	    /**
	     * if not using a path, a the markup for a complex SVG
	     */

	    this.complexContents = config.complexContents;
	    /**
	     * the view box definition, defaults to 24x24
	     * @type {string}
	     */

	    this.viewBox = config.viewBox || '0 0 24 24';
	    /**
	     * actual contents used
	     */

	    this.contents = this.pathDefinition();
	  }

	  var _proto = SVGIcon.prototype;

	  _proto.pathDefinition = function pathDefinition() {
	    if (this.complexContents) {
	      return this.complexContents;
	    }

	    return "<path d=\"" + this.path + "\"></path>";
	  }
	  /**
	   * returns the svg markup
	   */
	  ;

	  _proto.markup = function markup() {
	    return "<svg viewBox=\"" + this.viewBox + "\" xmlns=\"http://www.w3.org/2000/svg\">" + this.contents + "</svg>";
	  };

	  return SVGIcon;
	}();

	var thumbIcon = new SVGIcon({
	  name: 'thumb',
	  viewBox: '0 0 24 22',
	  path: 'M15.273 1H5.455c-.906 0-1.68.55-2.008 1.342L.153 10.097A2.19 2.19 0 000 10.9v2.2c0 1.21.982 2.2 2.182 2.2h6.883L8.03 20.327l-.033.352c0 .451.186.869.48 1.166L9.633 23l7.178-7.249a2.16 2.16 0 00.644-1.551v-11c0-1.21-.982-2.2-2.182-2.2zm0 13.2l-4.735 4.774L11.75 13.1H2.182v-2.2l3.273-7.7h9.818v11zM19.636 1H24v13.2h-4.364V1z'
	});

	var receiptIcon = new SVGIcon({
	  name: 'receipt',
	  path: 'M14.606 9.5c-.671-.515-1.591-.833-2.606-.833 1.015 0 1.935.318 2.606.833zm-7.985 0H1.655A1.66 1.66 0 010 7.833V3.667C0 2.747.741 2 1.655 2h20.69A1.66 1.66 0 0124 3.667v4.166A1.66 1.66 0 0122.345 9.5h-4.966V22H6.621V9.5h2.773H6.62zm10.758-1.667h4.966V3.667H1.655v4.166h4.966v-2.5h10.758v2.5z'
	});

	var pantheonIcon = new SVGIcon({
	  name: 'pantheon',
	  path: 'M9.947 16.598h.252V9.412h-.252a.432.432 0 01-.23-.065c-.07-.043-.106-.093-.106-.15L9.15 7.82v-.15c0-.044.028-.08.084-.109a.691.691 0 01.105-.086.254.254 0 01.146-.043H13.6c.056 0 .104.015.146.043.042.03.091.058.147.086a.271.271 0 01.063.108c.014.043.007.093-.02.15l-.42 1.378a.374.374 0 01-.147.15.37.37 0 01-.19.065h-.251v7.186h.252a.37.37 0 01.189.065c.07.043.119.093.147.15l.42 1.378c.027.028.034.071.02.129a.275.275 0 01-.063.129 1.364 1.364 0 00-.147.086.254.254 0 01-.146.043H9.485a.254.254 0 01-.146-.043.691.691 0 01-.105-.086c-.056-.029-.084-.072-.084-.13v-.128l.461-1.377c0-.058.035-.108.105-.151a.432.432 0 01.231-.065zm5.792 0h.252V9.412h-.252a.432.432 0 01-.23-.065.374.374 0 01-.148-.15l-.42-1.377c-.027-.029-.034-.072-.02-.13a.275.275 0 01.063-.129c.056-.028.105-.057.146-.086a.254.254 0 01.147-.043h4.114c.055 0 .104.015.146.043a.691.691 0 01.105.086c.056.03.084.072.084.13v.129l-.42 1.377a.374.374 0 01-.146.15.432.432 0 01-.231.065h-.21v7.186h.21a.43.43 0 01.23.065c.07.043.12.093.148.15l.42 1.378v.15c0 .043-.029.08-.085.108a.691.691 0 01-.105.086.254.254 0 01-.146.043h-4.114a.254.254 0 01-.147-.043 1.364 1.364 0 00-.146-.086.271.271 0 01-.063-.108c-.014-.043-.007-.093.02-.15l.42-1.377a.374.374 0 01.147-.151.432.432 0 01.231-.065zm-11.794-.086h.252V9.498h-.252a.334.334 0 01-.21-.065.386.386 0 01-.126-.193l-.42-1.377a.248.248 0 01-.02-.172.854.854 0 01.063-.173c.028-.057.07-.1.126-.129a.365.365 0 01.168-.043h4.07c.057 0 .113.015.169.043a.278.278 0 01.126.13.854.854 0 01.062.172.248.248 0 01-.02.172l-.42 1.377a.386.386 0 01-.126.193.334.334 0 01-.21.065h-.21v7.014h.21c.084 0 .154.029.21.086a.673.673 0 01.126.172l.42 1.378a.248.248 0 01.02.172.854.854 0 01-.062.172.278.278 0 01-.126.129.365.365 0 01-.168.043H3.526a.365.365 0 01-.168-.043.278.278 0 01-.126-.13.854.854 0 01-.063-.171.248.248 0 01.02-.172l.42-1.378a.673.673 0 01.126-.172.281.281 0 01.21-.086zM1.763 6.658a.717.717 0 01-.504-.194.644.644 0 01-.21-.495v-.43a.73.73 0 01.105-.387.68.68 0 01.273-.259C4.309 3.402 6.54 2.276 8.121 1.515 9.702.755 10.493.361 10.493.332c.531-.258.972-.366 1.322-.323.35.043.734.165 1.154.366l8.31 4.518c.14.058.245.144.315.259a.73.73 0 01.105.387v.43c0 .201-.07.366-.21.495a.717.717 0 01-.504.194H1.763zm-.714 13.34a.54.54 0 01.168-.387.516.516 0 01.378-.172h19.642c.168 0 .308.057.42.172a.541.541 0 01.168.387v.818a.522.522 0 01-.168.408.605.605 0 01-.42.151H1.595a.551.551 0 01-.378-.15.522.522 0 01-.168-.41v-.817zm21.405 2.022c.14 0 .266.058.378.173a.592.592 0 01.168.43v.818a.541.541 0 01-.168.387.516.516 0 01-.378.172L.546 23.957a.516.516 0 01-.378-.172.541.541 0 01-.168-.387v-.818a.59.59 0 01.168-.43.516.516 0 01.378-.173l21.908.043z'
	});

	var micIcon = new SVGIcon({
	  name: 'mic',
	  path: 'M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z'
	});

	var directionsIcon = new SVGIcon({
	  name: 'directions',
	  path: 'M23.649 11.154L12.846.35a1.195 1.195 0 00-1.692 0L.35 11.154a1.195 1.195 0 000 1.692L11.154 23.65a1.195 1.195 0 001.692 0L23.65 12.846c.468-.456.468-1.212 0-1.692zm-9.254 3.853v-3.001H9.593v3.6h-2.4v-4.8c0-.66.54-1.2 1.2-1.2h6.002V6.604l4.2 4.2-4.2 4.202z'
	});

	var calendarIcon = new SVGIcon({
	  name: 'calendar',
	  path: 'M18.111 13.2H12v6h6.111v-6zM16.89 0v2.4H7.11V0H4.667v2.4H3.444c-1.356 0-2.432 1.08-2.432 2.4L1 21.6C1 22.92 2.088 24 3.444 24h17.112C21.9 24 23 22.92 23 21.6V4.8c0-1.32-1.1-2.4-2.444-2.4h-1.223V0H16.89zm3.667 21.6H3.444V8.4h17.112v13.2z'
	});

	var calloutIcon = new SVGIcon({
	  name: 'callout',
	  path: 'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z'
	});

	var infoIcon = new SVGIcon({
	  name: 'info',
	  path: 'M12 8.4A1.2 1.2 0 1012 6a1.2 1.2 0 000 2.4zM12 0c6.624 0 12 5.376 12 12s-5.376 12-12 12S0 18.624 0 12 5.376 0 12 0zm0 18c.66 0 1.2-.54 1.2-1.2V12c0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2v4.8c0 .66.54 1.2 1.2 1.2z'
	});

	var briefcaseIcon = new SVGIcon({
	  name: 'briefcase',
	  path: 'M20 7h-4V5c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 20c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2zm-6 0h-4V5h4v2z'
	});

	var kabobIcon = new SVGIcon({
	  name: 'kabob',
	  viewBox: '0 0 3 11',
	  complexContents: "<circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\"/><circle cx=\"1.5\" cy=\"5.5\" r=\"1.5\"/><circle cx=\"1.5\" cy=\"9.5\" r=\"1.5\"/>"
	});

	var personIcon = new SVGIcon({
	  name: 'person',
	  viewBox: '0 0 18 18',
	  path: 'M9 9c2.486 0 4.5-2.014 4.5-4.5S11.486 0 9 0a4.499 4.499 0 00-4.5 4.5C4.5 6.986 6.514 9 9 9zm0 2.25c-3.004 0-9 1.508-9 4.5v1.125C0 17.494.506 18 1.125 18h15.75c.619 0 1.125-.506 1.125-1.125V15.75c0-2.992-5.996-4.5-9-4.5z'
	});

	var magnifyingGlassIcon = new SVGIcon({
	  name: 'magnifying_glass',
	  path: 'M16.124 13.051a5.154 5.154 0 110-10.308 5.154 5.154 0 010 10.308M16.114 0a7.886 7.886 0 00-6.46 12.407L0 22.06 1.94 24l9.653-9.653A7.886 7.886 0 1016.113 0'
	});

	var officeIcon = new SVGIcon({
	  name: 'office',
	  path: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z'
	});

	var linkIcon = new SVGIcon({
	  name: 'link',
	  path: 'M2.28 12A3.723 3.723 0 016 8.28h4.8V6H6c-3.312 0-6 2.688-6 6s2.688 6 6 6h4.8v-2.28H6A3.723 3.723 0 012.28 12zm4.92 1.2h9.6v-2.4H7.2v2.4zM18 6h-4.8v2.28H18A3.723 3.723 0 0121.72 12 3.723 3.723 0 0118 15.72h-4.8V18H18c3.312 0 6-2.688 6-6s-2.688-6-6-6z'
	});

	var windowIcon = new SVGIcon({
	  name: 'window',
	  path: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'
	});

	var phoneIcon = new SVGIcon({
	  name: 'phone',
	  path: 'M4.827 10.387a20.198 20.198 0 008.786 8.786l2.934-2.933c.36-.36.893-.48 1.36-.32a15.21 15.21 0 004.76.76c.733 0 1.333.6 1.333 1.333v4.654C24 23.4 23.4 24 22.667 24 10.147 24 0 13.853 0 1.333 0 .6.6 0 1.333 0H6c.733 0 1.333.6 1.333 1.333 0 1.667.267 3.267.76 4.76.147.467.04.987-.333 1.36l-2.933 2.934z'
	});

	var tagIcon = new SVGIcon({
	  name: 'tag',
	  viewBox: '0 0 18 18',
	  path: 'M17.469 8.622l-8.1-8.1A1.789 1.789 0 008.1 0H1.8C.81 0 0 .81 0 1.8v6.3c0 .495.198.945.531 1.278l8.1 8.1c.324.324.774.522 1.269.522a1.76 1.76 0 001.269-.531l6.3-6.3A1.76 1.76 0 0018 9.9c0-.495-.207-.954-.531-1.278zM3.15 4.5c-.747 0-1.35-.603-1.35-1.35 0-.747.603-1.35 1.35-1.35.747 0 1.35.603 1.35 1.35 0 .747-.603 1.35-1.35 1.35z'
	});

	var documentIcon = new SVGIcon({
	  name: 'document',
	  path: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z'
	});

	var chevronIcon = new SVGIcon({
	  name: 'chevron',
	  viewBox: '0 0 7 9',
	  complexContents: "<g fill-rule=\"evenodd\" transform=\"translate(-1 -8)\"><path d=\"m2.6417004 8-1.1417004 1.0575 3.70850202 3.4425-3.70850202 3.4425 1.1417004 1.0575 4.8582996-4.5z\"/></g>"
	});

	var supportIcon = new SVGIcon({
	  name: 'support',
	  path: 'M12.5 2C7.81 2 4 5.81 4 10.5c0 4.69 3.81 8.5 8.5 8.5h.5v3c4.86-2.34 8-7 8-11.5C21 5.81 17.19 2 12.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z'
	});

	var yextIcon = new SVGIcon({
	  name: 'yext',
	  viewBox: '0 0 30 30',
	  path: 'M25.517 28.142v.095h-.204v.905h-.066v-.905h-.197v-.095h.467zm.667 0h.066v1h-.066v-.825l-.24.595h-.013l-.24-.595v.825h-.066v-1h.066l.247.61.246-.61zM15 28.8c7.622 0 13.8-6.178 13.8-13.8 0-7.622-6.178-13.8-13.8-13.8C7.378 1.2 1.2 7.378 1.2 15c0 7.622 6.178 13.8 13.8 13.8zM15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0zm.45 16.65v-1.2h6.6v1.2h-2.7v5.4h-1.2v-5.4h-2.7zm-1.599-1.35l.849.849-2.601 2.601 2.601 2.601-.849.849-2.601-2.601L8.649 22.2l-.849-.849 2.601-2.601L7.8 16.149l.849-.849 2.601 2.601 2.601-2.601zM18.675 9a2.175 2.175 0 00-1.847 3.323l2.995-2.995A2.163 2.163 0 0018.675 9zm0 5.55a3.375 3.375 0 112.833-5.209l-3.789 3.788a2.175 2.175 0 003.13-1.954h1.201a3.375 3.375 0 01-3.375 3.375zm-7.425-3.734L13.78 7.8l.92.771-2.85 3.397v2.582h-1.2v-2.582L7.8 8.57l.92-.771 2.53 3.016z'
	});

	var pinIcon = new SVGIcon({
	  name: 'pin',
	  viewBox: '0 0 13 18',
	  path: 'm9.375 0c-3.52446429 0-6.375 2.817-6.375 6.3 0 4.725 6.375 11.7 6.375 11.7s6.375-6.975 6.375-11.7c0-3.483-2.8505357-6.3-6.375-6.3zm.00000018 8.55000007c-1.25678576 0-2.27678579-1.008-2.27678579-2.25s1.02000003-2.25 2.27678579-2.25c1.25678572 0 2.27678582 1.008 2.27678582 2.25s-1.0200001 2.25-2.27678582 2.25z'
	});

	var gearIcon = new SVGIcon({
	  name: 'gear',
	  path: 'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42a.353.353 0 01.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16a.353.353 0 01-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z'
	});

	var lightBulbIcon = new SVGIcon({
	  name: 'light_bulb',
	  viewBox: '0 0 32 35',
	  path: 'M11.585 31.056l8.38-.493v-.986l-8.38.493zM11.585 33.028L15.775 35l4.19-1.972V31.55l-8.38.493v.986zm6.926-.407l-2.736 1.29-2.13-1.004 4.866-.286zM15.775 7.394c-4.63 0-8.38 3.205-8.38 8.38 0 5.177 4.19 6.902 4.19 12.818v.493l8.38-.493c0-5.916 4.19-8.188 4.19-12.817a8.38 8.38 0 00-8.38-8.38zm5.617 13.48c-1.025 1.837-2.174 3.892-2.381 6.786l-6.44.38c-.129-3.01-1.29-5.021-2.32-6.808-.493-.8-.928-1.636-1.299-2.5h13.556c-.325.708-.704 1.403-1.116 2.142zm1.479-3.128H8.627a7.793 7.793 0 01-.247-1.971c0-4.353 3.042-7.395 7.395-7.395a7.394 7.394 0 017.394 7.395 6.739 6.739 0 01-.3 1.971h.002zM26.62 15.282h4.93v1h-4.93zM23.094 7.756l2.091-2.091.698.697-2.092 2.092zM15.282 0h1v4.93h-1zM5.666 6.362l.697-.697 2.091 2.091-.697.697zM0 15.282h4.93v1H0z'
	});

	var starIcon = new SVGIcon({
	  name: 'receipt',
	  viewBox: '0 0 18 18',
	  path: 'M8.991 0C4.023 0 0 4.032 0 9s4.023 9 8.991 9C13.968 18 18 13.968 18 9s-4.032-9-9.009-9zm3.816 14.4L9 12.105 5.193 14.4l1.008-4.329-3.357-2.907 4.428-.378L9 2.7l1.728 4.077 4.428.378-3.357 2.907z'
	});

	var close = new SVGIcon({
	  name: 'close',
	  complexContents: "\n    <path d=\"M7 8l9.716 9.716m0-9.716L7 17.716\" \n          stroke=\"currentColor\" \n          stroke-width=\"2\"/>\n  "
	});

	var iconsArray = [thumbIcon, receiptIcon, pantheonIcon, micIcon, directionsIcon, calendarIcon, calloutIcon, infoIcon, briefcaseIcon, kabobIcon, personIcon, magnifyingGlassIcon, officeIcon, linkIcon, windowIcon, phoneIcon, tagIcon, documentIcon, chevronIcon, supportIcon, yextIcon, pinIcon, gearIcon, lightBulbIcon, close];
	var Icons = {};
	iconsArray.forEach(function (icon) {
	  Icons[icon.name] = icon.markup();
	});
	Icons["default"] = starIcon.markup();

	var IconComponent =
	/*#__PURE__*/
	function (_Component) {
	  inheritsLoose(IconComponent, _Component);

	  /**
	   * IconComponent
	   * @param opts
	   * @param opts.iconName {string}
	   * @param opts.customIcon {string}
	   * @param opts.iconUrl {string}
	   */
	  function IconComponent(opts, systemOpts) {
	    var _this;

	    if (opts === void 0) {
	      opts = {};
	    }

	    if (systemOpts === void 0) {
	      systemOpts = {};
	    }

	    _this = _Component.call(this, opts, systemOpts) || this;
	    /**
	     * name of an icon from the default icon set
	     * @type {string}
	     */

	    _this.iconName = opts.iconName || 'default';
	    /**
	     * the markup for a fully custom icon
	     * @type {*|null}
	     */

	    _this.customIcon = opts.customIcon || null;
	    /**
	     * the url to a custom image icon
	     * @type {null}
	     */

	    _this.iconUrl = opts.iconUrl || null;
	    return _this;
	  }
	  /**
	   * getter for the image pasted to handlebars
	   * @returns {string}
	   */


	  /**
	   * The template to render
	   * @returns {string}
	   * @override
	   */
	  IconComponent.defaultTemplateName = function defaultTemplateName(config) {
	    return 'icons/icon';
	  }
	  /**
	   * allowing duplicates
	   * @returns {boolean}
	   * @override
	   */
	  ;

	  IconComponent.areDuplicateNamesAllowed = function areDuplicateNamesAllowed() {
	    return true;
	  }
	  /**
	   * overrides default functionality to provide name and markup
	   * @param data
	   * @returns {IconComponent}
	   */
	  ;

	  var _proto = IconComponent.prototype;

	  _proto.setState = function setState(data) {
	    return _Component.prototype.setState.call(this, Object.assign(data, {
	      image: this.image,
	      name: this.iconName ? this.iconName : 'custom'
	    }));
	  };

	  createClass(IconComponent, [{
	    key: "image",
	    get: function get() {
	      if (this.customIcon) {
	        return this.customIcon;
	      }

	      if (this.iconUrl) {
	        return "<img src=\"" + this.iconUrl + "\" alt=\"\" class=\"Icon-image\">";
	      }

	      if (Icons[this.iconName]) {
	        return Icons[this.iconName];
	      }

	      return Icons["default"];
	    }
	  }], [{
	    key: "type",
	    get: function get() {
	      return 'IconComponent';
	    }
	  }]);

	  return IconComponent;
	}(Component);

	/** @module */
	var COMPONENT_MANAGER = new ComponentManager() // Core Component
	.register(Component) // Navigation Components
	.register(NavigationComponent) // Search Components
	.register(SearchComponent).register(FilterSearchComponent).register(AutoCompleteComponent).register(SpellCheckComponent).register(LocationBiasComponent) // Filter Components
	.register(FilterBoxComponent).register(FilterOptionsComponent).register(RangeFilterComponent).register(DateRangeFilterComponent).register(DynamicFiltersComponent).register(GeoLocationComponent) // Results Components
	.register(DirectAnswerComponent).register(UniversalResultsComponent).register(ResultsComponent).register(PaginationComponent).register(ResultsItemComponent).register(AccordionResultsComponent).register(LocationResultsItemComponent).register(EventResultsItemComponent).register(PeopleResultsItemComponent).register(MapComponent) // Questions Components
	.register(QuestionSubmissionComponent) // Helper Components
	.register(IconComponent);

	/** @module TemplateLoader */
	/**
	 * TemplateLoader exposes an interface for loading templates asynchronously
	 * from the server and registers them with the proper renderer.
	 * It also allows you to assign them synchronously.
	 */

	var TemplateLoader =
	/*#__PURE__*/
	function () {
	  function TemplateLoader(config) {
	    if (!TemplateLoader.setInstance(this)) {
	      return TemplateLoader.getInstance();
	    }
	    /**
	     * The template url to fetch compiled templates from
	     * @type {string}
	     * @private
	     */


	    this._templateUrl = config.templateUrl || COMPILED_TEMPLATES_URL;
	    this._templates = {};

	    this._onLoaded = function () {};

	    this._init();
	  }

	  TemplateLoader.setInstance = function setInstance(instance) {
	    if (!this.instance) {
	      this.instance = instance;
	      return true;
	    }

	    return false;
	  };

	  TemplateLoader.getInstance = function getInstance() {
	    return this.instance;
	  };

	  var _proto = TemplateLoader.prototype;

	  _proto._init = function _init() {
	    this.fetchTemplates();
	  };

	  _proto.fetchTemplates = function fetchTemplates() {
	    var _this = this;

	    // If we already have templates loaded, do nothing
	    var node = DOM.query('#yext-answers-templates');

	    if (node) {
	      return;
	    } // Inject a script to fetch the compiled templates,
	    // wrapping it a Promise for cleanliness


	    new Promise(function (resolve, reject) {
	      var script = DOM.createEl('script', {
	        id: 'yext-answers-templates',
	        onload: resolve,
	        onerror: reject,
	        async: true,
	        src: _this._templateUrl
	      });
	      DOM.append('body', script);
	    }).then(function (response) {
	      // TODO(billy) Implmenet error handling here (e.g. request could fail)
	      console.log('Templates loaded successfully!');
	    });
	    return this;
	  }
	  /**
	   * register the templates internally so that they can be later consumed
	   * (e.g. by components and renderers) with convienience.
	   *
	   * `fetchTemplates` will automatically call this, providing the compiled templates from the server.
	   */
	  ;

	  _proto.register = function register(templates) {
	    this._templates = templates; // Notify our consumers that the templates are here :)

	    this._onLoaded(this._templates);

	    return this;
	  };

	  _proto.onLoaded = function onLoaded(cb) {
	    this._onLoaded = cb;
	    return this;
	  };

	  _proto.get = function get(templateName) {
	    return this._templates[templateName];
	  }
	  /**
	   * @return The internal template collection
	   */
	  ;

	  _proto.getTemplates = function getTemplates() {
	    return this._templates;
	  };

	  return TemplateLoader;
	}();

	/** @module */

	/** @typedef {import('../services/errorreporterservice').default} ErrorReporterService */

	/**
	 * ErrorReporter is used for reporting errors to the console and API
	 *
	 * @implements {ErrorReporterService}
	 */

	var ErrorReporter =
	/*#__PURE__*/
	function () {
	  function ErrorReporter(config) {
	    var _this = this;

	    /**
	     * The apiKey to use for reporting
	     * @type {string}
	     */
	    this.apiKey = config.apiKey;
	    /**
	     * The experienceKey to use when reporting
	     * @type {string}
	     */

	    this.experienceKey = config.experienceKey;
	    /**
	     * The answers config version used for api requests
	     * @type {string|number}
	     */

	    this.experienceVersion = config.experienceVersion || 'config1.0';
	    /**
	     * If true, print entire error objects to the console for inspection
	     * @type {boolean}
	     */

	    this.printVerbose = config.printVerbose;
	    /**
	     * If true, report the error the server for logging and monitoring
	     * @type {boolean}
	     */

	    this.sendToServer = config.sendToServer; // Attach reporting listeners to window

	    window.addEventListener('error', function (e) {
	      return _this.report(e.error);
	    });
	    window.addEventListener('unhandledrejection', function (e) {
	      return _this.report(e.error);
	    });
	  }
	  /**
	   * report pretty prints the error to the console, optionally
	   * prints the entire error if `printVerbose` is true, and sends the
	   * error to the server to be logged if `sendToServer` is true
	   * @param {AnswersBaseError} err The error to be reported
	   * @returns {AnswersBaseError} The reported error
	   */


	  var _proto = ErrorReporter.prototype;

	  _proto.report = function report(err) {
	    if (!(err instanceof AnswersBaseError) || err.reported) {
	      return;
	    }

	    err.reported = true;
	    this.printError(err);

	    if (this.sendToServer) {
	      var request = new ApiRequest({
	        endpoint: '/v2/accounts/me/answers/errors',
	        apiKey: this.apiKey,
	        version: 20190301,
	        params: {
	          'error': err.toJson(),
	          'libVersion': LIB_VERSION,
	          'experienceVersion': this.experienceVersion,
	          'experienceKey': this.experienceKey
	        }
	      });
	      request.get()["catch"](console.err);
	    }

	    return err;
	  }
	  /**
	   * prints the given error to the browser console
	   * @param {AnswersBaseError} err The error to be printed
	   */
	  ;

	  _proto.printError = function printError(err) {
	    console.error(err.toString());

	    if (this.printVerbose) {
	      console.log(objectSpread({}, err));
	    }
	  };

	  return ErrorReporter;
	}();

	/** @typedef {import('../services/errorreporterservice').default} ErrorReporterService */

	/**
	 * @implements {ErrorReporterService}
	 */
	var ConsoleErrorReporter =
	/*#__PURE__*/
	function () {
	  function ConsoleErrorReporter() {}

	  var _proto = ConsoleErrorReporter.prototype;

	  /** @inheritdoc */
	  _proto.report = function report(err) {
	    console.error(err.toString());
	  };

	  return ConsoleErrorReporter;
	}();

	/** @module PersistentStorage */

	var PersistentStorage =
	/*#__PURE__*/
	function () {
	  function PersistentStorage(config) {
	    var _this = this;

	    if (config === void 0) {
	      config = {};
	    }

	    /**
	     * The current params model
	     * @type {SearchParams}
	     */
	    this._params = new SearchParams(window.location.search.substring(1));
	    /**
	     * The current history edit timer, if any
	     * @type {number}
	     */

	    this._historyTimer = null;
	    /**
	     * The list of listeners to every storage update
	     * @type {function[]}
	     */

	    this._updateListener = config.updateListener || function () {};
	    /**
	     * The list of listeners to storage resets
	     * @type {function[]}
	     */


	    this._resetListener = config.resetListener || function () {};

	    window.onpopstate = function () {
	      _this._params = new SearchParams(window.location.search.substring(1));

	      _this._callListener(_this._updateListener);

	      _this._callListener(_this._resetListener);
	    };
	  }
	  /**
	   * Insert the given key/value pair into storage
	   * @param {string} key The key to insert the data in
	   * @param {*} data The data to insert
	   */


	  var _proto = PersistentStorage.prototype;

	  _proto.set = function set(key, data) {
	    if (typeof key !== 'string') {
	      throw new AnswersStorageError('Storage data key must be a string', key, data);
	    }

	    var newData = data;

	    if (typeof data !== 'string') {
	      newData = JSON.stringify(data);
	    }

	    this._params.set(key, newData);

	    this._updateHistory();
	  }
	  /**
	   * Delete the given key from storage
	   * @param {string} key The key to delete
	   */
	  ;

	  _proto["delete"] = function _delete(key) {
	    this._params["delete"](key);

	    this._updateHistory();
	  };

	  _proto._updateHistory = function _updateHistory() {
	    var _this2 = this;

	    if (this._historyTimer) {
	      clearTimeout(this._historyTimer);
	    } // batch update calls across components to avoid updating the url too much


	    this._historyTimer = setTimeout(function () {
	      _this2._historyTimer = null;
	      window.history.pushState(null, null, "?" + _this2._params.toString());

	      _this2._callListener(_this2._updateListener);
	    }, 100);
	  }
	  /**
	   * Invoke the given list of callbacks with the current storage data
	   * @param {function[]} listeners The callbacks to invoke
	   * @private
	   */
	  ;

	  _proto._callListener = function _callListener(listener) {
	    listener(this.getAll(), this._params.toString());
	  }
	  /**
	   * Get all the key/value pairs in storage
	   */
	  ;

	  _proto.getAll = function getAll() {
	    var allParams = {};

	    for (var _iterator = this._params.entries(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var _ref2 = _ref,
	          key = _ref2[0],
	          val = _ref2[1];
	      allParams[key] = val;
	    }

	    return allParams;
	  };

	  return PersistentStorage;
	}();

	/** @module SearchConfig */

	var SearchConfig =
	/*#__PURE__*/
	function () {
	  function SearchConfig(config) {
	    if (config === void 0) {
	      config = {};
	    }

	    /**
	     * The max results per search.
	     * Also defines the number of results per page, if pagination is enabled
	     * @type {number}
	     */
	    this.limit = config.limit || 20;
	    /**
	     * The vertical key to use for all searches
	     * @type {string}
	     */

	    this.verticalKey = config.verticalKey || null;
	    /**
	     * @type {string}
	     */

	    this.defaultInitialSearch = config.defaultInitialSearch;
	    this.validate();
	    Object.freeze(this);
	  }

	  var _proto = SearchConfig.prototype;

	  _proto.validate = function validate() {
	    if (typeof this.limit !== 'number' || this.limit < 1 || this.limit > 50) {
	      throw new AnswersConfigError('Search Limit must be between 1 and 50', 'SearchConfig');
	    }
	  };

	  return SearchConfig;
	}();

	/** @module AutoCompleteData */

	var AutoCompleteData =
	/*#__PURE__*/
	function () {
	  function AutoCompleteData(data) {
	    if (data === void 0) {
	      data = {};
	    }

	    this.sections = data.sections || [];
	    this.queryId = data.queryId || '';
	    Object.freeze(this);
	  }

	  AutoCompleteData.from = function from(response) {
	    var sections;

	    if (response.sections) {
	      sections = response.sections.map(function (s) {
	        return {
	          label: s.label,
	          results: s.results.map(function (r) {
	            return new AutoCompleteResult(r);
	          })
	        };
	      });
	    } else {
	      sections = [{
	        results: response.results.map(function (r) {
	          return new AutoCompleteResult(r);
	        })
	      }];
	    }

	    return new AutoCompleteData({
	      sections: sections,
	      queryId: response.queryId
	    });
	  };

	  return AutoCompleteData;
	}();
	var AutoCompleteResult = function AutoCompleteResult(data) {
	  if (data === void 0) {
	    data = {};
	  }

	  this.filter = data.filter || {};
	  this.highlightedValue = new HighlightedValue(data).getInverted();
	  this.key = data.key || '';
	  this.matchedSubstrings = data.matchedSubstrings || [];
	  this.value = data.value || '';
	  this.shortValue = data.shortValue || this.value;
	  Object.freeze(this);
	};

	/** @module AutoCompleteDataTransformer */
	/**
	 * A Data Transformer that takes the response object from a AutoComplete request
	 * And transforms in to a front-end oriented data structure that our
	 * component library and core storage understand.
	 *
	 * TODO(billy) Create our own front-end data models
	 */

	var AutoCompleteDataTransformer =
	/*#__PURE__*/
	function () {
	  function AutoCompleteDataTransformer() {}

	  AutoCompleteDataTransformer.clean = function clean(moduleId, data) {
	    var _ref;

	    if (data.sections && data.sections.length === 0) {
	      delete data.sections;
	    }

	    if (data.sections && data.sections.length === 1 && data.sections[0].results.length === 0) {
	      delete data.sections;
	    }

	    return _ref = {}, _ref[moduleId] = data, _ref;
	  };

	  AutoCompleteDataTransformer.universal = function universal(response) {
	    return AutoCompleteData.from(response);
	  };

	  AutoCompleteDataTransformer.filter = function filter(response) {
	    return AutoCompleteData.from(response);
	  };

	  AutoCompleteDataTransformer.vertical = function vertical(response) {
	    return AutoCompleteData.from(response);
	  };

	  return AutoCompleteDataTransformer;
	}();

	/** @module AutoCompleteApi */
	/** @typedef {import('./autocompleteservice').default} AutoCompleteService */

	/**
	 * AutoCompleteApi exposes an interface for network related matters
	 * for all the autocomplete endpoints.
	 *
	 * @implements {AutoCompleteService}
	 */

	var AutoCompleteApi =
	/*#__PURE__*/
	function () {
	  function AutoCompleteApi(config) {
	    if (config === void 0) {
	      config = {};
	    }

	    /**
	     * The API Key to use for the request
	     * @type {string}
	     * @private
	     */
	    if (!config.apiKey) {
	      throw new AnswersBasicError('Api Key is required', 'AutoComplete');
	    }

	    this._apiKey = config.apiKey;
	    /**
	     * The Answers Key to use for the request
	     * @type {string}
	     * @private
	     */

	    if (!config.experienceKey) {
	      throw new AnswersBasicError('Answers Key is required', 'AutoComplete');
	    }

	    this._experienceKey = config.experienceKey;
	    /**
	     * The version of the API to make a request to
	     * @type {string}
	     * @private
	     */

	    this._version = config.version || 20190101 || 20190301;
	    /**
	     * The answers config version to use for all requests
	     * @type {string}
	     * @private
	     */

	    this._experienceVersion = config.experienceVersion;
	    /**
	     * The locale to use for the request
	     * @type {string}
	     * @private
	     */

	    if (!config.locale) {
	      throw new AnswersBasicError('Locale is required', 'AutoComplete');
	    }

	    this._locale = config.locale;
	  }
	  /** @inheritdoc */


	  var _proto = AutoCompleteApi.prototype;

	  _proto.queryFilter = function queryFilter(input, config) {
	    var request = new ApiRequest({
	      endpoint: '/v2/accounts/me/answers/filtersearch',
	      apiKey: this._apiKey,
	      version: this._version,
	      params: {
	        'input': input,
	        'experienceKey': this._experienceKey,
	        'version': this._experienceVersion,
	        'verticalKey': config.verticalKey,
	        'inputKey': config.barKey,
	        'locale': this._locale,
	        'search_parameters': JSON.stringify(config.searchParameters)
	      }
	    });
	    return request.get().then(function (response) {
	      return response.json();
	    }).then(function (response) {
	      return AutoCompleteDataTransformer.filter(response.response, config.barKey);
	    })["catch"](function (error) {
	      throw new AnswersEndpointError('Filter search request failed', 'AutoComplete', error);
	    });
	  }
	  /** @inheritdoc */
	  ;

	  _proto.queryVertical = function queryVertical(input, verticalKey, barKey) {
	    var request = new ApiRequest({
	      endpoint: '/v2/accounts/me/answers/vertical/autocomplete',
	      apiKey: this._apiKey,
	      version: this._version,
	      params: {
	        'input': input,
	        'experienceKey': this._experienceKey,
	        'version': this._experienceVersion,
	        'verticalKey': verticalKey,
	        'barKey': barKey,
	        'locale': this._locale
	      }
	    });
	    return request.get().then(function (response) {
	      return response.json();
	    }).then(function (response) {
	      return AutoCompleteDataTransformer.vertical(response.response, request._params.barKey);
	    })["catch"](function (error) {
	      throw new AnswersEndpointError('Vertical search request failed', 'AutoComplete', error);
	    });
	  }
	  /** @inheritdoc */
	  ;

	  _proto.queryUniversal = function queryUniversal(queryString) {
	    var request = new ApiRequest({
	      endpoint: '/v2/accounts/me/answers/autocomplete',
	      apiKey: this._apiKey,
	      version: this._version,
	      params: {
	        'input': queryString,
	        'experienceKey': this._experienceKey,
	        'version': this._experienceVersion,
	        'locale': this._locale
	      }
	    });
	    return request.get(queryString).then(function (response) {
	      return response.json();
	    }).then(function (response) {
	      return AutoCompleteDataTransformer.universal(response.response);
	    })["catch"](function (error) {
	      throw new AnswersEndpointError('Universal search request failed', 'AutoComplete', error);
	    });
	  };

	  return AutoCompleteApi;
	}();

	/** @typedef {import('../services/autocompleteservice').default} AutoCompleteService */

	var universalOptions = ['what is yext', 'who is the ceo of yext'];
	var verticalOptions = ['near me', 'in new york', 'available now'];
	/**
	 * MockAutoCompleteService serves autocomplete queries with mock data
	 *
	 * @implements {AutoCompleteService}
	 */

	var MockAutoCompleteService =
	/*#__PURE__*/
	function () {
	  function MockAutoCompleteService() {}

	  var _proto = MockAutoCompleteService.prototype;

	  /** @inheritdoc */
	  _proto.queryFilter = function queryFilter(input, config) {
	    // TODO(amullings): Simulate filter search, with sections
	    return emptyResults();
	  }
	  /** @inheritdoc */
	  ;

	  _proto.queryVertical = function queryVertical(input, verticalKey) {
	    return filterOptions(input, verticalOptions.map(function (opt) {
	      return verticalKey + " " + opt;
	    }).concat(universalOptions));
	  }
	  /** @inheritdoc */
	  ;

	  _proto.queryUniversal = function queryUniversal(input) {
	    return filterOptions(input, universalOptions);
	  };

	  return MockAutoCompleteService;
	}();

	function filterOptions(input, options) {
	  if (input.length === 0) {
	    return emptyResults();
	  }

	  var lowercase = input.toLowerCase();
	  var results = options.filter(function (opt) {
	    return opt.includes(lowercase);
	  }).map(function (opt) {
	    return new AutoCompleteResult({
	      value: opt,
	      matchedSubstrings: [{
	        offset: opt.indexOf(lowercase),
	        length: lowercase.length
	      }]
	    });
	  });
	  return Promise.resolve(new AutoCompleteData({
	    sections: [{
	      results: results
	    }],
	    queryId: randomString()
	  }));
	}
	/**
	 * @returns {Promise<AutoCompleteData>}
	 */


	function emptyResults() {
	  return Promise.resolve(new AutoCompleteData({
	    sections: [{}],
	    queryId: randomString()
	  }));
	}
	/**
	 * @returns {string}
	 */


	function randomString() {
	  return Math.random().toString(36).substring(2);
	}

	/** @module QuestionAnswerApi */
	/** @typedef {import('./questionanswerservice').default} QuestionAnswerService */

	/**
	 * QuestionAnswerApi submits questions via the Q&A REST API
	 *
	 * @implements {QuestionAnswerService}
	 */

	var QuestionAnswerApi =
	/*#__PURE__*/
	function () {
	  function QuestionAnswerApi(config) {
	    if (config === void 0) {
	      config = {};
	    }

	    /**
	     * The API Key to use for the request
	     * @type {string}
	     * @private
	     */
	    if (!config.apiKey) {
	      throw new AnswersBasicError('Api Key is required', 'QuestionAnswerApi');
	    }

	    this._apiKey = config.apiKey;
	  }
	  /** @inheritdoc */


	  var _proto = QuestionAnswerApi.prototype;

	  _proto.submitQuestion = function submitQuestion(question) {
	    var request = new ApiRequest({
	      baseUrl: API_BASE_URL,
	      endpoint: '/v2/accounts/me/questions',
	      apiKey: this._apiKey,
	      params: {
	        'entityId': question.entityId,
	        'site': question.site,
	        'name': question.name,
	        'email': question.email,
	        'questionText': question.questionText,
	        'questionDescription': question.questionDescription,
	        'questionLanguage': question.questionLanguage
	      }
	    });
	    return request.post({
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json'
	      }
	    }).then(function (response) {
	      return response.json();
	    })["catch"](function (error) {
	      throw new AnswersEndpointError('Question submit failed', 'QuestionAnswerApi', error);
	    });
	  };

	  return QuestionAnswerApi;
	}();

	/** @module MockQuestionAnswerService */

	/** @typedef {import('../services/questionanswerservice').default} QuestionAnswerService */

	/**
	 * @implements {QuestionAnswerService}
	 */
	var MockQuestionAnswerService =
	/*#__PURE__*/
	function () {
	  function MockQuestionAnswerService() {}

	  var _proto = MockQuestionAnswerService.prototype;

	  /** @inheritdoc */
	  _proto.submitQuestion = function submitQuestion(question) {
	    // TODO(amullings): Make actual response object once we're using it for
	    // something
	    return Promise.resolve({});
	  };

	  return MockQuestionAnswerService;
	}();

	/* global fetch */

	/** @typedef {import('../models/section').default} Section */

	/** @typedef {import('../services/searchservice').default} SearchService */

	/**
	 * @typedef {Object} ResultData
	 * @property {Object} data
	 * @property {string } htmlTitle
	 */

	/**
	 * @callback ResultsModifier
	 * @param {ResultData[]} results
	 * @returns {ResultData[]}
	 */

	/**
	 * @callback MockDataConsumer
	 * @param {Section[]} sections
	 * @returns {Promise<Object>}
	 */
	var ARBITRARY_BUSINESS_ID = 919871;
	/**
	 * @implements {SearchService}
	 */

	var MockSearchService =
	/*#__PURE__*/
	function () {
	  function MockSearchService() {
	    /**
	     * @type {Promise<string>}
	     * @private
	     */
	    this._getMockDataJson = fetch('https://assets.sitescdn.net/answers/testdata/search/mockdata_v1.json').then(function (resp) {
	      return resp.text();
	    })["catch"](console.error);
	  }
	  /** @inheritdoc */


	  var _proto = MockSearchService.prototype;

	  _proto.verticalSearch = function verticalSearch(verticalKey, _ref) {
	    var input = _ref.input,
	        filter = _ref.filter,
	        facetFilter = _ref.facetFilter,
	        limit = _ref.limit,
	        offset = _ref.offset,
	        id = _ref.id,
	        geolocation = _ref.geolocation,
	        isDynamicFiltersEnabled = _ref.isDynamicFiltersEnabled,
	        skipSpellCheck = _ref.skipSpellCheck,
	        queryTrigger = _ref.queryTrigger;
	    return this.useMockData(function (sections) {
	      if (input === '') {
	        return delayedResponse(constructVerticalResponse({
	          results: [],
	          appliedQueryFilters: []
	        }));
	      } // Either find a section with matching ID, or pick one at random


	      var section = sections.find(function (verticalModule) {
	        return verticalKey === verticalModule['verticalConfigId'];
	      });

	      if (section == null) {
	        section = sections[Math.floor(Math.random() * sections.length)];
	      }

	      modifyResults(section, getResultsFilterer(input));

	      if (offset != null && limit != null) {
	        modifyResults(section, function limit(results) {
	          return results.slice(offset, offset + limit);
	        });
	      }

	      var resp = constructVerticalResponse(section);
	      return delayedResponse(resp);
	    });
	  }
	  /** @inheritdoc */
	  ;

	  _proto.universalSearch = function universalSearch(queryString, params) {
	    return this.useMockData(function (sections) {
	      if (queryString === '') {
	        return delayedResponse(constructUniversalResponse([]));
	      }

	      sections.forEach(function (section) {
	        modifyResults(section, getResultsFilterer(queryString));
	      });
	      sections = sections.filter(function (section) {
	        return section.results.length > 0;
	      });
	      var resp = constructUniversalResponse(sections);
	      return delayedResponse(resp);
	    });
	  }
	  /**
	   * @param {MockDataConsumer} consumer
	   * @returns {Promise<Object>}
	   * @private
	   */
	  ;

	  _proto.useMockData = function useMockData(consumer) {
	    return this._getMockDataJson.then(JSON.parse).then(consumer);
	  };

	  return MockSearchService;
	}();

	function getResultsFilterer(queryString) {
	  return function (results) {
	    return results.filter(function (result) {
	      if (result.htmlTitle && result.htmlTitle.toLowerCase().includes(queryString)) {
	        return true;
	      }

	      for (var prop in result.data) {
	        var val = result.data[prop];

	        if (typeof val === 'string' && val.toLowerCase().includes(queryString)) {
	          return true;
	        }
	      }

	      return false;
	    });
	  };
	}
	/**
	 * @param {Section} section
	 * @param {ResultsModifier} modifyFn
	 */


	function modifyResults(section, modifyFn) {
	  section.results = modifyFn(section.results);
	}
	/**
	 * @param {Section[]} sections A list of mock section data
	 * @returns {Object} A mock AnswersApi response
	 */


	function constructUniversalResponse(sections) {
	  // TODO(amullings): spellcheck, geo, filters
	  // TODO(amullings): Fake encodedState once the SDK uses it
	  sections = sections.map(fillSectionFields);
	  return {
	    meta: {
	      uuid: uuidV4(),
	      errors: []
	    },
	    response: {
	      businessId: ARBITRARY_BUSINESS_ID,
	      modules: sections,
	      failedVerticals: [],
	      queryId: uuidV4(),
	      searchIntents: []
	    }
	  };
	}
	/**
	 * @param {Section} section A mock section data
	 * @returns {Object} A mock AnswersApi response
	 */


	function constructVerticalResponse(section) {
	  // TODO(amullings): spellcheck, geo, filters
	  // TODO(amullings): Fake encodedState once the SDK uses it
	  section = fillSectionFields(section);
	  return {
	    meta: {
	      uuid: uuidV4(),
	      errors: []
	    },
	    response: Object.assign(section, {
	      businessId: ARBITRARY_BUSINESS_ID,
	      queryId: uuidV4(),
	      searchIntents: []
	    })
	  };
	}
	/**
	 * @param {Section}
	 * @returns {Section}
	 */


	function fillSectionFields(section) {
	  return {
	    verticalConfigId: section.verticalConfigId,
	    resultsCount: section.results.length,
	    encodedState: '',
	    results: section.results,
	    appliedQueryFilters: section.appliedQueryFilters,
	    queryDurationMillis: randomInt(50, 1000),
	    facets: section.facets,
	    source: section.source
	  };
	}
	/**
	 * @param {Object} resp
	 * @returns {Promise<Object>}
	 */


	function delayedResponse(resp) {
	  return new Promise(function (resolve) {
	    setTimeout(function () {
	      resolve(resp);
	    }, randomInt(250, 1000));
	  });
	}
	/**
	 * Code-golf-y but legit basic UUID v4 implementation. Not cryptographically secure.
	 * From https://gist.github.com/jed/982883
	 * @returns {string} A v4-compliant UUID
	 */


	function uuidV4() {
	  return function b(a) {
	    return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
	  }();
	}
	/**
	 * @param {number} min inclusive
	 * @param {number} max exclusive
	 * @returns {number} A random integer in the specified range
	 */


	function randomInt(min, max) {
	  return Math.floor(Math.random() * (max - min) + min);
	}

	/* eslint-env browser */

	/* global ActiveXObject */

	if (!Element.prototype.matches) {
	  // Element.matches polyfill from MDN
	  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	} // Event constructor polyfill


	(function () {
	  if (typeof window.CustomEvent === 'function') {
	    return false;
	  }

	  function CustomEvent(event, params) {
	    params = params || {
	      bubbles: false,
	      cancelable: false,
	      detail: null
	    };
	    var evt = document.createEvent('CustomEvent');
	    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	    return evt;
	  }

	  window.CustomEvent = CustomEvent;
	  window.Event = CustomEvent;
	})(); // Element.closest polyfill
	// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill


	(function () {
	  if (!Element.prototype.matches) {
	    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	  }

	  if (!Element.prototype.closest) {
	    Element.prototype.closest = function (s) {
	      var el = this;

	      do {
	        if (el.matches(s)) return el;
	        el = el.parentElement || el.parentNode;
	      } while (el !== null && el.nodeType === 1);

	      return null;
	    };
	  }
	})(); // ParentNode.prepend polyfill
	// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend#Polyfill


	(function () {
	  (function (arr) {
	    arr.forEach(function (item) {
	      if (item.hasOwnProperty('prepend')) {
	        return;
	      }

	      Object.defineProperty(item, 'prepend', {
	        configurable: true,
	        enumerable: true,
	        writable: true,
	        value: function prepend() {
	          var argArr = Array.prototype.slice.call(arguments);
	          var docFrag = document.createDocumentFragment();
	          argArr.forEach(function (argItem) {
	            var isNode = argItem instanceof Node;
	            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
	          });
	          this.insertBefore(docFrag, this.firstChild);
	        }
	      });
	    });
	  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);
	})(); // Navigator.sendBeacon polyfill
	// Combination of the compact Financial Times polyfill:
	// https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/navigator/sendBeacon/polyfill.js
	// with the async-by-default behavior of Miguel Mota's polyfill:
	// https://github.com/miguelmota/Navigator.sendBeacon/blob/master/sendbeacon.js


	(function () {
	  if (window.navigator && window.navigator.sendBeacon) {
	    return;
	  }

	  if (!('navigator' in window)) window.navigator = {};

	  window.navigator.sendBeacon = function sendBeacon(url, data) {
	    var event = window.event && window.event.type;
	    var sync = event === 'unload' || event === 'beforeunload';
	    var xhr = 'XMLHttpRequest' in window ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	    xhr.open('POST', url, !sync);
	    xhr.setRequestHeader('Accept', '*/*');

	    if (typeof data === 'string') {
	      xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
	    } else if (Object.prototype.toString.call(data) === '[object Blob]') {
	      if (data.type) {
	        xhr.setRequestHeader('Content-Type', data.type);
	      }
	    }

	    xhr.send(data);
	    return true;
	  };
	})();
	/** @typedef {import('./core/services/searchservice').default} SearchService */

	/** @typedef {import('./core/services/autocompleteservice').default} AutoCompleteService */

	/** @typedef {import('./core/services/questionanswerservice').default} QuestionAnswerService */

	/** @typedef {import('./core/services/errorreporterservice').default} ErrorReporterService */

	/** @typedef {import('./core/services/analyticsreporterservice').default} AnalyticsReporterService */

	/**
	 * @typedef Services
	 * @property {SearchService} searchService
	 * @property {AutoCompleteService} autoCompleteService
	 * @property {QuestionAnswerService} questionAnswerService
	 * @property {ErrorReporterService} errorReporterService
	 */

	var DEFAULTS = {
	  locale: 'en'
	};
	/**
	 * The main Answers interface
	 */

	var Answers =
	/*#__PURE__*/
	function () {
	  function Answers() {
	    if (!Answers.setInstance(this)) {
	      return Answers.getInstance();
	    }
	    /**
	     * A reference to the Component base class for custom
	     * components to extend
	     */


	    this.Component = Component;
	    /**
	     * A reference to the AnalyticsEvent base class for reporting
	     * custom analytics
	     */

	    this.AnalyticsEvent = AnalyticsEvent;
	    /**
	     * A reference of the renderer to use for the components
	     * This is provided during initialization.
	     * @type {Renderer}
	     */

	    this.renderer = new Renderers.Handlebars();
	    /**
	     * A local reference to the component manager
	     * @type {ComponentManager}
	     */

	    this.components = COMPONENT_MANAGER;
	    /**
	     * A local reference to the core api
	     * @type {Core}
	     */

	    this.core = null;
	    /**
	     * A callback function to invoke once the library is ready.
	     * Typically fired after templates are fetched from server for rendering.
	     */

	    this._onReady = function () {};
	    /**
	     * @type {boolean}
	     * @private
	     */


	    this._eligibleForAnalytics = false;
	    /**
	     * @type {Services}
	     * @private
	     */

	    this._services = null;
	    /**
	     * @type {AnalyticsReporterService}
	     * @private
	     */

	    this._analyticsReporterService = null;
	  }

	  Answers.setInstance = function setInstance(instance) {
	    if (!this.instance) {
	      this.instance = instance;
	      return true;
	    }

	    return false;
	  };

	  Answers.getInstance = function getInstance() {
	    return this.instance;
	  };

	  var _proto = Answers.prototype;

	  _proto.init = function init(config) {
	    var _this = this;

	    config = Object.assign({}, DEFAULTS, config);

	    if (typeof config.apiKey !== 'string') {
	      throw new Error('Missing required `apiKey`. Type must be {string}');
	    }

	    if (typeof config.experienceKey !== 'string') {
	      throw new Error('Missing required `experienceKey`. Type must be {string}');
	    }

	    config.search = new SearchConfig(config.search);
	    var globalStorage = new GlobalStorage();
	    var persistentStorage = new PersistentStorage({
	      updateListener: config.onStateChange,
	      resetListener: function resetListener(data) {
	        return globalStorage.setAll(data);
	      }
	    });
	    globalStorage.setAll(persistentStorage.getAll());
	    globalStorage.set(StorageKeys.SEARCH_CONFIG, config.search);
	    var sessionTrackingEnabled = true;

	    if (typeof config.sessionTrackingEnabled === 'boolean') {
	      sessionTrackingEnabled = config.sessionTrackingEnabled;
	    }

	    globalStorage.set(StorageKeys.SESSIONS_OPT_IN, sessionTrackingEnabled);
	    this._services = config.mock ? getMockServices() : getServices(config);
	    this.core = new Core({
	      apiKey: config.apiKey,
	      globalStorage: globalStorage,
	      persistentStorage: persistentStorage,
	      experienceKey: config.experienceKey,
	      fieldFormatters: config.fieldFormatters,
	      experienceVersion: config.experienceVersion,
	      locale: config.locale,
	      searchService: this._services.searchService,
	      autoCompleteService: this._services.autoCompleteService,
	      questionAnswerService: this._services.questionAnswerService
	    });

	    if (config.onStateChange && typeof config.onStateChange === 'function') {
	      config.onStateChange(persistentStorage.getAll(), window.location.search.substr(1));
	    }

	    this.components.setCore(this.core).setRenderer(this.renderer);
	    this._eligibleForAnalytics = config.businessId != null;

	    if (this._eligibleForAnalytics) {
	      // TODO(amullings): Initialize with other services
	      var reporter = config.mock ? new NoopAnalyticsReporter() : new AnalyticsReporter(this.core, config.experienceKey, config.experienceVersion, config.businessId, config.analyticsOptions);
	      this._analyticsReporterService = reporter;
	      this.components.setAnalyticsReporter(reporter);
	      initScrollListener(reporter);
	    }

	    this._setDefaultInitialSearch(config.search);

	    this._onReady = config.onReady || function () {};

	    if (config.useTemplates === false || config.templateBundle) {
	      if (config.templateBundle) {
	        this.renderer.init(config.templateBundle);
	      }

	      this._onReady();

	      return this;
	    } // Templates are currently downloaded separately from the CORE and UI bundle.
	    // Future enhancement is to ship the components with templates in a separate bundle.


	    this.templates = new TemplateLoader({
	      templateUrl: config.templateUrl
	    }).onLoaded(function (templates) {
	      _this.renderer.init(templates);

	      _this._onReady();
	    });
	    return this;
	  };

	  _proto.domReady = function domReady(cb) {
	    DOM.onReady(cb);
	  };

	  _proto.onReady = function onReady(cb) {
	    this._onReady = cb;
	    return this;
	  }
	  /**
	   * Register a custom component type so it can be created via
	   * addComponent and used as a child component
	   * @param {Component} componentClass
	   */
	  ;

	  _proto.registerComponentType = function registerComponentType(componentClass) {
	    this.components.register(componentClass);
	  };

	  _proto.addComponent = function addComponent(type, opts) {
	    if (typeof opts === 'string') {
	      opts = {
	        container: opts
	      };
	    }

	    try {
	      this.components.create(type, opts).mount();
	    } catch (e) {
	      throw new AnswersComponentError('Failed to add component', type, e);
	    }

	    return this;
	  }
	  /**
	   * Remove the component - and all of its children - with the given name
	   * @param {string} name The name of the component to remove
	   */
	  ;

	  _proto.removeComponent = function removeComponent(name) {
	    this.components.removeByName(name);
	  };

	  _proto.createComponent = function createComponent(opts) {
	    return this.components.create('Component', opts).mount();
	  };

	  _proto.registerHelper = function registerHelper(name, cb) {
	    this.renderer.registerHelper(name, cb);
	    return this;
	  }
	  /**
	   * Opt in or out of convertion tracking analytics
	   * @param {boolean} optIn
	   */
	  ;

	  _proto.setConversionsOptIn = function setConversionsOptIn(optIn) {
	    if (this._eligibleForAnalytics) {
	      this._analyticsReporterService.setConversionTrackingEnabled(optIn);
	    }
	  }
	  /**
	   * Opt in or out of session cookies
	   * @param {boolean} optIn
	   */
	  ;

	  _proto.setSessionsOptIn = function setSessionsOptIn(optIn) {
	    this.core.globalStorage.set(StorageKeys.SESSIONS_OPT_IN, optIn);
	  }
	  /**
	   * Sets a search query on initialization for vertical searchers that have a
	   * defaultInitialSearch provided, if the user hasn't already provided their
	   * own via URL param.
	   * @param {SearchConfig} searchConfig
	   * @private
	   */
	  ;

	  _proto._setDefaultInitialSearch = function _setDefaultInitialSearch(searchConfig) {
	    if (searchConfig.defaultInitialSearch == null || !searchConfig.verticalKey) {
	      return;
	    }

	    var prepopulatedQuery = this.core.globalStorage.getState(StorageKeys.QUERY);

	    if (prepopulatedQuery != null) {
	      return;
	    }

	    this.core.globalStorage.set('queryTrigger', 'initialize');
	    this.core.setQuery(searchConfig.defaultInitialSearch);
	  };

	  return Answers;
	}();
	/**
	 * @param {Object} config
	 * @returns {Services}
	 */


	function getServices(config) {
	  return {
	    searchService: new SearchApi({
	      apiKey: config.apiKey,
	      experienceKey: config.experienceKey,
	      experienceVersion: config.experienceVersion,
	      locale: config.locale
	    }),
	    autoCompleteService: new AutoCompleteApi({
	      apiKey: config.apiKey,
	      experienceKey: config.experienceKey,
	      experienceVersion: config.experienceVersion,
	      locale: config.locale
	    }),
	    questionAnswerService: new QuestionAnswerApi({
	      apiKey: config.apiKey
	    }),
	    errorReporterService: new ErrorReporter({
	      apiKey: config.apiKey,
	      experienceKey: config.experienceKey,
	      experienceVersion: config.experienceVersion,
	      printVerbose: config.debug,
	      sendToServer: !config.suppressErrorReports
	    })
	  };
	}
	/**
	 * @returns {Services}
	 */


	function getMockServices() {
	  return {
	    searchService: new MockSearchService(),
	    autoCompleteService: new MockAutoCompleteService(),
	    questionAnswerService: new MockQuestionAnswerService(),
	    errorReporterService: new ConsoleErrorReporter()
	  };
	}
	/**
	 * Initialize the scroll event listener to send analytics events
	 * when the user scrolls to the bottom. Debounces scroll events so
	 * they are processed after the user stops scrolling
	 */


	function initScrollListener(reporter) {
	  var DEBOUNCE_TIME = 100;
	  var timeout = null;

	  var sendEvent = function sendEvent() {
	    if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
	      var event = new AnalyticsEvent('SCROLL_TO_BOTTOM_OF_PAGE');
	      reporter.report(event);
	    }
	  };

	  document.addEventListener('scroll', function () {
	    clearTimeout(timeout);
	    timeout = setTimeout(sendEvent, DEBOUNCE_TIME);
	  });
	}

	var ANSWERS = new Answers();

	return ANSWERS;

}());

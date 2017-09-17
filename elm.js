
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

var _elm_lang$core$Native_Bitwise = function() {

return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeftBy: F2(function(offset, a) { return a << offset; }),
	shiftRightBy: F2(function(offset, a) { return a >> offset; }),
	shiftRightZfBy: F2(function(offset, a) { return a >>> offset; })
};

}();

var _elm_lang$core$Bitwise$shiftRightZfBy = _elm_lang$core$Native_Bitwise.shiftRightZfBy;
var _elm_lang$core$Bitwise$shiftRightBy = _elm_lang$core$Native_Bitwise.shiftRightBy;
var _elm_lang$core$Bitwise$shiftLeftBy = _elm_lang$core$Native_Bitwise.shiftLeftBy;
var _elm_lang$core$Bitwise$complement = _elm_lang$core$Native_Bitwise.complement;
var _elm_lang$core$Bitwise$xor = _elm_lang$core$Native_Bitwise.xor;
var _elm_lang$core$Bitwise$or = _elm_lang$core$Native_Bitwise.or;
var _elm_lang$core$Bitwise$and = _elm_lang$core$Native_Bitwise.and;

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _Skinney$murmur3$Murmur3$mur = F2(
	function (c, h) {
		return 4294967295 & (((h & 65535) * c) + ((65535 & ((h >>> 16) * c)) << 16));
	});
var _Skinney$murmur3$Murmur3$step = function (acc) {
	var h1 = A2(_Skinney$murmur3$Murmur3$mur, 5, (acc >>> 19) | (acc << 13));
	return ((h1 & 65535) + 27492) + ((65535 & ((h1 >>> 16) + 58964)) << 16);
};
var _Skinney$murmur3$Murmur3$mix = F2(
	function (h1, h2) {
		var k1 = A2(_Skinney$murmur3$Murmur3$mur, 3432918353, h2);
		return h1 ^ A2(_Skinney$murmur3$Murmur3$mur, 461845907, (k1 >>> 17) | (k1 << 15));
	});
var _Skinney$murmur3$Murmur3$finalize = F2(
	function (strLength, _p0) {
		var _p1 = _p0;
		var _p3 = _p1._1;
		var _p2 = _p1._2;
		var acc = (!_elm_lang$core$Native_Utils.eq(_p2, 0)) ? A2(_Skinney$murmur3$Murmur3$mix, _p3, _p2) : _p3;
		var h1 = acc ^ strLength;
		var h2 = A2(_Skinney$murmur3$Murmur3$mur, 2246822507, h1 ^ (h1 >>> 16));
		var h3 = A2(_Skinney$murmur3$Murmur3$mur, 3266489909, h2 ^ (h2 >>> 13));
		return (h3 ^ (h3 >>> 16)) >>> 0;
	});
var _Skinney$murmur3$Murmur3$hashFold = F2(
	function (c, _p4) {
		var _p5 = _p4;
		var _p7 = _p5._0;
		var _p6 = _p5._1;
		var res = _p5._2 | ((255 & _elm_lang$core$Char$toCode(c)) << _p7);
		if (_elm_lang$core$Native_Utils.cmp(_p7, 24) > -1) {
			var newHash = _Skinney$murmur3$Murmur3$step(
				A2(_Skinney$murmur3$Murmur3$mix, _p6, res));
			return {ctor: '_Tuple3', _0: 0, _1: newHash, _2: 0};
		} else {
			return {ctor: '_Tuple3', _0: _p7 + 8, _1: _p6, _2: res};
		}
	});
var _Skinney$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return A2(
			_Skinney$murmur3$Murmur3$finalize,
			_elm_lang$core$String$length(str),
			A3(
				_elm_lang$core$String$foldl,
				_Skinney$murmur3$Murmur3$hashFold,
				{ctor: '_Tuple3', _0: 0, _1: seed, _2: 0},
				str));
	});

//import Result //

var _elm_lang$core$Native_Date = function() {

function fromString(str)
{
	var date = new Date(str);
	return isNaN(date.getTime())
		? _elm_lang$core$Result$Err('Unable to parse \'' + str + '\' as a date. Dates must be in the ISO 8601 format.')
		: _elm_lang$core$Result$Ok(date);
}

var dayTable = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthTable =
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


return {
	fromString: fromString,
	year: function(d) { return d.getFullYear(); },
	month: function(d) { return { ctor: monthTable[d.getMonth()] }; },
	day: function(d) { return d.getDate(); },
	hour: function(d) { return d.getHours(); },
	minute: function(d) { return d.getMinutes(); },
	second: function(d) { return d.getSeconds(); },
	millisecond: function(d) { return d.getMilliseconds(); },
	toTime: function(d) { return d.getTime(); },
	fromTime: function(t) { return new Date(t); },
	dayOfWeek: function(d) { return { ctor: dayTable[d.getDay()] }; }
};

}();
var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Date$millisecond = _elm_lang$core$Native_Date.millisecond;
var _elm_lang$core$Date$second = _elm_lang$core$Native_Date.second;
var _elm_lang$core$Date$minute = _elm_lang$core$Native_Date.minute;
var _elm_lang$core$Date$hour = _elm_lang$core$Native_Date.hour;
var _elm_lang$core$Date$dayOfWeek = _elm_lang$core$Native_Date.dayOfWeek;
var _elm_lang$core$Date$day = _elm_lang$core$Native_Date.day;
var _elm_lang$core$Date$month = _elm_lang$core$Native_Date.month;
var _elm_lang$core$Date$year = _elm_lang$core$Native_Date.year;
var _elm_lang$core$Date$fromTime = _elm_lang$core$Native_Date.fromTime;
var _elm_lang$core$Date$toTime = _elm_lang$core$Native_Date.toTime;
var _elm_lang$core$Date$fromString = _elm_lang$core$Native_Date.fromString;
var _elm_lang$core$Date$now = A2(_elm_lang$core$Task$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Time$now);
var _elm_lang$core$Date$Date = {ctor: 'Date'};
var _elm_lang$core$Date$Sun = {ctor: 'Sun'};
var _elm_lang$core$Date$Sat = {ctor: 'Sat'};
var _elm_lang$core$Date$Fri = {ctor: 'Fri'};
var _elm_lang$core$Date$Thu = {ctor: 'Thu'};
var _elm_lang$core$Date$Wed = {ctor: 'Wed'};
var _elm_lang$core$Date$Tue = {ctor: 'Tue'};
var _elm_lang$core$Date$Mon = {ctor: 'Mon'};
var _elm_lang$core$Date$Dec = {ctor: 'Dec'};
var _elm_lang$core$Date$Nov = {ctor: 'Nov'};
var _elm_lang$core$Date$Oct = {ctor: 'Oct'};
var _elm_lang$core$Date$Sep = {ctor: 'Sep'};
var _elm_lang$core$Date$Aug = {ctor: 'Aug'};
var _elm_lang$core$Date$Jul = {ctor: 'Jul'};
var _elm_lang$core$Date$Jun = {ctor: 'Jun'};
var _elm_lang$core$Date$May = {ctor: 'May'};
var _elm_lang$core$Date$Apr = {ctor: 'Apr'};
var _elm_lang$core$Date$Mar = {ctor: 'Mar'};
var _elm_lang$core$Date$Feb = {ctor: 'Feb'};
var _elm_lang$core$Date$Jan = {ctor: 'Jan'};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$json_extra$Json_Decode_Extra$fromResult = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Json_Decode$succeed(_p0._0);
	} else {
		return _elm_lang$core$Json_Decode$fail(_p0._0);
	}
};
var _elm_community$json_extra$Json_Decode_Extra$parseInt = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p1) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$String$toInt(_p1));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$parseFloat = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p2) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$String$toFloat(_p2));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$doubleEncoded = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (_p3) {
			return _elm_community$json_extra$Json_Decode_Extra$fromResult(
				A2(_elm_lang$core$Json_Decode$decodeString, decoder, _p3));
		},
		_elm_lang$core$Json_Decode$string);
};
var _elm_community$json_extra$Json_Decode_Extra$sequenceHelp = F2(
	function (decoders, jsonValues) {
		return (!_elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(jsonValues),
			_elm_lang$core$List$length(decoders))) ? _elm_lang$core$Json_Decode$fail('Number of decoders does not match number of values') : _elm_community$json_extra$Json_Decode_Extra$fromResult(
			A3(
				_elm_lang$core$List$foldr,
				_elm_lang$core$Result$map2(
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})),
				_elm_lang$core$Result$Ok(
					{ctor: '[]'}),
				A3(_elm_lang$core$List$map2, _elm_lang$core$Json_Decode$decodeValue, decoders, jsonValues)));
	});
var _elm_community$json_extra$Json_Decode_Extra$sequence = function (decoders) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		_elm_community$json_extra$Json_Decode_Extra$sequenceHelp(decoders),
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
};
var _elm_community$json_extra$Json_Decode_Extra$indexedList = function (indexedDecoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (values) {
			return _elm_community$json_extra$Json_Decode_Extra$sequence(
				A2(
					_elm_lang$core$List$map,
					indexedDecoder,
					A2(
						_elm_lang$core$List$range,
						0,
						_elm_lang$core$List$length(values) - 1)));
		},
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
};
var _elm_community$json_extra$Json_Decode_Extra$optionalField = F2(
	function (fieldName, decoder) {
		var finishDecoding = function (json) {
			var _p4 = A2(
				_elm_lang$core$Json_Decode$decodeValue,
				A2(_elm_lang$core$Json_Decode$field, fieldName, _elm_lang$core$Json_Decode$value),
				json);
			if (_p4.ctor === 'Ok') {
				return A2(
					_elm_lang$core$Json_Decode$map,
					_elm_lang$core$Maybe$Just,
					A2(_elm_lang$core$Json_Decode$field, fieldName, decoder));
			} else {
				return _elm_lang$core$Json_Decode$succeed(_elm_lang$core$Maybe$Nothing);
			}
		};
		return A2(_elm_lang$core$Json_Decode$andThen, finishDecoding, _elm_lang$core$Json_Decode$value);
	});
var _elm_community$json_extra$Json_Decode_Extra$withDefault = F2(
	function (fallback, decoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Maybe$withDefault(fallback),
			_elm_lang$core$Json_Decode$maybe(decoder));
	});
var _elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples = F2(
	function (keyDecoder, tuples) {
		var _p5 = tuples;
		if (_p5.ctor === '[]') {
			return _elm_lang$core$Json_Decode$succeed(_elm_lang$core$Dict$empty);
		} else {
			var _p6 = A2(_elm_lang$core$Json_Decode$decodeString, keyDecoder, _p5._0._0);
			if (_p6.ctor === 'Ok') {
				return A2(
					_elm_lang$core$Json_Decode$andThen,
					function (_p7) {
						return _elm_lang$core$Json_Decode$succeed(
							A3(_elm_lang$core$Dict$insert, _p6._0, _p5._0._1, _p7));
					},
					A2(_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples, keyDecoder, _p5._1));
			} else {
				return _elm_lang$core$Json_Decode$fail(_p6._0);
			}
		}
	});
var _elm_community$json_extra$Json_Decode_Extra$dict2 = F2(
	function (keyDecoder, valueDecoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples(keyDecoder),
			_elm_lang$core$Json_Decode$keyValuePairs(valueDecoder));
	});
var _elm_community$json_extra$Json_Decode_Extra$set = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Set$fromList,
		_elm_lang$core$Json_Decode$list(decoder));
};
var _elm_community$json_extra$Json_Decode_Extra$date = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p8) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$Date$fromString(_p8));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$andMap = _elm_lang$core$Json_Decode$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _elm_community$json_extra$Json_Decode_Extra_ops = _elm_community$json_extra$Json_Decode_Extra_ops || {};
_elm_community$json_extra$Json_Decode_Extra_ops['|:'] = _elm_lang$core$Basics$flip(_elm_community$json_extra$Json_Decode_Extra$andMap);


/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 * Copyright (c) 2013 John Mayer
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * File: mjs
 *
 * Vector and Matrix math utilities for JavaScript, optimized for WebGL.
 * Edited to work with the Elm Programming Language
 */

var _elm_community$linear_algebra$Native_MJS = function() {


    /*
     * Constant: MJS_VERSION
     *
     * mjs version number aa.bb.cc, encoded as an integer of the form:
     * 0xaabbcc.
     */
    var MJS_VERSION = 0x000000;

    /*
     * Constant: MJS_DO_ASSERT
     *
     * Enables or disables runtime assertions.
     *
     * For potentially more performance, the assert methods can be
     * commented out in each place where they are called.
     */
    // var MJS_DO_ASSERT = false;

    /*
     * Constant: MJS_FLOAT_ARRAY_TYPE
     *
     * The base float array type.  By default, WebGLFloatArray.
     *
     * mjs can work with any array-like elements, but if an array
     * creation is requested, it will create an array of the type
     * MJS_FLOAT_ARRAY_TYPE.  Also, the builtin constants such as (M4x4.I)
     * will be of this type.
     */
    //MJS_FLOAT_ARRAY_TYPE = WebGLFloatArray;
    //MJS_FLOAT_ARRAY_TYPE = Float32Array;
    var MJS_FLOAT_ARRAY_TYPE = Float64Array;
    //MJS_FLOAT_ARRAY_TYPE = Array;

    /*
    if (MJS_DO_ASSERT) {
        function MathUtils_assert(cond, msg) {
            if (!cond) {
                throw "Assertion failed: " + msg;
            }
        }
    } else {
    */
        function MathUtils_assert() { }
    //}

    /*
     * Class: V3
     *
     * Methods for working with 3-element vectors.  A vector is represented by a 3-element array.
     * Any valid JavaScript array type may be used, but if new
     * vectors are created they are created using the configured MJS_FLOAT_ARRAY_TYPE.
     */

    var V3 = { };

    V3._temp1 = new MJS_FLOAT_ARRAY_TYPE(3);
    V3._temp2 = new MJS_FLOAT_ARRAY_TYPE(3);
    V3._temp3 = new MJS_FLOAT_ARRAY_TYPE(3);

    if (MJS_FLOAT_ARRAY_TYPE == Array) {
        V3.x = [1.0, 0.0, 0.0];
        V3.y = [0.0, 1.0, 0.0];
        V3.z = [0.0, 0.0, 1.0];

        V3.$ = function V3_$(x, y, z) {
            return [x, y, z];
        };
    } else {
        V3.x = new MJS_FLOAT_ARRAY_TYPE([1.0, 0.0, 0.0]);
        V3.y = new MJS_FLOAT_ARRAY_TYPE([0.0, 1.0, 0.0]);
        V3.z = new MJS_FLOAT_ARRAY_TYPE([0.0, 0.0, 1.0]);

        /*
         * Function: V3.$
         *
         * Creates a new 3-element vector with the given values.
         *
         * Parameters:
         *
         *   x,y,z - the 3 elements of the new vector.
         *
         * Returns:
         *
         * A new vector containing with the given argument values.
         */

        V3.$ = function V3_$(x, y, z) {
            return new MJS_FLOAT_ARRAY_TYPE([x, y, z]);
        };
    }

    V3.u = V3.x;
    V3.v = V3.y;

    V3.getX = function V3_getX(a) {
        return a[0];
    }
    V3.getY = function V3_getY(a) {
        return a[1];
    }
    V3.getZ = function V3_getZ(a) {
        return a[2];
    }
    V3.setX = function V3_setX(x, a) {
        return new MJS_FLOAT_ARRAY_TYPE([x, a[1], a[2]]);
    }
    V3.setY = function V3_setY(y, a) {
        return new MJS_FLOAT_ARRAY_TYPE([a[0], y, a[2]]);
    }
    V3.setZ = function V3_setZ(z, a) {
        return new MJS_FLOAT_ARRAY_TYPE([a[0], a[1], z]);
    }

    V3.toTuple3 = function V3_toTuple3(a) {
      return {
        ctor:"_Tuple3",
        _0:a[0],
        _1:a[1],
        _2:a[2]
      };
    };
    V3.fromTuple3 = function V3_fromTuple3(t) {
      return new MJS_FLOAT_ARRAY_TYPE([t._0, t._1, t._2]);
    };

    V3.toRecord3 = function V3_toRecord3(a) {
      return {
        _:{},
        x:a[0],
        y:a[1],
        z:a[2]
      };
    };
    V3.fromRecord3 = function V3_fromRecord3(r) {
      return new MJS_FLOAT_ARRAY_TYPE([r.x, r.y, r.z]);
    };

    /*
     * Function: V3.add
     *
     * Perform r = a + b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.add = function V3_add(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[0] + b[0];
        r[1] = a[1] + b[1];
        r[2] = a[2] + b[2];
        return r;
    };

    /*
     * Function: V3.sub
     *
     * Perform
     * r = a - b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.sub = function V3_sub(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[0] - b[0];
        r[1] = a[1] - b[1];
        r[2] = a[2] - b[2];
        return r;
    };

    /*
     * Function: V3.neg
     *
     * Perform
     * r = - a.
     *
     * Parameters:
     *
     *   a - the vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.neg = function V3_neg(a, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = - a[0];
        r[1] = - a[1];
        r[2] = - a[2];
        return r;
    };

    /*
     * Function: V3.direction
     *
     * Perform
     * r = (a - b) / |a - b|.  The result is the normalized
     * direction from a to b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.direction = function V3_direction(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        return V3.normalize(V3.sub(a, b, r), r);
    };

    /*
     * Function: V3.length
     *
     * Perform r = |a|.
     *
     * Parameters:
     *
     *   a - the vector operand
     *
     * Returns:
     *
     *   The length of the given vector.
     */
    V3.length = function V3_length(a) {
        //MathUtils_assert(a.length == 3, "a.length == 3");

        return Math.sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2]);
    };

    /*
     * Function: V3.lengthSquard
     *
     * Perform r = |a|*|a|.
     *
     * Parameters:
     *
     *   a - the vector operand
     *
     * Returns:
     *
     *   The square of the length of the given vector.
     */
    V3.lengthSquared = function V3_lengthSquared(a) {
        //MathUtils_assert(a.length == 3, "a.length == 3");

        return a[0]*a[0] + a[1]*a[1] + a[2]*a[2];
    };

    V3.distance = function V3_distance(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        var dz = a[2] - b[2];
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };

    V3.distanceSquared = function V3_distanceSquared(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        var dz = a[2] - b[2];
        return dx * dx + dy * dy + dz * dz;
    };

    /*
     * Function: V3.normalize
     *
     * Perform r = a / |a|.
     *
     * Parameters:
     *
     *   a - the vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.normalize = function V3_normalize(a, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        var im = 1.0 / V3.length(a);
        r[0] = a[0] * im;
        r[1] = a[1] * im;
        r[2] = a[2] * im;
        return r;
    };

    /*
     * Function: V3.scale
     *
     * Perform r = k * a.
     *
     * Parameters:
     *
     *   a - the vector operand
     *   k - a scalar value
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.scale = function V3_scale(k, a, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[0] * k;
        r[1] = a[1] * k;
        r[2] = a[2] * k;
        return r;
    };

    /*
     * Function: V3.dot
     *
     * Perform
     * r = dot(a, b).
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *
     * Returns:
     *
     *   The dot product of a and b.
     */
    V3.dot = function V3_dot(a, b) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");

        return a[0] * b[0] +
            a[1] * b[1] +
            a[2] * b[2];
    };

    /*
     * Function: V3.cross
     *
     * Perform r = a x b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.cross = function V3_cross(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[1]*b[2] - a[2]*b[1];
        r[1] = a[2]*b[0] - a[0]*b[2];
        r[2] = a[0]*b[1] - a[1]*b[0];
        return r;
    };

    /*
     * Function: V3.mul4x4
     *
     * Perform
     * r = m * v.
     *
     * Parameters:
     *
     *   m - the 4x4 matrix operand
     *   v - the 3-element vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     *   The 4-element result vector is divided by the w component
     *   and returned as a 3-element vector.
     */
    V3.mul4x4 = function V3_mul4x4(m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        var w;
        var tmp = V3._temp1;
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        tmp[0] = m[ 3];
        tmp[1] = m[ 7];
        tmp[2] = m[11];
        w    =  V3.dot(v, tmp) + m[15];
        tmp[0] = m[ 0];
        tmp[1] = m[ 4];
        tmp[2] = m[ 8];
        r[0] = (V3.dot(v, tmp) + m[12])/w;
        tmp[0] = m[ 1];
        tmp[1] = m[ 5];
        tmp[2] = m[ 9];
        r[1] = (V3.dot(v, tmp) + m[13])/w;
        tmp[0] = m[ 2];
        tmp[1] = m[ 6];
        tmp[2] = m[10];
        r[2] = (V3.dot(v, tmp) + m[14])/w;
        return r;
    };

    /*
     * Class: M4x4
     *
     * Methods for working with 4x4 matrices.  A matrix is represented by a 16-element array
     * in column-major order.  Any valid JavaScript array type may be used, but if new
     * matrices are created they are created using the configured MJS_FLOAT_ARRAY_TYPE.
     */

    var M4x4 = { };

    M4x4._temp1 = new MJS_FLOAT_ARRAY_TYPE(16);
    M4x4._temp2 = new MJS_FLOAT_ARRAY_TYPE(16);

    if (MJS_FLOAT_ARRAY_TYPE == Array) {
        M4x4.I = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0];

        M4x4.$ = function M4x4_$(m00, m01, m02, m03,
                m04, m05, m06, m07,
                m08, m09, m10, m11,
                m12, m13, m14, m15)
        {
            return [m00, m01, m02, m03,
            m04, m05, m06, m07,
            m08, m09, m10, m11,
            m12, m13, m14, m15];
        };
    } else {
        M4x4.I = new MJS_FLOAT_ARRAY_TYPE([1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0]);

        /*
         * Function: M4x4.$
         *
         * Creates a new 4x4 matrix with the given values.
         *
         * Parameters:
         *
         *   m00..m15 - the 16 elements of the new matrix.
         *
         * Returns:
         *
         * A new matrix filled with the given argument values.
         */
        M4x4.$ = function M4x4_$(m00, m01, m02, m03,
                m04, m05, m06, m07,
                m08, m09, m10, m11,
                m12, m13, m14, m15)
        {
            return new MJS_FLOAT_ARRAY_TYPE([m00, m01, m02, m03,
                    m04, m05, m06, m07,
                    m08, m09, m10, m11,
                    m12, m13, m14, m15]);
        };
    }

    M4x4.identity = M4x4.I;

    /*
     * Function: M4x4.fromList
     *
     * Creates a new 4x4 matrix with the given values.
     *
     * Parameters:
     *
     *   list - A list of the 16 elements of the new matrix.
     *
     * Returns:
     *
     * Just a new matrix filled with the given argument values.
     * Nothing, if the length of the list is not exactly 16.
     */
    M4x4.fromList = function(list) {
        var m = _elm_lang$core$Native_List.toArray(list);
        if (m.length === 16) {
            return _elm_lang$core$Maybe$Just(M4x4.$(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]));
        } else {
            return _elm_lang$core$Maybe$Nothing;
        }
    }

    /*
     * Function: M4x4.fromRecord
     *
     * Creates a new 4x4 matrix from the given record.
     *
     * Parameters:
     *
     * A record with m11..m44 attributes - the 16 elements of the new matrix
     *
     * Returns:
     *
     * A new matrix filled with the values from the given record.
     */
    M4x4.fromRecord = function(r) {
        return new MJS_FLOAT_ARRAY_TYPE([
            r.m11, r.m21, r.m31, r.m41,
            r.m12, r.m22, r.m32, r.m42,
            r.m13, r.m23, r.m33, r.m43,
            r.m14, r.m24, r.m34, r.m44
        ]);
    }

    /*
     * Function: M4x4.toRecord
     *
     * Creates a record from the given matrix
     *
     * Parameters:
     *
     * A 4x4 matrix
     *
     * Returns:
     *
     * A new record with m11..m44 attributes - the 16 elements of the given matrix
     */
    M4x4.toRecord = function(m) {
        return {
            m11: m[0], m21: m[1], m31: m[2], m41: m[3],
            m12: m[4], m22: m[5], m32: m[6], m42: m[7],
            m13: m[8], m23: m[9], m33: m[10], m43: m[11],
            m14: m[12], m24: m[13], m34: m[14], m44: m[15]
        };
    }

    /*
     * Function: M4x4.topLeft3x3
     *
     * Return the top left 3x3 matrix from the given 4x4 matrix m.
     *
     * Parameters:
     *
     *   m - the matrix
     *   r - optional 3x3 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3x3 matrix with the result.
     */
    M4x4.topLeft3x3 = function M4x4_topLeft3x3(m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 9, "r == undefined || r.length == 9");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(9);
        r[0] = m[0]; r[1] = m[1]; r[2] = m[2];
        r[3] = m[4]; r[4] = m[5]; r[5] = m[6];
        r[6] = m[8]; r[7] = m[9]; r[8] = m[10];
        return r;
    };

    /*
     * Function: M4x4.inverse
     *
     * Computes the inverse of the given matrix m.
     *
     * Parameters:
     *
     *   m - the matrix
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.inverse = function M4x4_inverse(m, r) {
        if (r == undefined) {
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        }

        r[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] +
            m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
        r[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] -
            m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
        r[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] +
            m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
        r[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] -
            m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
        r[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] -
            m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
        r[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] +
            m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
        r[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] -
            m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
        r[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] +
            m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
        r[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] +
            m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
        r[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] -
            m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
        r[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] +
            m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
        r[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] -
            m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
        r[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] -
            m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
        r[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] +
            m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
        r[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] -
            m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
        r[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] +
            m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];

        var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];

        if (det === 0) {
            return _elm_lang$core$Maybe$Nothing;
        }

        det = 1.0 / det;

        for (var i = 0; i < 16; i = i + 1) {
            r[i] = r[i] * det;
        }

        return _elm_lang$core$Maybe$Just(r);
    };

    /*
     * Function: M4x4.inverseOrthonormal
     *
     * Computes the inverse of the given matrix m, assuming that
     * the matrix is orthonormal.
     *
     * Parameters:
     *
     *   m - the matrix
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.inverseOrthonormal = function M4x4_inverseOrthonormal(m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        //MathUtils_assert(m != r, "m != r");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        M4x4.transpose(m, r);
        var t = [m[12], m[13], m[14]];
        r[3] = r[7] = r[11] = 0;
        r[12] = -V3.dot([r[0], r[4], r[8]], t);
        r[13] = -V3.dot([r[1], r[5], r[9]], t);
        r[14] = -V3.dot([r[2], r[6], r[10]], t);
        return r;
    };

    /*
     * Function: M4x4.inverseTo3x3
     *
     * Computes the inverse of the given matrix m, but calculates
     * only the top left 3x3 values of the result.
     *
     * Parameters:
     *
     *   m - the matrix
     *   r - optional 3x3 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3x3 matrix with the result.
     */
    M4x4.inverseTo3x3 = function M4x4_inverseTo3x3(m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 9, "r == undefined || r.length == 9");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(9);

        var a11 = m[10]*m[5]-m[6]*m[9],
            a21 = -m[10]*m[1]+m[2]*m[9],
            a31 = m[6]*m[1]-m[2]*m[5],
            a12 = -m[10]*m[4]+m[6]*m[8],
            a22 = m[10]*m[0]-m[2]*m[8],
            a32 = -m[6]*m[0]+m[2]*m[4],
            a13 = m[9]*m[4]-m[5]*m[8],
            a23 = -m[9]*m[0]+m[1]*m[8],
            a33 = m[5]*m[0]-m[1]*m[4];
        var det = m[0]*(a11) + m[1]*(a12) + m[2]*(a13);
        if (det == 0) // no inverse
            throw "matrix not invertible";
        var idet = 1.0 / det;

        r[0] = idet*a11;
        r[1] = idet*a21;
        r[2] = idet*a31;
        r[3] = idet*a12;
        r[4] = idet*a22;
        r[5] = idet*a32;
        r[6] = idet*a13;
        r[7] = idet*a23;
        r[8] = idet*a33;

        return r;
    };

    /*
     * Function: M4x4.makeFrustum
     *
     * Creates a matrix for a projection frustum with the given parameters.
     *
     * Parameters:
     *
     *   left - the left coordinate of the frustum
     *   right- the right coordinate of the frustum
     *   bottom - the bottom coordinate of the frustum
     *   top - the top coordinate of the frustum
     *   znear - the near z distance of the frustum
     *   zfar - the far z distance of the frustum
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makeFrustum = function M4x4_makeFrustum(left, right, bottom, top, znear, zfar, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var X = 2*znear/(right-left);
        var Y = 2*znear/(top-bottom);
        var A = (right+left)/(right-left);
        var B = (top+bottom)/(top-bottom);
        var C = -(zfar+znear)/(zfar-znear);
        var D = -2*zfar*znear/(zfar-znear);

        r[0] = 2*znear/(right-left);
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = 2*znear/(top-bottom);
        r[6] = 0;
        r[7] = 0;
        r[8] = (right+left)/(right-left);
        r[9] = (top+bottom)/(top-bottom);
        r[10] = -(zfar+znear)/(zfar-znear);
        r[11] = -1;
        r[12] = 0;
        r[13] = 0;
        r[14] = -2*zfar*znear/(zfar-znear);
        r[15] = 0;

        return r;
    };

    /*
     * Function: M4x4.makePerspective
     *
     * Creates a matrix for a perspective projection with the given parameters.
     *
     * Parameters:
     *
     *   fovy - field of view in the y axis, in degrees
     *   aspect - aspect ratio
     *   znear - the near z distance of the projection
     *   zfar - the far z distance of the projection
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makePerspective = function M4x4_makePerspective (fovy, aspect, znear, zfar, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
        var ymin = -ymax;
        var xmin = ymin * aspect;
        var xmax = ymax * aspect;

        return M4x4.makeFrustum(xmin, xmax, ymin, ymax, znear, zfar, r);
    };

    /*
     * Function: M4x4.makeOrtho
     *
     * Creates a matrix for an orthogonal frustum projection with the given parameters.
     *
     * Parameters:
     *
     *   left - the left coordinate of the frustum
     *   right- the right coordinate of the frustum
     *   bottom - the bottom coordinate of the frustum
     *   top - the top coordinate of the frustum
     *   znear - the near z distance of the frustum
     *   zfar - the far z distance of the frustum
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makeOrtho = function M4x4_makeOrtho (left, right, bottom, top, znear, zfar, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var tX = -(right+left)/(right-left);
        var tY = -(top+bottom)/(top-bottom);
        var tZ = -(zfar+znear)/(zfar-znear);
        var X = 2 / (right-left);
        var Y = 2 / (top-bottom);
        var Z = -2 / (zfar-znear);

        r[0] = 2 / (right-left);
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = 2 / (top-bottom);
        r[6] = 0;
        r[7] = 0;
        r[8] = 0;
        r[9] = 0;
        r[10] = -2 / (zfar-znear);
        r[11] = 0;
        r[12] = -(right+left)/(right-left);
        r[13] = -(top+bottom)/(top-bottom);
        r[14] = -(zfar+znear)/(zfar-znear);
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeOrtho2D
     *
     * Creates a matrix for a 2D orthogonal frustum projection with the given parameters.
     * znear and zfar are assumed to be -1 and 1, respectively.
     *
     * Parameters:
     *
     *   left - the left coordinate of the frustum
     *   right- the right coordinate of the frustum
     *   bottom - the bottom coordinate of the frustum
     *   top - the top coordinate of the frustum
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makeOrtho2D = function M4x4_makeOrtho2D (left, right, bottom, top, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeOrtho(left, right, bottom, top, -1, 1, r);
    };

    /*
     * Function: M4x4.mul
     *
     * Performs r = a * b.
     *
     * Parameters:
     *
     *   a - the first matrix operand
     *   b - the second matrix operand
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.mul = function M4x4_mul(a, b, r) {
        //MathUtils_assert(a.length == 16, "a.length == 16");
        //MathUtils_assert(b.length == 16, "b.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        //MathUtils_assert(a != r && b != r, "a != r && b != r");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var a11 = a[0];
        var a21 = a[1];
        var a31 = a[2];
        var a41 = a[3];
        var a12 = a[4];
        var a22 = a[5];
        var a32 = a[6];
        var a42 = a[7];
        var a13 = a[8];
        var a23 = a[9];
        var a33 = a[10];
        var a43 = a[11];
        var a14 = a[12];
        var a24 = a[13];
        var a34 = a[14];
        var a44 = a[15];

        var b11 = b[0];
        var b21 = b[1];
        var b31 = b[2];
        var b41 = b[3];
        var b12 = b[4];
        var b22 = b[5];
        var b32 = b[6];
        var b42 = b[7];
        var b13 = b[8];
        var b23 = b[9];
        var b33 = b[10];
        var b43 = b[11];
        var b14 = b[12];
        var b24 = b[13];
        var b34 = b[14];
        var b44 = b[15];

        r[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        r[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        r[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        r[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        r[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        r[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        r[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        r[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        r[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        r[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        r[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        r[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
        r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
        r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
        r[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

        return r;
    };

    /*
     * Function: M4x4.mulAffine
     *
     * Performs r = a * b, assuming a and b are affine (elements 3,7,11,15 = 0,0,0,1)
     *
     * Parameters:
     *
     *   a - the first matrix operand
     *   b - the second matrix operand
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.mulAffine = function M4x4_mulAffine(a, b, r) {
        //MathUtils_assert(a.length == 16, "a.length == 16");
        //MathUtils_assert(b.length == 16, "b.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        //MathUtils_assert(a != r && b != r, "a != r && b != r");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        var a11 = a[0];
        var a21 = a[1];
        var a31 = a[2];
        var a12 = a[4];
        var a22 = a[5];
        var a32 = a[6];
        var a13 = a[8];
        var a23 = a[9];
        var a33 = a[10];
        var a14 = a[12];
        var a24 = a[13];
        var a34 = a[14];

        var b11 = b[0];
        var b21 = b[1];
        var b31 = b[2];
        var b12 = b[4];
        var b22 = b[5];
        var b32 = b[6];
        var b13 = b[8];
        var b23 = b[9];
        var b33 = b[10];
        var b14 = b[12];
        var b24 = b[13];
        var b34 = b[14];

        r[0] = a11 * b11 + a12 * b21 + a13 * b31;
        r[1] = a21 * b11 + a22 * b21 + a23 * b31;
        r[2] = a31 * b11 + a32 * b21 + a33 * b31;
        r[3] = 0;
        r[4] = a11 * b12 + a12 * b22 + a13 * b32;
        r[5] = a21 * b12 + a22 * b22 + a23 * b32;
        r[6] = a31 * b12 + a32 * b22 + a33 * b32;
        r[7] = 0;
        r[8] = a11 * b13 + a12 * b23 + a13 * b33;
        r[9] = a21 * b13 + a22 * b23 + a23 * b33;
        r[10] = a31 * b13 + a32 * b23 + a33 * b33;
        r[11] = 0;
        r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14;
        r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24;
        r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeRotate
     *
     * Creates a transformation matrix for rotation by angle radians about the 3-element vector axis.
     *
     * Parameters:
     *
     *   angle - the angle of rotation, in radians
     *   axis - the axis around which the rotation is performed, a 3-element vector
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeRotate = function M4x4_makeRotate(angle, axis, r) {
        //MathUtils_assert(angle.length == 3, "angle.length == 3");
        //MathUtils_assert(axis.length == 3, "axis.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        axis = V3.normalize(axis, V3._temp1);
        var x = axis[0], y = axis[1], z = axis[2];
        var c = Math.cos(angle);
        var c1 = 1-c;
        var s = Math.sin(angle);

        r[0] = x*x*c1+c;
        r[1] = y*x*c1+z*s;
        r[2] = z*x*c1-y*s;
        r[3] = 0;
        r[4] = x*y*c1-z*s;
        r[5] = y*y*c1+c;
        r[6] = y*z*c1+x*s;
        r[7] = 0;
        r[8] = x*z*c1+y*s;
        r[9] = y*z*c1-x*s;
        r[10] = z*z*c1+c;
        r[11] = 0;
        r[12] = 0;
        r[13] = 0;
        r[14] = 0;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.rotate
     *
     * Concatenates a rotation of angle radians about the axis to the give matrix m.
     *
     * Parameters:
     *
     *   angle - the angle of rotation, in radians
     *   axis - the axis around which the rotation is performed, a 3-element vector
     *   m - the matrix to concatenate the rotation to
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.rotate = function M4x4_rotate(angle, axis, m, r) {
        //MathUtils_assert(angle.length == 3, "angle.length == 3");
        //MathUtils_assert(axis.length == 3, "axis.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        var a0=axis [0], a1=axis [1], a2=axis [2];
        var l = Math.sqrt(a0*a0 + a1*a1 + a2*a2);
        var x = a0, y = a1, z = a2;
        if (l != 1.0) {
            var im = 1.0 / l;
            x *= im;
            y *= im;
            z *= im;
        }
        var c = Math.cos(angle);
        var c1 = 1-c;
        var s = Math.sin(angle);
        var xs = x*s;
        var ys = y*s;
        var zs = z*s;
        var xyc1 = x * y * c1;
        var xzc1 = x * z * c1;
        var yzc1 = y * z * c1;

        var m11 = m[0];
        var m21 = m[1];
        var m31 = m[2];
        var m41 = m[3];
        var m12 = m[4];
        var m22 = m[5];
        var m32 = m[6];
        var m42 = m[7];
        var m13 = m[8];
        var m23 = m[9];
        var m33 = m[10];
        var m43 = m[11];

        var t11 = x * x * c1 + c;
        var t21 = xyc1 + zs;
        var t31 = xzc1 - ys;
        var t12 = xyc1 - zs;
        var t22 = y * y * c1 + c;
        var t32 = yzc1 + xs;
        var t13 = xzc1 + ys;
        var t23 = yzc1 - xs;
        var t33 = z * z * c1 + c;

        r[0] = m11 * t11 + m12 * t21 + m13 * t31;
        r[1] = m21 * t11 + m22 * t21 + m23 * t31;
        r[2] = m31 * t11 + m32 * t21 + m33 * t31;
        r[3] = m41 * t11 + m42 * t21 + m43 * t31;
        r[4] = m11 * t12 + m12 * t22 + m13 * t32;
        r[5] = m21 * t12 + m22 * t22 + m23 * t32;
        r[6] = m31 * t12 + m32 * t22 + m33 * t32;
        r[7] = m41 * t12 + m42 * t22 + m43 * t32;
        r[8] = m11 * t13 + m12 * t23 + m13 * t33;
        r[9] = m21 * t13 + m22 * t23 + m23 * t33;
        r[10] = m31 * t13 + m32 * t23 + m33 * t33;
        r[11] = m41 * t13 + m42 * t23 + m43 * t33;
        if (r != m) {
            r[12] = m[12];
            r[13] = m[13];
            r[14] = m[14];
            r[15] = m[15];
        }
        return r;
    };

    /*
     * Function: M4x4.makeScale3
     *
     * Creates a transformation matrix for scaling by 3 scalar values, one for
     * each of the x, y, and z directions.
     *
     * Parameters:
     *
     *   x - the scale for the x axis
     *   y - the scale for the y axis
     *   z - the scale for the z axis
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeScale3 = function M4x4_makeScale3(x, y, z, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = x;
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = y;
        r[6] = 0;
        r[7] = 0;
        r[8] = 0;
        r[9] = 0;
        r[10] = z;
        r[11] = 0;
        r[12] = 0;
        r[13] = 0;
        r[14] = 0;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeScale1
     *
     * Creates a transformation matrix for a uniform scale by a single scalar value.
     *
     * Parameters:
     *
     *   k - the scale factor
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeScale1 = function M4x4_makeScale1(k, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeScale3(k, k, k, r);
    };

    /*
     * Function: M4x4.makeScale
     *
     * Creates a transformation matrix for scaling each of the x, y, and z axes by the amount
     * given in the corresponding element of the 3-element vector.
     *
     * Parameters:
     *
     *   v - the 3-element vector containing the scale factors
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeScale = function M4x4_makeScale(v, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeScale3(v[0], v[1], v[2], r);
    };

    /*
     * Function: M4x4.scale3
     */
    M4x4.scale3 = function M4x4_scale3(x, y, z, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == m) {
            m[0] *= x;
            m[1] *= x;
            m[2] *= x;
            m[3] *= x;
            m[4] *= y;
            m[5] *= y;
            m[6] *= y;
            m[7] *= y;
            m[8] *= z;
            m[9] *= z;
            m[10] *= z;
            m[11] *= z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = m[0] * x;
        r[1] = m[1] * x;
        r[2] = m[2] * x;
        r[3] = m[3] * x;
        r[4] = m[4] * y;
        r[5] = m[5] * y;
        r[6] = m[6] * y;
        r[7] = m[7] * y;
        r[8] = m[8] * z;
        r[9] = m[9] * z;
        r[10] = m[10] * z;
        r[11] = m[11] * z;
        r[12] = m[12];
        r[13] = m[13];
        r[14] = m[14];
        r[15] = m[15];

        return r;
    };

    /*
     * Function: M4x4.scale1
     */
    M4x4.scale1 = function M4x4_scale1(k, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        if (r == m) {
            m[0] *= k;
            m[1] *= k;
            m[2] *= k;
            m[3] *= k;
            m[4] *= k;
            m[5] *= k;
            m[6] *= k;
            m[7] *= k;
            m[8] *= k;
            m[9] *= k;
            m[10] *= k;
            m[11] *= k;
            return m;
        }


        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = m[0] * k;
        r[1] = m[1] * k;
        r[2] = m[2] * k;
        r[3] = m[3] * k;
        r[4] = m[4] * k;
        r[5] = m[5] * k;
        r[6] = m[6] * k;
        r[7] = m[7] * k;
        r[8] = m[8] * k;
        r[9] = m[9] * k;
        r[10] = m[10] * k;
        r[11] = m[11] * k;
        r[12] = m[12];
        r[13] = m[13];
        r[14] = m[14];
        r[15] = m[15];

        return r;
    };

    /*
     * Function: M4x4.scale1
     */
    M4x4.scale = function M4x4_scale(v, m, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        var x = v[0], y = v[1], z = v[2];

        if (r == m) {
            m[0] *= x;
            m[1] *= x;
            m[2] *= x;
            m[3] *= x;
            m[4] *= y;
            m[5] *= y;
            m[6] *= y;
            m[7] *= y;
            m[8] *= z;
            m[9] *= z;
            m[10] *= z;
            m[11] *= z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);


        r[0] = m[0] * x;
        r[1] = m[1] * x;
        r[2] = m[2] * x;
        r[3] = m[3] * x;
        r[4] = m[4] * y;
        r[5] = m[5] * y;
        r[6] = m[6] * y;
        r[7] = m[7] * y;
        r[8] = m[8] * z;
        r[9] = m[9] * z;
        r[10] = m[10] * z;
        r[11] = m[11] * z;
        r[12] = m[12];
        r[13] = m[13];
        r[14] = m[14];
        r[15] = m[15];

        return r;
    };

    /*
     * Function: M4x4.makeTranslate3
     */
    M4x4.makeTranslate3 = function M4x4_makeTranslate3(x, y, z, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = 1;
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = 1;
        r[6] = 0;
        r[7] = 0;
        r[8] = 0;
        r[9] = 0;
        r[10] = 1;
        r[11] = 0;
        r[12] = x;
        r[13] = y;
        r[14] = z;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeTranslate1
     */
    M4x4.makeTranslate1 = function M4x4_makeTranslate1 (k, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeTranslate3(k, k, k, r);
    };

    /*
     * Function: M4x4.makeTranslate
     */
    M4x4.makeTranslate = function M4x4_makeTranslate (v, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeTranslate3(v[0], v[1], v[2], r);
    };

    /*
     * Function: M4x4.translate3Self
     */
    M4x4.translate3Self = function M4x4_translate3Self (x, y, z, m) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        m[12] += m[0] * x + m[4] * y + m[8] * z;
        m[13] += m[1] * x + m[5] * y + m[9] * z;
        m[14] += m[2] * x + m[6] * y + m[10] * z;
        m[15] += m[3] * x + m[7] * y + m[11] * z;
        return m;
    };

    /*
     * Function: M4x4.translate3
     */
    M4x4.translate3 = function M4x4_translate3 (x, y, z, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == m) {
            m[12] += m[0] * x + m[4] * y + m[8] * z;
            m[13] += m[1] * x + m[5] * y + m[9] * z;
            m[14] += m[2] * x + m[6] * y + m[10] * z;
            m[15] += m[3] * x + m[7] * y + m[11] * z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var m11 = m[0];
        var m21 = m[1];
        var m31 = m[2];
        var m41 = m[3];
        var m12 = m[4];
        var m22 = m[5];
        var m32 = m[6];
        var m42 = m[7];
        var m13 = m[8];
        var m23 = m[9];
        var m33 = m[10];
        var m43 = m[11];


        r[0] = m11;
        r[1] = m21;
        r[2] = m31;
        r[3] = m41;
        r[4] = m12;
        r[5] = m22;
        r[6] = m32;
        r[7] = m42;
        r[8] = m13;
        r[9] = m23;
        r[10] = m33;
        r[11] = m43;
        r[12] = m11 * x + m12 * y + m13 * z + m[12];
        r[13] = m21 * x + m22 * y + m23 * z + m[13];
        r[14] = m31 * x + m32 * y + m33 * z + m[14];
        r[15] = m41 * x + m42 * y + m43 * z + m[15];

        return r;
    };

    /*
     * Function: M4x4.translate1
     */
    M4x4.translate1 = function M4x4_translate1 (k, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.translate3(k, k, k, m, r);
    };
    /*
     * Function: M4x4.translateSelf
     */
    M4x4.translateSelf = function M4x4_translateSelf (v, m) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        var x=v[0], y=v[1], z=v[2];
        m[12] += m[0] * x + m[4] * y + m[8] * z;
        m[13] += m[1] * x + m[5] * y + m[9] * z;
        m[14] += m[2] * x + m[6] * y + m[10] * z;
        m[15] += m[3] * x + m[7] * y + m[11] * z;
        return m;
    };
    /*
     * Function: M4x4.translate
     */
    M4x4.translate = function M4x4_translate (v, m, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        var x=v[0], y=v[1], z=v[2];
        if (r == m) {
            m[12] += m[0] * x + m[4] * y + m[8] * z;
            m[13] += m[1] * x + m[5] * y + m[9] * z;
            m[14] += m[2] * x + m[6] * y + m[10] * z;
            m[15] += m[3] * x + m[7] * y + m[11] * z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var m11 = m[0];
        var m21 = m[1];
        var m31 = m[2];
        var m41 = m[3];
        var m12 = m[4];
        var m22 = m[5];
        var m32 = m[6];
        var m42 = m[7];
        var m13 = m[8];
        var m23 = m[9];
        var m33 = m[10];
        var m43 = m[11];

        r[0] = m11;
        r[1] = m21;
        r[2] = m31;
        r[3] = m41;
        r[4] = m12;
        r[5] = m22;
        r[6] = m32;
        r[7] = m42;
        r[8] = m13;
        r[9] = m23;
        r[10] = m33;
        r[11] = m43;
        r[12] = m11 * x + m12 * y + m13 * z + m[12];
        r[13] = m21 * x + m22 * y + m23 * z + m[13];
        r[14] = m31 * x + m32 * y + m33 * z + m[14];
        r[15] = m41 * x + m42 * y + m43 * z + m[15];

        return r;
    };

    /*
     * Function: M4x4.makeLookAt
     */
    M4x4.makeLookAt = function M4x4_makeLookAt (eye, center, up, r) {
        //MathUtils_assert(eye.length == 3, "eye.length == 3");
        //MathUtils_assert(center.length == 3, "center.length == 3");
        //MathUtils_assert(up.length == 3, "up.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        var z = V3.direction(eye, center, V3._temp1);
        var x = V3.normalize(V3.cross(up, z, V3._temp2), V3._temp2);
        var y = V3.normalize(V3.cross(z, x, V3._temp3), V3._temp3);

        var tm1 = M4x4._temp1;
        var tm2 = M4x4._temp2;

        tm1[0] = x[0];
        tm1[1] = y[0];
        tm1[2] = z[0];
        tm1[3] = 0;
        tm1[4] = x[1];
        tm1[5] = y[1];
        tm1[6] = z[1];
        tm1[7] = 0;
        tm1[8] = x[2];
        tm1[9] = y[2];
        tm1[10] = z[2];
        tm1[11] = 0;
        tm1[12] = 0;
        tm1[13] = 0;
        tm1[14] = 0;
        tm1[15] = 1;

        tm2[0] = 1; tm2[1] = 0; tm2[2] = 0; tm2[3] = 0;
        tm2[4] = 0; tm2[5] = 1; tm2[6] = 0; tm2[7] = 0;
        tm2[8] = 0; tm2[9] = 0; tm2[10] = 1; tm2[11] = 0;
        tm2[12] = -eye[0]; tm2[13] = -eye[1]; tm2[14] = -eye[2]; tm2[15] = 1;

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        return M4x4.mul(tm1, tm2, r);
    };

    /*
     * Function: M4x4.transposeSelf
     */
    M4x4.transposeSelf = function M4x4_transposeSelf (m) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        var tmp = m[1]; m[1] = m[4]; m[4] = tmp;
        tmp = m[2]; m[2] = m[8]; m[8] = tmp;
        tmp = m[3]; m[3] = m[12]; m[12] = tmp;
        tmp = m[6]; m[6] = m[9]; m[9] = tmp;
        tmp = m[7]; m[7] = m[13]; m[13] = tmp;
        tmp = m[11]; m[11] = m[14]; m[14] = tmp;
        return m;
    };
    /*
     * Function: M4x4.transpose
     */
    M4x4.transpose = function M4x4_transpose (m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (m == r) {
            var tmp = 0.0;
            tmp = m[1]; m[1] = m[4]; m[4] = tmp;
            tmp = m[2]; m[2] = m[8]; m[8] = tmp;
            tmp = m[3]; m[3] = m[12]; m[12] = tmp;
            tmp = m[6]; m[6] = m[9]; m[9] = tmp;
            tmp = m[7]; m[7] = m[13]; m[13] = tmp;
            tmp = m[11]; m[11] = m[14]; m[14] = tmp;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = m[0]; r[1] = m[4]; r[2] = m[8]; r[3] = m[12];
        r[4] = m[1]; r[5] = m[5]; r[6] = m[9]; r[7] = m[13];
        r[8] = m[2]; r[9] = m[6]; r[10] = m[10]; r[11] = m[14];
        r[12] = m[3]; r[13] = m[7]; r[14] = m[11]; r[15] = m[15];

        return r;
    };


    /*
     * Function: M4x4.transformPoint
     */
    M4x4.transformPoint = function M4x4_transformPoint (m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];

        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2 + m[12];
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2 + m[13];
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2 + m[14];
        var w = m[3] * v0 + m[7] * v1 + m[11] * v2 + m[15];

        if (w != 1.0) {
            r[0] /= w;
            r[1] /= w;
            r[2] /= w;
        }

        return r;
    };

    /*
     * Function: M4x4.transformLine
     */
    M4x4.transformLine = function M4x4_transformLine(m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];
        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2;
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2;
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2;
        var w = m[3] * v0 + m[7] * v1 + m[11] * v2;

        if (w != 1.0) {
            r[0] /= w;
            r[1] /= w;
            r[2] /= w;
        }

        return r;
    };


    /*
     * Function: M4x4.transformPointAffine
     */
    M4x4.transformPointAffine = function M4x4_transformPointAffine (m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];

        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2 + m[12];
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2 + m[13];
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2 + m[14];

        return r;
    };

    /*
     * Function: M4x4.transformLineAffine
     */
    M4x4.transformLineAffine = function M4x4_transformLineAffine(m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];
        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2;
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2;
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2;

        return r;
    };

    M4x4.makeBasis = function M4x4_makeBasis(vx,vy,vz) {

        var r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = vx[0];
        r[1] = vx[1];
        r[2] = vx[2];
        r[3] = 0;
        r[4] = vy[0];
        r[5] = vy[1];
        r[6] = vy[2];
        r[7] = 0;
        r[8] = vz[0];
        r[9] = vz[1];
        r[10] = vz[2];
        r[11] = 0;
        r[12] = 0;
        r[13] = 0;
        r[14] = 0;
        r[15] = 1;

        return r;

    };

    return {
        vec3: F3(V3.$),
        v3getX: V3.getX,
        v3getY: V3.getY,
        v3getZ: V3.getZ,
        v3setX: F2(V3.setX),
        v3setY: F2(V3.setY),
        v3setZ: F2(V3.setZ),
        toTuple3: V3.toTuple3,
        toRecord3: V3.toRecord3,
        fromTuple3: V3.fromTuple3,
        fromRecord3: V3.fromRecord3,
        v3add: F2(V3.add),
        v3sub: F2(V3.sub),
        v3neg: V3.neg,
        v3direction: F2(V3.direction),
        v3length: V3.length,
        v3lengthSquared: V3.lengthSquared,
        v3distance: F2(V3.distance),
        v3distanceSquared: F2(V3.distanceSquared),
        v3normalize: V3.normalize,
        v3scale: F2(V3.scale),
        v3dot: F2(V3.dot),
        v3cross: F2(V3.cross),
        v3mul4x4: F2(V3.mul4x4),
        m4x4fromList: M4x4.fromList,
        m4x4fromRecord: M4x4.fromRecord,
        m4x4toRecord: M4x4.toRecord,
        m4x4identity: M4x4.identity,
        m4x4topLeft3x3: M4x4.topLeft3x3,
        m4x4inverse: M4x4.inverse,
        m4x4inverseOrthonormal: M4x4.inverseOrthonormal,
        m4x4inverseTo3x3: M4x4.inverseTo3x3,
        m4x4makeFrustum: F6(M4x4.makeFrustum),
        m4x4makePerspective: F4(M4x4.makePerspective),
        m4x4makeOrtho: F6(M4x4.makeOrtho),
        m4x4makeOrtho2D: F4(M4x4.makeOrtho2D),
        m4x4mul: F2(M4x4.mul),
        m4x4Affine: F2(M4x4.mulAffine),
        m4x4makeRotate: F2(M4x4.makeRotate),
        m4x4rotate: F3(M4x4.rotate),
        m4x4makeScale3: F3(M4x4.makeScale3),
        m4x4makeScale1: M4x4.makeScale1,
        m4x4makeScale: M4x4.makeScale,
        m4x4scale3: F4(M4x4.scale3),
        m4x4scale: F2(M4x4.scale),
        m4x4makeTranslate3: F3(M4x4.makeTranslate3),
        m4x4makeTranslate: M4x4.makeTranslate,
        m4x4translate3: F4(M4x4.translate3),
        m4x4translate: F2(M4x4.translate),
        m4x4makeLookAt: F3(M4x4.makeLookAt),
        m4x4transpose: M4x4.transpose,
        m4x4transformPoint: F2(M4x4.transformPoint),
        m4x4makeBasis: F3(M4x4.makeBasis)
    };

}();

var _elm_community$linear_algebra$Math_Vector3$cross = _elm_community$linear_algebra$Native_MJS.v3cross;
var _elm_community$linear_algebra$Math_Vector3$dot = _elm_community$linear_algebra$Native_MJS.v3dot;
var _elm_community$linear_algebra$Math_Vector3$scale = _elm_community$linear_algebra$Native_MJS.v3scale;
var _elm_community$linear_algebra$Math_Vector3$normalize = _elm_community$linear_algebra$Native_MJS.v3normalize;
var _elm_community$linear_algebra$Math_Vector3$distanceSquared = _elm_community$linear_algebra$Native_MJS.v3distanceSquared;
var _elm_community$linear_algebra$Math_Vector3$distance = _elm_community$linear_algebra$Native_MJS.v3distance;
var _elm_community$linear_algebra$Math_Vector3$lengthSquared = _elm_community$linear_algebra$Native_MJS.v3lengthSquared;
var _elm_community$linear_algebra$Math_Vector3$length = _elm_community$linear_algebra$Native_MJS.v3length;
var _elm_community$linear_algebra$Math_Vector3$direction = _elm_community$linear_algebra$Native_MJS.v3direction;
var _elm_community$linear_algebra$Math_Vector3$negate = _elm_community$linear_algebra$Native_MJS.v3neg;
var _elm_community$linear_algebra$Math_Vector3$sub = _elm_community$linear_algebra$Native_MJS.v3sub;
var _elm_community$linear_algebra$Math_Vector3$add = _elm_community$linear_algebra$Native_MJS.v3add;
var _elm_community$linear_algebra$Math_Vector3$fromRecord = _elm_community$linear_algebra$Native_MJS.fromRecord3;
var _elm_community$linear_algebra$Math_Vector3$fromTuple = _elm_community$linear_algebra$Native_MJS.fromTuple3;
var _elm_community$linear_algebra$Math_Vector3$toRecord = _elm_community$linear_algebra$Native_MJS.toRecord3;
var _elm_community$linear_algebra$Math_Vector3$toTuple = _elm_community$linear_algebra$Native_MJS.toTuple3;
var _elm_community$linear_algebra$Math_Vector3$setZ = _elm_community$linear_algebra$Native_MJS.v3setZ;
var _elm_community$linear_algebra$Math_Vector3$setY = _elm_community$linear_algebra$Native_MJS.v3setY;
var _elm_community$linear_algebra$Math_Vector3$setX = _elm_community$linear_algebra$Native_MJS.v3setX;
var _elm_community$linear_algebra$Math_Vector3$getZ = _elm_community$linear_algebra$Native_MJS.v3getZ;
var _elm_community$linear_algebra$Math_Vector3$getY = _elm_community$linear_algebra$Native_MJS.v3getY;
var _elm_community$linear_algebra$Math_Vector3$getX = _elm_community$linear_algebra$Native_MJS.v3getX;
var _elm_community$linear_algebra$Math_Vector3$k = A3(_elm_community$linear_algebra$Native_MJS.vec3, 0, 0, 1);
var _elm_community$linear_algebra$Math_Vector3$j = A3(_elm_community$linear_algebra$Native_MJS.vec3, 0, 1, 0);
var _elm_community$linear_algebra$Math_Vector3$i = A3(_elm_community$linear_algebra$Native_MJS.vec3, 1, 0, 0);
var _elm_community$linear_algebra$Math_Vector3$vec3 = _elm_community$linear_algebra$Native_MJS.vec3;
var _elm_community$linear_algebra$Math_Vector3$Vec3 = {ctor: 'Vec3'};

var _elm_community$linear_algebra$Math_Matrix4$fromRecord = _elm_community$linear_algebra$Native_MJS.m4x4fromRecord;
var _elm_community$linear_algebra$Math_Matrix4$toRecord = _elm_community$linear_algebra$Native_MJS.m4x4toRecord;
var _elm_community$linear_algebra$Math_Matrix4$makeFromList = _elm_community$linear_algebra$Native_MJS.m4x4fromList;
var _elm_community$linear_algebra$Math_Matrix4$makeBasis = _elm_community$linear_algebra$Native_MJS.m4x4makeBasis;
var _elm_community$linear_algebra$Math_Matrix4$transpose = _elm_community$linear_algebra$Native_MJS.m4x4transpose;
var _elm_community$linear_algebra$Math_Matrix4$makeLookAt = _elm_community$linear_algebra$Native_MJS.m4x4makeLookAt;
var _elm_community$linear_algebra$Math_Matrix4$translate = _elm_community$linear_algebra$Native_MJS.m4x4translate;
var _elm_community$linear_algebra$Math_Matrix4$translate3 = _elm_community$linear_algebra$Native_MJS.m4x4translate3;
var _elm_community$linear_algebra$Math_Matrix4$makeTranslate = _elm_community$linear_algebra$Native_MJS.m4x4makeTranslate;
var _elm_community$linear_algebra$Math_Matrix4$makeTranslate3 = _elm_community$linear_algebra$Native_MJS.m4x4makeTranslate3;
var _elm_community$linear_algebra$Math_Matrix4$scale = _elm_community$linear_algebra$Native_MJS.m4x4scale;
var _elm_community$linear_algebra$Math_Matrix4$scale3 = _elm_community$linear_algebra$Native_MJS.m4x4scale3;
var _elm_community$linear_algebra$Math_Matrix4$makeScale = _elm_community$linear_algebra$Native_MJS.m4x4makeScale;
var _elm_community$linear_algebra$Math_Matrix4$makeScale3 = _elm_community$linear_algebra$Native_MJS.m4x4makeScale3;
var _elm_community$linear_algebra$Math_Matrix4$rotate = _elm_community$linear_algebra$Native_MJS.m4x4rotate;
var _elm_community$linear_algebra$Math_Matrix4$makeRotate = _elm_community$linear_algebra$Native_MJS.m4x4makeRotate;
var _elm_community$linear_algebra$Math_Matrix4$mulAffine = _elm_community$linear_algebra$Native_MJS.m4x4mulAffine;
var _elm_community$linear_algebra$Math_Matrix4$mul = _elm_community$linear_algebra$Native_MJS.m4x4mul;
var _elm_community$linear_algebra$Math_Matrix4$makeOrtho2D = _elm_community$linear_algebra$Native_MJS.m4x4makeOrtho2D;
var _elm_community$linear_algebra$Math_Matrix4$makeOrtho = _elm_community$linear_algebra$Native_MJS.m4x4makeOrtho;
var _elm_community$linear_algebra$Math_Matrix4$makePerspective = _elm_community$linear_algebra$Native_MJS.m4x4makePerspective;
var _elm_community$linear_algebra$Math_Matrix4$makeFrustum = _elm_community$linear_algebra$Native_MJS.m4x4makeFrustum;
var _elm_community$linear_algebra$Math_Matrix4$inverseOrthonormal = _elm_community$linear_algebra$Native_MJS.m4x4inverseOrthonormal;
var _elm_community$linear_algebra$Math_Matrix4$inverse = _elm_community$linear_algebra$Native_MJS.m4x4inverse;
var _elm_community$linear_algebra$Math_Matrix4$identity = _elm_community$linear_algebra$Native_MJS.m4x4identity;
var _elm_community$linear_algebra$Math_Matrix4$transform = _elm_community$linear_algebra$Native_MJS.v3mul4x4;
var _elm_community$linear_algebra$Math_Matrix4$Mat4 = {ctor: 'Mat4'};


/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * File: mjs
 *
 * Vector and Matrix math utilities for JavaScript, optimized for WebGL.
 * Edited to work with the Elm Programming Language
 */

var _elm_community$linear_algebra$Native_Math_Vector2 = function() {

    var MJS_FLOAT_ARRAY_TYPE = Float32Array;

    var V2 = { };

    if (MJS_FLOAT_ARRAY_TYPE == Array) {
        V2.$ = function V2_$(x, y) {
            return [x, y];
        };
    } else {
        V2.$ = function V2_$(x, y) {
            return new MJS_FLOAT_ARRAY_TYPE([x, y]);
        };
    }

    V2.getX = function V2_getX(a) {
        return a[0];
    }
    V2.getY = function V2_getY(a) {
        return a[1];
    }
    V2.setX = function V2_setX(x, a) {
        return new MJS_FLOAT_ARRAY_TYPE([x, a[1]]);
    }
    V2.setY = function V2_setY(y, a) {
        return new MJS_FLOAT_ARRAY_TYPE([a[0], y]);
    }

    V2.toTuple = function V2_toTuple(a) {
        return {
            ctor:"_Tuple2",
            _0:a[0],
            _1:a[1]
        };
    };
    V2.fromTuple = function V2_fromTuple(t) {
        return new MJS_FLOAT_ARRAY_TYPE([t._0, t._1]);
    };

    V2.toRecord = function V2_toRecord(a) {
        return {
            _:{},
            x:a[0],
            y:a[1]
        };
    };
    V2.fromRecord = function V2_fromRecord(r) {
        return new MJS_FLOAT_ARRAY_TYPE([r.x, r.y]);
    };

    V2.add = function V2_add(a, b) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        r[0] = a[0] + b[0];
        r[1] = a[1] + b[1];
        return r;
    };

    V2.sub = function V2_sub(a, b) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        r[0] = a[0] - b[0];
        r[1] = a[1] - b[1];
        return r;
    };

    V2.neg = function V2_neg(a) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        r[0] = - a[0];
        r[1] = - a[1];
        return r;
    };

    V2.direction = function V2_direction(a, b) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        r[0] = a[0] - b[0];
        r[1] = a[1] - b[1];
        var im = 1.0 / V2.length(r);
        r[0] = r[0] * im;
        r[1] = r[1] * im;
        return r;
    };

    V2.length = function V2_length(a) {
        return Math.sqrt(a[0]*a[0] + a[1]*a[1]);
    };

    V2.lengthSquared = function V2_lengthSquared(a) {
        return a[0]*a[0] + a[1]*a[1];
    };

    V2.distance = function V2_distance(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        return Math.sqrt(dx * dx + dy * dy);
    };

    V2.distanceSquared = function V2_distanceSquared(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        return dx * dx + dy * dy;
    };

    V2.normalize = function V2_normalize(a) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        var im = 1.0 / V2.length(a);
        r[0] = a[0] * im;
        r[1] = a[1] * im;
        return r;
    };

    V2.scale = function V2_scale(k, a) {
        var r = new MJS_FLOAT_ARRAY_TYPE(2);
        r[0] = a[0] * k;
        r[1] = a[1] * k;
        return r;
    };

    V2.dot = function V2_dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
    };

    return {
        vec2: F2(V2.$),
        getX: V2.getX,
        getY: V2.getY,
        setX: F2(V2.setX),
        setY: F2(V2.setY),
        toTuple: V2.toTuple,
        toRecord: V2.toRecord,
        fromTuple: V2.fromTuple,
        fromRecord: V2.fromRecord,
        add: F2(V2.add),
        sub: F2(V2.sub),
        neg: V2.neg,
        direction: F2(V2.direction),
        length: V2.length,
        lengthSquared: V2.lengthSquared,
        distance: F2(V2.distance),
        distanceSquared: F2(V2.distanceSquared),
        normalize: V2.normalize,
        scale: F2(V2.scale),
        dot: F2(V2.dot)
    };

}();

var _elm_community$linear_algebra$Math_Vector2$dot = _elm_community$linear_algebra$Native_Math_Vector2.dot;
var _elm_community$linear_algebra$Math_Vector2$scale = _elm_community$linear_algebra$Native_Math_Vector2.scale;
var _elm_community$linear_algebra$Math_Vector2$normalize = _elm_community$linear_algebra$Native_Math_Vector2.normalize;
var _elm_community$linear_algebra$Math_Vector2$distanceSquared = _elm_community$linear_algebra$Native_Math_Vector2.distanceSquared;
var _elm_community$linear_algebra$Math_Vector2$distance = _elm_community$linear_algebra$Native_Math_Vector2.distance;
var _elm_community$linear_algebra$Math_Vector2$lengthSquared = _elm_community$linear_algebra$Native_Math_Vector2.lengthSquared;
var _elm_community$linear_algebra$Math_Vector2$length = _elm_community$linear_algebra$Native_Math_Vector2.length;
var _elm_community$linear_algebra$Math_Vector2$direction = _elm_community$linear_algebra$Native_Math_Vector2.direction;
var _elm_community$linear_algebra$Math_Vector2$negate = _elm_community$linear_algebra$Native_Math_Vector2.neg;
var _elm_community$linear_algebra$Math_Vector2$sub = _elm_community$linear_algebra$Native_Math_Vector2.sub;
var _elm_community$linear_algebra$Math_Vector2$add = _elm_community$linear_algebra$Native_Math_Vector2.add;
var _elm_community$linear_algebra$Math_Vector2$fromRecord = _elm_community$linear_algebra$Native_Math_Vector2.fromRecord;
var _elm_community$linear_algebra$Math_Vector2$fromTuple = _elm_community$linear_algebra$Native_Math_Vector2.fromTuple;
var _elm_community$linear_algebra$Math_Vector2$toRecord = _elm_community$linear_algebra$Native_Math_Vector2.toRecord;
var _elm_community$linear_algebra$Math_Vector2$toTuple = _elm_community$linear_algebra$Native_Math_Vector2.toTuple;
var _elm_community$linear_algebra$Math_Vector2$setY = _elm_community$linear_algebra$Native_Math_Vector2.setY;
var _elm_community$linear_algebra$Math_Vector2$setX = _elm_community$linear_algebra$Native_Math_Vector2.setX;
var _elm_community$linear_algebra$Math_Vector2$getY = _elm_community$linear_algebra$Native_Math_Vector2.getY;
var _elm_community$linear_algebra$Math_Vector2$getX = _elm_community$linear_algebra$Native_Math_Vector2.getX;
var _elm_community$linear_algebra$Math_Vector2$vec2 = _elm_community$linear_algebra$Native_Math_Vector2.vec2;
var _elm_community$linear_algebra$Math_Vector2$Vec2 = {ctor: 'Vec2'};


/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * File: mjs
 *
 * Vector and Matrix math utilities for JavaScript, optimized for WebGL.
 * Edited to work with the Elm Programming Language
 */

var _elm_community$linear_algebra$Native_Math_Vector4 = function() {

    var MJS_FLOAT_ARRAY_TYPE = Float32Array;

    var V4 = { };

    if (MJS_FLOAT_ARRAY_TYPE == Array) {
        V4.$ = function V4_$(x, y, z, w) {
            return [x, y, z, w];
        };
    } else {
        V4.$ = function V4_$(x, y, z, w) {
            return new MJS_FLOAT_ARRAY_TYPE([x, y, z, w]);
        };
    }

    V4.getX = function V4_getX(a) {
        return a[0];
    }
    V4.getY = function V4_getY(a) {
        return a[1];
    }
    V4.getZ = function V4_getZ(a) {
        return a[2];
    }
    V4.getW = function V4_getW(a) {
        return a[3];
    }
    V4.setX = function V4_setX(x, a) {
        return new MJS_FLOAT_ARRAY_TYPE([x, a[1], a[2], a[3]]);
    }
    V4.setY = function V4_setY(y, a) {
        return new MJS_FLOAT_ARRAY_TYPE([a[0], y, a[2], a[3]]);
    }
    V4.setZ = function V4_setZ(z, a) {
        return new MJS_FLOAT_ARRAY_TYPE([a[0], a[1], z, a[3]]);
    }
    V4.setW = function V4_setW(w, a) {
        return new MJS_FLOAT_ARRAY_TYPE([a[0], a[1], a[2], w]);
    }

    V4.toTuple = function V4_toTuple(a) {
        return {
            ctor:"_Tuple4",
            _0:a[0],
            _1:a[1],
            _2:a[2],
            _3:a[3]
        };
    };
    V4.fromTuple = function V4_fromTuple(t) {
        return new MJS_FLOAT_ARRAY_TYPE([t._0, t._1, t._2, t._3]);
    };

    V4.toRecord = function V4_toRecord(a) {
        return {
            _:{},
            x:a[0],
            y:a[1],
            z:a[2],
            w:a[3]
        };
    };
    V4.fromRecord = function V4_fromRecord(r) {
        return new MJS_FLOAT_ARRAY_TYPE([r.x, r.y, r.z, r.w]);
    };

    V4.add = function V4_add(a, b) {
        var r = new MJS_FLOAT_ARRAY_TYPE(4);
        r[0] = a[0] + b[0];
        r[1] = a[1] + b[1];
        r[2] = a[2] + b[2];
        r[3] = a[3] + b[3];
        return r;
    };

    V4.sub = function V4_sub(a, b) {
        var r = new MJS_FLOAT_ARRAY_TYPE(4);
        r[0] = a[0] - b[0];
        r[1] = a[1] - b[1];
        r[2] = a[2] - b[2];
        r[3] = a[3] - b[3];
        return r;
    };

    V4.neg = function V4_neg(a) {
        var r = new MJS_FLOAT_ARRAY_TYPE(4);
        r[0] = - a[0];
        r[1] = - a[1];
        r[2] = - a[2];
        r[3] = - a[3];
        return r;
    };

    V4.direction = function V4_direction(a, b) {
        var r = new MJS_FLOAT_ARRAY_TYPE(4);
        r[0] = a[0] - b[0];
        r[1] = a[1] - b[1];
        r[2] = a[2] - b[2];
        r[3] = a[3] - b[3];
        var im = 1.0 / V4.length(r);
        r[0] = r[0] * im;
        r[1] = r[1] * im;
        r[2] = r[2] * im;
        r[3] = r[3] * im;
        return r;
    };

    V4.length = function V4_length(a) {
        return Math.sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2] + a[3]*a[3]);
    };

    V4.lengthSquared = function V4_lengthSquared(a) {
        return a[0]*a[0] + a[1]*a[1] + a[2]*a[2] + a[3]*a[3];
    };

    V4.distance = function V4_distance(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        var dz = a[2] - b[2];
        var dw = a[3] - b[3];
        return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
    };

    V4.distanceSquared = function V4_distanceSquared(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        var dz = a[2] - b[2];
        var dw = a[3] - b[3];
        return dx * dx + dy * dy + dz * dz + dw * dw;
    };

    V4.normalize = function V4_normalize(a) {
        var r = new MJS_FLOAT_ARRAY_TYPE(4);
        var im = 1.0 / V4.length(a);
        r[0] = a[0] * im;
        r[1] = a[1] * im;
        r[2] = a[2] * im;
        r[3] = a[3] * im;
        return r;
    };

    V4.scale = function V4_scale(k, a) {
        var r = new MJS_FLOAT_ARRAY_TYPE(4);
        r[0] = a[0] * k;
        r[1] = a[1] * k;
        r[2] = a[2] * k;
        r[3] = a[3] * k;
        return r;
    };

    V4.dot = function V4_dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    };

    return {
        vec4: F4(V4.$),
        getX: V4.getX,
        getY: V4.getY,
        getZ: V4.getZ,
        getW: V4.getW,
        setX: F2(V4.setX),
        setY: F2(V4.setY),
        setZ: F2(V4.setZ),
        setW: F2(V4.setW),
        toTuple: V4.toTuple,
        toRecord: V4.toRecord,
        fromTuple: V4.fromTuple,
        fromRecord: V4.fromRecord,
        add: F2(V4.add),
        sub: F2(V4.sub),
        neg: V4.neg,
        direction: F2(V4.direction),
        length: V4.length,
        lengthSquared: V4.lengthSquared,
        distance: F2(V4.distance),
        distanceSquared: F2(V4.distanceSquared),
        normalize: V4.normalize,
        scale: F2(V4.scale),
        dot: F2(V4.dot)
    };

}();

var _elm_community$linear_algebra$Math_Vector4$dot = _elm_community$linear_algebra$Native_Math_Vector4.dot;
var _elm_community$linear_algebra$Math_Vector4$scale = _elm_community$linear_algebra$Native_Math_Vector4.scale;
var _elm_community$linear_algebra$Math_Vector4$normalize = _elm_community$linear_algebra$Native_Math_Vector4.normalize;
var _elm_community$linear_algebra$Math_Vector4$distanceSquared = _elm_community$linear_algebra$Native_Math_Vector4.distanceSquared;
var _elm_community$linear_algebra$Math_Vector4$distance = _elm_community$linear_algebra$Native_Math_Vector4.distance;
var _elm_community$linear_algebra$Math_Vector4$lengthSquared = _elm_community$linear_algebra$Native_Math_Vector4.lengthSquared;
var _elm_community$linear_algebra$Math_Vector4$length = _elm_community$linear_algebra$Native_Math_Vector4.length;
var _elm_community$linear_algebra$Math_Vector4$direction = _elm_community$linear_algebra$Native_Math_Vector4.direction;
var _elm_community$linear_algebra$Math_Vector4$negate = _elm_community$linear_algebra$Native_Math_Vector4.neg;
var _elm_community$linear_algebra$Math_Vector4$sub = _elm_community$linear_algebra$Native_Math_Vector4.sub;
var _elm_community$linear_algebra$Math_Vector4$add = _elm_community$linear_algebra$Native_Math_Vector4.add;
var _elm_community$linear_algebra$Math_Vector4$fromRecord = _elm_community$linear_algebra$Native_Math_Vector4.fromRecord;
var _elm_community$linear_algebra$Math_Vector4$fromTuple = _elm_community$linear_algebra$Native_Math_Vector4.fromTuple;
var _elm_community$linear_algebra$Math_Vector4$toRecord = _elm_community$linear_algebra$Native_Math_Vector4.toRecord;
var _elm_community$linear_algebra$Math_Vector4$toTuple = _elm_community$linear_algebra$Native_Math_Vector4.toTuple;
var _elm_community$linear_algebra$Math_Vector4$setW = _elm_community$linear_algebra$Native_Math_Vector4.setW;
var _elm_community$linear_algebra$Math_Vector4$setZ = _elm_community$linear_algebra$Native_Math_Vector4.setZ;
var _elm_community$linear_algebra$Math_Vector4$setY = _elm_community$linear_algebra$Native_Math_Vector4.setY;
var _elm_community$linear_algebra$Math_Vector4$setX = _elm_community$linear_algebra$Native_Math_Vector4.setX;
var _elm_community$linear_algebra$Math_Vector4$getW = _elm_community$linear_algebra$Native_Math_Vector4.getW;
var _elm_community$linear_algebra$Math_Vector4$getZ = _elm_community$linear_algebra$Native_Math_Vector4.getZ;
var _elm_community$linear_algebra$Math_Vector4$getY = _elm_community$linear_algebra$Native_Math_Vector4.getY;
var _elm_community$linear_algebra$Math_Vector4$getX = _elm_community$linear_algebra$Native_Math_Vector4.getX;
var _elm_community$linear_algebra$Math_Vector4$vec4 = _elm_community$linear_algebra$Native_Math_Vector4.vec4;
var _elm_community$linear_algebra$Math_Vector4$Vec4 = {ctor: 'Vec4'};

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = F2(
	function (prefix, xs) {
		var _p0 = {ctor: '_Tuple2', _0: prefix, _1: xs};
		if (_p0._0.ctor === '[]') {
			return true;
		} else {
			if (_p0._1.ctor === '[]') {
				return false;
			} else {
				return _elm_lang$core$Native_Utils.eq(_p0._0._0, _p0._1._0) && A2(_elm_community$list_extra$List_Extra$isPrefixOf, _p0._0._1, _p0._1._1);
			}
		}
	});
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p4,
				_2: _p5
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p4, _1: _p3._0},
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p9, _1: _p10},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: {ctor: '::', _0: _p9, _1: _p8._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p12},
				_1: {ctor: '::', _0: _p12, _1: _p11._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs_) {
		var _p13 = xs_;
		if (_p13.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p13._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: _p13._0,
						_1: {ctor: '[]'}
					},
					_1: {ctor: '[]'}
				};
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? {
						ctor: '::',
						_0: {ctor: '::', _0: _p15, _1: _p14._0},
						_1: _p14._1
					} : {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: _p15,
							_1: {ctor: '[]'}
						},
						_1: _p14
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p19},
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p21 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p21.ctor === '_Tuple2') && (_p21._0.ctor === '::')) && (_p21._1.ctor === '::')) {
				var _p22 = A2(_elm_community$list_extra$List_Extra$splitAt, _p21._0._0, list);
				var head = _p22._0;
				var tail = _p22._1;
				var _v11 = _p21._0._1,
					_v12 = tail,
					_v13 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v11;
				list = _v12;
				accu = _v13;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p23 = f(seed);
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p23._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p23._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p24 = xs_;
		if (_p24.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p24._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p24._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p25 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p24._1);
				if (_p25.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p24._0, _p25._0),
						_1: _p25
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p26 = xs_;
		if (_p26.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p27 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p26._1);
			if (_p27.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p26._0, _p27._0),
					_1: _p27
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p28 = xs_;
		if (_p28.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p28._0, _p28._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				return {
					ctor: '_Tuple2',
					_0: _p31 - 1,
					_1: A3(func, _p31, x, _p30._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p32) {
				var _p33 = _p32;
				var _p34 = _p33._0;
				return {
					ctor: '_Tuple2',
					_0: _p34 + 1,
					_1: A3(func, _p34, x, _p33._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p35 = m;
						if (_p35.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p35._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p36 = m;
						if (_p36.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p36._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p37 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v24_1:
			do {
				if (_p37._0.ctor === '::') {
					if (_p37._1.ctor === '::') {
						var _v25 = _p37._0._1,
							_v26 = _p37._1._1,
							_v27 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							{
								ctor: '::',
								_0: _p37._0._0,
								_1: {
									ctor: '::',
									_0: _p37._1._0,
									_1: {ctor: '[]'}
								}
							});
						l1 = _v25;
						l2 = _v26;
						acc = _v27;
						continue interweaveHelp;
					} else {
						break _v24_1;
					}
				} else {
					if (_p37._1.ctor === '[]') {
						break _v24_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p38 = xs_;
	if (_p38.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p40._0),
				_elm_community$list_extra$List_Extra$permutations(_p40._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p38));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p41 = xs;
	if (_p41.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p42 = _p41._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p42, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p42,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p41._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p43 = ll;
		if (_p43.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p43._0.ctor === '[]') {
				var _v32 = _p43._1;
				ll = _v32;
				continue transpose;
			} else {
				var _p44 = _p43._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p44);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p44);
				return {
					ctor: '::',
					_0: {ctor: '::', _0: _p43._0._0, _1: heads},
					_1: _elm_community$list_extra$List_Extra$transpose(
						{ctor: '::', _0: _p43._0._1, _1: tails})
				};
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p45) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p45));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p46) {
				return !pred(_p46);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p47 = tail;
			if (_p47.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p47._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p49, _p48) {
				var _p50 = _p49;
				var _p51 = _p48;
				var result = A2(pred, _p50._0, _p51._0);
				var _p52 = result;
				if (_p52.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p50._1, _p51._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p53 = tail;
			if (_p53.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						{ctor: '::', _0: value, _1: _p53._0}));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p54 = xs;
		if (_p54.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p56 = _p54._1;
			var _p55 = _p54._0;
			return _elm_lang$core$Native_Utils.eq(x, _p55) ? _p56 : {
				ctor: '::',
				_0: _p55,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p56)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p57) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$filter,
				function (_p58) {
					var _p59 = _p58;
					return p(_p59._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p57)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p60) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p60));
	};
};
var _elm_community$list_extra$List_Extra$splitWhen = F2(
	function (predicate, list) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (i) {
				return A2(_elm_community$list_extra$List_Extra$splitAt, i, list);
			},
			A2(_elm_community$list_extra$List_Extra$findIndex, predicate, list));
	});
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p61 = list;
			if (_p61.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p62 = _p61._0;
				if (predicate(_p62)) {
					return _elm_lang$core$Maybe$Just(_p62);
				} else {
					var _v41 = predicate,
						_v42 = _p61._1;
					predicate = _v41;
					list = _v42;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p63) {
		return !A2(_elm_lang$core$List$member, x, _p63);
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (l, fl) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p64 = remaining;
			if (_p64.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p66 = _p64._1;
				var _p65 = _p64._0;
				var computedFirst = f(_p65);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v44 = f,
						_v45 = existing,
						_v46 = _p66;
					f = _v44;
					existing = _v45;
					remaining = _v46;
					continue uniqueHelp;
				} else {
					return {
						ctor: '::',
						_0: _p65,
						_1: A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p66)
					};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return A2(_elm_community$list_extra$List_Extra$allDifferentBy, _elm_lang$core$Basics$identity, list);
};
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p67 = list;
			if (_p67.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p67._0)) {
					var _v48 = predicate,
						_v49 = _p67._1;
					predicate = _v48;
					list = _v49;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				var _p68 = list;
				if (_p68.ctor === '[]') {
					return _elm_lang$core$List$reverse(memo);
				} else {
					var _p69 = _p68._0;
					if (predicate(_p69)) {
						var _v51 = {ctor: '::', _0: _p69, _1: memo},
							_v52 = _p68._1;
						memo = _v51;
						list = _v52;
						continue takeWhileMemo;
					} else {
						return _elm_lang$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p70) {
			return !p(_p70);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p71 = xs_;
		if (_p71.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p73 = _p71._0;
			var _p72 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p73),
				_p71._1);
			var ys = _p72._0;
			var zs = _p72._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p73, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p74) {
				var _p75 = _p74;
				var _p76 = _p75._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p76) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p75._0, _1: _p76};
			});
		var _p77 = ls;
		if (_p77.ctor === '::') {
			if (_p77._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p77._0);
			} else {
				var _p78 = _p77._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p78,
								_1: f(_p78)
							},
							_p77._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p79) {
				var _p80 = _p79;
				var _p81 = _p80._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p81) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p80._0, _1: _p81};
			});
		var _p82 = ls;
		if (_p82.ctor === '::') {
			if (_p82._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p82._0);
			} else {
				var _p83 = _p82._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p83,
								_1: f(_p83)
							},
							_p82._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p84 = xs;
	if (_p84.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p84._0, _1: _p84._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2)) {
				return _elm_lang$core$Maybe$Just(l);
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v59 = index2,
						_v60 = index1,
						_v61 = l;
					index1 = _v59;
					index2 = _v60;
					l = _v61;
					continue swapAt;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						var _p85 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
						var part1 = _p85._0;
						var tail1 = _p85._1;
						var _p86 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
						var head2 = _p86._0;
						var tail2 = _p86._1;
						return A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (_p88, _p87) {
									var _p89 = _p88;
									var _p90 = _p87;
									return _elm_lang$core$List$concat(
										{
											ctor: '::',
											_0: part1,
											_1: {
												ctor: '::',
												_0: {ctor: '::', _0: _p90._0, _1: _p89._1},
												_1: {
													ctor: '::',
													_0: {ctor: '::', _0: _p89._0, _1: _p90._1},
													_1: {ctor: '[]'}
												}
											}
										});
								}),
							_elm_community$list_extra$List_Extra$uncons(head2),
							_elm_community$list_extra$List_Extra$uncons(tail2));
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p91 = f(x);
		if (_p91.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p91._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p92) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p92));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (x) {
			return function (_p93) {
				return _elm_lang$core$Maybe$Just(
					A3(
						maybe,
						{ctor: '[]'},
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(x),
						_p93));
			};
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$Native_Debug = function() {


// IMPORT / EXPORT

function unsafeCoerce(value)
{
	return value;
}

var upload = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	var element = document.createElement('input');
	element.setAttribute('type', 'file');
	element.setAttribute('accept', 'text/json');
	element.style.display = 'none';
	element.addEventListener('change', function(event)
	{
		var fileReader = new FileReader();
		fileReader.onload = function(e)
		{
			callback(_elm_lang$core$Native_Scheduler.succeed(e.target.result));
		};
		fileReader.readAsText(event.target.files[0]);
		document.body.removeChild(element);
	});
	document.body.appendChild(element);
	element.click();
});

function download(historyLength, json)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
}


// POPOUT

function messageToString(value)
{
	switch (typeof value)
	{
		case 'boolean':
			return value ? 'True' : 'False';
		case 'number':
			return value + '';
		case 'string':
			return '"' + addSlashes(value, false) + '"';
	}
	if (value instanceof String)
	{
		return '\'' + addSlashes(value, true) + '\'';
	}
	if (typeof value !== 'object' || value === null || !('ctor' in value))
	{
		return '…';
	}

	var ctorStarter = value.ctor.substring(0, 5);
	if (ctorStarter === '_Tupl' || ctorStarter === '_Task')
	{
		return '…'
	}
	if (['_Array', '<decoder>', '_Process', '::', '[]', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.ctor) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.ctor;
		case 2:
			return value.ctor + ' ' + messageToString(value._0);
		default:
			return value.ctor + ' … ' + messageToString(value[keys[keys.length - 1]]);
	}
}


function primitive(str)
{
	return { ctor: 'Primitive', _0: str };
}


function init(value)
{
	var type = typeof value;

	if (type === 'boolean')
	{
		return {
			ctor: 'Constructor',
			_0: _elm_lang$core$Maybe$Just(value ? 'True' : 'False'),
			_1: true,
			_2: _elm_lang$core$Native_List.Nil
		};
	}

	if (type === 'number')
	{
		return primitive(value + '');
	}

	if (type === 'string')
	{
		return { ctor: 'S', _0: '"' + addSlashes(value, false) + '"' };
	}

	if (value instanceof String)
	{
		return { ctor: 'S', _0: "'" + addSlashes(value, true) + "'" };
	}

	if (value instanceof Date)
	{
		return primitive('<' + value.toString() + '>');
	}

	if (value === null)
	{
		return primitive('XXX');
	}

	if (type === 'object' && 'ctor' in value)
	{
		var ctor = value.ctor;

		if (ctor === '::' || ctor === '[]')
		{
			return {
				ctor: 'Sequence',
				_0: {ctor: 'ListSeq'},
				_1: true,
				_2: A2(_elm_lang$core$List$map, init, value)
			};
		}

		if (ctor === 'Set_elm_builtin')
		{
			return {
				ctor: 'Sequence',
				_0: {ctor: 'SetSeq'},
				_1: true,
				_2: A3(_elm_lang$core$Set$foldr, initCons, _elm_lang$core$Native_List.Nil, value)
			};
		}

		if (ctor === 'RBNode_elm_builtin' || ctor == 'RBEmpty_elm_builtin')
		{
			return {
				ctor: 'Dictionary',
				_0: true,
				_1: A3(_elm_lang$core$Dict$foldr, initKeyValueCons, _elm_lang$core$Native_List.Nil, value)
			};
		}

		if (ctor === '_Array')
		{
			return {
				ctor: 'Sequence',
				_0: {ctor: 'ArraySeq'},
				_1: true,
				_2: A3(_elm_lang$core$Array$foldr, initCons, _elm_lang$core$Native_List.Nil, value)
			};
		}

		var ctorStarter = value.ctor.substring(0, 5);
		if (ctorStarter === '_Task')
		{
			return primitive('<task>');
		}

		if (ctor === '<decoder>')
		{
			return primitive(ctor);
		}

		if (ctor === '_Process')
		{
			return primitive('<process>');
		}

		var list = _elm_lang$core$Native_List.Nil;
		for (var i in value)
		{
			if (i === 'ctor') continue;
			list = _elm_lang$core$Native_List.Cons(init(value[i]), list);
		}
		return {
			ctor: 'Constructor',
			_0: ctorStarter === '_Tupl' ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(ctor),
			_1: true,
			_2: _elm_lang$core$List$reverse(list)
		};
	}

	if (type === 'object')
	{
		var dict = _elm_lang$core$Dict$empty;
		for (var i in value)
		{
			dict = A3(_elm_lang$core$Dict$insert, i, init(value[i]), dict);
		}
		return { ctor: 'Record', _0: true, _1: dict };
	}

	return primitive('XXX');
}

var initCons = F2(initConsHelp);

function initConsHelp(value, list)
{
	return _elm_lang$core$Native_List.Cons(init(value), list);
}

var initKeyValueCons = F3(initKeyValueConsHelp);

function initKeyValueConsHelp(key, value, list)
{
	return _elm_lang$core$Native_List.Cons(
		_elm_lang$core$Native_Utils.Tuple2(init(key), init(value)),
		list
	);
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	upload: upload,
	download: F2(download),
	unsafeCoerce: unsafeCoerce,
	messageToString: messageToString,
	init: init
}

}();

var _elm_lang$virtual_dom$VirtualDom_Helpers$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom_Helpers$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom_Helpers$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom_Helpers$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom_Helpers$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom_Helpers$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom_Helpers$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom_Helpers$onClick = function (msg) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$virtual_dom$VirtualDom_Helpers$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom_Helpers$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom_Helpers$id = _elm_lang$virtual_dom$VirtualDom_Helpers$attribute('id');
var _elm_lang$virtual_dom$VirtualDom_Helpers$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom_Helpers$class = function (name) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$property,
		'className',
		_elm_lang$core$Json_Encode$string(name));
};
var _elm_lang$virtual_dom$VirtualDom_Helpers$href = function (name) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$property,
		'href',
		_elm_lang$core$Json_Encode$string(name));
};
var _elm_lang$virtual_dom$VirtualDom_Helpers$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom_Helpers$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom_Helpers$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom_Helpers$div = _elm_lang$virtual_dom$VirtualDom_Helpers$node('div');
var _elm_lang$virtual_dom$VirtualDom_Helpers$span = _elm_lang$virtual_dom$VirtualDom_Helpers$node('span');
var _elm_lang$virtual_dom$VirtualDom_Helpers$a = _elm_lang$virtual_dom$VirtualDom_Helpers$node('a');
var _elm_lang$virtual_dom$VirtualDom_Helpers$h1 = _elm_lang$virtual_dom$VirtualDom_Helpers$node('h1');
var _elm_lang$virtual_dom$VirtualDom_Helpers$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Helpers$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom_Helpers$Property = {ctor: 'Property'};

var _elm_lang$virtual_dom$VirtualDom_Expando$purple = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(136, 19, 145)'},
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$blue = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(28, 0, 207)'},
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$red = _elm_lang$virtual_dom$VirtualDom_Helpers$style(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'color', _1: 'rgb(196, 26, 22)'},
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$leftPad = function (maybeKey) {
	var _p0 = maybeKey;
	if (_p0.ctor === 'Nothing') {
		return _elm_lang$virtual_dom$VirtualDom_Helpers$style(
			{ctor: '[]'});
	} else {
		return _elm_lang$virtual_dom$VirtualDom_Helpers$style(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'padding-left', _1: '4ch'},
				_1: {ctor: '[]'}
			});
	}
};
var _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow = function (arrow) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$span,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'color', _1: '#777'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'padding-left', _1: '2ch'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'width', _1: '2ch'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
								_1: {ctor: '[]'}
							}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(arrow),
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			var _p1 = maybeIsClosed;
			if (_p1.ctor === 'Nothing') {
				return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('');
			} else {
				if (_p1._0 === true) {
					return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('▸');
				} else {
					return _elm_lang$virtual_dom$VirtualDom_Expando$makeArrow('▾');
				}
			}
		}();
		var _p2 = maybeKey;
		if (_p2.ctor === 'Nothing') {
			return {ctor: '::', _0: arrow, _1: description};
		} else {
			return {
				ctor: '::',
				_0: arrow,
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p2._0),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' = '),
						_1: description
					}
				}
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		var _p3 = entries;
		if (_p3.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: length + 1,
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('}'),
					_1: {ctor: '[]'}
				}
			};
		} else {
			var _p5 = _p3._0;
			var nextLength = (length + _elm_lang$core$String$length(_p5)) + 1;
			if (_elm_lang$core$Native_Utils.cmp(nextLength, 18) > 0) {
				return {
					ctor: '_Tuple2',
					_0: length + 2,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('…}'),
						_1: {ctor: '[]'}
					}
				};
			} else {
				var _p4 = A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord, nextLength, ',', _p3._1);
				var finalLength = _p4._0;
				var otherNodes = _p4._1;
				return {
					ctor: '_Tuple2',
					_0: finalLength,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p5),
									_1: {ctor: '[]'}
								}),
							_1: otherNodes
						}
					}
				};
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$elideMiddle = function (str) {
	return (_elm_lang$core$Native_Utils.cmp(
		_elm_lang$core$String$length(str),
		18) < 1) ? str : A2(
		_elm_lang$core$Basics_ops['++'],
		A2(_elm_lang$core$String$left, 8, str),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'...',
			A2(_elm_lang$core$String$right, 8, str)));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp = function (str) {
	return {
		ctor: '_Tuple2',
		_0: _elm_lang$core$String$length(str),
		_1: {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(str),
			_1: {ctor: '[]'}
		}
	};
};
var _elm_lang$virtual_dom$VirtualDom_Expando$updateIndex = F3(
	function (n, func, list) {
		var _p6 = list;
		if (_p6.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p8 = _p6._1;
			var _p7 = _p6._0;
			return (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) ? {
				ctor: '::',
				_0: func(_p7),
				_1: _p8
			} : {
				ctor: '::',
				_0: _p7,
				_1: A3(_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex, n - 1, func, _p8)
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString = F2(
	function (n, seqType) {
		var _p9 = seqType;
		switch (_p9.ctor) {
			case 'ListSeq':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'List(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(n),
						')'));
			case 'SetSeq':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'Set(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(n),
						')'));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'Array(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(n),
						')'));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTiny = function (value) {
	var _p10 = value;
	switch (_p10.ctor) {
		case 'S':
			var str = _elm_lang$virtual_dom$VirtualDom_Expando$elideMiddle(_p10._0);
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$String$length(str),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Expando$red,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(str),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			};
		case 'Primitive':
			var _p11 = _p10._0;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$String$length(_p11),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Expando$blue,
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p11),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			};
		case 'Sequence':
			return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
				A2(
					_elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString,
					_elm_lang$core$List$length(_p10._2),
					_p10._0));
		case 'Dictionary':
			return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Dict(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(
							_elm_lang$core$List$length(_p10._1)),
						')')));
		case 'Record':
			return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord(_p10._1);
		default:
			if (_p10._2.ctor === '[]') {
				return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
					A2(_elm_lang$core$Maybe$withDefault, 'Unit', _p10._0));
			} else {
				return _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyHelp(
					function () {
						var _p12 = _p10._0;
						if (_p12.ctor === 'Nothing') {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'Tuple(',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_lang$core$List$length(_p10._2)),
									')'));
						} else {
							return A2(_elm_lang$core$Basics_ops['++'], _p12._0, ' …');
						}
					}());
			}
	}
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord = function (record) {
	return _elm_lang$core$Dict$isEmpty(record) ? {
		ctor: '_Tuple2',
		_0: 2,
		_1: {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('{}'),
			_1: {ctor: '[]'}
		}
	} : A3(
		_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp,
		0,
		'{ ',
		_elm_lang$core$Dict$toList(record));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		var _p13 = entries;
		if (_p13.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: length + 2,
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' }'),
					_1: {ctor: '[]'}
				}
			};
		} else {
			var _p16 = _p13._0._0;
			var _p14 = _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny(_p13._0._1);
			var valueLen = _p14._0;
			var valueNodes = _p14._1;
			var fieldLen = _elm_lang$core$String$length(_p16);
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (_elm_lang$core$Native_Utils.cmp(newLength, 60) > 0) {
				return {
					ctor: '_Tuple2',
					_0: length + 4,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', … }'),
						_1: {ctor: '[]'}
					}
				};
			} else {
				var _p15 = A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecordHelp, newLength, ', ', _p13._1);
				var finalLength = _p15._0;
				var otherNodes = _p15._1;
				return {
					ctor: '_Tuple2',
					_0: finalLength,
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$purple,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p16),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' = '),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$virtual_dom$VirtualDom_Helpers$span,
										{ctor: '[]'},
										valueNodes),
									_1: otherNodes
								}
							}
						}
					}
				};
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny = function (value) {
	var _p17 = value;
	if (_p17.ctor === 'Record') {
		return A3(
			_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTinyRecord,
			0,
			'{',
			_elm_lang$core$Dict$keys(_p17._1));
	} else {
		return _elm_lang$virtual_dom$VirtualDom_Expando$viewTiny(value);
	}
};
var _elm_lang$virtual_dom$VirtualDom_Expando$Constructor = F3(
	function (a, b, c) {
		return {ctor: 'Constructor', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Record = F2(
	function (a, b) {
		return {ctor: 'Record', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Dictionary = F2(
	function (a, b) {
		return {ctor: 'Dictionary', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Sequence = F3(
	function (a, b, c) {
		return {ctor: 'Sequence', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$initHelp = F2(
	function (isOuter, expando) {
		var _p18 = expando;
		switch (_p18.ctor) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var _p20 = _p18._0;
				var _p19 = _p18._2;
				return isOuter ? A3(
					_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
					_p20,
					false,
					A2(
						_elm_lang$core$List$map,
						_elm_lang$virtual_dom$VirtualDom_Expando$initHelp(false),
						_p19)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(_p19),
					8) < 1) ? A3(_elm_lang$virtual_dom$VirtualDom_Expando$Sequence, _p20, false, _p19) : expando);
			case 'Dictionary':
				var _p23 = _p18._1;
				return isOuter ? A2(
					_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
					false,
					A2(
						_elm_lang$core$List$map,
						function (_p21) {
							var _p22 = _p21;
							return {
								ctor: '_Tuple2',
								_0: _p22._0,
								_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$initHelp, false, _p22._1)
							};
						},
						_p23)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(_p23),
					8) < 1) ? A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, false, _p23) : expando);
			case 'Record':
				var _p25 = _p18._1;
				return isOuter ? A2(
					_elm_lang$virtual_dom$VirtualDom_Expando$Record,
					false,
					A2(
						_elm_lang$core$Dict$map,
						F2(
							function (_p24, v) {
								return A2(_elm_lang$virtual_dom$VirtualDom_Expando$initHelp, false, v);
							}),
						_p25)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$Dict$size(_p25),
					4) < 1) ? A2(_elm_lang$virtual_dom$VirtualDom_Expando$Record, false, _p25) : expando);
			default:
				var _p27 = _p18._0;
				var _p26 = _p18._2;
				return isOuter ? A3(
					_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
					_p27,
					false,
					A2(
						_elm_lang$core$List$map,
						_elm_lang$virtual_dom$VirtualDom_Expando$initHelp(false),
						_p26)) : ((_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(_p26),
					4) < 1) ? A3(_elm_lang$virtual_dom$VirtualDom_Expando$Constructor, _p27, false, _p26) : expando);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$init = function (value) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Expando$initHelp,
		true,
		_elm_lang$virtual_dom$Native_Debug.init(value));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp = F2(
	function (old, $new) {
		var _p28 = {ctor: '_Tuple2', _0: old, _1: $new};
		_v12_6:
		do {
			if (_p28.ctor === '_Tuple2') {
				switch (_p28._1.ctor) {
					case 'S':
						return $new;
					case 'Primitive':
						return $new;
					case 'Sequence':
						if (_p28._0.ctor === 'Sequence') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
								_p28._1._0,
								_p28._0._1,
								A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p28._0._2, _p28._1._2));
						} else {
							break _v12_6;
						}
					case 'Dictionary':
						if (_p28._0.ctor === 'Dictionary') {
							return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, _p28._0._0, _p28._1._1);
						} else {
							break _v12_6;
						}
					case 'Record':
						if (_p28._0.ctor === 'Record') {
							return A2(
								_elm_lang$virtual_dom$VirtualDom_Expando$Record,
								_p28._0._0,
								A2(
									_elm_lang$core$Dict$map,
									_elm_lang$virtual_dom$VirtualDom_Expando$mergeDictHelp(_p28._0._1),
									_p28._1._1));
						} else {
							break _v12_6;
						}
					default:
						if (_p28._0.ctor === 'Constructor') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
								_p28._1._0,
								_p28._0._1,
								A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p28._0._2, _p28._1._2));
						} else {
							break _v12_6;
						}
				}
			} else {
				break _v12_6;
			}
		} while(false);
		return $new;
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _p29 = A2(_elm_lang$core$Dict$get, key, oldDict);
		if (_p29.ctor === 'Nothing') {
			return value;
		} else {
			return A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp, _p29._0, value);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp = F2(
	function (olds, news) {
		var _p30 = {ctor: '_Tuple2', _0: olds, _1: news};
		if (_p30._0.ctor === '[]') {
			return news;
		} else {
			if (_p30._1.ctor === '[]') {
				return news;
			} else {
				return {
					ctor: '::',
					_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp, _p30._0._0, _p30._1._0),
					_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$mergeListHelp, _p30._0._1, _p30._1._1)
				};
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$merge = F2(
	function (value, expando) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Expando$mergeHelp,
			expando,
			_elm_lang$virtual_dom$Native_Debug.init(value));
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$update = F2(
	function (msg, value) {
		var _p31 = value;
		switch (_p31.ctor) {
			case 'S':
				return _elm_lang$core$Native_Utils.crashCase(
					'VirtualDom.Expando',
					{
						start: {line: 168, column: 3},
						end: {line: 235, column: 50}
					},
					_p31)('No messages for primitives');
			case 'Primitive':
				return _elm_lang$core$Native_Utils.crashCase(
					'VirtualDom.Expando',
					{
						start: {line: 168, column: 3},
						end: {line: 235, column: 50}
					},
					_p31)('No messages for primitives');
			case 'Sequence':
				var _p39 = _p31._2;
				var _p38 = _p31._0;
				var _p37 = _p31._1;
				var _p34 = msg;
				switch (_p34.ctor) {
					case 'Toggle':
						return A3(_elm_lang$virtual_dom$VirtualDom_Expando$Sequence, _p38, !_p37, _p39);
					case 'Index':
						if (_p34._0.ctor === 'None') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Sequence,
								_p38,
								_p37,
								A3(
									_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
									_p34._1,
									_elm_lang$virtual_dom$VirtualDom_Expando$update(_p34._2),
									_p39));
						} else {
							return _elm_lang$core$Native_Utils.crashCase(
								'VirtualDom.Expando',
								{
									start: {line: 176, column: 7},
									end: {line: 188, column: 46}
								},
								_p34)('No redirected indexes on sequences');
						}
					default:
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 176, column: 7},
								end: {line: 188, column: 46}
							},
							_p34)('No field on sequences');
				}
			case 'Dictionary':
				var _p51 = _p31._1;
				var _p50 = _p31._0;
				var _p40 = msg;
				switch (_p40.ctor) {
					case 'Toggle':
						return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary, !_p50, _p51);
					case 'Index':
						var _p48 = _p40._2;
						var _p47 = _p40._1;
						var _p41 = _p40._0;
						switch (_p41.ctor) {
							case 'None':
								return _elm_lang$core$Native_Utils.crashCase(
									'VirtualDom.Expando',
									{
										start: {line: 196, column: 11},
										end: {line: 206, column: 81}
									},
									_p41)('must have redirect for dictionaries');
							case 'Key':
								return A2(
									_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
									_p50,
									A3(
										_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
										_p47,
										function (_p43) {
											var _p44 = _p43;
											return {
												ctor: '_Tuple2',
												_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p48, _p44._0),
												_1: _p44._1
											};
										},
										_p51));
							default:
								return A2(
									_elm_lang$virtual_dom$VirtualDom_Expando$Dictionary,
									_p50,
									A3(
										_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
										_p47,
										function (_p45) {
											var _p46 = _p45;
											return {
												ctor: '_Tuple2',
												_0: _p46._0,
												_1: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p48, _p46._1)
											};
										},
										_p51));
						}
					default:
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 191, column: 7},
								end: {line: 209, column: 50}
							},
							_p40)('no field for dictionaries');
				}
			case 'Record':
				var _p55 = _p31._1;
				var _p54 = _p31._0;
				var _p52 = msg;
				switch (_p52.ctor) {
					case 'Toggle':
						return A2(_elm_lang$virtual_dom$VirtualDom_Expando$Record, !_p54, _p55);
					case 'Index':
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 212, column: 7},
								end: {line: 220, column: 77}
							},
							_p52)('No index for records');
					default:
						return A2(
							_elm_lang$virtual_dom$VirtualDom_Expando$Record,
							_p54,
							A3(
								_elm_lang$core$Dict$update,
								_p52._0,
								_elm_lang$virtual_dom$VirtualDom_Expando$updateField(_p52._1),
								_p55));
				}
			default:
				var _p61 = _p31._2;
				var _p60 = _p31._0;
				var _p59 = _p31._1;
				var _p56 = msg;
				switch (_p56.ctor) {
					case 'Toggle':
						return A3(_elm_lang$virtual_dom$VirtualDom_Expando$Constructor, _p60, !_p59, _p61);
					case 'Index':
						if (_p56._0.ctor === 'None') {
							return A3(
								_elm_lang$virtual_dom$VirtualDom_Expando$Constructor,
								_p60,
								_p59,
								A3(
									_elm_lang$virtual_dom$VirtualDom_Expando$updateIndex,
									_p56._1,
									_elm_lang$virtual_dom$VirtualDom_Expando$update(_p56._2),
									_p61));
						} else {
							return _elm_lang$core$Native_Utils.crashCase(
								'VirtualDom.Expando',
								{
									start: {line: 223, column: 7},
									end: {line: 235, column: 50}
								},
								_p56)('No redirected indexes on sequences');
						}
					default:
						return _elm_lang$core$Native_Utils.crashCase(
							'VirtualDom.Expando',
							{
								start: {line: 223, column: 7},
								end: {line: 235, column: 50}
							},
							_p56)('No field for constructors');
				}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$updateField = F2(
	function (msg, maybeExpando) {
		var _p62 = maybeExpando;
		if (_p62.ctor === 'Nothing') {
			return _elm_lang$core$Native_Utils.crashCase(
				'VirtualDom.Expando',
				{
					start: {line: 253, column: 3},
					end: {line: 258, column: 32}
				},
				_p62)('key does not exist');
		} else {
			return _elm_lang$core$Maybe$Just(
				A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, msg, _p62._0));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Primitive = function (a) {
	return {ctor: 'Primitive', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Expando$S = function (a) {
	return {ctor: 'S', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Expando$ArraySeq = {ctor: 'ArraySeq'};
var _elm_lang$virtual_dom$VirtualDom_Expando$SetSeq = {ctor: 'SetSeq'};
var _elm_lang$virtual_dom$VirtualDom_Expando$ListSeq = {ctor: 'ListSeq'};
var _elm_lang$virtual_dom$VirtualDom_Expando$Field = F2(
	function (a, b) {
		return {ctor: 'Field', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Index = F3(
	function (a, b, c) {
		return {ctor: 'Index', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$Toggle = {ctor: 'Toggle'};
var _elm_lang$virtual_dom$VirtualDom_Expando$Value = {ctor: 'Value'};
var _elm_lang$virtual_dom$VirtualDom_Expando$Key = {ctor: 'Key'};
var _elm_lang$virtual_dom$VirtualDom_Expando$None = {ctor: 'None'};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$map,
			A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, index),
			A2(
				_elm_lang$virtual_dom$VirtualDom_Expando$view,
				_elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$toString(index)),
				value));
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$view = F2(
	function (maybeKey, expando) {
		var _p64 = expando;
		switch (_p64.ctor) {
			case 'S':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Nothing,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$red,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p64._0),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}));
			case 'Primitive':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Nothing,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Expando$blue,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p64._0),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}));
			case 'Sequence':
				return A4(_elm_lang$virtual_dom$VirtualDom_Expando$viewSequence, maybeKey, _p64._0, _p64._1, _p64._2);
			case 'Dictionary':
				return A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewDictionary, maybeKey, _p64._0, _p64._1);
			case 'Record':
				return A3(_elm_lang$virtual_dom$VirtualDom_Expando$viewRecord, maybeKey, _p64._0, _p64._1);
			default:
				return A4(_elm_lang$virtual_dom$VirtualDom_Expando$viewConstructor, maybeKey, _p64._0, _p64._1, _p64._2);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var _p65 = function () {
			var _p66 = valueList;
			if (_p66.ctor === '[]') {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Maybe$Nothing,
					_1: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$div,
						{ctor: '[]'},
						{ctor: '[]'})
				};
			} else {
				if (_p66._1.ctor === '[]') {
					var _p67 = _p66._0;
					switch (_p67.ctor) {
						case 'S':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Nothing,
								_1: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'})
							};
						case 'Primitive':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Nothing,
								_1: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'})
							};
						case 'Sequence':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen(_p67._2))
							};
						case 'Dictionary':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen(_p67._1))
							};
						case 'Record':
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen(_p67._1))
							};
						default:
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Maybe$Just(isClosed),
								_1: isClosed ? A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$div,
									{ctor: '[]'},
									{ctor: '[]'}) : A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$None, 0),
									_elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen(_p67._2))
							};
					}
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Maybe$Just(isClosed),
						_1: isClosed ? A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$div,
							{ctor: '[]'},
							{ctor: '[]'}) : _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen(valueList)
					};
				}
			}
		}();
		var maybeIsClosed = _p65._0;
		var openHtml = _p65._1;
		var tinyArgs = A2(
			_elm_lang$core$List$map,
			function (_p68) {
				return _elm_lang$core$Tuple$second(
					_elm_lang$virtual_dom$VirtualDom_Expando$viewExtraTiny(_p68));
			},
			valueList);
		var description = function () {
			var _p69 = {ctor: '_Tuple2', _0: maybeName, _1: tinyArgs};
			if (_p69._0.ctor === 'Nothing') {
				if (_p69._1.ctor === '[]') {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('()'),
						_1: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('( '),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{ctor: '[]'},
								_p69._1._0),
							_1: A3(
								_elm_lang$core$List$foldr,
								F2(
									function (args, rest) {
										return {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', '),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$virtual_dom$VirtualDom_Helpers$span,
													{ctor: '[]'},
													args),
												_1: rest
											}
										};
									}),
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' )'),
									_1: {ctor: '[]'}
								},
								_p69._1._1)
						}
					};
				}
			} else {
				if (_p69._1.ctor === '[]') {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p69._0._0),
						_1: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
							A2(_elm_lang$core$Basics_ops['++'], _p69._0._0, ' ')),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$span,
								{ctor: '[]'},
								_p69._1._0),
							_1: A3(
								_elm_lang$core$List$foldr,
								F2(
									function (args, rest) {
										return {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' '),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$virtual_dom$VirtualDom_Helpers$span,
													{ctor: '[]'},
													args),
												_1: rest
											}
										};
									}),
								{ctor: '[]'},
								_p69._1._1)
						}
					};
				}
			}
		}();
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter, maybeKey, maybeIsClosed, description)),
				_1: {
					ctor: '::',
					_0: openHtml,
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorOpen = function (valueList) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry, valueList));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryEntry, keyValuePairs));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryEntry = F2(
	function (index, _p70) {
		var _p71 = _p70;
		var _p74 = _p71._1;
		var _p73 = _p71._0;
		var _p72 = _p73;
		switch (_p72.ctor) {
			case 'S':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$map,
					A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
					A2(
						_elm_lang$virtual_dom$VirtualDom_Expando$view,
						_elm_lang$core$Maybe$Just(_p72._0),
						_p74));
			case 'Primitive':
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$map,
					A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
					A2(
						_elm_lang$virtual_dom$VirtualDom_Expando$view,
						_elm_lang$core$Maybe$Just(_p72._0),
						_p74));
			default:
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$map,
							A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Key, index),
							A2(
								_elm_lang$virtual_dom$VirtualDom_Expando$view,
								_elm_lang$core$Maybe$Just('key'),
								_p73)),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$map,
								A2(_elm_lang$virtual_dom$VirtualDom_Expando$Index, _elm_lang$virtual_dom$VirtualDom_Expando$Value, index),
								A2(
									_elm_lang$virtual_dom$VirtualDom_Expando$view,
									_elm_lang$core$Maybe$Just('value'),
									_p74)),
							_1: {ctor: '[]'}
						}
					});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen = function (record) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(
			_elm_lang$core$List$map,
			_elm_lang$virtual_dom$VirtualDom_Expando$viewRecordEntry,
			_elm_lang$core$Dict$toList(record)));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordEntry = function (_p75) {
	var _p76 = _p75;
	var _p77 = _p76._0;
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$map,
		_elm_lang$virtual_dom$VirtualDom_Expando$Field(_p77),
		A2(
			_elm_lang$virtual_dom$VirtualDom_Expando$view,
			_elm_lang$core$Maybe$Just(_p77),
			_p76._1));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen = function (values) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{ctor: '[]'},
		A2(_elm_lang$core$List$indexedMap, _elm_lang$virtual_dom$VirtualDom_Expando$viewConstructorEntry, values));
};
var _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = A2(
			_elm_lang$core$Basics_ops['++'],
			'Dict(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(
					_elm_lang$core$List$length(keyValuePairs)),
				')'));
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Just(isClosed),
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
							_1: {ctor: '[]'}
						})),
				_1: {
					ctor: '::',
					_0: isClosed ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Expando$viewDictionaryOpen(keyValuePairs),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _p78 = isClosed ? {
			ctor: '_Tuple3',
			_0: _elm_lang$core$Tuple$second(
				_elm_lang$virtual_dom$VirtualDom_Expando$viewTinyRecord(record)),
			_1: _elm_lang$virtual_dom$VirtualDom_Helpers$text(''),
			_2: _elm_lang$virtual_dom$VirtualDom_Helpers$text('')
		} : {
			ctor: '_Tuple3',
			_0: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('{'),
				_1: {ctor: '[]'}
			},
			_1: _elm_lang$virtual_dom$VirtualDom_Expando$viewRecordOpen(record),
			_2: A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(
						_elm_lang$core$Maybe$Just(
							{ctor: '_Tuple0'})),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('}'),
					_1: {ctor: '[]'}
				})
		};
		var start = _p78._0;
		var middle = _p78._1;
		var end = _p78._2;
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Just(isClosed),
						start)),
				_1: {
					ctor: '::',
					_0: middle,
					_1: {
						ctor: '::',
						_0: end,
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			_elm_lang$virtual_dom$VirtualDom_Expando$seqTypeToString,
			_elm_lang$core$List$length(valueList),
			seqType);
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Expando$leftPad(maybeKey),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Expando$Toggle),
						_1: {ctor: '[]'}
					},
					A3(
						_elm_lang$virtual_dom$VirtualDom_Expando$lineStarter,
						maybeKey,
						_elm_lang$core$Maybe$Just(isClosed),
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(starter),
							_1: {ctor: '[]'}
						})),
				_1: {
					ctor: '::',
					_0: isClosed ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Expando$viewSequenceOpen(valueList),
					_1: {ctor: '[]'}
				}
			});
	});

var _elm_lang$virtual_dom$VirtualDom_Report$some = function (list) {
	return !_elm_lang$core$List$isEmpty(list);
};
var _elm_lang$virtual_dom$VirtualDom_Report$TagChanges = F4(
	function (a, b, c, d) {
		return {removed: a, changed: b, added: c, argsMatch: d};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$emptyTagChanges = function (argsMatch) {
	return A4(
		_elm_lang$virtual_dom$VirtualDom_Report$TagChanges,
		{ctor: '[]'},
		{ctor: '[]'},
		{ctor: '[]'},
		argsMatch);
};
var _elm_lang$virtual_dom$VirtualDom_Report$hasTagChanges = function (tagChanges) {
	return _elm_lang$core$Native_Utils.eq(
		tagChanges,
		A4(
			_elm_lang$virtual_dom$VirtualDom_Report$TagChanges,
			{ctor: '[]'},
			{ctor: '[]'},
			{ctor: '[]'},
			true));
};
var _elm_lang$virtual_dom$VirtualDom_Report$SomethingChanged = function (a) {
	return {ctor: 'SomethingChanged', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Report$MessageChanged = F2(
	function (a, b) {
		return {ctor: 'MessageChanged', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$VersionChanged = F2(
	function (a, b) {
		return {ctor: 'VersionChanged', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$CorruptHistory = {ctor: 'CorruptHistory'};
var _elm_lang$virtual_dom$VirtualDom_Report$UnionChange = F2(
	function (a, b) {
		return {ctor: 'UnionChange', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Report$AliasChange = function (a) {
	return {ctor: 'AliasChange', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Report$Fine = {ctor: 'Fine'};
var _elm_lang$virtual_dom$VirtualDom_Report$Risky = {ctor: 'Risky'};
var _elm_lang$virtual_dom$VirtualDom_Report$Impossible = {ctor: 'Impossible'};
var _elm_lang$virtual_dom$VirtualDom_Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			var _p0 = statusList;
			if (_p0.ctor === '[]') {
				return status;
			} else {
				switch (_p0._0.ctor) {
					case 'Impossible':
						return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
					case 'Risky':
						var _v1 = _elm_lang$virtual_dom$VirtualDom_Report$Risky,
							_v2 = _p0._1;
						status = _v1;
						statusList = _v2;
						continue worstCase;
					default:
						var _v3 = status,
							_v4 = _p0._1;
						status = _v3;
						statusList = _v4;
						continue worstCase;
				}
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Report$evaluateChange = function (change) {
	var _p1 = change;
	if (_p1.ctor === 'AliasChange') {
		return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
	} else {
		return ((!_p1._1.argsMatch) || (_elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.changed) || _elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.removed))) ? _elm_lang$virtual_dom$VirtualDom_Report$Impossible : (_elm_lang$virtual_dom$VirtualDom_Report$some(_p1._1.added) ? _elm_lang$virtual_dom$VirtualDom_Report$Risky : _elm_lang$virtual_dom$VirtualDom_Report$Fine);
	}
};
var _elm_lang$virtual_dom$VirtualDom_Report$evaluate = function (report) {
	var _p2 = report;
	switch (_p2.ctor) {
		case 'CorruptHistory':
			return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
		case 'VersionChanged':
			return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
		case 'MessageChanged':
			return _elm_lang$virtual_dom$VirtualDom_Report$Impossible;
		default:
			return A2(
				_elm_lang$virtual_dom$VirtualDom_Report$worstCase,
				_elm_lang$virtual_dom$VirtualDom_Report$Fine,
				A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Report$evaluateChange, _p2._0));
	}
};

var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict = F2(
	function (f, dict) {
		return _elm_lang$core$Json_Encode$object(
			_elm_lang$core$Dict$toList(
				A2(
					_elm_lang$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeUnion = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'args',
				_1: _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p1.args))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'tags',
					_1: A2(
						_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict,
						function (_p2) {
							return _elm_lang$core$Json_Encode$list(
								A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p2));
						},
						_p1.tags)
				},
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeAlias = function (_p3) {
	var _p4 = _p3;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'args',
				_1: _elm_lang$core$Json_Encode$list(
					A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$string, _p4.args))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'type',
					_1: _elm_lang$core$Json_Encode$string(_p4.tipe)
				},
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeTypes = function (_p5) {
	var _p6 = _p5;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'message',
				_1: _elm_lang$core$Json_Encode$string(_p6.message)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'aliases',
					_1: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict, _elm_lang$virtual_dom$VirtualDom_Metadata$encodeAlias, _p6.aliases)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'unions',
						_1: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$encodeDict, _elm_lang$virtual_dom$VirtualDom_Metadata$encodeUnion, _p6.unions)
					},
					_1: {ctor: '[]'}
				}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encodeVersions = function (_p7) {
	var _p8 = _p7;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'elm',
				_1: _elm_lang$core$Json_Encode$string(_p8.elm)
			},
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$encode = function (_p9) {
	var _p10 = _p9;
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'versions',
				_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encodeVersions(_p10.versions)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'types',
					_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encodeTypes(_p10.types)
				},
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkTag = F4(
	function (tag, old, $new, changes) {
		return _elm_lang$core$Native_Utils.eq(old, $new) ? changes : _elm_lang$core$Native_Utils.update(
			changes,
			{
				changed: {ctor: '::', _0: tag, _1: changes.changed}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$addTag = F3(
	function (tag, _p11, changes) {
		return _elm_lang$core$Native_Utils.update(
			changes,
			{
				added: {ctor: '::', _0: tag, _1: changes.added}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$removeTag = F3(
	function (tag, _p12, changes) {
		return _elm_lang$core$Native_Utils.update(
			changes,
			{
				removed: {ctor: '::', _0: tag, _1: changes.removed}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkUnion = F4(
	function (name, old, $new, changes) {
		var tagChanges = A6(
			_elm_lang$core$Dict$merge,
			_elm_lang$virtual_dom$VirtualDom_Metadata$removeTag,
			_elm_lang$virtual_dom$VirtualDom_Metadata$checkTag,
			_elm_lang$virtual_dom$VirtualDom_Metadata$addTag,
			old.tags,
			$new.tags,
			_elm_lang$virtual_dom$VirtualDom_Report$emptyTagChanges(
				_elm_lang$core$Native_Utils.eq(old.args, $new.args)));
		return _elm_lang$virtual_dom$VirtualDom_Report$hasTagChanges(tagChanges) ? changes : {
			ctor: '::',
			_0: A2(_elm_lang$virtual_dom$VirtualDom_Report$UnionChange, name, tagChanges),
			_1: changes
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkAlias = F4(
	function (name, old, $new, changes) {
		return (_elm_lang$core$Native_Utils.eq(old.tipe, $new.tipe) && _elm_lang$core$Native_Utils.eq(old.args, $new.args)) ? changes : {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Report$AliasChange(name),
			_1: changes
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$checkTypes = F2(
	function (old, $new) {
		return (!_elm_lang$core$Native_Utils.eq(old.message, $new.message)) ? A2(_elm_lang$virtual_dom$VirtualDom_Report$MessageChanged, old.message, $new.message) : _elm_lang$virtual_dom$VirtualDom_Report$SomethingChanged(
			A6(
				_elm_lang$core$Dict$merge,
				_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
				_elm_lang$virtual_dom$VirtualDom_Metadata$checkUnion,
				_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
				old.unions,
				$new.unions,
				A6(
					_elm_lang$core$Dict$merge,
					_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
					_elm_lang$virtual_dom$VirtualDom_Metadata$checkAlias,
					_elm_lang$virtual_dom$VirtualDom_Metadata$ignore,
					old.aliases,
					$new.aliases,
					{ctor: '[]'})));
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$check = F2(
	function (old, $new) {
		return (!_elm_lang$core$Native_Utils.eq(old.versions.elm, $new.versions.elm)) ? A2(_elm_lang$virtual_dom$VirtualDom_Report$VersionChanged, old.versions.elm, $new.versions.elm) : A2(_elm_lang$virtual_dom$VirtualDom_Metadata$checkTypes, old.types, $new.types);
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$hasProblem = F2(
	function (tipe, _p13) {
		var _p14 = _p13;
		return A2(_elm_lang$core$String$contains, _p14._1, tipe) ? _elm_lang$core$Maybe$Just(_p14._0) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$Metadata = F2(
	function (a, b) {
		return {versions: a, types: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$Versions = function (a) {
	return {elm: a};
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeVersions = A2(
	_elm_lang$core$Json_Decode$map,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Versions,
	A2(_elm_lang$core$Json_Decode$field, 'elm', _elm_lang$core$Json_Decode$string));
var _elm_lang$virtual_dom$VirtualDom_Metadata$Types = F3(
	function (a, b, c) {
		return {message: a, aliases: b, unions: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$Alias = F2(
	function (a, b) {
		return {args: a, tipe: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeAlias = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Alias,
	A2(
		_elm_lang$core$Json_Decode$field,
		'args',
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
	A2(_elm_lang$core$Json_Decode$field, 'type', _elm_lang$core$Json_Decode$string));
var _elm_lang$virtual_dom$VirtualDom_Metadata$Union = F2(
	function (a, b) {
		return {args: a, tags: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeUnion = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Union,
	A2(
		_elm_lang$core$Json_Decode$field,
		'args',
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
	A2(
		_elm_lang$core$Json_Decode$field,
		'tags',
		_elm_lang$core$Json_Decode$dict(
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string))));
var _elm_lang$virtual_dom$VirtualDom_Metadata$decodeTypes = A4(
	_elm_lang$core$Json_Decode$map3,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Types,
	A2(_elm_lang$core$Json_Decode$field, 'message', _elm_lang$core$Json_Decode$string),
	A2(
		_elm_lang$core$Json_Decode$field,
		'aliases',
		_elm_lang$core$Json_Decode$dict(_elm_lang$virtual_dom$VirtualDom_Metadata$decodeAlias)),
	A2(
		_elm_lang$core$Json_Decode$field,
		'unions',
		_elm_lang$core$Json_Decode$dict(_elm_lang$virtual_dom$VirtualDom_Metadata$decodeUnion)));
var _elm_lang$virtual_dom$VirtualDom_Metadata$decoder = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$virtual_dom$VirtualDom_Metadata$Metadata,
	A2(_elm_lang$core$Json_Decode$field, 'versions', _elm_lang$virtual_dom$VirtualDom_Metadata$decodeVersions),
	A2(_elm_lang$core$Json_Decode$field, 'types', _elm_lang$virtual_dom$VirtualDom_Metadata$decodeTypes));
var _elm_lang$virtual_dom$VirtualDom_Metadata$Error = F2(
	function (a, b) {
		return {message: a, problems: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType = F2(
	function (a, b) {
		return {name: a, problems: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom = {ctor: 'VirtualDom'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Program = {ctor: 'Program'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Request = {ctor: 'Request'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Socket = {ctor: 'Socket'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Process = {ctor: 'Process'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Task = {ctor: 'Task'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Decoder = {ctor: 'Decoder'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$Function = {ctor: 'Function'};
var _elm_lang$virtual_dom$VirtualDom_Metadata$problemTable = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Function, _1: '->'},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Decoder, _1: 'Json.Decode.Decoder'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Task, _1: 'Task.Task'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Process, _1: 'Process.Id'},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Socket, _1: 'WebSocket.LowLevel.WebSocket'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Request, _1: 'Http.Request'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$Program, _1: 'Platform.Program'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom, _1: 'VirtualDom.Node'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _elm_lang$virtual_dom$VirtualDom_Metadata$VirtualDom, _1: 'VirtualDom.Attribute'},
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$findProblems = function (tipe) {
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$virtual_dom$VirtualDom_Metadata$hasProblem(tipe),
		_elm_lang$virtual_dom$VirtualDom_Metadata$problemTable);
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadAliases = F3(
	function (name, _p15, list) {
		var _p16 = _p15;
		var _p17 = _elm_lang$virtual_dom$VirtualDom_Metadata$findProblems(_p16.tipe);
		if (_p17.ctor === '[]') {
			return list;
		} else {
			return {
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType, name, _p17),
				_1: list
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadUnions = F3(
	function (name, _p18, list) {
		var _p19 = _p18;
		var _p20 = A2(
			_elm_lang$core$List$concatMap,
			_elm_lang$virtual_dom$VirtualDom_Metadata$findProblems,
			_elm_lang$core$List$concat(
				_elm_lang$core$Dict$values(_p19.tags)));
		if (_p20.ctor === '[]') {
			return list;
		} else {
			return {
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Metadata$ProblemType, name, _p20),
				_1: list
			};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Metadata$isPortable = function (_p21) {
	var _p22 = _p21;
	var _p24 = _p22.types;
	var badAliases = A3(
		_elm_lang$core$Dict$foldl,
		_elm_lang$virtual_dom$VirtualDom_Metadata$collectBadAliases,
		{ctor: '[]'},
		_p24.aliases);
	var _p23 = A3(_elm_lang$core$Dict$foldl, _elm_lang$virtual_dom$VirtualDom_Metadata$collectBadUnions, badAliases, _p24.unions);
	if (_p23.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			A2(_elm_lang$virtual_dom$VirtualDom_Metadata$Error, _p24.message, _p23));
	}
};
var _elm_lang$virtual_dom$VirtualDom_Metadata$decode = function (value) {
	var _p25 = A2(_elm_lang$core$Json_Decode$decodeValue, _elm_lang$virtual_dom$VirtualDom_Metadata$decoder, value);
	if (_p25.ctor === 'Err') {
		return _elm_lang$core$Native_Utils.crashCase(
			'VirtualDom.Metadata',
			{
				start: {line: 229, column: 3},
				end: {line: 239, column: 20}
			},
			_p25)('Compiler is generating bad metadata. Report this at <https://github.com/elm-lang/virtual-dom/issues>.');
	} else {
		var _p28 = _p25._0;
		var _p27 = _elm_lang$virtual_dom$VirtualDom_Metadata$isPortable(_p28);
		if (_p27.ctor === 'Nothing') {
			return _elm_lang$core$Result$Ok(_p28);
		} else {
			return _elm_lang$core$Result$Err(_p27._0);
		}
	}
};

var _elm_lang$virtual_dom$VirtualDom_History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _elm_lang$virtual_dom$Native_Debug.messageToString(msg);
		var className = _elm_lang$core$Native_Utils.eq(currentIndex, index) ? 'messages-entry messages-entry-selected' : 'messages-entry';
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class(className),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$on,
						'click',
						_elm_lang$core$Json_Decode$succeed(index)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$span,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('messages-entry-content'),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$virtual_dom$VirtualDom_Helpers$attribute, 'title', messageName),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(messageName),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('messages-entry-index'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
								_elm_lang$core$Basics$toString(index)),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_History$consMsg = F3(
	function (currentIndex, msg, _p0) {
		var _p1 = _p0;
		var _p2 = _p1._0;
		return {
			ctor: '_Tuple2',
			_0: _p2 - 1,
			_1: {
				ctor: '::',
				_0: A4(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy3, _elm_lang$virtual_dom$VirtualDom_History$viewMessage, currentIndex, _p2, msg),
				_1: _p1._1
			}
		};
	});
var _elm_lang$virtual_dom$VirtualDom_History$viewSnapshot = F3(
	function (currentIndex, index, _p3) {
		var _p4 = _p3;
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{ctor: '[]'},
			_elm_lang$core$Tuple$second(
				A3(
					_elm_lang$core$Array$foldl,
					_elm_lang$virtual_dom$VirtualDom_History$consMsg(currentIndex),
					{
						ctor: '_Tuple2',
						_0: index - 1,
						_1: {ctor: '[]'}
					},
					_p4.messages)));
	});
var _elm_lang$virtual_dom$VirtualDom_History$undone = function (getResult) {
	var _p5 = getResult;
	if (_p5.ctor === 'Done') {
		return {ctor: '_Tuple2', _0: _p5._1, _1: _p5._0};
	} else {
		return _elm_lang$core$Native_Utils.crashCase(
			'VirtualDom.History',
			{
				start: {line: 195, column: 3},
				end: {line: 200, column: 39}
			},
			_p5)('Bug in History.get');
	}
};
var _elm_lang$virtual_dom$VirtualDom_History$elmToJs = _elm_lang$virtual_dom$Native_Debug.unsafeCoerce;
var _elm_lang$virtual_dom$VirtualDom_History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3(
			_elm_lang$core$Array$foldl,
			F2(
				function (elm, msgs) {
					return {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_History$elmToJs(elm),
						_1: msgs
					};
				}),
			allMessages,
			snapshot.messages);
	});
var _elm_lang$virtual_dom$VirtualDom_History$encode = function (_p7) {
	var _p8 = _p7;
	var recentJson = A2(
		_elm_lang$core$List$map,
		_elm_lang$virtual_dom$VirtualDom_History$elmToJs,
		_elm_lang$core$List$reverse(_p8.recent.messages));
	return _elm_lang$core$Json_Encode$list(
		A3(_elm_lang$core$Array$foldr, _elm_lang$virtual_dom$VirtualDom_History$encodeHelp, recentJson, _p8.snapshots));
};
var _elm_lang$virtual_dom$VirtualDom_History$jsToElm = _elm_lang$virtual_dom$Native_Debug.unsafeCoerce;
var _elm_lang$virtual_dom$VirtualDom_History$initialModel = function (_p9) {
	var _p10 = _p9;
	var _p11 = A2(_elm_lang$core$Array$get, 0, _p10.snapshots);
	if (_p11.ctor === 'Just') {
		return _p11._0.model;
	} else {
		return _p10.recent.model;
	}
};
var _elm_lang$virtual_dom$VirtualDom_History$size = function (history) {
	return history.numMessages;
};
var _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize = 64;
var _elm_lang$virtual_dom$VirtualDom_History$consSnapshot = F3(
	function (currentIndex, snapshot, _p12) {
		var _p13 = _p12;
		var _p14 = _p13._0;
		var nextIndex = _p14 - _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize;
		var currentIndexHelp = ((_elm_lang$core$Native_Utils.cmp(nextIndex, currentIndex) < 1) && (_elm_lang$core$Native_Utils.cmp(currentIndex, _p14) < 0)) ? currentIndex : -1;
		return {
			ctor: '_Tuple2',
			_0: _p14 - _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize,
			_1: {
				ctor: '::',
				_0: A4(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy3, _elm_lang$virtual_dom$VirtualDom_History$viewSnapshot, currentIndexHelp, _p14, snapshot),
				_1: _p13._1
			}
		};
	});
var _elm_lang$virtual_dom$VirtualDom_History$viewSnapshots = F2(
	function (currentIndex, snapshots) {
		var highIndex = _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize * _elm_lang$core$Array$length(snapshots);
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{ctor: '[]'},
			_elm_lang$core$Tuple$second(
				A3(
					_elm_lang$core$Array$foldr,
					_elm_lang$virtual_dom$VirtualDom_History$consSnapshot(currentIndex),
					{
						ctor: '_Tuple2',
						_0: highIndex,
						_1: {ctor: '[]'}
					},
					snapshots)));
	});
var _elm_lang$virtual_dom$VirtualDom_History$view = F2(
	function (maybeIndex, _p15) {
		var _p16 = _p15;
		var _p17 = function () {
			var _p18 = maybeIndex;
			if (_p18.ctor === 'Nothing') {
				return {ctor: '_Tuple2', _0: -1, _1: 'debugger-sidebar-messages'};
			} else {
				return {ctor: '_Tuple2', _0: _p18._0, _1: 'debugger-sidebar-messages-paused'};
			}
		}();
		var index = _p17._0;
		var className = _p17._1;
		var oldStuff = A3(_elm_lang$virtual_dom$VirtualDom_Helpers$lazy2, _elm_lang$virtual_dom$VirtualDom_History$viewSnapshots, index, _p16.snapshots);
		var newStuff = _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				_elm_lang$virtual_dom$VirtualDom_History$consMsg(index),
				{
					ctor: '_Tuple2',
					_0: _p16.numMessages - 1,
					_1: {ctor: '[]'}
				},
				_p16.recent.messages));
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class(className),
				_1: {ctor: '[]'}
			},
			{ctor: '::', _0: oldStuff, _1: newStuff});
	});
var _elm_lang$virtual_dom$VirtualDom_History$History = F3(
	function (a, b, c) {
		return {snapshots: a, recent: b, numMessages: c};
	});
var _elm_lang$virtual_dom$VirtualDom_History$RecentHistory = F3(
	function (a, b, c) {
		return {model: a, messages: b, numMessages: c};
	});
var _elm_lang$virtual_dom$VirtualDom_History$empty = function (model) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom_History$History,
		_elm_lang$core$Array$empty,
		A3(
			_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
			model,
			{ctor: '[]'},
			0),
		0);
};
var _elm_lang$virtual_dom$VirtualDom_History$Snapshot = F2(
	function (a, b) {
		return {model: a, messages: b};
	});
var _elm_lang$virtual_dom$VirtualDom_History$addRecent = F3(
	function (msg, newModel, _p19) {
		var _p20 = _p19;
		var _p23 = _p20.numMessages;
		var _p22 = _p20.model;
		var _p21 = _p20.messages;
		return _elm_lang$core$Native_Utils.eq(_p23, _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize) ? {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Just(
				A2(
					_elm_lang$virtual_dom$VirtualDom_History$Snapshot,
					_p22,
					_elm_lang$core$Array$fromList(_p21))),
			_1: A3(
				_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
				newModel,
				{
					ctor: '::',
					_0: msg,
					_1: {ctor: '[]'}
				},
				1)
		} : {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Maybe$Nothing,
			_1: A3(
				_elm_lang$virtual_dom$VirtualDom_History$RecentHistory,
				_p22,
				{ctor: '::', _0: msg, _1: _p21},
				_p23 + 1)
		};
	});
var _elm_lang$virtual_dom$VirtualDom_History$add = F3(
	function (msg, model, _p24) {
		var _p25 = _p24;
		var _p28 = _p25.snapshots;
		var _p27 = _p25.numMessages;
		var _p26 = A3(_elm_lang$virtual_dom$VirtualDom_History$addRecent, msg, model, _p25.recent);
		if (_p26._0.ctor === 'Just') {
			return A3(
				_elm_lang$virtual_dom$VirtualDom_History$History,
				A2(_elm_lang$core$Array$push, _p26._0._0, _p28),
				_p26._1,
				_p27 + 1);
		} else {
			return A3(_elm_lang$virtual_dom$VirtualDom_History$History, _p28, _p26._1, _p27 + 1);
		}
	});
var _elm_lang$virtual_dom$VirtualDom_History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				var msg = _elm_lang$virtual_dom$VirtualDom_History$jsToElm(rawMsg);
				return {
					ctor: '_Tuple2',
					_0: A2(update, msg, _p31),
					_1: A3(_elm_lang$virtual_dom$VirtualDom_History$add, msg, _p31, _p30._1)
				};
			});
		var updateModel = function (rawMsgs) {
			return A3(
				_elm_lang$core$List$foldl,
				addMessage,
				{
					ctor: '_Tuple2',
					_0: initialModel,
					_1: _elm_lang$virtual_dom$VirtualDom_History$empty(initialModel)
				},
				rawMsgs);
		};
		return A2(
			_elm_lang$core$Json_Decode$map,
			updateModel,
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
	});
var _elm_lang$virtual_dom$VirtualDom_History$Done = F2(
	function (a, b) {
		return {ctor: 'Done', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_History$Stepping = F2(
	function (a, b) {
		return {ctor: 'Stepping', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_History$getHelp = F3(
	function (update, msg, getResult) {
		var _p32 = getResult;
		if (_p32.ctor === 'Done') {
			return getResult;
		} else {
			var _p34 = _p32._0;
			var _p33 = _p32._1;
			return _elm_lang$core$Native_Utils.eq(_p34, 0) ? A2(
				_elm_lang$virtual_dom$VirtualDom_History$Done,
				msg,
				_elm_lang$core$Tuple$first(
					A2(update, msg, _p33))) : A2(
				_elm_lang$virtual_dom$VirtualDom_History$Stepping,
				_p34 - 1,
				_elm_lang$core$Tuple$first(
					A2(update, msg, _p33)));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_History$get = F3(
	function (update, index, _p35) {
		var _p36 = _p35;
		var _p39 = _p36.recent;
		var snapshotMax = _p36.numMessages - _p39.numMessages;
		if (_elm_lang$core$Native_Utils.cmp(index, snapshotMax) > -1) {
			return _elm_lang$virtual_dom$VirtualDom_History$undone(
				A3(
					_elm_lang$core$List$foldr,
					_elm_lang$virtual_dom$VirtualDom_History$getHelp(update),
					A2(_elm_lang$virtual_dom$VirtualDom_History$Stepping, index - snapshotMax, _p39.model),
					_p39.messages));
		} else {
			var _p37 = A2(_elm_lang$core$Array$get, (index / _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize) | 0, _p36.snapshots);
			if (_p37.ctor === 'Nothing') {
				return _elm_lang$core$Native_Utils.crashCase(
					'VirtualDom.History',
					{
						start: {line: 165, column: 7},
						end: {line: 171, column: 95}
					},
					_p37)('UI should only let you ask for real indexes!');
			} else {
				return _elm_lang$virtual_dom$VirtualDom_History$undone(
					A3(
						_elm_lang$core$Array$foldr,
						_elm_lang$virtual_dom$VirtualDom_History$getHelp(update),
						A2(
							_elm_lang$virtual_dom$VirtualDom_History$Stepping,
							A2(_elm_lang$core$Basics$rem, index, _elm_lang$virtual_dom$VirtualDom_History$maxSnapshotSize),
							_p37._0.model),
						_p37._0.messages));
			}
		}
	});

var _elm_lang$virtual_dom$VirtualDom_Overlay$styles = A3(
	_elm_lang$virtual_dom$VirtualDom_Helpers$node,
	'style',
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('\n\n.elm-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  color: white;\n  pointer-events: none;\n  font-family: \'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif;\n}\n\n.elm-overlay-resume {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  text-align: center;\n  pointer-events: auto;\n  background-color: rgba(200, 200, 200, 0.7);\n}\n\n.elm-overlay-resume-words {\n  position: absolute;\n  top: calc(50% - 40px);\n  font-size: 80px;\n  line-height: 80px;\n  height: 80px;\n  width: 100%;\n}\n\n.elm-mini-controls {\n  position: fixed;\n  bottom: 0;\n  right: 6px;\n  border-radius: 4px;\n  background-color: rgb(61, 61, 61);\n  font-family: monospace;\n  pointer-events: auto;\n}\n\n.elm-mini-controls-button {\n  padding: 6px;\n  cursor: pointer;\n  text-align: center;\n  min-width: 24ch;\n}\n\n.elm-mini-controls-import-export {\n  padding: 4px 0;\n  font-size: 0.8em;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.elm-overlay-message {\n  position: absolute;\n  width: 600px;\n  height: 100%;\n  padding-left: calc(50% - 300px);\n  padding-right: calc(50% - 300px);\n  background-color: rgba(200, 200, 200, 0.7);\n  pointer-events: auto;\n}\n\n.elm-overlay-message-title {\n  font-size: 36px;\n  height: 80px;\n  background-color: rgb(50, 50, 50);\n  padding-left: 22px;\n  vertical-align: middle;\n  line-height: 80px;\n}\n\n.elm-overlay-message-details {\n  padding: 8px 20px;\n  overflow-y: auto;\n  max-height: calc(100% - 156px);\n  background-color: rgb(61, 61, 61);\n}\n\n.elm-overlay-message-details-type {\n  font-size: 1.5em;\n}\n\n.elm-overlay-message-details ul {\n  list-style-type: none;\n  padding-left: 20px;\n}\n\n.elm-overlay-message-details ul ul {\n  list-style-type: disc;\n  padding-left: 2em;\n}\n\n.elm-overlay-message-details li {\n  margin: 8px 0;\n}\n\n.elm-overlay-message-buttons {\n  height: 60px;\n  line-height: 60px;\n  text-align: right;\n  background-color: rgb(50, 50, 50);\n}\n\n.elm-overlay-message-buttons button {\n  margin-right: 20px;\n}\n\n'),
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$button = F2(
	function (msg, label) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$span,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(msg),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(label),
				_1: {ctor: '[]'}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewImportExport = F3(
	function (props, importMsg, exportMsg) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			props,
			{
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$button, importMsg, 'Import'),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' / '),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$button, exportMsg, 'Export'),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(config.open),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls-button'),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Explore History (',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(numMsgs),
									')'))),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Overlay$viewImportExport,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-mini-controls-import-export'),
							_1: {ctor: '[]'}
						},
						config.importHistory,
						config.exportHistory),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$addCommas = function (items) {
	var _p0 = items;
	if (_p0.ctor === '[]') {
		return '';
	} else {
		if (_p0._1.ctor === '[]') {
			return _p0._0;
		} else {
			if (_p0._1._1.ctor === '[]') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_p0._0,
					A2(_elm_lang$core$Basics_ops['++'], ' and ', _p0._1._0));
			} else {
				return A2(
					_elm_lang$core$String$join,
					', ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p0._1,
						{
							ctor: '::',
							_0: A2(_elm_lang$core$Basics_ops['++'], ' and ', _p0._0),
							_1: {ctor: '[]'}
						}));
			}
		}
	}
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$problemToString = function (problem) {
	var _p1 = problem;
	switch (_p1.ctor) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode = function (name) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom_Helpers$node,
		'code',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(name),
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMention = F2(
	function (tags, verbed) {
		var _p2 = A2(
			_elm_lang$core$List$map,
			_elm_lang$virtual_dom$VirtualDom_Overlay$viewCode,
			_elm_lang$core$List$reverse(tags));
		if (_p2.ctor === '[]') {
			return _elm_lang$virtual_dom$VirtualDom_Helpers$text('');
		} else {
			if (_p2._1.ctor === '[]') {
				return A3(
					_elm_lang$virtual_dom$VirtualDom_Helpers$node,
					'li',
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
						_1: {
							ctor: '::',
							_0: _p2._0,
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
								_1: {ctor: '[]'}
							}
						}
					});
			} else {
				if (_p2._1._1.ctor === '[]') {
					return A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'li',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
							_1: {
								ctor: '::',
								_0: _p2._1._0,
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' and '),
									_1: {
										ctor: '::',
										_0: _p2._0,
										_1: {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						});
				} else {
					return A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'li',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(verbed),
							_1: A2(
								_elm_lang$core$Basics_ops['++'],
								A2(
									_elm_lang$core$List$intersperse,
									_elm_lang$virtual_dom$VirtualDom_Helpers$text(', '),
									_elm_lang$core$List$reverse(_p2._1)),
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', and '),
									_1: {
										ctor: '::',
										_0: _p2._0,
										_1: {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('.'),
											_1: {ctor: '[]'}
										}
									}
								})
						});
				}
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewChange = function (change) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom_Helpers$node,
		'li',
		{ctor: '[]'},
		function () {
			var _p3 = change;
			if (_p3.ctor === 'AliasChange') {
				return {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details-type'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p3._0),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$span,
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details-type'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p3._0),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'ul',
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.removed, 'Removed '),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.changed, 'Changed '),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMention, _p3._1.added, 'Added '),
										_1: {ctor: '[]'}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: _p3._1.argsMatch ? _elm_lang$virtual_dom$VirtualDom_Helpers$text('') : _elm_lang$virtual_dom$VirtualDom_Helpers$text('This may be due to the fact that the type variable names changed.'),
							_1: {ctor: '[]'}
						}
					}
				};
			}
		}());
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewProblemType = function (_p4) {
	var _p5 = _p4;
	return A3(
		_elm_lang$virtual_dom$VirtualDom_Helpers$node,
		'li',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p5.name),
			_1: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
					A2(
						_elm_lang$core$Basics_ops['++'],
						' can contain ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$virtual_dom$VirtualDom_Overlay$addCommas(
								A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$problemToString, _p5.problems)),
							'.'))),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewBadMetadata = function (_p6) {
	var _p7 = _p6;
	return {
		ctor: '::',
		_0: A3(
			_elm_lang$virtual_dom$VirtualDom_Helpers$node,
			'p',
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('The '),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p7.message),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' type of your program cannot be reliably serialized for history files.'),
						_1: {ctor: '[]'}
					}
				}
			}),
		_1: {
			ctor: '::',
			_0: A3(
				_elm_lang$virtual_dom$VirtualDom_Helpers$node,
				'p',
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A3(
					_elm_lang$virtual_dom$VirtualDom_Helpers$node,
					'ul',
					{ctor: '[]'},
					A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$viewProblemType, _p7.problems)),
				_1: {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'p',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_elm_lang$virtual_dom$VirtualDom_Overlay$goodNews1),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$a,
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$href('https://guide.elm-lang.org/types/union_types.html'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('union types'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(', in your messages. From there, your '),
									_1: {
										ctor: '::',
										_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode('update'),
										_1: {
											ctor: '::',
											_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_elm_lang$virtual_dom$VirtualDom_Overlay$goodNews2),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		}
	};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewReport = F2(
	function (isBad, report) {
		var _p8 = report;
		switch (_p8.ctor) {
			case 'CorruptHistory':
				return {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Looks like this history file is corrupt. I cannot understand it.'),
					_1: {ctor: '[]'}
				};
			case 'VersionChanged':
				return {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'This history was created with Elm ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_p8._0,
								A2(
									_elm_lang$core$Basics_ops['++'],
									', but you are using Elm ',
									A2(_elm_lang$core$Basics_ops['++'], _p8._1, ' right now.'))))),
					_1: {ctor: '[]'}
				};
			case 'MessageChanged':
				return {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
						A2(_elm_lang$core$Basics_ops['++'], 'To import some other history, the overall message type must', ' be the same. The old history has ')),
					_1: {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p8._0),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' messages, but the new program works with '),
							_1: {
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewCode(_p8._1),
								_1: {
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' messages.'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				};
			default:
				return {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'p',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(
								isBad ? _elm_lang$virtual_dom$VirtualDom_Overlay$explanationBad : _elm_lang$virtual_dom$VirtualDom_Overlay$explanationRisky),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'ul',
							{ctor: '[]'},
							A2(_elm_lang$core$List$map, _elm_lang$virtual_dom$VirtualDom_Overlay$viewChange, _p8._0)),
						_1: {ctor: '[]'}
					}
				};
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewResume = function (config) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-resume'),
			_1: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(config.resume),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-resume-words'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Click to Resume'),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$uploadDecoder = A3(
	_elm_lang$core$Json_Decode$map2,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}),
	A2(_elm_lang$core$Json_Decode$field, 'metadata', _elm_lang$virtual_dom$VirtualDom_Metadata$decoder),
	A2(_elm_lang$core$Json_Decode$field, 'history', _elm_lang$core$Json_Decode$value));
var _elm_lang$virtual_dom$VirtualDom_Overlay$close = F2(
	function (msg, state) {
		var _p9 = state;
		switch (_p9.ctor) {
			case 'None':
				return _elm_lang$core$Maybe$Nothing;
			case 'BadMetadata':
				return _elm_lang$core$Maybe$Nothing;
			case 'BadImport':
				return _elm_lang$core$Maybe$Nothing;
			default:
				var _p10 = msg;
				if (_p10.ctor === 'Cancel') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					return _elm_lang$core$Maybe$Just(_p9._1);
				}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$isBlocking = function (state) {
	var _p11 = state;
	if (_p11.ctor === 'None') {
		return false;
	} else {
		return true;
	}
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Config = F5(
	function (a, b, c, d, e) {
		return {resume: a, open: b, importHistory: c, exportHistory: d, wrap: e};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$RiskyImport = F2(
	function (a, b) {
		return {ctor: 'RiskyImport', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$BadImport = function (a) {
	return {ctor: 'BadImport', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport = _elm_lang$virtual_dom$VirtualDom_Overlay$BadImport(_elm_lang$virtual_dom$VirtualDom_Report$CorruptHistory);
var _elm_lang$virtual_dom$VirtualDom_Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _p12 = A2(_elm_lang$core$Json_Decode$decodeString, _elm_lang$virtual_dom$VirtualDom_Overlay$uploadDecoder, jsonString);
		if (_p12.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport);
		} else {
			var _p14 = _p12._0._1;
			var report = A2(_elm_lang$virtual_dom$VirtualDom_Metadata$check, _p12._0._0, metadata);
			var _p13 = _elm_lang$virtual_dom$VirtualDom_Report$evaluate(report);
			switch (_p13.ctor) {
				case 'Impossible':
					return _elm_lang$core$Result$Err(
						_elm_lang$virtual_dom$VirtualDom_Overlay$BadImport(report));
				case 'Risky':
					return _elm_lang$core$Result$Err(
						A2(_elm_lang$virtual_dom$VirtualDom_Overlay$RiskyImport, report, _p14));
				default:
					return _elm_lang$core$Result$Ok(_p14);
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$BadMetadata = function (a) {
	return {ctor: 'BadMetadata', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$badMetadata = _elm_lang$virtual_dom$VirtualDom_Overlay$BadMetadata;
var _elm_lang$virtual_dom$VirtualDom_Overlay$None = {ctor: 'None'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$none = _elm_lang$virtual_dom$VirtualDom_Overlay$None;
var _elm_lang$virtual_dom$VirtualDom_Overlay$Proceed = {ctor: 'Proceed'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Cancel = {ctor: 'Cancel'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewButtons = function (buttons) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-buttons'),
			_1: {ctor: '[]'}
		},
		function () {
			var _p15 = buttons;
			if (_p15.ctor === 'Accept') {
				return {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'button',
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Proceed),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._0),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: A3(
						_elm_lang$virtual_dom$VirtualDom_Helpers$node,
						'button',
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Cancel),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._0),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$virtual_dom$VirtualDom_Helpers$node,
							'button',
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Overlay$Proceed),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(_p15._1),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				};
			}
		}());
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Message = {ctor: 'Message'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$virtual_dom$VirtualDom_Overlay$Message,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$div,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-title'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(title),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$virtual_dom$VirtualDom_Helpers$div,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay-message-details'),
									_1: {ctor: '[]'}
								},
								details),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$virtual_dom$VirtualDom_Helpers$map,
									config.wrap,
									_elm_lang$virtual_dom$VirtualDom_Overlay$viewButtons(buttons)),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$Pause = {ctor: 'Pause'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Normal = {ctor: 'Normal'};
var _elm_lang$virtual_dom$VirtualDom_Overlay$Choose = F2(
	function (a, b) {
		return {ctor: 'Choose', _0: a, _1: b};
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$Accept = function (a) {
	return {ctor: 'Accept', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Overlay$viewHelp = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		var _p16 = state;
		switch (_p16.ctor) {
			case 'None':
				var miniControls = isOpen ? {ctor: '[]'} : {
					ctor: '::',
					_0: A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewMiniControls, config, numMsgs),
					_1: {ctor: '[]'}
				};
				return {
					ctor: '_Tuple2',
					_0: isPaused ? _elm_lang$virtual_dom$VirtualDom_Overlay$Pause : _elm_lang$virtual_dom$VirtualDom_Overlay$Normal,
					_1: (isPaused && (!isOpen)) ? {
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Overlay$viewResume(config),
						_1: miniControls
					} : miniControls
				};
			case 'BadMetadata':
				return A4(
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewBadMetadata(_p16._0),
					_elm_lang$virtual_dom$VirtualDom_Overlay$Accept('Ok'));
			case 'BadImport':
				return A4(
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewReport, true, _p16._0),
					_elm_lang$virtual_dom$VirtualDom_Overlay$Accept('Ok'));
			default:
				return A4(
					_elm_lang$virtual_dom$VirtualDom_Overlay$viewMessage,
					config,
					'Warning',
					A2(_elm_lang$virtual_dom$VirtualDom_Overlay$viewReport, false, _p16._0),
					A2(_elm_lang$virtual_dom$VirtualDom_Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		var _p17 = A5(_elm_lang$virtual_dom$VirtualDom_Overlay$viewHelp, config, isPaused, isOpen, numMsgs, state);
		var block = _p17._0;
		var nodes = _p17._1;
		return {
			ctor: '_Tuple2',
			_0: block,
			_1: A2(
				_elm_lang$virtual_dom$VirtualDom_Helpers$div,
				{
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('elm-overlay'),
					_1: {ctor: '[]'}
				},
				{ctor: '::', _0: _elm_lang$virtual_dom$VirtualDom_Overlay$styles, _1: nodes})
		};
	});

var _elm_lang$virtual_dom$VirtualDom_Debug$styles = A3(
	_elm_lang$virtual_dom$VirtualDom_Helpers$node,
	'style',
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('\n\nhtml {\n    overflow: hidden;\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    overflow: auto;\n}\n\n#debugger {\n  width: 100%\n  height: 100%;\n  font-family: monospace;\n}\n\n#values {\n  display: block;\n  float: left;\n  height: 100%;\n  width: calc(100% - 30ch);\n  margin: 0;\n  overflow: auto;\n  cursor: default;\n}\n\n.debugger-sidebar {\n  display: block;\n  float: left;\n  width: 30ch;\n  height: 100%;\n  color: white;\n  background-color: rgb(61, 61, 61);\n}\n\n.debugger-sidebar-controls {\n  width: 100%;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.debugger-sidebar-controls-import-export {\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  font-size: 12px;\n}\n\n.debugger-sidebar-controls-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.debugger-sidebar-controls-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.debugger-sidebar-messages {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 24px);\n}\n\n.debugger-sidebar-messages-paused {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 54px);\n}\n\n.messages-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.messages-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.messages-entry-selected, .messages-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.messages-entry-content {\n  width: calc(100% - 7ch);\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.messages-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n'),
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$button = F2(
	function (msg, label) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$span,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(msg),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Helpers$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(label),
				_1: {ctor: '[]'}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel = function (state) {
	var _p0 = state;
	if (_p0.ctor === 'Running') {
		return _p0._0;
	} else {
		return _p0._2;
	}
};
var _elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata = F2(
	function (model, func) {
		var _p1 = model.metadata;
		if (_p1.ctor === 'Ok') {
			return func(_p1._0);
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{
						overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$badMetadata(_p1._0)
					}),
				{ctor: '[]'});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$Model = F6(
	function (a, b, c, d, e, f) {
		return {history: a, state: b, expando: c, metadata: d, overlay: e, isDebuggerOpen: f};
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$Paused = F3(
	function (a, b, c) {
		return {ctor: 'Paused', _0: a, _1: b, _2: c};
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$Running = function (a) {
	return {ctor: 'Running', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory = F3(
	function (rawHistory, userUpdate, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return _elm_lang$core$Tuple$first(
					A2(userUpdate, msg, userModel));
			});
		var initialUserModel = _elm_lang$virtual_dom$VirtualDom_History$initialModel(model.history);
		var decoder = A2(_elm_lang$virtual_dom$VirtualDom_History$decoder, initialUserModel, pureUserUpdate);
		var _p2 = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, rawHistory);
		if (_p2.ctor === 'Err') {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$corruptImport}),
				{ctor: '[]'});
		} else {
			var _p3 = _p2._0._0;
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					model,
					{
						history: _p2._0._1,
						state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p3),
						expando: _elm_lang$virtual_dom$VirtualDom_Expando$init(_p3),
						overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none
					}),
				{ctor: '[]'});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$OverlayMsg = function (a) {
	return {ctor: 'OverlayMsg', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$Upload = function (a) {
	return {ctor: 'Upload', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$upload = A2(_elm_lang$core$Task$perform, _elm_lang$virtual_dom$VirtualDom_Debug$Upload, _elm_lang$virtual_dom$Native_Debug.upload);
var _elm_lang$virtual_dom$VirtualDom_Debug$Export = {ctor: 'Export'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Import = {ctor: 'Import'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Down = {ctor: 'Down'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Up = {ctor: 'Up'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Close = {ctor: 'Close'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Open = {ctor: 'Open'};
var _elm_lang$virtual_dom$VirtualDom_Debug$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$Resume = {ctor: 'Resume'};
var _elm_lang$virtual_dom$VirtualDom_Debug$overlayConfig = {resume: _elm_lang$virtual_dom$VirtualDom_Debug$Resume, open: _elm_lang$virtual_dom$VirtualDom_Debug$Open, importHistory: _elm_lang$virtual_dom$VirtualDom_Debug$Import, exportHistory: _elm_lang$virtual_dom$VirtualDom_Debug$Export, wrap: _elm_lang$virtual_dom$VirtualDom_Debug$OverlayMsg};
var _elm_lang$virtual_dom$VirtualDom_Debug$viewIn = function (_p4) {
	var _p5 = _p4;
	var isPaused = function () {
		var _p6 = _p5.state;
		if (_p6.ctor === 'Running') {
			return false;
		} else {
			return true;
		}
	}();
	return A5(
		_elm_lang$virtual_dom$VirtualDom_Overlay$view,
		_elm_lang$virtual_dom$VirtualDom_Debug$overlayConfig,
		isPaused,
		_p5.isDebuggerOpen,
		_elm_lang$virtual_dom$VirtualDom_History$size(_p5.history),
		_p5.overlay);
};
var _elm_lang$virtual_dom$VirtualDom_Debug$resumeButton = A2(
	_elm_lang$virtual_dom$VirtualDom_Helpers$div,
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$onClick(_elm_lang$virtual_dom$VirtualDom_Debug$Resume),
		_1: {
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls-resume'),
			_1: {ctor: '[]'}
		}
	},
	{
		ctor: '::',
		_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text('Resume'),
		_1: {ctor: '[]'}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$viewResumeButton = function (maybeIndex) {
	var _p7 = maybeIndex;
	if (_p7.ctor === 'Nothing') {
		return _elm_lang$virtual_dom$VirtualDom_Helpers$text('');
	} else {
		return _elm_lang$virtual_dom$VirtualDom_Debug$resumeButton;
	}
};
var _elm_lang$virtual_dom$VirtualDom_Debug$playButton = function (maybeIndex) {
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Debug$viewResumeButton(maybeIndex),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$div,
					{
						ctor: '::',
						_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar-controls-import-export'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$button, _elm_lang$virtual_dom$VirtualDom_Debug$Import, 'Import'),
						_1: {
							ctor: '::',
							_0: _elm_lang$virtual_dom$VirtualDom_Helpers$text(' / '),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$button, _elm_lang$virtual_dom$VirtualDom_Debug$Export, 'Export'),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Debug$viewSidebar = F2(
	function (state, history) {
		var maybeIndex = function () {
			var _p8 = state;
			if (_p8.ctor === 'Running') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(_p8._0);
			}
		}();
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$div,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom_Helpers$class('debugger-sidebar'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom_Helpers$map,
					_elm_lang$virtual_dom$VirtualDom_Debug$Jump,
					A2(_elm_lang$virtual_dom$VirtualDom_History$view, maybeIndex, history)),
				_1: {
					ctor: '::',
					_0: _elm_lang$virtual_dom$VirtualDom_Debug$playButton(maybeIndex),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$ExpandoMsg = function (a) {
	return {ctor: 'ExpandoMsg', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$viewOut = function (_p9) {
	var _p10 = _p9;
	return A2(
		_elm_lang$virtual_dom$VirtualDom_Helpers$div,
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Helpers$id('debugger'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom_Debug$styles,
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$viewSidebar, _p10.state, _p10.history),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$virtual_dom$VirtualDom_Helpers$map,
						_elm_lang$virtual_dom$VirtualDom_Debug$ExpandoMsg,
						A2(
							_elm_lang$virtual_dom$VirtualDom_Helpers$div,
							{
								ctor: '::',
								_0: _elm_lang$virtual_dom$VirtualDom_Helpers$id('values'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Expando$view, _elm_lang$core$Maybe$Nothing, _p10.expando),
								_1: {ctor: '[]'}
							})),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg = function (a) {
	return {ctor: 'UserMsg', _0: a};
};
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapInit = F2(
	function (metadata, _p11) {
		var _p12 = _p11;
		var _p13 = _p12._0;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			{
				history: _elm_lang$virtual_dom$VirtualDom_History$empty(_p13),
				state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p13),
				expando: _elm_lang$virtual_dom$VirtualDom_Expando$init(_p13),
				metadata: _elm_lang$virtual_dom$VirtualDom_Metadata$decode(metadata),
				overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none,
				isDebuggerOpen: false
			},
			{
				ctor: '::',
				_0: A2(_elm_lang$core$Platform_Cmd$map, _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg, _p12._1),
				_1: {ctor: '[]'}
			});
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs = F2(
	function (userSubscriptions, _p14) {
		var _p15 = _p14;
		return A2(
			_elm_lang$core$Platform_Sub$map,
			_elm_lang$virtual_dom$VirtualDom_Debug$UserMsg,
			userSubscriptions(
				_elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(_p15.state)));
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapView = F2(
	function (userView, _p16) {
		var _p17 = _p16;
		var currentModel = function () {
			var _p18 = _p17.state;
			if (_p18.ctor === 'Running') {
				return _p18._0;
			} else {
				return _p18._1;
			}
		}();
		return A2(
			_elm_lang$virtual_dom$VirtualDom_Helpers$map,
			_elm_lang$virtual_dom$VirtualDom_Debug$UserMsg,
			userView(currentModel));
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$NoOp = {ctor: 'NoOp'};
var _elm_lang$virtual_dom$VirtualDom_Debug$download = F2(
	function (metadata, history) {
		var json = _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'metadata',
					_1: _elm_lang$virtual_dom$VirtualDom_Metadata$encode(metadata)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'history',
						_1: _elm_lang$virtual_dom$VirtualDom_History$encode(history)
					},
					_1: {ctor: '[]'}
				}
			});
		var historyLength = _elm_lang$virtual_dom$VirtualDom_History$size(history);
		return A2(
			_elm_lang$core$Task$perform,
			function (_p19) {
				return _elm_lang$virtual_dom$VirtualDom_Debug$NoOp;
			},
			A2(_elm_lang$virtual_dom$Native_Debug.download, historyLength, json));
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$runIf = F2(
	function (bool, task) {
		return bool ? A2(
			_elm_lang$core$Task$perform,
			_elm_lang$core$Basics$always(_elm_lang$virtual_dom$VirtualDom_Debug$NoOp),
			task) : _elm_lang$core$Platform_Cmd$none;
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$updateUserMsg = F4(
	function (userUpdate, scrollTask, userMsg, _p20) {
		var _p21 = _p20;
		var _p25 = _p21.state;
		var _p24 = _p21;
		var userModel = _elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(_p25);
		var newHistory = A3(_elm_lang$virtual_dom$VirtualDom_History$add, userMsg, userModel, _p21.history);
		var _p22 = A2(userUpdate, userMsg, userModel);
		var newUserModel = _p22._0;
		var userCmds = _p22._1;
		var commands = A2(_elm_lang$core$Platform_Cmd$map, _elm_lang$virtual_dom$VirtualDom_Debug$UserMsg, userCmds);
		var _p23 = _p25;
		if (_p23.ctor === 'Running') {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					_p24,
					{
						history: newHistory,
						state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(newUserModel),
						expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, newUserModel, _p21.expando)
					}),
				{
					ctor: '::',
					_0: commands,
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$runIf, _p24.isDebuggerOpen, scrollTask),
						_1: {ctor: '[]'}
					}
				});
		} else {
			return A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_elm_lang$core$Native_Utils.update(
					_p24,
					{
						history: newHistory,
						state: A3(_elm_lang$virtual_dom$VirtualDom_Debug$Paused, _p23._0, _p23._1, newUserModel)
					}),
				{
					ctor: '::',
					_0: commands,
					_1: {ctor: '[]'}
				});
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate = F4(
	function (userUpdate, scrollTask, msg, model) {
		wrapUpdate:
		while (true) {
			var _p26 = msg;
			switch (_p26.ctor) {
				case 'NoOp':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
				case 'UserMsg':
					return A4(_elm_lang$virtual_dom$VirtualDom_Debug$updateUserMsg, userUpdate, scrollTask, _p26._0, model);
				case 'ExpandoMsg':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$update, _p26._0, model.expando)
							}),
						{ctor: '[]'});
				case 'Resume':
					var _p27 = model.state;
					if (_p27.ctor === 'Running') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					} else {
						var _p28 = _p27._2;
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{
									state: _elm_lang$virtual_dom$VirtualDom_Debug$Running(_p28),
									expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, _p28, model.expando)
								}),
							{
								ctor: '::',
								_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$runIf, model.isDebuggerOpen, scrollTask),
								_1: {ctor: '[]'}
							});
					}
				case 'Jump':
					var _p30 = _p26._0;
					var _p29 = A3(_elm_lang$virtual_dom$VirtualDom_History$get, userUpdate, _p30, model.history);
					var indexModel = _p29._0;
					var indexMsg = _p29._1;
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{
								state: A3(
									_elm_lang$virtual_dom$VirtualDom_Debug$Paused,
									_p30,
									indexModel,
									_elm_lang$virtual_dom$VirtualDom_Debug$getLatestModel(model.state)),
								expando: A2(_elm_lang$virtual_dom$VirtualDom_Expando$merge, indexModel, model.expando)
							}),
						{ctor: '[]'});
				case 'Open':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{isDebuggerOpen: true}),
						{ctor: '[]'});
				case 'Close':
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{isDebuggerOpen: false}),
						{ctor: '[]'});
				case 'Up':
					var index = function () {
						var _p31 = model.state;
						if (_p31.ctor === 'Paused') {
							return _p31._0;
						} else {
							return _elm_lang$virtual_dom$VirtualDom_History$size(model.history);
						}
					}();
					if (_elm_lang$core$Native_Utils.cmp(index, 0) > 0) {
						var _v17 = userUpdate,
							_v18 = scrollTask,
							_v19 = _elm_lang$virtual_dom$VirtualDom_Debug$Jump(index - 1),
							_v20 = model;
						userUpdate = _v17;
						scrollTask = _v18;
						msg = _v19;
						model = _v20;
						continue wrapUpdate;
					} else {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					}
				case 'Down':
					var _p32 = model.state;
					if (_p32.ctor === 'Running') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					} else {
						var _p33 = _p32._0;
						if (_elm_lang$core$Native_Utils.eq(
							_p33,
							_elm_lang$virtual_dom$VirtualDom_History$size(model.history) - 1)) {
							var _v22 = userUpdate,
								_v23 = scrollTask,
								_v24 = _elm_lang$virtual_dom$VirtualDom_Debug$Resume,
								_v25 = model;
							userUpdate = _v22;
							scrollTask = _v23;
							msg = _v24;
							model = _v25;
							continue wrapUpdate;
						} else {
							var _v26 = userUpdate,
								_v27 = scrollTask,
								_v28 = _elm_lang$virtual_dom$VirtualDom_Debug$Jump(_p33 + 1),
								_v29 = model;
							userUpdate = _v26;
							scrollTask = _v27;
							msg = _v28;
							model = _v29;
							continue wrapUpdate;
						}
					}
				case 'Import':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
						model,
						function (_p34) {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$VirtualDom_Debug$upload,
									_1: {ctor: '[]'}
								});
						});
				case 'Export':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
						model,
						function (metadata) {
							return A2(
								_elm_lang$core$Platform_Cmd_ops['!'],
								model,
								{
									ctor: '::',
									_0: A2(_elm_lang$virtual_dom$VirtualDom_Debug$download, metadata, model.history),
									_1: {ctor: '[]'}
								});
						});
				case 'Upload':
					return A2(
						_elm_lang$virtual_dom$VirtualDom_Debug$withGoodMetadata,
						model,
						function (metadata) {
							var _p35 = A2(_elm_lang$virtual_dom$VirtualDom_Overlay$assessImport, metadata, _p26._0);
							if (_p35.ctor === 'Err') {
								return A2(
									_elm_lang$core$Platform_Cmd_ops['!'],
									_elm_lang$core$Native_Utils.update(
										model,
										{overlay: _p35._0}),
									{ctor: '[]'});
							} else {
								return A3(_elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory, _p35._0, userUpdate, model);
							}
						});
				default:
					var _p36 = A2(_elm_lang$virtual_dom$VirtualDom_Overlay$close, _p26._0, model.overlay);
					if (_p36.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							_elm_lang$core$Native_Utils.update(
								model,
								{overlay: _elm_lang$virtual_dom$VirtualDom_Overlay$none}),
							{ctor: '[]'});
					} else {
						return A3(_elm_lang$virtual_dom$VirtualDom_Debug$loadNewHistory, _p36._0, userUpdate, model);
					}
			}
		}
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrap = F2(
	function (metadata, _p37) {
		var _p38 = _p37;
		return {
			init: A2(_elm_lang$virtual_dom$VirtualDom_Debug$wrapInit, metadata, _p38.init),
			view: _elm_lang$virtual_dom$VirtualDom_Debug$wrapView(_p38.view),
			update: _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate(_p38.update),
			viewIn: _elm_lang$virtual_dom$VirtualDom_Debug$viewIn,
			viewOut: _elm_lang$virtual_dom$VirtualDom_Debug$viewOut,
			subscriptions: _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs(_p38.subscriptions)
		};
	});
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags = F2(
	function (metadata, _p39) {
		var _p40 = _p39;
		return {
			init: function (flags) {
				return A2(
					_elm_lang$virtual_dom$VirtualDom_Debug$wrapInit,
					metadata,
					_p40.init(flags));
			},
			view: _elm_lang$virtual_dom$VirtualDom_Debug$wrapView(_p40.view),
			update: _elm_lang$virtual_dom$VirtualDom_Debug$wrapUpdate(_p40.update),
			viewIn: _elm_lang$virtual_dom$VirtualDom_Debug$viewIn,
			viewOut: _elm_lang$virtual_dom$VirtualDom_Debug$viewOut,
			subscriptions: _elm_lang$virtual_dom$VirtualDom_Debug$wrapSubs(_p40.subscriptions)
		};
	});

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$core$Color$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_lang$core$Color$rgbToHsl = F3(
	function (red, green, blue) {
		var b = _elm_lang$core$Basics$toFloat(blue) / 255;
		var g = _elm_lang$core$Basics$toFloat(green) / 255;
		var r = _elm_lang$core$Basics$toFloat(red) / 255;
		var cMax = A2(
			_elm_lang$core$Basics$max,
			A2(_elm_lang$core$Basics$max, r, g),
			b);
		var cMin = A2(
			_elm_lang$core$Basics$min,
			A2(_elm_lang$core$Basics$min, r, g),
			b);
		var c = cMax - cMin;
		var lightness = (cMax + cMin) / 2;
		var saturation = _elm_lang$core$Native_Utils.eq(lightness, 0) ? 0 : (c / (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)));
		var hue = _elm_lang$core$Basics$degrees(60) * (_elm_lang$core$Native_Utils.eq(cMax, r) ? A2(_elm_lang$core$Color$fmod, (g - b) / c, 6) : (_elm_lang$core$Native_Utils.eq(cMax, g) ? (((b - r) / c) + 2) : (((r - g) / c) + 4)));
		return {ctor: '_Tuple3', _0: hue, _1: saturation, _2: lightness};
	});
var _elm_lang$core$Color$hslToRgb = F3(
	function (hue, saturation, lightness) {
		var normHue = hue / _elm_lang$core$Basics$degrees(60);
		var chroma = (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)) * saturation;
		var x = chroma * (1 - _elm_lang$core$Basics$abs(
			A2(_elm_lang$core$Color$fmod, normHue, 2) - 1));
		var _p0 = (_elm_lang$core$Native_Utils.cmp(normHue, 0) < 0) ? {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 1) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: x, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 2) < 0) ? {ctor: '_Tuple3', _0: x, _1: chroma, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 3) < 0) ? {ctor: '_Tuple3', _0: 0, _1: chroma, _2: x} : ((_elm_lang$core$Native_Utils.cmp(normHue, 4) < 0) ? {ctor: '_Tuple3', _0: 0, _1: x, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 5) < 0) ? {ctor: '_Tuple3', _0: x, _1: 0, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 6) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: 0, _2: x} : {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0}))))));
		var r = _p0._0;
		var g = _p0._1;
		var b = _p0._2;
		var m = lightness - (chroma / 2);
		return {ctor: '_Tuple3', _0: r + m, _1: g + m, _2: b + m};
	});
var _elm_lang$core$Color$toRgb = function (color) {
	var _p1 = color;
	if (_p1.ctor === 'RGBA') {
		return {red: _p1._0, green: _p1._1, blue: _p1._2, alpha: _p1._3};
	} else {
		var _p2 = A3(_elm_lang$core$Color$hslToRgb, _p1._0, _p1._1, _p1._2);
		var r = _p2._0;
		var g = _p2._1;
		var b = _p2._2;
		return {
			red: _elm_lang$core$Basics$round(255 * r),
			green: _elm_lang$core$Basics$round(255 * g),
			blue: _elm_lang$core$Basics$round(255 * b),
			alpha: _p1._3
		};
	}
};
var _elm_lang$core$Color$toHsl = function (color) {
	var _p3 = color;
	if (_p3.ctor === 'HSLA') {
		return {hue: _p3._0, saturation: _p3._1, lightness: _p3._2, alpha: _p3._3};
	} else {
		var _p4 = A3(_elm_lang$core$Color$rgbToHsl, _p3._0, _p3._1, _p3._2);
		var h = _p4._0;
		var s = _p4._1;
		var l = _p4._2;
		return {hue: h, saturation: s, lightness: l, alpha: _p3._3};
	}
};
var _elm_lang$core$Color$HSLA = F4(
	function (a, b, c, d) {
		return {ctor: 'HSLA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		return A4(
			_elm_lang$core$Color$HSLA,
			hue - _elm_lang$core$Basics$turns(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$floor(hue / (2 * _elm_lang$core$Basics$pi)))),
			saturation,
			lightness,
			alpha);
	});
var _elm_lang$core$Color$hsl = F3(
	function (hue, saturation, lightness) {
		return A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, 1);
	});
var _elm_lang$core$Color$complement = function (color) {
	var _p5 = color;
	if (_p5.ctor === 'HSLA') {
		return A4(
			_elm_lang$core$Color$hsla,
			_p5._0 + _elm_lang$core$Basics$degrees(180),
			_p5._1,
			_p5._2,
			_p5._3);
	} else {
		var _p6 = A3(_elm_lang$core$Color$rgbToHsl, _p5._0, _p5._1, _p5._2);
		var h = _p6._0;
		var s = _p6._1;
		var l = _p6._2;
		return A4(
			_elm_lang$core$Color$hsla,
			h + _elm_lang$core$Basics$degrees(180),
			s,
			l,
			_p5._3);
	}
};
var _elm_lang$core$Color$grayscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$greyscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$RGBA = F4(
	function (a, b, c, d) {
		return {ctor: 'RGBA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$rgba = _elm_lang$core$Color$RGBA;
var _elm_lang$core$Color$rgb = F3(
	function (r, g, b) {
		return A4(_elm_lang$core$Color$RGBA, r, g, b, 1);
	});
var _elm_lang$core$Color$lightRed = A4(_elm_lang$core$Color$RGBA, 239, 41, 41, 1);
var _elm_lang$core$Color$red = A4(_elm_lang$core$Color$RGBA, 204, 0, 0, 1);
var _elm_lang$core$Color$darkRed = A4(_elm_lang$core$Color$RGBA, 164, 0, 0, 1);
var _elm_lang$core$Color$lightOrange = A4(_elm_lang$core$Color$RGBA, 252, 175, 62, 1);
var _elm_lang$core$Color$orange = A4(_elm_lang$core$Color$RGBA, 245, 121, 0, 1);
var _elm_lang$core$Color$darkOrange = A4(_elm_lang$core$Color$RGBA, 206, 92, 0, 1);
var _elm_lang$core$Color$lightYellow = A4(_elm_lang$core$Color$RGBA, 255, 233, 79, 1);
var _elm_lang$core$Color$yellow = A4(_elm_lang$core$Color$RGBA, 237, 212, 0, 1);
var _elm_lang$core$Color$darkYellow = A4(_elm_lang$core$Color$RGBA, 196, 160, 0, 1);
var _elm_lang$core$Color$lightGreen = A4(_elm_lang$core$Color$RGBA, 138, 226, 52, 1);
var _elm_lang$core$Color$green = A4(_elm_lang$core$Color$RGBA, 115, 210, 22, 1);
var _elm_lang$core$Color$darkGreen = A4(_elm_lang$core$Color$RGBA, 78, 154, 6, 1);
var _elm_lang$core$Color$lightBlue = A4(_elm_lang$core$Color$RGBA, 114, 159, 207, 1);
var _elm_lang$core$Color$blue = A4(_elm_lang$core$Color$RGBA, 52, 101, 164, 1);
var _elm_lang$core$Color$darkBlue = A4(_elm_lang$core$Color$RGBA, 32, 74, 135, 1);
var _elm_lang$core$Color$lightPurple = A4(_elm_lang$core$Color$RGBA, 173, 127, 168, 1);
var _elm_lang$core$Color$purple = A4(_elm_lang$core$Color$RGBA, 117, 80, 123, 1);
var _elm_lang$core$Color$darkPurple = A4(_elm_lang$core$Color$RGBA, 92, 53, 102, 1);
var _elm_lang$core$Color$lightBrown = A4(_elm_lang$core$Color$RGBA, 233, 185, 110, 1);
var _elm_lang$core$Color$brown = A4(_elm_lang$core$Color$RGBA, 193, 125, 17, 1);
var _elm_lang$core$Color$darkBrown = A4(_elm_lang$core$Color$RGBA, 143, 89, 2, 1);
var _elm_lang$core$Color$black = A4(_elm_lang$core$Color$RGBA, 0, 0, 0, 1);
var _elm_lang$core$Color$white = A4(_elm_lang$core$Color$RGBA, 255, 255, 255, 1);
var _elm_lang$core$Color$lightGrey = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$grey = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGrey = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightGray = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$gray = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGray = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightCharcoal = A4(_elm_lang$core$Color$RGBA, 136, 138, 133, 1);
var _elm_lang$core$Color$charcoal = A4(_elm_lang$core$Color$RGBA, 85, 87, 83, 1);
var _elm_lang$core$Color$darkCharcoal = A4(_elm_lang$core$Color$RGBA, 46, 52, 54, 1);
var _elm_lang$core$Color$Radial = F5(
	function (a, b, c, d, e) {
		return {ctor: 'Radial', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Color$radial = _elm_lang$core$Color$Radial;
var _elm_lang$core$Color$Linear = F3(
	function (a, b, c) {
		return {ctor: 'Linear', _0: a, _1: b, _2: c};
	});
var _elm_lang$core$Color$linear = _elm_lang$core$Color$Linear;

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$html$Html_Keyed$node = _elm_lang$virtual_dom$VirtualDom$keyedNode;
var _elm_lang$html$Html_Keyed$ol = _elm_lang$html$Html_Keyed$node('ol');
var _elm_lang$html$Html_Keyed$ul = _elm_lang$html$Html_Keyed$node('ul');

var _elm_lang$window$Native_Window = function()
{

var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
	callback(_elm_lang$core$Native_Scheduler.succeed({
		width: window.innerWidth,
		height: window.innerHeight
	}));
});

return {
	size: size
};

}();
var _elm_lang$window$Window_ops = _elm_lang$window$Window_ops || {};
_elm_lang$window$Window_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$window$Window$onSelfMsg = F3(
	function (router, dimensions, state) {
		var _p1 = state;
		if (_p1.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (_p2) {
				var _p3 = _p2;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p3._0(dimensions));
			};
			return A2(
				_elm_lang$window$Window_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p1._0.subs)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$window$Window$init = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
var _elm_lang$window$Window$size = _elm_lang$window$Native_Window.size;
var _elm_lang$window$Window$width = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.width;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$height = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.height;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$onEffects = F3(
	function (router, newSubs, oldState) {
		var _p4 = {ctor: '_Tuple2', _0: oldState, _1: newSubs};
		if (_p4._0.ctor === 'Nothing') {
			if (_p4._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					function (pid) {
						return _elm_lang$core$Task$succeed(
							_elm_lang$core$Maybe$Just(
								{subs: newSubs, pid: pid}));
					},
					_elm_lang$core$Process$spawn(
						A3(
							_elm_lang$dom$Dom_LowLevel$onWindow,
							'resize',
							_elm_lang$core$Json_Decode$succeed(
								{ctor: '_Tuple0'}),
							function (_p5) {
								return A2(
									_elm_lang$core$Task$andThen,
									_elm_lang$core$Platform$sendToSelf(router),
									_elm_lang$window$Window$size);
							})));
			}
		} else {
			if (_p4._1.ctor === '[]') {
				return A2(
					_elm_lang$window$Window_ops['&>'],
					_elm_lang$core$Process$kill(_p4._0._0.pid),
					_elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing));
			} else {
				return _elm_lang$core$Task$succeed(
					_elm_lang$core$Maybe$Just(
						{subs: newSubs, pid: _p4._0._0.pid}));
			}
		}
	});
var _elm_lang$window$Window$subscription = _elm_lang$core$Native_Platform.leaf('Window');
var _elm_lang$window$Window$Size = F2(
	function (a, b) {
		return {width: a, height: b};
	});
var _elm_lang$window$Window$MySub = function (a) {
	return {ctor: 'MySub', _0: a};
};
var _elm_lang$window$Window$resizes = function (tagger) {
	return _elm_lang$window$Window$subscription(
		_elm_lang$window$Window$MySub(tagger));
};
var _elm_lang$window$Window$subMap = F2(
	function (func, _p6) {
		var _p7 = _p6;
		return _elm_lang$window$Window$MySub(
			function (_p8) {
				return func(
					_p7._0(_p8));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Window'] = {pkg: 'elm-lang/window', init: _elm_lang$window$Window$init, onEffects: _elm_lang$window$Window$onEffects, onSelfMsg: _elm_lang$window$Window$onSelfMsg, tag: 'sub', subMap: _elm_lang$window$Window$subMap};

var _elm_tools$parser_primitives$Native_ParserPrimitives = function() {


// STRINGS

function isSubString(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var bigLength = bigString.length - offset;

	if (bigLength < smallLength)
	{
		return tuple3(-1, row, col);
	}

	for (var i = 0; i < smallLength; i++)
	{
		var char = smallString[i];

		if (char !== bigString[offset + i])
		{
			return tuple3(-1, row, col);
		}

		// if it is a two word character
		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			i++
			if (smallString[i] !== bigString[offset + i])
			{
				return tuple3(-1, row, col);
			}
			col++;
			continue;
		}

		// if it is a newline
		if (char === '\n')
		{
			row++;
			col = 1;
			continue;
		}

		// if it is a one word character
		col++
	}

	return tuple3(offset + smallLength, row, col);
}

function tuple3(a, b, c)
{
	return { ctor: '_Tuple3', _0: a, _1: b, _2: c };
}


// CHARS

var mkChar = _elm_lang$core$Native_Utils.chr;

function isSubChar(predicate, offset, string)
{
	if (offset >= string.length)
	{
		return -1;
	}

	if ((string.charCodeAt(offset) & 0xF800) === 0xD800)
	{
		return predicate(mkChar(string.substr(offset, 2)))
			? offset + 2
			: -1;
	}

	var char = string[offset];

	return predicate(mkChar(char))
		? ((char === '\n') ? -2 : (offset + 1))
		: -1;
}


// FIND STRING

function findSubString(before, smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);

	if (newOffset === -1)
	{
		return tuple3(-1, row, col);
	}

	var scanTarget = before ? newOffset	: newOffset + smallString.length;

	while (offset < scanTarget)
	{
		var char = bigString[offset];

		if (char === '\n')
		{
			offset++;
			row++;
			col = 1;
			continue;
		}

		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			offset += 2;
			col++;
			continue;
		}

		offset++;
		col++;
	}

	return tuple3(offset, row, col);
}


return {
	isSubString: F5(isSubString),
	isSubChar: F3(isSubChar),
	findSubString: F6(findSubString)
};

}();

var _elm_tools$parser_primitives$ParserPrimitives$findSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.findSubString;
var _elm_tools$parser_primitives$ParserPrimitives$isSubChar = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubChar;
var _elm_tools$parser_primitives$ParserPrimitives$isSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubString;

var _elm_tools$parser$Parser_Internal$isPlusOrMinus = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('+')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('-'));
};
var _elm_tools$parser$Parser_Internal$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser_Internal$isE = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('e')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('E'));
};
var _elm_tools$parser$Parser_Internal$isDot = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'));
};
var _elm_tools$parser$Parser_Internal$isBadIntEnd = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (_elm_lang$core$Char$isUpper($char) || (_elm_lang$core$Char$isLower($char) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'))));
};
var _elm_tools$parser$Parser_Internal$chomp = F3(
	function (isGood, offset, source) {
		chomp:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, isGood, offset, source);
			if (_elm_lang$core$Native_Utils.cmp(newOffset, 0) < 0) {
				return offset;
			} else {
				var _v0 = isGood,
					_v1 = newOffset,
					_v2 = source;
				isGood = _v0;
				offset = _v1;
				source = _v2;
				continue chomp;
			}
		}
	});
var _elm_tools$parser$Parser_Internal$chompDigits = F3(
	function (isValidDigit, offset, source) {
		var newOffset = A3(_elm_tools$parser$Parser_Internal$chomp, isValidDigit, offset, source);
		return _elm_lang$core$Native_Utils.eq(newOffset, offset) ? _elm_lang$core$Result$Err(newOffset) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, newOffset, source),
			-1)) ? _elm_lang$core$Result$Err(newOffset) : _elm_lang$core$Result$Ok(newOffset));
	});
var _elm_tools$parser$Parser_Internal$chompExp = F2(
	function (offset, source) {
		var eOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isE, offset, source);
		if (_elm_lang$core$Native_Utils.eq(eOffset, -1)) {
			return _elm_lang$core$Result$Ok(offset);
		} else {
			var opOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isPlusOrMinus, eOffset, source);
			var expOffset = _elm_lang$core$Native_Utils.eq(opOffset, -1) ? eOffset : opOffset;
			return (!_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isZero, expOffset, source),
				-1)) ? _elm_lang$core$Result$Err(expOffset) : (_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_lang$core$Char$isDigit, expOffset, source),
				-1) ? _elm_lang$core$Result$Err(expOffset) : A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, expOffset, source));
		}
	});
var _elm_tools$parser$Parser_Internal$chompDotAndExp = F2(
	function (offset, source) {
		var dotOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isDot, offset, source);
		return _elm_lang$core$Native_Utils.eq(dotOffset, -1) ? A2(_elm_tools$parser$Parser_Internal$chompExp, offset, source) : A2(
			_elm_tools$parser$Parser_Internal$chompExp,
			A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, dotOffset, source),
			source);
	});
var _elm_tools$parser$Parser_Internal$State = F6(
	function (a, b, c, d, e, f) {
		return {source: a, offset: b, indent: c, context: d, row: e, col: f};
	});
var _elm_tools$parser$Parser_Internal$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_tools$parser$Parser_Internal$Bad = F2(
	function (a, b) {
		return {ctor: 'Bad', _0: a, _1: b};
	});
var _elm_tools$parser$Parser_Internal$Good = F2(
	function (a, b) {
		return {ctor: 'Good', _0: a, _1: b};
	});

var _elm_tools$parser$Parser$changeContext = F2(
	function (newContext, _p0) {
		var _p1 = _p0;
		return {source: _p1.source, offset: _p1.offset, indent: _p1.indent, context: newContext, row: _p1.row, col: _p1.col};
	});
var _elm_tools$parser$Parser$sourceMap = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p4) {
				var _p5 = _p4;
				var _p6 = _p3._0(_p5);
				if (_p6.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p6._0, _p6._1);
				} else {
					var _p7 = _p6._1;
					var subString = A3(_elm_lang$core$String$slice, _p5.offset, _p7.offset, _p5.source);
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						A2(func, subString, _p6._0),
						_p7);
				}
			});
	});
var _elm_tools$parser$Parser$source = function (parser) {
	return A2(_elm_tools$parser$Parser$sourceMap, _elm_lang$core$Basics$always, parser);
};
var _elm_tools$parser$Parser$badFloatMsg = 'The `Parser.float` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$floatHelp = F3(
	function (offset, zeroOffset, source) {
		if (_elm_lang$core$Native_Utils.cmp(zeroOffset, 0) > -1) {
			return A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, zeroOffset, source);
		} else {
			var dotOffset = A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, offset, source);
			var result = A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, dotOffset, source);
			var _p8 = result;
			if (_p8.ctor === 'Err') {
				return result;
			} else {
				var _p9 = _p8._0;
				return _elm_lang$core$Native_Utils.eq(_p9, offset) ? _elm_lang$core$Result$Err(_p9) : result;
			}
		}
	});
var _elm_tools$parser$Parser$badIntMsg = 'The `Parser.int` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$isX = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('x'));
};
var _elm_tools$parser$Parser$isO = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('o'));
};
var _elm_tools$parser$Parser$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser$intHelp = F3(
	function (offset, zeroOffset, source) {
		return _elm_lang$core$Native_Utils.eq(zeroOffset, -1) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, offset, source) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isX, zeroOffset, source),
			-1)) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isHexDigit, offset + 2, source) : (_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, zeroOffset, source),
			-1) ? _elm_lang$core$Result$Ok(zeroOffset) : _elm_lang$core$Result$Err(zeroOffset)));
	});
var _elm_tools$parser$Parser$token = F2(
	function (makeProblem, str) {
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p10) {
				var _p11 = _p10;
				var _p13 = _p11.source;
				var _p12 = A5(_elm_tools$parser_primitives$ParserPrimitives$isSubString, str, _p11.offset, _p11.row, _p11.col, _p13);
				var newOffset = _p12._0;
				var newRow = _p12._1;
				var newCol = _p12._2;
				return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
					_elm_tools$parser$Parser_Internal$Bad,
					makeProblem(str),
					_p11) : A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: _p13, offset: newOffset, indent: _p11.indent, context: _p11.context, row: newRow, col: newCol});
			});
	});
var _elm_tools$parser$Parser$delayedCommitMap = F3(
	function (func, _p15, _p14) {
		var _p16 = _p15;
		var _p17 = _p14;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p18 = _p16._0(state1);
				if (_p18.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p18._0, state1);
				} else {
					var _p22 = _p18._1;
					var _p19 = _p17._0(_p22);
					if (_p19.ctor === 'Good') {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p18._0, _p19._0),
							_p19._1);
					} else {
						var _p21 = _p19._0;
						var _p20 = _p19._1;
						return (_elm_lang$core$Native_Utils.eq(_p22.row, _p20.row) && _elm_lang$core$Native_Utils.eq(_p22.col, _p20.col)) ? A2(_elm_tools$parser$Parser_Internal$Bad, _p21, state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p21, _p20);
					}
				}
			});
	});
var _elm_tools$parser$Parser$delayedCommit = F2(
	function (filler, realStuff) {
		return A3(
			_elm_tools$parser$Parser$delayedCommitMap,
			F2(
				function (_p23, v) {
					return v;
				}),
			filler,
			realStuff);
	});
var _elm_tools$parser$Parser$lazy = function (thunk) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			var _p24 = thunk(
				{ctor: '_Tuple0'});
			var parse = _p24._0;
			return parse(state);
		});
};
var _elm_tools$parser$Parser$andThen = F2(
	function (callback, _p25) {
		var _p26 = _p25;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p27 = _p26._0(state1);
				if (_p27.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p27._0, _p27._1);
				} else {
					var _p28 = callback(_p27._0);
					var parseB = _p28._0;
					return parseB(_p27._1);
				}
			});
	});
var _elm_tools$parser$Parser$apply = F2(
	function (f, a) {
		return f(a);
	});
var _elm_tools$parser$Parser$map2 = F3(
	function (func, _p30, _p29) {
		var _p31 = _p30;
		var _p32 = _p29;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p33 = _p31._0(state1);
				if (_p33.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p33._0, _p33._1);
				} else {
					var _p34 = _p32._0(_p33._1);
					if (_p34.ctor === 'Bad') {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _p34._0, _p34._1);
					} else {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p33._0, _p34._0),
							_p34._1);
					}
				}
			});
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|='] = F2(
	function (parseFunc, parseArg) {
		return A3(_elm_tools$parser$Parser$map2, _elm_tools$parser$Parser$apply, parseFunc, parseArg);
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|.'] = F2(
	function (keepParser, ignoreParser) {
		return A3(_elm_tools$parser$Parser$map2, _elm_lang$core$Basics$always, keepParser, ignoreParser);
	});
var _elm_tools$parser$Parser$map = F2(
	function (func, _p35) {
		var _p36 = _p35;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p37 = _p36._0(state1);
				if (_p37.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						func(_p37._0),
						_p37._1);
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p37._0, _p37._1);
				}
			});
	});
var _elm_tools$parser$Parser$succeed = function (a) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(_elm_tools$parser$Parser_Internal$Good, a, state);
		});
};
var _elm_tools$parser$Parser$run = F2(
	function (_p38, source) {
		var _p39 = _p38;
		var initialState = {
			source: source,
			offset: 0,
			indent: 1,
			context: {ctor: '[]'},
			row: 1,
			col: 1
		};
		var _p40 = _p39._0(initialState);
		if (_p40.ctor === 'Good') {
			return _elm_lang$core$Result$Ok(_p40._0);
		} else {
			return _elm_lang$core$Result$Err(
				{row: _p40._1.row, col: _p40._1.col, source: source, problem: _p40._0, context: _p40._1.context});
		}
	});
var _elm_tools$parser$Parser$Error = F5(
	function (a, b, c, d, e) {
		return {row: a, col: b, source: c, problem: d, context: e};
	});
var _elm_tools$parser$Parser$Context = F3(
	function (a, b, c) {
		return {row: a, col: b, description: c};
	});
var _elm_tools$parser$Parser$inContext = F2(
	function (ctx, _p41) {
		var _p42 = _p41;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p43) {
				var _p44 = _p43;
				var _p46 = _p44.context;
				var state1 = A2(
					_elm_tools$parser$Parser$changeContext,
					{
						ctor: '::',
						_0: A3(_elm_tools$parser$Parser$Context, _p44.row, _p44.col, ctx),
						_1: _p46
					},
					_p44);
				var _p45 = _p42._0(state1);
				if (_p45.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						_p45._0,
						A2(_elm_tools$parser$Parser$changeContext, _p46, _p45._1));
				} else {
					return _p45;
				}
			});
	});
var _elm_tools$parser$Parser$Fail = function (a) {
	return {ctor: 'Fail', _0: a};
};
var _elm_tools$parser$Parser$fail = function (message) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$Fail(message),
				state);
		});
};
var _elm_tools$parser$Parser$ExpectingClosing = function (a) {
	return {ctor: 'ExpectingClosing', _0: a};
};
var _elm_tools$parser$Parser$ignoreUntil = function (str) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (_p47) {
			var _p48 = _p47;
			var _p50 = _p48.source;
			var _p49 = A6(_elm_tools$parser_primitives$ParserPrimitives$findSubString, false, str, _p48.offset, _p48.row, _p48.col, _p50);
			var newOffset = _p49._0;
			var newRow = _p49._1;
			var newCol = _p49._2;
			return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$ExpectingClosing(str),
				_p48) : A2(
				_elm_tools$parser$Parser_Internal$Good,
				{ctor: '_Tuple0'},
				{source: _p50, offset: newOffset, indent: _p48.indent, context: _p48.context, row: newRow, col: newCol});
		});
};
var _elm_tools$parser$Parser$ExpectingVariable = {ctor: 'ExpectingVariable'};
var _elm_tools$parser$Parser$ExpectingKeyword = function (a) {
	return {ctor: 'ExpectingKeyword', _0: a};
};
var _elm_tools$parser$Parser$keyword = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingKeyword, str);
};
var _elm_tools$parser$Parser$ExpectingSymbol = function (a) {
	return {ctor: 'ExpectingSymbol', _0: a};
};
var _elm_tools$parser$Parser$symbol = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingSymbol, str);
};
var _elm_tools$parser$Parser$ExpectingEnd = {ctor: 'ExpectingEnd'};
var _elm_tools$parser$Parser$end = _elm_tools$parser$Parser_Internal$Parser(
	function (state) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$String$length(state.source),
			state.offset) ? A2(
			_elm_tools$parser$Parser_Internal$Good,
			{ctor: '_Tuple0'},
			state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$ExpectingEnd, state);
	});
var _elm_tools$parser$Parser$BadRepeat = {ctor: 'BadRepeat'};
var _elm_tools$parser$Parser$repeatExactly = F4(
	function (n, parse, revList, state1) {
		repeatExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1);
			} else {
				var _p51 = parse(state1);
				if (_p51.ctor === 'Good') {
					var _p52 = _p51._1;
					if (_elm_lang$core$Native_Utils.eq(state1.row, _p52.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p52.col)) {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p52);
					} else {
						var _v25 = n - 1,
							_v26 = parse,
							_v27 = {ctor: '::', _0: _p51._0, _1: revList},
							_v28 = _p52;
						n = _v25;
						parse = _v26;
						revList = _v27;
						state1 = _v28;
						continue repeatExactly;
					}
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p51._0, _p51._1);
				}
			}
		}
	});
var _elm_tools$parser$Parser$repeatAtLeast = F4(
	function (n, parse, revList, state1) {
		repeatAtLeast:
		while (true) {
			var _p53 = parse(state1);
			if (_p53.ctor === 'Good') {
				var _p54 = _p53._1;
				if (_elm_lang$core$Native_Utils.eq(state1.row, _p54.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p54.col)) {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p54);
				} else {
					var _v30 = n - 1,
						_v31 = parse,
						_v32 = {ctor: '::', _0: _p53._0, _1: revList},
						_v33 = _p54;
					n = _v30;
					parse = _v31;
					revList = _v32;
					state1 = _v33;
					continue repeatAtLeast;
				}
			} else {
				var _p55 = _p53._1;
				return (_elm_lang$core$Native_Utils.eq(state1.row, _p55.row) && (_elm_lang$core$Native_Utils.eq(state1.col, _p55.col) && (_elm_lang$core$Native_Utils.cmp(n, 0) < 1))) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p53._0, _p55);
			}
		}
	});
var _elm_tools$parser$Parser$repeat = F2(
	function (count, _p56) {
		var _p57 = _p56;
		var _p59 = _p57._0;
		var _p58 = count;
		if (_p58.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatExactly,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatAtLeast,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		}
	});
var _elm_tools$parser$Parser$ignoreExactly = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
			} else {
				var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
				if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
					return A2(
						_elm_tools$parser$Parser_Internal$Bad,
						_elm_tools$parser$Parser$BadRepeat,
						{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
				} else {
					if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
						var _v36 = n - 1,
							_v37 = predicate,
							_v38 = source,
							_v39 = offset + 1,
							_v40 = indent,
							_v41 = context,
							_v42 = row + 1,
							_v43 = 1;
						n = _v36;
						predicate = _v37;
						source = _v38;
						offset = _v39;
						indent = _v40;
						context = _v41;
						row = _v42;
						col = _v43;
						continue ignoreExactly;
					} else {
						var _v44 = n - 1,
							_v45 = predicate,
							_v46 = source,
							_v47 = newOffset,
							_v48 = indent,
							_v49 = context,
							_v50 = row,
							_v51 = col + 1;
						n = _v44;
						predicate = _v45;
						source = _v46;
						offset = _v47;
						indent = _v48;
						context = _v49;
						row = _v50;
						col = _v51;
						continue ignoreExactly;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignoreAtLeast = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreAtLeast:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
			if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
				var state = {source: source, offset: offset, indent: indent, context: context, row: row, col: col};
				return (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, state);
			} else {
				if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
					var _v52 = n - 1,
						_v53 = predicate,
						_v54 = source,
						_v55 = offset + 1,
						_v56 = indent,
						_v57 = context,
						_v58 = row + 1,
						_v59 = 1;
					n = _v52;
					predicate = _v53;
					source = _v54;
					offset = _v55;
					indent = _v56;
					context = _v57;
					row = _v58;
					col = _v59;
					continue ignoreAtLeast;
				} else {
					var _v60 = n - 1,
						_v61 = predicate,
						_v62 = source,
						_v63 = newOffset,
						_v64 = indent,
						_v65 = context,
						_v66 = row,
						_v67 = col + 1;
					n = _v60;
					predicate = _v61;
					source = _v62;
					offset = _v63;
					indent = _v64;
					context = _v65;
					row = _v66;
					col = _v67;
					continue ignoreAtLeast;
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignore = F2(
	function (count, predicate) {
		var _p60 = count;
		if (_p60.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p61) {
					var _p62 = _p61;
					return A8(_elm_tools$parser$Parser$ignoreExactly, _p60._0, predicate, _p62.source, _p62.offset, _p62.indent, _p62.context, _p62.row, _p62.col);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p63) {
					var _p64 = _p63;
					return A8(_elm_tools$parser$Parser$ignoreAtLeast, _p60._0, predicate, _p64.source, _p64.offset, _p64.indent, _p64.context, _p64.row, _p64.col);
				});
		}
	});
var _elm_tools$parser$Parser$keep = F2(
	function (count, predicate) {
		return _elm_tools$parser$Parser$source(
			A2(_elm_tools$parser$Parser$ignore, count, predicate));
	});
var _elm_tools$parser$Parser$BadFloat = {ctor: 'BadFloat'};
var _elm_tools$parser$Parser$float = _elm_tools$parser$Parser_Internal$Parser(
	function (_p65) {
		var _p66 = _p65;
		var _p77 = _p66.source;
		var _p76 = _p66.row;
		var _p75 = _p66.offset;
		var _p74 = _p66.indent;
		var _p73 = _p66.context;
		var _p72 = _p66.col;
		var _p67 = A3(
			_elm_tools$parser$Parser$floatHelp,
			_p75,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p75, _p77),
			_p77);
		if (_p67.ctor === 'Err') {
			var _p68 = _p67._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadFloat,
				{source: _p77, offset: _p68, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p68 - _p75)});
		} else {
			var _p71 = _p67._0;
			var _p69 = _elm_lang$core$String$toFloat(
				A3(_elm_lang$core$String$slice, _p75, _p71, _p77));
			if (_p69.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 733, column: 9},
						end: {line: 745, column: 16}
					},
					_p69)(_elm_tools$parser$Parser$badFloatMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p69._0,
					{source: _p77, offset: _p71, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p71 - _p75)});
			}
		}
	});
var _elm_tools$parser$Parser$BadInt = {ctor: 'BadInt'};
var _elm_tools$parser$Parser$int = _elm_tools$parser$Parser_Internal$Parser(
	function (_p78) {
		var _p79 = _p78;
		var _p90 = _p79.source;
		var _p89 = _p79.row;
		var _p88 = _p79.offset;
		var _p87 = _p79.indent;
		var _p86 = _p79.context;
		var _p85 = _p79.col;
		var _p80 = A3(
			_elm_tools$parser$Parser$intHelp,
			_p88,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p88, _p90),
			_p90);
		if (_p80.ctor === 'Err') {
			var _p81 = _p80._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadInt,
				{source: _p90, offset: _p81, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p81 - _p88)});
		} else {
			var _p84 = _p80._0;
			var _p82 = _elm_lang$core$String$toInt(
				A3(_elm_lang$core$String$slice, _p88, _p84, _p90));
			if (_p82.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 638, column: 9},
						end: {line: 650, column: 16}
					},
					_p82)(_elm_tools$parser$Parser$badIntMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p82._0,
					{source: _p90, offset: _p84, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p84 - _p88)});
			}
		}
	});
var _elm_tools$parser$Parser$BadOneOf = function (a) {
	return {ctor: 'BadOneOf', _0: a};
};
var _elm_tools$parser$Parser$oneOfHelp = F3(
	function (state, problems, parsers) {
		oneOfHelp:
		while (true) {
			var _p91 = parsers;
			if (_p91.ctor === '[]') {
				return A2(
					_elm_tools$parser$Parser_Internal$Bad,
					_elm_tools$parser$Parser$BadOneOf(
						_elm_lang$core$List$reverse(problems)),
					state);
			} else {
				var _p92 = _p91._0._0(state);
				if (_p92.ctor === 'Good') {
					return _p92;
				} else {
					if (_elm_lang$core$Native_Utils.eq(state.row, _p92._1.row) && _elm_lang$core$Native_Utils.eq(state.col, _p92._1.col)) {
						var _v79 = state,
							_v80 = {ctor: '::', _0: _p92._0, _1: problems},
							_v81 = _p91._1;
						state = _v79;
						problems = _v80;
						parsers = _v81;
						continue oneOfHelp;
					} else {
						return _p92;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$oneOf = function (parsers) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A3(
				_elm_tools$parser$Parser$oneOfHelp,
				state,
				{ctor: '[]'},
				parsers);
		});
};
var _elm_tools$parser$Parser$Exactly = function (a) {
	return {ctor: 'Exactly', _0: a};
};
var _elm_tools$parser$Parser$AtLeast = function (a) {
	return {ctor: 'AtLeast', _0: a};
};
var _elm_tools$parser$Parser$zeroOrMore = _elm_tools$parser$Parser$AtLeast(0);
var _elm_tools$parser$Parser$oneOrMore = _elm_tools$parser$Parser$AtLeast(1);

var _mdgriffith$style_elements$Style_Internal_Model$StyleSheet = F3(
	function (a, b, c) {
		return {style: a, variations: b, css: c};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Reset = function (a) {
	return {ctor: 'Reset', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Import = function (a) {
	return {ctor: 'Import', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$RawStyle = F2(
	function (a, b) {
		return {ctor: 'RawStyle', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Style = F2(
	function (a, b) {
		return {ctor: 'Style', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Transitions = function (a) {
	return {ctor: 'Transitions', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$TextColor = function (a) {
	return {ctor: 'TextColor', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$SelectionColor = function (a) {
	return {ctor: 'SelectionColor', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Visibility = function (a) {
	return {ctor: 'Visibility', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Filters = function (a) {
	return {ctor: 'Filters', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Transform = function (a) {
	return {ctor: 'Transform', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Shadows = function (a) {
	return {ctor: 'Shadows', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Background = function (a) {
	return {ctor: 'Background', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Layout = function (a) {
	return {ctor: 'Layout', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Font = F2(
	function (a, b) {
		return {ctor: 'Font', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Position = function (a) {
	return {ctor: 'Position', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$PseudoElement = F2(
	function (a, b) {
		return {ctor: 'PseudoElement', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$MediaQuery = F2(
	function (a, b) {
		return {ctor: 'MediaQuery', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Child = F2(
	function (a, b) {
		return {ctor: 'Child', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Variation = F2(
	function (a, b) {
		return {ctor: 'Variation', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Exact = F2(
	function (a, b) {
		return {ctor: 'Exact', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$mapPropClass = F2(
	function (fn, prop) {
		var _p0 = prop;
		switch (_p0.ctor) {
			case 'Child':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$Child,
					fn(_p0._0),
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Model$mapPropClass(fn),
						_p0._1));
			case 'Variation':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$Variation,
					_p0._0,
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Model$mapPropClass(fn),
						_p0._1));
			case 'Exact':
				return A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, _p0._0, _p0._1);
			case 'Position':
				return _mdgriffith$style_elements$Style_Internal_Model$Position(_p0._0);
			case 'Font':
				return A2(_mdgriffith$style_elements$Style_Internal_Model$Font, _p0._0, _p0._1);
			case 'Layout':
				return _mdgriffith$style_elements$Style_Internal_Model$Layout(_p0._0);
			case 'Background':
				return _mdgriffith$style_elements$Style_Internal_Model$Background(_p0._0);
			case 'MediaQuery':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$MediaQuery,
					_p0._0,
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Model$mapPropClass(fn),
						_p0._1));
			case 'PseudoElement':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$PseudoElement,
					_p0._0,
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Model$mapPropClass(fn),
						_p0._1));
			case 'Shadows':
				return _mdgriffith$style_elements$Style_Internal_Model$Shadows(_p0._0);
			case 'Transform':
				return _mdgriffith$style_elements$Style_Internal_Model$Transform(_p0._0);
			case 'Filters':
				return _mdgriffith$style_elements$Style_Internal_Model$Filters(_p0._0);
			case 'Visibility':
				return _mdgriffith$style_elements$Style_Internal_Model$Visibility(_p0._0);
			case 'TextColor':
				return _mdgriffith$style_elements$Style_Internal_Model$TextColor(_p0._0);
			case 'Transitions':
				return _mdgriffith$style_elements$Style_Internal_Model$Transitions(_p0._0);
			default:
				return _mdgriffith$style_elements$Style_Internal_Model$SelectionColor(_p0._0);
		}
	});
var _mdgriffith$style_elements$Style_Internal_Model$mapPropClassAndVar = F3(
	function (fn, fnVar, prop) {
		var _p1 = prop;
		switch (_p1.ctor) {
			case 'Child':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$Child,
					fn(_p1._0),
					A2(
						_elm_lang$core$List$map,
						A2(_mdgriffith$style_elements$Style_Internal_Model$mapPropClassAndVar, fn, fnVar),
						_p1._1));
			case 'Variation':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$Variation,
					fnVar(_p1._0),
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Model$mapPropClass(fn),
						_p1._1));
			case 'Exact':
				return A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, _p1._0, _p1._1);
			case 'Position':
				return _mdgriffith$style_elements$Style_Internal_Model$Position(_p1._0);
			case 'Font':
				return A2(_mdgriffith$style_elements$Style_Internal_Model$Font, _p1._0, _p1._1);
			case 'Layout':
				return _mdgriffith$style_elements$Style_Internal_Model$Layout(_p1._0);
			case 'Background':
				return _mdgriffith$style_elements$Style_Internal_Model$Background(_p1._0);
			case 'MediaQuery':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$MediaQuery,
					_p1._0,
					A2(
						_elm_lang$core$List$map,
						A2(_mdgriffith$style_elements$Style_Internal_Model$mapPropClassAndVar, fn, fnVar),
						_p1._1));
			case 'PseudoElement':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$PseudoElement,
					_p1._0,
					A2(
						_elm_lang$core$List$map,
						A2(_mdgriffith$style_elements$Style_Internal_Model$mapPropClassAndVar, fn, fnVar),
						_p1._1));
			case 'Shadows':
				return _mdgriffith$style_elements$Style_Internal_Model$Shadows(_p1._0);
			case 'Transform':
				return _mdgriffith$style_elements$Style_Internal_Model$Transform(_p1._0);
			case 'Filters':
				return _mdgriffith$style_elements$Style_Internal_Model$Filters(_p1._0);
			case 'Visibility':
				return _mdgriffith$style_elements$Style_Internal_Model$Visibility(_p1._0);
			case 'TextColor':
				return _mdgriffith$style_elements$Style_Internal_Model$TextColor(_p1._0);
			case 'Transitions':
				return _mdgriffith$style_elements$Style_Internal_Model$Transitions(_p1._0);
			default:
				return _mdgriffith$style_elements$Style_Internal_Model$SelectionColor(_p1._0);
		}
	});
var _mdgriffith$style_elements$Style_Internal_Model$mapClassAndVar = F3(
	function (fn, fnVariation, style) {
		var _p2 = style;
		switch (_p2.ctor) {
			case 'Style':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Model$Style,
					fn(_p2._0),
					A2(
						_elm_lang$core$List$map,
						A2(_mdgriffith$style_elements$Style_Internal_Model$mapPropClassAndVar, fn, fnVariation),
						_p2._1));
			case 'Import':
				return _mdgriffith$style_elements$Style_Internal_Model$Import(_p2._0);
			case 'RawStyle':
				return A2(_mdgriffith$style_elements$Style_Internal_Model$RawStyle, _p2._0, _p2._1);
			default:
				return _mdgriffith$style_elements$Style_Internal_Model$Reset(_p2._0);
		}
	});
var _mdgriffith$style_elements$Style_Internal_Model$Transition = function (a) {
	return {ctor: 'Transition', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Opacity = function (a) {
	return {ctor: 'Opacity', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Invisible = {ctor: 'Invisible'};
var _mdgriffith$style_elements$Style_Internal_Model$Hidden = {ctor: 'Hidden'};
var _mdgriffith$style_elements$Style_Internal_Model$Float = function (a) {
	return {ctor: 'Float', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Inline = {ctor: 'Inline'};
var _mdgriffith$style_elements$Style_Internal_Model$ZIndex = function (a) {
	return {ctor: 'ZIndex', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$PosBottom = function (a) {
	return {ctor: 'PosBottom', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$PosTop = function (a) {
	return {ctor: 'PosTop', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$PosRight = function (a) {
	return {ctor: 'PosRight', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$PosLeft = function (a) {
	return {ctor: 'PosLeft', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$RelativeTo = function (a) {
	return {ctor: 'RelativeTo', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Parent = {ctor: 'Parent'};
var _mdgriffith$style_elements$Style_Internal_Model$Current = {ctor: 'Current'};
var _mdgriffith$style_elements$Style_Internal_Model$Screen = {ctor: 'Screen'};
var _mdgriffith$style_elements$Style_Internal_Model$FloatTopRight = {ctor: 'FloatTopRight'};
var _mdgriffith$style_elements$Style_Internal_Model$FloatTopLeft = {ctor: 'FloatTopLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$FloatRight = {ctor: 'FloatRight'};
var _mdgriffith$style_elements$Style_Internal_Model$FloatLeft = {ctor: 'FloatLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$BoxProp = F2(
	function (a, b) {
		return {ctor: 'BoxProp', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Grid = F2(
	function (a, b) {
		return {ctor: 'Grid', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$FlexLayout = F2(
	function (a, b) {
		return {ctor: 'FlexLayout', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$TextLayout = function (a) {
	return {ctor: 'TextLayout', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Vert = function (a) {
	return {ctor: 'Vert', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Horz = function (a) {
	return {ctor: 'Horz', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Wrap = function (a) {
	return {ctor: 'Wrap', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$GridGap = F2(
	function (a, b) {
		return {ctor: 'GridGap', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$GridV = function (a) {
	return {ctor: 'GridV', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$GridH = function (a) {
	return {ctor: 'GridH', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$NamedGridTemplate = function (a) {
	return {ctor: 'NamedGridTemplate', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$GridTemplate = function (a) {
	return {ctor: 'GridTemplate', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$GridPosition = function (a) {
	return {ctor: 'GridPosition', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Named = F2(
	function (a, b) {
		return {ctor: 'Named', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$SpanJust = function (a) {
	return {ctor: 'SpanJust', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$SpanAll = {ctor: 'SpanAll'};
var _mdgriffith$style_elements$Style_Internal_Model$BackgroundLinearGradient = F2(
	function (a, b) {
		return {ctor: 'BackgroundLinearGradient', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$BackgroundElement = F2(
	function (a, b) {
		return {ctor: 'BackgroundElement', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$BackgroundImage = function (a) {
	return {ctor: 'BackgroundImage', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$ToAngle = function (a) {
	return {ctor: 'ToAngle', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$ToBottomLeft = {ctor: 'ToBottomLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$ToTopLeft = {ctor: 'ToTopLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$ToLeft = {ctor: 'ToLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$ToBottomRight = {ctor: 'ToBottomRight'};
var _mdgriffith$style_elements$Style_Internal_Model$ToTopRight = {ctor: 'ToTopRight'};
var _mdgriffith$style_elements$Style_Internal_Model$ToRight = {ctor: 'ToRight'};
var _mdgriffith$style_elements$Style_Internal_Model$ToDown = {ctor: 'ToDown'};
var _mdgriffith$style_elements$Style_Internal_Model$ToUp = {ctor: 'ToUp'};
var _mdgriffith$style_elements$Style_Internal_Model$PxStep = F2(
	function (a, b) {
		return {ctor: 'PxStep', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$PercentStep = F2(
	function (a, b) {
		return {ctor: 'PercentStep', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$ColorStep = function (a) {
	return {ctor: 'ColorStep', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$ShadowModel = function (a) {
	return {ctor: 'ShadowModel', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$DropShadow = function (a) {
	return {ctor: 'DropShadow', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Sepia = function (a) {
	return {ctor: 'Sepia', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Saturate = function (a) {
	return {ctor: 'Saturate', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$OpacityFilter = function (a) {
	return {ctor: 'OpacityFilter', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Invert = function (a) {
	return {ctor: 'Invert', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$HueRotate = function (a) {
	return {ctor: 'HueRotate', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Grayscale = function (a) {
	return {ctor: 'Grayscale', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Contrast = function (a) {
	return {ctor: 'Contrast', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Brightness = function (a) {
	return {ctor: 'Brightness', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Blur = function (a) {
	return {ctor: 'Blur', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$FilterUrl = function (a) {
	return {ctor: 'FilterUrl', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Scale = F3(
	function (a, b, c) {
		return {ctor: 'Scale', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Style_Internal_Model$RotateAround = F4(
	function (a, b, c, d) {
		return {ctor: 'RotateAround', _0: a, _1: b, _2: c, _3: d};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Rotate = function (a) {
	return {ctor: 'Rotate', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Translate = F3(
	function (a, b, c) {
		return {ctor: 'Translate', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Style_Internal_Model$NoRepeat = {ctor: 'NoRepeat'};
var _mdgriffith$style_elements$Style_Internal_Model$Round = {ctor: 'Round'};
var _mdgriffith$style_elements$Style_Internal_Model$Space = {ctor: 'Space'};
var _mdgriffith$style_elements$Style_Internal_Model$Repeat = {ctor: 'Repeat'};
var _mdgriffith$style_elements$Style_Internal_Model$RepeatY = {ctor: 'RepeatY'};
var _mdgriffith$style_elements$Style_Internal_Model$RepeatX = {ctor: 'RepeatX'};
var _mdgriffith$style_elements$Style_Internal_Model$GoLeft = {ctor: 'GoLeft'};
var _mdgriffith$style_elements$Style_Internal_Model$Down = {ctor: 'Down'};
var _mdgriffith$style_elements$Style_Internal_Model$GoRight = {ctor: 'GoRight'};
var _mdgriffith$style_elements$Style_Internal_Model$Up = {ctor: 'Up'};
var _mdgriffith$style_elements$Style_Internal_Model$Other = function (a) {
	return {ctor: 'Other', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$JustifyAll = {ctor: 'JustifyAll'};
var _mdgriffith$style_elements$Style_Internal_Model$Justify = {ctor: 'Justify'};
var _mdgriffith$style_elements$Style_Internal_Model$Center = {ctor: 'Center'};
var _mdgriffith$style_elements$Style_Internal_Model$Bottom = {ctor: 'Bottom'};
var _mdgriffith$style_elements$Style_Internal_Model$Top = {ctor: 'Top'};
var _mdgriffith$style_elements$Style_Internal_Model$Right = {ctor: 'Right'};
var _mdgriffith$style_elements$Style_Internal_Model$Left = {ctor: 'Left'};
var _mdgriffith$style_elements$Style_Internal_Model$Calc = F2(
	function (a, b) {
		return {ctor: 'Calc', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Model$Fill = function (a) {
	return {ctor: 'Fill', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Auto = {ctor: 'Auto'};
var _mdgriffith$style_elements$Style_Internal_Model$Percent = function (a) {
	return {ctor: 'Percent', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Model$Px = function (a) {
	return {ctor: 'Px', _0: a};
};

var _mdgriffith$style_elements$Element_Internal_Model$name = function (el) {
	var _p0 = el;
	switch (_p0.ctor) {
		case 'Empty':
			return 'empty';
		case 'Spacer':
			return 'spacer';
		case 'Text':
			return 'text';
		case 'Element':
			return 'element';
		case 'Layout':
			return 'layout';
		default:
			return 'html';
	}
};
var _mdgriffith$style_elements$Element_Internal_Model$Raw = function (a) {
	return {ctor: 'Raw', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Layout = function (a) {
	return {ctor: 'Layout', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Element = function (a) {
	return {ctor: 'Element', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Text = F2(
	function (a, b) {
		return {ctor: 'Text', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Element_Internal_Model$Spacer = function (a) {
	return {ctor: 'Spacer', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Empty = {ctor: 'Empty'};
var _mdgriffith$style_elements$Element_Internal_Model$Keyed = function (a) {
	return {ctor: 'Keyed', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$adjust = F3(
	function (fn, parent, el) {
		var maybeOnEmptyList = function (list) {
			return _elm_lang$core$List$isEmpty(list) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(list);
		};
		var merge = F2(
			function (el, current) {
				var _p1 = el;
				if (_p1.ctor === 'Nothing') {
					return current;
				} else {
					var _p2 = current;
					if (_p2.ctor === 'Nothing') {
						return el;
					} else {
						return _elm_lang$core$Maybe$Just(
							A2(_elm_lang$core$Basics_ops['++'], _p1._0, _p2._0));
					}
				}
			});
		var _p3 = el;
		switch (_p3.ctor) {
			case 'Element':
				var adjustAndMerge = F2(
					function (el, _p4) {
						var _p5 = _p4;
						var _p9 = _p5._1;
						var _p8 = _p5._0;
						var _p6 = A3(_mdgriffith$style_elements$Element_Internal_Model$adjust, fn, _elm_lang$core$Maybe$Nothing, el);
						var adjusted = _p6._0;
						var data = _p6._1;
						var _p7 = data;
						if (_p7.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: adjusted, _1: _p8},
								_1: _p9
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: adjusted, _1: _p8},
								_1: A2(_elm_lang$core$Basics_ops['++'], _p7._0, _p9)
							};
						}
					});
				var _p10 = function () {
					var _p11 = _p3._0.absolutelyPositioned;
					if (_p11.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing};
					} else {
						return function (_p12) {
							var _p13 = _p12;
							return {
								ctor: '_Tuple2',
								_0: maybeOnEmptyList(_p13._0),
								_1: maybeOnEmptyList(_p13._1)
							};
						}(
							A3(
								_elm_lang$core$List$foldr,
								adjustAndMerge,
								{
									ctor: '_Tuple2',
									_0: {ctor: '[]'},
									_1: {ctor: '[]'}
								},
								_p11._0));
					}
				}();
				var adjustedOthers = _p10._0;
				var otherChildrenData = _p10._1;
				var _p14 = A3(_mdgriffith$style_elements$Element_Internal_Model$adjust, fn, _elm_lang$core$Maybe$Nothing, _p3._0.child);
				var adjustedChild = _p14._0;
				var childData = _p14._1;
				var _p15 = A2(
					fn,
					parent,
					_mdgriffith$style_elements$Element_Internal_Model$Element(
						_elm_lang$core$Native_Utils.update(
							_p3._0,
							{child: adjustedChild, absolutelyPositioned: adjustedOthers})));
				var adjustedEl = _p15._0;
				var elData = _p15._1;
				return {
					ctor: '_Tuple2',
					_0: adjustedEl,
					_1: A3(
						_elm_lang$core$List$foldr,
						merge,
						_elm_lang$core$Maybe$Nothing,
						{
							ctor: '::',
							_0: childData,
							_1: {
								ctor: '::',
								_0: otherChildrenData,
								_1: {
									ctor: '::',
									_0: elData,
									_1: {ctor: '[]'}
								}
							}
						})
				};
			case 'Layout':
				var _p40 = _p3._0.layout;
				var adjustAndMergeKeyed = F3(
					function (usingParent, _p17, _p16) {
						var _p18 = _p17;
						var _p24 = _p18._0;
						var _p19 = _p16;
						var _p23 = _p19._1;
						var _p22 = _p19._0;
						var _p20 = A3(_mdgriffith$style_elements$Element_Internal_Model$adjust, fn, usingParent, _p18._1);
						var adjusted = _p20._0;
						var data = _p20._1;
						var _p21 = data;
						if (_p21.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _p24, _1: adjusted},
									_1: _p22
								},
								_1: _p23
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _p24, _1: adjusted},
									_1: _p22
								},
								_1: A2(_elm_lang$core$Basics_ops['++'], _p21._0, _p23)
							};
						}
					});
				var adjustAndMerge = F3(
					function (usingParent, el, _p25) {
						var _p26 = _p25;
						var _p30 = _p26._1;
						var _p29 = _p26._0;
						var _p27 = A3(_mdgriffith$style_elements$Element_Internal_Model$adjust, fn, usingParent, el);
						var adjusted = _p27._0;
						var data = _p27._1;
						var _p28 = data;
						if (_p28.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: adjusted, _1: _p29},
								_1: _p30
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: adjusted, _1: _p29},
								_1: A2(_elm_lang$core$Basics_ops['++'], _p28._0, _p30)
							};
						}
					});
				var _p31 = function () {
					var _p32 = _p3._0.children;
					if (_p32.ctor === 'Normal') {
						var _p33 = A3(
							_elm_lang$core$List$foldr,
							adjustAndMerge(
								_elm_lang$core$Maybe$Just(_p40)),
							{
								ctor: '_Tuple2',
								_0: {ctor: '[]'},
								_1: {ctor: '[]'}
							},
							_p32._0);
						var adjusted = _p33._0;
						var data = _p33._1;
						return {
							ctor: '_Tuple2',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Normal(adjusted),
							_1: maybeOnEmptyList(data)
						};
					} else {
						var _p34 = A3(
							_elm_lang$core$List$foldr,
							adjustAndMergeKeyed(
								_elm_lang$core$Maybe$Just(_p40)),
							{
								ctor: '_Tuple2',
								_0: {ctor: '[]'},
								_1: {ctor: '[]'}
							},
							_p32._0);
						var adjusted = _p34._0;
						var data = _p34._1;
						return {
							ctor: '_Tuple2',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Keyed(adjusted),
							_1: maybeOnEmptyList(data)
						};
					}
				}();
				var adjustedChildren = _p31._0;
				var childrenData = _p31._1;
				var _p35 = function () {
					var _p36 = _p3._0.absolutelyPositioned;
					if (_p36.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing};
					} else {
						return function (_p37) {
							var _p38 = _p37;
							return {
								ctor: '_Tuple2',
								_0: maybeOnEmptyList(_p38._0),
								_1: maybeOnEmptyList(_p38._1)
							};
						}(
							A3(
								_elm_lang$core$List$foldr,
								adjustAndMerge(_elm_lang$core$Maybe$Nothing),
								{
									ctor: '_Tuple2',
									_0: {ctor: '[]'},
									_1: {ctor: '[]'}
								},
								_p36._0));
					}
				}();
				var adjustedOthers = _p35._0;
				var otherChildrenData = _p35._1;
				var _p39 = A2(
					fn,
					parent,
					_mdgriffith$style_elements$Element_Internal_Model$Layout(
						_elm_lang$core$Native_Utils.update(
							_p3._0,
							{children: adjustedChildren, absolutelyPositioned: adjustedOthers})));
				var adjustedLayout = _p39._0;
				var layoutData = _p39._1;
				return {
					ctor: '_Tuple2',
					_0: adjustedLayout,
					_1: A3(
						_elm_lang$core$List$foldr,
						merge,
						_elm_lang$core$Maybe$Nothing,
						{
							ctor: '::',
							_0: layoutData,
							_1: {
								ctor: '::',
								_0: childrenData,
								_1: {
									ctor: '::',
									_0: otherChildrenData,
									_1: {ctor: '[]'}
								}
							}
						})
				};
			default:
				return A2(fn, _elm_lang$core$Maybe$Nothing, el);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Model$mapChildren = F2(
	function (fn, children) {
		var _p41 = children;
		if (_p41.ctor === 'Normal') {
			return _mdgriffith$style_elements$Element_Internal_Model$Normal(
				A2(_elm_lang$core$List$map, fn, _p41._0));
		} else {
			return _mdgriffith$style_elements$Element_Internal_Model$Keyed(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Tuple$mapSecond(fn),
					_p41._0));
		}
	});
var _mdgriffith$style_elements$Element_Internal_Model$OnGrid = function (a) {
	return {ctor: 'OnGrid', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$NamedOnGrid = function (a) {
	return {ctor: 'NamedOnGrid', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Overflow = function (a) {
	return {ctor: 'Overflow', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Shrink = function (a) {
	return {ctor: 'Shrink', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$PointerEvents = function (a) {
	return {ctor: 'PointerEvents', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$GridCoords = function (a) {
	return {ctor: 'GridCoords', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$GridArea = function (a) {
	return {ctor: 'GridArea', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Attr = function (a) {
	return {ctor: 'Attr', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$InputEvent = function (a) {
	return {ctor: 'InputEvent', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Event = function (a) {
	return {ctor: 'Event', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$PhantomPadding = function (a) {
	return {ctor: 'PhantomPadding', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Padding = F4(
	function (a, b, c, d) {
		return {ctor: 'Padding', _0: a, _1: b, _2: c, _3: d};
	});
var _mdgriffith$style_elements$Element_Internal_Model$Expand = {ctor: 'Expand'};
var _mdgriffith$style_elements$Element_Internal_Model$Margin = function (a) {
	return {ctor: 'Margin', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Spacing = F2(
	function (a, b) {
		return {ctor: 'Spacing', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Element_Internal_Model$Opacity = function (a) {
	return {ctor: 'Opacity', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Hidden = {ctor: 'Hidden'};
var _mdgriffith$style_elements$Element_Internal_Model$PositionFrame = function (a) {
	return {ctor: 'PositionFrame', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Position = F3(
	function (a, b, c) {
		return {ctor: 'Position', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Element_Internal_Model$VAlign = function (a) {
	return {ctor: 'VAlign', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$HAlign = function (a) {
	return {ctor: 'HAlign', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Inline = {ctor: 'Inline'};
var _mdgriffith$style_elements$Element_Internal_Model$Width = function (a) {
	return {ctor: 'Width', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Height = function (a) {
	return {ctor: 'Height', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Vary = F2(
	function (a, b) {
		return {ctor: 'Vary', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Element_Internal_Model$mapAttr = F2(
	function (fn, attr) {
		var _p42 = attr;
		switch (_p42.ctor) {
			case 'Event':
				return _mdgriffith$style_elements$Element_Internal_Model$Event(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p42._0));
			case 'InputEvent':
				return _mdgriffith$style_elements$Element_Internal_Model$InputEvent(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p42._0));
			case 'Attr':
				return _mdgriffith$style_elements$Element_Internal_Model$Attr(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p42._0));
			case 'Vary':
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Vary, _p42._0, _p42._1);
			case 'Height':
				return _mdgriffith$style_elements$Element_Internal_Model$Height(_p42._0);
			case 'Width':
				return _mdgriffith$style_elements$Element_Internal_Model$Width(_p42._0);
			case 'Inline':
				return _mdgriffith$style_elements$Element_Internal_Model$Inline;
			case 'HAlign':
				return _mdgriffith$style_elements$Element_Internal_Model$HAlign(_p42._0);
			case 'VAlign':
				return _mdgriffith$style_elements$Element_Internal_Model$VAlign(_p42._0);
			case 'Position':
				return A3(_mdgriffith$style_elements$Element_Internal_Model$Position, _p42._0, _p42._1, _p42._2);
			case 'PositionFrame':
				return _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_p42._0);
			case 'Hidden':
				return _mdgriffith$style_elements$Element_Internal_Model$Hidden;
			case 'Opacity':
				return _mdgriffith$style_elements$Element_Internal_Model$Opacity(_p42._0);
			case 'Spacing':
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, _p42._0, _p42._1);
			case 'Margin':
				return _mdgriffith$style_elements$Element_Internal_Model$Margin(_p42._0);
			case 'Expand':
				return _mdgriffith$style_elements$Element_Internal_Model$Expand;
			case 'Padding':
				return A4(_mdgriffith$style_elements$Element_Internal_Model$Padding, _p42._0, _p42._1, _p42._2, _p42._3);
			case 'PhantomPadding':
				return _mdgriffith$style_elements$Element_Internal_Model$PhantomPadding(_p42._0);
			case 'GridArea':
				return _mdgriffith$style_elements$Element_Internal_Model$GridArea(_p42._0);
			case 'GridCoords':
				return _mdgriffith$style_elements$Element_Internal_Model$GridCoords(_p42._0);
			case 'PointerEvents':
				return _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(_p42._0);
			case 'Shrink':
				return _mdgriffith$style_elements$Element_Internal_Model$Shrink(_p42._0);
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Overflow(_p42._0);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Model$mapMsg = F2(
	function (fn, el) {
		var _p43 = el;
		switch (_p43.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p43._0);
			case 'Text':
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p43._0, _p43._1);
			case 'Element':
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p43._0,
						{
							attrs: A2(
								_elm_lang$core$List$map,
								_mdgriffith$style_elements$Element_Internal_Model$mapAttr(fn),
								_p43._0.attrs),
							child: A2(_mdgriffith$style_elements$Element_Internal_Model$mapMsg, fn, _p43._0.child),
							absolutelyPositioned: A2(
								_elm_lang$core$Maybe$map,
								_elm_lang$core$List$map(
									function (child) {
										return A2(_mdgriffith$style_elements$Element_Internal_Model$mapMsg, fn, child);
									}),
								_p43._0.absolutelyPositioned)
						}));
			case 'Layout':
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p43._0,
						{
							attrs: A2(
								_elm_lang$core$List$map,
								_mdgriffith$style_elements$Element_Internal_Model$mapAttr(fn),
								_p43._0.attrs),
							children: A2(
								_mdgriffith$style_elements$Element_Internal_Model$mapChildren,
								_mdgriffith$style_elements$Element_Internal_Model$mapMsg(fn),
								_p43._0.children),
							absolutelyPositioned: A2(
								_elm_lang$core$Maybe$map,
								_elm_lang$core$List$map(
									function (child) {
										return A2(_mdgriffith$style_elements$Element_Internal_Model$mapMsg, fn, child);
									}),
								_p43._0.absolutelyPositioned)
						}));
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(
					A2(_elm_lang$html$Html$map, fn, _p43._0));
		}
	});
var _mdgriffith$style_elements$Element_Internal_Model$AllAxis = {ctor: 'AllAxis'};
var _mdgriffith$style_elements$Element_Internal_Model$YAxis = {ctor: 'YAxis'};
var _mdgriffith$style_elements$Element_Internal_Model$XAxis = {ctor: 'XAxis'};
var _mdgriffith$style_elements$Element_Internal_Model$Sub = {ctor: 'Sub'};
var _mdgriffith$style_elements$Element_Internal_Model$Super = {ctor: 'Super'};
var _mdgriffith$style_elements$Element_Internal_Model$Strike = {ctor: 'Strike'};
var _mdgriffith$style_elements$Element_Internal_Model$Underline = {ctor: 'Underline'};
var _mdgriffith$style_elements$Element_Internal_Model$Italic = {ctor: 'Italic'};
var _mdgriffith$style_elements$Element_Internal_Model$Bold = {ctor: 'Bold'};
var _mdgriffith$style_elements$Element_Internal_Model$NoDecoration = {ctor: 'NoDecoration'};
var _mdgriffith$style_elements$Element_Internal_Model$Nearby = function (a) {
	return {ctor: 'Nearby', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Absolute = function (a) {
	return {ctor: 'Absolute', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Model$Relative = {ctor: 'Relative'};
var _mdgriffith$style_elements$Element_Internal_Model$Screen = {ctor: 'Screen'};
var _mdgriffith$style_elements$Element_Internal_Model$BottomLeft = {ctor: 'BottomLeft'};
var _mdgriffith$style_elements$Element_Internal_Model$TopLeft = {ctor: 'TopLeft'};
var _mdgriffith$style_elements$Element_Internal_Model$Within = {ctor: 'Within'};
var _mdgriffith$style_elements$Element_Internal_Model$OnRight = {ctor: 'OnRight'};
var _mdgriffith$style_elements$Element_Internal_Model$OnLeft = {ctor: 'OnLeft'};
var _mdgriffith$style_elements$Element_Internal_Model$Above = {ctor: 'Above'};
var _mdgriffith$style_elements$Element_Internal_Model$Below = {ctor: 'Below'};
var _mdgriffith$style_elements$Element_Internal_Model$Justify = {ctor: 'Justify'};
var _mdgriffith$style_elements$Element_Internal_Model$Center = {ctor: 'Center'};
var _mdgriffith$style_elements$Element_Internal_Model$Right = {ctor: 'Right'};
var _mdgriffith$style_elements$Element_Internal_Model$Left = {ctor: 'Left'};
var _mdgriffith$style_elements$Element_Internal_Model$VerticalCenter = {ctor: 'VerticalCenter'};
var _mdgriffith$style_elements$Element_Internal_Model$Bottom = {ctor: 'Bottom'};
var _mdgriffith$style_elements$Element_Internal_Model$Top = {ctor: 'Top'};

var _mdgriffith$style_elements$Element_Internal_Modify$getChild = function (el) {
	var _p0 = el;
	switch (_p0.ctor) {
		case 'Empty':
			return _mdgriffith$style_elements$Element_Internal_Model$Empty;
		case 'Spacer':
			return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p0._0);
		case 'Raw':
			return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p0._0);
		case 'Layout':
			return el;
		case 'Element':
			return _p0._0.child;
		default:
			return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p0._0, _p0._1);
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$removeContent = function (el) {
	var _p1 = el;
	switch (_p1.ctor) {
		case 'Empty':
			return _mdgriffith$style_elements$Element_Internal_Model$Empty;
		case 'Spacer':
			return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p1._0);
		case 'Raw':
			return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p1._0);
		case 'Layout':
			return _mdgriffith$style_elements$Element_Internal_Model$Layout(
				_elm_lang$core$Native_Utils.update(
					_p1._0,
					{
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{ctor: '[]'}),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					}));
		case 'Element':
			return _mdgriffith$style_elements$Element_Internal_Model$Element(
				_elm_lang$core$Native_Utils.update(
					_p1._0,
					{child: _mdgriffith$style_elements$Element_Internal_Model$Empty, absolutelyPositioned: _elm_lang$core$Maybe$Nothing}));
		default:
			return _mdgriffith$style_elements$Element_Internal_Model$Empty;
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$removeStyle = function (el) {
	var _p2 = el;
	switch (_p2.ctor) {
		case 'Empty':
			return _mdgriffith$style_elements$Element_Internal_Model$Empty;
		case 'Spacer':
			return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p2._0);
		case 'Raw':
			return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p2._0);
		case 'Layout':
			return _mdgriffith$style_elements$Element_Internal_Model$Layout(
				_elm_lang$core$Native_Utils.update(
					_p2._0,
					{style: _elm_lang$core$Maybe$Nothing}));
		case 'Element':
			return _mdgriffith$style_elements$Element_Internal_Model$Element(
				_elm_lang$core$Native_Utils.update(
					_p2._0,
					{style: _elm_lang$core$Maybe$Nothing}));
		default:
			return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p2._0, _p2._1);
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$getStyle = function (el) {
	var _p3 = el;
	switch (_p3.ctor) {
		case 'Empty':
			return _elm_lang$core$Maybe$Nothing;
		case 'Raw':
			return _elm_lang$core$Maybe$Nothing;
		case 'Spacer':
			return _elm_lang$core$Maybe$Nothing;
		case 'Layout':
			return _p3._0.style;
		case 'Element':
			return _p3._0.style;
		default:
			return _elm_lang$core$Maybe$Nothing;
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$getAttrs = function (el) {
	var _p4 = el;
	switch (_p4.ctor) {
		case 'Empty':
			return {ctor: '[]'};
		case 'Spacer':
			return {ctor: '[]'};
		case 'Raw':
			return {ctor: '[]'};
		case 'Layout':
			return _p4._0.attrs;
		case 'Element':
			return _p4._0.attrs;
		default:
			return {ctor: '[]'};
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$addChild = F2(
	function (parent, el) {
		var _p5 = parent;
		switch (_p5.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: {ctor: '[]'},
						child: _mdgriffith$style_elements$Element_Internal_Model$Empty,
						absolutelyPositioned: _elm_lang$core$Maybe$Just(
							{
								ctor: '::',
								_0: el,
								_1: {ctor: '[]'}
							})
					});
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p5._0);
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p5._0);
			case 'Layout':
				var _p7 = _p5._0;
				var _p6 = _p5._0.absolutelyPositioned;
				if (_p6.ctor === 'Nothing') {
					return _mdgriffith$style_elements$Element_Internal_Model$Layout(
						_elm_lang$core$Native_Utils.update(
							_p7,
							{
								absolutelyPositioned: _elm_lang$core$Maybe$Just(
									{
										ctor: '::',
										_0: el,
										_1: {ctor: '[]'}
									})
							}));
				} else {
					return _mdgriffith$style_elements$Element_Internal_Model$Layout(
						_elm_lang$core$Native_Utils.update(
							_p7,
							{
								absolutelyPositioned: _elm_lang$core$Maybe$Just(
									{ctor: '::', _0: el, _1: _p6._0})
							}));
				}
			case 'Element':
				var _p9 = _p5._0;
				var _p8 = _p5._0.absolutelyPositioned;
				if (_p8.ctor === 'Nothing') {
					return _mdgriffith$style_elements$Element_Internal_Model$Element(
						_elm_lang$core$Native_Utils.update(
							_p9,
							{
								absolutelyPositioned: _elm_lang$core$Maybe$Just(
									{
										ctor: '::',
										_0: el,
										_1: {ctor: '[]'}
									})
							}));
				} else {
					return _mdgriffith$style_elements$Element_Internal_Model$Element(
						_elm_lang$core$Native_Utils.update(
							_p9,
							{
								absolutelyPositioned: _elm_lang$core$Maybe$Just(
									{ctor: '::', _0: el, _1: _p8._0})
							}));
				}
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: {ctor: '[]'},
						child: A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p5._0, _p5._1),
						absolutelyPositioned: _elm_lang$core$Maybe$Just(
							{
								ctor: '::',
								_0: el,
								_1: {ctor: '[]'}
							})
					});
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$removeAllAttrs = function (el) {
	var _p10 = el;
	switch (_p10.ctor) {
		case 'Empty':
			return _mdgriffith$style_elements$Element_Internal_Model$Empty;
		case 'Spacer':
			return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p10._0);
		case 'Raw':
			return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p10._0);
		case 'Layout':
			return _mdgriffith$style_elements$Element_Internal_Model$Layout(
				_elm_lang$core$Native_Utils.update(
					_p10._0,
					{
						attrs: {ctor: '[]'}
					}));
		case 'Element':
			return _mdgriffith$style_elements$Element_Internal_Model$Element(
				_elm_lang$core$Native_Utils.update(
					_p10._0,
					{
						attrs: {ctor: '[]'}
					}));
		default:
			return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p10._0, _p10._1);
	}
};
var _mdgriffith$style_elements$Element_Internal_Modify$removeAttrs = F2(
	function (props, el) {
		var match = function (p) {
			return !A2(_elm_lang$core$List$member, p, props);
		};
		var _p11 = el;
		switch (_p11.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p11._0);
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p11._0);
			case 'Layout':
				var _p12 = _p11._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p12,
						{
							attrs: A2(_elm_lang$core$List$filter, match, _p12.attrs)
						}));
			case 'Element':
				var _p13 = _p11._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p13,
						{
							attrs: A2(_elm_lang$core$List$filter, match, _p13.attrs)
						}));
			default:
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p11._0, _p11._1);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$setAttrs = F2(
	function (props, el) {
		var _p14 = el;
		switch (_p14.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p14._0);
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p14._0);
			case 'Layout':
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p14._0,
						{attrs: props}));
			case 'Element':
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p14._0,
						{attrs: props}));
			default:
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p14._0, _p14._1);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$addAttrList = F2(
	function (props, el) {
		var _p15 = el;
		switch (_p15.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p15._0);
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p15._0);
			case 'Layout':
				var _p16 = _p15._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p16,
						{
							attrs: A2(_elm_lang$core$Basics_ops['++'], props, _p16.attrs)
						}));
			case 'Element':
				var _p17 = _p15._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p17,
						{
							attrs: A2(_elm_lang$core$Basics_ops['++'], props, _p17.attrs)
						}));
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: props,
						child: A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p15._0, _p15._1),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$addAttr = F2(
	function (prop, el) {
		var _p18 = el;
		switch (_p18.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p18._0);
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p18._0);
			case 'Layout':
				var _p19 = _p18._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p19,
						{
							attrs: {ctor: '::', _0: prop, _1: _p19.attrs}
						}));
			case 'Element':
				var _p20 = _p18._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p20,
						{
							attrs: {ctor: '::', _0: prop, _1: _p20.attrs}
						}));
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: {
							ctor: '::',
							_0: prop,
							_1: {ctor: '[]'}
						},
						child: A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p18._0, _p18._1),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$addAttrToNonText = F2(
	function (prop, el) {
		var _p21 = el;
		switch (_p21.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p21._0);
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p21._0);
			case 'Layout':
				var _p22 = _p21._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p22,
						{
							attrs: {ctor: '::', _0: prop, _1: _p22.attrs}
						}));
			case 'Element':
				var _p23 = _p21._0;
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p23,
						{
							attrs: {ctor: '::', _0: prop, _1: _p23.attrs}
						}));
			default:
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p21._0, _p21._1);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Modify$setNode = F2(
	function (node, el) {
		var _p24 = el;
		switch (_p24.ctor) {
			case 'Empty':
				return _mdgriffith$style_elements$Element_Internal_Model$Empty;
			case 'Raw':
				return _mdgriffith$style_elements$Element_Internal_Model$Raw(_p24._0);
			case 'Spacer':
				return _mdgriffith$style_elements$Element_Internal_Model$Spacer(_p24._0);
			case 'Layout':
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p24._0,
						{node: node}));
			case 'Element':
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					_elm_lang$core$Native_Utils.update(
						_p24._0,
						{node: node}));
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: node,
						style: _elm_lang$core$Maybe$Nothing,
						attrs: {ctor: '[]'},
						child: A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p24._0, _p24._1),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
		}
	});

var _mdgriffith$style_elements$Style_Internal_Batchable$toList = function (batchables) {
	var flatten = function (batch) {
		var _p0 = batch;
		switch (_p0.ctor) {
			case 'One':
				return {
					ctor: '::',
					_0: _p0._0,
					_1: {ctor: '[]'}
				};
			case 'Many':
				return _p0._0;
			default:
				return _mdgriffith$style_elements$Style_Internal_Batchable$toList(_p0._0);
		}
	};
	return A2(_elm_lang$core$List$concatMap, flatten, batchables);
};
var _mdgriffith$style_elements$Style_Internal_Batchable$Batch = function (a) {
	return {ctor: 'Batch', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Batchable$batch = _mdgriffith$style_elements$Style_Internal_Batchable$Batch;
var _mdgriffith$style_elements$Style_Internal_Batchable$Many = function (a) {
	return {ctor: 'Many', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Batchable$many = _mdgriffith$style_elements$Style_Internal_Batchable$Many;
var _mdgriffith$style_elements$Style_Internal_Batchable$One = function (a) {
	return {ctor: 'One', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Batchable$one = _mdgriffith$style_elements$Style_Internal_Batchable$One;
var _mdgriffith$style_elements$Style_Internal_Batchable$map = F2(
	function (fn, batchable) {
		var _p1 = batchable;
		switch (_p1.ctor) {
			case 'One':
				return _mdgriffith$style_elements$Style_Internal_Batchable$One(
					fn(_p1._0));
			case 'Many':
				return _mdgriffith$style_elements$Style_Internal_Batchable$Many(
					A2(_elm_lang$core$List$map, fn, _p1._0));
			default:
				return _mdgriffith$style_elements$Style_Internal_Batchable$Batch(
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Style_Internal_Batchable$map(fn),
						_p1._0));
		}
	});

var _mdgriffith$style_elements$Style_Internal_Find$variation = F3(
	function ($class, variation, elements) {
		var find = function (el) {
			var _p0 = el;
			if (_p0.ctor === 'Variation') {
				return (_elm_lang$core$Native_Utils.eq($class, _p0._0) && _elm_lang$core$Native_Utils.eq(_p0._1, variation)) ? _elm_lang$core$Maybe$Just(_p0._2) : _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var found = _elm_lang$core$List$head(
			A2(_elm_lang$core$List$filterMap, find, elements));
		var _p1 = found;
		if (_p1.ctor === 'Nothing') {
			return A2(
				_elm_lang$core$Debug$log,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'No ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(variation),
						A2(
							_elm_lang$core$Basics_ops['++'],
							' variation  present for ',
							_elm_lang$core$Basics$toString($class)))),
				'');
		} else {
			return _p1._0;
		}
	});
var _mdgriffith$style_elements$Style_Internal_Find$style = F2(
	function ($class, elements) {
		var find = function (el) {
			var _p2 = el;
			if (_p2.ctor === 'Style') {
				return _elm_lang$core$Native_Utils.eq(_p2._0, $class) ? _elm_lang$core$Maybe$Just(_p2._1) : _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var found = _elm_lang$core$List$head(
			A2(_elm_lang$core$List$filterMap, find, elements));
		var _p3 = found;
		if (_p3.ctor === 'Nothing') {
			return A2(
				_elm_lang$core$Debug$log,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'No style present for ',
					_elm_lang$core$Basics$toString($class)),
				'');
		} else {
			return _p3._0;
		}
	});
var _mdgriffith$style_elements$Style_Internal_Find$Variation = F3(
	function (a, b, c) {
		return {ctor: 'Variation', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Style_Internal_Find$toVariation = F3(
	function ($var, newName, element) {
		var _p4 = element;
		if (_p4.ctor === 'Style') {
			return A3(_mdgriffith$style_elements$Style_Internal_Find$Variation, _p4._0, $var, newName);
		} else {
			return A3(_mdgriffith$style_elements$Style_Internal_Find$Variation, _p4._0, $var, newName);
		}
	});
var _mdgriffith$style_elements$Style_Internal_Find$Style = F2(
	function (a, b) {
		return {ctor: 'Style', _0: a, _1: b};
	});

var _mdgriffith$style_elements$Style_Internal_Selector$getFindable = function (find) {
	getFindable:
	while (true) {
		var _p0 = find;
		switch (_p0.ctor) {
			case 'Select':
				return {
					ctor: '::',
					_0: _p0._1,
					_1: {ctor: '[]'}
				};
			case 'SelectChild':
				var _v1 = _p0._0;
				find = _v1;
				continue getFindable;
			case 'Stack':
				return A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					A2(
						_elm_lang$core$Maybe$map,
						function (x) {
							return {
								ctor: '::',
								_0: x,
								_1: {ctor: '[]'}
							};
						},
						_elm_lang$core$List$head(
							_elm_lang$core$List$reverse(
								A2(_elm_lang$core$List$concatMap, _mdgriffith$style_elements$Style_Internal_Selector$getFindable, _p0._0)))));
			default:
				return {ctor: '[]'};
		}
	}
};
var _mdgriffith$style_elements$Style_Internal_Selector$render = F2(
	function (maybeGuard, selector) {
		var spacer = function (sel) {
			var _p1 = sel;
			if (_p1.ctor === 'Pseudo') {
				return '';
			} else {
				return ' ';
			}
		};
		var renderAndSpace = F2(
			function (i, sel) {
				return _elm_lang$core$Native_Utils.eq(i, 0) ? A2(_mdgriffith$style_elements$Style_Internal_Selector$render, maybeGuard, sel) : A2(
					_elm_lang$core$Basics_ops['++'],
					spacer(sel),
					A2(_mdgriffith$style_elements$Style_Internal_Selector$render, maybeGuard, sel));
			});
		var guard = function (str) {
			var _p2 = maybeGuard;
			if (_p2.ctor === 'Nothing') {
				return str;
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					str,
					A2(_elm_lang$core$Basics_ops['++'], '--', _p2._0));
			}
		};
		var _p3 = selector;
		switch (_p3.ctor) {
			case 'Select':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					guard(_p3._0));
			case 'SelectChild':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'> ',
					A2(_mdgriffith$style_elements$Style_Internal_Selector$render, maybeGuard, _p3._0));
			case 'Free':
				return _p3._0;
			case 'Pseudo':
				return _p3._0;
			default:
				return _elm_lang$core$String$concat(
					A2(_elm_lang$core$List$indexedMap, renderAndSpace, _p3._0));
		}
	});
var _mdgriffith$style_elements$Style_Internal_Selector$topName = function (selector) {
	topName:
	while (true) {
		var _p4 = selector;
		switch (_p4.ctor) {
			case 'Select':
				return _p4._0;
			case 'SelectChild':
				var _v6 = _p4._0;
				selector = _v6;
				continue topName;
			case 'Stack':
				return A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					_elm_lang$core$List$head(
						_elm_lang$core$List$reverse(
							A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Selector$topName, _p4._0))));
			default:
				return '';
		}
	}
};
var _mdgriffith$style_elements$Style_Internal_Selector$uncapitalize = function (str) {
	var tail = A2(_elm_lang$core$String$dropLeft, 1, str);
	var head = _elm_lang$core$String$toLower(
		A2(_elm_lang$core$String$left, 1, str));
	return A2(_elm_lang$core$Basics_ops['++'], head, tail);
};
var _mdgriffith$style_elements$Style_Internal_Selector$formatName = function (x) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[\\s+]'),
		function (_p5) {
			return '-';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('[A-Z0-9]+'),
			function (_p6) {
				var _p7 = _p6;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_elm_lang$core$String$toLower(_p7.match));
			},
			A4(
				_elm_lang$core$Regex$replace,
				_elm_lang$core$Regex$All,
				_elm_lang$core$Regex$regex('[^a-zA-Z0-9_-]'),
				function (_p8) {
					return '';
				},
				_mdgriffith$style_elements$Style_Internal_Selector$uncapitalize(
					_elm_lang$core$Basics$toString(x)))));
};
var _mdgriffith$style_elements$Style_Internal_Selector$Stack = function (a) {
	return {ctor: 'Stack', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Selector$Free = function (a) {
	return {ctor: 'Free', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Selector$free = function (str) {
	return _mdgriffith$style_elements$Style_Internal_Selector$Free(str);
};
var _mdgriffith$style_elements$Style_Internal_Selector$SelectChild = function (a) {
	return {ctor: 'SelectChild', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Selector$child = F2(
	function (parent, selector) {
		return _mdgriffith$style_elements$Style_Internal_Selector$Stack(
			{
				ctor: '::',
				_0: parent,
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Style_Internal_Selector$SelectChild(selector),
					_1: {ctor: '[]'}
				}
			});
	});
var _mdgriffith$style_elements$Style_Internal_Selector$Pseudo = function (a) {
	return {ctor: 'Pseudo', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Selector$Select = F2(
	function (a, b) {
		return {ctor: 'Select', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Selector$guard = F2(
	function (guard, selector) {
		var addGuard = function (str) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				str,
				A2(_elm_lang$core$Basics_ops['++'], '__', guard));
		};
		var onFindable = function (findable) {
			var _p9 = findable;
			if (_p9.ctor === 'Style') {
				return A2(
					_mdgriffith$style_elements$Style_Internal_Find$Style,
					_p9._0,
					addGuard(_p9._1));
			} else {
				return A3(
					_mdgriffith$style_elements$Style_Internal_Find$Variation,
					_p9._0,
					_p9._1,
					addGuard(_p9._2));
			}
		};
		var onSelector = function (sel) {
			var _p10 = sel;
			switch (_p10.ctor) {
				case 'Select':
					return A2(
						_mdgriffith$style_elements$Style_Internal_Selector$Select,
						addGuard(_p10._0),
						onFindable(_p10._1));
				case 'SelectChild':
					return _mdgriffith$style_elements$Style_Internal_Selector$SelectChild(
						onSelector(_p10._0));
				case 'Stack':
					return _mdgriffith$style_elements$Style_Internal_Selector$Stack(
						A2(_elm_lang$core$List$map, onSelector, _p10._0));
				default:
					return _p10;
			}
		};
		return onSelector(selector);
	});
var _mdgriffith$style_elements$Style_Internal_Selector$select = function ($class) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Selector$Select,
		_mdgriffith$style_elements$Style_Internal_Selector$formatName($class),
		A2(
			_mdgriffith$style_elements$Style_Internal_Find$Style,
			$class,
			_mdgriffith$style_elements$Style_Internal_Selector$formatName($class)));
};
var _mdgriffith$style_elements$Style_Internal_Selector$variant = F2(
	function (sel, $var) {
		var _p11 = sel;
		switch (_p11.ctor) {
			case 'Pseudo':
				return _mdgriffith$style_elements$Style_Internal_Selector$Pseudo(_p11._0);
			case 'Select':
				var _p12 = _p11._0;
				return A2(
					_mdgriffith$style_elements$Style_Internal_Selector$Select,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p12,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'-',
							_mdgriffith$style_elements$Style_Internal_Selector$formatName($var))),
					A3(
						_mdgriffith$style_elements$Style_Internal_Find$toVariation,
						$var,
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p12,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'-',
								_mdgriffith$style_elements$Style_Internal_Selector$formatName($var))),
						_p11._1));
			case 'SelectChild':
				return _mdgriffith$style_elements$Style_Internal_Selector$SelectChild(
					A2(_mdgriffith$style_elements$Style_Internal_Selector$variant, _p11._0, $var));
			case 'Free':
				return _mdgriffith$style_elements$Style_Internal_Selector$Free(_p11._0);
			default:
				var _p14 = _p11._0;
				var init = _elm_lang$core$List$reverse(
					A2(
						_elm_lang$core$List$drop,
						1,
						_elm_lang$core$List$reverse(_p14)));
				var lastElem = _elm_lang$core$List$head(
					_elm_lang$core$List$reverse(_p14));
				var _p13 = lastElem;
				if (_p13.ctor === 'Nothing') {
					return _mdgriffith$style_elements$Style_Internal_Selector$Stack(_p14);
				} else {
					return _mdgriffith$style_elements$Style_Internal_Selector$Stack(
						A2(
							_elm_lang$core$Basics_ops['++'],
							init,
							{
								ctor: '::',
								_0: A2(_mdgriffith$style_elements$Style_Internal_Selector$variant, _p13._0, $var),
								_1: {ctor: '[]'}
							}));
				}
		}
	});
var _mdgriffith$style_elements$Style_Internal_Selector$pseudo = F2(
	function (psu, sel) {
		var _p15 = sel;
		switch (_p15.ctor) {
			case 'Pseudo':
				return _mdgriffith$style_elements$Style_Internal_Selector$Pseudo(
					A2(_elm_lang$core$Basics_ops['++'], _p15._0, psu));
			case 'Select':
				return _mdgriffith$style_elements$Style_Internal_Selector$Stack(
					{
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Style_Internal_Selector$Select, _p15._0, _p15._1),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Style_Internal_Selector$Pseudo(psu),
							_1: {ctor: '[]'}
						}
					});
			case 'SelectChild':
				return _mdgriffith$style_elements$Style_Internal_Selector$SelectChild(
					A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, psu, _p15._0));
			case 'Free':
				return _mdgriffith$style_elements$Style_Internal_Selector$Free(_p15._0);
			default:
				var _p17 = _p15._0;
				var init = _elm_lang$core$List$reverse(
					A2(
						_elm_lang$core$List$drop,
						1,
						_elm_lang$core$List$reverse(_p17)));
				var lastElem = _elm_lang$core$List$head(
					_elm_lang$core$List$reverse(_p17));
				var _p16 = lastElem;
				if (_p16.ctor === 'Nothing') {
					return _mdgriffith$style_elements$Style_Internal_Selector$Stack(_p17);
				} else {
					return _mdgriffith$style_elements$Style_Internal_Selector$Stack(
						A2(
							_elm_lang$core$Basics_ops['++'],
							init,
							{
								ctor: '::',
								_0: A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, psu, _p16._0),
								_1: {ctor: '[]'}
							}));
				}
		}
	});

var _mdgriffith$style_elements$Style_Internal_Render_Css$prop = F2(
	function (i, _p0) {
		var _p1 = _p0;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			A2(_elm_lang$core$String$repeat, i, ' '),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p1._0,
				A2(
					_elm_lang$core$Basics_ops['++'],
					': ',
					A2(_elm_lang$core$Basics_ops['++'], _p1._1, ';'))));
	});
var _mdgriffith$style_elements$Style_Internal_Render_Css$brace = F2(
	function (i, str) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			' {\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				str,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\n',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_elm_lang$core$String$repeat, i, ' '),
						'}'))));
	});

var _mdgriffith$style_elements$Style_Internal_Intermediate$asFindable = function (intermediate) {
	var findableProp = function (prop) {
		var _p0 = prop;
		switch (_p0.ctor) {
			case 'SubClass':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$asFindable(_p0._0);
			case 'PropsAndSub':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$asFindable(_p0._1);
			default:
				return {ctor: '[]'};
		}
	};
	var _p1 = intermediate;
	if (_p1.ctor === 'Class') {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_mdgriffith$style_elements$Style_Internal_Selector$getFindable(_p1._0.selector),
			A2(_elm_lang$core$List$concatMap, findableProp, _p1._0.props));
	} else {
		return {ctor: '[]'};
	}
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$render = function (renderable) {
	var _p2 = renderable;
	switch (_p2.ctor) {
		case 'RenderableClass':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_p2._0,
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_mdgriffith$style_elements$Style_Internal_Render_Css$brace,
						0,
						A2(
							_elm_lang$core$String$join,
							'\n',
							A2(
								_elm_lang$core$List$map,
								_mdgriffith$style_elements$Style_Internal_Render_Css$prop(2),
								_p2._1))),
					'\n'));
		case 'RenderableMedia':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_p2._0,
				A2(
					_mdgriffith$style_elements$Style_Internal_Render_Css$brace,
					0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'  ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p2._1,
							A2(
								_mdgriffith$style_elements$Style_Internal_Render_Css$brace,
								2,
								A2(
									_elm_lang$core$String$join,
									'\n',
									A2(
										_elm_lang$core$List$map,
										_mdgriffith$style_elements$Style_Internal_Render_Css$prop(4),
										_p2._2)))))));
		default:
			return _p2._0;
	}
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$hash = function (value) {
	return _elm_lang$core$Basics$toString(
		A2(_Skinney$murmur3$Murmur3$hashString, 8675309, value));
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$calculateGuard = function ($class) {
	var propToString = function (_p3) {
		var _p4 = _p3;
		return A2(_elm_lang$core$Basics_ops['++'], _p4._0, _p4._1);
	};
	var asString = function (prop) {
		var _p5 = prop;
		switch (_p5.ctor) {
			case 'Props':
				return _elm_lang$core$String$concat(
					A2(_elm_lang$core$List$map, propToString, _p5._0));
			case 'SubClass':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$calculateGuard(_p5._0);
			case 'PropsAndSub':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$String$concat(
						A2(_elm_lang$core$List$map, propToString, _p5._0)),
					_mdgriffith$style_elements$Style_Internal_Intermediate$calculateGuard(_p5._1));
			default:
				return '';
		}
	};
	var _p6 = $class;
	switch (_p6.ctor) {
		case 'Class':
			return _elm_lang$core$String$concat(
				A2(_elm_lang$core$List$map, asString, _p6._0.props));
		case 'Media':
			return _elm_lang$core$String$concat(
				A2(_elm_lang$core$List$map, asString, _p6._0.props));
		default:
			return '';
	}
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$Free = function (a) {
	return {ctor: 'Free', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$Media = function (a) {
	return {ctor: 'Media', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$Class = function (a) {
	return {ctor: 'Class', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$Animation = {ctor: 'Animation'};
var _mdgriffith$style_elements$Style_Internal_Intermediate$PropsAndSub = F2(
	function (a, b) {
		return {ctor: 'PropsAndSub', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass = function (a) {
	return {ctor: 'SubClass', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$applyGuard = F2(
	function (guard, $class) {
		var guardProp = function (prop) {
			var _p7 = prop;
			if (_p7.ctor === 'SubClass') {
				return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
					A2(_mdgriffith$style_elements$Style_Internal_Intermediate$applyGuard, guard, _p7._0));
			} else {
				return _p7;
			}
		};
		var _p8 = $class;
		switch (_p8.ctor) {
			case 'Class':
				var _p9 = _p8._0;
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Class(
					{
						selector: A2(_mdgriffith$style_elements$Style_Internal_Selector$guard, guard, _p9.selector),
						props: A2(_elm_lang$core$List$map, guardProp, _p9.props)
					});
			case 'Media':
				var _p10 = _p8._0;
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Media(
					{
						query: _p10.query,
						selector: A2(_mdgriffith$style_elements$Style_Internal_Selector$guard, guard, _p10.selector),
						props: A2(_elm_lang$core$List$map, guardProp, _p10.props)
					});
			default:
				return _p8;
		}
	});
var _mdgriffith$style_elements$Style_Internal_Intermediate$guard = function ($class) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Intermediate$applyGuard,
		_mdgriffith$style_elements$Style_Internal_Intermediate$hash(
			_mdgriffith$style_elements$Style_Internal_Intermediate$calculateGuard($class)),
		$class);
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$asMediaQuery = F2(
	function (query, prop) {
		var classAsMediaQuery = function (cls) {
			var _p11 = cls;
			if (_p11.ctor === 'Class') {
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Media(
					{query: query, selector: _p11._0.selector, props: _p11._0.props});
			} else {
				return _p11;
			}
		};
		var _p12 = prop;
		switch (_p12.ctor) {
			case 'SubClass':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
					classAsMediaQuery(_p12._0));
			case 'PropsAndSub':
				return A2(
					_mdgriffith$style_elements$Style_Internal_Intermediate$PropsAndSub,
					_p12._0,
					classAsMediaQuery(_p12._1));
			default:
				return _p12;
		}
	});
var _mdgriffith$style_elements$Style_Internal_Intermediate$Props = function (a) {
	return {ctor: 'Props', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$props = _mdgriffith$style_elements$Style_Internal_Intermediate$Props;
var _mdgriffith$style_elements$Style_Internal_Intermediate$RenderableFree = function (a) {
	return {ctor: 'RenderableFree', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$RenderableMedia = F3(
	function (a, b, c) {
		return {ctor: 'RenderableMedia', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Style_Internal_Intermediate$RenderableClass = F2(
	function (a, b) {
		return {ctor: 'RenderableClass', _0: a, _1: b};
	});
var _mdgriffith$style_elements$Style_Internal_Intermediate$makeRenderable = function (cls) {
	var renderableProps = F2(
		function (prop, _p13) {
			var _p14 = _p13;
			var _p17 = _p14._1;
			var _p16 = _p14._0;
			var _p15 = prop;
			switch (_p15.ctor) {
				case 'Props':
					return {
						ctor: '_Tuple2',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p16, _p15._0),
						_1: _p17
					};
				case 'SubClass':
					return {
						ctor: '_Tuple2',
						_0: _p16,
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							_p17,
							_mdgriffith$style_elements$Style_Internal_Intermediate$makeRenderable(_p15._0))
					};
				case 'PropsAndSub':
					return {
						ctor: '_Tuple2',
						_0: A2(_elm_lang$core$Basics_ops['++'], _p16, _p15._0),
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							_p17,
							_mdgriffith$style_elements$Style_Internal_Intermediate$makeRenderable(_p15._1))
					};
				default:
					return {ctor: '_Tuple2', _0: _p16, _1: _p17};
			}
		});
	var _p18 = cls;
	switch (_p18.ctor) {
		case 'Class':
			var _p19 = A3(
				_elm_lang$core$List$foldl,
				renderableProps,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: {ctor: '[]'}
				},
				_p18._0.props);
			var rendered = _p19._0;
			var subelements = _p19._1;
			return {
				ctor: '::',
				_0: A2(
					_mdgriffith$style_elements$Style_Internal_Intermediate$RenderableClass,
					A2(_mdgriffith$style_elements$Style_Internal_Selector$render, _elm_lang$core$Maybe$Nothing, _p18._0.selector),
					rendered),
				_1: subelements
			};
		case 'Media':
			var _p20 = A3(
				_elm_lang$core$List$foldl,
				renderableProps,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: {ctor: '[]'}
				},
				_p18._0.props);
			var rendered = _p20._0;
			var subelements = _p20._1;
			return {
				ctor: '::',
				_0: A3(
					_mdgriffith$style_elements$Style_Internal_Intermediate$RenderableMedia,
					_p18._0.query,
					A2(_mdgriffith$style_elements$Style_Internal_Selector$render, _elm_lang$core$Maybe$Nothing, _p18._0.selector),
					rendered),
				_1: subelements
			};
		default:
			return {
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Internal_Intermediate$RenderableFree(_p18._0),
				_1: {ctor: '[]'}
			};
	}
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$raw = function (cls) {
	var topName = function () {
		var _p21 = cls;
		switch (_p21.ctor) {
			case 'Class':
				return _mdgriffith$style_elements$Style_Internal_Selector$topName(_p21._0.selector);
			case 'Media':
				return _mdgriffith$style_elements$Style_Internal_Selector$topName(_p21._0.selector);
			default:
				return '';
		}
	}();
	return {
		ctor: '_Tuple2',
		_0: topName,
		_1: A2(
			_elm_lang$core$String$join,
			'\n',
			A2(
				_elm_lang$core$List$map,
				_mdgriffith$style_elements$Style_Internal_Intermediate$render,
				_mdgriffith$style_elements$Style_Internal_Intermediate$makeRenderable(cls)))
	};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$Rendered = function (a) {
	return {ctor: 'Rendered', _0: a};
};
var _mdgriffith$style_elements$Style_Internal_Intermediate$finalize = function (intermediates) {
	var finalizeCss = function (cls) {
		return A2(
			_elm_lang$core$String$join,
			'\n',
			A2(
				_elm_lang$core$List$map,
				_mdgriffith$style_elements$Style_Internal_Intermediate$render,
				_mdgriffith$style_elements$Style_Internal_Intermediate$makeRenderable(cls)));
	};
	return _mdgriffith$style_elements$Style_Internal_Intermediate$Rendered(
		{
			css: A2(
				_elm_lang$core$String$join,
				'\n',
				A2(_elm_lang$core$List$map, finalizeCss, intermediates)),
			findable: A2(_elm_lang$core$List$concatMap, _mdgriffith$style_elements$Style_Internal_Intermediate$asFindable, intermediates)
		});
};

var _mdgriffith$style_elements$Style_Internal_Render_Value$typeface = function (families) {
	return A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			function (fam) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'\"',
					A2(_elm_lang$core$Basics_ops['++'], fam, '\"'));
			},
			families));
};
var _mdgriffith$style_elements$Style_Internal_Render_Value$gridPosition = function (_p0) {
	var _p1 = _p0;
	var _p6 = _p1._0.width;
	var _p5 = _p1._0.height;
	var _p2 = _p1._0.start;
	var x = _p2._0;
	var y = _p2._1;
	var _p3 = {ctor: '_Tuple2', _0: y + 1, _1: (y + 1) + _p5};
	var rowStart = _p3._0;
	var rowEnd = _p3._1;
	var _p4 = {ctor: '_Tuple2', _0: x + 1, _1: (x + 1) + _p6};
	var colStart = _p4._0;
	var colEnd = _p4._1;
	return (_elm_lang$core$Native_Utils.eq(_p6, 0) || _elm_lang$core$Native_Utils.eq(_p5, 0)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
		A2(
			_elm_lang$core$String$join,
			' / ',
			{
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(rowStart),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(colStart),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(rowEnd),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(colEnd),
							_1: {ctor: '[]'}
						}
					}
				}
			}));
};
var _mdgriffith$style_elements$Style_Internal_Render_Value$color = function (color) {
	var _p7 = _elm_lang$core$Color$toRgb(color);
	var red = _p7.red;
	var green = _p7.green;
	var blue = _p7.blue;
	var alpha = _p7.alpha;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		A2(
			_elm_lang$core$Basics_ops['++'],
			'rgba(',
			_elm_lang$core$Basics$toString(red)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$Basics_ops['++'],
				',',
				_elm_lang$core$Basics$toString(green)),
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Basics_ops['++'],
					',',
					_elm_lang$core$Basics$toString(blue)),
				A2(
					_elm_lang$core$Basics_ops['++'],
					',',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(alpha),
						')')))));
};
var _mdgriffith$style_elements$Style_Internal_Render_Value$shadow = function (_p8) {
	var _p9 = _p8;
	var _p10 = _p9._0;
	return A2(
		_elm_lang$core$String$join,
		' ',
		A2(
			_elm_lang$core$List$filterMap,
			_elm_lang$core$Basics$identity,
			{
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.eq(_p10.kind, 'inset') ? _elm_lang$core$Maybe$Just('inset') : _elm_lang$core$Maybe$Nothing,
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Maybe$Just(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								_elm_lang$core$Tuple$first(_p10.offset)),
							'px')),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Maybe$Just(
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(
									_elm_lang$core$Tuple$second(_p10.offset)),
								'px')),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p10.blur),
									'px')),
							_1: {
								ctor: '::',
								_0: (_elm_lang$core$Native_Utils.eq(_p10.kind, 'text') || _elm_lang$core$Native_Utils.eq(_p10.kind, 'drop')) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p10.size),
										'px')),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Maybe$Just(
										_mdgriffith$style_elements$Style_Internal_Render_Value$color(_p10.color)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}));
};
var _mdgriffith$style_elements$Style_Internal_Render_Value$parentAdjustedLength = F2(
	function (len, adjustment) {
		var _p11 = len;
		switch (_p11.ctor) {
			case 'Px':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p11._0),
					'px');
			case 'Percent':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'calc(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p11._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'% - ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(adjustment),
								'px)'))));
			case 'Auto':
				return 'auto';
			case 'Fill':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'calc(100% - ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(adjustment),
						'px)'));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'calc(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p11._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'% + ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p11._1),
								'px)'))));
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render_Value$length = function (l) {
	var _p12 = l;
	switch (_p12.ctor) {
		case 'Px':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p12._0),
				'px');
		case 'Percent':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p12._0),
				'%');
		case 'Auto':
			return 'auto';
		case 'Fill':
			return '100%';
		default:
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'calc(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p12._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'% + ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p12._1),
							'px)'))));
	}
};
var _mdgriffith$style_elements$Style_Internal_Render_Value$box = function (_p13) {
	var _p14 = _p13;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(_p14._0),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'px ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p14._1),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'px ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p14._2),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'px ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p14._3),
								'px')))))));
};

var _mdgriffith$style_elements$Style_Internal_Render_Property$flexbox = F2(
	function (dir, el) {
		var _p0 = el;
		switch (_p0.ctor) {
			case 'Wrap':
				return _p0._0 ? {ctor: '_Tuple2', _0: 'flex-wrap', _1: 'wrap'} : {ctor: '_Tuple2', _0: 'flex-wrap', _1: 'nowrap'};
			case 'Horz':
				var _p6 = _p0._0;
				var _p1 = dir;
				switch (_p1.ctor) {
					case 'GoRight':
						var _p2 = _p6;
						switch (_p2.ctor) {
							case 'Other':
								if (_p2._0.ctor === 'Left') {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
							default:
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
						}
					case 'GoLeft':
						var _p3 = _p6;
						switch (_p3.ctor) {
							case 'Other':
								if (_p3._0.ctor === 'Left') {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-end'};
								} else {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-start'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
							default:
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
						}
					case 'Down':
						var _p4 = _p6;
						switch (_p4.ctor) {
							case 'Other':
								if (_p4._0.ctor === 'Left') {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
					default:
						var _p5 = _p6;
						switch (_p5.ctor) {
							case 'Other':
								if (_p5._0.ctor === 'Left') {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
				}
			default:
				var _p12 = _p0._0;
				var _p7 = dir;
				switch (_p7.ctor) {
					case 'GoRight':
						var _p8 = _p12;
						switch (_p8.ctor) {
							case 'Other':
								if (_p8._0.ctor === 'Top') {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
					case 'GoLeft':
						var _p9 = _p12;
						switch (_p9.ctor) {
							case 'Other':
								if (_p9._0.ctor === 'Top') {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'align-items', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
					case 'Down':
						var _p10 = _p12;
						switch (_p10.ctor) {
							case 'Other':
								if (_p10._0.ctor === 'Top') {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-start'};
								} else {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-end'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
					default:
						var _p11 = _p12;
						switch (_p11.ctor) {
							case 'Other':
								if (_p11._0.ctor === 'Top') {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-end'};
								} else {
									return {ctor: '_Tuple2', _0: 'justify-content', _1: 'flex-start'};
								}
							case 'Center':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'center'};
							case 'Justify':
								return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
							default:
								return {ctor: '_Tuple2', _0: 'align-items', _1: 'Justify'};
						}
				}
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render_Property$transition = function (_p13) {
	var _p14 = _p13;
	var formatTrans = function (prop) {
		return A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: prop,
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p14._0.duration * _elm_lang$core$Time$millisecond),
						'ms'),
					_1: {
						ctor: '::',
						_0: _p14._0.easing,
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p14._0.delay * _elm_lang$core$Time$millisecond),
								'ms'),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	};
	return A2(
		_elm_lang$core$String$join,
		', ',
		A2(_elm_lang$core$List$map, formatTrans, _p14._0.props));
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$direction = function (dir) {
	var _p15 = dir;
	switch (_p15.ctor) {
		case 'GoRight':
			return {ctor: '_Tuple2', _0: 'flex-direction', _1: 'row'};
		case 'GoLeft':
			return {ctor: '_Tuple2', _0: 'flex-direction', _1: 'row-reverse'};
		case 'Down':
			return {ctor: '_Tuple2', _0: 'flex-direction', _1: 'column'};
		default:
			return {ctor: '_Tuple2', _0: 'flex-direction', _1: 'column-reverse'};
	}
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$gridAlignment = function (align) {
	var _p16 = align;
	switch (_p16.ctor) {
		case 'GridGap':
			return {
				ctor: '_Tuple2',
				_0: 'grid-gap',
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p16._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'px ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p16._1),
							'px')))
			};
		case 'GridH':
			var _p17 = _p16._0;
			switch (_p17.ctor) {
				case 'Other':
					if (_p17._0.ctor === 'Left') {
						return {ctor: '_Tuple2', _0: 'justify-content', _1: 'start'};
					} else {
						return {ctor: '_Tuple2', _0: 'justify-content', _1: 'end'};
					}
				case 'Center':
					return {ctor: '_Tuple2', _0: 'justify-content', _1: 'center'};
				case 'Justify':
					return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
				default:
					return {ctor: '_Tuple2', _0: 'justify-content', _1: 'space-between'};
			}
		default:
			var _p18 = _p16._0;
			switch (_p18.ctor) {
				case 'Other':
					if (_p18._0.ctor === 'Top') {
						return {ctor: '_Tuple2', _0: 'align-content', _1: 'start'};
					} else {
						return {ctor: '_Tuple2', _0: 'align-content', _1: 'end'};
					}
				case 'Center':
					return {ctor: '_Tuple2', _0: 'align-content', _1: 'center'};
				case 'Justify':
					return {ctor: '_Tuple2', _0: 'align-content', _1: 'space-between'};
				default:
					return {ctor: '_Tuple2', _0: 'align-content', _1: 'space-between'};
			}
	}
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$layout = F2(
	function (inline, lay) {
		var _p19 = lay;
		switch (_p19.ctor) {
			case 'TextLayout':
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'display',
						_1: inline ? 'inline-block' : 'block'
					},
					_1: {ctor: '[]'}
				};
			case 'FlexLayout':
				var _p20 = _p19._0;
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'display',
						_1: inline ? 'inline-flex' : 'flex'
					},
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Internal_Render_Property$direction(_p20),
						_1: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Render_Property$flexbox(_p20),
							_p19._1)
					}
				};
			default:
				if (_p19._0.ctor === 'NamedGridTemplate') {
					var _p31 = _p19._0._0.rows;
					var _p30 = _p19._0._0.columns;
					var areaSpan = function (_p21) {
						var _p22 = _p21;
						var name = function () {
							var _p23 = _p22._1;
							if (_p23.ctor === 'Nothing') {
								return '.';
							} else {
								return _p23._0;
							}
						}();
						var _p24 = _p22._0;
						if (_p24.ctor === 'SpanAll') {
							return A2(
								_elm_lang$core$List$repeat,
								_elm_lang$core$List$length(_p30),
								name);
						} else {
							return A2(_elm_lang$core$List$repeat, _p24._0, name);
						}
					};
					var areasInRow = function (areas) {
						var areaStrs = A2(_elm_lang$core$List$concatMap, areaSpan, areas);
						var quote = function (str) {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'\"',
								A2(_elm_lang$core$Basics_ops['++'], str, '\"'));
						};
						if (_elm_lang$core$Native_Utils.cmp(
							_elm_lang$core$List$length(areaStrs),
							_elm_lang$core$List$length(_p30)) > 0) {
							var _p25 = A2(
								_elm_lang$core$Basics_ops['++'],
								A2(_elm_lang$core$Debug$log, 'style-elements', 'Named grid row ('),
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(areas),
									') is too big for this grid!'));
							return quote(
								A2(_elm_lang$core$String$join, ' ', areaStrs));
						} else {
							if (_elm_lang$core$Native_Utils.cmp(
								_elm_lang$core$List$length(areaStrs),
								_elm_lang$core$List$length(_p30)) < 0) {
								var _p26 = A2(
									_elm_lang$core$Basics_ops['++'],
									A2(_elm_lang$core$Debug$log, 'style-elements', 'Named grid row ('),
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(areas),
										') doesn\'t have enough names to fit this grid!'));
								return quote(
									A2(_elm_lang$core$String$join, ' ', areaStrs));
							} else {
								return quote(
									A2(_elm_lang$core$String$join, ' ', areaStrs));
							}
						}
					};
					var alignment = A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Property$gridAlignment, _p19._1);
					var renderLen = function (len) {
						var _p27 = len;
						switch (_p27.ctor) {
							case 'Px':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p27._0),
									'px');
							case 'Percent':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p27._0),
									'%');
							case 'Auto':
								return 'auto';
							case 'Fill':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p27._0),
									'fr');
							default:
								return A2(
									_elm_lang$core$Basics_ops['++'],
									'calc(',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p27._0),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'% + ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p27._1),
												'px)'))));
						}
					};
					var grid = inline ? {ctor: '_Tuple2', _0: 'display', _1: 'inline-grid'} : {ctor: '_Tuple2', _0: 'display', _1: 'grid'};
					return {
						ctor: '::',
						_0: grid,
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'grid-template-rows',
								_1: A2(
									_elm_lang$core$String$join,
									' ',
									A2(
										_elm_lang$core$List$map,
										function (_p28) {
											return renderLen(
												_elm_lang$core$Tuple$first(_p28));
										},
										_p31))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'grid-template-columns',
									_1: A2(
										_elm_lang$core$String$join,
										' ',
										A2(_elm_lang$core$List$map, renderLen, _p30))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'grid-template-areas',
										_1: A2(
											_elm_lang$core$String$join,
											'\n',
											A2(
												_elm_lang$core$List$map,
												function (_p29) {
													return areasInRow(
														_elm_lang$core$Tuple$second(_p29));
												},
												_p31))
									},
									_1: alignment
								}
							}
						}
					};
				} else {
					var alignment = A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Property$gridAlignment, _p19._1);
					var renderLen = function (len) {
						var _p32 = len;
						switch (_p32.ctor) {
							case 'Px':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p32._0),
									'px');
							case 'Percent':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p32._0),
									'%');
							case 'Auto':
								return 'auto';
							case 'Fill':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p32._0),
									'fr');
							default:
								return A2(
									_elm_lang$core$Basics_ops['++'],
									'calc(',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p32._0),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'% + ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p32._1),
												'px)'))));
						}
					};
					var grid = inline ? {ctor: '_Tuple2', _0: 'display', _1: 'inline-grid'} : {ctor: '_Tuple2', _0: 'display', _1: 'grid'};
					return {
						ctor: '::',
						_0: grid,
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'grid-template-rows',
								_1: A2(
									_elm_lang$core$String$join,
									' ',
									A2(_elm_lang$core$List$map, renderLen, _p19._0._0.rows))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'grid-template-columns',
									_1: A2(
										_elm_lang$core$String$join,
										' ',
										A2(_elm_lang$core$List$map, renderLen, _p19._0._0.columns))
								},
								_1: alignment
							}
						}
					};
				}
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render_Property$background = function (prop) {
	var renderStep = function (step) {
		var _p33 = step;
		switch (_p33.ctor) {
			case 'ColorStep':
				return _mdgriffith$style_elements$Style_Internal_Render_Value$color(_p33._0);
			case 'PercentStep':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_mdgriffith$style_elements$Style_Internal_Render_Value$color(_p33._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p33._1),
							'%')));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_mdgriffith$style_elements$Style_Internal_Render_Value$color(_p33._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p33._1),
							'px')));
		}
	};
	var directionName = function (dir) {
		var _p34 = dir;
		switch (_p34.ctor) {
			case 'ToUp':
				return 'to top';
			case 'ToDown':
				return 'to bottomn';
			case 'ToRight':
				return 'to right';
			case 'ToTopRight':
				return 'to top right';
			case 'ToBottomRight':
				return 'to bottom right';
			case 'ToLeft':
				return 'to left';
			case 'ToTopLeft':
				return 'to top left';
			case 'ToBottomLeft':
				return 'to bottom left';
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p34._0),
					'rad');
		}
	};
	var _p35 = prop;
	switch (_p35.ctor) {
		case 'BackgroundElement':
			return {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: _p35._0, _1: _p35._1},
				_1: {ctor: '[]'}
			};
		case 'BackgroundImage':
			var _p37 = _p35._0.position;
			return {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'background-image', _1: _p35._0.src},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'background-repeat',
						_1: function () {
							var _p36 = _p35._0.repeat;
							switch (_p36.ctor) {
								case 'RepeatX':
									return 'repeat-x';
								case 'RepeatY':
									return 'repeat-y';
								case 'Repeat':
									return 'repeat';
								case 'Space':
									return 'space';
								case 'Round':
									return 'round';
								default:
									return 'no-repeat';
							}
						}()
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'background-position',
							_1: A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(
									_elm_lang$core$Tuple$first(_p37)),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'px ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(
											_elm_lang$core$Tuple$second(_p37)),
										'px')))
						},
						_1: {ctor: '[]'}
					}
				}
			};
		default:
			return {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'background-image',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'linear-gradient(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$String$join,
								', ',
								{
									ctor: '::',
									_0: directionName(_p35._0),
									_1: A2(_elm_lang$core$List$map, renderStep, _p35._1)
								}),
							')'))
				},
				_1: {ctor: '[]'}
			};
	}
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$position = function (posEls) {
	var renderPos = function (pos) {
		var _p38 = pos;
		switch (_p38.ctor) {
			case 'RelativeTo':
				switch (_p38._0.ctor) {
					case 'Screen':
						return {ctor: '_Tuple2', _0: 'position', _1: 'fixed'};
					case 'Parent':
						return {ctor: '_Tuple2', _0: 'position', _1: 'absolute'};
					default:
						return {ctor: '_Tuple2', _0: 'position', _1: 'relative'};
				}
			case 'PosLeft':
				return {
					ctor: '_Tuple2',
					_0: 'left',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p38._0),
						'px')
				};
			case 'PosRight':
				return {
					ctor: '_Tuple2',
					_0: 'right',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p38._0),
						'px')
				};
			case 'PosTop':
				return {
					ctor: '_Tuple2',
					_0: 'top',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p38._0),
						'px')
				};
			case 'PosBottom':
				return {
					ctor: '_Tuple2',
					_0: 'bottom',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p38._0),
						'px')
				};
			case 'ZIndex':
				return {
					ctor: '_Tuple2',
					_0: 'z-index',
					_1: _elm_lang$core$Basics$toString(_p38._0)
				};
			case 'Inline':
				return {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'};
			default:
				switch (_p38._0.ctor) {
					case 'FloatLeft':
						return {ctor: '_Tuple2', _0: 'float', _1: 'left'};
					case 'FloatRight':
						return {ctor: '_Tuple2', _0: 'float', _1: 'right'};
					case 'FloatTopLeft':
						return {ctor: '_Tuple2', _0: 'float', _1: 'left'};
					default:
						return {ctor: '_Tuple2', _0: 'float', _1: 'right'};
				}
		}
	};
	return A2(_elm_lang$core$List$map, renderPos, posEls);
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$transformations = function (transforms) {
	var transformToString = function (transform) {
		var _p39 = transform;
		switch (_p39.ctor) {
			case 'Translate':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'translate3d(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p39._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'px, ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p39._1),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'px, ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p39._2),
										'px)'))))));
			case 'RotateAround':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'rotate3d(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p39._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							',',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p39._1),
								A2(
									_elm_lang$core$Basics_ops['++'],
									',',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p39._2),
										A2(
											_elm_lang$core$Basics_ops['++'],
											',',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p39._3),
												'rad)'))))))));
			case 'Rotate':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'rotate(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p39._0),
						'rad)'));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'scale3d(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p39._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							', ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p39._1),
								A2(
									_elm_lang$core$Basics_ops['++'],
									', ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p39._2),
										')'))))));
		}
	};
	var transformString = A2(
		_elm_lang$core$String$join,
		' ',
		A2(_elm_lang$core$List$map, transformToString, transforms));
	var renderedTransforms = (_elm_lang$core$Native_Utils.cmp(
		_elm_lang$core$String$length(transformString),
		0) > 0) ? {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'transform', _1: transformString},
		_1: {ctor: '[]'}
	} : {ctor: '[]'};
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(transforms),
		0) ? {ctor: '[]'} : renderedTransforms;
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$box = function (_p40) {
	var _p41 = _p40;
	return {ctor: '_Tuple2', _0: _p41._0, _1: _p41._1};
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$shadow = function (shadows) {
	var _p42 = A2(
		_elm_lang$core$List$partition,
		function (_p43) {
			var _p44 = _p43;
			return _elm_lang$core$Native_Utils.eq(_p44._0.kind, 'text');
		},
		shadows);
	var text = _p42._0;
	var box = _p42._1;
	var renderedBox = A2(
		_elm_lang$core$String$join,
		', ',
		A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Value$shadow, box));
	var renderedText = A2(
		_elm_lang$core$String$join,
		', ',
		A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Value$shadow, text));
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		{
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.eq(renderedBox, '') ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
				{ctor: '_Tuple2', _0: 'box-shadow', _1: renderedBox}),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.eq(renderedText, '') ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple2', _0: 'text-shadow', _1: renderedText}),
				_1: {ctor: '[]'}
			}
		});
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$filters = function (filters) {
	var filterName = function (filtr) {
		var _p45 = filtr;
		switch (_p45.ctor) {
			case 'FilterUrl':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'url(',
					A2(_elm_lang$core$Basics_ops['++'], _p45._0, ')'));
			case 'Blur':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'blur(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p45._0),
						'px)'));
			case 'Brightness':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'brightness(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p45._0),
						'%)'));
			case 'Contrast':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'contrast(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p45._0),
						'%)'));
			case 'Grayscale':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'grayscale(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p45._0),
						'%)'));
			case 'HueRotate':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'hueRotate(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p45._0),
						'deg)'));
			case 'Invert':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'invert(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p45._0),
						'%)'));
			case 'OpacityFilter':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'opacity(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p45._0),
						'%)'));
			case 'Saturate':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'saturate(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p45._0),
						'%)'));
			case 'Sepia':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'sepia(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p45._0),
						'%)'));
			default:
				var _p46 = _p45._0;
				var shadowModel = _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
					{kind: 'drop', offset: _p46.offset, size: _p46.size, blur: _p46.blur, color: _p46.color});
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'drop-shadow(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_mdgriffith$style_elements$Style_Internal_Render_Value$shadow(shadowModel),
						')'));
		}
	};
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$List$length(filters),
		0) ? {ctor: '[]'} : {
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'filter',
			_1: A2(
				_elm_lang$core$String$join,
				' ',
				A2(_elm_lang$core$List$map, filterName, filters))
		},
		_1: {ctor: '[]'}
	};
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$flexHeight = function (l) {
	var _p47 = l;
	switch (_p47.ctor) {
		case 'Px':
			return {
				ctor: '_Tuple2',
				_0: 'height',
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p47._0),
					'px')
			};
		case 'Percent':
			return {
				ctor: '_Tuple2',
				_0: 'height',
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p47._0),
					'%')
			};
		case 'Auto':
			return {ctor: '_Tuple2', _0: 'height', _1: 'auto'};
		case 'Fill':
			return {
				ctor: '_Tuple2',
				_0: 'flex-grow',
				_1: _elm_lang$core$Basics$toString(_p47._0)
			};
		default:
			return {
				ctor: '_Tuple2',
				_0: 'height',
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					'calc(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p47._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'% + ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p47._1),
								'px)'))))
			};
	}
};
var _mdgriffith$style_elements$Style_Internal_Render_Property$flexWidth = F2(
	function (len, adjustment) {
		var _p48 = len;
		switch (_p48.ctor) {
			case 'Px':
				return {
					ctor: '_Tuple2',
					_0: 'width',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p48._0),
						'px')
				};
			case 'Percent':
				return {
					ctor: '_Tuple2',
					_0: 'width',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'calc(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p48._0),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'% - ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(adjustment),
									'px)'))))
				};
			case 'Auto':
				return {ctor: '_Tuple2', _0: 'width', _1: 'auto'};
			case 'Fill':
				return {
					ctor: '_Tuple2',
					_0: 'flex-grow',
					_1: _elm_lang$core$Basics$toString(_p48._0)
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: 'width',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'calc(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p48._0),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'% + ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p48._1),
									'px)'))))
				};
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render_Property$visibility = function (vis) {
	var _p49 = vis;
	switch (_p49.ctor) {
		case 'Hidden':
			return {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'display', _1: 'none'},
				_1: {ctor: '[]'}
			};
		case 'Invisible':
			return {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'visibility', _1: 'hidden'},
				_1: {ctor: '[]'}
			};
		default:
			return {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'opacity',
					_1: _elm_lang$core$Basics$toString(_p49._0)
				},
				_1: {ctor: '[]'}
			};
	}
};

var _mdgriffith$style_elements$Style_Internal_Render$renderVariationProp = F2(
	function (parentClass, prop) {
		var _p0 = prop;
		switch (_p0.ctor) {
			case 'Child':
				return _elm_lang$core$Maybe$Nothing;
			case 'Variation':
				return _elm_lang$core$Maybe$Nothing;
			case 'PseudoElement':
				return function (_p1) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
							_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p1)));
				}(
					{
						selector: A2(
							_elm_lang$core$Debug$log,
							'rendering variation pseudo',
							A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, _p0._0, parentClass)),
						props: A2(
							_elm_lang$core$List$filterMap,
							_mdgriffith$style_elements$Style_Internal_Render$renderVariationProp(parentClass),
							_p0._1)
					});
			case 'MediaQuery':
				var _p3 = _p0._0;
				return function (_p2) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
							_mdgriffith$style_elements$Style_Internal_Intermediate$Media(_p2)));
				}(
					{
						query: A2(_elm_lang$core$Basics_ops['++'], '@media ', _p3),
						selector: parentClass,
						props: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Intermediate$asMediaQuery(_p3),
							A2(
								_elm_lang$core$List$filterMap,
								_mdgriffith$style_elements$Style_Internal_Render$renderVariationProp(parentClass),
								_p0._1))
					});
			case 'Exact':
				return function (_p4) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p4));
				}(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p0._0, _1: _p0._1},
						_1: {ctor: '[]'}
					});
			case 'Visibility':
				return function (_p5) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p5));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$visibility(_p0._0));
			case 'Position':
				return function (_p6) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p6));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$position(_p0._0));
			case 'Font':
				return function (_p7) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p7));
				}(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p0._0, _1: _p0._1},
						_1: {ctor: '[]'}
					});
			case 'Layout':
				return function (_p8) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p8));
				}(
					A2(_mdgriffith$style_elements$Style_Internal_Render_Property$layout, false, _p0._0));
			case 'Background':
				return function (_p9) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p9));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$background(_p0._0));
			case 'Shadows':
				return function (_p10) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p10));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$shadow(_p0._0));
			case 'Transform':
				return function (_p11) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p11));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$transformations(_p0._0));
			case 'Filters':
				return function (_p12) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p12));
				}(
					_mdgriffith$style_elements$Style_Internal_Render_Property$filters(_p0._0));
			case 'TextColor':
				return function (_p13) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$props(_p13));
				}(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'color',
							_1: _mdgriffith$style_elements$Style_Internal_Render_Value$color(_p0._0)
						},
						_1: {ctor: '[]'}
					});
			case 'SelectionColor':
				return function (_p14) {
					return _elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
							_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p14)));
				}(
					{
						selector: A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, '::selection', parentClass),
						props: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Style_Internal_Intermediate$props(
								{
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'background-color',
										_1: _mdgriffith$style_elements$Style_Internal_Render_Value$color(_p0._0)
									},
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					});
			default:
				return _elm_lang$core$Maybe$Just(
					_mdgriffith$style_elements$Style_Internal_Intermediate$props(
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'transition',
								_1: A2(
									_elm_lang$core$String$join,
									', ',
									A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Property$transition, _p0._0))
							},
							_1: {ctor: '[]'}
						}));
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render$renderProp = F2(
	function (parentClass, prop) {
		var _p15 = prop;
		switch (_p15.ctor) {
			case 'Child':
				return function (_p16) {
					return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
						_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p16));
				}(
					{
						selector: A2(
							_mdgriffith$style_elements$Style_Internal_Selector$child,
							parentClass,
							_mdgriffith$style_elements$Style_Internal_Selector$select(_p15._0)),
						props: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Render$renderProp(parentClass),
							_p15._1)
					});
			case 'Variation':
				var selectVariation = A2(_mdgriffith$style_elements$Style_Internal_Selector$variant, parentClass, _p15._0);
				return function (_p17) {
					return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
						_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p17));
				}(
					{
						selector: selectVariation,
						props: A2(
							_elm_lang$core$List$filterMap,
							_mdgriffith$style_elements$Style_Internal_Render$renderVariationProp(selectVariation),
							_p15._1)
					});
			case 'PseudoElement':
				return function (_p18) {
					return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
						_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p18));
				}(
					{
						selector: A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, _p15._0, parentClass),
						props: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Render$renderProp(parentClass),
							_p15._1)
					});
			case 'MediaQuery':
				var _p20 = _p15._0;
				return function (_p19) {
					return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
						_mdgriffith$style_elements$Style_Internal_Intermediate$Media(_p19));
				}(
					{
						query: A2(_elm_lang$core$Basics_ops['++'], '@media ', _p20),
						selector: parentClass,
						props: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Intermediate$asMediaQuery(_p20),
							A2(
								_elm_lang$core$List$map,
								_mdgriffith$style_elements$Style_Internal_Render$renderProp(parentClass),
								_p15._1))
					});
			case 'Exact':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p15._0, _1: _p15._1},
						_1: {ctor: '[]'}
					});
			case 'Visibility':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$visibility(_p15._0));
			case 'Position':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$position(_p15._0));
			case 'Font':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p15._0, _1: _p15._1},
						_1: {ctor: '[]'}
					});
			case 'Layout':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					A2(_mdgriffith$style_elements$Style_Internal_Render_Property$layout, false, _p15._0));
			case 'Background':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$background(_p15._0));
			case 'Shadows':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$shadow(_p15._0));
			case 'Transform':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$transformations(_p15._0));
			case 'Filters':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					_mdgriffith$style_elements$Style_Internal_Render_Property$filters(_p15._0));
			case 'SelectionColor':
				return function (_p21) {
					return _mdgriffith$style_elements$Style_Internal_Intermediate$SubClass(
						_mdgriffith$style_elements$Style_Internal_Intermediate$Class(_p21));
				}(
					{
						selector: A2(_mdgriffith$style_elements$Style_Internal_Selector$pseudo, '::selection', parentClass),
						props: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Style_Internal_Intermediate$props(
								{
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'background-color',
										_1: _mdgriffith$style_elements$Style_Internal_Render_Value$color(_p15._0)
									},
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					});
			case 'TextColor':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'color',
							_1: _mdgriffith$style_elements$Style_Internal_Render_Value$color(_p15._0)
						},
						_1: {ctor: '[]'}
					});
			default:
				return _mdgriffith$style_elements$Style_Internal_Intermediate$props(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'transition',
							_1: A2(
								_elm_lang$core$String$join,
								', ',
								A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Render_Property$transition, _p15._0))
						},
						_1: {ctor: '[]'}
					});
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render$preprocess = function (style) {
	var _p22 = style;
	if (_p22.ctor === 'Style') {
		var mergeTransforms = function (props) {
			var applyTransforms = function (_p23) {
				var _p24 = _p23;
				var _p25 = _p24._1;
				var transformations = A2(
					_elm_lang$core$List$filterMap,
					_elm_lang$core$Basics$identity,
					{
						ctor: '::',
						_0: _p24._0.translate,
						_1: {
							ctor: '::',
							_0: _p24._0.rotate,
							_1: {
								ctor: '::',
								_0: _p24._0.scale,
								_1: {ctor: '[]'}
							}
						}
					});
				return _elm_lang$core$List$isEmpty(transformations) ? _p25 : {
					ctor: '::',
					_0: _mdgriffith$style_elements$Style_Internal_Model$Transform(transformations),
					_1: _p25
				};
			};
			var setIfNothing = F2(
				function (x, maybeX) {
					var _p26 = maybeX;
					if (_p26.ctor === 'Nothing') {
						return _elm_lang$core$Maybe$Just(x);
					} else {
						return _p26;
					}
				});
			var gatherTransformStack = F2(
				function (transformation, gathered) {
					var _p27 = transformation;
					switch (_p27.ctor) {
						case 'Translate':
							return _elm_lang$core$Native_Utils.update(
								gathered,
								{
									translate: A2(
										setIfNothing,
										A3(_mdgriffith$style_elements$Style_Internal_Model$Translate, _p27._0, _p27._1, _p27._2),
										gathered.translate)
								});
						case 'Rotate':
							return _elm_lang$core$Native_Utils.update(
								gathered,
								{
									rotate: A2(
										setIfNothing,
										_mdgriffith$style_elements$Style_Internal_Model$Rotate(_p27._0),
										gathered.rotate)
								});
						case 'RotateAround':
							return _elm_lang$core$Native_Utils.update(
								gathered,
								{
									rotate: A2(
										setIfNothing,
										A4(_mdgriffith$style_elements$Style_Internal_Model$RotateAround, _p27._0, _p27._1, _p27._2, _p27._3),
										gathered.rotate)
								});
						default:
							return _elm_lang$core$Native_Utils.update(
								gathered,
								{
									scale: A2(
										setIfNothing,
										A3(_mdgriffith$style_elements$Style_Internal_Model$Scale, _p27._0, _p27._1, _p27._2),
										gathered.scale)
								});
					}
				});
			var gatherTransforms = F2(
				function (prop, _p28) {
					var _p29 = _p28;
					var _p32 = _p29._0;
					var _p31 = _p29._1;
					var _p30 = prop;
					if (_p30.ctor === 'Transform') {
						return {
							ctor: '_Tuple2',
							_0: A3(_elm_lang$core$List$foldr, gatherTransformStack, _p32, _p30._0),
							_1: _p31
						};
					} else {
						return {
							ctor: '_Tuple2',
							_0: _p32,
							_1: {ctor: '::', _0: prop, _1: _p31}
						};
					}
				});
			return applyTransforms(
				A3(
					_elm_lang$core$List$foldr,
					gatherTransforms,
					{
						ctor: '_Tuple2',
						_0: {rotate: _elm_lang$core$Maybe$Nothing, scale: _elm_lang$core$Maybe$Nothing, translate: _elm_lang$core$Maybe$Nothing},
						_1: {ctor: '[]'}
					},
					props));
		};
		var dropShadow = function (_p33) {
			var _p34 = _p33;
			return _elm_lang$core$Native_Utils.eq(_p34._0.kind, 'drop');
		};
		var moveDropShadow = function (props) {
			var asDropShadow = function (_p35) {
				var _p36 = _p35;
				var _p37 = _p36._0;
				return _mdgriffith$style_elements$Style_Internal_Model$DropShadow(
					{offset: _p37.offset, size: _p37.size, blur: _p37.blur, color: _p37.color});
			};
			var moveDropped = F2(
				function (prop, _p38) {
					var _p39 = _p38;
					var _p46 = _p39._0;
					var _p45 = _p39._1;
					var _p40 = prop;
					switch (_p40.ctor) {
						case 'Shadows':
							var _p43 = _p40._0;
							return {
								ctor: '_Tuple2',
								_0: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Style_Internal_Model$Shadows(
										A2(
											_elm_lang$core$List$filter,
											function (_p41) {
												return !dropShadow(_p41);
											},
											_p43)),
									_1: _p46
								},
								_1: function () {
									var _p42 = A2(_elm_lang$core$List$filter, dropShadow, _p43);
									if (_p42.ctor === '[]') {
										return _elm_lang$core$Maybe$Nothing;
									} else {
										return _elm_lang$core$Maybe$Just(_p42);
									}
								}()
							};
						case 'Filters':
							var _p44 = _p45;
							if (_p44.ctor === 'Nothing') {
								return {
									ctor: '_Tuple2',
									_0: {ctor: '::', _0: prop, _1: _p46},
									_1: _p45
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Style_Internal_Model$Filters(
											A2(
												_elm_lang$core$Basics_ops['++'],
												_p40._0,
												A2(_elm_lang$core$List$map, asDropShadow, _p44._0))),
										_1: _p46
									},
									_1: _p45
								};
							}
						default:
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: prop, _1: _p46},
								_1: _p45
							};
					}
				});
			return _elm_lang$core$Tuple$first(
				A3(
					_elm_lang$core$List$foldr,
					moveDropped,
					{
						ctor: '_Tuple2',
						_0: {ctor: '[]'},
						_1: _elm_lang$core$Maybe$Nothing
					},
					props));
		};
		var overridePrevious = F2(
			function (overridable, props) {
				var eliminatePrevious = F2(
					function (prop, _p47) {
						var _p48 = _p47;
						var _p50 = _p48._1;
						var _p49 = _p48._0;
						return (overridable(prop) && _p50) ? {ctor: '_Tuple2', _0: _p49, _1: _p50} : ((overridable(prop) && (!_p50)) ? {
							ctor: '_Tuple2',
							_0: {ctor: '::', _0: prop, _1: _p49},
							_1: true
						} : {
							ctor: '_Tuple2',
							_0: {ctor: '::', _0: prop, _1: _p49},
							_1: _p50
						});
					});
				return _elm_lang$core$Tuple$first(
					A3(
						_elm_lang$core$List$foldr,
						eliminatePrevious,
						{
							ctor: '_Tuple2',
							_0: {ctor: '[]'},
							_1: false
						},
						props));
			});
		var prioritize = F2(
			function (isPriority, props) {
				var _p51 = A2(_elm_lang$core$List$partition, isPriority, props);
				var high = _p51._0;
				var low = _p51._1;
				return A2(_elm_lang$core$Basics_ops['++'], low, high);
			});
		var shadows = function (prop) {
			var _p52 = prop;
			if (_p52.ctor === 'Shadows') {
				return true;
			} else {
				return false;
			}
		};
		var visible = function (prop) {
			var _p53 = prop;
			if (_p53.ctor === 'Visibility') {
				return true;
			} else {
				return false;
			}
		};
		var processed = mergeTransforms(
			moveDropShadow(
				A2(
					overridePrevious,
					shadows,
					A2(
						prioritize,
						shadows,
						A2(
							overridePrevious,
							visible,
							A2(prioritize, visible, _p22._1))))));
		return A2(_mdgriffith$style_elements$Style_Internal_Model$Style, _p22._0, processed);
	} else {
		return style;
	}
};
var _mdgriffith$style_elements$Style_Internal_Render$reorderImportAddReset = F2(
	function (reset, styles) {
		var reorder = F2(
			function (style, _p54) {
				var _p55 = _p54;
				var _p58 = _p55._1;
				var _p57 = _p55._0;
				var _p56 = style;
				if (_p56.ctor === 'Import') {
					return {
						ctor: '_Tuple2',
						_0: {ctor: '::', _0: style, _1: _p57},
						_1: _p58
					};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _p57,
						_1: {ctor: '::', _0: style, _1: _p58}
					};
				}
			});
		var _p59 = A3(
			_elm_lang$core$List$foldr,
			reorder,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			styles);
		var imports = _p59._0;
		var allStyles = _p59._1;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			imports,
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Style_Internal_Model$Reset(reset),
					_1: {ctor: '[]'}
				},
				allStyles));
	});
var _mdgriffith$style_elements$Style_Internal_Render$spacing = function (box) {
	var name = function () {
		var _p60 = box;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'spacing-',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p60._0),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'-',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p60._1),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'-',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p60._2),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'-',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p60._3),
										' > *:not(.nospacing)'))))))));
	}();
	return function (cls) {
		return {
			ctor: '_Tuple2',
			_0: name,
			_1: A2(
				_elm_lang$core$Basics_ops['++'],
				'.',
				A2(_elm_lang$core$Basics_ops['++'], name, cls))
		};
	}(
		A2(
			_mdgriffith$style_elements$Style_Internal_Render_Css$brace,
			0,
			A2(
				_mdgriffith$style_elements$Style_Internal_Render_Css$prop,
				2,
				{
					ctor: '_Tuple2',
					_0: 'margin',
					_1: _mdgriffith$style_elements$Style_Internal_Render_Value$box(box)
				})));
};
var _mdgriffith$style_elements$Style_Internal_Render$class = F2(
	function (name, props) {
		var renderedProps = A2(
			_elm_lang$core$String$join,
			'\n',
			A2(
				_elm_lang$core$List$map,
				_mdgriffith$style_elements$Style_Internal_Render_Css$prop(2),
				props));
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'.',
			A2(
				_elm_lang$core$Basics_ops['++'],
				name,
				A2(_mdgriffith$style_elements$Style_Internal_Render_Css$brace, 0, renderedProps)));
	});
var _mdgriffith$style_elements$Style_Internal_Render$renderStyle = F2(
	function (guarded, style) {
		var _p61 = style;
		switch (_p61.ctor) {
			case 'Reset':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Free(_p61._0);
			case 'Import':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Free(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'@import ',
						A2(_elm_lang$core$Basics_ops['++'], _p61._0, ';')));
			case 'RawStyle':
				return _mdgriffith$style_elements$Style_Internal_Intermediate$Free(
					A2(_mdgriffith$style_elements$Style_Internal_Render$class, _p61._0, _p61._1));
			default:
				var guard = function (i) {
					return guarded ? _mdgriffith$style_elements$Style_Internal_Intermediate$guard(i) : i;
				};
				var selector = _mdgriffith$style_elements$Style_Internal_Selector$select(_p61._0);
				var inter = _mdgriffith$style_elements$Style_Internal_Intermediate$Class(
					{
						selector: selector,
						props: A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Style_Internal_Render$renderProp(selector),
							_p61._1)
					});
				return guard(inter);
		}
	});
var _mdgriffith$style_elements$Style_Internal_Render$stylesheet = F3(
	function (reset, guard, batched) {
		return _mdgriffith$style_elements$Style_Internal_Intermediate$finalize(
			A2(
				_elm_lang$core$List$map,
				function (_p62) {
					return A2(
						_mdgriffith$style_elements$Style_Internal_Render$renderStyle,
						guard,
						_mdgriffith$style_elements$Style_Internal_Render$preprocess(_p62));
				},
				A2(
					_mdgriffith$style_elements$Style_Internal_Render$reorderImportAddReset,
					reset,
					_mdgriffith$style_elements$Style_Internal_Batchable$toList(batched))));
	});
var _mdgriffith$style_elements$Style_Internal_Render$unbatchedStylesheet = F2(
	function (guard, styles) {
		return _mdgriffith$style_elements$Style_Internal_Intermediate$finalize(
			A2(
				_elm_lang$core$List$map,
				function (_p63) {
					return A2(
						_mdgriffith$style_elements$Style_Internal_Render$renderStyle,
						guard,
						_mdgriffith$style_elements$Style_Internal_Render$preprocess(_p63));
				},
				styles));
	});
var _mdgriffith$style_elements$Style_Internal_Render$single = F2(
	function (guard, style) {
		return function (_p64) {
			return _mdgriffith$style_elements$Style_Internal_Intermediate$raw(
				A2(
					_mdgriffith$style_elements$Style_Internal_Render$renderStyle,
					guard,
					_mdgriffith$style_elements$Style_Internal_Render$preprocess(_p64)));
		}(style);
	});

var _mdgriffith$style_elements$Style$prepareSheet = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._0.findable;
	var variations = F2(
		function ($class, vs) {
			var varys = A2(
				_elm_lang$core$List$map,
				function (cls) {
					return {ctor: '_Tuple2', _0: cls, _1: true};
				},
				A2(
					_elm_lang$core$List$map,
					function (_p2) {
						return function (vary) {
							return A3(_mdgriffith$style_elements$Style_Internal_Find$variation, $class, vary, _p3);
						}(
							_elm_lang$core$Tuple$first(_p2));
					},
					A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, vs)));
			var parent = A2(_mdgriffith$style_elements$Style_Internal_Find$style, $class, _p3);
			return {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: parent, _1: true},
				_1: varys
			};
		});
	return {
		style: function ($class) {
			return A2(_mdgriffith$style_elements$Style_Internal_Find$style, $class, _p3);
		},
		variations: F2(
			function ($class, varys) {
				return A2(variations, $class, varys);
			}),
		css: _p1._0.css
	};
};
var _mdgriffith$style_elements$Style$pseudo = F2(
	function (psu, props) {
		return A2(
			_mdgriffith$style_elements$Style_Internal_Model$PseudoElement,
			A2(_elm_lang$core$Basics_ops['++'], ':', psu),
			props);
	});
var _mdgriffith$style_elements$Style$checked = function (props) {
	return A2(_mdgriffith$style_elements$Style_Internal_Model$PseudoElement, ':checked', props);
};
var _mdgriffith$style_elements$Style$focus = function (props) {
	return A2(_mdgriffith$style_elements$Style_Internal_Model$PseudoElement, ':focus', props);
};
var _mdgriffith$style_elements$Style$hover = function (props) {
	return A2(_mdgriffith$style_elements$Style_Internal_Model$PseudoElement, ':hover', props);
};
var _mdgriffith$style_elements$Style$scale = F3(
	function (x, y, z) {
		return _mdgriffith$style_elements$Style_Internal_Model$Transform(
			{
				ctor: '::',
				_0: A3(_mdgriffith$style_elements$Style_Internal_Model$Scale, x, y, z),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Style$translate = F3(
	function (x, y, z) {
		return _mdgriffith$style_elements$Style_Internal_Model$Transform(
			{
				ctor: '::',
				_0: A3(_mdgriffith$style_elements$Style_Internal_Model$Translate, x, y, z),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Style$rotateAround = F2(
	function (_p4, angle) {
		var _p5 = _p4;
		return _mdgriffith$style_elements$Style_Internal_Model$Transform(
			{
				ctor: '::',
				_0: A4(_mdgriffith$style_elements$Style_Internal_Model$RotateAround, _p5._0, _p5._1, _p5._2, angle),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Style$rotate = function (a) {
	return _mdgriffith$style_elements$Style_Internal_Model$Transform(
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Internal_Model$Rotate(a),
			_1: {ctor: '[]'}
		});
};
var _mdgriffith$style_elements$Style$origin = F3(
	function (x, y, z) {
		return A2(
			_mdgriffith$style_elements$Style_Internal_Model$Exact,
			'transform-origin',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(x),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'px  ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(y),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'px ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(z),
								'px'))))));
	});
var _mdgriffith$style_elements$Style$filters = function (fs) {
	return _mdgriffith$style_elements$Style_Internal_Model$Filters(fs);
};
var _mdgriffith$style_elements$Style$shadows = function (shades) {
	return _mdgriffith$style_elements$Style_Internal_Model$Shadows(shades);
};
var _mdgriffith$style_elements$Style$paddingBottomHint = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'padding-bottom',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style$paddingTopHint = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'padding-top',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style$paddingRightHint = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'padding-right',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style$paddingLeftHint = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'padding-left',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style$paddingHint = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'padding',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style$cursor = function (name) {
	return A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'cursor', name);
};
var _mdgriffith$style_elements$Style$opacity = function (o) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'opacity',
		_elm_lang$core$Basics$toString(o));
};
var _mdgriffith$style_elements$Style$prop = F2(
	function (name, val) {
		return A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, name, val);
	});
var _mdgriffith$style_elements$Style$variation = F2(
	function (variation, props) {
		return A2(_mdgriffith$style_elements$Style_Internal_Model$Variation, variation, props);
	});
var _mdgriffith$style_elements$Style$style = F2(
	function (cls, props) {
		return _mdgriffith$style_elements$Style_Internal_Batchable$one(
			A2(
				_mdgriffith$style_elements$Style_Internal_Model$Style,
				cls,
				{
					ctor: '::',
					_0: A2(_mdgriffith$style_elements$Style$prop, 'border-style', 'solid'),
					_1: props
				}));
	});
var _mdgriffith$style_elements$Style$importCss = function (str) {
	return _mdgriffith$style_elements$Style_Internal_Batchable$one(
		_mdgriffith$style_elements$Style_Internal_Model$Import(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\"',
				A2(_elm_lang$core$Basics_ops['++'], str, '\"'))));
};
var _mdgriffith$style_elements$Style$importUrl = function (url) {
	return _mdgriffith$style_elements$Style_Internal_Batchable$one(
		_mdgriffith$style_elements$Style_Internal_Model$Import(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'url(\"',
				A2(_elm_lang$core$Basics_ops['++'], url, '\")'))));
};
var _mdgriffith$style_elements$Style$Unguarded = {ctor: 'Unguarded'};
var _mdgriffith$style_elements$Style$unguarded = _mdgriffith$style_elements$Style$Unguarded;
var _mdgriffith$style_elements$Style$styleSheetWith = F2(
	function (options, styles) {
		var unguarded = A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_mdgriffith$style_elements$Style$Unguarded),
			options);
		return _mdgriffith$style_elements$Style$prepareSheet(
			A3(_mdgriffith$style_elements$Style_Internal_Render$stylesheet, '', !unguarded, styles));
	});
var _mdgriffith$style_elements$Style$styleSheet = function (styles) {
	return A2(
		_mdgriffith$style_elements$Style$styleSheetWith,
		{ctor: '[]'},
		styles);
};
var _mdgriffith$style_elements$Style$stylesheet = function (styles) {
	return A2(
		_mdgriffith$style_elements$Style$styleSheetWith,
		{ctor: '[]'},
		styles);
};
var _mdgriffith$style_elements$Style$stylesheetWith = F2(
	function (options, styles) {
		var unguarded = A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(_mdgriffith$style_elements$Style$Unguarded),
			options);
		return _mdgriffith$style_elements$Style$prepareSheet(
			A3(_mdgriffith$style_elements$Style_Internal_Render$stylesheet, '', !unguarded, styles));
	});

var _mdgriffith$style_elements$Element_Attributes$manifest = function (man) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$manifest(man));
};
var _mdgriffith$style_elements$Element_Attributes$scope = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$scope(str));
};
var _mdgriffith$style_elements$Element_Attributes$rowspan = function (i) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$rowspan(i));
};
var _mdgriffith$style_elements$Element_Attributes$headers = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$headers(str));
};
var _mdgriffith$style_elements$Element_Attributes$colspan = function (i) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$colspan(i));
};
var _mdgriffith$style_elements$Element_Attributes$start = function (i) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$start(i));
};
var _mdgriffith$style_elements$Element_Attributes$reversed = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$reversed(on));
};
var _mdgriffith$style_elements$Element_Attributes$pubdate = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$pubdate(str));
};
var _mdgriffith$style_elements$Element_Attributes$datetime = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$datetime(str));
};
var _mdgriffith$style_elements$Element_Attributes$rel = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$rel(str));
};
var _mdgriffith$style_elements$Element_Attributes$ping = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$ping(str));
};
var _mdgriffith$style_elements$Element_Attributes$media = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$media(str));
};
var _mdgriffith$style_elements$Element_Attributes$hreflang = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$hreflang(str));
};
var _mdgriffith$style_elements$Element_Attributes$downloadAs = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$downloadAs(str));
};
var _mdgriffith$style_elements$Element_Attributes$download = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$download(on));
};
var _mdgriffith$style_elements$Element_Attributes$target = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$target(str));
};
var _mdgriffith$style_elements$Element_Attributes$href = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$href(str));
};
var _mdgriffith$style_elements$Element_Attributes$cite = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$cite(str));
};
var _mdgriffith$style_elements$Element_Attributes$align = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$align(str));
};
var _mdgriffith$style_elements$Element_Attributes$keytype = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$keytype(str));
};
var _mdgriffith$style_elements$Element_Attributes$challenge = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$challenge(str));
};
var _mdgriffith$style_elements$Element_Attributes$coords = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$coords(str));
};
var _mdgriffith$style_elements$Element_Attributes$shape = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$shape(str));
};
var _mdgriffith$style_elements$Element_Attributes$usemap = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$usemap(str));
};
var _mdgriffith$style_elements$Element_Attributes$ismap = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$ismap(on));
};
var _mdgriffith$style_elements$Element_Attributes$wrap = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$wrap(str));
};
var _mdgriffith$style_elements$Element_Attributes$rows = function (i) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$rows(i));
};
var _mdgriffith$style_elements$Element_Attributes$cols = function (i) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$cols(i));
};
var _mdgriffith$style_elements$Element_Attributes$step = function (s) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$step(s));
};
var _mdgriffith$style_elements$Element_Attributes$min = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$min(str));
};
var _mdgriffith$style_elements$Element_Attributes$max = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$max(str));
};
var _mdgriffith$style_elements$Element_Attributes$form = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$form(str));
};
var _mdgriffith$style_elements$Element_Attributes$for = function (id) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$for(id));
};
var _mdgriffith$style_elements$Element_Attributes$size = function (i) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$size(i));
};
var _mdgriffith$style_elements$Element_Attributes$required = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$required(on));
};
var _mdgriffith$style_elements$Element_Attributes$readonly = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$readonly(on));
};
var _mdgriffith$style_elements$Element_Attributes$pattern = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$pattern(str));
};
var _mdgriffith$style_elements$Element_Attributes$novalidate = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$novalidate(on));
};
var _mdgriffith$style_elements$Element_Attributes$name = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$name(str));
};
var _mdgriffith$style_elements$Element_Attributes$multiple = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$multiple(on));
};
var _mdgriffith$style_elements$Element_Attributes$method = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$method(str));
};
var _mdgriffith$style_elements$Element_Attributes$maxlength = function (i) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$maxlength(i));
};
var _mdgriffith$style_elements$Element_Attributes$minlength = function (i) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$minlength(i));
};
var _mdgriffith$style_elements$Element_Attributes$list = function (l) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$list(l));
};
var _mdgriffith$style_elements$Element_Attributes$formaction = function (action) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$formaction(action));
};
var _mdgriffith$style_elements$Element_Attributes$enctype = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$enctype(str));
};
var _mdgriffith$style_elements$Element_Attributes$disabled = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$disabled(on));
};
var _mdgriffith$style_elements$Element_Attributes$autofocus = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$autofocus(on));
};
var _mdgriffith$style_elements$Element_Attributes$autocomplete = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$autocomplete(on));
};
var _mdgriffith$style_elements$Element_Attributes$action = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$action(str));
};
var _mdgriffith$style_elements$Element_Attributes$acceptCharset = function ($char) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$acceptCharset($char));
};
var _mdgriffith$style_elements$Element_Attributes$accept = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$accept(str));
};
var _mdgriffith$style_elements$Element_Attributes$selected = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$selected(on));
};
var _mdgriffith$style_elements$Element_Attributes$placeholder = function (place) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$placeholder(place));
};
var _mdgriffith$style_elements$Element_Attributes$checked = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$checked(on));
};
var _mdgriffith$style_elements$Element_Attributes$defaultValue = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$defaultValue(str));
};
var _mdgriffith$style_elements$Element_Attributes$value = function (val) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$value(val));
};
var _mdgriffith$style_elements$Element_Attributes$type_ = function (t) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$type_(t));
};
var _mdgriffith$style_elements$Element_Attributes$srcdoc = function (doc) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$srcdoc(doc));
};
var _mdgriffith$style_elements$Element_Attributes$seamless = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$seamless(on));
};
var _mdgriffith$style_elements$Element_Attributes$sandbox = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$sandbox(str));
};
var _mdgriffith$style_elements$Element_Attributes$srclang = function (lang) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$srclang(lang));
};
var _mdgriffith$style_elements$Element_Attributes$kind = function (k) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$kind(k));
};
var _mdgriffith$style_elements$Element_Attributes$default = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$default(on));
};
var _mdgriffith$style_elements$Element_Attributes$poster = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$poster(str));
};
var _mdgriffith$style_elements$Element_Attributes$preload = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$preload(str));
};
var _mdgriffith$style_elements$Element_Attributes$loop = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$loop(on));
};
var _mdgriffith$style_elements$Element_Attributes$controls = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$controls(on));
};
var _mdgriffith$style_elements$Element_Attributes$autoplay = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$autoplay(on));
};
var _mdgriffith$style_elements$Element_Attributes$alt = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$alt(str));
};
var _mdgriffith$style_elements$Element_Attributes$src = function (s) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$src(s));
};
var _mdgriffith$style_elements$Element_Attributes$scoped = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$scoped(on));
};
var _mdgriffith$style_elements$Element_Attributes$language = function (lang) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$language(lang));
};
var _mdgriffith$style_elements$Element_Attributes$httpEquiv = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$httpEquiv(str));
};
var _mdgriffith$style_elements$Element_Attributes$defer = function (def) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$defer(def));
};
var _mdgriffith$style_elements$Element_Attributes$content = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$content(str));
};
var _mdgriffith$style_elements$Element_Attributes$charset = function ($char) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$charset($char));
};
var _mdgriffith$style_elements$Element_Attributes$async = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$async(on));
};
var _mdgriffith$style_elements$Element_Attributes$tabindex = function (index) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$tabindex(index));
};
var _mdgriffith$style_elements$Element_Attributes$spellcheck = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$spellcheck(on));
};
var _mdgriffith$style_elements$Element_Attributes$lang = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$lang(str));
};
var _mdgriffith$style_elements$Element_Attributes$itemprop = function (item) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$itemprop(item));
};
var _mdgriffith$style_elements$Element_Attributes$dropzone = function (drop) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$dropzone(drop));
};
var _mdgriffith$style_elements$Element_Attributes$draggable = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$draggable(str));
};
var _mdgriffith$style_elements$Element_Attributes$dir = function (d) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$dir(d));
};
var _mdgriffith$style_elements$Element_Attributes$contextmenu = function (id) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$contextmenu(id));
};
var _mdgriffith$style_elements$Element_Attributes$contenteditable = function (on) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$contenteditable(on));
};
var _mdgriffith$style_elements$Element_Attributes$accesskey = function ($char) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$accesskey($char));
};
var _mdgriffith$style_elements$Element_Attributes$title = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$title(str));
};
var _mdgriffith$style_elements$Element_Attributes$id = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$id(str));
};
var _mdgriffith$style_elements$Element_Attributes$class = function (cls) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$class(cls));
};
var _mdgriffith$style_elements$Element_Attributes$map = F2(
	function (fn, attr) {
		var _p0 = attr;
		switch (_p0.ctor) {
			case 'Attr':
				return _mdgriffith$style_elements$Element_Internal_Model$Attr(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p0._0));
			case 'Vary':
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Vary, _p0._0, _p0._1);
			case 'Height':
				return _mdgriffith$style_elements$Element_Internal_Model$Height(_p0._0);
			case 'Width':
				return _mdgriffith$style_elements$Element_Internal_Model$Width(_p0._0);
			case 'Inline':
				return _mdgriffith$style_elements$Element_Internal_Model$Inline;
			case 'Hidden':
				return _mdgriffith$style_elements$Element_Internal_Model$Hidden;
			case 'PositionFrame':
				return _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_p0._0);
			case 'Opacity':
				return _mdgriffith$style_elements$Element_Internal_Model$Opacity(_p0._0);
			case 'Expand':
				return _mdgriffith$style_elements$Element_Internal_Model$Expand;
			case 'Padding':
				return A4(_mdgriffith$style_elements$Element_Internal_Model$Padding, _p0._0, _p0._1, _p0._2, _p0._3);
			case 'PhantomPadding':
				return _mdgriffith$style_elements$Element_Internal_Model$PhantomPadding(_p0._0);
			case 'Margin':
				return _mdgriffith$style_elements$Element_Internal_Model$Margin(_p0._0);
			case 'GridArea':
				return _mdgriffith$style_elements$Element_Internal_Model$GridArea(_p0._0);
			case 'GridCoords':
				return _mdgriffith$style_elements$Element_Internal_Model$GridCoords(_p0._0);
			case 'PointerEvents':
				return _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(_p0._0);
			case 'Event':
				return _mdgriffith$style_elements$Element_Internal_Model$Event(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p0._0));
			case 'InputEvent':
				return _mdgriffith$style_elements$Element_Internal_Model$InputEvent(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p0._0));
			case 'Position':
				return A3(_mdgriffith$style_elements$Element_Internal_Model$Position, _p0._0, _p0._1, _p0._2);
			case 'Spacing':
				return A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, _p0._0, _p0._1);
			case 'VAlign':
				return _mdgriffith$style_elements$Element_Internal_Model$VAlign(_p0._0);
			case 'HAlign':
				return _mdgriffith$style_elements$Element_Internal_Model$HAlign(_p0._0);
			case 'Shrink':
				return _mdgriffith$style_elements$Element_Internal_Model$Shrink(_p0._0);
			default:
				return _mdgriffith$style_elements$Element_Internal_Model$Overflow(_p0._0);
		}
	});
var _mdgriffith$style_elements$Element_Attributes$toAttr = _mdgriffith$style_elements$Element_Internal_Model$Attr;
var _mdgriffith$style_elements$Element_Attributes$attribute = F2(
	function (name, val) {
		return _mdgriffith$style_elements$Element_Internal_Model$Attr(
			A2(_elm_lang$html$Html_Attributes$attribute, name, val));
	});
var _mdgriffith$style_elements$Element_Attributes$property = F2(
	function (str, val) {
		return _mdgriffith$style_elements$Element_Internal_Model$Attr(
			A2(_elm_lang$html$Html_Attributes$property, str, val));
	});
var _mdgriffith$style_elements$Element_Attributes$inlineStyle = function (_p1) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$virtual_dom$VirtualDom$style(_p1));
};
var _mdgriffith$style_elements$Element_Attributes$classList = function (_p2) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$classList(_p2));
};
var _mdgriffith$style_elements$Element_Attributes$clipY = _mdgriffith$style_elements$Element_Internal_Model$Attr(
	_elm_lang$virtual_dom$VirtualDom$style(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'overflow-y', _1: 'hidden'},
			_1: {ctor: '[]'}
		}));
var _mdgriffith$style_elements$Element_Attributes$clipX = _mdgriffith$style_elements$Element_Internal_Model$Attr(
	_elm_lang$virtual_dom$VirtualDom$style(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'overflow-x', _1: 'hidden'},
			_1: {ctor: '[]'}
		}));
var _mdgriffith$style_elements$Element_Attributes$clip = _mdgriffith$style_elements$Element_Internal_Model$Attr(
	_elm_lang$virtual_dom$VirtualDom$style(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'overflow', _1: 'hidden'},
			_1: {ctor: '[]'}
		}));
var _mdgriffith$style_elements$Element_Attributes$xScrollbar = _mdgriffith$style_elements$Element_Internal_Model$Overflow(_mdgriffith$style_elements$Element_Internal_Model$XAxis);
var _mdgriffith$style_elements$Element_Attributes$yScrollbar = _mdgriffith$style_elements$Element_Internal_Model$Overflow(_mdgriffith$style_elements$Element_Internal_Model$YAxis);
var _mdgriffith$style_elements$Element_Attributes$scrollbars = _mdgriffith$style_elements$Element_Internal_Model$Overflow(_mdgriffith$style_elements$Element_Internal_Model$AllAxis);
var _mdgriffith$style_elements$Element_Attributes$hidden = _mdgriffith$style_elements$Element_Internal_Model$Hidden;
var _mdgriffith$style_elements$Element_Attributes$paddingBottom = function (x) {
	return A4(
		_mdgriffith$style_elements$Element_Internal_Model$Padding,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$paddingTop = function (x) {
	return A4(
		_mdgriffith$style_elements$Element_Internal_Model$Padding,
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$paddingRight = function (x) {
	return A4(
		_mdgriffith$style_elements$Element_Internal_Model$Padding,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$paddingLeft = function (x) {
	return A4(
		_mdgriffith$style_elements$Element_Internal_Model$Padding,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Just(x));
};
var _mdgriffith$style_elements$Element_Attributes$paddingXY = F2(
	function (x, y) {
		return A4(
			_mdgriffith$style_elements$Element_Internal_Model$Padding,
			_elm_lang$core$Maybe$Just(y),
			_elm_lang$core$Maybe$Just(x),
			_elm_lang$core$Maybe$Just(y),
			_elm_lang$core$Maybe$Just(x));
	});
var _mdgriffith$style_elements$Element_Attributes$padding = function (x) {
	return A4(
		_mdgriffith$style_elements$Element_Internal_Model$Padding,
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Just(x));
};
var _mdgriffith$style_elements$Element_Attributes$spacingXY = _mdgriffith$style_elements$Element_Internal_Model$Spacing;
var _mdgriffith$style_elements$Element_Attributes$spacing = function (x) {
	return A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, x, x);
};
var _mdgriffith$style_elements$Element_Attributes$vary = _mdgriffith$style_elements$Element_Internal_Model$Vary;
var _mdgriffith$style_elements$Element_Attributes$percent = _mdgriffith$style_elements$Style_Internal_Model$Percent;
var _mdgriffith$style_elements$Element_Attributes$fill = _mdgriffith$style_elements$Style_Internal_Model$Fill;
var _mdgriffith$style_elements$Element_Attributes$px = _mdgriffith$style_elements$Style_Internal_Model$Px;
var _mdgriffith$style_elements$Element_Attributes$height = _mdgriffith$style_elements$Element_Internal_Model$Height;
var _mdgriffith$style_elements$Element_Attributes$maxHeight = function (len) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'max-height',
					_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(len)
				},
				_1: {ctor: '[]'}
			}));
};
var _mdgriffith$style_elements$Element_Attributes$minHeight = function (len) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'min-height',
					_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(len)
				},
				_1: {ctor: '[]'}
			}));
};
var _mdgriffith$style_elements$Element_Attributes$maxWidth = function (len) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'max-width',
					_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(len)
				},
				_1: {ctor: '[]'}
			}));
};
var _mdgriffith$style_elements$Element_Attributes$minWidth = function (len) {
	return _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$style(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'min-width',
					_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(len)
				},
				_1: {ctor: '[]'}
			}));
};
var _mdgriffith$style_elements$Element_Attributes$width = _mdgriffith$style_elements$Element_Internal_Model$Width;
var _mdgriffith$style_elements$Element_Attributes$moveXY = F2(
	function (x, y) {
		return A3(
			_mdgriffith$style_elements$Element_Internal_Model$Position,
			_elm_lang$core$Maybe$Just(x),
			_elm_lang$core$Maybe$Just(y),
			_elm_lang$core$Maybe$Nothing);
	});
var _mdgriffith$style_elements$Element_Attributes$moveY = function (y) {
	return A3(
		_mdgriffith$style_elements$Element_Internal_Model$Position,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Just(y),
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$moveX = function (x) {
	return A3(
		_mdgriffith$style_elements$Element_Internal_Model$Position,
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$moveLeft = function (x) {
	return A3(
		_mdgriffith$style_elements$Element_Internal_Model$Position,
		_elm_lang$core$Maybe$Just(
			_elm_lang$core$Basics$negate(x)),
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$moveRight = function (x) {
	return A3(
		_mdgriffith$style_elements$Element_Internal_Model$Position,
		_elm_lang$core$Maybe$Just(x),
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$moveDown = function (y) {
	return A3(
		_mdgriffith$style_elements$Element_Internal_Model$Position,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Just(y),
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$moveUp = function (y) {
	return A3(
		_mdgriffith$style_elements$Element_Internal_Model$Position,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Maybe$Just(
			_elm_lang$core$Basics$negate(y)),
		_elm_lang$core$Maybe$Nothing);
};
var _mdgriffith$style_elements$Element_Attributes$alignRight = _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Right);
var _mdgriffith$style_elements$Element_Attributes$alignLeft = _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Left);
var _mdgriffith$style_elements$Element_Attributes$alignBottom = _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Bottom);
var _mdgriffith$style_elements$Element_Attributes$alignTop = _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Top);
var _mdgriffith$style_elements$Element_Attributes$justify = _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Justify);
var _mdgriffith$style_elements$Element_Attributes$verticalCenter = _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$VerticalCenter);
var _mdgriffith$style_elements$Element_Attributes$center = _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Center);

var _mdgriffith$style_elements$Element_Internal_Adjustments$spacingToMargin = function (attrs) {
	var spaceToMarg = function (a) {
		var _p0 = a;
		if (_p0.ctor === 'Spacing') {
			var _p2 = _p0._1;
			var _p1 = _p0._0;
			return _mdgriffith$style_elements$Element_Internal_Model$Margin(
				{ctor: '_Tuple4', _0: _p2, _1: _p1, _2: _p2, _3: _p1});
		} else {
			return _p0;
		}
	};
	return A2(_elm_lang$core$List$map, spaceToMarg, attrs);
};
var _mdgriffith$style_elements$Element_Internal_Adjustments$defaultPadding = F2(
	function (_p4, _p3) {
		var _p5 = _p4;
		var _p6 = _p3;
		return {
			ctor: '_Tuple4',
			_0: A2(_elm_lang$core$Maybe$withDefault, _p6._0, _p5._0),
			_1: A2(_elm_lang$core$Maybe$withDefault, _p6._1, _p5._1),
			_2: A2(_elm_lang$core$Maybe$withDefault, _p6._2, _p5._2),
			_3: A2(_elm_lang$core$Maybe$withDefault, _p6._3, _p5._3)
		};
	});
var _mdgriffith$style_elements$Element_Internal_Adjustments$hoistFixedScreenElements = function (el) {
	var elementIsOnScreen = function (attrs) {
		return A2(
			_elm_lang$core$List$any,
			function (attr) {
				return _elm_lang$core$Native_Utils.eq(
					attr,
					_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Screen));
			},
			attrs);
	};
	var _p7 = el;
	switch (_p7.ctor) {
		case 'Element':
			return elementIsOnScreen(_p7._0.attrs) ? {
				ctor: '_Tuple2',
				_0: _mdgriffith$style_elements$Element_Internal_Model$Empty,
				_1: _elm_lang$core$Maybe$Just(
					{
						ctor: '::',
						_0: el,
						_1: {ctor: '[]'}
					})
			} : {ctor: '_Tuple2', _0: el, _1: _elm_lang$core$Maybe$Nothing};
		case 'Layout':
			return elementIsOnScreen(_p7._0.attrs) ? {
				ctor: '_Tuple2',
				_0: _mdgriffith$style_elements$Element_Internal_Model$Empty,
				_1: _elm_lang$core$Maybe$Just(
					{
						ctor: '::',
						_0: el,
						_1: {ctor: '[]'}
					})
			} : {ctor: '_Tuple2', _0: el, _1: _elm_lang$core$Maybe$Nothing};
		default:
			return {ctor: '_Tuple2', _0: el, _1: _elm_lang$core$Maybe$Nothing};
	}
};
var _mdgriffith$style_elements$Element_Internal_Adjustments$tagIntermediates = false;
var _mdgriffith$style_elements$Element_Internal_Adjustments$tag = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Adjustments$tagIntermediates ? _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$class(str)) : _mdgriffith$style_elements$Element_Internal_Model$Attr(
		_elm_lang$html$Html_Attributes$class(''));
};
var _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing = function (elm) {
	var _p8 = elm;
	if (_p8.ctor === 'Layout') {
		var _p25 = _p8._0.layout;
		var _p24 = _p8._0.attrs;
		var forPadding = function (posAttr) {
			var _p9 = posAttr;
			if (_p9.ctor === 'Padding') {
				return _elm_lang$core$Maybe$Just(
					A2(
						_mdgriffith$style_elements$Element_Internal_Adjustments$defaultPadding,
						{ctor: '_Tuple4', _0: _p9._0, _1: _p9._1, _2: _p9._2, _3: _p9._3},
						{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0}));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var forSpacing = function (posAttr) {
			var _p10 = posAttr;
			if (_p10.ctor === 'Spacing') {
				var _p12 = _p10._1;
				var _p11 = _p10._0;
				return _elm_lang$core$Maybe$Just(
					{ctor: '_Tuple4', _0: _p12, _1: _p11, _2: _p12, _3: _p11});
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var padding = _elm_lang$core$List$head(
			_elm_lang$core$List$reverse(
				A2(_elm_lang$core$List$filterMap, forPadding, _p24)));
		var spacing = _elm_lang$core$List$head(
			_elm_lang$core$List$reverse(
				A2(_elm_lang$core$List$filterMap, forSpacing, _p24)));
		var hasSpacing = function () {
			var _p13 = spacing;
			if (_p13.ctor === 'Nothing') {
				return false;
			} else {
				return true;
			}
		}();
		var _p14 = A2(
			_elm_lang$core$List$partition,
			function (attr) {
				return _elm_lang$core$Native_Utils.eq(
					attr,
					_mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Center)) || _elm_lang$core$Native_Utils.eq(
					attr,
					_mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$VerticalCenter));
			},
			_p24);
		var centeredProps = _p14._0;
		var others = _p14._1;
		var _p15 = _p25;
		if (_p15.ctor === 'FlexLayout') {
			if (hasSpacing) {
				var phantomPadding = _mdgriffith$style_elements$Element_Internal_Model$PhantomPadding(
					A2(
						_elm_lang$core$Maybe$withDefault,
						{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0},
						padding));
				var _p16 = function () {
					var _p17 = spacing;
					if (_p17.ctor === 'Nothing') {
						return {
							ctor: '_Tuple3',
							_0: {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0},
							_1: A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, 0, 0),
							_2: 0
						};
					} else {
						var _p20 = _p17._0._1;
						var _p19 = _p17._0._3;
						var _p18 = _p17._0._2;
						return {
							ctor: '_Tuple3',
							_0: {ctor: '_Tuple4', _0: -1 * _p17._0._0, _1: -1 * _p20, _2: -1 * _p18, _3: -1 * _p19},
							_1: A2(_mdgriffith$style_elements$Element_Internal_Model$Spacing, _p20, _p18),
							_2: (_p20 + _p19) / 2
						};
					}
				}();
				var negativeMargin = _p16._0;
				var spacingAttr = _p16._1;
				var totalHSpacing = _p16._2;
				var forAlignment = function (attr) {
					var _p21 = attr;
					switch (_p21.ctor) {
						case 'HAlign':
							return true;
						case 'VAlign':
							return true;
						default:
							return false;
					}
				};
				var _p22 = A2(_elm_lang$core$List$partition, forAlignment, _p24);
				var aligned = _p22._0;
				var unaligned = _p22._1;
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: _p8._0.node,
						style: _p8._0.style,
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '[]'}),
						attrs: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('counter-spacing-container'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
								_1: unaligned
							}
						},
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Layout(
									{
										node: 'div',
										style: _elm_lang$core$Maybe$Nothing,
										layout: _p25,
										attrs: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('counter-spacing'),
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
												_1: {
													ctor: '::',
													_0: phantomPadding,
													_1: {
														ctor: '::',
														_0: _mdgriffith$style_elements$Element_Internal_Model$Margin(negativeMargin),
														_1: {
															ctor: '::',
															_0: spacingAttr,
															_1: {
																ctor: '::',
																_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
																	A2(_mdgriffith$style_elements$Style_Internal_Model$Calc, 100, totalHSpacing)),
																_1: {
																	ctor: '::',
																	_0: _mdgriffith$style_elements$Element_Internal_Model$Shrink(1),
																	_1: aligned
																}
															}
														}
													}
												}
											}
										},
										children: function () {
											var _p23 = _p8._0.children;
											if (_p23.ctor === 'Normal') {
												return _mdgriffith$style_elements$Element_Internal_Model$Normal(
													A2(
														_elm_lang$core$List$map,
														_mdgriffith$style_elements$Element_Internal_Modify$addAttr(
															_mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true)),
														_p23._0));
											} else {
												return _mdgriffith$style_elements$Element_Internal_Model$Keyed(
													A2(
														_elm_lang$core$List$map,
														_elm_lang$core$Tuple$mapSecond(
															_mdgriffith$style_elements$Element_Internal_Modify$addAttr(
																_mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true))),
														_p23._0));
											}
										}(),
										absolutelyPositioned: _elm_lang$core$Maybe$Nothing
									}),
								_1: {ctor: '[]'}
							}),
						absolutelyPositioned: _p8._0.absolutelyPositioned
					});
			} else {
				return _mdgriffith$style_elements$Element_Internal_Model$Layout(
					_elm_lang$core$Native_Utils.update(
						_p8._0,
						{
							attrs: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
								_1: _p24
							}
						}));
			}
		} else {
			return elm;
		}
	} else {
		return elm;
	}
};
var _mdgriffith$style_elements$Element_Internal_Adjustments$positionNearby = F2(
	function (parent, elm) {
		var setPosition = F3(
			function (nearbyPosition, _p26, el) {
				var _p27 = _p26;
				var _p31 = _p27._1;
				var _p30 = _p27._0;
				var nearbyAlignment = function () {
					var _p28 = nearbyPosition;
					_v13_4:
					do {
						if ((_p28.ctor === 'Just') && (_p28._0.ctor === 'Nearby')) {
							switch (_p28._0._0.ctor) {
								case 'Above':
									return {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Top),
										_1: {ctor: '[]'}
									};
								case 'Below':
									return {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Bottom),
										_1: {ctor: '[]'}
									};
								case 'OnRight':
									return {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Right),
										_1: {ctor: '[]'}
									};
								case 'OnLeft':
									return {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Left),
										_1: {ctor: '[]'}
									};
								default:
									break _v13_4;
							}
						} else {
							break _v13_4;
						}
					} while(false);
					return {ctor: '[]'};
				}();
				var framed = function () {
					var _p29 = nearbyPosition;
					if (_p29.ctor === 'Nothing') {
						return false;
					} else {
						return true;
					}
				}();
				return (_elm_lang$core$Native_Utils.eq(
					nearbyPosition,
					_elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Above))) || _elm_lang$core$Native_Utils.eq(
					nearbyPosition,
					_elm_lang$core$Maybe$Just(
						_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Below)))) ? _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '[]'}),
						attrs: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('above-below-intermediate-parent'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
										_mdgriffith$style_elements$Style_Internal_Model$Px(0)),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
											_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
												_mdgriffith$style_elements$Element_Internal_Model$Absolute(
													_elm_lang$core$Native_Utils.eq(
														nearbyPosition,
														_elm_lang$core$Maybe$Just(
															_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Above))) ? _mdgriffith$style_elements$Element_Internal_Model$TopLeft : _mdgriffith$style_elements$Element_Internal_Model$BottomLeft)),
											_1: {
												ctor: '::',
												_0: A3(
													_mdgriffith$style_elements$Element_Internal_Model$Position,
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Nothing),
												_1: A2(_elm_lang$core$Basics_ops['++'], nearbyAlignment, _p30)
											}
										}
									}
								}
							}
						},
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Element(
									{
										node: 'div',
										style: _elm_lang$core$Maybe$Nothing,
										attrs: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('above-below-intermediate'),
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
												_1: {
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
														_mdgriffith$style_elements$Element_Internal_Model$Absolute(
															_elm_lang$core$Native_Utils.eq(
																nearbyPosition,
																_elm_lang$core$Maybe$Just(
																	_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Above))) ? _mdgriffith$style_elements$Element_Internal_Model$BottomLeft : _mdgriffith$style_elements$Element_Internal_Model$TopLeft)),
													_1: {
														ctor: '::',
														_0: A3(
															_mdgriffith$style_elements$Element_Internal_Model$Position,
															_elm_lang$core$Maybe$Nothing,
															_elm_lang$core$Maybe$Just(0),
															_elm_lang$core$Maybe$Nothing),
														_1: {
															ctor: '::',
															_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Bottom),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										},
										child: _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(
											A2(
												_mdgriffith$style_elements$Element_Internal_Modify$setAttrs,
												{
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
													_1: {
														ctor: '::',
														_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
															_mdgriffith$style_elements$Element_Internal_Model$Absolute(_mdgriffith$style_elements$Element_Internal_Model$TopLeft)),
														_1: {
															ctor: '::',
															_0: A3(
																_mdgriffith$style_elements$Element_Internal_Model$Position,
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Nothing),
															_1: _p31
														}
													}
												},
												el)),
										absolutelyPositioned: _elm_lang$core$Maybe$Nothing
									}),
								_1: {ctor: '[]'}
							}),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					}) : (framed ? _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '[]'}),
						attrs: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('nearby-intermediate-parent'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
										_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
											_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
												_mdgriffith$style_elements$Element_Internal_Model$Absolute(_mdgriffith$style_elements$Element_Internal_Model$TopLeft)),
											_1: {
												ctor: '::',
												_0: A3(
													_mdgriffith$style_elements$Element_Internal_Model$Position,
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Nothing),
												_1: A2(_elm_lang$core$Basics_ops['++'], nearbyAlignment, _p30)
											}
										}
									}
								}
							}
						},
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Element(
									{
										node: 'div',
										style: _elm_lang$core$Maybe$Nothing,
										attrs: A2(
											_elm_lang$core$Basics_ops['++'],
											_p31,
											{
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
												_1: {
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Relative),
													_1: {
														ctor: '::',
														_0: A3(
															_mdgriffith$style_elements$Element_Internal_Model$Position,
															_elm_lang$core$Maybe$Just(0),
															_elm_lang$core$Maybe$Just(0),
															_elm_lang$core$Maybe$Nothing),
														_1: {
															ctor: '::',
															_0: A4(
																_mdgriffith$style_elements$Element_Internal_Model$Padding,
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0)),
															_1: {
																ctor: '::',
																_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('nearby-intermediate'),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}),
										child: _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(
											A2(
												_mdgriffith$style_elements$Element_Internal_Modify$addAttrList,
												{
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
													_1: {
														ctor: '::',
														_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
															_mdgriffith$style_elements$Element_Internal_Model$Absolute(_mdgriffith$style_elements$Element_Internal_Model$TopLeft)),
														_1: {
															ctor: '::',
															_0: A3(
																_mdgriffith$style_elements$Element_Internal_Model$Position,
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Nothing),
															_1: {ctor: '[]'}
														}
													}
												},
												el)),
										absolutelyPositioned: _elm_lang$core$Maybe$Nothing
									}),
								_1: {ctor: '[]'}
							}),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					}) : ((!_elm_lang$core$List$isEmpty(_p30)) ? _mdgriffith$style_elements$Element_Internal_Model$Layout(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						layout: A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_mdgriffith$style_elements$Style_Internal_Model$GoRight,
							{ctor: '[]'}),
						attrs: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('nearby-intermediate-parent'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
										_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
											_mdgriffith$style_elements$Style_Internal_Model$Percent(100)),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Relative),
											_1: {
												ctor: '::',
												_0: A3(
													_mdgriffith$style_elements$Element_Internal_Model$Position,
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Just(0),
													_elm_lang$core$Maybe$Nothing),
												_1: A2(_elm_lang$core$Basics_ops['++'], nearbyAlignment, _p30)
											}
										}
									}
								}
							}
						},
						children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Element(
									{
										node: 'div',
										style: _elm_lang$core$Maybe$Nothing,
										attrs: A2(
											_elm_lang$core$Basics_ops['++'],
											_p31,
											{
												ctor: '::',
												_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
												_1: {
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Relative),
													_1: {
														ctor: '::',
														_0: A3(
															_mdgriffith$style_elements$Element_Internal_Model$Position,
															_elm_lang$core$Maybe$Just(0),
															_elm_lang$core$Maybe$Just(0),
															_elm_lang$core$Maybe$Nothing),
														_1: {
															ctor: '::',
															_0: A4(
																_mdgriffith$style_elements$Element_Internal_Model$Padding,
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0)),
															_1: {
																ctor: '::',
																_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('nearby-intermediate'),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}),
										child: _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(
											A2(
												_mdgriffith$style_elements$Element_Internal_Modify$addAttrList,
												{
													ctor: '::',
													_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
													_1: {
														ctor: '::',
														_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Relative),
														_1: {
															ctor: '::',
															_0: A3(
																_mdgriffith$style_elements$Element_Internal_Model$Position,
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Just(0),
																_elm_lang$core$Maybe$Nothing),
															_1: {ctor: '[]'}
														}
													}
												},
												el)),
										absolutelyPositioned: _elm_lang$core$Maybe$Nothing
									}),
								_1: {ctor: '[]'}
							}),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					}) : _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(elm)));
			});
		var forAlignment = function (attr) {
			var _p32 = attr;
			switch (_p32.ctor) {
				case 'HAlign':
					return true;
				case 'VAlign':
					return true;
				default:
					return false;
			}
		};
		var separateAlignment = function (attrs) {
			return A2(_elm_lang$core$List$partition, forAlignment, attrs);
		};
		var _p33 = elm;
		switch (_p33.ctor) {
			case 'Element':
				var _p37 = _p33._0.attrs;
				var isFrame = function (attr) {
					var _p34 = attr;
					if (_p34.ctor === 'PositionFrame') {
						return _elm_lang$core$Maybe$Just(_p34._0);
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				};
				var frame = _elm_lang$core$List$head(
					A2(_elm_lang$core$List$filterMap, isFrame, _p37));
				var _p35 = separateAlignment(_p37);
				var aligned = _p35._0;
				var unaligned = _p35._1;
				var _p36 = parent;
				if (_p36.ctor === 'Nothing') {
					return A3(
						setPosition,
						frame,
						{ctor: '_Tuple2', _0: aligned, _1: unaligned},
						elm);
				} else {
					return elm;
				}
			case 'Layout':
				var _p41 = _p33._0.attrs;
				var isFrame = function (attr) {
					var _p38 = attr;
					if (_p38.ctor === 'PositionFrame') {
						return _elm_lang$core$Maybe$Just(_p38._0);
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				};
				var frame = _elm_lang$core$List$head(
					A2(_elm_lang$core$List$filterMap, isFrame, _p41));
				var _p39 = separateAlignment(_p41);
				var aligned = _p39._0;
				var unaligned = _p39._1;
				var _p40 = parent;
				if (_p40.ctor === 'Nothing') {
					return A3(
						setPosition,
						frame,
						{ctor: '_Tuple2', _0: aligned, _1: unaligned},
						elm);
				} else {
					return _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(elm);
				}
			default:
				return _mdgriffith$style_elements$Element_Internal_Adjustments$counterSpacing(elm);
		}
	});
var _mdgriffith$style_elements$Element_Internal_Adjustments$centerTextLayout = function (elm) {
	var _p42 = elm;
	if (_p42.ctor === 'Layout') {
		var _p43 = A2(
			_elm_lang$core$List$partition,
			function (attr) {
				return _elm_lang$core$Native_Utils.eq(
					attr,
					_mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Center)) || _elm_lang$core$Native_Utils.eq(
					attr,
					_mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$VerticalCenter));
			},
			_p42._0.attrs);
		var centeredProps = _p43._0;
		var others = _p43._1;
		var _p44 = _p42._0.layout;
		if (_p44.ctor === 'TextLayout') {
			return (!_elm_lang$core$List$isEmpty(centeredProps)) ? _mdgriffith$style_elements$Element_Internal_Model$Layout(
				{
					node: 'div',
					style: _elm_lang$core$Maybe$Nothing,
					layout: A2(
						_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
						_mdgriffith$style_elements$Style_Internal_Model$GoRight,
						{ctor: '[]'}),
					attrs: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Adjustments$tag('center-text'),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
							_1: centeredProps
						}
					},
					children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Layout(
								_elm_lang$core$Native_Utils.update(
									_p42._0,
									{
										attrs: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(true),
											_1: others
										}
									})),
							_1: {ctor: '[]'}
						}),
					absolutelyPositioned: _elm_lang$core$Maybe$Nothing
				}) : elm;
		} else {
			return elm;
		}
	} else {
		return elm;
	}
};
var _mdgriffith$style_elements$Element_Internal_Adjustments$apply = function (root) {
	var stack = F2(
		function (parent, el) {
			return function (_p45) {
				return _mdgriffith$style_elements$Element_Internal_Adjustments$hoistFixedScreenElements(
					A2(
						_mdgriffith$style_elements$Element_Internal_Adjustments$positionNearby,
						parent,
						_mdgriffith$style_elements$Element_Internal_Adjustments$centerTextLayout(_p45)));
			}(el);
		});
	return A3(_mdgriffith$style_elements$Element_Internal_Model$adjust, stack, _elm_lang$core$Maybe$Nothing, root);
};

var _mdgriffith$style_elements$Element_Internal_Render$renderPadding = function (_p0) {
	var _p1 = _p0;
	var format = F2(
		function (name, x) {
			return {
				ctor: '_Tuple2',
				_0: name,
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(x),
					'px')
			};
		});
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$Maybe$map,
				format('padding-top'),
				_p1._0),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Maybe$map,
					format('padding-bottom'),
					_p1._2),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Maybe$map,
						format('padding-left'),
						_p1._3),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$Maybe$map,
							format('padding-right'),
							_p1._1),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _mdgriffith$style_elements$Element_Internal_Render$flexboxVerticalIndividualAlignment = F2(
	function (direction, alignment) {
		var _p2 = direction;
		switch (_p2.ctor) {
			case 'GoRight':
				var _p3 = alignment;
				switch (_p3.ctor) {
					case 'Top':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-start'});
					case 'Bottom':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-end'});
					default:
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'center'});
				}
			case 'GoLeft':
				var _p4 = alignment;
				switch (_p4.ctor) {
					case 'Top':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-start'});
					case 'Bottom':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-end'});
					default:
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'center'});
				}
			case 'Down':
				var _p5 = alignment;
				switch (_p5.ctor) {
					case 'Top':
						return _elm_lang$core$Maybe$Nothing;
					case 'Bottom':
						return _elm_lang$core$Maybe$Nothing;
					default:
						return _elm_lang$core$Maybe$Nothing;
				}
			default:
				var _p6 = alignment;
				switch (_p6.ctor) {
					case 'Top':
						return _elm_lang$core$Maybe$Nothing;
					case 'Bottom':
						return _elm_lang$core$Maybe$Nothing;
					default:
						return _elm_lang$core$Maybe$Nothing;
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$flexboxHorizontalIndividualAlignment = F2(
	function (direction, alignment) {
		var _p7 = direction;
		switch (_p7.ctor) {
			case 'GoRight':
				var _p8 = alignment;
				switch (_p8.ctor) {
					case 'Left':
						return _elm_lang$core$Maybe$Nothing;
					case 'Right':
						return _elm_lang$core$Maybe$Nothing;
					case 'Center':
						return _elm_lang$core$Maybe$Nothing;
					default:
						return _elm_lang$core$Maybe$Nothing;
				}
			case 'GoLeft':
				var _p9 = alignment;
				switch (_p9.ctor) {
					case 'Left':
						return _elm_lang$core$Maybe$Nothing;
					case 'Right':
						return _elm_lang$core$Maybe$Nothing;
					case 'Center':
						return _elm_lang$core$Maybe$Nothing;
					default:
						return _elm_lang$core$Maybe$Nothing;
				}
			case 'Down':
				var _p10 = alignment;
				switch (_p10.ctor) {
					case 'Left':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-start'});
					case 'Right':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-end'});
					case 'Center':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'center'});
					default:
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'stretch'});
				}
			default:
				var _p11 = alignment;
				switch (_p11.ctor) {
					case 'Left':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-start'});
					case 'Right':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'flex-end'});
					case 'Center':
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'center'});
					default:
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: 'align-self', _1: 'stretch'});
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$alignLayout = F3(
	function (maybeHorizontal, maybeVertical, layout) {
		var alignGridVertical = function (align) {
			var _p12 = align;
			switch (_p12.ctor) {
				case 'Top':
					return _mdgriffith$style_elements$Style_Internal_Model$GridV(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Top));
				case 'Bottom':
					return _mdgriffith$style_elements$Style_Internal_Model$GridV(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Bottom));
				default:
					return _mdgriffith$style_elements$Style_Internal_Model$GridV(_mdgriffith$style_elements$Style_Internal_Model$Center);
			}
		};
		var alignGridHorizontal = function (align) {
			var _p13 = align;
			switch (_p13.ctor) {
				case 'Left':
					return _mdgriffith$style_elements$Style_Internal_Model$GridH(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Left));
				case 'Right':
					return _mdgriffith$style_elements$Style_Internal_Model$GridH(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Right));
				case 'Center':
					return _mdgriffith$style_elements$Style_Internal_Model$GridH(_mdgriffith$style_elements$Style_Internal_Model$Center);
				default:
					return _mdgriffith$style_elements$Style_Internal_Model$GridH(_mdgriffith$style_elements$Style_Internal_Model$Justify);
			}
		};
		var alignFlexboxVertical = function (align) {
			var _p14 = align;
			switch (_p14.ctor) {
				case 'Top':
					return _mdgriffith$style_elements$Style_Internal_Model$Vert(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Top));
				case 'Bottom':
					return _mdgriffith$style_elements$Style_Internal_Model$Vert(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Bottom));
				default:
					return _mdgriffith$style_elements$Style_Internal_Model$Vert(_mdgriffith$style_elements$Style_Internal_Model$Center);
			}
		};
		var alignFlexboxHorizontal = function (align) {
			var _p15 = align;
			switch (_p15.ctor) {
				case 'Left':
					return _mdgriffith$style_elements$Style_Internal_Model$Horz(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Left));
				case 'Right':
					return _mdgriffith$style_elements$Style_Internal_Model$Horz(
						_mdgriffith$style_elements$Style_Internal_Model$Other(_mdgriffith$style_elements$Style_Internal_Model$Right));
				case 'Center':
					return _mdgriffith$style_elements$Style_Internal_Model$Horz(_mdgriffith$style_elements$Style_Internal_Model$Center);
				default:
					return _mdgriffith$style_elements$Style_Internal_Model$Horz(_mdgriffith$style_elements$Style_Internal_Model$Justify);
			}
		};
		var _p16 = layout;
		switch (_p16.ctor) {
			case 'TextLayout':
				return _mdgriffith$style_elements$Style_Internal_Model$TextLayout(_p16._0);
			case 'FlexLayout':
				var _p19 = _p16._1;
				var _p18 = _p16._0;
				var _p17 = {ctor: '_Tuple2', _0: maybeHorizontal, _1: maybeVertical};
				if (_p17._0.ctor === 'Nothing') {
					if (_p17._1.ctor === 'Nothing') {
						return A2(_mdgriffith$style_elements$Style_Internal_Model$FlexLayout, _p18, _p19);
					} else {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_p18,
							{
								ctor: '::',
								_0: alignFlexboxVertical(_p17._1._0),
								_1: _p19
							});
					}
				} else {
					if (_p17._1.ctor === 'Nothing') {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_p18,
							{
								ctor: '::',
								_0: alignFlexboxHorizontal(_p17._0._0),
								_1: _p19
							});
					} else {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
							_p18,
							{
								ctor: '::',
								_0: alignFlexboxHorizontal(_p17._0._0),
								_1: {
									ctor: '::',
									_0: alignFlexboxVertical(_p17._1._0),
									_1: _p19
								}
							});
					}
				}
			default:
				var _p22 = _p16._0;
				var _p21 = _p16._1;
				var _p20 = {ctor: '_Tuple2', _0: maybeHorizontal, _1: maybeVertical};
				if (_p20._0.ctor === 'Nothing') {
					if (_p20._1.ctor === 'Nothing') {
						return A2(_mdgriffith$style_elements$Style_Internal_Model$Grid, _p22, _p21);
					} else {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$Grid,
							_p22,
							{
								ctor: '::',
								_0: alignGridVertical(_p20._1._0),
								_1: _p21
							});
					}
				} else {
					if (_p20._1.ctor === 'Nothing') {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$Grid,
							_p22,
							{
								ctor: '::',
								_0: alignGridHorizontal(_p20._0._0),
								_1: _p21
							});
					} else {
						return A2(
							_mdgriffith$style_elements$Style_Internal_Model$Grid,
							_p22,
							{
								ctor: '::',
								_0: alignGridHorizontal(_p20._0._0),
								_1: {
									ctor: '::',
									_0: alignGridVertical(_p20._1._0),
									_1: _p21
								}
							});
					}
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$makePositionable = F2(
	function (attr, pos) {
		var _p23 = attr;
		switch (_p23.ctor) {
			case 'Overflow':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						overflow: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Shrink':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						shrink: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Inline':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{inline: true});
			case 'Expand':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{expand: true});
			case 'Vary':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						variations: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: _p23._0, _1: _p23._1},
							_1: pos.variations
						}
					});
			case 'Height':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						height: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Width':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						width: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Position':
				var _p24 = pos.positioned;
				var currentX = _p24._0;
				var currentY = _p24._1;
				var currentZ = _p24._2;
				var newX = function () {
					var _p25 = _p23._0;
					if (_p25.ctor === 'Nothing') {
						return currentX;
					} else {
						return _elm_lang$core$Maybe$Just(_p25._0);
					}
				}();
				var newY = function () {
					var _p26 = _p23._1;
					if (_p26.ctor === 'Nothing') {
						return currentY;
					} else {
						return _elm_lang$core$Maybe$Just(_p26._0);
					}
				}();
				var newZ = function () {
					var _p27 = _p23._2;
					if (_p27.ctor === 'Nothing') {
						return currentZ;
					} else {
						return _elm_lang$core$Maybe$Just(_p27._0);
					}
				}();
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						positioned: {ctor: '_Tuple3', _0: newX, _1: newY, _2: newZ}
					});
			case 'PositionFrame':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						frame: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'HAlign':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						horizontal: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'VAlign':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						vertical: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Spacing':
				return pos;
			case 'Margin':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						margin: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'PhantomPadding':
				return pos;
			case 'Padding':
				var _p28 = pos.padding;
				var currentTop = _p28._0;
				var currentRight = _p28._1;
				var currentBottom = _p28._2;
				var currentLeft = _p28._3;
				var newTop = function () {
					var _p29 = _p23._0;
					if (_p29.ctor === 'Nothing') {
						return currentTop;
					} else {
						return _elm_lang$core$Maybe$Just(_p29._0);
					}
				}();
				var newRight = function () {
					var _p30 = _p23._1;
					if (_p30.ctor === 'Nothing') {
						return currentRight;
					} else {
						return _elm_lang$core$Maybe$Just(_p30._0);
					}
				}();
				var newBottom = function () {
					var _p31 = _p23._2;
					if (_p31.ctor === 'Nothing') {
						return currentBottom;
					} else {
						return _elm_lang$core$Maybe$Just(_p31._0);
					}
				}();
				var newLeft = function () {
					var _p32 = _p23._3;
					if (_p32.ctor === 'Nothing') {
						return currentLeft;
					} else {
						return _elm_lang$core$Maybe$Just(_p32._0);
					}
				}();
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						padding: {ctor: '_Tuple4', _0: newTop, _1: newRight, _2: newBottom, _3: newLeft}
					});
			case 'Hidden':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{hidden: true});
			case 'Opacity':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						opacity: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'Event':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						attrs: {ctor: '::', _0: _p23._0, _1: pos.attrs}
					});
			case 'InputEvent':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						attrs: {ctor: '::', _0: _p23._0, _1: pos.attrs}
					});
			case 'Attr':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						attrs: {ctor: '::', _0: _p23._0, _1: pos.attrs}
					});
			case 'PointerEvents':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						pointerevents: _elm_lang$core$Maybe$Just(_p23._0)
					});
			case 'GridArea':
				return _elm_lang$core$Native_Utils.update(
					pos,
					{
						gridPosition: _elm_lang$core$Maybe$Just(_p23._0)
					});
			default:
				var _p33 = _mdgriffith$style_elements$Style_Internal_Render_Value$gridPosition(_p23._0);
				if (_p33.ctor === 'Nothing') {
					return _elm_lang$core$Native_Utils.update(
						pos,
						{hidden: true});
				} else {
					return _elm_lang$core$Native_Utils.update(
						pos,
						{
							gridPosition: _elm_lang$core$Maybe$Just(_p33._0)
						});
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$emptyPositionable = {
	inline: false,
	horizontal: _elm_lang$core$Maybe$Nothing,
	vertical: _elm_lang$core$Maybe$Nothing,
	frame: _elm_lang$core$Maybe$Nothing,
	expand: false,
	hidden: false,
	width: _elm_lang$core$Maybe$Nothing,
	height: _elm_lang$core$Maybe$Nothing,
	positioned: {ctor: '_Tuple3', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing},
	margin: _elm_lang$core$Maybe$Nothing,
	padding: {ctor: '_Tuple4', _0: _elm_lang$core$Maybe$Nothing, _1: _elm_lang$core$Maybe$Nothing, _2: _elm_lang$core$Maybe$Nothing, _3: _elm_lang$core$Maybe$Nothing},
	variations: {ctor: '[]'},
	opacity: _elm_lang$core$Maybe$Nothing,
	gridPosition: _elm_lang$core$Maybe$Nothing,
	pointerevents: _elm_lang$core$Maybe$Nothing,
	attrs: {ctor: '[]'},
	shrink: _elm_lang$core$Maybe$Nothing,
	overflow: _elm_lang$core$Maybe$Nothing
};
var _mdgriffith$style_elements$Element_Internal_Render$gather = function (attrs) {
	return A3(_elm_lang$core$List$foldl, _mdgriffith$style_elements$Element_Internal_Render$makePositionable, _mdgriffith$style_elements$Element_Internal_Render$emptyPositionable, attrs);
};
var _mdgriffith$style_elements$Element_Internal_Render$defaultPadding = F2(
	function (_p35, _p34) {
		var _p36 = _p35;
		var _p37 = _p34;
		return {
			ctor: '_Tuple4',
			_0: A2(_elm_lang$core$Maybe$withDefault, _p37._0, _p36._0),
			_1: A2(_elm_lang$core$Maybe$withDefault, _p37._1, _p36._1),
			_2: A2(_elm_lang$core$Maybe$withDefault, _p37._2, _p36._2),
			_3: A2(_elm_lang$core$Maybe$withDefault, _p37._3, _p36._3)
		};
	});
var _mdgriffith$style_elements$Element_Internal_Render$calcPosition = F2(
	function (frame, _p38) {
		var _p39 = _p38;
		var _p46 = _p39._1;
		var _p45 = _p39._0;
		var z = A2(_elm_lang$core$Maybe$withDefault, 0, _p39._2);
		var y = A2(_elm_lang$core$Maybe$withDefault, 0, _p46);
		var x = A2(_elm_lang$core$Maybe$withDefault, 0, _p45);
		var _p40 = frame;
		switch (_p40.ctor) {
			case 'Relative':
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'left',
							_1: A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(x),
								'px')
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'top',
								_1: A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(y),
									'px')
							},
							_1: {ctor: '[]'}
						}
					}
				};
			case 'Screen':
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'position', _1: 'fixed'},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'left',
							_1: A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(x),
								'px')
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'top',
								_1: A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(y),
									'px')
							},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'z-index', _1: '1000'},
								_1: {ctor: '[]'}
							}
						}
					}
				};
			case 'Absolute':
				if (_p40._0.ctor === 'TopLeft') {
					return A2(
						_elm_lang$core$List$filterMap,
						_elm_lang$core$Basics$identity,
						{
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								{ctor: '_Tuple2', _0: 'position', _1: 'absolute'}),
							_1: {
								ctor: '::',
								_0: function () {
									var _p41 = _p45;
									if (_p41.ctor === 'Just') {
										return _elm_lang$core$Maybe$Just(
											{
												ctor: '_Tuple2',
												_0: 'left',
												_1: A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(_p41._0),
													'px')
											});
									} else {
										return _elm_lang$core$Maybe$Nothing;
									}
								}(),
								_1: {
									ctor: '::',
									_0: function () {
										var _p42 = _p46;
										if (_p42.ctor === 'Just') {
											return _elm_lang$core$Maybe$Just(
												{
													ctor: '_Tuple2',
													_0: 'top',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(_p42._0),
														'px')
												});
										} else {
											return _elm_lang$core$Maybe$Nothing;
										}
									}(),
									_1: {ctor: '[]'}
								}
							}
						});
				} else {
					return A2(
						_elm_lang$core$List$filterMap,
						_elm_lang$core$Basics$identity,
						{
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								{ctor: '_Tuple2', _0: 'position', _1: 'absolute'}),
							_1: {
								ctor: '::',
								_0: function () {
									var _p43 = _p45;
									if (_p43.ctor === 'Just') {
										return _elm_lang$core$Maybe$Just(
											{
												ctor: '_Tuple2',
												_0: 'left',
												_1: A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(_p43._0),
													'px')
											});
									} else {
										return _elm_lang$core$Maybe$Nothing;
									}
								}(),
								_1: {
									ctor: '::',
									_0: function () {
										var _p44 = _p46;
										if (_p44.ctor === 'Just') {
											return _elm_lang$core$Maybe$Just(
												{
													ctor: '_Tuple2',
													_0: 'bottom',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(_p44._0),
														'px')
												});
										} else {
											return _elm_lang$core$Maybe$Nothing;
										}
									}(),
									_1: {ctor: '[]'}
								}
							}
						});
				}
			default:
				switch (_p40._0.ctor) {
					case 'Within':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'top',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(y),
										'px')
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'left',
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(x),
											'px')
									},
									_1: {ctor: '[]'}
								}
							}
						};
					case 'Above':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'top',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(y),
										'px')
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'left',
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(x),
											'px')
									},
									_1: {ctor: '[]'}
								}
							}
						};
					case 'Below':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'top',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										'calc(100% + ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(y),
											'px)'))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'left',
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(x),
											'px')
									},
									_1: {ctor: '[]'}
								}
							}
						};
					case 'OnLeft':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'right',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										'calc(100% - ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(x),
											'px)'))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'top',
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(y),
											'px')
									},
									_1: {ctor: '[]'}
								}
							}
						};
					default:
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'position', _1: 'relative'},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'left',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										'calc(100% + ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(x),
											'px)'))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'top',
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(y),
											'px')
									},
									_1: {ctor: '[]'}
								}
							}
						};
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$spacingToMargin = function (attrs) {
	var spaceToMarg = function (a) {
		var _p47 = a;
		if (_p47.ctor === 'Spacing') {
			var _p49 = _p47._1;
			var _p48 = _p47._0;
			return _mdgriffith$style_elements$Element_Internal_Model$Margin(
				{ctor: '_Tuple4', _0: _p49, _1: _p48, _2: _p49, _3: _p48});
		} else {
			return _p47;
		}
	};
	return A2(_elm_lang$core$List$map, spaceToMarg, attrs);
};
var _mdgriffith$style_elements$Element_Internal_Render$normalize = 'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,hr{margin:0;padding:0;border:0;font-size:100%;font:inherit}html{line-height:1;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}em{font-style:italic}strong{font-weight:bold}a{text-decoration:none}input,textarea{border:0}.clearfix:after{content:\"\";display:table;clear:both}';
var _mdgriffith$style_elements$Element_Internal_Render$normalizeFull = function (_p50) {
	return A2(_elm_lang$core$Basics_ops['++'], 'html,body{width:100%;height:100%;}', _mdgriffith$style_elements$Element_Internal_Render$normalize);
};
var _mdgriffith$style_elements$Element_Internal_Render$embed = F2(
	function (full, stylesheet) {
		return A3(
			_elm_lang$html$Html$node,
			'style',
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(
					full ? A2(
						_elm_lang$core$Basics_ops['++'],
						_mdgriffith$style_elements$Element_Internal_Render$normalizeFull(
							{ctor: '_Tuple0'}),
						stylesheet.css) : A2(_elm_lang$core$Basics_ops['++'], _mdgriffith$style_elements$Element_Internal_Render$normalize, stylesheet.css)),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Element_Internal_Render$Parent = F3(
	function (a, b, c) {
		return {parentSpecifiedSpacing: a, layout: b, parentPadding: c};
	});
var _mdgriffith$style_elements$Element_Internal_Render$Positionable = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return {inline: a, horizontal: b, vertical: c, frame: d, expand: e, hidden: f, width: g, height: h, positioned: i, margin: j, padding: k, variations: l, opacity: m, gridPosition: n, pointerevents: o, attrs: p, shrink: q, overflow: r};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast = {ctor: 'FirstAndLast'};
var _mdgriffith$style_elements$Element_Internal_Render$Last = {ctor: 'Last'};
var _mdgriffith$style_elements$Element_Internal_Render$Middle = function (a) {
	return {ctor: 'Middle', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Render$First = {ctor: 'First'};
var _mdgriffith$style_elements$Element_Internal_Render$detectOrder = F2(
	function (list, i) {
		var len = _elm_lang$core$List$length(list);
		return (_elm_lang$core$Native_Utils.eq(i, 0) && _elm_lang$core$Native_Utils.eq(len, 1)) ? _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast : (_elm_lang$core$Native_Utils.eq(i, 0) ? _mdgriffith$style_elements$Element_Internal_Render$First : (_elm_lang$core$Native_Utils.eq(i, len - 1) ? _mdgriffith$style_elements$Element_Internal_Render$Last : _mdgriffith$style_elements$Element_Internal_Render$Middle(i)));
	});
var _mdgriffith$style_elements$Element_Internal_Render$LayoutElement = function (a) {
	return {ctor: 'LayoutElement', _0: a};
};
var _mdgriffith$style_elements$Element_Internal_Render$Single = {ctor: 'Single'};
var _mdgriffith$style_elements$Element_Internal_Render$renderAttributes = F6(
	function (elType, order, maybeElemID, parent, stylesheet, elem) {
		var attributes = function () {
			var _p51 = maybeElemID;
			if (_p51.ctor === 'Nothing') {
				return elem.attrs;
			} else {
				var _p52 = _p51._0;
				return (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$List$length(elem.variations),
					0) > 0) ? {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						A2(stylesheet.variations, _p52, elem.variations)),
					_1: elem.attrs
				} : {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class(
						stylesheet.style(_p52)),
					_1: elem.attrs
				};
			}
		}();
		var defaults = {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'box-sizing', _1: 'border-box'},
			_1: {ctor: '[]'}
		};
		var adjustspacing = function (_p53) {
			var _p54 = _p53;
			var _p63 = _p54._0;
			var _p62 = _p54._1;
			var _p61 = _p54._3;
			var _p60 = _p54._2;
			var onScreen = function () {
				var _p55 = elem.frame;
				if ((_p55.ctor === 'Just') && (_p55._0.ctor === 'Screen')) {
					return true;
				} else {
					return false;
				}
			}();
			var halved = {ctor: '_Tuple4', _0: _p63 / 2, _1: _p62 / 2, _2: _p60 / 2, _3: _p61 / 2};
			if (onScreen) {
				return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0};
			} else {
				var _p56 = parent;
				if (_p56.ctor === 'Nothing') {
					return {ctor: '_Tuple4', _0: _p63, _1: _p62, _2: _p60, _3: _p61};
				} else {
					var _p57 = _p56._0.layout;
					if (_p57.ctor === 'TextLayout') {
						var _p58 = elem.horizontal;
						if (_p58.ctor === 'Nothing') {
							return (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0} : (elem.inline ? {ctor: '_Tuple4', _0: 0, _1: _p62, _2: 0, _3: 0} : {ctor: '_Tuple4', _0: 0, _1: 0, _2: _p60, _3: 0});
						} else {
							if ((!elem.inline) && _elm_lang$core$Native_Utils.eq(elem.frame, _elm_lang$core$Maybe$Nothing)) {
								var _p59 = _p58._0;
								switch (_p59.ctor) {
									case 'Left':
										return _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) ? {ctor: '_Tuple4', _0: 0, _1: _p62, _2: _p60, _3: 0} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast) ? {ctor: '_Tuple4', _0: 0, _1: _p62, _2: 0, _3: 0} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) ? {ctor: '_Tuple4', _0: 0, _1: _p62, _2: 0, _3: 0} : {ctor: '_Tuple4', _0: 0, _1: _p62, _2: _p60, _3: 0}));
									case 'Right':
										return _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) ? {ctor: '_Tuple4', _0: 0, _1: 0, _2: _p60, _3: _p61} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast) ? {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: _p61} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) ? {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: _p61} : {ctor: '_Tuple4', _0: 0, _1: 0, _2: _p60, _3: _p61}));
									default:
										return (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0} : {ctor: '_Tuple4', _0: 0, _1: 0, _2: _p60, _3: 0};
								}
							} else {
								return {ctor: '_Tuple4', _0: _p63, _1: _p62, _2: _p60, _3: _p61};
							}
						}
					} else {
						return halved;
					}
				}
			}
		};
		var spacing = function (attrs) {
			var _p64 = elem.margin;
			if (_p64.ctor === 'Nothing') {
				return attrs;
			} else {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'margin',
						_1: _mdgriffith$style_elements$Style_Internal_Render_Value$box(
							adjustspacing(_p64._0))
					},
					_1: attrs
				};
			}
		};
		var gridPos = function (attrs) {
			var _p65 = elem.gridPosition;
			if (_p65.ctor === 'Nothing') {
				return attrs;
			} else {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'grid-area', _1: _p65._0},
					_1: attrs
				};
			}
		};
		var padding = function (attrs) {
			var paddings = _mdgriffith$style_elements$Element_Internal_Render$renderPadding(elem.padding);
			return (_elm_lang$core$Native_Utils.cmp(
				_elm_lang$core$List$length(paddings),
				0) > 0) ? A2(_elm_lang$core$Basics_ops['++'], paddings, attrs) : attrs;
		};
		var opacity = function (attrs) {
			var _p66 = elem.opacity;
			if (_p66.ctor === 'Nothing') {
				return attrs;
			} else {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'opacity',
						_1: _elm_lang$core$Basics$toString(_p66._0)
					},
					_1: attrs
				};
			}
		};
		var height = function (attrs) {
			var _p67 = elem.height;
			if (_p67.ctor === 'Nothing') {
				return attrs;
			} else {
				var _p72 = _p67._0;
				var _p68 = parent;
				if (_p68.ctor === 'Just') {
					var hundredPercentOrFill = function (x) {
						var _p69 = x;
						switch (_p69.ctor) {
							case 'Percent':
								return _elm_lang$core$Native_Utils.eq(_p69._0, 100);
							case 'Fill':
								return true;
							case 'Calc':
								return _elm_lang$core$Native_Utils.eq(_p69._0, 100);
							default:
								return false;
						}
					};
					var _p70 = A2(
						_elm_lang$core$Maybe$withDefault,
						{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0},
						_p68._0.parentSpecifiedSpacing);
					var topPad = _p70._0;
					var bottomPad = _p70._2;
					var paddingAdjustment = (topPad + bottomPad) / 2;
					var _p71 = _p68._0.layout;
					if (_p71.ctor === 'FlexLayout') {
						switch (_p71._0.ctor) {
							case 'Down':
								return {
									ctor: '::',
									_0: _mdgriffith$style_elements$Style_Internal_Render_Property$flexHeight(_p72),
									_1: attrs
								};
							case 'Up':
								return {
									ctor: '::',
									_0: _mdgriffith$style_elements$Style_Internal_Render_Property$flexHeight(_p72),
									_1: attrs
								};
							case 'GoRight':
								return hundredPercentOrFill(_p72) ? {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'height', _1: 'auto'},
									_1: attrs
								} : {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'height',
										_1: A2(_mdgriffith$style_elements$Style_Internal_Render_Value$parentAdjustedLength, _p72, paddingAdjustment)
									},
									_1: attrs
								};
							default:
								return hundredPercentOrFill(_p72) ? {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'height', _1: 'auto'},
									_1: attrs
								} : {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'height',
										_1: A2(_mdgriffith$style_elements$Style_Internal_Render_Value$parentAdjustedLength, _p72, paddingAdjustment)
									},
									_1: attrs
								};
						}
					} else {
						return {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'height',
								_1: A2(_mdgriffith$style_elements$Style_Internal_Render_Value$parentAdjustedLength, _p72, paddingAdjustment)
							},
							_1: attrs
						};
					}
				} else {
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'height',
							_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(_p72)
						},
						_1: attrs
					};
				}
			}
		};
		var width = function (attrs) {
			var _p73 = elem.width;
			if (_p73.ctor === 'Nothing') {
				return attrs;
			} else {
				var _p77 = _p73._0;
				var _p74 = parent;
				if (_p74.ctor === 'Just') {
					var _p75 = A2(
						_elm_lang$core$Maybe$withDefault,
						{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0},
						_p74._0.parentSpecifiedSpacing);
					var rightPad = _p75._1;
					var leftPad = _p75._3;
					var paddingAdjustment = (rightPad + leftPad) / 2;
					var _p76 = _p74._0.layout;
					_v52_2:
					do {
						if (_p76.ctor === 'FlexLayout') {
							switch (_p76._0.ctor) {
								case 'GoRight':
									return {
										ctor: '::',
										_0: A2(_mdgriffith$style_elements$Style_Internal_Render_Property$flexWidth, _p77, paddingAdjustment),
										_1: attrs
									};
								case 'GoLeft':
									return {
										ctor: '::',
										_0: A2(_mdgriffith$style_elements$Style_Internal_Render_Property$flexWidth, _p77, paddingAdjustment),
										_1: attrs
									};
								default:
									break _v52_2;
							}
						} else {
							break _v52_2;
						}
					} while(false);
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'width',
							_1: A2(_mdgriffith$style_elements$Style_Internal_Render_Value$parentAdjustedLength, _p77, paddingAdjustment)
						},
						_1: attrs
					};
				} else {
					return {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'width',
							_1: _mdgriffith$style_elements$Style_Internal_Render_Value$length(_p77)
						},
						_1: attrs
					};
				}
			}
		};
		var shrink = function (attrs) {
			var _p78 = elem.shrink;
			if (_p78.ctor === 'Just') {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'flex-shrink',
						_1: _elm_lang$core$Basics$toString(_p78._0)
					},
					_1: attrs
				};
			} else {
				var _p79 = parent;
				if (_p79.ctor === 'Nothing') {
					return attrs;
				} else {
					var horizontalOverflow = function () {
						var _p80 = elem.overflow;
						if (_p80.ctor === 'Just') {
							switch (_p80._0.ctor) {
								case 'XAxis':
									return true;
								case 'YAxis':
									return false;
								default:
									return true;
							}
						} else {
							return false;
						}
					}();
					var verticalOverflow = function () {
						var _p81 = elem.overflow;
						if (_p81.ctor === 'Just') {
							switch (_p81._0.ctor) {
								case 'XAxis':
									return false;
								case 'YAxis':
									return true;
								default:
									return true;
							}
						} else {
							return false;
						}
					}();
					var isVertical = function (dir) {
						var _p82 = dir;
						switch (_p82.ctor) {
							case 'Up':
								return true;
							case 'Down':
								return true;
							default:
								return false;
						}
					};
					var isHorizontal = function (dir) {
						var _p83 = dir;
						switch (_p83.ctor) {
							case 'GoRight':
								return true;
							case 'GoLeft':
								return true;
							default:
								return false;
						}
					};
					var isPx = function (x) {
						var _p84 = x;
						if ((_p84.ctor === 'Just') && (_p84._0.ctor === 'Px')) {
							return true;
						} else {
							return false;
						}
					};
					var isPercent = function (x) {
						var _p85 = x;
						if ((_p85.ctor === 'Just') && (_p85._0.ctor === 'Percent')) {
							return true;
						} else {
							return false;
						}
					};
					var _p86 = _p79._0.layout;
					if (_p86.ctor === 'FlexLayout') {
						var _p88 = _p86._0;
						if (isHorizontal(_p88) && isPx(elem.width)) {
							return {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
								_1: attrs
							};
						} else {
							if (isHorizontal(_p88) && isPercent(elem.width)) {
								return {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
									_1: attrs
								};
							} else {
								if (isHorizontal(_p88) && (!_elm_lang$core$Native_Utils.eq(elem.width, _elm_lang$core$Maybe$Nothing))) {
									return {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
										_1: attrs
									};
								} else {
									if (isHorizontal(_p88) && horizontalOverflow) {
										return {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
											_1: attrs
										};
									} else {
										if (isVertical(_p88) && isPx(elem.height)) {
											return {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
												_1: attrs
											};
										} else {
											if (isVertical(_p88) && isPercent(elem.height)) {
												return {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
													_1: attrs
												};
											} else {
												if (isVertical(_p88) && (!_elm_lang$core$Native_Utils.eq(elem.height, _elm_lang$core$Maybe$Nothing))) {
													return {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
														_1: attrs
													};
												} else {
													if (isVertical(_p88) && verticalOverflow) {
														return {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
															_1: attrs
														};
													} else {
														if (isHorizontal(_p88) && _elm_lang$core$Native_Utils.eq(elem.width, _elm_lang$core$Maybe$Nothing)) {
															return {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
																_1: attrs
															};
														} else {
															if (isVertical(_p88) && _elm_lang$core$Native_Utils.eq(elem.height, _elm_lang$core$Maybe$Nothing)) {
																var _p87 = elType;
																if (_p87.ctor === 'Single') {
																	return {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '1'},
																		_1: attrs
																	};
																} else {
																	return {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
																		_1: attrs
																	};
																}
															} else {
																return {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'flex-shrink', _1: '0'},
																	_1: attrs
																};
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					} else {
						return attrs;
					}
				}
			}
		};
		var overflow = function (attrs) {
			var _p89 = elem.overflow;
			if (_p89.ctor === 'Nothing') {
				return attrs;
			} else {
				var _p90 = _p89._0;
				switch (_p90.ctor) {
					case 'XAxis':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'overflow-x', _1: 'auto'},
							_1: attrs
						};
					case 'YAxis':
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'overflow-y', _1: 'auto'},
							_1: attrs
						};
					default:
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'overflow', _1: 'auto'},
							_1: attrs
						};
				}
			}
		};
		var horizontal = function (attrs) {
			var _p91 = elem.horizontal;
			if (_p91.ctor === 'Nothing') {
				return attrs;
			} else {
				var _p98 = _p91._0;
				if (elem.inline && _elm_lang$core$Native_Utils.eq(elType, _mdgriffith$style_elements$Element_Internal_Render$Single)) {
					var _p92 = _p98;
					switch (_p92.ctor) {
						case 'Left':
							return {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'z-index', _1: '1'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
									_1: attrs
								}
							};
						case 'Right':
							return {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'z-index', _1: '1'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'float', _1: 'right'},
									_1: attrs
								}
							};
						case 'Center':
							return attrs;
						default:
							return attrs;
					}
				} else {
					if (elem.inline) {
						return attrs;
					} else {
						if (!_elm_lang$core$Native_Utils.eq(elem.frame, _elm_lang$core$Maybe$Nothing)) {
							var _p93 = _p98;
							switch (_p93.ctor) {
								case 'Left':
									return {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'left', _1: '0'},
										_1: attrs
									};
								case 'Right':
									return {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'right', _1: '0'},
										_1: attrs
									};
								case 'Center':
									return attrs;
								default:
									return attrs;
							}
						} else {
							var _p94 = parent;
							if (_p94.ctor === 'Nothing') {
								return attrs;
							} else {
								var _p95 = _p94._0.layout;
								switch (_p95.ctor) {
									case 'TextLayout':
										var _p96 = _p98;
										switch (_p96.ctor) {
											case 'Left':
												return {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'z-index', _1: '1'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'float', _1: 'left'},
														_1: attrs
													}
												};
											case 'Right':
												return {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'z-index', _1: '1'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'float', _1: 'right'},
														_1: attrs
													}
												};
											case 'Center':
												return attrs;
											default:
												return attrs;
										}
									case 'FlexLayout':
										var _p97 = A2(_mdgriffith$style_elements$Element_Internal_Render$flexboxHorizontalIndividualAlignment, _p95._0, _p98);
										if (_p97.ctor === 'Nothing') {
											return attrs;
										} else {
											return {ctor: '::', _0: _p97._0, _1: attrs};
										}
									default:
										return attrs;
								}
							}
						}
					}
				}
			}
		};
		var vertical = function (attrs) {
			var _p99 = elem.vertical;
			if (_p99.ctor === 'Nothing') {
				return attrs;
			} else {
				var _p104 = _p99._0;
				if (elem.inline && _elm_lang$core$Native_Utils.eq(elType, _mdgriffith$style_elements$Element_Internal_Render$Single)) {
					return attrs;
				} else {
					if (elem.inline) {
						return attrs;
					} else {
						if (!_elm_lang$core$Native_Utils.eq(elem.frame, _elm_lang$core$Maybe$Nothing)) {
							var _p100 = _p104;
							switch (_p100.ctor) {
								case 'Top':
									return {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'top', _1: '0'},
										_1: attrs
									};
								case 'Bottom':
									return {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'bottom', _1: '0'},
										_1: attrs
									};
								default:
									return attrs;
							}
						} else {
							var _p101 = parent;
							if (_p101.ctor === 'Nothing') {
								return attrs;
							} else {
								var _p102 = _p101._0.layout;
								if (_p102.ctor === 'FlexLayout') {
									var _p103 = A2(_mdgriffith$style_elements$Element_Internal_Render$flexboxVerticalIndividualAlignment, _p102._0, _p104);
									if (_p103.ctor === 'Nothing') {
										return attrs;
									} else {
										return {ctor: '::', _0: _p103._0, _1: attrs};
									}
								} else {
									return attrs;
								}
							}
						}
					}
				}
			}
		};
		var passthrough = function (attrs) {
			var _p105 = elem.pointerevents;
			if (_p105.ctor === 'Nothing') {
				return attrs;
			} else {
				if (_p105._0 === false) {
					return {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'pointer-events', _1: 'none'},
						_1: attrs
					};
				} else {
					return {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'pointer-events', _1: 'auto'},
						_1: attrs
					};
				}
			}
		};
		var position = function (attrs) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_mdgriffith$style_elements$Element_Internal_Render$calcPosition,
					A2(_elm_lang$core$Maybe$withDefault, _mdgriffith$style_elements$Element_Internal_Model$Relative, elem.frame),
					elem.positioned),
				attrs);
		};
		var layout = function (attrs) {
			var _p106 = elType;
			if (_p106.ctor === 'Single') {
				return elem.inline ? {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline'},
					_1: attrs
				} : {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
					_1: attrs
				};
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_mdgriffith$style_elements$Style_Internal_Render_Property$layout,
						elem.inline,
						A3(_mdgriffith$style_elements$Element_Internal_Render$alignLayout, elem.horizontal, elem.vertical, _p106._0)),
					attrs);
			}
		};
		if (elem.hidden) {
			return {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'display', _1: 'none'},
						_1: {ctor: '[]'}
					}),
				_1: attributes
			};
		} else {
			if (elem.expand) {
				var expandedProps = function () {
					var _p107 = parent;
					if (_p107.ctor === 'Nothing') {
						return {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'width', _1: '100%'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'height', _1: '100%'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
									_1: {ctor: '[]'}
								}
							}
						};
					} else {
						var _p114 = _p107._0.parentPadding;
						var _p108 = _p107._0.layout;
						switch (_p108.ctor) {
							case 'TextLayout':
								var borders = _elm_lang$core$List$concat(
									{
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) ? {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'border-top-right-radius', _1: '0'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'border-top-left-radius', _1: '0'},
												_1: {ctor: '[]'}
											}
										} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) ? {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'border-bottom-right-radius', _1: '0'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'border-bottom-left-radius', _1: '0'},
												_1: {ctor: '[]'}
											}
										} : (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast) ? {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'border-top-right-radius', _1: '0'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'border-top-left-radius', _1: '0'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'border-bottom-right-radius', _1: '0'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'border-bottom-left-radius', _1: '0'},
														_1: {ctor: '[]'}
													}
												}
											}
										} : {ctor: '[]'})),
										_1: {ctor: '[]'}
									});
								var _p109 = _p114;
								var top = _p109._0;
								var right = _p109._1;
								var bottom = _p109._2;
								var left = _p109._3;
								return A2(
									_elm_lang$core$Basics_ops['++'],
									{
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'width',
											_1: A2(
												_elm_lang$core$Basics_ops['++'],
												'calc(100% + ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(right + left),
													'px'))
										},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'margin-left',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(-1 * left),
														'px')
												},
												_1: {
													ctor: '::',
													_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
														ctor: '_Tuple2',
														_0: 'margin-top',
														_1: A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString(-1 * top),
															'px')
													} : {ctor: '_Tuple2', _0: 'margin-top', _1: '0'},
													_1: {
														ctor: '::',
														_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
															ctor: '_Tuple2',
															_0: 'margin-bottom',
															_1: A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString(-1 * bottom),
																'px')
														} : {ctor: '_Tuple2', _0: 'margin-bottom', _1: '0'},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'padding',
																_1: _mdgriffith$style_elements$Style_Internal_Render_Value$box(
																	A2(_mdgriffith$style_elements$Element_Internal_Render$defaultPadding, elem.padding, _p114))
															},
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									},
									borders);
							case 'FlexLayout':
								var _p110 = function () {
									var _p111 = _p107._0.parentSpecifiedSpacing;
									if (_p111.ctor === 'Nothing') {
										return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0};
									} else {
										return _p111._0;
									}
								}();
								var parentSpaceTop = _p110._0;
								var parentSpaceRight = _p110._1;
								var parentSpaceBottom = _p110._2;
								var parentSpaceLeft = _p110._3;
								var _p112 = _p114;
								var top = _p112._0;
								var right = _p112._1;
								var bottom = _p112._2;
								var left = _p112._3;
								var _p113 = _p108._0;
								switch (_p113.ctor) {
									case 'GoRight':
										return width(
											{
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'height',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														'calc(100% + ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString((top + bottom) - ((parentSpaceTop + parentSpaceBottom) / 2)),
															'px'))
												},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'margin-top',
															_1: A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString((-1 * top) + (parentSpaceTop / 2)),
																'px')
														},
														_1: {
															ctor: '::',
															_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																ctor: '_Tuple2',
																_0: 'margin-left',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(-1 * left),
																	'px')
															} : {
																ctor: '_Tuple2',
																_0: 'margin-left',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(parentSpaceLeft / 2),
																	'px')
															},
															_1: {
																ctor: '::',
																_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																	ctor: '_Tuple2',
																	_0: 'margin-right',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(-1 * right),
																		'px')
																} : {
																	ctor: '_Tuple2',
																	_0: 'margin-right',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(parentSpaceRight / 2),
																		'px')
																},
																_1: {ctor: '[]'}
															}
														}
													}
												}
											});
									case 'GoLeft':
										return width(
											{
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'height',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														'calc(100% + ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString((top + bottom) - ((parentSpaceTop + parentSpaceBottom) / 2)),
															'px'))
												},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'margin-top',
															_1: A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString((-1 * top) + (parentSpaceTop / 2)),
																'px')
														},
														_1: {
															ctor: '::',
															_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																ctor: '_Tuple2',
																_0: 'margin-right',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(-1 * right),
																	'px')
															} : {
																ctor: '_Tuple2',
																_0: 'margin-right',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(parentSpaceRight / 2),
																	'px')
															},
															_1: {
																ctor: '::',
																_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																	ctor: '_Tuple2',
																	_0: 'margin-left',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(-1 * left),
																		'px')
																} : {
																	ctor: '_Tuple2',
																	_0: 'margin-left',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(parentSpaceLeft / 2),
																		'px')
																},
																_1: {ctor: '[]'}
															}
														}
													}
												}
											});
									case 'Up':
										return height(
											{
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'width',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														'calc(100% + ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString((left + right) - ((parentSpaceLeft + parentSpaceRight) / 2)),
															'px'))
												},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'margin-left',
															_1: A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString((-1 * left) + (parentSpaceLeft / 2)),
																'px')
														},
														_1: {
															ctor: '::',
															_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																ctor: '_Tuple2',
																_0: 'margin-bottom',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(-1 * top),
																	'px')
															} : {
																ctor: '_Tuple2',
																_0: 'margin-bottom',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(parentSpaceBottom / 2),
																	'px')
															},
															_1: {
																ctor: '::',
																_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																	ctor: '_Tuple2',
																	_0: 'margin-top',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(-1 * bottom),
																		'px')
																} : {
																	ctor: '_Tuple2',
																	_0: 'margin-top',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(parentSpaceTop / 2),
																		'px')
																},
																_1: {ctor: '[]'}
															}
														}
													}
												}
											});
									default:
										return height(
											{
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'width',
													_1: A2(
														_elm_lang$core$Basics_ops['++'],
														'calc(100% + ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString((left + right) - ((parentSpaceLeft + parentSpaceRight) / 2)),
															'px'))
												},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'margin-left',
															_1: A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString((-1 * left) + (parentSpaceLeft / 2)),
																'px')
														},
														_1: {
															ctor: '::',
															_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$First) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																ctor: '_Tuple2',
																_0: 'margin-top',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(-1 * top),
																	'px')
															} : {
																ctor: '_Tuple2',
																_0: 'margin-top',
																_1: A2(
																	_elm_lang$core$Basics_ops['++'],
																	_elm_lang$core$Basics$toString(parentSpaceTop / 2),
																	'px')
															},
															_1: {
																ctor: '::',
																_0: (_elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$Last) || _elm_lang$core$Native_Utils.eq(order, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast)) ? {
																	ctor: '_Tuple2',
																	_0: 'margin-bottom',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(-1 * bottom),
																		'px')
																} : {
																	ctor: '_Tuple2',
																	_0: 'margin-bottom',
																	_1: A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(parentSpaceBottom / 2),
																		'px')
																},
																_1: {ctor: '[]'}
															}
														}
													}
												}
											});
								}
							default:
								return {ctor: '[]'};
						}
					}
				}();
				return {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'box-sizing', _1: 'border-box'},
							_1: function (_p115) {
								return passthrough(
									gridPos(
										layout(
											spacing(
												opacity(
													shrink(
														padding(
															position(
																overflow(_p115)))))))));
							}(expandedProps)
						}),
					_1: attributes
				};
			} else {
				return {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						function (_p116) {
							return passthrough(
								gridPos(
									layout(
										spacing(
											opacity(
												shrink(
													width(
														height(
															padding(
																horizontal(
																	vertical(
																		position(
																			overflow(_p116)))))))))))));
						}(defaults)),
					_1: attributes
				};
			}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$renderElement = F4(
	function (parent, stylesheet, order, elm) {
		var _p117 = elm;
		switch (_p117.ctor) {
			case 'Empty':
				return _elm_lang$html$Html$text('');
			case 'Raw':
				return _p117._0;
			case 'Spacer':
				var _p121 = _p117._0;
				var forSpacing = function (posAttr) {
					var _p118 = posAttr;
					if (_p118.ctor === 'Spacing') {
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: _p118._0, _1: _p118._1});
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				};
				var _p119 = function () {
					var _p120 = parent;
					if (_p120.ctor === 'Just') {
						return A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0},
							_p120._0.parentSpecifiedSpacing);
					} else {
						return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0};
					}
				}();
				var spacingX = _p119._0;
				var spacingY = _p119._1;
				var inline = {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'width',
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p121 * spacingX),
							'px')
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'height',
							_1: A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p121 * spacingY),
								'px')
						},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'visibility', _1: 'hidden'},
							_1: {ctor: '[]'}
						}
					}
				};
				return A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(inline),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'});
			case 'Text':
				var _p123 = _p117._1;
				var _p122 = _p117._0;
				switch (_p122.ctor) {
					case 'NoDecoration':
						return _elm_lang$html$Html$text(_p123);
					case 'Bold':
						return A2(
							_elm_lang$html$Html$strong,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p123),
								_1: {ctor: '[]'}
							});
					case 'Italic':
						return A2(
							_elm_lang$html$Html$em,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p123),
								_1: {ctor: '[]'}
							});
					case 'Underline':
						return A2(
							_elm_lang$html$Html$u,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p123),
								_1: {ctor: '[]'}
							});
					case 'Strike':
						return A2(
							_elm_lang$html$Html$s,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p123),
								_1: {ctor: '[]'}
							});
					case 'Super':
						return A2(
							_elm_lang$html$Html$sup,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p123),
								_1: {ctor: '[]'}
							});
					default:
						return A2(
							_elm_lang$html$Html$sub,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p123),
								_1: {ctor: '[]'}
							});
				}
			case 'Element':
				var _p134 = _p117._0.child;
				var _p133 = _p117._0.attrs;
				var parentTextLayout = function (layout) {
					var _p124 = layout;
					if (_p124.ctor === 'TextLayout') {
						return true;
					} else {
						return false;
					}
				};
				var attributes = function () {
					var _p125 = parent;
					if (_p125.ctor === 'Nothing') {
						return _mdgriffith$style_elements$Element_Internal_Render$spacingToMargin(_p133);
					} else {
						var _p131 = _p125._0;
						var _p126 = _p131.parentSpecifiedSpacing;
						if (_p126.ctor === 'Nothing') {
							return (parentTextLayout(_p131.layout) || A2(
								_elm_lang$core$List$any,
								F2(
									function (x, y) {
										return _elm_lang$core$Native_Utils.eq(x, y);
									})(_mdgriffith$style_elements$Element_Internal_Model$Inline),
								_p133)) ? _mdgriffith$style_elements$Element_Internal_Render$spacingToMargin(_p133) : _p133;
						} else {
							var _p130 = _p126._0._0;
							var _p129 = _p126._0._1;
							var _p128 = _p126._0._3;
							var _p127 = _p126._0._2;
							return (parentTextLayout(_p131.layout) || A2(
								_elm_lang$core$List$any,
								F2(
									function (x, y) {
										return _elm_lang$core$Native_Utils.eq(x, y);
									})(_mdgriffith$style_elements$Element_Internal_Model$Inline),
								_p133)) ? {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Margin(
									{ctor: '_Tuple4', _0: _p130, _1: _p129, _2: _p127, _3: _p128}),
								_1: _mdgriffith$style_elements$Element_Internal_Render$spacingToMargin(_p133)
							} : {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Margin(
									{ctor: '_Tuple4', _0: _p130, _1: _p129, _2: _p127, _3: _p128}),
								_1: _p133
							};
						}
					}
				}();
				var htmlAttrs = A6(
					_mdgriffith$style_elements$Element_Internal_Render$renderAttributes,
					_mdgriffith$style_elements$Element_Internal_Render$Single,
					order,
					_p117._0.style,
					parent,
					stylesheet,
					_mdgriffith$style_elements$Element_Internal_Render$gather(attributes));
				var childHtml = function () {
					var _p132 = _p117._0.absolutelyPositioned;
					if (_p132.ctor === 'Nothing') {
						return {
							ctor: '::',
							_0: A4(_mdgriffith$style_elements$Element_Internal_Render$renderElement, _elm_lang$core$Maybe$Nothing, stylesheet, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast, _p134),
							_1: {ctor: '[]'}
						};
					} else {
						return A2(
							_elm_lang$core$List$map,
							A3(_mdgriffith$style_elements$Element_Internal_Render$renderElement, _elm_lang$core$Maybe$Nothing, stylesheet, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast),
							{ctor: '::', _0: _p134, _1: _p132._0});
					}
				}();
				return A3(_elm_lang$html$Html$node, _p117._0.node, htmlAttrs, childHtml);
			default:
				var _p156 = _p117._0.node;
				var _p155 = _p117._0.layout;
				var _p154 = _p117._0.attrs;
				var isFlexbox = function (layout) {
					var _p135 = layout;
					if (_p135.ctor === 'FlexLayout') {
						return true;
					} else {
						return false;
					}
				};
				var adjacentFlexboxCorrection = function (htmlNode) {
					var _p136 = parent;
					if (_p136.ctor === 'Nothing') {
						return htmlNode;
					} else {
						return (isFlexbox(_p136._0.layout) && isFlexbox(_p155)) ? htmlNode : htmlNode;
					}
				};
				var findSpacing = function (posAttr) {
					var _p137 = posAttr;
					if (_p137.ctor === 'Spacing') {
						var _p139 = _p137._1;
						var _p138 = _p137._0;
						return _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple4', _0: _p139, _1: _p138, _2: _p139, _3: _p138});
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				};
				var forSpacing = function (_p140) {
					return function (x) {
						return !_elm_lang$core$Native_Utils.eq(x, _elm_lang$core$Maybe$Nothing);
					}(
						findSpacing(_p140));
				};
				var _p141 = A2(_elm_lang$core$List$partition, forSpacing, _p154);
				var spacing = _p141._0;
				var forPadding = function (posAttr) {
					var _p142 = posAttr;
					switch (_p142.ctor) {
						case 'Padding':
							return _elm_lang$core$Maybe$Just(
								A2(
									_mdgriffith$style_elements$Element_Internal_Render$defaultPadding,
									{ctor: '_Tuple4', _0: _p142._0, _1: _p142._1, _2: _p142._2, _3: _p142._3},
									{ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0}));
						case 'PhantomPadding':
							return _elm_lang$core$Maybe$Just(_p142._0);
						default:
							return _elm_lang$core$Maybe$Nothing;
					}
				};
				var clearfix = function (attrs) {
					var _p143 = _p155;
					if (_p143.ctor === 'TextLayout') {
						return _p143._0 ? {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('clearfix'),
							_1: attrs
						} : attrs;
					} else {
						return attrs;
					}
				};
				var attributes = function () {
					var _p144 = parent;
					if (_p144.ctor === 'Nothing') {
						return _p154;
					} else {
						var _p145 = _p144._0.parentSpecifiedSpacing;
						if (_p145.ctor === 'Nothing') {
							return _p154;
						} else {
							return {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$Margin(_p145._0),
								_1: _p154
							};
						}
					}
				}();
				var padding = function () {
					var _p146 = _elm_lang$core$List$head(
						A2(_elm_lang$core$List$filterMap, forPadding, attributes));
					if (_p146.ctor === 'Nothing') {
						return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0};
					} else {
						return _p146._0;
					}
				}();
				var inherit = {
					parentSpecifiedSpacing: _elm_lang$core$List$head(
						A2(_elm_lang$core$List$filterMap, findSpacing, _p154)),
					layout: _p155,
					parentPadding: padding
				};
				var htmlAttrs = clearfix(
					A6(
						_mdgriffith$style_elements$Element_Internal_Render$renderAttributes,
						_mdgriffith$style_elements$Element_Internal_Render$LayoutElement(_p155),
						order,
						_p117._0.style,
						parent,
						stylesheet,
						_mdgriffith$style_elements$Element_Internal_Render$gather(attributes)));
				var _p147 = A2(
					_elm_lang$core$List$partition,
					function (attr) {
						return _elm_lang$core$Native_Utils.eq(
							attr,
							_mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Center)) || _elm_lang$core$Native_Utils.eq(
							attr,
							_mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$VerticalCenter));
					},
					_p154);
				var centeredProps = _p147._0;
				var others = _p147._1;
				var _p148 = _p117._0.children;
				if (_p148.ctor === 'Normal') {
					var _p150 = _p148._0;
					var childHtml = A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (i, child) {
								return A4(
									_mdgriffith$style_elements$Element_Internal_Render$renderElement,
									_elm_lang$core$Maybe$Just(inherit),
									stylesheet,
									A2(_mdgriffith$style_elements$Element_Internal_Render$detectOrder, _p150, i),
									child);
							}),
						_p150);
					var allChildren = function () {
						var _p149 = _p117._0.absolutelyPositioned;
						if (_p149.ctor === 'Nothing') {
							return childHtml;
						} else {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								childHtml,
								A2(
									_elm_lang$core$List$map,
									A3(_mdgriffith$style_elements$Element_Internal_Render$renderElement, _elm_lang$core$Maybe$Nothing, stylesheet, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast),
									_p149._0));
						}
					}();
					return adjacentFlexboxCorrection(
						A3(_elm_lang$html$Html$node, _p156, htmlAttrs, allChildren));
				} else {
					var _p153 = _p148._0;
					var childHtml = A2(
						_elm_lang$core$List$indexedMap,
						F2(
							function (i, _p151) {
								var _p152 = _p151;
								return {
									ctor: '_Tuple2',
									_0: _p152._0,
									_1: A4(
										_mdgriffith$style_elements$Element_Internal_Render$renderElement,
										_elm_lang$core$Maybe$Just(inherit),
										stylesheet,
										A2(_mdgriffith$style_elements$Element_Internal_Render$detectOrder, _p153, i),
										_p152._1)
								};
							}),
						_p153);
					return adjacentFlexboxCorrection(
						A3(_elm_lang$html$Html_Keyed$node, _p156, htmlAttrs, childHtml));
				}
		}
	});
var _mdgriffith$style_elements$Element_Internal_Render$render = F2(
	function (stylesheet, elm) {
		var _p157 = _mdgriffith$style_elements$Element_Internal_Adjustments$apply(elm);
		var adjusted = _p157._0;
		var onScreen = _p157._1;
		var fixedScreenElements = function () {
			var _p158 = onScreen;
			if (_p158.ctor === 'Nothing') {
				return {ctor: '[]'};
			} else {
				return A2(
					_elm_lang$core$List$map,
					A3(_mdgriffith$style_elements$Element_Internal_Render$renderElement, _elm_lang$core$Maybe$Nothing, stylesheet, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast),
					_p158._0);
			}
		}();
		return {
			ctor: '::',
			_0: A4(_mdgriffith$style_elements$Element_Internal_Render$renderElement, _elm_lang$core$Maybe$Nothing, stylesheet, _mdgriffith$style_elements$Element_Internal_Render$FirstAndLast, adjusted),
			_1: fixedScreenElements
		};
	});
var _mdgriffith$style_elements$Element_Internal_Render$viewport = F2(
	function (stylesheet, elm) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('style-elements-root'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'width', _1: '100%'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'height', _1: '100%'},
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(_mdgriffith$style_elements$Element_Internal_Render$embed, true, stylesheet),
				_1: A2(_mdgriffith$style_elements$Element_Internal_Render$render, stylesheet, elm)
			});
	});
var _mdgriffith$style_elements$Element_Internal_Render$root = F2(
	function (stylesheet, elm) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('style-elements-root'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(_mdgriffith$style_elements$Element_Internal_Render$embed, false, stylesheet),
				_1: A2(_mdgriffith$style_elements$Element_Internal_Render$render, stylesheet, elm)
			});
	});

var _mdgriffith$style_elements$Element$map = _mdgriffith$style_elements$Element_Internal_Model$mapMsg;
var _mdgriffith$style_elements$Element$responsive = F3(
	function (a, _p1, _p0) {
		var _p2 = _p1;
		var _p7 = _p2._0;
		var _p6 = _p2._1;
		var _p3 = _p0;
		var _p5 = _p3._0;
		var _p4 = _p3._1;
		if (_elm_lang$core$Native_Utils.cmp(a, _p7) < 1) {
			return _p5;
		} else {
			if (_elm_lang$core$Native_Utils.cmp(a, _p6) > -1) {
				return _p4;
			} else {
				var deltaA = (a - _p7) / (_p6 - _p7);
				return (deltaA * (_p4 - _p5)) + _p5;
			}
		}
	});
var _mdgriffith$style_elements$Element$classifyDevice = function (_p8) {
	var _p9 = _p8;
	var _p11 = _p9.width;
	var _p10 = _p9.height;
	return {
		width: _p11,
		height: _p10,
		phone: _elm_lang$core$Native_Utils.cmp(_p11, 600) < 1,
		tablet: (_elm_lang$core$Native_Utils.cmp(_p11, 600) > 0) && (_elm_lang$core$Native_Utils.cmp(_p11, 1200) < 1),
		desktop: (_elm_lang$core$Native_Utils.cmp(_p11, 1200) > 0) && (_elm_lang$core$Native_Utils.cmp(_p11, 1800) < 1),
		bigDesktop: _elm_lang$core$Native_Utils.cmp(_p11, 1800) > 0,
		portrait: _elm_lang$core$Native_Utils.cmp(_p11, _p10) > 0
	};
};
var _mdgriffith$style_elements$Element$embed = function (sheet) {
	return A2(_mdgriffith$style_elements$Element_Internal_Render$embed, false, sheet);
};
var _mdgriffith$style_elements$Element$root = _mdgriffith$style_elements$Element_Internal_Render$root;
var _mdgriffith$style_elements$Element$render = F2(
	function (stylesheet, el) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			A2(_mdgriffith$style_elements$Element_Internal_Render$render, stylesheet, el));
	});
var _mdgriffith$style_elements$Element$embedStylesheet = function (sheet) {
	return A2(_mdgriffith$style_elements$Element_Internal_Render$embed, false, sheet);
};
var _mdgriffith$style_elements$Element$toHtml = F2(
	function (stylesheet, el) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			A2(_mdgriffith$style_elements$Element_Internal_Render$render, stylesheet, el));
	});
var _mdgriffith$style_elements$Element$viewport = _mdgriffith$style_elements$Element_Internal_Render$viewport;
var _mdgriffith$style_elements$Element$layout = _mdgriffith$style_elements$Element_Internal_Render$root;
var _mdgriffith$style_elements$Element$onLeft = F2(
	function (nearbys, parent) {
		var position = F2(
			function (el, p) {
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addChild,
					p,
					A2(
						_mdgriffith$style_elements$Element_Internal_Modify$removeAttrs,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Right),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Left),
								_1: {ctor: '[]'}
							}
						},
						A2(
							_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
							_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
								_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$OnLeft)),
							el)));
			});
		return A3(_elm_lang$core$List$foldl, position, parent, nearbys);
	});
var _mdgriffith$style_elements$Element$onRight = F2(
	function (nearbys, parent) {
		var position = F2(
			function (el, p) {
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addChild,
					p,
					A2(
						_mdgriffith$style_elements$Element_Internal_Modify$removeAttrs,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Right),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$HAlign(_mdgriffith$style_elements$Element_Internal_Model$Left),
								_1: {ctor: '[]'}
							}
						},
						A2(
							_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
							_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
								_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$OnRight)),
							el)));
			});
		return A3(_elm_lang$core$List$foldl, position, parent, nearbys);
	});
var _mdgriffith$style_elements$Element$below = F2(
	function (nearbys, parent) {
		var position = F2(
			function (el, p) {
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addChild,
					p,
					A2(
						_mdgriffith$style_elements$Element_Internal_Modify$removeAttrs,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Top),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Bottom),
								_1: {ctor: '[]'}
							}
						},
						A2(
							_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
							_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
								_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Below)),
							el)));
			});
		return A3(_elm_lang$core$List$foldl, position, parent, nearbys);
	});
var _mdgriffith$style_elements$Element$above = F2(
	function (nearbys, parent) {
		var position = F2(
			function (el, p) {
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addChild,
					p,
					A2(
						_mdgriffith$style_elements$Element_Internal_Modify$removeAttrs,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Top),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$VAlign(_mdgriffith$style_elements$Element_Internal_Model$Bottom),
								_1: {ctor: '[]'}
							}
						},
						A2(
							_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
							_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
								_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Above)),
							el)));
			});
		return A3(_elm_lang$core$List$foldl, position, parent, nearbys);
	});
var _mdgriffith$style_elements$Element$within = F2(
	function (nearbys, parent) {
		var position = F2(
			function (el, p) {
				return A2(
					_mdgriffith$style_elements$Element_Internal_Modify$addChild,
					p,
					A2(
						_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
						_mdgriffith$style_elements$Element_Internal_Model$PositionFrame(
							_mdgriffith$style_elements$Element_Internal_Model$Nearby(_mdgriffith$style_elements$Element_Internal_Model$Within)),
						el));
			});
		return A3(_elm_lang$core$List$foldl, position, parent, nearbys);
	});
var _mdgriffith$style_elements$Element$link = F2(
	function (src, el) {
		return A2(
			_mdgriffith$style_elements$Element_Internal_Modify$addAttrList,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
					_elm_lang$html$Html_Attributes$href(src)),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$rel('noopener noreferrer')),
					_1: {ctor: '[]'}
				}
			},
			A2(_mdgriffith$style_elements$Element_Internal_Modify$setNode, 'a', el));
	});
var _mdgriffith$style_elements$Element$spanAll = function (name) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Named,
		_mdgriffith$style_elements$Style_Internal_Model$SpanAll,
		_elm_lang$core$Maybe$Just(name));
};
var _mdgriffith$style_elements$Element$span = F2(
	function (i, name) {
		return A2(
			_mdgriffith$style_elements$Style_Internal_Model$Named,
			_mdgriffith$style_elements$Style_Internal_Model$SpanJust(i),
			_elm_lang$core$Maybe$Just(name));
	});
var _mdgriffith$style_elements$Element$named = F2(
	function (name, el) {
		return _mdgriffith$style_elements$Element_Internal_Model$NamedOnGrid(
			A2(
				_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
				_mdgriffith$style_elements$Element_Internal_Model$GridArea(name),
				el));
	});
var _mdgriffith$style_elements$Element$area = F2(
	function (box, el) {
		return _mdgriffith$style_elements$Element_Internal_Model$OnGrid(
			A2(
				_mdgriffith$style_elements$Element_Internal_Modify$addAttr,
				_mdgriffith$style_elements$Element_Internal_Model$GridCoords(
					_mdgriffith$style_elements$Style_Internal_Model$GridPosition(box)),
				el));
	});
var _mdgriffith$style_elements$Element$namedGrid = F4(
	function (style, template, attrs, children) {
		var forSpacing = function (attr) {
			var _p12 = attr;
			if (_p12.ctor === 'Spacing') {
				return true;
			} else {
				return false;
			}
		};
		var _p13 = A2(_elm_lang$core$List$partition, forSpacing, attrs);
		var spacing = _p13._0;
		var notSpacingAttrs = _p13._1;
		var gridAttributes = function () {
			var _p14 = _elm_lang$core$List$head(
				_elm_lang$core$List$reverse(spacing));
			if (_p14.ctor === 'Nothing') {
				return {ctor: '[]'};
			} else {
				if (_p14._0.ctor === 'Spacing') {
					return {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Style_Internal_Model$GridGap, _p14._0._0, _p14._0._1),
						_1: {ctor: '[]'}
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}();
		var prepare = function (el) {
			return _mdgriffith$style_elements$Element_Internal_Model$Normal(
				A2(
					_elm_lang$core$List$map,
					function (_p15) {
						var _p16 = _p15;
						return _p16._0;
					},
					el));
		};
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$Grid,
					_mdgriffith$style_elements$Style_Internal_Model$NamedGridTemplate(template),
					gridAttributes),
				attrs: notSpacingAttrs,
				children: prepare(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$grid = F4(
	function (style, template, attrs, children) {
		var forSpacing = function (attr) {
			var _p17 = attr;
			if (_p17.ctor === 'Spacing') {
				return true;
			} else {
				return false;
			}
		};
		var _p18 = A2(_elm_lang$core$List$partition, forSpacing, attrs);
		var spacing = _p18._0;
		var notSpacingAttrs = _p18._1;
		var gridAttributes = function () {
			var _p19 = _elm_lang$core$List$head(
				_elm_lang$core$List$reverse(spacing));
			if (_p19.ctor === 'Nothing') {
				return {ctor: '[]'};
			} else {
				if (_p19._0.ctor === 'Spacing') {
					return {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Style_Internal_Model$GridGap, _p19._0._0, _p19._0._1),
						_1: {ctor: '[]'}
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}();
		var prepare = function (el) {
			return _mdgriffith$style_elements$Element_Internal_Model$Normal(
				A2(
					_elm_lang$core$List$map,
					function (_p20) {
						var _p21 = _p20;
						return _p21._0;
					},
					el));
		};
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$Grid,
					_mdgriffith$style_elements$Style_Internal_Model$GridTemplate(template),
					gridAttributes),
				attrs: notSpacingAttrs,
				children: prepare(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$table = F3(
	function (style, attrs, rows) {
		var children = _elm_lang$core$List$concat(
			A2(
				_elm_lang$core$List$indexedMap,
				F2(
					function (row, columns) {
						return A2(
							_elm_lang$core$List$indexedMap,
							F2(
								function (col, content) {
									return A2(
										_mdgriffith$style_elements$Element$area,
										{
											start: {ctor: '_Tuple2', _0: row, _1: col},
											width: 1,
											height: 1
										},
										content);
								}),
							columns);
					}),
				rows));
		return A4(
			_mdgriffith$style_elements$Element$grid,
			style,
			{
				columns: {ctor: '[]'},
				rows: {ctor: '[]'}
			},
			attrs,
			children);
	});
var _mdgriffith$style_elements$Element$wrappedColumn = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$Down,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Internal_Model$Wrap(true),
						_1: {ctor: '[]'}
					}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$wrappedRow = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$GoRight,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Internal_Model$Wrap(true),
						_1: {ctor: '[]'}
					}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$column = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$Down,
					{ctor: '[]'}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$row = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$GoRight,
					{ctor: '[]'}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$paragraph = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'p',
				style: _elm_lang$core$Maybe$Just(style),
				layout: _mdgriffith$style_elements$Style_Internal_Model$TextLayout(false),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
					A2(
						_elm_lang$core$List$map,
						_mdgriffith$style_elements$Element_Internal_Modify$addAttrToNonText(_mdgriffith$style_elements$Element_Internal_Model$Inline),
						children)),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$textLayout = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: _mdgriffith$style_elements$Style_Internal_Model$TextLayout(true),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Normal(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$full = F3(
	function (elem, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(elem),
				attrs: {ctor: '::', _0: _mdgriffith$style_elements$Element_Internal_Model$Expand, _1: attrs},
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$inputText = F3(
	function (elem, attrs, content) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'input',
				style: _elm_lang$core$Maybe$Just(elem),
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$type_('text'),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$value(content),
						_1: attrs
					}
				},
				child: _mdgriffith$style_elements$Element_Internal_Model$Empty,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$select = F4(
	function (group, style, attributes, buttons) {
		var toChild = function (_p22) {
			var _p23 = _p22;
			return A2(
				_mdgriffith$style_elements$Element_Internal_Modify$addAttrList,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$value(_p23._0),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$selected(_p23._1),
						_1: {ctor: '[]'}
					}
				},
				A2(_mdgriffith$style_elements$Element_Internal_Modify$setNode, 'option', _p23._2));
		};
		return A2(
			_mdgriffith$style_elements$Element_Internal_Modify$setNode,
			'select',
			A3(
				_mdgriffith$style_elements$Element$column,
				style,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$name(group),
					_1: attributes
				},
				A2(_elm_lang$core$List$map, toChild, buttons)));
	});
var _mdgriffith$style_elements$Element$radio = F4(
	function (group, style, attributes, buttons) {
		var toChild = function (_p24) {
			var _p25 = _p24;
			var _p28 = _p25._2;
			var literalLabel = _mdgriffith$style_elements$Element_Internal_Modify$removeStyle(
				_mdgriffith$style_elements$Element_Internal_Modify$removeAllAttrs(
					_mdgriffith$style_elements$Element_Internal_Modify$getChild(_p28)));
			var forInputEvents = function (attr) {
				var _p26 = attr;
				if (_p26.ctor === 'InputEvent') {
					return true;
				} else {
					return false;
				}
			};
			var attrs = _mdgriffith$style_elements$Element_Internal_Modify$getAttrs(_p28);
			var _p27 = A2(_elm_lang$core$List$partition, forInputEvents, attrs);
			var inputEvents = _p27._0;
			var nonInputEventAttrs = _p27._1;
			var rune = _mdgriffith$style_elements$Element_Internal_Modify$removeStyle(
				_mdgriffith$style_elements$Element_Internal_Modify$removeContent(
					A2(
						_mdgriffith$style_elements$Element_Internal_Modify$addAttrList,
						A2(
							_elm_lang$core$Basics_ops['++'],
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$type_('radio'),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$name(group),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Attributes$value(_p25._0),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Element_Attributes$checked(_p25._1),
											_1: {ctor: '[]'}
										}
									}
								}
							},
							inputEvents),
						A2(_mdgriffith$style_elements$Element_Internal_Modify$setNode, 'input', _p28))));
			var style = _mdgriffith$style_elements$Element_Internal_Modify$getStyle(_p28);
			return _mdgriffith$style_elements$Element_Internal_Model$Layout(
				{
					node: 'layout',
					style: style,
					layout: A2(
						_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
						_mdgriffith$style_elements$Style_Internal_Model$GoRight,
						{ctor: '[]'}),
					attrs: nonInputEventAttrs,
					children: _mdgriffith$style_elements$Element_Internal_Model$Normal(
						{
							ctor: '::',
							_0: rune,
							_1: {
								ctor: '::',
								_0: literalLabel,
								_1: {ctor: '[]'}
							}
						}),
					absolutelyPositioned: _elm_lang$core$Maybe$Nothing
				});
		};
		return A3(
			_mdgriffith$style_elements$Element$column,
			style,
			attributes,
			A2(_elm_lang$core$List$map, toChild, buttons));
	});
var _mdgriffith$style_elements$Element$form = _mdgriffith$style_elements$Element_Internal_Modify$setNode('form');
var _mdgriffith$style_elements$Element$video = _mdgriffith$style_elements$Element_Internal_Modify$setNode('video');
var _mdgriffith$style_elements$Element$audio = _mdgriffith$style_elements$Element_Internal_Modify$setNode('audio');
var _mdgriffith$style_elements$Element$iframe = _mdgriffith$style_elements$Element_Internal_Modify$setNode('iframe');
var _mdgriffith$style_elements$Element$canvas = _mdgriffith$style_elements$Element_Internal_Modify$setNode('canvas');
var _mdgriffith$style_elements$Element$button = _mdgriffith$style_elements$Element_Internal_Modify$setNode('button');
var _mdgriffith$style_elements$Element$aside = _mdgriffith$style_elements$Element_Internal_Modify$setNode('aside');
var _mdgriffith$style_elements$Element$article = _mdgriffith$style_elements$Element_Internal_Modify$setNode('article');
var _mdgriffith$style_elements$Element$nav = _mdgriffith$style_elements$Element_Internal_Modify$setNode('nav');
var _mdgriffith$style_elements$Element$section = _mdgriffith$style_elements$Element_Internal_Modify$setNode('section');
var _mdgriffith$style_elements$Element$header = _mdgriffith$style_elements$Element_Internal_Modify$setNode('header');
var _mdgriffith$style_elements$Element$node = function (str) {
	return _mdgriffith$style_elements$Element_Internal_Modify$setNode(str);
};
var _mdgriffith$style_elements$Element$label = F4(
	function (elem, attrs, label, input) {
		var containedLabel = function () {
			var _p29 = label;
			if (_p29.ctor === 'Text') {
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: {ctor: '[]'},
						child: A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p29._0, _p29._1),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
			} else {
				return _p29;
			}
		}();
		return A2(
			_mdgriffith$style_elements$Element$node,
			'label',
			A3(
				_mdgriffith$style_elements$Element$column,
				elem,
				attrs,
				{
					ctor: '::',
					_0: label,
					_1: {
						ctor: '::',
						_0: input,
						_1: {ctor: '[]'}
					}
				}));
	});
var _mdgriffith$style_elements$Element$labelBelow = F4(
	function (elem, attrs, label, input) {
		var containedLabel = function () {
			var _p30 = label;
			if (_p30.ctor === 'Text') {
				return _mdgriffith$style_elements$Element_Internal_Model$Element(
					{
						node: 'div',
						style: _elm_lang$core$Maybe$Nothing,
						attrs: {ctor: '[]'},
						child: A2(_mdgriffith$style_elements$Element_Internal_Model$Text, _p30._0, _p30._1),
						absolutelyPositioned: _elm_lang$core$Maybe$Nothing
					});
			} else {
				return _p30;
			}
		}();
		return A2(
			_mdgriffith$style_elements$Element$node,
			'label',
			A3(
				_mdgriffith$style_elements$Element$column,
				elem,
				attrs,
				{
					ctor: '::',
					_0: input,
					_1: {
						ctor: '::',
						_0: label,
						_1: {ctor: '[]'}
					}
				}));
	});
var _mdgriffith$style_elements$Element$html = _mdgriffith$style_elements$Element_Internal_Model$Raw;
var _mdgriffith$style_elements$Element$image = F4(
	function (src, style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'img',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$src(src)),
					_1: attrs
				},
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$spacer = _mdgriffith$style_elements$Element_Internal_Model$Spacer;
var _mdgriffith$style_elements$Element$circle = F4(
	function (radius, style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'border-radius',
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(radius),
										'px')
								},
								_1: {ctor: '[]'}
							})),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
							_mdgriffith$style_elements$Style_Internal_Model$Px(2 * radius)),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
								_mdgriffith$style_elements$Style_Internal_Model$Px(2 * radius)),
							_1: attrs
						}
					}
				},
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$el = F3(
	function (style, attrs, child) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: attrs,
				child: child,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$super = _mdgriffith$style_elements$Element_Internal_Model$Text(_mdgriffith$style_elements$Element_Internal_Model$Super);
var _mdgriffith$style_elements$Element$sub = _mdgriffith$style_elements$Element_Internal_Model$Text(_mdgriffith$style_elements$Element_Internal_Model$Sub);
var _mdgriffith$style_elements$Element$underline = _mdgriffith$style_elements$Element_Internal_Model$Text(_mdgriffith$style_elements$Element_Internal_Model$Underline);
var _mdgriffith$style_elements$Element$strike = _mdgriffith$style_elements$Element_Internal_Model$Text(_mdgriffith$style_elements$Element_Internal_Model$Strike);
var _mdgriffith$style_elements$Element$italic = _mdgriffith$style_elements$Element_Internal_Model$Text(_mdgriffith$style_elements$Element_Internal_Model$Italic);
var _mdgriffith$style_elements$Element$bold = _mdgriffith$style_elements$Element_Internal_Model$Text(_mdgriffith$style_elements$Element_Internal_Model$Bold);
var _mdgriffith$style_elements$Element$text = _mdgriffith$style_elements$Element_Internal_Model$Text(_mdgriffith$style_elements$Element_Internal_Model$NoDecoration);
var _mdgriffith$style_elements$Element$textArea = F3(
	function (elem, attrs, content) {
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'textarea',
				style: _elm_lang$core$Maybe$Just(elem),
				attrs: attrs,
				child: _mdgriffith$style_elements$Element$text(content),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$empty = _mdgriffith$style_elements$Element_Internal_Model$Empty;
var _mdgriffith$style_elements$Element$hairline = function (style) {
	return _mdgriffith$style_elements$Element_Internal_Model$Element(
		{
			node: 'hr',
			style: _elm_lang$core$Maybe$Just(style),
			attrs: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
					_mdgriffith$style_elements$Style_Internal_Model$Px(1)),
				_1: {ctor: '[]'}
			},
			child: _mdgriffith$style_elements$Element$empty,
			absolutelyPositioned: _elm_lang$core$Maybe$Nothing
		});
};
var _mdgriffith$style_elements$Element$break = _mdgriffith$style_elements$Element_Internal_Model$Element(
	{
		node: 'br',
		style: _elm_lang$core$Maybe$Nothing,
		attrs: {ctor: '[]'},
		child: _mdgriffith$style_elements$Element$empty,
		absolutelyPositioned: _elm_lang$core$Maybe$Nothing
	});
var _mdgriffith$style_elements$Element$inlineChildren = F4(
	function (node, style, attrs, children) {
		var _p31 = function () {
			var _p32 = children;
			if (_p32.ctor === '[]') {
				return {ctor: '_Tuple2', _0: _mdgriffith$style_elements$Element$empty, _1: _elm_lang$core$Maybe$Nothing};
			} else {
				return {
					ctor: '_Tuple2',
					_0: A2(_mdgriffith$style_elements$Element_Internal_Modify$addAttrToNonText, _mdgriffith$style_elements$Element_Internal_Model$Inline, _p32._0),
					_1: _elm_lang$core$Maybe$Just(
						A2(
							_elm_lang$core$List$map,
							_mdgriffith$style_elements$Element_Internal_Modify$addAttrToNonText(_mdgriffith$style_elements$Element_Internal_Model$Inline),
							_p32._1))
				};
			}
		}();
		var child = _p31._0;
		var others = _p31._1;
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{node: node, style: style, attrs: attrs, child: child, absolutelyPositioned: others});
	});
var _mdgriffith$style_elements$Element$checkbox = F4(
	function (on, style, attrs, label) {
		var forInputEvents = function (attr) {
			var _p33 = attr;
			if (_p33.ctor === 'InputEvent') {
				return true;
			} else {
				return false;
			}
		};
		var _p34 = A2(_elm_lang$core$List$partition, forInputEvents, attrs);
		var events = _p34._0;
		var notInputEvents = _p34._1;
		return _mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'label',
				style: _elm_lang$core$Maybe$Just(style),
				attrs: notInputEvents,
				child: A4(
					_mdgriffith$style_elements$Element$inlineChildren,
					'div',
					_elm_lang$core$Maybe$Nothing,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Element(
							{
								node: 'input',
								style: _elm_lang$core$Maybe$Nothing,
								attrs: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$type_('checkbox'),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Attributes$checked(on),
										_1: events
									}
								},
								child: _mdgriffith$style_elements$Element$empty,
								absolutelyPositioned: _elm_lang$core$Maybe$Nothing
							}),
						_1: {
							ctor: '::',
							_0: label,
							_1: {ctor: '[]'}
						}
					}),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element$when = F2(
	function (bool, elm) {
		return bool ? elm : _mdgriffith$style_elements$Element$empty;
	});
var _mdgriffith$style_elements$Element$whenJust = F2(
	function (maybe, view) {
		var _p35 = maybe;
		if (_p35.ctor === 'Nothing') {
			return _mdgriffith$style_elements$Element$empty;
		} else {
			return view(_p35._0);
		}
	});
var _mdgriffith$style_elements$Element$screen = function (el) {
	return A2(
		_mdgriffith$style_elements$Element$within,
		{
			ctor: '::',
			_0: el,
			_1: {ctor: '[]'}
		},
		_mdgriffith$style_elements$Element_Internal_Model$Element(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Nothing,
				attrs: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Internal_Model$PositionFrame(_mdgriffith$style_elements$Element_Internal_Model$Screen),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Internal_Model$Width(
							A2(_mdgriffith$style_elements$Style_Internal_Model$Calc, 100, 0)),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Internal_Model$Height(
								A2(_mdgriffith$style_elements$Style_Internal_Model$Calc, 100, 0)),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Internal_Model$PointerEvents(false),
								_1: {ctor: '[]'}
							}
						}
					}
				},
				child: _mdgriffith$style_elements$Element$empty,
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			}));
};
var _mdgriffith$style_elements$Element$Grid = F2(
	function (a, b) {
		return {rows: a, columns: b};
	});
var _mdgriffith$style_elements$Element$NamedGrid = F2(
	function (a, b) {
		return {rows: a, columns: b};
	});
var _mdgriffith$style_elements$Element$GridPosition = F3(
	function (a, b, c) {
		return {start: a, width: b, height: c};
	});
var _mdgriffith$style_elements$Element$Device = F7(
	function (a, b, c, d, e, f, g) {
		return {width: a, height: b, phone: c, tablet: d, desktop: e, bigDesktop: f, portrait: g};
	});
var _mdgriffith$style_elements$Element$Option = F3(
	function (a, b, c) {
		return {ctor: 'Option', _0: a, _1: b, _2: c};
	});
var _mdgriffith$style_elements$Element$option = _mdgriffith$style_elements$Element$Option;

var _mdgriffith$style_elements$Element_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _mdgriffith$style_elements$Element_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _mdgriffith$style_elements$Element_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _mdgriffith$style_elements$Element_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _mdgriffith$style_elements$Element_Events$onWithOptions = F3(
	function (event, options, decode) {
		return _mdgriffith$style_elements$Element_Internal_Model$Event(
			A3(_elm_lang$html$Html_Events$onWithOptions, event, options, decode));
	});
var _mdgriffith$style_elements$Element_Events$on = F2(
	function (event, decode) {
		return _mdgriffith$style_elements$Element_Internal_Model$Event(
			A2(_elm_lang$html$Html_Events$on, event, decode));
	});
var _mdgriffith$style_elements$Element_Events$onFocus = function (_p0) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onFocus(_p0));
};
var _mdgriffith$style_elements$Element_Events$onBlur = function (_p1) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onBlur(_p1));
};
var _mdgriffith$style_elements$Element_Events$onSubmit = function (_p2) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onSubmit(_p2));
};
var _mdgriffith$style_elements$Element_Events$onCheck = function (_p3) {
	return _mdgriffith$style_elements$Element_Internal_Model$InputEvent(
		_elm_lang$html$Html_Events$onCheck(_p3));
};
var _mdgriffith$style_elements$Element_Events$onInput = function (_p4) {
	return _mdgriffith$style_elements$Element_Internal_Model$InputEvent(
		_elm_lang$html$Html_Events$onInput(_p4));
};
var _mdgriffith$style_elements$Element_Events$onMouseOut = function (_p5) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseOut(_p5));
};
var _mdgriffith$style_elements$Element_Events$onMouseOver = function (_p6) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseOver(_p6));
};
var _mdgriffith$style_elements$Element_Events$onMouseLeave = function (_p7) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseLeave(_p7));
};
var _mdgriffith$style_elements$Element_Events$onMouseEnter = function (_p8) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseEnter(_p8));
};
var _mdgriffith$style_elements$Element_Events$onMouseUp = function (_p9) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseUp(_p9));
};
var _mdgriffith$style_elements$Element_Events$onMouseDown = function (_p10) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onMouseDown(_p10));
};
var _mdgriffith$style_elements$Element_Events$onDoubleClick = function (_p11) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onDoubleClick(_p11));
};
var _mdgriffith$style_elements$Element_Events$onClick = function (_p12) {
	return _mdgriffith$style_elements$Element_Internal_Model$Event(
		_elm_lang$html$Html_Events$onClick(_p12));
};
var _mdgriffith$style_elements$Element_Events$event = _mdgriffith$style_elements$Element_Internal_Model$Event;
var _mdgriffith$style_elements$Element_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _mdgriffith$style_elements$Element_Keyed$namedGrid = F4(
	function (style, template, attrs, children) {
		var forSpacing = function (attr) {
			var _p0 = attr;
			if (_p0.ctor === 'Spacing') {
				return true;
			} else {
				return false;
			}
		};
		var _p1 = A2(_elm_lang$core$List$partition, forSpacing, attrs);
		var spacing = _p1._0;
		var notSpacingAttrs = _p1._1;
		var gridAttributes = function () {
			var _p2 = _elm_lang$core$List$head(
				_elm_lang$core$List$reverse(spacing));
			if (_p2.ctor === 'Nothing') {
				return {ctor: '[]'};
			} else {
				if (_p2._0.ctor === 'Spacing') {
					return {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Style_Internal_Model$GridGap, _p2._0._0, _p2._0._1),
						_1: {ctor: '[]'}
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}();
		var prepare = function (el) {
			return _mdgriffith$style_elements$Element_Internal_Model$Keyed(
				A2(
					_elm_lang$core$List$map,
					function (_p3) {
						var _p4 = _p3;
						return _p4._0;
					},
					el));
		};
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$Grid,
					_mdgriffith$style_elements$Style_Internal_Model$NamedGridTemplate(template),
					gridAttributes),
				attrs: notSpacingAttrs,
				children: prepare(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element_Keyed$grid = F4(
	function (style, template, attrs, children) {
		var forSpacing = function (attr) {
			var _p5 = attr;
			if (_p5.ctor === 'Spacing') {
				return true;
			} else {
				return false;
			}
		};
		var _p6 = A2(_elm_lang$core$List$partition, forSpacing, attrs);
		var spacing = _p6._0;
		var notSpacingAttrs = _p6._1;
		var gridAttributes = function () {
			var _p7 = _elm_lang$core$List$head(
				_elm_lang$core$List$reverse(spacing));
			if (_p7.ctor === 'Nothing') {
				return {ctor: '[]'};
			} else {
				if (_p7._0.ctor === 'Spacing') {
					return {
						ctor: '::',
						_0: A2(_mdgriffith$style_elements$Style_Internal_Model$GridGap, _p7._0._0, _p7._0._1),
						_1: {ctor: '[]'}
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}();
		var prepare = function (el) {
			return _mdgriffith$style_elements$Element_Internal_Model$Keyed(
				A2(
					_elm_lang$core$List$map,
					function (_p8) {
						var _p9 = _p8;
						return _p9._0;
					},
					el));
		};
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$Grid,
					_mdgriffith$style_elements$Style_Internal_Model$GridTemplate(template),
					gridAttributes),
				attrs: notSpacingAttrs,
				children: prepare(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element_Keyed$wrappedColumn = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$Down,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Internal_Model$Wrap(true),
						_1: {ctor: '[]'}
					}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Keyed(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element_Keyed$wrappedRow = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$GoRight,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Internal_Model$Wrap(true),
						_1: {ctor: '[]'}
					}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Keyed(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element_Keyed$column = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$Down,
					{ctor: '[]'}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Keyed(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});
var _mdgriffith$style_elements$Element_Keyed$row = F3(
	function (style, attrs, children) {
		return _mdgriffith$style_elements$Element_Internal_Model$Layout(
			{
				node: 'div',
				style: _elm_lang$core$Maybe$Just(style),
				layout: A2(
					_mdgriffith$style_elements$Style_Internal_Model$FlexLayout,
					_mdgriffith$style_elements$Style_Internal_Model$GoRight,
					{ctor: '[]'}),
				attrs: attrs,
				children: _mdgriffith$style_elements$Element_Internal_Model$Keyed(children),
				absolutelyPositioned: _elm_lang$core$Maybe$Nothing
			});
	});

var _mdgriffith$style_elements$Style_Border$roundBottomLeft = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-bottom-left-radius',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$roundBottomRight = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-bottom-right-radius',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$roundTopRight = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-top-right-radius',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$roundTopLeft = function (x) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-top-left-radius',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(x),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$rounded = function (box) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-radius',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(box),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$dotted = A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'border-style', 'dotted');
var _mdgriffith$style_elements$Style_Border$dashed = A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'border-style', 'dashed');
var _mdgriffith$style_elements$Style_Border$solid = A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'border-style', 'solid');
var _mdgriffith$style_elements$Style_Border$none = A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'border-width', '0');
var _mdgriffith$style_elements$Style_Border$bottom = function (l) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-bottom-width',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(l),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$top = function (l) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-top-width',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(l),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$right = function (l) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-right-width',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(l),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$left = function (l) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-left-width',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(l),
			'px'));
};
var _mdgriffith$style_elements$Style_Border$all = function (v) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-width',
		_mdgriffith$style_elements$Style_Internal_Render_Value$box(
			{ctor: '_Tuple4', _0: v, _1: v, _2: v, _3: v}));
};

var _mdgriffith$style_elements$Style_Color$placeholder = function (clr) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$PseudoElement,
		'::placeholder',
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Internal_Model$TextColor(clr),
			_1: {
				ctor: '::',
				_0: A2(_mdgriffith$style_elements$Style_Internal_Model$Exact, 'opacity', '1'),
				_1: {ctor: '[]'}
			}
		});
};
var _mdgriffith$style_elements$Style_Color$selection = function (clr) {
	return _mdgriffith$style_elements$Style_Internal_Model$SelectionColor(clr);
};
var _mdgriffith$style_elements$Style_Color$decoration = function (clr) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'text-decoration-color',
		_mdgriffith$style_elements$Style_Internal_Render_Value$color(clr));
};
var _mdgriffith$style_elements$Style_Color$cursor = function (clr) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'cursor-color',
		_mdgriffith$style_elements$Style_Internal_Render_Value$color(clr));
};
var _mdgriffith$style_elements$Style_Color$border = function (clr) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'border-color',
		_mdgriffith$style_elements$Style_Internal_Render_Value$color(clr));
};
var _mdgriffith$style_elements$Style_Color$background = function (clr) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Exact,
		'background-color',
		_mdgriffith$style_elements$Style_Internal_Render_Value$color(clr));
};
var _mdgriffith$style_elements$Style_Color$text = _mdgriffith$style_elements$Style_Internal_Model$TextColor;

var _mdgriffith$style_elements$Style_Font$lowercase = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-transform', 'lowercase');
var _mdgriffith$style_elements$Style_Font$capitalize = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-transform', 'capitalize');
var _mdgriffith$style_elements$Style_Font$uppercase = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-transform', 'uppercase');
var _mdgriffith$style_elements$Style_Font$weight = function (fontWeight) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Font,
		'font-weight',
		_elm_lang$core$Basics$toString(fontWeight));
};
var _mdgriffith$style_elements$Style_Font$light = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'font-weight', '300');
var _mdgriffith$style_elements$Style_Font$bold = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'font-weight', '700');
var _mdgriffith$style_elements$Style_Font$italic = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'font-style', 'italic');
var _mdgriffith$style_elements$Style_Font$strike = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-decoration', 'line-through');
var _mdgriffith$style_elements$Style_Font$underline = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-decoration', 'underline');
var _mdgriffith$style_elements$Style_Font$noWrap = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'white-space', 'nowrap');
var _mdgriffith$style_elements$Style_Font$preLine = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'white-space', 'pre-line');
var _mdgriffith$style_elements$Style_Font$preWrap = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'white-space', 'pre-wrap');
var _mdgriffith$style_elements$Style_Font$pre = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'white-space', 'pre');
var _mdgriffith$style_elements$Style_Font$wrap = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'white-space', 'normal');
var _mdgriffith$style_elements$Style_Font$justifyAll = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-align', 'justifyAll');
var _mdgriffith$style_elements$Style_Font$justify = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-align', 'justify');
var _mdgriffith$style_elements$Style_Font$center = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-align', 'center');
var _mdgriffith$style_elements$Style_Font$alignRight = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-align', 'right');
var _mdgriffith$style_elements$Style_Font$alignLeft = A2(_mdgriffith$style_elements$Style_Internal_Model$Font, 'text-align', 'left');
var _mdgriffith$style_elements$Style_Font$wordSpacing = function (offset) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Font,
		'word-spacing',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(offset),
			'px'));
};
var _mdgriffith$style_elements$Style_Font$letterSpacing = function (offset) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Font,
		'letter-spacing',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(offset),
			'px'));
};
var _mdgriffith$style_elements$Style_Font$lineHeight = function (height) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Font,
		'line-height',
		_elm_lang$core$Basics$toString(height));
};
var _mdgriffith$style_elements$Style_Font$size = function (size) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Font,
		'font-size',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(size),
			'px'));
};
var _mdgriffith$style_elements$Style_Font$typeface = function (families) {
	return A2(
		_mdgriffith$style_elements$Style_Internal_Model$Font,
		'font-family',
		_mdgriffith$style_elements$Style_Internal_Render_Value$typeface(families));
};

var _mdgriffith$style_elements$Style_Shadow$drop = function (_p0) {
	var _p1 = _p0;
	return _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
		{kind: 'drop', offset: _p1.offset, size: 0, blur: _p1.blur, color: _p1.color});
};
var _mdgriffith$style_elements$Style_Shadow$text = function (_p2) {
	var _p3 = _p2;
	return _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
		{kind: 'text', offset: _p3.offset, size: 0, blur: _p3.blur, color: _p3.color});
};
var _mdgriffith$style_elements$Style_Shadow$inset = function (_p4) {
	var _p5 = _p4;
	return _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
		{kind: 'inset', offset: _p5.offset, size: _p5.size, blur: _p5.blur, color: _p5.color});
};
var _mdgriffith$style_elements$Style_Shadow$box = function (_p6) {
	var _p7 = _p6;
	return _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
		{kind: 'box', offset: _p7.offset, size: _p7.size, blur: _p7.blur, color: _p7.color});
};
var _mdgriffith$style_elements$Style_Shadow$deep = _mdgriffith$style_elements$Style$shadows(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Shadow$box(
			{
				color: A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.2),
				offset: {ctor: '_Tuple2', _0: 0, _1: 14},
				blur: 20,
				size: -12
			}),
		_1: {ctor: '[]'}
	});
var _mdgriffith$style_elements$Style_Shadow$simple = _mdgriffith$style_elements$Style$shadows(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Shadow$box(
			{
				color: A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.5),
				offset: {ctor: '_Tuple2', _0: 0, _1: 29},
				blur: 32,
				size: -20
			}),
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Shadow$box(
				{
					color: A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.25),
					offset: {ctor: '_Tuple2', _0: 0, _1: 4},
					blur: 11,
					size: -3
				}),
			_1: {ctor: '[]'}
		}
	});
var _mdgriffith$style_elements$Style_Shadow$textGlow = F2(
	function (color, size) {
		return _mdgriffith$style_elements$Style_Internal_Model$Shadows(
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
					{
						kind: 'text',
						offset: {ctor: '_Tuple2', _0: 0, _1: 0},
						size: size,
						blur: size * 2,
						color: color
					}),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Style_Shadow$innerGlow = F2(
	function (color, size) {
		return _mdgriffith$style_elements$Style_Internal_Model$Shadows(
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
					{
						kind: 'inset',
						offset: {ctor: '_Tuple2', _0: 0, _1: 0},
						size: size,
						blur: size * 2,
						color: color
					}),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$style_elements$Style_Shadow$glow = F2(
	function (color, size) {
		return _mdgriffith$style_elements$Style_Internal_Model$Shadows(
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Internal_Model$ShadowModel(
					{
						kind: 'box',
						offset: {ctor: '_Tuple2', _0: 0, _1: 0},
						size: size,
						blur: size * 2,
						color: color
					}),
				_1: {ctor: '[]'}
			});
	});

var _mdgriffith$style_elements$Style_Transition$transitions = function (trans) {
	return _mdgriffith$style_elements$Style_Internal_Model$Transitions(
		A2(_elm_lang$core$List$map, _mdgriffith$style_elements$Style_Internal_Model$Transition, trans));
};
var _mdgriffith$style_elements$Style_Transition$performant = _mdgriffith$style_elements$Style_Internal_Model$Transitions(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Internal_Model$Transition(
			{
				delay: 0,
				duration: 130 * _elm_lang$core$Time$millisecond,
				easing: 'ease',
				props: {
					ctor: '::',
					_0: 'transform',
					_1: {
						ctor: '::',
						_0: 'filter',
						_1: {
							ctor: '::',
							_0: 'opacity',
							_1: {ctor: '[]'}
						}
					}
				}
			}),
		_1: {ctor: '[]'}
	});
var _mdgriffith$style_elements$Style_Transition$all = _mdgriffith$style_elements$Style_Internal_Model$Transitions(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Internal_Model$Transition(
			{
				delay: 0,
				duration: 130 * _elm_lang$core$Time$millisecond,
				easing: 'ease',
				props: {
					ctor: '::',
					_0: 'all',
					_1: {ctor: '[]'}
				}
			}),
		_1: {ctor: '[]'}
	});
var _mdgriffith$style_elements$Style_Transition$Transition = F4(
	function (a, b, c, d) {
		return {delay: a, duration: b, easing: c, props: d};
	});

var _user$project$StringUtils$toSentenceCase = function (string) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$String$toUpper(
			A2(_elm_lang$core$String$left, 1, string)),
		A2(_elm_lang$core$String$dropLeft, 1, string));
};

var _user$project$GreekLetters$names = _elm_lang$core$List$map(
	function (_) {
		return _.name;
	});
var _user$project$GreekLetters$symbols = _elm_lang$core$List$map(
	function (_) {
		return _.symbol;
	});
var _user$project$GreekLetters$isNonRoman = function (greekLetter) {
	var uniqueToGreek = {
		ctor: '::',
		_0: 'alpha',
		_1: {
			ctor: '::',
			_0: 'beta',
			_1: {
				ctor: '::',
				_0: 'gamma',
				_1: {
					ctor: '::',
					_0: 'delta',
					_1: {
						ctor: '::',
						_0: 'zeta',
						_1: {
							ctor: '::',
							_0: 'eta',
							_1: {
								ctor: '::',
								_0: 'theta',
								_1: {
									ctor: '::',
									_0: 'iota',
									_1: {
										ctor: '::',
										_0: 'kappa',
										_1: {
											ctor: '::',
											_0: 'mu',
											_1: {
												ctor: '::',
												_0: 'nu',
												_1: {
													ctor: '::',
													_0: 'xi',
													_1: {
														ctor: '::',
														_0: 'rho',
														_1: {
															ctor: '::',
															_0: 'sigma',
															_1: {
																ctor: '::',
																_0: 'tau',
																_1: {
																	ctor: '::',
																	_0: 'chi',
																	_1: {
																		ctor: '::',
																		_0: 'psi',
																		_1: {
																			ctor: '::',
																			_0: 'omega',
																			_1: {
																				ctor: '::',
																				_0: 'Gamma',
																				_1: {
																					ctor: '::',
																					_0: 'Delta',
																					_1: {
																						ctor: '::',
																						_0: 'Theta',
																						_1: {
																							ctor: '::',
																							_0: 'Lambda',
																							_1: {
																								ctor: '::',
																								_0: 'Xi',
																								_1: {
																									ctor: '::',
																									_0: 'Pi',
																									_1: {
																										ctor: '::',
																										_0: 'Sigma',
																										_1: {
																											ctor: '::',
																											_0: 'Phi',
																											_1: {
																												ctor: '::',
																												_0: 'Psi',
																												_1: {
																													ctor: '::',
																													_0: 'Omega',
																													_1: {ctor: '[]'}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	};
	return A2(_elm_lang$core$List$member, greekLetter.name, uniqueToGreek);
};
var _user$project$GreekLetters$GreekLetter = F2(
	function (a, b) {
		return {name: a, symbol: b};
	});
var _user$project$GreekLetters$toUpper = function (_p0) {
	var _p1 = _p0;
	return A2(
		_user$project$GreekLetters$GreekLetter,
		_user$project$StringUtils$toSentenceCase(_p1.name),
		_elm_lang$core$Char$toUpper(_p1.symbol));
};
var _user$project$GreekLetters$lowercaseLetters_ = {
	ctor: '::',
	_0: A2(
		_user$project$GreekLetters$GreekLetter,
		'alpha',
		_elm_lang$core$Native_Utils.chr('α')),
	_1: {
		ctor: '::',
		_0: A2(
			_user$project$GreekLetters$GreekLetter,
			'beta',
			_elm_lang$core$Native_Utils.chr('β')),
		_1: {
			ctor: '::',
			_0: A2(
				_user$project$GreekLetters$GreekLetter,
				'gamma',
				_elm_lang$core$Native_Utils.chr('γ')),
			_1: {
				ctor: '::',
				_0: A2(
					_user$project$GreekLetters$GreekLetter,
					'delta',
					_elm_lang$core$Native_Utils.chr('δ')),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$GreekLetters$GreekLetter,
						'epsilon',
						_elm_lang$core$Native_Utils.chr('ε')),
					_1: {
						ctor: '::',
						_0: A2(
							_user$project$GreekLetters$GreekLetter,
							'zeta',
							_elm_lang$core$Native_Utils.chr('ζ')),
						_1: {
							ctor: '::',
							_0: A2(
								_user$project$GreekLetters$GreekLetter,
								'eta',
								_elm_lang$core$Native_Utils.chr('η')),
							_1: {
								ctor: '::',
								_0: A2(
									_user$project$GreekLetters$GreekLetter,
									'theta',
									_elm_lang$core$Native_Utils.chr('θ')),
								_1: {
									ctor: '::',
									_0: A2(
										_user$project$GreekLetters$GreekLetter,
										'iota',
										_elm_lang$core$Native_Utils.chr('ι')),
									_1: {
										ctor: '::',
										_0: A2(
											_user$project$GreekLetters$GreekLetter,
											'kappa',
											_elm_lang$core$Native_Utils.chr('κ')),
										_1: {
											ctor: '::',
											_0: A2(
												_user$project$GreekLetters$GreekLetter,
												'lambda',
												_elm_lang$core$Native_Utils.chr('λ')),
											_1: {
												ctor: '::',
												_0: A2(
													_user$project$GreekLetters$GreekLetter,
													'mu',
													_elm_lang$core$Native_Utils.chr('μ')),
												_1: {
													ctor: '::',
													_0: A2(
														_user$project$GreekLetters$GreekLetter,
														'nu',
														_elm_lang$core$Native_Utils.chr('ν')),
													_1: {
														ctor: '::',
														_0: A2(
															_user$project$GreekLetters$GreekLetter,
															'xi',
															_elm_lang$core$Native_Utils.chr('ξ')),
														_1: {
															ctor: '::',
															_0: A2(
																_user$project$GreekLetters$GreekLetter,
																'omicron',
																_elm_lang$core$Native_Utils.chr('ο')),
															_1: {
																ctor: '::',
																_0: A2(
																	_user$project$GreekLetters$GreekLetter,
																	'pi',
																	_elm_lang$core$Native_Utils.chr('π')),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_user$project$GreekLetters$GreekLetter,
																		'rho',
																		_elm_lang$core$Native_Utils.chr('ρ')),
																	_1: {
																		ctor: '::',
																		_0: A2(
																			_user$project$GreekLetters$GreekLetter,
																			'sigma',
																			_elm_lang$core$Native_Utils.chr('σ')),
																		_1: {
																			ctor: '::',
																			_0: A2(
																				_user$project$GreekLetters$GreekLetter,
																				'tau',
																				_elm_lang$core$Native_Utils.chr('τ')),
																			_1: {
																				ctor: '::',
																				_0: A2(
																					_user$project$GreekLetters$GreekLetter,
																					'upsilon',
																					_elm_lang$core$Native_Utils.chr('υ')),
																				_1: {
																					ctor: '::',
																					_0: A2(
																						_user$project$GreekLetters$GreekLetter,
																						'phi',
																						_elm_lang$core$Native_Utils.chr('φ')),
																					_1: {
																						ctor: '::',
																						_0: A2(
																							_user$project$GreekLetters$GreekLetter,
																							'chi',
																							_elm_lang$core$Native_Utils.chr('χ')),
																						_1: {
																							ctor: '::',
																							_0: A2(
																								_user$project$GreekLetters$GreekLetter,
																								'psi',
																								_elm_lang$core$Native_Utils.chr('ψ')),
																							_1: {
																								ctor: '::',
																								_0: A2(
																									_user$project$GreekLetters$GreekLetter,
																									'omega',
																									_elm_lang$core$Native_Utils.chr('ω')),
																								_1: {ctor: '[]'}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _user$project$GreekLetters$isLower = function (greekLetter) {
	return A2(_elm_lang$core$List$member, greekLetter, _user$project$GreekLetters$lowercaseLetters_);
};
var _user$project$GreekLetters$uppercaseLetters_ = A2(_elm_lang$core$List$map, _user$project$GreekLetters$toUpper, _user$project$GreekLetters$lowercaseLetters_);
var _user$project$GreekLetters$isUpper = function (greekLetter) {
	return A2(_elm_lang$core$List$member, greekLetter, _user$project$GreekLetters$uppercaseLetters_);
};
var _user$project$GreekLetters$greek = A2(_elm_lang$core$Basics_ops['++'], _user$project$GreekLetters$lowercaseLetters_, _user$project$GreekLetters$uppercaseLetters_);
var _user$project$GreekLetters$nameDict = _elm_lang$core$Dict$fromList(
	A2(
		_elm_lang$core$List$map,
		function (_p2) {
			var _p3 = _p2;
			return {ctor: '_Tuple2', _0: _p3.symbol, _1: _p3.name};
		},
		_user$project$GreekLetters$greek));
var _user$project$GreekLetters$toName = function (symbol) {
	return A2(_elm_lang$core$Dict$get, symbol, _user$project$GreekLetters$nameDict);
};
var _user$project$GreekLetters$nameStringDict = _elm_lang$core$Dict$fromList(
	A2(
		_elm_lang$core$List$map,
		function (_p4) {
			var _p5 = _p4;
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$String$fromChar(_p5.symbol),
				_1: _p5.name
			};
		},
		_user$project$GreekLetters$greek));
var _user$project$GreekLetters$toNameFromString = function (symbol) {
	return A2(_elm_lang$core$Dict$get, symbol, _user$project$GreekLetters$nameStringDict);
};
var _user$project$GreekLetters$symbolDict = _elm_lang$core$Dict$fromList(
	A2(
		_elm_lang$core$List$map,
		function (_p6) {
			var _p7 = _p6;
			return {ctor: '_Tuple2', _0: _p7.name, _1: _p7.symbol};
		},
		_user$project$GreekLetters$greek));
var _user$project$GreekLetters$toSymbol = function (name) {
	return A2(_elm_lang$core$Dict$get, name, _user$project$GreekLetters$symbolDict);
};

var _user$project$ParserUtils$list = F2(
	function (object, separator) {
		return A3(
			_elm_tools$parser$Parser$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			object,
			A2(
				_elm_tools$parser$Parser$repeat,
				_elm_tools$parser$Parser$zeroOrMore,
				A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
						separator),
					object)));
	});
var _user$project$ParserUtils$applyl = F2(
	function (fns, start) {
		applyl:
		while (true) {
			var _p0 = fns;
			if (_p0.ctor === '[]') {
				return start;
			} else {
				var _v1 = _p0._1,
					_v2 = _p0._0(start);
				fns = _v1;
				start = _v2;
				continue applyl;
			}
		}
	});
var _user$project$ParserUtils$applyr = F2(
	function (fns, start) {
		return A2(
			_user$project$ParserUtils$applyl,
			_elm_lang$core$List$reverse(fns),
			start);
	});
var _user$project$ParserUtils_ops = _user$project$ParserUtils_ops || {};
_user$project$ParserUtils_ops['|%'] = F2(
	function (p1, p2) {
		return A2(
			_elm_tools$parser$Parser$andThen,
			_elm_lang$core$Basics$always(p2),
			p1);
	});
var _user$project$ParserUtils_ops = _user$project$ParserUtils_ops || {};
_user$project$ParserUtils_ops['|+'] = _elm_tools$parser$Parser$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _user$project$ParserUtils$chainl = F2(
	function (object, combiner) {
		return A2(
			_elm_tools$parser$Parser$map,
			function (_p1) {
				var _p2 = _p1;
				return A3(
					_elm_lang$core$List$foldl,
					F2(
						function (_p3, a1) {
							var _p4 = _p3;
							return A2(_p4._0, a1, _p4._1);
						}),
					_p2._0,
					_p2._1);
			},
			A2(
				_user$project$ParserUtils_ops['|+'],
				object,
				A2(
					_elm_tools$parser$Parser$repeat,
					_elm_tools$parser$Parser$zeroOrMore,
					A2(_user$project$ParserUtils_ops['|+'], combiner, object))));
	});
var _user$project$ParserUtils$chainr = F2(
	function (object, combiner) {
		return A2(
			_elm_tools$parser$Parser$map,
			function (_p5) {
				var _p6 = _p5;
				return A3(
					_elm_lang$core$List$foldr,
					F2(
						function (_p7, a1) {
							var _p8 = _p7;
							return A2(_p8._1, _p8._0, a1);
						}),
					_p6._1,
					_p6._0);
			},
			A2(
				_user$project$ParserUtils_ops['|+'],
				A2(
					_elm_tools$parser$Parser$repeat,
					_elm_tools$parser$Parser$zeroOrMore,
					A3(
						_elm_tools$parser$Parser$delayedCommitMap,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							}),
						object,
						combiner)),
				object));
	});
var _user$project$ParserUtils$isLetter = function (c) {
	return _elm_lang$core$Char$isUpper(c) || _elm_lang$core$Char$isLower(c);
};
var _user$project$ParserUtils$pairwiseMap = F2(
	function (fn, list) {
		var _p9 = list;
		if ((_p9.ctor === '::') && (_p9._1.ctor === '::')) {
			var _p10 = _p9._1._0;
			return {
				ctor: '::',
				_0: A2(fn, _p9._0, _p10),
				_1: A2(
					_user$project$ParserUtils$pairwiseMap,
					fn,
					{ctor: '::', _0: _p10, _1: _p9._1._1})
			};
		} else {
			return {ctor: '[]'};
		}
	});

var _user$project$MathTree$isImplicitEquation = function (expr) {
	var _p0 = expr;
	if (_p0.ctor === 'Equals') {
		return true;
	} else {
		return false;
	}
};
var _user$project$MathTree$getVariablesHelper = function (expr) {
	getVariablesHelper:
	while (true) {
		var summationVariables = F4(
			function (dummyVar, from, to, expr) {
				return A2(
					_elm_lang$core$Set$remove,
					dummyVar,
					A2(
						_elm_lang$core$Set$union,
						_user$project$MathTree$getVariablesHelper(expr),
						A2(
							_elm_lang$core$Set$union,
							_user$project$MathTree$getVariablesHelper(from),
							_user$project$MathTree$getVariablesHelper(to))));
			});
		var _p1 = expr;
		switch (_p1.ctor) {
			case 'Real':
				return _elm_lang$core$Set$empty;
			case 'Rational':
				return _elm_lang$core$Set$empty;
			case 'Integer':
				return _elm_lang$core$Set$empty;
			case 'Variable':
				return _elm_lang$core$Set$singleton(_p1._0);
			case 'Differential':
				var _v2 = _p1._0;
				expr = _v2;
				continue getVariablesHelper;
			case 'ImaginaryUnit':
				return _elm_lang$core$Set$empty;
			case 'Sum':
				return A4(summationVariables, _p1._0, _p1._1, _p1._2, _p1._3);
			case 'Product':
				return A4(summationVariables, _p1._0, _p1._1, _p1._2, _p1._3);
			case 'Integral':
				return A4(summationVariables, _p1._0, _p1._1, _p1._2, _p1._3);
			case 'Equals':
				return A2(
					_elm_lang$core$Set$union,
					_user$project$MathTree$getVariablesHelper(_p1._0),
					_user$project$MathTree$getVariablesHelper(_p1._1));
			case 'Func1':
				var _v3 = _p1._1;
				expr = _v3;
				continue getVariablesHelper;
			default:
				return A2(
					_elm_lang$core$Set$union,
					_user$project$MathTree$getVariablesHelper(_p1._1),
					_user$project$MathTree$getVariablesHelper(_p1._2));
		}
	}
};
var _user$project$MathTree$getVariables = function (expr) {
	return _elm_lang$core$List$sort(
		_elm_lang$core$Set$toList(
			_user$project$MathTree$getVariablesHelper(expr)));
};
var _user$project$MathTree$prettyPrint = function (expr) {
	var _p2 = expr;
	switch (_p2.ctor) {
		case 'Func1':
			return _user$project$StringUtils$toSentenceCase(_p2._0);
		case 'Func2':
			return _user$project$StringUtils$toSentenceCase(_p2._0);
		case 'Equals':
			return 'Equals';
		case 'Sum':
			return 'Sum';
		case 'Product':
			return 'Product';
		case 'Integral':
			return 'Integral';
		default:
			return _elm_lang$core$Basics$toString(_p2);
	}
};
var _user$project$MathTree$Func2 = F3(
	function (a, b, c) {
		return {ctor: 'Func2', _0: a, _1: b, _2: c};
	});
var _user$project$MathTree$Func1 = F2(
	function (a, b) {
		return {ctor: 'Func1', _0: a, _1: b};
	});
var _user$project$MathTree$Equals = F2(
	function (a, b) {
		return {ctor: 'Equals', _0: a, _1: b};
	});
var _user$project$MathTree$Integral = F4(
	function (a, b, c, d) {
		return {ctor: 'Integral', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$MathTree$Product = F4(
	function (a, b, c, d) {
		return {ctor: 'Product', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$MathTree$Sum = F4(
	function (a, b, c, d) {
		return {ctor: 'Sum', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$MathTree$ImaginaryUnit = {ctor: 'ImaginaryUnit'};
var _user$project$MathTree$Differential = F2(
	function (a, b) {
		return {ctor: 'Differential', _0: a, _1: b};
	});
var _user$project$MathTree$Variable = function (a) {
	return {ctor: 'Variable', _0: a};
};
var _user$project$MathTree$Integer = function (a) {
	return {ctor: 'Integer', _0: a};
};
var _user$project$MathTree$Rational = function (a) {
	return {ctor: 'Rational', _0: a};
};
var _user$project$MathTree$Real = function (a) {
	return {ctor: 'Real', _0: a};
};

var _user$project$LatexParser$spaces = A2(
	_elm_tools$parser$Parser$ignore,
	_elm_tools$parser$Parser$zeroOrMore,
	function ($char) {
		return _elm_lang$core$Native_Utils.eq(
			$char,
			_elm_lang$core$Native_Utils.chr(' '));
	});
var _user$project$LatexParser$parseSubstring = F2(
	function (count, parser) {
		var first = _elm_lang$core$Basics$always;
		var instaCommitParser = A2(
			_elm_tools$parser$Parser$andThen,
			function (input) {
				var _p0 = A2(_elm_tools$parser$Parser$run, parser, input);
				if (_p0.ctor === 'Ok') {
					return _elm_tools$parser$Parser$succeed(_p0._0);
				} else {
					return _elm_tools$parser$Parser$fail(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'substring of ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(count),
								' characters')));
				}
			},
			A2(
				_elm_tools$parser$Parser$keep,
				count,
				_elm_lang$core$Basics$always(true)));
		return A3(
			_elm_tools$parser$Parser$delayedCommitMap,
			first,
			instaCommitParser,
			_elm_tools$parser$Parser$succeed(
				{ctor: '_Tuple0'}));
	});
var _user$project$LatexParser$arg = F2(
	function (parser, options) {
		return A2(
			_elm_tools$parser$Parser_ops['|.'],
			A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
					_elm_tools$parser$Parser$symbol('{')),
				parser(options)),
			_elm_tools$parser$Parser$symbol('}'));
	});
var _user$project$LatexParser$closeArg = F2(
	function (parser, options) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_user$project$LatexParser$parseSubstring,
					_elm_tools$parser$Parser$Exactly(1),
					parser(options)),
				_1: {
					ctor: '::',
					_0: A2(_user$project$LatexParser$arg, parser, options),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$LatexParser$command = function (name) {
	return _elm_tools$parser$Parser$keyword(
		A2(_elm_lang$core$Basics_ops['++'], '\\', name));
};
var _user$project$LatexParser$parenthesized = F2(
	function (parser, options) {
		var modifiedOptions = _elm_lang$core$Native_Utils.update(
			options,
			{insideIntegral: false});
		var leftRight = F2(
			function (leftChar, rightChar) {
				return A2(
					_elm_tools$parser$Parser_ops['|.'],
					A2(
						_elm_tools$parser$Parser_ops['|='],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
							_user$project$LatexParser$command(
								A2(_elm_lang$core$Basics_ops['++'], 'left', leftChar))),
						parser(modifiedOptions)),
					_user$project$LatexParser$command(
						A2(_elm_lang$core$Basics_ops['++'], 'right', rightChar)));
			});
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(leftRight, '(', ')'),
				_1: {
					ctor: '::',
					_0: A2(leftRight, '\\{', '\\}'),
					_1: {
						ctor: '::',
						_0: A2(leftRight, '[', ']'),
						_1: {
							ctor: '::',
							_0: _elm_tools$parser$Parser$fail('a parentheses, like \\left(, \\left[, or \\left{'),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _user$project$LatexParser$identifier = function (options) {
	return options.insideIntegral ? A2(
		_elm_tools$parser$Parser$keep,
		_elm_tools$parser$Parser$Exactly(1),
		function ($char) {
			return _user$project$ParserUtils$isLetter($char) && (!_elm_lang$core$Native_Utils.eq(
				$char,
				_elm_lang$core$Native_Utils.chr('d')));
		}) : A2(
		_elm_tools$parser$Parser$keep,
		_elm_tools$parser$Parser$Exactly(1),
		_user$project$ParserUtils$isLetter);
};
var _user$project$LatexParser$specialConstants = function (options) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser_ops['|.'],
				_elm_tools$parser$Parser$succeed(
					_user$project$MathTree$Real(_elm_lang$core$Basics$pi)),
				_user$project$LatexParser$command('pi')),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(
						_user$project$MathTree$Real(_elm_lang$core$Basics$e)),
					_elm_tools$parser$Parser$symbol('e')),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_ops['|.'],
						_elm_tools$parser$Parser$succeed(_user$project$MathTree$ImaginaryUnit),
						_elm_tools$parser$Parser$symbol('i')),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$fail('a special constant, like i, e or pi'),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _user$project$LatexParser$constant = function (options) {
	var toInt = function (val) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Basics$toFloat(
				_elm_lang$core$Basics$truncate(val)),
			val) ? _elm_lang$core$Maybe$Just(
			_elm_lang$core$Basics$truncate(val)) : _elm_lang$core$Maybe$Nothing;
	};
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: _user$project$LatexParser$specialConstants(options),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					function (val) {
						var _p1 = toInt(val);
						if (_p1.ctor === 'Nothing') {
							return _user$project$MathTree$Rational(val);
						} else {
							return _user$project$MathTree$Integer(_p1._0);
						}
					},
					_elm_tools$parser$Parser$float),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$LatexParser$negative = F2(
	function (parser, options) {
		return _elm_tools$parser$Parser$lazy(
			function (_p2) {
				return A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						_elm_tools$parser$Parser$succeed(
							_user$project$MathTree$Func1('negative')),
						_elm_tools$parser$Parser$symbol('-')),
					parser(options));
			});
	});
var _user$project$LatexParser$variable = function (options) {
	var greekVariable = _elm_tools$parser$Parser$oneOf(
		A2(
			_elm_lang$core$List$map,
			function (_p3) {
				var _p4 = _p3;
				return A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(
						_elm_lang$core$String$fromChar(_p4.symbol)),
					_user$project$LatexParser$command(_p4.name));
			},
			A2(_elm_lang$core$List$filter, _user$project$GreekLetters$isNonRoman, _user$project$GreekLetters$greek)));
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: _user$project$LatexParser$identifier(options),
			_1: {
				ctor: '::',
				_0: greekVariable,
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$fail('a variable, like x or voltage'),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$LatexParser$factor = function (options) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'factor',
		_elm_tools$parser$Parser$lazy(
			function (_p5) {
				return A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
						_user$project$LatexParser$spaces),
					_elm_tools$parser$Parser$oneOf(
						{
							ctor: '::',
							_0: _user$project$LatexParser$constant(options),
							_1: {
								ctor: '::',
								_0: _user$project$LatexParser$differential(options),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser_ops['|='],
										_elm_tools$parser$Parser$succeed(_user$project$MathTree$Variable),
										_user$project$LatexParser$variable(options)),
									_1: {
										ctor: '::',
										_0: A2(_user$project$LatexParser$parenthesized, _user$project$LatexParser$expr, options),
										_1: {
											ctor: '::',
											_0: _user$project$LatexParser$functions(options),
											_1: {
												ctor: '::',
												_0: _user$project$LatexParser$absolute(options),
												_1: {
													ctor: '::',
													_0: _user$project$LatexParser$summations(options),
													_1: {
														ctor: '::',
														_0: _user$project$LatexParser$integral(options),
														_1: {
															ctor: '::',
															_0: _elm_tools$parser$Parser$fail('a factor'),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}
						}));
			}));
};
var _user$project$LatexParser$absolute = function (options) {
	return _elm_tools$parser$Parser$lazy(
		function (_p6) {
			return A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						_elm_tools$parser$Parser$succeed(
							_user$project$MathTree$Func1('abs')),
						_user$project$LatexParser$command('left|')),
					_user$project$LatexParser$expr(options)),
				_user$project$LatexParser$command('right|'));
		});
};
var _user$project$LatexParser$expr = function (options) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'expr',
		_elm_tools$parser$Parser$lazy(
			function (_p7) {
				return A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|='],
						_elm_tools$parser$Parser$succeed(
							_elm_lang$core$Basics$flip(_user$project$ParserUtils$applyl)),
						_elm_tools$parser$Parser$oneOf(
							{
								ctor: '::',
								_0: A2(_user$project$LatexParser$negative, _user$project$LatexParser$term, options),
								_1: {
									ctor: '::',
									_0: _user$project$LatexParser$term(options),
									_1: {ctor: '[]'}
								}
							})),
					A2(
						_elm_tools$parser$Parser$repeat,
						_elm_tools$parser$Parser$zeroOrMore,
						A2(
							_elm_tools$parser$Parser_ops['|='],
							_elm_tools$parser$Parser$oneOf(
								{
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser_ops['|.'],
										_elm_tools$parser$Parser$succeed(
											_elm_lang$core$Basics$flip(
												_user$project$MathTree$Func2('minus'))),
										_elm_tools$parser$Parser$symbol('-')),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser_ops['|.'],
											_elm_tools$parser$Parser$succeed(
												_elm_lang$core$Basics$flip(
													_user$project$MathTree$Func2('plus'))),
											_elm_tools$parser$Parser$symbol('+')),
										_1: {ctor: '[]'}
									}
								}),
							_user$project$LatexParser$term(options))));
			}));
};
var _user$project$LatexParser$term = function (options) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'term',
		_elm_tools$parser$Parser$lazy(
			function (_p8) {
				return _elm_tools$parser$Parser$oneOf(
					{
						ctor: '::',
						_0: A3(
							_elm_tools$parser$Parser$delayedCommitMap,
							_user$project$MathTree$Func2('dot'),
							_user$project$LatexParser$expo(options),
							A2(
								_elm_tools$parser$Parser_ops['|='],
								A2(
									_elm_tools$parser$Parser_ops['|.'],
									A2(
										_elm_tools$parser$Parser_ops['|.'],
										_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
										_user$project$LatexParser$command('cdot')),
									_user$project$LatexParser$spaces),
								_user$project$LatexParser$term(options))),
						_1: {
							ctor: '::',
							_0: A3(
								_elm_tools$parser$Parser$delayedCommitMap,
								_user$project$MathTree$Func2('times'),
								_user$project$LatexParser$expo(options),
								_user$project$LatexParser$term(options)),
							_1: {
								ctor: '::',
								_0: _user$project$LatexParser$expo(options),
								_1: {
									ctor: '::',
									_0: _elm_tools$parser$Parser$fail('a multiplicative term'),
									_1: {ctor: '[]'}
								}
							}
						}
					});
			}));
};
var _user$project$LatexParser$expo = function (options) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'expo',
		_elm_tools$parser$Parser$lazy(
			function (_p9) {
				var suffix = _elm_tools$parser$Parser$oneOf(
					{
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser_ops['|.'],
							_elm_tools$parser$Parser$succeed(
								_user$project$MathTree$Func1('factorial')),
							_elm_tools$parser$Parser$symbol('!')),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_tools$parser$Parser_ops['|='],
								A2(
									_elm_tools$parser$Parser_ops['|.'],
									_elm_tools$parser$Parser$succeed(
										_elm_lang$core$Basics$flip(
											_user$project$MathTree$Func2('exponent'))),
									_elm_tools$parser$Parser$symbol('^')),
								A2(_user$project$LatexParser$closeArg, _user$project$LatexParser$expr, options)),
							_1: {ctor: '[]'}
						}
					});
				return A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|='],
						_elm_tools$parser$Parser$succeed(
							_elm_lang$core$Basics$flip(_user$project$ParserUtils$applyl)),
						_user$project$LatexParser$factor(options)),
					A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, suffix));
			}));
};
var _user$project$LatexParser$differential = function (options) {
	return options.insideIntegral ? _elm_tools$parser$Parser$fail('No differentials inside integrals') : A2(
		_elm_tools$parser$Parser$delayedCommit,
		_elm_tools$parser$Parser$keyword('d'),
		A2(
			_elm_tools$parser$Parser_ops['|='],
			A2(
				_elm_tools$parser$Parser_ops['|='],
				_elm_tools$parser$Parser$succeed(_user$project$MathTree$Differential),
				_elm_tools$parser$Parser$oneOf(
					{
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser_ops['|='],
							A2(
								_elm_tools$parser$Parser_ops['|.'],
								_elm_tools$parser$Parser$succeed(_elm_lang$core$Basics$identity),
								_elm_tools$parser$Parser$symbol('^')),
							A2(_user$project$LatexParser$closeArg, _user$project$LatexParser$expr, options)),
						_1: {
							ctor: '::',
							_0: _elm_tools$parser$Parser$succeed(
								_user$project$MathTree$Real(1)),
							_1: {ctor: '[]'}
						}
					})),
			_user$project$LatexParser$variable(options)));
};
var _user$project$LatexParser$functions = function (options) {
	var func2names = {
		ctor: '::',
		_0: 'frac',
		_1: {
			ctor: '::',
			_0: 'binom',
			_1: {ctor: '[]'}
		}
	};
	var trigFunctions = {
		ctor: '::',
		_0: 'sinh',
		_1: {
			ctor: '::',
			_0: 'cosh',
			_1: {
				ctor: '::',
				_0: 'tanh',
				_1: {
					ctor: '::',
					_0: 'sin',
					_1: {
						ctor: '::',
						_0: 'cos',
						_1: {
							ctor: '::',
							_0: 'tan',
							_1: {
								ctor: '::',
								_0: 'sec',
								_1: {
									ctor: '::',
									_0: 'csc',
									_1: {
										ctor: '::',
										_0: 'cot',
										_1: {
											ctor: '::',
											_0: 'arcsin',
											_1: {
												ctor: '::',
												_0: 'arccos',
												_1: {
													ctor: '::',
													_0: 'arctan',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	};
	return _elm_tools$parser$Parser$lazy(
		function (_p10) {
			return _elm_tools$parser$Parser$oneOf(
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$List$map,
						function (name) {
							return A3(_user$project$LatexParser$func1, name, true, options);
						},
						trigFunctions),
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_elm_lang$core$List$map,
							function (name) {
								return A2(_user$project$LatexParser$func2, name, options);
							},
							func2names),
						{
							ctor: '::',
							_0: _user$project$LatexParser$logarithms(options),
							_1: {
								ctor: '::',
								_0: _elm_tools$parser$Parser$fail('a function, like \\sin, \\cos, or \\tan'),
								_1: {ctor: '[]'}
							}
						})));
		});
};
var _user$project$LatexParser$func1 = F3(
	function (name, withInfix, options) {
		return A2(
			_user$project$ParserUtils_ops['|%'],
			_user$project$LatexParser$command(name),
			A2(
				_elm_tools$parser$Parser$inContext,
				name,
				_elm_tools$parser$Parser$oneOf(
					A2(
						_elm_lang$core$Basics_ops['++'],
						{
							ctor: '::',
							_0: A2(
								_elm_tools$parser$Parser_ops['|='],
								_elm_tools$parser$Parser$succeed(
									_user$project$MathTree$Func1(name)),
								_user$project$LatexParser$singleArg(options)),
							_1: {ctor: '[]'}
						},
						withInfix ? {
							ctor: '::',
							_0: A2(
								_elm_tools$parser$Parser_ops['|='],
								A2(
									_elm_tools$parser$Parser_ops['|='],
									A2(
										_elm_tools$parser$Parser_ops['|.'],
										_elm_tools$parser$Parser$succeed(
											_elm_lang$core$Basics$flip(
												_user$project$MathTree$Func2('exponent'))),
										_elm_tools$parser$Parser$symbol('^')),
									A2(_user$project$LatexParser$closeArg, _user$project$LatexParser$expr, options)),
								A2(
									_elm_tools$parser$Parser_ops['|='],
									_elm_tools$parser$Parser$succeed(
										_user$project$MathTree$Func1(name)),
									_user$project$LatexParser$singleArg(options))),
							_1: {ctor: '[]'}
						} : {ctor: '[]'}))));
	});
var _user$project$LatexParser$singleArg = function (options) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_user$project$LatexParser$arg, _user$project$LatexParser$expr, options),
			_1: {
				ctor: '::',
				_0: A2(_user$project$LatexParser$parenthesized, _user$project$LatexParser$expr, options),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$delayedCommit,
						_user$project$LatexParser$spaces,
						_user$project$LatexParser$term(options)),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$LatexParser$func2 = F2(
	function (name, options) {
		return A2(
			_user$project$ParserUtils_ops['|%'],
			_user$project$LatexParser$command(name),
			A2(
				_elm_tools$parser$Parser$inContext,
				name,
				A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|='],
						_elm_tools$parser$Parser$succeed(
							_user$project$MathTree$Func2(name)),
						A2(_user$project$LatexParser$arg, _user$project$LatexParser$expr, options)),
					A2(_user$project$LatexParser$arg, _user$project$LatexParser$expr, options))));
	});
var _user$project$LatexParser$logarithms = function (options) {
	var ln = A2(
		_user$project$MathTree$Func2,
		'log',
		_user$project$MathTree$Real(_elm_lang$core$Basics$e));
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser_ops['|='],
				A2(
					_elm_tools$parser$Parser_ops['|.'],
					_elm_tools$parser$Parser$succeed(ln),
					_user$project$LatexParser$command('ln')),
				_user$project$LatexParser$singleArg(options)),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser_ops['|='],
					_elm_tools$parser$Parser$succeed(ln),
					A2(
						_elm_tools$parser$Parser$delayedCommit,
						_user$project$LatexParser$command('log'),
						_user$project$LatexParser$singleArg(options))),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser_ops['|='],
						A2(
							_elm_tools$parser$Parser_ops['|='],
							A2(
								_elm_tools$parser$Parser_ops['|.'],
								A2(
									_elm_tools$parser$Parser_ops['|.'],
									_elm_tools$parser$Parser$succeed(
										_user$project$MathTree$Func2('log')),
									_user$project$LatexParser$command('log')),
								_elm_tools$parser$Parser$symbol('_')),
							A2(_user$project$LatexParser$closeArg, _user$project$LatexParser$expr, options)),
						_user$project$LatexParser$singleArg(options)),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$LatexParser$integral = function (options) {
	return _elm_tools$parser$Parser$lazy(
		function (_p11) {
			return A2(
				_elm_tools$parser$Parser$inContext,
				'integral',
				A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						A2(
							_elm_tools$parser$Parser_ops['|='],
							A2(
								_elm_tools$parser$Parser_ops['|='],
								A2(
									_elm_tools$parser$Parser_ops['|.'],
									A2(
										_elm_tools$parser$Parser_ops['|='],
										A2(
											_elm_tools$parser$Parser_ops['|.'],
											A2(
												_elm_tools$parser$Parser_ops['|.'],
												_elm_tools$parser$Parser$succeed(
													F4(
														function (from, to, integrand, dummy) {
															return A4(_user$project$MathTree$Integral, dummy, from, to, integrand);
														})),
												_user$project$LatexParser$command('int')),
											_elm_tools$parser$Parser$symbol('_')),
										A2(_user$project$LatexParser$closeArg, _user$project$LatexParser$expr, options)),
									_elm_tools$parser$Parser$symbol('^')),
								A2(_user$project$LatexParser$closeArg, _user$project$LatexParser$expr, options)),
							_elm_tools$parser$Parser$oneOf(
								{
									ctor: '::',
									_0: _user$project$LatexParser$expr(
										_elm_lang$core$Native_Utils.update(
											options,
											{insideIntegral: true})),
									_1: {
										ctor: '::',
										_0: _elm_tools$parser$Parser$succeed(
											_user$project$MathTree$Real(1)),
										_1: {
											ctor: '::',
											_0: _elm_tools$parser$Parser$fail('a valid integrand'),
											_1: {ctor: '[]'}
										}
									}
								})),
						_elm_tools$parser$Parser$keyword('d')),
					_user$project$LatexParser$variable(options)));
		});
};
var _user$project$LatexParser$summations = function (options) {
	return _elm_tools$parser$Parser$lazy(
		function (_p12) {
			return A2(
				_elm_tools$parser$Parser$inContext,
				'summation',
				A2(
					_elm_tools$parser$Parser_ops['|='],
					A2(
						_elm_tools$parser$Parser_ops['|='],
						A2(
							_elm_tools$parser$Parser_ops['|.'],
							A2(
								_elm_tools$parser$Parser_ops['|.'],
								A2(
									_elm_tools$parser$Parser_ops['|='],
									A2(
										_elm_tools$parser$Parser_ops['|.'],
										A2(
											_elm_tools$parser$Parser_ops['|='],
											A2(
												_elm_tools$parser$Parser_ops['|.'],
												A2(
													_elm_tools$parser$Parser_ops['|.'],
													_elm_tools$parser$Parser$oneOf(
														{
															ctor: '::',
															_0: A2(
																_elm_tools$parser$Parser_ops['|.'],
																_elm_tools$parser$Parser$succeed(_user$project$MathTree$Sum),
																_user$project$LatexParser$command('sum')),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_tools$parser$Parser_ops['|.'],
																	_elm_tools$parser$Parser$succeed(_user$project$MathTree$Product),
																	_user$project$LatexParser$command('prod')),
																_1: {ctor: '[]'}
															}
														}),
													_elm_tools$parser$Parser$symbol('_')),
												_elm_tools$parser$Parser$symbol('{')),
											_user$project$LatexParser$variable(options)),
										_elm_tools$parser$Parser$symbol('=')),
									_user$project$LatexParser$expr(options)),
								_elm_tools$parser$Parser$symbol('}')),
							_elm_tools$parser$Parser$symbol('^')),
						A2(_user$project$LatexParser$closeArg, _user$project$LatexParser$expr, options)),
					_user$project$LatexParser$term(options)));
		});
};
var _user$project$LatexParser$equation = function (options) {
	return A2(
		_elm_tools$parser$Parser$inContext,
		'equation',
		_elm_tools$parser$Parser$lazy(
			function (_p13) {
				return A2(
					_user$project$ParserUtils$chainl,
					_user$project$LatexParser$expr(options),
					A2(
						_elm_tools$parser$Parser_ops['|.'],
						_elm_tools$parser$Parser$succeed(_user$project$MathTree$Equals),
						_elm_tools$parser$Parser$symbol('=')));
			}));
};
var _user$project$LatexParser$default = {insideIntegral: false};
var _user$project$LatexParser$parse = function (inputString) {
	return A2(
		_elm_tools$parser$Parser$run,
		_user$project$LatexParser$equation(_user$project$LatexParser$default),
		inputString);
};
var _user$project$LatexParser$Options = function (a) {
	return {insideIntegral: a};
};

var _user$project$WebGL_Settings_Internal$SampleAlphaToCoverage = {ctor: 'SampleAlphaToCoverage'};
var _user$project$WebGL_Settings_Internal$SampleCoverage = F2(
	function (a, b) {
		return {ctor: 'SampleCoverage', _0: a, _1: b};
	});
var _user$project$WebGL_Settings_Internal$PolygonOffset = F2(
	function (a, b) {
		return {ctor: 'PolygonOffset', _0: a, _1: b};
	});
var _user$project$WebGL_Settings_Internal$CullFace = function (a) {
	return {ctor: 'CullFace', _0: a};
};
var _user$project$WebGL_Settings_Internal$ColorMask = F4(
	function (a, b, c, d) {
		return {ctor: 'ColorMask', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$WebGL_Settings_Internal$Scissor = F4(
	function (a, b, c, d) {
		return {ctor: 'Scissor', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$WebGL_Settings_Internal$StencilTest = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {ctor: 'StencilTest', _0: a, _1: b, _2: c, _3: d, _4: e, _5: f, _6: g, _7: h, _8: i, _9: j, _10: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$WebGL_Settings_Internal$DepthTest = F4(
	function (a, b, c, d) {
		return {ctor: 'DepthTest', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$WebGL_Settings_Internal$Blend = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return {ctor: 'Blend', _0: a, _1: b, _2: c, _3: d, _4: e, _5: f, _6: g, _7: h, _8: i, _9: j};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};

var _user$project$WebGL_Settings$cullFace = function (_p0) {
	var _p1 = _p0;
	return _user$project$WebGL_Settings_Internal$CullFace(_p1._0);
};
var _user$project$WebGL_Settings$sampleCoverage = _user$project$WebGL_Settings_Internal$SampleCoverage;
var _user$project$WebGL_Settings$sampleAlphaToCoverage = _user$project$WebGL_Settings_Internal$SampleAlphaToCoverage;
var _user$project$WebGL_Settings$polygonOffset = _user$project$WebGL_Settings_Internal$PolygonOffset;
var _user$project$WebGL_Settings$colorMask = _user$project$WebGL_Settings_Internal$ColorMask;
var _user$project$WebGL_Settings$scissor = _user$project$WebGL_Settings_Internal$Scissor;
var _user$project$WebGL_Settings$FaceMode = function (a) {
	return {ctor: 'FaceMode', _0: a};
};
var _user$project$WebGL_Settings$front = _user$project$WebGL_Settings$FaceMode(1028);
var _user$project$WebGL_Settings$back = _user$project$WebGL_Settings$FaceMode(1029);
var _user$project$WebGL_Settings$frontAndBack = _user$project$WebGL_Settings$FaceMode(1032);

var _user$project$WebGL_Settings_DepthTest$greaterOrEqual = function (_p0) {
	var _p1 = _p0;
	return A4(_user$project$WebGL_Settings_Internal$DepthTest, 518, _p1.write, _p1.near, _p1.far);
};
var _user$project$WebGL_Settings_DepthTest$lessOrEqual = function (_p2) {
	var _p3 = _p2;
	return A4(_user$project$WebGL_Settings_Internal$DepthTest, 515, _p3.write, _p3.near, _p3.far);
};
var _user$project$WebGL_Settings_DepthTest$notEqual = function (_p4) {
	var _p5 = _p4;
	return A4(_user$project$WebGL_Settings_Internal$DepthTest, 517, _p5.write, _p5.near, _p5.far);
};
var _user$project$WebGL_Settings_DepthTest$greater = function (_p6) {
	var _p7 = _p6;
	return A4(_user$project$WebGL_Settings_Internal$DepthTest, 516, _p7.write, _p7.near, _p7.far);
};
var _user$project$WebGL_Settings_DepthTest$equal = function (_p8) {
	var _p9 = _p8;
	return A4(_user$project$WebGL_Settings_Internal$DepthTest, 514, _p9.write, _p9.near, _p9.far);
};
var _user$project$WebGL_Settings_DepthTest$always = function (_p10) {
	var _p11 = _p10;
	return A4(_user$project$WebGL_Settings_Internal$DepthTest, 519, _p11.write, _p11.near, _p11.far);
};
var _user$project$WebGL_Settings_DepthTest$never = function (_p12) {
	var _p13 = _p12;
	return A4(_user$project$WebGL_Settings_Internal$DepthTest, 512, _p13.write, _p13.near, _p13.far);
};
var _user$project$WebGL_Settings_DepthTest$less = function (_p14) {
	var _p15 = _p14;
	return A4(_user$project$WebGL_Settings_Internal$DepthTest, 513, _p15.write, _p15.near, _p15.far);
};
var _user$project$WebGL_Settings_DepthTest$default = _user$project$WebGL_Settings_DepthTest$less(
	{write: true, near: 0, far: 1});
var _user$project$WebGL_Settings_DepthTest$Options = F3(
	function (a, b, c) {
		return {write: a, near: b, far: c};
	});

// eslint-disable-next-line no-unused-vars, camelcase
var _user$project$Native_WebGL = function () {

  // setup logging
  // eslint-disable-next-line no-unused-vars
  function LOG(msg) {
    // console.log(msg);
  }

  function guid() {
    // eslint-disable-next-line camelcase
    return _elm_lang$core$Native_Utils.guid();
  }
  function listEach(fn, list) {
    while (list.ctor !== '[]') {
      fn(list._0);
      list = list._1;
    }
  }
  function listLength(list) {
    var length = 0;
    while (list.ctor !== '[]') {
      length++;
      list = list._1;
    }
    return length;
  }

  var rAF = typeof requestAnimationFrame !== 'undefined' ?
    requestAnimationFrame :
    function (cb) { setTimeout(cb, 1000 / 60); };

  function unsafeCoerceGLSL(src) {
    return { src: src };
  }

  function entity(settings, vert, frag, buffer, uniforms) {

    if (!buffer.guid) {
      buffer.guid = guid();
    }

    return {
      ctor: 'Entity',
      vert: vert,
      frag: frag,
      buffer: buffer,
      uniforms: uniforms,
      settings: settings
    };

  }

 /**
  *  Apply setting to the gl context
  *
  *  @param {WebGLRenderingContext} gl context
  *  @param {Setting} setting coming in from Elm
  */
  function applySetting(gl, setting) {
    switch (setting.ctor) {
      case 'Blend':
        gl.enable(gl.BLEND);
        // eq1 f11 f12 eq2 f21 f22 r g b a
        gl.blendEquationSeparate(setting._0, setting._3);
        gl.blendFuncSeparate(setting._1, setting._2, setting._4, setting._5);
        gl.blendColor(setting._6, setting._7, setting._8, setting._9);
        break;
      case 'DepthTest':
        gl.enable(gl.DEPTH_TEST);
        // func mask near far
        gl.depthFunc(setting._0);
        gl.depthMask(setting._1);
        gl.depthRange(setting._2, setting._3);
        break;
      case 'StencilTest':
        gl.enable(gl.STENCIL_TEST);
        // ref mask writeMask test1 fail1 zfail1 zpass1 test2 fail2 zfail2 zpass2
        gl.stencilFuncSeparate(gl.FRONT, setting._3, setting._0, setting._1);
        gl.stencilOpSeparate(gl.FRONT, setting._4, setting._5, setting._6);
        gl.stencilMaskSeparate(gl.FRONT, setting._2);
        gl.stencilFuncSeparate(gl.BACK, setting._7, setting._0, setting._1);
        gl.stencilOpSeparate(gl.BACK, setting._8, setting._9, setting._10);
        gl.stencilMaskSeparate(gl.BACK, setting._2);
        break;
      case 'Scissor':
        gl.enable(gl.SCISSOR_TEST);
        gl.scissor(setting._0, setting._1, setting._2, setting._3);
        break;
      case 'ColorMask':
        gl.colorMask(setting._0, setting._1, setting._2, setting._3);
        break;
      case 'CullFace':
        gl.enable(gl.CULL_FACE);
        gl.cullFace(setting._0);
        break;
      case 'PolygonOffset':
        gl.enable(gl.POLYGON_OFFSET_FILL);
        gl.polygonOffset(setting._0, setting._1);
        break;
      case 'SampleCoverage':
        gl.enable(gl.SAMPLE_COVERAGE);
        gl.sampleCoverage(setting._0, setting._1);
        break;
      case 'SampleAlphaToCoverage':
        gl.enable(gl.SAMPLE_ALPHA_TO_COVERAGE);
        break;
    }
  }

 /**
  *  Revert setting that was applied to the gl context
  *
  *  @param {WebGLRenderingContext} gl context
  *  @param {Setting} setting coming in from Elm
  */
  function revertSetting(gl, setting) {
    switch (setting.ctor) {
      case 'Blend':
        gl.disable(gl.BLEND);
        break;
      case 'DepthTest':
        gl.disable(gl.DEPTH_TEST);
        break;
      case 'StencilTest':
        gl.disable(gl.STENCIL_TEST);
        break;
      case 'Scissor':
        gl.disable(gl.SCISSOR_TEST);
        break;
      case 'ColorMask':
        gl.colorMask(true, true, true, true);
        break;
      case 'CullFace':
        gl.disable(gl.CULL_FACE);
        break;
      case 'PolygonOffset':
        gl.disable(gl.POLYGON_OFFSET_FILL);
        break;
      case 'SampleCoverage':
        gl.disable(gl.SAMPLE_COVERAGE);
        break;
      case 'SampleAlphaToCoverage':
        gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
        break;
    }
  }

  function doCompile(gl, src, type) {

    var shader = gl.createShader(type);
    LOG('Created shader');

    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw gl.getShaderInfoLog(shader);
    }

    return shader;

  }

  function doLink(gl, vshader, fshader) {

    var program = gl.createProgram();
    LOG('Created program');

    gl.attachShader(program, vshader);
    gl.attachShader(program, fshader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw gl.getProgramInfoLog(program);
    }

    return program;

  }

  function getRenderInfo(gl, renderType) {
    switch (renderType) {
      case 'Triangles':
        return { mode: gl.TRIANGLES, elemSize: 3, indexSize: 0 };
      case 'LineStrip':
        return { mode: gl.LINE_STRIP, elemSize: 1, indexSize: 0 };
      case 'LineLoop':
        return { mode: gl.LINE_LOOP, elemSize: 1, indexSize: 0 };
      case 'Points':
        return { mode: gl.POINTS, elemSize: 1, indexSize: 0 };
      case 'Lines':
        return { mode: gl.LINES, elemSize: 2, indexSize: 0 };
      case 'TriangleStrip':
        return { mode: gl.TRIANGLE_STRIP, elemSize: 1, indexSize: 0 };
      case 'TriangleFan':
        return { mode: gl.TRIANGLE_FAN, elemSize: 1, indexSize: 0 };
      case 'IndexedTriangles':
        return { mode: gl.TRIANGLES, elemSize: 1, indexSize: 3 };
    }
  }

  function getAttributeInfo(gl, type) {
    switch (type) {
      case gl.FLOAT:
        return { size: 1, type: Float32Array, baseType: gl.FLOAT };
      case gl.FLOAT_VEC2:
        return { size: 2, type: Float32Array, baseType: gl.FLOAT };
      case gl.FLOAT_VEC3:
        return { size: 3, type: Float32Array, baseType: gl.FLOAT };
      case gl.FLOAT_VEC4:
        return { size: 4, type: Float32Array, baseType: gl.FLOAT };
      case gl.INT:
        return { size: 1, type: Int32Array, baseType: gl.INT };
      case gl.INT_VEC2:
        return { size: 2, type: Int32Array, baseType: gl.INT };
      case gl.INT_VEC3:
        return { size: 3, type: Int32Array, baseType: gl.INT };
      case gl.INT_VEC4:
        return { size: 4, type: Int32Array, baseType: gl.INT };
    }
  }

 /**
  *  Form the buffer for a given attribute.
  *
  *  @param {WebGLRenderingContext} gl context
  *  @param {WebGLActiveInfo} attribute the attribute to bind to.
  *         We use its name to grab the record by name and also to know
  *         how many elements we need to grab.
  *  @param {List} bufferElems The list coming in from Elm.
  *  @param {Number} elemSize The length of the number of vertices that
  *         complete one 'thing' based on the drawing mode.
  *         ie, 2 for Lines, 3 for Triangles, etc.
  *  @return {WebGLBuffer}
  */
  function doBindAttribute(gl, attribute, bufferElems, elemSize) {
    var idxKeys = [];
    for (var i = 0; i < elemSize; i++) {
      idxKeys.push('_' + i);
    }

    function dataFill(data, cnt, fillOffset, elem, key) {
      if (elemSize === 1) {
        for (var i = 0; i < cnt; i++) {
          data[fillOffset++] = cnt === 1 ? elem[key] : elem[key][i];
        }
      } else {
        idxKeys.forEach(function (idx) {
          for (var i = 0; i < cnt; i++) {
            data[fillOffset++] = cnt === 1 ? elem[idx][key] : elem[idx][key][i];
          }
        });
      }
    }

    var attributeInfo = getAttributeInfo(gl, attribute.type);

    if (attributeInfo === undefined) {
      throw new Error('No info available for: ' + attribute.type);
    }

    var dataIdx = 0;
    var array = new attributeInfo.type(listLength(bufferElems) * attributeInfo.size * elemSize);

    listEach(function (elem) {
      dataFill(array, attributeInfo.size, dataIdx, elem, attribute.name);
      dataIdx += attributeInfo.size * elemSize;
    }, bufferElems);

    var buffer = gl.createBuffer();
    LOG('Created attribute buffer ' + attribute.name);

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
    return buffer;
  }

 /**
  *  This sets up the binding caching buffers.
  *
  *  We don't actually bind any buffers now except for the indices buffer.
  *  The problem with filling the buffers here is that it is possible to
  *  have a buffer shared between two webgl shaders;
  *  which could have different active attributes. If we bind it here against
  *  a particular program, we might not bind them all. That final bind is now
  *  done right before drawing.
  *
  *  @param {WebGLRenderingContext} gl context
  *  @param {Object} renderType
  *  @param {Number} renderType.indexSize size of the index
  *  @param {Number} renderType.elemSize size of the element
  *  @param {Drawable} drawable a drawable object from Elm
  *         that contains elements and optionally indices
  *  @return {Object} buffer - an object with the following properties
  *  @return {Number} buffer.numIndices
  *  @return {WebGLBuffer} buffer.indexBuffer
  *  @return {Object} buffer.buffers - will be used to buffer attributes
  */
  function doBindSetup(gl, renderType, drawable) {
    LOG('Created index buffer');
    var indexBuffer = gl.createBuffer();
    var indices = (renderType.indexSize === 0)
      ? makeSequentialBuffer(renderType.elemSize * listLength(drawable._0))
      : makeIndexedBuffer(drawable._1, renderType.indexSize);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    return {
      numIndices: indices.length,
      indexBuffer: indexBuffer,
      buffers: {}
    };
  }

 /**
  *  Create an indices array and fill it with 0..n
  *
  *  @param {Number} numIndices The number of indices
  *  @return {Uint16Array} indices
  */
  function makeSequentialBuffer(numIndices) {
    var indices = new Uint16Array(numIndices);
    for (var i = 0; i < numIndices; i++) {
      indices[i] = i;
    }
    return indices;
  }

 /**
  *  Create an indices array and fill it from indices
  *  based on the size of the index
  *
  *  @param {List} indicesList the list of indices
  *  @param {Number} indexSize the size of the index
  *  @return {Uint16Array} indices
  */
  function makeIndexedBuffer(indicesList, indexSize) {
    var indices = new Uint16Array(listLength(indicesList) * indexSize);
    var fillOffset = 0;
    var i;
    listEach(function (elem) {
      if (indexSize === 1) {
        indices[fillOffset++] = elem;
      } else {
        for (i = 0; i < indexSize; i++) {
          indices[fillOffset++] = elem['_' + i.toString()];
        }
      }
    }, indicesList);
    return indices;
  }

  function getProgID(vertID, fragID) {
    return vertID + '#' + fragID;
  }

  function drawGL(domNode, data) {

    var model = data.model;
    var gl = model.cache.gl;

    if (!gl) {
      return domNode;
    }

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
    LOG('Drawing');

    function drawEntity(entity) {
      if (listLength(entity.buffer._0) === 0) {
        return;
      }

      var progid;
      var program;
      if (entity.vert.id && entity.frag.id) {
        progid = getProgID(entity.vert.id, entity.frag.id);
        program = model.cache.programs[progid];
      }

      if (!program) {

        var vshader;
        if (entity.vert.id) {
          vshader = model.cache.shaders[entity.vert.id];
        } else {
          entity.vert.id = guid();
        }

        if (!vshader) {
          vshader = doCompile(gl, entity.vert.src, gl.VERTEX_SHADER);
          model.cache.shaders[entity.vert.id] = vshader;
        }

        var fshader;
        if (entity.frag.id) {
          fshader = model.cache.shaders[entity.frag.id];
        } else {
          entity.frag.id = guid();
        }

        if (!fshader) {
          fshader = doCompile(gl, entity.frag.src, gl.FRAGMENT_SHADER);
          model.cache.shaders[entity.frag.id] = fshader;
        }

        program = doLink(gl, vshader, fshader);
        progid = getProgID(entity.vert.id, entity.frag.id);
        model.cache.programs[progid] = program;

      }

      gl.useProgram(program);

      progid = progid || getProgID(entity.vert.id, entity.frag.id);
      var setters = model.cache.uniformSetters[progid];
      if (!setters) {
        setters = createUniformSetters(gl, model, program);
        model.cache.uniformSetters[progid] = setters;
      }

      setUniforms(setters, entity.uniforms);

      var entityType = getRenderInfo(gl, entity.buffer.ctor);
      var buffer = model.cache.buffers[entity.buffer.guid];

      if (!buffer) {
        buffer = doBindSetup(gl, entityType, entity.buffer);
        model.cache.buffers[entity.buffer.guid] = buffer;
      }

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer.indexBuffer);

      var numAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

      for (var i = 0; i < numAttributes; i++) {
        var attribute = gl.getActiveAttrib(program, i);

        var attribLocation = gl.getAttribLocation(program, attribute.name);
        gl.enableVertexAttribArray(attribLocation);

        if (buffer.buffers[attribute.name] === undefined) {
          buffer.buffers[attribute.name] = doBindAttribute(gl, attribute, entity.buffer._0, entityType.elemSize);
        }
        var attributeBuffer = buffer.buffers[attribute.name];
        var attributeInfo = getAttributeInfo(gl, attribute.type);

        gl.bindBuffer(gl.ARRAY_BUFFER, attributeBuffer);
        gl.vertexAttribPointer(attribLocation, attributeInfo.size, attributeInfo.baseType, false, 0, 0);
      }

      listEach(function (setting) {
        applySetting(gl, setting);
      }, entity.settings);

      gl.drawElements(entityType.mode, buffer.numIndices, gl.UNSIGNED_SHORT, 0);

      listEach(function (setting) {
        revertSetting(gl, setting);
      }, entity.settings);

    }

    listEach(drawEntity, model.entities);
    return domNode;
  }

  function createUniformSetters(gl, model, program) {
    var textureCounter = 0;
    function createUniformSetter(program, uniform) {
      var uniformLocation = gl.getUniformLocation(program, uniform.name);
      switch (uniform.type) {
        case gl.INT:
          return function (value) {
            gl.uniform1i(uniformLocation, value);
          };
        case gl.FLOAT:
          return function (value) {
            gl.uniform1f(uniformLocation, value);
          };
        case gl.FLOAT_VEC2:
          return function (value) {
            gl.uniform2fv(uniformLocation, new Float32Array(value));
          };
        case gl.FLOAT_VEC3:
          return function (value) {
            gl.uniform3fv(uniformLocation, new Float32Array(value));
          };
        case gl.FLOAT_VEC4:
          return function (value) {
            gl.uniform4fv(uniformLocation, new Float32Array(value));
          };
        case gl.FLOAT_MAT4:
          return function (value) {
            gl.uniformMatrix4fv(uniformLocation, false, new Float32Array(value));
          };
        case gl.SAMPLER_2D:
          var currentTexture = textureCounter++;
          return function (texture) {
            gl.activeTexture(gl.TEXTURE0 + currentTexture);
            var tex = model.cache.textures[texture.id];
            if (!tex) {
              LOG('Created texture');
              tex = texture.createTexture(gl);
              model.cache.textures[texture.id] = tex;
            }
            gl.bindTexture(gl.TEXTURE_2D, tex);
            gl.uniform1i(uniformLocation, currentTexture);
          };
        case gl.BOOL:
          return function (value) {
            gl.uniform1i(uniformLocation, value);
          };
        default:
          LOG('Unsupported uniform type: ' + uniform.type);
          return function () {};
      }
    }

    var uniformSetters = {};
    var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (var i = 0; i < numUniforms; i++) {
      var uniform = gl.getActiveUniform(program, i);
      uniformSetters[uniform.name] = createUniformSetter(program, uniform);
    }

    return uniformSetters;
  }

  function setUniforms(setters, values) {
    Object.keys(values).forEach(function (name) {
      var setter = setters[name];
      if (setter) {
        setter(values[name]);
      }
    });
  }

  // VIRTUAL-DOM WIDGET

  function toHtml(options, factList, entities) {
    var model = {
      entities: entities,
      cache: {},
      options: options
    };
    // eslint-disable-next-line camelcase
    return _elm_lang$virtual_dom$Native_VirtualDom.custom(factList, model, implementation);
  }

  var implementation = {
    render: render,
    diff: diff
  };

  /**
   *  Creates canvas and schedules initial drawGL
   *  @param {Object} model
   *  @param {Object} model.cache that may contain the following properties:
             gl, shaders, programs, uniformSetters, buffers, textures
   *  @param {List<Option>} model.options list of options coming from Elm
   *  @param {List<Entity>} model.entities list of entities coming from Elm
   *  @return {HTMLElement} <canvas> if WebGL is supported, otherwise a <div>
   */
  function render(model) {

    var contextAttributes = {
      alpha: false,
      depth: false,
      stencil: false,
      antialias: false,
      premultipliedAlpha: false
    };
    var sceneSettings = [];

    listEach(function (option) {
      var s1 = option._0;
      switch (option.ctor) {
        case 'Alpha':
          contextAttributes.alpha = true;
          contextAttributes.premultipliedAlpha = s1;
          break;
        case 'Antialias':
          contextAttributes.antialias = true;
          break;
        case 'Depth':
          contextAttributes.depth = true;
          sceneSettings.push(function (gl) {
            gl.clearDepth(s1);
          });
          break;
        case 'ClearColor':
          sceneSettings.push(function (gl) {
            gl.clearColor(option._0, option._1, option._2, option._3);
          });
          break;
        case 'Stencil':
          contextAttributes.stencil = true;
          sceneSettings.push(function (gl) {
            gl.clearStencil(s1);
          });
          break;
        case 'StandardDerivatives':
          sceneSettings.push(function (gl) {
            gl.getExtension('OES_standard_derivatives');
          });
          break;
      }
    }, model.options);

    LOG('Render canvas');
    var canvas = document.createElement('canvas');
    var gl = canvas.getContext && (
      canvas.getContext('webgl', contextAttributes) ||
      canvas.getContext('experimental-webgl', contextAttributes)
    );

    if (gl) {
      sceneSettings.forEach(function (sceneSetting) {
        sceneSetting(gl);
      });
    } else {
      canvas = document.createElement('div');
      canvas.innerHTML = '<a href="http://get.webgl.org/">Enable WebGL</a> to see this content!';
    }

    model.cache.gl = gl;
    model.cache.shaders = [];
    model.cache.programs = {};
    model.cache.uniformSetters = {};
    model.cache.buffers = [];
    model.cache.textures = [];

    // Render for the first time.
    // This has to be done in animation frame,
    // because the canvas is not in the DOM yet,
    // when renderCanvas is called by virtual-dom
    rAF(function () {
      drawGL(canvas, {model: model});
    });

    return canvas;
  }


  function diff(oldModel, newModel) {
    newModel.model.cache = oldModel.model.cache;
    return {
      applyPatch: drawGL,
      data: newModel
    };
  }

  return {
    unsafeCoerceGLSL: unsafeCoerceGLSL,
    entity: F5(entity),
    toHtml: F3(toHtml)
  };

}();

var _user$project$WebGL$toHtmlWith = F3(
	function (options, attributes, entities) {
		return A3(_user$project$Native_WebGL.toHtml, options, attributes, entities);
	});
var _user$project$WebGL$entityWith = _user$project$Native_WebGL.entity;
var _user$project$WebGL$entity = _user$project$WebGL$entityWith(
	{
		ctor: '::',
		_0: _user$project$WebGL_Settings_DepthTest$default,
		_1: {ctor: '[]'}
	});
var _user$project$WebGL$unsafeShader = _user$project$Native_WebGL.unsafeCoerceGLSL;
var _user$project$WebGL$IndexedTriangles = F2(
	function (a, b) {
		return {ctor: 'IndexedTriangles', _0: a, _1: b};
	});
var _user$project$WebGL$indexedTriangles = _user$project$WebGL$IndexedTriangles;
var _user$project$WebGL$TriangleStrip = function (a) {
	return {ctor: 'TriangleStrip', _0: a};
};
var _user$project$WebGL$triangleStrip = _user$project$WebGL$TriangleStrip;
var _user$project$WebGL$TriangleFan = function (a) {
	return {ctor: 'TriangleFan', _0: a};
};
var _user$project$WebGL$triangleFan = _user$project$WebGL$TriangleFan;
var _user$project$WebGL$Points = function (a) {
	return {ctor: 'Points', _0: a};
};
var _user$project$WebGL$points = _user$project$WebGL$Points;
var _user$project$WebGL$LineLoop = function (a) {
	return {ctor: 'LineLoop', _0: a};
};
var _user$project$WebGL$lineLoop = _user$project$WebGL$LineLoop;
var _user$project$WebGL$LineStrip = function (a) {
	return {ctor: 'LineStrip', _0: a};
};
var _user$project$WebGL$lineStrip = _user$project$WebGL$LineStrip;
var _user$project$WebGL$Lines = function (a) {
	return {ctor: 'Lines', _0: a};
};
var _user$project$WebGL$lines = _user$project$WebGL$Lines;
var _user$project$WebGL$Triangles = function (a) {
	return {ctor: 'Triangles', _0: a};
};
var _user$project$WebGL$triangles = _user$project$WebGL$Triangles;
var _user$project$WebGL$Shader = {ctor: 'Shader'};
var _user$project$WebGL$Texture = {ctor: 'Texture'};
var _user$project$WebGL$Entity = {ctor: 'Entity'};
var _user$project$WebGL$StandardDerivatives = {ctor: 'StandardDerivatives'};
var _user$project$WebGL$standardDerivatives = _user$project$WebGL$StandardDerivatives;
var _user$project$WebGL$ClearColor = F4(
	function (a, b, c, d) {
		return {ctor: 'ClearColor', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$WebGL$clearColor = _user$project$WebGL$ClearColor;
var _user$project$WebGL$Antialias = {ctor: 'Antialias'};
var _user$project$WebGL$antialias = _user$project$WebGL$Antialias;
var _user$project$WebGL$Stencil = function (a) {
	return {ctor: 'Stencil', _0: a};
};
var _user$project$WebGL$stencil = _user$project$WebGL$Stencil;
var _user$project$WebGL$Depth = function (a) {
	return {ctor: 'Depth', _0: a};
};
var _user$project$WebGL$depth = _user$project$WebGL$Depth;
var _user$project$WebGL$Alpha = function (a) {
	return {ctor: 'Alpha', _0: a};
};
var _user$project$WebGL$alpha = _user$project$WebGL$Alpha;
var _user$project$WebGL$toHtml = _user$project$WebGL$toHtmlWith(
	{
		ctor: '::',
		_0: _user$project$WebGL$alpha(true),
		_1: {
			ctor: '::',
			_0: _user$project$WebGL$antialias,
			_1: {
				ctor: '::',
				_0: _user$project$WebGL$depth(1),
				_1: {ctor: '[]'}
			}
		}
	});

// eslint-disable-next-line camelcase, wrap-iife, no-unused-vars
var _user$project$Native_UnsafeUniforms = function () {
  function encodeVec2 (val) {
    return val
  }

  function encodeVec3 (val) {
    return val
  }

  function encodeVec4 (val) {
    return val
  }

  function encodeMat4 (val) {
    return val
  }

  return {
    encodeVec2: encodeVec2,
    encodeVec3: encodeVec3,
    encodeVec4: encodeVec4,
    encodeMat4: encodeMat4
  }
}()

var _user$project$UnsafeUniforms$sanitize = function (name) {
	var greekLetters = _elm_lang$core$String$fromList(
		_user$project$GreekLetters$symbols(_user$project$GreekLetters$greek));
	var regex = _elm_lang$core$Regex$regex(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'[',
			A2(_elm_lang$core$Basics_ops['++'], greekLetters, ']')));
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		regex,
		function (match) {
			var replacement = A2(
				_elm_lang$core$Maybe$withDefault,
				'unknown',
				_user$project$GreekLetters$toNameFromString(match.match));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'greek_',
				A2(_elm_lang$core$Basics_ops['++'], replacement, '_'));
		},
		name);
};
var _user$project$UnsafeUniforms$encodeParam = function (param) {
	var _p0 = param;
	switch (_p0.ctor) {
		case 'FloatParam':
			return _elm_lang$core$Json_Encode$float(_p0._0);
		case 'Vec2Param':
			return _user$project$Native_UnsafeUniforms.encodeVec2(_p0._0);
		case 'Vec3Param':
			return _user$project$Native_UnsafeUniforms.encodeVec3(_p0._0);
		case 'Vec4Param':
			return _user$project$Native_UnsafeUniforms.encodeVec4(_p0._0);
		default:
			return _user$project$Native_UnsafeUniforms.encodeMat4(_p0._0);
	}
};
var _user$project$UnsafeUniforms$toUnsafeUniforms = function (params) {
	return _elm_lang$core$Json_Encode$object(
		A2(
			_elm_lang$core$List$map,
			function (_p1) {
				var _p2 = _p1;
				return {
					ctor: '_Tuple2',
					_0: _user$project$UnsafeUniforms$sanitize(_p2._0),
					_1: _user$project$UnsafeUniforms$encodeParam(_p2._1)
				};
			},
			_elm_lang$core$Dict$toList(params)));
};
var _user$project$UnsafeUniforms$uniformShaderDeclaration = function (params) {
	var glslType = function (param) {
		var _p3 = param;
		switch (_p3.ctor) {
			case 'FloatParam':
				return 'float';
			case 'Vec2Param':
				return 'vec2';
			case 'Vec3Param':
				return 'vec3';
			case 'Vec4Param':
				return 'vec4';
			default:
				return 'mat4';
		}
	};
	return A2(
		_elm_lang$core$String$join,
		'\n',
		A2(
			_elm_lang$core$List$map,
			function (_p4) {
				var _p5 = _p4;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'uniform ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						glslType(_p5._1),
						A2(
							_elm_lang$core$Basics_ops['++'],
							' ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_user$project$UnsafeUniforms$sanitize(_p5._0),
								';'))));
			},
			_elm_lang$core$Dict$toList(params)));
};
var _user$project$UnsafeUniforms$Mat4Param = function (a) {
	return {ctor: 'Mat4Param', _0: a};
};
var _user$project$UnsafeUniforms$Vec4Param = function (a) {
	return {ctor: 'Vec4Param', _0: a};
};
var _user$project$UnsafeUniforms$Vec3Param = function (a) {
	return {ctor: 'Vec3Param', _0: a};
};
var _user$project$UnsafeUniforms$Vec2Param = function (a) {
	return {ctor: 'Vec2Param', _0: a};
};
var _user$project$UnsafeUniforms$FloatParam = function (a) {
	return {ctor: 'FloatParam', _0: a};
};

var _user$project$Plot_GlPlot$toGlExpr = function (expr) {
	var withOneDec = function (val) {
		return (_elm_lang$core$Native_Utils.cmp(
			val - _elm_lang$core$Basics$toFloat(
				_elm_lang$core$Basics$floor(val)),
			1.0e-5) < 0) ? A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(
				_elm_lang$core$Basics$floor(val)),
			'.0') : _elm_lang$core$Basics$toString(val);
	};
	var _p0 = expr;
	switch (_p0.ctor) {
		case 'Real':
			return withOneDec(_p0._0);
		case 'Rational':
			return withOneDec(_p0._0);
		case 'Integer':
			return withOneDec(
				_elm_lang$core$Basics$toFloat(_p0._0));
		case 'Variable':
			return _user$project$UnsafeUniforms$sanitize(_p0._0);
		case 'Equals':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_user$project$Plot_GlPlot$toGlExpr(_p0._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'-',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_user$project$Plot_GlPlot$toGlExpr(_p0._1),
							')'))));
		case 'Func1':
			var _p2 = _p0._0;
			var val = _user$project$Plot_GlPlot$toGlExpr(_p0._1);
			var _p1 = _p2;
			if (_p1 === 'negative') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'(-',
					A2(_elm_lang$core$Basics_ops['++'], val, ')'));
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					_p2,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'(',
						A2(_elm_lang$core$Basics_ops['++'], val, ')')));
			}
		case 'Func2':
			var b = _user$project$Plot_GlPlot$toGlExpr(_p0._2);
			var a = _user$project$Plot_GlPlot$toGlExpr(_p0._1);
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					function () {
						var _p3 = _p0._0;
						switch (_p3) {
							case 'plus':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									a,
									A2(_elm_lang$core$Basics_ops['++'], '+', b));
							case 'minus':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									a,
									A2(_elm_lang$core$Basics_ops['++'], '-', b));
							case 'times':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									a,
									A2(_elm_lang$core$Basics_ops['++'], '*', b));
							case 'dot':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									a,
									A2(_elm_lang$core$Basics_ops['++'], '*', b));
							case 'frac':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									a,
									A2(_elm_lang$core$Basics_ops['++'], '/', b));
							case 'exponent':
								return A2(
									_elm_lang$core$Basics_ops['++'],
									'pow(',
									A2(
										_elm_lang$core$Basics_ops['++'],
										a,
										A2(
											_elm_lang$core$Basics_ops['++'],
											',',
											A2(_elm_lang$core$Basics_ops['++'], b, ')'))));
							default:
								return '1';
						}
					}(),
					')'));
		default:
			return '1';
	}
};
var _user$project$Plot_GlPlot$toGlFunc = function (expr) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'\n    float f(in float x, in float y) {\n        return ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_user$project$Plot_GlPlot$toGlExpr(expr),
			';\n        }\n        '));
};
var _user$project$Plot_GlPlot$fragmentShader = F2(
	function (expr, uniformsDict) {
		return _user$project$WebGL$unsafeShader(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\n        #extension GL_OES_standard_derivatives : enable\n        precision highp float;\n\n        varying vec3 worldPosition;\n\n        float threshold = 0.0;\n\n        ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_user$project$UnsafeUniforms$uniformShaderDeclaration(uniformsDict),
					A2(
						_elm_lang$core$Basics_ops['++'],
						_user$project$Plot_GlPlot$toGlFunc(expr),
						'\n\n        void main() {\n            float val = f(worldPosition.x, worldPosition.y);\n            float isoValue = 0.0;\n            float pxDistance = abs(isoValue-val)/fwidth(val);\n            float lineWidth=2.0;\n\n            float opacity = 1.0-smoothstep(lineWidth-1.0, lineWidth+1.0, pxDistance);\n            gl_FragColor = vec4(opacity*color, 1.0);\n\n        }\n        '))));
	});
var _user$project$Plot_GlPlot$emptyShader = {'src': '\n    precision highp float;\n    varying vec3 worldPosition;\n    void main () {\n        gl_FragColor = vec4(0,0,0,0);\n    }\n    '};
var _user$project$Plot_GlPlot$vertexShader = _user$project$WebGL$unsafeShader('\n    attribute vec3 position;\n\n    varying vec3 worldPosition;\n\n    uniform mat4 transform;\n\n    void main () {\n        gl_Position = transform * vec4(position, 1.0);\n        worldPosition = position;\n    }\n    ');
var _user$project$Plot_GlPlot$cameraMatrix = A2(
	_elm_community$linear_algebra$Math_Matrix4$mul,
	A6(_elm_community$linear_algebra$Math_Matrix4$makeOrtho, -1, 1, -1, 1, -1, 1),
	A3(
		_elm_community$linear_algebra$Math_Matrix4$makeLookAt,
		A3(_elm_community$linear_algebra$Math_Vector3$vec3, 0, 0, 1),
		A3(_elm_community$linear_algebra$Math_Vector3$vec3, 0, 0, 0),
		A3(_elm_community$linear_algebra$Math_Vector3$vec3, 0, 1, 0)));
var _user$project$Plot_GlPlot$translationDict = function (variables) {
	return _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (n, name) {
					return {
						ctor: '_Tuple2',
						_0: name,
						_1: A2(
							_elm_lang$core$Basics_ops['++'],
							'slot',
							_elm_lang$core$Basics$toString(n + 1))
					};
				}),
			_elm_lang$core$List$sort(variables)));
};
var _user$project$Plot_GlPlot$scopeVal = F2(
	function (scope, n) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$core$Tuple$second,
				A2(
					_elm_community$list_extra$List_Extra$getAt,
					n,
					_elm_lang$core$List$sort(
						_elm_lang$core$Dict$toList(scope)))));
	});
var _user$project$Plot_GlPlot$Attributes = function (a) {
	return {position: a};
};
var _user$project$Plot_GlPlot$fullScreenQuad = _user$project$WebGL$triangleStrip(
	A2(
		_elm_lang$core$List$map,
		_user$project$Plot_GlPlot$Attributes,
		{
			ctor: '::',
			_0: A3(_elm_community$linear_algebra$Math_Vector3$vec3, -1, 1, 0),
			_1: {
				ctor: '::',
				_0: A3(_elm_community$linear_algebra$Math_Vector3$vec3, 1, 1, 0),
				_1: {
					ctor: '::',
					_0: A3(_elm_community$linear_algebra$Math_Vector3$vec3, -1, -1, 0),
					_1: {
						ctor: '::',
						_0: A3(_elm_community$linear_algebra$Math_Vector3$vec3, 1, -1, 0),
						_1: {ctor: '[]'}
					}
				}
			}
		}));
var _user$project$Plot_GlPlot$inequality = F2(
	function (fragShader, scope) {
		return _mdgriffith$style_elements$Element$html(
			A3(
				_user$project$WebGL$toHtmlWith,
				{
					ctor: '::',
					_0: _user$project$WebGL$standardDerivatives,
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'height', _1: '100%'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'width', _1: '100%'},
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A4(
						_user$project$WebGL$entity,
						_user$project$Plot_GlPlot$vertexShader,
						fragShader,
						_user$project$Plot_GlPlot$fullScreenQuad,
						_user$project$UnsafeUniforms$toUnsafeUniforms(scope)),
					_1: {ctor: '[]'}
				}));
	});
var _user$project$Plot_GlPlot$Varying = function (a) {
	return {worldPosition: a};
};

var _user$project$Plot_Util$toVec3 = function (color) {
	var normalize = function (n) {
		return _elm_lang$core$Basics$toFloat(n) / 255;
	};
	var _p0 = _elm_lang$core$Color$toRgb(color);
	var red = _p0.red;
	var green = _p0.green;
	var blue = _p0.blue;
	var _p1 = {
		ctor: '_Tuple3',
		_0: normalize(red),
		_1: normalize(green),
		_2: normalize(blue)
	};
	var redFloat = _p1._0;
	var greenFloat = _p1._1;
	var blueFloat = _p1._2;
	return A3(_elm_community$linear_algebra$Math_Vector3$vec3, redFloat, greenFloat, blueFloat);
};
var _user$project$Plot_Util$upperLeft = function (matrix) {
	var m = _elm_community$linear_algebra$Math_Matrix4$toRecord(matrix);
	return _elm_community$linear_algebra$Math_Matrix4$fromRecord(
		{m11: m.m11, m12: m.m12, m13: m.m13, m21: m.m21, m22: m.m22, m23: m.m23, m31: m.m31, m32: m.m32, m33: m.m33, m41: 0, m42: 0, m43: 0, m44: 1, m14: 0, m24: 0, m34: 0});
};
var _user$project$Plot_Util$normalMatrix = function (mat) {
	return _elm_community$linear_algebra$Math_Matrix4$transpose(
		A2(
			_elm_lang$core$Maybe$withDefault,
			_elm_community$linear_algebra$Math_Matrix4$identity,
			_elm_community$linear_algebra$Math_Matrix4$inverse(
				_user$project$Plot_Util$upperLeft(mat))));
};

var _user$project$Scope$pinnedVariables = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Dict$map,
		F2(
			function (_p3, _p2) {
				var _p4 = _p2;
				return _p4.value;
			}),
		A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (_p6, _p5) {
					var _p7 = _p5;
					return _p7.pinned;
				}),
			_p1._0));
};
var _user$project$Scope$allVariables = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$toList(_p9._0);
};
var _user$project$Scope$isEmpty = function (_p10) {
	var _p11 = _p10;
	return _elm_lang$core$Dict$isEmpty(_p11._0);
};
var _user$project$Scope$toUniformParam = function (param) {
	var _p12 = param;
	return _user$project$UnsafeUniforms$FloatParam(_p12._0);
};
var _user$project$Scope$asUniforms = function (scope) {
	var _p13 = A2(
		_elm_lang$core$Debug$log,
		'scope',
		_user$project$Scope$pinnedVariables(scope));
	return A2(
		_elm_lang$core$Dict$map,
		F2(
			function (_p14, value) {
				return _user$project$Scope$toUniformParam(value);
			}),
		_user$project$Scope$pinnedVariables(scope));
};
var _user$project$Scope$Real = function (a) {
	return {ctor: 'Real', _0: a};
};
var _user$project$Scope$defaultParameter = _user$project$Scope$Real(0);
var _user$project$Scope$Scope = function (a) {
	return {ctor: 'Scope', _0: a};
};
var _user$project$Scope$empty = _user$project$Scope$Scope(_elm_lang$core$Dict$empty);
var _user$project$Scope$changePinned_ = F3(
	function (name, pinned, _p15) {
		var _p16 = _p15;
		return _user$project$Scope$Scope(
			A3(
				_elm_lang$core$Dict$update,
				name,
				function (maybeVar) {
					var _p17 = maybeVar;
					if (_p17.ctor === 'Just') {
						return _elm_lang$core$Maybe$Just(
							_elm_lang$core$Native_Utils.update(
								_p17._0,
								{pinned: pinned}));
					} else {
						return _elm_lang$core$Maybe$Just(
							{pinned: pinned, value: _user$project$Scope$defaultParameter});
					}
				},
				_p16._0));
	});
var _user$project$Scope$pin = F2(
	function (name, scope) {
		return A3(_user$project$Scope$changePinned_, name, true, scope);
	});
var _user$project$Scope$unpin = F2(
	function (name, scope) {
		return A3(_user$project$Scope$changePinned_, name, false, scope);
	});
var _user$project$Scope$addFreeVariables = F2(
	function (names, _p18) {
		var _p19 = _p18;
		return _user$project$Scope$Scope(
			A2(
				_elm_lang$core$Dict$union,
				_p19._0,
				_elm_lang$core$Dict$fromList(
					A2(
						_elm_lang$core$List$map,
						function (name) {
							return {
								ctor: '_Tuple2',
								_0: name,
								_1: {pinned: false, value: _user$project$Scope$defaultParameter}
							};
						},
						names))));
	});
var _user$project$Scope$set = F3(
	function (name, value, _p20) {
		var _p21 = _p20;
		return _user$project$Scope$Scope(
			A3(
				_elm_lang$core$Dict$update,
				name,
				function (maybeVar) {
					var _p22 = maybeVar;
					if (_p22.ctor === 'Just') {
						return _elm_lang$core$Maybe$Just(
							_elm_lang$core$Native_Utils.update(
								_p22._0,
								{value: value}));
					} else {
						return _elm_lang$core$Maybe$Just(
							{pinned: true, value: value});
					}
				},
				_p21._0));
	});

var _user$project$MathModule$uniforms = F2(
	function (scope, mathModule) {
		return A2(
			_elm_lang$core$Dict$union,
			_user$project$Scope$asUniforms(scope),
			_elm_lang$core$Dict$fromList(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'color',
						_1: _user$project$UnsafeUniforms$Vec3Param(
							_user$project$Plot_Util$toVec3(_elm_lang$core$Color$blue))
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'transform',
							_1: _user$project$UnsafeUniforms$Mat4Param(_user$project$Plot_GlPlot$cameraMatrix)
						},
						_1: {ctor: '[]'}
					}
				}));
	});
var _user$project$MathModule$update = F3(
	function (msg, scope, mathModule) {
		var _p0 = msg;
		if (_p0.ctor === 'QuillEdited') {
			var _p2 = _p0._0;
			var parsed = _user$project$LatexParser$parse(_p2);
			var newFragShader = function () {
				var _p1 = parsed;
				if (_p1.ctor === 'Ok') {
					return A2(
						_user$project$Plot_GlPlot$fragmentShader,
						_p1._0,
						A2(_user$project$MathModule$uniforms, scope, mathModule));
				} else {
					return mathModule.compiledFragmentShader;
				}
			}();
			return _elm_lang$core$Native_Utils.update(
				mathModule,
				{formula: parsed, compiledFragmentShader: newFragShader, rawText: _p2});
		} else {
			return mathModule;
		}
	});
var _user$project$MathModule$emptyModule = {
	formula: _elm_lang$core$Result$Ok(
		_user$project$MathTree$Real(0)),
	rawText: '',
	compiledFragmentShader: _user$project$Plot_GlPlot$emptyShader
};
var _user$project$MathModule$MathModule = F3(
	function (a, b, c) {
		return {formula: a, rawText: b, compiledFragmentShader: c};
	});
var _user$project$MathModule$Recompile = {ctor: 'Recompile'};
var _user$project$MathModule$QuillEdited = function (a) {
	return {ctor: 'QuillEdited', _0: a};
};

var _user$project$MaterialShadow$alpha14 = A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.14);
var _user$project$MaterialShadow$alpha12 = A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.12);
var _user$project$MaterialShadow$alpha4 = A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.4);
var _user$project$MaterialShadow$alpha2 = A4(_elm_lang$core$Color$rgba, 0, 0, 0, 0.2);
var _user$project$MaterialShadow$transition = _mdgriffith$style_elements$Style_Transition$transitions(
	{
		ctor: '::',
		_0: {
			delay: 0,
			duration: 0.28 * _elm_lang$core$Time$second,
			easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
			props: {
				ctor: '::',
				_0: 'box-shadow',
				_1: {ctor: '[]'}
			}
		},
		_1: {ctor: '[]'}
	});
var _user$project$MaterialShadow$matShadow = function (shadows) {
	return {
		ctor: '::',
		_0: _user$project$MaterialShadow$transition,
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Style$shadows(shadows),
			_1: {ctor: '[]'}
		}
	};
};
var _user$project$MaterialShadow$e0 = _user$project$MaterialShadow$matShadow(
	{ctor: '[]'});
var _user$project$MaterialShadow$e2 = _user$project$MaterialShadow$matShadow(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Shadow$box(
			{
				offset: {ctor: '_Tuple2', _0: 0, _1: 2},
				blur: 2,
				size: 0,
				color: _user$project$MaterialShadow$alpha14
			}),
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Shadow$box(
				{
					offset: {ctor: '_Tuple2', _0: 0, _1: 1},
					blur: 5,
					size: 0,
					color: _user$project$MaterialShadow$alpha12
				}),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Shadow$box(
					{
						offset: {ctor: '_Tuple2', _0: 0, _1: 3},
						blur: 1,
						size: -2,
						color: _user$project$MaterialShadow$alpha2
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$MaterialShadow$e3 = _user$project$MaterialShadow$matShadow(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Shadow$box(
			{
				offset: {ctor: '_Tuple2', _0: 0, _1: 3},
				blur: 4,
				size: 0,
				color: _user$project$MaterialShadow$alpha14
			}),
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Shadow$box(
				{
					offset: {ctor: '_Tuple2', _0: 0, _1: 1},
					blur: 8,
					size: 0,
					color: _user$project$MaterialShadow$alpha12
				}),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Shadow$box(
					{
						offset: {ctor: '_Tuple2', _0: 0, _1: 3},
						blur: 3,
						size: -2,
						color: _user$project$MaterialShadow$alpha4
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$MaterialShadow$e4 = _user$project$MaterialShadow$matShadow(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Shadow$box(
			{
				offset: {ctor: '_Tuple2', _0: 0, _1: 4},
				blur: 5,
				size: 0,
				color: _user$project$MaterialShadow$alpha14
			}),
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Shadow$box(
				{
					offset: {ctor: '_Tuple2', _0: 0, _1: 1},
					blur: 10,
					size: 0,
					color: _user$project$MaterialShadow$alpha12
				}),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Shadow$box(
					{
						offset: {ctor: '_Tuple2', _0: 0, _1: 2},
						blur: 4,
						size: -1,
						color: _user$project$MaterialShadow$alpha4
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$MaterialShadow$e6 = _user$project$MaterialShadow$matShadow(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Shadow$box(
			{
				offset: {ctor: '_Tuple2', _0: 0, _1: 6},
				blur: 10,
				size: 0,
				color: _user$project$MaterialShadow$alpha14
			}),
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Shadow$box(
				{
					offset: {ctor: '_Tuple2', _0: 0, _1: 1},
					blur: 18,
					size: 0,
					color: _user$project$MaterialShadow$alpha12
				}),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Shadow$box(
					{
						offset: {ctor: '_Tuple2', _0: 0, _1: 3},
						blur: 5,
						size: -1,
						color: _user$project$MaterialShadow$alpha4
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$MaterialShadow$e8 = _user$project$MaterialShadow$matShadow(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Shadow$box(
			{
				offset: {ctor: '_Tuple2', _0: 0, _1: 8},
				blur: 10,
				size: 1,
				color: _user$project$MaterialShadow$alpha14
			}),
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Shadow$box(
				{
					offset: {ctor: '_Tuple2', _0: 0, _1: 3},
					blur: 14,
					size: 2,
					color: _user$project$MaterialShadow$alpha12
				}),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Shadow$box(
					{
						offset: {ctor: '_Tuple2', _0: 0, _1: 5},
						blur: 5,
						size: -3,
						color: _user$project$MaterialShadow$alpha4
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$MaterialShadow$e12 = _user$project$MaterialShadow$matShadow(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Shadow$box(
			{
				offset: {ctor: '_Tuple2', _0: 0, _1: 12},
				blur: 16,
				size: 1,
				color: _user$project$MaterialShadow$alpha14
			}),
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Shadow$box(
				{
					offset: {ctor: '_Tuple2', _0: 0, _1: 4},
					blur: 22,
					size: 3,
					color: _user$project$MaterialShadow$alpha12
				}),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Shadow$box(
					{
						offset: {ctor: '_Tuple2', _0: 0, _1: 6},
						blur: 7,
						size: -4,
						color: _user$project$MaterialShadow$alpha4
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$MaterialShadow$e16 = _user$project$MaterialShadow$matShadow(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Shadow$box(
			{
				offset: {ctor: '_Tuple2', _0: 0, _1: 16},
				blur: 24,
				size: 2,
				color: _user$project$MaterialShadow$alpha14
			}),
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Shadow$box(
				{
					offset: {ctor: '_Tuple2', _0: 0, _1: 6},
					blur: 30,
					size: 5,
					color: _user$project$MaterialShadow$alpha12
				}),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Shadow$box(
					{
						offset: {ctor: '_Tuple2', _0: 0, _1: 8},
						blur: 10,
						size: -5,
						color: _user$project$MaterialShadow$alpha4
					}),
				_1: {ctor: '[]'}
			}
		}
	});
var _user$project$MaterialShadow$e24 = _user$project$MaterialShadow$matShadow(
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Style_Shadow$box(
			{
				offset: {ctor: '_Tuple2', _0: 0, _1: 24},
				blur: 38,
				size: 3,
				color: _user$project$MaterialShadow$alpha14
			}),
		_1: {
			ctor: '::',
			_0: _mdgriffith$style_elements$Style_Shadow$box(
				{
					offset: {ctor: '_Tuple2', _0: 0, _1: 9},
					blur: 46,
					size: 8,
					color: _user$project$MaterialShadow$alpha12
				}),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Style_Shadow$box(
					{
						offset: {ctor: '_Tuple2', _0: 0, _1: 11},
						blur: 15,
						size: -7,
						color: _user$project$MaterialShadow$alpha4
					}),
				_1: {ctor: '[]'}
			}
		}
	});

var _user$project$Styles$intGray = function (val) {
	return _elm_lang$core$Color$grayscale(
		1.0 - (_elm_lang$core$Basics$toFloat(val) / 255.0));
};
var _user$project$Styles$IconButton = {ctor: 'IconButton'};
var _user$project$Styles$Plot = {ctor: 'Plot'};
var _user$project$Styles$FormulaField = {ctor: 'FormulaField'};
var _user$project$Styles$FunctionName = {ctor: 'FunctionName'};
var _user$project$Styles$DebugBox = {ctor: 'DebugBox'};
var _user$project$Styles$AddButtonIcon = {ctor: 'AddButtonIcon'};
var _user$project$Styles$AddButton = {ctor: 'AddButton'};
var _user$project$Styles$Card = {ctor: 'Card'};
var _user$project$Styles$Header = {ctor: 'Header'};
var _user$project$Styles$Background = {ctor: 'Background'};
var _user$project$Styles$None = {ctor: 'None'};
var _user$project$Styles$stylesheet = _mdgriffith$style_elements$Style$stylesheet(
	{
		ctor: '::',
		_0: A2(
			_mdgriffith$style_elements$Style$style,
			_user$project$Styles$None,
			{ctor: '[]'}),
		_1: {
			ctor: '::',
			_0: A2(
				_mdgriffith$style_elements$Style$style,
				_user$project$Styles$Background,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Style_Color$background(
						_user$project$Styles$intGray(238)),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_mdgriffith$style_elements$Style$style,
					_user$project$Styles$Header,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Style_Color$text(
							_user$project$Styles$intGray(117)),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Style_Font$typeface(
								{
									ctor: '::',
									_0: 'Symbola',
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Style_Font$size(20),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_mdgriffith$style_elements$Style$style,
						_user$project$Styles$Card,
						A2(
							_elm_lang$core$Basics_ops['++'],
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Style_Color$background(_elm_lang$core$Color$white),
								_1: {ctor: '[]'}
							},
							_user$project$MaterialShadow$e2)),
					_1: {
						ctor: '::',
						_0: A2(
							_mdgriffith$style_elements$Style$style,
							_user$project$Styles$DebugBox,
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Style_Border$all(1),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_mdgriffith$style_elements$Style$style,
								_user$project$Styles$AddButton,
								A2(
									_elm_lang$core$Basics_ops['++'],
									{
										ctor: '::',
										_0: _mdgriffith$style_elements$Style_Color$background(_elm_lang$core$Color$white),
										_1: {
											ctor: '::',
											_0: _mdgriffith$style_elements$Style$cursor('pointer'),
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Style$focus(
													{
														ctor: '::',
														_0: _mdgriffith$style_elements$Style_Border$dashed,
														_1: {
															ctor: '::',
															_0: A2(_mdgriffith$style_elements$Style$prop, 'outline', 'none'),
															_1: {ctor: '[]'}
														}
													}),
												_1: {
													ctor: '::',
													_0: A2(_mdgriffith$style_elements$Style$pseudo, 'active', _user$project$MaterialShadow$e6),
													_1: {ctor: '[]'}
												}
											}
										}
									},
									_user$project$MaterialShadow$e2)),
							_1: {
								ctor: '::',
								_0: A2(
									_mdgriffith$style_elements$Style$style,
									_user$project$Styles$AddButtonIcon,
									{
										ctor: '::',
										_0: _mdgriffith$style_elements$Style_Font$size(30),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_mdgriffith$style_elements$Style$style,
										_user$project$Styles$IconButton,
										{
											ctor: '::',
											_0: _mdgriffith$style_elements$Style_Color$text(
												_user$project$Styles$intGray(117)),
											_1: {
												ctor: '::',
												_0: _mdgriffith$style_elements$Style_Font$size(24),
												_1: {
													ctor: '::',
													_0: _mdgriffith$style_elements$Style$cursor('pointer'),
													_1: {ctor: '[]'}
												}
											}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_mdgriffith$style_elements$Style$style,
											_user$project$Styles$FormulaField,
											{
												ctor: '::',
												_0: _mdgriffith$style_elements$Style_Font$size(30),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_mdgriffith$style_elements$Style$style,
												_user$project$Styles$FunctionName,
												{
													ctor: '::',
													_0: _mdgriffith$style_elements$Style_Font$size(30),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_mdgriffith$style_elements$Style$style,
													_user$project$Styles$Plot,
													{ctor: '[]'}),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});

var _user$project$MathSlider$step = function (val) {
	return A2(
		_mdgriffith$style_elements$Element_Attributes$attribute,
		'step',
		function () {
			var _p0 = val;
			if (_p0.ctor === 'Any') {
				return 'any';
			} else {
				return _elm_lang$core$Basics$toString(_p0._0);
			}
		}());
};
var _user$project$MathSlider$onInput = function (tagger) {
	return A2(
		_mdgriffith$style_elements$Element_Events$on,
		'input',
		A2(
			_elm_lang$core$Json_Decode$map,
			tagger,
			A2(
				_elm_lang$core$Json_Decode$at,
				{
					ctor: '::',
					_0: 'target',
					_1: {
						ctor: '::',
						_0: 'value',
						_1: {ctor: '[]'}
					}
				},
				_elm_community$json_extra$Json_Decode_Extra$parseFloat)));
};
var _user$project$MathSlider$slider = F3(
	function (style, attrs, child) {
		return A2(
			_mdgriffith$style_elements$Element$node,
			'input',
			A3(
				_mdgriffith$style_elements$Element$el,
				style,
				A2(
					_elm_lang$core$Basics_ops['++'],
					attrs,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$type_('range'),
						_1: {ctor: '[]'}
					}),
				child));
	});
var _user$project$MathSlider$Any = {ctor: 'Any'};
var _user$project$MathSlider$mathSlider = function (msg) {
	return A3(
		_user$project$MathSlider$slider,
		_user$project$Styles$None,
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Attributes$width(
				_mdgriffith$style_elements$Element_Attributes$px(200)),
			_1: {
				ctor: '::',
				_0: _user$project$MathSlider$onInput(msg),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$max('10'),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$min('-10'),
						_1: {
							ctor: '::',
							_0: _user$project$MathSlider$step(_user$project$MathSlider$Any),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		},
		_mdgriffith$style_elements$Element$empty);
};
var _user$project$MathSlider$Step = function (a) {
	return {ctor: 'Step', _0: a};
};

var _user$project$Mathquill_Common$Left = {ctor: 'Left'};
var _user$project$Mathquill_Common$Right = {ctor: 'Right'};
var _user$project$Mathquill_Common$decodeDirection = A2(
	_elm_lang$core$Json_Decode$map,
	function (direction) {
		return (_elm_lang$core$Native_Utils.cmp(direction, 0) < 0) ? _user$project$Mathquill_Common$Left : _user$project$Mathquill_Common$Right;
	},
	A2(_elm_lang$core$Json_Decode$field, 'direction', _elm_lang$core$Json_Decode$int));
var _user$project$Mathquill_Common$Default = {ctor: 'Default'};
var _user$project$Mathquill_Common$Down = {ctor: 'Down'};
var _user$project$Mathquill_Common$Up = {ctor: 'Up'};

var _user$project$Mathquill_StyleElements$staticMath = F3(
	function (style, attributes, content) {
		return A3(
			_mdgriffith$style_elements$Element$el,
			style,
			{ctor: '[]'},
			A3(
				_mdgriffith$style_elements$Element_Keyed$row,
				style,
				A2(
					_elm_lang$core$List$append,
					attributes,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$class('elm-mq-static'),
						_1: {
							ctor: '::',
							_0: A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'content', content),
							_1: {ctor: '[]'}
						}
					}),
				{ctor: '[]'}));
	});
var _user$project$Mathquill_StyleElements$mathField = F2(
	function (style, attributes) {
		return A3(
			_mdgriffith$style_elements$Element$el,
			style,
			{ctor: '[]'},
			A3(
				_mdgriffith$style_elements$Element_Keyed$row,
				style,
				A2(
					_elm_lang$core$List$append,
					attributes,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$class('elm-mq-edit'),
						_1: {ctor: '[]'}
					}),
				{ctor: '[]'}));
	});
var _user$project$Mathquill_StyleElements$emptyAttribute_ = A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'empty-attribute-blank-ignore', '');
var _user$project$Mathquill_StyleElements$boolAttribute_ = F2(
	function (attrName, value) {
		return value ? A2(_mdgriffith$style_elements$Element_Attributes$attribute, attrName, '') : _user$project$Mathquill_StyleElements$emptyAttribute_;
	});
var _user$project$Mathquill_StyleElements$spaceBehavesLikeTab = _user$project$Mathquill_StyleElements$boolAttribute_('space-behaves-like-tab');
var _user$project$Mathquill_StyleElements$restrictMismatchedBrackets = _user$project$Mathquill_StyleElements$boolAttribute_('restrict-mismatched-brackets');
var _user$project$Mathquill_StyleElements$sumStartsWithNEquals = _user$project$Mathquill_StyleElements$boolAttribute_('sum-starts-with-n-equals');
var _user$project$Mathquill_StyleElements$supSubsRequireOperand = _user$project$Mathquill_StyleElements$boolAttribute_('sup-subs-require-operand');
var _user$project$Mathquill_StyleElements$autoSubscriptNumerals = _user$project$Mathquill_StyleElements$boolAttribute_('auto-subscript-numerals');
var _user$project$Mathquill_StyleElements$leftRightIntoCmdGoes = function (dir) {
	var _p0 = dir;
	switch (_p0.ctor) {
		case 'Up':
			return A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'left-right-into-cmd-goes', 'up');
		case 'Down':
			return A2(_mdgriffith$style_elements$Element_Attributes$attribute, 'left-right-into-cmd-goes', 'down');
		default:
			return _user$project$Mathquill_StyleElements$emptyAttribute_;
	}
};
var _user$project$Mathquill_StyleElements$stringAttribute_ = F2(
	function (name, string) {
		var _p1 = string;
		if (_p1 === '') {
			return _user$project$Mathquill_StyleElements$emptyAttribute_;
		} else {
			return A2(_mdgriffith$style_elements$Element_Attributes$attribute, name, string);
		}
	});
var _user$project$Mathquill_StyleElements$charsThatBreakOutOfSupSub = _user$project$Mathquill_StyleElements$stringAttribute_('chars-that-break-out-of-sup-sub');
var _user$project$Mathquill_StyleElements$autoCommands = _user$project$Mathquill_StyleElements$stringAttribute_('auto-commands');
var _user$project$Mathquill_StyleElements$autoOperatorNames = _user$project$Mathquill_StyleElements$stringAttribute_('auto-operator-names');
var _user$project$Mathquill_StyleElements$onDownOutOf = function (msg) {
	return A2(
		_mdgriffith$style_elements$Element_Events$on,
		'downOutOf',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _user$project$Mathquill_StyleElements$onUpOutOf = function (msg) {
	return A2(
		_mdgriffith$style_elements$Element_Events$on,
		'upOutOf',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _user$project$Mathquill_StyleElements$onDeleteOutOf = function (msg) {
	return A2(
		_mdgriffith$style_elements$Element_Events$on,
		'deleteOutOf',
		A2(_elm_lang$core$Json_Decode$map, msg, _user$project$Mathquill_Common$decodeDirection));
};
var _user$project$Mathquill_StyleElements$onSelectOutOf = function (msg) {
	return A2(
		_mdgriffith$style_elements$Element_Events$on,
		'selectOutOf',
		A2(_elm_lang$core$Json_Decode$map, msg, _user$project$Mathquill_Common$decodeDirection));
};
var _user$project$Mathquill_StyleElements$onMoveOutOf = function (msg) {
	return A2(
		_mdgriffith$style_elements$Element_Events$on,
		'moveOutOf',
		A2(_elm_lang$core$Json_Decode$map, msg, _user$project$Mathquill_Common$decodeDirection));
};
var _user$project$Mathquill_StyleElements$onEnter = function (msg) {
	return A2(
		_mdgriffith$style_elements$Element_Events$on,
		'enter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _user$project$Mathquill_StyleElements$onEdit = function (msg) {
	return A2(
		_mdgriffith$style_elements$Element_Events$on,
		'edit',
		A2(
			_elm_lang$core$Json_Decode$map,
			msg,
			A2(_elm_lang$core$Json_Decode$field, 'value', _elm_lang$core$Json_Decode$string)));
};

var _user$project$Msg$Noop = {ctor: 'Noop'};
var _user$project$Msg$SliderChanged = F2(
	function (a, b) {
		return {ctor: 'SliderChanged', _0: a, _1: b};
	});
var _user$project$Msg$UnpinVariable = function (a) {
	return {ctor: 'UnpinVariable', _0: a};
};
var _user$project$Msg$PinVariable = function (a) {
	return {ctor: 'PinVariable', _0: a};
};
var _user$project$Msg$DeleteModule = function (a) {
	return {ctor: 'DeleteModule', _0: a};
};
var _user$project$Msg$AddModule = {ctor: 'AddModule'};
var _user$project$Msg$ModuleEdited = F2(
	function (a, b) {
		return {ctor: 'ModuleEdited', _0: a, _1: b};
	});

var _user$project$MathViews$matIcon = F3(
	function (name, style, attributes) {
		return A2(
			_mdgriffith$style_elements$Element$node,
			'i',
			A3(
				_mdgriffith$style_elements$Element$el,
				style,
				A2(
					_elm_lang$core$Basics_ops['++'],
					attributes,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$class('material-icons'),
						_1: {ctor: '[]'}
					}),
				_mdgriffith$style_elements$Element$text(name)));
	});
var _user$project$MathViews$plot = F2(
	function (scope, mathModule) {
		var _p0 = mathModule.formula;
		if (_p0.ctor === 'Ok') {
			return A2(
				_user$project$Plot_GlPlot$inequality,
				mathModule.compiledFragmentShader,
				A2(_user$project$MathModule$uniforms, scope, mathModule));
		} else {
			return _mdgriffith$style_elements$Element$text('uhoh');
		}
	});
var _user$project$MathViews$functionSignature = function (mathModule) {
	var _p1 = mathModule.formula;
	if (_p1.ctor === 'Ok') {
		var _p2 = _p1._0;
		return _user$project$MathTree$isImplicitEquation(_p2) ? _mdgriffith$style_elements$Element$empty : A3(
			_user$project$Mathquill_StyleElements$staticMath,
			_user$project$Styles$FunctionName,
			{ctor: '[]'},
			A2(
				_elm_lang$core$Basics_ops['++'],
				'f(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$String$join,
						',',
						_user$project$MathTree$getVariables(_p2)),
					')=')));
	} else {
		return A3(
			_user$project$Mathquill_StyleElements$staticMath,
			_user$project$Styles$FunctionName,
			{ctor: '[]'},
			'f(-)');
	}
};
var _user$project$MathViews$iconButton = F2(
	function (iconName, onClick) {
		return A3(
			_mdgriffith$style_elements$Element$el,
			_user$project$Styles$IconButton,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$width(
					_mdgriffith$style_elements$Element_Attributes$px(24)),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$height(
						_mdgriffith$style_elements$Element_Attributes$px(24)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Events$onClick(onClick),
						_1: {ctor: '[]'}
					}
				}
			},
			A3(
				_user$project$MathViews$matIcon,
				iconName,
				_user$project$Styles$None,
				{ctor: '[]'}));
	});
var _user$project$MathViews$autoCommands = A2(
	_elm_lang$core$Basics_ops['++'],
	{
		ctor: '::',
		_0: 'sum',
		_1: {
			ctor: '::',
			_0: 'prod',
			_1: {ctor: '[]'}
		}
	},
	_user$project$GreekLetters$names(
		A2(_elm_lang$core$List$filter, _user$project$GreekLetters$isNonRoman, _user$project$GreekLetters$greek)));
var _user$project$MathViews$formulaField = function (index) {
	return A2(
		_user$project$Mathquill_StyleElements$mathField,
		_user$project$Styles$FormulaField,
		{
			ctor: '::',
			_0: _user$project$Mathquill_StyleElements$autoCommands(
				A2(_elm_lang$core$String$join, ' ', _user$project$MathViews$autoCommands)),
			_1: {
				ctor: '::',
				_0: _user$project$Mathquill_StyleElements$spaceBehavesLikeTab(true),
				_1: {
					ctor: '::',
					_0: _user$project$Mathquill_StyleElements$onEdit(
						function (_p3) {
							return A2(
								_user$project$Msg$ModuleEdited,
								index,
								_user$project$MathModule$QuillEdited(_p3));
						}),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$MathViews$mathRow = F3(
	function (scope, index, mathModule) {
		return A2(
			_mdgriffith$style_elements$Element$within,
			{
				ctor: '::',
				_0: A3(
					_mdgriffith$style_elements$Element$row,
					_user$project$Styles$None,
					{
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$padding(8),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$spacing(8),
							_1: {
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$alignLeft,
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$alignTop,
									_1: {ctor: '[]'}
								}
							}
						}
					},
					{
						ctor: '::',
						_0: A2(
							_user$project$MathViews$iconButton,
							'close',
							_user$project$Msg$DeleteModule(index)),
						_1: {
							ctor: '::',
							_0: A2(_user$project$MathViews$iconButton, 'speaker_notes', _user$project$Msg$Noop),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			},
			A3(
				_mdgriffith$style_elements$Element$row,
				_user$project$Styles$Card,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$height(
						_mdgriffith$style_elements$Element_Attributes$px(192)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$maxWidth(
							_mdgriffith$style_elements$Element_Attributes$px(1280)),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$width(
								_mdgriffith$style_elements$Element_Attributes$fill(1)),
							_1: {ctor: '[]'}
						}
					}
				},
				{
					ctor: '::',
					_0: A3(
						_mdgriffith$style_elements$Element$el,
						_user$project$Styles$None,
						{
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$width(
								_mdgriffith$style_elements$Element_Attributes$fill(1)),
							_1: {ctor: '[]'}
						},
						A3(
							_mdgriffith$style_elements$Element$el,
							_user$project$Styles$None,
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$alignLeft,
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Attributes$paddingLeft(24),
										_1: {ctor: '[]'}
									}
								}
							},
							A3(
								_mdgriffith$style_elements$Element$row,
								_user$project$Styles$None,
								{
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _user$project$MathViews$functionSignature(mathModule),
									_1: {
										ctor: '::',
										_0: _user$project$MathViews$formulaField(index),
										_1: {ctor: '[]'}
									}
								}))),
					_1: {
						ctor: '::',
						_0: A3(
							_mdgriffith$style_elements$Element$el,
							_user$project$Styles$Plot,
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$width(
									_mdgriffith$style_elements$Element_Attributes$fill(1)),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$maxWidth(
										_mdgriffith$style_elements$Element_Attributes$px(480)),
									_1: {ctor: '[]'}
								}
							},
							A2(_user$project$MathViews$plot, scope, mathModule)),
						_1: {ctor: '[]'}
					}
				}));
	});

var _user$project$Main$varCard = function (_p0) {
	var _p1 = _p0;
	var _p2 = _p1._0;
	return _p1._1.pinned ? A3(
		_mdgriffith$style_elements$Element$el,
		_user$project$Styles$Card,
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Attributes$height(
				_mdgriffith$style_elements$Element_Attributes$px(80)),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$width(
					_mdgriffith$style_elements$Element_Attributes$px(240)),
				_1: {ctor: '[]'}
			}
		},
		A3(
			_mdgriffith$style_elements$Element$el,
			_user$project$Styles$None,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$center,
					_1: {ctor: '[]'}
				}
			},
			_user$project$MathSlider$mathSlider(
				_user$project$Msg$SliderChanged(_p2)))) : A3(
		_mdgriffith$style_elements$Element$el,
		_user$project$Styles$Card,
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Attributes$height(
				_mdgriffith$style_elements$Element_Attributes$px(80)),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$width(
					_mdgriffith$style_elements$Element_Attributes$px(80)),
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Events$onClick(
						_user$project$Msg$PinVariable(_p2)),
					_1: {ctor: '[]'}
				}
			}
		},
		A3(
			_mdgriffith$style_elements$Element$el,
			_user$project$Styles$None,
			{
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$center,
					_1: {ctor: '[]'}
				}
			},
			_mdgriffith$style_elements$Element$text(_p2)));
};
var _user$project$Main$getAllVariables = function (modules) {
	return _elm_community$list_extra$List_Extra$unique(
		_elm_lang$core$List$concat(
			A2(
				_elm_lang$core$List$map,
				function (mathModule) {
					return A2(
						_elm_lang$core$Result$withDefault,
						{ctor: '[]'},
						A2(_elm_lang$core$Result$map, _user$project$MathTree$getVariables, mathModule.formula));
				},
				modules)));
};
var _user$project$Main$header = function (model) {
	return A3(
		_mdgriffith$style_elements$Element$wrappedRow,
		_user$project$Styles$Header,
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Attributes$minHeight(
				_mdgriffith$style_elements$Element_Attributes$px(160)),
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$center,
				_1: {
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$spacing(8),
						_1: {ctor: '[]'}
					}
				}
			}
		},
		_user$project$Scope$isEmpty(model.scope) ? {
			ctor: '::',
			_0: _mdgriffith$style_elements$Element$text('No variables pinned yet.'),
			_1: {ctor: '[]'}
		} : A2(
			_elm_lang$core$List$map,
			_user$project$Main$varCard,
			_user$project$Scope$allVariables(model.scope)));
};
var _user$project$Main$addButton = A4(
	_mdgriffith$style_elements$Element$circle,
	32,
	_user$project$Styles$AddButton,
	{
		ctor: '::',
		_0: _mdgriffith$style_elements$Element_Events$onClick(_user$project$Msg$AddModule),
		_1: {ctor: '[]'}
	},
	A3(
		_mdgriffith$style_elements$Element$el,
		_user$project$Styles$AddButtonIcon,
		{
			ctor: '::',
			_0: _mdgriffith$style_elements$Element_Attributes$verticalCenter,
			_1: {
				ctor: '::',
				_0: _mdgriffith$style_elements$Element_Attributes$center,
				_1: {ctor: '[]'}
			}
		},
		_mdgriffith$style_elements$Element$text('+')));
var _user$project$Main$view = function (model) {
	var plotConfig = {
		xRange: {ctor: '_Tuple2', _0: -10, _1: 10},
		yRange: {ctor: '_Tuple2', _0: 0, _1: 100}
	};
	return A2(
		_mdgriffith$style_elements$Element$layout,
		_user$project$Styles$stylesheet,
		A3(
			_mdgriffith$style_elements$Element$full,
			_user$project$Styles$Background,
			{ctor: '[]'},
			A3(
				_mdgriffith$style_elements$Element$column,
				_user$project$Styles$None,
				{
					ctor: '::',
					_0: _mdgriffith$style_elements$Element_Attributes$center,
					_1: {
						ctor: '::',
						_0: _mdgriffith$style_elements$Element_Attributes$width(
							_mdgriffith$style_elements$Element_Attributes$percent(100)),
						_1: {
							ctor: '::',
							_0: _mdgriffith$style_elements$Element_Attributes$spacing(32),
							_1: {ctor: '[]'}
						}
					}
				},
				{
					ctor: '::',
					_0: _user$project$Main$header(model),
					_1: {
						ctor: '::',
						_0: A3(
							_mdgriffith$style_elements$Element$column,
							_user$project$Styles$None,
							{
								ctor: '::',
								_0: _mdgriffith$style_elements$Element_Attributes$spacing(16),
								_1: {
									ctor: '::',
									_0: _mdgriffith$style_elements$Element_Attributes$width(
										_mdgriffith$style_elements$Element_Attributes$percent(100)),
									_1: {
										ctor: '::',
										_0: _mdgriffith$style_elements$Element_Attributes$center,
										_1: {ctor: '[]'}
									}
								}
							},
							A2(
								_elm_lang$core$List$indexedMap,
								_user$project$MathViews$mathRow(model.scope),
								model.modules)),
						_1: {
							ctor: '::',
							_0: _user$project$Main$addButton,
							_1: {ctor: '[]'}
						}
					}
				})));
};
var _user$project$Main$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$none;
};
var _user$project$Main$update = F2(
	function (msg, model) {
		var _p3 = msg;
		switch (_p3.ctor) {
			case 'ModuleEdited':
				var newModules = A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (i, mathModule) {
							return _elm_lang$core$Native_Utils.eq(i, _p3._0) ? A3(_user$project$MathModule$update, _p3._1, model.scope, mathModule) : mathModule;
						}),
					model.modules);
				var newScope = A2(
					_user$project$Scope$addFreeVariables,
					_user$project$Main$getAllVariables(newModules),
					model.scope);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{modules: newModules, scope: newScope}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'AddModule':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							modules: A2(
								_elm_lang$core$Basics_ops['++'],
								model.modules,
								{
									ctor: '::',
									_0: _user$project$MathModule$emptyModule,
									_1: {ctor: '[]'}
								})
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'DeleteModule':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							modules: A2(_elm_community$list_extra$List_Extra$removeAt, _p3._0, model.modules)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'PinVariable':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							scope: A2(_user$project$Scope$pin, _p3._0, model.scope)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'UnpinVariable':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							scope: A2(_user$project$Scope$unpin, _p3._0, model.scope)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'SliderChanged':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							scope: A3(
								_user$project$Scope$set,
								_p3._0,
								_user$project$Scope$Real(_p3._1),
								model.scope)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
		}
	});
var _user$project$Main$initialModel = {
	modules: {
		ctor: '::',
		_0: _user$project$MathModule$emptyModule,
		_1: {ctor: '[]'}
	},
	scope: _user$project$Scope$empty
};
var _user$project$Main$init = {ctor: '_Tuple2', _0: _user$project$Main$initialModel, _1: _elm_lang$core$Platform_Cmd$none};
var _user$project$Main$main = _elm_lang$html$Html$program(
	{init: _user$project$Main$init, view: _user$project$Main$view, update: _user$project$Main$update, subscriptions: _user$project$Main$subscriptions})();
var _user$project$Main$Model = F2(
	function (a, b) {
		return {modules: a, scope: b};
	});

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', {"types":{"unions":{"Msg.Msg":{"args":[],"tags":{"ModuleEdited":["Int","MathModule.Msg"],"UnpinVariable":["String"],"DeleteModule":["Int"],"PinVariable":["String"],"SliderChanged":["String","Float"],"AddModule":[],"Noop":[]}},"MathModule.Msg":{"args":[],"tags":{"QuillEdited":["String"],"Recompile":[]}}},"aliases":{},"message":"Msg.Msg"},"versions":{"elm":"0.18.0"}});
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);


//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var EJSON = Package.ejson.EJSON;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package.modules.meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var IdMap;

var require = meteorInstall({"node_modules":{"meteor":{"id-map":{"id-map.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/id-map/id-map.js                                                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _createForOfIteratorHelperLoose;

module.link("@babel/runtime/helpers/createForOfIteratorHelperLoose", {
  default: function (v) {
    _createForOfIteratorHelperLoose = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  IdMap: function () {
    return IdMap;
  }
});

var IdMap = /*#__PURE__*/function () {
  function IdMap(idStringify, idParse) {
    this._map = new Map();
    this._idStringify = idStringify || JSON.stringify;
    this._idParse = idParse || JSON.parse;
  } // Some of these methods are designed to match methods on OrderedDict, since
  // (eg) ObserveMultiplex and _CachingChangeObserver use them interchangeably.
  // (Conceivably, this should be replaced with "UnorderedDict" with a specific
  // set of methods that overlap between the two.)


  var _proto = IdMap.prototype;

  _proto.get = function () {
    function get(id) {
      var key = this._idStringify(id);

      return this._map.get(key);
    }

    return get;
  }();

  _proto.set = function () {
    function set(id, value) {
      var key = this._idStringify(id);

      this._map.set(key, value);
    }

    return set;
  }();

  _proto.remove = function () {
    function remove(id) {
      var key = this._idStringify(id);

      this._map.delete(key);
    }

    return remove;
  }();

  _proto.has = function () {
    function has(id) {
      var key = this._idStringify(id);

      return this._map.has(key);
    }

    return has;
  }();

  _proto.empty = function () {
    function empty() {
      return this._map.size === 0;
    }

    return empty;
  }();

  _proto.clear = function () {
    function clear() {
      this._map.clear();
    }

    return clear;
  }() // Iterates over the items in the map. Return `false` to break the loop.
  ;

  _proto.forEach = function () {
    function forEach(iterator) {
      // don't use _.each, because we can't break out of it.
      for (var _iterator = _createForOfIteratorHelperLoose(this._map), _step; !(_step = _iterator()).done;) {
        var _ref = _step.value;

        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var value = _ref2[1];
        var breakIfFalse = iterator.call(null, value, this._idParse(key));

        if (breakIfFalse === false) {
          return;
        }
      }
    }

    return forEach;
  }();

  _proto.size = function () {
    function size() {
      return this._map.size;
    }

    return size;
  }();

  _proto.setDefault = function () {
    function setDefault(id, def) {
      var key = this._idStringify(id);

      if (this._map.has(key)) {
        return this._map.get(key);
      }

      this._map.set(key, def);

      return def;
    }

    return setDefault;
  }() // Assumes that values are EJSON-cloneable, and that we don't need to clone
  // IDs (ie, that nobody is going to mutate an ObjectId).
  ;

  _proto.clone = function () {
    function clone() {
      var clone = new IdMap(this._idStringify, this._idParse); // copy directly to avoid stringify/parse overhead

      this._map.forEach(function (value, key) {
        clone._map.set(key, EJSON.clone(value));
      });

      return clone;
    }

    return clone;
  }();

  return IdMap;
}();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/id-map/id-map.js");

/* Exports */
Package._define("id-map", exports, {
  IdMap: IdMap
});

})();

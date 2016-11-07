/**
 * Created by gabrielkunkel on 11/4/16 in JavaScript.
 */

'use strict';

import moment from 'moment'

/**
 * @name time_processor
 * @decription Return an object with both a unix timestamp and
 * a natural language timestamp, from a unix timestamp or a
 * natural language timestamp.
 *
 * @param {String} str
 * @returns {{unix: *, natural: *}}
 */
let time_processor = function (str) {
  let _unix, _natural;

  if (time_processor._isUnix(str)) {
    _unix = str;
    _natural = time_processor._toNatural(str);
  }
  else if (time_processor._isNatural(str)) {
    _unix = time_processor._toUnix(str);
    _natural = str;
  }
  else {
    _unix = null;
    _natural = null;
  }

  return {
    unix: _unix,
    natural: _natural
  };
}


/**
 * @name isUnix
 * @description Tests to see if the string is a unix timestamp. We'll
 * use this to find out how the argument we receive to the time_processor
 * function will be processed.
 *
 * @param {String} str
 * @returns {Boolean}
 * @private
 */
time_processor._isUnix = function (str) {
  return !!/^[0-9]{1,10}$/.test(str);
}


/**
 * @name isNatural
 * @description Tests to see if the string is a natural language date
 * in the format of '[Month] [Day of the Month], [Year]'
 * @example _isNatural('February 12 2017') should return true
 *
 * @param {String} str
 * @returns {Boolean}
 * @private
 */
time_processor._isNatural = function (str) {
  let m = moment(str, "MMMM D YYYY" );
  return this._isUnix(str) ? false : m.isValid();
}


/**
 * @name toNatural
 * @description fn that turns unix timestamp into natural language
 *
 * @param {String} str
 * @returns {String}
 * @private
 */
time_processor._toNatural = function (str) {
  if (this._isUnix(str)) {
    return moment(str, "X").format("MMMM D, YYYY");
  }
  else {
    return str;
  }
}


/**
 * @name toUnix
 * @description fn that turns a natural language timestamp into unix
 * timestamp
 *
 * @param {String} str
 * @returns {String}
 * @private
 */
time_processor._toUnix = function (str) {
  if (this._isNatural(str)) {
    return moment(str, "MMMM D YYYY" ).format("X");
  }
  else {
    return str;
  }
}


export default time_processor;
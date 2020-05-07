/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.Event = factory(root.SmallEodClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Event model module.
   * @module model/Event
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>Event</code>.
   * @alias module:model/Event
   * @class
   * @param cases {Number} Cases for this event.
   * @param name {String} Name of event.
   * @param _date {Date} Date of event.
   * @param comments {String} Comments text.
   */
  var exports = function(cases, name, _date, comments) {
    var _this = this;

    _this['cases'] = cases;
    _this['name'] = name;
    _this['date'] = _date;
    _this['comments'] = comments;
  };

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cases')) {
        obj['cases'] = ApiClient.convertToType(data['cases'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Cases for this event.
   * @member {Number} cases
   */
  exports.prototype['cases'] = undefined;
  /**
   * Name of event.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Date of event.
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Comments text.
   * @member {String} comments
   */
  exports.prototype['comments'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));



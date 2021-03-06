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
    root.SmallEodClient.TokenSet = factory(root.SmallEodClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TokenSet model module.
   * @module model/TokenSet
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>TokenSet</code>.
   * @alias module:model/TokenSet
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>TokenSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenSet} obj Optional instance to populate.
   * @return {module:model/TokenSet} The populated <code>TokenSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('lifetime')) {
        obj['lifetime'] = ApiClient.convertToType(data['lifetime'], 'Number');
      }
      if (data.hasOwnProperty('accessToken')) {
        obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} lifetime
   */
  exports.prototype['lifetime'] = undefined;
  /**
   * @member {String} accessToken
   */
  exports.prototype['accessToken'] = undefined;



  return exports;
}));



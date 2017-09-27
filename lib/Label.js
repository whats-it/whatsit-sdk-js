/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             WhatsIt.js is freely distributable.
 */

import Requestable from './Requestable';
import debug from 'debug';
const log = debug('whatsit:label');

/**
 * A Dataset allows scoping of API requests to a particular WhatsIt user.
 */
class Label extends Requestable {
   /**
    * Create a Label.
    * @param {Requestable.auth} [auth] - information required to authenticate to WhatsIt
    * @param {string} [apiBase=https://api.whatsit.net] - the base WhatsIt API URL
    */
   constructor(auth, apiBase) {
      super(auth, apiBase);
   }

   /**
    * Query Label by project's ID
    * @param {object} [projectId] The Project ID of the label to request
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   getDatasetByProjectId(options, cb) {
      return this._request('GET', `/labels`, options, cb);
   }

   /**
    * Add a Label
    * @param {object} [options] - Label data
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   addLabel(options, cb) {
      return this._request('POST', `/labels`, options, cb);
   }
}

module.exports = Label;

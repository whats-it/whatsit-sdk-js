/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             Github.js is freely distributable.
 */
import Requestable from './Requestable';
import debug from 'debug';
const log = debug('whatsit:image');

/**
 * A User allows scoping of API requests to a particular WhatsIt user.
 */
class Image extends Requestable {
   /**
    * Create a User.
    * @param {Requestable.auth} [auth] - information required to authenticate to WhatsIt
    * @param {string} [apiBase=https://api.whatsit.net] - the base WhatsIt API URL
    */
   constructor(auth, apiBase) {
      super(auth, apiBase);
      //this.userId = userId;
      //this.projectId = projectId;
   }

   /**
    * Get the images
    * @param {string} [userId]
    * @param {string} [projectId]
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getImages(userId,projectId, cb) {
      return this._request('GET', `/images/users/${userId}/projects/${projectId}`, null, cb);
   }

   /**
    * Set the image info(objects)
    * @param {object} data - req.body
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   setImages(data, cb) {
      return this._request('POST', '/images', data, cb);
   }
}

module.exports = Image;

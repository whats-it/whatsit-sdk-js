/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             Github.js is freely distributable.
 */

import Requestable from './Requestable';
import debug from 'debug';
const log = debug('whatsit:dataset');

/**
 * A Dataset allows scoping of API requests to a particular WhatsIt user.
 */
class Dataset extends Requestable {
   /**
    * Create a Dataset.
    * @param {Requestable.auth} [auth] - information required to authenticate to WhatsIt
    * @param {string} [apiBase=https://api.whatsit.net] - the base WhatsIt API URL
    */
   constructor(auth, apiBase) {
      super(auth, apiBase);
   }

   /**
    * Add a Dataset
    * @param {object} dataset - A new Dataset data
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   addDataset(dataset, cb) {
      return this._request('POST', `/datasets`, dataset, cb);
   }

   /**
    * Get Datasets
    * @param {object} [projectId] The Project ID of the dataset to request
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   getDatasetByProjectId(projectId, cb) {
      return this._request('GET', `/datasets/projects/${projectId}`, null, cb);
   }

   /**
    * Update a Dataset
    * @param {object} dataset - A update Dataset data
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   // updateDataset(dataset, cb) {
   //    return this._request('POST', `/datasets`, dataset, cb);
   // }

   /**
    * Delete a Dataset
    * @param {object} datasetId - The Dataset ID to delete
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   // deleteDataset(datasetId, cb) {
   //    return this._request('DELETE', `/datasets`, datasetId, cb);
   // }
}

module.exports = Dataset;

/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             WhatsIt.js is freely distributable.
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
    * @param {object} [dataset] - Dataset data to create
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   addDataset(dataset, cb) {
      return this._request('POST', `/datasets`, dataset, cb);
   }

   /**
    * Query datasets by project's ID
    * @param {object} [projectId] The Project ID of the dataset to request
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   getDatasetByProjectId(options, cb) {
      return this._request('GET', `/datasets`, options, cb);
   }

   /**
    * Query dataset by dataset's ID
    * @param datasetId The dataset's ID
    * @param options The query params
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   getDatasetByDatasetId(datasetId, options, cb) {
      return this._request('GET', `/datasets/${datasetId}`, options, cb);
   }

   /**
    * Update dataset
    * @param options A update dataset's content
    * @param datasetId The dataset's id
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   putDataset(options, datasetId, cb) {
      return this._request('PUT', `/datasets/${datasetId}`, options, cb);
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

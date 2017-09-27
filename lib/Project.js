/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             WhatsIs.js is freely distributable.
 */

import Requestable from './Requestable';
import debug from 'debug';
const log = debug('whatsit:project');

/**
 * A Project allows scoping of API requests to a particular WhatsIt user.
 */
class Project extends Requestable {
   /**
    * Create a Project.
    * @param {string} [fullName] - The project to use for user-scoped queries
    * @param {Requestable.auth} [auth] - information required to authenticate to WhatsIt
    * @param {string} [apiBase=https://api.whatsit.net] - the base WhatsIt API URL
    */
   constructor(fullName, auth, apiBase) {
      super(auth, apiBase);
      this.fullName = fullName;
   }

   /**
    * Get project information
    * @param {string} [projectId] The project Id to retrieving
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getProject(projectId, cb) {
     return this._request('GET', `/projects/${projectId}`, null, cb);
   }

   /**
    * Get user's project list
    * @param {string} [userId] Project owner or members's id
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getProjectsByUser(options, cb) {
      return this._request('GET', `/projects`, options, cb);
   }

   /**
    * Add a repo as a Project
    * @param {object} options - Project information to create
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   addProject(options, cb) {
      return this._request('POST', '/projects', options, cb);
   }

   /**
    * Update data of project
    * @param {string} [projectId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateProject(projectId, options, cb) {
      return this._request('PUT', `/projects/${projectId}`, options, cb);
   }

   /**
    * Retrieve Trainset
    * @param {string} [projectId] The project's id that to retrieve
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   getTrainset(projectId, options, cb) {
      return this._request('GET', `/projects/${projectId}/trainset`, options, cb);
   }
}

module.exports = Project;

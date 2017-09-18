/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             WhatsIs.js is freely distributable.
 */
/* eslint valid-jsdoc: ["error", {"requireReturnDescription": false}] */

import User from './User';
import Project from './Project';
import Dataset from './Dataset';

/**
 * WhatsIt encapsulates the functionality to create various API wrapper objects.
 */
class WhatsIt {
   /**
    * Create a new WhatsIt.
    * @param {Requestable.auth} [auth] - the credentials to authenticate to WhatsIt. If auth is
    *                                  not provided requests will be made unauthenticated
    * @param {string} [apiBase=https://api.whatsit.net] - the base WhatsIt API URL
    */
   constructor(auth, apiBase = 'http://api.whatsit.net') {
    // constructor(auth, apiBase = 'http://127.0.0.1:3000') {
      this.__apiBase = apiBase;
      this.__auth = auth || {};
   }

   /**
    * Setup base url
    * @param {string} [apiBase] Base URL
    */
   setBase(apiBase) {
      this.__apiBase = apiBase;
   }

   /**
    * Retrieve base URL for API
    * @return {string|*}
    */
   getBase() {
      return this.__apiBase;
   }

   /**
    * Create a new User wrapper
    * @param {string} [user] - the name of the user to get information about
    *                        leave undefined for the authenticated user
    * @return {User}
    */
   getUser(user) {
      return new User(user, this.__auth, this.__apiBase);
   }

   /**
    * @deprecated This function name make a confusion
    *
    * Create a new Project wrapper
    * @param {string} [fullName] - the name of the project to get information about
    *                        leave undefined for the authenticated user
    * @return {Project}
    */
   getProject(fullName) {
      return new Project(fullName, this.__auth, this.__apiBase);
   }

   /**
    * Create a new Project wrapper.
    * @param {string} [fullName] - the name of the project to get information about
    *                        leave undefined for the authenticated user
    * @return {Project}
    */
   getProjectInstance(fullName) {
      return new Project(fullName, this.__auth, this.__apiBase);
   }

   /**
    * @deprecated This function name make a confusion
    *
    * Create a new Dataset wrapper
    * @param name
    * @return {Dataset}
    */
   getDataset() {
      return new Dataset(this.__auth, this.__apiBase);
   }

   /**
    * Create a new Dataset wrapper
    * @param name
    * @return {Dataset}
    */
   getDatasetInstance() {
      return new Dataset(this.__auth, this.__apiBase);
   }

}

module.exports = WhatsIt;

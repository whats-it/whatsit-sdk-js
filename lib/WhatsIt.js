/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             Github.js is freely distributable.
 */
/* eslint valid-jsdoc: ["error", {"requireReturnDescription": false}] */

import User from './User';
import Project from './Project';
import Instance from './Instance';
import Schedule from './Schedule';
import Scheduler from './Scheduler';
import Image from './Image';
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
      this.__apiBase = apiBase;
      this.__auth = auth || {};
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
    * Create a new Project wrapper
    * @param {string} [fullName] - the name of the project to get information about
    *                        leave undefined for the authenticated user
    * @return {Project}
    */
   getProject(fullName) {
      return new Project(fullName, this.__auth, this.__apiBase);
   }

   /**
    * Create a new Instance wrapper
    * @param {string} [instance] - the id of the instance to get information about
    *                        leave undefined for the authenticated user
    * @return {Instance}
    */
   getInstance(instance) {
      return new Instance(instance, this.__auth, this.__apiBase);
   }

   /**
    * Create a new Schedule wrapper
    * @param {string} [scheduleId] - the id of the instance to get information about
    *                        leave undefined for the authenticated user
    * @return {Schedule}
    */
   getSchedule(scheduleId) {
      return new Schedule(scheduleId, this.__auth, this.__apiBase);
   }

   /**
    * Create a new Scheduler wrapper
    * @param {string} [schedulerId] - the id of the instance to get information about
    *                        leave undefined for the authenticated user
    * @return {Schedule}
    */
   getScheduler(schedulerId) {
      return new Scheduler(schedulerId, this.__auth, this.__apiBase);
   }

   /**
    * Create a new Images wrapper
    * @return {Image}
    */
   getImageInstance() {
      return new Image(this.__auth, this.__apiBase);
   }

   /**
    * Create a new Dataset wrapper
    * @param name
    * @return {Dataset}
    */
   getDataset() {
      return new Dataset(this.__auth, this.__apiBase);
   }

}

module.exports = WhatsIt;

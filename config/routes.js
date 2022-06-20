/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "GET /user": {
    controller: "UserController",
    action: "getAll",
    cors: {
      allowOrigins: "*",
      allowRequestHeaders: "Content-Type, Authorization",
    },
  },

  "GET /user/*": {
    controller: "UserController",
    action: "get",
    cors: {
      allowOrigins: "*",
      allowRequestHeaders: "Content-Type, Authorization",
    },
  },

  "POST /user": {
    controller: "UserController",
    action: "create",
    cors: {
      allowOrigins: "*",
      allowRequestHeaders: "Content-Type, Authorization",
    },
  },

  "put /user/*": {
    controller: "UserController",
    action: "update",
    cors: {
      allowOrigins: "*",
      allowRequestHeaders: "Content-Type, Authorization",
    },
  },

  "GET /booking": {
    controller: "BookingController",
    action: "getAll",
    cors: {
      allowOrigins: "*",
      allowRequestHeaders: "Content-Type, Authorization",
    },
  },

  "GET /booking/*": {
    controller: "BookingController",
    action: "get",
    cors: {
      allowOrigins: "*",
      allowRequestHeaders: "Content-Type, Authorization",
    },
  },

  "POST /booking/*": {
    controller: "BookingController",
    action: "create",
    cors: {
      allowOrigins: "*",
      allowRequestHeaders: "Content-Type, Authorization",
    },
  },

  "PUT /booking/:id": {
    controller: "BookingController",
    action: "update",
    cors: {
      allowOrigins: "*",
      allowRequestHeaders: "Content-Type, Authorization",
    },
  },

  "POST /login": {
    controller: "UserController",
    action: "login",
    cors: {
      allowOrigins: "*",
      allowRequestHeaders: "Content-Type, Authorization",
    },
  },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};

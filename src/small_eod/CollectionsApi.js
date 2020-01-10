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
 * OpenAPI Generator version: 4.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Collection', 'model/Event', 'model/Letter', 'model/ModelCase', 'model/Note'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Collection'), require('../model/Event'), require('../model/Letter'), require('../model/ModelCase'), require('../model/Note'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.CollectionsApi = factory(root.SmallEodClient.ApiClient, root.SmallEodClient.Collection, root.SmallEodClient.Event, root.SmallEodClient.Letter, root.SmallEodClient.ModelCase, root.SmallEodClient.Note);
  }
}(this, function(ApiClient, Collection, Event, Letter, ModelCase, Note) {
  'use strict';

  /**
   * Collections service.
   * @module small_eod/CollectionsApi
   * @version 1.0.2
   */

  /**
   * Constructs a new CollectionsApi. 
   * @alias module:small_eod/CollectionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.collectionsCasesEventsListWithHttpInfo = function(casePk, collectionPk) {
      var postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesEventsList");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesEventsList");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Event];
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/events/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.collectionsCasesEventsList = function(casePk, collectionPk) {
      return this.collectionsCasesEventsListWithHttpInfo(casePk, collectionPk)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */
    this.collectionsCasesEventsReadWithHttpInfo = function(casePk, collectionPk, id) {
      var postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesEventsRead");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesEventsRead");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesEventsRead");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk,
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Event;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/events/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */
    this.collectionsCasesEventsRead = function(casePk, collectionPk, id) {
      return this.collectionsCasesEventsReadWithHttpInfo(casePk, collectionPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Letter>} and HTTP response
     */
    this.collectionsCasesLettersListWithHttpInfo = function(casePk, collectionPk) {
      var postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesLettersList");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesLettersList");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Letter];
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/letters/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Letter>}
     */
    this.collectionsCasesLettersList = function(casePk, collectionPk) {
      return this.collectionsCasesLettersListWithHttpInfo(casePk, collectionPk)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Letter} and HTTP response
     */
    this.collectionsCasesLettersReadWithHttpInfo = function(casePk, collectionPk, id) {
      var postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesLettersRead");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesLettersRead");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesLettersRead");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk,
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Letter;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/letters/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Letter}
     */
    this.collectionsCasesLettersRead = function(casePk, collectionPk, id) {
      return this.collectionsCasesLettersReadWithHttpInfo(casePk, collectionPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} collectionPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ModelCase>} and HTTP response
     */
    this.collectionsCasesListWithHttpInfo = function(collectionPk) {
      var postBody = null;
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesList");
      }

      var pathParams = {
        'collection_pk': collectionPk
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [ModelCase];
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} collectionPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ModelCase>}
     */
    this.collectionsCasesList = function(collectionPk) {
      return this.collectionsCasesListWithHttpInfo(collectionPk)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Note>} and HTTP response
     */
    this.collectionsCasesNotesListWithHttpInfo = function(casePk, collectionPk) {
      var postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesNotesList");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesNotesList");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Note];
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/notes/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Note>}
     */
    this.collectionsCasesNotesList = function(casePk, collectionPk) {
      return this.collectionsCasesNotesListWithHttpInfo(casePk, collectionPk)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Note} and HTTP response
     */
    this.collectionsCasesNotesReadWithHttpInfo = function(casePk, collectionPk, id) {
      var postBody = null;
      // verify the required parameter 'casePk' is set
      if (casePk === undefined || casePk === null) {
        throw new Error("Missing the required parameter 'casePk' when calling collectionsCasesNotesRead");
      }
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesNotesRead");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesNotesRead");
      }

      var pathParams = {
        'case_pk': casePk,
        'collection_pk': collectionPk,
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Note;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{case_pk}/notes/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} casePk 
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Note}
     */
    this.collectionsCasesNotesRead = function(casePk, collectionPk, id) {
      return this.collectionsCasesNotesReadWithHttpInfo(casePk, collectionPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelCase} and HTTP response
     */
    this.collectionsCasesReadWithHttpInfo = function(collectionPk, id) {
      var postBody = null;
      // verify the required parameter 'collectionPk' is set
      if (collectionPk === undefined || collectionPk === null) {
        throw new Error("Missing the required parameter 'collectionPk' when calling collectionsCasesRead");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsCasesRead");
      }

      var pathParams = {
        'collection_pk': collectionPk,
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ModelCase;
      return this.apiClient.callApi(
        '/collections/{collection_pk}/cases/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} collectionPk 
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelCase}
     */
    this.collectionsCasesRead = function(collectionPk, id) {
      return this.collectionsCasesReadWithHttpInfo(collectionPk, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */
    this.collectionsCreateWithHttpInfo = function(data) {
      var postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling collectionsCreate");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Collection;
      return this.apiClient.callApi(
        '/collections/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */
    this.collectionsCreate = function(data) {
      return this.collectionsCreateWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.collectionsDeleteWithHttpInfo = function(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/collections/{id}/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.collectionsDelete = function(id) {
      return this.collectionsDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Collection>} and HTTP response
     */
    this.collectionsListWithHttpInfo = function() {
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Collection];
      return this.apiClient.callApi(
        '/collections/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Collection>}
     */
    this.collectionsList = function() {
      return this.collectionsListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */
    this.collectionsPartialUpdateWithHttpInfo = function(id, data) {
      var postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling collectionsPartialUpdate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Collection;
      return this.apiClient.callApi(
        '/collections/{id}/', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */
    this.collectionsPartialUpdate = function(id, data) {
      return this.collectionsPartialUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */
    this.collectionsReadWithHttpInfo = function(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsRead");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Collection;
      return this.apiClient.callApi(
        '/collections/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */
    this.collectionsRead = function(id) {
      return this.collectionsReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Collection} and HTTP response
     */
    this.collectionsUpdateWithHttpInfo = function(id, data) {
      var postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling collectionsUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling collectionsUpdate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Collection;
      return this.apiClient.callApi(
        '/collections/{id}/', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this collection.
     * @param {module:model/Collection} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Collection}
     */
    this.collectionsUpdate = function(id, data) {
      return this.collectionsUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
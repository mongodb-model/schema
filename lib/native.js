module.exports = (option = {}) => `'use strict';

/*
|--------------------------------------------------------------------------
| ${option.name} Schema
|--------------------------------------------------------------------------
|
| Here we you may add more options (keys) to your schema.
|
|
*/


/*
|--------------------------------------------------------------------------
| ${option.name}
|--------------------------------------------------------------------------
*/

module.exports = {
    validator: {
       $jsonSchema: {
          bsonType: "${option.type}",
          title: "${option.name.charAt(0).toUpperCase() + option.name.slice(1)} Object Validation",
          required: [],
          properties: {
             name: {
                bsonType: "string",
                description: "'name' must be a string and is required"
             },
             created_at: {
                bsonType: "date",
                description: "'created_at' must be a date"
             },
             updated_at: {
                bsonType: "date",
                description: "'updated_at' must be a date"
             },
          }
       }
    }
 };
`


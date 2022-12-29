'use strict';
/*
|--------------------------------------------------------------------------
| undefined Model
|--------------------------------------------------------------------------
|
| undefined extends the BaseModel (Model) class and thus has everything
| the BaseModel has.
|
|
*/
const Model = require('../../../');

 class undefined extends Model{

    constructor(dbOptions = {collection: 'undefined'},...options){
        super(dbOptions);
        options.forEach(option => {
            if(Object.keys(option).length > 0){
                Object.keys(option).forEach(key => {
                    if(!this[key]) this[key] = option[key];
                })
            }
        })
    }
 }

 module.exports = undefined;

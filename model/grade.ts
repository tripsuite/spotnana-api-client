/**
 * Trip API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { GradeId } from './gradeId';

/**
* Grade details.
*/
export class Grade {
    /**
    * Count of employees in the grade
    */
    'employeeCount'?: number;
    'id': GradeId;
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employeeCount",
            "baseName": "employeeCount",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "GradeId"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Grade.attributeTypeMap;
    }
}

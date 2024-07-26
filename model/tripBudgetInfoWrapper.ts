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
import { TripBudgetInfo } from './tripBudgetInfo';

/**
* Trip budget info wrapper
*/
export class TripBudgetInfoWrapper {
    'tripBudgetInfo'?: TripBudgetInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tripBudgetInfo",
            "baseName": "tripBudgetInfo",
            "type": "TripBudgetInfo"
        }    ];

    static getAttributeTypeMap() {
        return TripBudgetInfoWrapper.attributeTypeMap;
    }
}

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
import { RailCancellationDetails } from './railCancellationDetails';

/**
* Wrapper for RailCancellationDetails
*/
export class RailCancellationDetailsWrapper {
    'rail'?: RailCancellationDetails;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rail",
            "baseName": "rail",
            "type": "RailCancellationDetails"
        }    ];

    static getAttributeTypeMap() {
        return RailCancellationDetailsWrapper.attributeTypeMap;
    }
}

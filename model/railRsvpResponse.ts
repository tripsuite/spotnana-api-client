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

/**
* Rail rsvp response
*/
export class RailRsvpResponse {
    /**
    * Whether rail booking is needed by the traveler or not
    */
    'notNeeded'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "notNeeded",
            "baseName": "notNeeded",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return RailRsvpResponse.attributeTypeMap;
    }
}


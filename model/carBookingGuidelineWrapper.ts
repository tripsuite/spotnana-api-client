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
import { CarBookingGuideline } from './carBookingGuideline';

/**
* Wrapper for CarBookingGuideline
*/
export class CarBookingGuidelineWrapper {
    'carBookingGuideLine'?: CarBookingGuideline;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "carBookingGuideLine",
            "baseName": "carBookingGuideLine",
            "type": "CarBookingGuideline"
        }    ];

    static getAttributeTypeMap() {
        return CarBookingGuidelineWrapper.attributeTypeMap;
    }
}


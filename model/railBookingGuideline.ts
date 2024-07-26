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
import { EventBookingWindow } from './eventBookingWindow';

/**
* Rail related guidelines
*/
export class RailBookingGuideline {
    /**
    * Booking window for rail-in-event.
    */
    'arrivalBookingWindow': EventBookingWindow;
    /**
    * Booking window for rail-out-event.
    */
    'departureBookingWindow': EventBookingWindow;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "arrivalBookingWindow",
            "baseName": "arrivalBookingWindow",
            "type": "EventBookingWindow"
        },
        {
            "name": "departureBookingWindow",
            "baseName": "departureBookingWindow",
            "type": "EventBookingWindow"
        }    ];

    static getAttributeTypeMap() {
        return RailBookingGuideline.attributeTypeMap;
    }
}

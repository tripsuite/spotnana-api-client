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
import { AirBookingGuideline } from './airBookingGuideline';
import { AirBookingGuidelineWrapper } from './airBookingGuidelineWrapper';
import { CarBookingGuideline } from './carBookingGuideline';
import { CarBookingGuidelineWrapper } from './carBookingGuidelineWrapper';
import { HotelBookingGuideline } from './hotelBookingGuideline';
import { HotelBookingGuidelineWrapper } from './hotelBookingGuidelineWrapper';
import { RailBookingGuideline } from './railBookingGuideline';
import { RailBookingGuidelineWrapper } from './railBookingGuidelineWrapper';

/**
* Booking details allowed for the event
*/
export class EventBookingGuideline {
    /**
    * Number of guests allowed to be booked for this booking
    */
    'numGuestsAllowed'?: number;
    'airBookingGuideLine'?: AirBookingGuideline;
    'hotelBookingGuideLine'?: HotelBookingGuideline;
    'carBookingGuideLine'?: CarBookingGuideline;
    'railBookingGuideLine'?: RailBookingGuideline;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "numGuestsAllowed",
            "baseName": "numGuestsAllowed",
            "type": "number"
        },
        {
            "name": "airBookingGuideLine",
            "baseName": "airBookingGuideLine",
            "type": "AirBookingGuideline"
        },
        {
            "name": "hotelBookingGuideLine",
            "baseName": "hotelBookingGuideLine",
            "type": "HotelBookingGuideline"
        },
        {
            "name": "carBookingGuideLine",
            "baseName": "carBookingGuideLine",
            "type": "CarBookingGuideline"
        },
        {
            "name": "railBookingGuideLine",
            "baseName": "railBookingGuideLine",
            "type": "RailBookingGuideline"
        }    ];

    static getAttributeTypeMap() {
        return EventBookingGuideline.attributeTypeMap;
    }
}

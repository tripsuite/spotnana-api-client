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
import { BookingOtherAncillariesInner } from './bookingOtherAncillariesInner';
import { BookingOtherChargesInner } from './bookingOtherChargesInner';
import { BookingSeatsInner } from './bookingSeatsInner';
import { Itinerary } from './itinerary';
import { LuggageInfo } from './luggageInfo';

/**
* Info about all booked items
*/
export class Booking {
    /**
    * Seat booking info
    */
    'seats'?: Array<BookingSeatsInner>;
    /**
    * Additional luggage info
    */
    'luggageDetails'?: Array<LuggageInfo>;
    /**
    * Ancillaries other than seat and luggage
    */
    'otherAncillaries'?: Array<BookingOtherAncillariesInner>;
    'itinerary'?: Itinerary;
    /**
    * Extra charges over flight fare, seat and luggage.
    */
    'otherCharges'?: Array<BookingOtherChargesInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "seats",
            "baseName": "seats",
            "type": "Array<BookingSeatsInner>"
        },
        {
            "name": "luggageDetails",
            "baseName": "luggageDetails",
            "type": "Array<LuggageInfo>"
        },
        {
            "name": "otherAncillaries",
            "baseName": "otherAncillaries",
            "type": "Array<BookingOtherAncillariesInner>"
        },
        {
            "name": "itinerary",
            "baseName": "itinerary",
            "type": "Itinerary"
        },
        {
            "name": "otherCharges",
            "baseName": "otherCharges",
            "type": "Array<BookingOtherChargesInner>"
        }    ];

    static getAttributeTypeMap() {
        return Booking.attributeTypeMap;
    }
}


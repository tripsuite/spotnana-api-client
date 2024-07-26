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
import { DateTimeOffset } from './dateTimeOffset';

/**
* Rail ticket.
*/
export class RailPnrTicket {
    /**
    * Ticket issued date time.
    */
    'issuedDateTime'?: DateTimeOffset;
    /**
    * Ticket number.
    */
    'ticketNumber': string;
    /**
    * List of legs covered by this ticket.
    */
    'legs': Array<number>;
    /**
    * List of passenger for this ticket.
    */
    'passengerRefs': Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "issuedDateTime",
            "baseName": "issuedDateTime",
            "type": "DateTimeOffset"
        },
        {
            "name": "ticketNumber",
            "baseName": "ticketNumber",
            "type": "string"
        },
        {
            "name": "legs",
            "baseName": "legs",
            "type": "Array<number>"
        },
        {
            "name": "passengerRefs",
            "baseName": "passengerRefs",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return RailPnrTicket.attributeTypeMap;
    }
}

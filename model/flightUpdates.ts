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
import { DateTimeLocal } from './dateTimeLocal';
import { Gate } from './gate';

/**
* Flight alerts like departure datetime change, gate change, etc.
*/
export class FlightUpdates {
    /**
    * Departure date time before this alert
    */
    'previousDepartureDateTime'?: DateTimeLocal;
    /**
    * Arrival date time before this alert
    */
    'previousArrivalDateTime'?: DateTimeLocal;
    /**
    * Departure gate before this alert
    */
    'previousDepartureGate'?: Gate;
    /**
    * Arrival gate before this alert
    */
    'previousArrivalGate'?: Gate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "previousDepartureDateTime",
            "baseName": "previousDepartureDateTime",
            "type": "DateTimeLocal"
        },
        {
            "name": "previousArrivalDateTime",
            "baseName": "previousArrivalDateTime",
            "type": "DateTimeLocal"
        },
        {
            "name": "previousDepartureGate",
            "baseName": "previousDepartureGate",
            "type": "Gate"
        },
        {
            "name": "previousArrivalGate",
            "baseName": "previousArrivalGate",
            "type": "Gate"
        }    ];

    static getAttributeTypeMap() {
        return FlightUpdates.attributeTypeMap;
    }
}


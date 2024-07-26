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

export class FlightCoupon {
    /**
    * Index of leg to which this coupon belongs
    */
    'legIdx'?: number;
    /**
    * Index of flight in it\'s leg to which this coupon belongs
    */
    'flightIdx'?: number;
    /**
    * Flight status
    */
    'status'?: FlightCoupon.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "legIdx",
            "baseName": "legIdx",
            "type": "number"
        },
        {
            "name": "flightIdx",
            "baseName": "flightIdx",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "FlightCoupon.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return FlightCoupon.attributeTypeMap;
    }
}

export namespace FlightCoupon {
    export enum StatusEnum {
        Unknown = <any> 'UNKNOWN',
        AirportControl = <any> 'AIRPORT_CONTROL',
        Lifted = <any> 'LIFTED',
        CheckedIn = <any> 'CHECKED_IN',
        Exchanged = <any> 'EXCHANGED',
        Flown = <any> 'FLOWN',
        NotFlown = <any> 'NOT_FLOWN',
        Refunded = <any> 'REFUNDED',
        Voided = <any> 'VOIDED',
        Printed = <any> 'PRINTED',
        IrregularOperations = <any> 'IRREGULAR_OPERATIONS',
        PrintExchange = <any> 'PRINT_EXCHANGE',
        PaperTicket = <any> 'PAPER_TICKET',
        Suspended = <any> 'SUSPENDED'
    }
}

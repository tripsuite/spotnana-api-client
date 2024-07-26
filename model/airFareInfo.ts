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
import { FareAmount } from './fareAmount';
import { FlightCredits } from './flightCredits';
import { Money } from './money';

/**
* Fare breakup for cancellation.
*/
export class AirFareInfo {
    /**
    * Total fare charged.
    */
    'totalFare': FareAmount;
    /**
    * Used fare component.
    */
    'usedFare': FareAmount;
    /**
    * Non refundable fare.
    */
    'nonRefundableFare': FareAmount;
    /**
    * Cancellation fee.
    */
    'cancellationFee': FareAmount;
    /**
    * Non refundable merchant fee.
    */
    'merchantFee': Money;
    /**
    * Total refund amount.
    */
    'refund': FareAmount;
    /**
    * Flight credits info for the cases where the ticket can be converted to unused credits 
    */
    'flightCredits'?: FlightCredits;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "totalFare",
            "baseName": "totalFare",
            "type": "FareAmount"
        },
        {
            "name": "usedFare",
            "baseName": "usedFare",
            "type": "FareAmount"
        },
        {
            "name": "nonRefundableFare",
            "baseName": "nonRefundableFare",
            "type": "FareAmount"
        },
        {
            "name": "cancellationFee",
            "baseName": "cancellationFee",
            "type": "FareAmount"
        },
        {
            "name": "merchantFee",
            "baseName": "merchantFee",
            "type": "Money"
        },
        {
            "name": "refund",
            "baseName": "refund",
            "type": "FareAmount"
        },
        {
            "name": "flightCredits",
            "baseName": "flightCredits",
            "type": "FlightCredits"
        }    ];

    static getAttributeTypeMap() {
        return AirFareInfo.attributeTypeMap;
    }
}


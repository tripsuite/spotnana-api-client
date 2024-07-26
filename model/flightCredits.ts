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

/**
* Flight credits for a traveler.
*/
export class FlightCredits {
    /**
    * Amount of flight credits.
    */
    'totalCreditAmount': FareAmount;
    /**
    * Change penalty applicable for using this credit.
    */
    'changePenalty': FareAmount;
    /**
    * Net credit amount (total credit amount - change penalty)
    */
    'netCreditAmount': FareAmount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "totalCreditAmount",
            "baseName": "totalCreditAmount",
            "type": "FareAmount"
        },
        {
            "name": "changePenalty",
            "baseName": "changePenalty",
            "type": "FareAmount"
        },
        {
            "name": "netCreditAmount",
            "baseName": "netCreditAmount",
            "type": "FareAmount"
        }    ];

    static getAttributeTypeMap() {
        return FlightCredits.attributeTypeMap;
    }
}

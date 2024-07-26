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
* Price Summary
*/
export class RateMetadata {
    'negotiatedRateType'?: RateMetadata.NegotiatedRateTypeEnum;
    /**
    * the non negotiated rate or the market rate.
    */
    'publishedRate'?: FareAmount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "negotiatedRateType",
            "baseName": "negotiatedRateType",
            "type": "RateMetadata.NegotiatedRateTypeEnum"
        },
        {
            "name": "publishedRate",
            "baseName": "publishedRate",
            "type": "FareAmount"
        }    ];

    static getAttributeTypeMap() {
        return RateMetadata.attributeTypeMap;
    }
}

export namespace RateMetadata {
    export enum NegotiatedRateTypeEnum {
        NegotiatedRateUnknown = <any> 'NEGOTIATED_RATE_UNKNOWN',
        None = <any> 'NONE',
        CorporateRate = <any> 'CORPORATE_RATE',
        AgencyRate = <any> 'AGENCY_RATE'
    }
}
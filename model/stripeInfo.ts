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

/**
* Stripe payment gateway information
*/
export class StripeInfo {
    /**
    * Stripe account id
    */
    'accountId'?: string;
    /**
    * Stripe account display name as seen on the stripe dashboard
    */
    'accountDisplayName'?: string;
    /**
    * Gateway-id of platform account when this gateway is a connected account
    */
    'platformAccountGatewayId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "accountDisplayName",
            "baseName": "accountDisplayName",
            "type": "string"
        },
        {
            "name": "platformAccountGatewayId",
            "baseName": "platformAccountGatewayId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StripeInfo.attributeTypeMap;
    }
}

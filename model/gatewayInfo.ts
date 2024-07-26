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
import { StripeInfo } from './stripeInfo';
import { StripeInfoWrapper } from './stripeInfoWrapper';

/**
* Payment gateway information
*/
export class GatewayInfo {
    'stripeInfo': StripeInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "stripeInfo",
            "baseName": "stripeInfo",
            "type": "StripeInfo"
        }    ];

    static getAttributeTypeMap() {
        return GatewayInfo.attributeTypeMap;
    }
}

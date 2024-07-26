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
import { SabrePnrRemarkType } from './sabrePnrRemarkType';

/**
* Sabre Remark
*/
export class SabrePnrRemark {
    'type'?: SabrePnrRemarkType;
    /**
    * ThirdPartyPnrRemark
    */
    'text'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SabrePnrRemarkType"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SabrePnrRemark.attributeTypeMap;
    }
}

export namespace SabrePnrRemark {
}

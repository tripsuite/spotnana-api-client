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
import { Card } from './card';

/**
* Metadata for Card payment source.
*/
export class CardMetadata {
    'card': Card;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "card",
            "baseName": "card",
            "type": "Card"
        }    ];

    static getAttributeTypeMap() {
        return CardMetadata.attributeTypeMap;
    }
}

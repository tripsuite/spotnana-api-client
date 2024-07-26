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
import { CompanySpecifiedAttributeLegalEntity } from './companySpecifiedAttributeLegalEntity';

/**
* Legal entity of the traveler
*/
export class TravelerLegalEntity {
    /**
    * Legal entity ID
    */
    'id'?: string;
    /**
    * Name of the legal entity
    */
    'name'?: string;
    /**
    * EIN of the traveler
    */
    'ein'?: string;
    /**
    * External Id of the legal entity
    */
    'externalId'?: string;
    'companySpecifiedAttributes'?: Array<CompanySpecifiedAttributeLegalEntity>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ein",
            "baseName": "ein",
            "type": "string"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "companySpecifiedAttributes",
            "baseName": "companySpecifiedAttributes",
            "type": "Array<CompanySpecifiedAttributeLegalEntity>"
        }    ];

    static getAttributeTypeMap() {
        return TravelerLegalEntity.attributeTypeMap;
    }
}

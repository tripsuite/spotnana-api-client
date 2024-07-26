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
import { CompanyConfigSource } from './companyConfigSource';
import { CompanyConfigSourceWrapper } from './companyConfigSourceWrapper';

/**
* Metadata information for the option source.
*/
export class OptionSourceMetadata {
    'companyConfig'?: CompanyConfigSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "companyConfig",
            "baseName": "companyConfig",
            "type": "CompanyConfigSource"
        }    ];

    static getAttributeTypeMap() {
        return OptionSourceMetadata.attributeTypeMap;
    }
}

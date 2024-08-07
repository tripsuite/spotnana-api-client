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
import { ProgramDetails } from './programDetails';
import { UATPInformation } from './uATPInformation';

/**
* Details for UAPassPlus Metadata.
*/
export class UAPassPlusMetadata {
    'programDetails': ProgramDetails;
    'uatpInfo': UATPInformation;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "programDetails",
            "baseName": "programDetails",
            "type": "ProgramDetails"
        },
        {
            "name": "uatpInfo",
            "baseName": "uatpInfo",
            "type": "UATPInformation"
        }    ];

    static getAttributeTypeMap() {
        return UAPassPlusMetadata.attributeTypeMap;
    }
}


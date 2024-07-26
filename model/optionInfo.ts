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
import { Option } from './option';
import { OptionSource } from './optionSource';
import { OptionSourceMetadata } from './optionSourceMetadata';

/**
* Options related information for the question.
*/
export class OptionInfo {
    'source': OptionSource;
    'sourceMetadata'?: OptionSourceMetadata;
    /**
    * Total number of options
    */
    'totalNumOptions'?: number;
    /**
    * Available options for the question. This will contain only max 10 options if only  summary is requested. 
    */
    'options'?: Array<Option>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "source",
            "baseName": "source",
            "type": "OptionSource"
        },
        {
            "name": "sourceMetadata",
            "baseName": "sourceMetadata",
            "type": "OptionSourceMetadata"
        },
        {
            "name": "totalNumOptions",
            "baseName": "totalNumOptions",
            "type": "number"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<Option>"
        }    ];

    static getAttributeTypeMap() {
        return OptionInfo.attributeTypeMap;
    }
}

export namespace OptionInfo {
}
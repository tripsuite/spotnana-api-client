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
import { FlightMetadata } from './flightMetadata';
import { FlightMetadataWrapper } from './flightMetadataWrapper';
import { LegMetadata } from './legMetadata';
import { LegMetadataWrapper } from './legMetadataWrapper';

/**
* Metadata when document is associated to pnr entity.
*/
export class PnrMetadata {
    'flightMetadata'?: FlightMetadata;
    'legMetadata'?: LegMetadata;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "flightMetadata",
            "baseName": "flightMetadata",
            "type": "FlightMetadata"
        },
        {
            "name": "legMetadata",
            "baseName": "legMetadata",
            "type": "LegMetadata"
        }    ];

    static getAttributeTypeMap() {
        return PnrMetadata.attributeTypeMap;
    }
}

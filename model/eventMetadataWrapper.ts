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
import { EventEntityMetadata } from './eventEntityMetadata';

export class EventMetadataWrapper {
    'eventMetadata'?: EventEntityMetadata;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eventMetadata",
            "baseName": "eventMetadata",
            "type": "EventEntityMetadata"
        }    ];

    static getAttributeTypeMap() {
        return EventMetadataWrapper.attributeTypeMap;
    }
}

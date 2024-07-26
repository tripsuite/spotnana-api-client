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
import { DateTimeRange } from './dateTimeRange';

/**
* Operating schedule of vendor
*/
export class LocationOperatingSchedule {
    /**
    * Operating schedule interval
    */
    'interval': Array<DateTimeRange>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "interval",
            "baseName": "interval",
            "type": "Array<DateTimeRange>"
        }    ];

    static getAttributeTypeMap() {
        return LocationOperatingSchedule.attributeTypeMap;
    }
}

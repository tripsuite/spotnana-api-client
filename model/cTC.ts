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
import { Payment } from './payment';

/**
* Cost of services, charged to customer
*/
export class CTC {
    /**
    * Potentially multiple payments that spotnana will charge the clients
    */
    'payments': Array<Payment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<Payment>"
        }    ];

    static getAttributeTypeMap() {
        return CTC.attributeTypeMap;
    }
}

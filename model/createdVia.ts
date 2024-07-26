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

/**
* Indicates the source of creation of PNR, like SHELL, OBT, etc.
*/
export enum CreatedVia {
    Offline = <any> 'OFFLINE',
    Obt = <any> 'OBT',
    Shell = <any> 'SHELL',
    Passive = <any> 'PASSIVE',
    Api = <any> 'API'
}

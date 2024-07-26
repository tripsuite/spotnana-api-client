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
* Status of assigned seat.
*/
export enum FlightSeatStatus {
    Confirmed = <any> 'CONFIRMED',
    Pending = <any> 'PENDING',
    Unknown = <any> 'UNKNOWN',
    Cancelled = <any> 'CANCELLED'
}

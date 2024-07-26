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
* Type of booked fare
*/
export enum RateType {
    RateTypeUnknown = <any> 'RATE_TYPE_UNKNOWN',
    Published = <any> 'PUBLISHED',
    TmcNegotiated = <any> 'TMC_NEGOTIATED',
    CompanyNegotiated = <any> 'COMPANY_NEGOTIATED'
}

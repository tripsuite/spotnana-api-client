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
import { CompanyId } from './companyId';
import { CompanySpecifiedAttribute } from './companySpecifiedAttribute';
import { CostCenter } from './costCenter';
import { DepartmentV2 } from './departmentV2';
import { Grade } from './grade';
import { Office } from './office';
import { TravelerCompanyInfo } from './travelerCompanyInfo';
import { TravelerLegalEntity } from './travelerLegalEntity';
import { WorkerType } from './workerType';

/**
* Business information of the traveler
*/
export class TravelerBusinessInfo {
    'legalEntity'?: TravelerLegalEntity;
    'companyId'?: CompanyId;
    'companyInfo'?: TravelerCompanyInfo;
    'workerType'?: WorkerType;
    /**
    * Employee id of the user
    */
    'employeeId'?: string;
    'companySpecifiedAttributes'?: Array<CompanySpecifiedAttribute>;
    'userCostCenter'?: CostCenter;
    'grade'?: Grade;
    'office'?: Office;
    'department'?: DepartmentV2;
    /**
    * Code used for accounting.
    */
    'accountingCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "legalEntity",
            "baseName": "legalEntity",
            "type": "TravelerLegalEntity"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "CompanyId"
        },
        {
            "name": "companyInfo",
            "baseName": "companyInfo",
            "type": "TravelerCompanyInfo"
        },
        {
            "name": "workerType",
            "baseName": "workerType",
            "type": "WorkerType"
        },
        {
            "name": "employeeId",
            "baseName": "employeeId",
            "type": "string"
        },
        {
            "name": "companySpecifiedAttributes",
            "baseName": "companySpecifiedAttributes",
            "type": "Array<CompanySpecifiedAttribute>"
        },
        {
            "name": "userCostCenter",
            "baseName": "userCostCenter",
            "type": "CostCenter"
        },
        {
            "name": "grade",
            "baseName": "grade",
            "type": "Grade"
        },
        {
            "name": "office",
            "baseName": "office",
            "type": "Office"
        },
        {
            "name": "department",
            "baseName": "department",
            "type": "DepartmentV2"
        },
        {
            "name": "accountingCode",
            "baseName": "accountingCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TravelerBusinessInfo.attributeTypeMap;
    }
}

export namespace TravelerBusinessInfo {
}

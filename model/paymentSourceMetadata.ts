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
import { CardMetadata } from './cardMetadata';
import { CardMetadataWrapper } from './cardMetadataWrapper';
import { CustomPaymentMethodMetadata } from './customPaymentMethodMetadata';
import { CustomPaymentMethodMetadataWrapper } from './customPaymentMethodMetadataWrapper';
import { RewardsProgramMetadata } from './rewardsProgramMetadata';
import { RewardsProgramMetadataWrapper } from './rewardsProgramMetadataWrapper';
import { VendorProgramPaymentDescriptor } from './vendorProgramPaymentDescriptor';
import { VendorProgramPaymentDescriptorWrapper } from './vendorProgramPaymentDescriptorWrapper';
import { VirtualCardMetadata } from './virtualCardMetadata';
import { VirtualCardMetadataWrapper } from './virtualCardMetadataWrapper';

/**
* Metadata corresponding to the payment source.
*/
export class PaymentSourceMetadata {
    'cardMetadata'?: CardMetadata;
    'virtualCardMetadata'?: VirtualCardMetadata;
    'rewardsProgramMetadata'?: RewardsProgramMetadata;
    'customPaymentMethodMetadata'?: CustomPaymentMethodMetadata;
    'vendorProgramPaymentDescriptor'?: VendorProgramPaymentDescriptor;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardMetadata",
            "baseName": "cardMetadata",
            "type": "CardMetadata"
        },
        {
            "name": "virtualCardMetadata",
            "baseName": "virtualCardMetadata",
            "type": "VirtualCardMetadata"
        },
        {
            "name": "rewardsProgramMetadata",
            "baseName": "rewardsProgramMetadata",
            "type": "RewardsProgramMetadata"
        },
        {
            "name": "customPaymentMethodMetadata",
            "baseName": "customPaymentMethodMetadata",
            "type": "CustomPaymentMethodMetadata"
        },
        {
            "name": "vendorProgramPaymentDescriptor",
            "baseName": "vendorProgramPaymentDescriptor",
            "type": "VendorProgramPaymentDescriptor"
        }    ];

    static getAttributeTypeMap() {
        return PaymentSourceMetadata.attributeTypeMap;
    }
}


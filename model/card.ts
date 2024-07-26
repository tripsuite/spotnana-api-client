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
import { CardCompany } from './cardCompany';
import { CardExpiry } from './cardExpiry';
import { PostalAddress } from './postalAddress';

/**
* User card info
*/
export class Card {
    /**
    * Unique identifier for this card
    */
    'id'?: string;
    /**
    * Type of card
    */
    'type'?: Card.TypeEnum;
    'company'?: CardCompany;
    /**
    * Name on card
    */
    'name'?: string;
    /**
    * Billing address
    */
    'address'?: PostalAddress;
    /**
    * Card number
    */
    'number': string;
    /**
    * Expiry month
    */
    'expiryMonth'?: number;
    /**
    * Expiry year
    */
    'expiryYear'?: number;
    /**
    * Card cvv number
    */
    'cvv'?: string;
    /**
    * Card Label
    */
    'label'?: string;
    /**
    * Native currency of the card.
    */
    'currency'?: string;
    /**
    * Spotnana partner card id.
    */
    'externalId'?: string;
    /**
    * ID of the vault used for creating the card.
    */
    'vaultId'?: string;
    /**
    * Card Expiry.
    */
    'expiry'?: CardExpiry;
    /**
    * Ownership label of the card whether it is personal, corporate or central.
    */
    'ownershipLabel'?: Card.OwnershipLabelEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Card.TypeEnum"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "CardCompany"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "PostalAddress"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "expiryMonth",
            "baseName": "expiryMonth",
            "type": "number"
        },
        {
            "name": "expiryYear",
            "baseName": "expiryYear",
            "type": "number"
        },
        {
            "name": "cvv",
            "baseName": "cvv",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "vaultId",
            "baseName": "vaultId",
            "type": "string"
        },
        {
            "name": "expiry",
            "baseName": "expiry",
            "type": "CardExpiry"
        },
        {
            "name": "ownershipLabel",
            "baseName": "ownershipLabel",
            "type": "Card.OwnershipLabelEnum"
        }    ];

    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }
}

export namespace Card {
    export enum TypeEnum {
        Unknown = <any> 'UNKNOWN',
        Credit = <any> 'CREDIT',
        Debit = <any> 'DEBIT'
    }
    export enum OwnershipLabelEnum {
        Corporate = <any> 'CORPORATE',
        Personal = <any> 'PERSONAL',
        Central = <any> 'CENTRAL'
    }
}
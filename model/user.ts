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
import { DateModel } from './dateModel';
import { EmergencyContactInfo } from './emergencyContactInfo';
import { Gender } from './gender';
import { IdentityDocument } from './identityDocument';
import { Image } from './image';
import { Name } from './name';
import { PaymentInfo } from './paymentInfo';
import { PhoneNumber } from './phoneNumber';
import { PostalAddress } from './postalAddress';
import { UserTitle } from './userTitle';

/**
* User details.
*/
export class User {
    'addresses'?: Array<PostalAddress>;
    'dob'?: DateModel;
    'email'?: string;
    'emergencyContactInfo'?: EmergencyContactInfo;
    'gender'?: Gender;
    /**
    * List of user identity documents.
    */
    'identityDocs'?: Array<IdentityDocument>;
    'name'?: Name;
    'paymentInfos'?: Array<PaymentInfo>;
    'phoneNumbers'?: Array<PhoneNumber>;
    'profilePicture'?: Image;
    /**
    * Nationality of user
    */
    'nationality'?: string;
    'title'?: UserTitle;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<PostalAddress>"
        },
        {
            "name": "dob",
            "baseName": "dob",
            "type": "DateModel"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "emergencyContactInfo",
            "baseName": "emergencyContactInfo",
            "type": "EmergencyContactInfo"
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "Gender"
        },
        {
            "name": "identityDocs",
            "baseName": "identityDocs",
            "type": "Array<IdentityDocument>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "Name"
        },
        {
            "name": "paymentInfos",
            "baseName": "paymentInfos",
            "type": "Array<PaymentInfo>"
        },
        {
            "name": "phoneNumbers",
            "baseName": "phoneNumbers",
            "type": "Array<PhoneNumber>"
        },
        {
            "name": "profilePicture",
            "baseName": "profilePicture",
            "type": "Image"
        },
        {
            "name": "nationality",
            "baseName": "nationality",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "UserTitle"
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}

export namespace User {
}
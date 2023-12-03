/* tslint:disable */
/* eslint-disable */
/**
 * UniSat Wallet - OpenAPI
 * This is UniSat Wallet Open API. If you wish to use the OpenAPI, please feel free to send us an email, and we will provide you with an API KEY.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact@unisat.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { InlineResponse20022DataDetail } from './inline-response20022-data-detail';
import {
    InlineResponse20022DataDetail,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse20022Data
 */
export interface InlineResponse20022Data {

    /**
     * @type {InlineResponse20022DataDetail}
     * @memberof InlineResponse20022Data
     */
    detail?: InlineResponse20022DataDetail;

    /**
     * @type {number}
     * @memberof InlineResponse20022Data
     */
    start?: number;

    /**
     * @type {number}
     * @memberof InlineResponse20022Data
     */
    total?: number;
}
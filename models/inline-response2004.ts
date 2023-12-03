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

import { InlineResponse2004Data } from './inline-response2004-data';
import {
    InlineResponse2004Data,
} from ".";

/**
 * 
 *
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {

    /**
     * @type {number}
     * @memberof InlineResponse2004
     */
    code?: InlineResponse2004CodeEnum;

    /**
     * @type {string}
     * @memberof InlineResponse2004
     * @example OK
     */
    msg?: string;

    /**
     * @type {InlineResponse2004Data}
     * @memberof InlineResponse2004
     */
    data?: InlineResponse2004Data;
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse2004CodeEnum {
    NUMBER_0 = 0,
    NUMBER_MINUS_1 = -1
}

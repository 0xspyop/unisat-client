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

import {
    
} from ".";

/**
 * 
 *
 * @export
 * @interface AuctionBrc20TypesBody
 */
export interface AuctionBrc20TypesBody {

    /**
     * @type {string}
     * @memberof AuctionBrc20TypesBody
     */
    timeType: AuctionBrc20TypesBodyTimeTypeEnum;

    /**
     * @type {Array<string>}
     * @memberof AuctionBrc20TypesBody
     */
    ticks?: Array<string>;
}

/**
 * @export
 * @enum {string}
 */
export enum AuctionBrc20TypesBodyTimeTypeEnum {
    Day1 = 'day1',
    Day7 = 'day7',
    Day30 = 'day30'
}

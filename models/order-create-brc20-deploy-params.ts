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
 * @interface OrderCreateBRC20DeployParams
 */
export interface OrderCreateBRC20DeployParams {

    /**
     * Bitcoin address to receive the inscriptions
     *
     * @type {string}
     * @memberof OrderCreateBRC20DeployParams
     */
    receiveAddress?: string;

    /**
     * The fee rate of transaction
     *
     * @type {number}
     * @memberof OrderCreateBRC20DeployParams
     * @example 1
     */
    feeRate?: number;

    /**
     * The balance of inscription
     *
     * @type {number}
     * @memberof OrderCreateBRC20DeployParams
     * @example 546
     */
    outputValue?: number;

    /**
     * Developer address to receive extra fee
     *
     * @type {string}
     * @memberof OrderCreateBRC20DeployParams
     */
    devAddress?: string;

    /**
     * Extra fee to pay to developer's address
     *
     * @type {number}
     * @memberof OrderCreateBRC20DeployParams
     */
    devFee?: number;

    /**
     * tick in brc20-deploy
     *
     * @type {string}
     * @memberof OrderCreateBRC20DeployParams
     */
    brc20Ticker?: string;

    /**
     * max in brc20-deploy
     *
     * @type {string}
     * @memberof OrderCreateBRC20DeployParams
     */
    brc20Max?: string;

    /**
     * lim in brc20-deploy
     *
     * @type {string}
     * @memberof OrderCreateBRC20DeployParams
     */
    brc20Limit?: string;
}
/************************************************************************
* common.service.s 
*************************************************************************/

import * as _ from 'lodash';
export class CommonService {

    constructor() {
    }

    isArray(obj) {
        return (Object.prototype.toString.call(obj) === '[object Array]');
    }

    joinObj(arr, attr) {
        const out = [];
        for (const [index, item] of arr.entries()) {
            out.push(item[attr]);
        }
        return out.join(', ');
    }

}



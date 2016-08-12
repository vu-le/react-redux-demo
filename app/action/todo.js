import {TODO} from '../constant';
import Promise from 'bluebird';

export function toDoRequest() {
    return {
        type: TODO.REQUEST
    }
}

export function toDoRecieve(data) {
    return {
        type: TODO.RECIEVE,
        data: data
    }
}

export function getTodo() {
    return (dispath) => {
        dispath(toDoRequest());
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(dispath(toDoRecieve([
                    '起床',
                    '吃饭',
                    '睡觉'
                ])));
            }, 3000);
        });
    }
}
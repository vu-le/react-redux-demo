import {TODO} from '../constant';
import Promise from 'bluebird';

export function toDoAddRequest() {
    return {
        type: TODO.REQUEST
    }
}

export function toDoAddRecieve(data) {
    return {
        type: TODO.RECIEVE,
        data: data
    }
}

export function getTodoList() {
    return (dispath) => {
        dispath(toDoAddRequest());
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(dispath(toDoAddRecieve([
                    '起床',
                    '吃饭',
                    '睡觉'
                ])));
            }, 3000);
        });
    }
}
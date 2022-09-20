// let is_ok = true;

import dataFromBD from "./data";

// let customFetch = (time, task) => {
//     return new Promise((resolve, reject) => {
//         if (is_ok) {
//             setTimeout(() => {
//                 resolve(task)
//             }, time);
//         } else {
//             reject("Error")
//         }
//     });
// }

export const data = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve (dataFromBD)
        }, 2000)
    })
}

export const datas = (id) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve (dataFromBD)
        }, 2000)
    })
}

export default data;
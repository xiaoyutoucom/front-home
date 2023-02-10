import axios from 'axios'
import moment from 'moment'
import jsonp from 'jsonp'

var API_URL = 'http://localhost:8081'
// export function getOneBridgeInfo(params) {
//     return new Promise((resolve, reject) => {
//         var url = API_URL + "/basicinfo/get";
//         axios({
//             url,
//             method: 'get',
//             params
//         }).then(res => {
//             resolve(res.data);
//         })
//     });
// }

// //新增桥梁信息
// export function addBridgeInfo(params, formData) {
//     return new Promise((resolve, reject) => {
//         var url = API_URL + "/basicinfo/add";
//         axios({
//             url,
//             method: 'post',
//             params,
//             transformRequest: [
//                 function () {
//                     var oMyForm = new FormData();
//                     if (formData) {
//                         formData.uploadFilesqlzmz.forEach(file => {
//                             oMyForm.append("uploadFilesqlzmz", file);
//                         });
//                         formData.uploadFilesqlclz.forEach(file => {
//                             oMyForm.append("uploadFilesqlclz", file);
//                         });
//                     }
//                     return oMyForm;
//                 }
//             ],
//         }).then(res => {
//             resolve(res.data);
//         })
//     });
// }

//获取所有桥梁基本信息
export function allimages(params) {
    return new Promise((resolve, reject) => {
        var url = API_URL + "/system/images/list";
        axios({
            url,
            method: 'post',
            params
        }).then(res => {
			
            resolve(res.data);
        })
    });
}

//获取所有桥梁基本信息
export function allproject(params) {
    return new Promise((resolve, reject) => {
        var url = API_URL + "/system/project/list";
        axios({
            url,
            method: 'post',
            params
        }).then(res => {
			
            resolve(res.data);
        })
    });
}
//获取所有桥梁基本信息
export function project(params) {
    return new Promise((resolve, reject) => {
        var url = API_URL + "/system/project/get";
        axios({
            url,
            method: 'get',
            params
        }).then(res => {
			
            resolve(res.data);
        })
    });
}
//获取所有桥梁基本信息
export function allresources(params) {
    return new Promise((resolve, reject) => {
        var url = API_URL + "/system/resources/list";
        axios({
            url,
            method: 'post',
            params
        }).then(res => {
			
            resolve(res.data);
        })
    });
}
export function resources(params) {
    return new Promise((resolve, reject) => {
        var url = API_URL + "/system/resources/get";
        axios({
            url,
            method: 'get',
            params
        }).then(res => {
			
            resolve(res.data);
        })
    });
}
//获取所有桥梁基本信息
export function allnews(params) {
    return new Promise((resolve, reject) => {
        var url = API_URL + "/system/news/list";
        axios({
            url,
            method: 'post',
            params
        }).then(res => {
			
            resolve(res.data);
        })
    });
}
export function news(params) {
    return new Promise((resolve, reject) => {
        var url = API_URL + "/system/news/get";
        axios({
            url,
            method: 'get',
            params
        }).then(res => {
			
            resolve(res.data);
        })
    });
}
export function allvideos(params) {
    return new Promise((resolve, reject) => {
        var url = API_URL + "/system/videos/list";
        axios({
            url,
            method: 'post',
            params
        }).then(res => {
			
            resolve(res.data);
        })
    });
}
/**
 * Created by shankun on 2019/5/29.
 */
'use strict';
/* eslint-disable */
import axios from 'axios'
import Qs from 'qs'
// import index from '../index'
// import { Notify } from 'vant';
console.log(process.env.NODE_ENV)
const imgBaseUrl = process.env.VUE_APP_BASEURL + '/images'
const _baseURL = process.env.NODE_ENV === 'development' ? `/api/shcc-api` : process.env.VUE_APP_BASEURL + '/shcc-api'
axios.interceptors.response.use(function (res) {
    return res.data;
}, function (error) {
    //打印异常周边
    if(error.message === 'Network Error'){
        //此处断网和接口404都会被拦截到， error.request.status === 0
        console.log('%c   断网或404的API:','color:#333;font-weight:700;');
        console.log('%c   '+error.config.url,'color:#666;');
    }
    if(error.code === 'ECONNABORTED'){
        //我们在这里可以进行超时拦截
        console.log('%c   超时的API:','color:#333;font-weight:700');
        console.log('%c   '+error.config.url,'color:#666;');
    }
    return Promise.reject(error.message);
});


var config = {
    //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
    url: '',
    method:'get',    // 请求方法，默认是GET方法
    // 基础url前缀
    baseURL: _baseURL,
    transformRequest: [function (data) {        //允许在请求发送到服务器之前修改该请求
        //为了避免qs格式化时对内层对象的格式化先把内层的对象转为
        data.CustData = JSON.stringify(data.CustData);
        //-data传数据所以要格式化
        // data = Qs.stringify(data);
        data = JSON.stringify(data);
        return data;
    }],

    transformResponse: [function (data) {       //允许在数据传递到then/catch之前修改response数据
        // 对响应数据做点什么
        if(typeof data === 'string' && data.length > 0){
            data = JSON.parse(data);
        }
        if(data.errors){
            if(data.errors[0].code === 'auth.authentication_invalid_token'){
                console.log('登录已失效')
                // Notify({
                //     message: '登录已失效',
                //     duration: 500,
                //     background: '#ff4444',
                //     onClose(){
                //         index.dispatch('signOut')
                //     }
                // });
            } else {
                console.log('请求响应错误')
                // Notify({
                //     message: data.errors[0].message,
                //     duration: 2000,
                //     background: '#ff4444'
                // });
            }
        }

        return data;
    }],

    headers: {
        'Content-Type':'application/json',
        // 'Content-Type':'application/x-www-form-urlencoded',
    },//包含了http请求的各种信息

    params: {       //params是发送请求的查询参数对象，对象中的数据会被拼接成url?param1=value1&param2=value2

    },

    paramsSerializer: function(params) {  //params参数序列化器。

        return Qs.stringify(params)
    },

//post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
    data: {

    },

    timeout: 30000,    //请求超时设置，单位为毫秒


    withCredentials: false, // default    表明是否有跨域请求需要用到证书

    // 表示服务器将返回响应的数据类型
    responseType: 'json', // default  有arraybuffer、blob、document、json、text、stream这6个类型



    // onUploadProgress: function (progressEvent) {  //允许在上传过程中的做一些操作
    //   // Do whatever you want with the native progress event
    // },
    //
    //
    // onDownloadProgress: function (progressEvent) {  //允许在下载过程中的做一些操作
    //   // Do whatever you want with the native progress event
    // },


    maxContentLength: 2000,   // 定义了接收到的response响应数据的最大长度。


    validateStatus: function (status) {  //定义了根据HTTP响应状态码决定是否接收或拒绝获取到的promise。如果 validateStatus 返回 true (或设置为 null 或 undefined ),promise将被接收;否则,promise将被拒绝。
        return status >= 200 && status < 300; // default
    },


    maxRedirects: 5, // default
}

let request = (_url, _method, _data, _status,_config) => {
    if(_status) {
        _status.isSlash ? _data = {} : true
    }
    _data = _data || {};
    _method = _method.toLocaleUpperCase();
    if(_method === 'GET'){
        config.data = {}
        config.params = _data;
        console.log(config.params);
        return axios.get(_url,config);
    } else if (_method === 'POST') {
      // 图片上传
      if(_config && _config.upload){
        return axios.post(_url, _data, {
          headers:{
            "Content-Type": 'multipart/form-data',
            // "Authorization":index.getters.Authorization
          },
          baseURL:_baseURL
        });
      }else{
        config.params = {}
        config.data = _data;
        return axios.post(_url,{},config);
      }
    } else if (_method === 'PUT') {
        config.params = {}
        config.data = _data;
        return axios.put(_url,{},config);
    } else if (_method === 'DELETE') {
        config.params = {}
        config.data = {};
        return axios.delete(_url,config);
    }
};

export {
    config,
    request,
    imgBaseUrl
}

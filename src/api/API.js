/**
 * Created by shankun on 2019/5/29.
 */
import { request,config } from './config'
// import index from "../index/index";

export default {
    baseURL: config.baseURL,
    // 登录
    login: obj => request('/v1/users/login', "post", obj),
    // 用户信息
    usersMe: obj => request('/v1/users/me','get',obj),
    // 图片上传接口
    fileUpload: obj => request('/v1/file/upload?type=shcc','post',obj,false, { upload: true } ),
}

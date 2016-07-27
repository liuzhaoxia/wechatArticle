import { fetchMethod, createFetch } from '../fetch/fetch'
import appConfig from '../constants/appConfig'

const api = {
    test: (parameter)=> createFetch(
        `${appConfig.serviceRoot}service/man/userInfo/login`,
        fetchMethod.Get,
        {parameter: parameter}
    ),
    login: (parameter)=> createFetch(
        `${appConfig.serviceRoot}app/login`,
        fetchMethod.Get,
        {parameter: parameter}
    )
};

function callApi(api, success, fail){
    api.then(response=> {
            if (response.ok) {
                return response;
            } else {
                throw new Error(`网络错误:${response.status}`);
            }
        })
        .then(response=>response.json())
        .then(jsonResult=> {
            if (jsonResult.errcode === 0) {
                if (success) {
                    const data = jsonResult.data;
                    success(data);
                }
            } else {
                throw new Error(`服务器错误:${jsonResult.errmsg}`);
            }
        })
        .catch(error=> {
            if (fail) {
                fail(error.message);
            }
        })
}

export {
    api,
    callApi
};


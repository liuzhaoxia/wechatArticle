/**
 * Created by 28203 on 2016/5/29 0029.
 */

const fetchMethod = {
    Get: "GET",
    Post: "POST"
};

function jsonToQueryString(jsonObj) {
    let queryStr = "";
    Object.keys(jsonObj).map((key)=> {
        const value = JSON.stringify(jsonObj[key]);
        queryStr += `${key}=${value}&`;
    });

    if (queryStr.endsWith("&")) {
        queryStr = queryStr.substr(0, queryStr.length - 1);
    }

    return queryStr;
}

function createFetch(url, method, jsonObj) {
    switch (method) {
        case fetchMethod.Get:
            {
                const queryStr = jsonToQueryString(jsonObj);
                const urlWithQueryStr = `${url}?${queryStr}`;
                console.log(urlWithQueryStr);
                const options = {
                    method: fetchMethod.Get
                };
                console.log(urlWithQueryStr);
                return fetch(urlWithQueryStr, options);
            }
            break;
        case fetchMethod.Post:
            {
                const queryStr = jsonToQueryString(jsonObj);
                const options = {
                    method: fetchMethod.Post,
                    body: queryStr
                };
                console.log(url);
                return fetch(url, options);
            }
            break;
        default:
            throw new Error(`not support method ${method}`);
            break;
    }
}

export {
    fetchMethod,
    createFetch
};

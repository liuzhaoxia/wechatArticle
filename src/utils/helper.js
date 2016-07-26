/**
 * Created by xujie on 2016/6/23 0023.
 */

const helper = {
    bindMethod: (obj)=> {
        const members = Reflect.ownKeys(obj.__proto__);
        for (let member of members) {
            if (typeof(obj[member]) === 'function') {
                if (!helper.isReactLifeCycleMethod(member)) {
                    obj[member] = obj[member].bind(obj);
                }
            }
        }
    },

    isReactLifeCycleMethod: (methodName)=> {
        switch (methodName) {
            case 'getInitialState':
            case 'getDefaultProps':
            case 'componentWillMount':
            case 'componentDidMount':
            case 'componentWillReceiveProps':
            case 'shouldComponentUpdate':
            case 'componentWillUpdate':
            case 'componentDidUpdate':
            case 'componentWillUnmount':
            case 'constructor':
                return true;
            default :
                return false;
        }
    }
};

export default helper;

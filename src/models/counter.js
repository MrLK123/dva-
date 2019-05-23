import {delay} from 'dva/saga';


export default {
    namespace:"counter",
    state:{count:1},
    subscriptions:{
        setup({dispatch,history}){
        //    history.listen(()=>{
        //        if(history.location.pathname==="/counter"){
        //            dispatch({type:"fetchAdd"});
        //        }
        //    })
    }
},
           
        
    reducers:{
        "add"(state,action){
            return {
                count:state.count+1
            }
        },
        "sub"(state,action){
            return {
                count:state.count-1
            }
        },
    },
    effects:{
        *fetchAdd({payload},{put,call,select}){
            yield call(delay,2000);
            yield put({type:"add"});
        },
        *fetchSub({payload},{put,call}){
            yield call(delay,3000);
            yield put({type:"sub"});
        }
    }
}
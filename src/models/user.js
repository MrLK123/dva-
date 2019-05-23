import axios from 'axios'
export default {
    namespace:"user",
    state:{ 
        error:null,
        user:[]
    },
    subscriptions:{
        setup({dispatch,location}){   
        }
    },
    reducers:{
        "fetch/start"(state,action){
            return {
                error:null,
                user:[]
            }
        },
        "fetch/error"(state,action){
            return {
                error:action.message,
                user:[]
            }
        },
        "fetch/success"(state,action){
            return {
                error:null,
                user:action.data
            }
        }
    },
    effects:{
        *fetch({payload},{call,put}){
            yield put({type:"fetch/start"});
           try{
            const data=yield call(axios.get,"https://jsonplaceholder.typicode.com/users");
            yield put({type:"fetch/success",data:data.data})
           }catch(message){
               yield put({type:"fetch/error",message})
           }
        }
    }
}
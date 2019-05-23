
// export default {

//   namespace: 'example',

//   state: {},

//   subscriptions: {
//     setup({ dispatch, history }) {  // eslint-disable-line
//     },
//   },

//   effects: {
//     *fetch({ payload }, { call, put }) {  // eslint-disable-line
//       yield put({ type: 'save' });
//     },
//   },

//   reducers: {
//     save(state, action) {
//       return { ...state, ...action.payload };
//     },
    
//   },

// };
export default {
    namespace:"example",
    state:{count:0},
    subscriptions:{
        setup(dispatch,history){
        }
    },
    reducers:{
        "add"(state,action){
        }
    },
    effects:{
        *fetch({payload},{call,put}){      
        }
    }
}
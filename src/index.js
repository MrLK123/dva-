// import dva from 'dva';
// import './index.css';
// import createHistory from 'history/createBrowserHistory';
// // 1. Initialize
// const app = dva({
//    history:createHistory()
// });

// // 2. Plugins
// // app.use({});

// // 3. Model

// app.model(require("./models/counter").default);
// // app.model(require('./models/counter').default);

// // require('./models').default.forEach(value=>app.model(value.default));
// // 4. Router
// app.router(require('./router').default);
// console.log(app);
// // 5. Start
// app.start("#root");
// import dva from 'dva';
// import createHistory from 'history/createBrowserHistory';
// const app =dva({
//     history:createHistory()
// });
// // app.use({});
// app.model(require("./models/example").default);
// app.router(require("./router").default);
// app.start("#root");
import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import {createLogger } from 'redux-logger';
// 全局reducer
const extraReducers={
   'from':(state=false,action)=>{
      switch(action.type){
         case 'SHOW':return true;
         case 'HIDE':return false;
         default:return state;
      }
   }
}
// oneffects
const onEffect=(effect,{put},model,key)=>{
   return function*(...args){
      yield put({type:"SHOW"});
      yield effect(...args);
      yield put({type:"HIDE"});
   }
}
const error=store=>next=>action=>{
   console.log("error");
   try{
      next(action);
   }catch(e){
      console.log(e);
   }
}
const logger=store=>next=>action=>{
   console.log("storePrev",store.getState());
   console.log(action);
   next(action);
   console.log("storeNext",store.getState());
}
const app=dva({
   history:createHistory(),
   onAction:[createLogger(),logger,error],
   extraReducers,
   onEffect
});
app.use(createLoading());
require('./models').default.forEach(value=>app.model(value.default));
app.router(require("./router").default);

app.start("#root");
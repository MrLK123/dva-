import React from 'react';

import { routerRedux } from 'dva/router';
const Counter= ({counter,dispatch,loading,createAdd,createSub,createFetchAdd,createFetchSub})=>{
    
    let msg="";
    if(loading.effects['counter/fetchAdd']){
        msg="努力做加法计算中...";
    }else if(loading.effects['counter/fetchSub']){
        msg="减法有点难算...";
    }else{
        msg="完成";
    }
    return(
            <div>
                <p><button onClick={()=>dispatch(routerRedux.push('/'))}>回到首页</button></p>
                Counter组件
                <p>{counter.count}</p>
                <button onClick={()=>createAdd()}>+</button>
                <button onClick={()=>createSub()}>-</button>
                <hr/>
                <h2>异步</h2>
                <p>{msg}</p>
                <p>{counter.count}</p>
                <button onClick={()=>createFetchAdd()}>+</button>
                <button onClick={()=>createFetchSub()}>-</button>
                
            </div>
            )
}

export default Counter;
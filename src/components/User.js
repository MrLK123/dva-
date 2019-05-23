import React,{Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios'
export default (props)=>{
    let {user,error}=props.user;
    let {dispatch,history}=props;
    let loading=props.loading.effects['user/fetch'];
    let msg="";
    let data=[];
     
    if(loading){
        msg="loading";
    }else if(error){
        msg=error;
    }else{
        data=user;
    }
    return (
        <Fragment>
            <button 
                 type="button" 
                 onClick={()=>history.push('/')} 
                 className="btn btn-info">
                   回首页
                   </button>
               {msg?<p>{msg}</p>: <table className="table table-hover">
               <thead>
                   <tr>
                       <th>编号</th>
                       <th>姓名</th>
                       <th>用户名</th>
                       <th>邮箱</th>
                   </tr>
               </thead>
               <tbody>
                    {data.map(item=>(
                             <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                             </tr>)
                             )}
               </tbody>
            </table>}
            <button 
                 type="button" 
                 onClick={()=>dispatch({type:"user/fetch"})} 
                 className="btn btn-info">
                   点击获取用户信息
                   </button>
                   <hr/>
                <button  className="btn btn-info" onClick={()=>dispatch({type:"SHOW"})}>点击触发全局reducer</button><br/>
                <button  className="btn btn-info" onClick={()=>dispatch({type:"HIDE"})}>点击触发全局reducer</button> <br/>
                <hr/><br/>
                <button  className="btn btn-info" onClick={()=>axios.get("/api/users")}>get请求数据</button> <br/>
                <button  className="btn btn-info" onClick={()=>axios.get("/api/users/1")}>get带参数请求数据</button> <br/>
                <button  className="btn btn-info" onClick={()=>axios.post("/api/users/create")}>post带参数请求数据</button> 
                 
        </Fragment>
    )
}
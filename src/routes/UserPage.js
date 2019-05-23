import React from 'react';
import User from './../components/User';
import { connect } from 'dva';
const UserPage=({user,dispatch,loading,history,from})=>{
   console.log(loading.effects['user/fetch']);
    return (
        <div>
             {from?<div>我是全局reducer控制的</div>:""}
            <User
             user={user}
             dispatch={dispatch}
             loading={loading}
             history={history}
            />
        </div>
    )
}
const mapStateToProps=state=>({
    user:state.user,
    loading:state.loading,
    from:state.from
})
export default connect(mapStateToProps)(UserPage);
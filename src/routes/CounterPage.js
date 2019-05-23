import React from 'react';
import Counter from './../components/Counter';
import { connect } from 'dva';
import * as actions from './../actions';

const CounterPage=({dispatch,counter,loading,createAdd,createSub,createFetchAdd,createFetchSub})=>{

    return (
        <div>
            CounterPage
            <Counter
              {...{
                 createAdd,
                 createSub,
                 createFetchAdd,
                 createFetchSub,
                 dispatch,
                 counter,
                 loading
              }}
             
              
            />
        </div>
    )
}
const mapStateToProps=state=>({
    counter:state.counter,
    loading:state.loading
})

export default connect(mapStateToProps,{...actions})(CounterPage);
import { createAction } from 'redux-actions';

export  const createAdd =createAction('counter/add');
export  const createSub =createAction('counter/sub');
export  const createFetchAdd=createAction('counter/fetchAdd');
export  const createFetchSub=createAction('counter/fetchSub');
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import "./index.less";
import { Link} from 'dva/router';
import axios from 'axios';
function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
         <li><Link to="/counter"> counterpage页面 </Link></li>
         <li><Link to="/user">User页面</Link></li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        <li><a href="./counter.html">换页面</a></li>
        <button onClick={()=>axios.get('/data.php')}>发送ajax</button>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

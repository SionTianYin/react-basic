// React： 框架的核心包
// ReactDOM：渲染
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';     // 应用的全局样式文件
import App from './App';  // 引入根组件
 
const root = ReactDOM.createRoot(document.getElementById('root'));  //渲染根组件App到一个id为root的DOM节点上
root.render(  //严格模式节点需要去掉，涉及useEffect的执行时机
    <App />
);

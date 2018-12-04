import Regular from 'regularjs';
// regular 路由
import restate from 'regular-state';
// 兼容ie浏览器，如果不需要请勿引入，会导致包过大
// import "babel-polyfill";
import './assets/reset.scss';
import './assets/main.scss';
import AppTpl from './App.html';
import Home from './view/home/home';

const App = Regular.extend({
    template: AppTpl
})

const routes = {
    '/': {
        view: App
    },
    '/home': {
        view: Home
    }
}

const manager = restate().state(routes)
manager.start({
    view: document.getElementById('app') //顶层容器节点
})

import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import Iframe from 'react-iframe'
// import registerServiceWorker from './sw';

// Init VK App
connect.send('VKWebAppInit', {});

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT 
// registerServiceWorker();

ReactDOM.render(
    <div>
    <Iframe url="https://www.youtube.com/watch?v=napUAIh4UE0&list=RD5uOHMdkA6G0&index=7"
        width="100%"
        height="810px"
        id="myId"
        className="myClassname"
        display="initial"
        id="myIframe"
        position="relative"/>
    </div>
    , document.getElementById('root'));


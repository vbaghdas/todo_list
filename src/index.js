import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import promise from './middleware/promise';
import logger from './middleware/logger';
import rootReducer from './reducers';

import App from './components/app';

const createStoreWithMiddleWare = applyMiddleware(promise, logger)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(rootReducer)}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

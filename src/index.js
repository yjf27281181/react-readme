import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import configureStore from './configStore'
import {Provider} from 'react-redux'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));
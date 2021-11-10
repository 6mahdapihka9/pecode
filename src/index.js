import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import mainReducer from './reducers/main.reducer'
import './index.css'
import App from './components/App'


const store = createStore(mainReducer)

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
)

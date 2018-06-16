import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import AppContainer from "./containers/AppContainer"

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('app')    
);
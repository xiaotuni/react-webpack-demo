import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store, { BuildStore } from './redux/store';
import ApiClient from './helpers/ApiClient'
// console.log('---------store------------');
// console.log(store);
const ApiClientStore = BuildStore(new ApiClient());
// console.log(ApiClientStore);
// console.log('---------store------------');
import getRouter from './router/router';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter = require('./router/router').default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ApiClientStore}>
        {RootElement}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
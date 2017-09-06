import React from 'react';
import ReactDOM from 'react-dom';

import { Hello } from './component/index.js';

import getRouter from './router/router';

ReactDOM.render(
  getRouter(),
  document.getElementById('app'));
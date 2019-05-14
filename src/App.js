import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faStroopwafel,
  faTimesCircle,
  faChevronRight,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import GlobalStyle from './style';
import Routes from './routes';

toast.configure();

library.add(faStroopwafel, faTimesCircle, faChevronRight, faCircleNotch);

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Routes />
  </Fragment>
);

export default App;

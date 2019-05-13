import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faTimesCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './config/ReactotronConfig';

import GlobalStyle from './style';
import Routes from './routes';

library.add(faStroopwafel, faTimesCircle, faChevronRight);

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Routes />
  </Fragment>
);

export default App;

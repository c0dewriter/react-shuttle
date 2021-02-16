import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "../Redux/configureStore";

const store = configureStore(/* Place initial state here (if at all) */);

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Router.md
const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);

export { Routes };

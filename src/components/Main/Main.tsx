import { Switch, Route } from 'react-router-dom';

import routesConfig from '@routes/routesConfig';

const Main = () => (
  <div>
    <Switch>
      {routesConfig.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </div>
);

export default Main;

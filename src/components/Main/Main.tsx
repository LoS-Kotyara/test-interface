import { Switch, Route } from 'react-router-dom';

import { Container } from '@material-ui/core';

import routesConfig from '@routes/routesConfig';

const Main = () => (
  <Container>
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
  </Container>
);

export default Main;

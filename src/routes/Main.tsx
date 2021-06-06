import { Switch, Route } from 'react-router-dom';

import { Container, Box } from '@material-ui/core';

const Home = () => <Box marginY={2}>Home</Box>;

const Controls = () => <Box marginY={2}>Controls</Box>;

const About = () => <Box marginY={2}>About</Box>;

const Main = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/controls" component={Controls} />
      <Route path="/about" component={About} />
    </Switch>
  </Container>
);

export default Main;

import { Redirect, Route, Switch } from 'react-router-dom';

import { isUserAuthenticated } from '~/auth';
import HomePage from '~/components/HomePage';
import { useDocumentTitle } from '~/hooks';
import routes, { routesEnum } from '~/routes';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isUserAuthenticated ? <Component {...props} /> : <Redirect to={routesEnum.HOME_PAGE} />;
      }}
    />
  );
}

function ContentWindow() {
  useDocumentTitle();

  return (
    <Switch>
      <Route exact path={routesEnum.HOME_PAGE} component={HomePage} />
      {Object.values(routes).map(({ component, path }) => (
        <PrivateRoute exact component={component} key={path} path={path} />
      ))}
      <Route path="*">
        <Redirect to={routesEnum.HOME_PAGE} />
      </Route>
    </Switch>
  );
}

export default ContentWindow;

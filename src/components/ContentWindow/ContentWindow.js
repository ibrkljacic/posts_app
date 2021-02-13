import { Redirect, Route, Switch } from 'react-router-dom';

import { useDocumentTitle } from '~/hooks';
import routes, { routesEnum } from '~/routes';

function ContentWindow() {
  useDocumentTitle();

  return (
    <>
      <Switch>
        {Object.values(routes).map(({ component: Component, path }) => (
          <Route exact key={path} path={path}>
            <Component />
          </Route>
        ))}
        <Route path="*">
          <Redirect to={routesEnum.HOME_PAGE} />
        </Route>
      </Switch>
    </>
  );
}

export default ContentWindow;

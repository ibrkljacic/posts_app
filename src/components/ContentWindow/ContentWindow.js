import { Redirect, Route, Switch } from 'react-router-dom';

import { useDocumentTitle } from '~/hooks';
import routes, { routesEnum } from '~/routes';
import { FlexLayout } from '~/ui';

function ContentWindow() {
  useDocumentTitle();

  return (
    <FlexLayout flexGrow="1">
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
    </FlexLayout>
  );
}

export default ContentWindow;

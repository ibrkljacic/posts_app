import { useEffect } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import routes from '~/routes';

const defaultDocumentTitle = 'Posts App';

export function useDocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    const routePath = Object.keys(routes).find((path) =>
      matchPath(location.pathname, { exact: true, path, strict: true })
    );

    const route = routes[routePath];
    if (route) {
      document.title = route.documentTitle || defaultDocumentTitle;
    }

    return () => {
      document.title = defaultDocumentTitle;
    };
  }, [location.pathname]);
}

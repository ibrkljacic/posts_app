import HomePage from '~/components/HomePage';
import PostsPage from '~/components/PostsPage';
import PostViewPage from '~/components/PostViewPage';

export const routesEnum = {
  HOME_PAGE: '/',
  POSTS_PAGE: '/app',
  POST_VIEW_PAGE: '/post/:id',
};

export default {
  [routesEnum.HOME_PAGE]: {
    component: HomePage,
    documentTitle: 'Log In',
    path: routesEnum.HOME_PAGE,
  },
  [routesEnum.POSTS_PAGE]: {
    component: PostsPage,
    documentTitle: 'Posts',
    path: routesEnum.POSTS_PAGE,
  },
  [routesEnum.POST_VIEW_PAGE]: {
    component: PostViewPage,
    documentTitle: 'Post',
    path: routesEnum.POST_VIEW_PAGE,
  },
};

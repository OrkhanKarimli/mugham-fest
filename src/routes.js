import About from './pages/about';
import Home from './pages/home';
import Untitled from './pages/untitled';
import History from './pages/history';

function routeItem(id, title, path, component) {
  return {
    id,
    title,
    path,
    component,
  };
};
const routes = {
  home: routeItem(1, 'home', "/", Home),
  about: routeItem(2, 'about', '/about', About),
  untitled: routeItem(3, 'untitled', '/untitled', Untitled),
  history: routeItem(4,'history','/history',History)
};

const routesArr = Object.values(routes);

export { routes, routesArr };

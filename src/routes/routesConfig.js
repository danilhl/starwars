import PeoplePage from '@containers/PeoplePage/PeoplePage';
import HomePage from '@containers/HomePage/HomePage';
import NotFoundPage from '@containers/NotFoundPage'
import PersonPage from '@containers/PersonPage/PersonPage';
import FavoritePage from '@containers/FavoritePage/FavoritePage';
import SearchPage from '@containers/SearchPage/SearchPage';
import ErrorMassage from '@components/ErrorMassage'

const routesConfig = [
    {
        path: 'home',
        element: HomePage
    },
    {
        path: 'people',
        element: PeoplePage
    },
    {
        path: 'not-found',
        element: NotFoundPage
    },
    {
        path: 'fail',
        element: ErrorMassage
    },
    {
        path: 'people/:id',
        element: PersonPage
    },
    {
        path: 'favorites',
        element: FavoritePage
    },
    {
        path: 'search',
        element: SearchPage
    },
    {
        path: "xxx",
        element: NotFoundPage
    },

];

export default routesConfig
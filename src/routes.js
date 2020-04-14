import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login.js';
import List from './pages/List.js';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List
    })
);

export default Routes;

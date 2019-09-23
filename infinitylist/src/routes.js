import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const RoutesNavigator = createStackNavigator({
    Main,
    Product
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#09daed',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
            textAlign: "center",
            flex: 1
        },
    },
});

const RoutesAppContainer = createAppContainer(RoutesNavigator);

export default RoutesAppContainer;
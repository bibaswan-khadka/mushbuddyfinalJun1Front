import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MushroomCatalog from './MushroomCatalog';
import CatalogEntry from './catalog_entry';

const Stack = createStackNavigator();

// Nest stack navigator to handle internal views
// 'Name' prop is the name of the route
const CatalogNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="MushroomCatalog"
                component={MushroomCatalog}
                options={{
                    title: 'Catalog',
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                }}
            />
            <Stack.Screen
                name="Detail"
                component={CatalogEntry}
                options={{
                    title: 'Catalog: Entry details',
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default CatalogNavigator;
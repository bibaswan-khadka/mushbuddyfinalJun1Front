import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Profile from '../components/profile/profile.js';
import Search from '../components/search/search.js';
import MapNavigator from '../components/map/map_navigator.js';
import CatalogNavigator from '../components/catalog/catalog_navigator.js';

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="Profile"
                screenOptions={({ route }) => ({
                    tabBarLabel:() => {return null},
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'Profile') {
                            iconName = 'person';
                        }
                        else if (route.name === 'Search') {
                            iconName = 'chatbubbles';
                        }
                        else if (route.name === 'Map') {
                            iconName = 'map';
                        }
                        else {
                            iconName = 'newspaper';
                        }

                        return <Icon name={iconName} size={26} color={focused ? '#FFAA60' : '#F1CC96'} />;
                    },
                })}
            >
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Map" component={MapNavigator} />
                <Tab.Screen name="Catalog" component={CatalogNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainTabBar;
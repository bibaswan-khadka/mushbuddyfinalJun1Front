import React from 'react';
import { View, Text } from "react-native";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers
} from 'react-native-popup-menu';
const { SlideInMenu } = renderers;

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth';
import { showMessage } from "react-native-flash-message";

import Icon from 'react-native-vector-icons/Ionicons';

const MenuItem = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    return(
        <Menu renderer={SlideInMenu} >
            <MenuTrigger>
                 <Icon name='cog' size={24} color='white'/>   
            </MenuTrigger>
            <MenuOptions >
                <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: Colors.brightBlue, overflow: 'hidden' }} >
                    <MenuOption onSelect={() => navigation.navigate('Profile', { screen: 'EditProfile' })}>
                        <View style={{ flexDirection: 'row', borderBottomColor: '#fff', borderBottomWidth: 1 }} >
                            <MaterialCommunityIcons name="account-edit" size={24} color="#fff" style={{ alignSelf: 'center', marginLeft: 10 }} />                                
                            <Text style={{ padding: 15, fontSize: 16,  color: '#fff' }}>Edit Profile</Text>
                        </View>
                    </MenuOption>
                    <MenuOption 
                        onSelect={async () => {
                            dispatch(authActions.logout())
                            showMessage({
                                message: `You have successfully logged out.`,
                                type: "success",
                                duration: 3000,
                                icon: { icon: "success", position: 'left' }
                            });
                        }} 
                    >
                        <View style={{ flexDirection: 'row' }} >
                            <MaterialCommunityIcons name="logout" size={24} color="#fff" style={{ alignSelf: 'center', marginLeft: 10 }} />
                            <Text style={{ padding: 15, fontSize: 16, color: '#fff' }}>Logout</Text>
                        </View>
                    </MenuOption>
                </View>
            </MenuOptions>
        </Menu>
    )
}

export default MenuItem;
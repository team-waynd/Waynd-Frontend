import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#AAD2FF',
                    paddingTop: 20,
                    height: 80,
                    position: 'absolute',
                },
                tabBarInactiveTintColor: '#FAFAF8',
                tabBarActiveTintColor: '#4B90E2',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="golf" color={color} />,
                }}
            />
            <Tabs.Screen
                name="festival"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="star" color={color} />,
                }}
            />
            <Tabs.Screen
                name="community"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="people" color={color} />,
                }}
            />
            <Tabs.Screen
                name="mypage"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
                }}
            />
        </Tabs>
    );
}

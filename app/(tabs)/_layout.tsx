import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                // tabBarShowLabel: false
            }}
        >
            <Tabs.Screen
                name="main"
                options={{
                    title: '홈',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="place"
                options={{
                    title: '여행지',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="place" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="festival"
                options={{
                    title: '축제',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="party-popper" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="community"
                options={{
                    title: '커뮤니티',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="groups" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="mypage"
                options={{
                    title: '마이페이지',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

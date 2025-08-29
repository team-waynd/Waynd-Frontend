import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="user" options={{ title: 'User' }} />
            <Tabs.Screen name="place" options={{ title: 'Place' }} />
            <Tabs.Screen name="festival" options={{ title: 'Festival' }} />
            <Tabs.Screen name="post" options={{ title: 'Post' }} />
            <Tabs.Screen name="review" options={{ title: 'Review' }} />
        </Tabs>
    );
}

import 'react-native-reanimated';

// app/_layout.tsx (현재 RootLayout)
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const router = useRouter();

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    const isLoggedIn = false; // TODO: 로그인 상태 확인 로직으로 교체

    useEffect(() => {
        if (loaded) {
            // if (!isLoggedIn) {
            router.replace('/auth/login');
            // }
        }
    }, [loaded]);

    if (!loaded) return null;

    return (
        <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Stack>
                <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                <Stack.Screen
                    name='auth/login'
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='auth/register'
                    options={{ title: '회원가입' }}
                />
                <Stack.Screen name='+not-found' />
            </Stack>
            <StatusBar style='auto' />
        </ThemeProvider>
    );
}

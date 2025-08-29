import { useUserStore } from '@/store/userStore';
import { Redirect } from 'expo-router';

export default function RootScreen() {
    const isLoggedIn = useUserStore(state => state.isLoggedIn);

    if (isLoggedIn) {
        return <Redirect href="/(tabs)/main" />;
    }
    return <Redirect href="/(auth)/login" />;
}

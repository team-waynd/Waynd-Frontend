// app/auth/login.tsx
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // TODO: 실제 로그인 로직 추가
        console.log('Logging in with:', email, password);
        router.replace('/(tabs)'); // 로그인 성공 시 탭 홈으로 이동
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>로그인</Text>
            <TextInput
                placeholder='이메일'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder='비밀번호'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title='로그인' onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        height: 48,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
});

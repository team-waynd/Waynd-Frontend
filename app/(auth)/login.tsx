import * as S from './login.styled';

import { useUserStore } from '@/store/userStore';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function LoginScreen() {
    const setIsLogined = useUserStore(state => state.setTestLogin);
    const router = useRouter();

    return (
        <S.MainRootWrapper>
            <TouchableOpacity
                onPress={() => {
                    setIsLogined();
                    router.push('/');
                }}
            >
                <S.CenterImage source={require('../../assets/images/main_logo.png')} />
            </TouchableOpacity>
            <S.ButtonArea>
                <S.LoginBtn>
                    <S.LoginImage source={require('../../assets/images/google_login.png')} />
                </S.LoginBtn>
                <S.LoginBtn>
                    <S.LoginImage source={require('../../assets/images/kakao_login.png')} />
                </S.LoginBtn>
            </S.ButtonArea>
        </S.MainRootWrapper>
    );
}

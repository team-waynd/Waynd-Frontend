import { Image, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';

export const MainRootWrapper = styled(LinearGradient).attrs({
    colors: ['#4B90E2', '#F0F0F0'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
})`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const CenterImage = styled(Image)`
    width: 180px;
    height: 180px;
`;

export const ButtonArea = styled(View)`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    bottom: 100px;
`;

export const LoginBtn = styled(TouchableOpacity)``;

export const LoginImage = styled(Image)``;

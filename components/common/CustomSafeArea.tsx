import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

export const CustomSafeArea = styled(SafeAreaView)`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
`;

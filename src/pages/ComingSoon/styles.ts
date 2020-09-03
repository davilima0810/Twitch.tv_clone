import { Platform } from 'react-native'
import styled from 'styled-components/native';
import constants from 'expo-constants';
import colors from '../../styles/colors';

const statusBarHeight = Platform.OS === 'android'? constants.statusBarHeight:0;

export const Wrapper = styled.View`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'}
  justify-content: center;
  align-items:center;
`;

export const Heading = styled.Text`
  color: ${colors.purple};
  font-family: roboto_500;
  font-size: 30px;
`;
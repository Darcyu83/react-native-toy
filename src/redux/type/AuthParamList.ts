import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AnyIfEmpty} from 'react-redux';

export type AuthParamList = {
  Home: any;
  About: any;
  Detail: any;
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};

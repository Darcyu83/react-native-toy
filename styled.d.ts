import {DefaultTheme} from '@react-navigation/native';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: {
      main: string;
    };
  }
}

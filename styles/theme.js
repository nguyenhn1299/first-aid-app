import { Dimensions, Platform } from 'react-native';
import * as color from './colors'
import * as typo from './typography'

const imageOptions = {
    allowsEditing: false,
    aspect: [4, 3],
}

const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabColor = (Platform.OS === "ios") ? "#fff" : "#fff";
const selectedTabColor = (Platform.OS === "ios") ? color.primary : color.primary;
const tabIconStyle = { size: 21, color: tabColor, selected: selectedTabColor }
const navTitleStyle = { fontSize: typo.fontSize.regular + 1 , fontFamily: typo.fontFamily.semibold, color: color.black, letterSpacing: 0.4 }
const navigationBarStyle = { backgroundColor: color.black, borderBottomWidth:0 }

export {
    padding,
    navbarHeight,
    windowWidth,
    windowHeight,
    tabIconStyle,
    navTitleStyle,
    navigationBarStyle,
    imageOptions,
}
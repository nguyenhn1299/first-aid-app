import { moderateScale as normalize } from 'react-native-size-matters';

const fontSize = {
    small: normalize(12),
    regular: normalize(14),
    large: normalize(21),
    extralarge: normalize(28)
}

const helvetica = {
    bold: "HelveticaNeue-Bold",
    medium: "HelveticaNeue-Medium",
    regular: "Helvetica Neue",
    light: "HelveticaNeue-Light"
}

const fontFamily = helvetica;


export {
    fontSize,
    fontFamily,
}
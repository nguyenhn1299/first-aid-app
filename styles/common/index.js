import { StyleSheet } from 'react-native'

const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
}

export default StyleSheet.create({
    shadow: shadow,
    card: {
        ...shadow,
        borderRadius: 15,
        padding: 15
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})
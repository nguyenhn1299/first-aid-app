import { StyleSheet } from 'react-native';
import { Theme, Colors } from '..'
import commonStyles from '../common'

let section = {
    flex: 1,
    backgroundColor: Colors.white,
    height: (Theme.windowHeight / 8 - 20) * 2,
    margin: 10,
    padding: 15
    // border: '1px solid ' + Colors.gray_dark,
}

let styles = StyleSheet.create({
    bottomRadius: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: Colors.blue_logo,
        height: Theme.windowHeight / 8,
        width: Theme.windowWidth,
        position: 'absolute'
    },
    // overlap: {
    //     position: 'absolute',
    //     top: (Theme.windowHeight / 16 - 20),
    //     left: 20,
    //     backgroundColor: Colors.white,
    //     width: Theme.windowWidth - 40,
    //     height: (Theme.windowHeight / 8 - 20) * 2,
    //     ...commonStyles.card,
    // },
    
    container: {
        width: '100%'
    },  
    sectionContainer: {
        ...commonStyles.flexRow,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: 'red'
    },
    card: {
        ...section,
        ...commonStyles.card,
    },
    section: section,
})

export default styles;
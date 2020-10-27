import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { strings } from "../../globals";
import { Theme, Colors } from "../../styles";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../styles/sections/home";
// import commonStyles from '../../styles/common'

// const styles = {...homeStyles, ...commonStyles};

const APP_SECTIONS = [
  {
    text: "Hướng dẫn cấp cứu",
    screen: "SituationList",
  },
  {
    text: "Học sơ cấp cứu",
  },
  {
    text: "Giới thiệu",
  },
  {
    text: "Gọi cấp cứu 115",
  },
];

const SectionContainer = ({ sections, navigation }) => {
  return (
    <View style={styles.sectionContainer}>
      {sections.map((s, i) => (
        <TouchableOpacity
          key={i}
          style={styles.section}
          onPress={() => navigation.navigate(s.screen)}
        >
          <Text>{s.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <View>
      <View style={styles.bottomRadius} />

      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <View style={styles.card}>
            <Text>**{strings.warning_note}</Text>
          </View>
        </View>
        <SectionContainer
          sections={[APP_SECTIONS[0]]}
          navigation={navigation}
        />
        <SectionContainer
          sections={[APP_SECTIONS[1]]}
          navigation={navigation}
        />
        <SectionContainer
          sections={[APP_SECTIONS[2], APP_SECTIONS[3]]}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

const navigationOptions = () => ({
  headerStyle: {
    backgroundColor: Colors.blue_logo,
    shadowColor: "transparent",
  },
  // headerBackground: () =>  (
  //     <LinearGradient
  //       colors={[Colors.green_logo, Colors.blue_logo]}
  //       style={{ flex: 1 }}
  //       start={{ x: 1, y: 0.25 }}
  //       end={{ x: 0.25, y: 1.0 }}
  //       locations={[0.1, 0.9]}
  //     />
  //   ),
  title: strings.app_name,
  headerTitleStyle: { color: Colors.white },
});

export default { Home, navigationOptions };

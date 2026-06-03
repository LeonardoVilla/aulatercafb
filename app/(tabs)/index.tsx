import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text>Só alegria</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

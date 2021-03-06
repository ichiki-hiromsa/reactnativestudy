import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TaskListScreen from './src/screens/TaskListScreen'
import CreateTaskScreen from './src/screens/CreateTaskScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <CreateTaskScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

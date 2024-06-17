import { StyleSheet, ScrollView, View } from 'react-native';
import LoadingPage from './LoadingPage/LoadingPage';

export default function App() {
  return (
    <>
    
    <View style={styles.container}>
      <LoadingPage/>
    </View>
    
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

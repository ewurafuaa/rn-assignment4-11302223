import { StyleSheet, View, Image } from 'react-native';

function LoadingPage() {
    return (
        <View>
            <Image source={require('../assets/Basketball.png')} style={styles.basketball} />
        </View>
    );
}

const styles = StyleSheet.create({
    basketball: {
        width: 40,
        height: 40,
    }
});

export default LoadingPage;

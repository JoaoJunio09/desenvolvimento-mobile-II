import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/236x/fb/22/b6/fb22b6a2f7442d4814226d16807be3a0.jpg' }}
      style={styles.imageBackground} 
      resizeMode='cover'
    >
      <View style={styles.container}>
      
        <View style={styles.containerLogo}>
          <Image 
            source={{ uri: 'https://img.freepik.com/vetores-premium/vector-de-design-de-logotipo-criativo-e-elegante-abstrato-e-minimalista-para-qualquer-empresa-de-marca_1253202-135975.jpg?semt=ais_hybrid&w=740&q=80' }} 
            style={styles.imageLogo}
            resizeMode='center'
            />
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    width: 100,
    height: 50,
    display: 'flex',
    backgroundColor: 'red'
  },
  imageLogo: {
    width: 100,
  }
});
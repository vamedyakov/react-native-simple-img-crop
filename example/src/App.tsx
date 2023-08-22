import * as React from 'react';

import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { cropImage } from 'react-native-simple-img-crop';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function App() {
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    cropImage(Image.resolveAssetSource(require('./img.jpg')).uri, {
      offset: { x: 400, y: 800 },
      size: { width: screenWidth, height: screenHeight },
      displaySize: { width: 1667, height: 2500 },
    }).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      {result && (
        <Image
          width={screenWidth}
          height={screenHeight}
          testID={'IMG'}
          source={{ uri: result }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

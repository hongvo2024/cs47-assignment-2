import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Themes';
import { Profiles } from './assets/Themes';
import themes from './assets/Themes/themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */


  //   return (
  //     <View style={styles.container}>
  //       <Text
  //         style={{
  //           fontFamily: 'Sydney', // test to see if the font is loaded, feel free to remove this
  //         }}>
  //         Open up App.js to start working on your app!
  //       </Text>
  //       <Text
  //         style={{
  //           fontFamily: 'Sydney-Bold', // test to see if the font is loaded, feel free to remove this
  //         }}>
  //         ~Good luck~
  //       </Text>
  //     </View>
  //   );
  // }

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  // });

  return (
    <SafeAreaView style={{ backgroundColor: Themes.light.bg, flex: 1 }}>
      <View style={styles.Header}>
        <Image
          source={Icons.menu.light} style={styles.menuLeft} />
        <Text style={{ fontFamily: 'Sydney-Bold', fontSize: 40 }}>
          ensom </Text>
        <Image
          source={Icons.sun} style={styles.sunRight} />
      </View>

      <View style={styles.Body}>
        <View>
          <ImageBackground
            source={Profiles.mtl.image}
            style={styles.mtlImage} imageStyle={{ borderRadius: 15 }}>
            <Text style={styles.text_top}>
              MLT </Text>
            <Text style={styles.text_below}>
              2 miles away </Text>
          </ImageBackground>
        </View>

        <View style={styles.sound}>
          <Text style={{ fontFamily: 'Sydney', fontSize: 20, paddingHorizontal: 20, marginTop: 5 }}>
            My hottest take </Text>
          <View style={styles.soundbox}>
            <Image style={styles.player}
              source={Icons.player.light} />
            <Image style={styles.audio}
              source={Icons.audioWave.light} />
          </View>
        </View>
      </View>

      <View style={styles.Footer}>
        <View style={{ marginLeft: 30, alignItems: 'center' }}>
          <Image style={styles.icon_bot}
            source={Icons.discover.light} />
          <Text style={styles.text_bot}>Discover</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image style={styles.icon_bot}
            source={Icons.heart.light} />
          <Text style={styles.text_bot}>Matches</Text>
        </View>

        <View style={{ marginRight: 20, alignItems: 'center' }}>
          <Image style={styles.icon_bot}
            source={Icons.messages.light} />
          <Text style={styles.text_bot}>Dms</Text>
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  menuLeft: {
    height: 54,
    width: 54,
    marginLeft: 10
  },

  sunRight: {
    height: 54,
    width: 54,
    marginRight: 10
  },

  Body: {
    flex: 1,
    marginHorizontal: 20
  },

  mtlImage: {
    height: undefined,
    aspectRatio: 1.1,
    width: "100%",
    marginTop: 15,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 }
    // position: 'relative',
  },

  text_top: {
    position: 'absolute',
    margin: 20,
    fontSize: 32,
    color: Themes.light.textSecondary,
    fontFamily: 'Sydney'
  },

  text_below: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    fontSize: 20,
    color: Themes.light.textSecondary,
    fontFamily: 'Sydney'
  },

  sound: {
    marginTop: 15,
    borderRadius: 25,
    alignContent: 'center',
    backgroundColor: Themes.light.bgSecondary,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 }
  },

  soundbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10
  },

  player: {
    height: 45,
    width: 45,
    marginRight: 5
  },

  audio: {
    width: 250,
    height: 45,
  },

  Footer: {
    // flex: 1,
    backgroundColor: Themes.light.navigation,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },

  icon_bot: {
    width: 54,
    height: 54,
  },

  text_bot: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 18,
  }
});






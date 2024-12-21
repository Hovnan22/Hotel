import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation';

function App(): React.JSX.Element {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <SafeAreaView edges={['top']} style={{flex: 1}}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle={'dark-content'}
          />
          <MainNavigation />
        </SafeAreaView>
      ) : (
        <>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle={'dark-content'}
          />
          <MainNavigation />
        </>
      )}
    </>
  );
}

export default App;

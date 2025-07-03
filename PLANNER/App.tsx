import React from 'react';
import { SafeAreaView } from 'react-native';
import Calendar from './components/Calendar';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Calendar year={2025} month={5} size={50} />
    </SafeAreaView>
  );
}


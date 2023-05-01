import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AppContainer from './src/components/app-container'
import Main from './src/screens/main-screen'

export default function App() {
  return (
    <AppContainer>
      <Main />
    </AppContainer>
  )
}

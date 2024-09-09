import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PokemonInfo } from '@/components/PokemonInfo'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <PokemonInfo/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})
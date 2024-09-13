import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'

const PokemonMessage = () => {
    return (
        <View>
            <Text>Cargando...</Text>
            <ActivityIndicator
            animating={true}
            size='large'
            />
        </View>
    )
}

export default PokemonMessage

const styles = StyleSheet.create({})
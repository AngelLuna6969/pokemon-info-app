import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, Text } from 'react-native-paper'
import { useCounter } from '@/hooks/useCounter';

export const PokemonInfo = () => {

    const [name, setName] = useState("");
    const [ide, setIde] = useState("");
    const [front, setFont] = useState("");

    const { counter, increment, decrement } = useCounter();

    const getPkemonInfo = async (id = 1) => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + id;
        const request = await fetch(url);
        const reponse = await request.json();
        setName(reponse.name);
        setIde(reponse.id);
        setFont(reponse.sprites.front_default)
        console.log(reponse);
    }

    useEffect(() => {
        getPkemonInfo(counter);
    }, []);

    return (
        <View style={{ flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Text>PokemonInfo</Text>
            <Text variant="displayMedium">
                {ide} - {name}
            </Text>
            <Avatar.Image size={100} source={{uri:front}}/>
            <View style={{ flexDirection: 'row-reverse' }}>
                <Button icon="camera" mode='contained-tonal' onPress={() => increment()}>
                    Siguiente
                </Button>
                <Button icon="camera" mode='contained-tonal' onPress={()=> decrement()}>
                    Anterior
                </Button>
            </View>
        </View>
    )
}


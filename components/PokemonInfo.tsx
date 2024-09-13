import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, Text } from 'react-native-paper'
import { useCounter } from '@/hooks/useCounter';
import { useFetch } from '@/hooks/useFetch';
import PokemonCard from './PokemonCard';
import PokemonMessage from './PokemonMessage';

export const PokemonInfo = () => {

    const { counter, increment, decrement } = useCounter();
    const { data, isLoading, hasError, error } = useFetch("https://pokeapi.co/api/v2/pokemon/" + counter);

    // const [name, setName] = useState("");
    // const [ide, setIde] = useState("");
    // const [front, setFont] = useState("");

    // const getPkemonInfo = async (id = 1) => {
    //     const url = "https://pokeapi.co/api/v2/pokemon/" + id;
    //     const request = await fetch(url);
    //     const reponse = await request.json();
    //     setName(reponse.name);
    //     setIde(reponse.id);
    //     setFont(reponse.sprites.front_default)
    //     console.log(reponse);
    // }

    // useEffect(() => {
    //     getPkemonInfo(counter);
    // }, [counter]);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {/* <Text variant="displayMedium">
                {ide} - {name}
            </Text>
            <Avatar.Image size={100} source={{uri:front}}/> */}
            <PokemonMessage/>
            <PokemonCard
                id={data?.id}
                name={data?.name}
                sprites={[
                    data?.sprites.back_default,
                    data?.sprites.front_default,
                    data?.sprites.back_shiny,
                    data?.sprites.front_shiny
                ]}
            />
            <View style={{ flexDirection: 'row-reverse' }}>
                <Button icon="camera" mode='contained-tonal' onPress={() => increment()}>
                    Siguiente
                </Button>
                <Button icon="camera" mode='contained-tonal' onPress={() => decrement()}>
                    Anterior
                </Button>
            </View>
        </View>
    )
}


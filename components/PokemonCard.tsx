import { Avatar, Button, Text } from 'react-native-paper'

interface pokeProp {
    id: number,
    name: string,
    sprites: any
}

const PokemonCard = ({ id, name, sprites }: pokeProp) => {
    return (
        <>
            <Text variant="displayMedium">
                {id} - {name}
            </Text>{
                sprites.map((sprite: string, index: any) => {
                    return (
                        <Avatar.Image size={100} source={{ uri: sprite }} />
                    )
                })
            }
        </>
    )
}

export default PokemonCard

// const styles = StyleSheet.create({})
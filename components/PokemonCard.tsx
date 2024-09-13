import { View } from 'react-native'
import { Avatar, Button, Text } from 'react-native-paper'

interface pokeProp {
    id: number,
    name: string,
    sprites: any
}

const PokemonCard = ({ id, name, sprites }: pokeProp) => {
    return (
        <>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <View
                    style={{
                        flex: 3,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: "bold",
                        transform: [{
                            rotate: '-90deg'
                        }]
                    }}>#{id} - {name}</Text>
                </View>
                <View
                    style={{
                        flex: 3,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    {
                        sprites.map((sprite: string, index: any) => {
                            return (
                                <Avatar.Image size={100} source={{ uri: sprite }} />
                            )
                        })
                    }
                </View>
            </View>
        </>
    )
}

export default PokemonCard

// const styles = StyleSheet.create({})
import ExemploStyle_Text from "@/components/ExemploStyle_Text"
import { router } from "expo-router"
import { Pressable, Text, View } from "react-native"

export default () => {
    return (
        <View>
            <Pressable
                onPress={() => { router.back() }}>
                <Text>Voltar para tela anterior</Text>
            </Pressable>
            <ExemploStyle_Text />
        </View>
    )
}
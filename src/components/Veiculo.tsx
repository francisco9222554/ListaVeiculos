import { Pressable, StyleSheet, Text, View } from "react-native";

type VeiculoProps = {
    marca: string;
    modelo: string;
    ano?: number;
    index: number;
    onSelecionar: (index: number) => void;
}

export default function Veiculo(props: VeiculoProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.fonte_grande}>Marca: {props.marca}</Text>
            <Text style={styles.fonte_grande}>Modelo: {props.modelo}</Text>
            {
                props.ano
                &&
                <Text style={styles.fonte_grande}>Ano: {props.ano}</Text>
            }

            <Pressable
                onPress={() => { props.onSelecionar(props.index) }}>
                <Text style={styles.fonte_grande}>SELECIONAR</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    fonte_grande: {
        fontSize: 20
    },
    container: {
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        borderStyle: 'solid',
        padding: 8,
        backgroundColor: '#f9f9f9'
    }
})
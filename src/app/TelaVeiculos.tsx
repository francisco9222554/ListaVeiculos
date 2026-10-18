import Veiculo from "@/components/Veiculo";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type VeiculoType = {
    marca: string;
    modelo: string;
    ano?: number;
}

export default function TelaVeiculos() {
    const veiculo1 = { marca: 'Toyota', modelo: 'Corolla', ano: 2022 } as VeiculoType;
    const veiculo2 = { marca: 'Honda', modelo: 'Civic', ano: 2021 } as VeiculoType;
    const veiculo3 = { marca: 'Volkswagen', modelo: 'Golf', ano: 2020 } as VeiculoType;
    const veiculo4 = { marca: 'Ford', modelo: 'Mustang', ano: 2019 } as VeiculoType;
    const veiculo5 = { marca: 'Chevrolet', modelo: 'Onix' } as VeiculoType;

    const [listaVeiculos, setListaVeiculos] = useState<VeiculoType[]>([
        veiculo1, veiculo2, veiculo3, veiculo4, veiculo5
    ]);

    function selecionarVeiculo(index: number) {
        Alert.alert('Veículo selecionado: ' + index);
        const novaLista = [...listaVeiculos];
        novaLista.splice(index, 1);
        setListaVeiculos(novaLista);
        console.log(novaLista);
    }

    const ListHeader = () => (
        <View style={styles.header}>
            <Text style={styles.headerText}>Lista de Veículos</Text>
            <Text style={styles.headerSubText}>Total: {listaVeiculos.length} veículos</Text>
        </View>
    );

    const ListFooter = () => (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Fim da lista de veículos</Text>
            <Text style={styles.footerSubText}>Obrigado por visualizar!</Text>
        </View>
    );

    const ItemSeparator = () => (
        <View style={styles.separator} />
    );

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.botaoVoltar}
                onPress={() => { router.back() }}>
                <Text style={styles.textoBotao}>Voltar para tela anterior</Text>
            </Pressable>

            <FlatList
                data={listaVeiculos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Veiculo
                        marca={item.marca}
                        modelo={item.modelo}
                        ano={item.ano}
                        index={index}
                        onSelecionar={selecionarVeiculo}
                    />
                )}
                ListHeaderComponent={ListHeader}
                ListFooterComponent={ListFooter}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    botaoVoltar: {
        padding: 12,
        backgroundColor: '#e0e0e0',
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    textoBotao: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    header: {
        backgroundColor: '#2196F3',
        padding: 16,
        alignItems: 'center',
        marginBottom: 8,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    headerSubText: {
        fontSize: 16,
        color: 'white',
        marginTop: 4,
    },
    footer: {
        backgroundColor: '#4CAF50',
        padding: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    footerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    footerSubText: {
        fontSize: 14,
        color: 'white',
        marginTop: 4,
    },
    separator: {
        height: 2,
        backgroundColor: '#2196F3',
        marginHorizontal: 20,
        marginVertical: 4,
    },
});
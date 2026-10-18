import Cachorro from "@/components/Cachorro";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type CachorroType = {
  nome: string,
  raca?: string
}

export default function Index() {
  const cao1 = {nome: 'Totó', raca: 'Não definido'} as CachorroType;
  const cao2 = {nome: 'Bob', raca: 'Rottweiler'} as CachorroType;

  
  const [campo, setCampo] = useState('');
  const [ativado, setAtivado] = useState(false);
  const [listaCachorro, setListaCachorro] = useState<CachorroType[]>([cao1, cao2]);
  
  
  // const lista : CachorroType[] = [cao1, cao2];
  
  const router = useRouter();

  function selecionarCachorro(index: number){
    Alert.alert('Cachorro selecionado: '+ index);
    // Correção: cria nova lista (imutável) em vez de mutar o estado diretamente
    const novaLista = [...listaCachorro];
    novaLista.splice(index, 1);
    setListaCachorro(novaLista);
    console.log(novaLista)
  }

  return (
    <View style={styles.container}>
      
      <FlatList 
        data={listaCachorro} 
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item)=>{ 
          return (
            <Cachorro 
              nome={item.item.nome} 
              raca={item.item.raca}
              index={item.index}
              onSelecionar={selecionarCachorro}/>
          )
        }}/>

      <Pressable
        style={styles.botao}
        onPress={()=>{ router.navigate('/telaStyleText')  }}>
        <Text style={styles.textoBotao}>Ir para Exemplo Style Text</Text>
      </Pressable>

      <Pressable
        style={[styles.botao, styles.botaoVeiculos]}
        onPress={()=>{ router.navigate('/telaVeiculos')  }}>
        <Text style={styles.textoBotao}>Ir para Lista de Veículos</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fonte_grande:{
    fontSize: 40
  },
  cor_verde:{
    color: 'green'
  },
  cor_vermelho:{
    color: 'red'
  },
  botao: {
    padding: 12,
    backgroundColor: '#e0e0e0',
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  botaoVeiculos: {
    backgroundColor: '#2196F3',
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  }
});
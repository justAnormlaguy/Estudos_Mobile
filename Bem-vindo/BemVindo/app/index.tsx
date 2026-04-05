import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Itens } from "@/components/itens"

export default function Index() {
  const [telaAtual, setTelaAtual] = useState('bem-vindo');
  const [filtroAtual, setFiltroAtual] = useState('Todos');
  const [produtos] = useState([
    { id: 1, nome: "Roupa Feminina", preco: "R$ 20,00", categoria: "Feminino" },
    { id: 2, nome: "Roupa Masculina", preco: "R$ 10,00", categoria: "Masculino" },
    { id: 3, nome: "Camiseta Básica", preco: "R$ 35,00", categoria: "Feminino" },
    { id: 4, nome: "Calça Jeans Reta", preco: "R$ 89,90", categoria: "Masculino" },
    { id: 5, nome: "Vestido Floral", preco: "R$ 55,00", categoria: "Feminino" },
    { id: 6, nome: "Camisa Social Branca", preco: "R$ 120,00", categoria: "Masculino" },
    { id: 7, nome: "Saia Midi Plissada", preco: "R$ 45,00", categoria: "Feminino" },
    { id: 8, nome: "Bermuda Cargo", preco: "R$ 60,00", categoria: "Masculino" },
    { id: 9, nome: "Blusa de Frio Tricô", preco: "R$ 75,00", categoria: "Feminino" },
    { id: 10, nome: "Jaqueta de Couro", preco: "R$ 250,00", categoria: "Masculino" },
    { id: 11, nome: "Regata Esportiva", preco: "R$ 25,00", categoria: "Feminino" },
    { id: 12, nome: "Moletom com Capuz", preco: "R$ 110,00", categoria: "Masculino" },
    { id: 13, nome: "Shorts Jeans Cintura Alta", preco: "R$ 40,00", categoria: "Feminino" },
    { id: 14, nome: "Camisa Polo Listrada", preco: "R$ 50,00", categoria: "Masculino" },
    { id: 15, nome: "Cardigan Leve", preco: "R$ 65,00", categoria: "Feminino" },
    { id: 16, nome: "Calça de Moletom Jogger", preco: "R$ 70,00", categoria: "Masculino" },
    { id: 17, nome: "Top Fitness Cruzado", preco: "R$ 30,00", categoria: "Feminino" },
    { id: 18, nome: "Terno Completo Slim", preco: "R$ 350,00", categoria: "Masculino" },
    { id: 19, nome: "Macacão Pantalona", preco: "R$ 95,00", categoria: "Feminino" },
    { id: 20, nome: "Suéter de Lã", preco: "R$ 85,00", categoria: "Masculino" },
    { id: 21, nome: "Biquíni Estampado", preco: "R$ 45,00", categoria: "Feminino" },
    { id: 22, nome: "Sunga Preta Lisa", preco: "R$ 35,00", categoria: "Masculino" }
  ])

  const produtosFiltrados = produtos.filter((item) => {
    if (filtroAtual === 'Todos') {
      return true; // Deixa passar todos os itens
    } else {
      return item.categoria === filtroAtual; // Deixa passar só os que batem com o filtro
    }
  });

  if (telaAtual === 'home') {
    return (
      <View style={styles.containerPosts}>
        <ScrollView>

          <View style={styles.botaoVoltar}>
            <TouchableOpacity >
              <Text style={styles.botaoTexto} onPress={() => setTelaAtual('bem-vindo')}>Voltar para a tela inicial</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.botoesFiltro}>
            <TouchableOpacity onPress={() => setFiltroAtual('Todos')}>
              <Text style={filtroAtual === 'Todos' ? styles.botaoSelecionado : null}>Todos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setFiltroAtual('Feminino')}>
              <Text style={filtroAtual === 'Feminino' ? styles.botaoSelecionado : null}>Feminino</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setFiltroAtual('Masculino')}>
              <Text style={filtroAtual === 'Masculino' ? styles.botaoSelecionado : null}>Masculino</Text>
            </TouchableOpacity>
          </View>

          {produtosFiltrados.map((item) => (
            <Itens
              id={item.id}
              titulo={item.nome}
              preco={item.preco}
              categoria={item.categoria}
            />
          ))}

        </ScrollView>
        <View >
          <TouchableOpacity style={styles.botaoFAB}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.descricao}>
        <View style={styles.logo}></View>
        <Text style={styles.titulo}>Bem Vindo</Text>
        <Text style={styles.subtitulo}>Breve explicação</Text>
      </View>
      <View style={styles.fabContent}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto} onPress={() => setTelaAtual('home')}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  containerPosts: {
    flex: 1,
    padding: 8,
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",

  },
  logo: {
    backgroundColor: "#1000f0",
    padding: 10,
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  descricao: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  titulo: {
    color: "#000000",
    fontSize: 40,
    fontWeight: "bold",

  },
  subtitulo: {
    color: "#6d6d6d",
    fontSize: 20,
  },
  botao: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#119600",
    width: 100,
    alignItems: "center"
  },
  botaoTexto: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    textAlign: "center"
  },
  botaoVoltar: {
    padding: 10,
    backgroundColor: "#00756c",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "auto",
    margin: 10
  },
  botoesFiltro: {
    padding: 10,
    backgroundColor: "#00756c",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    borderRadius: 10,
    width: "auto",
    margin: 10

  },
  botaoSelecionado: {
    padding: 8,
    backgroundColor: "#dadada80",
    borderRadius: 10,
    fontWeight: "bold"
  },
  fabContent: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    
  },
  botaoFAB: {
    alignItems: "flex-end",
    backgroundColor: "#1976D2",
    borderRadius: 100,
  }
})

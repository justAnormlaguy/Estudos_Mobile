import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { Itens } from "@/components/itens"
import { Stack } from "expo-router";

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

  if (telaAtual === 'macaco') {
    return (
      <View>
        <TouchableOpacity onPress={() => setTelaAtual("bem-vindo")}>
          <Image source={require("./macaco.png")} style={styles.imagemMacaco} />
        </TouchableOpacity>
      </View>
    )


  }


  if (telaAtual === 'home') {
    return (
      <View style={styles.containerPosts}>
        <Stack.Screen options={{ headerShown: false }} />

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

        <TouchableOpacity style={styles.botaoFAB} onPress={() => alert('Abrir carrinho!')}>
          <Text>+</Text>
        </TouchableOpacity>

      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.descricao}>
        <View style={styles.logo}></View>
        <Text style={styles.titulo}>Bem Vindo</Text>
        <Text style={styles.subtitulo}>Aplicativos de compras virtuais eletrônicas tecnológias</Text>
      </View>
      <View style={styles.botoesPrincipais}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto} onPress={() => setTelaAtual('home')}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSurpresa}>
          <Text style={styles.botaoTexto} onPress={() => setTelaAtual('macaco')}>Surpresa</Text>
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
    textAlign: "center"
  },
  botoesPrincipais: {
    justifyContent: "center",
    alignItems: "center"
  },
  botao: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#119600",
    width: 100,
    alignItems: "center",
    margin: 15
  },
  botaoTexto: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    textAlign: "center"
  },
  botaoSurpresa: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#119600",
    width: 100,
    alignItems: "center"
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
  botaoFAB: {
    // A mágica que tira ele do fluxo normal da tela
    position: 'absolute',

    // Posicionamento na tela (canto inferior direito)
    right: 20,
    bottom: 20,

    // Tamanho do botão
    width: 60,
    height: 60,

    // Cor e formato
    backgroundColor: '#cecece',
    borderRadius: 30, // Para ficar redondo, o borderRadius deve ser sempre a metade da largura/altura

    // Centralizar o ícone/texto dentro dele
    justifyContent: 'center',
    alignItems: 'center',

    // Sombras para dar o efeito de que está "descolado" da tela
    elevation: 5, // Cria sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  imagemMacaco: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: 650
  }
})

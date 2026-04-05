import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"

export const Itens = ({ id, titulo, preco, categoria }) => {
  return (
      <View style={styles.post}>
        <Text style={styles.nomeProduto}>{titulo}</Text>
        <Text style={styles.categoriaProduto}>{categoria}</Text>
        <Text style={styles.valorProduto}>{preco}</Text>
        <TouchableOpacity onPress={() => alert("Comprado")} style={styles.botaoComprar}>Comprar</TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  post: {
    padding: 25,
    borderColor: "#000",
    borderWidth: 1, 
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  nomeProduto: {
    fontSize: 15,
    color: "#000"
  },
  categoriaProduto: {
    color: "#727272"
  },
  valorProduto: {
    color: "#727272"
  },
  botaoComprar:{
    backgroundColor: "#005bc4",
    padding: 8,
    margin: 10,
    gap: 5,
    borderRadius: 10,
    textAlign: "center"
  }
})
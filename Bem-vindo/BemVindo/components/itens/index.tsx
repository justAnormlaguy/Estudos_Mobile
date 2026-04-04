import { View, Text, StyleSheet } from "react-native"

export const Itens = ({ id, titulo, preco, categoria }) => {
  return (
      <View style={styles.post}>
        <Text style={styles.nomeProduto}>{id}</Text>
        <Text style={styles.nomeProduto}>{titulo}</Text>
        <Text style={styles.categoriaProduto}>{categoria}</Text>
        <Text style={styles.valorProduto}>{preco}</Text>
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

  }
})
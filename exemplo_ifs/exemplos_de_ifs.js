import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [botaoExibido, setBotaoExibido] = useState(1); // 1 - Rosa; 2 - Cinza

  function mostrarBotaoRosa(){
    setBotaoExibido(1)
  }

  return (
    <View style={styles.container}>
      {botaoExibido == 1 ? (
        // oq precisa ser exibido se for 1
        <TouchableOpacity onPress={  () => setBotaoExibido(2) } style={[styles.estiloPadraoBotao, styles.botaoRosa]}>
          <Text>Mostrar o cinza</Text>
        </TouchableOpacity>
      ) : (
        // oq precisa ser exibido se for 2
        <TouchableOpacity onPress={mostrarBotaoRosa}
          style={[styles.estiloPadraoBotao, { backgroundColor: '#c4c4c4' }]}>
          <Text>Mostrar o rosa</Text>
        </TouchableOpacity>
      )}

      <Text style={{color: botaoExibido == 1 ? '#ffaaff' : '#c4c4c4'}}> Cor do botao é esta daqui </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  estiloPadraoBotao: {
    //
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
  },

  botaoRosa: {
    backgroundColor: '#ffaaff',
  },
});

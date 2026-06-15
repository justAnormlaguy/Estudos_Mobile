import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
import Constants from 'expo-constants'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';
  const [listaAPI, setListaAPI] = useState([]);
  const [listaFiltrada, setListaFiltrada] = useState([]);
  const [termoBusca, setTermoBusca] = useState('');
  const [loading, setLoading] = useState(false);
  const [idEditando, setIdEditando] = useState(null);
  const [tituloPost, setTituloPost] = useState('');

  useEffect(() => {
    buscarLista();
  }, []);

  async function buscarLista() {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setListaAPI(response.data);
      setListaFiltrada(response.data);
      setLoading(false);
      if (listaAPI === null) {
        Alert.alert('Aviso', 'Lista está vazia');
        return;
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao buscar a lista');
    } finally {
      //Alert.alert('Sucesso', 'A lista foi carregada com sucesso');
    }
  }

  function filtrarBusca(textoDigitado){
    setTermoBusca(textoDigitado);

    if(textoDigitado.trim() === ''){
      setListaFiltrada(listaAPI);
      return;
    }

    const resultados = listaAPI.filter((item) => {
      const tituloDoItem = item.title.toLowerCase();
      const textoBuscado = textoDigitado.toLowerCase();
      return tituloDoItem.includes(textoBuscado);
    });

    setListaFiltrada(resultados)
  }

  async function deletarPost(itemID) {
    Alert.alert('Atenção', 'Tem certeza que deseja excluir esta postagem?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            setLoading(true);
            await axios.delete(API_URL + '/' + itemID);
            setLoading(false);
          } catch (error) {
            Alert.alert('Erro', 'Nao foi possivel deletar o post');
          } finally {
            Alert.alert('SUcesso', 'O post foi deletado');
          }
        },
      },
    ]);
  }

  function prepararEdicao(item) {
    setIdEditando(item.id);
    setTituloPost(item.title);
  }

  async function salvarPost() {
    if (tituloPost.trim() === '') {
      Alert.alert('Aviso', 'O campo não pode estar vazio');
      return;
    }

    try {
      setLoading(true);

      const payload = {
        title: tituloPost,
        body: 'Padrao',
        userId: 1,
      };

      if (idEditando) {
        await axios.put(API_URL + '/' + idEditando, payload);
        Alert.alert('Sucesso', 'Post editado com sucesso');
      } else {
        await axios.post(API_URL, payload);
        Alert.alert('Sucesso', 'Post criado com sucesso');
      }

      setTituloPost('');
      setIdEditando(null);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao salvar os dados');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
        <Text>Formulario</Text>
        <TextInput
          value={tituloPost}
          onChangeText={setTituloPost}
          placeholder="Digite um titulo novo ou selecione um post para edição"
        />
        <View>
          <TextInput
            value={termoBusca}
            onChangeText={filtrarBusca}
            placeholder="Buscar por titulo"
          />
        </View>

        <TouchableOpacity style={styles.botaoSalvar} onPress={() => salvarPost()}>
          <Text style={styles.textoBotao}>SALVAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lista}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={listaFiltrada}
            renderItem={({ item }) => {
              return (
                <View style={styles.componenteLista}>
                  <Text>ID: {item.id} </Text>
                  <Text>Titulo: {item.title} </Text>
                  <View style={styles.botoes}>
                    <TouchableOpacity style={styles.botaoDelete} onPress={() => deletarPost(item.id)}>
                      <Text style={styles.textoBotao}>DELETAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoEditar} onPress={() => prepararEdicao(item)}>
                      <Text style={styles.textoBotao}>EDITAR</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
            ListEMptyComponent={
              <Text>Nenhuma postagem encontrada</Text>
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  componenteLista: {
    padding: 8,
  },
  formulario: {
    backgroundColor: 'blue',
  },
  lista: {
    backgroundColor: 'gray',
    padding: 10,
  },
  botoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  botaoDelete:{
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 10
  },
  botaoEditar:{
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 10,
  },
  textoBotao:{
    fontWeight: 'bold'
  },
  botaoSalvar:{
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 10,
    alignSelf: 'flex-start'
  }
});

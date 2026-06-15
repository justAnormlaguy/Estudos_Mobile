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

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';
  const [listaAPI, setListaAPI] = useState([]);
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
      setLoading(false);
      if (listaAPI === null) {
        Alert.alert('Aviso', 'Lista está vazia');
        return;
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao buscar a lista');
    } finally {
      Alert.alert('Sucesso', 'A lista foi carregada com sucesso');
    }
  }


  async function deletarPost(itemID){
    
    Alert.alert('Atenção', 'Tem certeza que deseja excluir esta postagem?', [{text: "Cancelar", style: "cancel"},{ text: "Excluir", style: "destructive", onPress: async () => {
         try{
      setLoading(true);
      await axios.delete(API_URL + '/' + itemID);
      setLoading(false)
    } catch (error){
      Alert.alert('Erro', "Nao foi possivel deletar o post");
    } finally {
      Alert.alert('SUcesso', 'O post foi deletado')
    }

    }}])
    
    
   
  }

  function prepararEdicao(item){
    setIdEditando(item.id);
    setTituloPost(item.title)
  }

  async function salvarPost(){
    if(tituloPost.trim() === ''){
      Alert.alert('Aviso', 'O campo não pode estar vazio')
      return;
    }

    try{
      setLoading(true)

      const payload = {
        title: tituloPost,
        body: 'Padrao',
        userId: 1
      }

      if(idEditando){
        await axios.put(API_URL + '/' + idEditando, payload);
        Alert.alert('Sucesso', 'Post editado com sucesso');
      } else {
        await axios.post(API_URL, payload);
        Alert.alert('Sucesso', 'Post criado com sucesso');
      }

      setTituloPost('');
      setIdEditando(null);
    } catch (error) {
      Alert.alert('Erro', 'Erro ao salvar os dados')
    } finally {
      setLoading(false)
    }

  }

  return (
    <View style={styles.container}>

      <View>
        <Text>Formulario</Text>
        <TextInput
          value={tituloPost}
          onChangeText={setTituloPost}
          placeholder='Digite um titulo novo ou selecione um post para edição'
        />

        <TouchableOpacity onPress={() => salvarPost()}>
          <Text>SALVAR</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={listaAPI}
          renderItem={({ item }) => {
            return (
              <View>
                <Text> ------------ </Text>
                <Text>ID: {item.id}</Text>
                <Text>Titulo: {item.title} </Text>
                <TouchableOpacity onPress={() => deletarPost(item.id)}>
                  <Text>DELETAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> prepararEdicao(item)}>
                  <Text>EDITAR</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    paddingTop: 35,
  },
});

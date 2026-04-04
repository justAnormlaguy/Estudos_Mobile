import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { TelaLogin} from './components/TelaLogin'

export default function App() {
  const [telaAtual, setTelaAtual] = useState('login');

  const [usuario, setUsuario] = useState('hugo');
  const [senha, setSenha] = useState('1234');



  function mudarTela(telaDestino){
    if(telaDestino == "home"){
      if(usuario == "hugo" && senha == "1234"){
        setTelaAtual("home")
      }else{
        alert("login e senha incorretos")
      }
    }
  }

  function TelaHome() {
    return (
      <>
        <View>
          <Text>Esta é a tela de home</Text>

          <TouchableOpacity onPress={() => mudarTela('login')} style={{backgroundColor: '#b3b3b3', alignItems: 'center'}}> 
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  return <View style={styles.container}>
    {
      telaAtual == 'login' ? 
        <TelaLogin funcaoVerificaMudancaTela={() => mudarTela('home')} nome={usuario} /> 
      :   
        <TelaHome />
    }
  
  </View>;
}1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

import { Text, View, TouchableOpacity } from 'react-native';


export function TelaLogin({funcaoVerificaMudancaTela, nome}) {
  return (
    <>
      <View>
        <Text>Este é o login</Text>
        <TouchableOpacity
          onPress={() => funcaoVerificaMudancaTela('home')}
          style={{ backgroundColor: '#ffaaff', alignItems: 'center' }}>
          <Text>Fazer login</Text>
          <Text>{nome}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

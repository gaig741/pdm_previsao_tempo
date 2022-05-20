import { useState } from 'react';
import { 
  Button,
  FlatList,
  StyleSheet, 
  Text,
  TextInput, 
  View } from 'react-native';
import {
  PROTOCOL,
  LANGUAGE,
  UNITS,
  CNT,
  APPID,
  BASE_URL
} from '@env'

export default function App() {

  const obterPrevisoes = () => {
    const endPoint = `${PROTOCOL}://${BASE_URL}?lang=${LANGUAGE}&units=${UNITS}&cnt=${CNT}&appid=${APPID}&q=${cidade}`
    fetch(endPoint)
    .then(response => {
      return response.json()
    })
    .then(dados => {
      setPrevisoes(dados['list'])
    })
  }

  const [previsoes, setPrevisoes] = useState([])

  const [cidade, setCidade] = useState('')
  const capturarCidade = (cidadeDigitada) => {
    setCidade(cidadeDigitada)
  }
  return (
    <View style={styles.containerView}>
        <View style={styles.entradaView}>
          <TextInput
            style={styles.cidadeTextInput}
            placeholder="Digite o nome de uma cidade"
            value={cidade}
            onChangeText={capturarCidade}      //2:04:45 DA AULA DO BOSSINI
          />    
          <Button 
            title="OK"
            onPress={obterPrevisoes}
          />
        </View>
      <FlatList
        data={previsoes}
        renderItem={p => (
          <Text>{JSON.stringify(p)}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerView:{
    padding: 40,
  },
  entradaView: {
    marginTop: 8,
  },
  cidadeTextInput: {
    padding: 12,
    borderBottomColor: '#FF9800',
    borderBottomWidth: 2,
    marginBottom: 4
  }
});

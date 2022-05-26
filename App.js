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

import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  const [cidade, setCidade] = useState('')
  const [previsoes, setPrevisoes] = useState([])
  const capturarCidade = (cidadeDigitada) => {
    setCidade(cidadeDigitada)
  }

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
  return (
    <View style={styles.containerView}>
        <View style={styles.entradaView}>
          <TextInput
            style={styles.cidadeTextInput}
            placeholder="Digite o nome de uma cidade"
            value={cidade}
            onChangeText={capturarCidade}      
          />    
          <Button 
            title="OK"
            onPress={obterPrevisoes}
          />
        </View>
        <View style={{alignItems: 'center'}}> 
        <FlatList
            data={previsoes}
            renderItem={p => (
              <PrevisaoItem previsao={p.item}/>
            )}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView:{
    padding: 40,
  },
  entradaView: {
    marginBottom: 8,
  },
  cidadeTextInput: {
    padding: 12,
    borderBottomColor: '#FF9800',
    borderBottomWidth: 2,
    marginBottom: 4
  }
});

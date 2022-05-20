import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const cartao = (props) => {
  return (
    <View styles={{...styles.cartao, ...props.estilos}}>
      <Text>cartao</Text>
    </View>
  )
}

export default cartao

const styles = StyleSheet.create({
    cartao:{
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 4,
        padding: 12, 
        borderRadius: 12
    }
})
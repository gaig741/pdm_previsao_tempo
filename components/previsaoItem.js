import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const previsaoItem = () => {
  return (
    <cartao estilos={styles.cartao}>
        <View style={styles.tela}>
            <Image
                style={styles.imagem}
                source={{url: ''}}
            />
        </View>
    </cartao>
  )
}

export default previsaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 8,
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50, 
        height: 50
    }
})
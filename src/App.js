import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import api from './services/Api.js'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5DEB3',
    },
    containerSearch: {
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DEB887'
    },
    containerResult: {
        margin: 15
    },
    input: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#FFDEAD',
    },
    containerButton: {
        backgroundColor: '#CD853F',
        width: '20%',
        height: 30,
        borderRadius: 5,
        textAlign: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    TextButton: {
        fontFamily: 'arial',
        fontSize: 15,
        textAlign: 'center',
        color: '#FFDEAD'
    },
    containerResultLine: {

    },
    text: {
        color: '#363636',
        fontFamily: 'arial',
        fontSize: 13,
    },
})
export default function App() {
    const [infoCep, setInfCep] = useState({});
    const [searchCep, setSearchCep] = useState('');


    const getCep = async () => {
        const { data } = await api.get(`${searchCep}/json/`);
        setInfCep(data);
        console.log(data);
    };

    return (
        <SafeAreaView style={style.container}>
            <View style={style.containerSearch}>
                <TextInput style={style.input}
                    placeholder="Digite o Cep"
                    value={searchCep}
                    onChangeText={text => setSearchCep(text)}
                />
                <TouchableOpacity style={style.containerButton} onPress={getCep}>
                    <Text style={style.TextButton}>Buscar</Text>
                </TouchableOpacity>
            </View>
            <View style={style.containerResult}>
                <View style={style.containerResultLine}>
                    <Text style={style.text}>Rua: {infoCep.logradouro} </Text>
                </View>
                <View style={style.containerResultLine}>
                    <Text style={style.text}>Complemento: {infoCep.complemento}</Text>
                </View>
                <View style={style.containerResultLine}>
                    <Text style={style.text}>Bairro: {infoCep.bairro}</Text>
                </View>
                <View style={style.containerResultLine}>
                    <Text style={style.text}>Localidade: {infoCep.localidade}</Text>
                </View>
                <View style={style.containerResultLine}>
                    <Text style={style.text}>UF: {infoCep.uf}</Text>
                </View>
                <View style={style.containerResultLine}>
                    <Text style={style.text}>IBGE: {infoCep.ibge}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
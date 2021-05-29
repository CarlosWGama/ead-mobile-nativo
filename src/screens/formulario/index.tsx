import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ToastAndroid } from 'react-native';

export interface FormScreenProps {
}

export function FormScreen (props: FormScreenProps) {

    const enviar = async() => {

        // Apenas simula um atraso de 1 segundo na resposta
        await new Promise((resolve, erro) => setInterval(()=>resolve(true), 1000))

        ToastAndroid.show('completou', ToastAndroid.SHORT);
    }

    return (
        <View style={styles.container}>
            
            <View>
                <Text style={{fontSize:20, textAlign:'center', color:"#F2D541"}}>FORMULÁRIO</Text>

                {/* CARD */}
                <View style={styles.card} >
                    {/* EMAIL */}
                    <TextInput placeholder="Digite seu email" style={styles.textInput} keyboardType="email-address"/>
                    <Text style={styles.erro}>Mensagem de Erro</Text>

                    {/* SENHA */}
                    <TextInput placeholder="Digite sua senha" secureTextEntry keyboardType="number-pad" style={styles.textInput}/>
                    <Text style={styles.erro}>Mensagem de Erro</Text>
                
                    <Button title="Enviar" color="#F2D541" onPress={enviar} />
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
        backgroundColor: '#1C2226'
    },
    erro: {
        color: 'red',
        textAlign: 'right',
        marginBottom: 20
    },
    textInput: {
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5
    },
    card: {
        borderRadius: 20,
        backgroundColor: '#8D9CA6',
        padding: 10,
        alignItems: 'stretch'
    }
});
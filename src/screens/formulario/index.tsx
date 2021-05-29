import { Formik, yupToFormErrors } from 'formik';
import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ToastAndroid, ActivityIndicator } from 'react-native';
import * as Yup from 'yup';

export interface FormScreenProps {
}

export function FormScreen (props: FormScreenProps) {

    const enviar = async(dados:any) => {

        // Apenas simula um atraso de 1 segundo na resposta
        await new Promise((resolve, erro) => setInterval(()=>resolve(true), 1000))

        ToastAndroid.show('completou', ToastAndroid.SHORT);
    }

    return (
        <View style={styles.container}>
            
            <View>
                <Text style={{fontSize:20, textAlign:'center', color:"#F2D541"}}>FORMULÁRIO</Text>

                {/* CARD */}
                <Formik
                    initialValues={{email:'', senha:''}}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email('Precisa ser um válido').required('Campo email é obrigatório'),
                        senha: Yup.string().min(6, 'A senha precisa ter pelo menos 6 caracteres').required('Senha é obrigatória')
                    })}
                    onSubmit={enviar}
                >
                    {({handleSubmit, values, handleChange, errors, isValid, isSubmitting}) => (
                    <View style={styles.card} >
                        {/* EMAIL */}
                        <TextInput value={values.email} onChangeText={handleChange("email")} placeholder="Digite seu email" style={styles.textInput} keyboardType="email-address"/>
                        {errors.email && <Text style={styles.erro}>{errors.email}</Text>}

                        {/* SENHA */}
                        <TextInput value={values.senha} onChangeText={handleChange("senha")} placeholder="Digite sua senha" secureTextEntry keyboardType="number-pad" style={styles.textInput}/>
                        {errors.senha && <Text style={styles.erro}>{errors.senha}</Text>}
                    
                        { isSubmitting && <ActivityIndicator size={30} color="#F2D541" /> }

                        { !isSubmitting && <Button title="Enviar" color="#F2D541" disabled={!isValid} onPress={() => handleSubmit()} />}
                    </View>)}
                </Formik>

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
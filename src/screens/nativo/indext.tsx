import * as React from 'react';
import { View, Text, Button, Vibration, Share, Image } from 'react-native';
import * as Battery from 'expo-battery';
import NetInfo from '@react-native-community/netinfo';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';


export interface NativoScreenProps {
}

export function NativoScreen (props: NativoScreenProps) {

    const [ imagem, setImagem ] = React.useState<any>(false);

    //Usa nosso recurso nativo
    const funcao = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status == 'granted') {
            let resposta = await ImagePicker.launchImageLibraryAsync({
                allowsEditing:true,
                base64: true,

                aspect: [3, 4],
                quality: 1
            });

            console.log(resposta)
            setImagem('data:image/jpeg;base64,' + resposta.base64)
        }
    }

    //Views
    return (
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text>Recursos Nativos</Text>
            {imagem && <Image source={{uri: imagem}} style={{width:300, height: 400}} />}
            <Button title="Ativar" onPress={funcao} />
      </View>
    );
}

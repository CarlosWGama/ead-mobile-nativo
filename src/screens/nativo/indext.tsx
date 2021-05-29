import * as React from 'react';
import { View, Text, Button } from 'react-native';

export interface NativoScreenProps {
}

export function NativoScreen (props: NativoScreenProps) {

    //Usa nosso recurso nativo
    const funcao = async () => {

    }

    //Views
    return (
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text>Recursos Nativos</Text>
            <Button title="Ativar" onPress={funcao} />
      </View>
    );
}

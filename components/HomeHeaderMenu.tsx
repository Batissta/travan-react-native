import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Divider, Menu } from 'react-native-paper'

function HomeHeaderMenu(userInfo: any) {

  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();
  return (
    <Menu
      visible={show}
      onDismiss={() => setShow(false)}
      anchor={
        <TouchableOpacity onPress={() => setShow(true)}>
          <MaterialCommunityIcons name='dots-vertical' size={24}></MaterialCommunityIcons>
        </TouchableOpacity>
      }>
      <Menu.Item title='Perfil'></Menu.Item>
      <Menu.Item title='Configurações'></Menu.Item>
      <Menu.Item title='Conversar com a IA'></Menu.Item>
      <Divider />
      <Menu.Item title='Sair' onPress={() => { router.replace("/login") }}></Menu.Item>
    </Menu >
  )
}

export default HomeHeaderMenu
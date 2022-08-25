import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const ModalDelete = () => {
  const [ modalVisible, setModalVisible ] = useState(false);
  return (
    <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View >
          <View >
            <Text>Deseja remover este produto?</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text >Excluir</Text>
            </Pressable>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Cancelar</Text>
              
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
      >
        <Text>Excluir Produto</Text>
      </Pressable>
    </View>
  );
};

export default ModalDelete;
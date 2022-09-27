import React, { useState } from "react";
import { Modal, Text, Pressable, View, TouchableOpacity } from "react-native";
import { 
  CenteredView,
  ModalView,
  Button,
  ButtonContanier,
  Tilte,
  TextStyle,
}from "./style"

  type Props = {
    isVisible: boolean;
    id?: string
    hideModal: () => void;
    onclick: () => void;
  }


const ModalDelete = ({ isVisible, hideModal, onclick, id }: Props) => {
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
      >
        
        <CenteredView >
          <ModalView >
            <Tilte>
              Excluir produto
            </Tilte>
              <TextStyle>
                Deseja remover este produto?
              </TextStyle>
              <ButtonContanier>
                <Button 
                  selected={true}
                  onPress={hideModal}
                >
                  <Text >
                    Cancelar
                  </Text>
                </Button>
                <Button
                  onPress={onclick}
                >
                  <Text>
                    Continuar
                  </Text>
                </Button>
              </ButtonContanier>
          </ModalView>
        </CenteredView>
      </Modal>
  );
};

export default ModalDelete;
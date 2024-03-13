import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const ModalBox = ({
  modalVisible,
  setModalVisible,
  mode,
  radioButtonsData,
  selectedId,
  handleIdChange,
}: any) => {
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={hideModal}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#383838',
            padding: 20,
            margin: 50,
            width: '80%',
            borderRadius: 10,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <RadioGroup
            radioButtons={radioButtonsData}
            onPress={id => handleIdChange(id, mode)}
            selectedId={selectedId}
            labelStyle={{color: 'white', fontSize: 15}}
            containerStyle={{alignItems: 'flex-start'}}
          />

          <TouchableOpacity
            onPress={hideModal}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              width: '100%',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                marginRight: 20,
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalBox;

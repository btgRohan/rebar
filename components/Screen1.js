import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView, Modal, Button } from 'react-native';

const LogoScreen = (props) => {
  const [employeeTypeModalVisible, setEmployeeTypeModalVisible] = useState(false);
  const [teamNameModalVisible, setTeamNameModalVisible] = useState(false);

  const toggleEmployeeTypeModal = () => {
    setEmployeeTypeModalVisible(!employeeTypeModalVisible);
  };

  const toggleTeamNameModal = () => {
    setTeamNameModalVisible(!teamNameModalVisible);
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Image
        source={require('./img/21rebar-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.inputContainer}> 
        <View style={styles.inputBox}>
          <Text style={styles.label}>Team Lead Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            placeholderTextColor="rgba(0,0,0,0.4)"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Team Lead E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            placeholderTextColor="rgba(0,0,0,0.4)"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Team Lead Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            placeholderTextColor="rgba(0,0,0,0.4)"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Employee Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            placeholderTextColor="rgba(0,0,0,0.4)"
          />
        </View>

       {/* Employee Type */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Employee Type</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleEmployeeTypeModal}>
          <Text style={styles.dropdownButtonText}>
            {selectedEmployeeType ? selectedEmployeeType : 'Select Employee Type'}
          </Text>
        </TouchableOpacity>
      </View>

          {/* Team Name */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Team Name</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleTeamNameModal}>
          <Text style={styles.dropdownButtonText}>
            {selectedTeamName ? selectedTeamName : 'Select Team Name'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Employee Type Modal */}
      {/* Employee Type Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={employeeTypeModalVisible}
        onRequestClose={toggleEmployeeTypeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Employee Type</Text>
            <Button title="Option 1" onPress={() => selectEmployeeType('Option 1')} />
            <Button title="Option 2" onPress={() => selectEmployeeType('Option 2')} />
            <Button title="Option 3" onPress={() => selectEmployeeType('Option 3')} />
            <Button title="Option 4" onPress={() => selectEmployeeType('Option 4')} />
            <Button title="Option 5" onPress={() => selectEmployeeType('Option 5')} />
            <Button title="Cancel" onPress={toggleEmployeeTypeModal} />
          </View>
        </View>
      </Modal>

        {/* Team Name Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={teamNameModalVisible}
        onRequestClose={toggleTeamNameModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Team Name</Text>
            <Button title="Team A" onPress={() => selectTeamName('Team A')} />
            <Button title="Team B" onPress={() => selectTeamName('Team B')} />
            <Button title="Team C" onPress={() => selectTeamName('Team C')} />
            <Button title="Team D" onPress={() => selectTeamName('Team D')} />
            <Button title="Team E" onPress={() => selectTeamName('Team E')} />
            <Button title="Cancel" onPress={toggleTeamNameModal} />
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.loginButton}onPress={() => props.navigation.navigate("Screen2")}
      >
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 100, // Adjust paddingBottom based on your content size
  },
  logo: {
    width: 300,
    height: 250,
  },
  inputContainer: {
    marginTop: 0,
    width: '85%',
  },
  inputBox: {
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  label: {
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#73C2FB',
    width: '85%',
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  dropdownButton: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  dropdownButtonText: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 16,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default LogoScreen;

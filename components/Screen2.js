import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const EntryTimeSheet = () => {
  const [employeeCode, setEmployeeCode] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [exitTime, setExitTime] = useState('');
  const [isEmployeeTypeModalVisible, setEmployeeTypeModalVisible] = useState(false);
  const [isTeamNameModalVisible, setTeamNameModalVisible] = useState(false);
  const [selectedEmployeeType, setSelectedEmployeeType] = useState('');
  const [selectedTeamName, setSelectedTeamName] = useState('');

  const toggleEmployeeTypeModal = () => {
    setEmployeeTypeModalVisible(!isEmployeeTypeModalVisible);
  };

  const toggleTeamNameModal = () => {
    setTeamNameModalVisible(!isTeamNameModalVisible);
  };

  const handleEmployeeTypeSelection = (value) => {
    setSelectedEmployeeType(value);
    setEmployeeTypeModalVisible(false);
  };

  const handleTeamNameSelection = (value) => {
    setSelectedTeamName(value);
    setTeamNameModalVisible(false);
  };

  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setDateOfBirth(date.toISOString().split('T')[0]); // Update the state with selected date
    hideDatePicker();
  };

  const [isEntryTimePickerVisible, setEntryTimePickerVisibility] = useState(false);
  const [isExitTimePickerVisible, setExitTimePickerVisibility] = useState(false);

  const showEntryTimePicker = () => {
    setEntryTimePickerVisibility(true);
  };

  const hideEntryTimePicker = () => {
    setEntryTimePickerVisibility(false);
  };

  const handleEntryTimeConfirm = (time) => {
    setEntryTime(time.toLocaleTimeString('en-US')); // Update state with selected time
    hideEntryTimePicker();
  };

  const showExitTimePicker = () => {
    setExitTimePickerVisibility(true);
  };

  const hideExitTimePicker = () => {
    setExitTimePickerVisibility(false);
  };

  const handleExitTimeConfirm = (time) => {
    setExitTime(time.toLocaleTimeString('en-US')); // Update state with selected time
    hideExitTimePicker();
  };

  const sendAdminRequest = () => {
    // Logic for sending admin request
  };

  return (
    <ScrollView backgroundColor='white'>
      <View style={styles.header}>
        <Text style={{color:'#074B66',fontSize: 24,
    fontWeight: 'bold',}}>Entry Time Sheet</Text>
      </View>

      <View style={styles.container}>
      <Text style={styles.subtitle}>Enter your details below!</Text>
      <Text style={styles.smallText}>Fill your details below</Text>
      <View style={styles.logoContainer}>
        <Image
          source={require('./img/management.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Employee Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            value={employeeCode}
            onChangeText={setEmployeeCode}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputBox}>
        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.input}>{dateOfBirth || 'Select Date'}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.timeInputBox}>
          <Text style={styles.label}>Entry Time</Text>
          <TouchableOpacity onPress={showEntryTimePicker}>
            <Text style={styles.input}>{entryTime || 'Select Time'}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isEntryTimePickerVisible}
            mode="time"
            onConfirm={handleEntryTimeConfirm}
            onCancel={hideEntryTimePicker}
          />
        </View>

        <View style={styles.timeInputBox}>
          <Text style={styles.label}>Exit Time</Text>
          <TouchableOpacity onPress={showExitTimePicker}>
            <Text style={styles.input}>{exitTime || 'Select Time'}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isExitTimePickerVisible}
            mode="time"
            onConfirm={handleExitTimeConfirm}
            onCancel={hideExitTimePicker}
          />
        </View>
      </View>

        {/* Employee Type Dropdown */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Employee Type</Text>
        <TouchableOpacity onPress={toggleEmployeeTypeModal}>
          <Text style={styles.dropdownText}>
            {selectedEmployeeType || 'Select Employee Type'}
          </Text>
        </TouchableOpacity>
        <Modal
          visible={isEmployeeTypeModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalBackground}
              onPress={toggleEmployeeTypeModal}
            />
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={() => handleEmployeeTypeSelection('Option 1')}
              >
                <Text style={styles.modalItem}>Option 1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleEmployeeTypeSelection('Option 2')}
              >
                <Text style={styles.modalItem}>Option 2</Text>
              </TouchableOpacity>
              {/* Add other options as needed */}
            </View>
          </View>
        </Modal>
      </View>

        {/* Team Name Dropdown */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Team Name</Text>
        <TouchableOpacity onPress={toggleTeamNameModal}>
          <Text style={styles.dropdownText}>
            {selectedTeamName || 'Select Team Lead/Code'}
          </Text>
        </TouchableOpacity>
        <Modal
          visible={isTeamNameModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalBackground}
              onPress={toggleTeamNameModal}
            />
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={() => handleTeamNameSelection('Team A')}>
                <Text style={styles.modalItem}>Team A</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTeamNameSelection('Team B')}>
                <Text style={styles.modalItem}>Team B</Text>
              </TouchableOpacity>
              {/* Add other options as needed */}
            </View>
          </View>
        </Modal>
      </View>

   {/* ... Other input fields */}
   <View style={styles.timeContainer}>
          <View style={styles.timeInputBox}>
            <Text style={styles.label}>Image<Text style={{color:'#BCBCBC'}}>(optional)</Text></Text>
            <TouchableOpacity style={styles.optionalButton} onPress={() => image}>
              <Text style={styles.optionalButtonText}>Select Image</Text>
            </TouchableOpacity>
            </View>
          
          <View style={styles.timeInputBox}>
            <Text style={styles.label}>location<Text style={{color:'#BCBCBC'}}> (optional)</Text></Text>
            <TextInput
              style={styles.input2}
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
              placeholderTextColor="#999"
            />
          </View>
        </View>
        
        <TouchableOpacity style={styles.sendButton} onPress={sendAdminRequest}>
          <Text style={styles.sendButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  
  inputBox: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  dropdownText: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  modalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  header: {
  marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
    width:390,
    height:83,
    marginBottom: 20,
    backgroundColor:'white',
    borderBottomWidth:1,
    borderBottomColor:'#81CEEC'
   
    
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  optionalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionalBox: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  bracket: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#074B66', 
  },
  smallText: {
    fontSize: 12,
    marginBottom: 10,
    color:'#847F7F',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 0,
  },
  logo: {
    width: 199,
    height: 185,
    marginLeft:150,
  },
  detailsContainer: {},
  inputBox: {
    marginBottom: 30,
    width:340,
    height:40,

  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    width:340,
    height:40
  
  },
  timeInputBox: {
    flex: 1,
    marginRight: 10,
    width:165,
    height:40,
    marginBottom:20
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 2,
    color:"#074B66",
  },
  input:{
    width:340,
    height: 40,
    borderWidth: 1,
    borderColor: '#8B9FB7',
    borderRadius: 6,
    paddingHorizontal: 10,

  },
  input1: {
    height: 40,
    width:165,
    borderWidth: 1,
    borderColor: '#8B9FB7',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  input2: {
    height: 40,
    width:165,
    borderWidth: 1,
    borderColor: '#8B9FB7',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginLeft:5
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#8B9FB7',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width:340, 
    height:40
  },
  optionalContainer: {
    marginBottom: 0,
  },
  optionalBox: {
    marginBottom: 5,
  },
  optionalLabel: {
    fontWeight: 'bold',
    color:'#074B66',
  },
  optionalButton: {
    width:165,
    height:40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#8B9FB7',
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  optionalButtonText: {
    color: '#8B9FB7',
    fontSize: 14,
    fontWeight: 'bold',
    
  },
  sendButton: {
    backgroundColor: '#81CEEC',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomRightRadius:25,
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    marginTop:10,
    width:340,
    height:45,
    
  },
  sendButtonText: {
    color: '#074B66',
    fontSize: 16,
    fontWeight: 'bold',
  
  },
});

export default EntryTimeSheet;
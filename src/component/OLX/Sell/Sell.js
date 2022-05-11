import { StyleSheet, Text, View ,SafeAreaView,Modal,TouchableOpacity,Button} from 'react-native'
import React ,{useState} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Sell = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Text>Hellloo</Text>
    </TouchableOpacity>
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modelContainer}>
          <SafeAreaView>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <MaterialIcons
              style={styles.rightarrow}
              size={25}
              color="black"
              name="close"
            />
          </TouchableOpacity>
        
        </SafeAreaView>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default Sell

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  modelContainer:{
flex: 1,
backgroundColor: 'red',
  },
})
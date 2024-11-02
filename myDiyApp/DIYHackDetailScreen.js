import React, {useEffect,useState} from 'react';
import { View, Text, FlatList, StyleSheet, Image} from 'react-native';

const DiyHackDetailScreen = ({ route }) => {
  const { diyHack } = route.params;
  const [materialRequired, setMaterialRequired] = useState([]);

  useEffect(() => {
    const fetchDiyHacks = async () => {
      setMaterialRequired(diyHack.materialsAsArr);
    };

    fetchDiyHacks();
  }, []);

  return (
    <View style={{ padding: 20}}>

    //Add the code to display the DIY hack detail
  
    </View>
  );
};

const styles = StyleSheet.create({  
  uploadedImage: {
    width: '60%',
    // resizeMode: 'cover',    
    aspectRatio: 1,        // Maintain a 1:1 aspect ratio; adjust as needed
    height: undefined, 
    margin:'.5cm'
  },})
export default DiyHackDetailScreen;


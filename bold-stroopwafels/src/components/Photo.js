import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";

const Photo = ({ file, count }) => {

  const [like, setLike] = useState(count);

  const increment = () => {
    setLike(like + 1);
  }

  return (
    <View style={styles.container}>
    
      <Image style={styles.image} source={file} />

      <TouchableOpacity onPress= {increment}>
        <Text>{like} likes</Text>
      </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 250,
    width: 250,
  },
});

export default Photo;
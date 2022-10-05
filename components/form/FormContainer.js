import React from 'react';
import { ScrollView, Dimensions, StyleSheet, Text } from 'react-native';

let { width } = Dimensions.get('window');

const FormContainer = ({title, children  }) => {

    
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 400,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default FormContainer;
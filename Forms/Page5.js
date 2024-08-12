import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Form5Component = () => {
  const route = useRoute();
  const params = route.params || {};

  const {
    shopname = 'N/A',
    district = 'N/A',
    mandal = 'N/A',
    village = 'N/A',
    pincode = 'N/A',
    imageUri = 'No image selected',
    audioUri = 'No audio recorded',
    text = 'N/A',
    complaintType = 'N/A',
    firstName = 'N/A',
    lastName = 'N/A',
    phone = 'N/A',
    email = 'N/A',
    address = 'N/A',
  } = params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Review Your Details</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shop Details</Text>
        <Text style={styles.field}>Shop Name: {shopname}</Text>
        <Text style={styles.field}>District: {district}</Text>
        <Text style={styles.field}>Mandal: {mandal}</Text>
        <Text style={styles.field}>Village: {village}</Text>
        <Text style={styles.field}>Pincode: {pincode}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Attachments</Text>
        <Text style={styles.field}>Image: {imageUri}</Text>
        <Text style={styles.field}>Audio: {audioUri}</Text>
        <Text style={styles.field}>Text: {text}</Text>
        <Text style={styles.field}>Complaint Type: {complaintType}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <Text style={styles.field}>First Name: {firstName}</Text>
        <Text style={styles.field}>Last Name: {lastName}</Text>
        <Text style={styles.field}>Phone: {phone}</Text>
        <Text style={styles.field}>Email: {email}</Text>
        <Text style={styles.field}>Address: {address}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  field: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default Form5Component;

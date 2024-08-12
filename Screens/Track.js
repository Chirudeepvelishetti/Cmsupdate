import React from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, ScrollView } from 'react-native';
import Header from './Header';

const { height } = Dimensions.get('window');

const steps = [
  { status: 'Complaint Raised', completed: true },
  { status: 'Assigned to DC', completed: false },
  { status: 'ATR Preliminary Submitted', completed: false },
  { status: 'Complaint Resolved', completed: false },
  { status: 'Feedback', completed: false },
];

const ComplaintTrackingScreen = () => {
  const animation = new Animated.Value(0);

  Animated.timing(animation, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  const interpolatedTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 0],
  });

  return (
    <View>
    <Header />
    <View style={styles.container}>
   
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Animated.View style={[styles.stepsContainer, { transform: [{ translateY: interpolatedTranslateY }] }]}>
          {steps.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <View style={[styles.circle, step.completed && styles.circleCompleted]}>
                {step.completed && <Text style={styles.checkmark}>✔</Text>}
              </View>
              <View style={styles.stepTextContainer}>
                <Text style={[styles.stepText, step.completed && styles.stepTextCompleted]}>
                  {step.status}
                </Text>
              </View>
              {index < steps.length - 1 && <View style={styles.line} />}
            </View>
          ))}
        </Animated.View>
      </ScrollView>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#f5f5f5',
    padding: 20,
  
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal:40,
    marginVertical:100
    
  },
  stepsContainer: {
    justifyContent: 'center',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  circleCompleted: {
    backgroundColor: 'green',
  },
  checkmark: {
    color: 'white',
    fontSize: 18,
  },
  stepTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  stepText: {
    fontSize: 16,
    color: '#333',
  },
  stepTextCompleted: {
    color: 'black',
    fontWeight: 'bold',
  },
  line: {
    height: 30,
    width: 2,
    backgroundColor: 'gray',
    position: 'absolute',
    left: 15,
    top: 30,
  },
});

export default ComplaintTrackingScreen;
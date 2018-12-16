import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import globalStyles from "../../config/styles";
import PropTypes from "prop-types";
<<<<<<< HEAD
=======

>>>>>>> add propTypes to activity screens

const ActivityModal = props => {
  return (
    <React.Fragment>
      <Modal
        animationType="fade"
        onRequestClose={() => {}}
        visible={props.isVisible}
        transparent={true}
      >
        <View style={styles.modal}>
          <Text style={styles.title}>ENJOY YOUR ACTIVITY!</Text>
          <Text style={styles.text}>Don't forget to log it after!</Text>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[
              globalStyles.blueGradientColor.start.color,
              globalStyles.blueGradientColor.end.color
            ]}
            style={styles.linearGradientButton}
          >
            <TouchableOpacity
              onPress={() => {
                props.toggleVisibility();
                props.navigation.navigate("ActivityComplete", {
                  activity: props.activity
                });
              }}
            >
              <Text style={styles.buttonText}>Got It</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
    </React.Fragment>
  );
};
ActivityModal.propTypes = {
<<<<<<< HEAD
=======
  activity: PropTypes.object.isRequired,
>>>>>>> add propTypes to activity screens
  navigation: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.bool.isRequired
};
export default ActivityModal;

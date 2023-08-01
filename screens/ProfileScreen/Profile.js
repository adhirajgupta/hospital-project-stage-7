import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

class ChangeDetailsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNumber: '',
      email: '',
      newPassword: '',
      confirmPassword: '',
    };
  }

  handleSubmit = () => {
    // TODO: Handle form submission
  };

  handleDeleteAccount = () => {
    // TODO: Handle delete account button click
  };

  handleConfirmChanges = () => {
    const { name, phoneNumber, email, newPassword, confirmPassword } =
      this.state;
    if (!name || !phoneNumber || !email || !newPassword || !confirmPassword) {
      Alert.alert('All fields are required');
    } else if (newPassword !== confirmPassword) {
      Alert.alert('Passwords do not match');
    } else {
      this.handleSubmit();
    }
  };

  render() {
    const { name, phoneNumber, email, newPassword, confirmPassword } =
      this.state;
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
          Change Details
        </Text>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 16, marginBottom: 8 }}>Name</Text>
          <TextInput
            style={{ borderWidth: 1, padding: 8 }}
            placeholder="Enter your name"
            value={name}
            onChangeText={(name) => this.setState({ name })}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 16, marginBottom: 8 }}>Phone Number</Text>
          <TextInput
            style={{ borderWidth: 1, padding: 8 }}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 16, marginBottom: 8 }}>Email</Text>
          <TextInput
            style={{ borderWidth: 1, padding: 8 }}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 16, marginBottom: 8 }}>New Password</Text>
          <TextInput
            style={{ borderWidth: 1, padding: 8 }}
            placeholder="Enter your new password"
            secureTextEntry
            value={newPassword}
            onChangeText={(newPassword) => this.setState({ newPassword })}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 16, marginBottom: 8 }}>
            Confirm Password
          </Text>
          <TextInput
            style={{ borderWidth: 1, padding: 8 }}
            placeholder="Confirm your new password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(confirmPassword) =>
              this.setState({ confirmPassword })
            }
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#4CAF50',
            padding: 16,
            borderRadius: 4,
            marginBottom: 16,
          }}
          onPress={this.handleConfirmChanges}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>
            Confirm Changes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#f44336',
            padding: 16,
            borderRadius: 4,
            marginBottom: 16,
          }}
          onPress={this.handleDeleteAccount}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>
            Delete Account
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ChangeDetailsScreen;

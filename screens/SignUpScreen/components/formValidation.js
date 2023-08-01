import { Alert } from "react-native";
export function validateSignUpData(data, navigation) {
    switch(true) {
        case data.password !== data.confirm_password:
            Alert.alert("Incorrect input in fields", "Passwords do not match", [{ text: 'OK' }]);
            break;
        case data.phoneNum === "":
            Alert.alert("Incorrect input in fields", "Phone number is required", [{ text: 'OK' }]);
            break;
        case data.firstName === "":
            Alert.alert("Incorrect input in fields", "First name is required", [{ text: 'OK' }]);
            break;
        case data.lastName === "":
            Alert.alert("Incorrect input in fields", "Last name is required", [{ text: 'OK' }]);
            break;
        case !data.checkPhoneValid:
            Alert.alert("Incorrect input in fields", "Invalid phone number", [{ text: 'OK' }]);
            break;
        case !data.check_textInputChange:
            Alert.alert("Incorrect input in fields", "Invalid email id", [{ text: 'OK' }]);
            break;
        case data.confirm_password.length <= 5:
            Alert.alert("Incorrect input in fields", "Password must be at least 6 characters", [{ text: 'OK' }]);
            break;
        case data.password === data.confirm_password &&
            data.phoneNum !== "" &&
            data.firstName !== "" &&
            data.lastName !== "" &&
            data.checkPhoneValid &&
            data.check_textInputChange &&
            data.confirm_password.length > 5:
            signUp(data.username, data.password, data.firstName + " " + data.lastName, data.phoneNum, navigation);
            break;
        default:
            Alert.alert("Incorrect input in fields", "Incorrect input in fields", [{ text: 'OK' }]);
    }
}

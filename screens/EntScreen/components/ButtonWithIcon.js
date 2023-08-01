import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

const ButtonWithIcon = ({ onTap, icon, width, height }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, { width, height }]}
            onPress={() => onTap()}
        >
            <Image style={{ width: width - 2, height: height - 2 }} source={icon} />
        </TouchableOpacity>
    );
};

/**
 ButtonWithIcon.propTypes is a property that allows you to define the expected types of the 
 props passed to a React component. It is used to validate that the props passed to the component 
 match the expected types and to provide useful error messages if they do not.
In the case of ButtonWithIcon, it defines the types of onTap, icon, width, and height props as follows:
onTap is expected to be a function
icon is expected to be an ImageSourcePropType, which is a type for a source of an image that can be used 
in an Image component in React Native
width and height are expected to be numbers
By defining these prop types, it helps to catch errors early and ensure 
that the props passed to ButtonWithIcon are used correctly.
 */

ButtonWithIcon.propTypes = {
    onTap: PropTypes.func.isRequired,
    icon: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
    },
});

export { ButtonWithIcon };

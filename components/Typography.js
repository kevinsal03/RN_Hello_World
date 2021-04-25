import React from 'react';
import type {Node} from 'react';
import { KeyboardAvoidingView, Text, TextInput, useColorScheme } from "react-native";
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const ThemedText = (props): Node => {
  const children = props.children;
  const style = props.style;

  const isDarkMode = useColorScheme() === 'dark';
  const darkModeText = {
    color: isDarkMode ? Colors.light : Colors.dark,
  };

  const ThemedTextStyle = Object.assign(darkModeText, style);

  return (
    <Text {...props} style={ ThemedTextStyle }>
      {children}
    </Text>
  );
};

export const ThemedTextInput = (props): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  const darkModeText = {
    color: isDarkMode ? Colors.light : Colors.dark,
    borderColor: isDarkMode ? Colors.light : Colors.dark,
    borderWidth: 1,
  };

  const ThemedTextStyle = Object.assign(darkModeText, props.style);
  return (
    <KeyboardAvoidingView>
      <TextInput {...props} style={ ThemedTextStyle } />
    </KeyboardAvoidingView>

  );
};

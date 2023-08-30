import React, { type FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  type TextStyle,
} from 'react-native';

type StyleName = 'container' | 'input' | 'title';

type InputProps = {
  value: string;
  onChangeText: (value: string) => void;
  title?: string;
  styles?: { [key in StyleName]: TextStyle };
};

export const Input: FC<InputProps> = ({
  title,
  styles,
  value,
  onChangeText,
}) => (
  <SafeAreaView style={styles?.container}>
    {title && <Text style={[defaultStyles.title, styles?.title]}>{title}</Text>}
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={[defaultStyles.input, styles?.input]}
    />
  </SafeAreaView>
);

const defaultStyles = StyleSheet.create({
  title: {
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#8A8C8A',
    width: 200,
    borderRadius: 8,
    padding: 12,
  },
});

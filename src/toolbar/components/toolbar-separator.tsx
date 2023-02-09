import React from 'react';
import { View, StyleSheet } from 'react-native';

const defaultColor = '#737373';

interface Props {
  color: string;
  style: any,
}

export const ToolbarSeparator: React.FC<Props> = ({ color, style={} }) => {
  return (
    <View style={[{ backgroundColor: color || defaultColor }, style]} />
  );
};
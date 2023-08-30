import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-cnsa1';

export default function App() {
  const [value, setValue] = React.useState<string>('');

  const onChange = (newValue: string) => setValue(newValue);

  return (
    <View style={styles.container}>
      <Input title="Title" value={value} onChangeText={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

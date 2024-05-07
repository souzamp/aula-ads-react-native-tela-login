import React from "react";
import {
    SafeAreaView,
    View,
    VirtualizedList,
    Text
  } from 'react-native';

import styles from './style';

const getItem = (_data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Solicitação ${index + 1}`,
  });
  
  const getItemCount = _data => 5;
  
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function Solicitacoes() {
    return (
        <SafeAreaView style={styles.container}>
          <VirtualizedList
            initialNumToRender={4}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            getItemCount={getItemCount}
            getItem={getItem}
          />
        </SafeAreaView>
      );
}
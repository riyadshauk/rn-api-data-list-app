// @flow
import React from 'react';
import { FlatList, View, Text } from 'react-native';

type Props = {
  items: string[],
  colors: string[],
};

const CustomFlatList = (props: Props) => {
  const { items, colors } = props;
  return (
    <FlatList
      data={items.map((item: any) => (
        { key: item.title }
      ))}
      renderItem={({ item, index }) => (
        <View style={{ backgroundColor: colors[index % colors.length] }}>
          <Text>
            {item.key}
          </Text>
        </View>
      )}
    />
  );
};
export default CustomFlatList;
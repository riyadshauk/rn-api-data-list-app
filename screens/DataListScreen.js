// @flow
import React from 'react';
import {
  ScrollView, StyleSheet, Text, FlatList,
} from 'react-native';
// eslint-disable-next-line max-len
// import axios from 'axios'; // you can also use axios for fetching (might be easier for sending post requests)


type Props = {};
type State = {
  isLoaded: boolean,
  items: string[],
  error: any,
};

/**
 * @note This should be modularized in a separate file that is in a .gitignore,
 * along with any sensitive URL headers or parameters
 */
const url = 'https://jsonplaceholder.typicode.com/todos';

export default class DataListScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Data List',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      error: undefined,
    };
  }

  /**
   * @see https://reactjs.org/docs/faq-ajax.html
   */
  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <Text>
          Error:
          {error.message}
        </Text>
      );
    }
    if (!isLoaded) {
      return <Text>Loading...</Text>;
    }
    return (
      // eslint-disable-next-line no-use-before-define
      <ScrollView style={styles.container}>
        <FlatList
          data={items.map((item: any) => (
            { key: item.title }
          ))}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

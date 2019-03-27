// @flow
import React from 'react';
import {
  ScrollView, StyleSheet, Text,
} from 'react-native';
import {
  url as urlImport, headers, body,
} from '../constants/urlRequestInfo';
import CustomFlatList from '../components/CustomFlatList';
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
const url = urlImport === undefined || urlImport === 'http[s]://subdomain.domain.blah/hello?world=cool&solid' ? 'https://jsonplaceholder.typicode.com/todos' : urlImport;

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
    // fetch(url, {
    //   method: 'POST',
    //   headers,
    //   body: JSON.stringify(body),
    // })
      .then(res => res.json())
      .then(
        (result) => {
          try {
            // unsafely access json, (but) if error is thrown,
            // should go to catch statement (so not really unsafe)
            const items = result.OutputParameters.EBSSALESORDERS.EBSSALESORDERS_ITEM;
            this.setState({
              isLoaded: true,
              items: Array.isArray(items) ? items : [],
            });
          } catch (err) {
            this.setState({
              isLoaded: true,
              items: Array.isArray(result) ? result : [],
            });
          }
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
    const colors = ['lightblue', 'lightgreen'];
    return (
      // eslint-disable-next-line no-use-before-define
      <ScrollView style={styles.container}>
        <CustomFlatList items={items} colors={colors} />
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

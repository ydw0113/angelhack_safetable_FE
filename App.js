import React, {useState, useEffect} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {persistCache} from 'apollo-cache-persist';
import options from './apollo';

export default function App() {
  const [client, setClient] = useState(null);
  const preLoad = async () => {
    try {
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage,
      });
      const client = new ApolloClient({
        cache,
        ...options,
      });
      setClient(client);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preLoad();
  }, []);

  return (
    <ApolloProvider client={client}>
      <View>
        <Text>AngelHack</Text>
      </View>
    </ApolloProvider>
  );
}

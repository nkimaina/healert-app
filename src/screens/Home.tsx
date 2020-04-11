import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native'
import { UserContext } from '../utils/User';

const Home = () => {
    const user = React.useContext(UserContext);
    return <SafeAreaView>
                <Text>Hello World!</Text>
           </SafeAreaView>
}

export default Home;
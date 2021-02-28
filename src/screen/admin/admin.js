import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

export default class admin extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems:'center'
                }}
            >
                <TouchableOpacity onPress={() => {
                        
                        
                    }} style={styles.dfnjdebndev}>
                <Text>
                   This is admin Page
                </Text>

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dfnjdebndev:{
        backgroundColor: 'pink'
    }
});
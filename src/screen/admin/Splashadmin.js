import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splashadmin extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <LottieView
                    style={{width: 150,
                        height: 150,
                        backgroundColor: '#fff',
                        }}
                    source={require('../../../assets/loading3.json')}
                    autoPlay
                    loop={false}
                    speed={1.0}
                    onAnimationFinish={() => {
                       
                        this.props.navigation.replace('admin');
                    }}
                />
            </View>
        )
    }
}
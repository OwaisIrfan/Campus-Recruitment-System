import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <LottieView
                    style={{width: 150,
                        height: 150,
                        backgroundColor: '#fff',
                        }}
                    source={require('../../assets/load.json')}
                    autoPlay
                    loop={false}
                    speed={1.5}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Login');
                    }}
                />
            </View>
        )
    }
}
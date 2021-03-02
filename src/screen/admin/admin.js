import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class admin extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (

            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#f9f3f3',
                        paddingBottom: 20,
                        alignItems: 'center'
                    }}
                >

                    <View style={styles.fethtrhjty}>
                        <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 19 }}>
                            Campass Manage:
                    </Text>
                    </View>






                    <View style={styles.dfnjdebndev}>

                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>


                            <View style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 15, }}>
                                <FontAwesome5 style={{ color: '#413c69', fontSize: 20, marginBottom: 5 }} name={'building'} />
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 20, color: '#413c69' }}>Company jobs</Text>
                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#845ec2' }}>Total Registered:</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e', }}>15</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'lightgrey',
                                    borderBottomWidth: 1,
                                    width: "70%",
                                    marginTop: 15,
                                }}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, marginHorizontal: 40 }}>

                                <TouchableOpacity style={{ alignItems: 'center', }}>
                                    <FontAwesome5 style={{ color: '#fa1e0e', fontSize: 20, marginBottom: 5 }} name={'trash-alt'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e' }}>Delete</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, marginHorizontal: 40 }}>

                                <TouchableOpacity style={{ alignItems: 'center', }}>
                                    <FontAwesome5 style={{ color: '#00917c', fontSize: 20, marginBottom: 5 }} name={'bars'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#00917c' }}>Details</Text>
                                </TouchableOpacity>

                            </View>
                        </View>


                    </View>











                    <View style={styles.dfnjdebndev}>

                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>


                            <View style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 15, }}>
                                <FontAwesome5 style={{ color: '#413c69', fontSize: 20, marginBottom: 5 }} name={'user-graduate'} />
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 20, color: '#413c69' }}>Students</Text>
                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#845ec2' }}>Total Registered:</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e', }}>27</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'lightgrey',
                                    borderBottomWidth: 1,
                                    width: "70%",
                                    marginTop: 15,
                                }}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, marginHorizontal: 40 }}>

                                <TouchableOpacity style={{ alignItems: 'center', }}>
                                    <FontAwesome5 style={{ color: '#fa1e0e', fontSize: 20, marginBottom: 5 }} name={'trash-alt'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e' }}>Delete</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, marginHorizontal: 40 }}>

                                <TouchableOpacity style={{ alignItems: 'center', }}>
                                    <FontAwesome5 style={{ color: '#00917c', fontSize: 20, marginBottom: 5 }} name={'bars'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#00917c' }}>Details</Text>
                                </TouchableOpacity>

                            </View>
                        </View>


                    </View>







                    <View style={styles.dfnjdebndev}>

                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>


                            <View style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 15, }}>
                                <FontAwesome5 style={{ color: '#413c69', fontSize: 20, marginBottom: 5 }} name={'envelope'} />
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 20, color: '#413c69' }}>Application</Text>
                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#845ec2' }}>Total Accepted:</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e', }}>07</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'lightgrey',
                                    borderBottomWidth: 1,
                                    width: "70%",
                                    marginTop: 15,
                                }}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, marginHorizontal: 40 }}>

                                <TouchableOpacity style={{ alignItems: 'center', }}>
                                    <FontAwesome5 style={{ color: '#fa1e0e', fontSize: 20, marginBottom: 5 }} name={'trash-alt'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e' }}>Delete</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, marginHorizontal: 40 }}>

                                <TouchableOpacity style={{ alignItems: 'center', }}>
                                    <FontAwesome5 style={{ color: '#00917c', fontSize: 20, marginBottom: 5 }} name={'bars'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#00917c' }}>Details</Text>
                                </TouchableOpacity>

                            </View>
                        </View>


                    </View>








                    <View style={styles.dfnjdebndev}>

                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>


                            <View style={{ flexDirection: 'column', alignItems: 'center', paddingVertical: 15, }}>
                                <FontAwesome5 style={{ color: '#413c69', fontSize: 20, marginBottom: 5 }} name={'envelope'} />
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 20, color: '#413c69' }}>Company jobs</Text>
                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#845ec2' }}>Total Rejected:</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e', }}>17</Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'lightgrey',
                                    borderBottomWidth: 1,
                                    width: "70%",
                                    marginTop: 15,
                                }}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, marginHorizontal: 40 }}>

                                <TouchableOpacity style={{ alignItems: 'center', }}>
                                    <FontAwesome5 style={{ color: '#fa1e0e', fontSize: 20, marginBottom: 5 }} name={'trash-alt'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e' }}>Delete</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, marginHorizontal: 40 }}>

                                <TouchableOpacity style={{ alignItems: 'center', }}>
                                    <FontAwesome5 style={{ color: '#00917c', fontSize: 20, marginBottom: 5 }} name={'bars'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#00917c' }}>Details</Text>
                                </TouchableOpacity>

                            </View>
                        </View>


                    </View>






                   








                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({

    fethtrhjty: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20
    },

    dfnjdebndev: {
        backgroundColor: '#fff',
        width: '88%',
        height: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        paddingVertical: 15,
        elevation: 4,
        borderRadius: 10,
        marginBottom: 20
    },

});
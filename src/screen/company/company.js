import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class company extends Component {
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
                        <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 18 }}>
                            Jobs Feeds:
                    </Text>
                    </View>



                    {/* the first box of detail starts here */}


                    <TouchableOpacity activeOpacity={0.8} style={styles.dfnjdebndev}>

                        <View style={{ backgroundColor: '#f25287', width: 4, height: 40, borderTopLeftRadius: 10 }}></View>


                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>


                            <View style={{ flexDirection: 'column', marginLeft: 25, marginTop: -16 }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#845ec2', marginBottom: 20 }}>UI/UX Designer</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69' }}>Zaid Irfan</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 18, marginTop: 5 }}>Hyderabad, Pakistan</Text>
                            </View>


                            <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e', marginTop: -81 }}>12 - 20K</Text>
                                <View style={{ backgroundColor: '#ccf2f4', flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, width: 70, marginTop: 25 }}>
                                    <FontAwesome5 style={{ color: '#413c69', fontSize: 13, marginRight: 5 }} name={'star'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#413c69', marginLeft: 5 }}>5.0</Text>
                                </View>


                            </View>


                        </View>


                    </TouchableOpacity>


                    {/* the second box of detail starts here */}



                    <TouchableOpacity activeOpacity={0.8} style={styles.dfnjdebndev}>

                        <View style={{ backgroundColor: '#00917c', width: 4, height: 40, borderTopLeftRadius: 10 }}></View>


                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>


                            <View style={{ flexDirection: 'column', marginLeft: 25, marginTop: -16 }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#845ec2', marginBottom: 20 }}>Web Developer</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69' }}>Ubaid Raza</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 18, marginTop: 5 }}>Karachi, Pakistan</Text>
                            </View>


                            <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e', marginTop: -81 }}>7 - 15k</Text>
                                <View style={{ backgroundColor: '#ccf2f4', flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, width: 70, marginTop: 25 }}>
                                    <FontAwesome5 style={{ color: '#413c69', fontSize: 13, marginRight: 5 }} name={'star'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#413c69', marginLeft: 5 }}>4.2</Text>
                                </View>


                            </View>


                        </View>


                    </TouchableOpacity>



                    {/* the third box of detail starts here */}



                    <TouchableOpacity activeOpacity={0.8} style={styles.dfnjdebndev}>

                        <View style={{ backgroundColor: '#78c4d4', width: 4, height: 40, borderTopLeftRadius: 10 }}></View>


                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>


                            <View style={{ flexDirection: 'column', marginLeft: 25, marginTop: -16 }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#845ec2', marginBottom: 20 }}>Graphic Designer</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69' }}>Ahmed Aslam</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 18, marginTop: 5 }}>Islamabad, Pakistan</Text>
                            </View>


                            <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e', marginTop: -81 }}>6 - 15k</Text>
                                <View style={{ backgroundColor: '#ccf2f4', flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, width: 70, marginTop: 25 }}>
                                    <FontAwesome5 style={{ color: '#413c69', fontSize: 13, marginRight: 5 }} name={'star'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#413c69', marginLeft: 5 }}>3.9</Text>
                                </View>


                            </View>


                        </View>


                    </TouchableOpacity>



                    {/* the forth box of detail starts here */}



                    <TouchableOpacity activeOpacity={0.8} style={styles.dfnjdebndev}>

                        <View style={{ backgroundColor: '#ffc75f', width: 4, height: 40, borderTopLeftRadius: 10 }}></View>


                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>


                            <View style={{ flexDirection: 'column', marginLeft: 25, marginTop: -16 }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#845ec2', marginBottom: 20 }}>UI Designer</Text>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#413c69' }}>Zeeshan Malik</Text>
                                <Text style={{ fontFamily: 'ProductSansRegular', fontSize: 18, marginTop: 5 }}>Peshawar, Pakistan</Text>
                            </View>


                            <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
                                <Text style={{ fontFamily: 'ProductSansBold', fontSize: 18, color: '#fa1e0e', marginTop: -81 }}>15 - 25k</Text>
                                <View style={{ backgroundColor: '#ccf2f4', flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, width: 70, marginTop: 25 }}>
                                    <FontAwesome5 style={{ color: '#413c69', fontSize: 13, marginRight: 5 }} name={'star'} />
                                    <Text style={{ fontFamily: 'ProductSansBold', fontSize: 15, color: '#413c69', marginLeft: 5 }}>2.5</Text>
                                </View>


                            </View>


                        </View>


                    </TouchableOpacity>







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
        paddingTop: 5,
        elevation: 4,
        borderRadius: 10,
        marginBottom: 25,
        paddingBottom: 30
    },

});
import React from 'react';
import { 
    View,
    Text,
    Platform
 } from 'react-native'
 import LinearGradient from "react-native-linear-gradient";

 import { TextButton, LineDivider } from "../components";
 import { FONTS, SIZES, COLORS } from "../constants";

 const FooterTotal = ({subTotal, shippingFee, total, onPress}) => {
     return (
         <View>
            {/* Shadow */}
            <LinearGradient 
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.transparent, COLORS.lightGray1]}
                style={{
                    position: 'absolute',
                    top: -15,
                    left: 0,
                    right: 0,
                    height: Platform.OS === 'ios' ? 200 : 50, 
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                }}
            />
            {/* Order Details */}
            <View
                style={{
                    padding: SIZES.padding,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.white
                }}
            >
                {/* Subtotal */}
                {/* <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.body3}}>Subtotal</Text>
                    <Text style={{ ...FONTS.h3 }}>${subTotal.toFixed(2)}</Text>
                </View> */}
                {/* Shipping Fee */}
                {/* <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                        marginBottom: SIZES.padding
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.body3}}>Shipping Fee</Text>
                    <Text style={{...FONTS.h3}}>${shippingFee.toFixed(2)}</Text>
                </View> */}
                {/* Line */}
                <LineDivider />
                {/* TOTAL */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text style={{ flex: 1, ...FONTS.h3}}>Total</Text>
                    <Text style={{ ...FONTS.h3 }}>${total.toFixed(2)}</Text>
                </View>
                {/* Order */}
                <View
                    style={{
                        // flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}
                >
                <TextButton 
                    buttonContainerStyle={{
                        height: 35,
                        width: "40%",
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label="Confirm"
                    onPress={onPress}
                />
                
                <TextButton 
                    buttonContainerStyle={{
                        height: 35,
                        width: "40%",
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.gray
                    }}
                    label="Cancel"
                    onPress={onPress}
                />
                </View>
            </View>
         </View>
     )
 }
 export default FooterTotal;
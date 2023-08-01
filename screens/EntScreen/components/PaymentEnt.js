{
    // import React from 'react';
    // import { View, Text, styles2heet, TextInput, TouchableOpacity } from 'react-native';

    // const PaymentScreen = ({ orderDetails, paymentMethod, paymentAmount, onSubmit }) => {
    //     const [upiId, setupiId] = React.useState('');


    // //? vpa: The Virtual Payment Address of the recipient.
    // //? amount: The amount to be transferred.
    // //? transactionNote: A note to be included with the transaction.
    // //? payeeName: The name of the recipient (optional).
    // //? transactionRef: A reference string for the transaction (optional). - used to keep track of each payment using unique if
    // //? merchantCode: A merchant code (optional).


    // //! parameter names cannot change because then in the {} it will have to follow this format 
    // //! vpa:vpa amount:amount ; not just vpa as it is now
    //     const initiateUPIPayment = async (vpa, amount, transactionNote, payeeName, transactionRef, merchantCode) => {
    //         try {
    //             const transactionId = await UPIPayment.initiateTransaction({
    //                 //* The vpa:vpa is not present because of shorthand property so it is not required
    //                 vpa,
    //                 amount,
    //                 transactionNote,
    //                 payeeName,
    //                 transactionRef,
    //                 merchantCode,
    //             });
    //             console.log('Transaction successful:', transactionId);
    //             return transactionId;
    //         } catch (error) {
    //             console.log('Transaction failed:', error);
    //             return null;
    //         }
    //     };
    //     return (
    //         <View style={styles2.container}>
    //             <View style={styles2.orderDetails}>
    //                 <Text style={styles2.heading}>Order Summary</Text>
    //                 <View style={styles2.orderItem}>
    //                     <Text style={styles2.orderItemText}>{orderDetails}</Text>
    //                 </View>
    //             </View>
    //             <View style={styles2.paymentDetails}>
    //                 <Text style={styles2.heading}>Payment Details</Text>
    //                 <View style={styles2.paymentItem}>
    //                     <Text style={styles2.paymentItemLabel}>Payment Method:</Text>
    //                     <Text style={styles2.paymentItemText}>{paymentMethod}</Text>
    //                 </View>
    //                 <View style={styles2.paymentItem}>
    //                     <Text style={styles2.paymentItemLabel}>Payment Amount:</Text>
    //                     <Text style={styles2.paymentItemText}>${paymentAmount}</Text>
    //                 </View>
    //                 <TextInput
    //                     style={styles2.upiIdInput}
    //                     placeholder="Enter your UPI ID"
    //                     value={upiId}
    //                     onChangeText={setupiId}
    //                 />
    //             </View>
    //             <View style={styles2.buttons}>
    //                 <TouchableOpacity style={styles2.submitButton} onPress={() => onSubmit()}>
    //                     <Text style={styles2.submitButtonText}>Submit Payment</Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity style={styles2.cancelButton} onPress={() => console.log('Payment canceled')}>
    //                     <Text style={styles2.cancelButtonText}>Cancel Payment</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     );
    // };

    // const styles2 = styles2heet.create({
    //     container: {
    //         flex: 1,
    //         padding: 20,
    //         backgroundColor: '#fff',
    //     },
    //     heading: {
    //         fontSize: 18,
    //         fontWeight: 'bold',
    //         marginBottom: 10,
    //     },
    //     orderDetails: {
    //         marginBottom: 20,
    //     },
    //     orderItem: {
    //         borderWidth: 1,
    //         borderColor: '#ddd',
    //         padding: 10,
    //         marginBottom: 10,
    //     },
    //     orderItemText: {
    //         fontSize: 16,
    //     },
    //     paymentDetails: {
    //         marginBottom: 20,
    //     },
    //     paymentItem: {
    //         flexDirection: 'row',
    //         marginBottom: 10,
    //     },
    //     paymentItemLabel: {
    //         fontSize: 16,
    //         fontWeight: 'bold',
    //         marginRight: 10,
    //     },
    //     paymentItemText: {
    //         fontSize: 16,
    //     },
    //     upiIdInput: {
    //         borderWidth: 1,
    //         borderColor: '#ddd',
    //         padding: 10,
    //         marginBottom: 10,
    //     },
    //     buttons: {
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //     },
    //     submitButton: {
    //         backgroundColor: '#ee3547',
    //         paddingVertical: 10,
    //         paddingHorizontal: 20,
    //         borderRadius: 5,
    //     },
    //     submitButtonText: {
    //         color: '#fff',
    //         fontSize: 16,
    //         fontWeight: 'bold',
    //     },
    //     cancelButton: {
    //         backgroundColor: '#ddd',
    //         paddingVertical: 10,
    //         paddingHorizontal: 20,
    //         borderRadius: 5,
    //     },
    //     cancelButtonText: {
    //         color: '#333',
    //         fontSize: 16,
    //     },
    // });

    // export default PaymentScreen
}

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import ButtonWithTitle from './ButtonWithTitle';
import PaymentModal from '../../../globalComponents/paymentModal';

const DoctorAppointmentCard = ({ doctorName, appointmentDate, appointmentTime, fee, tax }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.doctorName}>Doctor Name:{doctorName}</Text>
            <Text style={styles.appointmentTime}>Apointment Date: {appointmentDate}</Text>
            <Text style={styles.appointmentTime}>Apointment Time: {appointmentTime}</Text>

            <View style={styles.feesContainer}>
                <Text style={styles.feeLabel}>Fee: ₹</Text>
                <Text style={styles.fee}>{fee}</Text>
            </View>
            <View style={styles.feesContainer}>
                <Text style={styles.feeLabel}>Tax: ₹</Text>
                <Text style={styles.fee}>{tax}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        elevation: 10
    },
    doctorName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    appointmentTime: {
        fontSize: 16,
        marginBottom: 10,
    },
    feesContainer: {
        flexDirection: 'row',
    },
    feeLabel: {
        fontSize: 16,
        marginRight: 5,
    },
    fee: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});


const CartScreen = (props) => {
    const { day, date, doctor, time, fee } = props.route.params;

    const [paymentModal, setPaymentModal] = useState(false)


    return (
        <View style={styles2.container}>
            {/* <View style={styles2.navigation}>
                    <View style={{ display: 'flex', height: 60, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ fontSize: 30, fontWeight: '500' }}> My Cart</Text>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => {  }}>
                            <Image source={require('../../../assets/icons/orders.png')} style={{ width: 60, height: 60 }} />
                        </TouchableOpacity>
                    </View>
                </View> 
                */}
            <View style={styles2.footer}>
                
                {<PaymentModal visible={paymentModal}
                    onClose={() => {
                        console.log("sonece")
                        setPaymentModal(!paymentModal)

                    }} 
                    upiNumber={"example@gmail.com"} />}

                <DoctorAppointmentCard
                    doctorName={doctor}
                    appointmentDate={date}
                    appointmentTime={time}
                    fee={fee}
                    tax={Math.round(fee * 0.14)}
                />
                <View style={styles2.amountDetails}>
                    <Text style={{ fontSize: 18 }}> Total</Text>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>
                        ₹ {Math.round(fee + fee * 0.14)}
                    </Text>
                </View>
                <ButtonWithTitle
                    height={50}
                    width={320}
                    title="Book Now"
                    onTap={() => {
                        console.log("tap")
                        setPaymentModal(!paymentModal)
                    }}
                />
            </View>
        </View>
    );
};

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    navigation: {
        flex: 1,
        marginTop: 43
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    amountDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 5,
    },
});

export default CartScreen;

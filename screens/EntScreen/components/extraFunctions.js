// function extractBgColor(x) {
//     if (x.includes("lightgreen")) {
//         return "lightgreen"
//     } else return "white"
// }
function extractBgColor(x) {
    //* Supersedes the cancelled slot over the booked slot using else
    if (x.includes("red"))
        return "red"
    else if (x.includes("lightgreen"))
        return "lightgreen"
    else return "white"
}


function returnState(x) {
    switch (x) {
        case 0:
            return "disabled1"

        case 1:
            return "disabled2"

        case 2:
            return "disabled3"


        case 3:
            return "disabled4"

    }
}

function extractDisabledState(x) {
    if (x.includes("true")) {
        return true
    } else return false
}

function getFirebaseDisabledState(x) {
    const dt = new Date()
    const d = dt.getDate()
    const m = dt.getMonth() + 1
    return x.map(el => {
        let dt2 = new Date(el.date)
        let d2 = dt2.getDate()
        console.log(d, d2)

        switch (m) {
            case dt2.getMonth() + 1:
                if (d < d2 && d + 7 > d2) {
                    return "disabled1"
                }
                if (d + 7 < d2 && d + 14 >= d2) {
                    return "disabled2"
                }
                if (d + 14 < d2 && d + 21 >= d2) {
                    return "disabled3"
                }
                if (d + 21 < d2 && d + 28 >= d2) {
                    return "disabled4"
                }

            default:

        }
    })
}


//? vpa: The Virtual Payment Address of the recipient.
//? amount: The amount to be transferred.
//? transactionNote: A note to be included with the transaction.
//? payeeName: The name of the recipient (optional).
//? transactionRef: A reference string for the transaction (optional). - used to keep track of each payment using unique if
//? merchantCode: A merchant code (optional).


//! parameter names cannot change because then in the {} it will have to follow this format 
//! vpa:vpa amount:amount ; not just vpa as it is now
const initiateUPIPayment = async (vpa, amount, transactionNote, payeeName, transactionRef, merchantCode) => {
    try {
        const transactionId = await UPIPayment.initiateTransaction({
            //* The vpa:vpa is not present because of shorthand property so it is not required
            vpa,
            amount,
            transactionNote,
            payeeName,
            transactionRef,
            merchantCode,
        });
        console.log('Transaction successful:', transactionId);
        return transactionId;
    } catch (error) {
        console.log('Transaction failed:', error);
        return null;
    }
};

export { extractBgColor, returnState, extractDisabledState, initiateUPIPayment }
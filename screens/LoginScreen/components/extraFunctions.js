//! Function to check if it is a valid email
export const checkEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(emailRegex.test(email))
    return emailRegex.test(email);
}


export function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/; // regex to match a 10-digit number

  return phoneRegex.test(phoneNumber);
}
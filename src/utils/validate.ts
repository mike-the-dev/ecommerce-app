interface ValidateResponse {
  username: (text: string) => string;
  password: (text: string) => string;
  firstName: (text: string) => string | undefined;
  lastName: (text: string) => string | undefined;
  phoneNumber: (text: string) => string | undefined;
  address: (text: string) => string | undefined;
  city: (text: string) => string | undefined;
  zipcode: (text: string) => string | undefined;
  state: (text: string) => string | undefined;
  email: (text: string) => string | undefined;
};

const Validate = (): ValidateResponse => {
  const username = (text: string): string => {
    let message: string = "";

    if (text.length < 6) return message = "Your username must be longer than 6 characters.";

    return message;
  };

  const password = (text: string): string => {
    let message: string = "";

    if (text.length < 6) return message = "Your password must be longer than 6 characters.";

    return message;
  };

  const firstName = (text: string): string | undefined => {
    let message: string | undefined = undefined;

    if (text.length < 2) return message = "Must be longer than 2 characters.";

    return message;
  };

  const lastName = (text: string): string | undefined => {
    let message: string | undefined = undefined;

    if (text.length < 2) return message = "Must be longer than 2 characters.";

    return message;
  };

  const phoneNumber = (text: string): string | undefined => {
    let message: string | undefined = undefined;

    if (text.replaceAll("-", "").length < 10) return message = "Must be 10 digits.";

    return message;
  };

  const address = (text: string): string | undefined => {
    let message: string | undefined = undefined;

    if (!text) return message = "Address is required.";

    return message;
  };

  const city = (text: string): string | undefined => {
    let message: string | undefined = undefined;

    if (!text) return message = "City is required.";

    return message;
  };

  const zipcode = (text: string): string | undefined => {
    let message: string | undefined = undefined;

    if (!text) return message = "Zipcode is required.";

    return message;
  };

  const state = (text: string): string | undefined => {
    let message: string | undefined = undefined;

    if (!text) return message = "State is required.";

    return message;
  };

  const email = (text: string): string | undefined => {
    const regex: RegExp = /[a-zA-Z0-9@_.]/g;
    let message: string | undefined = undefined;
    
    if (!text) return message = "Email is required.";
    
    if (
      !text.includes("@") || (
        !text.includes(".com") &&
        !text.includes(".org") &&
        !text.includes(".net") &&
        !text.includes(".aol") &&
        !text.includes(".hotmail") &&
        !text.includes(".msn")
      )
   ) return message = "Not a valid email address."


    return message;
  };

  return {
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    address: address,
    city: city,
    zipcode: zipcode,
    state: state,
    email: email
  };
};

interface SanitizeResponse {
  [key: string]: (text: string) => string;
  username: (text: string) => string;
  password: (text: string) => string;
  phoneNumber: (text: string) => string;
  email: (text: string) => string;
  fullName: (text: string) => string;
  digit: (text: string) => string;
};

const Sanitize = (): SanitizeResponse => {
  const username = (text: string): string => {
    const regex: RegExp = /[a-zA-Z0-9!@#$%^&*()_]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  };

  const password = (text: string): string => {
    const regex: RegExp = /[a-zA-Z0-9!@#$%^&*_]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  };

  const phoneNumber = (text: string): string => {
    const regex: RegExp = /[0-9]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    if (joinedText.length > 6) return `${joinedText.substring(0, 3)}-${joinedText.substring(3, 6)}-${joinedText.substring(6, 10)}`;

    if (joinedText.length > 3) return `${joinedText.substring(0, 3)}-${joinedText.substring(3, 6)}`;

    return joinedText.substring(0, 3);
  };

  const email = (text: string): string => {
    const regex: RegExp = /[a-zA-Z0-9@_.]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('').toLowerCase();

    return joinedText;
  };

  const fullName = (text: string): string => {
    const regex: RegExp = /[a-zA-Z ]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  };

  const digit = (text: string): string => {
    const regex: RegExp = /[0-9]/g;

    const newValue: string[] = text.split('');
    const removeSpacesValue: string[] = newValue.filter(letter => letter.match(regex));
    const joinedText: string = removeSpacesValue.join('');

    return joinedText;
  };

  return {
    username: username,
    password: password,
    phoneNumber: phoneNumber,
    email: email,
    fullName: fullName,
    digit: digit
  };
};

export {
  Validate,
  Sanitize
};
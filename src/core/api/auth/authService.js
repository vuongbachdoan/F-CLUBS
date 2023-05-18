import { Auth, Hub } from "aws-amplify/lib-esm";

export const login = async (email, password) => {
  try {
    return await Auth.signIn(email, password);
  } catch (error) {
    console.log("error signing in", error);
  }
};

export const signUp = async (email, password) => {
  try {
    return await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        email, // optional
      },
      autoSignIn: {
        enabled: true,
      },
    });
  } catch (error) {
    console.log("error signing up:", error);
  }
};

export const resendConfirmationCode = async (email) => {
    try {
        return await Auth.resendSignUp(email);
    } catch (error) {
        console.log("error resending confirmation code", error);
    }
}

export const confirmSignUp = async (email, code) => {
    try {
        return await Auth.confirmSignUp(email, code);
    } catch (error) {
        console.log("error confirm signing up:", error);
    }
}

export const listenToAutoSignInEvent = () => {
    Hub.listen(
        'auth',
        ({payload}) => {
            const {event} = payload;
            if(event === 'autoSignIn') {
                const user = payload.data;
                // assign user
            } else if (event === 'autoSignIn_failure') {
                // redirect
            }
        }
    )
}

export const signOut = async () => {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log("error signing out:", error);
    }
}
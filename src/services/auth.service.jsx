import axios from "../utils/axios.utlis";

const signIn= async (body) => {
  try {
    let response = await axios({
      method: "POST",
      url: `/login`,
      data: {
        email: body.email,
        password: body.password,
      },
    });
    return Promise.resolve({
      status: true,
      token: response.data.token,
      message: "Successfull Login",
    });
  } catch (error) {
    console.log("SignInError--------->>",error);
    return Promise.resolve({
      status: false,
      token: null,
      message:error ? error.data: "Wrong Email or Password",
    });
  }
}

export {signIn};

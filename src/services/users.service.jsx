import axios from "../utils/axios.utlis";

const getUser = async () => {
  try {
    let response = await axios({
      method: "GET",
      url: `/users?page=2`,
    });
    return Promise.resolve({
        status: true,
        data:response.data.data,
        message: "Data fetched successfully",
      });
  } catch (err) {
    console.log("GetUserData--------->>",err);
    return Promise.resolve({
      status: false,
      data:null,
      message:err ? err.data: "Data could not be fetched",
    });
  }
};


export {getUser}
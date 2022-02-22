import axios from "axios";

export const loadUsersApi = async () =>
await axios.get("http://localhost:3000/users");

//Login
export const loginUsersApi = async () =>
await axios.get("http://localhost:3000/users");

//add 
export const addUserApi = async (user) =>
await axios.post("http://localhost:3000/users",user);


//delete
export const delUserApi = async (userId) =>
await axios.delete(`http://localhost:3000/users/${userId}`);

//edit
export const editUserApi = async (userId,userInfo) =>
await axios.put(`http://localhost:3000/users/${userId}`,userInfo);

//upload image
export const uploadImgApi = async (img) =>
await axios.post("https://us-central1-wisy-dev.cloudfunctions.net/group_util_uploadImage",img);

//add chk
export const addChkApi = async (user) =>
await axios.post("http://localhost:3000/checkData",user);

//add  Editor
export const addEdiApi = async (user) =>
await axios.post("http://localhost:3000/txtData",user);

//get Editor
export const loadEdiApi = async () =>
await axios.get("http://localhost:3000/txtData");


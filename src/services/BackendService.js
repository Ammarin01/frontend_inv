import axios from 'axios'

//อ่าน token จาก localstorage 
// let token = ''
// if (localStorage.getItem('user')) {
//     let userStorage = localStorage.getItem('user')  
//     let userStorageJSON = JSON.parse(userStorage)
//     token   = userStorageJSON['token']
// }else{
//      token = ''
// }

const BackendService = axios.create({
    // baseURL:"http://localhost:8000/api/",
    baseURL:process.env.VUE_APP_URL_API,
    withCredentials:true,
    headers: {
        "Content-type": "multipart/form-data",
        "Accept": "application/json",
        // "Authorization": `Bearer ${token}`
      },
});

//การใช้ interceptors เพื่อแทรก token เข้าไปใน header
BackendService.interceptors.request.use(config =>{
    //อ่าน token จาก localStorage
    let token =''
    try{
    let userStorage = localStorage.getItem('user')  
    let userStorageJSON = JSON.parse(userStorage)
    token   = userStorageJSON['token']
    }catch(error){
        console.log(error);
    }

    if (token) {
        config.headers.Authorization = "Bearer "+token
    }

    return config

})
export default BackendService ;
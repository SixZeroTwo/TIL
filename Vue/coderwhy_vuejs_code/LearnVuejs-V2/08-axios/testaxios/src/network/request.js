import axios from "axios";

export function request(config) {
  const instacne = axios.create({
    baseURL: "http://152.136.185.210:8000/api/z8",
    timeout: 5000
  });

  // 发送真正的网络请求
  return instacne(config); // 返回值本来就是Promise
}

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instacne = axios.create({
//       baseURL: "http://152.136.185.210:8000/api/z8",
//       timeout: 5000
//     });

//     // 发送真正的网络请求
//     instacne(config)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// }

// export function request(config, success, failure) {
//   const instacne = axios.create({
//     baseURL: "http://152.136.185.210:8000/api/z8",
//     timeout: 5000
//   });

//   // 发送真正的网络请求
//   instacne(config)
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

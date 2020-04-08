// const domainPath = 'http//localhost:3001';
// const GetApi = (path) => {
//     const promise = new Promise(    (resolve, reject) => {
//         fetch(  `{domainPath}/${path}`)
//         .then(response => response.json())
//         .then((result) => {
//             resolve(result);
//         }, (err) => {
//             reject(err);
//         })
//     })
//     return promise;
// }

// const getNewsBlog = () => GetApi(   'posts?_sort=id$_order=desc');
// const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
// const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

// const API = {
//     getNewsBlog,
//     postNewsBlog,
//     deleteNewsBlog
// }

// export default API;

import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";


// daftar API - GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

// daftar API - POST
const postNewsBlog = (dataYgDikirim) => PostAPI('posts',dataYgDikirim);

// dafta API - DELETE 
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts',dataYgDiHapus);

const API = {       
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;
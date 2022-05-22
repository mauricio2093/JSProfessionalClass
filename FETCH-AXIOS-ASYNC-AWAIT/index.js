//Fetch sin Async - Await
const getName = (idPost) =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then(res => res.json ())
        .then(post => {
            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(res => res.json() )
                .then(user => console.log(user.name))
        })
};
getName(80);

//Fetch Aync - Await
let urlP;
let call_api;
const url = (page,idPost) => urlP = `https://jsonplaceholder.typicode.com/${page}/${idPost}`
const callApiFetch = (page,idPost) => call_api = fetch(url(page,idPost)); 

const getNameAsync = async (idPost) => {
    try {
        const resPost =  await callApiFetch('posts',idPost);
        const post = await resPost.json();  
        
        const userPost = await callApiFetch('users',post.userId);
        const user =  await userPost.json();
        console.log(user.name);
        
    } catch(error){
        console.log(error);
    }
}
getNameAsync(80);

//Async Await Axios

const callApiAxio = (page,idPost) => call_api = axios(url(page,idPost)); 
const getNameAxios = async (idPost) => {
    try {
        const resPost =  await callApiAxio('posts',idPost);

        const userPost = await callApiAxio('users',resPost.data.userId);
        console.log(userPost.data.name);
        
    } catch(error){
        console.log(error);
    }
}
getNameAxios(80);

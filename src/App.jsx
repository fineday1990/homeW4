import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PostsList } from "./components/PostsList";
//import { postData } from "./posts";
import api from "./utils/Api";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser]= useState({});

  useEffect(() => {
    api.setUserInfo()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
		Promise.all([api.getPostsList(), api.getUserInfo()])
		.then(([postData, userData])=>{
			setPosts(postData);
			setCurrentUser(userData)
		})
  },[]);

  function handleUpdateUser (userUpdate){
	api.setUserInfo(userUpdate).then((newUserData)=>{setCurrentUser(newUserData)})
  }

  function handlePostLike ({_id, likes}){
	const isLiked =likes.some(id=>id===currentUser._id)
	api.changeLikeStatus(_id, isLiked)
		.then((newCard)=>{
			const newPostsState = posts.map(c=>{
				//console.log('с сервера', newCard);
				//console.log('из стейта', c);
				return c._id === newCard._id ? newCard : c
			})

			setPosts(newPostsState)
		})
  }

  return (
    <>
		<Header user={currentUser} onUpdateUser={handleUpdateUser}></Header>
      <Container>
        <PostsList postsData={posts} onPostLike={handlePostLike} currentUser={currentUser}/>
      </Container>
      <Footer />
    </>
  );
};

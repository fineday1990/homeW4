const onResponce =(res)=>{
	return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
	constructor({baseUrl, token}){
		this._baseUrl = baseUrl;
		this._token = `Bearer ${token}`;
	}

	getPostsList(){
		return fetch(`${this._baseUrl}/posts`,{
			headers:{
				authorization: this._token,
			},
		}).then(onResponce)
	}

	getUserInfo(){
		return fetch(`${this._baseUrl}/users/me`,{
			headers:{
				authorization: this._token,
			},
		}).then(onResponce)
	}

	setUserInfo(userData){
		return fetch(`${this._baseUrl}/users/me`, {
			 method: "PATCH",
			 headers: {
				  authorization: this._token,
				  "Content-type": "application/json"
			 },
			 body: JSON.stringify(userData)
			 
		}).then(onResponce)
  }

	changeLikeStatus(postId, isLike){
		return fetch(`${this._baseUrl}/posts/likes/${postId}`,{
			method: isLike ? "DELETE" : "PUT",
			headers:{
				authorization: this._token,
			},
		}).then(onResponce)
	}
}



const config ={
	baseUrl: 'https://api.react-learning.ru',
	token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYmUiLCJpYXQiOjE2NDcwMTM4ODcsImV4cCI6MTY3ODU0OTg4N30.WOE4nb-P1Z7GxQsA2zxZGJU4hE3B-YMQxX82qkA2D5E'
}

const api = new Api(config);

export default api;

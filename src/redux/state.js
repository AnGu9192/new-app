let store = {
  _state:{
    profilePage:{
        posts:[
            {id:0, message:'Hi, how are you?', likesCount: 12},
            {id:1, message:'It/s my first post', likesCount: 11}
          
          ],
          dialogsData:[
            {id:0, name:'Ann'},
            {id:1, name:'Bob'},
            {id:2, name:'Masha'},
            {id:3, name:'Luna'},
            {id:4, name:'Tik'},
            {id:5, name:'Lusi'}
          
          ],
           newPostText:'it-komosutra.com'
           

    },
    messagePage:{
      messages: [
        {id:0, message:'Hi'},
        {id:1, message:'Whats'},
        {id:2, message:'How are you?'},
        {id:3, message:'Ok'}
      ]
    }
},
_callSubScraber() {
  console.log('state changed');
},
getState(){
return this._state;
},
subscribe (observer)  {
  this._callSubScraber=observer;

},


dispatch(action){
  if(action.type==='ADD-POST'){
    let newPost ={
      id:5,
      message:this._state.profilePage.newPostText,
      likesCount:0

  };
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText= '';
  this._callSubScraber(this._state);

  } else if(action.type==='UPDATE-NEW-POST-TEXT'){
    this._state.profilePage.newPostText=action.newText;
    this._callSubScraber(this._state);

  }

}


}

  export default store;

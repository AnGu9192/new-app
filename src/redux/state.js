const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state:{
    profilePage:{
        posts:[
            {id:0, message:'Hi, how are you?', likesCount: 12},
            {id:1, message:'It/s my first post', likesCount: 11},
          
          ],
           newPostText:'it-komosutra.com'

     
           

    },
    messagePage:{
      dialogsData:[
        {id:0, name:'Ann'},
        {id:1, name:'Bob'},
        {id:2, name:'Masha'},
        {id:3, name:'Luna'},
        {id:4, name:'Tik'},
        {id:5, name:'Lusi'}
        
      
      ],
      messages: [
        {id:0, message:'Hi'},
        {id:1, message:'Whats'},
        {id:2, message:'How are you?'},
        {id:3, message:'Ok'},

      ],
      newMessageBody:""

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
  if(action.type===ADD_POST){
    let newPost ={
      id:5,
      message:this._state.profilePage.newPostText,
      likesCount:0

  };
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText= '';
  this._callSubScraber(this._state);

  } else if(action.type=== UPDATE_NEW_POST_TEXT){
    this._state.profilePage.newPostText=action.newText;
    this._callSubScraber(this._state);

  } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
    this._state.messagePage.newMessageBody = action.body;
    this._callSubScraber(this._state);

  }else if (action.type === SEND_MESSAGE){
    let body=this._state.messagePage.newMessageBody;
    this._state.messagePage.newMessageBody='';
    this._state.messagePage.messages.push({id:4, message: body } );
    this._callSubScraber(this._state);

  }

}

}
export const addPostActionCreator = () => ({type:ADD_POST})
export const updateNewPostCreator = (text) => ( {type:UPDATE_NEW_POST_TEXT, newText: text})


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ( {type:UPDATE_NEW_MESSAGE_BODY, body: body})

  export default store;

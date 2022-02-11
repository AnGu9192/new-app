import messageReducer from './message-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';




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

    },
    sidebar: {}
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
  this._state.profilePage=profileReducer(this._state.profilePage, action)
  this._state.messagePage=messageReducer(this._state.messagePage, action)
  this._state.sidebar=sidebarReducer(this._state.sidebar, action)

  this._callSubScraber(this._state);

  
}

}

  export default store;

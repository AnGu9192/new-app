const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
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

};
const messageReducer = (state = initialState, action) =>{
  switch(action.type){
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body=state.newMessageBody;
    state.newMessageBody='';
    state.messages.push({id:4, message: body } );
    return state;
    default:
      return state;

  }

} 

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ( {type:UPDATE_NEW_MESSAGE_BODY, body: body})

export default messageReducer;
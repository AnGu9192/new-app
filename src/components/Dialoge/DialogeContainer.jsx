import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/message-reducer';
import Dialoge from './Dialoge';
import { connect } from 'react-redux';


let mapStateToProps = (state) =>{
  return{
    messagePage: state.messagePage
  }
}
let mapDispatchToProps = (dispatch) => {

  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());

    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
 
  }
}
const DilogeContainer = connect(mapStateToProps,mapDispatchToProps)(Dialoge);

export default DilogeContainer;
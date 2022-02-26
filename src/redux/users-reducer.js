const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_users';


let initialState = {
users:[ /* 
            {id:1, 
            followed:false,
            photoURL:'https://klike.net/uploads/posts/2019-03/1551511835_22.jpg', 
             fullName:'Mher K.', 
             status:'I am a boss',
             location:{city:'Minsk', countrey:'Belarus'}
            },
            {id:2, 
             followed: true, 
             photoURL:'https://klike.net/uploads/posts/2019-03/1551511835_22.jpg',
             fullName:'Dmitry M..', 
             status:'I am a student',
             location:{city:'Kiev', countrey:'Ukraine'}
            },
            {id:3, 
            followed: false,  
            photoURL:'https://klike.net/uploads/posts/2019-03/1551511835_22.jpg',

            fullName:'Mane G.', 
            status:'I am a teacher',
            location:{city:'Erevan', countrey:'Armenia'}
            } */
        ] 
      }
 const usersReducer = (state=initialState, action) => {
  switch(action.type){
    case FOLLOW:
        return {
                 ...state,
                 users: state.users.map ( u => {
            if (u.id === action.userId) {
              return {...u, followed: true}
            }
            return u ;
          })
          }
    case UNFOLLOW:
      return {...state,
        users: state.users.map( u => {
          if (u.id === action.userId){
            return {...u, followed: false}
          }
          return u 
        }
          )
        } 
case SET_USERS:{
  return {...state, users:[ ...state.users,...action.users]}
}
    default:
      return state;
  
  }

} 
export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ( {type:UNFOLLOW, userId})
export const setUsersAC = (users) => ( {type: SET_USERS, users})

export default usersReducer;
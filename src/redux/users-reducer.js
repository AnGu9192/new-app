const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT'

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
        ] ,
        pageSize:59,
        totalUsersCount:0,
        currentPage:1

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
  return {...state, users:action.users}
}
case SET_CURRENT_PAGE:{
  return {...state, currentPage: action.current}
 }
case  SET_TOTAL_USERS_COUNT:{
  return {...state, totalUsersCount: action.count}
}
    default:
      return state;
  
  }

} 
export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ( {type:UNFOLLOW, userId})
export const setUsersAC = (users) => ( {type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ( {type: SET_CURRENT_PAGE, current:currentPage})
 export const setlUsersTotaCountAC = (totalUsersCount) => ( {type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})


export default usersReducer;
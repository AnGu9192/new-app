
import * as axios from 'axios'
import React from 'react'
import s from './Users.module.css'


export default class Users extends React.Component {
    state = {
      users: []
    }
  
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const users = res.data;
          this.setState({ users });
          
        })
     
    }

    render() {
      return (

        <div>
            <div>
                 <span>1</span>
                 <span className={s.selectedPage}>2</span>
                 <span>3</span>
                 <span>4</span>
                 <span>5</span>

            </div>
          {
            this.state.users
            .map(u => <div key={u.id}>

                  <div >
                  <span className={s.name}>{u.name}</span><br></br>
                  <span>{u.username}</span>
                  <span>
                        <div>{u.email}</div>
                        <div>{u.address.street}
                        {u.address.city}
                        </div>


                    </span>
                  </div>   
        <div>
            
       {/*  <div>
            {u.followed
            ? <button onClick={() => {this.props.unfollow(u.id)}}>UnFollow</button>
            : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
            }
        </div> */}
        </div>
              </div>)

          }
        </div>
      )
    }
  }


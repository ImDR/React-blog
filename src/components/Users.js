import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Users extends React.Component{
	constructor(){
		super();
		this.state = {
			users:[]
		}
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then((res)=>{
			this.setState({
				users: res.data
			});
			
		});
	}

	render(){
		return(
			<div className="row">
				{
					this.state.users.map((user)=>{
						return (
							<div key={user.id} className="col s12 l3">
								<div className="card">
									<div className="card-image">
										<img alt={user.name} src={"https://placeimg.com/400/300/people/"+user.id}/>
										<span className="card-title">{user.name}</span>
									</div>
									<div className="card-content">
										<p><b>Username:</b> {user.username}</p>
										<p><b>City:</b> {user.address.city}</p>
									</div>
									<div className="card-action">
							          	<Link to={'/user/' + user.id} className="waves-effect blue waves-light btn-small mr-10">Profile</Link>
							          	<Link to={'/user/'+user.id+'/posts/'} className="waves-effect red waves-light btn-small">Posts</Link>
							        </div>
								</div>
							</div>
						)
					})
				}
			</div>
		);
	}
}

export default Users;
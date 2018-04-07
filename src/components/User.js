import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Detail = (props)=>{
	return(
		<div className="row">
			<div className="col s6 l2">
				<b>{props.keyName}:</b>
			</div>
			<div className="col s6 l10">
				{props.value}
			</div>
		</div>
	);
}

class User extends React.Component{
	constructor(){
		super();

		this.state = {
			user:{}
		}
	}

	componentDidMount (){
		const params = this.props.match.params;
		axios.get('https://jsonplaceholder.typicode.com/users/'+params.id)
		.then((res)=>{
			const user = res.data;
			this.setState({
				user
			});
		})
	}

	render(){

		if(Object.keys(this.state.user).length === 0){
			return '';
		}
		//console.log(this.props.match.url);
		return(
			<div>
				<Detail keyName="Name" value={this.state.user.name} />
				<Detail keyName="Username" value={this.state.user.username} />
				<Detail keyName="Phone" value={this.state.user.phone} />
				<Detail keyName="Email" value={this.state.user.email} />
				<Detail keyName="Website" value={this.state.user.website} />
				<Detail keyName="Company" value={this.state.user.company.name} />
				<Detail keyName="Address" value={this.state.user.address.suite+', '+ this.state.user.address.street} />
				<Detail keyName="City" value={this.state.user.address.city} />
				<Detail keyName="Zipcode" value={this.state.user.address.zipcode} />

				<Link to={'/user/'+this.state.user.id+'/posts/'} className="waves-effect red waves-light btn-small" >View Posts</Link>
			</div>
		);
	}
}

export default User;
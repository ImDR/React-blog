import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loader from './loader/Loader';

class Comments extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			comments: [],
			isPost: (this.props.postId===undefined)? false: true,
			loading: true
		}
	}

	componentDidMount(){
		let url = 'https://jsonplaceholder.typicode.com/comments';
		if(this.state.isPost){
			url = 'https://jsonplaceholder.typicode.com/posts/'+this.props.postId+'/comments';
		}
		axios.get(url)
		.then((res)=>{
			this.setState({
				comments: res.data,
				loading: false
			});
		});
	}

	render(){

		if(this.state.loading){
			return <Loader/>;
		}

		return(
			<ul className="collection with-header">
				<li className="collection-header"><h4>Comments</h4></li>
				{
					this.state.comments.map((comment)=>{
						return (
							<li key={comment.id} className="collection-item">
					        	<blockquote>
							      	<h5 className="title">{comment.name}</h5>
							      	<p><b>Email: </b>{comment.email}</p>
							      	<p >{comment.body}</p>
							      	{
							      		(this.state.isPost)?'':
							      		<Link to={'/post/'+comment.postId}>Read Post</Link>
							  
							      	}
							    </blockquote>
					        </li>
						)
					})
				}
			</ul>
		);
	}
}

export default Comments;
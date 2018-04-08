import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Comments from './Comments';
import Loader from './loader/Loader';

class Post extends React.Component{
	constructor(){
		super();
		this.state = {
			post: {},
			loading: true
		};
	}

	componentDidMount(){
		const params = this.props.match.params;
		axios.get('https://jsonplaceholder.typicode.com/posts/'+params.id)
		.then((res)=>{
			this.setState({
				post: res.data,
				loading: false
			});
			
		});
	}

	render(){
		if(this.state.loading){
			return <Loader/>;
		}

		return(
			<div>
				<div>
					<h4 className="title">{this.state.post.title}</h4>
					<p>{this.state.post.body}</p>
					<Link className="waves-effect blue waves-light btn-small" to={'/user/'+this.state.post.userId}>Author profile</Link>
				</div>
				<Comments postId={this.state.post.id}/>
			</div>
		);
	}
}

export default Post;
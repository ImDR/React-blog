import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loader from './loader/Loader';

class Posts extends React.Component{
	constructor(){
		super();
		this.state = {
			posts: [],
			loading: true
		}
	}

	componentDidMount(){
		const userId = this.props.match.params.id;
		let url = 'https://jsonplaceholder.typicode.com/posts/';
		if(userId !== undefined){
			url = 'https://jsonplaceholder.typicode.com/users/'+userId+'/posts/';
		}
		axios.get(url)
		.then((res)=>{
			this.setState({
				posts: res.data,
				loading: false
			})
		});
	}

	render(){
		if(this.state.loading){
			return <Loader/>;
		}
		
		return (
			<ul className="collection">
			{
				this.state.posts.map((post)=>{
					return(
						<li key={post.id} className="collection-item">
				        	<blockquote>
						      	<h5 className="title"><Link to={'/post/'+post.id}> {post.title}</Link></h5>
				        		<p>
				        		{post.body.split(/\s+/).slice(0,15).join(" ")}...
				        		<Link to={'/post/'+post.id}> Read more</Link>
				        		</p>
						    </blockquote>
				        </li>
					);
				})
			}
		        
		    </ul>
		);
	}
}

export default Posts;
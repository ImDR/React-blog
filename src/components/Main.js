import React from 'react';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Users from './Users';
import User from './User';
import Posts from './Posts';
import Post from './Post';
import Comments from './Comments';


const Main = ()=>{
	return (
		<Router>
			<div className="row">
		    	<div className="col s12 l2">
		    		<Sidebar />
		    	</div>
		    	<div className="col s12 l10">
		    		<Switch>
		    			<Route exect path="/users" component={Users} />
		    			<Route exect path="/user/:id/posts" component={Posts} />
		    			<Route exect path="/user/:id" component={User} />
		    			<Route exect path="/posts" component={Posts} />
		    			<Route exect path="/post/:id" component={Post} />
		    			<Route exect path="/comments" component={Comments} />
		    		</Switch>
		    	</div>
			</div>
		</Router>
	);
}

export default Main;
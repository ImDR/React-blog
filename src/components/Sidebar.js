import React from 'react';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className="collection">
			<NavLink activeClassName="active" to="/posts" className="collection-item waves-effect">Posts</NavLink>
			<NavLink activeClassName="active" to="/users" className="collection-item waves-effect">Users</NavLink>
			<NavLink activeClassName="active" to="/comments" className="collection-item waves-effect">Comments</NavLink>
		</div>
	);
}

export default Sidebar;
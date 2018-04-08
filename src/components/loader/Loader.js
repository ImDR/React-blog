import React from 'react';
import img from './loader.svg';

const Loader =()=>{
	return(
		<div className="loader-wrapper">
			<img src={img} alt="Loader"/>
		</div>
	);
}

export default Loader;
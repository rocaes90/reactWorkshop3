import React from "react";
import PropTypes from 'prop-types';
// header component
const Header = (props) => {
	return (
		<header className="title-cont">
			<span className="title"><span>{props.title}</span></span>
		</header>
	);
}
// proptypes for validation and structure
Header.propTypes = {
	title: React.PropTypes.string.isRequired
}		
export default Header;
import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

import "./navbar.css"
import mainlogo from "../Images/menstufriendlogo.png"

const Navbar = () => {
return (
	<div className='navbar-main'>
	<Nav>
		<NavMenu className='first'>
		<div>
			<img className='imageicon' src={mainlogo} alt="logo" />
		</div>
		<div className='heading'>MenstruFriend</div>
		</NavMenu>
		<NavMenu className='second'>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/quiz' activeStyle>
			Quiz
		</NavLink>
		<NavLink to='/faq' activeStyle>
			FAQ
		</NavLink>
		{/* <NavLink to='/chatbot' activeStyle>
			chatbot
		</NavLink> */}
		<NavLink to='/livechat' activeStyle>
			Live Chat
		</NavLink>
        </NavMenu>
	</Nav>
	</div>
);
};

export default Navbar;

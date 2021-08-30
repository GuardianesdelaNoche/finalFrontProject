import React from 'react';
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import "./Sidebar.css";


const Sidebar = () => {
	return (
		<div 
			style={{ display: 'flex', height: 'auto', overflow: 'scroll initial', zIndex: '1' }}
		>
			<CDBSidebar textColor="#5e6278" backgroundColor="#ffffff">
				<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
					<Link
						to="/"
						className="text-decoration-none"
						style={{ color: '#5e6278' }}
					>
						<img src="/img/logo.png" alt="logo" width="110px"/>
					</Link>
				</CDBSidebarHeader>

				<CDBSidebarContent className="sidebar-content">
					<CDBSidebarMenu>
				
						<NavLink exact to="/user" activeClassName="activeClicked active">

							<CDBSidebarMenuItem ><img src="/img/icon-Settings.svg" className="mr-2" alt="setting" />
								<FormattedMessage
									id="sidebar.item.data"
									defaultMessage="My Data"
								/>
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/myEvents" activeClassName="activeClicked active">
							<CDBSidebarMenuItem ><img src="/img/icon-calendar.svg" className="mr-2" alt="calendar"/>
								<FormattedMessage
									id="sidebar.item.event"
									defaultMessage="My Events"
								/>
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/myFavorites" activeClassName="activeClicked active">
							<CDBSidebarMenuItem >
								<img src="/img/icon-favorite.svg" className="mr-2" alt="favorite"/>
								<FormattedMessage
									id="sidebar.item.favorites"
									defaultMessage="My Favorites"
								/>
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/mySuscribes" activeClassName="activeClicked active">
							<CDBSidebarMenuItem > <img src="/img/icon-Bookmark.svg" className="mr-2" alt="bookmark"/>
								<FormattedMessage
									id="sidebar.item.suscribes"
									defaultMessage="My Suscribes"
								/>
							</CDBSidebarMenuItem>
						</NavLink>
					
					</CDBSidebarMenu>
				</CDBSidebarContent>
			</CDBSidebar>
		</div>
	);
};

export default Sidebar;
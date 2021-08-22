import React from 'react';
import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

import "./Sidebar.css";


const Sidebar = () => {
	return (
		<div
			style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
		>
			<CDBSidebar textColor="#5e6278" backgroundColor="#ffffff">
				<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
					<a
						href="/"
						className="text-decoration-none"
						style={{ color: '#5e6278' }}
					>
						<img src="http://isagomez.com/wp-content/uploads/2021/07/logo4eventsPNG.png" alt="logo" width="110px"/>
					</a>
				</CDBSidebarHeader>

				<CDBSidebarContent className="sidebar-content">
					<CDBSidebarMenu>
				
						<NavLink exact to="/user" activeClassName="activeClicked active">
							<CDBSidebarMenuItem icon="user">Mis Datos</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/myEvents" activeClassName="activeClicked active">
							<CDBSidebarMenuItem icon="calendar">Mis Eventos</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/profile" activeClassName="activeClicked active">
							<CDBSidebarMenuItem icon="heart">Mis Favoritos</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/analytics" activeClassName="activeClicked active">
							<CDBSidebarMenuItem icon="edit">
								Mis Suscritos
							</CDBSidebarMenuItem>
						</NavLink>
					
					</CDBSidebarMenu>
				</CDBSidebarContent>
			</CDBSidebar>
		</div>
	);
};

export default Sidebar;
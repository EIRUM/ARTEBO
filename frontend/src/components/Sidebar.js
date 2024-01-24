import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';
import { Link } from 'react-router-dom';



const SytledSidebar =styled.div`
  display: flex;
  flex-direction: column;
  width: 30%; 
  margin-left: 10%;
  margin-top: 2%;
  border: 1px solid #000;
  border-radius: 10px;
  height: 60vh;
  padding:5px;
`;

function Sidebar(){
    const menus =[
        {name: "Drawing", path: "/"},
        {name: "Gallery", path: "/mylist"},
        {name: "Analyze", path: "/data"}
    ];

    return(
        <SytledSidebar>
            {menus.map((menu,index)=>{
                return(
                    <Link to={menu.path} key={index}>
                        <SidebarItem menu={menu}/>
                    </Link>
                );
            })}
        </SytledSidebar>
    );  
};

export default Sidebar;

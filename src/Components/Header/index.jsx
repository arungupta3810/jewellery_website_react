import React, { useEffect, useState } from 'react'
import Logo from '../../Assets/Images/download.svg'
import './style.scss'
import { SocialMediaComponent } from '../CommonHelper/helperFunction'
import { MenuOutlined } from '@ant-design/icons'
import { routes } from '../routes'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [ismenuOpen, setIsMenuOpen] = useState(false)
    const isMobile = !(window.innerWidth > 768)
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            setVisible(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () =>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    const NavigationDesign = () => {
        return(
            <div className="navigations">
                        <div className="links">
                        {routes?.map((nav,index)=>
                            <div className={`${handleActiveMenu(window.location.pathname,nav?.url)} navblock`} key={index} onClick={()=>navigate(nav?.url)}>
                                 {nav?.name}
                            </div>
                        )}
                        </div>
                        
                        <div className="social-media-accounts">
                            <SocialMediaComponent />
                        </div>
                    </div>
        )
    }

    const handleActiveMenu = (url,componentUrl) => {
       if(url === componentUrl){
        return 'active'
       }
    }

    return (
        <div className={`header ${visible ? 'visible' : ''}`}>
            <div className="header-wrapper">
                <div className="logo-wrapper">
                    <img src={Logo} alt='logo' />

                    {isMobile && <MenuOutlined color='#000' onClick={() => { setIsMenuOpen(!ismenuOpen) }} />}
                </div>
                {isMobile ? (ismenuOpen && <NavigationDesign />) : <NavigationDesign />}
            </div>
        </div>
    )
}

export default Header
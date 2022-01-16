import React,{useRef,useEffect} from "react";
import logo from "../assets/images/Logo-2.png";
import { Link,useLocation } from "react-router-dom";
const mainNav = [
    {
        display: "Trang chủ",
        path: "/",
    },
    {
        display: "Sản phẩm",
        path: "/catalog",
    },
    {
        display: "Phụ kiện",
        path: "/accessories",
    },
    {
        display: "Liên hệ",
        path: "/contact",
    },
];
const Header = () => {
    console.log('re-render')
    const {pathname}=useLocation();
    const activeNav=mainNav.findIndex(e=>e.path===pathname);
    const headerRef=useRef(null);
    useEffect(()=>{
        let headerScroll=()=>{
            if(document.documentElement.scrollTop>80||document.body.scrollTop>80){
                headerRef.current.classList.add('shrink')
            }else{
                headerRef.current.classList.remove('shrink')
            }
        }
        window.addEventListener('scroll',headerScroll); 
        console.log('render-effect')
        return ()=>{
            window.removeEventListener('scroll',headerScroll);
        }
    },[])
    const menuLeft=useRef(null);
    const menuToggle=()=>menuLeft.current.classList.toggle('active')
    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        {mainNav.map((item, index) => (
                            <div key={index} onClick={menuToggle} className={`header__menu__item header__menu__left__item ${index===activeNav?'active':''}`}>
                                <Link to={item.path} >
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__right__item header__menu__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__right__item header__menu__item">
                            <Link to="/cart">
                                <i className="bx bx-cart"></i>
                            </Link>
                        </div>
                        <div className="header__menu__right__item header__menu__item">
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

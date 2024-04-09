// @flow
import React, { useState, useEffect } from "react"
import BasketButton from "./components/BasketButton"
import ProfileButton from "./components/ProfileButton"
import { Auth, AuthError } from "@limio/shop/src/shop/auth"
import "./index.css"
import { clearCookie } from "@limio/shop/src/helpers/cookie.js"
import { useLimioContext } from "@limio/sdk"
import {Avatar, Dropdown, Navbar, Flowbite} from "flowbite-react"



export function NavHeader(props): React.Node {
  const {
    logo,
    logoHref,
    logoText,
    items,
    height,
    fixedTop,
    menu_button__limio_color,
    menuButtonIconUrl,
    menuButtonText,
    showBasket,
    showProfile,
    componentId,
    profileColor__limio_color,
    profileHref,
    basketColor__limio_color
  } = props

  const [username, setUsername] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const { isInPageBuilder } = useLimioContext()

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : "rgb(0,0,0,.5)"
  }

  const getSessionUser = async () => {
    return await Auth.currentAuthenticatedUser()
  }

  const signOutUser = async () => {
    await Auth.signOut({ global: true })
    clearCookie("limio-basket")
    setUsername("")
    setUserEmail("")
  }

  useEffect(() => {
    const getUsername = async () => {
      const user = await getSessionUser()
      setUsername(user?.username)
      setUserEmail(user?.signInUserSession?.idToken?.payload?.email || user?.attributes?.email)
    }

    getUsername().catch(err => {
      if (!(err instanceof AuthError)) {
        Sentry.captureException(err)
      }
    })
  }, [])

  // const customTheme: CustomFlowbiteTheme = {
  //   collapse: {
  //     base: "w-full lg:flex lg:w-auto",
  //     list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
  //     hidden: {
  //         on: "",
  //         off: "hidden"
  //     }
  // }
  // };

  return (

    <Navbar
    fluid={true}
  rounded={false}>
       <Navbar.Brand href={logoHref}>
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logio" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{logoText}</span>
      </Navbar.Brand>
        <div className="flex md:order-2">
     
        <Navbar.Toggle />
      </div>
      
      <Navbar.Collapse>
       {!!items?.length && (
        items.map(item => (
          <Navbar.Link herf={item.href} className="text-white">{item.label}</Navbar.Link>
        ))
       )}
      </Navbar.Collapse>
    </Navbar>


    // <nav className={`bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-60  ${fixedTop && !isInPageBuilder ? "fixed" : ""}`} id={componentId}>
    //   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //   <a href={logoHref} class="flex items-center space-x-3 rtl:space-x-reverse">
    //     <img src={logo} class="h-8" alt="Header logo" />
    //     <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{logoText}</span>
    // </a>
    // {showBasket && <BasketButton mobile={true}  basketColor__limio_color={ basketColor__limio_color}/>}
    //   </div>

    //   {showBasket && <BasketButton mobile={true} />}
    //   {showProfile && !menuButtonText ? (
    //     <ProfileButton mobile={true} username={username} userEmail={userEmail} signOut={signOutUser} />
    //   ) : (
    //     <div className="navbar-menu-button-text">{menuButtonText}</div>
    //   )}
    //   {menuButtonIconUrl?.length === 0 ? (
    //     <label
    //       htmlFor="navbar-toggle-cbox"
    //       className="navbar-toggler collapsed"
    //       data-toggle="collapse"
    //       data-target="#navbar"
    //       aria-expanded="false"
    //       aria-controls="navbar"
    //       style={{
    //         color: menu_button__limio_color,
    //         borderColor: menu_button__limio_color,
    //         height: `${height * 40}px`,
    //         lineHeight: `${height * 40 >= 36 ? 18 : height * 20}px`
    //       }}
    //     >
    //       <span
    //         style={{
    //           color: menu_button__limio_color,
    //           backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='${
    //             menu_button__limio_color?.startsWith("#") ? hexToRgb(menu_button__limio_color) : menu_button__limio_color
    //           }' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")`
    //         }}
    //         className="navbar-toggler-icon"
    //       />
    //     </label>
    //   ) : (
    //     <label
    //       htmlFor="navbar-toggle-cbox"
    //       className="navbar-toggler collapsed"
    //       data-toggle="collapse"
    //       data-target="#navbar"
    //       aria-expanded="false"
    //       aria-controls="navbar"
    //       style={{
    //         color: menu_button__limio_color,
    //         borderColor: menu_button__limio_color,
    //         height: `${height * 40}px`,
    //         lineHeight: `${height * 40 >= 36 ? 18 : height * 20}px`
    //       }}
    //     >
    //       <img
    //         className="navbar-toggler-icon"
    //         src={menuButtonIconUrl}
    //         alt="Menu Icon"
    //         style={{
    //           color: menu_button__limio_color,
    //           backgroundImage: `url(${menuButtonIconUrl})`
    //         }}
    //       />
    //     </label>
    //   )}

    //   {!!items?.length && (
    //     <div className="collapse navbar-collapse" id="navbar">
    //       <ul className="navbar-nav ml-auto">
    //         {items.map(item => (
    //           <li key={JSON.stringify(item)} className="nav-item">
    //             {item.button__limio_boolean ? (
    //               <button className={`nav-button`} style={{}}>
    //                 <a className="nav-link" href={item.href} id={item.id || item.label} style={{ fontSize: `${height * 20 <= 20 ? height * 20 : 20}px` }}>
    //                   {item.label}
    //                 </a>
    //               </button>
    //             ) : (
    //               <a className="nav-link" href={item.href} id={item.id || item.label} style={{ fontSize: `${height * 20 <= 20 ? height * 20 : 20}px` }}>
    //                 {item.label}
    //               </a>
    //             )}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    //   {showBasket && <BasketButton mobile={false} basketColor__limio_color={basketColor__limio_color}/>}
    //   {showProfile && <ProfileButton username={username} userEmail={userEmail} signOut={signOutUser} mobile={false}  profileColor__limio_color={profileColor__limio_color} profileHref={profileHref} />} */}
    // // </nav>
  )
}

export default NavHeader

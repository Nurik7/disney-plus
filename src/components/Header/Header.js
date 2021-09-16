import {Login, Logo, Nav, NavMenu, UserImg, SignOut, DropDown} from "./HeaderStyles";
import {auth, provider} from '../../Firebase/firebase'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {
  selectNavMenuItems,
  selectUserName,
  selectUserPhoto, setSignOutState,
  setUserLoginDetails
} from "../../features/user/userSlice";
import {useEffect} from "react";

const Header = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)
  const navMenuItems = useSelector(selectNavMenuItems).map(i => (
    <a href={i.link}><img src={i.iconSrc} alt={i.alt}/><span>{i.innerText}</span></a>))
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user)
        history.push('/home')
      } else if (!user) {
        history.push('/')
      }
    })
  })
  const handleAuth = () => {
    auth.signInWithPopup(provider).then((res) => {
      setUser(res.user)
    }).catch((error) => {
      alert(error.message)
    })
  }
  const handleLogout = () => {
    auth.signOut().then(res => {
      signOutUser()
    }).catch(error => {
      alert(error.message)
    })
  }

  const setUser = (user) => dispatch(
    setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    })
  )
  const signOutUser = (user) => dispatch(
    setSignOutState({
      name: null,
      email: null,
      photo: null
    })
  )


  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt="Disney+"/>
      </Logo>
      {!userName ?
        <Login onClick={handleAuth}>Login</Login> :
        <>
          <NavMenu>
            {navMenuItems}
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName}/>
            <DropDown>
              <span onClick={handleLogout}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      }
    </Nav>
  )
}

export default Header
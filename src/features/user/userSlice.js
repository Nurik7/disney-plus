import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  name: '',
  email: '',
  photo: '',
  navbarItems: [
    {link: '/home', iconSrc: './images/home-icon.svg', alt: 'home', innerText: 'home'},
    {link: '/search', iconSrc: './images/search-icon.svg', alt: 'search', innerText: 'search'},
    {link: '/watchlist', iconSrc: './images/watchlist-icon.svg', alt: 'watchlist', innerText: 'watchlist'},
    {link: '/originals', iconSrc: './images/originals-icon.svg', alt: 'originals', innerText: 'originals'},
    {link: '/movies', iconSrc: './images/movies-icon.svg', alt: 'movies', innerText: 'movies'},
    {link: '/series', iconSrc: './images/series-icon.svg', alt: 'series', innerText: 'series'},
  ]
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.photo = action.payload.photo
    },

    setSignOutState: state => {
      state.name = null
      state.email = null
      state.photo = null
    },
  },
})

export const {setUserLoginDetails, setSignOutState} = userSlice.actions

export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email
export const selectUserPhoto = state => state.user.photo
export const selectNavMenuItems = state => state.user.navbarItems

export default userSlice.reducer
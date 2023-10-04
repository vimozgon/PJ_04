import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: null,
  expire: null,
  user: null,
  isLoggedIn: false,
};

export const slice = createSlice({
  initialState,
  name: 'auth',

  reducers: {
    logout: () => initialState,

    setCredentials: (state, { payload: { accessToken, expire } }) => {
      state.accessToken = accessToken;
      state.expire = expire;
      state.user = {
        name: 'Pavel Petrovich.',
        avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
        tariff: 'beginner',
      };
      state.isLoggedIn = true;
    },
  },
});

export const { logout, setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAccessTokenExpire = (state) => state.auth.expire;

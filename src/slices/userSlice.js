import { createSlice } from '@reduxjs/toolkit';
import { messages, users } from '../assets/data';

const initialState = {
  users: [],
  usersWithMessages: [],
  filteredUser: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { user } = action.payload;
      state.usersWithMessages = [...state.usersWithMessages, user];
      state.filteredUser = [...state.filteredUser, user];
    },
    getUser: (state) => {
      state.users = users;
    },
    getUsersWithMessages: (state) => {
      // eslint-disable-next-line no-unused-vars
      const userIds = messages.map(({ userId, ...rest }) => userId);
      const userWithMessages = users.filter((user) =>
        userIds.includes(user.id)
      );
      state.usersWithMessages = userWithMessages;
      state.filteredUser = userWithMessages;
    },
    filterUser: (state, action) => {
      const { userName } = action.payload;
      const tempUsers = state.usersWithMessages.filter((user) =>
        user.name.toLowerCase().startsWith(userName.toLowerCase())
      );
      state.filteredUser = tempUsers;
    },
  },
});

export const userSelector = (state) => state.user;
export const { addUser, getUser, getUsersWithMessages, filterUser } =
  userSlice.actions;
export default userSlice.reducer;

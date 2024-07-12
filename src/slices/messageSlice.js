import { createSlice } from '@reduxjs/toolkit';
import { messages } from '../assets/data';

const initialState = {
  messages: [],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { message, userId } = action.payload;
      const idx = state.messages.findIndex(
        (message) => message.userId === userId
      );
      if (idx === -1) {
        state.messages = [...state.messages, { userId, convo: [message] }];
      } else {
        state.messages = state.messages.map((msg, index) =>
          index === idx ? { ...msg, convo: [...msg.convo, message] } : msg
        );
      }
    },
    getMessages: (state) => {
      state.messages = messages;
    },
  },
});

export const messageSelector = (state) => state.message;
export const { addMessage, getMessages } = messageSlice.actions;
export default messageSlice.reducer;

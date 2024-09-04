import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Thainá', 21981308126, 'lindona@gmail.com', 'lindeza ltda', 1),
    new Contato('Thainá', 21981308126, 'lindona@gmail.com', 'lindeza ltda', 2),
    new Contato('Thainá', 21981308126, 'lindona@gmail.com', 'lindeza ltda', 3)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contato'

type FiltroState = {
  termo?: string
  tag: enums.Tag
}

const initialState: FiltroState = {
  termo: '',
  tag: enums.Tag.TODOS
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<enums.Tag>) => {
      state.tag = action.payload
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer

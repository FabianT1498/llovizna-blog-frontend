import { UserState } from './auth.interface'
import { Models } from '@fabiant1498/social-media-types/'

interface Action {
  type: string;
  payload?: Models.User | null;
}

export const reducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        token: action.payload?.token ? action.payload?.token : null,
        userData: action?.payload ? action.payload : null,
      }
    default:
      return state
  }
}

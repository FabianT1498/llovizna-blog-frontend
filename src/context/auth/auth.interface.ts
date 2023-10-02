import { Dispatch } from 'react'
import { Models } from '@fabiant1498/social-media-types/'

export interface UserState {
  token: string | null;
  userData: Models.User | null;
}

export interface AuthContextProps {
  user: UserState;
  dispatch: Dispatch<any>;
}

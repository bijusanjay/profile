import React, {useContext} from 'react'

export interface UserProfile {
  isLoggedIn?: boolean
  displayName: string
  email: string
}

export interface AppContextInterface {
  userProfile: UserProfile
  signUp: () => void
  logOut: () => void
}

export const AppCtx = React.createContext<AppContextInterface | null>(null)

interface Props {
  children: React.ReactNode
  initialState: AppContextInterface
}

export const AppCtxProvider: React.FC<Props> = ({children, initialState}) => {
  return <AppCtx.Provider value={initialState}>{children}</AppCtx.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppCtx)
  if (!context) {
    throw new Error('useAppContext must be used within a AppCtxProvider')
  }
  return context
}

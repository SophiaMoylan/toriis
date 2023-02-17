import type { FC } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const AuthButton: FC = () => {
  const { data: sessionData } = useSession()

  return (
    <button
      className="bg-gray-100/50 hover:bg-gray-200 rounded-full px-4 py-2"
      onClick={sessionData ? () => void signOut() : () => void signIn()}
    >
      {sessionData ? 'Sign out' : 'Sign in'}
    </button>
  )
}

export default AuthButton

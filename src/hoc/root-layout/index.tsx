import {Layout} from 'antd'
import Navbar from '@components/ui/navbar'
import {ReactNode} from 'react'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  const excludedRoutes = ['/login', '/signup', '/profile']
  const isExcludedRoute = excludedRoutes.includes('') //handle path

  if (isExcludedRoute) {
    return <>{children}</>
  }

  return (
    <Layout>
      <Navbar />
      {children}
    </Layout>
  )
}

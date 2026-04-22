import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [seller, setSeller] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSellerAuthenticated, setIsSellerAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in (from localStorage or token)
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    const sellerToken = localStorage.getItem('sellerToken')
    const sellerData = localStorage.getItem('seller')
    
    if (token && userData) {
      setUser(JSON.parse(userData))
      setIsAuthenticated(true)
    }
    
    if (sellerToken && sellerData) {
      setSeller(JSON.parse(sellerData))
      setIsSellerAuthenticated(true)
    }
    
    setLoading(false)
  }, [])

  const login = (userData, token) => {
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const sellerLogin = (sellerData, token) => {
    setSeller(sellerData)
    setIsSellerAuthenticated(true)
    localStorage.setItem('sellerToken', token)
    localStorage.setItem('seller', JSON.stringify(sellerData))
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const sellerLogout = () => {
    setSeller(null)
    setIsSellerAuthenticated(false)
    localStorage.removeItem('sellerToken')
    localStorage.removeItem('seller')
  }

  const logoutAll = () => {
    logout()
    sellerLogout()
  }

  const register = (userData, token) => {
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const value = {
    user,
    seller,
    isAuthenticated,
    isSellerAuthenticated,
    loading,
    login,
    sellerLogin,
    logout,
    sellerLogout,
    logoutAll,
    register
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

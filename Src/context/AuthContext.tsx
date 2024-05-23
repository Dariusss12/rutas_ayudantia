import React, { createContext, useState, ReactNode, useContext } from 'react';

interface User {
  username: string;
  role: 'admin' | 'user';
}

interface AuthContextProps {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children } : AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    // Simulación de autenticación con roles
    if (username === 'admin' && password === 'password') {
      setUser({ username, role: 'admin' });
    } else if (username === 'user' && password === 'password') {
      setUser({ username, role: 'user' });
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

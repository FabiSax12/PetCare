import { createContext, useState } from "react";

export const AuthContext = createContext<{
  login: (username: string) => Promise<void>,
  logout: () => void,
  user: { username: string } | null,
}>({
  login: async () => { },
  logout: () => { },
  user: null,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ username: string } | null>(localStorage.getItem("username") ? { username: localStorage.getItem("username")! } : null);

  const login = async (username: string) => {
    setUser({ username })
    localStorage.setItem("username", username)
  };

  const logout = () => {
    localStorage.removeItem("username")
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
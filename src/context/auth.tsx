import { createContext, useState } from "react";

export const AuthContext = createContext<{
  login: (username: string, role: "vet" | "client") => Promise<void>,
  logout: () => void,
  user: { username: string, role: "vet" | "client" } | null,
}>({
  login: async () => { },
  logout: () => { },
  user: null,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ username: string, role: "vet" | "client" } | null>(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null
  );

  const login = async (username: string, role: "vet" | "client") => {
    setUser({ username, role })
    localStorage.setItem("user", JSON.stringify({ username, role }))
  };

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
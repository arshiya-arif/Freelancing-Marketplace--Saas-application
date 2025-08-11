import { useContext, createContext,useState } from "react";


const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const login = (userData, authToken) => {
        setUser(userData);
        setToken(authToken);
    }
    const logout=()=>{
        setUser(null);
        setToken(null);
    }
    return(
        <AuthContext.Provider value = {{user,login,logout,token}}>
            {children}
        </AuthContext.Provider>
    )
};


export const useAuth = () => useContext(AuthContext);
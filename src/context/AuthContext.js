"use client"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { addUser } from "@/lib/firestore";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const route=useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return unsubscribe;

    }, []);

    const login = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth,provider);
            const userData = result.user;
            await addUser(userData);
            return result;
        }
        catch (err) {
            console.error(err);
            return err;
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
            route.replace('/');
            return;
        }
        catch (err) {
            console.error(err);
            return err;
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
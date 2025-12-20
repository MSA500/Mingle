import { getDoc, doc, serverTimestamp, setDoc, addDoc, collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export const addUser = async (user) => {
    try {
        const ref = doc(db, "user", user.uid);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
            const newUser = {
                name: user.email,
                createdAt: serverTimestamp(),
                lastLogin: serverTimestamp()
            }

            await setDoc(ref, newUser);
        }
        else {
            await setDoc(ref, { lastLogin: serverTimestamp() }, { merge: true })
        }
    }
    catch (err) {
        console.error(err);
        return err;
    }
}

export const getMessage = async (message)=>{
    const q = query(collection(db,"message"),orderBy("createdAt"));

    const unsubscribe = onSnapshot(q,(snap)=>{
        const messages = snap.docs.map(d=>d.data());
        message(messages);
    });
    return unsubscribe;
}

export const addMessage = async (user,message) => {
    try {
        if (user) {
            await addDoc(collection(db,"message"),{
                uid:user.uid,
                email:user.email,
                text:message,
                createdAt:serverTimestamp()
            })
        }
    } catch (err) {
        console.error(err);
        return err;
    }
}

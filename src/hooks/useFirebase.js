import { useEffect, useState } from "react"

const useFirebase = () => {
    const [user, setUse] = useState({});
    useEffect(() => {

    }, []);
    const singInWithGoogle = () => {
        console.log('singing in')
    }
    return [user, setUse]
}
export default useFirebase;
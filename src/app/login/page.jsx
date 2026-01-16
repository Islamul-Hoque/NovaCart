import { Suspense } from "react";

import Loading from "../../Components/Loading"
import Login from "./Login";


const LoginPage = () => {
    return (
        // <Suspense fallback={<Loading/>}>
        //     <Login />
        // </Suspense>
        <div>
            <Login />
        </div>
)}

export default LoginPage;
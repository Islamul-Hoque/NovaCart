import { Suspense } from "react";

import Loading from "../../Components/Loading"
import Login from "./Login";

export default function LoginPage() {
    return (
        <Suspense fallback={<Loading/>}>
            <Login />
        </Suspense>
)}
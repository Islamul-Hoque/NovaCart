// import LoginForm from "@/Components/LoginForm/LoginForm";


// export default function Login() {

//     return <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//         <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">

//             <h2 className="text-2xl font-semibold text-gray-800 text-center">
//                 Welcome Back
//             </h2>
//             <p className="text-sm text-gray-500 text-center mt-1">
//                 Please sign in to your account
//             </p>

//             <LoginForm />

//         </div>
//     </div>;
// }

import { Suspense } from "react";

import Loading from "../../Components/Loading"
import LoginForm from "@/Components/LoginForm/LoginForm";

export default function LoginPage() {
    return (
        <Suspense fallback={<Loading/>}>
            <LoginForm />
        </Suspense>
)}
"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === "admin@gmail.com" && password === "123456") {
            // document.cookie = "auth=true; path=/";
            document.cookie = `auth=${JSON.stringify({ email })}; path=/`;

            setError("");
            router.push("/products")
        }
        else {
            setError("Invalid email or password");
        }
    }

    return <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">
                Email address
            </label>
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">
                Password
            </label>
            <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
        </div>

        {error && (
            <p className="text-sm text-red-600">{error}</p>
        )}

        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
        >
            Sign In
        </button>
    </form>;
}



// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function LoginForm() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === "admin@gmail.com" && password === "123456") {
//       document.cookie = `auth=${JSON.stringify({ email })}; path=/`;
//       setError("");
//       router.push("/products");
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="mt-6 space-y-6 bg-white p-6 rounded-lg shadow-lg"
//     >
//       <div className="space-y-2">
//         <label className="block text-sm font-medium text-gray-700">
//           Email address
//         </label>
//         <input
//           type="email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="you@example.com"
//           className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
//         />
//       </div>

//       <div className="space-y-2">
//         <label className="block text-sm font-medium text-gray-700">
//           Password
//         </label>
//         <input
//           type="password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="••••••••"
//           className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
//         />
//       </div>

//       {error && (
//         <p className="text-sm text-red-600 text-center">{error}</p>
//       )}

//       <button
//         type="submit"
//         className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-md text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 transition"
//       >
//         Sign In
//       </button>

//       <p className="text-xs text-gray-400 text-center">
//         Demo: admin@gmail.com / 123456
//       </p>
//     </form>
//   );
// }

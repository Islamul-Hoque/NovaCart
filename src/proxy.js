import { NextResponse } from 'next/server'

export function proxy(request) {
    const isLoggedIn = request.cookies.get("auth")?.value == "true";

    if (!isLoggedIn) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}


export const config = {
    matcher: [ '/add-product/:path*', '/manage-products/:path*' ],
}
import { NextResponse,NextRequest } from "next/server";

export function middleware(request){
    const access = true
    if(request.nextUrl.pathname.startsWith('/admin')){
       
    }
    if(request.nextUrl.pathname.startsWith('/api')){
        
    }
}



// export function middleware(req){
//     const access = false
//     if(!access){
//         return NextResponse.redirect(new URL("/",req.url))
//     }
//     return NextResponse.next()
// }

// export const config = {
//     matcher: '/admin/:path*',
// }
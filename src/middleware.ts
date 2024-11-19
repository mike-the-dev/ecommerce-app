import { NextRequest, NextResponse } from "next/server";
// import authorizeRequest from "./utils/authorizeRequest";
// import { cookies } from "next/headers";


export default async (request: NextRequest) => {
  const protectedRoutes = ["/desk"];
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    // const absoluteURL: URL = new URL("/auth/login", request.nextUrl.origin);
    // console.log("Rediecting too: ", absoluteURL.toString());
    // return NextResponse.redirect(absoluteURL.toString());
    try {
      // const res = await fetch("http://localhost:3001/api/authenticated", {
      //   method: 'GET',
      //   credentials: "include",
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      // const data = await res.json();
      // console.log("Protected route data: ", data);
      const cookieValue = request.cookies.get("joymdsession")?.value

      if (!cookieValue) {
        const absoluteURL: URL = new URL("/login", request.nextUrl.origin);
        console.log("Rediecting too: ", absoluteURL.toString());
        return NextResponse.redirect(absoluteURL.toString());
      }
    } catch (error) {
      console.log("Error in middleware: ", error);
    };
  };

  const unProtectedRoutes = ["/login"];
  if (unProtectedRoutes.includes(request.nextUrl.pathname)) {
    // const absoluteURL: URL = new URL("/auth/login", request.nextUrl.origin);
    // console.log("Rediecting too: ", absoluteURL.toString());
    // return NextResponse.redirect(absoluteURL.toString());
    try {
      // const res = await fetch("http://localhost:3001/api/authenticated", {
      //   method: 'GET',
      //   credentials: "include",
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      // const data = await res.json();
      // console.log("UnProtected  Routedata: ", data);
      console.log("wtf");
      const cookieValue = request.cookies.get("joymdsession")?.value;
      console.log("wtf: ", cookieValue);

      if (cookieValue) {
        const absoluteURL: URL = new URL("/desk", request.nextUrl.origin);
        console.log("Rediecting too: ", absoluteURL.toString());
        return NextResponse.redirect(absoluteURL.toString());
      }

    } catch (error) {
      console.log("Error in middleware: ", error);
    };
  };

  // if (protectedRoutes.includes(request.nextUrl.pathname)) {
  //   // const absoluteURL: URL = new URL("/auth/login", request.nextUrl.origin);
  //   // console.log("Rediecting too: ", absoluteURL.toString());
  //   // return NextResponse.redirect(absoluteURL.toString());
  //   try {
  //     const res = await fetch("http://localhost:3001/api/authenticated", {
  //       method: 'GET',
  //       credentials: "include",
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     const data = await res.json();
  //     console.log("data: ", data);
  //     const absoluteURL: URL = new URL("/desk", request.nextUrl.origin);
  //     console.log("Rediecting too: ", absoluteURL.toString());
  //     return NextResponse.redirect(absoluteURL.toString());

  //   } catch (error) {
  //     console.log("Error in middleware: ", error);
  //   };
  // };


  // return response;
  // console.log("Middleware is running.");
  // const key: string = cookies().get("auth-public-token")?.value || "";
  // const hasSession: boolean = await authorizeRequest(key);

  // const isLoggedIn = localStorage.getItem("isLoggedIn") || "";
  // const authTokens: AuthTokens = JSON.parse(sessionStorage.getItem("@authTokens") || JSON.stringify({ accessToken: '', refreshToken: '' }));
  // const hasSession: boolean = ((authTokens.accessToken && authTokens.refreshToken) && isLoggedIn === "true") || false;

  // if (protectedRoutes.includes(request.nextUrl.pathname)) {
  //   const absoluteURL: URL = new URL("/auth/login", request.nextUrl.origin);
  //   console.log("Rediecting too: ", absoluteURL.toString());
  //   return NextResponse.redirect(absoluteURL.toString());
  // };

  // if (hasSession && ["/", "/login"].includes(request.nextUrl.pathname)) {
  //   const absoluteURL: URL = new URL("/dashboard/home", request.nextUrl.origin);
  //   return NextResponse.redirect(absoluteURL.toString());
  // };

  // if (!hasSession && protectedRoutes.includes(request.nextUrl.pathname)) {
  //   const absoluteURL: URL = new URL("/login", request.nextUrl.origin);
  //   return NextResponse.redirect(absoluteURL.toString());
  // };
};
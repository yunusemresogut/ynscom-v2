import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseAnonKey, getSupabaseUrl } from "./env";

export async function updateSession(request: NextRequest) {
  if (!getSupabaseUrl() || !getSupabaseAnonKey()) {
    return NextResponse.next({ request });
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    getSupabaseUrl(),
    getSupabaseAnonKey(),
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  const adminEmail = process.env.ADMIN_EMAIL;
  const isAuthorizedAdmin =
    user && (!adminEmail || user.email === adminEmail);

  if (isAdminRoute && !isLoginPage && !isAuthorizedAdmin) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    if (user && adminEmail && user.email !== adminEmail) {
      url.searchParams.set("error", "unauthorized");
    } else {
      url.searchParams.set("redirect", request.nextUrl.pathname);
    }
    return NextResponse.redirect(url);
  }

  if (isLoginPage && isAuthorizedAdmin) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

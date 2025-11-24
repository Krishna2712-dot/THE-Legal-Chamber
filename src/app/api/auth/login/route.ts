import { NextResponse } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"; // Change this in production

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (password === ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: true },
        {
          status: 200,
          headers: {
            "Set-Cookie": `admin-auth=${btoa("authenticated")}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`,
          },
        }
      );
    }

    return NextResponse.json({ success: false, error: "Invalid password" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}


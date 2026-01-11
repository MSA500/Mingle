import { NextResponse } from "next/server";

export async function POST(req) {
    const { user, key } = await req.json();

    if (user === process.env.SECRET_USER && key === process.env.SECRET_KEY) {
        return NextResponse.json({ status: "valid" }, { status: 200 });
    } else {
        return NextResponse.json({ status: "invalid" }, { status: 401 });
    }
}

import { wisp } from "@/lib/wisp";
import { CreateCommentInput } from "@wisp-cms/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        console.log("Attempting to perform comment submission action.");
        const body: CreateCommentInput = await req.json();
        console.log(body);
        const response = await wisp.createComment(body);
        return NextResponse.json({ message: "Success", payload: response }, { status: 201 });
    } catch (error) {
        console.log(`Error: ${error}`);
        return NextResponse.json({ message: "Error. Unable to submit comment.", payload: null }, { status: 500 });
    }
}
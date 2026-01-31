import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Event from "@/lib/db/models/Event";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { type, meta = {}, sessionId } = body;

    if (!type) {
      return NextResponse.json(
        { error: "Event type required" },
        { status: 400 }
      );
    }

    await Event.create({
      type,
      meta,
      sessionId
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { error: "Error logging event" },
      { status: 500 }
    );
  }
}

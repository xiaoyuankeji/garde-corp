import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Static mode: Database disabled
  return NextResponse.json(
    { 
      success: true, 
      message: "Mode statique: Demande simulée",
    },
    { status: 200 }
  );
}

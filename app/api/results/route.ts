import { NextResponse } from "next/server";
import { results } from "../../../data/results";

export async function GET() {
  return NextResponse.json(results, { status: 200 });
}

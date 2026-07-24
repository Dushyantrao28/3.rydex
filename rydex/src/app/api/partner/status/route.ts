import { auth } from "@/auth";
import connectDb from "@/lib/db";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDb()
        const session = await auth()
        if (!session?.user?.id) {
            return NextResponse.json(
                { message: "unauthorize" },
                { status: 400 }
            )
        }

        const user = await User.findOne({ email: session.user.email })
        if (!user || user.role !== "partner") {
            return NextResponse.json(
                { message: "unauthorize" },
                { status: 400 }
            )
        }

        const { isOnline, latitude, longitude } = await req.json()

        const updateData: any = {}
        if (isOnline !== undefined) {
            updateData.isOnline = isOnline
        }
        
        if (latitude !== undefined && longitude !== undefined) {
            updateData.location = {
                type: "Point",
                coordinates: [longitude, latitude] // GeoJSON is [longitude, latitude]
            }
        }

        const updatedUser = await User.findByIdAndUpdate(user._id, updateData, { new: true })

        return NextResponse.json(
            updatedUser,
            { status: 200 }
        )

    } catch (error) {
        return NextResponse.json(
            { message: `partner status error ${error}` },
            { status: 500 }
        )
    }
}

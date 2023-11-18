import { Partner } from "@/app/db/Partner"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        console.log(mongoose.connections.length, mongoose.connection.readyState)
        await mongoose.connect(process.env.MONGO_DB_URI as string, {})
        
        const partners = await Partner.find({}).select(['nombre', 'codigo']).limit(20)
        
        return NextResponse.json(partners)
    } catch (error) {
        console.log(error)
        console.log('Hubo un error')
        return NextResponse.json({error: 'error general'})
    }
}
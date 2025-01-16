import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request){
    const res = await request.json()
    const {title, name, location, time} = res;
    console.log({res})

    const result = await prisma.event.create({
        data: {
            title,
            name,
            location,
            time,
            published: true,
            author: {
                create: {
                    name: 'Isaac'
                }
            }
        }
    })

    return NextResponse.json({result})
}
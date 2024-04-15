import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    
    await prisma.todo.deleteMany();
    
    //const todo = await prisma.todo.create({
    //    data: {
    //        description: 'Terminar nextjs course'
    //    }
    //})
    //console.log({todo})

    await prisma.todo.createMany({
        data:[
        {
            description: 'Terminar nextjs course'
        },
        {
            description: 'crear nueva funcionalidad'
        },
        {
            description: 'llegar a 85kg'
        },
        {
            description: 'reencontrar la motivacion',
            complete: true
        },
        
        ]
    })
    
    return NextResponse.json({message: 'seed execute'})
    
}
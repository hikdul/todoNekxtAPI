// ? nota si a un string en js le agregas un + por delante.. con esta concateracion se puede volver un number para TS

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as Yup from 'yup'

// ** GET
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const skip = Number(searchParams.get('skip') ?? '0')
    const take = Number(searchParams.get('take') ?? '10')
// ! igual estas validaciones son un rollo...
    if(isNaN(take))
        return NextResponse.json({message: 'take debe ser un numero, huevon...'},{status: 400})
    if(isNaN(skip))
        return NextResponse.json({message: 'skip debe ser un numero, huevon...'},{status: 400})

    const todos = await prisma.todo.findMany({ take, skip });
    //console.log({todos})

    return NextResponse.json({
        path: 'todo/',
        method: 'GET',
        data: todos
    })
}

// ** schema from yup

const postSchema = Yup.object({
    description: Yup.string().required(),
    complete: Yup.boolean().optional().default(false),
})

// ** POST

export async function POST(request: Request) {
    
    try {
        
        const {complete,description} = await postSchema.validate(await request.json()) 
        const todo = await prisma.todo.create({data:{complete,description}})

        return NextResponse.json({
            path: 'todo/',
            method: 'POST',
            body: todo
        },{
            status: 201
        })
    } catch (error) {
        console.error(error)
        return NextResponse.json({mesage: 'Datos no controlados, verifique la informacion ingresada.'},{status:400})
    }
}

// ? esto es solo para guiarme
interface todoCreated{

  description: string
  complete?: boolean 
}
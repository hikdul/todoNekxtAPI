import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as Yup from 'yup'

interface argvGET{
    params:{
        id: string
    }
}
// ** GET by id
export async function GET(request: Request, argv: argvGET) {
    try {
        const {id} = argv.params
        const todo = await prisma.todo.findFirst({where:{id}})
        if(!todo)
            return NextResponse.json({message: `${id} not Found`},{status:404})
        return NextResponse.json({
            path: 'todo/:id',
            method: 'GET',
            argv,
            todo
        })
    } catch (error) {
        console.error(error)
        return NextResponse.json({message: 'error'},{status:404})
    }
}

// ** PUT

const putSchema = Yup.object({
    description: Yup.string().optional(),
    complete: Yup.boolean().optional().default(false),
})
//description": "reencontrar la motivacion",
 //       "complete
export async function PUT(request: Request, argv: argvGET) {
    try {

        const {id} = argv.params
        const {complete,description} = await putSchema.validate(await request.json()) 
        const todoDB = await prisma.todo.findFirst({where: {id}})
        if(!todoDB)
            return NextResponse.json({message: 'not found'},{status:404})
        
        const upTodo = await prisma.todo.update({
            where:{id},
            data: {complete,description}
        })
        
        return NextResponse.json({todo:upTodo},{status:203})
        
    } catch (error) {
        
        console.error(error)
        return NextResponse.json({message: 'error en los datos suministrados'},{status:400})
    }
    
}
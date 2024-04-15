import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface argvGET{
    params:{
        id: string
    }
}

export async function GET(request: Request, argv: argvGET) {
    try {
        
        console.log({argv})
    //const {id} = argv.params
    //console.log({id})
    //const todo = await prisma.todo..findFirst({where:{id}})
    //console.log({todo})
    //if(!todo)
      //  return NextResponse.json({message: `${id} not Found`},{status:404})
    
    return NextResponse.json({
        path: 'todo/:id',
        method: 'GET',
        argv,
    })
    } catch (error) {
        console.error(error)
        return NextResponse.json({message: 'error'},{status:404})
    }
    
}


const db = require('../../../lib/db.js')

export async function GET(request,{params}){
    const sql = `SELECT * FROM customer`
   try{
    const result = await new Promise((resolve,reject)=>{
        db.query(sql,(error,result)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(result)
            }
        })
    })
    return Response.json({data:result,status:200})
   }catch(error){
    console.log("innnnn")
    throw new Error("somethin brokkkkkkkke")
   }
}

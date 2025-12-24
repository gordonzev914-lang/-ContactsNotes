
import fs from "fs/promises"
export const writeJsonFile=(object,path)=>{
    try{
        const arryToString=JSON.stringify(object)
        fs.writeFile(`${path}.json`,arryToString ,'utf-8',(arryToString)=>{console.log(arryToString)})
        console.log("succeeded")
        return arryToString
    }
    catch(err){
        console.log(err)
    }
}
export const readJsonFile=async(specificFile)=>{
    try{
        const data=await fs.readFile(`${specificFile}.json`,'utf-8',()=>{})
        console.log(`${data}  data succeeded`)
        const data2=JSON.parse(data)
        console.log(data2)
        return data2
    }
    catch(err){
        console.log(err)
    }
}

import {writeJsonFile} from "./services.js"
import {readJsonFile} from "./services.js"




export const createContact=async (contact,path)=>{
    try{
        const getarry= await readJsonFile(path)
        console.log("hy",getarry)
        getarry.push(contact)
        console.log("check1")
        const s=writeJsonFile(getarry,path)
        console.log("check2",s)



    }
    catch(err){
        console.log(err)
    }
}
console.log(createContact({id:111,fullname:"zev",phone:"07684632",city:"newyork"},"./data/contacts"))

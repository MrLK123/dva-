const data=require("./userjson.json");
export default {
    '/api/users/1':{id:1},
    'POST /api/users/create':(req,res)=>{res.status(200).json({user:data})}

}
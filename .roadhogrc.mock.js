const fs=require('fs');
const path=require('path') ;
const mock={};
fs.readdirSync(path.join(__dirname+"/mock")).forEach(file=>{
    if(file.match(/\.js$/)){
        Object.assign(mock,require('./mock/'+file));
    }
})
export default mock;
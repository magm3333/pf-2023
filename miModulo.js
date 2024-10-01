let variable=0;
setVariable=(v)=>{variable=v;}
getVariable=()=>{return variable;}
module.exports={
    setVariable:setVariable,
    getVariable:getVariable
}
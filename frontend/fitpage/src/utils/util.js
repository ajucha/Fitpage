export const DataFiltering=(data)=>{
    let tempData=[]
    let temp=[]
     data.map(val=>{
       
        let res=CriteriaFilter(val.criteria)
        let obj={
            name:val.name,
            tag:val.tag,
            color:val.color
        }
        let obj2={
            name:val.name,
            res:res
        }
        temp.push(obj2)
        // console.log(res,"RESULLLL")
        tempData.push(obj)
    })
    return [tempData,temp]
}


const CriteriaFilter=(value)=>{
    return value.map(val=>val)
}

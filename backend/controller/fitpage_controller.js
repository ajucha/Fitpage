const { default: axios } = require("axios")

const FitPageController=async(req,res)=>{
        try {
            let result=await axios.get('http://coding-assignment.bombayrunning.com/data.json')
            return res.status(200).json(result.data)
        } catch (error) {
            return res.status(500).json(error)
        }
}


module.exports=FitPageController
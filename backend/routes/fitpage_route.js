const express=require('express')

const router=express.Router()
const FitPageController=require('../controller/fitpage_controller')

router.route('/').get(FitPageController)



module.exports=router
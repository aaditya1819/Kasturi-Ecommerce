import express from 'express'
import authUser from '../middleware/auth.js'
import {placeOrder,allOrders,userOrders,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
const orderRouter = express.Router()


//Admin features

orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status', adminAuth, updateStatus) 


//Payement Features


orderRouter.post('/place',authUser,placeOrder)
// orderRouter.post('/stripe',authUser,placeOrderStripe)
// orderRouter.post('/razorpay',authUser,placeOrderRazorPay)


//User Feature

orderRouter.post('/userorders',authUser,userOrders)

//verify paymen

// orderRouter.post('/verifyStripe',authUser,verifyStripe)
// orderRouter.post('/verifyRazorpay',authUser,verifyStripe)

export default orderRouter;
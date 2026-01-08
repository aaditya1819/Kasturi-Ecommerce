
import orderModel from  "../models/oderModel.js";
import userModel from "../models/userModel.js";
// import Stripe from 'stripe'
// import razorpay from 'razorpay'


//Global variables
const currency = 'inr'
const deliveryCharge = 100



//GATEWAY INTIALIZE
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY) 

// const razouPayInstance = new razorpay({
//     key_id : process.env.RAZOURPAY_KEY_ID,
//     key_secret : process.env.RAZOURPAY_KEY_SECRET
// })

//placing order using COD Method

const placeOrder =async (req , res) => {
    try {
        const{ userId , items , amount , address } =req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()

        }

        const newOrder = new orderModel(orderData)

        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true , message:"Order Placed"})


    } catch (error) {
        console.log(error)
        res.json({sucess:false ,message:error.message})
        
    }

}

//placing order using stripe Method

// const placeOrderStripe =async (req , res) => {
//     try {
//         const{ userId , items , amount , address } =req.body;
//         const {origin} = req.headers

//         const orderData = {
//             userId,
//             items,
//             address,
//             amount,
//             paymentMethod:"Stripe",
//             payment:false,
//             date:Date.now()

//         }
//         const newOrder = new orderModel(orderData)

//         await newOrder.save()

//         const line_items = items.map((items)=>({
//             price_data:{
//                 currency:currency,
//                 product_data:{
//                     name:items.name

//                 },
//                 unit_amount:items.price * 100

//             },
//             quantity:items.quantity
//         }))

//         line_items.push({
//             price_data:{
//                 currency:currency,
//                 product_data:{
//                     name:'Delivery Charges'

//                 },
//                 unit_amount:deliveryCharge * 100

//             },
//             quantity:1

//         })

//         const session = await stripe.checkout.session.create({
//             success_url:'${origin}/verify?success=true&orderID=${newOrder._id}',
//             cancel_url:'${origin}/verify?success=false&orderID=${newOrder._id}',
//             line_items,
//             mode:'payment',
//         })

//         res.json({success:true,session_url:session.url})


        
//     } catch (error) {
//         console.log(error)
//         res.json({sucess:false ,message:error.message})

        
//     }
    
// }

//verify Stripe

// const verifyStripe = async (req,res) => {
//     const {orderId,success,userId} = req.body

//     try {
//         if (success === "true") {
//             await orderModel.findByIdAndUpdate(orderId,{payment:true})
//             await userModel.findByIdAndUpdate(userId,{cartData:{}})
//             res.json({success:true});

            
//         }else{
//             await orderModel.findByIdAndDelete(orderId)
//             res.json({success:false})
//         }

//     } catch (error) {
//         console.log(error)
//         res.json({sucess:false ,message:error.message})
        
//     }

// }

//placing order using RazorPay Method

// const placeOrderRazorPay =async (req , res) => {
//     try {
//         const{ userId , items , amount , address } =req.body;
        

//         const orderData = {
//             userId,
//             items,
//             address,
//             amount,
//             paymentMethod:"Razorpay",
//             payment:false,
//             date:Date.now()

//         }
//         const newOrder = new orderModel(orderData)

//         await newOrder.save()
//         const options = {
//             amount: amount *100,
//             currency:currency.toUpperCase(),
//             receipt:newOrder.key_id.toString()

//         }
//         await razouPayInstance.orders.create(options,(error,orders)=>{
//             if (error) {
//                 console.log(error);
//                 return res.json({success:false,message:error})
                
                
//             }
//             res.json({success:true,order})

//         })
        
//     } catch (error) {
//           console.log(error)
//         res.json({sucess:false ,message:error.message})
        
//     }
    
// }
// const verifyRazorpay = async (req,res) => {
//     try {
        
//         const{userId,razorpay_order_id }= req.body
//         const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
//         if (orderInfo.status === 'paid') {
//             await orderModel.findByIdAndUpdate(orderInfo.receipt,{payment:true})
//             await userModel.findByIdAndUpdate(userId,{cartData:{}})
//             res.json({success:true,message:"Payment successful"})
            
//         }else{
//             res.json({success:false,message:"Payment failed"})
//         }
        


//     } catch (error) {
//           console.log(error)
//         res.json({sucess:false ,message:error.message})


        
//     }
// }

// All Orders data for admin panel
const allOrders =async (req , res) => {

    try {
        
        const orders = await orderModel.find({})
        res.json({success:true,orders})


    } catch (error) {
        console.log(error)
        res.json({sucess:false ,message:error.message})
        
    }
    
}
//User order data for frontend
const userOrders =async (req , res) => {
    try {
        const {userId}=req.body

        const orders = await orderModel.find({userId})
        res.json({success:true,orders})


    } catch (error) {
        console.log(error)
        res.json({sucess:false ,message:error.message})
        
    }

    
}

//update order status from admin panel

const updateStatus  =async (req , res) => {
    try {
        console.log("BODY:", req.body);
        const {orderId ,status} = req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:'Status Updated'})

    } catch (error) {
        console.log(error)
        res.json({sucess:false ,message:error.message})
        
    }
     

    
}

export {placeOrder,allOrders,userOrders,updateStatus}

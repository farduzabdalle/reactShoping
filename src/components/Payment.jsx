import React, { useEffect, useState } from 'react'
import useShop from '../Shopcontext';
import axios from 'axios';
const Payment = () => {
  const initialPayment={
    evc:false,
    zaad:false,
    sahal:false,
  } 
  const {total}=useShop()
  const [payment,setPayment]=useState(initialPayment);
  const [updated,setUpdated]=useState(false);
  const [phoneNum,setPhonenum]=useState("");
  const [loading,setLoading]=useState(false)
  
  // update ku sameena appka
  useEffect(()=>{},[updated]) 
 //referesh ku joojinaa
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(phoneNum)
  }
const processPayment=async()=>{
 const body={
  schemaVersion:"1.0",
  requestId:"10111331033",
  chanelName:"WEB",
  seviceName:"API_PURCHASE",
  serviceParams:{
    merchantUid:process.env.REACT_APP_MERCHANT_U_ID,
    apiUserId:process.env.REACT_APP_API_USER_ID,
    apiKey:process.env.REACT_APP_API_USER_IDKEY,
    paymentMethod:"mwallet_account",
    payerInfo:{
      accountNo:phoneNum,
    },
    transactionInfo:{
      referencedId:"12334",
      invoiceId:"78965404",
      amount:total,
      currency:"USD",
      description:"React Shopping Cart"
    },
  }
 };
 setLoading(true)
 const {data}= await axios.post("https://www.waafi.com/asm",body)
 setLoading(false)
const info =data.responseMsg.split("ERRCODE");
if(info.Length==1){
 setUpdated(!updated);
 alert("succesfully ordererd")
}
else{
  if(data.responseMsg.split("ERRCODE")[2].includes("4004")){
   alert("user rejected ")
    setUpdated(!updated);
  }
  if(data.responseMsg.split("ERRCODE")[2].includes("6002")){
    alert("user rejected ")
    setUpdated(!updated);
  }
}
}





  return (
    <div>
      <h2>Pay with</h2> 
      <div className="payment-cards">
        <div className={`payment-card ${payment.zaad && "selected"}`} onClick={()=>setPayment({...initialPayment,zaad:true})}>
           <h3>zaad</h3>
        </div>
<div className={`payment-card ${payment.evc && "selected"}`} onClick={()=>setPayment({...initialPayment,evc:true})} >
   <h3>EVC PLUS</h3>
</div>
<div className={`payment-card ${payment.sahal && "selected"}`} onClick={()=>setPayment({...initialPayment,sahal:true})}>

    <h3>Sahal</h3>

</div>
        </div> 

<form onSubmit={handleSubmit}>
  <input type="text" name="" id="" className='form-control' placeholder='2526...' 
    onChange={(e)=> setPhonenum(e.target.value)}/>  
<button className="btn-proced">{loading?"LOADING":"PROCEED"}</button>
</form>

    </div>
   
  )
}

export default Payment

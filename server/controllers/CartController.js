import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


// export async function createCart(request, response) {
//   // Ensure the values are trimmed of leading/trailing spaces
//   const { user_id, item_id } = request.body;
  
//   try {
//     if (!user_id || !item_id) {
//       return response.status(400).json({ success: false, message: "User ID and Item ID are required" });
//     }

//     const existingCartProduct = await prisma.Cart.findFirst({
//       where: { user_id: user_id.trim(), item_id: item_id.trim() }
//     });

//     if (existingCartProduct) {
//       return response.status(400).json({ success: false, message: "Product already in cart" });
//     }

//     const cartProduct = await prisma.Cart.create({
//       data: {
//         user_id: user_id.trim(),
//         item_id: item_id.trim(),
//       }
//     });

//     response.status(201).json({ success: true, data: cartProduct });
//   } catch (error) {
//     console.log(error.message);
//     return response.status(400).json({ success: false, message: error.message });
//   }
// }
export async function createCart(request, response) {
  const {user_id, item_id}= request.body
 try {
  
  const ExistingcartProduct = await prisma.Cart.findFirst({
where:{user_id, item_id}
  })
  if (ExistingcartProduct){
    return response.status(400).json({success:false, message:"Product already in cart"})
  }
  const cartProduct = await prisma.Cart.create({
    data:{
      user_id,
      item_id,
    }
  });
  response.status(201).json({success:true, data: cartProduct})
 } catch (error) {
  console.log(error.message);
  return response.status(400).json({success:false,message:error.message})
 }
}


export async function getCart(request, response){

const { user_id }= request.params;
try {
  const cartProduct = await prisma.Cart.findMany({
    where:{ user_id },
    include: { product:true},
  }) 
  response.status(200).json({success:true, cartProduct})
} catch (error) {
  console.log(error.message);
  return response.status(404).json({success:false, message:"Cart product not found"})
}
}



export async function removeCart(request, response) {
  const { id } = request.params;

  try {
    await prisma.delete({
      where:{id: String(id)}
    })
    response.status(204).json({success:true, message:"product removed from cart"})
  } catch (error) {
    console.log(error.message);
    return response.status(404).json({success:false, message:" cart Product not found"})
  }
}


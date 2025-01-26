
export const CartReducer=(state,action)=>{
    switch(action.type){
        case 'add':
            return state.cart.length>0?{...state, cart: state.cart.map((product)=>product.productName===action.payload.productName?{...product,quantity:product.quantity+1}:{...action.payload, quantity:1})}:{...state,cart:[{...action.payload, quantity: 1}]};
        case 'remove':
            return {...state, cart:state.cart.map((product)=>{
                if (product.productName===action.payload){
                 return product.quantity>1?{...product,quantity: product.quantity-1}:{...product,quantity:0};
                }
            }).filter(({quantity})=>quantity!==0)
            }

        case 'delete':
            return {...state, cart:state.cart.filter(({productName})=>productName!==action.payload)};
        
    }
}
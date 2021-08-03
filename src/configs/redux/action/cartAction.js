export const cartBag = ( data ) => {
    const itemBuy = data
    console.log(itemBuy)
    return({ type:'CART', payload: itemBuy })
}

export const checkout = ( data ) => {
    const itemBuy = data
    return({ type:'CART', payload: itemBuy })
}
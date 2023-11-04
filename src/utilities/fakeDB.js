//use local storage to manage data.

const addToDB = id =>{
    let shoppingCart = {};
    
    const storedCart = localStorage.getItem("shopping-cart");

    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }else{
        shoppingCart = {}
    }
    

    const quantity = shoppingCart[id];
    if(!quantity){
        shoppingCart[id] = 1;


    }else{
        const newQuantity = quantity + 1;
        // localStorage.setItem(id, newQuantity)
        shoppingCart[id] = newQuantity;
    }
     localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))
};





export { addToDB };


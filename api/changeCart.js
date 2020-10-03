const add = (cart, req) => {
    cart.push(req.body);
    return {productName: req.body.name, newCart: JSON.stringify(cart, null, 4)};
  };

const change = (cart, req) => {
    const cartProduct = cart.find(el => el.id === +req.params.id);
    cartProduct.quantity += req.body.quantity;
    return {productName: cartProduct.name, newCart: JSON.stringify(cart, null, 4)};
  };

const del = (cart, req) => {
    const cartProduct = cart.find(el => el.id === +req.params.id);
    cart.splice(cart.indexOf(cartProduct), 1);
    return {productName: cartProduct.name, newCart: JSON.stringify(cart, null, 4)};
};
  
  module.exports = {
    add,
    change,
    del,
  };
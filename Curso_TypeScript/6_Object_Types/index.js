function showProductDatails(product) {
    console.log("o nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o \u00E9 R$").concat(product.price));
    if (product.isAvaliable) {
        console.log("O produto está disponivel");
    }
}
var shirt = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
};
showProductDatails(shirt);
showProductDatails({ name: "Tenis", price: 20.00, isAvaliable: false });
function showUserDetails(user) {
    console.log("O usuario tem como emial ".concat(user.email));
    if (user.role) {
        console.log("A fu\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(user.role));
    }
}
var u1 = { email: "Bernardo@gmail.com", role: "Admin" };
var u2 = { email: "Joao@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
// coords.z = "teste"

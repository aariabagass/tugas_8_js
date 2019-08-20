var changeObject = () => {
  shoes = {
    brand: "adidas",
    type: "yeezy",
    price: 5000000
  }

  console.log(shoes)
  shoes.price = 4000000
  shoes.color = "white"
  console.log(shoes)
}
changeObject();
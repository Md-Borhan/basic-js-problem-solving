const product = {
  __proto__: {
    item(
      id,
      deliveryStatus,
      name,
      price,
      quantity,
      description,
      paymentStatus
    ) {
      this.id = id;
      this.deliveryStatus = deliveryStatus;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
      this.paymentStatus = paymentStatus;
    },
  },
};

const randomId = Math.floor(Math.random() * 10) + 1;

product.item(
  randomId,
  "on way",
  "Tea Shirt",
  "550",
  "8",
  "lorem ipsum dolor sit amet, consectetur adipiscing",
  "not paid"
);

if (product.deliveryStatus === "pending") {
  console.log("Your ordered product has pending");
} else if (
  product.deliveryStatus === "on way" &&
  product.paymentStatus === "paid"
) {
  console.log("Your ordered product has on way");
} else if (
  product.deliveryStatus === "delivered" &&
  product.paymentStatus === "paid"
) {
  console.log("Your ordered product delivery successfully");
} else {
  console.log("Your payment is not paid");
}

console.log(product);

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

const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// When calling parent.method in this case, 'this' refers to parent

// child is an object that inherits from parent
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3

child.value = 4; // assign the value 4 to the property 'value' on child.
// This shadows the 'value' property on parent.
// The child object now looks like:
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5

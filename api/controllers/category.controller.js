import Category from "../models/Category.js";

export const addNewCategory = (req, res) => {
  const { image, name } = req.body;

  //   let newCustomerDetails = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     password: encryptedPassword,
  //     phoneNumber: phoneNumber,
  //     // otp: Math.floor((Math.random() + 1) * 1000),
  //     otp: 1234,
  //   };

  Category.insertMany([
    {
      image:
        "https://cdn.dribbble.com/users/746931/screenshots/14872511/media/db9e51705f4b3b0a7019a9b427e02ad4.png?compress=1&resize=400x300",
      name: "Clothings",
    },
    {
      image: "https://www.freepik.com/free-photos-vectors/shoes-banner",
      name: "Shoes",
    },
    {
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Felectronics-banner&psig=AOvVaw08Gmuu6qZ9wk3omuu9IZ34&ust=1678267995434000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIjc-87Byf0CFQAAAAAdAAAAABAE",
      name: "Electronics And Assoceries",
    },
    {
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Frow-old-books-one-open-background-web-banner-free-copy-space-reading-education-literature-book-fair-concept-row-old-books-image170933211&psig=AOvVaw0py5uV13J1d0yafmNvilfN&ust=1678267923252000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjlzKzByf0CFQAAAAAdAAAAABAJ",
      name: "Books",
    },
    {
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fframe-top-border-makeup-products-cosmetics-pastel-pink-background-flat-lay-view-beauty-blog-banner-template-female-make-image172135713&psig=AOvVaw2aLAQL0Pqiy8UfeYvUjfrb&ust=1678267958397000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNjosr3Byf0CFQAAAAAdAAAAABAE",
      name: "Beauty Products",
    },
  ])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const getCategory = (req, res) => {
  Category.find()
    .then((category) => res.json(category))
    .catch((err) => console.log(err));
};

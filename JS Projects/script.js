const products = [
  {
    id: 1,
    title: "Men's Model Dubai Black Liam Bag",
    price: "₹" + 18199,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521676001/QEeUj7DjPT-410521676001_3.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521676001/vjXzDkb6fC-410521676001_1.jpg",
  },
  {
    id: 2,
    title: "Men's Full Sleeves AX Monogram Blue Jacket ",
    price: "₹" + 15802,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521621005/_QgQj4vYY-410521621005_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521621005/ihxwlhmi2W-410521621005_2_1.jpg",
  },
  {
    id: 3,
    title: "Men's London Model Black Liam Bag",
    price: "₹" + 14699,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521542002/ae6gYExXkv8-410521542002_3.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521542002/JxTrjrpTjIl-410521542002_1.jpg",
  },
  {
    id: 4,
    title: "Men's Model Black Style Okinawa Bag",
    price: "₹" + 14699,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521543001/eOaSRw9_pDF-410521543001_5.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521543001/GD5b1G8ijDU-410521543001_3.jpg",
  },
  {
    id: 5,
    title: "JMen's Full Sleeves Denim Capsule Blue Jacket",
    price: "₹" + 14221,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521745006/chnc_WVD_1-410521745006_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521745006/17elMmQNjn-410521745006_2_1.jpg",
  },
  {
    id: 6,
    title: "Men's Full Sleeves Logomania White Jacket ",
    price: "₹" + 14221,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521697003/lPHZxgHF52j-410521697003_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521697003/B8QnErcqiqS-410521697003_2_1.jpg",
  },
  {
    id: 7,
    title: "Men's Full Sleeves Logomania Black Jacket",
    price: "₹" + 14221,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521694003/IRrtCwaTgS-410521694003_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521694003/w3gxpVhgbuT-410521694003_2_1.jpg",
  },
  {
    id: 8,
    title: "Men's Black Model Barcelona Wallet",
    price: "₹" + 13999,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521680001/xnfownnah7-410521680001_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521680001/q6SIX1cdWD-410521680001_2.jpg",
  },
  {
    id: 9,
    title: "Men's Full Sleeves Urban Explorer Shirt",
    price: "₹" + 12999,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521688006/nH-eMn_GZ-410521688006_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521688006/Os1Q1zNp4s-410521688006_2_1.jpg",
  },
  {
    id: 10,
    title: "Men's Half Sleeves Artful Summer Shirt",
    price: "₹" + 13999,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521608005/y31IJ06jqIa-410521608005_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521608005/NKDle9CxLrH-410521608005_2_1.jpg",
  },
  {
    id: 11,
    title: "Men's J13 Slim Fit Light Blue Wash Jeans",
    price: "₹" + 13061,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521737006/TmS_fySPn-410521737006_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521737006/o3t6VTK6Pi-410521737006_2_1.jpg",
  },
  {
    id: 12,
    title: "Men's J13 Slim Fit Light Grey Wash Jeans",
    price: "₹" + 13061,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521753005/SZQNj0hs3LI-410521753005_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521753005/095-U076xRO-410521753005_2_1.jpg",
  },
  {
    id: 13,
    title: "Men's J83 Baggy Fit Bull Denim Jeans",
    price: "₹" + 11061,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521738006/e5JaRaVR-q-410521738006_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521742006/zRYbG_fGKm-410521742006_2_1.jpg",
  },
  {
    id: 14,
    title: "Men's J13 Slim Fit Medium Blue Wash Jeans",
    price: "₹" + 11061,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521684006/QbIzcCQc2d-410521684006_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521684006/LXLRP8nvwH-410521684006_2_1.jpg",
  },
  {
    id: 15,
    title: "Men's J13 Slim Fit Medium Blue Wash Jeans",
    price: "₹" + 13999,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521742006/pZh7jPs6iw-410521742006_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521738006/l1dZGR5Mm2-410521738006_2_1.jpg",
  },
  {
    id: 16,
    title: "Men's J13 Slim Fit Medium Blue Wash Jeans",
    price: "₹" + 13999,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521627005/hPlMzhFdVC-1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521627005/lJhim02vl3-2.jpg",
  },
  {
    id: 17,
    title: "Men's J87 Regular Utility Fit Blue Wash Jeans",
    price: "₹" + 11061,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521623014/Tmr3pxGr0u-XM000200_AF11882_UB101_F.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521623014/o-hXzOJWFh-XM000200_AF11882_UB101_D.jpg",
  },
  {
    id: 18,
    title: "Men's Dino Nero Messenger Bag ",
    price: "₹" + 13999,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410394379001/wG-ZSl73Ws-410394379001_5.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410310444001/xKe06O6mdxl-410310444001_2_1.jpg",
  },
  {
    id: 19,
    title: "Crossbody Bag With Shoulder Strap",
    price: "₹" + 10999,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410498896001/jmoSf6ONE-410498896001_5.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410498896001/wP38EpyQN-410498896001_6.jpg",
  },
  {
    id: 20,
    title: "Men's Full Sleeves AX Monogram Sweatshirt",
    price: "₹" + 10534,
    image:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521477006/AAkb8f7Z04p-410521477006_1_1.jpg",
    newimage:
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410521477006/2TqS79kgUBx-410521477006_2_1.jpg",
  },
];

let cart = [];
let cartcount = document.getElementById("cart-count");
const mainGrid=document.getElementById("mainGrid")

for (let i = 0; i < products.length; i++) {
  let sectionElement = document.createElement("section");
  let imgElement = document.createElement("img");
  let buttonElement = document.createElement("button");
  let section2Element = document.createElement("section");
  let titleElement = document.createElement("h3");
  let priceElement = document.createElement("p");
  let iconElement = document.createElement("i");

  // Add class names
  sectionElement.classList.add("product-card");
  imgElement.classList.add("product-image");
  buttonElement.classList.add("product-add-button");
  iconElement.classList.add("fa-solid", "fa-plus");
  section2Element.classList.add("product-details");
  titleElement.classList.add("product-title");
  priceElement.classList.add("product-price");

  //  Set contents
  imgElement.src = products[i].image;
  titleElement.textContent = products[i].title;
  priceElement.textContent = products[i].price;

  // Append structure
  sectionElement.appendChild(imgElement);
  sectionElement.appendChild(buttonElement);
  buttonElement.appendChild(iconElement);
  sectionElement.appendChild(section2Element);
  section2Element.appendChild(titleElement);
  section2Element.appendChild(priceElement);

  mainGrid.appendChild(sectionElement);

  imgElement.addEventListener("mouseover", function () {
    imgElement.src = products[i].newimage;
  });

  imgElement.addEventListener("mouseout", function () {
    imgElement.src = products[i].image;
  });

  // add event listener
  buttonElement.addEventListener("click", function () {
    let cartProduct = cart.findIndex(item => item.id === products[i].id);

    if (cartProduct === -1) {
      cart.push(products[i]);
      cartcount.textContent = cart.length;
      alert(`${products[i].title}added to bag!`);
      iconElement.classList.replace("fa-plus", "fa-check");
    }else{
      cart.splice(cartProduct, 1)
        cartcount.textContent = cart.length;
      alert(`${products[i].title}lessed the bag!`);
iconElement.classList.replace("fa-check", "fa-plus");

    }
    cartcount.textContent=cart.length;
  });
}

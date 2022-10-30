const products = [
    { 
        id:"products1",
        url: 'https://honasa-mamaearth-production.imgix.net/_/m/_milky-soft-body-lotion__1.jpg?auto=compress&fit=scale&w=400&h=400', 
        detailUrl: 'https://honasa-mamaearth-production.imgix.net/_/m/_milky_soft_face_cream_.jpg?auto=format&fit=crop&w=768&auto=compress',
        title: 'Milky Soft Face Cream With Murumuru Butter for Babies, 60 ml', 
        price: 199,
        description: "With the goodness of Almond Oil and Murumuru Butter, I moisturize baby's delicate skin and protect it from dryness by forming a skin barrier. Milk protein in me locks in the moisture and soothes baby's delicate skin",
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id:"products2",
        url: 'https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_2.jpg?auto=compress&fit=scale&w=400&h=400', 
        detailUrl: 'https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_2.jpg?auto=format&fit=crop&w=768&auto=compress',
        title: 'Ubtan Face Wash with Turmeric & Saffron for Tan Removal – 150 ml',
        price:499,
        description: 'Pamper your skin with the age-old tradition of Ubtan and let your dull, tanned skin rejuvenate and feel fresh & bright. Undo the effects of tan, pollution, dirt, harmful UV rays, and harsh weather conditions with Mamaearth Ubtan Face Wash.',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
         id:"products3",
        url: 'https://mmrth-mg-cs.honasa-production.net/pub/media/catalog/product/a/r/artboard_2_13.jpg?auto=compress&fit=scale&w=400&h=400', 
        detailUrl: 'https://honasa-mamaearth-production.imgix.net/a/r/artboard_2_13.jpg?auto=format&fit=crop&w=768&auto=compress', 
        title: 'Glow Serum Foundation-Nude Glow', 
        price: 599,
        description: 'Haven’t found the right match yet? It’s time to meet Mamaearth Glow Serum Foundation that gives your skin 2X instant glow & buildable coverage that lasts for up to 12 hours! It’s crafted with natural ingredients, which means you get a zing of color and a dollop of care.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
         id:"products4",
        url: 'https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400', 
        detailUrl: 'https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=format&fit=crop&w=768&auto=compress',
        title: 'Onion Hair Oil for Hair Regrowth and Hair Fall Control with Redensyl, 150ml', 
        price: 499,
        description: 'Introducing your favorite Mamaearth Onion Hair Oil with a new & improved formula for even stronger, smoother, and shinier hair. With its lightweight and non-sticky formulation and oh-so-good fragrance, this natural and toxin-free hair loss oil helps you have stronger and healthier hair with the Goodness of Nature',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
         id:"products5",
        url: 'https://honasa-mamaearth-production.imgix.net/v/i/vit-c-glow-cream_1_1.jpg?auto=compress&fit=scale&w=400&h=400',
        detailUrl: 'https://honasa-mamaearth-production.imgix.net/v/i/vit-c-glow-cream_1_1.jpg?auto=format&fit=crop&w=768&auto=compress', 
        title: 'Vitamin C Daily Glow Face Cream - 80 g - Pack of 2', 
        price: 899,
        description: 'Glow & behold! With Mamaearth Vitamin C Daily Glow Face Cream, say hello to radiant and luminous skin everyday! Crafted with the goodness of Vitamin C, the face cream is loaded with antioxidants and helps fight free radical damage. It illuminates your skin, boosts collagen production, and reduces pigmentation resulting in radiant & healthy skin. ',
        discount: 'From ₹499', 
        tagline: 'Hurry up' 
    },
    { 
        id:"products6",
       url: 'https://honasa-mamaearth-production.imgix.net/m/e/me-deodorant_2.jpg?auto=compress&fit=scale&w=400&h=400',
       detailUrl: 'https://honasa-mamaearth-production.imgix.net/m/e/me-deodorant_2.jpg?auto=format&fit=crop&w=768&auto=compress', 
       title: 'ME Aqua Deodorant - 120 ml', 
       price: 899,
       description: 'Have a thing for fresh and crisp scents? We do too! Time to wave goodbye to body odor and say aloha to Mamaearth ME Aqua Deodorant. Capturing the essence of a joyful day by the sea, it keeps you smelling fresh and cool for up to 8 hours. ',
       discount: '40%', 
       tagline: 'Hurry up' 
   },
   { 
    id:"products7",
   url: 'https://honasa-mamaearth-production.imgix.net/f/l/floral-e.com-1_1_1.jpg?auto=compress&fit=scale&w=400&h=400',
   detailUrl: 'https://honasa-mamaearth-production.imgix.net/f/l/floral-e.com-1_1_1.jpg?auto=format&fit=crop&w=768&auto=compress', 
   title: 'ME Floral Eau De Parfum - Live in the Moment - 50 ml', 
   price: 699,
   description: 'Glow & behold! With Mamaearth Vitamin C Daily Glow Face Cream, say hello to radiant and luminous skin everyday! Crafted with the goodness of Vitamin C, the face cream is loaded with antioxidants and helps fight free radical damage. It illuminates your skin, boosts collagen production, and reduces pigmentation resulting in radiant & healthy skin. ',
   discount: 'From ₹224', 
   tagline: 'Hurry up' 
},
{ 
    id:"products8",
   url: 'https://honasa-mamaearth-production.imgix.net/h/o/honey-malai-cold-cream_1.jpg?auto=compress&fit=scale&w=400&h=400',
   detailUrl: 'https://honasa-mamaearth-production.imgix.net/h/o/honey-malai-cold-cream_1.jpg?auto=format&fit=crop&w=768&auto=compress', 
   title: 'Honey Malai Cold Cream with Honey & Malai For Nourishing Glow - 200 g', 
   price: 899,
   description: 'Glow & behold! With Mamaearth Vitamin C Daily Glow Face Cream, say hello to radiant and luminous skin everyday! Crafted with the goodness of Vitamin C, the face cream is loaded with antioxidants and helps fight free radical damage. It illuminates your skin, boosts collagen production, and reduces pigmentation resulting in radiant & healthy skin. ',
   discount: 'From ₹499', 
   tagline: 'Hurry up' 
},
{ 
    id:"products9",
   url: 'https://honasa-mamaearth-production.imgix.net/h/o/honey-malai-body-lotion1.jpg?auto=compress&fit=scale&w=400&h=400',
   detailUrl: 'https://honasa-mamaearth-production.imgix.net/h/o/honey-malai-body-lotion1.jpg?auto=format&fit=crop&w=768&auto=compress', 
   title: 'Honey Malai Body Lotion with Honey & Malai for Nourishing Glow - 400 ml', 
   price: 499,
   description: 'Glow & behold! With Mamaearth Vitamin C Daily Glow Face Cream, say hello to radiant and luminous skin everyday! Crafted with the goodness of Vitamin C, the face cream is loaded with antioxidants and helps fight free radical damage. It illuminates your skin, boosts collagen production, and reduces pigmentation resulting in radiant & healthy skin. ',
   discount: 'From ₹324', 
   tagline: 'Hurry up' 
},
{ 
    id:"products10",
   url: 'https://honasa-mamaearth-production.imgix.net/o/i/oil-free-fw-1.jpg?auto=compress&fit=scale&w=400&h=400',
   detailUrl: 'https://honasa-mamaearth-production.imgix.net/o/i/oil-free-fw-1.jpg?auto=format&fit=crop&w=768&auto=compress', 
   title: 'Oil-Free Face Wash with Apple Cider Vinegar & Salicylic Acid for Acne-Prone Skin– 250 ml', 
   price:899,
   description: 'Glow & behold! With Mamaearth Vitamin C Daily Glow Face Cream, say hello to radiant and luminous skin everyday! Crafted with the goodness of Vitamin C, the face cream is loaded with antioxidants and helps fight free radical damage. It illuminates your skin, boosts collagen production, and reduces pigmentation resulting in radiant & healthy skin. ',
   discount: 'From ₹624', 
   tagline: 'Hurry up' 
},
{ 
    id:"products11",
   url: 'https://honasa-mamaearth-production.imgix.net/u/b/ubtan-facial-kit_1_1.jpg?auto=compress&fit=scale&w=400&h=400',
   detailUrl: 'https://honasa-mamaearth-production.imgix.net/u/b/ubtan-facial-kit_1_1.jpg?auto=format&fit=crop&w=768&auto=compress', 
   title:'Ubtan Facial Kit with Turmeric & Saffron for Glowing Skin - 60 g', 
   price: 899,
   description: 'Glow & behold! With Mamaearth Vitamin C Daily Glow Face Cream, say hello to radiant and luminous skin everyday! Crafted with the goodness of Vitamin C, the face cream is loaded with antioxidants and helps fight free radical damage. It illuminates your skin, boosts collagen production, and reduces pigmentation resulting in radiant & healthy skin. ',
   discount: 'From ₹650', 
   tagline: 'Hurry up' 
},
{ 
    id:"products12",
   url: 'https://honasa-mamaearth-production.imgix.net/g/r/green-tea-face-serum_1.jpg?auto=compress&fit=scale&w=400&h=400',
   detailUrl: 'https://honasa-mamaearth-production.imgix.net/g/r/green-tea-face-serum_1.jpg?auto=format&fit=crop&w=768&auto=compress', 
   title: 'Green Tea Face Serum With Green Tea & Collagen For Open Pores - 30 ml', 
   price:699,
   description: 'Glow & behold! With Mamaearth Vitamin C Daily Glow Face Cream, say hello to radiant and luminous skin everyday! Crafted with the goodness of Vitamin C, the face cream is loaded with antioxidants and helps fight free radical damage. It illuminates your skin, boosts collagen production, and reduces pigmentation resulting in radiant & healthy skin. ',
   discount: 'From ₹424', 
   tagline: 'Hurry up' 
}
];

module.exports = products;
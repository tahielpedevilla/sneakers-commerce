const mock = [
  {
    id: 1,
    category: "Men",
    model: "Fall Limited Edition Snakers",
    brand: "Snaker Company",
    description:
      "These low-profile, high-heel shoes are perfect for a night on the town. They're made of a thick, durable leather and have a classic design that's easy to slip on.",
    price: 125,
    oldPrice: 250,
    off: 50,
    stock: 7,
    images: [
      "../src/public/assets/image-product-1.jpg",
      "../src/public/assets/image-product-2.jpg",
      "../src/public/assets/image-product-3.jpg",
      "../src/public/assets/image-product-4.jpg",
    ],
    thumbnails: [
      "../src/public/assets/image-product-1-thumbnail.jpg",
      "../src/public/assets/image-product-2-thumbnail.jpg",
      "../src/public/assets/image-product-3-thumbnail.jpg",
      "../src/public/assets/image-product-4-thumbnail.jpg",
    ],
  },
  {
    id: 2,
    category: "Men",
    model: "Summer Limited Edition Snakers",
    brand: "Lucky Snaker Company",
    description:
      "Like the fall edition, these high-heel shoes are made of a thick, durable leather and have a classic design that's easy to slip on.",
    price: 99,
    oldPrice: 120,
    off: 30,
    stock: 14,
    images: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ca25723-abd6-4dc7-af8b-a2711aee4c1d/calzado-de-b%C3%A1squetbol-air-jordan-36-9BKHpw.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ca25723-abd6-4dc7-af8b-a2711aee4c1d/calzado-de-b%C3%A1squetbol-air-jordan-36-9BKHpw.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ca25723-abd6-4dc7-af8b-a2711aee4c1d/calzado-de-b%C3%A1squetbol-air-jordan-36-9BKHpw.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ca25723-abd6-4dc7-af8b-a2711aee4c1d/calzado-de-b%C3%A1squetbol-air-jordan-36-9BKHpw.png",
    ],
    thumbnails: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ca25723-abd6-4dc7-af8b-a2711aee4c1d/calzado-de-b%C3%A1squetbol-air-jordan-36-9BKHpw.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ca25723-abd6-4dc7-af8b-a2711aee4c1d/calzado-de-b%C3%A1squetbol-air-jordan-36-9BKHpw.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ca25723-abd6-4dc7-af8b-a2711aee4c1d/calzado-de-b%C3%A1squetbol-air-jordan-36-9BKHpw.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ca25723-abd6-4dc7-af8b-a2711aee4c1d/calzado-de-b%C3%A1squetbol-air-jordan-36-9BKHpw.png",
    ],
  },
  {
    id: 3,
    category: "Men",
    model: "Summer Limited Edition Snakers",
    brand: "Lucky Snaker Company",
    description:
      "Like the fall edition, these high-heel shoes are made of a thick, durable leather and have a classic design that's easy to slip on.",
    price: 99,
    oldPrice: 120,
    off: 30,
    stock: 14,
    images: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c48cf0b-be56-4d3b-a86f-7a099ccdc67f/calzado-de-b%C3%A1squetbol-cosmic-unity-jM1cCf.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c48cf0b-be56-4d3b-a86f-7a099ccdc67f/calzado-de-b%C3%A1squetbol-cosmic-unity-jM1cCf.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c48cf0b-be56-4d3b-a86f-7a099ccdc67f/calzado-de-b%C3%A1squetbol-cosmic-unity-jM1cCf.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2c48cf0b-be56-4d3b-a86f-7a099ccdc67f/calzado-de-b%C3%A1squetbol-cosmic-unity-jM1cCf.png",
    ],
    thumbnails: [
      "src/assets/image-product-1-thumbnail.jpg",
      "src/assets/image-product-2-thumbnail.jpg",
      "src/assets/image-product-3-thumbnail.jpg",
      "src/assets/image-product-4-thumbnail.jpg",
    ],
  },
  {
    id: 4,
    category: "Men",
    model: "Summer Limited Edition Snakers",
    brand: "Lucky Snaker Company",
    description:
      "Like the fall edition, these high-heel shoes are made of a thick, durable leather and have a classic design that's easy to slip on.",
    price: 99,
    oldPrice: 120,
    off: 30,
    stock: 14,
    images: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0901641-168a-47da-892e-bc8bde42c08e/calzado-de-b%C3%A1squetbol-pg-6-nrg-9p0Cmf.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0901641-168a-47da-892e-bc8bde42c08e/calzado-de-b%C3%A1squetbol-pg-6-nrg-9p0Cmf.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0901641-168a-47da-892e-bc8bde42c08e/calzado-de-b%C3%A1squetbol-pg-6-nrg-9p0Cmf.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0901641-168a-47da-892e-bc8bde42c08e/calzado-de-b%C3%A1squetbol-pg-6-nrg-9p0Cmf.png",
    ],
    thumbnails: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0901641-168a-47da-892e-bc8bde42c08e/calzado-de-b%C3%A1squetbol-pg-6-nrg-9p0Cmf.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0901641-168a-47da-892e-bc8bde42c08e/calzado-de-b%C3%A1squetbol-pg-6-nrg-9p0Cmf.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0901641-168a-47da-892e-bc8bde42c08e/calzado-de-b%C3%A1squetbol-pg-6-nrg-9p0Cmf.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0901641-168a-47da-892e-bc8bde42c08e/calzado-de-b%C3%A1squetbol-pg-6-nrg-9p0Cmf.png",
    ],
  },
  {
    id: 5,
    category: "Women",
    model: "Fall Limited Edition Snakers",
    brand: "Snaker Company",
    description:
      "These low-profile, high-heel shoes are perfect for a night on the town. They're made of a thick, durable leather and have a classic design that's easy to slip on.",
    price: 125,
    oldPrice: 250,
    off: 50,
    stock: 7,
    images: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40e034c5-163e-4ba7-a7e9-90e0991238a4/calzado-de-entrenamiento-hiit-air-zoom-superrep-2-cqM5vC.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40e034c5-163e-4ba7-a7e9-90e0991238a4/calzado-de-entrenamiento-hiit-air-zoom-superrep-2-cqM5vC.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40e034c5-163e-4ba7-a7e9-90e0991238a4/calzado-de-entrenamiento-hiit-air-zoom-superrep-2-cqM5vC.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40e034c5-163e-4ba7-a7e9-90e0991238a4/calzado-de-entrenamiento-hiit-air-zoom-superrep-2-cqM5vC.png",
    ],
    thumbnails: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40e034c5-163e-4ba7-a7e9-90e0991238a4/calzado-de-entrenamiento-hiit-air-zoom-superrep-2-cqM5vC.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40e034c5-163e-4ba7-a7e9-90e0991238a4/calzado-de-entrenamiento-hiit-air-zoom-superrep-2-cqM5vC.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40e034c5-163e-4ba7-a7e9-90e0991238a4/calzado-de-entrenamiento-hiit-air-zoom-superrep-2-cqM5vC.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40e034c5-163e-4ba7-a7e9-90e0991238a4/calzado-de-entrenamiento-hiit-air-zoom-superrep-2-cqM5vC.png",
    ],
  },
  {
    id: 6,
    category: "Women",
    model: "Summer Limited Edition Snakers",
    brand: "Lucky Snaker Company",
    description:
      "Like the fall edition, these high-heel shoes are made of a thick, durable leather and have a classic design that's easy to slip on.",
    price: 99,
    oldPrice: 120,
    off: 30,
    stock: 14,
    images: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec0f4ca7-3193-4ab1-9279-de1d11285cc1/calzado-de-entrenamiento-metcon-7-0l6Psg.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec0f4ca7-3193-4ab1-9279-de1d11285cc1/calzado-de-entrenamiento-metcon-7-0l6Psg.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec0f4ca7-3193-4ab1-9279-de1d11285cc1/calzado-de-entrenamiento-metcon-7-0l6Psg.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec0f4ca7-3193-4ab1-9279-de1d11285cc1/calzado-de-entrenamiento-metcon-7-0l6Psg.png",
    ],
    thumbnails: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec0f4ca7-3193-4ab1-9279-de1d11285cc1/calzado-de-entrenamiento-metcon-7-0l6Psg.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec0f4ca7-3193-4ab1-9279-de1d11285cc1/calzado-de-entrenamiento-metcon-7-0l6Psg.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec0f4ca7-3193-4ab1-9279-de1d11285cc1/calzado-de-entrenamiento-metcon-7-0l6Psg.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec0f4ca7-3193-4ab1-9279-de1d11285cc1/calzado-de-entrenamiento-metcon-7-0l6Psg.png",
    ],
  },
  {
    id: 7,
    category: "Women",
    model: "Summer Limited Edition Snakers",
    brand: "Lucky Snaker Company",
    description:
      "Like the fall edition, these high-heel shoes are made of a thick, durable leather and have a classic design that's easy to slip on.",
    price: 99,
    oldPrice: 120,
    off: 30,
    stock: 14,
    images: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef340638-2c7e-48d4-a805-17334a1ef4ec/custom-nike-metcon-7-by-you.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef340638-2c7e-48d4-a805-17334a1ef4ec/custom-nike-metcon-7-by-you.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef340638-2c7e-48d4-a805-17334a1ef4ec/custom-nike-metcon-7-by-you.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef340638-2c7e-48d4-a805-17334a1ef4ec/custom-nike-metcon-7-by-you.png",
    ],
    thumbnails: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef340638-2c7e-48d4-a805-17334a1ef4ec/custom-nike-metcon-7-by-you.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef340638-2c7e-48d4-a805-17334a1ef4ec/custom-nike-metcon-7-by-you.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef340638-2c7e-48d4-a805-17334a1ef4ec/custom-nike-metcon-7-by-you.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ef340638-2c7e-48d4-a805-17334a1ef4ec/custom-nike-metcon-7-by-you.png",
    ],
  },
  {
    id: 8,
    category: "Women",
    model: "Summer Limited Edition Snakers",
    brand: "Lucky Snaker Company",
    description:
      "Like the fall edition, these high-heel shoes are made of a thick, durable leather and have a classic design that's easy to slip on.",
    price: 99,
    oldPrice: 120,
    off: 30,
    stock: 14,
    images: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdrcreeysdfu9uc9dcwd/calzado-para-el-gimnasio-hiit-y-cross-training-free-tr8-9O38Er.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdrcreeysdfu9uc9dcwd/calzado-para-el-gimnasio-hiit-y-cross-training-free-tr8-9O38Er.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdrcreeysdfu9uc9dcwd/calzado-para-el-gimnasio-hiit-y-cross-training-free-tr8-9O38Er.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdrcreeysdfu9uc9dcwd/calzado-para-el-gimnasio-hiit-y-cross-training-free-tr8-9O38Er.png",
    ],
    thumbnails: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdrcreeysdfu9uc9dcwd/calzado-para-el-gimnasio-hiit-y-cross-training-free-tr8-9O38Er.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdrcreeysdfu9uc9dcwd/calzado-para-el-gimnasio-hiit-y-cross-training-free-tr8-9O38Er.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdrcreeysdfu9uc9dcwd/calzado-para-el-gimnasio-hiit-y-cross-training-free-tr8-9O38Er.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdrcreeysdfu9uc9dcwd/calzado-para-el-gimnasio-hiit-y-cross-training-free-tr8-9O38Er.png",
    ],
  },
];

export default mock;

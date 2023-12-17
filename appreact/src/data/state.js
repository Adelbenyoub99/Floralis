const state = {
    navigation: [
        {
          id: 1,
          path: "/",
          label: "Accueil",
        },
        {
          id: 2,
          path: "/bouquets",
          label: "Bouquets",
        },
        {
          id: 3,
          path: "/fleurs",
          label: "Fleurs",
        },
        {
          id: 4,
          path: "/compte",
          label: "Mon Compte",
        },
      ],
      slides: [
        {
          id: 1,
          image: "/img/sl1.jpg",
          titre: "Evenement",
          sousTitre:
            "Créez des souvenirs parfumés avec nos bouquets uniques. Votre bonheur, notre inspiration",
          class: "carousel-item active",
        },
        {
          id: 2,
          image: "/img/sl2.png",
          titre: "Personalisé",
          sousTitre: "Offrez-la pour déclarer vos sentiments les plus profonds.",
          class: "carousel-item",
        },
        {
          id: 3,
          image: "/img/sl3.png",
          titre: "Décoration d'interieur",
          sousTitre:
            "Élevez votre intérieur avec l'élégance florale. Des arrangements qui racontent votre histoire, disponibles",
          class: "carousel-item",
        },
      ],
mesBouquets: [
      {
        id:1,
        nom:'Bouquet de Tunis',
        descr:'Un dosage parfait de jasmins et de tulipes, des coulers éclatantes et du soleil toute l\'année chez vous',
        image:"/img/b1-white.png",
        prix:'1500.00',
        like:false,
        nbLike:0
      },
      {
        id:2,
        nom:'Bouquet d\'Alger',
        descr:'Un dosage parfait de jasmins et de tulipes, des coulers éclatantes et du soleil toute l\'année chez vous',
        image:"/img/b1-red.png",
        prix:"2000.00",
        like:false,
        nbLike:0
      },
      {
        id:3,
        nom:'Bouquet d\'Oran',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"/img/Blys.jpg",
        prix:"900.00",
        like:false,
        nbLike:0
      },
      {
        id:4,
        nom:'Bouquet de Béjaia',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"/img/Bjasmin.jpg",
        prix:"1600.00",
        like:false,
        nbLike:0
      },
      {
        id:5,
        nom:'Bouquet de Sétif',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"/img/b1-pink.png",
        prix:"2500.00",
        like:false,
        nbLike:0
      },
      {
        id:6,
        nom:'Bouquet de Constantine',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"/img/b2-red.png",
        prix:"2800.00",
        like:false,
        nbLike:0
      }
    ],
Fleurs: [
      {
        id:1,
        nom:'Fleur de Tunis',
        descr:'Un dosage parfait de jasmins et de tulipes, des coulers éclatantes et du soleil toute l\'année chez vous',
        image:"/img/c_Pink.jpg",
        
      },
      {
        id:2,
        nom:'Fleur d\'Alger',
        descr:'Un dosage parfait de jasmins et de tulipes, des coulers éclatantes et du soleil toute l\'année chez vous',
        image:"/img/c_Red.jpg",
      
      },
      {
        id:3,
        nom:'Fleur d\'Oran',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"/img/c_White.jpg",
      
      },
      {
        id:4,
        nom:'Fleur de Béjaia',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"/img/c_Yellow.jpg",
        
      },
      {
        id:5,
        nom:'Fleur de Sétif',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"/img/jasmin.jpg",
       
      },
      {
        id:6,
        nom:'Fleur de Constantine',
        descr:'Un mélange merveilleux de roses et de lys,des odeurs et des couleurs qui exhale un doux parfum.',
        image:"/img/lys.jpg",

      }
    ]

}
module.exports = state;
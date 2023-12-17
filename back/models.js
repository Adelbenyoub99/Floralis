const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

const Bouquets = sequelize.define('Bouquets', {
  idbouquet: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    
    allowNull: false, 
    autoIncrement: true 
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descr:{
    type: DataTypes.STRING,
    allowNull: false 
  },
  image:{
    type: DataTypes.STRING,
    allowNull: false 
  },
});
const Fleurs = sequelize.define('Fleurs', {
  idfleur: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
   
    allowNull: false, 
    autoIncrement: true 
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descr:{
    type: DataTypes.STRING,
    allowNull: false 
  },
  image:{
    type: DataTypes.STRING,
    allowNull: false 
  },
  prix: {
    type: DataTypes.DOUBLE,
    defaultValue: 0, 
    allowNull: false, 
    validate: {
      min: 0, 
    }
  },
});
const Users = sequelize.define('Users', {
  login: {
    type: DataTypes.STRING,
    primaryKey: true, 
   
    allowNull: false
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false 
  },
});
const Likes = sequelize.define('Likes', {
  idlike: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,

  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'User',
      key: 'login'
    }
  },
  idbouquet: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Bouquet',
      key: 'idbouquet'
    }
  },
});
const Composers = sequelize.define('Composers', {
  idbouquet: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'Bouquet',
      key: 'idbouquet'
    }
  },
  idfleur: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'Fleur',
      key: 'idfleur'
    }
  },
  quantite: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});



 
Users.hasMany(Likes, { foreignKey: 'login' });
Bouquets.hasMany(Likes, { foreignKey: 'idbouquet' });
Bouquets.belongsToMany(Fleurs, { through: Composers, foreignKey: 'idbouquet' });
Fleurs.belongsToMany(Bouquets, { through: Composers, foreignKey: 'idfleur' });


/*
const bouquet1= Bouquets.create({nom:"tulipe-lavande",descr:"image bouquet 3",image:"./img/c_white.jpg"})



const fleur1 = Fleurs.create({nom:"tulipe",descr:"image fleur 1",image:"./img/tulipe.jpg",prix:"1000.00"})
const fleur2 = Fleurs.create({nom:"lys",descr:"image fleur 2",image:"./img/lys.jpg",prix:"1000.00"})
const fleur3 = Fleurs.create({nom:"jasmin",descr:"image fleur 3",image:"./img/jasmin.jpg",prix:"1000.00"})
const fleur4 = Fleurs.create({nom:"rose",descr:"image fleur 4",image:"./img/rose.jpg",prix:"1000.00"})
const fleur5 = Fleurs.create({nom:"lavande",descr:"image fleur 5",image:"./img/red.jpg",prix:"1000.00"})



const user = Users.create({login:"user1@gmail.com",pass:"passuser",nom:"nomuser",prenom:"prenomuser"})



const like = Likes.create({login:"user1@gmail.com",idbouquet:"1"})

*/

const insert = async ()=> {
Bouquets.create({nom:"tulipe-lavande",descr:"image bouquet 3",image:"./img/c_white.jpg"})
Fleurs.create({nom:"tulipe",descr:"image fleur 1",image:"./img/tulipe.jpg",prix:"1000.00"})
Fleurs.create({nom:"lys",descr:"image fleur 2",image:"./img/lys.jpg",prix:"1000.00"})
Fleurs.create({nom:"jasmin",descr:"image fleur 3",image:"./img/jasmin.jpg",prix:"1000.00"})
Fleurs.create({nom:"rose",descr:"image fleur 4",image:"./img/rose.jpg",prix:"1000.00"})
Fleurs.create({nom:"lavande",descr:"image fleur 5",image:"./img/red.jpg",prix:"1000.00"})
  
  
  
  
  

  const bouquetId = 1; // ID du bouquet existant
  const fleurIdsToAdd = [1, 5]; // Tableau contenant les IDs des fleurs à ajouter
  
  const bouquet = await Bouquets.findByPk(bouquetId);
  const fleursToAdd = await Fleurs.findAll({ where: { idfleur: fleurIdsToAdd } });
  
  if (bouquet && fleursToAdd.length > 0) {
    await bouquet.addFleurs(fleursToAdd);
    console.log('Fleurs ajoutées au bouquet avec succès!');
  } else {
    console.log('Bouquet ou fleurs non trouvés.');
  }

}

const connectToDb = async () => {

  try {
      await sequelize.authenticate();
      console.log('Connection a la base de donnée réussi.');
      await sequelize.sync({force: false})
      insert();
      console.log('Tables syncroniser.');

  } catch (error) {
      console.error('Echec connexion a la BDD:', error);
  }


}
const test = async () => {
  const bouquet = await Bouquets.findAll();
  const fleur = await Fleurs.findAll();
  const user = await Users.findAll();
  const like = await Likes.findAll();
  const composer = await Composers.findAll();

  return bouquet, fleur, user, like, composer;

}



module.exports = {connectToDb,test,Fleurs,Bouquets};

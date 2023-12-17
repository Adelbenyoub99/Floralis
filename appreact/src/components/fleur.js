import { useState } from "react";

const Fleur = (props) => {
  const [like, setLike] = useState(false);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/fleurs/like/${props.fleurs.id}`, {
        method: 'PUT',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        setLike(!like);
      } else {
        console.error('Échec de la mise à jour du statut "like"');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };


  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4 container d-flex justify-content-center align-items-center">
        <div className="card">
          <img src={props.fleur.image} className="card-image" alt="Image bouquet" />
          <div className="card-body">
            <h5 className="card-title">{props.fleur.nom}</h5>
            <p className="card-text">{props.fleur.descr}</p>

              
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Fleur;

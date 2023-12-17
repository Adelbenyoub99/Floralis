import { useState } from "react";

const Bouquet = (props) => {
  const [like, setLike] = useState(props.bouquet.like);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/bouquets/like/${props.bouquet.id}`, {
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
          <img src={props.bouquet.image} className="card-image" alt="Image bouquet" />
          <div className="card-body">
            <h5 className="card-title">{props.bouquet.nom}</h5>
            <p className="card-text">{props.bouquet.descr}</p>
            <div className="d-flex justify-content-between align-items-end">
              <h5 className="col-md-6">prix: {props.bouquet.prix}</h5>
              <div>

                <button
                className={like ? "btn-liked m-auto" : "btn btn-color m-auto"}
                onClick={handleLike} 
              >
                {like ? "Liked" : "Like"}
              </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bouquet;

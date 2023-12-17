export default function Slider() {
const state={slides: [
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
]}
  return (
    <>
    <div class="slide">
      <div className="row">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {state.slides.map((slide) => (
              <div key={slide.id}>
                <div className={slide.class} data-bs-interval="1000">
                  <div className="container-fluid d-flex justify-content-center align-items-center">
                    <img
                      src={slide.image}
                      className="img-fluid "
                      alt="..."
                      width="100%"                    />
                  </div>
                  <div className="carousel-caption  d-md-block">
                    <h2>{slide.titre}</h2>
                    <p className="lead fst-italic soustitre">{slide.sousTitre} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
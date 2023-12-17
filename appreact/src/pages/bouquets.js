import Bouquet from "../components/bouquet";

export default function Bouquets(props) {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center p-4 mt-4">
        <h1>Nos Bouquets</h1>
        </div>
      <div className="container">
        <div className="row">
          {props.bouquets.map((bouquet) => (
            <Bouquet key={bouquet.id} bouquet={bouquet} />
          ))}
        </div>
      </div>
    </>
  );
}

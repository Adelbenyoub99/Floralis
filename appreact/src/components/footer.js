export default function Footer() {
    return (
      <footer className="bg-color p-4 mt-4 fixed bottom-0">
        <div className="container">
          <div className="row">
          <div class="col-md-4 text-center">
              <h5>E-mail</h5>
              <p>contact.floralis@gmail.com</p>
            </div>
            <div class="col-md-4 text-center">
              <h5>Adresse</h5>
              <p>Targa ouzemmour, Béjaia</p>
            </div>
            <div class="col-md-4 text-center">
              <h5>Téléphone</h5>
              <p>+213 617896523</p>
            </div>
          </div>
          <hr class="footer-divider"/>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; Floralis BENYOUB 2023. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }; 
  
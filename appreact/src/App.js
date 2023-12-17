import NavBar from "./components/nav";
import Bouquets from "./pages/bouquets";
import Home from "./pages/home";
import Compte from "./pages/compte";
import Footer from "./components/footer";
import state from "./data/state";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useEffect,useState } from "react";
import Fleurs from "./pages/fleurs";
import getdata from "./fetch";
function App() {
  const [mesBouquets, setMesBouquets] = useState();
  const[DBfleurs,setDBfleurs]=useState([])
  const[DBBouquet,setDBBouquet]=useState([])
  useEffect(() => {
    const fetchFleurs = async () => {
      try {
        const data = await getdata('/fleur', 'GET');
        setDBfleurs(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching bouquets:', error.message);
      }
    };
    const fetchBouquet = async () => {
      try {
        const data = await getdata('/bouquet', 'GET');
        setDBBouquet(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching bouquets:', error.message);
      }
    };
    fetchBouquet()
    fetchFleurs();
  }, []);

  
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bouquets" element={<Bouquets bouquets={DBBouquet}/>} />
          <Route path="/fleurs" element={<Fleurs fleurs={DBfleurs}/>} /> 
          <Route path="/compte" element={<Compte/>} /> 

        </Routes>
      <Footer />
      </BrowserRouter>      
   </div>
  );
}

export default App;

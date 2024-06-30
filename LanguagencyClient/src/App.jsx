
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './Components/NavBar';
import Languagency from './Components/Languagency';
import ImageSlider from './Components/ImageSlider';
import Slogan from './Components/Slogan';
import Learning from './Components/Learning';
import Fact from './Components/Fact';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import { useEffect } from 'react';
// import Footer from './Components/Footer';
import axios from "axios";


function App() {

  // const [contentArray, setContentArray] = useState([]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setContentArray([])
  //       const response = await axios.get("http://localhost:3000/");
  //       if (Array.isArray(response.data)) {
  //         setContentArray(response.data);
  //       } else if (response.data && Array.isArray(response.data.data)) {
  //         setContentArray(response.data.data);
  //       } else {
  //         console.log("Invalid response format:", response.data);
  //       }
  //     } catch (error) {
  //       console.log(`There is an error while fetching data from server: ${error}`);
  //     }
  //   };
  
  //   fetchData();
  // }, []);


  return (
    <>
    {/* < NavBar /> */}
    < Languagency />
    < ImageSlider />
    < Slogan />
    <Learning />
    < Fact />
    < Services />
    <Testimonials />
    {/* < Footer /> */}
    </>
  )
}

export default App

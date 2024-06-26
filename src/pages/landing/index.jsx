import Navbar from "../../components/navbar"
import About from "./components/about"
import Blog from "./components/blog"
import Collection from "./components/collection"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Production from "./components/production"
import Services from "./components/services"
import Statistics from "./components/statistics"
import Testimonial from "./components/testimonial"

const LandingPage = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Collection/>
    <Statistics/>
    <Testimonial/>
    <Production/>
    <Blog/>
    <Footer/>

    </div>
  )
  
}

export default LandingPage
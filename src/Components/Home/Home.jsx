import Header from "../Banner/Banner";
import Cards from "../Cards/Cards";
import ContactMe from "../ContactMe/ContactMe";
import OurProducts from "../OurProducts/OurProducts";

const Home = () => {

    return (
        <div>
          <Header></Header>
          <Cards/>
          <OurProducts/>
          <ContactMe/>
        </div>
    );
};

export default Home;

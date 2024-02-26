import Banner from "./Banner/Banner";
import BannerExtraSection from "./BannerExtraSection/BannerExtraSection";
import Footer from "./Footer/Footer";
import NewBook from "./NewBook/NewBook";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BannerExtraSection></BannerExtraSection>
           <NewBook></NewBook>
           <Footer></Footer>
        </div>
    );
};

export default Home;
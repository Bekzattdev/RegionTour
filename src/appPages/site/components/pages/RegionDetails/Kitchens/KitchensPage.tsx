import PlacesDetail from "../PlacesDetail";
import ReviewDetails from "../ReviewDetails";
import WelcomeDetails from "../WelcomeDetails";
import Restauran from "./Restauran";
import RestauranDetails from "./RestauranDetails";

const KitchensPage = () => {
    return (
        <>
         <WelcomeDetails/>   
         <Restauran/>
         <RestauranDetails/>
         <ReviewDetails/>
         <PlacesDetail/>
        </>
    );
};

export default KitchensPage;
import logo from "./logo.svg";
import "./App.css";
import FullName from "./Profil/Composant/FullName";
import Profession from "./Profil/Composant/Profession";
import Bio from "./Profil/Composant/Bio";
import Dali from "./Profil/Composant/Dali";

function App() {
    const bio = "Mohamed Ali Touil est né le 11 aut 1990 à Mahdia (Tunisia) ";
    const img =
        "https://prod.bravebooking.net/clients/TT69312/media/photos/hotellocal/237459/Thapsus_Club_59.jpg";
    return (
        <div className="App">
            <Dali />
            <Profession img={img} />
            <FullName fullname="Mohamed Ali Touil" />

            <Bio bio={bio} />
        </div>
    );
}

export default App;

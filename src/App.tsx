import "./App.css";
import "./styles/navbar.css";
import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/Introduction/IntroSection";


import RoleSection from "./components/Role/RoleSection";

function App() {
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <Navbar />
        {/* Intro Div */}

        <IntroSection />

        <RoleSection />
      </main>
    </>
  );
}

export default App;

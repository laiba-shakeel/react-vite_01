import "./App.css";
import Header from "./Components/Header/Header";
import SectionImageContainerOne from "./Components/SectionImageContainer/SectionImageContainer";
import SectionImageContainerThree from "./Components/SectionImageContainer/SectionImageContainerThree";
import SectionImageContainerTwo from "./Components/SectionImageContainer/SectionImageContainerTwo";

function App() {
  return (
    <>
      <div className="container-fluid mainDiv">
        <div className="headerContainer container-fluid">
          <Header />
        </div>
        <div className="mt-5 mb-2">
          <SectionImageContainerOne />
        </div>
        <div className="mt-2 mb-2">
          <SectionImageContainerTwo />
        </div>
        <div className="mt-2 mb-2">
          <SectionImageContainerThree />
        </div>
      </div>
    </>
  );
}

export default App;

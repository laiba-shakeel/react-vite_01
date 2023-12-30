
import sampleImage from "../../assets/bg-showcase-2.jpg"; 

const SectionImageContainerTwo = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center">
            <img src={sampleImage} alt="Sample" height="80%" width='100%' /> 
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-center d-flex flex-column justify-content-center align-items-center">
            <h2>Fully Responsive Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              deleniti sapiente. Cum consectetur accusamus animi, placeat numquam
              deserunt minus provident architecto doloribus. Sunt hic nostrum illo
              cupiditate id, ad sint?
            </p>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default SectionImageContainerTwo;

import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Daniel Totolici",
    location: "Madrid ,Spain",
    email: "nablabussiness@gmail.com",
    availability: "Open for work",
    brand:
      "My combination of technical knowledge and innovative thought enables me to deeply comprehend the challenges of each project, leading to the creation of highly efficient solutions.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;

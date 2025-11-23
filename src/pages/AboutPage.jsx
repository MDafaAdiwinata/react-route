import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container h-screen flex flex-col items-center justify-center mx-auto gap-4">
      <h1 className="text-4xl text-center font-bold">Ini Halaman About</h1>
    </div>
  );
};

export default About;

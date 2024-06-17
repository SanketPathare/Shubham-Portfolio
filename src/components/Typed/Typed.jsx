
import Typewriter from "typewriter-effect";

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            "Full Stack Web-Developer",
            "UI/UX Designer",
            "MERN Stack Developer",
            "Freelancer",
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Typed;

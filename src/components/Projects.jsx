import group30 from '../assets/Group30.png';
import project1 from '../assets/Our Project_ 1 img 1.png';
import project2 from '../assets/Our Project _ 2 img 1.png';
import project3 from '../assets/Our Project_ 3 img 1.png';

const Projects = () => {
  return (
    <div id="ourProject" className="relative w-full h-fit flex flex-col gap-8 items-center mb-28">
      <div
        className="font-medium text-3xl sm:text-5xl leading-[56px] bg-no-repeat bg-left-bottom w-fit pb-2"
        style={{ backgroundImage: `url(${group30})` }}
      >
        Our Projects
      </div>

      <div className="flex flex-wrap justify-around gap-4">
        <div>
          <img className="w-[12rem] sm:w-[18rem] md:w-[22rem] lg:w-[28rem] xl:w-[32rem]" src={project1} alt="Project 1" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <img className="w-[12rem] sm:w-[18rem] md:w-[22rem] lg:w-[28rem] xl:w-[32rem]" src={project2} alt="Project 2" />
          </div>
          <div>
            <img className="w-[12rem] sm:w-[18rem] md:w-[22rem] lg:w-[28rem] xl:w-[32rem]" src={project3} alt="Project 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

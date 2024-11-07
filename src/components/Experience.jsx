import { RiReactjsLine } from "react-icons/ri";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <h1 className="my-20 text-4xl text-center">Experience</h1>
      <div className="relative w-1/3">
        <div className="absolute flex flex-col items-start gap-4 pb-5 left-1 ">
          <div className="p-4 mb-20 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="p-4 mb-20 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="p-4 mb-20 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
        </div>
      </div>

      <div className="relative ml-9 w-3/3">
        <div className="absolute flex flex-col items-end justify-end gap-4 right-1 ">
          <div className="p-4 mb-20 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="p-4 mb-20 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="p-4 mb-20 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
        </div>
      </div>

      <div className="w-3/3 ">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="font-semibold ">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1 mt-4 mr-2 text-sm font-medium text-purple-800 rounded bg-neutral-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

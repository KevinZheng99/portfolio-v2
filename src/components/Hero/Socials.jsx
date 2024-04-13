import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";
import Email from "../Icons/Email";

function Socials() {
  const svgClasses = "fill-current text-purple-500 hover:text-purple-300";

  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/KevinZheng99"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub iconStyles={svgClasses} />
      </a>
      <a
        href="https://www.linkedin.com/in/kevin-zheng-6b5a34174/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn iconStyles={svgClasses} />
      </a>
      <a
        href="mailto: kevinzhengkz99@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Email iconStyles={svgClasses} />
      </a>
    </div>
  );
}

export default Socials;

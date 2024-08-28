import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/kylez56789" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/kyle-zhang-3a6551194/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;

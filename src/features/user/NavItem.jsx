/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function NavItem({ icon, text, href = "#" }){
    return (
        <li>
          <Link to={href}>
            <svg>
              <use href={`img/icons.svg#${icon}`} />
            </svg>
            {text}
          </Link>
        </li>
      );
};
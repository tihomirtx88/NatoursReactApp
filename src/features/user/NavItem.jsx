/* eslint-disable react/prop-types */

export default function NavItem({ icon, text, href = "#" }){
    return (
        <li>
          <a href={href}>
            <svg>
              <use href={`img/icons.svg#${icon}`} />
            </svg>
            {text}
          </a>
        </li>
      );
};
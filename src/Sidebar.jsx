import { links, social } from './data';

function Sidebar() {
  return (
    <div className="links-container show-container">
      <ul className="links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}> {text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

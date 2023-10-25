import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Styles
import './style.css';

// Data
import termData from '../../../../data/term.json';

function TermDates() {
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <section id="term" className="section"> {/* Update the section ID */}
      <h2 className="title">{termData.title}</h2> {/* Use termData instead of blogData */}
      <div className="section-des">{termData.description}</div>

      <ul className="term-list"> {/* Update the CSS class name */}
        {termData.posts.map((post, i: number) => (
          <li key={'term-post' + i}>
            <RouterLink to={post.to} onClick={handleClick}>
              {post.title}
            </RouterLink>

            <div className="term-list-info"> {/* Update the CSS class name */}
              <div className="date">{post.date}</div>
              <div className="category">{post.category}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TermDates; // Update the export name

import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='blogs'>
      <h2>
        1. What is contaxt api?
      </h2>
      <h3>
        The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. It is using for changing state.Redux is the best example of an context api.
      </h3>

      <h2>
        2. What is symantic tag?
      </h2>
      <h3>
        Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.Now elements are header, footer,aside, article etc. Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a paragraph tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.
      </h3>
    </div>
  )
}

export default Blogs;
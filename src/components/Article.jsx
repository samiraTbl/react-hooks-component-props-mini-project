import React from "react";

function Article({ title, date, preview }) {
  // Use the OR operator to set a default value if date is not provided
  const formattedDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;





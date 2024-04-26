import React from "react";

function Article({ title, date, preview }) {
  // Default date if not provided
  const formattedDate = date ? new Date(date).toLocaleDateString() : "January 1, 1970";

  // Debugging statement
  console.log("Rendered date:", formattedDate);

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

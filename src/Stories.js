import React from "react";
import { Data } from "./data";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {Data.map(story => {
        const {id, title, url, author, created_on} = story;
        return (
          <article key={id} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              Authored by <span>{author} | </span> {" "}
              {created_on}
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
            </div>
          </article>
        )
      })}
    </section>
  );
};

export default Stories;

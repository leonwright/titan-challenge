import React from "react";
import classNames from "classnames";

interface SearchResultProps {
  username: string;
  post_date: string;
  message: string;
  last_item: boolean;
}

function SearchResult(props: SearchResultProps) {
  return (
    <div
      className={classNames({
        "border-b": !props.last_item,
        "py-4": true,
      })}
    >
      {props.username + ": " + props.message}
    </div>
  );
}

export default SearchResult;

import React from "react";
import Button from "./Button";
import {ThemeContext} from "./ThemeContext";

function Image(props) {
  // We don't need this anymore
  // const theme = this.context
  
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={`${theme}-image image`}>
          <div className={`${theme}-ball ball`} />
          <Button />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

// We don't need this anymore
// Image.contextType = ThemeContext;

export default Image;
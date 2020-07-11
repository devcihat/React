import React from "react";
import * as ReactBootStrap from "react-bootstrap";
const Menu = () => {
  return (
    <div className=" container main">
      <h3>Album example</h3>
      <p className=" row paragraf textMuted">
        Something short and leading about the collection below—its contents,
        <br /> the creator, etc. Make it short and sweet, but not too short so
        folks don’t <br />
        simply skip over it entirely.
      </p>
      <ReactBootStrap.Button className="btn btnButton my-2" variant="primary">
        Main call to action
      </ReactBootStrap.Button>

      <ReactBootStrap.Button className="btn btnButton my-2" variant="secondary">
        Secondary action
      </ReactBootStrap.Button>
    </div>
  );
};

export default Menu;

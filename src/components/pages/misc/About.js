import React, { useState, useRef } from "react";
import Modal from "../../shared/Modal";

const About = () => {
  const [showAbout, setShowAbout] = useState(false);

  const linkRef = useRef();

  return (
    <div>
      <span ref={linkRef} onClick={() => setShowAbout(current => !current)}>
        About
      </span>
      {showAbout && (
        <Modal container={linkRef.current}>
          Originally created by a designer and a developer at Twitter, Bootstrap
          has become one of the most popular front-end frameworks and open
          source projects in the world. Bootstrap was created at Twitter in
          mid-2010 by @mdo and @fat. Prior to being an open-sourced framework,
          Bootstrap was known as Twitter Blueprint. A few months into
          development, Twitter held its first Hack Week and the project exploded
          as developers of all skill levels jumped in without any external
          guidance. It served as the style guide for internal tools development
          at the company for over a year before its public release, and
          continues to do so today. Originally released on Friday, August 19,
          2011, we’ve since had over twenty releases, including two major
          rewrites with v2 and v3. With Bootstrap 2, we added responsive
          functionality to the entire framework as an optional stylesheet.
          Building on that with Bootstrap 3, we rewrote the library once more to
          make it responsive by default with a mobile first approach. With
          Bootstrap 4, we once again rewrote the project to account for two key
          architectural changes: a migration to Sass and the move to CSS’s
          flexbox. Our intention is to help in a small way to move the web
          development community forward by pushing for newer CSS properties,
          fewer dependencies, and new technologies across more modern browsers.
        </Modal>
      )}
    </div>
  );
};

export default About;

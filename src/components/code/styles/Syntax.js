import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Syntax extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={'syntax'}>
        <div className="u-margin-bottom-huge">
          <h2 className="u-alchemy-secondary2-colour">Syntax and Code Formatting</h2>
          <p>
            By having set the standard for writing CSS, the code will always look and feel familiar to all
            developers.
          </p>
          <p>
            A clean codebase is generally a nicer environment to work in, especially as external factors can
            add undue stress into your workflow. Frontend developers have a duty to maintain best practices
            wherever possible.
          </p>
          <p>What we want from a clean codebase is:</p>
          <ul className="u-margin-bottom">
            <li>two (2) space indents, no tabs</li>
            <li>80 character wide columns</li>
            <li>multi-line CSS</li>
            <li>meaningful use of whitespace</li>
          </ul>

          <h3>Multiple Files as Components</h3>
          <p>
            Since the rise in popularity of pre-processors such as Less and Sass, it has become more common
            form to split up code into discrete chunks fit for purpose.
          </p>
          <p>
            However, this has to be done in a sensible and logical way. Separating components out into their
            own semantically named files has the following benefits:
          </p>
          <ul className="u-margin-bottom">
            <li>You know exactly where your files are</li>
            <li>You know what line of CSS you need to debug if there any issues</li>
            <li>Page specific files and foundation files are all in their own semantically named folders</li>
          </ul>

          <h3>Table of Contents</h3>
          <p>
            It is useful for the main index.scss (or .less) file to contain a table of contents. This is
            useful because it tell a team of developers what files are contained within the codebase, where
            they are contained and via a concise comment, what that file actually represents.
          </p>
          <p>Of course this can be a heavy overhead to maintain, but the benefits are worth it.</p>

          <h3>80 Characters Wide</h3>
          <p>
            Whenever possible limit the line widths to 80 characters long. This can be set project wide in the
            <code> .editorconfig </code> file.
          </p>
          <p>The benefits include:</p>
          <ul className="u-margin-bottom">
            <li>the ability to have multiple files open side by side</li>
            <li>an improved experience when viewing the CSS in github or a terminal window</li>
            <li>providing a comfortable reading length</li>
          </ul>
          <div className="a-note u-alchemy-info-bg u-padding-small u-margin-bottom">
            <small className="u-alchemy-white-colour">
              <FontAwesomeIcon icon="info-circle" />&nbsp; There are exceptions for URLs and gradients.
            </small>
          </div>

          <h3>Titling</h3>
          <p>
            It is paramount that every file is properly titled and each section within is also titled
            accordingly.
          </p>

          <small className="a-code-label">File Title</small>
          <pre className="a-code-example">
            <code>{`// Component :: Buttons`}</code>
          </pre>

          <small className="a-code-label">Section Title</small>
          <pre className="a-code-example">
            <code>{`// Colour Variants`}</code>
          </pre>

          <p>Files with multiple sections within them should have 5 carriage spaces in between sections.</p>

          <small className="a-code-label">Multiple Section Spacing</small>
          <pre className="a-code-example">
            <code>{`// Colour Variants

.selector { }





// Size Variants`}</code>
          </pre>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Syntax;

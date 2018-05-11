import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CssSelectors extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={'css-selectors'}>
        <div className="u-margin-bottom-huge">
          <h2 className="u-alchemy-secondary2-colour">CSS Selectors</h2>
          <p>
            Specifity, Portability and Reusability are the main aspects of CSS that impact our work on a daily
            basis.
          </p>
          <h3>Selector Intent</h3>
          <p>
            <em>Selector Intent</em> is essentially all about deciding and defining what you are styling and
            how you will go about selecting it.
          </p>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> Incorrect Example of writing a selector for your main navigation
          </small>
          <pre className="a-code-example">
            <code>{`.header ul { }`}</code>
          </pre>
          <p>
            You can have many <code className="u-alchemy-positive-colour">header</code> elements on a page,
            and they in turn can have many <code className="u-alchemy-positive-colour">ULs</code>, which can
            result in applying a very specific style to a wide range of elements.
          </p>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> Correct Example of writing a selector for your main navigation
          </small>
          <pre className="a-code-example">
            <code>{`.site-nav { }`}</code>
          </pre>
          <p>Here we are seecting the right thing for the right reason.</p>
          <p>
            CSS is not contained within itself, it is known for being leaky, especially if we adopt a loose
            standard of writing selectors. So your selectors should be as explicit as your reason for wanting
            to select something.
          </p>
          <h3>Reusability</h3>
          <p>
            As we move towards a more component based codebase, everything you write should be able to be
            reused throughout the codebase.
          </p>
          <h3>Location Independence</h3>
          <p>
            Following on from the previous point, everything we write should be independant of location and
            still render as intended regardless of it&apos;s place in the codebase.
          </p>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> Incorrect Example of writing a location independant selector
          </small>
          <pre className="a-code-example">
            <code>{`.promo a { }`}</code>
          </pre>
          <p>
            This is a poor selector, as not only does it style every{' '}
            <code className="u-alchemy-positive-colour">a</code> element within{' '}
            <code className="u-alchemy-positive-colour">.promo</code> it is also locked within the scope of{' '}
            <code className="u-alchemy-positive-colour">.promo</code>.
          </p>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> Correct Example of writing a location independant selector
          </small>
          <pre className="a-code-example">
            <code>{`.btn { }`}</code>
          </pre>
          <p>
            This single class can be reused anywhere in the codebase and it will still render the same. It is
            portable, recyclable and doesn&apos;t have any dependencies.
          </p>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> Even better Example of writing a location independant selector
          </small>
          <pre className="a-code-example">
            <code>{`.c-btn { }`}</code>
          </pre>
          <p>
            An even better example is utilising a good range of prefixes, here we are using{' '}
            <code className="u-alchemy-positive-colour">-c</code> to denote that this is a{' '}
            <strong>Component</strong>.
          </p>
          <h3>Unqualifiying Selectors</h3>
          <p>
            It is not generally good practice to <strong>qualify</strong> our selectors. It will tie that
            particular selector to a specific piece of UI.
          </p>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> An example of qualifiying a selector
          </small>
          <pre className="a-code-example">
            <code>{`input.btn { }`}</code>
          </pre>
          <p>
            Here we are saying style any <code className="u-alchemy-positive-colour">input</code> that has the
            class name of <code className="u-alchemy-positive-colour">.btn</code>, but this does not allow us
            to really reuse the <code className="u-alchemy-positive-colour">.btn</code> class on anything
            other than an <code className="u-alchemy-positive-colour">input</code>.
          </p>
          <p>Every selector we write should be authored with reuse in mind.</p>
          <h3>Prefixing UI Selectors</h3>
          <p>
            Although this is personal preference, having selectors prefixed with descriptive letters can prove
            useful when writing and implementing CSS.
          </p>
          <table className="o-table  o-table--small  o-table--bordered">
            <thead className="u-alchemy-light-grey-bg">
              <tr>
                <th>Prefix</th>
                <th>Example</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-o</td>
                <td className="u-alchemy-positive-colour">.o-form</td>
                <td>Object, for UI that can be applied to any element and have the same basic result.</td>
              </tr>
              <tr>
                <td>-c</td>
                <td className="u-alchemy-positive-colour">.c-btn</td>
                <td>
                  Components, for more specific UI that has a single source of truth, can be reused in
                  location independent situations.
                </td>
              </tr>
              <tr>
                <td>-u</td>
                <td className="u-alchemy-positive-colour">.u-hidden</td>
                <td>Utilities, for classes that serve a purpose to override other basic styles.</td>
              </tr>
            </tbody>
          </table>
          <h3>Selector Performance</h3>
          <p>The longer a selector is the slower it is.</p>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> An example of a slow selector
          </small>
          <pre className="a-code-example">
            <code>{`body.home div.header ul { }`}</code>
          </pre>
          <p>This kind of selector will perform less efficiently than:</p>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> An example of a more efficient selector
          </small>
          <pre className="a-code-example">
            <code>{`.primary-nav { }`}</code>
          </pre>
          <p>
            The reason for this is because modern browsers read selectors from <strong>right-to-left</strong>.
            So in that first example a browser will read the selector as:
          </p>
          <ul className="u-margin-bottom-large">
            <li>
              find all the <code className="u-alchemy-positive-colour">ul</code> in the DOM;
            </li>
            <li>
              check if they live inside an element with the class of{' '}
              <code className="u-alchemy-positive-colour">.header</code>;
            </li>
            <li>
              then it will check if that <code className="u-alchemy-positive-colour">.header</code> class
              exists on a <code className="u-alchemy-positive-colour">div</code> element;
            </li>
            <li>
              next it will check if it lives inside code with the class of{' '}
              <code className="u-alchemy-positive-colour">.home</code>;
            </li>
            <li>
              finally it will check if that <code className="u-alchemy-positive-colour">.home</code> class is
              on the <code className="u-alchemy-positive-colour">body</code> element;
            </li>
          </ul>
          <p>The second example is far more simpler and much more efficient:</p>
          <ul className="u-margin-bottom-large">
            <li>
              find all the elements with a class of{' '}
              <code className="u-alchemy-positive-colour">.primary-nav</code>
            </li>
          </ul>
          <p>
            This is why the delights Sass gives us with nested selectors. While it is very tempting and can
            encapsulate your code nicely, it can have nasty side-effects when it is compiled into CSS.
          </p>
          <h3>General Rules</h3>
          <p>Selectors are fundamental to writing quality efficient CSS.</p>
          <ul className="u-margin-bottom-large">
            <li>
              <strong>Select what you want explicitly</strong>, rather then relying on circumstances or
              coincidence.
            </li>
            <li>
              <strong>Write resulable selectors</strong>, so that you can reduce waste and repeating yourself.
            </li>
            <li>
              <strong>Do not nest selectors unnecessarily</strong>, this can have an effect on performance, as
              well increasing specifity. Can also lock down pieces of UI code to a specific part of the site.
            </li>
            <li>
              <strong>Do not qualify selectors unnecessarily</strong>, this will restrict the amounts of
              elements you can apply your styles to.
            </li>
            <li>
              <strong>Keep selectors short</strong>, as this also has an impact on specifity and performance.
            </li>
          </ul>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default CssSelectors;

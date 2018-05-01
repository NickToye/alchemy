import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NamingConventions extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={'naming-conventions'}>
        <div className="u-margin-bottom-huge">
          <h2 className="u-alchemy-secondary2-colour">Naming Conventions</h2>
          <p>
            Naming conventions are important to maintain a strict, transparent and semantic codebase. A solid
            naming convention will inform you and your team:
          </p>
          <ul className="u-margin-bottom">
            <li>what a class does</li>
            <li>where the class can be used</li>
            <li>what the class might be related to</li>
          </ul>
          <p>
            A sensible and widely accepted naming convention is to use a hyphen (-) delimite sstrings. You can
            also utilise this in a BEM-like style for the more complex pieces of code.
          </p>
          <div className="a-note u-alchemy-caution-bg u-padding-small u-margin-bottom">
            <small className="u-alchemy-white-colour">
              <FontAwesomeIcon icon="exclamation-triangle" />&nbsp; However, please try and not rely on BEM
              too heavily, consider whether a simple hyphenated class would suffice.
            </small>
          </div>

          <h3>Hyphen Delimited</h3>
          <p>This is an example of what we want.</p>

          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> Correct Example
          </small>
          <pre className="a-code-example">
            <code>{`.page-head { }

.sub-content { }`}</code>
          </pre>

          <p>Camel case and underscores are not used for standard classes, so the following is incorrect.</p>

          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> Incorrect Example
          </small>
          <pre className="a-code-example">
            <code>{`.pageHead { }

.sub_content { }`}</code>
          </pre>

          <h3>BEM Style</h3>
          <p>
            When the UI component requires multiple classes, we tend to use a BEM (Block Element Modification)
            like convention.
          </p>
          <p>BEM splits component classes into 3 groups:</p>
          <ul className="u-margin-bottom">
            <li>
              <strong>Block</strong> - This is the root of the component
            </li>
            <li>
              <strong>Element</strong> - A component part of the <strong>Block</strong>
            </li>
            <li>
              <strong>Modifier</strong> - A variant or extension of the <strong>Block</strong>
            </li>
          </ul>

          <small className="a-code-label">An example</small>
          <pre className="a-code-example">
            <code>{`.box { }
.box__ball { }
.box--red { }`}</code>
          </pre>
          <p>
            So here we can see that <code className="u-alchemy-positive-colour">.box {}</code> is the{' '}
            <strong>Block</strong>
            and is essentially the root of the code component.{' '}
            <code className="u-alchemy-positive-colour">.box__ball {}</code>
            is an <strong>Element</strong> and is a child element of the{' '}
            <code className="u-alchemy-positive-colour">.box {}</code> <strong>Block</strong>. Finally,{' '}
            <code className="u-alchemy-positive-colour">.box--red {}</code> is a <strong>Modifier</strong>,
            which is a specific variant of the <code className="u-alchemy-positive-colour">.box {}</code>{' '}
            <strong>Block</strong>.
          </p>

          <h3>Starting Context</h3>
          <p>
            The <strong>Block</strong> context starts as a self-contained entity. We should be careful not to
            increase the scope of existing <strong>Blocks</strong> and <strong>Elements</strong>
          </p>

          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> Correct Example
          </small>
          <pre className="a-code-example">
            <code>{`.page { }


.content { }


.sub-content { }


.footer { }


  .footer__copyright { }`}</code>
          </pre>

          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> Incorrect Example
          </small>
          <pre className="a-code-example">
            <code>{`.page { }


  .page__content { }


  .page__sub-content { }


  .page__footer { }


    .page__copyright { }`}</code>
          </pre>

          <p>
            It is important to know the start and finishing points of BEM scope. A general rule of thumb, BEM
            applies to self-contained, discrete parts of the UI.
          </p>

          <h3>Modifying Elements</h3>
          <p>
            You can have variants of <strong>Elements</strong> and these can be written in a number of ways.
          </p>
          <small className="a-code-label">An example</small>
          <pre className="a-code-example">
            <code>{`.box__ball--green { }`}</code>
          </pre>
          <p>
            Here we are directly modifying the ball <strong>Element</strong>.
          </p>
          <p>
            But what if the box is red and we have a ball <strong>Element</strong>?
          </p>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> Incorrect Example
          </small>
          <pre className="a-code-example">
            <code>{`.box--red__ball { }`}</code>
          </pre>
          <p>
            On this occasion we would use a descendant selector to modify an <strong>Element</strong> based on
            a <strong>Modifier</strong> on the <strong>Block</strong>.
          </p>

          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> Correct Example
          </small>
          <pre className="a-code-example">
            <code>{`.box--red .box__ball { }`}</code>
          </pre>

          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> Sass Example
          </small>
          <pre className="a-code-example">
            <code>{`.box { }

  .box__ball {

    .box--red & { }

  }

.box--red { }`}</code>
          </pre>
          <p>
            Note that we do not nest a new instance of{' '}
            <code className="u-alchemy-positive-colour">.box__ball {}</code> inside of
            <code className="u-alchemy-positive-colour">.box--red {}</code> instead, we make use of Sass’
            parent selectors to prepend <code className="u-alchemy-positive-colour">.box--red</code> onto the
            existing <code className="u-alchemy-positive-colour">.box__ball {}</code> selector. This means
            that all of our <code className="u-alchemy-positive-colour">.box__ball {}</code> -related rules
            exist in once place, and aren’t spread throughout the file. This is general good practice when
            dealing with nested code: keep all of your context (e.g. all{' '}
            <code className="u-alchemy-positive-colour">.box__ball {}</code> code) encapsulated in one
            location.
          </p>

          <h3>Naming Conventions in HTML</h3>
          <p>
            Naming conventions alone are not always that useful in your CSS, in HTML markup though they are.
          </p>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> Poor Example
          </small>
          <pre className="a-code-example">
            <code>{`<div class="box  profile  pro-user">

  <img class="avatar  image" />

  <p class="bio">...</p>

</div>
`}</code>
          </pre>
          <p>
            In this example it is difficult to see how elements are related to each other. It brings into
            question whether or not you should be placing certain elements alongside other elements.
          </p>
          <p>Well if you use a solid naming convention we can answer all these questions.</p>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> Good Example
          </small>
          <pre className="a-code-example">
            <code>{`<div class="box  profile  profile--is-pro-user">

    <img class="avatar  profile__image" />

    <p class="profile__bio">...</p>

  </div>
  `}</code>
          </pre>
          <p>
            Now we can see which classes are related to each other, and how. We know what classes we
            can&apos;t use outside of the scope of this piece of UI, and we know which classes we are free to
            reuse elsewhere.
          </p>

          <h3>JavaScript Hooks</h3>
          <p>
            It is generally accepted, but not always applied, JS and CSS classes need to be separated. If your
            team understand that know JS functionality will be utilising and CSS classes then you are
            generally free to working within the CSS without fear of breaking the JavaScript.
          </p>
          <p>
            We now prefix and JavaScript element with <code className="u-alchemy-positive-colour">js-</code>.
          </p>
          <small className="a-code-label">An Example of JS class hooks</small>
          <pre className="a-code-example">
            <code>{`<input type="submit" class="btn  js-btn" value="Do Something" />`}</code>
          </pre>
          <p>
            This also means we can re-use an element with the style of{' '}
            <code className="u-alchemy-positive-colour">.btn {}</code> without the behaviour of{' '}
            <code className="u-alchemy-positive-colour">.js-btn {}</code>
          </p>
          <h3>
            <code className="u-alchemy-positive-colour">data-*</code> Attributes
          </h3>
          <p>
            There is a common practice to use <code className="u-alchemy-positive-colour">data-*</code>{' '}
            attributes as JS hooks, but this is wrong. According to the specs,{' '}
            <code className="u-alchemy-positive-colour">data-*</code> attributes are used to{' '}
            <em>store data</em>, and not be <em>bound to</em>.
          </p>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default NamingConventions;

// TODO Font Awesome icons not showing up in standard code view

import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Specificity extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={'specificity'}>
        <div className="u-margin-bottom-huge">
          <h2 className="u-alchemy-secondary2-colour">Specificity</h2>
          <p>
            Specificity is possibly the main reason why developers have to refactor their code. Even if you
            had good intentions, there could be a situation down the line where specifity becomes an issue.
          </p>
          <p>
            It&apos;s main problem is that it sets precedents that can&apos;t be undone very easily. Take this
            example:
          </p>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> Poor Selector
          </small>
          <pre className="a-code-example">
            <code>{`#main form`}</code>
          </pre>
          <p>
            This is great if you only have a single form within that{' '}
            <code className="u-alchemy-positive-colour">#main</code> element, but if down the line you are
            asked to chuck in another form and its style is different, then you may run into trouble.
          </p>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> Second form trumped by first more specific selector
          </small>
          <pre className="a-code-example">
            <code>{`#main form

.newsletter-form`}</code>
          </pre>
          <p>
            Because the 1st selector is overly specific, it will trump the 2nd selector, forcing you to take
            action to raise it&apos;s specifity. Of course many developers will simply use an{' '}
            <code className="u-alchemy-positive-colour">!important</code> flag, but this is not adviseable in
            this situation.
          </p>
          <p>There are 2 options though besides the brute force option.</p>
          <ul className="u-margin-bottom">
            <li>Refactor</li>
            <li>A more specific selector</li>
          </ul>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> A more specific selector
          </small>
          <pre className="a-code-example">
            <code>{`#main form

#main .newsletter-form`}</code>
          </pre>
          <p>
            Now if you had to add a third form with a different style, you would need to write an even more
            specific selector, which sets you on a downward spiral. Specifity can:
          </p>
          <ul className="u-margin-bottom">
            <li>limits your ability to extend a codebase</li>
            <li>disrupts the inheriting nature of the CSS cascade</li>
            <li>pushes your codebase to use more code then it needs to</li>
            <li>can lead to unexpected situations when moving into different environments</li>
            <li>can increase frustration for developers</li>
          </ul>
          <p>How can we reduce the issues with specifity?</p>
          <ul className="u-margin-bottom">
            <li>Avoid using IDs in your CSS</li>
            <li>Don&apos;t use nested selectors</li>
            <li>Do not qualify selectors</li>
            <li>Do not chain selectors</li>
          </ul>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> Bad example
          </small>
          <pre className="a-code-example">
            <code>{`// Don't use IDs
#main form

// Don't use Nested Selectors
#main {
  .newsletter-form { }
}

// Don't Qualify Selectors
form.newsletter-form { }

// Don't chain selectors
#main .newsletter-form`}</code>
          </pre>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> Good example
          </small>
          <pre className="a-code-example">
            <code>{`// Use sensible code architecture
.o-form { }

// Use specific selectors intended for one style
.newsletter-form { }
`}</code>
          </pre>
          <p>
            Of course we can style the <code className="u-alchemy-positive-colour">.o-form</code> as the base
            CSS for all forms, and apply that to elements, with the more specific selector intents for pieces
            of UI fit for purpose.
          </p>
          <h3>!important Flag</h3>
          <p>
            While is is generally assumed <code className="u-alchemy-positive-colour">!important</code> is
            seen as inheritently bad code, it does have a place in a codebase - albeit used sparingly and for
            very good reason.
          </p>
          <p>These kind of flags should only ever be used if you want to guarantee a win. For example:</p>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> !important flags win
          </small>
          <pre className="a-code-example">
            <code>{`.u-hidden {
  display: none !important
}`}</code>
          </pre>
          <p>
            When using the utility class <code className="u-alchemy-positive-colour">.u-hidden</code> you only
            want to see it win, otherwise why apply it in the first place.
          </p>
          <p>
            An incorrect way to use the <code className="u-alchemy-positive-colour">!important</code> flag is
            when you need to combat specifity issues.
          </p>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> !important flags used wrong
          </small>
          <pre className="a-code-example">
            <code>{`.content h2 {
  font-size: 2em;
}

.heading-sub {
  font-size: 1.5em !important;
}
`}</code>
          </pre>
          <p>
            This is the wrong way to use <code className="u-alchemy-positive-colour">!important</code> flag,
            it is using it <strong>reactively</strong>, rather than <strong>proactively</strong>.
          </p>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Specificity;

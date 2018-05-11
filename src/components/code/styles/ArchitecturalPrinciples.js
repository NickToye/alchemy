import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ArchitecturalPrinciples extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={'architectural-principles'}>
        <div className="u-margin-bottom-huge">
          <h2 className="u-alchemy-secondary2-colour">Architectural Principles</h2>
          <p>
            To many developers CSS is seen as a loose language, and not really worthy of architecture - but
            the very fact that it is loose supports the need to have it well designed from the start.
          </p>
          <p>
            Considering what you are writing, why you are writing, and how extensible that piece of UI code is
            will serve you well when developing a solid CSS codebase.
          </p>
          <h3>High-level Overview</h3>
          <p>At a very high-level, your architecture will help you:</p>
          <ul className="u-margin-bottom-large">
            <li>provide a consistent environment</li>
            <li>allow for fast changes</li>
            <li>allow for scalability</li>
            <li>increase efficiency and reusabilty</li>
            <li>improve your productivity</li>
          </ul>
          <p>This will be a result of a class-based and component based architecture.</p>
          <h3>Object-orientation</h3>
          <p>
            OOP (Object-orientated programming) has been around for a while in other languages, when applied
            within CSS it is knows as OOCSS (Object-orientated CSS). It essentially deals with the separations
            of UI. Breaking UI components into their base structural forms, and overlaying cosmetic forms
            separately.
          </p>
          <p>
            The result is that you can reuse common and recurring design patterns with very low cost. High
            efficiency, low file size.
          </p>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> An example of cosmetics overlaying structure
          </small>
          <pre className="a-code-example">
            <code>{`.c-btn {
  display: inline-block;
  padding: 1em 2em;
}

.c-btn--positive {
  background-color: green;
  color: white;
}

.c-btn--soft {
  border-radius: 6px;
}`}</code>
          </pre>
          <p>
            So the <code className="u-alchemy-positive-colour">.btn {}</code> class provides structural
            styling to the element, whilst <code className="u-alchemy-positive-colour">.c-btn--positive</code>{' '}
            and <code className="u-alchemy-positive-colour">.c-btn--soft</code> provides cosmetic styling.
          </p>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> HTML usage of these classes
          </small>
          <pre className="a-code-example">
            <code>{`<button class="c-btn  c-btn--positive  c-btn--soft">Sign Up</div>`}</code>
          </pre>
          <p>
            So whenever you are building a UI component, try and break it into structural and cosmetic parts.
          </p>
          <h3>The Single Responsibility Principle</h3>
          <blockquote>
            <p>
              …the single responsibility principle states that every context (class, `function`, variable,
              etc.) should have a single responsibility, and that responsibility should be entirely
              encapsulated by the context.
            </p>
          </blockquote>
          <p>
            For CSS this basically means anything you write should have a single job, but can also be combined
            to compose more complex and versatile constructs.
          </p>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> Bad Example
          </small>
          <pre className="a-code-example">
            <code>{`.error-message {
  display: block;
  padding: 10px;
  border-top: 1px solid red;
  border-bottom: 1px solid red;
  background-color: red;
}

.success-message {
  display: block;
  padding: 10px;
  border-top: 1px solid green;
  border-bottom: 1px solid green;
  background-color: green;
}`}</code>
          </pre>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> Good Example
          </small>
          <pre className="a-code-example">
            <code>{`.box {
  display: block;
  padding: 10px;
}

.u-message {
  border-style: solid;
  border-width: 1px 0;
}

.u-message--error {
  background-color: red;
}

.u-message--success {
  background-color: green;
}
`}</code>
          </pre>
          <p>
            So here we can have a box element, that can be turned into a message block, and in turn can be
            extended into situation-based styles. We have also reduced the repetition of code.
          </p>
          <h3>The Open/Closed Principle</h3>
          <p>Basically means code should be closed to modification, but open to extension.</p>
          <small className="a-code-label u-alchemy-negative-colour">
            <FontAwesomeIcon icon="times" /> Incorrect Example
          </small>
          <pre className="a-code-example">
            <code>{`.box {
  display: block;
  padding: 10px;
}

.content .box {
  padding: 20px;
}`}</code>
          </pre>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" /> Good Example
          </small>
          <pre className="a-code-example">
            <code>{`.box {
  display: block;
  padding: 10px;
}

.box--large {
  padding: 20px;
}`}</code>
          </pre>
          <p>
            A selector like <code className="u-alchemy-positive-colour">.content .box {}</code> is troublesome
            because:
          </p>
          <ul className="u-margin-bottom-large">
            <li>
              the <code className="u-alchemy-positive-colour">.box</code> component is locked inside{' '}
              <code className="u-alchemy-positive-colour">.content</code>, which means the modification is
              dictated to developers, rather than allowing them to opt into the change.
            </li>
            <li>
              the <code className="u-alchemy-positive-colour">.box</code> is now unpredictable to developers
              and the Single Responsibility no longer exists because nesting the selector produces a forced
              caveat.
            </li>
          </ul>
          <p>
            When working in a team environment, be sure to write API-like CSS; always ensure that existing
            classes remain backward compatible (i.e. no changes at their root) and provide new hooks to bring
            in new features. Changing the root object, abstraction, or component could have huge knock-on
            effects for developers making use of that code elsewhere, so never modify existing code directly.
          </p>
          <h3>DRY</h3>
          <p>Simply stands for Don&apos;t Repeat Yourself, designed to keep repetition down to a minimum.</p>
          <blockquote>
            <p>
              Every piece of knowledge must have a single, unambiguous, authoritative representation within a
              system.
            </p>
          </blockquote>
          <p>The key isn&apos;t to avoid all repetition, but to abstract meaningful reptition. </p>
          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" />Simple example
          </small>
          <pre className="a-code-example">
            <code>{`.page-title {
  font-size: 3rem;
  font-family: "Alchemista", sans-serif;
  font-weight: bold;
}

.sub-title {
  font-size: 2rem;
  font-family: "Alchemista", sans-serif;
  font-weight: bold;
}
`}</code>
          </pre>
          <p>
            Here we clearly have duplication in CSS - the{' '}
            <code className="u-alchemy-positive-colour">font-family</code> and{' '}
            <code className="u-alchemy-positive-colour">font-weight</code>, so as it is not adviseable to use{' '}
            <code className="u-alchemy-colour-positive">@extend</code> a{' '}
            <code className="u-alchemy-positive-colour">@mixin</code> makes more sense.
          </p>

          <small className="a-code-label u-alchemy-positive-colour">
            <FontAwesomeIcon icon="check" />Simple example abstracted with Mixin
          </small>
          <pre className="a-code-example">
            <code>{`@mixin title-font() {
  font-family: "Alchemista", sans-serif;
  font-weight: bold;
}

.page-title {
  @include title-font();
  font-size: 3rem;
}

.sub-title {
  @include title-font();
  font-size: 2rem;
}
`}</code>
          </pre>
          <p>
            Now the two declarations only exist once, and if we ever needed to change the typeface or weight,
            we need only do it in one place.
          </p>

          <h3>Composition over Inheritance</h3>
          <p>
            This principle suggests that large more complex systems should be composed from smaller parts,
            rather than inheriting behaviour from larger objects. This will keep your code decoupled as
            nothing inherently depends on anything else. Another example of this is to think of it like Atomic
            Design.
          </p>
          <p>
            Atomic Design principles are you start with the smallest <strong>atomic</strong> elements, build
            up to <strong>molecules</strong>, and combine to <strong>organisms</strong>, and so on.
          </p>

          <h3>The Separation of Concerns</h3>
          <p>The definition is that code should be broken up:</p>
          <blockquote>
            <p>
              into distinxt sections, such that each section addresses a separate concern. A concern is a set
              of information that affects the code of a computer program. A program that embodies SoC well is
              called modular.
            </p>
          </blockquote>
          <p>
            In terms of CSS, this just means we write code that only ever focusses itself on one task at a
            time. This way you can be sure that you are not going to break other semantically unrelated pieces
            of UI. This reduces the risk of failure, and should reduce the amount of bugs found in your
            system.
          </p>
          <p>
            SoC allows you to keep your code self-sufficient, ignorant to any other code and above all else,
            maintainable. It increases reusability and confidence in what you are developing, all the while
            reducing dependency.
          </p>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default ArchitecturalPrinciples;

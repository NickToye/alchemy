import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomeCard from './components/home/HomeCard';
import ColoursCard from './components/colours/ColoursCard';
import TypographyCard from './components/typography/TypographyCard';
import ButtonsCard from './components/forms/ButtonsCard';
import LayoutCard from './components/layout/LayoutCard';
import AnimationsCard from './components/animations/AnimationsCard';
import CodeCard from './components/code/CodeCard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeCard} />
    <Route path="colours" component={ColoursCard} />
    <Route path="typography" component={TypographyCard} />
    <Route path="buttons" component={ButtonsCard} />
    <Route path="layout" component={LayoutCard} />
    <Route path="animations" component={AnimationsCard} />
    <Route path="code" component={CodeCard} />
  </Route>
);

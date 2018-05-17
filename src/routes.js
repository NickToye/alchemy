import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomeCard from './components/home/HomeCard';
import ColoursCard from './components/colours/ColoursCard';
import TypographyCard from './components/typography/TypographyCard';
import FormsCard from './components/forms/FormsCard';
import LayoutCard from './components/layout/LayoutCard';
import AnimationsCard from './components/animations/AnimationsCard';
import SurfacesCard from './components/surfaces/SurfacesCard';
import ComponentsCard from './components/components/ComponentsCard';
import CodeCard from './components/code/CodeCard';
import PlaygroundCard from './components/playground/PlaygroundCard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeCard} />
    <Route path="colours" component={ColoursCard} />
    <Route path="typography" component={TypographyCard} />
    <Route path="forms" component={FormsCard} />
    <Route path="layout" component={LayoutCard} />
    <Route path="animations" component={AnimationsCard} />
    <Route path="surfaces" component={SurfacesCard} />
    <Route path="components" component={ComponentsCard} />
    <Route path="code" component={CodeCard} />
    <Route path="playground" component={PlaygroundCard} />
  </Route>
);

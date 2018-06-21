import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomeCard from './components/home/HomeCard';
import DesignCard from './components/design/DesignCard';
import ColoursCard from './components/colours/ColoursCard';
import TypographyCard from './components/typography/TypographyCard';
import LayoutCard from './components/layout/LayoutCard';
import FormsCard from './components/forms/FormsCard';
import AnimationsCard from './components/animations/AnimationsCard';
import SurfacesCard from './components/surfaces/SurfacesCard';
import ComponentsCard from './components/components/ComponentsCard';
import BannerComponent from './components/components/banners/BannerComponent';
import CardComponent from './components/components/cards/CardComponent';
import NavigationComponent from './components/components/navigation/NavigationComponent';
import CodeCard from './components/code/CodeCard';
import Styles from './components/code/Styles';
import Html from './components/code/Html';
import JavaScript from './components/code/JavaScript';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeCard} />
    <Route path="design" component={DesignCard} />
    <Route path="colours" component={ColoursCard} />
    <Route path="typography" component={TypographyCard} />
    <Route path="layout" component={LayoutCard} />
    <Route path="forms" component={FormsCard} />
    <Route path="animations" component={AnimationsCard} />
    <Route path="surfaces" component={SurfacesCard} />
    <Route path="components" component={ComponentsCard} />
    <Route path="banners" component={BannerComponent} />
    <Route path="cards" component={CardComponent} />
    <Route path="navigation" component={NavigationComponent} />
    <Route path="code" component={CodeCard} />
    <Route path="styles" component={Styles} />
    <Route path="scripts" component={JavaScript} />
    <Route path="markup" component={Html} />
  </Route>
);

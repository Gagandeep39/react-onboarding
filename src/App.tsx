import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import Logo from './components/Logo';
import SummaryText from './components/SummaryText';
import Timeline from './components/Timeline';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

let counter = 0;
function App() {
  const navItems = [
    {
      index: 0,
      route: '/',
      label: 'Create Workspace',
      element: <Page1 />,
      heading: 'Welcome! First things first...',
      subheading: 'You can always change them later.',
    },
    {
      index: 1,
      route: '/page2',
      label: 'Create Workspace',
      element: <Page2 />,
      heading: "Let's set up a home for all your work",
      subheading: 'You can always create another workspace later.',
    },
    {
      index: 2,
      route: '/page3',
      label: 'Create Workspace',
      element: <Page3 />,
      heading: 'How are you planning to use Eden?',
      subheading: "We'll streamline your setup experience accordingly.",
    },
    {
      index: 3,
      route: '/page4',
      label: 'Launch Eden',
      element: <Page4 />,
      heading: 'Congratulations, Eren!',
      subheading: 'You have completed onboarding, you can start using Eden!',
    },
  ];
  const history = useNavigate();

  const onClick = () => {
    if (counter + 1 === navItems.length) counter = 0;
    else counter += 1;
    history(navItems[counter].route);
  };
  return (
    <div className="App">
      <div className="container">
        <Logo />
        <Timeline />
        <SummaryText
          heading={navItems[counter].heading}
          subheading={navItems[counter].subheading}
        />
        <div className="inner-container">
          <Routes>
            {navItems.map((item) => (
              <Route
                key={item.index}
                path={item.route}
                element={item.element}
              />
            ))}
          </Routes>
          <Button onClick={onClick} text={navItems[counter].label} />
        </div>
      </div>
    </div>
  );
}

export default App;

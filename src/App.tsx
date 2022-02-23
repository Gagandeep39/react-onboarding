import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Button from './components/Button/Button';
import Logo from './components/Logo/Logo';
import Timeline from './components/Timeline/Timeline';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';
import Page4 from './pages/Page4/Page4';

let counter = 0;
function App() {
  const navItems = [
    {
      index: 0,
      route: '/',
      label: 'Create Workspace',
      element: <Page1 />,
    },
    {
      index: 1,
      route: '/page2',
      label: 'Create Workspace',
      element: <Page2 />,
    },
    {
      index: 2,
      route: '/page3',
      label: 'Create Workspace',
      element: <Page3 />,
    },
    {
      index: 3,
      route: '/page4',
      label: 'Launch Eden',
      element: <Page4 />,
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
        <div className="title-container">
          <Logo />
          <Timeline total={navItems.length} activeIndex={counter} />
        </div>

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

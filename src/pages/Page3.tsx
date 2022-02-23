import styles from './Page3.module.scss';
import Card from '../components/Card';
import { useState } from 'react';
import SummaryText from '../components/SummaryText';

const Page3 = () => {
  const [active, setactive] = useState(-1);
  return (
    <div>
      <SummaryText
        heading="How are you planning to use Eden?"
        subheading="We'll streamline your setup experience accordingly."
      />
      <div className={styles.cardContainer + ' ' + 'form-group'}>
        <Card
          title="For Myself"
          description="Write better. Think more clearly. Stay organized."
          isActive={active === 0}
          clickEvent={() => setactive(0)}
        />
        <Card
          clickEvent={() => setactive(1)}
          title="For Myself"
          isActive={active === 1}
          description="Write better. Think more clearly. Stay organized."
        />
      </div>
    </div>
  );
};

export default Page3;

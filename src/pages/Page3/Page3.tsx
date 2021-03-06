import styles from './Page3.module.scss';
import { useState } from 'react';
import Card from '../../components/Card/Card';
import SummaryText from '../../components/SummaryText/SummaryText';

const Page3 = () => {
  const [active, setactive] = useState(-1);
  return (
    <div>
      <SummaryText
        heading="How are you planning to use Eden?"
        subheading="We'll streamline your setup experience accordingly."
      />
      <div className={styles.cardContainer + ' form-group'}>
        <Card
          title="For Myself"
          description="Write better. Think more clearly. Stay organized."
          isActive={active === 0}
          imageUrl="assets/person.svg"
          clickEvent={() => setactive(0)}
        />
        <Card
          clickEvent={() => setactive(1)}
          title="For Myself"
          isActive={active === 1}
          description="Write better. Think more clearly. Stay organized."
          imageUrl="assets/person2.svg"
        />
      </div>
    </div>
  );
};

export default Page3;

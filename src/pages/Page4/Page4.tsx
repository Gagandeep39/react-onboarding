import SummaryText from '../../components/SummaryText/SummaryText';
import styles from './Page4.module.scss';

const Page4 = () => {
  return (
    <div>
      <span className={styles.completed}>
        <span className={styles.check}></span>
      </span>
      <SummaryText
        heading="Congratulations, Eren!"
        subheading="You have completed onboarding, you can start using Eden!"
      />
    </div>
  );
};

export default Page4;

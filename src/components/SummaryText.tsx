import styles from './SummaryText.module.scss';

interface SummaryTextProps {
  heading: string;
  subheading: string;
}
const SummaryText = (props: SummaryTextProps) => {
  return (
    <div>
      <h1 className={styles.heading}>{props.heading}</h1>
      <p className={styles.subheading}>{props.subheading}</p>
    </div>
  );
};

export default SummaryText;

import styles from './Timeline.module.scss';

interface TimelineProps {
  activeIndex: number;
  total: number;
}

const Timeline = (props: TimelineProps) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.line}></div>
      {[...Array(props.total)].map((item, index: number) => (
        <span
          className={index <= props.activeIndex ? styles.active : ''}
          key={index}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
};

export default Timeline;

import styles from './Timeline.module.scss';

const items = [
  { active: true, label: '1' },
  { active: false, label: '2' },
  { active: false, label: '3' },
  { active: false, label: '4' },
];
interface TimelineProps {
  activeIndex: number;
}

const Timeline = (props: TimelineProps) => {
  items.forEach((item, index) => (item.active = index <= props.activeIndex));

  return (
    <div className={styles.timeline}>
      <div className={styles.line}></div>
      {items.map((item) => (
        <span className={item.active ? styles.active : ''} key={item.label}>
          {item.label}
        </span>
      ))}
    </div>
  );
};

export default Timeline;

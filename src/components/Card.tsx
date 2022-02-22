import logo from '../logo.svg';
import styles from './Card.module.scss';

interface CardProps {
  title: string;
  description: string;
  clickEvent: () => void;
  isActive?: boolean;
}

const Card = (props: CardProps) => {
  const classNames = [styles.card, props.isActive ? styles.active : ''].join(
    ' '
  );
  return (
    <div className={classNames} onClick={props.clickEvent}>
      <img src={logo} alt="Logo" />
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;

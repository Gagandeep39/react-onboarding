import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={styles.primaryBtn} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;

import { ChangeEvent } from 'react';
import styles from './TextField.module.scss';

interface TextFieldProps {
  label: string;
  hint?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  optionalText?: string;
  linkText?: string;
}

const TextField = (props: TextFieldProps) => {
  const optionaText = props.optionalText ? (
    <span className={styles.optional}> ({props.optionalText}) </span>
  ) : (
    ''
  );

  const linkBox = props.linkText ? (
    <input className={styles.link} disabled value={props.linkText} />
  ) : (
    ''
  );

  return (
    <div>
      <label className={styles.label} htmlFor="item">
        {props.label} {optionaText}
      </label>
      <div className={styles.linkContainer}>
        {linkBox}
        <input
          className={styles.input}
          type="text"
          onChange={props.onChange}
          placeholder={props.hint}
        />
      </div>
    </div>
  );
};

export default TextField;

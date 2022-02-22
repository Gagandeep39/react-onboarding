import { ChangeEvent } from 'react';
import styles from './TextField.module.scss';

interface TextFieldProps {
  label: string;
  hint?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  optionalText?: string;
}

const TextField = (props: TextFieldProps) => {
  const optionaText = props.optionalText ? (
    <span className={styles.optional}> ({props.optionalText}) </span>
  ) : (
    ''
  );

  return (
    <div>
      <label className={styles.label} htmlFor="item">
        {props.label} {optionaText}
      </label>
      <input
        className={styles.input}
        type="text"
        onChange={props.onChange}
        placeholder={props.hint}
      />
    </div>
  );
};

export default TextField;

import style from './SubmitButton.module.css';

interface Props {
  children: string;
}

export function SubmitButton({ children }: Props) {
  return <input className={style.button} type="submit" value={children} />;
}

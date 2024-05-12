import { useFormikContext } from 'formik'
import styles from './SaveButton.module.css'

export function SaveButton () {
  const { isValid } = useFormikContext()

  return (
    <button
      type="submit"
      disabled={!isValid}
      className={`${styles.gradientButton} ${!isValid
        ? styles.disabledButton
        : ''}`}
    >
      Click me to submit
    </button>)
}
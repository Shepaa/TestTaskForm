import styles from './Card.module.css';
import {Field} from 'formik';
import {ValidationError} from '../ValidationError/ValidationError';

export function Card() {
  return (
      <>
        <div className={styles.cardWrapper}>
          <div className={styles.cardTitle}>Номер картки</div>
          <div className={styles.cardNumbersWrapper}>
            <div className={styles.cardNumbers}>
              <Field type="text" name="firstNumbers" id="firstNumbers"/>
              {ValidationError('firstNumbers')}
            </div>
            <div className={styles.cardNumbers}>
              <Field type="text" name="secondNumbers" id="secondNumbers"/>
              {ValidationError('secondNumbers')}
            </div>
            <div className={styles.cardNumbers}>
              <Field type="text" name="thirdNumbers" id="thirdNumbers"/>
              {ValidationError('thirdNumbers')}
            </div>
            <div className={styles.cardNumbers}>
              <Field type="text" name="firthNumbers" id="firthNumbers"/>
              {ValidationError('firthNumbers')}
            </div>
          </div>
          <div className={styles.cardSecurityData}>
            <div
                className={`${styles.cardSecurityDataInputs} ${styles.ExpiredDataPositionFix}`}>
              <div className={styles.cardSecurityDataTitle}>Термін Дії
              </div>
              <Field type="text" name="cardExpiredData"
                     id="cardExpiredData"/>
              {ValidationError('cardExpiredData')}
            </div>
            <div
                className={`${styles.cardSecurityDataInputs} ${styles.CvvPositionFix}`}>
              <div className={styles.cardSecurityDataTitle}>CVV
              </div>
              <Field type="password" name="CVV"
                     id="CVV"/>
              {ValidationError('CVV')}
            </div>
          </div>
        </div>
      </>
  )
}
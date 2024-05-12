import styles from './PersonalData.module.css';
import {Field} from 'formik';

export function PersonalDataField({htmlAttributes, data, type}) {
  return (
      <>
        <label htmlFor={htmlAttributes}
               className={styles.fieldLabel}>{data}</label>
        <Field type={type} name={htmlAttributes} id={htmlAttributes}/>
      </>
  );
}
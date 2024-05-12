import styles from './style.module.css'

export function FormHeader () {
  return (
    <>
      <div className={styles.formTitle}>
        Заповніть Форму
      </div>
      <div className={styles.formSwitcherWrapper}>
        <div style={{
          backgroundColor: '#383d5b',
          color: 'white',
          padding: 7,
          cursor: 'pointer',
        }}>Фіз.Особа
        </div>
        <div
          style={{ color: '#383d5b', padding: 7, cursor: 'pointer' }}>Юр.особа
        </div>
      </div>
    </>
  )
}
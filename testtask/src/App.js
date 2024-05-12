import './global.css';
import {Field, Form, Formik} from 'formik';
import handImage from './images/icons8-hand-50.png';
import clothesImage from './images/icons8-clothes-50.png';
import {ValidationError} from './Features/ValidationError/ValidationError';
import styles from './App.module.css';
import {validationSchema} from './Utilities/validationSchema';
import {
  CreditCardOutlined, HeartFilled, WalletFilled,
} from '@ant-design/icons';
import {SaveButton} from './Features/SubmitBtn/SaveButton';
import {FormHeader} from './Features/FormHeader';
import {formInitialValues} from './Utilities/formInitialValues';
import {PersonalDataField} from './Features/PersonalDataFields';
import {Card} from './Features/Card';

const onSubmit = (values, {resetForm}) => {
  console.log(values);
  resetForm();
};

function App() {

  return (
      <div className={styles.formWrapper}>
        <FormHeader/>
        <Formik
            enableReinitialize={true}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={formInitialValues}>
          <Form style={{width: '100%'}}>
            <div className={styles.fieldsWrapper}>
              <div className={styles.leftFields}>
                <div className={styles.rowFields}>
                  <div className={styles.fieldItem}>
                    <PersonalDataField htmlAttributes={'firstName'}
                                       data={'Ім\'я'} type={'text'}/>
                    {ValidationError('firstName')}
                  </div>
                  <div className={`${styles.fieldItem} ${styles.lastName}`}>
                    <PersonalDataField htmlAttributes={'lastName'}
                                       data={'Фамілія'} type={'text'}/>
                    {ValidationError('lastName')}
                  </div>
                </div>
                <div
                    className={`${styles.fieldItem} ${styles.InputFieldWidthFix}`}>
                  <PersonalDataField htmlAttributes={'organisation'}
                                     data={'Назва компанії, організація'}
                                     type={'text'}/>
                  {ValidationError('organisation')}
                </div>
                <div
                    className={`${styles.fieldItem} ${styles.InputFieldWidthFix}`}>
                  <PersonalDataField htmlAttributes={'email'} data={'Email'}
                                     type={'email'}/>
                  {ValidationError('email')}
                </div>
                <div
                    className={`${styles.fieldItem} ${styles.InputFieldWidthFix}`}>
                  <PersonalDataField htmlAttributes={'phone'}
                                     data={'Номер телефона'} type={'phone'}/>
                  {ValidationError('phone')}
                </div>
              </div>
              <div className={styles.rightFields}>
                <div
                    className={`${styles.fieldItem} ${styles.InputFieldWidthFix}`}>
                  <PersonalDataField htmlAttributes={'country'} data={'Країна'}
                                     type={'text'}/>
                  {ValidationError('country')}
                </div>
                <div className={styles.rowFields}>
                  <div className={styles.fieldItem}>
                    <PersonalDataField htmlAttributes={'city'} data={'Місто'}
                                       type={'text'}/>
                    {ValidationError('city')}
                  </div>
                  <div className={`${styles.fieldItem} ${styles.lastName}`}>
                    <PersonalDataField htmlAttributes={'area'}
                                       data={'Штат, Район'} type={'text'}/>
                    {ValidationError('area')}
                  </div>
                </div>
                <div
                    className={`${styles.fieldItem} ${styles.InputFieldWidthFix}`}>
                  <PersonalDataField htmlAttributes={'address'} data={'Адреса'}
                                     type={'text'}/>
                  {ValidationError('address')}
                </div>
                <div
                    className={`${styles.fieldItem} ${styles.PostCodeWidthFix}`}>
                  <PersonalDataField htmlAttributes={'postCode'}
                                     data={'Поштовий Індекс'}
                                     type={'postCode'}/>
                  {ValidationError('postCode')}
                </div>
              </div>
            </div>
            <div className={styles.helpBlockWrapper}>
              <div className={styles.formTitle}>
                Види Допомоги
              </div>
              <div className={styles.subTitles}>
                Ви можете змінити вид допомоги
              </div>
              <div className={styles.helpBlockOptionWrapper}>
                <div className={styles.helpBlockItem}>
                  <div className={styles.helpBlockOption}>
                    <div className={styles.iconContainer}>
                      <img src={handImage} alt="hand"/>
                    </div>
                  </div>
                  <div className={styles.helpBlockOptionTitle}>Зробити</div>
                </div>
                <div className={styles.helpBlockItem}>
                  <div className={styles.helpBlockOption}>
                    <div className={styles.iconContainer}
                         style={{
                           backgroundColor: '#926296',
                           borderRadius: 10,
                           width: '100%',
                         }}>
                      <WalletFilled className={styles.Icon}/>
                    </div>
                  </div>
                  <div className={styles.helpBlockOptionTitle}>Фінансова<br/>Допомога
                  </div>
                </div>


                <div className={styles.helpBlockItem}>
                  <div className={styles.helpBlockOption}>
                    <div className={styles.iconContainer}>
                      <img src={clothesImage} alt="hand"/>
                    </div>
                  </div>
                  <div className={styles.helpBlockOptionTitle}>Матеріальна<br/>Допомога
                  </div>

                </div>
                <div className={styles.helpBlockItem}>
                  <div className={styles.helpBlockOption}>
                    <div className={styles.iconContainer}>
                      <HeartFilled className={styles.Icon}/>
                    </div>
                  </div>
                  <div className={styles.helpBlockOptionTitle}>
                    Волонтерство
                  </div>

                </div>
              </div>

              <div className={styles.paymentBlock}>
                <div>
                  <div className={styles.paymentTitle}>Спосіб оплати</div>
                  <div className={styles.cardRowWrapper}>
                    <div className={styles.cardOption}>
                      <div className={styles.cardTitleWrapper}>
                        <CreditCardOutlined style={{marginRight: 10}}/>
                        <div>VISA</div>
                      </div>
                      <div style={{marginBottom: 10}}> Картка Visa/MasterCard
                      </div>
                    </div>

                    <div className={styles.cardOption}
                         style={{backgroundColor: '#926296'}}>
                      <div className={styles.cardTitleWrapper}>
                        <CreditCardOutlined style={{marginRight: 10}}/>
                        <div>VISA</div>
                      </div>
                      <div style={{marginBottom: 10}}> Картка Visa/MasterCard
                      </div>
                    </div>
                    <div className={styles.cardOption}>
                      <div className={styles.cardTitleWrapper}>
                        <CreditCardOutlined style={{marginRight: 10}}/>
                        <div>VISA</div>
                      </div>
                      <div style={{marginBottom: 10}}> Картка Visa/MasterCard
                      </div>
                    </div>

                  </div>
                  <div className={styles.cardRowWrapper}
                       style={{marginTop: 20}}>
                    <div className={styles.cardOption}
                         style={{marginBottom: 20}}>
                      <div className={styles.cardTitleWrapper}>
                        <CreditCardOutlined style={{marginRight: 10}}/>
                        <div>VISA</div>
                      </div>
                      <div style={{marginBottom: 10}}> Картка Visa/MasterCard
                      </div>
                    </div>
                    <div className={styles.cardOption}
                         style={{marginBottom: 20}}>
                      <div className={styles.cardTitleWrapper}>
                        <CreditCardOutlined style={{marginRight: 10}}/>
                        <div>VISA</div>
                      </div>
                      <div style={{marginBottom: 10}}> Картка Visa/MasterCard
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Card/>
                </div>
              </div>
            </div>
            <SaveButton/>
          </Form>
        </Formik>
      </div>
  );

}

export default App;
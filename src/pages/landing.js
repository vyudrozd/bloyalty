import React from 'react';
import { useSelector } from 'react-redux';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { useState } from 'react/cjs/react.production.min';
import { useHistory } from 'react-router';
import { Col, Row } from '../components/UI/Grid';
import s from '../../styles/pages/landing.styl';
import Page from '../components/Page';
import { getUserData } from '../../lib/store/user/selectors';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

const Landing = ({ handleSubmit, error }) => {
  const userData = useSelector(getUserData);

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  console.log(userData);

  const [isRegistration, setIsReg] = useState(false);

  const toggle = () => {
    setIsReg(!isRegistration);
  };

  const onSubmit = values => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (values.authLogin === 'demo_deloitte' && values.authPassword === '12345') {
        history.push('/profile');
      } else {
        throw new SubmissionError({
          authLogin: 'Ошибка авторизации',
          _error: 'Ошибка авторизации',
        });
      }
    }, 1000);
  };

  return (
    <Page>
      <div className={s.landingName}>
        <Row className={s.topRow}>
          <Col size={12} className={s.topContainer}>
            <h1 className={s.projectName}>Bloyalty</h1>
            <div className={s.projectDescription}>Сервис для анализа вашей аудитории</div>
          </Col>
        </Row>
        <Row className={s.mainContent}>
          <Col size={6}>
            <div className={s.infoList}>
              <div className={s.infoTitle}>Зачем использовать Bloyalty?</div>
              <div className={s.infoSubtitle}>Для брендов: </div>
              <ul className={s.listWrapper}>
                <li className={s.listItem}>- учитесь продвигать ваши товары</li>
                <li className={s.listItem}>- анализируйте лояльность вашей аудитории</li>
                <li className={s.listItem}>- повышайте интерес вашей аудитории к вашему бренду</li>
              </ul>
            </div>
            <div className={s.infoSubtitle}>Для пользователей: </div>
            <ul className={s.listWrapper}>
              <li className={s.listItem}>- участвуйте в жизни ваших любимых контент-мейкеров</li>
              <li className={s.listItem}>- получайте за это награды</li>
            </ul>
          </Col>
          <Col size={6}>
            <form onSubmit={handleSubmit(onSubmit)} className={s.middleSetter}>
              <div className={s.formTitle}>{!isRegistration ? 'Авторизация в сервисе' : 'Регистрация'}</div>
              <div className={s.formSubtitle}>Логин</div>
              <Field
                component={Input}
                name="authLogin"
                placeholder="Ваш логин"
                inputWrapClass={s.inputWrap}
                className={s.input}
                // meta={{
                //   error: 'Ошибка авторизации',
                //   touched: true,
                // }}
              />
              <div className={s.formSubtitle}>Пароль</div>
              <Field
                component={Input}
                name="authPassword"
                type="password"
                placeholder="Пароль"
                inputWrapClass={s.inputWrap}
                className={s.input}
              />
              {isRegistration && (
                <>
                  <div className={s.formSubtitle}>Подтвердите пароль</div>
                  <Field
                    component={Input}
                    name="authPasswordConfirm"
                    type="password"
                    placeholder="Подтвердите пароль"
                    inputWrapClass={s.inputWrap}
                    className={s.input}
                  />
                </>
              )}
              <Button innerLoading={loading} className={s.authButton} variant="primaryVelvet" type="submit">{!isRegistration ? 'Авторизоваться' : 'Зарегистрироваться'}</Button>
              <div className={s.hintText}>
                {!isRegistration ? (
                  <>
                    Еще не имеете аккаунта? Вы можете
                    {' '}
                    <Button onClick={toggle} className={s.switchButton} variant="textLike">
                      зарегистрироваться
                    </Button>
                  </>
                ) : (
                  <>
                    Уже зарегистрированы?
                    {' '}
                    <Button onClick={toggle} className={s.switchButton} variant="textLike">Авторизуйтесь</Button>
                  </>
                )}
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Page>
  );
};

export default reduxForm({ form: 'auth' })(Landing);

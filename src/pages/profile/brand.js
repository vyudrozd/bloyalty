import cx from 'classnames';
import React from 'react';
import { useState } from 'react/cjs/react.production.min';
import s from '../../../styles/pages/profile.styl';
import Input from '../../components/UI/Input';
import Select from '../../components/UI/Select';
import Material from '../../components/Material';

const link = 'https://vyudrozd.github.io/bloyalty/vote?id=1&link_id=7';

const Brand = () => {
  const [selectText, setSelect] = useState('Выбрать...');
  return (
    <>
      <div className={s.whiteBox}>
        <div className={s.sectionTitle}>Ваша ссылка для интеграции</div>
        <Input copyValue={link} copyStyle inputWrapClass={s.copyInput} />
        <div className={cx(s.sectionTitle, s.marginTop)}>Что это такое?</div>
        <div className={s.sectionInfo}>Интегрируйте эту ссылку, в вашу рекламу, чтобы отслеживать интерес аудитории к вам</div>
      </div>
      <div className={s.whiteBox}>
        <div className={s.sectionTitle}>Награды за голосование</div>
        <Material className={s.material} authorName="Вы" materialName="Lesson1" variant="pdf" />
        <Material className={s.material} authorName="Вы" materialName="Lesson2" variant="file" />
        <Material className={s.material} authorName="Вы" materialName="Lesson3" variant="link" />
        <div className={s.addMaterial}>Добавить награду</div>
      </div>
    </>
  );
};

export default Brand;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, Button, Modal, Input, Tooltip, Icon, Radio, InputNumber } from 'antd';

import './intro.scss';

export default ({ actions: { setTestState, setTestUser } }) => {
  const [t] = useTranslation('shared');
  const [agree, setAgree] = useState(false);
  const [nickname, setNickname] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const startTest = (setTestState, setTestUser) => {
    setShowInstructions(false);
    setTestState('inProgress');
    setTestUser({
      nickname,
      sex,
      age
    });
  };
  return (
    <div className="test-intro">
      <h2>{t('ui.intro.acknowledgement')}</h2>
      <Checkbox checked={agree} onChange={e => setAgree(e.target.checked)} />
      <span>{t('ui.intro.agreement')}</span>
      <br />
      <Button disabled={!agree} type="primary" onClick={() => setShowInstructions(true)}>
        {t(agree ? 'ui.intro.continue' : 'ui.intro.pleaseCheck')}
      </Button>
      <Modal
        className="test-intro-instructions"
        centered={true}
        title={t('ui.intro.instructions.title')}
        visible={showInstructions}
        closeIcon={null}
        maskClosable={false}
        footer={
          <Button type="primary" onClick={() => startTest(setTestState, setTestUser)}>
            {t('ui.intro.start')}
          </Button>
        }
      >
        <p>{t('ui.intro.instructions.p1')}</p>
        <p>{t('ui.intro.instructions.p2')}</p>
        <Input
          onChange={e => setNickname(e.target.value)}
          value={nickname}
          placeholder={t('ui.intro.instructions.nickname')}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title={t('ui.intro.instructions.nicknameDetails')}>
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <div className="user-question-container">
          <span className="select-sex">{t('ui.intro.instructions.sex')}</span>

          <Radio.Group onChange={e => setSex(e.target.value)} value={sex}>
            <Radio value={'male'}>{t('ui.intro.instructions.male')}</Radio>
            <Radio value={'female'}>{t('ui.intro.instructions.female')}</Radio>
            <Radio value={'other'}>{t('ui.intro.instructions.other')}</Radio>
          </Radio.Group>
        </div>

        <div className="user-question-container">
          <span className="select-sex">{t('ui.intro.instructions.age')}</span>
          <InputNumber onChange={val => setAge(val)} value={age} max={100} precision={0} />
        </div>
      </Modal>
    </div>
  );
};

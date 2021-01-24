import React, { useState } from 'react';

import Icon from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon/user';
import { ic_assignment } from 'react-icons-kit/md/ic_assignment';
import { ic_info_outline } from 'react-icons-kit/md/ic_info_outline';
import { ic_mail_outline } from 'react-icons-kit/md/ic_mail_outline';
import { ic_menu } from 'react-icons-kit/md/ic_menu';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import './component.scss';
import { Modal } from 'antd';

export const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const history = useHistory();
  function navigate(path) {
    setMenuVisible(false);
    history.push(path);
  }
  const [t] = useTranslation('shared');

  return (
    <nav className="header">
      <div className="header-brand" onClick={() => navigate('/')}>
        <img src="/assets/images/ipip.png" alt="notfound" />
      </div>

      <div className="header-test" onClick={() => navigate('/test')}>
        <span>{t('ui.header.takeTest')}</span>
        <Icon size={35} icon={ic_assignment} />
      </div>

      <div className="header-about" onClick={() => navigate('/about')}>
        <span>{t('ui.header.about')}</span>
        <Icon size={35} icon={ic_info_outline} />
      </div>

      <div className="header-contact" onClick={() => navigate('/contact')}>
        <span>{t('ui.header.contact')}</span>
        <Icon size={35} icon={ic_mail_outline} />
      </div>

      <div className="header-user">
        <Icon size={45} icon={user} />
      </div>

      <div onClick={() => setMenuVisible(true)} className="header-small-menu">
        <Icon size={45} icon={ic_menu} />
      </div>

      <Modal
        width="80vw"
        closeIcon={false}
        onCancel={() => setMenuVisible(false)}
        maskClosable={true}
        visible={menuVisible}
        footer={null}
      >
        <div className="header-test" onClick={() => navigate('/test')}>
          <span>{t('ui.header.takeTest')}</span>
          <Icon size={35} icon={ic_assignment} />
        </div>

        <div className="header-about" onClick={() => navigate('/about')}>
          <span>{t('ui.header.about')}</span>
          <Icon size={35} icon={ic_info_outline} />
        </div>

        <div className="header-contact" onClick={() => navigate('/contact')}>
          <span>{t('ui.header.contact')}</span>
          <Icon size={35} icon={ic_mail_outline} />
        </div>

        <div className="header-user">
          <span>{t('ui.header.user')}</span>

          <Icon size={35} icon={user} />
        </div>
      </Modal>
    </nav>
  );
};

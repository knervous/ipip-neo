import React, { useState, useEffect } from 'react';
import QuestionContainer from './QuestionContainer';
import TestIntro from './TestIntro';
import './test.scss';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from '../GlobalState/GlobalState';
import { Modal, Button } from 'antd';

export default () => (
  <GlobalContext.Consumer>
    {({ actions, state }) => <TestContainer actions={actions} state={state} />}
  </GlobalContext.Consumer>
);

const TestContainer = ({
  actions,
  state,
  actions: { resetTestState, restoreTestState },
  state: {
    test: { state: testState }
  }
}) => {
  const [index, setIndex] = useState(0);
  const [showInProgress, setShowInProgress] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [t] = useTranslation('shared');
  const scaleDegrees = ['inaccurate', 'moderatelyInaccurate', 'neither', 'moderatelyAccurate', 'accurate'].map(s =>
    t(`ui.test.scale.${s}`)
  );

  useEffect(() => {
    if (!window.localStorage) {
      return;
    }
    const localData = localStorage.getItem('testState');
    if (localData) {
      try {
        const testState = JSON.parse(localData);
        if (testState.state === 'inProgress') {
          setShowInProgress(true);
        }
      } catch (e) {}
    }
  }, []);

  const reset = () => {
    resetTestState();
    setShowInProgress(false);
  };

  const restore = () => {
    setShowInProgress(false);
    const testState = JSON.parse(localStorage.getItem('testState'));
    const newIndex = Object.keys(testState.questionsAnswered).reduce(
      (acc, val) => (parseInt(val) % 5 === 0 && parseInt(val) > acc ? parseInt(val) : acc),
      0
    );
    setIndex(newIndex);
    restoreTestState(testState);
  };

  return (
    <div className="home-container">
      <Modal
        className="restore-session-modal"
        title={t('ui.test.restoreSession')}
        visible={showInProgress}
        closable={false}
        closeIcon={null}
        footer={
          <div>
            <Button onClick={reset}>{t('ui.test.reset')}</Button>
            <Button type="primary" onClick={restore}>
              {t('ui.test.restore')}
            </Button>
          </div>
        }
      >
        <p>{t('ui.test.restoreSessionDetails')}</p>
      </Modal>
      {testState === 'notStarted' ? (
        <TestIntro actions={actions} state={state} />
      ) : (
        <QuestionContainer
          index={index}
          pageSize={pageSize}
          scaleDegrees={scaleDegrees}
          pageNext={() => setIndex(index + pageSize)}
          pagePrev={() => setIndex(index - pageSize)}
        />
      )}
    </div>
  );
};

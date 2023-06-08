import React, { useState, useEffect, useCallback } from "react";
import {QuestionContainer} from "../QuestionContainer";
import {TestIntro} from "../TestIntro";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../GlobalState/GlobalState";
import { Modal, Button } from "antd";

import "./component.scss";
import {Finished} from "../Finished";

export const TestContainer = () => (
  <GlobalContext.Consumer>
    {({ actions, state }) => <TestContainerComponent actions={actions} state={state} />}
  </GlobalContext.Consumer>
);

const TestContainerComponent = ({
  actions,
  state,
  actions: { resetTestState, restoreTestState },
  state: {
    test: {
      state: testState,
      settings: { pageQuestions },
      testType,
      finished
    },
    test
  }
}) => {
  const testLength = testType === "long" ? 10 : 120;
  const [index, setIndex] = useState(0);
  const [showInProgress, setShowInProgress] = useState(false);
  const [pageSize, setPageSize] = useState(pageQuestions === "five" ? 5 : pageQuestions === "one" ? 1 : testLength);
  const [t] = useTranslation("shared");
  const scaleDegrees = ["inaccurate", "moderatelyInaccurate", "neither", "moderatelyAccurate", "accurate"].map(s =>
    t(`ui.test.scale.${s}`)
  );

  useEffect(() => {
    if (!window.localStorage) {
      return;
    }
    const localData = localStorage.getItem("testState");
    if (localData) {
      try {
        const testState = JSON.parse(localData);
        if (testState.state === "inProgress") {
          setShowInProgress(true);
        }
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    const newPageSize = pageQuestions === "five" ? 5 : pageQuestions === "one" ? 1 : testLength;
    setPageSize(newPageSize);
    const newIndex = Object.keys(test.questionsAnswered).reduce(
      (acc, val) => (parseInt(val) % newPageSize === 0 && parseInt(val) > acc ? parseInt(val) : acc),
      0
    );
    setIndex(newIndex);
  }, [pageQuestions]); // eslint-disable-line


  const nextPage = useCallback(() => {
    if(index + pageSize + 1 >= testLength) {
      actions.setTestFinished(true);
      actions.finishTest();
    } else {
      setIndex(index + pageSize);
    }
    
  },[index, pageSize])

  const reset = () => {
    resetTestState();
    setShowInProgress(false);
  };

  const restore = () => {
    setShowInProgress(false);
    const testState = JSON.parse(localStorage.getItem("testState"));
    const newIndex = Object.keys(testState.questionsAnswered).reduce(
      (acc, val) => (parseInt(val) % 5 === 0 && parseInt(val) > acc ? parseInt(val) : acc),
      0
    );
    setIndex(newIndex);
    restoreTestState(testState);
  };

  return (
    <div className='home-container'>
      {finished ? (
        <Finished goBack={() => setIndex(index - pageSize)}  />
      ) : (
        <>
          <Modal
            className='restore-session-modal'
            title={t("ui.test.restoreSession")}
            visible={showInProgress}
            closable={false}
            closeIcon={null}
            footer={
              <div>
                <Button onClick={reset}>{t("ui.test.reset")}</Button>
                <Button type='primary' onClick={restore}>
                  {t("ui.test.restore")}
                </Button>
              </div>
            }
          >
            <p>{t("ui.test.restoreSessionDetails")}</p>
          </Modal>
          {testState === "notStarted" ? (
            <TestIntro actions={actions} state={state} />
          ) : (
            <QuestionContainer
              state={state}
              actions={actions}
              index={index}
              pageSize={pageSize}
              scaleDegrees={scaleDegrees}
              pageNext={nextPage}
              pagePrev={() => setIndex(index - pageSize)}
            />
          )}
        </>
      )}
    </div>
  );
};

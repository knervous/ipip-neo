import { Button, Icon, Modal, Radio } from "antd";
import classnames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import FadeIn from "react-fade-in";
import { useTranslation } from "react-i18next";

import { longTestMap } from "./testMap";

export const QuestionContainer = props => {
  const [t] = useTranslation("shared");
  const {
    state: {
      test: {
        questionsAnswered,
        testType,
        settings: { pageQuestions }
      }
    },
    actions: { setAnswer, setPageQuestions }
  } = props;
  const [showSettings, setShowSettings] = useState(false);
  const [localPageQuestions, setLocalPageQuestions] = useState(pageQuestions);
  const [loading, setLoading] = useState(false);
  const { index, pageSize, pageNext, pagePrev, scaleDegrees } = props;
  const questionsRef = useRef(null);
  const isLongTest = testType === "long";
  const questionBlock = Array.from(new Array(pageSize), (_, localIndex) =>
    t(`ui.test.questions.${isLongTest ? longTestMap[(localIndex + index + 1).toString()] : localIndex + index + 1}`)
  );
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const mainContent = document.querySelector(".main-content");

      if (mainContent) {
        mainContent.scrollTo({ top: 0, behavior: "smooth" });
      }

      setLoading(false);
    }, 0);
  }, [index]);

  const questionNumbers = questionBlock.map((_, localIndex) => index + localIndex + 1);
  const commitSettings = () => {
    setPageQuestions(localPageQuestions);
    setShowSettings(false);
  };
  return (
    <React.Fragment>
      <div ref={questionsRef}>
        <Modal
          title={t("ui.test.testSettings")}
          className='test-settings-modal'
          onCancel={() => setShowSettings(false)}
          visible={showSettings}
          closable={true}
          footer={<Button onClick={commitSettings}>{t("ui.test.saveSettings")}</Button>}
        >
          <h3>{t("ui.test.questionDisplay")}</h3>
          <Radio.Group onChange={e => setLocalPageQuestions(e.target.value)} value={localPageQuestions}>
            <Radio value={"one"}>{t("ui.test.oneQuestion")}</Radio>
            <Radio value={"five"}>{t("ui.test.fiveQuestion")}</Radio>
            <Radio value={"all"}>{t("ui.test.allQuestion")}</Radio>
          </Radio.Group>
        </Modal>

        <div className='question-header'>
          <div onClick={() => setShowSettings(true)} className='test-settings-toggle'>
            <span>{t("ui.test.testSettings")}</span>
            <Icon theme='filled' type='setting' />
          </div>
          <p className='question-description'>{t("ui.test.describe")}</p>
        </div>
        {questionBlock.map((question, localIndex) => {
          const questionNumber = index + localIndex + 1;
          return loading ? (
            <div style={{ height: `${pageSize * 20}vh` }}></div>
          ) : (
            <FadeIn>
              <div key={index + localIndex} className='test-question-container'>
                {/* Question line */}

                <div className='test-question-container__line'>
                  <div
                    className={classnames("test-question-container__button", {
                      "test-question-container__button--checked": true
                    })}
                  >
                    <p>{questionNumber}.</p>
                  </div>
                  <span>{question}</span>
                </div>
                {/* Answer blocks */}
                <div className='test-answer-container'>
                  {scaleDegrees.map((text, index) => (
                    <div
                      onClick={() => {
                        setAnswer(questionNumber, index + 1);
                        if (localPageQuestions === "one") {
                          pageNext();
                        }
                      }}
                      className={classnames("scale-degree", {
                        "scale-degree-selected": questionsAnswered[questionNumber] === index + 1,
                        "scale-degree-inactive":
                          questionsAnswered[questionNumber] !== undefined && questionsAnswered[questionNumber] !== index + 1
                      })}
                    >
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <div className='test-question-buttons'>
        <button disabled={index === 0} onClick={pagePrev} className='home-start'>
          <span>Back</span>
        </button>
        <button
          disabled={!questionNumbers.every(n => questionsAnswered[n] !== undefined)}
          onClick={pageNext}
          className='home-start'
        >
          <span>Next</span>
        </button>
      </div>
    </React.Fragment>
  );
};

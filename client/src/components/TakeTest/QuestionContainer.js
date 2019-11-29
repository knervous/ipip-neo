import React, { useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from '../GlobalState/GlobalState';
import FadeIn from 'react-fade-in';
import { Spin } from 'antd';
export default props => {
  const [t] = useTranslation('shared');
  const [loading, setLoading] = useState(false);
  const { index, pageSize, pageNext, pagePrev, scaleDegrees } = props;
  const questionsRef = useRef(null);
  const questionBlock = Array.from(new Array(pageSize), (_, localIndex) =>
    t(`ui.test.questions.${localIndex + index + 1}`)
  );
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const mainContent = document.querySelector('.main-content');

      if (mainContent) {
        mainContent.scrollTo({ top: 0, behavior: 'smooth' });
      }

      setLoading(false);
    }, 0);
  }, [index]);

  return (
    <GlobalContext.Consumer>
      {({
        state: {
          test: { questionsAnswered, finished }
        },
        actions: { setAnswer }
      }) => {
        const questionNumbers = questionBlock.map((_, localIndex) => index + localIndex + 1);

        return (
          <React.Fragment>
            <div ref={questionsRef}>
              <p className="question-description">{t('ui.test.describe')}</p>
              {questionBlock.map((question, localIndex) => {
                const questionNumber = index + localIndex + 1;
                return loading ? (
                  <div style={{ height: '100vh' }}>
                    <Spin />
                  </div>
                ) : (
                  <FadeIn>
                    <div key={index + localIndex} className="test-question-container">
                      {/* Question line */}

                      <div className="test-question-container__line">
                        <div
                          className={classnames('test-question-container__button', {
                            'test-question-container__button--checked': true
                          })}
                        >
                          <p>{questionNumber}.</p>
                        </div>
                        <span>{question}</span>
                      </div>
                      {/* Answer blocks */}
                      <div className="test-answer-container">
                        {scaleDegrees.map((text, index) => (
                          <div
                            onClick={() => setAnswer(questionNumber, index)}
                            className={classnames('scale-degree', {
                              'scale-degree-selected': questionsAnswered[questionNumber] === index,
                              'scale-degree-inactive':
                                questionsAnswered[questionNumber] !== undefined &&
                                questionsAnswered[questionNumber] !== index
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

            <div className="test-question-buttons">
              <button disabled={index === 0} onClick={pagePrev} className="home-start">
                <span>Back</span>
              </button>
              <button
                disabled={!questionNumbers.every(n => questionsAnswered[n] !== undefined)}
                onClick={pageNext}
                className="home-start"
              >
                <span>Next</span>
              </button>
            </div>
          </React.Fragment>
        );
      }}
    </GlobalContext.Consumer>
  );
};

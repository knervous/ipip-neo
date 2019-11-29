import i18next from 'i18next';
import { actionMap } from '../actions';

export async function changeLanguage(language) {
  await i18next.changeLanguage(language);
  this.dispatch(actionMap.setLanguage(language));
}

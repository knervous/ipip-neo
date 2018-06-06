import * as globalConstantsImport from "./globalConstants";
import * as errorConstantsImport from "./errorConstants";
import * as messageServiceConstantsImport from "./messageServiceConstants";

export const globalConstants = globalConstantsImport;
export const errorConstants = errorConstantsImport;
export const messageServiceConstants = messageServiceConstantsImport;

export default {
  global: globalConstantsImport,
  error: errorConstantsImport,
  messageService: messageServiceConstantsImport
};

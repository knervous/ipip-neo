import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import xmlhttprequest from "xmlhttprequest";

global.XMLHttpRequest = xmlhttprequest.XMLHttpRequest;

configure({ adapter: new Adapter() });

export const createErrorResponse = errorCode => ({
  errorCode
});

export { execObservableEpicTest, ignoreMeta, createMockStore } from "./observable-epic-test";

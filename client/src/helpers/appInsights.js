import { AppInsights } from "applicationinsights-js";

const defaultProperties = {
  "Minitab App": process.env.REACT_APP_APP_NAME,
  "Minitab AppType": process.env.REACT_APP_APP_TYPE
};

export const configureAppInsights = history => {
  // Call downloadAndSetup to download full ApplicationInsights script from CDN and initialize it with instrumentation key
  AppInsights.downloadAndSetup({ instrumentationKey: process.env.REACT_APP_APP_INSIGHTS_KEY });

  // Log initial route
  const location = history.location;
  trackPageView(location.pathname, { search: location.search, state: location.state, action: "INITIAL" });

  // register for all route changes and log
  history.listen((location, action) => {
    trackPageView(location.pathname, { search: location.search, state: location.state, action });
  });
};

export const trackPageView = (route, properties) => {
  const combinedProperties = { ...properties, ...defaultProperties };
  AppInsights.trackPageView(
    null /* (optional) page name */,
    route /* (optional) page url if available */,
    combinedProperties /* (optional) dimension dictionary */
    // { measurement1: 1 }, /* (optional) metric dictionary */
    // 123 /* page view duration in milliseconds */
  );
};

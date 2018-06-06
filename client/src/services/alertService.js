import React from "react";
import { actions as toastrActions, toastr } from "react-redux-toastr";
import ErrorDisplay from "../components/reusable/ErrorDisplay";

export function displayAlertDelay(error, toastType = "warning") {
  setTimeout(() => {
    displayAlert(error, toastType);
  }, 50);
}

const buildComponent = error => <ErrorDisplay error={error} />;

export function clearAlert() {
  toastr.clean();
}

export function displayAlert(error, toastType = "warning") {
  clearAlert();
  if (error) {
    const options = {
      component: buildComponent(error)
    };
    toastr[toastType]("", "", options);
  }
}

export function displayAlertAction(error, toastType = "warning", opts) {
  return toastrActions.add({
    type: toastType,
    position: opts && opts.position ? opts.position : "top-right",
    options: {
      component: buildComponent(error),
      ...opts
    }
  });
}

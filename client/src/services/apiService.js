import axios from 'axios';
import querystring from 'querystring';
import FormData from 'form-data';

import { dataConnectionService } from '../services/dataConnectionService';

const defaultOptions = {
  headers     : {},
  responseType: 'json'
};

const requestVerbs = {
  POST   : 'post',
  GET    : 'get',
  PUT    : 'put',
  OPTIONS: 'options',
  PATCH  : 'patch'
};

const errorCodes = {
  sessionLost: 100
};

export const request = (method, url, options, recoverable = true) => {
  options = {
    ...defaultOptions,
    ...options
  };
  return new Promise((res, rej) => {
    axios
      .request({ url, method, ...options })
      .then(response => {
        res(response.data);
      })
      .catch(e => {
        console.error(e);
        if (e.response) {
          const { status, data } = e.response;
          if (data && status === 400) {
            const { errorCode } = data;
            switch (errorCode) {
              case errorCodes.sessionLost:
                if (recoverable) {
                  console.error('Session was dropped, attempting to restore.');
                  dataConnectionService.restoreConnection();
                }
                break;
              default:
                break;
            }
          }
        }
        rej(e);
      })
      .finally(() => {
        // Cleanup
      });
  });
};

// Claims

export const getClaims = () => {
  return request(requestVerbs.GET, '/claims/user');
};

// Project

export const setProjectId = async projectId => {
  const oldProject = getProjectFromStorage();
  if (window.sessionStorage) {
    window.sessionStorage.setItem('projectId', projectId);
  }
  if (oldProject && oldProject !== projectId) {
    try {
      await setProjectStale(oldProject);
    } catch {
      // ignore errors from stale call, we could be setting the project because that session is gone.
      // in those cases this end point would fail everytime anyway
      // even if its a transient error the pod will handle cleaning itself up
    }
  }
};

const getProjectFromStorage = () => {
  if (window.sessionStorage) {
    const projectId = window.sessionStorage.getItem('projectId');
    if (projectId) {
      return projectId;
    }
  }
};

export const getProjectId = async () => {
  let id = getProjectFromStorage();
  if (id) {
    return id;
  }
  id = (await createProject()).id;
  await setProjectId(id);
  return id;
};

export const createProject = () => request(requestVerbs.POST, '/api/projects');

const setProjectStale = projectId => request(requestVerbs.POST, `/api/projects/${projectId}/stale`, {}, false);

export const releaseProject = () => {
  const id = getProjectFromStorage();
  if (!id) {
    return;
  }
  if (!dataConnectionService.getConnection() || dataConnectionService.getConnection().type === 'local') {
    // don't mark the project stale if its local, since we can't recover as easy as an external file
    return;
  }
  const url = `/api/projects/${id}/stale`;
  if (navigator && navigator.sendBeacon) {
    navigator.sendBeacon(url);
  } else {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);
    xhr.withCredentials = true;
    try {
      xhr.send();
    } catch (error) {}
  }
};

export const getProjectInfo = projectId => request(requestVerbs.GET, `/api/projects/${projectId}`);

export const openFsProject = (file, projectId) => {
  const data = new FormData();
  data.append('file', file);
  return request(requestVerbs.POST, `/api/projects/${projectId}/open`, {
    data,
    headers: {
      ...defaultOptions.headers,
      ...(data.getHeaders
        ? {
          ...data.getHeaders()
        }
        : { 'Content-Type': 'multipart/form-data' })
    }
  });
};

export const openConnectionProject = (data, projectId) => {
  return request(requestVerbs.POST, `/api/projects/${projectId}/open`, { data });
};

export const projectPulse = () => {
  const projectId = getProjectFromStorage();
  if (!projectId) {
    return;
  }
  return request(requestVerbs.POST, `/api/projects/${projectId}/pulse`);
};

export const projectUpdateSettings = (projectId, settings) => {
  return request(requestVerbs.PATCH, `/api/projects/${projectId}/settings`, {
    data: settings
  });
};

// Worksheet

export const getWorksheets = projectId => {
  return request(requestVerbs.GET, `/api/projects/${projectId}/worksheets`);
};

export const getWorksheet = (projectId, worksheetId) => {
  return request(requestVerbs.GET, `/api/projects/${projectId}/worksheets/${worksheetId}`);
};

export const getColumnData = (projectId, worksheetId, columnId, type, maxValues) => {
  return request(
    requestVerbs.GET,
    `/api/projects/${projectId}/worksheets/${worksheetId}/columns/${columnId}/data?${querystring.stringify({
      type,
      maxValues
    })}`
  );
};

export const getWorksheetData = (
  projectId,
  worksheetId,
  startRowIndex,
  startColumnPosition,
  endRowIndex,
  endColumnPosition
) => {
  return request(
    requestVerbs.GET,
    `/api/projects/${projectId}/worksheets/${worksheetId}/data?${querystring.stringify({
      startRowIndex,
      endRowIndex,
      startColumnPosition,
      endColumnPosition
    })}`
  );
};

export const getColumnDetails = (projectId, worksheetId) => {
  return request(requestVerbs.GET, `/api/projects/${projectId}/worksheets/${worksheetId}/columns`);
};

export const runCommand = (projectId, worksheetId, commandText) => {
  return request(requestVerbs.POST, `/api/projects/${projectId}/worksheets/${worksheetId}/runcommand`, {
    data   : commandText,
    headers: {
      'Content-Type': 'text/plain'
    }
  });
};

// Commands

export const getCommands = projectId => {
  return request(requestVerbs.GET, `/api/projects/${projectId}/commands`);
};

export const getCommand = (projectId, commandId) => {
  return request(requestVerbs.GET, `/api/projects/${projectId}/commands/${commandId}`);
};

export const resizeOutput = (projectId, commandId, outputId, width, height) => {
  return request(requestVerbs.POST, `/api/projects/${projectId}/commands/${commandId}/outputs/${outputId}/resize`, {
    data: { width, height }
  });
};

export const updateCommandMetadata = (projectId, commandId, isVisible, title) => {
  return request(requestVerbs.PATCH, `/api/projects/${projectId}/commands/${commandId}`, {
    data   : { isVisible, title },
    headers: { 'Content-Type': 'application/json' }
  });
};

import { getClaims } from './apiService';

export function getAuth() {
  return getClaims().then(claims => ({
    isAuthorized: true,
    ...claims
  }));
}

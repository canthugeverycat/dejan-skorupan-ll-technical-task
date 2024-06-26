// API URLs
export const BASE_URL = 'localhost:8000';
export const API_BASE_URL = `http://${BASE_URL}`;
export const WS_BASE_URL = `ws://${BASE_URL}`;

// WebSockers
export const WS_ACTIONS = {
  SUBSCRIBE: 'subscribe',
  SETTLEMENT_CREATED: 'settlement_created',
};

// Settlement naming
export const URL_PARAMS = {
  PARTY: 'party',
} as const;

export const PARTIES = {
  A: 'a',
  B: 'b',
} as const;

export const STATUSES = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
} as const;

// Misc
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

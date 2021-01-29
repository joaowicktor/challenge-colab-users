export default class HttpResponse {
  status: 'success' | 'error';
  data?: unknown;
  error?: unknown;

  constructor(status: 'success' | 'error', data?: unknown, error?: unknown) {
    this.status = status;
    this.data = data;
    this.error = error;
  }
}

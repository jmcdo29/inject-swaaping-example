interface CustomServiceInterface {
  get: () => string;
}

export class CustomService implements CustomServiceInterface {
  get() {
    return 'CustomService get method';
  }
}

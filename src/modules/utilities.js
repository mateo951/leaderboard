export default class Utilities {
  static hasValue = (input) => {
    if (input === '') {
      return false;
    }
    return true;
  }
}
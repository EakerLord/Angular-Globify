export class Utils {
  static optionsDefault = {
    method: 'GET',
    responseType: 'json',
    headers: {}
  };

  static xhr(url, options) {
    return new Promise((resolve, reject) => {
      options = this.mergeDeep(this.optionsDefault, options);

      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);

      Object.keys(options.headers).forEach(header => {
        xhr.setRequestHeader(header, options.headers[header]);
      });

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.send();
    });
  }

  static mergeDeep(target, source) {
    let output = Object.assign({}, target);
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach(key => {
        if (this.isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, {
              [key]: source[key]
            });
          } else {
            output[key] = this.mergeDeep(target[key], source[key]);
          }
        } else {
          Object.assign(output, {
            [key]: source[key]
          });
        }
      });
    }
    return output;

  }

  static isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }

  static msToMinutes(ms) {
    let secString;
    let sec = Math.round(ms / 1000);
    const minutes = Math.round(sec / 60);
    sec = Math.round(sec % 60);
    if (sec < 10) {
      secString = '0' + sec.toString();
      return `${minutes}:${secString}`;
    }
    return `${minutes}:${sec}`;
  }
}

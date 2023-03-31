/**
 * https://{HOST}/{NS}/{ORG}/{MODULE?}@{VERSION}/{file}{.ext}?{flags}
 */
export class PathParser {
  host = '';
  ns = '';
  org = '';
  module = '';
  version = '';
  file = '';
  ext = '';
  flags = new Map();
  constructor(url) {
    this.host = url.host;
    [...url.searchParams.entries()].map(v => {this.flags.set(v[0],v[1]);})
    const stuff = url.pathname.split('/').slice(1).toReversed();
    stuff.map((v,i,arr) => {
      switch (i) {
        case 0:
          this.file = v.split('.')[0] ?? '';
          this.ext = v.split('.')[1] ?? '';
          break;
        case 1:
          this.module = v.split('@')[0] ?? '';
          this.version = v.split('@')[1] ?? '';
          break;
        default:
          if (i == arr.length-1) {
            this.ns = v;
          } else {
            this.org = v;
          }
          break;
      }
    })
  }

  toJSON() {
    return {
      host: this.host,
      ns: this.ns,
      org: this.org,
      module: this.module,
      version: this.version,
      file: this.file,
      ext: this.ext,
      flags: [...this.flags]
    };
  }
}
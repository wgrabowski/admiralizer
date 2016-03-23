class <%= serviceName %> {
  /*@ngInject*/
  constructor($q) {
    this.name = '<%= upCaseName %>';
    this._$q = $q;
  }
}

export default <%= serviceName %>;

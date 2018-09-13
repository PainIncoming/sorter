class Sorter {
  constructor() {
    this._elems = [];
    this.setComparator(
      Sorter._defaultComparator
    );
  }

  add(element) {
    this._elems.push(element);
  }

  at(index) {
    return this._elems[index];
  }

  get length() {
    return this._elems.length;
  }

  toArray() {
    return this._elems;
  }

  sort(indices) {
    let elemsForSort = indices.map(item => {
        return this._elems[item];
    });

    elemsForSort.sort(this._comparator);
    indices.sort(Sorter._defaultComparator);

    indices.forEach((item, i) => {
       this._elems[item] = elemsForSort[i];
    });
  }

  setComparator(compareFunction) {
    this._comparator = compareFunction;
  }

  static _defaultComparator(a, b) {
      return a - b;
  }
}

module.exports = Sorter;
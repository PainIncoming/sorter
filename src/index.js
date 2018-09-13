class Sorter {
  constructor() {
    this._elems = [];
    this.setValueComparator(
        (a, b) => a - b
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

    elemsForSort.sort(this._valueComparator);
    indices.sort(Sorter._indexComparator);

    indices.forEach((item, i) => {
       this._elems[item] = elemsForSort[i];
    });
  }

  setValueComparator(compareFunction) {
    this._valueComparator = compareFunction;
  }

  static _indexComparator(a, b) {
      return a - b;
  }
}

module.exports = Sorter;
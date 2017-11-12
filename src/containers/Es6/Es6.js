import React, { Component } from 'react';

const comStyles = require('styles/Common.scss');
const styles = require('./scss/Es6.scss');

export default class Es6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    //  this.testDemo();
    // this.testClassDemo();
    try {
      this.testObjectDefineProperty();
      this.testGenerator();
    } catch (ex) {
      console.log(ex);
    }
  }
  printLine(args) {
    console.log('-------------------' + (args || '') + '-------------------');
  }
  testGenerator() {
    function* tempOther() {
      yield 11;
      yield 12;
      yield 13;
    }

    function* temp() {
      yield 1;
      yield 2;
      yield* tempOther();
      yield 4;
      return '最后啦';
    }
    const list = temp();
    for (const a of list) {
      console.log(a);
    }

    class Tree {
      constructor(value, children) {
        this.value = value;
        this.children = children;
      }

      * print() {
        yield this.value;
        for (const child of this.children) {
          yield* child.print();
        }
      }
    }
    this.printLine();
    const __tree = new Tree(0, [
      new Tree(11, [new Tree(111, [])]),
      new Tree(22, [new Tree(222, [])]),
      new Tree(33, [new Tree(333, [])]),
    ]);

    for (const tree of __tree.print()) {
      console.log(tree);
    }
    this.printLine();
    const isEves = (x) => x % 2 === 0;
    console.log(isEves(10));
    const notEves = (fn) => (...args) => {
      console.log('--------------b----------');
      return !fn(args);
    };

    console.log(notEves(isEves)(10));

    this.printLine();
  }

  testObjectDefineProperty() {
    const obj = {};
    Object.defineProperty(obj, 'field', {
      value: 1234,
      writable: true,
      enumerable: true, // 可以枚举。
    });
    Object.defineProperty(obj, 'field2', {
      enumerable: true, // 可以枚举。
      get() {
        return this._field2;
      },
      set(newValue) {
        if (this._field2 !== newValue) {
          this._field2 = newValue;
        }
      }
    });
    obj.field = 111;
    obj.field2 = '哈哈';
    obj._field2 = 'private field';
    console.log(Object.keys(obj));
    console.log(obj);
    this.printLine();

    const [a, b, c, d, ...e] = [[1, 2], [3, 4], [5, 6], [7, 8], 11, 22, 33, 44, 55];
    // const [a, b, c, d, e] = [1, 2, 3, 4, 5];
    console.log(a, b, c, d, e);
    const { field: xxField, field } = obj;
    console.log(xxField);
    console.log(field);
    const [aa, bb, ...cc] = '哈啦是不是的呀';
    console.log(aa, bb, cc);
  }

  testClassDemo() {
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      toString() {
        const value = 'x:' + this.x + ' y:' + this.y;
        return value;
      }
    }
    Object.assign(Point.prototype, {
      sayHello() {
        console.log('say hello');
      }
    });
    const p = new Point(1, 2, 'bbc');
    this.printLine(p.toString());
    p.sayHello();
    const a = p.__proto__.hasOwnProperty('toString');
    console.log(a);

    class GetSetClass {
      get(name) {
        return this[name];
      }
      set(name, value = '默认值') {
        this[name] = value;
      }
    }

    const gs = new GetSetClass();
    gs.set('name01', '张三');
    gs.set('name00');
    console.log('--------', gs.get('name00'));
    console.log('--------', gs.get('name01'));
  }

  testDemo() {
    const arr = [1, 2, 3];
    const [a, b, c] = arr;
    console.log(a, b, c);
    const [foo, [[bar], baz]] = [1, [[2], 3]];
    console.log(foo, bar, baz);
    const [, , third] = ['foo', 'bar', 'baz'];
    console.log(third);
    const [head, ...tail] = [1, 2, 3, 4];
    console.log(head, tail);
    console.log('-----------------------es6 1-------------');
    // const [first, second, third1, fourth, fifth, sixth] = fibs();
    // console.log(first, second, third1, fourth, fifth, sixth);

    function* helloWorldGenerator() {
      yield 'hello';
      yield 'world';
      return 'ending';
    }

    const hw = helloWorldGenerator();
    console.log(hw);

    this.testIterator();
  }
  testIterator() {
    console.log('------------testIterator-------------');
    const makeIterator = (arr) => {
      let nextIndex = -1;
      return {
        next: () => {
          return nextIndex < arr.length ?
            { value: arr[nextIndex += 1], done: false } : { value: undefined, done: true };
        }
      };
    };
    const it = makeIterator(['a', 'b', 'c']);
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

    this.printLine('Iterator');

    const arr = [1, 2, 3, 4, 5, 6];
    const iter = arr[Symbol.iterator]();
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    this.printLine('||||||||');

    const obj = (value) => {
      this.value = value;
      this.next = null;
    };
    obj.prototype[Symbol.iterator] = () => {
      let current = this;
      const nexta = () => {
        if (current) {
          const value = current.value;
          current = value;
          return { value, done: false };
        }
        return { done: true };
      };
      const iterator = { next: nexta };
      return iterator;
    };
    const place = 55.03;
    const a = (place * 24000 * 0.92) - 50000;
    const b = a / 2;

    this.printLine(a + ' ' + b);
  }

  render() {
    return (
      <div className={comStyles.navbar + ' ' + styles.page1Css}>
        <div>aecdqqaa</div>
      </div>
    );
  }
}


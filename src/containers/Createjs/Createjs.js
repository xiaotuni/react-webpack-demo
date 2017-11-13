import React, { Component } from 'react';

const comStyles = require('styles/Common.scss');
const styles = require('./scss/Createjs.scss');

export default class Createjs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.createCanvas();
    this.createTest();
  }

  createCanvas() {
    // 通过画布ID 创建一个 Stage 实例
    const { createjs } = window;
    const stage = new createjs.Stage('imageView');
    // 创建一个 Bitmap 实例
    const circle = new createjs.Shape();
    const { graphics } = circle;
    // beginFill
    // setStrokeStyle
    // beginStroke
    // graphics.beginFill('DeepSkyBlue').drawCircle(10, 5, 40);
    graphics.beginFill('DeepSkyBlue');
    graphics.drawRect(5, 5, 30, 30);
    // sp.graphics.beginFill("red").drawCircle(100,100,80);
    // sp.graphics.beginFill("red").drawRect(200,10,300,180);
    graphics.f('red').dc(65, 65, 30);                       // 画圆
    graphics.f('red').dr(100, 10, 100, 80);                  // 方块
    graphics.s('blue')  // 颜色
      .ss(1)            // 线的粗细
      .mt(0, 120)       // 起始点
      .lt(300, 120)     // 结束点
      .es();            // 线
    graphics.f('red').rr(10, 150, 40, 50, 5);              // 圆角矩形
    graphics.f('red').de(120, 150, 80, 40, 15);               // 椭圆
    graphics.f('red').dp(280, 170, 40, 5, 0.6, -90);          // 星星
    // Set position of Shape instance.
    // circle.x = 20;
    // circle.y = 20;
    // Add Shape instance to stage display list.
    stage.addChild(circle);
    // 更新 stage 渲染画面
    stage.update();

    stage.addEventListener('click', (e) => {
      console.log(e);
      console.log('click');
    });
  }

  createTest() {
    const imgs = 'https://raw.githubusercontent.com/YeXiaoChao/PluginsFromJS/master/CreateJS/imgs/easeljs-preloadjs-animation/moveGuy.png';
    const { createjs } = window;
    if (!createjs) {
      return;
    }
    const stage = new createjs.Stage('view');
    const container = new createjs.Container();
    const data = {
      // 源图像的数组。图像可以是一个html image实例，或URI图片。前者是建议控制堆载预压
      images: [imgs],
      // 定义单个帧。有两个支持格式的帧数据：当所有的帧大小是一样的（在一个网格）， 使用对象的width, height, regX, regY 统计特性。
      // width & height 所需和指定的帧的尺寸
      // regX & regY 指示帧的注册点或“原点”
      // spacing 表示帧之间的间隔
      // margin 指定图像边缘的边缘
      // count 允许您指定在spritesheet帧的总数；如果省略，这将根据源图像的尺寸和结构计算。帧将被分配的指标，根据他们的位置在源图像（左至右，顶部至底部）。
      frames: {
        width: 80,
        height: 80,
        count: 16,
        regX: 0,
        regY: 0,
        spacing: 0,
        margin: 0
      },
      // 一个定义序列的帧的对象，以发挥命名动画。每个属性对应一个同名动画。
      // 每个动画必须指定播放的帧，还可以包括相关的播放速度（如2 将播放速度的两倍，0.5半）和下一个动画序列的名称。
      animations: {
        down: [0, 3],
        left: [4, 7],
        right: [8, 11],
        up: [12, 15],
      }

    };

    const spriteSheet = new createjs.SpriteSheet(data);
    const instance = new createjs.Sprite(spriteSheet, 'down');
    const instance2 = new createjs.Sprite(spriteSheet, 'left');
    instance2.x = 160;
    instance2.y = 160;

    container.addChild(instance);
    container.addChild(instance2);
    stage.addChild(container);
    createjs.Ticker.setFPS(5); // 设置帧
    const _HEIGHT_WIDTH = 80;
    const maxX = stage.canvas.width - _HEIGHT_WIDTH;
    const maxY = stage.canvas.height - _HEIGHT_WIDTH;
    const step = 5;
    const processInstance = () => {
      const _i = instance;
      const { x, y, currentAnimation } = _i;
      switch (currentAnimation) {
        case 'down':
          if (y + step > maxY) {
            _i.gotoAndPlay('right');
          } else {
            _i.y += step;
          }
          break;
        case 'up':
          if (y - step < 0) {
            _i.gotoAndPlay('left');
          } else {
            _i.y -= step;
          }
          break;
        case 'left':
          if (x - step < 0) {
            _i.gotoAndPlay('down');
          } else {
            _i.x -= step;
          }
          break;
        case 'right':
          if (x + step > maxX) {
            _i.gotoAndPlay('up');
          } else {
            _i.x += step;
          }
          break;
        default:
          break;
      }
    };

    createjs.Ticker.addEventListener('tick', () => {
      processInstance();
      stage.update();
    });
  }

  render() {
    return (
      <div className={comStyles.navbar + ' ' + styles.creactJsCss}>
        <div>
          <canvas id="imageView" width="370" height="210">您的浏览器版本过低，请更换更高版本的浏览器</canvas>
        </div>
        <canvas id="view" width="372" height="500">您的浏览器版本过低，请更换更高版本的浏览器</canvas>
      </div>
    );
  }
}


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
    circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 40);
    // Set position of Shape instance.
    circle.x = 50;
    circle.y = 50;
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
        run: [0, 3]
      }

    };

    const spriteSheet = new createjs.SpriteSheet(data);
    const instance = new createjs.Sprite(spriteSheet, 'run');

    container.addChild(instance);
    stage.addChild(container);
    createjs.Ticker.setFPS(5); // 设置帧
    createjs.Ticker.addEventListener('tick', stage);
    stage.update();
  }

  render() {
    return (
      <div className={comStyles.navbar + ' ' + styles.page1Css}>
        <div>
          <canvas id="imageView" width="100" height="100">您的浏览器版本过低，请更换更高版本的浏览器</canvas>
        </div>
        <canvas id="view" width="100" height="100">您的浏览器版本过低，请更换更高版本的浏览器</canvas>
      </div>
    );
  }
}


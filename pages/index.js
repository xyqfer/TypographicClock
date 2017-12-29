// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRotate: false,
    gifList: [
      './images/board.gif',
      './images/dog.gif',
      './images/doggy.gif',
      './images/ghost.gif',
      './images/hiphop.gif',
      './images/homer.gif',
      './images/jumping-bird.gif',
      './images/mario.gif',
      './images/nyancat.gif',
      './images/pikachu.gif',
      './images/piqiu.gif',
      './images/rabbit.gif',
      './images/robot.gif',
      './images/running-pikachu.gif',
      './images/salamander.gif',
      './images/sonic.gif',
      './images/spongebob.gif',
      './images/swim.gif',
      './images/travel.gif',
      './images/ufo.gif',
      './images/walk.gif'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setInitialData();
    this.startClock();
    this.startGif();
  },

  setInitialData: function() {
    const totalLength = 60;
    let initialData = {
      blockData: []
    };

    for (let i = 0; i < totalLength; i++) {
      initialData.blockData.push({
        isActive: false,
        isSecond: false
      });
    }

    this.setData(initialData);
  },

  startClock: function() {
    const numbers = [
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 0
      [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // 1
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // 2
      [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 3
      [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // 4
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 5
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 6
      [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], // 7
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 8
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1]  // 9
    ];

    const blocks = [];
    const digits = [];

    for (let i = 0; i < 60; i++) {
      digits.push(i);
    }

    for (let i = 0; i < 4; i++) {
      blocks.push(digits.slice(i * 15, i * 15 + 15));
    }

    const setNum = (block, num) => {
      let n = numbers[num];
      for (let i = 0; i < block.length; i++) {
        let dataName = `blockData[${block[i]}]`;
        let blockData = this.data.blockData[block[i]];
        let obj = {};

        obj[dataName] = {
          isActive: n[i] == 1 ? true : false,
          isSecond: blockData.isSecond
        };

        this.setData(obj);
      }
    };

    const time = {
      s: '',
      m: '',
      h: '',
      p: null
    };

    const animator = () => {
      let d = new Date(),
        h = d.getHours().toString(),
        m = d.getMinutes().toString(),
        s = d.getSeconds().toString();

      s = s.length === 1 ? '0' + s : s;
      m = m.length === 1 ? '0' + m : m;
      h = h.length === 1 ? '0' + h : h;

      if (s !== time.s) {
        for (let i = 0; i < digits.length; i++) {
          let d = digits[i];
          if (i == +s) {
            let dataName = `blockData[${d}]`;
            let blockData = this.data.blockData[d];

            let obj = {};

            obj[dataName] = {
              isActive: blockData.isActive,
              isSecond: true
            };

            this.setData(obj);

            if (time.p != null) {
              let dataName = `blockData[${time.p}]`;
              let blockData = this.data.blockData[time.p];
              let obj = {};

              obj[dataName] = {
                isActive: blockData.isActive,
                isSecond: false
              };

              this.setData(obj);
            }

            time.p = i;
            time.s = s;
          }
        }
      }

      if (m !== time.m) {
        setNum(blocks[2], m[0]);
        setNum(blocks[3], m[1]);
        time.m = m;
      }

      if (h !== time.h) {
        setNum(blocks[0], h[0]);
        setNum(blocks[1], h[1]);
        time.h = h;
      }

      setTimeout(animator, 16);
    };

    setTimeout(animator, 16);
  },

  startGif: function() {
    setTimeout(() => {
      this.animateGif();
    }, 1000);
  },

  animateGif: function() {
    let gifIndex = Math.floor(Math.random() * this.data.gifList.length);
    let gif = this.data.gifList[gifIndex];

    this.setData({
      gif: gif,
      gifEnable: true,
      gifContainerClass: `gif${gifIndex}-start`,
      gifImageClass: `gif${gifIndex}-image`
    });

    setTimeout(() => {
      this.setData({
        gifContainerClass: `gif${gifIndex}-end`
      });

      setTimeout(() => {
        this.setData({
          gifEnable: false,
          gifContainerClass: ''
        });

        setTimeout(() => {
          this.animateGif();
        }, 8 * 1000);
      }, 12 * 1000);
    }, 100);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '这是一个会『动』的时钟',
      imageUrl: './images/screenshot.png'
    };
  },

  onTap: function() {
    this.setData({
      isRotate: !this.data.isRotate
    });
  }
})
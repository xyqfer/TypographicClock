// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRotate: false,
    block0: {
      isActive: false,
      isSecond: false
    },
    block1: {
      isActive: false,
      isSecond: false
    },
    block2: {
      isActive: false,
      isSecond: false
    },
    block3: {
      isActive: false,
      isSecond: false
    },
    block4: {
      isActive: false,
      isSecond: false
    },
    block5: {
      isActive: false,
      isSecond: false
    },
    block6: {
      isActive: false,
      isSecond: false
    },
    block7: {
      isActive: false,
      isSecond: false
    },
    block8: {
      isActive: false,
      isSecond: false
    },
    block9: {
      isActive: false,
      isSecond: false
    },
    block10: {
      isActive: false,
      isSecond: false
    },
    block11: {
      isActive: false,
      isSecond: false
    },
    block12: {
      isActive: false,
      isSecond: false
    },
    block13: {
      isActive: false,
      isSecond: false
    },
    block14: {
      isActive: false,
      isSecond: false
    },
    block15: {
      isActive: false,
      isSecond: false
    },
    block16: {
      isActive: false,
      isSecond: false
    },
    block17: {
      isActive: false,
      isSecond: false
    },
    block18: {
      isActive: false,
      isSecond: false
    },
    block19: {
      isActive: false,
      isSecond: false
    },
    block20: {
      isActive: false,
      isSecond: false
    },
    block21: {
      isActive: false,
      isSecond: false
    },
    block22: {
      isActive: false,
      isSecond: false
    },
    block23: {
      isActive: false,
      isSecond: false
    },
    block24: {
      isActive: false,
      isSecond: false
    },
    block25: {
      isActive: false,
      isSecond: false
    },
    block26: {
      isActive: false,
      isSecond: false
    },
    block27: {
      isActive: false,
      isSecond: false
    },
    block28: {
      isActive: false,
      isSecond: false
    },
    block29: {
      isActive: false,
      isSecond: false
    },
    block30: {
      isActive: false,
      isSecond: false
    },
    block31: {
      isActive: false,
      isSecond: false
    },
    block32: {
      isActive: false,
      isSecond: false
    },
    block33: {
      isActive: false,
      isSecond: false
    },
    block34: {
      isActive: false,
      isSecond: false
    },
    block35: {
      isActive: false,
      isSecond: false
    },
    block36: {
      isActive: false,
      isSecond: false
    },
    block37: {
      isActive: false,
      isSecond: false
    },
    block38: {
      isActive: false,
      isSecond: false
    },
    block39: {
      isActive: false,
      isSecond: false
    },
    block40: {
      isActive: false,
      isSecond: false
    },
    block41: {
      isActive: false,
      isSecond: false
    },
    block42: {
      isActive: false,
      isSecond: false
    },
    block43: {
      isActive: false,
      isSecond: false
    },
    block44: {
      isActive: false,
      isSecond: false
    },
    block45: {
      isActive: false,
      isSecond: false
    },
    block46: {
      isActive: false,
      isSecond: false
    },
    block47: {
      isActive: false,
      isSecond: false
    },
    block48: {
      isActive: false,
      isSecond: false
    },
    block49: {
      isActive: false,
      isSecond: false
    },
    block50: {
      isActive: false,
      isSecond: false
    },
    block51: {
      isActive: false,
      isSecond: false
    },
    block52: {
      isActive: false,
      isSecond: false
    },
    block53: {
      isActive: false,
      isSecond: false
    },
    block54: {
      isActive: false,
      isSecond: false
    },
    block55: {
      isActive: false,
      isSecond: false
    },
    block56: {
      isActive: false,
      isSecond: false
    },
    block57: {
      isActive: false,
      isSecond: false
    },
    block58: {
      isActive: false,
      isSecond: false
    },
    block59: {
      isActive: false,
      isSecond: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
        let dataName = `block${block[i]}`;        
        let blockData = this.data[dataName];
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
            let dataName = `block${d}`;
            let blockData = this.data[dataName];

            let obj = {};

            obj[dataName] = {
              isActive: blockData.isActive,
              isSecond: true
            };

            this.setData(obj);

            if (time.p != null) {
              let dataName = `block${time.p}`;
              let blockData = this.data[dataName];
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

    // setTimeout(() => {
    //   let dataName = `block${5}.isActive`;
    //   let obj = {};

    //   console.log(this.data.block4)

    //   obj[dataName] = {
    //     isActive: true,
    //     isSecond: true
    //   }

    //   console.log(obj)

    //   this.setData(obj);
    // }, 1000);
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
      imageUrl: './screenshot.png'
    };
  },

  onTap: function() {
    this.setData({
      'isRotate': !this.data.isRotate
    });
  }
})
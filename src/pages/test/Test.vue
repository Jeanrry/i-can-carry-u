  <template>
  <div class="i-can-carry-u" v-wechat-title="this.title">
    <header>
      <div class="title">I CAN CARRY YOU</div>
      <div class="menu" @click="menuVisible = true">
        <i class="el-icon-menu"></i>
      </div>
    </header>

    <div>
      <div class="img-preview">
        <div class="img-preview__canvas">
          <div>
            <canvas id="canvas" ref="faultTree" width="400" height="100"></canvas>
          </div>
        </div>
        <div class="img-preview__img">
          <div>
            <img :width="imgW" :height="imgW / 4" :src="dataURL" alt />
          </div>
        </div>
      </div>
      <ly-tab
        v-model="selectedSettingListId"
        :items="settingList"
        :options="options"
        @change="settingTabOnclick"
      ></ly-tab>
      <el-tabs v-model="selectedSettingListName" @tab-click="settingTabOnclick">
        <el-tab-pane label="换头像" name="0">
          <div class="tab-choose">
            <div style="padding-bottom: 10px">
              <el-switch v-model="teamMater" active-text="队友" inactive-text="自己"></el-switch>
            </div>

            <div class="tab-choose__picker">
              <ly-tab
                v-model="selectedImgId"
                :items="imgTabsItem"
                :options="options"
                @change="imgTabOnclick"
              ></ly-tab>
              <el-tabs v-model="activeImgName" @tab-click="handleClick">
                <el-tab-pane
                  v-for="(tItem, tIndex) in imgTabsItem"
                  :key="tIndex"
                  :label="tItem.label"
                  :name="tItem.name"
                  style="text-align: left;"
                >
                  <div
                    v-for="(item, index) in tItem.imgList"
                    :key="index"
                    class="select-img"
                    @click="heroImgOnclick(item)"
                  >
                    <img
                      :width="imageSize"
                      :height="imageSize"
                      :src="'https://jeanrry-test-1251663958.cos.ap-beijing.myqcloud.com/icancarryu/hero/' + item.id + '.jpg'"
                      alt
                    />
                    <div
                      v-if="item.id !== selectedHero"
                      class="select-img__unselected"
                      :style="maskStyle"
                    ></div>
                    <div
                      v-if="item.id === selectedHero"
                      class="select-img__selected"
                      :style="maskStyle"
                    >
                      <div class="select-img--icon">
                        <i class="el-icon-circle-check" :style="selectedIcon"></i>
                      </div>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="改文字" name="1">
          <div class="tab-choose">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="语音选择">
                <el-input
                  v-model="saohua"
                  maxlength="8"
                  @blur="editorOnblur"
                  @focus="editorOnfocus"
                ></el-input>
              </el-form-item>
              <div style="padding-bottom: 10px">此处最多输入8个字</div>
            </el-form>
            <div class="tab-choose__picker">
              <ly-tab
                v-model="selectedTextId"
                :items="textTabsItem"
                :options="options"
                @change="textTabOnclick"
              ></ly-tab>
              <el-tabs v-model="activeTextName" @tab-click="handleClick">
                <el-tab-pane
                  v-for="(tItem, tIndex) in textTabsItem"
                  :key="tIndex"
                  :label="tItem.label"
                  :name="tItem.label"
                  style="text-align: left;"
                >
                  <div
                    v-for="tItemC in tItem.textList"
                    :key="tItemC"
                    class="tab-choose__picker--text-span"
                    @click="textSpanOnclick(tItemC)"
                  >{{ tItemC }}</div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <footer>
      <!-- <el-button type="primary" icon="el-icon-download">保存图片到本地</el-button> -->
      <el-popover width="200" trigger="click">
        俺改了，长按保存即可！↑↑↑
        <el-button slot="reference" type="primary" icon="el-icon-download">保存图片到本地</el-button>
      </el-popover>
    </footer>

    <el-drawer :visible.sync="menuVisible" class="menu-list" :size="menuSize + '%'" direction="rtl">
      <div class="menu-list__item" @click="$router.push('/introduce')">功能介绍</div>
      <div class="menu-list__item" @click="suggestOnclick">bug反馈</div>
      <div class="menu-list__item" @click="suggestOnclick">意见建议</div>
      <!-- <div class="menu-list__item" @click="$router.push('/beta')" style="color: #53A8FF">beta实验室</div> -->
      <div class="menu-list__item" @click="contentOnclick">带我上分</div>
    </el-drawer>
  </div>
</template>

  <script>
import herosInfo from "@/mixins/herosInfo";

export default {
  name: "index",
  data() {
    return {
      title: "i-can-carry-u",
      userAgent: "",
      imageSize: 100,
      dataURL: "",
      saohua: "正在前往支援",
      selectedHero: 166,
      scale: 1,
      imgW: 400,
      imgTabsItem: [
        {
          label: "全部",
          name: "0",
          imgListName: "herosInfoList",
          imgList: []
        },
        {
          label: "坦克",
          name: "1",
          imgListName: "tanksList",
          imgList: []
        },
        {
          label: "战士",
          name: "2",
          imgListName: "warriorsList",
          imgList: []
        },
        {
          label: "刺客",
          name: "3",
          imgListName: "assassinsList",
          imgList: []
        },
        {
          label: "法师",
          name: "4",
          imgListName: "wizardsList",
          imgList: []
        },
        {
          label: "射手",
          name: "5",
          imgListName: "shootersList",
          imgList: []
        },
        {
          label: "辅助",
          name: "6",
          imgListName: "assistersList",
          imgList: []
        }
      ],
      textTabsItem: [],
      activeImgName: "0",
      activeTextName: "防守",
      selectedImgId: 0,
      selectedTextId: 0,
      teamMater: false,
      form: {
        name: "1"
      },
      options: {
        activeColor: "#1d98bd"
        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
      menuVisible: false,
      menuSize: 30,
      selectedSettingListId: 0,
      selectedSettingListName: "0",
      settingList: [
        {
          id: 0,
          label: "换头像"
        },
        {
          id: 1,
          label: "改文字"
        }
      ]
    };
  },
  mixins: [herosInfo],
  computed: {
    transform() {
      return "transform: scale(" + this.scale.toString() + ");";
    },
    maskStyle() {
      return (
        "width: " + this.imageSize + "px; height:" + this.imageSize + "px;"
      );
    },
    selectedIcon() {
      return (
        "font-size:" +
        this.imageSize / 2 +
        "px; width: " +
        this.imageSize / 2 +
        "px; height: " +
        this.imageSize / 2 +
        "px;"
      );
    }
  },
  watch: {
    saohua(val) {
      this.initCanvas();
    },
    selectedHero(val) {
      this.initCanvas();
    },
    teamMater(val) {
      this.initCanvas();
    }
  },
  created() {
    for (let item in this.imgTabsItem) {
      this.imgTabsItem[item].imgList = this[this.imgTabsItem[item].imgListName];
    }
  },
  mounted() {
    this.textTabsItem = textTabsItem;
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      this.userAgent = "mobile";
      this.scale = document.body.clientWidth / 600;
      this.imgW = (document.body.clientWidth * 2) / 3;
      this.menuSize = 50;
      this.imageSize = (document.body.clientWidth - 120) / 6;
    } else {
      this.userAgent = "电脑";
    }

    this.initCanvas();
  },
  methods: {
    initCanvas() {
      let canvas = document.getElementById("canvas");
      canvas.width = this.imgW + "";
      canvas.height = this.imgW / 4 + "";
      this.ctx = canvas.getContext("2d");
      // 右侧黑底蓝边框
      this.ctx.beginPath();
      this.ctx.moveTo(this.imgW / 8, this.imgW / 80);
      this.ctx.lineTo((this.imgW * 7) / 8, this.imgW / 80);
      this.ctx.arc(
        (this.imgW * 7) / 8,
        this.imgW / 8,
        (this.imgW * 9) / 80,
        (Math.PI * 3) / 2,
        (Math.PI * 5) / 2
      );
      this.ctx.lineTo(this.imgW / 8, (this.imgW * 19) / 80);
      this.ctx.lineTo(this.imgW / 8, this.imgW / 80);
      this.ctx.fillStyle = "#1A2515";
      this.ctx.fill();
      this.ctx.strokeStyle = "#87CEFA";
      this.ctx.lineWidth = this.imgW / 100;
      this.ctx.stroke();
      this.ctx.closePath();
      // 左侧头像框
      this.ctx.beginPath();
      this.ctx.arc(
        this.imgW / 8,
        this.imgW / 8,
        (this.imgW * 43) / 400,
        0,
        Math.PI * 2
      );
      if (this.teamMater) {
        this.ctx.strokeStyle = "#1d98bd";
      } else {
        this.ctx.strokeStyle = "green";
      }
      this.ctx.lineWidth = this.imgW / 50;
      this.ctx.stroke();
      this.ctx.closePath();

      // 圆形头像
      let img = new Image();
      img.src = "static/hreoImg/" + this.selectedHero + ".jpg";
      img.onload = () => {
        this.ctx.save();
        this.ctx.clip();
        this.ctx.drawImage(
          img,
          this.imgW / 100,
          this.imgW / 100,
          (this.imgW * 23) / 100,
          (this.imgW * 23) / 100
        );
        this.ctx.restore();

        this.getImg();
      };

      // 文字
      this.ctx.font = (this.imgW * 2) / 25 + "px bold";
      this.ctx.fillStyle = "#F8F8FF";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      if (this.saohua.length < 4) {
        this.ctx.fillText(this.saohua, (this.imgW * 11) / 20, this.imgW / 8);
      } else {
        this.ctx.fillText(this.saohua, (this.imgW * 47) / 80, this.imgW / 8);
      }
    },
    getImg() {
      let self = this;
      let ref = this.$refs.faultTree; // 截图区域
      html2canvas(ref, {
        backgroundColor: "transparent"
      }).then(canvas => {
        let dataURL = canvas.toDataURL("image/png");
        self.dataURL = dataURL;
      });
    },
    settingTabOnclick(e) {
      this.selectedSettingListId = e.id;
      this.selectedSettingListName = e.id + "";
    },
    dlBtnOnclick() {},
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    imgTabOnclick(item, index) {
      this.activeImgName = index + "";
    },
    textTabOnclick(item, index) {
      this.activeTextName = item.label;
    },
    heroImgOnclick(value) {
      this.selectedHero = value.id;
    },
    textSpanOnclick(value) {
      this.saohua = value;
    },
    suggestOnclick() {
      window.open("http://jeanrryy.mikecrm.com/sve0xWZ", "_blank");
    },
    contentOnclick() {
      this.$message("算了吧，你带不动");
    }
  }
};
</script>

  <style lang='less' scoped>
.i-can-carry-u {
  text-align: center;
}
header {
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1500;
  background-color: #fff;

  .title {
    float: left;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    padding-left: 20px;
  }
  .menu {
    float: right;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    padding-right: 20px;
  }
}

.img-preview {
  margin-top: 80px;
  margin-bottom: 10px;
  width: 100%;
  position: relative;

  &__img {
    position: absolute;
    width: 100%;
    top: 0;
  }
}

.tab-choose {
  margin: 0 20px;

  /deep/.el-form-item {
    margin-bottom: 10px;
  }

  &__picker {
    box-shadow: 0 0px 6px 1px #eee;

    &--text-span {
      background-color: #ecf5ff;
      // display: inline-block;
      margin: 0 10px 10px 10px;
      height: 32px;
      padding: 0 10px;
      line-height: 30px;
      font-size: 14px;
      color: black;
      border: 1px solid #d9ecff;
      border-radius: 4px;
      box-sizing: border-box;
      white-space: nowrap;
      text-align: center;
    }
  }
}

.menu-list {
  /deep/.el-drawer__header {
    margin-bottom: 10px;
  }
  &__item {
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
}

.select-img {
  position: relative;
  display: inline-block;
  margin: 5px 5px 5px 5px;

  &:nth-of-type(6n + 0) {
    margin: 5px 0 5px 5px;
  }
  &:nth-of-type(6n + 1) {
    margin: 5px 5px 5px 10px;
  }

  &__unselected {
    position: absolute;
    background-color: black;
    opacity: 0.6;
    top: 0;
  }

  &__selected {
    position: absolute;
    top: 0;
  }

  &--icon {
    width: 100%;
    height: 100%;
    position: relative;

    i {
      color: white;
      font-weight: 900;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
}

/deep/.el-tabs__nav-wrap {
  display: none;
}
/deep/.ly-tabbar {
  box-shadow: none;
}

footer {
  width: 100%;
  height: 40px;
  padding: 10px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1500;
  background-color: #fff;
}
</style>

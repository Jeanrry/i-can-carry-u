  <template>
  <div class="i-can-carry-u" v-wechat-title="this.title">
    <div style="width: 100%; height: 60px">
      <div
        style="float: left; height: 60px; line-height: 60px; font-size: 20px; padding-left: 20px"
      >I CAN CARRY YOU</div>

      <div
        style="float: right; height: 60px; line-height: 60px; font-size: 16px; padding-right: 20px"
        @click="menuVisible = true"
      >
        <i class="el-icon-menu"></i>
      </div>
    </div>
    <div style="margin-top:10px; width: 100%;">
      <div :style="transform">
        <svg
          width="400px"
          height="100px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          id="saohuaSvg"
        >
          <defs>
            <clipPath id="cut-off-bottom">
              <circle id="circle" cx="50" cy="50" r="44" />
            </clipPath>
          </defs>

          <rect
            x="5"
            y="5"
            width="390"
            height="90"
            rx="45"
            ry="45"
            fill="#1A2515"
            stroke="#87CEFA"
            stroke-width="3"
            @click="textOnclick"
          />

          <circle v-if="!teamMater" id="circle" cx="50" cy="50" r="47" fill="green" />
          <circle v-if="teamMater" id="circle" cx="50" cy="50" r="47" fill="#1d98bd" />
          <image
            clip-path="url(#cut-off-bottom)"
            :x="imagePositionX"
            :y="imagePositionY"
            width="92"
            height="92"
            :xlink:href="'static/hreoImg/' + selectedHero + '.jpg'"
            @click="imageOnclick"
          />
          <!-- https://jeanrry-test-1251663958.cos.ap-beijing.myqcloud.com/icancarryu/hero/105.jpg -->
          <!-- <image clip-path="url(#cut-off-bottom)" :x="x" :y="y" width="90" height="90" xlink:href="../../../static/hreoImg/105.jpg" /> -->

          <text
            x="235"
            y="52"
            fill="#F8F8FF"
            font-size="32"
            style="dominant-baseline:middle;text-anchor:middle;"
            @click="textOnclick"
          >{{ saohua }}</text>
        </svg>
      </div>
    </div>

    <el-button type="primary" @click="saveSvgToPng" icon="el-icon-download">保存图片到本地</el-button>

    <el-collapse-transition>
      <div v-if="textEditorVisible" class="transition-box">
        <div class="transition-box__box">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="语音选择">
              <el-input v-model="saohua" maxlength="8" @blur="editorOnblur" @focus="editorOnfocus"></el-input>
            </el-form-item>此处最多输入8个字
          </el-form>
        </div>
      </div>
    </el-collapse-transition>

    <el-collapse-transition>
      <div v-if="textSelecterVisible" class="transition-box">
        <div class="transition-box__box">
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
                class="transition-box__box--text-span"
                @click="textSpanOnclick(tItemC)"
              >{{ tItemC }}</div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-collapse-transition>
    <el-collapse-transition>
      <div v-if="imgEditorVisible" class="transition-box">
        <div class="transition-box__box">
          <div style="padding: 10px 0">
            <el-switch v-model="teamMater" active-text="队友" inactive-text="自己"></el-switch>
          </div>
          <div style="padding-bottom: 10px">
            <el-button type="primary" size="medium" @click="changeImgOnclick">换头像</el-button>
          </div>
        </div>
      </div>
    </el-collapse-transition>
    <el-collapse-transition>
      <div v-if="imgSelecterVisible" class="transition-box">
        <div class="transition-box__box">
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
    </el-collapse-transition>

    <el-drawer :visible.sync="menuVisible" class="menu-list" :size="menuSize + '%'" direction="rtl">
      <!-- http://jeanrryy.mikecrm.com/sve0xWZ -->
      <!-- window.open('http://jeanrryy.mikecrm.com/sve0xWZ', '_blank') -->
      <div class="menu-list__item" @click="$router.push('/introduce')">功能介绍</div>
      <div class="menu-list__item" @click="suggestOnclick">bug反馈</div>
      <div class="menu-list__item" @click="suggestOnclick">意见建议</div>
      <div class="menu-list__item" @click="contentOnclick">带我上分</div>
    </el-drawer>
  </div>
</template>

  <script>
import saveSvg from "save-svg-as-png";

import herosInfo from "@/mixins/herosInfo";
export default {
  name: "index",
  data() {
    return {
      title: "i-can-carry-u",
      test: "",
      imagePositionX: 4,
      imagePositionY: 4,
      imageSize: 100,
      href: "static/hreoImg/166.jpg",
      saohua: "正在前往支援",
      selectedHero: 166,
      scale: 1,
      imgEditorVisible: false,
      imgSelecterVisible: false,
      textEditorVisible: false,
      textSelecterVisible: false,
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
      menuSize: 30
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
  created() {
    for (let item in this.imgTabsItem) {
      this.imgTabsItem[item].imgList = this[this.imgTabsItem[item].imgListName];
    }
  },
  mounted() {
    // console.log(document.body.clientWidth);
    // alert(navigator.userAgent)
    // console.log(navigator);
    this.textTabsItem = textTabsItem;
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      // console.log("手机");
      this.test = "mobile";
      this.scale = document.body.clientWidth / 600;
      this.menuSize = 50;
      // alert(document.body.clientWidth);
      this.imageSize = (document.body.clientWidth - 120) / 6;
      // alert(this.scale);
    } else {
      // console.log("电脑");
      this.test = "电脑";
    }
    // console.log(this.wizardsList)
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    saveSvgToPng() {
      // 调研使用 saveSvgAsPng 的方式
      saveSvg.saveSvgAsPng(document.getElementById("saohuaSvg"), "diagram.png", {scale: 0.3});
    },
    imageOnclick() {
      this.textEditorVisible = false;
      this.textSelecterVisible = false;
      if (this.imgEditorVisible) {
        this.imgSelecterVisible = false;
      }
      this.imgEditorVisible = !this.imgEditorVisible;
    },
    textOnclick() {
      this.imgEditorVisible = false;
      this.imgSelecterVisible = false;
      if (this.textEditorVisible) {
        this.textSelecterVisible = false;
      }
      this.textEditorVisible = !this.textEditorVisible;
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    imgTabOnclick(item, index) {
      this.activeImgName = index + "";
    },
    textTabOnclick(item, index) {
      // console.log(item);
      // console.log(index);
      this.activeTextName = item.label;
    },
    heroImgOnclick(value) {
      // console.log(value);
      this.selectedHero = value.id;
      this.imgSelecterVisible = false;
    },
    textSpanOnclick(value) {
      // console.log(value);
      this.saohua = value;
      this.textSelecterVisible = false;
    },
    editorOnblur(e) {
      // console.log(e);
      // this.textSelecterVisible = false;
    },
    editorOnfocus(e) {
      // console.log(e);
      this.textSelecterVisible = true;
    },
    changeImgOnclick() {
      this.imgSelecterVisible = true;
    },
    suggestOnclick() {
      window.open("http://jeanrryy.mikecrm.com/sve0xWZ", "_blank");
    },
    contentOnclick() {
      this.$message("算了吧，你带不动");
    }
    // covertSVG2Image(node, name, width, height, type = "png") {
    //   let serializer = new XMLSerializer();
    //   let source =
    //     '<?xml version="1.0" standalone="no"?>\r\n' +
    //     serializer.serializeToString(node);
    //   let image = new Image();
    //   image.src =
    //     "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    //   let canvas = document.createElement("canvas");
    //   canvas.width = width;
    //   canvas.height = height;
    //   let context = canvas.getContext("2d");
    //   context.fillStyle = "#fff";
    //   context.fillRect(0, 0, 10000, 10000);
    //   image.onload = function() {
    //     context.drawImage(image, 0, 0);
    //     let a = document.createElement("a");
    //     a.download = `${name}.${type}`;
    //     a.href = canvas.toDataURL(`image/${type}`);
    //     a.click();
    //   };
    // }
  }
};
</script>

  <style lang='less' scoped>
.i-can-carry-u {
  text-align: center;
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
.transition-box {
  // width: 100%;
  margin: 20px;
  // height: 400px;

  &__box {
    box-shadow: 0 0px 6px 1px #eee;

    /deep/.el-form {
      padding: 10px;
    }

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
</style>

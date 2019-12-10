<template>
  <div class="test" v-wechat-title="this.title">
    <el-upload
      action="/"
      ref="upload"
      :before-upload="beforeUpload"
      :disabled="this.fileList.length !== 0"
      :default-file-list="this.fileList"
    >
      <el-button type="primary" :disabled="this.fileList.length !== 0">上传文件</el-button>
    </el-upload>

    <div id="svg-wrap">
      <!-- <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" style="fill:#ddd" />
      </svg>-->
      <svg
        width="400px"
        height="100px"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="saohuaSvg"
      >
        <defs>
          <clipPath id="cut-off-bottom">
            <circle id="circle" cx="50" cy="50" r="45" />
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
          stroke-width="5"
        />

        <circle id="circle" cx="50" cy="50" r="50" fill="green" />
        <!-- <image
            clip-path="url(#cut-off-bottom)"
            :x="imagePositionX"
            :y="imagePositionY"
            width="90"
            height="90"
            :xlink:href="href"
        />-->
        <image
          clip-path="url(#cut-off-bottom)"
          :x="imagePositionX"
          :y="imagePositionY"
          width="90"
          height="90"
          xlink:href="../../../static/hreoImg/105.jpg"
        />

        <text x="150" y="60" fill="#F8F8FF" font-size="30">blabla</text>
      </svg>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      title: "测试页面",
      fileList: [],
      imagePositionX: 7,
      imagePositionY: 7
    };
  },
  beforeCreate() {
    // 读取文件
    // eslint-disable-next-line no-undef
    FileReader.prototype.reading = function({ encode } = pms) {
      let bytes = new Uint8Array(this.result); // 无符号整型数组
      let text = new TextDecoder(encode || "UTF-8").decode(bytes);
      return text;
    };
    /* 重写readAsBinaryString函数 */
    FileReader.prototype.readAsBinaryString = function(f) {
      if (!this.onload) {
        // 如果this未重写onload函数，则创建一个公共处理方式
        this.onload = e => {
          // 在this.onload函数中，完成公共处理
          let rs = this.reading();
          console.log(rs);
        };
      }
      this.readAsArrayBuffer(f); // 内部会回调this.onload方法
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var svg = document.getElementById("svg-wrap").innerHTML;

      var canvas = document.getElementById("canvas");
      var c = canvas.getContext("2d");

      //新建Image对象
      var img = new Image();

      //svg内容
      img.src = "data:image/svg+xml," + unescape(encodeURIComponent(svg)); //svg内容中可以有中文字符
      img.src = "data:image/svg+xml," + svg; //svg内容中不能有中文字符

      //svg编码成base64
      img.src =
        "data:image/svg+xml;base64," +
        window.btoa(unescape(encodeURIComponent(svg))); //svg内容中可以有中文字符
      img.src = "data:image/svg+xml;base64," + window.btoa(svg); //svg内容中不能有中文字符

      //图片初始化完成后调用
      img.onload = function() {
        //将canvas的宽高设置为图像的宽高
        canvas.width = img.width;
        canvas.height = img.height;

        //canvas画图片
        c.drawImage(img, 0, 0);

        //将图片添加到body中
        document.body.appendChild(img);
      };
    },
    beforeUpload(file) {
      this.fileList = [file];
      console.log("选择了文件beforeUpload");
      // 读取数据
      this.read(file);
      return false;
    },
    read(f) {
      let rd = new FileReader();
      rd.onload = e => {
        // this.readAsArrayBuffer函数内，会回调this.onload函数。在这里处理结果
        let cont = rd.reading({ encode: "GBK" });
        console.log(cont);
        let formerData = this.textData;
        this.textData = formerData + "\n" + cont;
      };
      rd.readAsBinaryString(f);
    }
  }
};
</script>

<style scoped>
</style>

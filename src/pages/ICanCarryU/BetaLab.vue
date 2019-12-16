<template>
  <div class="beat-lab" v-wechat-title="this.title">
    <canvas id="canvas" ref="faultTree" width="400" height="100"></canvas>
    <!-- <el-button type="primary" @click="dlcv">132456789</el-button> -->
    <img width="400" height="100" :src="dataURL" alt />
  </div>
</template>
<script>
export default {
  name: "beta",
  data() {
    return {
      title: "beta实验室",
      ctx: {},
      dataURL: ""
    };
  },
  mounted() {
    this.initCanvas();
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      let canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");

      // 右侧黑底蓝边框
      this.ctx.beginPath();
      this.ctx.moveTo(50, 5);
      this.ctx.lineTo(350, 5);
      this.ctx.arc(350, 50, 45, (Math.PI * 3) / 2, (Math.PI * 5) / 2);
      this.ctx.lineTo(50, 95);
      this.ctx.lineTo(50, 5);
      this.ctx.fillStyle = "#1A2515";
      this.ctx.fill();
      this.ctx.strokeStyle = "#87CEFA";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
      this.ctx.closePath();
      // 左侧头像框
      this.ctx.beginPath();
      this.ctx.arc(50, 50, 43, 0, Math.PI * 2);
      this.ctx.strokeStyle = "green";
      this.ctx.lineWidth = 6;
      this.ctx.stroke();
      this.ctx.closePath();

      // 圆形头像
      let img = new Image();
      img.src = "static/hreoImg/166.jpg";
      img.onload = () => {
        this.ctx.save();
        this.ctx.clip();
        this.ctx.drawImage(img, 4, 4, 92, 92);
        this.ctx.restore();

        this.dlcv()
      };

      // 文字
      this.ctx.font = "32px bold";
      this.ctx.fillStyle = "#F8F8FF";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      //   this.ctx.fillText("要写的文字的文字", 235, 46);
      this.ctx.fillText("要写", 220, 46);
    },
    dlcv() {
      let self = this;
      let ref = this.$refs.faultTree; // 截图区域
      html2canvas(ref, {
        backgroundColor: "transparent"
      }).then(canvas => {
        let dataURL = canvas.toDataURL("image/png");
        self.dataURL = dataURL;
      });
    }
  }
};
</script>
<style lang='less' scoped>
.beat-lab {
  text-align: center;
  background-color: #909399;
}
</style>
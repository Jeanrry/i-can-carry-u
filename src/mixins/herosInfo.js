const mixins = {
  data() {
    return {
      jobs: [],
      herosInfo: []
    }
  },
  computed: {
    herosInfoList() {
      return this.herosInfo;
    },
    jobsList() {
      return this.jobs;
    },
    // 坦克列表
    tanksList() {
      return this.getListByJob(1)
    },
    // 战士列表
    warriorsList() {
      return this.getListByJob(2)
    },
    // 刺客列表
    assassinsList() {
      return this.getListByJob(3)
    },
    // 法师列表
    wizardsList() {
      return this.getListByJob(4)
    },
    // 射手列表
    shootersList() {
      return this.getListByJob(5)
    },
    // 辅助列表
    assistersList() {
      return this.getListByJob(6)
    }
  },
  methods: {
    getListByJob(value) {
      let result = []
      this.herosInfo.forEach(element => {
        if (element.type.indexOf(value) > -1) {
          result.push(element)
        }
      });
      return result
    }
  },
  created() {
    this.jobs = jobs;
    this.herosInfo = herosInfo;
  }
}
export default mixins

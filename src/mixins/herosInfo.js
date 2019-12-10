const mixins = {
  data() {
    return {
      jobs: [{
          id: 1,
          name: "坦克"
        },
        {
          id: 2,
          name: "战士"
        },
        {
          id: 3,
          name: "刺客"
        },
        {
          id: 4,
          name: "法师"
        },
        {
          id: 5,
          name: "射手"
        },
        {
          id: 6,
          name: "辅助"
        }
      ],
      herosInfo: [{
          id: 525,
          name: "鲁班大师",
          type: [
            6
          ]
        },
        {
          id: 523,
          name: "西施",
          type: [
            4
          ]
        },
        {
          id: 518,
          name: "马超",
          type: [
            2,
            3
          ]
        },
        {
          id: 522,
          name: "曜",
          type: [
            2
          ]
        },
        {
          id: 506,
          name: "云中君",
          type: [
            2,
            3
          ]
        },
        {
          id: 505,
          name: "瑶",
          type: [
            6
          ]
        },
        {
          id: 529,
          name: "盘古",
          type: [
            2
          ]
        },
        {
          id: 511,
          name: "猪八戒",
          type: [
            1
          ]
        },
        {
          id: 515,
          name: "嫦娥",
          type: [
            1,
            4
          ]
        },
        {
          id: 513,
          name: "上官婉儿",
          type: [
            3,
            4
          ]
        },
        {
          id: 507,
          name: "李信",
          type: [
            2
          ]
        },
        {
          id: 312,
          name: "沈梦溪",
          type: [
            4
          ]
        },
        {
          id: 508,
          name: "伽罗",
          type: [
            5
          ]
        },
        {
          id: 509,
          name: "盾山",
          type: [
            6
          ]
        },
        {
          id: 137,
          name: "司马懿",
          type: [
            3,
            4
          ]
        },
        {
          id: 510,
          name: "孙策",
          type: [
            1,
            2
          ]
        },
        {
          id: 125,
          name: "元歌",
          type: [
            3
          ]
        },
        {
          id: 504,
          name: "米莱狄",
          type: [
            4
          ]
        },
        {
          id: 503,
          name: "狂铁",
          type: [
            2
          ]
        },
        {
          id: 197,
          name: "弈星",
          type: [
            4
          ]
        },
        {
          id: 502,
          name: "裴擒虎",
          type: [
            2,
            3
          ]
        },
        {
          id: 176,
          name: "杨玉环",
          type: [
            4,
            6
          ]
        },
        {
          id: 199,
          name: "公孙离",
          type: [
            5
          ]
        },
        {
          id: 501,
          name: "明世隐",
          type: [
            6
          ]
        },
        {
          id: 179,
          name: "女娲",
          type: [
            4
          ]
        },
        {
          id: 198,
          name: "梦奇",
          type: [
            1
          ]
        },
        {
          id: 194,
          name: "苏烈",
          type: [
            1,
            2
          ]
        },
        {
          id: 195,
          name: "百里玄策",
          type: [
            3
          ]
        },
        {
          id: 196,
          name: "百里守约",
          type: [
            3,
            5
          ]
        },
        {
          id: 193,
          name: "铠",
          type: [
            2
          ]
        },
        {
          id: 189,
          name: "鬼谷子",
          type: [
            6
          ]
        },
        {
          id: 182,
          name: "干将莫邪",
          type: [
            4
          ]
        },
        {
          id: 187,
          name: "东皇太一",
          type: [
            1
          ]
        },
        {
          id: 191,
          name: "大乔",
          type: [
            6
          ]
        },
        {
          id: 192,
          name: "黄忠",
          type: [
            5
          ]
        },
        {
          id: 190,
          name: "诸葛亮",
          type: [
            4
          ]
        },
        {
          id: 180,
          name: "哪吒",
          type: [
            2
          ]
        },
        {
          id: 186,
          name: "太乙真人",
          type: [
            1,
            6
          ]
        },
        {
          id: 184,
          name: "蔡文姬",
          type: [
            6
          ]
        },
        {
          id: 183,
          name: "雅典娜",
          type: [
            2
          ]
        },
        {
          id: 178,
          name: "杨戬",
          type: [
            2
          ]
        },
        {
          id: 177,
          name: "成吉思汗",
          type: [
            5
          ]
        },
        {
          id: 175,
          name: "钟馗",
          type: [
            2,
            4
          ]
        },
        {
          id: 174,
          name: "虞姬",
          type: [
            5
          ]
        },
        {
          id: 173,
          name: "李元芳",
          type: [
            5
          ]
        },
        {
          id: 171,
          name: "张飞",
          type: [
            1,
            6
          ]
        },
        {
          id: 170,
          name: "刘备",
          type: [
            2
          ]
        },
        {
          id: 169,
          name: "后羿",
          type: [
            5
          ]
        },
        {
          id: 168,
          name: "牛魔",
          type: [
            1,
            6
          ]
        },
        {
          id: 167,
          name: "孙悟空",
          type: [
            2,
            3
          ]
        },
        {
          id: 166,
          name: "亚瑟",
          type: [
            1,
            2
          ]
        },
        {
          id: 163,
          name: "橘右京",
          type: [
            2,
            3
          ]
        },
        {
          id: 162,
          name: "娜可露露",
          type: [
            3
          ]
        },
        {
          id: 157,
          name: "不知火舞",
          type: [
            3,
            4
          ]
        },
        {
          id: 156,
          name: "张良",
          type: [
            4
          ]
        },
        {
          id: 154,
          name: "花木兰",
          type: [
            2,
            3
          ]
        },
        {
          id: 153,
          name: "兰陵王",
          type: [
            3
          ]
        },
        {
          id: 152,
          name: "王昭君",
          type: [
            4
          ]
        },
        {
          id: 150,
          name: "韩信",
          type: [
            3
          ]
        },
        {
          id: 149,
          name: "刘邦",
          type: [
            1
          ]
        },
        {
          id: 148,
          name: "姜子牙",
          type: [
            4,
            6
          ]
        },
        {
          id: 146,
          name: "露娜",
          type: [
            2,
            4
          ]
        },
        {
          id: 144,
          name: "程咬金",
          type: [
            1,
            2
          ]
        },
        {
          id: 142,
          name: "安琪拉",
          type: [
            4
          ]
        },
        {
          id: 141,
          name: "貂蝉",
          type: [
            3,
            4
          ]
        },
        {
          id: 140,
          name: "关羽",
          type: [
            2
          ]
        },
        {
          id: 139,
          name: "老夫子",
          type: [
            2
          ]
        },
        {
          id: 136,
          name: "武则天",
          type: [
            4
          ]
        },
        {
          id: 135,
          name: "项羽",
          type: [
            1
          ]
        },
        {
          id: 134,
          name: "达摩",
          type: [
            1,
            2
          ]
        },
        {
          id: 133,
          name: "狄仁杰",
          type: [
            5
          ]
        },
        {
          id: 132,
          name: "马可波罗",
          type: [
            5
          ]
        },
        {
          id: 131,
          name: "李白",
          type: [
            3
          ]
        },
        {
          id: 130,
          name: "宫本武藏",
          type: [
            2
          ]
        },
        {
          id: 129,
          name: "典韦",
          type: [
            2
          ]
        },
        {
          id: 128,
          name: "曹操",
          type: [
            2
          ]
        },
        {
          id: 127,
          name: "甄姬",
          type: [
            4
          ]
        },
        {
          id: 126,
          name: "夏侯惇",
          type: [
            1,
            2
          ]
        },
        {
          id: 124,
          name: "周瑜",
          type: [
            4
          ]
        },
        {
          id: 123,
          name: "吕布",
          type: [
            2
          ]
        },
        {
          id: 121,
          name: "芈月",
          type: [
            1,
            4
          ]
        },
        {
          id: 120,
          name: "白起",
          type: [
            1
          ]
        },
        {
          id: 119,
          name: "扁鹊",
          type: [
            4
          ]
        },
        {
          id: 118,
          name: "孙膑",
          type: [
            4,
            6
          ]
        },
        {
          id: 117,
          name: "钟无艳",
          type: [
            1,
            2
          ]
        },
        {
          id: 116,
          name: "阿轲",
          type: [
            3
          ]
        },
        {
          id: 115,
          name: "高渐离",
          type: [
            4
          ]
        },
        {
          id: 114,
          name: "刘禅",
          type: [
            1,
            6
          ]
        },
        {
          id: 113,
          name: "庄周",
          type: [
            1,
            6
          ]
        },
        {
          id: 112,
          name: "鲁班七号",
          type: [
            5
          ]
        },
        {
          id: 111,
          name: "孙尚香",
          type: [
            5
          ]
        },
        {
          id: 110,
          name: "嬴政",
          type: [
            4
          ]
        },
        {
          id: 109,
          name: "妲己",
          type: [
            4
          ]
        },
        {
          id: 108,
          name: "墨子",
          type: [
            2,
            4
          ]
        },
        {
          id: 107,
          name: "赵云",
          type: [
            2,
            3
          ]
        },
        {
          id: 106,
          name: "小乔",
          type: [
            4
          ]
        },
        {
          id: 105,
          name: "廉颇",
          type: [
            1
          ]
        }
      ],
      textTabsItem: [{
          label: "防守",
          textList: [
            '小心草丛！',
            '敌人消失！',
            '回防高地！',
            '请求支援！',
            '猥琐发育，别浪',
            '注意野区',
            '保护我方输出',
            '小心对方偷塔',
            '稳住，我们能赢',
            '大家打开语音',
            '跟着我！',
            '注意分散站位',
            '注意保护后排',
            '等等我，马上到',
            '技能不全，撤退',
            '状态不好，撤退',
            '撤退别打主宰',
            '撤退，别打暴君',
            '我回防高地',
            '别团，等人齐！',
            '多观察小地图',
            '当心敌方陷阱',
            '帮我看红，谢谢！',
            '帮我看蓝，谢谢！',
            '我单带，别接团',
            '经济落后，别团',
            '兵线没到，撤退',
            '敌人偷塔，撤退',
            '打团了，别单带',
            '等我复活再团',
            '注意敌方绕后',
            '撤退别打龙王'
          ]
        },
        {
          label: "进攻",
          textList: [
            '集合埋伏',
            '清理兵线',
            '我拿buff，谢谢',
            '集合准备团战',
            '拖住,我偷塔',
            '集合进攻暴君',
            '集合进攻主宰',
            '全体进攻对抗路',
            '全体进攻中路',
            '全体进攻发育路',
            '优先攻击输出',
            '优先攻击突进',
            '优先推塔',
            '准备越塔强攻',
            '正在前往支援',
            '上去开团！',
            '等我集合打团',
            '我来抓人了',
            '大招已经好了',
            '我去抓对抗路',
            '我去抓中路',
            '我去抓发育路',
            '让我独享经验',
            '我拿BUFF再团',
            '团不过先发育',
            '清完兵线再团',
            '继续推我回防',
            '集合反蓝',
            '集合反红',
            '集合入侵野区',
            '集合进攻龙王'
          ]
        },
        {
          label: "交流",
          textList: [
            '干的漂亮！',
            '抱歉',
            '谢谢你',
            '挑衅',
            '收到！',
            'I\'ll carry you!',
            '法师来拿蓝',
            '射手来拿红',
            '求让BUFF，谢谢！',
            '交个朋友',
            '新年快乐！'
          ]
        }
      ]
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
  }
}
export default mixins

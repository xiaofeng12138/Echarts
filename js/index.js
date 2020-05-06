//初始化柱状图
(function(){
    let myEcharts = echarts.init(document.querySelector('.bar .charts'))
    let option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['旅游行业', '教育行业', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
                axisTick: {
                    alignWithLabel: true
                },
                //修改刻度标签相关样式
                axisLabel:{
                    color:"rgba(255,255,255,.6)",
                    fontSize:'12'
                },
                //是否显示X坐标轴样式
                axisLine:{
                    show:'false'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.6)",
                    }
                },
                //y轴分割线样式
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)",
                    }
                }

            }
        ],
        series: [
            {
                name: '行业分布',
                type: 'bar',
                barWidth: '35%',
                data: [100, 200, 400, 600, 1000, 800, 500],
                itemStyle:{
                    barBorderRadius:5
                }
            }
        ]
    };
    myEcharts.setOption(option);
    window.addEventListener('resize',()=>{
        myEcharts.resize()
    })
})();

//柱状图2
(function(){
    let myEcharts = echarts.init(document.querySelector('.bar2 .charts'));
    let myColor =['#1089e7','#f57474','#56d0e3','#f8b448','#8b78f6']
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top:'10%',
            left: '22%',
            bottom: '10%',
            // containLabel: true
        },
        xAxis: {
           show:false
        },
        yAxis:[
            {
                type: 'category',
                data: [ 'HTML5', 'CSS3', 'VUE', 'REACT', 'JavaScript'],
                inverse:true,
                //不显示Y轴坐标线
                axisLine:{
                    show:false
                },
                //不显示Y轴刻度线
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#fff",
                    fontSize:'12'
                },
            },
            {
                data: [ '702', '350', '613', '703', '604'],
                inverse:true,
                //不显示Y轴坐标线
                axisLine:{
                    show:false
                },
                //不显示Y轴刻度线
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#fff",
                    fontSize:'12'
                },
            },
        ],
        series: [
            {
                type: 'bar',
                data: [70, 34, 60, 78, 59],
                yAxisIndex:0,
                itemStyle:{
                    barBorderRadius:20,
                    color:function(params){
                      return myColor[params.dataIndex]
                    }
                },
                barWidth:10,
                BARCategoryGap:50, //柱子之间的距离
                //柱子里面的数字显示配置
                label:{
                    show:true,
                    position:'inside',
                    formatter:'{c}%'
                }
            },
            {
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                yAxisIndex:1,
                itemStyle:{
                   color:'none',
                   borderColor:'#00c1de',
                   borderWidth:3,
                   barBorderRadius:15,
                },
                barWidth:15,
                BARCategoryGap:50, //柱子之间的距离
            }
        ]
    };
    myEcharts.setOption(option);
    window.addEventListener('resize',()=>{
        myEcharts.resize()
    })
})();

//初始化折线图
(function(){
    let yearData = [
        {
          year: "2020", // 年份
          data: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
          ]
        },
        {
          year: "2021", // 年份
          data: [
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
          ]
        }
      ];
    let myEcharts = echarts.init(document.querySelector('.line .charts'));
    let option = {
        color:['#00f2f1','#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle:{
                color:"#4c9bfd"
            },
            right:'10%'
        },
        grid: {
            top:'20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show:'true', //是否显示栅格边框
            borderColor:'#012f4a',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
            axisLine:{
                show:false  //去除轴线
            },
            axisTick:{
                show:false  //去除刻度线
            },
            axisLabel:{
                color:'#4c9bfd' //修改文字颜色
            }
        },
        yAxis: {
            type: 'value',
            axisLine:{
                show:false  //去除轴线
            },
            axisTick:{
                show:false  //去除刻度线
            },
            axisLabel:{
                color:'#4c9bfd' //修改文字颜色
            },
            splitLine:{
                lineStyle:{
                    color:'#012f4a' //分割线颜色
                }
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                data: yearData[0].data[0],
                smooth:true, //显示平滑曲线
            },
            {
                name: '新增流量',
                type: 'line',
                data: yearData[1].data[1],
                smooth:true, //显示平滑曲线
            },
        ]
    };
    myEcharts.setOption(option);
    window.addEventListener('resize',()=>{
        myEcharts.resize()
    })

     // 5.点击切换效果
    $(".line h2").on("click", "a", function() {
        let obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        // 需要重新渲染
        myEcharts.setOption(option);
    });
})();


//折线图2
(function(){
    let myEcharts = echarts.init(document.querySelector('.line2 .charts'));
    let option = {
        legend: {
            textStyle:{
                color:'rgba(255,255,255,.6)'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "26",
                    "28",
                    "29",
                    "30"
                  ],
                axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.6)",
                      fontSize: 12
                    }
                  },
                  // x轴线的颜色为   rgba(255,255,255,.2)
                  axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.2)"
                    }
                  }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.6)",
                      fontSize: 12
                    }
                  },
                  // 修改分割线的颜色
                  splitLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  }
            }
        ],
        series: [
            {
                name: '播放量',
                type: 'line',
                 // 填充颜色设置
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                        offset: 0,
                        color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                        },
                        {
                        offset: 0.8,
                        color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                        }
                    ],
                    false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                smooth:true,
                lineStyle:{
                  color:'#0184d5',
                  width:2
                },
                  // 设置拐点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                data: [
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    20,
                    60,
                    50,
                    40
                  ]
            },
            {
                name: '转发量',
                type: 'line',
                areaStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 0,
                            color: "rgba(0, 216, 135, 0.4)"
                          },
                          {
                            offset: 0.8,
                            color: "rgba(0, 216, 135, 0.1)"
                          }
                        ],
                        false
                      ),
                      shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                  },
                  smooth:true,
                  // 设置拐点 小圆点
                  symbol: "circle",
                  // 拐点大小
                  symbolSize: 5,
                  // 设置拐点颜色以及边框
                  itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                  },
                  // 开始不显示拐点， 鼠标经过显示
                  showSymbol: false,
                  data: [
                    130,
                    10,
                    20,
                    40,
                    30,
                    40,
                    80,
                    60,
                    20,
                    40,
                    90,
                    40,
                    20,
                    140,
                    30,
                    40,
                    130,
                    20,
                    20,
                    40,
                    80,
                    70,
                    30,
                    40,
                    30,
                    120,
                    20,
                    99,
                    50,
                    20
                  ]
            },
            
        ]
    };
    

    myEcharts.setOption(option);
    window.addEventListener('resize',()=>{
        myEcharts.resize()
    })
})();

//饼图1
(function(){
    let myEcharts = echarts.init(document.querySelector('.pie .charts'));
    let option = {
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            bottom:'0',
            // 修改小图标的大小
            itemWidth: 10,
            itemHeight: 10,
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                // radius 第一个值是内圆的半径 第二个值是外圆的半径
                radius: ['40%', '60%'],
                center:['50%','40%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "1-10岁" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ]
            }
        ]
    };
    
    

    myEcharts.setOption(option);
    window.addEventListener('resize',()=>{
        myEcharts.resize()
    })
})();


//饼图2
(function(){
    let myEcharts = echarts.init(document.querySelector('.pie2 .charts'));
    let option = {
        color: ["#006cff","#60cda0","#ed8884","#ff9f7f","#0096ff","#9fe6b8","#32c5e9", "#1d9dff"],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom:'0%',
            itemWidth: 10,
            itemHeight: 10,
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ["10%", "70%"],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    fontSize: 10
                  },
                  // 链接图形和文字的线条
                  labelLine: {
                    // length 链接图形的线条
                    length: 6,
                    // length2 链接文字的线条
                    length2: 8
                  },
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "四川" },
                    { value: 42, name: "湖北" }
                ]
            }
        ]
    };
    
    
    

    myEcharts.setOption(option);
    window.addEventListener('resize',()=>{
        myEcharts.resize()
    })
})();



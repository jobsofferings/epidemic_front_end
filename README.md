## 新冠肺炎全球数据获取与分析系统

### 展示

React

**总体来说分为三个部分，国内疫情数据、国外疫情数据、3D地图、相关数据与新闻、预防须知**

+ 两个tab，国内疫情数据、全球疫情数据
  
现存确诊、境外输入、现存无状态、累计确诊、累计死亡、累计治愈...
可以考虑后台配置显示

+ 疫情地图

热力图
3D

+ 疫情趋势 [示例](https://cn.bing.com/search?q=%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E7%96%AB%E6%83%85%E6%95%B0%E6%8D%AE%E8%8E%B7%E5%8F%96&qs=n&form=QBRE&sp=-1&pq=%E6%96%B0%E5%86%A0%E8%82%BA%E7%82%8E%E7%96%AB%E6%83%85%E6%95%B0%E6%8D%AE&sc=0-8&sk=&cvid=22AE7530D5D349B18E7CCA337B885A17) 

确诊治愈对比
中国/海外新增对比
这个可以有下拉框，能下拉选择国家、省市和往前截止日期
y轴可以有新增确诊、新增境外确诊、累计境外、现存确诊、累计确诊、累计治愈、累计死亡

+ 境外输入省市Top10
  
+ 中国疫情（包括港澳台）

可以是一个表，地区、现有确诊、累计确诊（对比较昨日）、治愈、死亡

+ nCov确认病例与疑似病例曲线

+ 实时新闻

这个可以考虑做，每隔五分钟爬一次央视新闻APP或者其他文章（跳链）

+ 新冠肺炎预防须知

### 分析

Node做简单的单参数、双参数预测后一日的数据

### 数据源 

network + response 获取数据，腾讯新闻的还不错，存数据库后用接口拆出来做不同的可视化图表。

使用Node做数据请求

[腾讯新闻](https://news.qq.com/zt2020/page/feiyan.htm#/global)
[2019新型冠状病毒疫情实时爬虫](https://github.com/BlankerL/DXY-COVID-19-Crawler)
[丁香园疫情地图](https://ncov.dxy.cn/ncovh5/view/pneumonia)
[网易](https://wp.m.163.com/163/page/news/virus_report/index.html?_nw_=1&_anw_=1)
[基因组序列发布 - 2019新型冠状病毒信息库 - Big](https://bigd.big.ac.cn/ncov/release_genome)
[新冠疫情最受关注的十一篇英文核心期刊论文全解析](https://med.sina.com/article_detail_103_2_77604.html)

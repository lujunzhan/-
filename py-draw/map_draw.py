import requests
import json

from pyecharts.charts import Map, Geo
from pyecharts import options as opts
from pyecharts.globals import GeoType

""" 导入数据 """

# 数据接口
url = 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5'
# 读取数据转换为json格式
data = json.loads(requests.get(url).json()['data'])
# 更新时间
update_time = data['lastUpdateTime']
# 全国数据
china_total = data['chinaTotal']
# 全国各地具体数据
China = data['areaTree'][0]['children']

print(China)
# 将数据生成为副标题
ncp_info = '确诊：{} 疑似：{} 死亡：{} 治愈：{} 更新日期：{}'.format(
    china_total['confirm'],
    china_total['suspect'],
    china_total['dead'],
    china_total['heal'],
    update_time
)

""" 绘制地图 """
c = (
    Geo()
    .add_schema(
        maptype='china',
        # 设置地图区域颜色
        itemstyle_opts= opts.ItemStyleOpts(color="#323c48",border_color="#111")
    )
    .add(
        'geo',
        # 序列数据，添加省会名称以及确诊数量
        [list([China[i]['name'], China[i]['total']['confirm']]) for i in range(len(China))],
        # 设置涟漪效果
        type_=GeoType.EFFECT_SCATTER,
    )
    .set_series_opts(
        # 不显示Label
        label_opts=opts.LabelOpts(is_show=False)
    )
    .set_global_opts(
        # 设置标题，副标题，放置中间
        title_opts=opts.TitleOpts(title="全国疫情地图", subtitle=ncp_info, pos_left='center'),
        # 设置渐变，最大值设为平均值
        visualmap_opts=opts.VisualMapOpts(min_=0, max_=china_total['confirm'] / len(data)),
        # 不显示图例
        legend_opts=opts.LegendOpts(is_show=False)
        
    )
    
)
# 保存地图
c.render()
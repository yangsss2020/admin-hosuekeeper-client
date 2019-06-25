<template>
	<div class="Main">
		<el-container class="panel">
			<el-row class="list">
				<el-col :xs="24" :sm="12" :md="6" class="list-item">
					<div class="left"><i class="iconfont">&#xe61a;</i></div>
					<div class="right">
						<div class="wrapper">
							<h3 class="title">{{ alluser.length }}</h3>
							<p class="desc">用户</p>
						</div>
					</div>
				</el-col>
				<el-col :xs="24" :sm="12" :md="6" class="list-item">
					<div class="left"><i class="iconfont">&#xe600;</i></div>
					<div class="right">
						<div class="wrapper">
							<h3 class="title">{{ allusers.length }}</h3>
							<p class="desc">管理员</p>
						</div>
					</div>
				</el-col>
				<el-col :xs="24" :sm="12" :md="6" class="list-item">
					<div class="left"><i class="iconfont">&#xe628;</i></div>
					<div class="right">
						<div class="wrapper">
							<h3 class="title">{{ allorder.length }}</h3>
							<p class="desc">订单</p>
						</div>
					</div>
				</el-col>
				<el-col :xs="24" :sm="12" :md="6" class="list-item">
					<div class="left"><i class="iconfont">&#xe687;</i></div>
					<div class="right">
						<div class="wrapper">
							<h3 class="title">{{ area.length }}</h3>
							<p class="desc">地区</p>
						</div>
					</div>
				</el-col>
			</el-row>
		</el-container>
		<div class="chart-earning">
			<el-row class="row">
				<el-col :xs="24" :md="16" class="item"><v-chart :options="data1" ref="chart1"></v-chart></el-col>
				<el-col :xs="24" :md="8" class="item"><v-chart :options="data2" ref="chart2"></v-chart></el-col>
			</el-row>
		</div>
		<MainNav :allorder="allorder" :area="area" />
		<MainPerson />
	</div>
</template>

<script>
import MainNav from '@/page/Home/components/Main/components/MainNav';
import MainPerson from '@/page/Home/components/Main/components/MainPerson';
import { mapState } from 'vuex';
import jsonp from 'jsonp';

export default {
	name: 'Main',
	components: { MainPerson, MainNav },
	data() {
		return {
			hourly: [],
			date: ''
		};
	},
	computed: {
		...mapState(['allorder', 'area', 'alluser', 'allusers']),
		time() {
			const hourly = this.hourly;
			const time = [];
			hourly.forEach(item => {
				time.push(item.time);
			});
			return time;
		},
		temp() {
			const hourly = this.hourly;
			const temp = [];
			hourly.forEach(item => {
				temp.push(parseInt(item.temp));
			});
			return temp;
		},
		data1() {
			const data1 = {
				color: ['#ff907e'],
				title: {
					text: this.date,
					textStyle: {
						color: '#7acff7'
					}
				},
				legend: {
					data: ['line']
				},
				xAxis: {
					data: this.time
				},
				yAxis: {},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross'
					}
				},
				series: [
					{
						name: '温度',
						type: 'line',
						data: this.temp
					}
				],
				animationDuration: 2000
			};
			return data1;
		},
		data2() {
			const data2 = {
				title: {
					text: '网站信息',
					x: 'center',
					textStyle: {
						color: '#4c5a80'
					}
				},
				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b} : {c} ({d}%)'
				},
				legend: {
					orient: 'vertical',
					left: 'left',
					data: ['用户', '管理员', '订单', '地区', '搜索引擎']
				},
				series: [
					{
						name: '网址信息',
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						data: [
							{ value: this.alluser.length, name: '用户' },
							{ value: this.allusers.length, name: '管理员' },
							{ value: this.allorder.length, name: '订单' },
							{ value: this.area.length, name: '地区' }
						],
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				],
				animationDuration: 2000
			};
			return data2;
		}
	},
	methods: {},
	mounted() {
		jsonp('http://api.jisuapi.com/weather/query?appkey=d4d48f8ee18a6b5b&city=重庆&cityid=101040100', null, (err, data) => {
			if (err) {
				throw err;
			} else {
				if (data.status === '0') {
					this.hourly = data.result.hourly;
					this.date = data.result.date + '  ' + data.result.week + '  ' + data.result.weather;
				}
			}
		});
		window.addEventListener('resize', () => {
			if (this.$refs.chart1) {
				this.$refs.chart1.resize();
				this.$refs.chart2.resize();
			}
		});
	}
};
</script>

<style scoped lang="scss">
@import 'main';
</style>

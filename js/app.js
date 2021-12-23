const ecommerceChart = echarts.init(document.getElementById('ecommerceChart'));


new fullpage('#fullpage', {
  licenseKey: '0504859B-A2D74649-9F0A4143-79C3F96A',
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Home', 'Overview', 'Ecommerce', 'Software', 'Payments', 'Internet'],
  anchors:['home', 'overview', 'ecommerce', 'software', 'payments', 'internet'],
  scrollingSpeed: 1000,
  controlArrows: true,
  onLeave: function(origin, destination, direction){
    if (destination.anchor === 'ecommerce') {
      ecommerceChart.setOption(ecommerceChartOptions);
    }

	}
});




const ecommerceChartOptions = {
  title: {
    text: 'GMV ($M)',
    textStyle: {
      fontFamily: 'Montserrat'
    }
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      fontFamily: 'Montserrat'
    }
  },
  legend: {
    data: ['AMZN (Ex. AWS)', 'SHOP', 'SE (Ex. Garena)', 'DASH', 'HFG', ],
    textStyle: {
      fontFamily: 'Montserrat'
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [	'Q1 18', 'Q2 18', 'Q3 18', 'Q4 18', 'Q1 19', 'Q2 19', 'Q3 19', 'Q4 19', 'Q1 20', 'Q2 20', 'Q3 20', 'Q4 20', 'Q1 21', 'Q2 21', 'Q3 21', 'Q4 21 (Est.)', ],
    axisLabel: {
      fontFamily: 'Montserrat'
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontFamily: 'Montserrat'
    }
  },
  series: [
    {
      name: 'AMZN (Ex. AWS)',
      type: 'line',
      data: [82660, 85589, 91477, 118485, 96568, 102871, 113834, 147267, 123149, 150884, 166288, 222121, 189851, 198611, 191710, 240900]
    },
    {
      name: 'SHOP',
      type: 'line',
      data: [7952, 9136, 9995, 14021, 11914, 13772, 14821, 20631, 17415, 30105, 30917, 41139, 37347, 42200, 41800, 49367]
    },
    {
      name: 'SE (Ex. Garena)',
      type: 'line',
      data: [1941, 2222, 2691, 3425, 3529, 3828, 4573, 5646, 6152, 8035, 9270, 11900, 12600, 15000, 16800, 18500]
    },
    {
      name: 'DASH',
      type: 'line',
      data: [431, 566, 767, 1048, 1560, 1880, 2097, 2502, 3083, 6150, 7252, 8179, 9913, 10456, 10416, 10800]
    },
    {
      name: 'HFG',
      type: 'line',
      data: [343, 371, 351, 420, 487, 507, 511, 594, 811, 1128, 1125, 1286, 1674, 1804, 1642, 1800]
    }
  ],
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
};


const resizeCharts = () => {
  ecommerceChart.resize();
}

window.addEventListener('resize', resizeCharts);




particlesJS('particles',
	{
		"particles": {
			"number": {
				"value": 55,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
			},
			"opacity": {
				"value": 0.4,
				"random": false,
			},
			"size": {
				"value": 1,
				"random": false,
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.3,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 1,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"push": {
					"particles_nb": 4
				}
			}
		},
		"retina_detect": true,
	}
);


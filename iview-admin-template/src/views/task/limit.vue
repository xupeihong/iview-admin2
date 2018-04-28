<template>
	<div>
		<Table border :columns="columns7" :data="data6"></Table>
	</div>
</template>
<script>
	export default{
		name:'limit',
		data(){
			return{
               columns7: [
                    {
                        title: '渠道',
                        key: 'channel',
                    },
                    {
                        title: '客户名称',
                        key: 'cname',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('a', {
                                    props: {
                                        type: 'default',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '0px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                         }
                                    }
                                }, this.data6[params.index].cname),
                                
                            ]);
                        }
                    },
                    {
                        title: '合同编号',
                        key: 'pid'
                    },
                    
                    {
                        title: '申请金额',
                        key: 'smoney'
                    },
                    
                    {
                        title: '应还金额',
                        key: 'backmoney'
                    },
                    {
                        title: '应还本金',
                        key: 'backbmoney'
                    },                
                    {
                        title: '应还利息',
                        key: 'backproy'
                    },
                    
                    {
                        title: '应付罚息',
                        key: 'payproy'
                    },
                    {
                        title: '用款日期',
                        key: 'usetime'
                    },

                    {
                        title: '应还款日期',
                        key: 'btime'
                    },

                    {
                        title: '实还款日期',
                        key: 'ttime'
                    },
                    {
                        title: '剩余天数',
                        key: 'tday'
                    },
                    {
                        title: '状态',
                        key: 'state'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'default',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                           
                                        }
                                    }
                                }, '详情')
                                
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        channel: '亿海蓝',
                        cname: '亿海蓝公司',
                        pid: '4565463323453No.1',
                        smoney:50000,
                        backmoney:2000,
                        backbmoney:2000,
                        backproy:200,
                        payproy:200,
                        usetime:'2018-5-8',
                        btime:'2018-2-23',
                        ttime:'2018-2-25',
                        tday:'逾期1天',
                        state:'未还款'
                    },
                    {
                        channel: 're亿海蓝',
                        cname: '亿fds海蓝公司',
                        pid: '4565463323453No.1',
                        smoney:50000,
                        backmoney:2000,
                        backbmoney:2000,
                        backproy:200,
                        payproy:200,
                        usetime:'2018-5-8',
                        btime:'2018-2-23',
                        ttime:'2018-2-25',
                        tday:'逾期12天',
                        state:'未还款'
                    },
                    {
                        channel: '亿海蓝3',
                        cname: '43亿海蓝公司',
                        pid: '4565463323453No.1',
                        smoney:50000,
                        backmoney:2000,
                        backbmoney:2000,
                        backproy:200,
                        payproy:200,
                        usetime:'2018-5-8',
                        btime:'2018-2-23',
                        ttime:'2018-2-25',
                        tday:'逾期4天',
                        state:'未还款'
                    }
                ]
			}
		},
		methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `渠道：${this.data6[index].channel}<br>客户名称：${this.data6[index].cname}<br>合同编号：${this.data6[index].pid}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
	}
</script>
<style scoped></style>
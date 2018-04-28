<template>
	<div>
		 <Table border :columns="columns7" :data="data6"></Table>
	</div>
</template>
<script>
	export default{
		name:'lend',
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
                        title: '申请时间',
                        key: 'stime'
                    },
                    {
                        title: '申请金额',
                        key: 'smoney'
                    },
                    {
                        title: '可用额度',
                        key: 'avablemoney'
                    },
                    {
                        title: '融资期限',
                        key: 'timelimt'
                    },
                    {
                        title: '还款方式',
                        key: 'way'
                    },
                    {
                        title: '用款时间',
                        key: 'usetime'
                    },
                    {
                        title: '应还金额',
                        key: 'backmoney'
                    },
                    {
                        title: '服务费',
                        key: 'fee'
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
                                }, '详情'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '放款')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        channel: '亿海蓝',
                        cname: '亿海蓝公司',
                        pid: '4565463323453No.1',
                        stime:'2018-3-5',
                        smoney:50000,
                        avablemoney:50000,
                        timelimt:'3月',
                        way:'按月还息',
                        usetime:'2018-5-8',
                        backmoney:2000,
                        fee:200,
                        state:'审批通过待放款'
                    },
                    {
                        channel: '亿海蓝erew',
                        cname: '亿海蓝321公司',
                        pid: '4565463323453No.1',
                        stime:'2018-3-5',
                        smoney:50000,
                        avablemoney:50000,
                        timelimt:'3月',
                        way:'按月还息',
                        usetime:'2018-5-8',
                        backmoney:2000,
                        fee:200,
                        state:'审批通过待放款'
                    },
                    {
                        channel: '亿海蓝fds',
                        cname: '亿海蓝公司32',
                        pid: '4565463323453No.1',
                        stime:'2018-3-5',
                        smoney:50000,
                        avablemoney:50000,
                        timelimt:'3月',
                        way:'按月还息',
                        usetime:'2018-5-8',
                        backmoney:2000,
                        fee:200,
                        state:'审批通过待放款'
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
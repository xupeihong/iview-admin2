<template>
	<div>
		<Table border :columns="columns7" :data="data6"></Table>
	</div>
</template>
<script>
	export default{
		name:'confirm',
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
                    	title: '还款类型',
                        key: 'backtype'
                    },
                    {
                        title: '实还金额',
                        key: 'realmoney'
                    },
                    
                    {
                        title: '实还本金',
                        key: 'realbenjin'
                    },
                    {
                        title: '应还利息',
                        key: 'reallixi'
                    },                
                                     
                    {
                        title: '实付罚息',
                        key: 'realproy'
                    },
                    {
                        title: '申请日期',
                        key: 'stime'
                    },

                    {
                        title: '还款日期',
                        key: 'btime'
                    },

                    {
                        title: '确认日期',
                        key: 'oktime'
                    },
                    {
                        title: '状态',
                        key: 'state'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 180,
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
                                }, '确认'),
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
                                }, '退回')
                                
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        channel: '亿海蓝',
                        cname: '亿海蓝公司',
                        pid: '4565463323453No.1',
                        backtype:'批量还款',
                        realmoney:50,
                        realbenjin:2000,
                        reallixi:200,
                        realproy:200,
                        stime:'2018-2-23',                  
                        btime:'2018-2-23',
                        oktime:'2018-2-25',
                        state:'待确认'
                    },
                    {
                        channel: '亿海蓝',
                        cname: '亿海rerr蓝公司',
                        pid: '4565463323453No.1',
                        backtype:'批量还款',
                        realmoney:50,
                        realbenjin:2000,
                        reallixi:200,
                        realproy:200,
                        stime:'2018-2-23',                  
                        btime:'2018-2-23',
                        oktime:'2018-2-25',
                        state:'待确认'
                    },
                    {
                        channel: '亿海蓝',
                        cname: '亿海蓝公rere司',
                        pid: '4565463323453No.1',
                        backtype:'批量还款',
                        realmoney:50,
                        realbenjin:2000,
                        reallixi:200,
                        realproy:200,
                        stime:'2018-2-23',                  
                        btime:'2018-2-23',
                        oktime:'2018-2-25',
                        state:'待确认'
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
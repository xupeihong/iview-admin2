<style lang="less">
     @import '../../../styles/common.less';
    @import './table.less';
</style>
<template>
	<div>
		 <Row :gutter="10">      
            <Col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="mouse"></Icon>
                        点击搜索进行搜索
                     </p>
                    <Row>
                        <Input v-model="searchConName3" placeholder="输入姓名或账号搜索..." style="width: 200px" />
                        <span @click="handleSearch3" style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
                        <Button @click="modal8 = true">新增管理员</Button>
                        <!-- 模态框新增信息 -->
                   <Modal title="编辑账户" v-model="modal8" :mask-closable="false">
                     <Form :model="formItem" :label-width="80">
                         <FormItem label="类型：">
                            <Select v-model="formItem.select" >
                              <Option value="beijing">选择角色</Option>
                              <Option value="shanghai">管理员</Option>
                              <Option value="shenzhen">业务员</Option>
                            </Select>
                         </FormItem>
                         <FormItem label="姓名：">
                           <Input v-model="formItem.input" placeholder="请输入姓名"></Input>
                         </FormItem>
                         <FormItem label="账户：">
                           <Input v-model="formItem.input2" placeholder="请输入账号"></Input>
                         </FormItem>
                         <FormItem label="密码：">
                           <Input v-model="formItem.input3" placeholder="请输入密码"></Input>
                         </FormItem>
                      </Form>
                        </Modal>
                        <!-- <Button @click="handleCancel3" type="ghost" >新增管理员</Button> -->
                    </Row>
                    <Row class="margin-top-10 searchable-table-con1" >
                        <Table :columns="columns7" :data="data6" border size="small"></Table>
                    </Row>
                </Card>
            </Col>
        </Row>
	</div>
</template>
<script>
// import * as table from '../data/search';
	export default{
		name:'manager',
		data(){
			return{
			searchConName1: '',
            searchConName2: '',
            searchConTel2: '',
            searchConName3: '',
            modal8:false,
            formItem: {
                    input: '',
                    select: '',
                    input2:'',
                    input3:''
                    
                },
            // columns1: table.columns1,
            data1: [],
            initTable1: [],
            data2: [],
            initTable2: [],
            data3: [],
            initTable3: [],
            // 填充表格内容
            columns7: [
                    {
                        title: '类别',
                        key: 'type',
                        align:'center'
                    },
                    {
                        title: '真实姓名',
                        key: 'name',
                        align:'center'
                    },
                    {
                        title: '账号',
                        key: 'account',
                        align:'center'
                    },
                    {
                    	title:'创建时间',
                    	key:'creatTime',
                    	align:'center'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        // width: 150,
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
                                }, '修改'),
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
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        type: 'John Brown',
                        name: 18,
                        account: 'New York No. 1 Lake Park',
                        creatTime:'2018-2-5'
                    },
                    {
                        type: 'John Brown',
                        name: 18,
                        account: 'New York No. 1 Lake Park',
                        creatTime:'2018-2-5'
                    },
                    {
                        type: 'John Brown',
                        name: 18,
                        account: 'New York No. 1 Lake Park',
                        creatTime:'2018-2-5'
                    },
                    {
                        type: 'John Brown',
                        name: 18,
                        account: 'New York No. 1 Lake Park',
                        creatTime:'2018-2-5'
                    }
                ]
            }
    	},
		methods:{
			init () {
            // this.data1 = this.initTable1 = table.searchTable1;
            // this.data2 = this.initTable2 = table.searchTable2;
            // this.data3 = this.initTable3 = table.searchTable3;
            },
             show (index) {
                this.$Modal.confirm({
                	title:'编辑账号',
                   render:(h)=>{
                   	 return h('div', [
                   	 	    h('input',{
                                
                   	 	    }),
                            h('Button', {
                                    props: {
                                        type: 'default',
                                        size: 'small'
                                    },
                                    style: {
                                        // marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            // this.show(params.index)
                                           
                                        }
                                    }
                                }, '详情')
                   	 	]);
                   
                     
                   }
              
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
        
        search (data, argumentObj) {
            let res = data;
            let dataClone = data;
            for (let argu in argumentObj) {
                if (argumentObj[argu].length > 0) {
                    res = dataClone.filter(d => {
                        return d[argu].indexOf(argumentObj[argu]) > -1;
                    });
                    dataClone = res;
                }
            }
            return res;
        },
        handleSearch1 () {
            this.data1 = this.initTable1;
            this.data1 = this.search(this.data1, {name: this.searchConName1});
        },
        handleSearch2 () {
            this.data2 = this.initTable2;
            this.data2 = this.search(this.data2, {name: this.searchConName2, tel: this.searchConTel2});
        },
        handleSearch3 () {
            this.data3 = this.initTable3;
            this.data3 = this.search(this.data3, {name: this.searchConName3});
        },
        handleCancel3 () {
            this.data3 = this.initTable3;
         }
		},
		mounted(){
			this.init();
		}
	}
</script>
<style scoped></style>
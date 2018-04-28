<template>
	<div>
		<Tabs value="name1" :animated="false" type="card">
        <TabPane :label="label" name="name1">
        	<borrow/>
        </TabPane>
        <TabPane :label="label2" name="name2">标签二的内容</TabPane>
        <TabPane :label="label3" name="name3">标签三的内容</TabPane>
        <TabPane :label="label4" name="name4">标签三的内容</TabPane>
    </Tabs>
	</div>
</template>
<script>
import borrow from './borrow.vue'
	export default{
		name:'task',
		components:{
			borrow
		},
		data(){ 
			return{
               label: (h) => {
                    return h('div', [
                        h('span', '借款申请审批'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                },
                label2: (h) => {
                    return h('div', [
                        h('span', '放款'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                },
                label3: (h) => {
                    return h('div', [
                        h('span', '逾期管理'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                },
                label4: (h) => {
                    return h('div', [
                        h('span', '还款确认'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                }
			}
		}
	}
</script>
<style scoped></style>
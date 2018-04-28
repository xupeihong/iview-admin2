<template>
    <Breadcrumb>
        <BreadcrumbItem 
            v-for="item in currentPath" 
            :href="item.path" 
            :key="item.name">
        {{ itemTitle(item) }}</BreadcrumbItem>
         <span style="color:red">测试面包屑</span>
    </Breadcrumb>
   
</template>

<script>
export default {
    name: 'breadcrumbNav',
    props: {
        currentPath: Array
    },
    methods: {
        itemTitle (item) {
            if (typeof item.title === 'object') {
                return this.$t(item.title.i18n);
                alert(this.$t(item.title.i18n));
            } else {
                return item.title;
            }
        }
    }
};
</script>


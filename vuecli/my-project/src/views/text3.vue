<template>
    <div>
        <button @click="add(99)">加99</button>
        <button @click="$store.commit('reduce',23)">减23</button>
        <button @click="$store.commit('reduce',23)">减23</button>
        <h1>{{count}}</h1>
        <h1>{{count2}}</h1>
        <!-- <button @click="reduce(5)">减五</button>
        <button @click="add(10)">加十</button>
        <h1>{{$store.state.count}}</h1> -->
    </div>
</template>
<script>
import {mapState, mapMutations,mapGetters} from "vuex"
export default {
    methods: {
        ...mapMutations(['add','reduce']),
//         addHandle(){
//             this.$store.commit('add')
//         },
//         reduceHandle(){
//              this.$store.commit('reduce')
// }
    // ...mapMutations(['add','reduce'])
    },
    computed: {
        ...mapState(['count']),
        ...mapGetters(['count2'])
    },
    // 1.computed: {
    //     // count(){
    //     //     return this.$store.stata.count
    //     // }
    // },
    // 2.computed: mapState({
    //     count:state => state.count
    // })
    // 3.computed: {
    //     ...mapState({count:state=>state.count})
    // },
    // computed: {
    //     ...mapState(['count','coutn'])
    // },
}
</script>
<style scope="fade4">
    
</style>
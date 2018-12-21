
<template>
    <div>
        <el-dialog
            title="温馨提示"
            :visible.sync="visible"
            @close="$emit('update:show', false)"
            :show="show">
            <span>购物车里空空如也,请前往添加~</span>
        </el-dialog>
    </div>
</template>
 
<script>
    export default {
        data () {
            return {
                visible: this.show
            };
        },
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            show () {
                this.visible = this.show;
            }
        }
    };
</script>

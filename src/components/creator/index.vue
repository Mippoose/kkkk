<template>
    <h1>{{text}}</h1>
    <button @click="Clicked()">CLICK ME</button>
</template>

<script>
export default {
    data() {
        return{
            text: "Hello world!",
            i: 1,
        }       
    },
    methods:{
        Clicked(){
            this.i++;
            this.text = this.i;
        },
    },
}
</script>
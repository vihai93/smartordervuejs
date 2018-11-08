var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        changeValue:function(event){
            this.message = event.target.value;
        }
    }
});
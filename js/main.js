Vue.component('alert', {
    template: '#alert-template',
    data: function() {
        return {
            show: true
        };
    },
    props: ['type'],
    computed: {
        alertClasses: function() {
            var type = this.type;
            return {
                'Alert': true,
                'success-alert': type == 'success',
                'error-alert': type == 'error'
            }
        }
    }
});


new Vue({
    el: 'body'
})
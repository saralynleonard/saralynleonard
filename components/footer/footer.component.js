angular.module('personalSite')
    .component('appFooter', {
        templateUrl: 'components/footer/footer.template.html', 
        controller: function FooterController() {
            this.getCurrentYear = function() {
                return new Date().getFullYear()
            }
        }
    })
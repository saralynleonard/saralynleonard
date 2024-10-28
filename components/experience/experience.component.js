angular.module('experience')
    .component('experience', {
        templateUrl: 'components/experience/experience.template.html', 
        controller: function ExperienceController($http) {

            let self = this
            self.experience = []
            self.education = []
            let projects = []

            self.currentTab = 'experience'


            self.loadData = function() {
                $http.get('data/experience.json').then(function(res) {
                    self.experience = res.data
                })

                $http.get('/data/education.json').then(function(res) {
                    self.education = res.data
                })
            } 

            self.select = function(tab) {
                self.currentTab = tab
            }
            self.loadData()
        }
    }) 
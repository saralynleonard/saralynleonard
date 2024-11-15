angular.module('experience')
    .component('experience', {
        templateUrl: 'components/experience/experience.template.html', 
        controller: function ExperienceController($http) {

            let self = this
            self.experience = []
            self.education = []
            self.projects = []

            self.currentTab = 'about'


            self.loadData = function() {
                $http.get('data/experience.json').then(function(res) {
                    self.experience = res.data
                })

                $http.get('data/education.json').then(function(res) {
                    self.education = res.data
                })

                $http.get('data/projects.json').then(function(res) {
                    self.projects = res.data
                })
            } 

            self.select = function(tab) {
                self.currentTab = tab
            }
            self.loadData()
        }
    }) 
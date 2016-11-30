(function() {
  'use strict';
  angular.module('toDosApp')
    .controller('ToDosController', ToDosController)

  function ToDosController($log){
  var vm = this
  vm.add = addTodo
  vm.newTodo = {name: "", task: "", image: "", complete: false }
  vm.all = [
      {name: "Groceries", task: "buy bananas", image: "http://www.allaccessdisney.com/assets/groceries1.jpg", complete: true},
      {name: "feed cat", task: "put food in bowl", image: "http://www.pfma.org.uk/_assets/images/general/image/Cat%20Drinking%20from%20Bowl%20wb.jpg", complete: true},
      {name: "Clean Bathroom", task: "scrub shower", image:"http://s3-production.bobvila.com/articles/wp-content/uploads/2013/07/shower-head.jpg" , complete:true},
    ]
    function addTodo(){
    vm.all.push(vm.newTodo)
    vm.newTodo = {name: "", task: "", image: "", complete: false }
    }
  }



}());

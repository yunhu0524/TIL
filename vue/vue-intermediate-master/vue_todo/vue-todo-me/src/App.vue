<template>
  <div id="app">
    <todoHeader></todoHeader>
    <todoInput v-on:addTodoItem="addOneItem"></todoInput>
    <todoList 
      :propsdata="todoItems" 
      @removeItem="removeOneItem" 
      @toggleItems="toggleOneItem">
    </todoList>
    <todoFooter @clearAll='clearAllItems'></todoFooter>
  </div>

</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data(){
    return{
      todoItems: []
    }
  },
  methods:{
    addOneItem(item){
      const obj = {completed: false, item: item};
        // console.log(this.newTodoItem);
        // 저장하는 로직
        // localStorage.setItem(this.newTodoItem, this.newTodoItem);
        // obj 값이 string(문자열)로 들어간다
      localStorage.setItem(item, JSON.stringify(obj));
      this.todoItems.push(obj)
    },
    removeOneItem(item, index){
      localStorage.removeItem(item.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(item, index){
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 로컬 스토리지에 정보를 갱신
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, JSON.stringify(item));
    },
    clearAllItems(){
      localStorage.clear();
      this.todoItems='';
    }
  },
    created(){
      if(localStorage.length>0){
        for(let i=0; i<localStorage.length; i++){
          if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
            this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          }
        }
      }
    },
  components:{
    'TodoHeader':TodoHeader,
    'TodoInput':TodoInput,
    'TodoList':TodoList,
    'TodoFooter':TodoFooter
  }
}
</script>

<style>
 
  body{
    text-align: center;
    background-color: #f6f6f6;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shodow{
    box-shadow: 5px 10px 10px rgba(0,0,0, 0.03);
  }
</style>
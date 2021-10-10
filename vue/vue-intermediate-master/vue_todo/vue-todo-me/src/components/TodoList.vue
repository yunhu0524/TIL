<template>
  <div>
    <ul>
      <li v-for="(item, index) in todoItems" :key="index" class="shadow">
        <i class="checkBtn fas fa-check" 
        :class="{checkBtnCompleted: item.completed}" 
        @click="toggleComplete(item, index)">

        </i>
        <span :class="{textCompleted:item.completed}">{{item.item}}</span>
        <span class="removeBtn" @click="removeTodo(item, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      todoItems:[]
    }
  },
  created(){
    if(localStorage.length>0){
      for(var i=0; i<localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  methods:{
    removeTodo(item, index){
      console.log(item, index);
      localStorage.removeItem(item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(item){
      item.completed = !item.completed;
      // 로컬 스토리지에 정보를 갱신
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item, JSON.stringify(item));
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>


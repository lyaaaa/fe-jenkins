<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p v-for="num in list" :key="num">{{ num }}</p>
    <div class="add-user">
      <div class="add-item">
        <span class="label">name: </span>
        <input type="text" v-model="name" placeholder="输入名称" />
      </div>
      <div class="add-item">
        <span class="label">address: </span>
        <input type="text" v-model="address" placeholder="输入地址" />
      </div>
      <div class="add-btn" @click="handleAddUser">确认添加</div>
    </div>

    <div class="user-list">
      <div class="update-btn" @click="updateUserList">点击更新</div>

      <div class="user-list-box">
        <div class="item" v-for="(item, index) in userList" :key="index">
          name: {{ item.name }}, address: {{ item.address }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      list: [],
      userList: [],
      name: '',
      address: '',
    }
  },
  methods: {
    handleAddUser() {
      axios
        .post('/api/add_user', {
          name: this.name,
          address: this.address,
        })
        .then((res) => {
          if (res.data === 'success') {
            this.name = ''
            this.address = ''
          }
        })
    },

    updateUserList() {
      axios.get('/api/get_user').then((res) => {
        this.userList = res.data
      })
    },
  },
  created() {
    axios.get('/api/list').then((res) => {
      if (res.data) {
        this.list = res.data
      }
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.add-user {
  margin: 100px;
}

.add-item {
  margin-bottom: 12px;
}

.label {
  display: inline-block;
  width: 80px;
}

.add-btn,
.update-btn {
  width: 200px;
  border: 1px solid #999;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
}

.add-btn:hover,
.update-btn:hover {
  text-decoration: underline;
}

.user-list {
  padding-bottom: 60px;
}

.user-list-box .item {
  line-height: 26px;
  color: #000;
  font-weight: 500;
}
</style>

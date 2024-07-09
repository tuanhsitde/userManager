<template>
  <tbody>
    <user-item v-for="(user,index) in userListBySearchName"
       :key="index"
       :user="user"
    ></user-item>

  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import {mapActions, mapState} from "vuex";
import {mapGetters} from "vuex";
export default {
  components: {
    UserItem,
  },
  computed : {
    ...mapState(
      {userList: state => state.user.userList,
      // users : 'userList'
      }),
    ...mapGetters(
    {
      userListByBoy: 'user/userListByBoy',
      userListBySearchName: 'user/userListBySearchName'
    })
},

  // computed : mapState(['userList'])
  methods : {
    ...mapActions(
        {
          getAllUser : "getAllUserActions",
        }
    )
  },
  created() {
    this.getAllUser();
  }
};
</script>

<style></style>

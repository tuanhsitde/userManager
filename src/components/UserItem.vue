<template>
  <tr>
    <td>
      <img :src="user.avatar" class="mr-2" alt="image" />
      {{ user.name }}
    </td>
    <td>{{ user.age }}</td>
    <td>
      <label class="badge badge-gradient-primary mr-2"
        v-for="(lang,index) in user.programmingLanguage"
       :key="index"
      >{{ lang }}</label>

    </td>
    <td>{{ user.gender }}</td>
    <td>
      <button
          type="button"
          class="mr-2 btn btn-gradient-danger btn-icon-text"
          @click="handleRemoveUser(user.id)"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button
          type="button"
          class="btn btn-gradient-info btn-icon-text"
          @click="handleOpenModal"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
  </tr>
  <teleport to="#app">
    <app-modal
        :isOpen="isModalOpen"
        :handelCloseModal="handleCloseModal"
    >
      <form-user
          :dataUser="user"
      ></form-user>
    </app-modal>
  </teleport>
</template>

<script>
import {mapActions} from "vuex";
import FormUser from "@/components/FormUser.vue";

export default {
  components: {FormUser},
  data() {
    return {
      isModalOpen: false,
    }
  },
  props: {
    user : {
      type: Object,
    }
  },
  methods : {
    ...mapActions ({
      handleRemoveUser  : "user/handleRemoveAction"
    }),
    handleCloseModal (){
      this.isModalOpen = false;
    },
    handleOpenModal () {
      this.isModalOpen = true;
    }
  }
};
</script>

<style></style>

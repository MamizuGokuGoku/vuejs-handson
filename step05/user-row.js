const userRowComponent = Vue.defineComponent({
  data: function () {
    return { editable: false };
  },
  methods: {
    edit: function () {
      this.editable = true;
      this.$nextTick(() => {
        //Run after DOM change
        this.$refs.editNickname.focus();
      });
    },
  },
  template: `
    <tr>
      <td>
        <span v-if="!editable" @click="edit()">{{ user.nickname}}</span>
        <input v-show="editable" v-model="user.nickname" @blur="editable = false" ref="editNickname">
      </td>
      <td>{{ user.email }}</td>
    </tr>
  `,
  props: ["user"],
});

const app = Vue.createApp({
  components: {
    "user-row": userRowComponent,
  },
  data: () => ({
    users: [],
    nickname: "",
    email: "",
    nicknameFilter: "",
  }),
  methods: {
    saveUser: function () {
      // Store user information in memory
      let user = {
        nickname: this.nickname,
        email: this.email,
        editable: false,
      };
      this.users.push(user);

      // Display registration details in a dialog
      alert(`Registered nickname:${this.nickname} E-Mail:${this.email}`);

      // // Clear input
      // this.nickname = "";
      // this.email = "";
    },
    edit: function (user, index) {
      user.editable = true;
      this.$nextTick(() => {
        // Run after DOM change
        this.$refs.editNickname.focus();
      });
    },
    displayUsers: function () {
      let message = `There are ${this.users.length} users registered.`;
      for (const user of this.users) {
        message += `\n ${user.nickname}`;
      }
      alert(message);
    },
  },
  computed: {
    filterdUsers: function () {
      console.log("called");
      return this.users.filter((user) =>
        user.nickname.includes(this.nicknameFilter)
      );
    },
  },
});

app.mount("#app");

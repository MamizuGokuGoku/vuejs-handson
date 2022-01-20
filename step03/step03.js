const app = Vue.createApp({
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
      };
      this.users.push(user);

      // Display registration details in a dialog
      alert(`Registered nickname:${this.nickname} E-Mail:${this.email}`);
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

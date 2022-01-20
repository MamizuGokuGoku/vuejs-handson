const app = Vue.createApp({
  data: () => ({
    users: [],
    nickname: "",
    email: "",
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
    }
  }
});

app.mount("#app");

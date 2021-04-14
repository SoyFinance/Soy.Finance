import {mapGetters, mapActions} from "vuex";

export default {
  computed: {
    ...mapGetters({
      address: "auth/address",
      player: "auth/player",
    }),
  },

  data() {
    return {
      subscribtion: null,
    };
  },

  methods: {
    ...mapActions({
      login: "auth/login",
      loadPlayer: "auth/loadPlayer",
      loadHistory: "auth/loadHistory",
    }),

    async loadData() {
      if (this.address) {
        await this.loadPlayer(this.address);
        await this.loadHistory(this.address);
      }
    },

    subscribeToBlock() {
      if (this.subscribtion) {
        this.subscribtion.unsubscribe();
      }
      this.subscribtion = this.$web3()
        .eth.subscribe("newBlockHeaders", () => {
          if (this.address) {
            this.loadPlayer(this.address);
          }
        })
        .on("error", (e) => {
          this.subscribeToBlock();
          console.error(e);
        });
    },
  },

  watch: {
    address(to) {
      if (to) {
        this.loadData();
      }
    },
  },

  async mounted() {
    try {
      const provider = await this.$localForage.getItem("provider");

      const int = setInterval(() => {
        if (this.$ethereum()) {
          if (provider === "injected") {
            this.login().catch(console.error);
          }
          clearInterval(int);
        }
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  },

  destroyed() {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }
  },
};

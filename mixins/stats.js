import {mapGetters, mapActions} from "vuex";

export default {
  computed: {
    ...mapGetters({
      stats: "stats/data",
    }),
  },

  data() {
    return {
      updateInterval: null,
      subscribtion: null,
    };
  },

  methods: {
    ...mapActions({
      loadStats: "stats/load",
      loadLeaderboards: "stats/loadLeaderboards",
    }),

    async loadData() {
      await this.loadStats();
      await this.loadLeaderboards();
    },

    subscribeToBlock() {
      if (this.subscribtion) {
        this.subscribtion.unsubscribe();
      }
      this.subscribtion = this.$web3()
        .eth.subscribe("newBlockHeaders", () => {
          this.loadStats();
          this.loadLeaderboards();
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
      this.loadData();
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

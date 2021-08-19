<template >
  <div>
    <div class="container">
      <div class="">
        <h1 class="text-center font-beautiful top-title">Safety On Yields</h1>
        <h1 class="title font-regular-medium">
          <span class="text-success font-regular-bold">Decentralized Finance </span
          >ecosystem with emphasis on safety.
        </h1>
        <p id="products" class="text-size text-dark text-center font-regular">
          Discover our ecosystem.
        </p>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <a
            href="https://appsoyfinance.netlify.app/#/swap"
            rel="noopener noreferrer"
            target="_blank"
            class="link rounded-gradiants w-100"
          >
            <img src="~/assets/images/swap.svg" class="w-37 w-lg-25 d-flex m-auto" />
            Token Swap
          </a>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <a
            href="https://callisto.network/#ecosystem"
            rel="noopener noreferrer"
            target="_blank"
            class="link rounded-gradiants w-100"
          >
            <img src="~/assets/images/soyicon.svg" class="w-37 d-flex m-auto" />
            Soy Token</a
          >
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <a
            href="https://appsoyfinance.netlify.app/#/farms"
            rel="noopener noreferrer"
            target="_blank"
            class="link rounded-gradiants w-100"
          >
            <img src="~/assets/images/farmicon.svg" class="w-37 d-flex m-auto" />
            Yield Farming</a
          >
        </div>

        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <a
            href="https://bullsinvesting.club/"
            rel="noopener noreferrer"
            target="_blank"
            class="link rounded-gradiants w-100"
          >
            <img src="~/assets/images/stablecoin.svg" class="w-37 d-flex m-auto" />
            Stablecoin</a
          >
        </div>
      </div>
      <div class="text-block text-center">
        <button
          v-scroll-to="{
            el: '#cardBlock',
            container: '#__nuxt',
          }"
          class="btn text-size text-dark font-regular"
        >
          Learn More
          <img
            src="~/assets/images/icon/palygon.svg"
            class="d-flex m-auto"
            style="width: 20px"
          />
        </button>
      </div>
    </div>
    <CardBlock id="cardBlock" class="bg-dark" />
    <div class="icon-block">
      <IconBlock />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {
  &-size {
    font-size: 26px;
    line-height: 36px;
    letter-spacing: 0.02em;
    margin-top: 45px;
    margin-bottom: 25px;
    @include media-breakpoint-up(md) {
      margin-bottom: 35px;
      margin-top: 85px;
    }
  }

  &-block {
    margin-bottom: 15px;
    @include media-breakpoint-up(md) {
      margin-bottom: 120px;
    }
    :focus {
      box-shadow: none;
    }
  }
}
.link {
  display: inline-block;
  color: $dark;
  text-align: center;
  text-decoration: none;
}
.title {
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  letter-spacing: 0.02em;
  padding: 26px 25px;

  @include media-breakpoint-up(lg) {
    padding: 26px 220px;
    font-size: 45px;
  }
}
.top-title {
  color: #000;
  font-size: 45px;
  line-height: 80px;
  @include media-breakpoint-up(md) {
    line-height: 191px;
    font-size: 96px;
  }
}
.w {
  &-37 {
    width: 20% !important;
    @include media-breakpoint-up(md) {
      width: 37% !important;
    }
  }
}
</style>

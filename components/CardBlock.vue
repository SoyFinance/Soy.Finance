<template>
  <div>
    <div class="container" id="about">
      <div class="pt-1">
        <h2 class="title font-beautiful">
          Why <span class="text-success">Soy.</span>Finance?
        </h2>
      </div>
      <div class="row align-items-center">
        <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div class="card mx-auto top-number-one">
            <div class="card-header bg-warning-gradient"></div>
            <div class="card-body">
              <div class="card-block m-auto">
                <img src="~/assets/images/defi.svg" class="card-block-img" />
              </div>
              <h5 class="card-title text-success font-regular-bold">DeFi Made Safe</h5>
              <p class="card-text">
                A DeFi ecosystem built on the highest security standards.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div class="card mx-auto top-number-two">
            <div class="card-header bg-warning-gradient"></div>
            <div class="card-body">
              <div class="card-block m-auto">
                <img src="~/assets/images/multiple-tools.svg" class="card-block-img" />
              </div>
              <h5 class="card-title text-success font-regular-bold">A Full Solution</h5>
              <p class="card-text">
                Featuring a decentralized exchange, yield farming and our own token.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-4 mb-lg-0">
          <div class="card mx-auto top-number-three">
            <div class="card-header bg-warning-gradient"></div>
            <div class="card-body">
              <div class="card-block m-auto">
                <img src="~/assets/images/home-logo.svg" class="card-block-img" />
              </div>
              <h5 class="card-title text-success font-regular-bold">
                Powered by Callisto
              </h5>
              <p class="card-text">
                The self-sustaining and self-funded ecosystem since 2018.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-section">
        <!-- <button
          class="btn card-button bg-warning-gradient font-regular-medium text-dark border-0 mr-0 mr-md-4 mb-4 mb-md-0"
        >
          Learn more
        </button> -->
        <a
          class="btn card-button text-white font-regular-medium"
          href="https://callisto.network/"
          target="_blank"
        >
          About Callisto
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  line-height: 71px;
  text-align: center;
  letter-spacing: 0.02em;
  margin: 59px auto 70px;
  color: $light;
  background: rgba(158, 156, 114, 0.1);
  border-radius: 220px;
  width: 100%;

  @include media-breakpoint-up(sm) {
    font-size: 36px;
    width: 480px;
  }
}

.card {
  border-radius: 15px;
  max-width: 288px;
  background: linear-gradient(0deg, $light, $light);

  &-header {
    border-radius: 15px 15px 0 0;
    border-bottom: none;
  }

  &-body {
    padding-top: 178px;
    padding-bottom: 36px;
  }

  &-block {
    position: absolute;
    top: 25px;
    padding: 23px;
    left: calc(36% - 54px);

    &-img {
      width: 137px;
      height: 137px;
    }
  }

  &-title {
    font-size: 26px;
    line-height: 42px;
    text-align: center;
    letter-spacing: -0.02em;
  }

  &-text {
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.01em;
    opacity: 0.8;
    margin: 12px;
  }

  &-button {
    border: 2px solid $success;
    border-radius: 15px;
    font-size: 23px;
    width: 192px;
    height: 48px;
    &:hover {
      background: linear-gradient(111.1deg, #bee33a 1.92%, #eaee23 96.41%);
      color: $dark !important;
      border: none;
    }

    &:focus {
      box-shadow: none;
    }
    &:active {
      background: linear-gradient(
          114.97deg,
          rgba(255, 255, 255, 0) -23.29%,
          rgba(0, 0, 0, 0.3) 98.84%
        ),
        #323428;
      box-shadow: 0 9px 0 #181915;
      color: $success !important;
      border: none;
      &::before {
        background: linear-gradient(
            114.97deg,
            rgba(255, 255, 255, 0) -23.29%,
            rgba(0, 0, 0, 0.3) 98.84%
          ),
          #323428;
      }
    }
  }
}

.btn-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 65px;
  margin-top: 50px;
  align-items: center;

  @include media-breakpoint-up(md) {
    margin-top: 96px;
    flex-direction: row;
  }

  &:focus {
    box-shadow: none;
  }
}
</style>

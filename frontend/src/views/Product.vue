<template>
    <div class="product_block">
        <h1 class="title">Giant Glory</h1>
                <div class="product_container">
                    <div>
                        <a href="../assets/foto/Glory_27_5_0_Brushed_Black.jpg" target="_blank">
                            <img class="product_img"
                                src="../assets/foto/Glory_27_5_0_Brushed_Black.jpg"
                                alt="Giant Glory 27.5"
                            >
                        </a>
                    </div>
                        <div class="product_short">
                            <p class="product_short_description">
                                DH terrain comes at you fast.
                                You need the confidence and control to make split-second
                                decisions and commit to your lines.
                                With 203mm of fully active Maestro Suspension
                                featuring a trunnion-mount shock,
                                the Glory 27.5 has been tested and proven by some
                                of the top DH racers and gravity riders in the world.
                                Its lightweight, super-strong frame is engineered with
                                geometry that’s optimized for its 27.5 wheels, plus a
                                super stiff OverDrive steerer tube for unwavering control
                                and steering precision. The 63-degree headtube angle and
                                longer wheelbase was developed and refined with riders
                                from the Giant Factory Off-Road Team to excel on the
                                steepest, most extreme DH tracks in the world.
                            </p>
                            <button class="product_button_buy">Add to cart</button>
                        </div>
                </div>
    </div>
</template>

<script>
export default {
  name: 'Product',
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>

<template>
    <div class="container h-screen w-full flex justify-center align-center">
        <div
            class="flex flex-col justify-center align-center w-full"
        >
            <div
                class="current-height pb-10 border-bottom-2 border-white w-full align-start justify-start flex flex-col">
                <h1 class="text-center text-white text-10xl font-thin mb-5">
                    {{ height}}
                </h1>

                <h3 class="text-center font-thin text-2xl uppercase text-white">Current height</h3>
            </div>

            <div class="buttons flex flex-col w-75 mx-auto my-10">
                <div class="plus-minus-buttons my-20">
                    <button
                        class="bg-[#2ecc71] btn-lg w-full mb-5 py-2"
                        @click="increment"
                    >
                        <span class="text-white text-2xl font-thin">Up</span>
                    </button>
                    <button
                        class="bg-[#e74c3c] btn-lg w-full mb-5 py-2"
                        @click="decrement"
                    >
                        <span class="text-white text-2xl font-thin">Down</span>
                    </button>
                </div>

                <div class="confirmation" v-if="!isHeightEqual">
                    <button
                        class="bg-[#27ae60] btn-lg w-full mb-5 py-2"
                        @click="submit"
                    >
                        <span class="text-white font-thin text-2xl">Confirm</span>
                    </button>
                    <button
                        class="bg-[#f1c40f] btn-lg w-full py-2"
                        @click="resetHeight"
                    >
                        <span class="text-white font-thin text-2xl">Reset</span>
                    </button>
                </div>

                <div class="default-setup" v-else>
                    <button
                        class="bg-[#34495e] btn-lg w-full mb-5 py-2"
                        @click="setHeight(110)"
                    >
                        <span class="text-white font-thin text-2xl">Stand up</span>
                    </button>
                    <button
                        class="bg-[#95a5a6] btn-lg w-full py-2"
                        @click="setHeight(72)"
                    >
                        <span class="text-white font-thin text-2xl">Sit down</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, watch} from 'vue';

export default defineComponent({
    name: 'App',
    setup() {
        const currentHeight = ref(0);
        const height = ref(0);
        const isHeightEqual= ref(true);

        const config = ref({
            minHeight: 72,
            maxHeight: 115
        });

        const increment = () => {
            if (height.value < config.value.maxHeight) {
                height.value++;
            }
        };

        const decrement = () => {
            if (height.value >= config.value.minHeight) {
                height.value--;
            }
        };

        const getHeight = async () => {
            await fetch(`${import.meta.env.VITE_APP_API}/general/height`)
                .then(res => res.json())
                .then(res => {
                    height.value = parseInt(res.height);
                    currentHeight.value = parseInt(res.height);
                }).catch(err => {
                    console.log(err)
                })
        };

        const setHeight = async (value: number): Promise<void> => {
            height.value = value;

            await submit()
        }

        const resetHeight = () => {
            height.value = currentHeight.value;
        };

        const submit = async () => {
            await fetch(`${import.meta.env.VITE_APP_API}/general/set-height`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    height: height.value
                })
            }).then(res => res.json())
                .then(res => {
                    currentHeight.value = height.value;
                    isHeightEqual.value = true;
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
        };

        onMounted(async () => {
            await getHeight();
        });

        watch(height, async () => {
            isHeightEqual.value = height.value === currentHeight.value;
        });


        return {
            height,
            submit,
            decrement,
            increment,
            setHeight,
            resetHeight,
            currentHeight,
            isHeightEqual,
        };
    },
});
</script>

<style lang="scss">
#app {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    //background: #34495e;
    background: linear-gradient(to bottom, #2980b9 0%, #2c3e50 100%);
}
</style>

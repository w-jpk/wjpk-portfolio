<style scoped>
.botao {
    width: 125px;
    height: 50px;
    border-radius: 20px;
    border: none;
    box-shadow: 1px 1px rgba(107, 221, 215, 0.37);
    padding: 5px 10px;
    background-color: black;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 505;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    filter: drop-shadow(0 0 5px black);
    transition: 0.5s linear;
}

.botao .mysvg {
    display: none;
}

.botao:hover {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: 0.5s linear;
}

.botao:hover .texto {
    display: none;
}

.botao:hover .mysvg {
    display: inline;
}

.botao:hover::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 3px;
    background-color: black;
    margin-left: -20px;
    animation: animate 0.9s linear infinite;
}

.botao:hover::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3.5px solid transparent;
    border-top: 3.5px solid #fff;
    border-right: 3.5px solid #fff;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
}

@keyframes animateC {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(20px);
    }
}
</style>

<template>
    <button class="botao" @click="downloadPdf">
        <svg class="mysvg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px"
            width="24px">
            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
                <g id="Interface / Download">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1"
                        d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path>
                </g>
            </g>
        </svg>
        <span class="texto">Резюме</span>
    </button>
</template>

<script>
export default {
    props: {
        downloadPdf: {
            type: Function,
            required: false,
        },
    },
};
</script>
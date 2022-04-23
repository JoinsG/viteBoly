<template>
    <div class="container-test">
        <canvas id="canvas-rule" width="800" height="30"></canvas>
        <div id="canvas-wrap">
        </div>
        <div class="line-y" id="line-y">
            <span class="line-y-number">{{ lineYNumber }}</span>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
    name: '',
    setup: () => {
        let ctx, canvas, ruleContainer;
        let canvasWrap;
        let lineY;
        let lineYNumber = ref(0)
        /* 初始化 Canvas */
        const initCanvas = () => {
            ruleContainer = document.getElementById('rule-container');
            canvas = document.getElementById('canvas-rule') as HTMLCanvasElement;
            // 这里不要用css设置canvas的宽高，不然会出现绘制模糊的情况
            // canvas.width = ruleContainer.clientWidth;
            // canvas.height = ruleContainer.clientHeight;
            ctx = canvas.getContext('2d');

            // // 计算屏幕能放下的尺子格数
            // const screenCount = parseInt((canvas.clientWidth / itemWidth).toFixed(0))
            // // 计算尺子读数需要的偏移刻度数      
            // numberOffset = parseInt((screenCount / 2).toFixed(0));
            // leftMin = min - numberOffset;
            // leftMax = max - numberOffset;

            // // 保存一下宽高
            // canvasWidth = canvas.clientWidth;
            // canvasHeight = canvas.clientHeight;

            // 设置字体
            ctx.font = "14px Arial";

            // 初始化完成后渲染一下
            // 这个方法是将canavs的绘制时机交给系统来控制
            // 也可以换成使用 setInterval 实现，要达到一秒60帧的流畅体验，绘制间隔设置成16ms就可以了
            window.requestAnimationFrame(draw);
        }

        let draw = function () {
            ctx.lineWidth = 1
            ctx.lineCap = "round"
            let lineHeight = 5
            let positionX = 0
            for (let i = 0; i <= 10; i++) {
                // ctx.rotate(2 * Math.PI / 60)
                if (i % 10 === 0 && i > 0) {
                    ctx.lineWidth = 2.5
                    lineHeight = 15
                } else if (i % 5 === 0) {
                    ctx.lineWidth = 2
                    lineHeight = 10
                } else {
                    ctx.lineWidth = 1
                    lineHeight = 5
                }

                ctx.beginPath()
                ctx.moveTo(positionX, 0)
                ctx.lineTo(positionX, lineHeight)
                ctx.strokeStyle = 'red'
                ctx.stroke()
                ctx.closePath()
                positionX += 10
            }
        }

        onMounted(() => {
            initCanvas()
            draw()
            canvas.addEventListener('mousemove', function (e) {
                console.log(e.offsetX, e.offsetY);
                lineY.style.transform = `translateX(${e.offsetX}px)`
                // lineY.title = e.offsetX
                lineYNumber.value = e.offsetX
                lineY.style.height = 'auto'
            })
            lineY = document.getElementById('line-y')
            canvasWrap = document.getElementById('canvas-wrap')
            canvasWrap.addEventListener('mousemove', function (e) {
                e.stopPropagation()
                e.preventDefault();
                lineY.style.height = e.offsetY + 30 + 'px'
            })
            canvasWrap.addEventListener('mouseout', function (e) {
                e.stopPropagation()
                e.preventDefault();
                console.log('mouseout');

            })
        })

        return {
            lineYNumber
        }
    },
    components: {

    }
})
</script>

<style scope>
#canvas-wrap {
    height: 600px;
    width: 600px;
    position: relative;
}

.line-y {
    position: absolute;
    top: 0;
    bottom: 0;
    border-left: 1px dashed black;
    right: left;
    transform: translateY;
}

.line-y-number {
    position: absolute;
    margin-left: 100%;
    transform: translateX(10px);
    z-index: 9;
}

.container-test {
    position: relative;
}

#canvas-rule {
    background-color: #666
}
</style>
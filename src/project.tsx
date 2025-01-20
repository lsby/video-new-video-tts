import { Img, makeScene2D, Rect, Txt } from '@revideo/2d'
import { createRef, makeProject, waitFor } from '@revideo/core'
import { 清空 } from './components/clear'
import { 列表组件 } from './components/list'
import { 行列表组件 } from './components/raw-list'
import { 主标题组件 } from './components/title'
import { 小节标题组件 } from './components/title-section'
import { tts } from './components/tts'

let 我的视频 = makeScene2D('我的视频', function* (view) {
  view.add(<Rect width={'100%'} height={'100%'} fill={'white'} />)

  let 字幕区域 = createRef<Rect>()
  let 展示区域 = createRef<Rect>()
  view.add(<Rect ref={字幕区域} y={450} />)
  view.add(<Rect ref={展示区域} />)

  yield* 清空(展示区域())
  yield* 主标题组件(展示区域(), '一种制作视频的方法', '使用 revideo + cosy voice 编程化的生成视频')
  yield* waitFor(1)

  yield* 清空(展示区域())
  let 动机 = yield* 小节标题组件(展示区域(), '动机')
  yield* tts(字幕区域(), '熟悉我的朋友大概会发现, 我上一个视频换了一个风格.')
  yield* tts(字幕区域(), '以前我都是开一个OBS, 就简单的录制桌面, 同时就开始讲了.')
  yield* tts(字幕区域(), '其实我并不是很喜欢那种形式.')
  yield* 动机.上移()

  let 不妙之处 = yield* 列表组件(展示区域(), ['- 无效信息过多', '- 嘴瓢了得重录或剪辑', '- 难以编辑'])
  yield* 不妙之处.下一个('左')
  yield* tts(字幕区域(), '主要问题是, 我觉得无效信息太多了, 应该没人会喜欢看我打开软件的过程吧.')
  yield* tts(字幕区域(), '我其实很欣赏那种PPT风格的视频, 好像很多大佬的视频也都是那样的.')
  yield* tts(字幕区域(), '更重要的是, 我觉得PPT风格更容易把东西讲清楚.')
  yield* 不妙之处.下一个('左')
  yield* tts(字幕区域(), '其次是, 嘴瓢是难免的, 一旦触发就得重录或者剪辑半天, 很麻烦.')
  yield* 不妙之处.下一个('左')
  yield* tts(字幕区域(), '最后, 那种视频也很难编辑.')
  yield* tts(字幕区域(), '有时候我事后发现有什么地方需要补充或者订正的话, 新录一段插在中间, 就会出现"变声期"的感觉.')
  yield* tts(字幕区域(), '而且编辑视频也很麻烦.')

  yield* 清空(展示区域())
  let 编程化的生成视频 = yield* 小节标题组件(展示区域(), '编程化的生成视频')
  yield* tts(字幕区域(), '那么, 有没有什么办法可以通过编程的方法生成视频呢.')
  yield* tts(字幕区域(), '然后语音也用TTS生成, 岂不美哉?')
  yield* tts(字幕区域(), '这样就可以解决之前的问题.')
  yield* 编程化的生成视频.上移()

  let 巧妙之处 = yield* 列表组件(展示区域(), ['- 信息精炼', '- 容易控制', '- 容易编辑', '- 结构化'])
  yield* 巧妙之处.下一个('左')
  yield* tts(字幕区域(), '首先, 可以把视频做的很干净, 重点突出.')
  yield* 巧妙之处.下一个('左')
  yield* tts(字幕区域(), '其次, 通过代码的方式编写视频和我要说的话的话.')
  yield* tts(字幕区域(), '我就不用录的时候临时组织语言了, 甚至可以写一段之后, 回过头来读一下, 再改通顺点.')
  yield* tts(字幕区域(), '当然也不存在嘴瓢的问题了.')
  yield* 巧妙之处.下一个('左')
  yield* tts(字幕区域(), '接下来是容易编辑和修改, 因为都是代码生成的, 有什么问题我只要改一下代码, 重新生成就好了.')
  yield* 巧妙之处.下一个('左')
  yield* tts(字幕区域(), '最后, 我觉得很重要的一点是, 这将视频结构化了.')
  yield* tts(字幕区域(), '以前, 我要给一个视频加特效, 加字幕, 都要在视频软件里点点点, 很麻烦.')
  yield* tts(字幕区域(), '现在, 我可以通过代码来实现这些功能, 不用一遍一遍重复那些点点点的操作.')
  yield* tts(字幕区域(), '虽然一开始可能比较麻烦, 但随着使用过程中不断编写函数封装, 会变得越来越方便.')
  yield* tts(字幕区域(), '更进一步, 我甚至可以写更上层的程序来生成这个"视频的源代码", 实现更多功能, 和其他软件协同等.')
  yield* tts(字幕区域(), '这一切都得益于对视频进行了"结构化", 让我们能以一种更有规律的方法处理视频.')

  yield* 清空(展示区域())
  let 方案 = yield* 小节标题组件(展示区域(), '方案')
  yield* tts(字幕区域(), '于是, 我就开始找有没有什么现有的方案.')
  yield* 方案.上移()

  let 使用的软件 = yield* 行列表组件(展示区域(), [
    <Rect layout direction={'column'} alignItems={'center'}>
      <Img src={'/motioncanvas.svg'} height={200} />
      <Txt>motioncanvas</Txt>
    </Rect>,
    <Rect layout direction={'column'} alignItems={'center'}>
      <Img src={'/revideo.svg'} height={200} />
      <Txt>revideo</Txt>
    </Rect>,
    <Rect layout direction={'column'} alignItems={'center'}>
      <Img src={'/167062371.png'} height={200} />
      <Txt>cosy voice</Txt>
    </Rect>,
  ])
  yield* 使用的软件.下一个()
  yield* tts(字幕区域(), '我开始找到了motioncanvas, 这就是我想要的, 通过代码生成视频的库.', { 种子: 1 })
  yield* 使用的软件.下一个()
  yield* tts(字幕区域(), '然后我找到了基于它封装的revideo, 似乎是在motioncanvas的基础上进行了一些扩展.')
  yield* 使用的软件.下一个()
  yield* tts(字幕区域(), '最后就是TTS的问题, 我选择了cosy voice, 并制作了一键运行脚本.')
  yield* tts(字幕区域(), '然后我写了个revideo可以用的函数, 这样我们就可以在revideo里调用cosy voice生成语音了.')

  yield* 清空(展示区域())
  展示区域().add(<Img src={'/QQ20250120-054823.png'} width={'90%'} y={-80}></Img>)
  yield* tts(字幕区域(), '最终使用效果大概是这样, 当然你也可以封装自己的函数, 变成你喜欢的样子.')

  yield* 清空(展示区域())
  yield* 小节标题组件(展示区域(), 'https://github.com/lsby/playground-revideo')
  yield* tts(字幕区域(), '具体实现就不说了, 我写了一个脚手架, 并附带了一些简单的例子.')
  yield* tts(字幕区域(), '只要把cosy voice运行起来, 然后启动这个脚手架, 看看代码, 聪明的你应该就会用了.')
  yield* tts(字幕区域(), '具体的演示可以看2p.')

  yield* 清空(展示区域())
  yield* 小节标题组件(展示区域(), 'https://github.com/lsby?tab=repositories&q=video-', 60)
  yield* tts(字幕区域(), '我这两期视频的源代码, 以及以后的视频源代码, 都可以在这里找到.')
  yield* tts(字幕区域(), '某种程度上, 这也是一种开源.')

  展示区域().removeChildren()
  展示区域().add(<Txt text={'感谢观看'} fontSize={80} />)
  yield* tts(字幕区域(), '这次视频就是这样, 感谢观看.')
})

export default makeProject({
  scenes: [我的视频],
  settings: {
    shared: { size: { x: 1920, y: 1080 } },
    // https://github.com/redotvideo/revideo/issues/182
    rendering: {
      exporter: { name: '@revideo/core/ffmpeg', options: { format: 'mp4' } },
    },
  },
})

/**
 *
 * 入口函数
 * 将函数名改为你的插件名的驼峰命名，例如插件是：@wenzi7777/ac_theme，则应改为acTheme
 *
 * 你在manifest.js中请求的api会被ACE Runtime生成你的插件墓碑时以你的声明顺序传入，你应该在
 * 函数的参数列表中接收它。
 *
 * 参数列表后两个参数是恒定有的
 * manifest是你的插件描述对象
 * getSelfPreference是一个函数，调用后返回你的插件当前用户设定
 *
 * ！你需要注意，插件被桥接安装时，每次刷新页面设置都会被manifest中的设置覆盖，因此
 * 你不应在控制面板中调整你的设置，需要在manifest中直接调整，插件要打包发布时，才把manifest
 * 中的设置改为初始设置。
 *
 * ACE Runtime所提供的API请参见GitHub
 *
 * —— Nick, 24/03/17
 */
const pluginName = async (openDialog, manifest, getSelfPreference) => {
    await openDialog('My First AcFun Plugin', '你好，AC娘！', true)
}

pluginName(openDialog, manifest, getSelfPreference)
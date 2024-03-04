export const manifest = {
    name: '你的插件名字',
    description: '你的插件描述',
    version: '插件版本，例如0.0.1',
    createdAt: '创建时间，例如2024-02-16',
    updatedAt: '更新时间，例如2024-02-16',
    iconName: '你要使用的图标名字，例如：pluginDefaultIcon',
    icon: '如果没有，请将图标专为Base64，用img标签显示，然后粘贴到这里，随后将iconName设为空值',
    copyrightCaption: '版权声明，例如：(c)2023-2024 Nick Hsu, Licensed under MPL-2.0',
    requestedAPIs: ['你要请求的API', '例如', 'currentThemeClass'],
    matches: ['你的脚本需要匹配哪些页面？', '例如', '*'],
    author: '作者',
    id: '插件id，请按照此格式：@github用户名/插件名字（全部小写，不允许空格，只允许下划线），例如：@wenzi7777/ac_theme',
    website: '插件官方网站，例如：https://acfun-evolved.1205.moe/',
    settings: [
        {
            'label': '插件设置，共有三种，这种是下拉选择',
            'id': '此项插件设置的id',
            'type': 'select',
            'options': [
                {
                    'label': '跟随AcFun Evolved',
                    'value': 'hosted',
                    'selected': true
                },
                {
                    'label': '自动',
                    'value': 'auto',
                    'selected': false
                },
                {
                    'label': '白天',
                    'value': 'light',
                    'selected': false
                },
                {
                    'label': '黑夜',
                    'value': 'dark',
                    'selected': false
                }
            ]
        },
        {
            'label': '此项是radio单选',
            'id': '此项设置的id',
            'type': 'radio',
            'options': [
                {
                    'label': '跟随AcFun EvolvedR',
                    'value': 'hostedR',
                    'selected': true
                },
                {
                    'label': '自动R',
                    'value': 'autoR',
                    'selected': false
                },
                {
                    'label': '白天R',
                    'value': 'lightR',
                    'selected': false
                },
                {
                    'label': '黑夜R',
                    'value': 'darkR',
                    'selected': false
                }
            ]
        },
        {
            'label': '此项是输入框',
            'id': '此项设置的id',
            'type': 'input',
            'inputType': 'text',
            'value': '10'
        }
    ]
}
export const manifest = {
    name: '插件名',
    description: '插件描述',
    version: '0.0.1 插件版本',
    createdAt: '2024-02-16 创建日期',
    updatedAt: '2024-02-16 最近更新日期',
    iconName: 'pluginDefaultIcon 图标名，如果使用ACE Runtime提供的图标，只需要在这里提供名字即可，下面的icon必须为null',
    icon: '如果不使用ACE Runtime提供的图标，需要在这里提供图标的base64字符串，推荐128*128，上面的iconName必须为null',
    copyrightCaption: '(c)2023-2024 Nick Hsu, Licensed under MPL-2.0 版权声明',
    requestedAPIs: ['openDialog', '你所请求的API'],
    matches: ['*', '插件要运行的页面名'],
    author: 'Nick Hsu 作者',
    id: '@wenzi7777/ac_theme 插件id，必须为 @作者/插件名，仅能为英文',
    website: 'https://acfun-evolved.1205.moe/ 插件官网',
    settings: [
        {
            'label': '支持三种设置方式，这是下拉选择框',
            'id': '设置的id，必须要不一样，最好用你的插件名开头，例如wenzi7777AcThemeThemeSelect',
            'type': 'select',
            'options': [
                {
                    'label': '跟随AcFun Evolved',
                    'value': 'hosted',
                    'selected': true
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
            'label': '支持三种设置方式，这是单选器',
            'id': '设置的id，必须要不一样，最好用你的插件名开头，例如wenzi7777AcThemeThemeRadio',
            'type': 'radio',
            'options': [
                {
                    'label': '跟随AcFun Evolved',
                    'value': 'hosted',
                    'selected': true
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
            "label": "这是输入器",
            "id": "设置的id，必须要不一样，最好用你的插件名开头，例如wenzi7777AcThemeThemeInput",
            "type": "input",
            "inputType": "text 输入框类型",
            "value": "10 默认值，字符串"
        }
    ]
}
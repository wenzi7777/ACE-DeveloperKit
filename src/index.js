import lightCssCode from "./light.css"
import darkCssCode from "./dark.css"

const acTheme = async (injectCss, removeCss, currentThemeClass, manifest, getSelfPreference) => {
    let preference = await getSelfPreference(manifest)
    let themeSettings = preference[0].options
    themeSettings.forEach(option => {
        if (option.selected) {
            themeSettings = option.value
        }
    })
    if (themeSettings === 'hosted') {
        if ((await currentThemeClass()) === 'aceLight') {
            await injectCss(lightCssCode)
        }

        if ((await currentThemeClass()) === 'aceDark') {
            await injectCss(darkCssCode)
        }
    } else {
        if (themeSettings === 'light') {
            await injectCss(lightCssCode)
        }

        if (themeSettings === 'dark') {
            await injectCss(darkCssCode)
        }
    }
}

acTheme(injectCss, removeCss, currentThemeClass, manifest, getSelfPreference)
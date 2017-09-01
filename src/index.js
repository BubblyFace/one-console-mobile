import ELement from './component/ele.js'
import Resources from './component/resources.js'
import xhrElement from './component/xhr.js'
import Console from './component/console.js'
import TimeLine from './component/timeline.js'
import Main from './component/main.js'
import Menu from './component/menu.js'
import Coo from './component/cookie.js'
import LocalStorage from './component/localStorage.js'

import Cookies from 'js-cookie'
import './stylesheets/normalize.css'
import './stylesheets/style.css'
import {log, crtE, select, dynamicLoading} from './lib/util.js'


const __init = () => {
    //let main = __main()
    window.Cookies = Cookies
    let xhr = __xhrInit()
    let conl = __consoleInit()
    let resources = __resourcesInit()
    let menu = __menuInit()
    window.onload = () => {
        let body = select.E('body')
        dynamicLoading.css('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css')
        let mainContainer = crtE({
            classes : ['main-container']
        })
        let element = __domElementInit()
        //timeline 等待文档加载好输出
        let main = __main()
        let timeline = __timelineInit()
        let coo = __CooInit()
        let ls = __LocalStorageInit()
        let components = {
            console: conl,
            ele: element,
            resourse: resources,
            timeline: timeline,
            xhr: xhr,
            root: mainContainer,
            coo: coo,
            ls: ls,
        }
        body.appendChild(menu);
        new Main(components)
        body.appendChild(mainContainer);
    }
    
}

//stage_1
const __main = () => {
    let root = crtE({
        classes : ['main']
    })
    return root
}


const __domElementInit = () => {
    let __root = crtE({
        classes : ['elements_container','container']
    })
    new ELement({root: __root})
    return __root
}

const __consoleInit = () => {
    let __root = crtE({
        classes : ['console_container','container']
    })
    new Console({root: __root})
    return __root
}

const __xhrInit = () => {
    let __root = crtE({
        classes : ['xhr_container','container']
    })
    new xhrElement({root: __root})
    return __root
}

const __timelineInit = () => {
    let __root = crtE({
        classes : ['timeline_container','container']
    })
    new TimeLine({root: __root})
    return __root
}

const __resourcesInit = () => {
    let __root = crtE({
        classes : ['resources_container','container']
    })
    new Resources({root: __root})
    return __root
}

const __menuInit = () => {
    let __root = crtE({
        classes : ['menu_container']
    })
    new Menu({root: __root})
    return __root
}

const __CooInit = () => {
    let __root = crtE({
        classes : ['coo_container']
    })
    new Coo({root: __root})
    return __root
}

const __LocalStorageInit = () => {
    let __root = crtE({
        classes : ['ls_container']
    })
    new LocalStorage({root: __root})
    return __root
}

__init()


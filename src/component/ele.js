import {
    log,
    crtE,
    select,
    css,
    filterInheritedStyles
} from '../lib/util.js'
import Detail from './detail.js'
class ELement {
    constructor(props) {
        this.root = props.root
        this.container = crtE({
            classes: ['elements']
        })
        this.detail = crtE({
            classes: ['detail-container', 'ele-style']
        })
        this.__init()
    }
    eventBind(root) {
        let containers = root.querySelectorAll('.start-span')
        for (let i = 0; i < containers.length; i++) {
            containers[i].addEventListener('click', (e) => {
                if (containers[i].nextSibling.className.indexOf('hide') !== -1) {
                    containers[i].nextSibling.className = containers[i].nextSibling.className.replace(' hide', '')
                    containers[i].className = containers[i].className.replace(' icon-plus', ' icon-minus')
                } else {
                    containers[i].nextSibling.className += ' hide'
                    containers[i].className = containers[i].className.replace(' icon-minus', ' icon-plus')
                }
            })
        }
    }
    getText(e) {
        let ele = e
        let tagName = e.tagName.toLowerCase()
        let ele_attrs = ''
        let root = crtE({
            classes: "text-html",
        })
        for (let i = 0; i < e.attributes.length; i++) {
            ele_attrs += e.attributes[i].name + ":\"" + e.attributes[i].value + "\" "
        }
        let start = crtE({
            tagName: 'span',
            classes: ["start-span", 'icon-plus'],
            text: "<" + tagName + " " + ele_attrs + '>'
        })
        start.addEventListener('click',(event)=>{
            // let style_from_page = ele.style
            // let style_from_file = css(ele)
            // let computed_style = window.getComputedStyle(ele)
            // let arr = {}
            // log(style_from_page)
            // //从页面获取
            // for(let i in style_from_page){
            //     if(style_from_page[i] !== '' && typeof style_from_page[i] !== 'function'){
            //         arr[i] = computed_style[i]
            //     }
            // }
            // //从文件获取
            // let reg = new RegExp('\{(.| )+?\}')
            // for(let i in style_from_file){
            //     let s = style_from_file[i]
            //     let a = {}
            //     s.split("{")[1].split('}')[0].trim().split(';')
            //     for(let j = 0; j < s.length-1; j++){
            //         let p = s[j].split(':')[0].trim()
            //         arr[p] = computed_style[p]
            //     }
            // }
            //reg.exec()
            //str.split("{")[1].split('}')[0].trim().split(';')
            var arr =  filterInheritedStyles(ele)
            this.detail.updata(arr)
        })
        let content = crtE({
            tagName: 'span',
            classes: ["content-span", 'hide'],
        })

        let end = crtE({
            tagName: 'span',
            classes: "end-span",
            text: "<\/" + tagName + ">"
        })
        root.appendChild(start)
        root.appendChild(content)
        root.appendChild(end)
        return root
    }

    getElements(__root) {
        let textRoot = this.getText(__root)
        if (__root.children.length > 0) {
            for (let i = 0; i < __root.children.length; i++) {
                let t = textRoot.querySelector('.content-span')
                let c = this.getElements(__root.children[i])
                t.appendChild(c)
            }
        }
        return textRoot
    }

    clear() {
        this.container.innerHTML = ''
    }

    // goDetail(){
    //     let net = this.root.parentNode

    //     net.appendChild(this.detail)
    // }

    detailInit(){
        new Detail({
            root: this.detail
        })
    }
    __init() {
        this.detailInit()
        let __domRoot = select.E('html')
        let __content = this.getElements(__domRoot)
        this.root.appendChild(__content)
        this.root.appendChild(this.detail)
        this.eventBind(__content)
    }
}

export default ELement
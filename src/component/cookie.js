import {log, crtE, select} from '../lib/util.js'
import Detail from './detail.js'
class Coo {
    constructor(props) {
        this.root = props.root
        this.container = crtE({
            classes: ['resources']
        })
        this.detail = crtE({
            classes: ['detail-container']
        })
        this.nav = crtE({
            classes: ['common-nav'],
            text: 'Cookie'
        })
        this.__init()
    }

    createCookieDiv(cookies) {
        // log(cookies.length,cookies[0])
        // let cookieContainer = crtE({
        //     classes: ['cookie', 'item','box'],
        // })
        // for(let cookie in cookies){
        //     let cookie_div = crtE({
        //         classes: ['cookie-item'],
        //     })
        //     for(let i in cookie){
        //         let prop = crtE({
        //             classes: ['cookie-prop'],
        //         })
        //         prop.innerHTML = `<p>${cookie[i]}</p>`
        //         cookie_div.appendChild(prop)
        //         prop.addEventListener('click',(e) => {
        //             this.detail.updata(cookie)
        //             this.goDetail()
        //         })
        //     }
        //     cookieContainer.appendChild(cookie_div)
        // }
        // this.container.appendChild(cookieContainer)
        

        let cookieContainer = crtE({
            classes: ['cookie', 'item','box'],
        })
        
            for(let i in cookies){
                let prop = crtE({
                    classes: ['cookie-prop','item','box'],
                })
                prop.innerHTML = `<div>${i}</div><div>${cookies[i]}</div>`
                cookieContainer.appendChild(prop)
                prop.addEventListener('click',(e) => {
                    this.detail.updata(cookies)
                    this.goDetail()
                })
            }
        this.container.appendChild(cookieContainer)
    }


    clear() {
        this.container.innerHTML = ''
    }


    goDetail(){
        let net = this.root.parentNode
        net.innerHTML = '';
        net.appendChild(this.detail)
    }

    detailInit(){
        new Detail({
            root: this.detail
        })
    }

    __init() {
        setTimeout(() => {
            this.cookies = Cookies.get()
            this.createCookieDiv(this.cookies)
            this.detailInit()
            this.root.appendChild(this.nav)
            this.root.appendChild(this.container)

        },0)
    }
}

export default Coo
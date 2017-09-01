import {log, crtE, select} from '../lib/util.js'
import Detail from './detail.js'
class LocalStorage {
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
            text: 'LocalStorage'
        })
        this.ls = localStorage
        this.__init()
    }

    createLSDiv(ls) {
        let lsContainer = crtE({
            classes: ['local-storage'],
        })

        for(let i in ls){
            let prop = crtE({
                classes: ['ls-prop','item','box'],
            })
            prop.innerHTML = `<div>${i}</div><div>${ls[i]}</div>`
            lsContainer.appendChild(prop)
        }

        this.container.appendChild(lsContainer)
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
        setTimeout(()=>{
            this.ls = localStorage
            this.createLSDiv(this.ls)
            this.detailInit()
            this.root.appendChild(this.nav)
            this.root.appendChild(this.container)
        },0)
    }
}

export default LocalStorage
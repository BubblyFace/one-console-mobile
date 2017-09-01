import {log, crtE, select} from '../lib/util.js'
import Detail from './detail.js'
class Resources {
    constructor(props) {
        this.root = props.root
        this.container = crtE({
            classes: ['resources']
        })
        this.detail = crtE({
            classes: ['detail-container', 'ele-style']
        })
        this.nav = crtE({
            classes: ['common-nav'],
            text: 'Resource Timing'
        })
        this.resourcesList = performance.getEntries()
        this.__init()
    }

    createResourcesDiv(res) {
        let resouceContainer = crtE({
            classes: ['resource', 'item','box'],
        })
        for(let i in res){
            let prop = crtE({
                classes: ['res-prop'],
            })
            prop.innerHTML = `<p>${res[i]}</p>`
            resouceContainer.appendChild(prop)
        }
        resouceContainer.addEventListener('click',(e) => {
            this.detail.updata(res)
            this.goDetail()
        })
        return resouceContainer
    }

    clear() {
        this.container.innerHTML = ''
    }

    show() {
        this.container.innerHTML = ''
        for(let i in this.resourcesList){
            let resource = {}
            resource.time = this.resourcesList[i].responseEnd - this.resourcesList[i].responseStart
            resource.name = this.resourcesList[i].name.split('/').slice(-2,).join('/')
            resource.url = this.resourcesList[i].name
            let resDom = this.createResourcesDiv(resource)
            this.container.appendChild(resDom)
        }
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
        this.show()
        this.detailInit()
        setInterval(() => {
            if(this.resourcesList.length !== performance.getEntries()){
                this.resourcesList = performance.getEntries()
                this.show()
            }
        },1000)
        this.root.appendChild(this.nav)
        this.root.appendChild(this.container)
    }
}

export default Resources
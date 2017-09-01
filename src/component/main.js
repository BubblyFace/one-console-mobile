import {log, crtE, select} from '../lib/util.js'
class Main {
    constructor(props){
        this.console = props.console
        this.ele = props.ele
        this.resourse = props.resourse
        this.timeline = props.timeline
        this.xhr = props.xhr
        this.coo = props.coo
        this.ls = props.ls
        this.components = {
            console: [this.console],
            network: [this.resourse,this.xhr],
            element: [this.ele],
            timeline: [this.timeline],
            store: [this.coo,this.ls]
        }
        this.root = props.root
        this.container = crtE({
            classes : ['main']
        })
        this.init()
    }

    eventBind(){
        this.header.addEventListener('click', (e) => {
            //click style change
            e.target.innerText.toLowerCase()
            this.container.innerHTML = ''
            for(let i = 0; i < this.components[e.target.innerText.toLowerCase()].length; i++){
                this.container.appendChild(this.components[e.target.innerText.toLowerCase()][i])
            }
        })
    }

    createHeader(){
        let header = crtE({
            targetName: 'header',
            classes : ['common-header'],
        })
        let con = crtE({
            classes : ['header-item','switch-console'],
            text: 'Console',
        })
        let net = crtE({
            classes : ['header-item','switch-network'],
            text: 'Network',
        })
        let ele = crtE({
            classes : ['header-item','switch-element'],
            text: 'Element',
        })
        let time = crtE({
            classes : ['header-item','switch-timeline'],
            text: 'Timeline',
        })
        let store = crtE({
            classes : ['header-item','switch-store'],
            text: 'Store',
        })
        header.appendChild(con)
        header.appendChild(net)
        header.appendChild(ele)
        header.appendChild(time)
        header.appendChild(store)
        return header
    }

    init(){
        this.header = this.createHeader()
        this.root.appendChild(this.header)
        this.eventBind()
        this.container.appendChild(this.console)
        this.root.appendChild(this.container)
    }
}

export default Main
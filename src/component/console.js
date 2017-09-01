//复写log函数
import {
    log,
    crtE,
    select
} from '../lib/util.js'

class Console {
    constructor(props) {
        this.root = props.root
        this.container = crtE({
            classes: ['console']
        })
        this.__console = window.console
        this.__log = console.log
        this.__error = console.error
        this.__info = console.info
        this.__warn = console.warn
        this.message = []
        this.filters = {}
        //1:all,2:log,3:error,4:info,5:warn
        this.state = 'all'
        this.__overWriteLog()
        this.catchError()
        this.__init()
    }
    __overWriteLog() {
        console.log = (msg) => {
            let o = this.creatMsgDiv(msg, 'log')
            this.message.push(o)
            this.container.appendChild(o)
            this.__log(msg)
        }
        console.error = (msg) => {
            let o = this.creatMsgDiv(msg, 'error')
            this.message.push(o)
            this.container.appendChild(o)
            this.__error(msg)
        }
        console.info = (msg) => {
            let o = this.creatMsgDiv(msg, 'info')
            this.message.push(o)
            this.container.appendChild(o)
            this.__info(msg)
        }
        console.warn = (msg) => {
            let o = this.creatMsgDiv(msg, 'warn')
            this.message.push(o)
            this.container.appendChild(o)
            this.__warn(msg)
        }
    }
    catchError(){
        window.onerror = (e) => {
            console.error(e)
        }
    }
    creatMsgDiv(msg, type) {
        let msgContainer = crtE({
            classes: [type, 'item'],
        })
        msgContainer.innerHTML = `[<span class = "${type}" >${type}</span>] <p>${msg}</p>`
        return msgContainer
    }
    eventBind() {
        this.filters['clear'].addEventListener('click', () => {
            this.clear()
        })
        this.filters['all'].addEventListener('click', () => {
            this.container.innerHTML = ''
            for(let i = 0; i < this.message.length; i++){
                    this.container.appendChild(this.message[i])
            }
        })
        this.filters['error'].addEventListener('click', () => {
            this.container.innerHTML = ''
            for(let i = 0; i < this.message.length; i++){
                if(this.message[i].className.indexOf('error') !== -1){
                    this.container.appendChild(this.message[i])
                }
            }
        })
        this.filters['warning'].addEventListener('click', () => {
            this.container.innerHTML = ''
            for(let i = 0; i < this.message.length; i++){
                if(this.message[i].className.indexOf('warn') !== -1){
                    this.container.appendChild(this.message[i])
                }
            }
        })
        this.filters['info'].addEventListener('click', () => {
            this.container.innerHTML = ''
            for(let i = 0; i < this.message.length; i++){
                if(this.message[i].className.indexOf('info') !== -1){
                    this.container.appendChild(this.message[i])
                }
            }
        })
        this.filters['log'].addEventListener('click', () => {
            this.container.innerHTML = ''
            for(let i = 0; i < this.message.length; i++){
                if(this.message[i].className.indexOf('log') !== -1){
                    this.container.appendChild(this.message[i])
                }
            }
        })
    }
    createFilter() {
        this.filter = crtE({
            classes: ['filter', "clearfix"],
        })
        this.filters['clear'] = crtE({
            classes: ['filter_clear'],
        })
        this.filters['clear'].innerHTML = `<i class="fa fa-ban" aria-hidden="true"></i>`
        this.filters['all'] = crtE({
            classes: ['filter_all'],
            text: 'All'
        })
        this.filters['error'] = crtE({
            classes: ['filter_error'],
            text: 'Error'
        })
        this.filters['warning'] = crtE({
            classes: ['filter_warn'],
            text: 'Warning'
        })
        this.filters['info'] = crtE({
            classes: ['filter_info'],
            text: 'Info'
        })
        this.filters['log'] = crtE({
            classes: ['filter_log'],
            text: 'Log'
        })
        for (let i in this.filters) {
            this.filter.appendChild(this.filters[i])
        }
    }
    clear() {
        this.container.innerHTML = ''
        this.message = []
    }

    __init() {
        this.createFilter()
        this.eventBind()
        this.root.appendChild(this.filter)
        this.root.appendChild(this.container)
    }
}

export default Console
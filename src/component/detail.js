import {log, crtE, select} from '../lib/util.js'
class Detail {
    constructor(props) {
        this.data = props.data ? props.data : {}
        this.root = props.root
        this.container = crtE({
            classes: ['detail']
        })
        this.dataContainer = crtE({
            classes: ['data-container']
        })
        this.init()
    }

    //方法对外暴露 用来更换信息
    updata(data) {
        this.data = data
        let o = this.container
        o.innerHTML = ''
        this.filldata()
    }

    filldata(){
        let o = this.data
        for(let i in o){
            let d_item = crtE({
                classes: ['data-item','item','box']
            })
            d_item.innerHTML = `<div>${i}:</div><div>${o[i]}</div>`
            this.container.appendChild(d_item)
        }
    }

    init() {
        this.filldata()
        this.root.appendChild(this.container)
        this.root.updata = this.updata.bind(this)
    }
}

export default Detail
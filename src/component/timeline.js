import {log, crtE, select} from '../lib/util.js'
class TimeLine {
    constructor(props) {
        this.root = props.root
        this.container = crtE({
            classes: ['timeline']
        })
        this.timeArr = performance.timing
        this.__init()
    }
    creatTimeDiv() {
        let t_arr = this.timeArr
        let t_div_c = crtE({
            classes: ['timeline']
        })
        let requireTime = {
            'redirectTime': t_arr.redirectEnd - t_arr.redirectStart,
            'appcacheTime': t_arr.responseEnd - t_arr.responseStart,
            'unloadEventTime': t_arr.unloadEventEnd - t_arr.unloadEventStart,
            'lookupDomainTime': t_arr.domainLookupEnd - t_arr.domainLookupStart,
            'connectTime': t_arr.connectEnd - t_arr.connectStart,
            'requestTime': t_arr.responseEnd - t_arr.requestStart,
            'initDomTreeTime': t_arr.domComplete - t_arr.domInteractive,
            'loadEventTime': t_arr.loadEventEnd - t_arr.loadEventStart,}
        for(let i in requireTime){
            let t_div =  crtE({
                targetName: 'p',
                classes: ['timeline-item','item','box'],
            })
            t_div.innerHTML = `<div>${i}:</div> <div>${requireTime[i]}ms</div>`
            t_div_c.appendChild(t_div)
        }
        return t_div_c
    }
    show() {
        this.container.innerHTML = ''

    }

    __init() {
        this.root.appendChild(this.container)
        setTimeout(()=>{
            let times = this.creatTimeDiv()
            this.container.appendChild(times)
        },0)

    }
}

export default TimeLine
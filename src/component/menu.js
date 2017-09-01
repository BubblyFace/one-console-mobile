import {
    log,
    crtE,
    select
} from '../lib/util.js'
class Menu {
    constructor(props) {
        this.root = props.root
        this.state = false
        this.container = crtE({
            classes: ['common-menu']
        })
        this.init()
    }
    eventBind(){
        this.container.querySelector('#menu-open').addEventListener('click', ()=>{
            if(!this.state){
                document.querySelector('.main-container').style.visibility = 'visible'
                this.state = !this.state
            }else{
                document.querySelector('.main-container').style.visibility = 'hidden'
                this.state = !this.state
            }
        })
        this.container.querySelector('#open-console').addEventListener('click', ()=>{
            log(1)
            select.E('.switch-console').click()
        })
        this.container.querySelector('#open-timeline').addEventListener('click', ()=>{
            log(2)
            select.E('.switch-timeline').click()
        })  
        this.container.querySelector('#open-network').addEventListener('click', ()=>{
            log(3)
            select.E('.switch-network').click()
        })
        this.container.querySelector('#open-element').addEventListener('click', ()=>{
            log(4)
            select.E('.switch-element').click()
        })
    }
    init() {
        this.container.innerHTML = `<nav class="menu">
        <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
        <label class="menu-open-button" for="menu-open">
         <span class="lines line-1"></span>
         <span class="lines line-2"></span>
         <span class="lines line-3"></span>
       </label>
     
        <a href="#" class="menu-item blue" id="open-console"> <i class="fa fa-code"></i> </a>
        <a href="#" class="menu-item green" id="open-timeline"> <i class="fa fa-history"></i> </a>
        <a href="#" class="menu-item red" id="open-network"> <i class="fa fa-file"></i> </a>
        <a href="#" class="menu-item purple" id="open-element"> <i class="fa fa-html5"></i> </a>
     </nav>`
        this.root.appendChild(this.container)
        this.eventBind()
    }
}

export default Menu
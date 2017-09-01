import {
    log,
    crtE,
    select
} from '../lib/util.js'

import Detail from './detail.js'
import * as tool from '../lib/tool.js';
class xhrElement {
    constructor(props) {
        this.root = props.root
        this.container = crtE({
            classes: ['xhr']
        })
        this.detail = crtE({
            classes: ['detail-container']
        })
        this.nav = crtE({
            classes: ['common-nav'],
            text: 'XMLHttpRequest'
        })
        this.reqList = {}
        this.resourcesList = {}
        //复制 一份xhr
        this.__init()
    }
    creatXHRDiv(req) {
        let XHRContainer = crtE({
            classes: ['req', 'box'],
        })
        for (let i in req) {
            if(i !== 'postData' && i !== 'response'){
                let prop = crtE({
                    classes: ['req-prop'],
                })
                prop.innerHTML = `<p>${req[i]}</p>`
                XHRContainer.appendChild(prop)
            }
        }

        XHRContainer.addEventListener('click',(e) => {
            if(!req.postData){
                this.detail.updata(req)
            }else{
                req.postData.response = req.response
                this.detail.updata(req.postData)
            }
            this.goDetail()
        })

        return XHRContainer
    }
    clear() {
        this.container.innerHTML = ''
    }
    show() {
        this.container.innerHTML = ''
        for (let i in this.reqList) {
            let req = {}
            req.name = 'test'
            req.status = this.reqList[i].status
            req.method = this.reqList[i].method
            req.time = this.reqList[i].endTime - this.reqList[i].startTime
            req.url = this.reqList[i].url
            if(this.reqList[i].method === 'POST'){
                req.postData = this.reqList[i].postData
                req.response = this.reqList[i].response
            }
            let reqDom = this.creatXHRDiv(req)
            this.container.appendChild(reqDom)
        }
    }

    goDetail() {
        let net = this.root.parentNode
        net.innerHTML = '';
        net.appendChild(this.detail)
    }

    detailInit() {
        new Detail({
            root: this.detail
        })
    }

    updateRequest(id, data) {
        let item = this.reqList[id] || {};
        for (let key in data) {
            item[key] = data[key];
        }
        this.reqList[id] = item;
        //updata dom
        this.clear()
        this.show()
    }

    mockAjax() {
        let _XMLHttpRequest = window.XMLHttpRequest;
        if (!_XMLHttpRequest) {
            return;
        }
        let that = this;
        let _open = window.XMLHttpRequest.prototype.open,
            _send = window.XMLHttpRequest.prototype.send;
        that._open = _open;
        that._send = _send;
        window.XMLHttpRequest.prototype.open = function () {
            let XMLReq = this;
            let args = [].slice.call(arguments),
                method = args[0],
                url = args[1],
                id = that.getUniqueID();

            // may be used by other functions
            XMLReq._requestID = id;
            XMLReq._method = method;
            XMLReq._url = url;

            // mock onreadystatechange
            let _onreadystatechange = XMLReq.onreadystatechange || function () {};
            XMLReq.onreadystatechange = function () {

                let item = that.reqList[id] || {};

                // update status
                item.readyState = XMLReq.readyState;
                item.status = XMLReq.status;
                item.responseType = XMLReq.responseType;

                if (XMLReq.readyState == 0) {
                    // UNSENT
                    item.startTime = (+new Date());
                } else if (XMLReq.readyState == 1) {
                    // OPENED
                    item.startTime = (+new Date());
                } else if (XMLReq.readyState == 2) {
                    // HEADERS_RECEIVED
                    item.header = {};
                    let header = XMLReq.getAllResponseHeaders() || '',
                        headerArr = header.split("\n");
                    // extract plain text to key-value format
                    for (let i = 0; i < headerArr.length; i++) {
                        let line = headerArr[i];
                        if (!line) {
                            continue;
                        }
                        let arr = line.split(': ');
                        let key = arr[0],
                            value = arr.slice(1).join(': ');
                        item.header[key] = value;
                    }
                } else if (XMLReq.readyState == 3) {
                    // LOADING
                } else if (XMLReq.readyState == 4) {
                    // DONE
                    item.endTime = +new Date(),
                        item.costTime = item.endTime - (item.startTime || item.endTime);
                    item.response = XMLReq.response;
                }

                if (!XMLReq._noVConsole) {
                    that.updateRequest(id, item);
                }
                return _onreadystatechange.apply(XMLReq, arguments);
            };

            return _open.apply(XMLReq, args);
        };

        // mock send()
        window.XMLHttpRequest.prototype.send = function () {
            let XMLReq = this;
            let args = [].slice.call(arguments),
                data = args[0];

            let item = that.reqList[XMLReq._requestID] || {};
            item.method = XMLReq._method.toUpperCase();

            let query = XMLReq._url.split('?'); // a.php?b=c&d=?e => ['a.php', 'b=c&d=', '?e']
            item.url = query.shift(); // => ['b=c&d=', '?e']

            if (query.length > 0) {
                item.getData = {};
                query = query.join('?'); // => 'b=c&d=?e'
                query = query.split('&'); // => ['b=c', 'd=?e']
                for (let q of query) {
                    q = q.split('=');
                    item.getData[q[0]] = q[1];
                }
            }

            if (item.method == 'POST') {

                // save POST data
                if (tool.isString(data)) {
                    let arr = data.split('&');
                    item.postData = {};
                    for (let q of arr) {
                        q = q.split('=');
                        item.postData[q[0]] = q[1];
                    }
                } else if (tool.isPlainObject(data)) {
                    item.postData = data;
                }

            }

            if (!XMLReq._noVConsole) {
                that.updateRequest(XMLReq._requestID, item);
            }

            return _send.apply(XMLReq, args);
        };
    }
    getUniqueID() {
        let id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return id;
    }

    __init() {
        this.detailInit()
        this.mockAjax()
        this.root.appendChild(this.nav)
        this.root.appendChild(this.container)
    }
}

export default xhrElement
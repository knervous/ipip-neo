import { VERSION } from 'api'
import axios from 'axios'
import qs from 'query-string'
import * as util from 'utilities'

/**
 * Display HTTP errors
 * @param {Error} err 
 */
function showError(err){   
    try {
        let config = err.config
        let anchor = document.createElement("a")
        anchor.href = config.url

        let action = config.method.toUpperCase() + ' ' + anchor.pathname           
        let message = util.safely(
            () => `HTTP Error (${err.response.status}) while performing ${action}`, 
            () => `HTTP Error while performing ${action}`
        )

        util.error(message)   
    }
    catch(e){
        console.error(err)
        util.error(`${err}`)
    }
}

/**
 * Add the api prefix to urls.
 * If making a GET request, add `data` to the querystring
 * @param {string} method 
 * @param {string} url 
 * @param {object} data 
 */
function buildUrl(method, url, data){
    if (util.toLower(method) === 'get' && data != null && !url.includes('?')) 
        return `/api/${VERSION}${url}?${qs.stringify(data)}`    
    else
        return `/api/${VERSION}${url}`
}

/**
 * Perform HTTP requests using axios. 
 * Handles errors as defined above
 * @param {string} method HTTP method
 * @param {string} url
 * @param {object} data JSON data (for GET requests, parsed into a query string)
 * @param {object} config other axios settings
 */
async function http(method, url, data=null, config={}){
    try{
        url = buildUrl(method, url, data)
        return await axios({ method, url, data, ...config }) 
    }
    catch(e){ showError(e) }   
    return null
}

export default http
export * from 'utilities/case'
export * from 'utilities/toaster'

/** 
 * Test if in development mode
 */
export const isDev = () => process.env.NODE_ENV === 'development'

/**
 * Test if a value is a string
 * @param {*} val 
 */
export const isString = (val) => (typeof val === 'string' || val instanceof String)

/**
 * Wrap a small section of code in a try-catch.
 * Also useful for a series of nested try-catches.
 * Accepts any number of exception handlers, and tries them in order.
 * Returns the value of the first function that doesn't crash, or null.
 * @param {function} func Code to try
 * @param {function} except Exception handlers
 * 
 * @example 
 * 
 * let properties = util.safely(() => obj.may.not.have.these.properties)
 * 
 * @example
 * 
 * util.safely(() => this.ref_may_be_unmounted.doSomething())
 * 
 * @example
 *  
 * let value = util.safely(
 *   () => this.crashes(),
 *   () => { throw new Error() },
 *   () => data.value
 * )
 */
export function safely(func, ...except){
    try{ return func() }
    catch(e){
        switch(except.length){
            case 0: return null
            default: return safely(except[0], ...except.slice(1))
        }
    }
}

/**
 * Round to a specific digit or decimal place
 * @param {number} val Value to round 
 * @param {number} pow Position to round to (power of 10)
 * @param {string} dir Direction to round ('up' or 'down'). Leave out to round normally
 */
export function round(val, pow=0, dir=''){    
    let mult = Math.pow(10, -pow)
    switch(dir){
        case 'up': return Math.ceil(mult * val) / mult
        case 'down': return Math.floor(mult * val) / mult
        default: return Math.round(mult * val) / mult
    }    
}

/**
 * Make an assertion
 * @param {bool} assertion Thing that must be true 
 * @param {string} message Error message
 */
export function assert(assertion, message=null){
    if (!assertion)
        throw new Error(message)
}

/**
 * Set the state of a react component asynchronously.
 * Compatible with async/await
 * @param {*} component React component
 * @param {*} state
 */
export async function setStateAsync(component, state){
    await new Promise(resolve => component.setState(state, resolve))
}
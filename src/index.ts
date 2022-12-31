import * as R from 'ramda'
import * as Winston from 'winston'

const {createLogger, format} = Winston

const enumerateErrorFormat = format((info) => {
    R.forEachObjIndexed((value, key) => {
        if (info[key] instanceof Error) {
            info[key] = {
                message: info[key].message,
                stack: info[key].stack, ...info[key]
            }
        }
    }, info)

    return info
})
export const logger = createLogger({
    format: format.combine(
        enumerateErrorFormat(),
        format.json()
    ),
    transports: [new Winston.transports.Console()]
})


import * as R from 'ramda'
import * as Winston from 'winston'

const {createLogger, format} = Winston

const enumerateErrorFormat = format((info) => {
    return R.map(value => {
        if (value instanceof Error) {
            return {
                message: value.message,
                stack: value.stack,
                ...value
            }
        }
        return value
    }, info)
})

export const logger = createLogger({
    format: format.combine(
        enumerateErrorFormat(),
        format.json()
    ),
    transports: [new Winston.transports.Console()]
})

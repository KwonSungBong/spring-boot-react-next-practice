const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
    return sleep(1000).then(() => {
        // simulate server latency
        if (['john', 'paul', 'george', 'ringo'].includes(values.subject)) {
            throw { subject: 'That subject is taken' }
        }
    })
}

export default asyncValidate

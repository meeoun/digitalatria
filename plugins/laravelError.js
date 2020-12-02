export default ({ app }, inject) => {
  inject('laravelError', (msg) => {
    let string = ""

    if(msg.errors)
    {
      for (const property in msg.errors) {
        for(let i =0, len = msg['errors'][property].length; i < len; i++)
        {
          string += msg['errors'][property][i] + '\n'
        }
      }
    }
    return string
  })
}

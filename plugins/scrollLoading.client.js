export default ({ app }, inject) => {
  inject('loadScrollBar', (element, position) => {
    let current = element.style.overflowY
    if(current === 'hidden'){
      element.style.overflowY = 'auto'
      element.scrollTo(0,position)
    }else{
      element.scrollTo(0,0);
      element.style.overflowY = 'hidden'
    }
  })
}

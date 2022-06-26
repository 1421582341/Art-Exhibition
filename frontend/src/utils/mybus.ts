import mitt from 'mitt'
const Emit = mitt()
const mybus: any = {
  on: Emit.on,
  emit: Emit.emit,
  off: Emit.off
}
export default mybus
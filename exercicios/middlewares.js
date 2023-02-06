// constante recebe a funcao com os paramentros ctx=contexto e os middlewares que seream executados
const exec = (ctx, ...middlewares) => {
    const run = current => {
        //verificação se o middlewares estao setados e o middleware corrente e menor que os middlewares do array
        middlewares && current < middlewares.length &&
            //middleware corrente vai receber o contexto e chamar o proximo middleware
            middlewares[current](ctx, () => run(current + 1))
    }
    run(0)
}

const mid1 = (ctx, next) => {
    ctx.info1 = 'mid1'
    next()
}
const mid2 = (ctx, next) => {
    ctx.info2 = 'mid2'
    next()

}
const mid3 = ctx => ctx.info3 = 'mid3'

const ctx = {}
exec(ctx, mid1, mid2, mid3)
console.log(ctx)
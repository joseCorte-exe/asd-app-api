import { ExecutionContext, Hono } from 'hono'
import { d1, initializeD1 } from './database/d1'
import { AnalysisModule } from './modules/analysis/analysis.module'
import { createAnalysisController } from './modules/analysis/use-cases/create-analysis/create-analysis.factory'

const app = new Hono<HonoType>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const analysisModule = new AnalysisModule(createAnalysisController)
analysisModule.configureRoutes(app)

export default {
  ...app,
  fetch: (req: Request, env: Env, ctx: ExecutionContext) => {
    console.log(env.DB)
    initializeD1(env.DB)
    console.log(d1)
    return app.fetch(req, env, ctx)
  },
}

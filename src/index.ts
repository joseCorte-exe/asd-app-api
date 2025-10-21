import { Hono } from 'hono'
import { initializeD1 } from './database/d1'
import { setR2 } from './database/r2'
import { AnalysisModule } from './modules/analysis/analysis.module'
import { createAnalysisController } from './modules/analysis/use-cases/create-analysis/create-analysis.factory'

const app = new Hono<HonoType>()

app.use('*', async (c, next) => {
  initializeD1(c.env.DB)
  setR2(c.env.R2)

  await next()
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const analysisModule = new AnalysisModule(createAnalysisController)

analysisModule.configureRoutes(app)

export default app

import { Breadcrumb, Page, QueryForm } from "components"
import { Database } from "phosphor-react"

export const QueriesPage = () => {
  return (
    <Page className="gap-10">
      <Breadcrumb icon={Database} label="URL Queries" />

      <QueryForm />
    </Page>
  )
}

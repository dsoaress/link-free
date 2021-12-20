import { fetchData } from 'services/fetchData'

import type { GetStaticProps } from 'next'

export default function InternalErrorPage() {
  return <div>Internal server error</div>
}

export const getStaticProps: GetStaticProps = async () => {
  const initialData = await fetchData()
  return { props: { initialData }, revalidate: 1 }
}

import { fetchData } from 'services/fetchData'

import type { GetStaticProps } from 'next'

export default function NotFoundPage() {
  return <div>Not found</div>
}

export const getStaticProps: GetStaticProps = async () => {
  const initialData = await fetchData()
  return { props: { initialData }, revalidate: 1 }
}

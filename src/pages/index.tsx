import { Home } from 'components/Home'
import { fetchData } from 'services/fetchData'

import type { GetStaticProps } from 'next'

export default function HomePage() {
  return <Home />
}

export const getStaticProps: GetStaticProps = async () => {
  const initialData = await fetchData()
  return { props: { initialData }, revalidate: 1 }
}

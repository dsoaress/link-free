import { GetStaticProps } from 'next'

import { Home } from '../components/Home'
import { useFetchData } from '../hooks/useFetchData'
import { fetchData } from '../services/fetchData'
import type { Data } from '../types/Data'

type HomePageProps = {
  data: Data
}

export default function HomePage({ data }: HomePageProps) {
  useFetchData(data)
  return <Home />
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData()

  return {
    props: { data },
    revalidate: 1
  }
}

import { Dash } from 'components/Dash'
import { fetchData } from 'services/fetchData'

import type { GetServerSideProps } from 'next'
import type { Data } from 'types/Data'

type DashPageProps = {
  initialData: Data
}

export default function DashPage({ initialData }: DashPageProps) {
  return <Dash initialData={initialData} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const initialData = await fetchData()
  return { props: { initialData } }
}

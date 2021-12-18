import { GetServerSideProps } from 'next'

import { Dash } from '../components/Dash'
import { fetchData } from '../services/fetchData'

export default function DashPage() {
  return <Dash />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const initialData = await fetchData()

  return {
    props: { initialData }
  }
}

import React, { lazy, useEffect, Suspense } from 'react'
import { Head } from '../Components/Helper/Head'
import { useFetch } from '../Hooks/useFetch'
import { GET_STATS } from '../api';
import { Loading } from '../Components/Helper/Loading';
import { Error } from '../Components/Helper/Error';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

export const UserStats = () => {

  const {data, error, loading, request} = useFetch();
  useEffect(()=>{
    async function getData() {
      const {url, options} =GET_STATS();
      await request(url,options)
    }
    getData()
  },[request])


  if(loading) return <Loading/>
  if(error) return <Error error={error}/>
  if(data)
  return (
    
    <React.Suspense fallback={<div></div>}>
      <Head title='Estatisticas' />
      <UserStatsGraphs data={data}/>
    </React.Suspense>
  );
  else return null
}

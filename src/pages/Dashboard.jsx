import React from 'react'
import AppLayout from '../layouts/AppLayout'
import DataCard from '../components/DataCard/index'
import TransactionItem from '../components/TransactionItem/index'
import RefererCard from '../components/RefererCard/index'

function Dashboard() {
  return (
    <AppLayout>
      <div className='flex justify-center items-center flex-col mt-8 sm:flex-row flex-wrap'>
        <DataCard title="Balance" content="$3400" className="w-full m-4 bg-indigo-700 rounded-lg text-white"/>
        <DataCard title="Profit" content="$1000" className="w-full m-4 bg-indigo-700 rounded-lg text-white"/>
        <DataCard title="Bonus" content="$900" className="w-full m-4 bg-indigo-700 rounded-lg text-white"/>
      </div>

      <div className='sm:mt-12 lg:flex lg:justify-center pr-12 pl-12 lg:pl-40 lg:pr-40'>
        <div className='flex justify-center flex-col gap-3 lg:w-2/3 lg:pr-12'>
          <h1 className='font-bold text-lg'>Transactions</h1>
          <TransactionItem time="3rd September 2022" variant="credit" amount="$300"/>
          <TransactionItem time="3rd September 2022" variant="debit" amount="-$300"/>
          <TransactionItem time="3rd September 2022" variant="debit" amount="$-300"/>
          <TransactionItem time="3rd September 2022" variant="credit" amount="$300"/>
        </div>
        <div className='mt-4 lg:mt-10'>
          <RefererCard></RefererCard>
        </div>
      </div>
    </AppLayout>
  )
}

export default Dashboard
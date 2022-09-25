import React, { useState, useContext, useEffect } from 'react';
import SanityClient from '../client';
import { AppContext } from '../../Mycontext/text';
export default function StakeWithUs() {
  const { color } = useContext(AppContext);

  ///This function is used to fetch data from sanity as MainnetPage
  const [mp, setmp] = useState(null);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type=='mainnet']
      {
        name,
        url,
        poster{asset->{url}},
      }`
    )
      .then((data) => setmp(data))
      .catch(console.error);
  }, [])

  ///This function is used to fetch data from sanity as TestnetPage
  const [tp, settp] = useState(null);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type=='testnet']
      {
        name,
        url,
        poster{asset->{url}},
      }`
    )
      .then((data) => settp(data))
      .catch(console.error);
  }, [])

  ///This function is used to fetch data from sanity as ArchivePage
  const [ap, setap] = useState(null);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type=='archive']
            {
              name,
              url,
              poster{asset->{url}},
            }`
    )
      .then((data) => setap(data))
      .catch(console.error);
  }, [])



  //This function switches between the pages of stake with us
  const Get1 = document.getElementById("Main");
  const Get2 = document.getElementById("Test");
  const Get4 = document.getElementById("Archive");

  function Change() {
    Get1.style.display = "grid"
    Get2.style.display = "none"
    Get4.style.display = "none";
  }

  function change2() {
    Get2.style.display = "grid";
    Get1.style.display = "none"
    Get4.style.display = "none";
  }


  function change4() {
    Get4.style.display = "grid";
    Get1.style.display = "none"
    Get2.style.display = "none"
  }

  return (

    <div className="flex flex-col w-full items-center h-full">
      <h1 style={{ color: color ? "white" : "" }} className="flex flex-col items-center font-sans pb-16 text-3xl after:content[''] after:w-full after:h-1.5 after:mt-12  after:bg-[#1569BF] md:text-5xl">Stake With Us</h1>
      <div className="flex flex-col w-full items-center">
        <div id='Networks' style={{ color: color ? "white" : "" }} className="flex flex-col gap-y-20 items-center w-full justify-center md:flex-row ">
          <h2 onClick={Change} className='options w-1/2 items-center Shadow text-3xl cursor-pointer rounded-md border-none  md:2xl md:w-1/6'>Mainnet</h2>
          <h2 onClick={change2} className='options w-1/2 Shadow text-3xl cursor-pointer rounded-md border-none  md:2xl md:w-1/6'>Testnet</h2>
          <h2 onClick={change4} className='options w-1/2 Shadow text-3xl cursor-pointer rounded-md border-none  md:2xl md:w-1/6'>Archive</h2>
        </div>

        <div class="mt-20 mb-20 inline-grid grid-cols-2 gap-4 w-5/6 md:grid-cols-5 md:gap-10 sm:grid-cols-3" id="Main">
          {
            mp && mp.map((pm) => (
              <div key={pm} class=" justify-between pt-3 pb-3 bg-white w-full flex flex-col items-center border-2 border-none  rounded-xl hover:border-solid hover:border-gray-600">
                <a className='w-3/5' href={pm.url} target="_blank">
                  <img src={pm.poster.asset.url} alt="poster-image" />
                </a>
                <h2 className='options text-xl font-light text-center'>{pm.name}</h2>
              </div>
            ))
          }
        </div>

        <div class="mt-20 mb-20 inline-grid grid-cols-2 gap-4 w-5/6 md:grid-cols-5 md:gap-10 sm:grid-cols-3" id="Test">
          {
            tp && tp.map((pt) => (
              <div key={pt} class=" justify-between pt-3 pb-3 bg-white w-full flex flex-col items-center border-2 border-none  rounded-xl hover:border-solid hover:border-gray-600">
                <a className='w-3/5' href={pt.url} target="_blank">
                  <img src={pt.poster.asset.url} alt="poster-image" />
                </a>
                <h2 className='options text-xl font-light text-center'>{pt.name}</h2>
              </div>
            ))
          }
        </div>

        <div class="mt-20 mb-20 inline-grid grid-cols-2 gap-4 w-5/6 md:grid-cols-5 md:gap-10 sm:grid-cols-3" id="Archive">
          {
            ap && ap.map((pa) => (
              <div key={pa} class=" justify-between pt-3 pb-3 bg-white w-full flex flex-col items-center border-2 border-none  rounded-xl hover:border-solid hover:border-gray-600">
                <a className='w-3/5' href={pa.url} target="_blank">
                  <img src={pa.poster.asset.url} alt="poster-image" />
                </a>
                <h2 className='options text-xl font-light text-center'>{pa.name}</h2>
              </div>
            ))
          }
        </div>

      </div>
    </div>

  )
}
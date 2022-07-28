import Head from 'next/head';
import Script from 'next/script';

export const Meta = () => {
  return (
    <Head>
      <title>iLZOM DAO</title>
      <meta
        name='description'
        content='iLZOM DAO는 Web3 기반인 한국 유학생들의 프로젝트 참여와 네트워킹을 위한 장입니다. 창의적이고 선두적인 디지털 단체입니다.'
      />

      <meta property='og:title' content='ilzom' />
      <meta
        property='og:description'
        content='iLZOM DAO는 Web3 기반인 한국 유학생들의 프로젝트 참여와 네트워킹을 위한 장입니다. 창의적이고 선두적인 디지털 단체입니다.'
      />
      <meta
        property='og:image'
        content='../assets/illustrations/ilzom_orange.png'
      />
      <meta property='og:url' content='https://ilzom-homepage.vercel.app/' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='ilzom' />
      <meta
        name='twitter:description'
        content='iLZOM DAO는 Web3 기반인 한국 유학생들의 프로젝트 참여와 네트워킹을 위한 장입니다. 창의적이고 선두적인 디지털 단체입니다.'
      />
      <meta
        name='twitter:image'
        content='../assets/illustrations/ilzom_orange.png'
      />
      <meta property='og:type' content='website' />

      <link rel='icon' href='/favicon.ico' />

      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js'
        integrity='sha512-YSdqvJoZr83hj76AIVdOcvLWYMWzy6sJyIMic2aQz5kh2bPTd9dzY3NtdeEAzPp/PhgZqr4aJObB3ym/vsItMg=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
        strategy='afterInteractive'
      ></Script>
    </Head>
  );
};

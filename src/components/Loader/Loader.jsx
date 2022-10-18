import { TailSpin } from 'react-loader-spinner';

export const Loader = () => (
  <TailSpin
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{ margin: '0 auto' }}
    wrapperClass=""
    visible={true}
  />
);

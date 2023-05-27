// import React from 'react';
// import { LoaderBackdrop } from './Loader.styled';
// // import DotLoader from 'react-spinners/DotLoader';

// export const Loader = () => {
//   return (
//     <LoaderBackdrop>
//       {/* <DotLoader
//         color="#f68000"
//         size={150}
//         cssOverride={{ position: 'absolute', top: '25%', left: '45%' }}
//       /> */}
//     </LoaderBackdrop>
//   );
// };
import { LoaderBackdrop } from './Loader.styled';
import { Vortex } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderBackdrop>
     <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </LoaderBackdrop>
  );
};
export default Loader;
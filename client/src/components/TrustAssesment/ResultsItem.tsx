// import type { TResultItem } from 'librechat-data-provider';

// type TResultsItemProps = {
//   result: TResultItem;
// };

// function ResultsItem({ result }: TResultsItemProps) {
//   return (
//     <>
//       <div className="flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-pink-500 dark:bg-gray-700">
//         <div className="flex gap-4">
//           <div className="flex min-w-0 flex-col items-start justify-between">
//             <div className="mb-2 line-clamp-1 max-w-full text-lg leading-5 text-gray-700/80 dark:text-gray-50">
//               {result.name}
//             </div>
//             <div className="text-sm text-gray-700/70 dark:text-gray-50/70">
//               Score: {result.score}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ResultsItem;

// import type { TResultItem } from 'librechat-data-provider';

// type TResultsItemProps = {
//   result: TResultItem;
// };

// function ResultsItem({ result }: TResultsItemProps) {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center gap-2 rounded border border-black/10 bg-white p-6 dark:border-pink-500 dark:bg-gray-700">
//         <div className="text-2xl font-bold text-gray-700/80 dark:text-gray-50">
//           {result.name}
//         </div>
//         <div className="text-4xl font-bold text-gray-700/70 dark:text-gray-50/70">
//           Score: {result.score}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ResultsItem;

// import type { TResultItem } from 'librechat-data-provider';

// type TResultsItemProps = {
//   result: TResultItem;
// };

// function ResultsItem({ result }: TResultsItemProps) {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center gap-2 rounded border border-black/10 bg-white p-4 dark:border-pink-500 dark:bg-gray-700 h-3/4 w-3/4">
//         <div className="text-xl font-bold text-gray-700/80 dark:text-gray-300">
//           {result.name}
//         </div>
//         <div className="text-3xl font-bold text-gray-700/70 dark:text-gray-50">
//           {result.score}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ResultsItem;

import type { TResultItem } from 'librechat-data-provider';

type TResultsItemProps = {
  result: TResultItem;
};

function ResultsItem({ result }: TResultsItemProps) {
  const scorePercentage = (result.score * 100).toFixed(2);

  // let scoreColor = 'text-red-500';
  // if (result.score >= 0.7) {
  //   scoreColor = 'text-green-500';
  // } else if (result.score >= 0.4) {
  //   scoreColor = 'text-yellow-500';
  // }
  
  let backgroundColorClass = '';
  if (result.score >= 0.7) {
    backgroundColorClass = 'bg-green-500';
  } else if (result.score >= 0.4) {
    backgroundColorClass = 'bg-yellow-500';
  } else {
    backgroundColorClass = 'bg-red-500';
  }

  return (
    <>
      {/* <div className="flex flex-col items-center justify-center gap-2 rounded border border-black/10 bg-white p-3 dark:border-pink-500 dark:bg-gray-700 h-3/4 w-3/4"> */}
      <div className={`flex flex-col items-center justify-center gap-2 rounded border border-black/10 p-3 dark:border-pink-500 w-3/4 h-3/4 ${backgroundColorClass}`}>
        <div className="text-lg font-bold text-gray-700/80 dark:text-gray-50">
          {result.name}
        </div>
        {/* <div className={`text-3xl font-bold ${scoreColor}`}> */}
        <div className={`text-3xl font-bold text-gray-700/70 dark:text-gray-50`}>
          {scorePercentage}%
        </div>
      </div>
    </>
  );
}

export default ResultsItem;

